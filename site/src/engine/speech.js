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
  playing: null,
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
  stop() {
    if (!this.ok) return;
    try { speechSynthesis.cancel(); } catch (e) { }
    $$('.speaking').forEach(e => e.classList.remove('speaking'));
    if (this.playing && this.playing.btn) this.setBtn(this.playing.btn, false);
    this.playing = null;
  },
  setBtn(btn, on) {
    btn.classList.toggle('on', on); btn.setAttribute('aria-pressed', String(on));
    const lab = btn.querySelector('.lbl'); if (lab) lab.textContent = on ? (btn.dataset.lang === 'ar' ? 'إيقاف' : 'Stop') : (btn.dataset.lang === 'ar' ? 'استمع' : 'Listen');
    const ic = btn.querySelector('svg'); if (ic) ic.innerHTML = ICONS[on ? 'stop' : 'speaker'];
  },
  play(root, btn, lang) {
    const chunks = this.chunksOf(root, lang);
    if (!chunks.length) { toast('Nothing to read on this slide.'); return; }
    const voice = this.voiceFor(lang);
    if (lang === 'ar' && !voice) { toast('No Arabic voice on this device.'); return; }
    this.stop();
    const run = { btn, i: 0 }; this.playing = run; if (btn) this.setBtn(btn, true);
    const nextChunk = () => {
      if (this.playing !== run) return;
      $$('.speaking').forEach(e => e.classList.remove('speaking'));
      if (run.i >= chunks.length) { this.stop(); return; }
      const c = chunks[run.i++];
      c.el.classList.add('speaking');
      const r = c.el.getBoundingClientRect(); if (r.top < 70 || r.bottom > innerHeight - 140) c.el.scrollIntoView({ block: 'center', behavior: RM() ? 'auto' : 'smooth' });
      const u = new SpeechSynthesisUtterance(c.text);
      if (voice) u.voice = voice; u.lang = voice ? voice.lang : (lang === 'ar' ? 'ar-SA' : 'en-US');
      u.rate = +S.settings.rate || 1; u.pitch = 1;
      u.onend = () => setTimeout(nextChunk, 120);
      u.onerror = e => { if (e.error !== 'interrupted' && e.error !== 'canceled') toast('Reading stopped (' + e.error + ').'); this.stop(); };
      try { speechSynthesis.speak(u); } catch (e) { this.stop(); }
    };
    nextChunk();
  },
  toggle(root, btn, lang) { if (this.playing && this.playing.btn === btn) this.stop(); else this.play(root, btn, lang); },
  toggleIn(stage, btn) { const root = stage.querySelector('.slide') || stage; this.toggle(root, btn, root.querySelector('.ar.body') && !root.querySelector('.say') ? 'ar' : 'en'); },
  button(root, lang) {
    const b = h('button', { class: 'btn small ghost listen', 'data-lang': lang || 'en', 'aria-pressed': 'false', title: lang === 'ar' ? 'استمع للملخص' : 'Listen to this card' }, svgI('speaker'), h('span', { class: 'lbl' }, lang === 'ar' ? 'استمع' : 'Listen'));
    b.addEventListener('click', () => this.toggle(root, b, lang || 'en'));
    if (lang === 'ar') { const chk = () => { b.hidden = !this.hasArabic(); }; chk(); try { speechSynthesis.addEventListener('voiceschanged', chk); } catch (e) { } }
    return b;
  }
};
function roman(r) { return { I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7, VIII: 8, IX: 9, X: 10, XI: 11, XII: 12 }[r] || r; }
if (Speech.ok) { try { speechSynthesis.getVoices(); speechSynthesis.addEventListener('voiceschanged', () => { }); } catch (e) { } }
addEventListener('hashchange', () => Speech.stop());
