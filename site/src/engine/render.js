/* ===== router, home, module flow ===== */
const ICONS = {
  home: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/>',
  learn: '<path d="M4 5h7a3 3 0 013 3v12a2 2 0 00-2-2H4z"/><path d="M20 5h-5a3 3 0 00-3 3"/><path d="M20 5v13h-6"/>',
  cards: '<rect x="3" y="6" width="14" height="13" rx="2"/><path d="M7 3h12a2 2 0 012 2v11"/>',
  exam: '<path d="M9 4h6v3H9z"/><path d="M7 5H5v16h14V5h-2"/><path d="M8 12l2 2 4-4"/>',
  more: '<circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  mistakes: '<path d="M12 3l9 16H3z"/><path d="M12 10v4M12 17v.5"/>',
  numbers: '<path d="M4 9h16M4 15h16M10 3L8 21M16 3l-2 18"/>',
  cheat: '<path d="M6 3h9l4 4v14H6z"/><path d="M9 11h7M9 15h7M9 7h3"/>',
  entities: '<circle cx="7" cy="7" r="3"/><circle cx="17" cy="7" r="3"/><circle cx="12" cy="17" r="3"/><path d="M9 9l2 5M15 9l-2 5"/>',
  lab: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-8 9"/>',
  arabic: '<path d="M4 6h16M4 12h10M4 18h13"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>',
  spell: '<path d="M4 20l5-14 5 14M6 15h6"/><path d="M15 17l2 2 4-5"/>',
};
ICONS.speaker = '<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 9a4 4 0 010 6M18.5 6.5a8 8 0 010 11"/>';
ICONS.stop = '<rect x="6" y="6" width="12" height="12" rx="2"/>';
ICONS.play = '<path d="M8 5l11 7-11 7z"/>';
ICONS.pause = '<path d="M8 5v14M16 5v14"/>';
ICONS.prev = '<path d="M6 5v14M18 6l-9 6 9 6z"/>';
ICONS.next = '<path d="M18 5v14M6 6l9 6-9 6z"/>';
ICONS.restart = '<path d="M4 12a8 8 0 108-8H8"/><path d="M8 1L5 4l3 3"/>';
ICONS.close = '<path d="M6 6l12 12M18 6L6 18"/>';
const svgI = n => { const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); s.setAttribute('viewBox', '0 0 24 24'); s.setAttribute('aria-hidden', 'true'); s.innerHTML = ICONS[n] || ''; return s; };
let MAIN; let pendingStep = null;

function mountShell() {
  Monitor.mount();
  MAIN = h('main', { class: 'wrap', id: 'main' }); document.body.append(MAIN);
  const nav = h('nav', { class: 'bottomnav', 'aria-label': 'Sections' },
    [['home', 'Home', ''], ['learn', 'Learn', 'learn'], ['cards', 'Cards', 'cards'], ['exam', 'Exam', 'exam'], ['more', 'More', 'tools']].map(([ic, t, r]) => {
      const b = h('button', { 'data-route': r, onclick: () => go(r) }, svgI(ic), h('span', null, t, ic === 'cards' ? h('span', { class: 'badge', id: 'navDue', hidden: true }) : null));
      return b;
    }));
  document.body.append(nav);
  addEventListener('hashchange', route);
}
function go(r) { if (('#' + r) === location.hash || (!r && !location.hash)) route(); else location.hash = r; }
function route() {
  const r = location.hash.replace('#', '');
  $$('.bottomnav button').forEach(b => b.setAttribute('aria-current', (b.dataset.route === r || (b.dataset.route === 'learn' && /^m\d$/.test(r)) || (b.dataset.route === 'tools' && TOOLS[r])) ? 'page' : 'false'));
  MAIN.innerHTML = ''; MAIN.classList.remove('slides-on'); window.scrollTo(0, 0);
  if (!r) renderHome();
  else if (r === 'learn') renderLearn();
  else if (/^m\d$/.test(r) && modById(r)) renderModule(modById(r));
  else if (TOOLS[r]) TOOLS[r].render(MAIN);
  else renderHome();
  Monitor.update();
}

/* ---------- home ---------- */
function ring(pct) {
  const r = 17, c = 2 * Math.PI * r;
  const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); s.setAttribute('viewBox', '0 0 42 42'); s.setAttribute('class', 'ring'); s.setAttribute('aria-label', pct + '% mastery');
  s.innerHTML = `<circle class="bgc" cx="21" cy="21" r="${r}"/><circle class="fgc" cx="21" cy="21" r="${r}" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - pct / 100)}" transform="rotate(-90 21 21)"/><text x="21" y="25" text-anchor="middle">${pct}</text>`;
  return s;
}
function modCard(m) {
  const p = S.prog[m.id]; const pct = moduleMastery(m.id);
  return h('button', { class: 'modcard', onclick: () => go(m.id) },
    h('span', { class: 'modnum' }, String(m.n).padStart(2, '0')),
    h('span', { class: 'stack', style: { gap: '2px', minWidth: 0 } }, h('h3', null, m.title), h('p', null, m.sub), h('span', { class: 'eyebrow', style: { fontSize: '10.5px' } }, m.refs + (p ? ' · ' + Math.min(100, Math.round((p.at + 1) / m.steps.length * 100)) + '% read' : ''))),
    ring(pct));
}
function renderHome() {
  const answered = Object.keys(S.ans).length;
  const last = MODS.find(m => S.prog[m.id] && !S.prog[m.id].done) || MODS.find(m => !S.prog[m.id]) || MODS[0];
  MAIN.append(
    h('section', { class: 'hero' },
      h('span', { class: 'eyebrow' }, 'Paramedic · Diseases of the Eyes, Ears, Nose & Throat'),
      h('h1', { class: 'h-page' }, 'EENT Emergencies Lab'),
      h('p', null, 'Everything in your two files — the HEENT deck (A) and your annotated Chapter 20 notes (B) — as cards, figures, simulators and questions. Every card shows the slides it came from.'),
      h('div', { class: 'row' }, h('button', { class: 'btn primary', onclick: () => go(last.id) }, S.prog[last.id] ? 'Continue: ' + last.title : 'Start: ' + last.title), h('button', { class: 'btn', onclick: () => go('cards') }, 'Flashcards due: ' + SRS.dueCount()))),
    h('div', { class: 'statrow', style: { marginTop: '16px' } },
      h('div', { class: 'stat' }, h('b', null, overallMastery() + '%'), h('span', null, 'mastery')),
      h('div', { class: 'stat' }, h('b', null, answered), h('span', null, 'questions tried')),
      h('div', { class: 'stat' }, h('b', null, Object.keys(S.mistakes).length), h('span', null, 'open mistakes'))),
    h('div', { class: 'sec' }, h('h2', null, 'Modules'), h('span', { class: 'rule' })),
    h('div', { class: 'modlist' }, MODS.map(modCard)),
    h('div', { class: 'sec' }, h('h2', null, 'Tools'), h('span', { class: 'rule' })),
    toolGrid(),
    h('p', { class: 'endnote' }, 'Sources: A = HEENT Emergencies.pptx (slides + speaker notes) · B = EENT & Note.pdf (your highlights ✎). ⚑ = conflict, kept as your notes say.'));
}
function renderLearn() {
  MAIN.append(h('span', { class: 'eyebrow' }, 'Six modules, each builds on the last'), h('h1', { class: 'h-page', style: { margin: '6px 0 14px' } }, 'Learn'), h('div', { class: 'modlist' }, MODS.map(modCard)));
}
function toolGrid() {
  return h('div', { class: 'toolgrid' }, Object.entries(TOOLS).filter(([, t]) => !t.hidden).map(([k, t]) => h('button', { class: 'tool', onclick: () => go(k) }, svgI(t.icon), h('b', null, t.name), h('span', null, t.blurb))));
}

/* ---------- module flow ---------- */
function isGate(s) { return ['think', 'q', 'fig', 'ix', 'sa', 'spell'].includes(s.k); }
function flowSteps(m) { return m.steps.filter(s => !(S.settings.qmode === 'end' && (s.k === 'q' || s.k === 'sa'))); }
function renderModule(m) { if (S.settings.layout === 'scroll') renderModuleScroll(m); else renderModuleSlides(m); }
function renderModuleScroll(m) {
  const steps = flowSteps(m);
  const prog = S.prog[m.id] || (S.prog[m.id] = { at: -1, done: false });
  if (prog.at < 0) prog.at = nextGateIndex(steps, -1);
  if (pendingStep != null) { const k = steps.findIndex(s => s.i === pendingStep); if (k > prog.at) prog.at = nextGateIndex(steps, k - 1); }
  save();
  const bar = h('div', { class: 'progress', role: 'progressbar', 'aria-label': 'Module progress' }, h('i'));
  const secs = steps.filter(s => s.k === 'sec');
  const jump = h('select', { id: 'jump-' + m.id, 'aria-label': 'Jump to section' }, h('option', { value: '' }, 'Jump to section…'), secs.map(s => h('option', { value: s.i }, s.h)));
  jump.addEventListener('change', () => { if (!jump.value) return; pendingStep = +jump.value; route(); });
  MAIN.append(h('header', { class: 'modhead' },
    h('span', { class: 'eyebrow' }, 'Module ' + m.n + ' · ' + m.refs),
    h('h1', { class: 'h-page' }, m.title), h('p', { class: 'muted' }, m.sub),
    h('div', { class: 'ar muted', lang: 'ar' }, m.ar), bar, jump));
  const flow = h('div', { class: 'stack', style: { marginTop: '10px' } }); MAIN.append(flow);
  const gateBox = h('div', { class: 'gate' });
  let at = prog.at;
  const paintBar = () => { $('i', bar).style.width = Math.round((at + 1) / steps.length * 100) + '%'; };
  for (let k = 0; k <= Math.min(at, steps.length - 1); k++) flow.append(renderStep(m, steps[k]));
  const more = () => {
    gateBox.innerHTML = '';
    if (at >= steps.length - 1) { prog.done = true; save(); flow.append(renderModuleEnd(m)); return; }
    gateBox.append(h('button', { class: 'btn primary', onclick: () => {
      const from = at + 1; at = nextGateIndex(steps, at); prog.at = at; save();
      for (let k = from; k <= at; k++) { const el = renderStep(m, steps[k]); flow.append(el); if (k === from) setTimeout(() => el.scrollIntoView({ behavior: RM() ? 'auto' : 'smooth', block: 'start' }), 30); }
      paintBar(); flow.append(gateBox); more();
    } }, 'Continue'));
  };
  flow.append(gateBox); more(); paintBar();
  if (pendingStep != null) { const el = flow.querySelector(`[data-step="${pendingStep}"]`); pendingStep = null; if (el) setTimeout(() => { el.scrollIntoView({ block: 'start' }); el.style.outline = '2px solid var(--amber)'; setTimeout(() => el.style.outline = '', 1600); }, 60); }
}
function nextGateIndex(steps, from) {
  for (let k = from + 1; k < steps.length; k++) if (isGate(steps[k])) return k;
  return steps.length - 1;
}

function renderStep(m, s) {
  let el;
  switch (s.k) {
    case 'sec': el = h('div', { class: 'sec' }, h('h2', null, s.h), h('span', { class: 'rule' })); break;
    case 'card': el = cardEl(s); break;
    case 'think': {
      const ans = h('div', { class: 'reveal', hidden: true, html: s.a });
      const btn = h('button', { class: 'btn small primary' }, 'Reveal');
      btn.addEventListener('click', () => { ans.hidden = false; btn.remove(); });
      el = h('div', { class: 'card think' }, h('span', { class: 'eyebrow' }, 'Think first'), h('div', { class: 'q say', html: s.q }), h('div', { class: 'row' }, btn, h('span', { class: 'row', style: { gap: '6px' } }, srcPills(s))), ans);
      ans.classList.add('say');
      break;
    }
    case 'q': el = h('div', { class: 'stack' }, h('span', { class: 'eyebrow' }, 'Check yourself'), s.ids.map(id => renderRef(id.includes(':') ? id : 'Q:' + id))); break;
    case 'sa': el = renderSA(SABANK[s.id]); break;
    case 'spell': el = h('div', { class: 'stack' }, h('span', { class: 'eyebrow' }, 'Spelling (your handwritten list)'), s.terms.map(t => renderSpell(SPELL.find(x => x.t === t)))); break;
    case 'fig': el = labelFigure(s.fig); break;
    case 'photo': el = photoStep(s); break;
    case 'table': el = tableStep(s); break;
    case 'ix': el = ixEl(s); break;
    default: el = h('div');
  }
  el.dataset.step = s.i;
  return el;
}
function ixEl(s) {
  const f = { seq: sequenceIx, sort: sortIx, match: matchIx, triage: triageIx, case: caseIx, compare: compareIx, timer: timerIx,
    glaucoma: glaucomaSim, meniere: meniereSim, epistaxis: epistaxisSim, epiglottitis: epiglottitisSim, irrigation: irrigationSim, eye3d: eye3D, ear3d: ear3D }[s.type];
  return f ? f(s) : h('div');
}
function cardEl(s) {
  const c = h('article', { class: 'card appear', id: 'card-' + s.id });
  c.append(h('h3', null, s.h));
  if (s.ph) c.append(h('figure', { class: 'figure' }, zoomable(s.ph, s.h), s.cap ? h('figcaption', null, s.cap) : null));
  const body = rich(s.b); wrapRuns(body); c.append(body);
  if (s.flag) c.append(h('div', { class: 'flagbox', html: '<b>⚑ Conflict · </b>' + s.flag }));
  if (s.beyond) c.append(h('div', { class: 'beyond', html: '<b>Beyond your notes</b>' + s.beyond }));
  c.append(h('div', { class: 'meta' }, srcPills(s), Speech.ok ? Speech.button(c) : null));
  c.append(...explainTools(s));
  return c;
}

/* ---------- slide mode: one step per page ---------- */
function buildSlides(m) {
  const out = []; let sec = '';
  flowSteps(m).forEach(s => {
    if (s.k === 'sec') { sec = s.h; return; }
    if (s.k === 'q') s.ids.forEach((id, j) => out.push({ kind: 'q', ref: id.includes(':') ? id : 'Q:' + id, s, sec, n: j + 1, of: s.ids.length }));
    else out.push({ kind: 'step', s, sec });
  });
  if (S.settings.qmode === 'end') {
    m.steps.filter(s => s.k === 'q').forEach(s => s.ids.forEach((id, j) => out.push({ kind: 'q', ref: id.includes(':') ? id : 'Q:' + id, s, sec: 'Module questions', n: j + 1, of: s.ids.length })));
    m.steps.filter(s => s.k === 'sa').forEach(s => out.push({ kind: 'step', s, sec: 'Module questions' }));
  }
  [['lock', 'Finish strong · Lock-in'], ['recall', 'Finish strong · Recall'], ['hooks', 'Finish strong · Memory hooks'], ['ar', 'Finish strong · ملخص بالعربي'], ['done', 'Module complete']].forEach(([k, t]) => out.push({ kind: k, sec: t }));
  return out;
}
function renderModuleSlides(m) {
  const slides = buildSlides(m);
  const prog = S.prog[m.id] || (S.prog[m.id] = { at: -1, done: false });
  let at = Math.max(0, Math.min(slides.length - 1, prog.slide || 0));
  if (pendingStep != null) { const k = slides.findIndex(x => x.s && x.s.i === pendingStep); if (k >= 0) at = k; pendingStep = null; }
  const secStarts = []; slides.forEach((x, i) => { if (!secStarts.length || secStarts[secStarts.length - 1].sec !== x.sec) secStarts.push({ sec: x.sec, i }); });
  const bar = h('div', { class: 'progress', role: 'progressbar', 'aria-label': 'Module progress' }, h('i'));
  const count = h('span', { class: 'mono slidecount', 'aria-live': 'polite' });
  const jump = h('select', { id: 'jump-' + m.id, 'aria-label': 'Jump to section' }, h('option', { value: '' }, 'Jump to section…'), secStarts.map(x => h('option', { value: x.i }, x.sec)));
  jump.addEventListener('change', () => { if (jump.value === '') return; show(+jump.value, 1); jump.value = ''; });
  MAIN.classList.add('slides-on');
  MAIN.append(h('header', { class: 'slidehead' },
    h('div', { class: 'row', style: { justifyContent: 'space-between', flexWrap: 'nowrap' } }, h('span', { class: 'eyebrow' }, 'Module ' + m.n + ' · ' + m.title.split(' — ')[0]), count),
    bar, jump));
  const stage = h('div', { class: 'slidestage', id: 'slide-stage' }); MAIN.append(stage);
  const back = h('button', { class: 'btn', id: 'slidePrev', 'aria-label': 'Previous slide' }, '‹ Back');
  const listen = h('button', { class: 'btn listenbtn', id: 'slideListen', 'aria-label': 'Listen to this slide', hidden: true }, svgI('speaker'));
  const next = h('button', { class: 'btn primary', id: 'slideNext' }, 'Next ›');
  const nav = h('nav', { class: 'slidebar', 'aria-label': 'Slide navigation' }, back, listen, next);
  MAIN.append(nav);
  back.addEventListener('click', () => show(at - 1, -1));
  next.addEventListener('click', () => { if (at >= slides.length - 1) { MODS[m.n] ? go(MODS[m.n].id) : go('exam'); return; } show(at + 1, 1); });
  listen.addEventListener('click', () => Speech.toggleIn(stage, listen));
  function slideEl(x) {
    if (x.kind === 'q') return h('div', { class: 'stack' }, h('span', { class: 'eyebrow' }, 'Check yourself · ' + x.n + ' of ' + x.of), renderRef(x.ref));
    if (x.kind === 'lock') return lockIn(m);
    if (x.kind === 'recall') return recallScreen(m);
    if (x.kind === 'hooks') return hooksEl(m);
    if (x.kind === 'ar') return arabicEl(m);
    if (x.kind === 'done') return h('section', { class: 'card', style: { textAlign: 'center' } },
      h('span', { class: 'eyebrow' }, 'Module ' + m.n + ' complete'), h('h2', null, m.title), h('div', { class: 'statrow' },
        h('div', { class: 'stat' }, h('b', null, moduleMastery(m.id) + '%'), h('span', null, 'mastery')),
        h('div', { class: 'stat' }, h('b', null, Object.keys(S.mistakes).filter(r => refModule(r) === m.id).length), h('span', null, 'open mistakes')),
        h('div', { class: 'stat' }, h('b', null, SRS.queue(m.id).length), h('span', null, 'cards due'))),
      h('div', { class: 'row', style: { justifyContent: 'center' } }, h('button', { class: 'btn', onclick: () => go('mistakes') }, 'My mistakes'), h('button', { class: 'btn', onclick: () => go('cards') }, 'Flashcards')));
    return renderStep(m, x.s);
  }
  function show(i, dir) {
    if (i < 0 || i >= slides.length) return;
    Speech.stop();
    at = i; prog.slide = i; prog.at = Math.max(prog.at, slides[i].s ? flowSteps(m).indexOf(slides[i].s) : prog.at);
    if (i >= slides.length - 5) prog.done = true;
    save();
    const x = slides[i];
    stage.innerHTML = '';
    const page = h('div', { class: 'slide ' + (dir > 0 ? 'in-r' : dir < 0 ? 'in-l' : '') , 'data-idx': i, 'data-total': slides.length });
    page.append(h('div', { class: 'slidesec' }, x.sec || m.title), slideEl(x));
    stage.append(page);
    count.textContent = (i + 1) + ' / ' + slides.length;
    $('i', bar).style.width = Math.round((i + 1) / slides.length * 100) + '%';
    back.disabled = i === 0;
    next.textContent = i >= slides.length - 1 ? (MODS[m.n] ? 'Next module ›' : 'Build an exam ›') : 'Next ›';
    listen.hidden = !Speech.ok || !Speech.hasText(page);
    window.scrollTo(0, 0);
    if (S.settings.autoread && !listen.hidden && dir) setTimeout(() => Speech.toggleIn(stage, listen), 350);
  }
  // swipe + keys
  let tx = null, ty = 0;
  stage.addEventListener('touchstart', e => { const t = e.target; if (t.closest('.labelfig,.threebox,.simstage,input,textarea,select,canvas,.tbl')) { tx = null; return; } tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
  stage.addEventListener('touchend', e => { if (tx == null) return; const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty; tx = null; if (Math.abs(dx) > 70 && Math.abs(dy) < 50) dx < 0 ? next.click() : show(at - 1, -1); }, { passive: true });
  const onKey = e => { if (!document.body.contains(stage)) { removeEventListener('keydown', onKey); return; } if (e.target.closest && e.target.closest('input,textarea,select')) return; if (e.key === 'ArrowRight') next.click(); else if (e.key === 'ArrowLeft') show(at - 1, -1); };
  addEventListener('keydown', onKey);
  show(at, 0);
}

/* ---------- end of module ---------- */
function renderModuleEnd(m) {
  const box = h('div', { class: 'stack' });
  box.append(h('div', { class: 'sec' }, h('h2', null, 'Finish strong'), h('span', { class: 'rule' })));
  if (S.settings.qmode === 'end') {
    const refs = m.steps.filter(s => s.k === 'q').flatMap(s => s.ids.map(id => id.includes(':') ? id : 'Q:' + id));
    box.append(h('span', { class: 'eyebrow' }, 'Module questions (' + refs.length + ')'), ...refs.map(r => renderRef(r)), ...m.steps.filter(s => s.k === 'sa').map(s => renderSA(SABANK[s.id])));
  }
  box.append(lockIn(m), recallScreen(m), hooksEl(m), arabicEl(m));
  box.append(h('div', { class: 'row', style: { justifyContent: 'center', marginTop: '10px' } },
    MODS[m.n] ? h('button', { class: 'btn primary', onclick: () => go(MODS[m.n].id) }, 'Next: ' + MODS[m.n].title) : h('button', { class: 'btn primary', onclick: () => go('exam') }, 'Build a mixed exam')));
  return box;
}
function lockIn(m) {
  const box = h('section', { class: 'ix' }, h('div', { class: 'ixhead' }, h('div', null, h('span', { class: 'tag' }, 'Lock-in round'), h('h3', null, 'Re-ask until right'))),
    h('p', { class: 'howto' }, 'Your misses from this module come back until you get each one right. No misses yet? You get 6 mixed questions; any you miss join the queue.'));
  const stage = h('div', { class: 'stack' }); box.append(stage);
  const start = h('button', { class: 'btn primary small' }, 'Start lock-in');
  box.append(start);
  start.addEventListener('click', () => {
    start.remove();
    let queue = Object.keys(S.mistakes).filter(r => refModule(r) === m.id && !r.startsWith('S:') && !r.startsWith('A:'));
    if (!queue.length) queue = pick(poolFor([m.id]), 6);
    let done = 0;
    const next = () => {
      stage.innerHTML = '';
      if (!queue.length) { stage.append(h('div', { class: 'fb ok' }, `Locked in: ${done} question${done === 1 ? '' : 's'} answered right.`)); return; }
      const ref = queue[0];
      stage.append(h('span', { class: 'eyebrow' }, queue.length + ' left'), renderRef(ref, { onDone: ok => { queue.shift(); if (!ok) queue.push(ref); else done++; stage.append(h('div', { class: 'gate' }, h('button', { class: 'btn small primary', onclick: next }, queue.length ? 'Next' : 'Finish'))); } }));
    };
    next();
  });
  return box;
}
function recallScreen(m) {
  const box = h('section', { class: 'ix' }, h('div', { class: 'ixhead' }, h('div', null, h('span', { class: 'tag' }, 'Recall screen'), h('h3', null, 'Write the lists from memory'))),
    h('p', { class: 'howto' }, 'Pick a list, write it out, reveal, tick what you got. Anything you miss goes to the front of your flashcards.'));
  const sel = h('select', { id: 'recall-' + m.id, 'aria-label': 'Choose a list' }, m.lists.map(l => h('option', { value: l.id }, `${l.title} (${l.items.length})${S.recall[l.id] ? ' — last ' + S.recall[l.id].hit + '/' + S.recall[l.id].tot : ''}`)));
  const ta = h('textarea', { id: 'recall-ta-' + m.id, placeholder: 'One item per line…', 'aria-label': 'Your list' });
  const out = h('div', { class: 'stack' });
  const rev = h('button', { class: 'btn small primary' }, 'Reveal & mark');
  rev.addEventListener('click', () => {
    const l = LISTS[sel.value]; out.innerHTML = '';
    const typed = norm(ta.value);
    const cl = h('div', { class: 'checklist' }, l.items.map((it, i) => { const guess = norm(it).split(' ').filter(w => w.length > 3).some(w => typed.includes(w)); return h('label', null, h('input', { type: 'checkbox', id: 'rc-' + l.id + '-' + i, checked: guess || null }), h('span', { html: it })); }));
    const fin = h('button', { class: 'btn small primary' }, 'Save marks');
    fin.addEventListener('click', () => {
      const boxes = $$('input', cl); const hit = boxes.filter(b => b.checked).length;
      S.recall[l.id] = { hit, tot: boxes.length, t: today() };
      if (hit < boxes.length) { SRS.toFront('L:' + l.id); toast('Missed items → front of your flashcards.'); } else toast('Perfect recall.');
      save(); fin.disabled = true; recordAnswer('R:' + l.id, hit === boxes.length, m.id);
    });
    out.append(h('div', { class: 'eyebrow' }, l.ordered ? 'In order · ' + l.src : l.src + ' · auto-ticked where your words matched — check them'), cl, fin);
  });
  box.append(sel, ta, rev, out);
  return box;
}
function hooksEl(m) {
  return h('section', { class: 'card' }, h('span', { class: 'eyebrow' }, 'Memory hooks'), h('div', { class: 'stack', style: { gap: '10px' } },
    m.hooks.map(([t, b]) => h('div', null, h('b', { html: t }), h('div', { class: 'body', html: b })))),
    h('p', { class: 'muted', style: { fontSize: '13px' } }, 'Hooks are memory aids made for you, not slide content; the facts inside them are from your notes.'));
}
function arabicEl(m) {
  const sec = h('section', { class: 'card', id: 'ar-' + m.id }, h('span', { class: 'eyebrow' }, 'ملخص بالعربي · Arabic summary'), h('div', { class: 'ar body', lang: 'ar', html: m.arSum }));
  if (Speech.ok) sec.append(h('div', { class: 'meta' }, Speech.button(sec, 'ar')));
  return sec;
}
