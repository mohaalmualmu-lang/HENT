/* ===== core: registries, storage, utils, router, monitor ===== */
'use strict';
const MODS = [];            // modules in order
const QBANK = {};           // id -> question
const LISTS = {};           // id -> list
const SABANK = {};          // id -> short answer
const FLASHES = [];         // explicit flashcards
const ENTS = [];            // entities
const NUMS = [];            // numbers
const SPELL = [];           // spelling terms
const HOOKS = {};           // module id -> hooks
const IX = {};              // interactive id -> config (registered by content)
const QA_SOLVERS = {};      // interactive id -> function that completes it (headless QA)

function MOD(m) {
  m.steps = m.steps || [];
  m.lists = m.lists || []; m.qs = m.qs || []; m.sa = m.sa || []; m.flash = m.flash || [];
  m.ents = m.ents || []; m.nums = m.nums || []; m.spell = m.spell || []; m.hooks = m.hooks || [];
  m.lists.forEach(l => { l.m = m.id; LISTS[l.id] = l; });
  m.qs.forEach(q => { q.m = m.id; QBANK[q.id] = q; });
  m.sa.forEach(s => { s.m = m.id; SABANK[s.id] = s; });
  m.flash.forEach((f, i) => FLASHES.push({ id: m.id + 'f' + i, m: m.id, f: f[0], b: f[1], src: f[2] || '' }));
  m.ents.forEach(e => { e.m = m.id; ENTS.push(e); });
  m.nums.forEach((n, i) => { n.m = m.id; n.id = n.id || m.id + 'n' + i; NUMS.push(n); });
  m.spell.forEach(s => { s.m = m.id; SPELL.push(s); });
  m.steps.forEach((s, i) => { s.i = i; if (s.k === 'ix') { s.id = s.id || m.id + 'ix' + i; IX[s.id] = s; } });
  MODS.push(m);
}

/* ---------- utils ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
function h(tag, attrs, ...kids) {
  const el = document.createElement(tag);
  if (attrs) for (const [k, v] of Object.entries(attrs)) {
    if (v == null || v === false) continue;
    if (k === 'class') el.className = v;
    else if (k === 'html') el.innerHTML = v;
    else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
    else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
    else el.setAttribute(k, v === true ? '' : v);
  }
  for (const kid of kids.flat(Infinity)) {
    if (kid == null || kid === false) continue;
    el.append(kid.nodeType ? kid : document.createTextNode(String(kid)));
  }
  return el;
}
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function pick(a, n) { return shuffle(a).slice(0, n); }
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const strip = s => String(s || '').replace(/<[^>]+>/g, '');
const norm = s => strip(s).toLowerCase().replace(/[’']/g, "'").replace(/[^a-z0-9%°'؀-ۿ]+/g, ' ').trim();
const today = () => Math.floor(Date.now() / 86400000);
function modById(id) { return MODS.find(m => m.id === id); }

/* ---------- storage (try/catch everywhere) ---------- */
const STORE_KEY = 'eent-lab-v1';
const DEFAULT_STATE = {
  settings: { qmode: 'inline', theme: 'system', sound: true, lang: 'en', layout: 'slides', autoread: false, rate: 1, voice: '' },
  prog: {},        // modId -> {at: revealed step index, done: bool}
  ixDone: {},      // ixId -> 'done' | 'skip'
  ans: {},         // qid -> {n: attempts, c: correct count, last: 0/1, t: day}
  mistakes: {},    // qid -> {m, t}
  srs: {},         // cardId -> {box, due}
  front: [],       // card ids to show first
  recall: {},      // listId -> {hit, tot, t}
  streak: 0, best: 0,
  seenCards: {},
};
let S = JSON.parse(JSON.stringify(DEFAULT_STATE));
function load() {
  try { const raw = localStorage.getItem(STORE_KEY); if (raw) { const o = JSON.parse(raw); S = Object.assign({}, S, o); S.settings = Object.assign({}, DEFAULT_STATE.settings, o.settings || {}); } } catch (e) { /* storage blocked */ }
}
let saveT = 0;
function save() { clearTimeout(saveT); saveT = setTimeout(() => { try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) { } }, 120); }

/* ---------- answers / mastery ---------- */
function recordAnswer(qid, ok, mid) {
  const a = S.ans[qid] || (S.ans[qid] = { n: 0, c: 0, last: 0 });
  a.n++; if (ok) a.c++; a.last = ok ? 1 : 0; a.t = today();
  const track = !/^R:/.test(qid);
  if (ok) { delete S.mistakes[qid]; S.streak++; S.best = Math.max(S.best, S.streak); }
  else { if (track) S.mistakes[qid] = { m: mid || '', t: Date.now() }; S.streak = 0; }
  save(); Monitor.pulse(ok); Sound.play(ok ? 'ok' : 'no'); Monitor.update();
}
function moduleMastery(mid) {
  const ids = Object.keys(S.ans).filter(id => qModule(id) === mid);
  const m = modById(mid);
  const prog = S.prog[mid] ? Math.min(1, (S.prog[mid].at + 1) / m.steps.length) : 0;
  if (!ids.length) return Math.round(prog * 40);
  const acc = ids.reduce((s, id) => s + S.ans[id].last, 0) / ids.length;
  return Math.round(prog * 40 + acc * 60);
}
function qModule(id) { return (typeof refModule === 'function' && refModule(id)) || (S.mistakes[id] && S.mistakes[id].m) || ''; }
function overallMastery() { return Math.round(MODS.reduce((s, m) => s + moduleMastery(m.id), 0) / MODS.length); }

/* ---------- sound ---------- */
const Sound = {
  ctx: null,
  play(kind) {
    if (!S.settings.sound) return;
    try {
      this.ctx = this.ctx || new (window.AudioContext || window.webkitAudioContext)();
      const c = this.ctx, t = c.currentTime;
      const notes = kind === 'ok' ? [[880, 0], [1320, .09]] : kind === 'no' ? [[220, 0], [180, .12]] : [[660, 0]];
      notes.forEach(([f, d]) => {
        const o = c.createOscillator(), g = c.createGain();
        o.type = kind === 'no' ? 'triangle' : 'sine'; o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, t + d); g.gain.exponentialRampToValueAtTime(0.05, t + d + .015); g.gain.exponentialRampToValueAtTime(0.0001, t + d + .16);
        o.connect(g).connect(c.destination); o.start(t + d); o.stop(t + d + .2);
      });
    } catch (e) { }
  }
};

/* ---------- monitor strip ---------- */
const Monitor = {
  cv: null, ctx: null, x: 0, pts: [], spike: 0, mode: 'ok', last: 0,
  mount() {
    const bar = h('div', { class: 'monitor', role: 'status', 'aria-label': 'Study vitals' },
      h('div', { class: 'trace' }, h('canvas', { id: 'ecg', 'aria-hidden': 'true' }), h('span', { class: 'brand' }, 'EENT · Lead II')),
      h('div', { class: 'vitals' },
        h('div', { class: 'vital v-due', title: 'Flashcards due today' }, h('b', { id: 'vDue' }, '0'), h('span', null, 'Due')),
        h('div', { class: 'vital v-mast', title: 'Overall mastery' }, h('b', { id: 'vMast' }, '0%'), h('span', null, 'Mastery')),
        h('div', { class: 'vital v-streak', title: 'Correct answers in a row' }, h('b', { id: 'vStreak' }, '0'), h('span', null, 'Streak'))));
    document.body.prepend(bar);
    this.cv = $('#ecg'); this.ctx = this.cv.getContext('2d');
    const rm = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    const resize = () => { const r = this.cv.getBoundingClientRect(); this.cv.width = Math.max(10, r.width * devicePixelRatio); this.cv.height = Math.max(10, r.height * devicePixelRatio); this.x = 0; };
    resize(); addEventListener('resize', resize);
    if (rm) { this.drawStatic(); return; }
    const loop = (t) => { this.step(t); requestAnimationFrame(loop); };
    requestAnimationFrame(loop);
  },
  wave(phase) { // one PQRST beat, phase 0..1
    const g = (c, w, a) => a * Math.exp(-Math.pow((phase - c) / w, 2));
    let y = g(.18, .035, .12) - g(.36, .012, .12) + g(.40, .014, 1) - g(.44, .014, .25) + g(.68, .06, .28);
    if (this.mode === 'no') y = y * .35 + Math.sin(phase * 40) * .05;
    return y;
  },
  step(t) {
    const c = this.ctx, W = this.cv.width, H = this.cv.height; if (!W) return;
    const dt = Math.min(50, t - (this.last || t)); this.last = t;
    const pxPerMs = W / 3600; // ~3.6 s across the strip
    this.acc = (this.acc || 0) + pxPerMs * dt; const n = Math.floor(this.acc); this.acc -= n;
    if (!this.col || (this.colT = (this.colT || 0) + dt) > 500) { this.colT = 0; this.col = getComputedStyle(document.documentElement).getPropertyValue(this.mode === 'no' ? '--coral' : '--trace').trim() || '#2ed3c3'; }
    const col = this.col;
    const bpm = this.spike > 0 ? 120 : 72; this.spike = Math.max(0, this.spike - dt);
    for (let i = 0; i < n; i += 1) {
      this.x = (this.x + 1) % W;
      this.phase = ((this.phase || 0) + bpm / 60 / (pxPerMs * 1000)) % 1;
      const y = H * .62 - this.wave(this.phase) * H * .5;
      c.clearRect(this.x, 0, 8 * devicePixelRatio, H);
      c.strokeStyle = col; c.lineWidth = 1.6 * devicePixelRatio; c.beginPath();
      c.moveTo(this.x - 1, this.py == null ? y : this.py); c.lineTo(this.x, y); c.stroke();
      this.py = this.x === 0 ? null : y;
    }
  },
  drawStatic() {
    const c = this.ctx, W = this.cv.width, H = this.cv.height;
    c.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--trace').trim(); c.lineWidth = 1.5 * devicePixelRatio; c.beginPath();
    for (let x = 0; x < W; x++) { const ph = (x / (W / 4)) % 1; const y = H * .62 - this.wave(ph) * H * .5; x ? c.lineTo(x, y) : c.moveTo(x, y); }
    c.stroke();
  },
  pulse(ok) { this.mode = ok ? 'ok' : 'no'; this.spike = ok ? 2500 : 0; clearTimeout(this.mt); this.mt = setTimeout(() => this.mode = 'ok', 2200); },
  update() {
    const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    set('vDue', SRS.dueCount()); set('vMast', overallMastery() + '%'); set('vStreak', S.streak);
    const b = document.getElementById('navDue'); if (b) { const d = SRS.dueCount(); b.textContent = d; b.hidden = !d; }
  }
};

/* ---------- toast & lightbox ---------- */
function toast(msg) {
  const t = h('div', { class: 'toast', role: 'status' }, msg); document.body.append(t);
  setTimeout(() => t.remove(), 2200);
}
function lightbox(content, title) {
  const close = () => { lb.remove(); document.removeEventListener('keydown', onKey); };
  const onKey = e => { if (e.key === 'Escape') close(); };
  const lb = h('div', { class: 'lightbox', role: 'dialog', 'aria-modal': 'true', 'aria-label': title || 'Figure' },
    h('div', { class: 'lbbar' }, h('b', null, title || ''), h('button', { onclick: close, 'aria-label': 'Close full screen' }, '✕')),
    h('div', { class: 'lbbody' }, content));
  document.body.append(lb); document.addEventListener('keydown', onKey); lb.querySelector('button').focus();
  return lb;
}
function imgSrc(id) { return IMG[id] || IMG['ph_' + id] || IMG['fig_' + id] || ''; }
function imgEl(id, alt, extra) {
  return h('img', Object.assign({ src: imgSrc(id), alt: alt || '', decoding: 'async' }, extra || {}));
}
function zoomable(id, alt) {
  const im = imgEl(id, alt); im.addEventListener('click', () => lightbox(imgEl(id, alt), alt)); return im;
}

/* ---------- theme ---------- */
function applyTheme() {
  const t = S.settings.theme;
  if (t === 'system') document.documentElement.removeAttribute('data-theme');
  else document.documentElement.setAttribute('data-theme', t);
}

/* ---------- source pills ---------- */
function srcPills(o) {
  const out = [];
  if (o.src) out.push(h('span', { class: 'pill src', title: 'Source slides (A = HEENT Emergencies.pptx, B = EENT & Note.pdf)' }, o.src));
  if (o.hl) out.push(h('span', { class: 'pill hl', title: 'You highlighted this in your notes' }, '✎ highlighted'));
  if (o.only) out.push(h('span', { class: 'pill only', title: 'Appears in only one of your files' }, o.only + '-only' + (o.only === INSTRUCTOR_DECK ? ' ★' : '')));
  if (o.flag) out.push(h('span', { class: 'pill flag', title: 'Conflict — see the note' }, '⚑ conflict'));
  return out;
}
/* ---------- rich text: <k>term</k>, <n>number</n> ---------- */
function rich(html) { return h('div', { class: 'body', html }); }
