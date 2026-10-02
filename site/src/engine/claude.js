/* ===== Claude (sample capability): explain differently + grade short answers ===== */
const ClaudeAI = {
  _p: null, fn: null, off: false,
  ready() {
    if (this.off) return Promise.resolve(false);
    if (!this._p) this._p = (window.claude && window.claude.use ? window.claude.use('sample') : Promise.resolve(null))
      .then(f => { this.fn = f; return !!f; }).catch(() => false);
    return this._p;
  },
  handle(e) { if (e && ['not_granted', 'sampling_disabled', 'not_declared', 'capability_disabled', 'capability_removed'].includes(e.code)) { this.off = true; $$('.ai-btn').forEach(b => b.hidden = true); } },
  async explain(card, mode, onText, signal) {
    const how = { simple: 'Explain it more simply, as if to a first-year student, in at most 90 words.', patient: 'Explain it through one short, concrete prehospital patient example (a call you might run), in at most 110 words.', arabic: 'اشرح الفكرة بالعربية الفصحى المبسطة في حدود 100 كلمة، مع إبقاء المصطلحات الإنجليزية للامتحان بين قوسين.' }[mode];
    const prompt = `You are helping a BSc EMS (paramedic) student study EENT emergencies. Here is one study card from their course notes. ${how}
Rules: use ONLY the facts on the card. Do not add drugs, doses, numbers, causes or steps that are not on the card. If an example needs a detail the card lacks, keep it generic. Plain text, no headings, no markdown.

CARD TITLE: ${strip(card.h)}
CARD TEXT: ${strip(card.b)}`;
    const r = await this.fn(prompt, { onText: ({ text }) => onText(text), signal, modelTier: 'quick' });
    return r.text;
  },
  async grade(sa, answer) {
    const prompt = `Grade a paramedic student's short answer against the key points from their course notes. A key point counts only if the answer states it (wording may differ; spelling slips are fine). Do not reward facts that are not key points.
QUESTION: ${strip(sa.q)}
KEY POINTS (${sa.keys.length}):
${sa.keys.map((k, i) => (i + 1) + '. ' + strip(k)).join('\n')}
STUDENT ANSWER: ${answer.slice(0, 3000)}
Reply with only JSON: {"score": <number of key points present>, "pass": <true if score >= 70% of key points>, "missing": [<short names of missing key points>], "feedback": "<one or two sentences, encouraging and specific>"}`;
    try { return await this.fn.json(prompt, { modelTier: 'quick', cache: false }); }
    catch (e) { this.handle(e); throw e; }
  }
};

function explainTools(card) {
  const wrap = h('div', { class: 'tools' });
  const out = h('div', { class: 'explain-out', hidden: true, 'aria-live': 'polite' });
  let ctl = null;
  const mk = (mode, label) => {
    const b = h('button', { class: 'btn small ghost ai-btn', hidden: true }, label);
    b.addEventListener('click', async () => {
      ctl && ctl.abort(); ctl = new AbortController(); out.hidden = false; out.textContent = 'Thinking…';
      if (mode === 'arabic') { out.setAttribute('lang', 'ar'); out.classList.add('ar'); } else { out.removeAttribute('lang'); out.classList.remove('ar'); }
      try { await ClaudeAI.explain(card, mode, t => { out.textContent = t; }, ctl.signal); }
      catch (e) { if (e.code === 'cancelled') return; ClaudeAI.handle(e); out.textContent = e.text || ({ rate_limited: 'Too many requests right now — try again in a minute.', not_granted: 'Claude is not enabled for this page.', session_expired: 'Sign in again to use Claude.' }[e.code] || 'Claude could not answer just now.'); }
    });
    wrap.append(b); return b;
  };
  const btns = [mk('simple', 'Explain simpler'), mk('patient', 'Patient example'), mk('arabic', 'اشرح بالعربي')];
  ClaudeAI.ready().then(ok => { if (ok && !ClaudeAI.off) btns.forEach(b => b.hidden = false); });
  return [wrap, out];
}
