/* ===== generic interactives ===== */

/* sort: {buckets:[{n, items:[]}]} — tap an item, then tap its bucket */
function sortIx(cfg) {
  const box = ixShell(cfg.id, 'Sort', cfg.title, cfg.how || 'Tap an item, then tap the group it belongs to.', cfg.src);
  const all = []; cfg.buckets.forEach((b, bi) => b.items.forEach(t => all.push({ t, bi })));
  let sel = null, left = all.length;
  const pool = h('div', { class: 'tokens' });
  const bks = h('div', { class: 'buckets' });
  const bEls = cfg.buckets.map((b, bi) => {
    const el = h('button', { class: 'bucket', 'data-b': bi }, h('h4', null, b.n));
    el.addEventListener('click', () => {
      if (!sel) { toast('Tap an item first.'); return; }
      if (sel.it.bi === bi) {
        el.append(h('span', { class: 'token ok', html: sel.it.t })); sel.el.remove(); sel = null; left--; Sound.play('tick');
        $$('.bucket', bks).forEach(x => x.classList.remove('armed'));
        if (!left) { box.complete(); if (cfg.after) bks.after(h('div', { class: 'fb ok', html: cfg.after })); }
      } else { sel.el.classList.remove('bad'); void sel.el.offsetWidth; sel.el.classList.add('bad'); Sound.play('no'); }
    });
    bks.append(el); return el;
  });
  shuffle(all).forEach(it => {
    const t = h('button', { class: 'token', html: it.t });
    t.addEventListener('click', () => { $$('.token', pool).forEach(x => x.classList.remove('sel')); t.classList.add('sel'); sel = { it, el: t }; bEls.forEach(x => x.classList.add('armed')); });
    pool.append(t);
  });
  box.append(pool, bks, box.foot);
  box.__solve = () => { $$('.token', pool).forEach(t => { t.click(); const it = sel.it; bEls[it.bi].click(); }); };
  return box;
}

/* match: {pairs:[[a,b],...]} */
function matchIx(cfg) {
  const box = ixShell(cfg.id, 'Match', cfg.title, cfg.how || 'Tap a term on the left, then its partner on the right.', cfg.src);
  const L = h('div', { class: 'col' }), R = h('div', { class: 'col' });
  let selL = null, left = cfg.pairs.length;
  const lb = shuffle(cfg.pairs.map((p, i) => ({ t: p[0], i }))).map(o => { const b = h('button', { class: 'token', html: o.t, 'data-i': o.i }); b.addEventListener('click', () => { if (b.disabled) return; $$('.token', L).forEach(x => x.classList.remove('sel')); b.classList.add('sel'); selL = o.i; }); L.append(b); return b; });
  shuffle(cfg.pairs.map((p, i) => ({ t: p[1], i }))).forEach(o => {
    const b = h('button', { class: 'token', html: o.t, 'data-i': o.i });
    b.addEventListener('click', () => {
      if (b.disabled) return; if (selL == null) { toast('Tap a term on the left first.'); return; }
      if (selL === o.i) { const l = lb.find(x => +x.dataset.i === o.i); [l, b].forEach(x => { x.classList.remove('sel'); x.classList.add('ok'); x.disabled = true; }); selL = null; left--; Sound.play('tick'); if (!left) box.complete(); }
      else { b.classList.remove('bad'); void b.offsetWidth; b.classList.add('bad'); Sound.play('no'); }
    });
    R.append(b);
  });
  box.append(h('div', { class: 'pairs' }, L, R), box.foot);
  box.__solve = () => cfg.pairs.forEach((p, i) => { lb.find(x => +x.dataset.i === i).click(); $$('.token', R).find(x => +x.dataset.i === i).click(); });
  return box;
}

/* triage: one scenario card per table row. {cards:[{s, o:[correct,...], w}]} */
function triageIx(cfg) {
  const box = ixShell(cfg.id, 'Triage drill', cfg.title, cfg.how || 'One card per rule. Pick the action your notes give.', cfg.src);
  const stage = h('div', { class: 'stack' }); const count = h('span', { class: 'mono muted' });
  let i = 0, wrong = 0;
  const show = () => {
    stage.innerHTML = '';
    if (i >= cfg.cards.length) { stage.append(h('div', { class: 'fb ok' }, `Drill complete — ${cfg.cards.length} cards, ${wrong} wrong tap${wrong === 1 ? '' : 's'}.`)); box.complete(); return; }
    const c = cfg.cards[i]; count.textContent = (i + 1) + ' / ' + cfg.cards.length;
    const opts = h('div', { class: 'choices' });
    stage.append(h('div', { class: 'scene', html: c.s }), opts);
    shuffle(c.o.map((t, k) => ({ t, k }))).forEach(o => {
      const b = h('button', { class: 'opt', 'data-k': o.k }, h('span', { class: 'lt' }, '›'), h('span', { html: o.t }));
      b.addEventListener('click', () => {
        if (o.k === 0) { b.classList.add('right'); $$('.opt', opts).forEach(x => x.disabled = true); Sound.play('ok'); stage.append(h('div', { class: 'fb ok', html: c.w || 'Correct.' }), h('div', { class: 'gate' }, h('button', { class: 'btn primary small', onclick: () => { i++; show(); } }, i + 1 < cfg.cards.length ? 'Next card' : 'Finish'))); }
        else { b.classList.add('wrong'); b.disabled = true; wrong++; Sound.play('no'); }
      });
      opts.append(b);
    });
  };
  box.append(h('div', { class: 'row', style: { justifyContent: 'flex-end' } }, count), stage, box.foot); show();
  box.__solve = () => { let g = 0; while (i < cfg.cards.length && g++ < 100) { const b = $$('.opt[data-k="0"]', stage)[0]; b && b.click(); const n = $('.gate button', stage); n && n.click(); } };
  return box;
}

/* clinical case engine
   {title, intro, img?, vitals:{HR:..,BP:..}, steps:[{scene, vitals?, q, o:[[text, ok, feedback, vitalsPatch?]]}], end} */
function caseIx(cfg) {
  const box = ixShell(cfg.id, 'Clinical case', cfg.title, cfg.how || 'Work the call step by step. Wrong choices show you what happens.', cfg.src);
  let vit = Object.assign({}, cfg.vitals || {}), i = 0;
  const vrow = h('div', { class: 'vitalsrow' });
  const paintV = (alarm = {}) => { vrow.innerHTML = ''; Object.entries(vit).forEach(([k, v]) => vrow.append(h('div', { class: 'vbox' + (alarm[k] ? ' alarm' : '') }, h('span', null, k), h('b', null, v)))); };
  const stage = h('div', { class: 'casebox' });
  const show = () => {
    stage.innerHTML = '';
    if (i >= cfg.steps.length) { stage.append(h('div', { class: 'fb ok', html: cfg.end || 'Case complete.' })); box.complete(); return; }
    const st = cfg.steps[i];
    if (st.vitals) { vit = Object.assign(vit, st.vitals); paintV(); }
    if (st.img) stage.append(h('img', { class: 'qimg', src: IMG[st.img], alt: 'Case image', onclick: () => lightbox(imgEl(st.img, 'Case image')) }));
    stage.append(h('div', { class: 'scene', html: st.scene }), h('div', { class: 'stem', html: st.q }));
    const ch = h('div', { class: 'choices' }); stage.append(ch);
    shuffle(st.o.map((o, k) => ({ o, k }))).forEach(({ o, k }) => {
      const b = h('button', { class: 'opt', 'data-ok': o[1] ? '1' : '0' }, h('span', { class: 'lt' }, '›'), h('span', { html: o[0] }));
      b.addEventListener('click', () => {
        if (o[1]) {
          b.classList.add('right'); $$('.opt', ch).forEach(x => x.disabled = true); Sound.play('ok');
          stage.append(h('div', { class: 'fb ok', html: o[2] || 'Correct.' }), h('div', { class: 'gate' }, h('button', { class: 'btn primary small', onclick: () => { i++; show(); } }, 'Continue')));
        } else {
          b.classList.add('wrong'); b.disabled = true; Sound.play('no');
          if (o[3]) { Object.assign(vit, o[3]); paintV(Object.fromEntries(Object.keys(o[3]).map(x => [x, 1]))); }
          stage.append(h('div', { class: 'fb no', html: o[2] || 'Not the best choice.' }));
        }
      });
      ch.append(b);
    });
  };
  if (cfg.intro) box.append(h('div', { class: 'scene', html: cfg.intro }));
  box.append(vrow, stage, box.foot); paintV(); show();
  box.__solve = () => { let g = 0; while (i < cfg.steps.length && g++ < 50) { const b = $('.opt[data-ok="1"]', stage); b && b.click(); const n = $('.gate button', stage); n && n.click(); } };
  return box;
}

/* compare two (or more) pictures: name each one */
function compareIx(cfg) {
  const box = ixShell(cfg.id, 'Compare pictures', cfg.title, cfg.how || 'Which is which? Pick a name under each picture.', cfg.src);
  const grid = h('div', { class: 'compare' }); let left = cfg.items.length;
  const names = cfg.items.map(x => x.n);
  shuffle(cfg.items).forEach(it => {
    const fig = h('figure', null, zoomable(it.ph, 'Unlabelled picture'));
    const sel = h('div', { class: 'row', style: { gap: '6px' } });
    names.forEach(n => { const b = h('button', { class: 'token', 'data-ok': n === it.n ? '1' : '0' }, n); b.addEventListener('click', () => {
      if (n === it.n) { $$('.token', sel).forEach(x => x.disabled = true); b.classList.add('ok'); fig.append(h('figcaption', { class: 'fb ok', html: '<b>' + it.n + '.</b> ' + it.notice })); left--; Sound.play('ok'); if (!left) box.complete(); }
      else { b.classList.add('bad'); b.disabled = true; Sound.play('no'); }
    }); sel.append(b); });
    fig.append(sel); grid.append(fig);
  });
  box.append(grid, box.foot);
  box.__solve = () => $$('.token[data-ok="1"]', grid).forEach(b => b.click());
  return box;
}

/* timers for every time value in the notes */
function timerIx(cfg) {
  const box = ixShell(cfg.id, 'Timer', cfg.title, cfg.how || 'Real timers for the times in your notes. "Demo" runs it 60× faster.', cfg.src);
  let pi = 0, left = 0, iv = 0, fast = false;
  const disp = h('div', { class: 'timer', 'aria-live': 'polite' }, '00:00');
  const note = h('p', { class: 'howto' });
  const fmt = s => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(Math.floor(s % 60)).padStart(2, '0');
  const sel = h('div', { class: 'tokens' }, cfg.presets.map((p, k) => { const b = h('button', { class: 'token' + (k ? '' : ' sel') }, p.n); b.addEventListener('click', () => { $$('.token', sel).forEach(x => x.classList.remove('sel')); b.classList.add('sel'); pi = k; reset(); }); return b; }));
  const reset = () => { clearInterval(iv); iv = 0; left = cfg.presets[pi].s; disp.textContent = fmt(left); note.innerHTML = cfg.presets[pi].note + ' <span class="pill src">' + cfg.presets[pi].src + '</span>'; };
  const run = (f) => { fast = f; clearInterval(iv); iv = setInterval(() => { left -= fast ? 60 : 1; if (left <= 0) { left = 0; clearInterval(iv); iv = 0; Sound.play('ok'); toast('Time: ' + cfg.presets[pi].n); box.complete(); } disp.textContent = fmt(left); }, fast ? 1000 / 60 * 6 : 1000); };
  box.append(sel, disp, note, h('div', { class: 'row', style: { justifyContent: 'center' } },
    h('button', { class: 'btn primary small', onclick: () => run(false) }, 'Start'), h('button', { class: 'btn small', onclick: () => run(true) }, 'Demo ×60'), h('button', { class: 'btn small ghost', onclick: reset }, 'Reset')), box.foot);
  reset();
  box.__solve = () => { left = 1; run(true); };
  return box;
}

/* table step (rebuilt tables, verbatim rows) */
function tableStep(s) {
  const t = h('table'); t.append(h('thead', null, h('tr', null, s.head.map(c => h('th', { html: c })))));
  const tb = h('tbody'); s.rows.forEach(r => tb.append(h('tr', null, r.map(c => h('td', { html: c }))))); t.append(tb);
  return h('div', { class: 'card' }, h('div', { class: 'row', style: { justifyContent: 'space-between' } }, h('h3', null, s.h), h('span', { class: 'row', style: { gap: '6px' } }, srcPills(s))), h('div', { class: 'tbl' }, t), s.note ? h('p', { class: 'muted', html: s.note }) : null);
}
