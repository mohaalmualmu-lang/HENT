/* Module 1 — Eye I: anatomy, assessment, procedures (A1–A21, B1–B18, B26) */
MOD({
  id: 'm1', n: 1, title: 'Eye I — Anatomy, assessment & procedures', sub: 'Why EENT calls matter, the two eye nerves, the eye exam, eye drops, irrigation, contact lenses, prostheses and the ophthalmoscope.',
  ar: 'العين ١: التشريح، الفحص، والإجراءات', refs: 'A1–A21 · B1–B18, B26',
  steps: [
    { k: 'sec', h: 'Why EENT calls matter' },
    { k: 'card', id: 'm1-intro', h: 'EENT calls: what to expect', src: 'A4, A4n, B2', hl: true,
      b: `Paramedics may respond to calls involving disorders of the eyes, ears, nose, and throat <k>(EENT)</k>.
      <ul><li><k>A significant number of these calls involve trauma.</k></li>
      <li>Familiarity with EENT conditions helps when assessing the patient — and lets you <k>educate the patient on prevention or potential care</k>.</li>
      <li>Patients may need transport to an emergency department with access to an <k>eye specialist or an ear, nose, and throat specialist</k>.</li></ul>` },
    { k: 'card', id: 'm1-nems', h: 'The competency you are tested against', src: 'A2, A3, A3n', only: 'A',
      b: `National EMS Education Standard (Medicine): integrate assessment findings with epidemiology and pathophysiology to form a <k>field impression</k> and implement a treatment/disposition plan.<br>
      For this chapter: anatomy, physiology, epidemiology, pathophysiology, psychosocial impact, presentations, prognosis, and management of <k>common or major diseases of the eyes, ears, nose, and throat, including nosebleed</k> (textbook <n>pp 1144-1163</n>).` },
    { k: 'q', ids: ['m1q37'] },

    { k: 'sec', h: 'Eye anatomy' },
    { k: 'card', id: 'm1-nerves', h: 'Two nerves connect the eye to the brain', src: 'A5, A5n, B4', hl: true,
      b: `The eye connects to the brain by <n>2 nerves</n>.
      <ul><li><k>Oculomotor nerve</k> (<n>CN III</n>; third cranial nerve) — innervates the muscles that cause <k>motion of the eyeballs and upper eyelids</k>. B adds: it <k>works with trochlear (CN IV) and abducens (CN VI)</k> nerves. It also <k>carries parasympathetic nerve fibers</k> that cause <k>constriction of the pupil and accommodation of the lens</k>.</li>
      <li><k>Optic nerve</k> (<n>CN II</n>; <k>second cranial nerve</k>) — <k>provides the sense of vision</k>.</li></ul>` },
    { k: 'think', q: 'A pupil will not constrict to light. Which of the two nerves carries the fibers that should have constricted it?', a: '<k>Oculomotor nerve (CN III)</k> — its parasympathetic fibers cause constriction of the pupil and accommodation of the lens. The optic nerve (CN II) only provides vision.', src: 'A5n, B4' },
    { k: 'fig', fig: 'eye' },
    { k: 'fig', fig: 'lacrimal' },
    { k: 'ix', type: 'seq', id: 'm1-tears', title: 'Route: where tears go', fig: 'lacrimal', src: 'A7, B4 (figure)',
      how: 'Tap the stations in order; the marker follows the blue arrows on the figure. <span class="pill only">Beyond your notes: the slide only labels the parts; the order comes from the figure’s arrows.</span>',
      items: ['Lacrimal gland (upper outer corner) makes tears', 'Tears wash across the surface of the eye', 'Tears collect at the inner corner of the eye', 'Nasolacrimal duct carries them toward the nose'],
      pts: [[17, 25], [27, 38], [37, 43], [45, 52]] },
    { k: 'ix', type: 'eye3d', id: 'm1-eye3d' },
    { k: 'q', ids: ['m1q1', 'm1q2', 'm1q3', 'm1q33'] },

    { k: 'sec', h: 'Patient assessment' },
    { k: 'card', id: 'm1-scene', h: 'Scene, calm, general impression', src: 'A8, A8n, B6', hl: true,
      b: `<ol><li><k>Ensure scene safety.</k></li><li><k>Keep your patient calm.</k></li>
      <li><k>Form a general impression</k>: note <k>environmental clues</k> at the scene, the approximate <k>age and sex</k>, and the patient’s <k>degree of distress</k>.</li>
      <li><k>Assess airway and breathing</k>: rule out life threats. <k>Do not be distracted by a swollen, irritated eye</k> and miss priorities (A8n).</li>
      <li><k>Early transport may improve outcomes.</k></li></ol>` },
    { k: 'think', q: 'Only the left eye is injured. Why would you cover <b>both</b> eyes?', a: 'To <k>limit damage to the affected eye through sympathetic movement</k>: the eyes move together, so a moving healthy eye drags the injured one with it.', src: 'A8, B6' },
    { k: 'card', id: 'm1-cover', h: 'Cover both eyes · pain · cardiac monitor', src: 'A8, A8n, A9n, B6', hl: true,
      b: `<ul><li><k>Cover both eyes</k> to <k>limit damage to the affected eye through sympathetic movement</k>.</li>
      <li><k>Consider pain management.</k></li>
      <li><k>Cardiac monitoring is recommended</k>: <k>ocular pressure can stimulate the vagus nerve</k>, and <k>eye drops/medication can cause side effects such as low or high blood pressure</k>.</li>
      <li><k>Provide emotional care</k> for the patient.</li></ul>`,
      beyond: 'Vagus nerve stimulation slows the heart; pressure on the eye can trigger a reflex drop in heart rate (the oculocardiac reflex). That is why a monitor is on.' },
    { k: 'q', ids: ['m1q4', 'm1q5', 'm1q6', 'm1q7'] },
    { k: 'card', id: 'm1-history', h: 'Chief complaint & history (OPQRST)', src: 'A9, A9n, B7',
      b: `<k>Obtain the chief complaint and history</k> with <k>OPQRST</k> — B spells it out: <k>Onset, Provocation/palliation, Quality, Region/radiation, Severity, Timing</k>.
      <ul><li>How and when did symptoms begin?</li><li>What symptoms are experienced?</li><li><k>Are both eyes affected?</k></li><li>Are there any underlying diseases or conditions of the eye?</li></ul>` },
    { k: 'card', id: 'm1-red', h: 'Four symptoms that may mean a serious ocular condition', src: 'A9, A9n, B7', hl: true,
      b: `<ol><li><k>Visual loss that does not improve</k> when the patient blinks</li><li><k>Double vision</k></li><li><k>Severe eye pain</k></li><li><k>Foreign body sensation</k></li></ol>` },
    { k: 'q', ids: ['m1q8', 'm1q9'] },
    { k: 'card', id: 'm1-exam', h: 'Thorough examination: assess for 8 things', src: 'A9, A10, A10n, B8',
      b: `<k>Perform a thorough examination</k>: <k>Use standard precautions</k> and <k>Avoid aggravating the affected area</k>. Assess for:
      <ol><li><k>Pain or tenderness</k></li><li><k>Swelling</k></li><li><k>Abnormal movement or loss of movement</k></li><li><k>Sensation changes</k></li><li><k>Circulatory changes</k></li><li><k>Deformity</k></li><li><k>Visual changes</k></li><li><k>Airway compromise</k></li></ol>` },
    { k: 'table', h: 'T1 · Visible ocular structures: what to assess', src: 'A11, A12, A12n, B9, B10', hl: true,
      head: ['Structure', 'Assess for'],
      rows: [['<k>Orbital rim</k>', 'Ecchymosis, swelling, lacerations, tenderness'], ['<k>Eyelids</k>', 'Ecchymosis, swelling, lacerations, abnormalities'], ['<k>Corneas</k>', 'Foreign bodies'], ['<k>Conjunctivae</k>', 'Redness, pus, inflammation, foreign bodies'], ['<k>Globes</k>', 'Redness, abnormal pigmentation, lacerations'], ['<k>Eye surface</k>', 'Growths, discoloration, differences between eyes'], ['<k>Pupils</k>', 'Size, shape, equality, reaction to light — <k>PERRLA</k>']],
      note: 'Your handwriting (B9): <k>Ecchymosis</k> = discoloration.' },
    { k: 'ix', type: 'match', id: 'm1-t1match', title: 'Structure → what you look for', src: 'A11, A12, B9, B10',
      pairs: [['Orbital rim', 'Ecchymosis, swelling, lacerations, tenderness'], ['Eyelids', 'Ecchymosis, swelling, lacerations, abnormalities'], ['Corneas', 'Foreign bodies'], ['Conjunctivae', 'Redness, pus, inflammation, foreign bodies'], ['Globes', 'Redness, abnormal pigmentation, lacerations'], ['Eye surface', 'Growths, discoloration, differences between eyes'], ['Pupils', 'Size, shape, equality, reaction to light']] },
    { k: 'card', id: 'm1-perrla', h: 'PERRLA', src: 'A12n, B10',
      b: `Pupils: <k>PERRLA</k> = <k>pupils equal, round, reactive to light and accommodation</k>. The slide version: size, shape, equality, reaction to light.` },
    { k: 'card', id: 'm1-function', h: 'Ocular function: three tests', src: 'A13, A13n, B11', hl: true,
      b: `<ol><li><k>Visual acuity</k> — ability to see <k>large and small letters</k>. <k>Test each eye separately and document results</k>.</li>
      <li><k>Peripheral vision</k> — ability to recognize an object <k>entering the extremes of the visual field</k>.</li>
      <li><k>Ocular motility</k> — ability to <k>move the eyes in all directions</k>; check for <k>paralysis of gaze</k> or discoordination between the two eyes (<k>dysconjugate gaze</k>).</li></ol>` },
    { k: 'q', ids: ['m1q10', 'm1q11', 'm1q12', 'm1q13', 'm1q14', 'm1q15'] },

    { k: 'sec', h: 'Vital signs & eye medications' },
    { k: 'card', id: 'm1-vitals', h: 'Vitals and medication history', src: 'A14, A14n, B12', hl: true,
      b: `<ul><li><k>Obtain a full set of baseline vital signs</k>; A: <k>Reassess every 5–15 minutes</k> depending on the patient’s condition.</li>
      <li>Adverse effects are possible if the patient <k>Uses more than one eye medication</k> or <k>Uses too much medication</k>.</li>
      <li>Ask how the patient administered any eye medication. Generally recommended to <k>wait 5 minutes between the first and second drop</k>.</li>
      <li>B only: the <k>5-minute rule does not apply to emergency situations</k>.</li></ul>` },
    { k: 'card', id: 'm1-dropuses', h: 'Eye drops are used for (8)', src: 'A15n, B13', hl: true,
      b: `<ol><li><k>Conjunctivitis</k></li><li><k>Dry, red, or itchy eyes</k></li><li><k>Eye pain</k></li><li><k>Glaucoma</k> <span class="ar" lang="ar">(مياه زرقاء)</span></li><li><k>Eye surgery</k></li><li><k>Herpes simplex</k></li><li><k>Corneal abrasions</k></li><li><k>Lubrication/tear production</k></li></ol>` },
    { k: 'ix', type: 'seq', id: 'm1-drops', title: 'Apply eye drops or lubricant', src: 'A15, A15n, B14',
      items: ['Gently squeezing the lower eyelid to make a pouch', 'Applying the medication into the lower lid', 'Having the patient close the eyes and roll them downward', 'Applying gentle pressure to the corner of the eyes to prevent drainage of the medication'],
      after: 'Then <k>Ask patients which medications they have already taken</k> (A15n, B14).' },
    { k: 'q', ids: ['m1q16', 'm1q17', 'm1q18', 'm1q19', 'm1q20'] },

    { k: 'sec', h: 'Irrigation & transport' },
    { k: 'card', id: 'm1-irrig', h: 'Irrigation for chemical or thermal burns', src: 'A16, A16n, B15', hl: true,
      b: `<k>Irrigation</k> may be necessary for <k>chemical or thermal burns</k>.
      <ul><li><k>Use sterile water or isotonic saline solution</k>.</li><li><k>Flush liquid from the inside corner to the outside of the eye</k>.</li></ul>` },
    { k: 'card', id: 'm1-ed', h: 'Every eye injury goes to the ED', src: 'A16, A16n, B15',
      b: `<ul><li><k>Eye injuries should be seen in the emergency department</k>.</li><li><k>Eye injuries may be irreversible</k>.</li></ul>
      A adds: <k>Communication is key</k> to keeping the patient calm and informed; <k>Early decisions to transport can improve some outcomes</k>; <k>Early communication with medical control</k> can help direct your care.`, only: 'A' },
    { k: 'ix', type: 'irrigation', id: 'm1-irrsim' },
    { k: 'q', ids: ['m1q22', 'm1q23', 'm1q36'] },

    { k: 'sec', h: 'Contact lenses & eye prostheses' },
    { k: 'card', id: 'm1-lens', h: 'Contact lenses: the one reason to remove them', src: 'A17, A17n, A19n, B16, B17', hl: true,
      b: `<k>The only indication for removing contact lenses in the prehospital setting is a chemical burn of the eye</k>.
      <br>A lists <k>three types of contact lenses</k>: <k>Hard</k>, <k>Rigid gas-permeable</k>, <k>Soft (hydrophilic)</k>.
      <br><k>Advise emergency department staff if a patient is wearing contact lenses</k>.` },
    { k: 'card', id: 'm1-hard', h: 'Removing a hard lens', src: 'A18, A18n, B16', hl: true, ph: 'lens_hard', cap: 'Small suction cup on a hard lens (A18, B16)',
      b: `To remove a <k>hard</k> lens: <k>Use a small suction cup</k>, <k>moistening the end with saline</k>.` },
    { k: 'card', id: 'm1-soft', h: 'Removing a soft lens', src: 'A19, A19n, B17', hl: true, ph: 'lens_soft', cap: 'Pinching a soft lens off the eye (A19, B17)',
      b: `To remove <k>soft lenses</k>: <ol><li><k>Place one to two drops of saline in the eye</k>.</li><li><k>Gently pinch the lens</k> between your gloved thumb and index finger, and lift it off the surface of the eye.</li></ol>` },
    { k: 'photo', ph: 'lens_drops', cap: 'Step 1 for a soft lens: one to two drops of saline into the eye', src: 'A19, B17', notice: 'The drops go in before you pinch; a moist lens lifts off without dragging on the cornea.' },
    { k: 'ix', type: 'triage', id: 'm1-lenstriage', title: 'Contact lenses: remove or not?', src: 'A17–A19, B16, B17',
      cards: [
        { s: 'Alkali splashed into both eyes. The patient wears <b>soft</b> lenses.', o: ['Remove them: one to two drops of saline, then pinch and lift off', 'Leave them in and irrigate over them', 'Use a small suction cup moistened with saline', 'Leave them; tell the ED only if asked'], w: 'Chemical burn = the only prehospital indication. Soft lens: saline drops, then pinch with gloved thumb and index finger.' },
        { s: 'Acid in one eye. The patient wears <b>hard</b> lenses.', o: ['Remove them with a small suction cup moistened with saline', 'Pinch them between thumb and index finger', 'Leave them in; irrigation will wash them out', 'Leave them; hard lenses are never removed'], w: 'Hard lens: small suction cup, end moistened with saline.' },
        { s: 'Blunt trauma to the eye, no chemical exposure. Soft lenses in.', o: ['Leave them in — and advise ED staff the patient wears contact lenses', 'Remove them with saline drops and a pinch', 'Remove them with a suction cup', 'Irrigate them out'], w: 'No chemical burn → no prehospital removal. Always advise ED staff.' },
        { s: 'You hand over at the ED. Patient still wearing lenses.', o: ['Advise emergency department staff that the patient is wearing contact lenses', 'Say nothing — it is in your report', 'Remove them in the ambulance bay', 'Ask the patient to remove them'], w: '<k>Advise emergency department staff if a patient is wearing contact lenses</k>.' }] },
    { k: 'q', ids: ['m1q24', 'm1q25', 'm1q26', 'm1q27', 'm1q34'] },
    { k: 'card', id: 'm1-prosth', h: 'When to suspect an eye prosthesis', src: 'A20, A20n, B18', hl: true,
      b: `Suspect an artificial eye if:
      <ol><li><k>The eye does not respond to light</k>.</li><li>It <k>does not move in concert with the opposite eye</k>.</li><li>It <k>does not appear quite the same as the opposite eye</k>.</li><li><k>The patient says he or she has one</k> (if you are unsure, ask the patient).</li></ol>
      B adds: <k>No harm in treating like real eye</k>; <k>Strive to accurately determine eye function</k>.` },
    { k: 'ix', type: 'sort', id: 'm1-prosort', title: 'Prosthesis clue or red-flag symptom?', src: 'A9, A20, B7, B18',
      buckets: [{ n: 'Suggests an eye prosthesis', items: ['Does not respond to light', 'Does not move in concert with the opposite eye', 'Does not look quite the same as the other eye', 'Patient says he or she has one'] },
        { n: 'May mean a serious ocular condition', items: ['Visual loss that does not improve with blinking', 'Double vision', 'Severe eye pain', 'Foreign body sensation'] }] },
    { k: 'q', ids: ['m1q28', 'm1q38'] },

    { k: 'sec', h: 'The ophthalmoscope' },
    { k: 'card', id: 'm1-ophth', h: 'Ophthalmoscope (and otoscope)', src: 'A21, A21n, B26', hl: true, ph: 'ophthalmoscope', cap: 'Ophthalmoscope (A21, B26)',
      b: `<ul><li><k>Rarely used by paramedics</k>.</li><li>B: ophthalmoscope <k>Used to examine structures of the eye</k>; otoscope <k>Used to examine ear's external canal and tympanic membrane</k>.</li>
      <li>A: consists of a <k>concave mirror and a battery-powered light</k> (usually in the handle), <k>A rotating selection of lenses</k> and adjustable depth and magnification.</li>
      <li>Effective evaluation requires <k>Dilation of the patient's pupil with medication</k> and <k>Significant diagnostic expertise</k>.</li></ul>` },
    { k: 'ix', type: 'seq', id: 'm1-skill191', title: 'Skill Drill 19-1: using an ophthalmoscope', src: 'A21n', only: 'A',
      how: 'A-only (speaker notes of A21). Tap the steps in order.',
      items: ['Darken the environment; patient looks straight ahead at a distant object', 'Light no brighter than necessary; lens set to 0', 'Use your right hand and eye to examine the patient\'s right eye (left for left)', 'Look into the pupil from 10 to 20 inches (25 to 51 cm) away at a 45° angle — see the red reflex', 'Slowly move toward the patient to see the fundus; adjust the lens to focus', 'Locate a blood vessel and follow it back to the disk', 'Inspect the size, color, and clarity of the disk; note vessels and retinal lesions', 'Move nasally to observe the macula', 'Repeat the process with the other eye'] },
    { k: 'card', id: 'm1-skill', h: 'Skill Drill 19-1 details', src: 'A21n', only: 'A',
      flag: 'A21n says “Move nasally to observe the macula”. Standard references place the macula temporal to the optic disc. For the exam, use your notes’ wording.',
      b: `<k>Skill Drill 19-1</k>: <k>Darken the environment</k>; lens at <n>0</n>; <k>Use your right hand and eye to examine the patient's right eye</k>. From <n>10 to 20 inches (25 to 51 cm)</n> at a <n>45° angle</n> you see the retina as a <k>red reflex</k> (bright orange glow). Move closer to see the <k>fundus</k>; <k>Locate a blood vessel and follow it back to the disk</k> (your point of reference). Inspect <k>size, color, and clarity of the disk</k>; <k>Move nasally to observe the macula</k>; repeat on the other eye.` },
    { k: 'q', ids: ['m1q29', 'm1q30', 'm1q31', 'm1q32', 'm1q35'] },
    { k: 'spell', terms: ['Ecchymosis', 'Conjunctivae', 'Oculomotor', 'Ophthalmoscope'] },
    { k: 'sa', id: 'm1sa1' }, { k: 'sa', id: 'm1sa2' }, { k: 'sa', id: 'm1sa3' }, { k: 'sa', id: 'm1sa4' }, { k: 'sa', id: 'm1sa5' }, { k: 'sa', id: 'm1sa6' },
  ],

  lists: [
    { id: 'm1-intro', title: 'EENT calls (introduction)', src: 'A4, B2', items: ['A significant number of these calls involve trauma', 'Familiarity helps assessment and lets you educate the patient on prevention or potential care', 'Patients may need an ED with an eye specialist or an ear, nose, and throat specialist'], foils: ['Most EENT calls are cardiac emergencies', 'EENT patients never need a specialist'] },
    { id: 'm1-cn3', title: 'Oculomotor nerve (CN III) functions', src: 'A5, A5n, B4', items: ['Motion of the eyeballs', 'Motion of the upper eyelids', 'Constriction of the pupil', 'Accommodation of the lens'], foils: ['Sense of vision', 'Tear production', 'Sensation of the cornea'] },
    { id: 'm1-genimp', title: 'Eye: form a general impression — note', src: 'A8n, B6', items: ['Environmental clues at the scene', 'Approximate age and sex of the patient', 'Patient’s degree of distress'], foils: ['Pupil reaction to light', 'Visual acuity in each eye', 'Intraocular pressure'] },
    { id: 'm1-eyeassess', title: 'Eye patient assessment (slide A8 / B6)', src: 'A8, B6', items: ['Ensure scene safety', 'Keep patient calm', 'Form general impression', 'Assess airway and breathing', 'Cover both eyes', 'Consider pain management', 'Cardiac monitoring recommended'], foils: ['Irrigate every eye before assessing the airway', 'Remove contact lenses in every patient', 'Cover only the injured eye'] },
    { id: 'm1-hx', title: 'History questions for an eye complaint', src: 'A9n, B7', items: ['How and when did symptoms begin?', 'What symptoms are experienced?', 'Are both eyes affected?', 'Are there any underlying diseases or conditions of the eye?'], foils: ['When did you last eat?', 'Have you had chest pain today?'] },
    { id: 'm1-red', title: 'Symptoms that may indicate a serious ocular condition', src: 'A9, B7', items: ['Visual loss that does not improve when the patient blinks', 'Double vision', 'Severe eye pain', 'Foreign body sensation'], foils: ['Itchy, watery eyes', 'Visual loss that improves when the patient blinks', 'Mild eyelid itching'] },
    { id: 'm1-for8', title: 'Eye exam: assess for', src: 'A10, B8', items: ['Pain or tenderness', 'Swelling', 'Abnormal movement or loss of movement', 'Sensation changes', 'Circulatory changes', 'Deformity', 'Visual changes', 'Airway compromise'], foils: ['Blood glucose level', 'Hearing changes', 'Gag reflex'] },
    { id: 'm1-structs', title: 'Visible ocular structures to assess', src: 'A11, A12, B9, B10', items: ['Orbital rim', 'Eyelids', 'Corneas', 'Conjunctivae', 'Globes', 'Eye surface', 'Pupils'], foils: ['Tympanic membrane', 'Turbinates', 'Mastoid process'] },
    { id: 'm1-tests', title: 'Ocular function tests', src: 'A13, B11', items: ['Visual acuity', 'Peripheral vision', 'Ocular motility'], foils: ['Intraocular pressure measurement', 'Color vision testing', 'Corneal reflex'] },
    { id: 'm1-adverse', title: 'Adverse effects from eye medication are possible if the patient', src: 'A14, B12', items: ['Uses more than one eye medication', 'Uses too much medication'], foils: ['Uses drops at room temperature', 'Uses drops at bedtime', 'Uses preservative-free drops'] },
    { id: 'm1-dropuses', title: 'Eye drops are used for', src: 'A15n, B13', items: ['Conjunctivitis', 'Dry, red, or itchy eyes', 'Eye pain', 'Glaucoma', 'Eye surgery', 'Herpes simplex', 'Corneal abrasions', 'Lubrication/tear production'], foils: ['Otitis externa', 'Sinusitis', 'Papilledema'] },
    { id: 'm1-dropsteps', title: 'Applying eye drops and lubricants', ordered: true, src: 'A15, B14', items: ['Gently squeezing the lower eyelid to make a pouch', 'Applying the medication into the lower lid', 'Having the patient close the eyes and roll them downward', 'Applying gentle pressure to the corner of the eyes to prevent drainage'], foils: ['Having the patient roll the eyes upward', 'Squeezing the upper eyelid'] },
    { id: 'm1-irrig', title: 'Irrigation (chemical or thermal burns)', src: 'A16, B15', items: ['Use sterile water or isotonic saline solution', 'Flush liquid from the inside corner to the outside of the eye'], foils: ['Flush from the outside corner toward the nose', 'Use lubricating eye drops', 'Irrigate only if contact lenses are out'] },
    { id: 'm1-eyeinj', title: 'Eye injuries (A16n)', src: 'A16, A16n, B15', items: ['Should be seen in the emergency department', 'May be irreversible', 'Communication is key to keeping the patient calm and informed', 'Early decisions to transport can improve some outcomes', 'Early communication with medical control can help direct your care'], foils: ['Can be safely left for follow-up next week', 'Are always reversible'] },
    { id: 'm1-lenstypes', title: 'Types of contact lenses', src: 'A17', items: ['Hard', 'Rigid gas-permeable', 'Soft (hydrophilic)'], foils: ['Silicone (hydrophobic)', 'Scleral prism', 'Bifocal glass'] },
    { id: 'm1-prosth', title: 'Suspect an eye prosthesis if', src: 'A20, A20n, B18', items: ['The eye does not respond to light', 'The eye does not move in concert with the opposite eye', 'The eye does not appear quite the same as the opposite eye', 'The patient says he or she has one'], foils: ['The pupil reacts briskly to light', 'The eye is red and painful', 'The cornea looks cloudy'] },
    { id: 'm1-ophreq', title: 'Effective ophthalmoscope evaluation requires', src: 'A21, A21n', items: ['Dilation of the patient’s pupil with medication', 'Significant diagnostic expertise'], foils: ['A topical anesthetic', 'A bright room', 'Removal of contact lenses'] },
    { id: 'm1-skill', title: 'Skill Drill 19-1 (ophthalmoscope)', ordered: true, src: 'A21n', items: ['Darken the environment; patient looks at a distant object', 'Light no brighter than necessary; lens set to 0', 'Right hand and eye for the patient’s right eye', 'Look in from 10 to 20 inches at a 45° angle — red reflex', 'Move closer to see the fundus; adjust the lens', 'Locate a blood vessel and follow it back to the disk', 'Inspect size, color, and clarity of the disk', 'Move nasally to observe the macula', 'Repeat with the other eye'], foils: ['Turn the light to maximum brightness'] },
  ],

  qs: [
    { id: 'm1q1', lv: 'R', src: 'A5, B4', s: 'The oculomotor nerve is which cranial nerve?', o: ['Third cranial nerve (CN III)', 'Second cranial nerve (CN II)', 'Fourth cranial nerve (CN IV)', 'Sixth cranial nerve (CN VI)'], w: 'Oculomotor = CN III; it moves the eyeballs and upper eyelids and carries parasympathetic fibers.', tw: 'CN II is the optic nerve — it provides vision, it does not move the eye.' },
    { id: 'm1q2', lv: 'U', src: 'A5n, B4', s: 'The parasympathetic fibers carried by the oculomotor nerve cause:', o: ['Constriction of the pupil and accommodation of the lens', 'The sense of vision', 'Tear production by the lacrimal gland', 'Motion of the lower eyelid only'], w: 'CN III carries parasympathetic fibers that cause constriction of the pupil and accommodation of the lens.', tw: 'Vision comes from the optic nerve (CN II).' },
    { id: 'm1q3', lv: 'R', src: 'A5, B4', s: 'What does the optic nerve do?', o: ['Provides the sense of vision', 'Moves the upper eyelid', 'Constricts the pupil', 'Drains tears into the nose'], w: 'Optic nerve (second cranial nerve) = sense of vision.', tw: 'Moving the upper eyelid is the oculomotor nerve (CN III).' },
    { id: 'm1q33', lv: 'U', src: 'A7, B4 (figure)', s: 'On the lacrimal-system figure, tears drain from the eye through the:', o: ['Nasolacrimal duct', 'Canal of Schlemm', 'Lacrimal gland', 'Eustachian tube'], w: 'The nasolacrimal duct runs from the inner corner of the eye toward the nose.', tw: 'The canal of Schlemm drains aqueous humor inside the eye (glaucoma topic), not tears.' },
    { id: 'm1q4', lv: 'A', src: 'A8, A8n, B6', s: 'You arrive to a patient with a badly swollen, irritated eye who is also breathing noisily. What comes first?', o: ['Assess airway and breathing and rule out life threats', 'Irrigate the eye immediately', 'Test visual acuity in each eye', 'Remove any contact lenses'], w: 'Assess airway and breathing first. Do not be distracted by a swollen, irritated eye and miss priorities.', tw: 'Irrigation is for chemical or thermal burns, and never before life threats.' },
    { id: 'm1q5', lv: 'U', src: 'A8, B6', hl: true, s: 'Why cover both eyes when only one is injured?', o: ['To limit damage to the affected eye through sympathetic movement', 'To prevent photophobia in the healthy eye', 'To stop the patient from seeing the injury and panicking', 'Because eye drops must be kept in both eyes'], w: 'The eyes move together (sympathetic movement); covering both keeps the injured eye still.', tw: 'Photophobia is a symptom of some eye conditions, but it is not the reason your notes give.' },
    { id: 'm1q6', lv: 'U', src: 'A8n, B6', s: 'Why is cardiac monitoring recommended for eye patients?', o: ['Ocular pressure can stimulate the vagus nerve', 'Eye injuries usually cause chest pain', 'The optic nerve controls heart rate', 'Every eye patient needs a 12-lead ECG'], w: 'Ocular pressure can stimulate the vagus nerve; eye drops can also change blood pressure.', tw: 'The optic nerve provides vision; it does not control the heart.' },
    { id: 'm1q7', lv: 'R', src: 'A8n, B6', s: 'Which side effect of eye drops/medication is named as a reason for cardiac monitoring?', o: ['Low or high blood pressure', 'Hyperglycemia', 'Hypothermia', 'Seizures'], w: 'Eye drops/medication can cause side effects such as low or high blood pressure.', tw: 'Blood glucose changes are not mentioned in your notes.' },
    { id: 'm1q8', lv: 'R', src: 'A9, B7', hl: true, s: 'Which symptom may indicate a serious ocular condition?', o: ['Visual loss that does not improve when the patient blinks', 'Itchy eyes with sneezing', 'Mild redness after swimming', 'Watery eyes while cutting onions'], w: 'The four red flags: visual loss not improved by blinking, double vision, severe eye pain, foreign body sensation.', tw: 'Itchy eyes with sneezing is the rhinitis picture, not a serious-ocular red flag.' },
    { id: 'm1q9', lv: 'A', src: 'A9, B7', s: 'A patient keeps blinking but her blurred vision does not clear, and she now sees double. What is your impression?', o: ['Possible serious ocular condition — two red-flag symptoms', 'Normal tear-film blur — have her keep blinking', 'Contact-lens irritation — remove the lenses', 'Allergic conjunctivitis — reassure and release'], w: 'Visual loss that does not improve with blinking + double vision = red flags for a serious ocular condition.', tw: 'Blur that clears with blinking would be reassuring; hers does not clear.' },
    { id: 'm1q10', lv: 'R', src: 'A12n, B10', s: 'PERRLA stands for:', o: ['Pupils equal, round, reactive to light and accommodation', 'Pupils even, regular, responsive to light and air', 'Pupils equal, round, reactive, lens accommodation absent', 'Peripheral, eyelid, retina, reflex, lens, acuity'], w: 'PERRLA = pupils equal, round, reactive to light and accommodation.', tw: 'Close, but “air” and “even/regular” are not the words.' },
    { id: 'm1q11', lv: 'R', src: 'A12, B9', s: 'When you assess the conjunctivae, you look for:', o: ['Redness, pus, inflammation, foreign bodies', 'Ecchymosis, swelling, lacerations, tenderness', 'Size, shape, equality, reaction to light', 'Growths, discoloration, differences between eyes'], w: 'Conjunctivae: redness, pus, inflammation, foreign bodies (T1).', tw: 'Ecchymosis, swelling, lacerations, tenderness belongs to the orbital rim.' },
    { id: 'm1q12', lv: 'R', src: 'A11, B9', s: 'On the corneas you assess for:', o: ['Foreign bodies', 'Abnormal pigmentation', 'Ecchymosis', 'Pus'], w: 'Corneas: foreign bodies.', tw: 'Abnormal pigmentation is checked on the globes.' },
    { id: 'm1q13', lv: 'U', src: 'A13n, B11', hl: true, s: '“Dysconjugate gaze” means:', o: ['Discoordination between the movements of the two eyes', 'Inability to see objects at the edge of the visual field', 'Pupils of unequal size', 'Double vision that improves with blinking'], w: 'Dysconjugate gaze = the two eyes do not move together; checked during ocular motility.', tw: 'Missing objects at the edge of the field is a peripheral vision problem.' },
    { id: 'm1q14', lv: 'R', src: 'A13, B11', s: 'Peripheral vision testing checks the ability to:', o: ['Recognize an object entering the extremes of the visual field', 'See large and small letters', 'Move the eyes in all directions', 'See the red reflex'], w: 'Peripheral vision = recognizing an object entering the extremes of the visual field.', tw: 'Large and small letters = visual acuity.' },
    { id: 'm1q15', lv: 'R', src: 'A13n, B11', s: 'How should visual acuity be tested?', o: ['Each eye separately, with results documented', 'Both eyes together, to save time', 'Only the injured eye', 'With the ophthalmoscope at 45°'], w: 'Test each eye separately and document results.', tw: 'Testing both eyes together hides a one-sided loss.' },
    { id: 'm1q16', lv: 'U', src: 'A14, B12', s: 'A patient used two different eye medications this morning. Why does that matter?', o: ['Using more than one eye medication can cause adverse effects', 'It does not — eye drops act only on the eye', 'It proves the patient has glaucoma', 'They must always be 30 minutes apart'], w: 'Adverse effects are possible if the patient uses more than one eye medication or too much medication.', tw: 'Eye drops can act beyond the eye — your notes link them to low or high blood pressure.' },
    { id: 'm1q17', lv: 'A', src: 'B12', only: 'B', s: 'In an emergency, must you wait 5 minutes between the first and second eye drop?', o: ['No — the 5-minute rule does not apply to emergency situations', 'Yes — always wait 5 minutes', 'Yes — wait 10 minutes in emergencies', 'No — a second drop is never given'], w: 'B12: generally wait 5 minutes between drops, but the 5-minute rule does not apply to emergency situations.', tw: 'The general rule has an emergency exception in B.' },
    { id: 'm1q18', lv: 'R', src: 'A15, B14', s: 'First step when applying eye drops or lubricant:', o: ['Gently squeeze the lower eyelid to make a pouch', 'Apply gentle pressure to the corner of the eye', 'Have the patient roll the eyes downward', 'Apply the medication onto the cornea'], w: 'Order: pouch the lower lid → medication into the lower lid → close and roll downward → gentle pressure at the corner.', tw: 'Pressure at the corner is the last step, to keep the medication from draining.' },
    { id: 'm1q19', lv: 'U', src: 'A15, B14', s: 'Gentle pressure on the corner of the eye after drops is done to:', o: ['Prevent drainage of the medication from the eye', 'Open the nasolacrimal duct', 'Stimulate tear production', 'Test for tenderness'], w: 'It prevents drainage of the medication from the eye.', tw: 'Opening the drainage would do the opposite of what you want.' },
    { id: 'm1q20', lv: 'R', src: 'A15n, B14', s: 'After the medication goes into the lower lid, the patient should:', o: ['Close the eyes and roll them downward', 'Close the eyes and roll them upward', 'Keep the eyes wide open for a minute', 'Blink rapidly ten times'], w: 'Close the eyes and roll them downward.', tw: 'Upward is the classic wrong answer — your notes say downward.' },
    { id: 'm1q22', lv: 'A', src: 'A16, B15', hl: true, s: 'Chemical splash to the eye. Which fluid do you irrigate with?', o: ['Sterile water or isotonic saline solution', 'Lubricating eye drops', 'Topical antibiotic drops', 'Any fluid with added soap'], w: 'Use sterile water or isotonic saline solution.', tw: 'Lubricating drops are for lubrication/tear production, not irrigation of a burn.' },
    { id: 'm1q23', lv: 'A', src: 'A16, B15', hl: true, s: 'Which direction do you flush the eye?', o: ['From the inside corner to the outside of the eye', 'From the outside corner toward the nose', 'From the top of the eye downward only', 'In circles over the cornea'], w: 'Flush liquid from the inside corner to the outside of the eye.', tw: 'Outside-to-inside is backwards.' },
    { id: 'm1q36', lv: 'U', src: 'A16n', only: 'A', s: 'Eye injuries may be irreversible. According to deck A, what helps?', o: ['Early decisions to transport and early communication with medical control', 'Delaying transport until vision is fully tested', 'Removing contact lenses in every eye injury', 'Pressing on the globe to check firmness'], w: 'Communication is key; early decisions to transport can improve some outcomes; early communication with medical control helps direct care.', tw: 'Delaying transport works against “early transport may improve outcomes”.' },
    { id: 'm1q37', lv: 'R', src: 'A4, B2', hl: true, s: 'A significant number of EENT calls involve:', o: ['Trauma', 'Cardiac arrest', 'Poisoning', 'Childbirth'], w: 'A significant number of these calls involve trauma.', tw: 'Not in your notes for EENT.' },
    { id: 'm1q24', lv: 'R', src: 'A17, B16', hl: true, s: 'The only indication for removing contact lenses in the prehospital setting is:', o: ['A chemical burn of the eye', 'Any eye trauma', 'An unconscious patient', 'A corneal abrasion'], w: 'Only a chemical burn of the eye.', tw: 'General eye trauma is not an indication — leave them and tell the ED.' },
    { id: 'm1q25', lv: 'A', src: 'A18, B16', s: 'How do you remove a hard contact lens?', o: ['With a small suction cup, its end moistened with saline', 'Pinch it between gloved thumb and index finger', 'Irrigate until it floats out', 'Hard lenses are never removed'], w: 'Hard lens: small suction cup, moisten the end with saline.', tw: 'Pinching is the method for soft lenses.' },
    { id: 'm1q26', lv: 'A', src: 'A19, B17', s: 'How do you remove a soft contact lens?', o: ['One to two drops of saline, then pinch the lens with gloved thumb and index finger and lift it off', 'Use a small suction cup moistened with saline', 'Slide it onto the sclera and leave it', 'Irrigate until it washes out'], w: 'Soft lens: 1–2 drops of saline in the eye, then gently pinch and lift off.', tw: 'The suction cup is for hard lenses.' },
    { id: 'm1q27', lv: 'R', src: 'A19n, B17', s: 'Whatever you decide about a patient’s contact lenses, you should:', o: ['Advise emergency department staff that the patient wears contact lenses', 'Throw the lenses away at the scene', 'Ask the patient to reinsert them', 'Mention it only if you removed them'], w: 'Advise emergency department staff if a patient is wearing contact lenses.', tw: 'ED staff need to know even if the lenses are still in.' },
    { id: 'm1q34', lv: 'R', src: 'A18, B16', img: 'ph_lens_hard', s: 'This technique is used for which lens?', o: ['A hard contact lens', 'A soft contact lens', 'An eye prosthesis', 'Any lens during irrigation'], w: 'Small suction cup = hard lens.', tw: 'Soft lenses are pinched off after saline drops.' },
    { id: 'm1q28', lv: 'U', src: 'A20, B18', hl: true, s: 'Which set of findings should make you suspect an eye prosthesis?', o: ['No response to light, no movement with the other eye, does not look quite the same', 'Red eye, cloudy cornea and severe pain', 'Sudden painless loss of vision in one eye', 'Red, swollen, tender eyelid'], w: 'Suspect a prosthesis if the eye does not respond to light, does not move in concert with the opposite eye, does not look quite the same — or the patient says so.', tw: 'Red eye + cloudy cornea + severe pain is acute narrow-angle glaucoma.' },
    { id: 'm1q38', lv: 'A', src: 'A20n, B18', s: 'You are unsure whether an eye is artificial. What do you do?', o: ['Ask the patient', 'Examine it with the ophthalmoscope', 'Try to remove it', 'Irrigate it to see if it moves'], w: 'If you are unsure, ask the patient. B adds: there is no harm in treating it like a real eye.', tw: 'The ophthalmoscope is rarely used by paramedics and needs a dilated pupil and expertise.' },
    { id: 'm1q29', lv: 'R', src: 'A21, B26', s: 'Which statement about the ophthalmoscope is in your notes?', o: ['It is rarely used by paramedics', 'It examines the ear’s external canal and tympanic membrane', 'It needs no special expertise', 'It works best without pupil dilation'], w: 'Rarely used by paramedics; needs dilation with medication and significant diagnostic expertise.', tw: 'The ear’s canal and tympanic membrane are examined with the otoscope.' },
    { id: 'm1q30', lv: 'R', src: 'A21n', only: 'A', s: 'Looking into the pupil from 10–20 inches, you should first see:', o: ['The red reflex — a bright orange glow', 'The macula', 'The optic disk in sharp focus', 'The tympanic membrane'], w: 'You should see the retina as a “red reflex”, a bright orange glow.', tw: 'The macula comes last — you move nasally to observe it.' },
    { id: 'm1q31', lv: 'U', src: 'A21n', only: 'A', s: 'To examine the patient’s RIGHT eye with an ophthalmoscope you use:', o: ['Your right hand and right eye', 'Your left hand and left eye', 'Your dominant hand and eye', 'Both eyes, like binoculars'], w: 'Right hand and eye for the patient’s right eye; left for left.', tw: 'Left hand/eye is for the patient’s left eye.' },
    { id: 'm1q32', lv: 'R', src: 'A21n', only: 'A', flag: 'Standard references place the macula temporal to the disc; your notes say “move nasally”.', s: 'In Skill Drill 19-1, after inspecting the disk you observe the macula by moving:', o: ['Nasally', 'Temporally', 'Straight upward', 'Away from the patient'], w: 'A21n: “Move nasally to observe the macula.” (⚑ see note)', tw: 'Temporally is the textbook-anatomy answer, but your notes say nasally.' },
    { id: 'm1q35', lv: 'R', src: 'A21, B26', img: 'ph_ophthalmoscope', s: 'This device is the:', o: ['Ophthalmoscope', 'Otoscope', 'Laryngoscope', 'Penlight'], w: 'Ophthalmoscope — rarely used by paramedics; used to examine structures of the eye.', tw: 'The otoscope has a cone-shaped speculum on the head for the ear.' },
  ],

  sa: [
    { id: 'm1sa1', src: 'A9, B7', q: 'List the four symptoms that may indicate a serious ocular condition.', keys: ['Visual loss that does not improve when the patient blinks', 'Double vision', 'Severe eye pain', 'Foreign body sensation'], model: 'Visual loss that does not improve with blinking; double vision; severe eye pain; foreign body sensation.' },
    { id: 'm1sa2', src: 'A15, B14', q: 'Describe, in order, how eye drops or lubricants are applied.', keys: ['Gently squeeze the lower eyelid to make a pouch', 'Apply the medication into the lower lid', 'Patient closes the eyes and rolls them downward', 'Gentle pressure at the corner of the eye to prevent drainage'], model: '1) Gently squeeze the lower eyelid to make a pouch. 2) Apply the medication into the lower lid. 3) Have the patient close the eyes and roll them downward. 4) Apply gentle pressure to the corner of the eyes to prevent drainage of the medication.' },
    { id: 'm1sa3', src: 'A8n, B6', q: 'Why is cardiac monitoring recommended for patients with eye complaints?', keys: ['Ocular pressure can stimulate the vagus nerve', 'Eye drops/medication can cause low or high blood pressure'], model: 'Ocular pressure can stimulate the vagus nerve, and eye drops/medication can cause side effects such as low or high blood pressure.' },
    { id: 'm1sa4', src: 'A17–A19, B16, B17', q: 'When may a paramedic remove contact lenses, and how is each type removed?', keys: ['Only for a chemical burn of the eye', 'Hard lens: small suction cup moistened with saline', 'Soft lens: one to two drops of saline first', 'Soft lens: pinch with gloved thumb and index finger and lift off', 'Advise ED staff the patient wears lenses'], model: 'Only for a chemical burn of the eye. Hard: small suction cup with the end moistened with saline. Soft: one to two drops of saline, then gently pinch between gloved thumb and index finger and lift off. Advise ED staff that the patient wears contact lenses.' },
    { id: 'm1sa5', src: 'A13, A13n, B11', q: 'Name the three tests of ocular function and what each checks.', keys: ['Visual acuity — large and small letters, each eye separately', 'Peripheral vision — object entering the extremes of the visual field', 'Ocular motility — moving the eyes in all directions / dysconjugate gaze'], model: 'Visual acuity (large and small letters, each eye tested separately and documented); peripheral vision (recognizing an object entering the extremes of the visual field); ocular motility (moving the eyes in all directions, checking for paralysis of gaze or dysconjugate gaze).' },
    { id: 'm1sa6', src: 'A16, B15', q: 'How do you irrigate an eye after a chemical or thermal burn, and where does the patient go?', keys: ['Sterile water or isotonic saline solution', 'Flush from the inside corner to the outside of the eye', 'Eye injuries should be seen in the emergency department'], model: 'Use sterile water or isotonic saline and flush from the inside corner to the outside of the eye. All eye injuries should be seen in the emergency department (they may be irreversible).' },
  ],

  nums: [
    { v: '2 nerves', q: 'How many nerves connect the eye to the brain in your notes?', d: ['1 nerve', '3 nerves', '12 nerves'], src: 'A5n, B4' },
    { v: 'CN III', q: 'Oculomotor nerve = which cranial nerve?', d: ['CN II', 'CN IV', 'CN VI'], src: 'A5, B4' },
    { v: 'CN II', q: 'Optic nerve = which cranial nerve?', d: ['CN III', 'CN I', 'CN VIII'], src: 'A5, B4' },
    { v: 'CN IV and CN VI', q: 'Which nerves work with CN III to move the eyeballs (B only)?', d: ['CN V and CN VII', 'CN II and CN VIII', 'CN IX and CN XII'], src: 'B4' },
    { v: '4', q: 'How many symptoms may indicate a serious ocular condition?', d: ['3', '6', '8'], src: 'A9, B7' },
    { v: '8', q: 'How many items are on the eye-exam “assess for” list?', d: ['5', '6', '10'], src: 'A10, B8' },
    { v: '3', q: 'How many ocular function tests are listed?', d: ['2', '4', '5'], src: 'A13, B11' },
    { v: '5–15 minutes', q: 'Reassess vital signs every … depending on the patient’s condition (A only)?', d: ['30–60 minutes', '1–2 minutes', '2 hours'], src: 'A14n' },
    { v: '5 minutes', q: 'Recommended wait between the first and second eye drop?', d: ['1 minute', '15 minutes', '30 seconds'], src: 'A14n, B12' },
    { v: '8', q: 'How many uses of eye drops are listed?', d: ['4', '6', '10'], src: 'A15n, B13' },
    { v: 'One to two drops', q: 'Saline placed in the eye before removing a soft contact lens?', d: ['Five to six drops', 'A full litre', 'None — remove it dry'], src: 'A19, B17' },
    { v: 'Three', q: 'How many types of contact lenses are listed (A17)?', d: ['Two', 'Four', 'Five'], src: 'A17' },
    { v: '10 to 20 inches (25 to 51 cm)', q: 'Ophthalmoscope: distance from the pupil when you first look in?', d: ['1 to 2 inches (2.5 to 5 cm)', '3 to 4 feet (1 to 1.2 m)', '30 to 40 inches (76 to 102 cm)'], src: 'A21n' },
    { v: '45°', q: 'Ophthalmoscope: angle to the eye when you first look in?', d: ['90°', '15°', '180°'], src: 'A21n' },
    { v: '0', q: 'Ophthalmoscope lens setting to start with?', d: ['+10', '−5', '20'], src: 'A21n' },
    { v: 'pp 1144-1163', q: 'Textbook pages for the EENT competency (A3n)', src: 'A3n' },
  ],

  spell: [
    { t: 'Ecchymosis', hint: 'Discoloration (bruising) you look for on the orbital rim and eyelids.', ar: 'كدمة / تغيّر لون', src: 'B9 ✍' },
    { t: 'Conjunctivae', hint: 'Plural: the linings you check for redness, pus, inflammation and foreign bodies.', ar: 'الملتحمات', src: 'B9 ✍' },
    { t: 'Oculomotor', hint: 'CN III — moves the eyeballs and upper eyelids.', ar: 'العصب المحرك للعين', src: 'A5, B4' },
    { t: 'Ophthalmoscope', hint: 'Device rarely used by paramedics to examine structures of the eye.', ar: 'منظار العين', src: 'A21, B26' },
    { t: 'Nasolacrimal', hint: 'The duct that drains tears toward the nose (lacrimal figure).', ar: 'أنفي دمعي', src: 'A7, B4' },
  ],

  flash: [
    ['Two nerves connect the eye to the brain — name them with their CN numbers', 'Oculomotor nerve (CN III) and optic nerve (CN II).', 'A5, B4'],
    ['Why cover BOTH eyes?', 'To limit damage to the affected eye through sympathetic movement.', 'A8, B6'],
    ['Two reasons for cardiac monitoring in eye patients', 'Ocular pressure can stimulate the vagus nerve; eye drops can cause low or high blood pressure.', 'A8n, B6'],
    ['PERRLA', 'Pupils equal, round, reactive to light and accommodation.', 'A12n, B10'],
    ['Dysconjugate gaze', 'Discoordination between the movements of the two eyes (checked during ocular motility).', 'A13n, B11'],
    ['Wait between first and second drop? Exception?', '5 minutes; the 5-minute rule does not apply to emergency situations (B12).', 'A14n, B12'],
    ['Irrigation: fluid and direction', 'Sterile water or isotonic saline; flush from the inside corner to the outside of the eye.', 'A16, B15'],
    ['Only prehospital indication to remove contact lenses', 'A chemical burn of the eye.', 'A17, B16'],
    ['Hard lens removal vs soft lens removal', 'Hard: small suction cup moistened with saline. Soft: 1–2 drops saline, pinch with gloved thumb + index finger, lift off.', 'A18, A19, B16, B17'],
    ['Ophthalmoscope: what does effective evaluation require?', 'Dilation of the patient’s pupil with medication and significant diagnostic expertise.', 'A21, A21n'],
    ['Red reflex', 'The retina seen as a bright orange glow when you look into the pupil from 10–20 inches at 45°.', 'A21n'],
  ],

  ents: [
    { n: 'Oculomotor nerve', ty: 'Structure', src: 'A5, A5n, B4', f: { 'Also called': 'CN III, third cranial nerve', 'What it does': 'Motion of the eyeballs and upper eyelids; parasympathetic fibers → pupil constriction and lens accommodation', 'Works with': 'Trochlear (CN IV) and abducens (CN VI) (B only)' } },
    { n: 'Optic nerve', ty: 'Structure', src: 'A5, B4', f: { 'Also called': 'CN II, second cranial nerve', 'What it does': 'Provides the sense of vision', 'Linked conditions': 'Papilledema (swelling/inflammation of it); glaucoma (pressure damages it)' } },
    { n: 'Nasolacrimal duct', ty: 'Structure', src: 'A7, B4', f: { 'Where': 'From the inner corner of the eye toward the nose (lacrimal figure)', 'What it does': 'Drains tears made by the lacrimal gland' } },
    { n: 'Conjunctiva', ty: 'Structure', src: 'A7, A12, A22n, B9', f: { 'What it is': 'Thin layer that lines the inside of the eyelids and the white of the eye (A22n)', 'Assess for': 'Redness, pus, inflammation, foreign bodies', 'Linked conditions': 'Conjunctivitis (pink eye)' } },
    { n: 'Contact lenses', ty: 'Device', src: 'A17–A19, B16, B17', f: { 'Types': 'Hard; rigid gas-permeable; soft (hydrophilic)', 'Remove when': 'Only for a chemical burn of the eye', 'Hard lens': 'Small suction cup moistened with saline', 'Soft lens': '1–2 drops saline, pinch with gloved thumb + index finger, lift off', 'Always': 'Advise ED staff' } },
    { n: 'Eye prosthesis', ty: 'Device', src: 'A20, B18', f: { 'Suspect if': 'No response to light; does not move in concert; does not look quite the same; patient says so', 'Unsure?': 'Ask the patient', 'B adds': 'No harm in treating like a real eye; strive to determine eye function' } },
    { n: 'Ophthalmoscope', ty: 'Device', src: 'A21, A21n, B26', f: { 'Purpose': 'Examine structures of the eye', 'Parts (A)': 'Concave mirror, battery-powered light in handle, rotating lenses, adjustable depth/magnification', 'Requires': 'Pupil dilation with medication; significant diagnostic expertise', 'Paramedic use': 'Rarely used' } },
    { n: 'Eye irrigation', ty: 'Procedure', src: 'A16, B15', f: { 'When': 'Chemical or thermal burns', 'Fluid': 'Sterile water or isotonic saline', 'Direction': 'Inside corner → outside of the eye' } },
    { n: 'Eye drops', ty: 'Drug / treatment', src: 'A14, A15, B12–B14', f: { 'Used for': 'Conjunctivitis; dry, red, itchy eyes; eye pain; glaucoma; eye surgery; herpes simplex; corneal abrasions; lubrication/tear production', 'Technique': 'Lower-lid pouch → drop into lower lid → close & roll down → pressure at corner', 'Cautions': 'Adverse effects with >1 medication or too much; can cause low or high BP; wait 5 min between drops (not in emergencies)' } },
  ],

  hooks: [
    ['“3 M’s for CN 3”', 'Oculomotor <k>M</k>oves the eyeball and lid, makes the pupil s<k>M</k>all (constriction), and <k>M</k>akes focus (accommodation).'],
    ['“Both move, so cover both”', 'The eyes move together — cover both to stop sympathetic movement of the injured eye.'],
    ['Eye drops: “Pouch · Drop · Down · Dab”', 'Pouch the lower lid → drop into the pouch → close and roll <b>down</b> → dab gentle pressure at the corner.'],
    ['Irrigation: “In → Out, away from the nose”', 'Start at the inside corner, flush to the outside.'],
    ['Contacts: “Only Chemicals take Contacts out”', 'Chemical burn = the one prehospital reason. Hard → suction cup. Soft → saline + pinch.'],
    ['Prosthesis: “3 No’s + 1 Yes”', 'No light response, no moving together, not quite the same — yes, “I have one”.'],
  ],

  arSum: `<ul>
  <li>نسبة كبيرة من حالات <b>EENT</b> سببها <b>trauma</b>. معرفة الحالات تساعد في التقييم وتثقيف المريض، وقد يحتاج المريض مستشفى فيه <b>eye specialist</b> أو <b>ENT specialist</b>.</li>
  <li>العين متصلة بالدماغ بعصبين: <b>Oculomotor nerve (CN III)</b> يحرك كرة العين والجفن العلوي ويحمل ألياف parasympathetic لتضييق البؤبؤ و accommodation للعدسة (يعمل مع CN IV و CN VI)، و <b>Optic nerve (CN II)</b> مسؤول عن الإبصار.</li>
  <li>التقييم: أمان الموقع، تهدئة المريض، الانطباع العام (البيئة، العمر والجنس، درجة الضيق)، ثم <b>airway and breathing</b> — لا تنشغل بالعين المتورمة عن الأولويات. غطِّ <b>العينين معاً</b> لمنع الحركة المتزامنة (sympathetic movement). فكّر في تسكين الألم، و <b>cardiac monitoring</b> لأن ضغط العين يحفز العصب المبهم (vagus) والقطرات قد تخفض أو ترفع الضغط.</li>
  <li>علامات خطورة (4): فقدان رؤية لا يتحسن بالرمش، <b>double vision</b>، ألم شديد، إحساس بجسم غريب.</li>
  <li>افحص 8 أشياء (ألم، تورم، حركة، إحساس، دورة دموية، تشوه، تغير الرؤية، مجرى الهواء) وجدول T1 للتراكيب، و <b>PERRLA</b>، و 3 اختبارات: <b>visual acuity</b> (كل عين لوحدها)، <b>peripheral vision</b>، <b>ocular motility</b> (dysconjugate gaze).</li>
  <li>العلامات الحيوية وإعادتها كل 5–15 دقيقة (A). انتظر <b>5 دقائق</b> بين القطرتين (لا ينطبق في الطوارئ — B). خطوات القطرة: جيب في الجفن السفلي ← القطرة ← إغلاق العين وتدويرها للأسفل ← ضغط خفيف على الزاوية.</li>
  <li><b>Irrigation</b> للحروق الكيميائية أو الحرارية بماء معقم أو محلول ملحي، من الزاوية الداخلية إلى الخارجية. كل إصابات العين تذهب للطوارئ وقد تكون غير قابلة للرجوع.</li>
  <li>العدسات اللاصقة: الإزالة فقط في <b>chemical burn</b>. الصلبة: كوب شفط صغير مبلل بمحلول ملحي. اللينة: قطرة أو قطرتان ثم القرص والرفع. أبلغ طاقم الطوارئ.</li>
  <li>اشتبه بعين صناعية إذا لا تستجيب للضوء، لا تتحرك مع الأخرى، شكلها مختلف، أو قال المريض ذلك.</li>
  <li><b>Ophthalmoscope</b> نادر الاستخدام للمسعف، يحتاج توسيع البؤبؤ وخبرة. (A) خطوات Skill Drill 19-1: مسافة 10–20 إنش بزاوية 45° لرؤية <b>red reflex</b>.</li></ul>`,
});
