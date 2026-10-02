/* ===== tools ===== */
const INTERVALS = [0, 1, 3, 7, 16, 35];
const NEW_PER_DAY = 20;
const SRS = {
  cards() {
    if (this._c) return this._c;
    const out = [];
    FLASHES.forEach(f => out.push({ id: 'X:' + f.id, m: f.m, f: f.f, b: f.b, src: f.src }));
    Object.values(LISTS).forEach(l => out.push({ id: 'L:' + l.id, m: l.m, f: `List: ${l.title} <span class="n">${l.items.length}</span>`, b: (l.ordered ? '<ol>' : '<ul>') + l.items.map(i => '<li>' + i + '</li>').join('') + (l.ordered ? '</ol>' : '</ul>'), src: l.src }));
    NUMS.forEach(n => out.push({ id: 'N:' + n.id, m: n.m, f: n.q, b: `<span class="n">${n.v}</span>` + (n.w ? '<p style="margin-top:8px">' + n.w + '</p>' : ''), src: n.src }));
    return (this._c = out);
  },
  newToday() { const d = today(); if (!S.newDay || S.newDay.d !== d) S.newDay = { d, n: 0 }; return S.newDay; },
  queue(mid) {
    const cs = this.cards().filter(c => !mid || c.m === mid); const d = today();
    const front = S.front.filter(id => cs.some(c => c.id === id));
    const due = cs.filter(c => S.srs[c.id] && S.srs[c.id].due <= d && !front.includes(c.id)).sort((a, b) => S.srs[a.id].box - S.srs[b.id].box);
    const fresh = cs.filter(c => !S.srs[c.id] && !front.includes(c.id)).slice(0, Math.max(0, NEW_PER_DAY - this.newToday().n));
    return [...front.map(id => cs.find(c => c.id === id)), ...due, ...fresh];
  },
  dueCount() { try { return this.queue().length; } catch (e) { return 0; } },
  grade(id, g) {
    const c = S.srs[id]; if (!c) this.newToday().n++;
    let box = c ? c.box : 0;
    box = g === 'again' ? 0 : g === 'hard' ? Math.max(1, box) : g === 'good' ? Math.min(5, box + 1) : Math.min(5, box + 2);
    S.srs[id] = { box, due: today() + (g === 'again' ? 0 : INTERVALS[box]) };
    S.front = S.front.filter(x => x !== id); if (g === 'again') S.front.push(id);
    save(); Monitor.update();
  },
  toFront(id) { S.front = [id, ...S.front.filter(x => x !== id)]; if (S.srs[id]) S.srs[id].due = today(); save(); Monitor.update(); }
};

function page(title, eyebrow, ...kids) { return [h('span', { class: 'eyebrow' }, eyebrow), h('h1', { class: 'h-page', style: { margin: '6px 0 14px' } }, title), ...kids]; }
function modFilter(id, onChange, withAll = true) {
  const s = h('select', { id, 'aria-label': 'Module filter' }, withAll ? h('option', { value: '' }, 'All modules') : null, MODS.map(m => h('option', { value: m.id }, m.n + ' · ' + m.title)));
  s.addEventListener('change', () => onChange(s.value)); return s;
}

const TOOLS = {
  cards: { name: 'Flashcards', icon: 'cards', blurb: 'Spaced repetition 1·3·7·16·35 days', hidden: true, render(M) {
    let mid = '';
    const stage = h('div', { class: 'stack' });
    const show = () => {
      stage.innerHTML = ''; const q = SRS.queue(mid);
      if (!q.length) { stage.append(h('div', { class: 'fb ok' }, 'Nothing due. Come back tomorrow, or switch module.')); return; }
      const c = q[0]; let flipped = false;
      const card = h('button', { class: 'flashcard', 'aria-label': 'Flip card' }, h('div', { class: 'front', html: c.f }));
      const grades = h('div', { class: 'srsbtns', hidden: true }, [['again', 'Again'], ['hard', 'Hard'], ['good', 'Good'], ['easy', 'Easy']].map(([g, t]) => h('button', { class: 'btn' + (g === 'good' ? ' primary' : g === 'again' ? ' danger' : ''), onclick: () => { SRS.grade(c.id, g); show(); } }, t)));
      card.addEventListener('click', () => { flipped = !flipped; card.innerHTML = ''; card.append(flipped ? h('div', { class: 'back', html: c.b + `<div class="row" style="margin-top:10px"><span class="pill src">${c.src || ''}</span></div>` }) : h('div', { class: 'front', html: c.f })); grades.hidden = !flipped; });
      stage.append(h('div', { class: 'row', style: { justifyContent: 'space-between' } }, h('span', { class: 'mono muted' }, q.length + ' in queue'), h('span', { class: 'pill' }, S.srs[c.id] ? 'box ' + S.srs[c.id].box : S.front.includes(c.id) ? 'missed — first' : 'new')), h('div', { class: 'flash' }, card), grades);
    };
    M.append(...page('Flashcards', 'Spaced repetition · misses come back first', h('div', { class: 'stack' }, modFilter('fc-mod', v => { mid = v; show(); }), stage)));
    show();
  } },
  exam: { name: 'Exam builder', icon: 'exam', blurb: 'Timed mixed exams, weakest-first results', hidden: true, render(M) { renderExamBuilder(M); } },
  search: { name: 'Search', icon: 'search', blurb: 'Cards, questions, labels, numbers', render(M) { renderSearch(M); } },
  mistakes: { name: 'My mistakes', icon: 'mistakes', blurb: 'Stay until you answer right', render(M) {
    const refs = Object.keys(S.mistakes).filter(r => !/^R:/.test(r));
    M.append(...page('My mistakes', refs.length + ' open', refs.length ? h('div', { class: 'row' }, h('button', { class: 'btn primary small', onclick: () => startExam({ refs: shuffle(refs), feedback: 'instant', title: 'Mistakes drill' }) }, 'Drill all as an exam')) : h('div', { class: 'fb ok' }, 'No open mistakes.')));
    MODS.forEach(m => { const rs = refs.filter(r => (S.mistakes[r].m || refModule(r)) === m.id); if (!rs.length) return; M.append(h('div', { class: 'sec' }, h('h2', null, m.n + ' · ' + m.title + ' (' + rs.length + ')'), h('span', { class: 'rule' })), h('div', { class: 'stack' }, rs.map(r => renderRef(r)))); });
  } },
  numbers: { name: 'Numbers drill', icon: 'numbers', blurb: 'Every number in your files', render(M) {
    const tbl = h('div', { class: 'stack', style: { gap: '8px' } }, NUMS.map(n => h('div', { class: 'result-row' }, h('div', { class: 'stack', style: { gap: '4px' } }, h('span', null, h('span', { class: 'n' }, n.v), n.flag ? h('span', { class: 'pill flag', style: { marginLeft: '6px' } }, '⚑') : null), h('span', { html: n.q })), h('span', { class: 'pill src' }, n.src))));
    M.append(...page('Numbers drill', NUMS.length + ' numbers', h('div', { class: 'row' }, h('button', { class: 'btn primary small', onclick: () => startExam({ refs: shuffle(NUMS.filter(n => n.d).map(n => 'N:' + n.id)), feedback: 'instant', title: 'Numbers drill' }) }, 'Quiz me on all numbers')), tbl));
  } },
  spell: { name: 'Spelling drill', icon: 'spell', blurb: 'Your handwritten terms + key terms', render(M) {
    const hw = h('section', { class: 'card' }, h('span', { class: 'eyebrow' }, 'From your handwriting (B)'),
      h('div', { class: 'tbl fit' }, h('table', null, h('thead', null, h('tr', null, h('th', null, 'Where'), h('th', null, 'You wrote'), h('th', null, 'Meaning'))),
        h('tbody', null, HANDWRITING.map(r => h('tr', null, h('td', { class: 'mono' }, r[0]), h('td', { html: r[1] }), h('td', { html: r[2] })))))),
      h('p', { class: 'muted', style: { fontSize: '14px' } }, 'Page 167 looks like a numbered spelling list plus “التعداد” (enumeration), so this site drills spelling and list recall.'));
    M.append(...page('Spelling drill', SPELL.length + ' terms · from your handwritten list (p167) and key terms', hw, h('div', { class: 'stack' }, shuffle(SPELL).map(t => renderSpell(t)))));
  } },
  cheat: { name: 'Cheat sheet', icon: 'cheat', blurb: 'Every list and table, searchable', render(M) {
    const inp = h('input', { type: 'search', id: 'cheat-q', placeholder: 'Filter lists… (e.g. tripod, 20 minutes)', value: TOOLS.cheat.q || '' });
    const out = h('div', { class: 'stack' });
    const tables = MODS.flatMap(m => m.steps.filter(s => s.k === 'table').map(s => Object.assign({ m: m.id }, s)));
    const paint = () => { const q = norm(inp.value); out.innerHTML = '';
      MODS.forEach(m => { const ls = Object.values(LISTS).filter(l => l.m === m.id && (!q || norm(l.title + ' ' + l.items.join(' ')).includes(q))); const ts = tables.filter(t => t.m === m.id && (!q || norm(t.h + ' ' + t.rows.flat().join(' ')).includes(q)));
        if (!ls.length && !ts.length) return;
        out.append(h('div', { class: 'sec' }, h('h2', null, m.n + ' · ' + m.title), h('span', { class: 'rule' })));
        ts.forEach(t => out.append(tableStep(t)));
        ls.forEach(l => out.append(h('div', { class: 'card' }, h('div', { class: 'row', style: { justifyContent: 'space-between' } }, h('h3', null, l.title), h('span', { class: 'row', style: { gap: '6px' } }, h('span', { class: 'n' }, l.items.length), srcPills(l))), h('div', { class: 'body', html: (l.ordered ? '<ol>' : '<ul>') + l.items.map(i => '<li>' + i + '</li>').join('') + (l.ordered ? '</ol>' : '</ul>') }))));
      }); };
    inp.addEventListener('input', paint);
    M.append(...page('Cheat sheet', Object.keys(LISTS).length + ' lists · tables T1–T6', inp, out)); paint(); TOOLS.cheat.q = '';
  } },
  entities: { name: 'Entity hub', icon: 'entities', blurb: 'Compare two · “which one is it?”', render(M) { renderEntities(M); } },
  lab: { name: 'Visual lab', icon: 'lab', blurb: 'Every figure, photo & interactive', render(M) { renderLab(M); } },
  arabic: { name: 'Arabic summary', icon: 'arabic', blurb: 'ملخص كل الوحدات', render(M) {
    M.append(...page('الملخص بالعربي', 'Arabic summary · English exam terms kept', ...MODS.map(m => h('section', { class: 'card' }, h('h3', null, m.n + ' · ' + m.title), h('div', { class: 'ar body', lang: 'ar', html: m.arSum })))));
  } },
  settings: { name: 'Settings', icon: 'settings', blurb: 'Questions, theme, sound, labels', render(M) { renderSettings(M); } },
};

const HANDWRITING = [
  ['B9 · p14', 'Ecchymosis … discoloration', 'Ecchymosis = discoloration'], ['B9 · p15', 'Conjunctivae', 'spelling'],
  ['B13 · p21', '<span lang="ar" class="ar">مياه زرقاء</span>', 'Glaucoma'], ['B20 · p32', '<span lang="ar" class="ar">معدي</span>', 'contagious'],
  ['B22 · p36', 'Hordeolum', 'stye'], ['B28 · p47', 'TB', 'Tuberculosis'], ['B30 · p50', 'Papilledema', 'spelling'],
  ['B51 · p82', 'Labyrinthitis', 'spelling'], ['B76 · p118', '<span lang="ar" class="ar">عسر هضم</span>', 'Indigestion'],
  ['B84 · p129', 'Dentalgia', 'spelling'], ['B87 · p134', '<span lang="ar" class="ar">التهاب اللثة</span>', 'Gingivitis'],
  ['B96 · p146', 'Epiglottitis', 'spelling'], ['B99 · p151', '<span lang="ar" class="ar">بحة</span>', 'Hoarseness'],
  ['B106 · p161', 'Pharyngitis', 'spelling'], ['p167', '3- Papl… · 4- Trachiti… · <span lang="ar" class="ar">خلص</span> (circled) · <span lang="ar" class="ar">التعداد ①</span>', 'numbered spelling list (Papilledema, Tracheitis); enumeration'],
];

/* ---------- exam ---------- */
function renderExamBuilder(M) {
  const len = h('select', { id: 'ex-len', 'aria-label': 'Number of questions' }, [10, 20, 40, 60, 100].map(n => h('option', { value: n, selected: n === 20 || null }, n + ' questions')));
  const mods = h('div', { class: 'checklist' }, MODS.map(m => h('label', null, h('input', { type: 'checkbox', id: 'ex-m-' + m.id, value: m.id, checked: true }), h('span', null, m.n + ' · ' + m.title))));
  const timer = h('select', { id: 'ex-timer', 'aria-label': 'Timer' }, h('option', { value: 0 }, 'No timer'), h('option', { value: 60 }, '1 min per question'), h('option', { value: 45 }, '45 s per question'));
  const fbk = h('select', { id: 'ex-fb', 'aria-label': 'Feedback' }, h('option', { value: 'instant' }, 'Instant feedback'), h('option', { value: 'end' }, 'Feedback at the end'));
  const sa = h('label', { class: 'row' }, h('input', { type: 'checkbox', id: 'ex-sa' }), 'Include short answers & spelling');
  const go1 = h('button', { class: 'btn primary' }, 'Start exam');
  const go2 = h('button', { class: 'btn' }, 'Mixed review (weighted to my weak spots)');
  go1.addEventListener('click', () => {
    const ms = $$('input', mods).filter(x => x.checked).map(x => x.value); if (!ms.length) { toast('Pick at least one module.'); return; }
    let refs = pick(poolFor(ms), +len.value);
    if ($('input', sa).checked) { const extra = shuffle([...Object.values(SABANK).filter(s => ms.includes(s.m)).map(s => 'A:' + s.id), ...SPELL.filter(s => ms.includes(s.m)).map(s => 'S:' + s.t)]).slice(0, Math.max(2, Math.round(+len.value / 6))); refs = shuffle([...refs.slice(0, +len.value - extra.length), ...extra]); }
    startExam({ refs, timer: +timer.value, feedback: fbk.value, title: 'Exam · ' + ms.length + ' module' + (ms.length > 1 ? 's' : '') });
  });
  go2.addEventListener('click', () => startExam({ refs: weightedPool(+len.value), timer: +timer.value, feedback: fbk.value, title: 'Mixed review' }));
  M.append(...page('Exam builder', 'Mostly 4-option MCQ, like your exam', h('div', { class: 'stack' },
    h('div', { class: 'setting' }, h('b', null, 'Length'), len), h('div', { class: 'setting' }, h('b', null, 'Modules'), mods),
    h('div', { class: 'setting' }, h('b', null, 'Timer'), timer), h('div', { class: 'setting' }, h('b', null, 'Feedback'), fbk), h('div', { class: 'setting' }, sa),
    h('div', { class: 'row' }, go1, go2))));
}
function weightedPool(n) {
  const all = poolFor(MODS.map(m => m.id));
  const w = r => { const a = S.ans[r]; let x = 1.2; if (S.mistakes[r]) x = 5; else if (a && !a.last) x = 3.5; else if (a && a.last) x = .6; const mm = moduleMastery(refModule(r)); return x * (1 + (100 - mm) / 60); };
  const items = all.map(r => ({ r, k: Math.pow(Math.random(), 1 / w(r)) })); items.sort((a, b) => b.k - a.k);
  // interleave modules
  return items.slice(0, n).map(x => x.r);
}
let EXAM_PENDING = null;
function startExam(o) { EXAM_PENDING = o; if (location.hash === '#run') route(); else location.hash = 'run'; }
function runExam(MAINEL, o) {
  {
    $$('.bottomnav button').forEach(b => b.setAttribute('aria-current', b.dataset.route === 'exam' ? 'page' : 'false'));
    const res = []; let left = o.refs.length;
    const clock = h('span', { class: 'mono', style: { color: 'var(--amber)' } });
    M_runTimer && clearInterval(M_runTimer);
    if (o.timer) { let t = o.timer * o.refs.length; const tick = () => { clock.textContent = '⏱ ' + Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0'); if (t-- <= 0) { clearInterval(M_runTimer); finish(); } }; tick(); M_runTimer = setInterval(tick, 1000); }
    const list = h('div', { class: 'stack' });
    MAIN.append(...page(o.title, o.refs.length + ' questions · ' + (o.feedback === 'end' ? 'feedback at the end' : 'instant feedback'), h('div', { class: 'row', style: { justifyContent: 'space-between' } }, clock, h('button', { class: 'btn small', onclick: () => finish() }, 'Finish & see results'))), list);
    o.refs.forEach((r, i) => list.append(renderRef(r, { label: 'Q' + (i + 1), deferFeedback: o.feedback === 'end', onDone: ok => { res.push({ r, ok }); if (--left === 0) setTimeout(finish, 600); } })));
    let finished = false;
    function finish() {
      if (finished) return; finished = true; clearInterval(M_runTimer);
      const ok = res.filter(x => x.ok).length; const by = {};
      o.refs.forEach(r => { const m = refModule(r); by[m] = by[m] || { ok: 0, n: 0 }; by[m].n++; const a = res.find(x => x.r === r); if (a && a.ok) by[m].ok++; });
      const rows = Object.entries(by).map(([m, v]) => ({ m, v, p: v.ok / v.n })).sort((a, b) => a.p - b.p);
      const misses = o.refs.filter(r => !res.find(x => x.r === r && x.ok));
      const panel = h('section', { class: 'stack', id: 'exam-results' },
        h('div', { class: 'sec' }, h('h2', null, 'Results'), h('span', { class: 'rule' })),
        h('div', { class: 'statrow' }, h('div', { class: 'stat' }, h('b', null, Math.round(ok / o.refs.length * 100) + '%'), h('span', null, 'score')), h('div', { class: 'stat' }, h('b', null, ok + '/' + o.refs.length), h('span', null, 'correct')), h('div', { class: 'stat' }, h('b', null, o.refs.length - res.length), h('span', null, 'unanswered'))),
        h('span', { class: 'eyebrow' }, 'Weakest first'),
        ...rows.map(({ m, v, p }) => { const mod = modById(m); return h('div', { class: 'result-row' }, h('div', { class: 'stack', style: { gap: '6px' } }, h('b', null, mod ? mod.n + ' · ' + mod.title : m), h('div', { class: 'meter ' + (p < .5 ? 'low' : p < .8 ? 'mid' : '') }, h('i', { style: { width: Math.round(p * 100) + '%' } }))), h('button', { class: 'btn small', onclick: () => startExam({ refs: pick([...o.refs.filter(r => refModule(r) === m && misses.includes(r)), ...poolFor([m])], 12), feedback: 'instant', title: 'Drill · ' + (mod ? mod.title : m) }) }, v.ok + '/' + v.n + ' · Drill')); }),
        misses.length ? h('div', { class: 'row' }, h('button', { class: 'btn primary small', onclick: () => { rev.hidden = !rev.hidden; } }, 'Review misses (' + misses.length + ')')) : h('div', { class: 'fb ok' }, 'No misses.'));
      const rev = h('div', { class: 'stack', hidden: true }, misses.map(r => renderRef(r)));
      if (o.feedback === 'end') { $$('.qcard', list).forEach(qc => { const r = qc.dataset.ref; const q = res.find(x => x.r === r); $$('.opt', qc).forEach(b => { if (b.dataset.correct === '1') b.classList.add('right'); }); if (q && !q.ok) { const sel = $$('.opt', qc).find(b => b.style.borderColor); sel && sel.classList.add('wrong'); } }); }
      MAIN.prepend(panel, rev); window.scrollTo(0, 0);
    }
  }
}
let M_runTimer = 0;
TOOLS.run = { name: 'Exam', hidden: true, render(M) { if (!EXAM_PENDING) { go('exam'); return; } runExam(M, EXAM_PENDING); } };

/* ---------- search ---------- */
function searchIndex() {
  if (searchIndex._i) return searchIndex._i;
  const I = [];
  MODS.forEach(m => m.steps.forEach(s => {
    const where = m.n + ' · ' + m.title;
    const to = () => { pendingStep = s.i; go(m.id); if (location.hash === '#' + m.id) route(); };
    if (s.k === 'card') I.push({ t: s.h, x: strip(s.b) + ' ' + strip(s.beyond || ''), w: where + ' · card', go: to });
    if (s.k === 'think') I.push({ t: 'Think first', x: strip(s.q) + ' ' + strip(s.a), w: where, go: to });
    if (s.k === 'table') I.push({ t: s.h, x: s.rows.flat().map(strip).join(' · '), w: where + ' · table', go: to });
    if (s.k === 'fig') FIGS[s.fig].labels.forEach(L => I.push({ t: L.t.replace(/ \(lower\)/, '') + ' · ' + L.ar, x: 'Figure label on ' + FIGS[s.fig].title, w: where + ' · figure', go: to }));
    if (s.k === 'photo') I.push({ t: s.cap, x: strip(s.notice || ''), w: where + ' · photo', go: to });
    if (s.k === 'ix') I.push({ t: s.title || s.type, x: [s.how, ...(s.items || []), ...((s.buckets || []).flatMap(b => [b.n, ...b.items])), ...((s.pairs || []).flat()), ...((s.cards || []).map(c => c.s)), ...((s.steps || []).map(c => c.scene))].filter(Boolean).map(strip).join(' '), w: where + ' · interactive', go: to });
    if (s.k === 'q') s.ids.forEach(id => { const q = QBANK[id]; if (q) I.push({ t: strip(q.s), x: q.o.map(strip).join(' · ') + ' ' + strip(q.w), w: where + ' · question', go: to }); });
  }));
  FLASHES.forEach(f => I.push({ t: strip(f.f), x: strip(f.b), w: 'Flashcard', go: () => go('cards') }));
  Object.values(LISTS).forEach(l => I.push({ t: l.title, x: l.items.map(strip).join(' · '), w: 'Cheat sheet · list', go: () => { TOOLS.cheat.q = l.title; go('cheat'); } }));
  NUMS.forEach(n => I.push({ t: n.v, x: strip(n.q), w: 'Numbers drill', go: () => go('numbers') }));
  ENTS.forEach(e => I.push({ t: e.n, x: Object.values(e.f).map(strip).join(' '), w: 'Entity hub · ' + e.ty, go: () => { TOOLS.entities.open = e.n; go('entities'); } }));
  MODS.forEach(m => m.hooks.forEach(([t, b]) => I.push({ t: strip(t), x: strip(b), w: m.n + ' · memory hook', go: () => { go(m.id); } })));
  Object.values(SABANK).forEach(s => I.push({ t: strip(s.q), x: s.keys.map(strip).join(' '), w: 'Short answer', go: () => go('exam') }));
  return (searchIndex._i = I);
}
function renderSearch(M) {
  const inp = h('input', { type: 'search', id: 'search-q', placeholder: 'Search everything… (e.g. Schlemm, 20 minutes, drooling)', autocomplete: 'off' });
  const out = h('div', { class: 'searchres', 'aria-live': 'polite' });
  const mark = (txt, q) => { const i = txt.toLowerCase().indexOf(q); if (i < 0) return esc(txt.slice(0, 140)); const a = Math.max(0, i - 50); return (a ? '…' : '') + esc(txt.slice(a, i)) + '<mark>' + esc(txt.slice(i, i + q.length)) + '</mark>' + esc(txt.slice(i + q.length, i + q.length + 90)) + '…'; };
  inp.addEventListener('input', () => {
    const q = inp.value.trim().toLowerCase(); out.innerHTML = ''; if (q.length < 2) return;
    const hits = searchIndex().filter(it => (it.t + ' ' + it.x).toLowerCase().includes(q)).slice(0, 60);
    out.append(h('span', { class: 'eyebrow' }, hits.length + (hits.length === 60 ? '+' : '') + ' results'));
    hits.forEach(it => out.append(h('button', { class: 'sr-item', onclick: it.go }, h('small', null, it.w), h('b', { html: mark(it.t, q) }), h('span', { class: 'muted', html: mark(it.x, q) }))));
  });
  M.append(...page('Search', 'Cards · questions · figure labels · flashcards · hooks · entities · numbers', inp, out));
  setTimeout(() => inp.focus(), 50);
}

/* ---------- entities ---------- */
function entityCard(e) {
  return h('article', { class: 'card entity', id: 'ent-' + e.n.replace(/\W+/g, '-') },
    h('div', { class: 'row', style: { justifyContent: 'space-between' } }, h('h3', null, e.n), h('span', { class: 'pill' }, e.ty)),
    h('dl', null, Object.entries(e.f).flatMap(([k, v]) => [h('dt', null, k), h('dd', { html: v })])),
    h('div', { class: 'meta' }, srcPills(e), e.m ? h('button', { class: 'btn small ghost', onclick: () => go(e.m) }, 'Open module ' + e.m.slice(1)) : null));
}
function renderEntities(M) {
  const types = [...new Set(ENTS.map(e => e.ty))];
  const filt = h('input', { type: 'search', id: 'ent-q', placeholder: 'Filter entities…' });
  const ty = h('select', { id: 'ent-ty', 'aria-label': 'Type' }, h('option', { value: '' }, 'All types'), types.map(t => h('option', { value: t }, t)));
  const list = h('div', { class: 'stack' });
  const paint = () => { list.innerHTML = ''; const q = norm(filt.value); ENTS.filter(e => (!ty.value || e.ty === ty.value) && (!q || norm(e.n + ' ' + Object.values(e.f).join(' ')).includes(q))).forEach(e => list.append(entityCard(e))); };
  filt.addEventListener('input', paint); ty.addEventListener('change', paint);
  const a = h('select', { id: 'cmp-a', 'aria-label': 'First entity' }, ENTS.map(e => h('option', null, e.n)));
  const b = h('select', { id: 'cmp-b', 'aria-label': 'Second entity' }, ENTS.map((e, i) => h('option', { selected: i === 1 || null }, e.n)));
  const cmp = h('div');
  const doCmp = () => { const A = ENTS.find(e => e.n === a.value), B = ENTS.find(e => e.n === b.value); const keys = [...new Set([...Object.keys(A.f), ...Object.keys(B.f)])]; cmp.innerHTML = ''; cmp.append(h('div', { class: 'cmp' }, h('div', { class: 'h' }), h('div', { class: 't' }, A.n), h('div', { class: 't' }, B.n), keys.flatMap(k => [h('div', { class: 'h' }, k), h('div', { html: A.f[k] || '—' }), h('div', { html: B.f[k] || '—' })]))); };
  a.addEventListener('change', doCmp); b.addEventListener('change', doCmp);
  const quiz = h('div', { class: 'stack' });
  const ask = () => {
    quiz.innerHTML = ''; let pool = ENTS.filter(e => e.ty === 'Condition'); if (pool.length < 4) pool = ENTS.slice(); const e = pick(pool, 1)[0]; const keys = Object.keys(e.f).filter(k => !/Definition|Also called/.test(k)); const k = pick(keys, 1)[0];
    const others = pick(pool.filter(x => x !== e && x.f[k] !== e.f[k]), 3);
    quiz.append(renderQ({ ref: '', m: e.m, s: `Which one is it? <span class="muted">${k}:</span> ${e.f[k]}`, o: [e.n, ...others.map(x => x.n)], t: 1, w: `${e.n} — ${k}: ${e.f[k]}`, tw: others[0] ? `${others[0].n} — ${k}: ${others[0].f[k] || '—'}` : '', src: e.src }, { onDone: () => quiz.append(h('div', { class: 'gate' }, h('button', { class: 'btn small primary', onclick: ask }, 'Another'))) }));
  };
  M.append(...page('Entity hub', ENTS.length + ' entities · conditions, structures, devices, drugs', h('div', { class: 'sec' }, h('h2', null, '“Which one is it?”'), h('span', { class: 'rule' })), quiz,
    h('div', { class: 'sec' }, h('h2', null, 'Compare side by side'), h('span', { class: 'rule' })), h('div', { class: 'grid2' }, a, b), cmp,
    h('div', { class: 'sec' }, h('h2', null, 'All entities'), h('span', { class: 'rule' })), h('div', { class: 'grid2' }, filt, ty), list));
  paint(); doCmp(); ask();
  if (TOOLS.entities.open) { const el = document.getElementById('ent-' + TOOLS.entities.open.replace(/\W+/g, '-')); TOOLS.entities.open = null; if (el) setTimeout(() => el.scrollIntoView(), 60); }
}

/* ---------- visual lab ---------- */
function renderLab(M) {
  const figs = h('div', { class: 'gallery' }, Object.entries(FIGS).map(([fid, f]) => h('button', { onclick: () => { const lb = lightbox(labelFigure(fid), f.title); } }, imgEl(f.img, f.title), h('span', null, f.title))));
  const photos = [];
  MODS.forEach(m => m.steps.forEach(s => { if (s.k === 'photo') photos.push({ ph: s.ph, cap: s.cap, notice: s.notice }); if (s.k === 'card' && s.ph) photos.push({ ph: s.ph, cap: s.h, notice: '' }); }));
  const ph = h('div', { class: 'gallery' }, photos.map(p => h('button', { onclick: () => lightbox(h('figure', { class: 'figure', style: { background: 'var(--surface)', padding: '10px', borderRadius: '12px' } }, imgEl(p.ph, p.cap), h('figcaption', null, p.cap), p.notice ? h('p', { class: 'notice', html: '<b>What to notice · </b>' + p.notice }) : null), p.cap) }, imgEl(p.ph, p.cap), h('span', null, p.cap))));
  const ixs = h('div', { class: 'stack' }, MODS.flatMap(m => m.steps.filter(s => s.k === 'ix' || s.k === 'fig').map(s => { const id = s.k === 'fig' ? 'fig-' + s.fig : s.id; const st = S.ixDone[id]; return h('button', { class: 'result-row', style: { textAlign: 'left' }, onclick: () => { pendingStep = s.i; go(m.id); } }, h('span', null, h('b', null, s.k === 'fig' ? FIGS[s.fig].title : s.title), h('br'), h('small', { class: 'muted' }, 'Module ' + m.n + ' · ' + (s.k === 'fig' ? 'tap-to-label' : s.type))), h('span', { class: 'pill ' + (st === 'done' ? 'done' : st === 'skip' ? 'skip' : '') }, st === 'done' ? '✓' : st === 'skip' ? 'skipped' : 'to do')); })));
  const quiz = h('div', { class: 'stack' });
  const picRefs = [...Object.values(QBANK).filter(q => q.img).map(q => 'Q:' + q.id), ...Object.entries(FIGS).flatMap(([fid, f]) => f.labels.map((_, i) => 'F:' + fid + ':' + i))];
  const ask = () => { quiz.innerHTML = ''; quiz.append(renderRef(pick(picRefs, 1)[0], { onDone: () => quiz.append(h('div', { class: 'gate' }, h('button', { class: 'btn small primary', onclick: ask }, 'Next picture'))) })); };
  M.append(...page('Visual lab', Object.keys(FIGS).length + ' labelled figures · ' + photos.length + ' photos · picture quiz',
    h('div', { class: 'sec' }, h('h2', null, 'Picture quiz'), h('span', { class: 'rule' })), quiz,
    h('div', { class: 'sec' }, h('h2', null, 'Labelled figures'), h('span', { class: 'rule' })), figs,
    h('div', { class: 'sec' }, h('h2', null, 'Photos & drawings'), h('span', { class: 'rule' })), ph,
    h('div', { class: 'sec' }, h('h2', null, 'All interactives'), h('span', { class: 'rule' })), ixs));
  ask();
}

/* ---------- settings ---------- */
function renderSettings(M) {
  const opt = (id, label, cur, opts, on) => { const s = h('select', { id }, opts.map(([v, t]) => h('option', { value: v, selected: String(v) === String(cur) || null }, t))); s.addEventListener('change', () => on(s.value)); return h('div', { class: 'setting' }, h('b', null, label), s); };
  const reset = h('button', { class: 'btn danger small' }, 'Reset all progress');
  const confirmRow = h('div', { class: 'row', hidden: true }, h('span', null, 'This clears answers, flashcards and progress on this device.'), h('button', { class: 'btn danger small', onclick: () => { S = JSON.parse(JSON.stringify(DEFAULT_STATE)); save(); applyTheme(); toast('Progress reset.'); go(''); } }, 'Yes, reset'), h('button', { class: 'btn small', onclick: () => { confirmRow.hidden = true; } }, 'Cancel'));
  reset.addEventListener('click', () => { confirmRow.hidden = false; });
  M.append(...page('Settings', 'Saved on this device', h('div', { class: 'stack' },
    opt('set-q', 'Questions', S.settings.qmode, [['inline', 'Inline, right after each idea'], ['end', 'All at the end of each module']], v => { S.settings.qmode = v; save(); toast('Saved.'); }),
    opt('set-theme', 'Theme', S.settings.theme, [['system', 'Match my device'], ['dark', 'Dark'], ['light', 'Light']], v => { S.settings.theme = v; save(); applyTheme(); Monitor.col = null; }),
    opt('set-sound', 'Sound', S.settings.sound, [[true, 'On (quiet beeps)'], [false, 'Off']], v => { S.settings.sound = v === 'true'; save(); }),
    opt('set-lang', 'Figure-label language', S.settings.lang, [['en', 'English'], ['ar', 'Arabic'], ['both', 'Both']], v => { S.settings.lang = v; save(); }),
    opt('set-layout', 'Module layout', S.settings.layout, [['slides', 'Slides — one step per page, Next / Back'], ['scroll', 'One long scrolling page']], v => { S.settings.layout = v; save(); toast('Saved.'); }),
    Speech.ok ? h('div', { class: 'setting' }, h('b', null, 'Listen (read aloud)'),
      h('label', { class: 'row', style: { gap: '8px' } }, (() => { const c = h('input', { type: 'checkbox', id: 'set-autoread', checked: S.settings.autoread || null }); c.addEventListener('change', () => { S.settings.autoread = c.checked; save(); }); return c; })(), 'Read each card aloud when I open its slide'),
      (() => { const sel = h('select', { id: 'set-rate', 'aria-label': 'Reading speed' }, [[0.75, 'Slow (0.75×)'], [0.9, 'Relaxed (0.9×)'], [1, 'Normal (1×)'], [1.15, 'Brisk (1.15×)'], [1.3, 'Fast (1.3×)']].map(([v, t]) => h('option', { value: v, selected: +S.settings.rate === v || null }, t))); sel.addEventListener('change', () => { S.settings.rate = +sel.value; save(); }); return sel; })(),
      (() => { const sel = h('select', { id: 'set-voice', 'aria-label': 'Voice' }); const fill = () => { const vs = Speech.voices().filter(v => /^en/i.test(v.lang)); sel.innerHTML = ''; sel.append(h('option', { value: '' }, 'Best English voice (automatic)'), ...vs.map(v => h('option', { value: v.name, selected: S.settings.voice === v.name || null }, v.name + ' · ' + v.lang))); }; fill(); try { speechSynthesis.addEventListener('voiceschanged', fill); } catch (e) { } sel.addEventListener('change', () => { S.settings.voice = sel.value; save(); }); return sel; })(),
      h('button', { class: 'btn small', onclick: () => { const d = h('div', null, h('span', { class: 'say' }, 'This is how your study cards will sound. Cover both eyes to limit damage to the affected eye through sympathetic movement.')); Speech.play(d, null, 'en'); } }, 'Test voice')) : h('div', { class: 'setting' }, h('b', null, 'Listen (read aloud)'), h('span', { class: 'muted' }, 'This browser does not support speech.')),
    h('div', { class: 'setting' }, h('b', null, 'Progress'), reset, confirmRow),
    h('p', { class: 'muted' }, 'Instructor deck assumed: ' + INSTRUCTOR_DECK + ' (badges marked ★). Exam format assumed: mostly 4-option MCQ + short answers.'))));
}
