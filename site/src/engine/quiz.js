/* ===== quiz engine ===== */
/* Question refs (strings) let any question be rebuilt later (mistakes, exams):
   'Q:<id>'              authored MCQ
   'L:<listId>:in'       "Which is part of <list>?"   (1 item + 3 foils)
   'L:<listId>:ex'       "All EXCEPT"                 (3 items + 1 foil)
   'L:<listId>:ord'      ordered list: which step comes next
   'N:<numId>'           numbers drill
   'F:<figId>:<i>'       figure label (picture question)
   'P:<entityOrPhoto>'   photo question (authored as Q with img)
   'S:<term>'            spelling
   'A:<saId>'            short answer                                         */

function listQ(list, mode) {
  const items = list.items.map(strip);
  const foils = (list.foils || []).map(strip);
  const ref = 'L:' + list.id + ':' + mode;
  if (mode === 'ord' && list.ordered && items.length > 2) {
    const i = Math.floor(Math.random() * (items.length - 1));
    const correct = items[i + 1];
    const others = shuffle(items.filter((x, j) => j !== i + 1 && j !== i)).slice(0, 2);
    const foil = foils.length ? [pick(foils, 1)[0]] : [];
    const o = [correct, ...others, ...foil].slice(0, 4);
    return { ref, m: list.m, s: `${list.title}: which step comes right after “${items[i]}”?`, o, t: o.length > 1 ? 1 : -1,
      w: `In your notes the order is: ${items.map((x, j) => (j + 1) + '. ' + x).join(' → ')}.`, tw: 'That step belongs elsewhere in the sequence.', src: list.src, flag: list.flag };
  }
  if (mode === 'ex' && items.length >= 3 && foils.length) {
    const three = pick(items, 3); const foil = pick(foils, 1)[0];
    return { ref, m: list.m, s: `${list.title} — all of these are in your notes EXCEPT:`, o: [foil, ...three], t: 1,
      w: `“${foil}” is not on this list. ${list.foilWhy || ''}`.trim(), tw: `“${three[0]}” is on the list (${list.src}).`, src: list.src, flag: list.flag };
  }
  if (foils.length >= 1) {
    const it = pick(items, 1)[0]; const fs = pick(foils, Math.min(3, foils.length));
    while (fs.length < 3) fs.push(pick(LIST_FALLBACK_FOILS.filter(x => !items.includes(x) && !fs.includes(x)), 1)[0]);
    return { ref, m: list.m, s: `Which of these is listed under: ${list.title}?`, o: [it, ...fs], t: 1,
      w: `“${it}” is on the list: ${items.join('; ')}.`, tw: `“${fs[0]}” is not on this list. ${list.foilWhy || ''}`.trim(), src: list.src, flag: list.flag };
  }
  return null;
}
const LIST_FALLBACK_FOILS = ['Hyperkalemia', 'Bradycardia', 'Hemoptysis', 'Polyuria'];

function numQ(n) {
  return { ref: 'N:' + n.id, m: n.m, s: n.q, o: [n.v, ...n.d], t: 1, w: n.w || `Your notes: ${n.v} — ${n.q.replace(/\?$/, '')}.`, tw: `“${n.d[0]}” is not the number in your notes.`, src: n.src, flag: n.flag, num: true };
}
function figQ(fid, i) {
  const f = FIGS[fid]; const L = f.labels[i]; if (!L) return null;
  const pool = f.labels.filter((x, j) => j !== i && x.t.replace(/ \(lower\)/, '') !== L.t.replace(/ \(lower\)/, ''));
  const others = pick(pool, 3).map(x => x.t.replace(/ \(lower\)/, ''));
  return { ref: 'F:' + fid + ':' + i, m: f.m, s: `${f.title}: what is the structure marked by the glowing dot?`, o: [L.t.replace(/ \(lower\)/, ''), ...others], t: 1,
    w: `The marked label is “${L.t.replace(/ \(lower\)/, '')}”. ${f.notice}`, tw: 'Look again at where that label sits on the figure.', src: f.ref, fig: { id: fid, i } };
}
function qFromRef(ref) {
  const [kind, a, b] = ref.split(':');
  if (kind === 'Q') { const q = QBANK[a]; return q ? Object.assign({ ref }, q) : null; }
  if (kind === 'L') return LISTS[a] ? listQ(LISTS[a], b) : null;
  if (kind === 'N') { const n = NUMS.find(x => x.id === a); return n ? numQ(n) : null; }
  if (kind === 'F') return FIGS[a] ? figQ(a, +b) : null;
  return null;
}
function refModule(ref) {
  const [kind, a] = ref.split(':');
  if (kind === 'Q') return QBANK[a] && QBANK[a].m;
  if (kind === 'L') return LISTS[a] && LISTS[a].m;
  if (kind === 'N') { const n = NUMS.find(x => x.id === a); return n && n.m; }
  if (kind === 'F') return FIGS[a] && FIGS[a].m;
  if (kind === 'S') { const s = SPELL.find(x => x.t === a); return s && s.m; }
  if (kind === 'A') return SABANK[a] && SABANK[a].m;
  return '';
}

/* All refs for a set of modules */
function poolFor(mids, opts = {}) {
  const out = [];
  const inM = m => mids.includes(m);
  Object.values(QBANK).forEach(q => inM(q.m) && out.push('Q:' + q.id));
  if (opts.lists !== false) Object.values(LISTS).forEach(l => {
    if (!inM(l.m) || !(l.foils && l.foils.length)) return;
    out.push('L:' + l.id + ':in'); if (l.items.length >= 3) out.push('L:' + l.id + ':ex'); if (l.ordered) out.push('L:' + l.id + ':ord');
  });
  if (opts.nums !== false) NUMS.forEach(n => inM(n.m) && n.d && out.push('N:' + n.id));
  if (opts.figs !== false) Object.entries(FIGS).forEach(([fid, f]) => inM(f.m) && f.labels.forEach((l, i) => out.push('F:' + fid + ':' + i)));
  return out;
}

/* ---------- MCQ renderer ---------- */
function renderQ(q, opts = {}) {
  if (!q) return h('div');
  const order = shuffle(q.o.map((t, i) => ({ t, i })));
  const box = h('div', { class: 'qcard appear', 'data-ref': q.ref || '' });
  const meta = h('div', { class: 'card meta', style: { padding: 0, border: 0, background: 'none' } });
  box.append(h('div', { class: 'row', style: { justifyContent: 'space-between' } },
    h('span', { class: 'eyebrow' }, opts.label || (q.lv === 'A' ? 'Apply' : q.lv === 'U' ? 'Understand' : q.num ? 'Numbers' : q.fig ? 'Figure' : 'Recall')),
    h('span', { class: 'row', style: { gap: '6px' } }, srcPills(q))));
  if (q.img) box.append(h('img', { class: 'qimg', src: imgSrc(q.img), alt: 'Question image', onclick: () => lightbox(imgEl(q.img, 'Question image')) }));
  if (q.fig) box.append(figDotView(q.fig.id, q.fig.i));
  box.append(h('div', { class: 'stem', html: q.s }));
  const optsEl = h('div', { class: 'opts', role: 'group' });
  let answered = false;
  order.forEach((o, k) => {
    const b = h('button', { class: 'opt', 'data-correct': o.i === 0 ? '1' : '0' }, h('span', { class: 'lt' }, 'ABCD'[k]), h('span', { html: o.t }));
    b.addEventListener('click', () => {
      if (answered) return; answered = true;
      const ok = o.i === 0;
      if (!opts.deferFeedback) {
        $$('.opt', optsEl).forEach(x => { x.disabled = true; if (x.dataset.correct === '1') x.classList.add('right'); });
        if (!ok) b.classList.add('wrong');
        box.append(feedback(q, ok, o.i));
      } else { $$('.opt', optsEl).forEach(x => { x.disabled = true; }); b.classList.add('sel'); b.style.borderColor = 'var(--amber)'; }
      if (q.ref) recordAnswer(q.ref, ok, q.m);
      opts.onDone && opts.onDone(ok, q);
    });
    optsEl.append(b);
  });
  box.append(optsEl);
  return box;
}
function feedback(q, ok, chosen) {
  const fb = h('div', { class: 'fb ' + (ok ? 'ok' : 'no'), role: 'status' },
    h('div', null, h('b', null, ok ? 'Correct. ' : 'Not quite. '), h('span', { html: q.w || '' })));
  const trap = q.t == null ? 1 : q.t;
  if (trap > 0 && q.o[trap] != null) fb.append(h('div', { class: 'trap', html: `<b>Why not “${strip(q.o[trap])}”:</b> ` + (q.tw || 'Not supported by your notes.') }));
  if (!ok && chosen > 0 && chosen !== trap) fb.append(h('div', { class: 'trap', html: `<b>Your pick “${strip(q.o[chosen])}”:</b> not what your notes give for this question.` }));
  if (q.flag) fb.append(h('div', { class: 'flagbox', html: '<b>⚑ </b>' + q.flag }));
  return fb;
}
/* a figure with a single glowing dot (for picture questions) */
function figDotView(fid, i) {
  const f = FIGS[fid], L = f.labels[i];
  const wrap = h('div', { class: 'labelfig', style: { maxWidth: '520px', margin: '0 auto' } }, imgEl(f.img, f.title));
  wrap.append(h('span', { class: 'lchip dot', style: { left: L.x + '%', top: L.y + '%' } }, '?'));
  return wrap;
}

/* ---------- spelling ---------- */
function renderSpell(term, opts = {}) {
  const id = 'sp-' + Math.random().toString(36).slice(2, 8);
  const box = h('div', { class: 'qcard appear' },
    h('div', { class: 'row', style: { justifyContent: 'space-between' } }, h('span', { class: 'eyebrow' }, 'Spell it'), h('span', null, srcPills(term))),
    h('div', { class: 'stem' }, term.hint),
    term.ar ? h('div', { class: 'ar muted', lang: 'ar' }, term.ar) : null);
  const inp = h('input', { type: 'text', id, autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', 'aria-label': 'Type the term' });
  const out = h('div');
  const go = () => {
    const ok = inp.value.trim().toLowerCase() === term.t.toLowerCase();
    out.innerHTML = '';
    out.append(h('div', { class: 'fb ' + (ok ? 'ok' : 'no') }, h('div', null, h('b', null, ok ? 'Correct spelling: ' : 'Correct spelling: '), h('span', { class: 'k' }, term.t)),
      ok ? null : h('div', { class: 'spell-diff', html: 'You wrote: ' + diffHTML(inp.value.trim(), term.t) })));
    recordAnswer('S:' + term.t, ok, term.m); btn.disabled = true; inp.disabled = true;
    opts.onDone && opts.onDone(ok);
  };
  const btn = h('button', { class: 'btn primary small', onclick: go }, 'Check');
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
  box.append(h('div', { class: 'row', style: { flexWrap: 'nowrap' } }, inp, btn), out);
  return box;
}
function diffHTML(a, b) {
  let out = ''; const n = Math.max(a.length, b.length);
  for (let i = 0; i < n; i++) { const x = a[i] || '', y = b[i] || ''; out += x.toLowerCase() === y.toLowerCase() ? esc(x) : (x ? `<del>${esc(x)}</del>` : '') + (y ? `<ins>${esc(y)}</ins>` : ''); }
  return out;
}

/* ---------- short answer (Claude grading when available, else checklist) ---------- */
function renderSA(sa, opts = {}) {
  const tid = 'sa-' + sa.id;
  const box = h('div', { class: 'qcard appear' },
    h('div', { class: 'row', style: { justifyContent: 'space-between' } }, h('span', { class: 'eyebrow' }, 'Short answer'), h('span', null, srcPills(sa))),
    h('div', { class: 'stem', html: sa.q }));
  const ta = h('textarea', { id: tid, placeholder: 'Write your answer from memory…', 'aria-label': 'Your answer' });
  const out = h('div', { class: 'stack' });
  const reveal = h('button', { class: 'btn small' }, 'Show model answer & self-mark');
  const ask = h('button', { class: 'btn small primary', hidden: true }, 'Grade with Claude');
  box.append(ta, h('div', { class: 'row' }, ask, reveal), out);
  ClaudeAI.ready().then(ok => { if (ok) ask.hidden = false; });
  const selfMark = () => {
    out.innerHTML = '';
    const cl = h('div', { class: 'checklist' }, sa.keys.map((k, i) => h('label', null, h('input', { type: 'checkbox', id: tid + '-k' + i }), h('span', { html: k }))));
    const done = h('button', { class: 'btn small primary' }, 'Done marking');
    done.addEventListener('click', () => {
      const hit = $$('input', cl).filter(x => x.checked).length; const ok = hit >= Math.ceil(sa.keys.length * .7);
      recordAnswer('A:' + sa.id, ok, sa.m); done.disabled = true;
      out.append(h('div', { class: 'fb ' + (ok ? 'ok' : 'no') }, `${hit}/${sa.keys.length} key points. ${ok ? 'Pass.' : 'Below 70% — it goes to My mistakes.'}`));
      opts.onDone && opts.onDone(ok);
    });
    out.append(h('div', { class: 'fb ok' }, h('b', null, 'Model answer'), h('div', { html: sa.model })), h('div', { class: 'eyebrow' }, 'Tick each key point your answer contained'), cl, done);
  };
  reveal.addEventListener('click', selfMark);
  ask.addEventListener('click', async () => {
    if (!ta.value.trim()) { toast('Write an answer first.'); return; }
    ask.disabled = true; out.innerHTML = ''; const st = h('div', { class: 'explain-out' }, 'Thinking…'); out.append(st);
    try {
      const r = await ClaudeAI.grade(sa, ta.value);
      st.remove();
      const ok = !!r.pass;
      out.append(h('div', { class: 'fb ' + (ok ? 'ok' : 'no') },
        h('div', null, h('b', null, `Claude: ${r.score ?? '?'} / ${sa.keys.length} key points — ${ok ? 'pass' : 'not yet'}`)),
        h('div', null, r.feedback || ''),
        r.missing && r.missing.length ? h('div', null, h('b', null, 'Missing: '), r.missing.join('; ')) : null),
        h('div', { class: 'fb ok' }, h('b', null, 'Model answer'), h('div', { html: sa.model })));
      recordAnswer('A:' + sa.id, ok, sa.m); opts.onDone && opts.onDone(ok);
    } catch (e) { st.textContent = 'Claude could not grade this one (' + (e.code || 'error') + '). Use self-marking instead.'; ask.disabled = false; selfMark(); }
  });
  return box;
}

/* render any ref */
function renderRef(ref, opts = {}) {
  const [kind, a] = ref.split(':');
  if (kind === 'S') { const t = SPELL.find(x => x.t === a); return t ? renderSpell(t, opts) : h('div'); }
  if (kind === 'A') return SABANK[a] ? renderSA(SABANK[a], opts) : h('div');
  const q = qFromRef(ref); if (!q) return h('div');
  return renderQ(q, opts);
}
