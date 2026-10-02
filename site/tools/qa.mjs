// Headless QA: clicks through every step of every module, completes every
// interactive, opens every tool, at 360 px in dark and light themes.
// Fails on console errors, page errors, horizontal overflow, or interactives
// that do not mount/complete. Screenshots -> site/tools/qa-out/
// Usage: node site/tools/qa.mjs [--quick] [--mod m1]
import fs from 'fs'; import path from 'path'; import { fileURLToPath } from 'url'; import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const TOOLS = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(TOOLS, '../..');
const OUT = path.join(TOOLS, 'qa-out'); fs.mkdirSync(OUT, { recursive: true });
const args = process.argv.slice(2); const onlyMod = args.includes('--mod') ? args[args.indexOf('--mod') + 1] : null;
const themes = args.includes('--quick') ? ['dark'] : ['dark', 'light'];
const body = fs.readFileSync(path.join(ROOT, 'dist/index.html'), 'utf8');
const page = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><style>:root{color-scheme:light}body{margin:0;font:14px system-ui}img{max-width:100%}[hidden]{display:none!important}</style></head><body>${body}</body></html>`;
const testFile = path.join(OUT, 'test.html'); fs.writeFileSync(testFile, page);
const THREE = fs.readFileSync(path.join(TOOLS, 'vendor/three.r128.min.js'));

const problems = []; const report = [];
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--use-gl=swiftshader', '--enable-webgl', '--ignore-gpu-blocklist'] }).catch(() => chromium.launch());
for (const theme of themes) {
  const ctx = await browser.newContext({ viewport: { width: 360, height: 780 }, deviceScaleFactor: 1, colorScheme: theme, reducedMotion: 'no-preference' });
  await ctx.route('https://cdnjs.cloudflare.com/**', r => r.fulfill({ status: 200, contentType: 'application/javascript', body: THREE }));
  await ctx.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', e => errs.push('pageerror: ' + e.message));
  p.on('console', m => { if (m.type() === 'error' && !/ERR_FAILED|net::|Failed to load resource/.test(m.text())) errs.push('console: ' + m.text()); });
  // track audio gain
  await p.addInitScript(() => { window.__gains = []; const O = window.AudioContext; if (!O) return; window.AudioContext = class extends O { createGain() { const g = super.createGain(); const orig = g.gain.exponentialRampToValueAtTime.bind(g.gain); g.gain.exponentialRampToValueAtTime = (v, t) => { window.__gains.push(v); return orig(v, t); }; return g; } }; });
  await p.goto('file://' + testFile);
  await p.waitForTimeout(300);
  const overflow = async (where) => { const o = await p.evaluate(() => { const W = innerWidth; const d = document.documentElement.scrollWidth - W; if (d <= 1) return null; const out = []; document.querySelectorAll('body *').forEach(e => { const b = e.getBoundingClientRect(); let a = e.parentElement, clip = false; while (a && a !== document.body && a !== document.documentElement) { const ox = getComputedStyle(a).overflowX; if (ox !== 'visible') { clip = true; break; } a = a.parentElement; } if (!clip && b.right > W + 1 && b.width > 0) out.push(e.tagName + '.' + e.className + ' "' + (e.textContent || '').slice(0, 30) + '"'); }); return d + 'px: ' + out.slice(-3).join(' | '); }); if (o) problems.push(`[${theme}] horizontal overflow ${o} at ${where}`); };
  await overflow('home');
  if (theme === 'dark') await p.screenshot({ path: path.join(OUT, `home-${theme}.png`) });
  const mods = await p.evaluate(() => window.__EENT.MODS.map(m => m.id));
  for (const mid of mods) {
    if (onlyMod && mid !== onlyMod) continue;
    await p.evaluate(id => { localStorage.clear(); location.hash = id; }, mid);
    await p.waitForTimeout(200);
    let guard = 0, shots = 0;
    while (guard++ < 400) {
      // answer everything visible and solve every interactive
      await p.evaluate(async () => {
        document.querySelectorAll('.card.think button.btn').forEach(b => b.click());
        document.querySelectorAll('.qcard').forEach(q => { const c = q.querySelector('.opt[data-correct="1"]:not([disabled])'); if (c) c.click(); });
        for (const q of document.querySelectorAll('.qcard')) {
          const inp = q.querySelector('input[type="text"]:not([disabled])'); const btn = q.querySelector('.btn.primary.small:not([disabled])');
          if (inp && btn && /Spell/.test(q.textContent)) { inp.value = 'x'; btn.click(); }
          const rev = [...q.querySelectorAll('button')].find(b => /self-mark/.test(b.textContent)); if (rev && !q.dataset.qaDone) { q.dataset.qaDone = 1; rev.click(); q.querySelectorAll('.checklist input').forEach(c => c.checked = true); const d = [...q.querySelectorAll('button')].find(b => /Done marking/.test(b.textContent)); d && d.click(); }
        }
        for (const ix of document.querySelectorAll('.ix[data-ix]')) { if (!ix.dataset.qaSolved && ix.__solve) { ix.dataset.qaSolved = 1; try { ix.__solve(); } catch (e) { console.error('solve failed ' + ix.dataset.ix + ': ' + e.message); } } }
      });
      await p.waitForTimeout(120);
      const ixs = await p.$$('.ix[data-ix]');
      if (theme === 'dark' && shots < 40) for (const el of ixs) { const id = await el.getAttribute('data-ix'); const f = path.join(OUT, `ix-${id}.png`); if (!fs.existsSync(f) || shots < 40) { await el.screenshot({ path: f }).catch(() => { }); shots++; } }
      const cont = await p.$('.gate button.btn.primary');
      if (!cont) break;
      const txt = await cont.textContent();
      if (!/Continue/.test(txt)) break;
      await cont.click(); await p.waitForTimeout(80);
    }
    await p.waitForTimeout(1500); // let 3D/timers settle
    // wait for async 3D loads then solve again
    await p.evaluate(() => { for (const ix of document.querySelectorAll('.ix[data-ix]')) ix.__solve && ix.__solve(); });
    await p.waitForTimeout(800);
    const st = await p.evaluate(id => { const S = window.__EENT.S(); const m = window.__EENT.MODS.find(x => x.id === id); const ixIds = m.steps.filter(s => s.k === 'ix').map(s => s.id).concat(m.steps.filter(s => s.k === 'fig').map(s => 'fig-' + s.fig)); return { done: S.prog[id] && S.prog[id].done, steps: m.steps.length, at: S.prog[id] && S.prog[id].at, ix: ixIds.map(i => [i, S.ixDone[i] || 'none']), mounted: document.querySelectorAll('.ix[data-ix]').length, three: document.querySelectorAll('.threebox canvas').length, qs: document.querySelectorAll('.qcard').length }; }, mid);
    report.push(`[${theme}] ${mid}: done=${st.done} ixMounted=${st.mounted} webgl=${st.three} qcards=${st.qs} ix=${st.ix.map(x => x[0] + ':' + x[1]).join(' ')}`);
    if (!st.done) problems.push(`[${theme}] ${mid} did not reach module end (at ${st.at}/${st.steps})`);
    st.ix.filter(x => x[1] !== 'done').forEach(x => problems.push(`[${theme}] ${mid} interactive ${x[0]} not completed (${x[1]})`));
    await overflow(mid);
    // module end: lock-in & recall
    await p.evaluate(() => { const b = [...document.querySelectorAll('button')].find(x => /Start lock-in/.test(x.textContent)); b && b.click(); });
    await p.waitForTimeout(100);
    await p.evaluate(() => { const r = [...document.querySelectorAll('button')].find(x => /Reveal & mark/.test(x.textContent)); r && r.click(); const s = [...document.querySelectorAll('button')].find(x => /Save marks/.test(x.textContent)); s && s.click(); });
    if (theme === 'dark') await p.screenshot({ path: path.join(OUT, `${mid}-end-${theme}.png`), fullPage: false });
  }
  // tools
  const tools = ['learn', 'cards', 'exam', 'search', 'mistakes', 'numbers', 'spell', 'cheat', 'entities', 'lab', 'arabic', 'settings'];
  for (const t of tools) {
    await p.evaluate(t => { location.hash = t; }, t); await p.waitForTimeout(250);
    if (t === 'search') { await p.fill('#search-q', 'saline'); await p.waitForTimeout(150); const n = await p.$$eval('.sr-item', x => x.length); if (!n) problems.push(`[${theme}] search returned nothing`); }
    if (t === 'cards') { await p.click('.flashcard').catch(() => { }); await p.waitForTimeout(80); await p.click('.srsbtns .btn.primary').catch(() => { }); }
    if (t === 'exam') { await p.click('text=Start exam'); await p.waitForTimeout(300); await p.evaluate(() => document.querySelectorAll('.qcard').forEach(q => { const c = q.querySelector('.opt[data-correct="1"]'); c && c.click(); })); await p.waitForTimeout(900); const res = await p.$('#exam-results'); if (!res) problems.push(`[${theme}] exam results did not render`); }
    await overflow('tool ' + t);
    if (theme === 'dark') await p.screenshot({ path: path.join(OUT, `tool-${t}-${theme}.png`) });
  }
  const gains = await p.evaluate(() => window.__gains || []);
  if (gains.some(g => g > 0.1)) problems.push(`[${theme}] audio gain too high: ${Math.max(...gains)}`);
  report.push(`[${theme}] audio peak gain ${gains.length ? Math.max(...gains) : 'n/a'} (${gains.length} ramps)`);
  errs.forEach(e => problems.push(`[${theme}] ${e}`));
  await ctx.close();
}
await browser.close();
fs.writeFileSync(path.join(OUT, 'report.txt'), report.join('\n') + '\n\nPROBLEMS:\n' + (problems.join('\n') || 'none'));
console.log(report.join('\n'));
console.log(problems.length ? '\nPROBLEMS (' + problems.length + '):\n' + [...new Set(problems)].slice(0, 60).join('\n') : '\nQA PASSED: no problems');
process.exit(problems.length ? 1 : 0);
