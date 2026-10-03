// Headless check for read-aloud.js on any page (uses a simulated voice, so it runs
// in CI/sandboxes with no audio). Verifies: Listen button → player, the highlighted
// word advances in order (with and without word events), pause / previous / resume /
// speed / close / resume-at-saved-sentence, no DOM changes while reading (Highlight
// API) or exact restore (fallback), no horizontal overflow and the spoken word kept
// visible at phone, phone-landscape, iPad and desktop sizes in light and dark.
//
// Usage: node check.mjs <url-or-html-file> [--target ".card"] [--chromium /path/to/chrome] [--shots out-dir]
//   --target  selector of an element to read (default: the element owning the first .ra-btn)
import fs from 'fs'; import path from 'path'; import { createRequire } from 'module'; import { pathToFileURL } from 'url';
const require = createRequire(import.meta.url);
const args = process.argv.slice(2); const opt = k => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const src = args.find(a => !a.startsWith('--') && args[args.indexOf(a) - 1] !== '--target' && args[args.indexOf(a) - 1] !== '--chromium' && args[args.indexOf(a) - 1] !== '--shots');
if (!src) { console.log('usage: node check.mjs <url-or-html-file> [--target sel] [--chromium path] [--shots dir]'); process.exit(2); }
const url = /^(https?|file):/.test(src) ? src : pathToFileURL(path.resolve(src)).href;
let pw; for (const p of ['playwright', '/opt/node22/lib/node_modules/playwright', '@playwright/test']) { try { pw = require(p); break; } catch (e) { } }
if (!pw) { console.log('Playwright not found: npm i -D playwright (then: npx playwright install chromium)'); process.exit(2); }
const exe = opt('--chromium') || process.env.CHROMIUM_PATH || ['/opt/pw-browsers/chromium-1194/chrome-linux/chrome', '/opt/pw-browsers/chromium'].find(p => fs.existsSync(p));
const browser = await pw.chromium.launch(exe ? { executablePath: exe } : {});
const shots = opt('--shots'); if (shots) fs.mkdirSync(shots, { recursive: true });
const TARGET = opt('--target');
const results = []; const ok = (name, pass, info) => { results.push([pass, name, info || '']); console.log((pass ? 'PASS ' : 'FAIL ') + name + (info ? '  — ' + info : '')); };

// simulated speechSynthesis: words take a realistic time; optionally sends word events
const mock = ({ boundary, noHighlightApi }) => {
  if (noHighlightApi) { try { delete window.Highlight; } catch (e) { } try { Object.defineProperty(window, 'Highlight', { value: undefined }); } catch (e) { } }
  window.__said = [];
  const ss = { speaking: false, pending: false, paused: false, cur: null,
    getVoices: () => [{ name: 'Mock English', lang: 'en-US', localService: true, default: true }, { name: 'Mock Arabic', lang: 'ar-SA', localService: true }],
    addEventListener() { }, removeEventListener() { }, pause() { this.paused = true; }, resume() { this.paused = false; },
    speak(u) {
      this.speaking = true; this.cur = u; window.__said.push({ text: u.text, rate: u.rate, lang: u.lang, voice: u.voice && u.voice.name });
      const me = u, T = (f, t) => setTimeout(() => { if (this.cur === me) f(); }, t);
      T(() => me.onstart && me.onstart(), 40); let t = 40; const re = /\S+/g; let m;
      while ((m = re.exec(u.text))) { const ci = m.index; if (boundary) T(() => me.onboundary && me.onboundary({ name: 'word', charIndex: ci }), t); t += (0.07 + 0.06 * m[0].length) * 1000 / (u.rate || 1); }
      T(() => { this.speaking = false; me.onend && me.onend(); }, t + 120);
    },
    cancel() { this.cur = null; this.speaking = false; } };
  Object.defineProperty(window, 'speechSynthesis', { value: ss, configurable: true });
  window.SpeechSynthesisUtterance = function (t) { this.text = t; };
  window.__words = [];
  setInterval(() => { const R = window.ReadAloud; if (!R) return; const s = R.state(); if (s.word && window.__words[window.__words.length - 1] !== s.index + ':' + s.word) window.__words.push(s.index + ':' + s.word); }, 20);
};
const targetOf = async p => p.evaluate(sel => { const el = sel ? document.querySelector(sel) : (document.querySelector('.ra-btn') || {}).parentElement; if (el) el.setAttribute('data-ra-check', '1'); return !!el; }, TARGET);
const start = async p => { const btn = await p.$('[data-ra-check] > .ra-btn, [data-ra-check] .ra-btn'); if (btn) await btn.click(); else await p.evaluate(() => ReadAloud.read(document.querySelector('[data-ra-check]'))); };
const st = p => p.evaluate(() => ReadAloud.state && Object.assign({}, ReadAloud.state(), { el: undefined }));

async function functional(mode) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } }); const p = await ctx.newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  await p.addInitScript(mock, { boundary: mode === 'word-events', noHighlightApi: mode === 'no-highlight-api' });
  await p.goto(url); await p.waitForTimeout(400);
  const has = await p.evaluate(() => !!window.ReadAloud && ReadAloud.supported);
  ok(`[${mode}] ReadAloud loaded and supported`, has); if (!has) { await ctx.close(); return; }
  if (!(await targetOf(p))) { ok(`[${mode}] found something to read`, false, 'no .ra-btn on the page and no --target'); await ctx.close(); return; }
  const before = await p.evaluate(() => { const c = document.querySelector('[data-ra-check]').cloneNode(true); c.querySelectorAll('.ra-btn').forEach(b => b.remove()); return c.innerHTML; });
  await p.evaluate(() => { window.__mut = 0; new MutationObserver(l => l.forEach(r => { if (!(r.target.closest && r.target.closest('.ra-btn'))) window.__mut++; })).observe(document.querySelector('[data-ra-check]'), { childList: true, subtree: true, characterData: true }); });
  await start(p); await p.waitForTimeout(3500);
  const s1 = await st(p), words = await p.evaluate(() => window.__words.slice());
  ok(`[${mode}] player opens and reads`, s1.state === 'playing' && await p.$('.ra-player:not([hidden])') !== null, s1.state + ' · sentence ' + (s1.index + 1) + '/' + s1.total);
  const firstSentenceWords = words.filter(w => w.startsWith('0:')).map(w => w.slice(2));
  const bySentence = {}; words.forEach(w => { const k = w.split(':')[0]; (bySentence[k] = bySentence[k] || []).push(w.slice(k.length + 1)); });
  const longest = Object.values(bySentence).sort((a, b) => b.length - a.length)[0] || [];
  ok(`[${mode}] highlighted word advances through the sentences`, words.length >= 5 && longest.length >= 3, Object.entries(bySentence).map(([k, a]) => (+k + 1) + ': ' + a.slice(0, 8).join(' ')).join(' | ').slice(0, 160));
  if (mode === 'word-events') { const said = await p.evaluate(() => window.__said[0].text.split(/\s+/).length); ok(`[${mode}] every word of sentence 1 highlighted`, firstSentenceWords.length >= said - 1, firstSentenceWords.length + ' of ' + said); }
  if (mode !== 'no-highlight-api') ok(`[${mode}] page DOM untouched while reading (Highlight API)`, await p.evaluate(() => window.__mut) === 0, (await p.evaluate(() => window.__mut)) + ' mutations');
  await p.click('.ra-player [data-ra="play"]'); await p.waitForTimeout(200); const sp = await st(p);
  ok(`[${mode}] pause`, sp.state === 'paused');
  await p.click('.ra-player [data-ra="prev"]'); await p.waitForTimeout(150); const sb = await st(p);
  ok(`[${mode}] previous sentence`, sb.index === Math.max(0, sp.index - 1), (sp.index + 1) + ' → ' + (sb.index + 1));
  await p.click('.ra-player [data-ra="play"]'); await p.waitForTimeout(250); const sr = await st(p);
  ok(`[${mode}] resume at the same sentence`, sr.state === 'playing' && sr.index === sb.index);
  await p.click('.ra-player [data-ra="speed"]'); await p.waitForTimeout(250);
  const rate = await p.evaluate(() => window.__said[window.__said.length - 1].rate);
  ok(`[${mode}] speed button changes the voice rate at once`, rate > 1, 'rate ' + rate + ', label ' + await p.textContent('.ra-player [data-ra="speed"]'));
  await p.click('.ra-player [data-ra="next"]'); await p.waitForTimeout(150); const sn = await st(p);
  await p.click('.ra-player [data-ra="close"]'); await p.waitForTimeout(250);
  ok(`[${mode}] close hides the player and clears highlights`, await p.$('.ra-player:not([hidden])') === null && (await st(p)).state === 'idle');
  if (mode === 'no-highlight-api') { const after = await p.evaluate(() => { const c = document.querySelector('[data-ra-check]').cloneNode(true); c.querySelectorAll('.ra-btn').forEach(b => b.remove()); return c.innerHTML; }); ok(`[${mode}] page restored exactly after reading (fallback)`, after === before); }
  await p.reload(); await p.waitForTimeout(400); await targetOf(p); await start(p); await p.waitForTimeout(250); const sa = await st(p);
  ok(`[${mode}] after reload, Listen resumes at the saved sentence`, sa.index === sn.index, 'saved ' + (sn.index + 1) + ', resumed ' + (sa.index + 1));
  await p.click('.ra-player [data-ra="restart"]'); await p.waitForTimeout(150);
  ok(`[${mode}] from start`, (await st(p)).index === 0);
  const langs = await p.evaluate(() => [...new Set(window.__said.map(x => x.lang))].join(','));
  ok(`[${mode}] no page errors`, !errs.length, errs.slice(0, 3).join(' | ') || 'voices used: ' + langs);
  await p.evaluate(() => ReadAloud.stop()); await ctx.close();
}

async function layout() {
  const sizes = [['phone', 360, 780, true], ['phone-landscape', 780, 360, true], ['small-landscape', 568, 320, true], ['ipad', 820, 1180, true], ['ipad-landscape', 1180, 820, true], ['desktop', 1366, 900, false]];
  for (const scheme of ['light', 'dark']) for (const [name, w, hh, touch] of sizes) {
    const ctx = await browser.newContext({ viewport: { width: w, height: hh }, hasTouch: touch, isMobile: touch && w < 800, colorScheme: scheme }); const p = await ctx.newPage();
    await p.addInitScript(mock, { boundary: true }); await p.goto(url); await p.waitForTimeout(300);
    if (!(await targetOf(p))) { await ctx.close(); continue; }
    await start(p); await p.waitForTimeout(4200);
    const r = await p.evaluate(() => {
      const W = innerWidth, H = innerHeight, pl = document.querySelector('.ra-player').getBoundingClientRect();
      let wr = null; if (window.CSS && CSS.highlights && CSS.highlights.get('ra-word')) { const rg = [...CSS.highlights.get('ra-word')][0]; if (rg) wr = rg.getBoundingClientRect(); }
      if (!wr) { const e = document.querySelector('.ra-w.ra-on'); if (e) wr = e.getBoundingClientRect(); }
      let headerBottom = 0; document.querySelectorAll('body *').forEach(e => { const cs = getComputedStyle(e); if ((cs.position === 'fixed' || cs.position === 'sticky') && !e.closest('.ra-player')) { const b = e.getBoundingClientRect(); if (b.top <= 2 && b.height < H / 2 && b.bottom > headerBottom) headerBottom = b.bottom; } });
      const small = [...document.querySelectorAll('.ra-player button')].filter(b => { const x = b.getBoundingClientRect(); return x.width && (x.width < 36 || x.height < 36); }).length;
      return { overflow: document.documentElement.scrollWidth - W, word: wr && { top: Math.round(wr.top), bottom: Math.round(wr.bottom) }, playerTop: Math.round(pl.top), playerBottom: Math.round(pl.bottom), headerBottom: Math.round(headerBottom), H, small };
    });
    const visible = r.word && r.word.top >= r.headerBottom - 1 && r.word.bottom <= r.playerTop + 1;
    ok(`[layout ${scheme} ${name} ${w}x${hh}] no overflow, word visible, player on screen`, r.overflow <= 1 && visible && r.playerBottom <= r.H && !r.small, `overflow ${r.overflow}px, word ${r.word ? r.word.top + '–' + r.word.bottom : 'none'}, header ≤${r.headerBottom}, player ${r.playerTop}–${r.playerBottom}${r.small ? ', ' + r.small + ' small buttons' : ''}`);
    if (shots) await p.screenshot({ path: path.join(shots, `${name}-${scheme}.png`) });
    await ctx.close();
  }
}

await functional('word-events');
await functional('estimated-timing');
await functional('no-highlight-api');
await layout();
await browser.close();
const failed = results.filter(r => !r[0]);
console.log(failed.length ? `\n${failed.length} check(s) FAILED` : `\nALL ${results.length} CHECKS PASSED`);
process.exit(failed.length ? 1 : 0);
