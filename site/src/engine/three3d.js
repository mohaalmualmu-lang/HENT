/* ===== 3D models (three.js r128, lazy-loaded from cdnjs) ===== */
const THREE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
let threeP = null;
function loadThree() {
  if (window.THREE) return Promise.resolve(window.THREE);
  if (threeP) return threeP;
  threeP = new Promise((res, rej) => {
    const s = document.createElement('script'); s.src = THREE_URL; s.async = true;
    s.onload = () => window.THREE ? res(window.THREE) : rej(new Error('no THREE'));
    s.onerror = () => { threeP = null; rej(new Error('blocked')); };
    document.head.append(s);
  });
  return threeP;
}

/* shared viewer: drag to rotate, pinch / wheel to zoom, tap to name */
function threeViewer(cfg) {
  const box = ixShell(cfg.id, '3D model', cfg.title, cfg.how, cfg.src);
  const stage = h('div', { class: 'threebox' }, h('div', { class: 'hud' }, h('span', { class: 'hl' }, 'Drag to rotate · pinch to zoom'), h('span', null, 'Tapped: ', h('b', { class: 'tapped' }, '—'))));
  const fb = h('div', { class: 'fallback', hidden: true }, cfg.fallback);
  const ctl = h('div', { class: 'stack' });
  const quiz = h('div', { class: 'findbar', hidden: true });
  const loadBtn = h('button', { class: 'btn primary small' }, 'Load 3D model');
  box.append(stage, quiz, ctl, h('div', { class: 'row' }, loadBtn), fb, box.foot);
  let api = null;
  const start = () => {
    loadBtn.disabled = true; loadBtn.textContent = 'Loading…';
    loadThree().then(THREE => { loadBtn.remove(); api = mount(THREE); fb.hidden = true; })
      .catch(() => { loadBtn.textContent = '3D unavailable here'; fb.hidden = false; fb.prepend(h('b', null, '3D could not load (offline or blocked). ')); });
  };
  loadBtn.addEventListener('click', start);
  if ('IntersectionObserver' in window) { const io = new IntersectionObserver(es => { if (es[0].isIntersecting) { io.disconnect(); start(); } }, { rootMargin: '200px' }); io.observe(stage); }
  function mount(THREE) {
    const r = new THREE.WebGLRenderer({ antialias: true, alpha: true }); r.setPixelRatio(Math.min(2, devicePixelRatio)); r.localClippingEnabled = true;
    stage.append(r.domElement);
    const scene = new THREE.Scene(); const cam = new THREE.PerspectiveCamera(40, 4 / 3, .1, 100); cam.position.set(0, 0, 7.2);
    scene.add(new THREE.AmbientLight(0xffffff, .55)); const dl = new THREE.DirectionalLight(0xffffff, .9); dl.position.set(3, 4, 5); scene.add(dl);
    const root = new THREE.Group(); scene.add(root);
    const parts = cfg.build(THREE, root);   // [{mesh, name, ar}]
    const resize = () => { const w = stage.clientWidth, hh = stage.clientHeight; r.setSize(w, hh, false); cam.aspect = w / hh; cam.updateProjectionMatrix(); };
    resize(); addEventListener('resize', resize);
    let rx = .25, ry = cfg.ry != null ? cfg.ry : -.6, dist = 7.2, drag = null, pinch = null, moved = 0;
    const pts = new Map();
    r.domElement.addEventListener('pointerdown', e => { r.domElement.setPointerCapture(e.pointerId); pts.set(e.pointerId, [e.clientX, e.clientY]); moved = 0; drag = [e.clientX, e.clientY]; });
    r.domElement.addEventListener('pointermove', e => {
      if (!pts.has(e.pointerId)) return; pts.set(e.pointerId, [e.clientX, e.clientY]);
      if (pts.size === 2) { const [a, b] = [...pts.values()]; const d = Math.hypot(a[0] - b[0], a[1] - b[1]); if (pinch) dist = Math.max(3.5, Math.min(12, dist * pinch / d)); pinch = d; moved += 10; return; }
      if (drag) { const dx = e.clientX - drag[0], dy = e.clientY - drag[1]; ry += dx * .01; rx = Math.max(-1.4, Math.min(1.4, rx + dy * .01)); moved += Math.abs(dx) + Math.abs(dy); drag = [e.clientX, e.clientY]; }
    });
    const up = e => { pts.delete(e.pointerId); if (pts.size < 2) pinch = null; if (!pts.size) { if (moved < 6) tap(e); drag = null; } };
    r.domElement.addEventListener('pointerup', up); r.domElement.addEventListener('pointercancel', up);
    r.domElement.addEventListener('wheel', e => { e.preventDefault(); dist = Math.max(3.5, Math.min(12, dist + e.deltaY * .01)); }, { passive: false });
    const ray = new THREE.Raycaster(), v2 = new THREE.Vector2();
    let finding = null, found = 0, queue = [];
    function tap(e) {
      const b = r.domElement.getBoundingClientRect(); v2.set(((e.clientX - b.left) / b.width) * 2 - 1, -((e.clientY - b.top) / b.height) * 2 + 1);
      ray.setFromCamera(v2, cam); const hits = ray.intersectObjects(parts.map(p => p.mesh), true).filter(x => x.object.visible);
      const hit = hits.find(x => !x.object.userData.passThrough) || hits[0]; if (!hit) return;
      let o = hit.object; while (o && !o.userData.part) o = o.parent; if (!o) return;
      const p = o.userData.part; $('.tapped', stage).textContent = p.name + (S.settings.lang !== 'en' ? ' · ' + p.ar : '');
      flash(p);
      if (finding) {
        if (p.name === finding.name) { Sound.play('ok'); found++; queue.shift(); nextFind(); } else { Sound.play('no'); toast('That is the ' + p.name + '.'); }
      }
    }
    function flash(p) { const ms = []; p.mesh.traverse(m => m.material && ms.push(m.material)); ms.forEach(m => { if (m.emissive) { m.emissive.setHex(0x553300); setTimeout(() => m.emissive.setHex(0x000000), 500); } }); }
    function nextFind() {
      if (!queue.length) { finding = null; quiz.innerHTML = '<b>All found.</b>'; box.complete(); return; }
      finding = queue[0]; quiz.hidden = false; quiz.innerHTML = ''; quiz.append(h('span', null, 'Find: ', h('span', { class: 'what' }, finding.name + (S.settings.lang !== 'en' ? ' · ' + finding.ar : ''))), h('span', { class: 'mono muted' }, found + ' / ' + parts.filter(p => p.quiz !== false).length));
    }
    ctl.append(h('button', { class: 'btn small', onclick: () => { queue = shuffle(parts.filter(p => p.quiz !== false)); found = 0; nextFind(); } }, 'Find-the-part quiz'));
    cfg.controls && cfg.controls(THREE, parts, ctl, root);
    const loop = () => { if (!document.body.contains(stage)) return; requestAnimationFrame(loop); root.rotation.set(rx, ry, 0); cam.position.set(0, 0, dist); cam.lookAt(0, 0, 0); cfg.tick && cfg.tick(parts); r.render(scene, cam); };
    loop();
    return { solve() { parts.forEach(p => { if (finding && p.name === finding.name) { } }); queue = []; found = parts.length; nextFind(); } };
  }
  box.__solve = () => { if (api) api.solve(); else box.complete(); };
  return box;
}

/* ---------- eye ---------- */
function eye3D(cfg) {
  let clip, pressure = 0;
  return threeViewer({
    id: cfg.id, ry: -1.15, title: '3D eye: rotate, open, raise the pressure', src: 'A5, A6, A26n, B4, B5, B24',
    how: 'Tap a part to name it. <b>Cut open</b> slices the globe so you can see the lens and the back of the eye. <b>Intraocular pressure</b> shows what glaucoma does: pressure builds up within the eye and damages the optic nerve.',
    fallback: 'Text fallback: the globe is wrapped by the sclera (white); the clear cornea bulges at the front over the coloured iris and its central pupil; the lens sits behind the iris; the retina lines the back; the optic nerve (CN II) leaves at the back and provides the sense of vision.',
    build(THREE, root) {
      clip = new THREE.Plane(new THREE.Vector3(-1, 0, 0), 3);
      const mat = (c, o = {}) => new THREE.MeshStandardMaterial(Object.assign({ color: c, roughness: .55, metalness: .05, clippingPlanes: o.noclip ? [] : [clip], clipShadows: true, side: THREE.DoubleSide }, o.m || {}));
      const P = []; const add = (mesh, name, ar, opt = {}) => { mesh.traverse(m => m.userData.part = null); mesh.userData.part = { name, ar }; root.add(mesh); const p = Object.assign({ mesh, name, ar }, opt); mesh.userData.part = p; P.push(p); return mesh; };
      const sclera = add(new THREE.Mesh(new THREE.SphereGeometry(2, 48, 32, 0, Math.PI * 2, Math.PI * .15, Math.PI * .85), mat(0xf4efe8)), 'Sclera', 'الصلبة');
      sclera.rotation.x = Math.PI / 2;
      const choroid = add(new THREE.Mesh(new THREE.SphereGeometry(1.93, 48, 32, 0, Math.PI * 2, Math.PI * .28, Math.PI * .72), mat(0x7b3b2a)), 'Choroid', 'المشيمية');
      choroid.rotation.x = Math.PI / 2;
      const retina = add(new THREE.Mesh(new THREE.SphereGeometry(1.86, 48, 32, 0, Math.PI * 2, Math.PI * .32, Math.PI * .68), mat(0xd9653b)), 'Retina', 'الشبكية');
      retina.rotation.x = Math.PI / 2;
      const vit = add(new THREE.Mesh(new THREE.SphereGeometry(1.8, 32, 24), mat(0xbfe3ee, { m: { transparent: true, opacity: .18 } })), 'Vitreous humor', 'الخلط الزجاجي', { quiz: false });
      vit.userData.passThrough = true;
      const cornea = add(new THREE.Mesh(new THREE.SphereGeometry(1.05, 32, 16, 0, Math.PI * 2, 0, Math.PI * .32), mat(0x9fd8ff, { noclip: true, m: { transparent: true, opacity: .35 } })), 'Cornea', 'القرنية');
      cornea.rotation.x = Math.PI / 2; cornea.position.z = .98;
      const iris = add(new THREE.Mesh(new THREE.RingGeometry(.3, .92, 48), mat(0x3f6fb0, { noclip: true })), 'Iris', 'القزحية'); iris.position.z = 1.72;
      const pupil = add(new THREE.Mesh(new THREE.CircleGeometry(.3, 32), mat(0x0b0b0b, { noclip: true })), 'Pupil', 'البؤبؤ'); pupil.position.z = 1.715;
      const lens = add(new THREE.Mesh(new THREE.SphereGeometry(.62, 32, 16), mat(0xe9f3ff, { noclip: true, m: { transparent: true, opacity: .75 } })), 'Lens', 'العدسة'); lens.scale.z = .45; lens.position.z = 1.38;
      const nerve = add(new THREE.Mesh(new THREE.CylinderGeometry(.3, .34, 1.6, 24), mat(0xf2d27a, { noclip: true })), 'Optic nerve', 'العصب البصري'); nerve.rotation.x = Math.PI / 2; nerve.position.set(.15, -.1, -2.55);
      const disc = add(new THREE.Mesh(new THREE.CircleGeometry(.24, 24), mat(0xffe08a)), 'Optic disc', 'القرص البصري', { quiz: false }); disc.position.set(.15, -.1, -1.84);
      this._nerve = nerve; this._disc = disc; this._root = root;
      return P;
    },
    controls(THREE, parts, ctl, root) {
      const cut = h('input', { type: 'range', min: 0, max: 100, value: 0, id: cfg.id + '-cut', 'aria-label': 'Cut open' });
      const pr = h('input', { type: 'range', min: 0, max: 100, value: 0, id: cfg.id + '-iop', 'aria-label': 'Intraocular pressure' });
      const msg = h('div', { class: 'scene' }, 'Pressure normal: aqueous humor maintains intraocular pressure.');
      const nerve = parts.find(p => p.name === 'Optic nerve').mesh, disc = parts.find(p => p.name === 'Optic disc').mesh;
      cut.addEventListener('input', () => { clip.constant = 2.2 - cut.value / 100 * 2.2; });
      pr.addEventListener('input', () => {
        pressure = pr.value / 100; const s = 1 + pressure * .06; root.scale.set(s, s, s);
        const c = new THREE.Color(0xf2d27a).lerp(new THREE.Color(0x9b2a1f), pressure); nerve.material.color = c; disc.material.color = new THREE.Color(0xffe08a).lerp(new THREE.Color(0xb3381f), pressure);
        msg.innerHTML = pressure < .3 ? 'Pressure normal: aqueous humor maintains intraocular pressure.' : pressure < .7 ? '<k>Increased intraocular pressure</k> — glaucoma is a group of conditions that lead to it.' : 'Pressure builds up within the eye and <k>damages the optic nerve</k> → loss of peripheral vision, tunnel vision, vision loss.';
      });
      ctl.append(h('label', { class: 'eyebrow', for: cfg.id + '-cut' }, 'Cut open'), cut, h('label', { class: 'eyebrow', for: cfg.id + '-iop' }, 'Intraocular pressure'), pr, msg);
    }
  });
}

/* ---------- inner ear (Meniere) ---------- */
function ear3D(cfg) {
  let endo = [], vol = 0;
  return threeViewer({
    id: cfg.id, title: '3D inner ear: the labyrinth', src: 'A40, A51n, B41, B53',
    how: 'The inner ear = <k>cochlea</k> (hearing) + <k>semicircular canals</k> (balance), joined at the vestibule. Tap to name. Raise <b>endolymph</b> to see the distension of Meniere disease.',
    fallback: 'Text fallback: three looped semicircular canals sit at right angles above the vestibule; the snail-shaped cochlea coils forward from it. In Meniere disease the endolymph inside these tubes is overproduced and poorly absorbed, so the membranous labyrinth swells.',
    build(THREE, root) {
      const P = []; const add = (m, name, ar, opt = {}) => { root.add(m); const p = Object.assign({ mesh: m, name, ar }, opt); m.userData.part = p; P.push(p); return m; };
      const bone = c => new THREE.MeshStandardMaterial({ color: c, roughness: .6, transparent: true, opacity: .55, side: THREE.DoubleSide });
      const fluid = () => new THREE.MeshStandardMaterial({ color: 0x55c2ef, roughness: .3, emissive: 0x000000 });
      const canals = new THREE.Group();
      [[0, 0, 0], [Math.PI / 2, 0, 0], [0, Math.PI / 2, 0]].forEach((rot, i) => {
        const t = new THREE.Mesh(new THREE.TorusGeometry(.75, .13, 12, 48, Math.PI * 1.6), bone(0xe9dcc8)); t.rotation.set(...rot); t.position.set(-.9 + i * .2, .9, i * .15); canals.add(t);
        const e = new THREE.Mesh(new THREE.TorusGeometry(.75, .05, 8, 48, Math.PI * 1.6), fluid()); e.rotation.copy(t.rotation); e.position.copy(t.position); e.userData.passThrough = true; canals.add(e); endo.push(e);
        e.userData.rebuild = k => new THREE.TorusGeometry(.75, .05 * k, 8, 48, Math.PI * 1.6);
      });
      add(canals, 'Semicircular canals', 'القنوات الهلالية');
      add(new THREE.Mesh(new THREE.SphereGeometry(.45, 24, 16), bone(0xe2d2bb)), 'Vestibule', 'الدهليز').position.set(-.4, .1, 0);
      const pts = []; for (let i = 0; i < 200; i++) { const a = i / 200 * Math.PI * 5, rr = 1.05 * (1 - i / 260); pts.push(new THREE.Vector3(.6 + Math.cos(a) * rr, -.5 + Math.sin(a) * rr, i * .004)); }
      const curve = new THREE.CatmullRomCurve3(pts);
      const coch = new THREE.Group();
      coch.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 300, .2, 12), bone(0xd9c4a6)));
      const e2 = new THREE.Mesh(new THREE.TubeGeometry(curve, 300, .07, 10), fluid()); e2.userData.passThrough = true; coch.add(e2); endo.push(e2);
      e2.userData.rebuild = k => new THREE.TubeGeometry(curve, 300, .07 * k, 10);
      add(coch, 'Cochlea', 'القوقعة');
      return P;
    },
    controls(THREE, parts, ctl) {
      const sl = h('input', { type: 'range', min: 0, max: 100, value: 0, id: cfg.id + '-endo', 'aria-label': 'Endolymph volume' });
      const msg = h('div', { class: 'scene' }, 'Normal endolymph volume.');
      sl.addEventListener('input', () => {
        vol = sl.value / 100; endo.forEach(e => { const k = 1 + vol * 1.6; e.geometry.dispose(); e.geometry = e.userData.rebuild(k); e.material.color = new THREE.Color(0x55c2ef).lerp(new THREE.Color(0xa07cf0), vol > .66 ? 1 : 0); });
        msg.innerHTML = vol < .33 ? 'Normal endolymph volume.' : vol < .66 ? 'Overproduction + defective absorption → <k>volume and pressure within the labyrinth increase</k>.' : '<k>Distention → rupture and mixing of endolymph and perilymph</k> → hair-cell damage.';
      });
      ctl.append(h('label', { class: 'eyebrow', for: cfg.id + '-endo' }, 'Endolymph volume'), sl, msg);
    }
  });
}
