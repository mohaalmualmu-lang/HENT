/* ===== figure interactives: tap-to-label + sequence/route builder ===== */

function ixShell(id, tag, title, howto, src) {
  const st = S.ixDone[id];
  const box = h('section', { class: 'ix appear', 'data-ix': id, 'aria-label': title });
  const status = h('span', { class: 'pill ' + (st === 'done' ? 'done' : st === 'skip' ? 'skip' : ''), 'data-status': '' }, st === 'done' ? '✓ done' : st === 'skip' ? 'skipped' : 'to do');
  box.append(h('div', { class: 'ixhead' }, h('div', { class: 'stack', style: { gap: '4px' } }, h('span', { class: 'tag' }, tag), h('h3', null, title)), status));
  if (howto) box.append(h('p', { class: 'howto', html: howto }));
  const foot = h('div', { class: 'ixfoot' }, h('span', { class: 'row', style: { gap: '6px' } }, srcPills({ src })),
    h('button', { class: 'btn small ghost', onclick: () => { if (S.ixDone[id] !== 'done') { S.ixDone[id] = 'skip'; save(); setStatus('skip'); toast('Skipped — it stays marked so you can come back.'); } } }, 'Skip for now'));
  function setStatus(s) { status.className = 'pill ' + (s === 'done' ? 'done' : s === 'skip' ? 'skip' : ''); status.textContent = s === 'done' ? '✓ done' : s === 'skip' ? 'skipped' : 'to do'; }
  box.complete = () => { S.ixDone[id] = 'done'; save(); setStatus('done'); Sound.play('ok'); Monitor.pulse(true); Monitor.update(); box.dispatchEvent(new CustomEvent('ixdone', { bubbles: true })); };
  box.foot = foot;
  return box;
}

/* ---------- tap-to-label ---------- */
function labelFigure(fid, opts = {}) {
  const f = FIGS[fid]; const id = 'fig-' + fid;
  const dense = f.labels.length > 7;
  const box = ixShell(id, 'Tap-to-label · ' + f.labels.length + ' labels', f.title,
    dense ? 'Numbered dots sit where the labels were. <b>Learn</b>: read the legend, tap a dot to highlight it. <b>Quiz</b>: find each structure.' :
      '<b>Learn</b>: tap a blank chip to reveal it. <b>Quiz</b>: “Find: X” — tap the right chip.', f.ref);
  let mode = 'learn', lang = S.settings.lang || 'en';
  const fig = h('div', { class: 'labelfig' }, imgEl(f.img, f.title));
  const chips = f.labels.map((L, i) => {
    const c = h('button', { class: 'lchip' + (dense ? ' dot' : ''), style: { left: L.x + '%', top: L.y + '%' }, 'data-i': i, 'aria-label': dense ? 'Label ' + (i + 1) : 'Hidden label' });
    fig.append(c); return c;
  });
  const fbLead = h('span', null, 'Find: '), fbWhat = h('span', { class: 'what' }), fbCount = h('span', { class: 'mono muted' });
  const findbar = h('div', { class: 'findbar', hidden: true }, h('span', null, fbLead, fbWhat), fbCount);
  const legend = h('div', { class: 'legend' });
  const seg = (labels, cur, on) => h('div', { class: 'seg', role: 'group' }, labels.map(([v, t]) => h('button', { 'aria-pressed': String(v === cur), onclick: e => { $$('button', e.target.parentNode).forEach(b => b.setAttribute('aria-pressed', 'false')); e.target.setAttribute('aria-pressed', 'true'); on(v); } }, t)));
  const name = L => lang === 'ar' ? L.ar : lang === 'both' ? L.t.replace(/ \(lower\)/, '') + ' · ' + L.ar : L.t.replace(/ \(lower\)/, '');
  const revealed = new Set();
  function paintLearn() {
    findbar.hidden = true;
    chips.forEach((c, i) => {
      c.className = 'lchip' + (dense ? ' dot' : '') + (lang === 'ar' && !dense ? ' ar' : '') + (!dense && f.labels.length > 5 ? ' small' : '');
      c.textContent = dense ? String(i + 1) : (revealed.has(i) ? name(f.labels[i]) : '?');
      if (!dense && !revealed.has(i)) c.classList.add('hid');
    });
    legend.innerHTML = '';
    if (dense) f.labels.forEach((L, i) => legend.append(h('span', { class: lang === 'ar' ? 'ar' : '', 'data-li': i }, h('b', null, i + 1), name(L))));
    else legend.append(h('span', { class: 'muted' }, revealed.size + ' / ' + f.labels.length + ' revealed'));
  }
  let queue = [], cur = -1, misses = 0;
  function startQuiz() {
    mode = 'quiz'; queue = shuffle(f.labels.map((_, i) => i)); misses = 0; next();
  }
  function next() {
    chips.forEach((c, i) => { c.className = 'lchip dot'; c.textContent = dense ? String(i + 1) : ''; if (!dense) c.textContent = '•'; });
    if (!queue.length) {
      findbar.hidden = false; fbLead.textContent = 'All found.'; fbWhat.textContent = '';
      fbCount.textContent = misses ? misses + ' miss' + (misses > 1 ? 'es' : '') : 'no misses';
      box.complete(); mode = 'learn'; setTimeout(paintLearn, 1400); return;
    }
    cur = queue[0]; findbar.hidden = false; fbLead.textContent = 'Find: ';
    fbWhat.textContent = name(f.labels[cur]);
    fbCount.textContent = (f.labels.length - queue.length) + ' / ' + f.labels.length;
  }
  chips.forEach((c, i) => c.addEventListener('click', () => {
    if (mode === 'learn') {
      if (dense) { $$('[data-li]', legend).forEach(x => x.style.color = ''); const li = $(`[data-li="${i}"]`, legend); if (li) { li.style.color = 'var(--amber)'; } c.classList.add('hit'); setTimeout(() => c.classList.remove('hit'), 900); toast(name(f.labels[i])); }
      else { revealed.add(i); paintLearn(); if (revealed.size === f.labels.length && S.ixDone[id] !== 'done') toast('All revealed — now try Quiz.'); }
      return;
    }
    if (i === cur || f.labels[i].t.replace(/ \(lower\)/, '') === f.labels[cur].t.replace(/ \(lower\)/, '')) { c.classList.add('hit'); queue.shift(); Sound.play('ok'); setTimeout(next, 450); }
    else { c.classList.add('miss'); misses++; Sound.play('no'); queue.push(queue.shift()); setTimeout(next, 700); }
  }));
  const controls = h('div', { class: 'row', style: { justifyContent: 'space-between' } },
    seg([['learn', 'Learn'], ['quiz', 'Quiz']], 'learn', v => { if (v === 'quiz') startQuiz(); else { mode = 'learn'; paintLearn(); } }),
    seg([['en', 'EN'], ['ar', 'عربي'], ['both', 'Both']], lang, v => { lang = v; S.settings.lang = v; save(); mode === 'learn' ? paintLearn() : next(); }));
  const zoom = h('button', { class: 'btn small', onclick: () => { const clone = fig.cloneNode(true); clone.style.width = 'min(1100px, 96vw)'; const lb = lightbox(clone, f.title); $$('.lchip', clone).forEach((c, i) => c.addEventListener('click', () => { chips[i].click(); setTimeout(() => { $$('.lchip', clone).forEach((cc, j) => { cc.className = chips[j].className; cc.textContent = chips[j].textContent; }); }, 30); })); } }, '⤢ Zoom');
  box.append(controls, findbar, fig, h('div', { class: 'row' }, zoom), legend);
  if (f.notice) box.append(h('p', { class: 'figure notice', html: '<b>What to notice · </b>' + f.notice }));
  box.append(box.foot);
  paintLearn();
  box.__solve = () => { startQuiz(); let guard = 0; while (queue.length && guard++ < 200) { const i = queue.shift(); chips[i].classList.add('hit'); } next(); };
  return box;
}

/* ---------- sequence / route builder ---------- */
/* cfg: {id,title,how,items:[...in order], fig?, pts?:[[x%,y%],...], src, after?} */
function sequenceIx(cfg) {
  const box = ixShell(cfg.id, cfg.fig ? 'Route builder' : 'Put in order', cfg.title, cfg.how || 'Tap the steps in the correct order.', cfg.src);
  const placed = h('ol', { class: 'seqlist' });
  const pool = h('div', { class: 'tokens' });
  let k = 0, errors = 0;
  let svg, marker, trail;
  if (cfg.fig) {
    const f = FIGS[cfg.fig] || { img: cfg.fig, w: 1000, h: 650 };
    const fig = h('div', { class: 'labelfig', style: { maxWidth: '640px', margin: '0 auto' } }, imgEl(f.img, cfg.title));
    svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 100 100'); svg.setAttribute('preserveAspectRatio', 'none');
    Object.assign(svg.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', pointerEvents: 'none' });
    svg.innerHTML = '<polyline fill="none" stroke="#ff6d60" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="7 5" vector-effect="non-scaling-stroke" points=""/>';
    trail = svg.querySelector('polyline');
    marker = h('span', { class: 'lchip dot', style: { left: '-10%', top: '-10%', background: '#ff6d60', width: '22px', height: '22px', pointerEvents: 'none' }, 'aria-hidden': 'true' });
    marker.dataset.x = -1;
    fig.append(svg, marker); box.append(fig);
  }
  const items = cfg.items.map((t, i) => ({ t, i }));
  shuffle(items).forEach(it => {
    const b = h('button', { class: 'token', html: it.t });
    b.addEventListener('click', () => {
      if (b.classList.contains('used')) return;
      if (it.i === k) {
        b.classList.add('used'); placed.append(h('li', { class: 'appear' }, h('b', null, k + 1), h('span', { html: it.t })));
        if (cfg.pts && cfg.pts[k]) moveMarker(cfg.pts[k]);
        k++; Sound.play('tick');
        if (k === cfg.items.length) { box.complete(); if (cfg.after) placed.after(h('div', { class: 'fb ok', html: cfg.after })); }
      } else { errors++; b.classList.remove('bad'); void b.offsetWidth; b.classList.add('bad'); Sound.play('no'); }
    });
    pool.append(b);
  });
  function moveMarker(p) {
    const pts = (trail.getAttribute('points') || '').trim();
    trail.setAttribute('points', (pts + ' ' + p[0] + ',' + p[1]).trim());
    const from = [+marker.dataset.x, +marker.dataset.y];
    const put = (x, y) => { marker.style.left = x + '%'; marker.style.top = y + '%'; marker.dataset.x = x; marker.dataset.y = y; };
    if (from[0] < 0) { put(p[0], p[1]); return; }
    const t0 = performance.now(), dur = matchMedia('(prefers-reduced-motion: reduce)').matches ? 1 : 600;
    const anim = t => { const u = Math.min(1, (t - t0) / dur); put(from[0] + (p[0] - from[0]) * u, from[1] + (p[1] - from[1]) * u); if (u < 1) requestAnimationFrame(anim); };
    requestAnimationFrame(anim);
  }
  box.append(placed, pool, box.foot);
  box.__solve = () => { for (let i = k; i < cfg.items.length; i++) { const b = $$('.token', pool).find(x => !x.classList.contains('used') && strip(x.innerHTML) === strip(cfg.items[i])); b && b.click(); } };
  return box;
}

/* ---------- static figure / photo step ---------- */
function photoStep(s) {
  const fig = h('figure', { class: 'figure card' });
  fig.append(zoomable(s.ph, s.cap));
  fig.append(h('figcaption', null, s.cap, ' ', h('span', { class: 'pill src' }, s.src)));
  if (s.notice) fig.append(h('p', { class: 'notice', html: '<b>What to notice · </b>' + s.notice }));
  return fig;
}
