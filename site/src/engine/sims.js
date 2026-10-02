/* ===== simulators (behave exactly as the notes say) ===== */
const RM = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
function cssv(n) { return getComputedStyle(document.documentElement).getPropertyValue(n).trim(); }
function onVisibleLoop(el, fn) {
  let raf = 0, last = 0, vis = true;
  const loop = t => { raf = requestAnimationFrame(loop); if (!vis || !document.body.contains(el)) return; const dt = Math.min(60, t - (last || t)); last = t; fn(dt); };
  if ('IntersectionObserver' in window) new IntersectionObserver(es => { vis = es[0].isIntersecting; }).observe(el);
  raf = requestAnimationFrame(loop); return () => cancelAnimationFrame(raf);
}

/* ---------- 1. Glaucoma: aqueous humor flow ---------- */
function glaucomaSim(cfg) {
  const box = ixShell(cfg.id, 'Simulator', 'Aqueous humor flow & glaucoma', 'Watch aqueous humor flow from behind the iris, through the pupil, into the anterior chamber and out through the canal of Schlemm. Switch the type and watch pressure. Try all four.', 'A26n, A27n, B24, B25');
  const W = 640, H = 380;
  const cv = h('canvas', { width: W * 2, height: H * 2, 'aria-label': 'Animated cross-section of the front of the eye' });
  const stage = h('div', { class: 'simstage' }, cv);
  const modes = { normal: 'Normal', open: 'Open-angle', narrow: 'Narrow-angle (acute attack)', tension: 'Normal-tension' };
  let mode = 'normal', parts = [], spawn = 0, iop = .2, nerve = 0, close = 0, drops = false;
  const seen = new Set(['normal']);
  const gauge = h('div', { class: 'gauge' }, h('span', { class: 'eyebrow' }, 'Pressure'), h('div', { class: 'bar' }, h('i')), h('b', { class: 'mono' }, 'normal'));
  const ngauge = h('div', { class: 'gauge' }, h('span', { class: 'eyebrow' }, 'Optic nerve damage'), h('div', { class: 'bar' }, h('i')), h('b', { class: 'mono' }, 'none'));
  const symp = h('div', { class: 'sympt' }, ['Loss of peripheral vision', 'Tunnel vision → vision loss', 'Severe eye pain', 'Headache', 'Photophobia', 'Nausea and vomiting', 'Blurred vision', 'Halos around lights', 'Cloudy cornea', 'Pupil mid-position, dilated, irregular'].map(s => h('span', null, s)));
  const caption = h('div', { class: 'scene' });
  const capText = {
    normal: '<b>Normal.</b> Aqueous humor (clear, watery fluid) <k>maintains intraocular pressure</k>, feeds the inner surface of the eye and helps bend light. It <k>circulates through the pupil and drains into the venous system by the canal of Schlemm</k>.',
    open: '<b>Open-angle</b> — the most common type. Aqueous fluid <k>drains too slowly</k>; pressure builds up within the eye and <k>damages the optic nerve</k>. Complaint: loss of field of vision (peripheral), tunnel vision leading up to vision loss.',
    narrow: '<b>Narrow-angle (angle-closure)</b>. The drainage channel narrows; pressure builds in the <k>posterior chamber</k>, <k>pushes the lens forward</k>, and the lens pushes the iris into the drainage channel, <k>completely blocking it</k>. Acute attack = <k>medical emergency</k>.',
    tension: '<b>Normal-tension</b>. Drainage and pressure stay normal, yet <k>vision changes with no increase in intraocular pressure</k> (the optic nerve still suffers).'
  };
  const symMap = { normal: [], open: [0, 1], narrow: [2, 3, 4, 5, 6, 7, 8, 9], tension: [0] };
  const modeBtns = h('div', { class: 'seg', role: 'group', style: { flexWrap: 'wrap' } }, Object.entries(modes).map(([k, v]) => h('button', { 'aria-pressed': String(k === mode), onclick: e => setMode(k, e.target) }, v)));
  const out = h('div', { class: 'stack' });
  const actions = h('div', { class: 'row' },
    h('button', { class: 'btn small', onclick: () => { drops = !drops; toast(drops ? 'Eye drops to reduce ocular pressure: on' : 'Eye drops: off'); } }, 'Eye drops to reduce pressure'),
    h('button', { class: 'btn small', onclick: () => { out.innerHTML = ''; out.append(h('div', { class: 'fb ' + (mode === 'narrow' ? 'no' : 'ok'), html: mode === 'narrow' ? '<b>Acute narrow-angle glaucoma is a medical emergency.</b> Rule out trauma or physical injury, perform a general eye assessment, document pertinent negatives and abnormal findings, and transport — an ophthalmologist will perform a more comprehensive assessment.' : 'Prehospital: rule out trauma, general eye assessment, document pertinent negatives and abnormal findings, transport to the ED for follow-up. Glaucoma is usually treated with eye drops to reduce ocular pressures.' })); } }, 'Prehospital plan'));
  function setMode(k, btn) {
    mode = k; seen.add(k); $$('button', modeBtns).forEach(b => b.setAttribute('aria-pressed', String(b === btn))); caption.innerHTML = capText[k];
    $$('span', symp).forEach((s, i) => s.classList.toggle('on', symMap[k].includes(i)));
    if (seen.size === 4) box.complete();
  }
  setMode('normal', $('button', modeBtns));
  const ctx = cv.getContext('2d'); ctx.scale(2, 2);
  const pathTop = [[292, 98], [284, 140], [270, 176], [212, 132], [252, 74], [262, 54], [310, 36]];
  function pt(path, u) { const n = path.length - 1, s = Math.min(n - 1e-6, u * n), i = Math.floor(s), f = s - i; return [path[i][0] + (path[i + 1][0] - path[i][0]) * f, path[i][1] + (path[i + 1][1] - path[i][1]) * f]; }
  function draw() {
    const fg = cssv('--fg'), muted = cssv('--muted'), line = cssv('--line2'), teal = cssv('--teal'), coral = cssv('--coral'), amber = cssv('--amber'), cyan = cssv('--cyan');
    ctx.clearRect(0, 0, W, H);
    const lensX = 305 - close * 16;
    // sclera / wall
    ctx.lineWidth = 5; ctx.strokeStyle = muted; ctx.beginPath(); ctx.moveTo(244, 48); ctx.lineTo(640, 24); ctx.moveTo(244, 332); ctx.lineTo(640, 356); ctx.stroke();
    // cornea
    ctx.strokeStyle = cyan; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(246, 48); ctx.quadraticCurveTo(100, 190, 246, 332); ctx.stroke();
    if (mode === 'narrow' && close > .6) { ctx.fillStyle = 'rgba(200,220,230,' + (.25 * close) + ')'; ctx.beginPath(); ctx.moveTo(246, 48); ctx.quadraticCurveTo(100, 190, 246, 332); ctx.quadraticCurveTo(140, 190, 246, 48); ctx.fill(); }
    // canal of Schlemm
    [[262, 52], [262, 328]].forEach(([x, y]) => { ctx.beginPath(); ctx.arc(x, y, 9, 0, 7); ctx.fillStyle = mode === 'narrow' && close > .7 ? coral : teal; ctx.fill(); });
    // lens
    ctx.fillStyle = 'rgba(180,200,230,.35)'; ctx.strokeStyle = line; ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(lensX, 190, 30, 72, 0, 0, 7); ctx.fill(); ctx.stroke();
    // ciliary body
    ctx.fillStyle = 'rgba(200,120,110,.55)';[[292, 92], [292, 288]].forEach(([x, y]) => { ctx.beginPath(); ctx.ellipse(x, y, 14, 10, 0, 0, 7); ctx.fill(); });
    // iris (bows forward as angle closes)
    ctx.strokeStyle = amber; ctx.lineWidth = 9; ctx.lineCap = 'round';
    const pupil = mode === 'narrow' ? 22 + close * 8 : 30;
    [[1, 72], [-1, 308]].forEach(([s, ry]) => {
      ctx.beginPath(); const rootX = 268 - close * 18, rootY = ry - s * close * 8;
      ctx.moveTo(rootX, rootY); ctx.quadraticCurveTo(262 - close * 22, (ry + 190) / 2, 270, 190 - s * pupil); ctx.stroke();
    });
    // particles
    parts.forEach(p => { const [x, y] = pt(p.path, p.u); ctx.beginPath(); ctx.arc(x, y, 3.6, 0, 7); ctx.fillStyle = p.u > .85 ? teal : cyan; ctx.globalAlpha = p.u > .95 ? 1 - (p.u - .95) * 20 : 1; ctx.fill(); ctx.globalAlpha = 1; });
    // labels (large enough for a phone)
    ctx.font = '700 22px ' + cssv('--f-mono');
    ctx.fillStyle = cyan; ctx.fillText('cornea', 40, 196);
    ctx.fillStyle = muted; ctx.fillText('anterior', 150, 120); ctx.fillText('chamber', 150, 144);
    ctx.fillStyle = amber; ctx.fillText('iris', 212, 236);
    ctx.fillStyle = fg; ctx.fillText('lens', lensX + 40, 196);
    ctx.fillStyle = teal; ctx.fillText('canal of Schlemm', 286, 66);
    ctx.fillStyle = muted; ctx.fillText('ciliary body', 320, 300);
    ctx.fillStyle = nerve > .5 ? coral : muted; ctx.fillText('→ optic nerve', 440, 250);
  }
  const stop = onVisibleLoop(stage, dt => {
    const target = mode === 'narrow' ? 1 : 0; close += (target - close) * Math.min(1, dt / 600);
    const inflow = drops ? .45 : 1;
    spawn += dt * (RM() ? .004 : .012) * inflow;
    while (spawn > 1) { spawn--; const top = Math.random() < .5; parts.push({ u: 0, path: top ? pathTop : pathTop.map(([x, y]) => [x, 380 - y]), v: .00018 + Math.random() * .00006 }); }
    const blocked = mode === 'narrow' && close > .7, slow = mode === 'open';
    parts.forEach(p => {
      let v = p.v * dt;
      if (p.u > .62 && p.u < .7) { if (blocked) v = 0; else if (slow && !drops) v *= .07; else if (slow) v *= .5; }
      if (blocked && p.u > .3 && p.u < .34) v *= .02; // trapped behind iris
      p.u += v;
    });
    parts = parts.filter(p => p.u < 1); if (parts.length > 420) parts.splice(0, parts.length - 420);
    const target2 = Math.min(1, parts.length / 260); iop += (target2 - iop) * Math.min(1, dt / 900);
    const damaging = (mode === 'open' && iop > .45) || mode === 'tension' || (mode === 'narrow' && iop > .5);
    nerve = Math.max(0, Math.min(1, nerve + (damaging ? dt / 14000 : -dt / 30000)));
    const shown = mode === 'tension' ? Math.min(iop, .32) : iop;
    $('i', gauge).style.width = Math.round(shown * 100) + '%'; $('b', gauge).textContent = shown < .38 ? 'normal' : shown < .7 ? 'raised' : 'very high';
    $('i', ngauge).style.width = Math.round(nerve * 100) + '%'; $('b', ngauge).textContent = nerve < .1 ? 'none' : nerve < .5 ? 'early' : 'damaging';
    draw();
  });
  box.append(modeBtns, stage, gauge, ngauge, caption, h('div', { class: 'eyebrow' }, 'Symptoms & signs lit for this type'), symp, actions, out, box.foot);
  box.__solve = () => $$('button', modeBtns).forEach(b => b.click());
  return box;
}

/* ---------- 2. Meniere disease: endolymph ---------- */
function meniereSim(cfg) {
  const box = ixShell(cfg.id, 'Simulator', 'Inside a Meniere attack', 'Raise the endolymph slider and watch what your notes describe: overproduction + defective absorption → distention → rupture and mixing → hair-cell damage.', 'A51, A51n, A52, B53, B54');
  const W = 560, H = 300;
  const cv = h('canvas', { width: W * 2, height: H * 2, 'aria-label': 'Membranous labyrinth with endolymph' });
  const slider = h('input', { type: 'range', min: 0, max: 100, value: 0, id: 'men-' + cfg.id, 'aria-label': 'Endolymph volume' });
  const stageTxt = h('div', { class: 'scene' });
  const symp = h('div', { class: 'sympt' }, ['Spinning vertigo', 'Low-frequency hearing loss', 'Tinnitus', 'Fullness in the affected ear'].map(s => h('span', null, s)));
  const course = h('div', { class: 'seg' }, h('button', { 'aria-pressed': 'true' }, 'Early stages'), h('button', { 'aria-pressed': 'false' }, 'As it progresses'));
  const courseTxt = h('div', { class: 'scene' });
  let late = false, maxed = false, treated = 0;
  const setCourse = l => { late = l; $$('button', course).forEach((b, i) => b.setAttribute('aria-pressed', String(i === (l ? 1 : 0)))); courseTxt.innerHTML = l ? 'As the disease progresses, <k>symptoms last hours to days</k>. May result in <k>permanent tinnitus</k>, <k>moderate to severe hearing loss</k>, and <k>chronic unsteadiness</k>.' : 'Early stages: attacks of <n>less than 2 hours</n>; altered balance <n>up to 2 days</n>.'; };
  $$('button', course).forEach((b, i) => b.addEventListener('click', () => setCourse(i === 1))); setCourse(false);
  const tx = h('div', { class: 'stack' });
  const tbtn = (t, ok, msg) => h('button', { class: 'btn small', onclick: () => { tx.innerHTML = ''; tx.append(h('div', { class: 'fb ' + (ok ? 'ok' : 'no'), html: msg })); if (ok) treated |= ok; if (maxed && (treated & 3) === 3) box.complete(); } }, t);
  const ctx = cv.getContext('2d'); ctx.scale(2, 2);
  function stageOf(v) { return v < 25 ? 0 : v < 50 ? 1 : v < 75 ? 2 : 3; }
  const stages = [
    'Normal fluid balance in the labyrinth of the inner ear.',
    '<k>Overproduction and defective absorption of endolymphatic fluid</k> → volume and pressure within the labyrinth increase.',
    '<k>Distention results in rupture and mixing of the endolymph and perilymph fluids.</k>',
    'The mixture <k>disrupts the balance of fluid and electrolytes</k> within the labyrinth and <k>damages the vestibular and cochlear hair cells</k>.'];
  function draw() {
    const v = +slider.value / 100, st = stageOf(+slider.value);
    ctx.clearRect(0, 0, W, H);
    const wall = cssv('--muted'), endo = st >= 2 ? '#a07cf0' : cssv('--cyan');
    // semicircular canals (3 loops) + vestibule + cochlea spiral
    const tube = (fn, wOuter, wInner) => { ctx.lineCap = 'round'; ctx.strokeStyle = wall; ctx.lineWidth = wOuter; ctx.beginPath(); fn(); ctx.stroke(); ctx.strokeStyle = endo; ctx.lineWidth = wInner; ctx.beginPath(); fn(); ctx.stroke(); };
    const wi = 5 + v * 14, wo = 26;
    tube(() => { ctx.arc(150, 110, 62, Math.PI * .1, Math.PI * 1.9, false); }, wo, wi);
    tube(() => { ctx.ellipse(118, 140, 40, 70, -0.6, Math.PI * .2, Math.PI * 1.7); }, wo, wi);
    tube(() => { ctx.ellipse(205, 150, 70, 32, 0.15, Math.PI * .9, Math.PI * 2.3); }, wo, wi);
    tube(() => { ctx.moveTo(210, 175); ctx.lineTo(300, 190); }, 40, wi + 6);
    tube(() => { let a = 0, r = 92; ctx.moveTo(300 + r, 190); for (let i = 0; i < 260; i++) { a += .06; r *= .992; ctx.lineTo(380 + Math.cos(a) * r * .8 - 0, 190 + Math.sin(a) * r * .8); } }, wo, wi);
    if (st >= 2) { ctx.fillStyle = cssv('--coral'); ctx.font = '700 13px ' + cssv('--f-mono'); ctx.fillText('rupture: endolymph + perilymph mix', 250, 290); }
    if (st >= 3) { for (let i = 0; i < 14; i++) { ctx.fillStyle = cssv('--coral'); ctx.fillRect(330 + (i * 37) % 140, 120 + (i * 53) % 130, 4, 4); } }
    ctx.fillStyle = cssv('--muted'); ctx.font = '600 11px ' + cssv('--f-mono'); ctx.fillText('semicircular canals', 70, 30); ctx.fillText('vestibule', 214, 214); ctx.fillText('cochlea', 420, 60);
  }
  const upd = () => {
    const st = stageOf(+slider.value); stageTxt.innerHTML = stages[st];
    $$('span', symp).forEach((s, i) => s.classList.toggle('on', st >= 2 || (st === 1 && i === 3)));
    if (st === 3) maxed = true; draw();
  };
  slider.addEventListener('input', upd); upd();
  box.append(h('div', { class: 'simstage' }, cv), h('label', { for: 'men-' + cfg.id, class: 'eyebrow' }, 'Endolymph volume'), slider, stageTxt,
    h('div', { class: 'eyebrow' }, 'Symptoms (chronic condition of the inner ear)'), symp, course, courseTxt,
    h('div', { class: 'eyebrow' }, 'Treat it'), h('div', { class: 'row' },
      tbtn('Prehospital: antiemetic for nausea & vomiting', 1, 'Correct — <k>prehospital care includes treating the nausea and vomiting with an antiemetic</k>.'),
      tbtn('Physician: diuretics + antiemetic', 2, 'Correct — <k>the physician may treat with diuretics and an antiemetic</k>. Surgery: limited success (B54).'),
      tbtn('Extract fluid on scene', 0, 'Not in your notes. Prehospital care for Meniere is the antiemetic.')), tx, box.foot);
  box.__solve = () => { slider.value = 100; upd(); $$('.btn', box).filter(b => /antiemetic/.test(b.textContent)).forEach(b => b.click()); };
  return box;
}

/* ---------- 3. Epistaxis ---------- */
function epistaxisSim(cfg) {
  const box = ixShell(cfg.id, 'Simulator', 'Nosebleed on scene', 'Set the patient up the way your notes say and stop the bleed. Wrong positions show you why they fail.', 'A60–A63, B63, B65–B67');
  const st = { pos: 'upright', pinch: false, t: 0, type: 'anterior', trauma: false, sniff: false, est: false, older: false };
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg'); svg.setAttribute('viewBox', '20 -50 380 330'); svg.setAttribute('role', 'img'); svg.setAttribute('aria-label', 'Patient profile');
  svg.innerHTML = `<g id="head" transform="rotate(0 200 170)">
    <path d="M150 60 C 150 10, 260 10, 262 70 L 262 96 L 286 132 L 266 138 L 268 160 C 268 180, 250 196, 222 196 L 214 250 L 168 250 L 170 186 C 140 170, 140 100, 150 60 Z" fill="#e8c3a6" stroke="#9c7a62" stroke-width="2"/>
    <path id="airway" d="M262 132 C 230 136, 214 150, 206 176 L 200 250" fill="none" stroke="#c98f86" stroke-width="5" stroke-dasharray="4 4" opacity=".7"/>
    <circle cx="226" cy="84" r="4" fill="#3b2f2a"/>
    <path d="M246 170 L 262 168" stroke="#7a4a40" stroke-width="3" stroke-linecap="round"/>
    <g id="drops"></g>
    <g id="fingers" opacity="0"><rect x="262" y="118" width="34" height="14" rx="7" fill="#7aa7d6" stroke="#2e5a86"/><rect x="262" y="134" width="34" height="12" rx="6" fill="#7aa7d6" stroke="#2e5a86"/></g>
  </g>
  <text id="ttl" x="10" y="20" font-size="13" font-family="monospace" fill="currentColor"></text>`;
  svg.style.color = 'var(--fg)';
  const status = h('div', { class: 'scene' });
  const timer = h('div', { class: 'timer', style: { fontSize: '28px' } }, '00:00');
  const seg = (name, opts) => h('div', { class: 'seg', role: 'group', 'aria-label': name, style: { flexWrap: 'wrap' } }, opts.map(([v, t]) => h('button', { 'aria-pressed': String(st[name] === v), onclick: e => { st[name] = v; $$('button', e.target.parentNode).forEach(b => b.setAttribute('aria-pressed', String(b === e.target))); upd(); } }, t)));
  const ctl = h('div', { class: 'stack' },
    h('div', { class: 'eyebrow' }, 'Bleed type'), seg('type', [['anterior', 'Anterior'], ['posterior', 'Posterior']]),
    h('div', { class: 'eyebrow' }, 'Patient'), seg('trauma', [[false, 'Non-trauma'], [true, 'Trauma / suspected nasal fracture']]), seg('older', [[false, 'Young adult'], [true, 'Older adult, high BP']]),
    h('div', { class: 'eyebrow' }, 'Position'), seg('pos', [['forward', 'Sitting, leaning forward'], ['upright', 'Sitting upright'], ['back', 'Lying / head back']]),
    h('div', { class: 'row' },
      h('button', { class: 'btn small', onclick: () => { st.pinch = !st.pinch; if (!st.pinch) st.t = 0; upd(); } }, 'Pinch nostrils (firm)'),
      h('button', { class: 'btn small', onclick: () => { st.sniff = true; upd(); setTimeout(() => { st.sniff = false; upd(); }, 2500); } }, 'Patient sniffs / blows nose'),
      h('button', { class: 'btn small', onclick: () => { st.est = true; upd(); } }, 'Estimate blood loss & relay'),
      h('button', { class: 'btn small', onclick: () => npa() }, 'Insert nasopharyngeal airway?')));
  const out = h('div', { class: 'stack' });
  function npa() { out.innerHTML = ''; out.append(h('div', { class: 'fb ' + (st.trauma ? 'no' : 'ok'), html: st.trauma ? '<b>Do not.</b> Never insert a nasopharyngeal airway or attempt nasotracheal intubation with <k>suspected nasal fractures</k> or <k>CSF or blood leakage from the nose</k>.' : 'This patient is bleeding from the nose: blood leakage from the nose means <b>no nasopharyngeal airway and no nasotracheal intubation</b>. Insert an airway adjunct only as needed, by another route.' })); }
  let drip = 0;
  const stop = onVisibleLoop(svg, dt => {
    const head = svg.getElementById('head'); const ang = st.pos === 'forward' ? 18 : st.pos === 'back' ? -55 : 0;
    head.setAttribute('transform', `rotate(${ang} 200 170)`);
    svg.getElementById('fingers').setAttribute('opacity', st.pinch ? 1 : 0);
    if (st.pinch && !st.sniff) st.t += dt * (RM() ? 1 : 1) * 60; // demo: 1 s = 1 min
    const mins = st.t / 60000; timer.textContent = String(Math.floor(mins)).padStart(2, '0') + ':' + String(Math.floor((mins % 1) * 60)).padStart(2, '0');
    const stopped = st.type === 'anterior' && st.pinch && mins >= 20 && !st.trauma;
    drip += dt; const g = svg.getElementById('drops');
    if (!stopped && drip > 220) { drip = 0;
      const toThroat = st.type === 'posterior' || st.pos === 'back';
      const c = document.createElementNS(svgNS, 'circle'); c.setAttribute('r', 3.2); c.setAttribute('fill', '#c0262d');
      c.dataset.u = 0; c.dataset.throat = toThroat ? 1 : 0; if (st.pinch && !toThroat) c.setAttribute('opacity', '.35'); g.append(c); }
    $$('circle', g).forEach(c => { const u = +c.dataset.u + dt / 1600; c.dataset.u = u; if (u > 1) { c.remove(); return; }
      if (+c.dataset.throat) { const p = svg.getElementById('airway'); const L = p.getTotalLength(); const q = p.getPointAtLength(u * L); c.setAttribute('cx', q.x); c.setAttribute('cy', q.y); }
      else { c.setAttribute('cx', 272 + u * 6); c.setAttribute('cy', 140 + u * 70); } });
    status.dataset.stopped = stopped ? 1 : 0;
    if (stopped && st.est && !st.sniff && st.pos === 'forward' && !done) { done = true; upd(); box.complete(); }
  });
  let done = false;
  function upd() {
    const msgs = [];
    if (st.pos === 'back') msgs.push('<b class="k">Head back:</b> blood drains into the throat → <k>nausea and vomiting</k>. Place a non-trauma patient <k>sitting, leaning forward</k>.');
    else if (st.pos === 'upright') msgs.push('Sitting is right — now <k>lean forward</k>.');
    else msgs.push('✓ Sitting, leaning forward.');
    if (st.type === 'posterior') msgs.push('<b>Posterior bleed:</b> usually <k>more severe</k>; blood drains into the throat causing nausea and vomiting. It will not settle with a pinch in this simulation — estimate blood loss, relay it, transport.');
    else msgs.push('Anterior bleeds (most typically the <k>Kiesselbach plexus</k>) <k>bleed fairly slowly</k> and are usually <k>self-limiting</k>.');
    msgs.push(st.pinch ? '✓ Pinching nostrils — your notes (B67): <k>firm pressure for <n>20 minutes</n></k>. Timer runs 1 s = 1 min.' : 'Not pinched yet.');
    if (st.sniff) msgs.push('<b style="color:var(--coral)">Sniffing/blowing</b> restarts bleeding — direct the patient <k>not to sniff or blow</k> the nose.');
    if (st.older) msgs.push('Older patient with a nosebleed → <k>always consider a hypertensive crisis</k>.');
    if (st.trauma) msgs.push('Trauma: pinch-and-lean applies to a <b>non-trauma</b> patient; with suspected nasal fracture, no NPA / nasotracheal intubation.');
    msgs.push(st.est ? '✓ Blood loss estimated and relayed to the receiving facility.' : 'Remember to <k>estimate the amount of blood loss</k>.');
    if (done) msgs.push('<b style="color:var(--teal)">Bleeding controlled.</b>');
    status.innerHTML = msgs.map(m => '<div>' + m + '</div>').join('');
  }
  upd();
  box.append(h('div', { class: 'simstage', style: { maxWidth: '520px', margin: '0 auto', width: '100%' } }, svg), timer, ctl, status, out, box.foot);
  box.__solve = () => { st.type = 'anterior'; st.trauma = false; st.pos = 'forward'; st.pinch = true; st.est = true; st.t = 21 * 60000; upd(); done = true; box.complete(); };
  return box;
}

/* ---------- 4. Epiglottitis monitor ---------- */
function epiglottitisSim(cfg) {
  const box = ixShell(cfg.id, 'Simulator', 'Epiglottitis: keep them calm', 'A sick, anxious child sits upright in the tripod position, drooling, with stridor. Every action changes the monitor. Your notes: minimize scene time, do not agitate, do not look in the mouth, alert the hospital.', 'A90, A91, B96, B97');
  let ag = .25, t = 0, transported = false, alerted = false, bad = 0;
  const cv = h('canvas', { width: 1100, height: 220, 'aria-label': 'Pulse oximetry waveform' });
  const vit = h('div', { class: 'vitalsrow' });
  const log = h('div', { class: 'stack' });
  const ctx = cv.getContext('2d');
  let x = 0;
  const vals = () => ({ HR: Math.round(118 + ag * 50), RR: Math.round(30 + ag * 18), SpO2: Math.round(96 - ag * 16) + '%', Stridor: ag > .55 ? 'loud' : ag > .3 ? 'present' : 'soft' });
  const paint = () => { vit.innerHTML = ''; Object.entries(vals()).forEach(([k, v]) => vit.append(h('div', { class: 'vbox' + ((k === 'SpO2' && ag > .45) || (k === 'HR' && ag > .6) ? ' alarm' : ' ok') }, h('span', null, k), h('b', null, v)))); };
  const act = (txt, delta, msg, fn) => h('button', { class: 'opt', onclick: e => { ag = Math.max(.08, Math.min(1, ag + delta)); if (delta > 0) { bad++; e.currentTarget.classList.add('wrong'); } else e.currentTarget.classList.add('right'); fn && fn(); log.prepend(h('div', { class: 'fb ' + (delta > 0 ? 'no' : 'ok'), html: msg })); paint(); if (transported && alerted) { box.complete(); log.prepend(h('div', { class: 'fb ok', html: `<b>En route.</b> ${bad ? bad + ' agitating action(s) — each one worsened the airway.' : 'You never agitated the patient.'}` })); } } }, h('span', { class: 'lt' }, '›'), h('span', { html: txt }));
  const acts = h('div', { class: 'choices' },
    act('Let the patient stay sitting upright in the position they chose (tripod / sniffing)', -.08, 'Good — the patient <k>will sit upright in the classic tripod position or the sniffing position</k>. Leave them there.'),
    act('Look in the mouth with a tongue blade to confirm', .35, '<b>Do not attempt to look in the mouth.</b> Agitation worsens the obstruction: stridor and SpO₂ just got worse.'),
    act('Start an upsetting procedure on scene before moving', .25, '<b>Do not attempt procedures that might agitate the patient.</b> Minimize on-scene time.'),
    act('Transport now to an appropriate hospital while maintaining the airway', -.05, '✓ <k>Transport to an appropriate hospital while maintaining the airway</k>; <k>minimize on-scene time</k>.', () => transported = true),
    act('Alert receiving personnel of the suspected diagnosis and condition', -.02, '✓ <k>Alert receiving personnel of suspected diagnosis and patient’s condition</k>.', () => alerted = true));
  onVisibleLoop(cv, dt => {
    t += dt; const W = cv.width, H = cv.height; const col = ag > .45 ? cssv('--coral') : cssv('--teal');
    for (let i = 0; i < dt * .25; i++) { x = (x + 1) % W; const ph = (t / (60000 / (118 + ag * 50))) % 1; const y = H * .7 - (Math.exp(-Math.pow((ph - .2) / .06, 2)) + .4 * Math.exp(-Math.pow((ph - .45) / .08, 2))) * H * .5 * (1 - ag * .5) + (ag > .5 ? Math.sin(t / 40) * 6 : 0);
      ctx.clearRect(x, 0, 10, H); ctx.fillStyle = col; ctx.fillRect(x, y, 3, 3); }
  });
  paint();
  box.append(h('div', { class: 'simstage' }, cv), vit, h('div', { class: 'eyebrow' }, 'What do you do?'), acts, log, box.foot);
  box.__solve = () => { $$('.opt', acts).filter(b => /Transport now|Alert receiving/.test(b.textContent)).forEach(b => b.click()); };
  return box;
}

/* ---------- 5. Chemical burn: irrigation station ---------- */
function irrigationSim(cfg) {
  const box = ixShell(cfg.id, 'Simulator', 'Chemical burn: irrigate the eye', 'Three decisions: the fluid, the contact lenses, and which way to flush. Then pour.', 'A16, A17, B15, B16');
  const st = { fluid: null, lens: null, from: null };
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg'); svg.setAttribute('viewBox', '0 0 400 200'); svg.setAttribute('role', 'img'); svg.setAttribute('aria-label', 'Right eye, front view; nose on the left');
  svg.innerHTML = `<rect x="0" y="0" width="400" height="200" fill="#efd2bd"/><path d="M0 40 C 40 60, 40 160, 0 190" fill="#e2bda3"/><text x="8" y="110" font-size="13" font-family="monospace" fill="#7a5844">nose</text>
   <path d="M70 100 C 140 30, 300 30, 360 100 C 300 170, 140 170, 70 100 Z" fill="#fff" stroke="#9c7a62" stroke-width="3"/>
   <circle cx="215" cy="100" r="44" fill="#4b7fb8"/><circle cx="215" cy="100" r="19" fill="#111"/><circle cx="203" cy="88" r="6" fill="#fff"/>
   <g id="flow"></g>
   <circle id="inner" cx="78" cy="100" r="16" fill="rgba(46,211,195,.25)" stroke="#0a8c80" stroke-width="2" style="cursor:pointer"/>
   <circle id="outer" cx="352" cy="100" r="16" fill="rgba(46,211,195,.25)" stroke="#0a8c80" stroke-width="2" style="cursor:pointer"/>
   <text x="58" y="140" font-size="12" font-family="monospace" fill="#3b2f2a">inner corner</text><text x="312" y="140" font-size="12" font-family="monospace" fill="#3b2f2a">outer corner</text>`;
  const out = h('div', { class: 'stack' });
  const pickRow = (title, key, opts) => { const r = h('div', { class: 'tokens' }); opts.forEach(([v, t, ok, msg]) => { const b = h('button', { class: 'token' }, t); b.addEventListener('click', () => { $$('.token', r).forEach(x => x.classList.remove('ok', 'bad')); b.classList.add(ok ? 'ok' : 'bad'); st[key] = ok ? v : null; out.prepend(h('div', { class: 'fb ' + (ok ? 'ok' : 'no'), html: msg })); Sound.play(ok ? 'tick' : 'no'); }); r.append(b); }); return [h('div', { class: 'eyebrow' }, title), r]; };
  const flow = (fromInner) => { const g = svg.getElementById('flow'); g.innerHTML = ''; const p = document.createElementNS(svgNS, 'path'); p.setAttribute('d', fromInner ? 'M80 96 C 160 70, 280 70, 352 96' : 'M352 96 C 280 70, 160 70, 80 96'); p.setAttribute('stroke', fromInner ? '#2ed3c3' : '#ff6d60'); p.setAttribute('stroke-width', '6'); p.setAttribute('fill', 'none'); p.setAttribute('stroke-dasharray', '10 8'); p.setAttribute('stroke-linecap', 'round'); g.append(p); };
  svg.getElementById('inner').addEventListener('click', () => pour(true));
  svg.getElementById('outer').addEventListener('click', () => pour(false));
  function pour(inner) {
    if (!st.fluid || !st.lens) { toast('Choose the fluid and decide on the lenses first.'); return; }
    flow(inner);
    if (inner) { out.prepend(h('div', { class: 'fb ok', html: '✓ <k>Flush liquid from the inside corner to the outside of the eye.</k> Then: eye injuries should be seen in the emergency department.' })); box.complete(); }
    else out.prepend(h('div', { class: 'fb no', html: 'Wrong direction. Your notes: flush from the <b>inside corner to the outside</b>.<div class="beyond" style="margin-top:6px"><b>Beyond your notes</b>Flushing outside → in washes the chemical toward the inner corner (tear drainage toward the nose) and the other eye.</div>' }));
  }
  box.append(...pickRow('1 · Irrigation fluid', 'fluid', [['saline', 'Isotonic saline solution', 1, '✓ <k>Use sterile water or isotonic saline solution</k>.'], ['water', 'Sterile water', 1, '✓ Sterile water is listed too.'], ['drops', 'Lubricating eye drops', 0, 'No — irrigation for chemical burns uses <k>sterile water or isotonic saline</k>.']]),
    ...pickRow('2 · Patient wears soft contact lenses', 'lens', [['remove', 'Remove them (pinch off after saline drops)', 1, '✓ <k>The only indication for removing contact lenses in the prehospital setting is a chemical burn of the eye.</k> Soft lens: one to two drops of saline, pinch and lift off.'], ['leave', 'Leave them in', 0, 'A chemical burn is exactly the one prehospital indication to remove them.']]),
    h('div', { class: 'eyebrow' }, '3 · Tap where you start pouring'), h('div', { class: 'simstage', style: { background: '#efd2bd' } }, svg), out, box.foot);
  box.__solve = () => { $$('.token', box).filter(b => /Isotonic|Remove them/.test(b.textContent)).forEach(b => b.click()); pour(true); };
  return box;
}
