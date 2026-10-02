/* ===== listen: read card paragraphs aloud (Web Speech API) ===== */
// Wrap each run of inline text in a card body in <span class="say"> so the
// part being read can be highlighted. List items are spoken one by one.
function wrapRuns(body) {
  const inline = n => n.nodeType === 3 || (n.nodeType === 1 && !/^(UL|OL|LI|DIV|P|BR|TABLE|FIGURE)$/.test(n.tagName));
  let run = [];
  const flush = () => {
    if (run.length && run.some(n => n.textContent.trim())) { const sp = document.createElement('span'); sp.className = 'say'; run[0].before(sp); run.forEach(n => sp.append(n)); }
    run = [];
  };
  [...body.childNodes].forEach(n => { if (inline(n)) run.push(n); else flush(); });
  flush();
  body.querySelectorAll('li').forEach(li => li.classList.add('say'));
}

// Wrap every word inside an element in <span class="w"> (once) so the word being
// spoken can be tracked while the sentence itself is read continuously.
function wrapWords(el) {
  if (!el || el.dataset.ww) return; el.dataset.ww = 1;
  const tw = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null); const nodes = [];
  while (tw.nextNode()) { const n = tw.currentNode; if (n.textContent.trim() && !(n.parentElement && n.parentElement.classList.contains('w'))) nodes.push(n); }
  nodes.forEach(n => {
    const f = document.createDocumentFragment();
    n.textContent.split(/(\s+)/).forEach(part => { if (!part) return; if (/^\s+$/.test(part)) f.append(document.createTextNode(part)); else { const sp = document.createElement('span'); sp.className = 'w'; sp.textContent = part; f.append(sp); } });
    n.replaceWith(f);
  });
}
const wnorm = t => String(t).toLowerCase().replace(/[’']/g, '').replace(/[\u064B-\u065F\u0640]/g, '').replace(/[^a-z0-9%\u0621-\u064A\u0660-\u0669]+/g, '');
const ROMAN_RE = /^(XII|XI|IX|VIII|VII|VI|IV|III|II|X|V)$/;
// Map every spoken word of an element's cleaned text to a word span in the DOM.
// The spoken text differs a little from the page (slide refs dropped, "CN VII" ->
// "cranial nerve 7", "→" -> "leads to"), so align the two word lists with a
// longest-common-subsequence and place unmatched words between their neighbours.
function wordsFor(el, text) {
  wrapWords(el);
  const spans = [...el.querySelectorAll('.w')];
  const dn = spans.map(x => wnorm(x.textContent));
  const dr = spans.map(x => { const t = x.textContent.replace(/[^A-Za-z]/g, ''); return ROMAN_RE.test(t) ? String(roman(t)) : ''; });
  const words = []; const re = /\S+/g; let mm;
  while ((mm = re.exec(text))) words.push({ start: mm.index, end: mm.index + mm[0].length, len: mm[0].length, punct: /[.,;:!?]$/.test(mm[0]), n: wnorm(mm[0]), dom: null });
  const n = words.length, m = spans.length; if (!n || !m) return words;
  const eq = (i, j) => { const a = words[i].n, b = dn[j]; return !!a && ((!!b && (a === b || (a.length > 3 && b.length > 3 && (a.startsWith(b) || b.startsWith(a))))) || dr[j] === a); };
  const W = m + 1, L = new Uint16Array((n + 1) * W);
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) L[i * W + j] = eq(i, j) ? 1 + L[(i + 1) * W + j + 1] : Math.max(L[(i + 1) * W + j], L[i * W + j + 1]);
  const at = new Array(n).fill(-1);
  for (let i = 0, j = 0; i < n && j < m;) {
    if (eq(i, j) && L[i * W + j] === 1 + L[(i + 1) * W + j + 1]) { at[i] = j; i++; j++; }
    else if (L[(i + 1) * W + j] >= L[i * W + j + 1]) i++; else j++;
  }
  // unmatched spoken words: spread them over the unmatched page words between the neighbours
  for (let i = 0; i < n;) {
    if (at[i] >= 0) { i++; continue; }
    let k = i; while (k < n && at[k] < 0) k++;
    const lo = i > 0 ? at[i - 1] : -1, hi = k < n ? at[k] : m, gap = [];
    for (let j = lo + 1; j < hi; j++) if (dn[j] || /[→=&+]/.test(spans[j].textContent)) gap.push(j); // skip bare punctuation like ")."
    for (let q = i; q < k; q++) at[q] = gap.length ? gap[Math.floor((q - i) * gap.length / (k - i))] : lo >= 0 ? lo : Math.min(hi, m - 1);
    i = k;
  }
  words.forEach((w, i) => { w.dom = spans[Math.min(m - 1, at[i])] || null; });
  return words;
}

// scroll so el sits in the part of the screen not covered by the header, the
// reading player, the slide bar or the bottom nav (phones in landscape have little room)
function keepInView(el) {
  if (!el || !document.body.contains(el)) return;
  const r = el.getBoundingClientRect(); if (!r.height) return;
  const mon = document.querySelector('.monitor');
  const top = mon && getComputedStyle(mon).position !== 'static' ? Math.max(0, mon.getBoundingClientRect().bottom) : 0;
  let bottom = innerHeight;
  [Player.el, document.querySelector('.slidebar'), document.querySelector('.bottomnav')].forEach(x => { if (!x || x.hidden) return; const b = x.getBoundingClientRect(); if (b.height && b.top > top + 40) bottom = Math.min(bottom, b.top); });
  if (r.top >= top + 6 && r.bottom <= bottom - 30) return; // keep the next line visible too
  const target = top + Math.max(0, (bottom - top) * 0.42 - r.height / 2);
  window.scrollBy({ top: r.top - target, behavior: RM() ? 'auto' : 'smooth' });
}

const Speech = {
  ok: typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window,
  voices() { try { return speechSynthesis.getVoices(); } catch (e) { return []; } },
  voiceFor(lang) {
    const vs = this.voices().filter(v => v.lang && v.lang.toLowerCase().startsWith(lang === 'ar' ? 'ar' : 'en'));
    if (lang !== 'ar' && S.settings.voice) { const v = vs.find(x => x.name === S.settings.voice); if (v) return v; }
    const score = v => (/natural|neural|premium|enhanced|google|samantha|daniel|serena|aria|jenny|guy/i.test(v.name) ? 2 : 0) + (/en-(us|gb)/i.test(v.lang) ? 1 : 0) + (v.localService ? 0.5 : 0);
    return vs.sort((a, b) => score(b) - score(a))[0] || null;
  },
  hasArabic() { return this.voices().some(v => v.lang && v.lang.toLowerCase().startsWith('ar')); },
  clean(t, lang) {
    t = String(t || '').replace(/\s+/g, ' ').trim();
    if (lang === 'ar') return t;
    t = t.replace(/[؀-ۿ]+[؀-ۿ\s()]*/g, ' ')            // skip Arabic inside English cards
      .replace(/\((?:[AB]\d+n?(?:[–,\s-]+[AB]?\d+n?)*)\)/g, ' ')              // (A22n, B20)
      .replace(/\b(?:A|B)(?: adds| lists| only| slide| outline)?:\s/g, ' ')   // "A:" / "B adds:"
      .replace(/\bCN\s+(XII|XI|X|IX|VIII|VII|VI|V|IV|III|II|I)\b/g, (m, r) => 'cranial nerve ' + roman(r))
      .replace(/\b(XII|XI|IX|VIII|VII|VI|III|II|X|V)\b(?!-)/g, r => roman(r))
      .replace(/\(\s*[.,]?\s*\)/g, ' ').replace(/\(\s*\./g, '.').replace(/\s=\s/g, ': ')
      .replace(/°/g, ' degrees').replace(/(\d)\s*[–-]\s*(\d)/g, '$1 to $2').replace(/→/g, ', leads to, ')
      .replace(/[⚑✎★•·]/g, ' ').replace(/\bvs\b/g, 'versus').replace(/\s+/g, ' ').trim();
    return t;
  },
  hasText(root) { return !!root.querySelector('.say'); },
  chunksOf(root, lang) {
    const out = [];
    const head = root.querySelector('h3');
    if (head && lang !== 'ar') { const text = this.clean(head.textContent); if (text) out.push({ el: head, text, words: wordsFor(head, text) }); }
    const nodes = lang === 'ar' ? [...root.querySelectorAll('.ar li, .ar.body')].filter(n => n.tagName === 'LI' || !n.querySelector('li')) : [...root.querySelectorAll('.say, .flagbox, .beyond')].filter(n => !n.hidden && !n.closest('[hidden]'));
    nodes.forEach(n => {
      let text = this.clean(n.textContent, lang);
      if (n.classList.contains('beyond')) text = text.replace(/^Beyond your notes/i, 'Beyond your notes: ');
      if (n.classList.contains('flagbox')) text = text.replace(/^⚑?\s*Conflict\s*/i, 'Note on a conflict: ');
      if (!text) return;
      const words = wordsFor(n, text);
      // split long runs into sentences so Chrome does not cut them off
      let a = 0; const cut = []; const re = /[.!?]+(?=\s|$)/g; let mm;
      if (text.length > 220) while ((mm = re.exec(text))) { const e = mm.index + mm[0].length; if (e - (cut.length ? cut[cut.length - 1] : 0) >= 40) cut.push(e); }
      if (!cut.length || cut[cut.length - 1] < text.length) cut.push(text.length);
      // very long sentences: also break at a comma / semicolon / dash near the middle
      for (let q = 0; q < cut.length; q++) {
        const a0 = q ? cut[q - 1] : 0, b0 = cut[q]; if (b0 - a0 <= 230) continue;
        const mid = (a0 + b0) / 2, sub = /[,;—–:]\s/g; sub.lastIndex = a0 + 60; let best = -1, sm;
        while ((sm = sub.exec(text)) && sm.index < b0 - 60) if (best < 0 || Math.abs(sm.index - mid) < Math.abs(best - mid)) best = sm.index + 1;
        if (best > 0) { cut.splice(q, 0, best); q--; }
      }
      cut.forEach(b => {
        const p = text.slice(a, b), s0 = a + (p.length - p.trimStart().length), t = p.trim(); a = b;
        if (!t) return;
        out.push({ el: n, text: t, words: words.filter(w => w.start >= s0 && w.end <= s0 + t.length).map(w => Object.assign({}, w, { start: w.start - s0, end: w.end - s0 })) });
      });
    });
    return out;
  },
  /* ---- reading session: remembers the sentence, survives interruptions ---- */
  sess: null, tok: 0, bnd: {}, cal: {}, wOn: null, u: null,
  RATES: [0.75, 0.9, 1, 1.15, 1.3, 1.5],
  keyOf(root) {
    if (root.id) return root.id;
    const c = root.querySelector && root.querySelector('[id^="card-"],[id^="ar-"]'); if (c) return c.id;
    const st = root.querySelector && root.querySelector('[data-step]'); return (location.hash || '#') + '-s' + (st ? st.dataset.step : 'x');
  },
  play(root, btn, lang) {
    const chunks = this.chunksOf(root, lang);
    if (!chunks.length) { toast('Nothing to read on this slide.'); return; }
    if (lang === 'ar' && !this.voiceFor('ar')) { toast('No Arabic voice on this device.'); return; }
    const key = this.keyOf(root);
    this.halt(true);
    const saved = (S.listenPos || {})[key];
    let i = 0;
    if (saved > 0 && saved < chunks.length) { i = saved; toast('Resuming at sentence ' + (i + 1) + ' of ' + chunks.length + ' — ⏮ goes back.'); }
    this.sess = { root, btn, lang, chunks, i, key, playing: true };
    Player.show(); this.speakCurrent();
  },
  speakCurrent() {
    const ss = this.sess; if (!ss) return;
    const tok = ++this.tok; // bump first so events from the cancelled utterance are ignored
    let busy = false; try { busy = speechSynthesis.speaking || speechSynthesis.pending; speechSynthesis.cancel(); } catch (e) { }
    $$('.speaking').forEach(e => e.classList.remove('speaking')); $$('.w-on').forEach(e => e.classList.remove('w-on')); this.wOn = null;
    const c = ss.chunks[ss.i]; if (!c) { this.finish(); return; }
    c.el.classList.add('speaking');
    if (document.body.contains(c.el)) keepInView(c.words && c.words[0] && c.words[0].dom || c.el);
    this.savePos();
    this.paint();
    if (!ss.playing) return;
    const voice = this.voiceFor(ss.lang), vk = voice ? voice.name : 'default';
    const u = new SpeechSynthesisUtterance(c.text);
    this.u = u; // keep a reference: Chrome drops events of utterances that get garbage-collected
    if (voice) u.voice = voice; u.lang = voice ? voice.lang : (ss.lang === 'ar' ? 'ar-SA' : 'en-US');
    u.rate = +S.settings.rate || 1; u.pitch = 1;
    // ---- follow the spoken word: real word-boundary events when the voice sends them
    // (Safari / iPhone / iPad, Edge, most Windows voices), a timed estimate otherwise that
    // calibrates itself to the voice after each sentence
    if (!this.calLoaded) { this.calLoaded = true; this.cal = Object.assign({}, S.wcal || {}, this.cal); }
    const rate = u.rate, W = c.words || [], cal = this.cal[vk] || 1;
    let wi = -1, timer = 0, gotBoundary = false, started = false, t0 = 0;
    const mark = k => {
      if (tok !== this.tok || !W[k] || k === wi) return; wi = k;
      const el = W[k].dom; if (this.wOn && this.wOn !== el) this.wOn.classList.remove('w-on');
      this.wOn = el; if (!el) return; el.classList.add('w-on'); keepInView(el);
    };
    const dur = w => ((0.13 + 0.058 * w.len) + (w.punct ? 0.22 : 0)) * cal / rate * 1000;
    const tick = () => { if (tok !== this.tok || gotBoundary) return; if (wi + 1 < W.length) { mark(wi + 1); timer = setTimeout(tick, dur(W[wi])); } };
    const startEstimate = () => { if (timer || gotBoundary || tok !== this.tok || !W.length) return; mark(0); timer = setTimeout(tick, dur(W[0])); };
    u.onstart = () => { started = true; t0 = Date.now(); if (!this.bnd[vk]) startEstimate(); else setTimeout(() => { if (!gotBoundary) startEstimate(); }, 700); };
    u.onboundary = e => {
      if (tok !== this.tok || (e.name && e.name !== 'word')) return;
      gotBoundary = true; this.bnd[vk] = true; clearTimeout(timer);
      let k = 0; for (let j = 0; j < W.length; j++) if (W[j].start <= e.charIndex) k = j; mark(k);
    };
    // engines that never fire onstart: start the estimate once audio is under way
    setTimeout(() => { if (!started && tok === this.tok && speechSynthesis.speaking) { started = true; startEstimate(); } }, 1200);
    u.onend = () => {
      clearTimeout(timer); if (tok !== this.tok) return;
      if (!gotBoundary && t0 && W.length > 4) { // calibrate the estimate to this voice
        const est = W.reduce((a, w) => a + dur(w), 0), real = Date.now() - t0;
        if (est > 0 && real > 300) { const fit = cal * real / est; this.cal[vk] = Math.min(2.5, Math.max(0.4, this.cal[vk] ? 0.5 * cal + 0.5 * fit : fit)); S.wcal = this.cal; save(); }
      }
      if (!this.sess || !this.sess.playing) return;
      this.sess.i++; if (this.sess.i >= this.sess.chunks.length) this.finish(); else setTimeout(() => { if (tok === this.tok) this.speakCurrent(); }, 120);
    };
    u.onerror = e => { if (tok !== this.tok) return; if (e.error === 'interrupted' || e.error === 'canceled') return; this.pause(); toast('Reading paused (' + e.error + ') — press ▶ to continue from the same sentence.'); };
    // some browsers drop a long session silently: if nothing ends in a long time, pause so ▶ resumes here
    clearTimeout(this.watch); this.watch = setTimeout(() => { if (tok === this.tok && this.sess && this.sess.playing && !speechSynthesis.speaking) this.pause(); }, Math.max(8000, c.text.length * 140 / (+S.settings.rate || 1)));
    // Chrome's online voices stop after ~15 s unless nudged (not on Android, where pause = stop)
    clearInterval(this.keep);
    if (voice && voice.localService === false && !/Android/i.test(navigator.userAgent)) this.keep = setInterval(() => { if (tok !== this.tok) { clearInterval(this.keep); return; } try { if (speechSynthesis.speaking && !speechSynthesis.paused) { speechSynthesis.pause(); speechSynthesis.resume(); } } catch (e) { } }, 10000);
    const go = () => { if (tok !== this.tok) return; try { speechSynthesis.speak(u); } catch (e) { this.pause(); } };
    // speaking straight after cancel() can be dropped on some engines (iOS/Chrome): give it a moment
    if (busy) setTimeout(go, 80); else go();
  },
  savePos() { const ss = this.sess; if (!ss) return; S.listenPos = S.listenPos || {}; S.listenPos[ss.key] = ss.i; save(); },
  pause() { const ss = this.sess; if (!ss) return; ss.playing = false; this.tok++; clearInterval(this.keep); try { speechSynthesis.cancel(); } catch (e) { } this.savePos(); this.paint(); },
  resume() { const ss = this.sess; if (!ss) return; ss.playing = true; this.speakCurrent(); },
  togglePlay() { const ss = this.sess; if (!ss) return; ss.playing ? this.pause() : this.resume(); },
  prev() { const ss = this.sess; if (!ss) return; ss.i = Math.max(0, ss.i - 1); this.speakCurrent(); },
  next() { const ss = this.sess; if (!ss) return; if (ss.i >= ss.chunks.length - 1) { this.finish(); return; } ss.i++; this.speakCurrent(); },
  restart() { const ss = this.sess; if (!ss) return; ss.i = 0; ss.playing = true; this.speakCurrent(); },
  cycleRate() { const r = +S.settings.rate || 1; const k = this.RATES.findIndex(x => x >= r - 0.001); S.settings.rate = this.RATES[(k + 1) % this.RATES.length]; save(); const sr = document.getElementById('set-rate'); if (sr) sr.value = S.settings.rate; if (this.sess && this.sess.playing) this.speakCurrent(); else this.paint(); },
  finish() { const ss = this.sess; if (ss) { S.listenPos = S.listenPos || {}; delete S.listenPos[ss.key]; save(); } this.halt(false); toast('Finished reading.'); },
  // halt: end the session (position stays saved unless finish() cleared it)
  halt(quiet) { this.tok++; clearTimeout(this.watch); clearInterval(this.keep); try { speechSynthesis.cancel(); } catch (e) { } $$('.speaking').forEach(e => e.classList.remove('speaking')); $$('.w-on').forEach(e => e.classList.remove('w-on')); const ss = this.sess; this.sess = null; if (ss && ss.btn) this.setBtn(ss.btn, 'idle'); Player.hide(); },
  stop() { if (!this.ok) return; if (this.sess) this.savePos(); this.halt(true); },
  paint() {
    const ss = this.sess; if (!ss) return;
    if (ss.btn) this.setBtn(ss.btn, ss.playing ? 'playing' : 'paused');
    Player.paint(ss);
  },
  setBtn(btn, state) {
    const on = state === 'playing'; btn.classList.toggle('on', state !== 'idle'); btn.setAttribute('aria-pressed', String(on));
    const ar = btn.dataset.lang === 'ar';
    const lab = btn.querySelector('.lbl'); if (lab) lab.textContent = state === 'playing' ? (ar ? 'إيقاف مؤقت' : 'Pause') : state === 'paused' ? (ar ? 'أكمل' : 'Resume') : (ar ? 'استمع' : 'Listen');
    const ic = btn.querySelector('svg'); if (ic) ic.innerHTML = ICONS[state === 'playing' ? 'pause' : state === 'paused' ? 'play' : 'speaker'];
  },
  toggle(root, btn, lang) { const ss = this.sess; if (ss && ss.root === root) { this.togglePlay(); if (btn && btn !== ss.btn) { ss.btn = btn; this.paint(); } } else this.play(root, btn, lang); },
  toggleIn(stage, btn) { const root = stage.querySelector('.slide') || stage; this.toggle(root, btn, root.querySelector('.ar.body') && !root.querySelector('.say') ? 'ar' : 'en'); },
  button(root, lang) {
    const b = h('button', { class: 'btn small ghost listen', 'data-lang': lang || 'en', 'aria-pressed': 'false', title: lang === 'ar' ? 'استمع للملخص' : 'Listen to this card' }, svgI('speaker'), h('span', { class: 'lbl' }, lang === 'ar' ? 'استمع' : 'Listen'));
    b.addEventListener('click', () => this.toggle(root, b, lang || 'en'));
    if (lang === 'ar') { const chk = () => { b.hidden = !this.hasArabic(); }; chk(); try { speechSynthesis.addEventListener('voiceschanged', chk); } catch (e) { } }
    return b;
  }
};

/* ---- floating player: ⏮ previous sentence · ▶/❚❚ · ⏭ next · speed · from start · close ---- */
const Player = {
  el: null,
  build() {
    if (this.el) return this.el;
    const b = (id, label, icon, fn, cls) => { const x = h('button', { class: 'pbtn ' + (cls || ''), id, 'aria-label': label, title: label }, icon ? svgI(icon) : null); x.addEventListener('click', fn); return x; };
    this.lab = h('span', { class: 'plab', 'aria-live': 'polite' });
    this.speed = h('button', { class: 'pbtn pspeed', id: 'pSpeed', 'aria-label': 'Reading speed', title: 'Reading speed (tap to change)' }, '1×');
    this.speed.addEventListener('click', () => Speech.cycleRate());
    this.playBtn = b('pPlay', 'Play or pause', 'pause', () => Speech.togglePlay(), 'pmain');
    this.el = h('div', { class: 'player', id: 'player', role: 'region', 'aria-label': 'Reading controls', hidden: true },
      h('div', { class: 'prow ptop' }, this.lab, b('pClose', 'Close reader (your place is saved)', 'close', () => Speech.stop(), 'pclose')),
      h('div', { class: 'prow' },
        b('pRestart', 'Read from the start', 'restart', () => Speech.restart()),
        b('pPrev', 'Previous sentence', 'prev', () => Speech.prev()),
        this.playBtn,
        b('pNext', 'Next sentence', 'next', () => Speech.next()),
        this.speed));
    document.body.append(this.el);
    return this.el;
  },
  show() { this.build().hidden = false; document.body.classList.add('player-on'); },
  hide() { if (this.el) this.el.hidden = true; document.body.classList.remove('player-on'); },
  paint(ss) {
    this.build();
    this.lab.textContent = (ss.playing ? 'Reading' : 'Paused') + ' · sentence ' + (ss.i + 1) + ' / ' + ss.chunks.length;
    this.playBtn.querySelector('svg').innerHTML = ICONS[ss.playing ? 'pause' : 'play'];
    this.playBtn.setAttribute('aria-label', ss.playing ? 'Pause' : 'Resume from this sentence');
    this.speed.textContent = (+S.settings.rate || 1) + '×';
  }
};
function roman(r) { return { I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7, VIII: 8, IX: 9, X: 10, XI: 11, XII: 12 }[r] || r; }
if (Speech.ok) { try { speechSynthesis.getVoices(); speechSynthesis.addEventListener('voiceschanged', () => { }); } catch (e) { } }
addEventListener('hashchange', () => Speech.stop());
// if the page is hidden (screen off, call, app switch) pause so ▶ resumes at the same sentence
document.addEventListener('visibilitychange', () => { if (document.hidden && Speech.sess && Speech.sess.playing) Speech.pause(); });
