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
    if (head && lang !== 'ar') out.push({ el: head, text: this.clean(head.textContent) });
    const nodes = lang === 'ar' ? [...root.querySelectorAll('.ar li, .ar.body')].filter(n => n.tagName === 'LI' || !n.querySelector('li')) : [...root.querySelectorAll('.say, .flagbox, .beyond')].filter(n => !n.hidden && !n.closest('[hidden]'));
    nodes.forEach(n => {
      let text = this.clean(n.textContent, lang);
      if (n.classList.contains('beyond')) text = text.replace(/^Beyond your notes/i, 'Beyond your notes: ');
      if (n.classList.contains('flagbox')) text = text.replace(/^⚑?\s*Conflict\s*/i, 'Note on a conflict: ');
      if (!text) return;
      // split long runs into sentences so Chrome does not cut them off
      const parts = text.length > 220 ? text.match(/[^.!?]+(?:[.!?]+(?=\s|$)|$)/g) || [text] : [text];
      parts.forEach(p => { if (p.trim()) out.push({ el: n, text: p.trim() }); });
    });
    return out;
  },
  /* ---- reading session: remembers the sentence, survives interruptions ---- */
  sess: null, tok: 0,
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
    try { speechSynthesis.cancel(); } catch (e) { }
    const tok = ++this.tok;
    $$('.speaking').forEach(e => e.classList.remove('speaking'));
    const c = ss.chunks[ss.i]; if (!c) { this.finish(); return; }
    c.el.classList.add('speaking');
    if (document.body.contains(c.el)) { const r = c.el.getBoundingClientRect(); if (r.top < 70 || r.bottom > innerHeight - 220) c.el.scrollIntoView({ block: 'center', behavior: RM() ? 'auto' : 'smooth' }); }
    this.savePos();
    this.paint();
    if (!ss.playing) return;
    const voice = this.voiceFor(ss.lang);
    const u = new SpeechSynthesisUtterance(c.text);
    if (voice) u.voice = voice; u.lang = voice ? voice.lang : (ss.lang === 'ar' ? 'ar-SA' : 'en-US');
    u.rate = +S.settings.rate || 1; u.pitch = 1;
    u.onend = () => { if (tok !== this.tok || !this.sess || !this.sess.playing) return; this.sess.i++; if (this.sess.i >= this.sess.chunks.length) this.finish(); else setTimeout(() => { if (tok === this.tok) this.speakCurrent(); }, 120); };
    u.onerror = e => { if (tok !== this.tok) return; if (e.error === 'interrupted' || e.error === 'canceled') return; this.pause(); toast('Reading paused (' + e.error + ') — press ▶ to continue from the same sentence.'); };
    // some browsers drop a long session silently: if nothing ends in a long time, pause so ▶ resumes here
    clearTimeout(this.watch); this.watch = setTimeout(() => { if (tok === this.tok && this.sess && this.sess.playing && !speechSynthesis.speaking) this.pause(); }, Math.max(8000, c.text.length * 140 / (+S.settings.rate || 1)));
    try { speechSynthesis.speak(u); } catch (e) { this.pause(); }
  },
  savePos() { const ss = this.sess; if (!ss) return; S.listenPos = S.listenPos || {}; S.listenPos[ss.key] = ss.i; save(); },
  pause() { const ss = this.sess; if (!ss) return; ss.playing = false; this.tok++; try { speechSynthesis.cancel(); } catch (e) { } this.savePos(); this.paint(); },
  resume() { const ss = this.sess; if (!ss) return; ss.playing = true; this.speakCurrent(); },
  togglePlay() { const ss = this.sess; if (!ss) return; ss.playing ? this.pause() : this.resume(); },
  prev() { const ss = this.sess; if (!ss) return; ss.i = Math.max(0, ss.i - 1); this.speakCurrent(); },
  next() { const ss = this.sess; if (!ss) return; if (ss.i >= ss.chunks.length - 1) { this.finish(); return; } ss.i++; this.speakCurrent(); },
  restart() { const ss = this.sess; if (!ss) return; ss.i = 0; ss.playing = true; this.speakCurrent(); },
  cycleRate() { const r = +S.settings.rate || 1; const k = this.RATES.findIndex(x => x >= r - 0.001); S.settings.rate = this.RATES[(k + 1) % this.RATES.length]; save(); const sr = document.getElementById('set-rate'); if (sr) sr.value = S.settings.rate; if (this.sess && this.sess.playing) this.speakCurrent(); else this.paint(); },
  finish() { const ss = this.sess; if (ss) { S.listenPos = S.listenPos || {}; delete S.listenPos[ss.key]; save(); } this.halt(false); toast('Finished reading.'); },
  // halt: end the session (position stays saved unless finish() cleared it)
  halt(quiet) { this.tok++; clearTimeout(this.watch); try { speechSynthesis.cancel(); } catch (e) { } $$('.speaking').forEach(e => e.classList.remove('speaking')); const ss = this.sess; this.sess = null; if (ss && ss.btn) this.setBtn(ss.btn, 'idle'); Player.hide(); },
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
