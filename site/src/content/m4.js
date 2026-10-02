/* Module 4 — Nose (A55–A69, B58–B73) */
MOD({
  id: 'm4', n: 4, title: 'Nose', sub: 'What the nose does, smelling disorders, nasal anatomy and sinuses, assessment and the NPA rule, epistaxis, nasal foreign bodies, rhinitis and sinusitis.',
  ar: 'الأنف', refs: 'A55–A69 · B58–B73',
  steps: [
    { k: 'sec', h: 'The nose' },
    { k: 'card', id: 'm4-nose', h: 'A prominent, vascular organ', src: 'A55, A55n, B58', hl: true,
      flag: 'A55n says the nasal route is “faster than intravenous administration”. Standard references describe intranasal drugs as fast but not generally faster than IV. Learn it as written (A only).',
      b: `<k>Susceptible to injury because of prominent location on the face</k>.
      <ul><li><k>The nose acts as a filter, humidifier, and heater</k> for air that enters the body.</li>
      <li><k>Allergens, particles, and chemicals can cause inflammation, infection, and injury</k>. <k>Complications from nasal disorders are common</k> — A: they <k>Can lead to systemic infections</k>; B: <k>Many symptoms begin as nasal infections</k>.</li>
      <li><k>The inside of the nose is extremely vascular</k>: an <k>Excellent route for some medicines</k> (A: <k>Faster than intravenous administration</k>). B: <k>Can cause nasal tissue to bleed</k>; <k>Drug abuse</k>; <k>Nasal mucosa offers a short route to the brain</k>.</li></ul>` },
    { k: 'card', id: 'm4-smell', h: 'Loss of smell and smelling disorders', src: 'A56, A56n, B59', hl: true,
      b: `<k>Loss of smelling sensation has many causes</k>: <k>Aging, smoking, allergies, rhinitis, polyps, flu</k>, B: <k>coronavirus disease 2019 (COVID-19)</k>, <k>medications</k>, <k>traumatic brain injury</k>.
      <br>B: smelling disorders <k>Affect sense of taste</k>.` },
    { k: 'table', h: 'T4 · Smelling disorders', src: 'A56, A56n, B59', hl: true, head: ['Term', 'Meaning'],
      rows: [['<k>Anosmia</k>', '<k>total loss of sense of smell</k>'], ['<k>Dysosmia</k>', '<k>distorted sense of smell</k>'], ['<k>Hyperosmia</k>', '<k>increased sensitivity to smell</k>'], ['<k>Hyposmia</k>', '<k>decreased sense of smell</k>'], ['<k>Presbyosmia</k>', '<k>loss of smell from normal aging</k>']] },
    { k: 'ix', type: 'match', id: 'm4-smellmatch', title: 'Smelling disorders', src: 'A56, B59',
      pairs: [['Anosmia', 'Total loss of sense of smell'], ['Dysosmia', 'Distorted sense of smell'], ['Hyperosmia', 'Increased sensitivity to smell'], ['Hyposmia', 'Decreased sense of smell'], ['Presbyosmia', 'Loss of smell from normal aging']] },
    { k: 'q', ids: ['m4q1', 'm4q2', 'm4q3', 'm4q4'] },

    { k: 'sec', h: 'Nasal anatomy' },
    { k: 'card', id: 'm4-ap', h: 'Anatomy and physiology', src: 'A57, A58, B60, B61', hl: true,
      b: `<ul><li><k>One of two primary entry points for oxygen</k>.</li><li><k>Warms and humidifies air as it enters the body</k>.</li><li><k>Contains bony structures</k>.</li><li><k>Connected with the sinuses</k>.</li></ul>` },
    { k: 'fig', fig: 'nasal' },
    { k: 'fig', fig: 'sinuses' },
    { k: 'q', ids: ['m4q5', 'm4q6'] },

    { k: 'sec', h: 'Nose assessment' },
    { k: 'card', id: 'm4-assess', h: 'Assessing a nose complaint', src: 'A59, A59n, A60, A60n, B62, B63', hl: true,
      b: `<ol><li><k>Look for environmental clues</k>.</li><li><k>Ensure that the scene is safe</k>.</li><li><k>Determine whether airway and breathing are sufficient</k>.</li><li><k>Determine the patient's level of distress</k>.</li></ol>
      <k>The vascular nature of the nasal cavities makes them susceptible to bleeding</k>. A: <k>A severe nosebleed or condition that blocks the airway with swelling or blood is a life-threatening condition</k>.
      <br><k>Insert an airway adjunct as needed</k> — but <k>Do not insert a nasopharyngeal airway or attempt nasotracheal intubation</k> in any patient with <k>Suspected nasal fractures</k> or <k>CSF or blood leakage from the nose</k>.
      <br><k>Inquire about a previous history of nose conditions or bleeding</k>. <k>Always consider a hypertensive crisis when an older person has a nosebleed</k>.` },
    { k: 'ix', type: 'triage', id: 'm4-npa', title: 'Can I insert a nasopharyngeal airway?', src: 'A60, B63',
      cards: [
        { s: 'Unresponsive after a fall; nose is deformed and swollen.', o: ['No — suspected nasal fracture', 'Yes — NPAs are safe in any unresponsive patient', 'Yes, but use a smaller size', 'Only after nasotracheal intubation fails'], w: 'No NPA and no nasotracheal intubation with suspected nasal fractures.' },
        { s: 'Head injury; clear fluid dripping from the nose.', o: ['No — CSF leakage from the nose', 'Yes — clear fluid is just mucus', 'Yes, lubricated well', 'Yes, after suctioning'], w: 'No NPA / nasotracheal intubation with CSF or blood leakage from the nose.' },
        { s: 'Active nosebleed in a semi-conscious patient.', o: ['No — blood leakage from the nose', 'Yes — it will tamponade the bleed', 'Yes, both nostrils', 'Only if the bleed is anterior'], w: 'Blood leakage from the nose is on the do-not list.' },
        { s: 'Older patient with a nosebleed, BP high.', o: ['Always consider a hypertensive crisis', 'Ignore the BP — nosebleeds raise BP', 'Insert an NPA to control bleeding', 'Release with advice'], w: 'Always consider a hypertensive crisis when an older person has a nosebleed.' }] },
    { k: 'q', ids: ['m4q7', 'm4q8', 'm4q9'] },

    { k: 'sec', h: 'Epistaxis' },
    { k: 'card', id: 'm4-epi', h: 'Epistaxis (nosebleed)', src: 'A61, A61n, A62, A62n, B65, B66', hl: true,
      b: `<k>Epistaxis</k> = <k>Nosebleed</k>. <k>Most common cause is digital trauma</k>; other causes: <k>Dryness</k>, <k>Hypertension</k>.
      <br><k>Two types</k>: anterior and posterior.` },
    { k: 'table', h: 'T5 · Anterior vs posterior epistaxis', src: 'A62, A62n, B66', hl: true, head: ['', 'Anterior', 'Posterior'],
      rows: [['Where', 'A: <k>Most typically occur in the Kiesselbach plexus</k>', '—'], ['Bleeding', '<k>Bleed fairly slowly</k>', '<k>Usually more severe</k>'], ['Course', '<k>Usually self-limiting and resolve quickly</k>', 'Often cause blood to <k>drain into the patient’s throat</k>, <k>causing nausea and vomiting</k>']] },
    { k: 'ix', type: 'sort', id: 'm4-eptsort', title: 'Anterior or posterior bleed?', src: 'A62, A62n, B66',
      buckets: [{ n: 'Anterior', items: ['Kiesselbach plexus', 'Bleeds fairly slowly', 'Self-limiting, resolves quickly'] }, { n: 'Posterior', items: ['Usually more severe', 'Blood drains into the throat', 'Causes nausea and vomiting'] }] },
    { k: 'think', q: 'Why does your patient with a nosebleed lean <b>forward</b> rather than tilt the head back?', a: 'Tilting back lets blood <k>drain into the throat, causing nausea and vomiting</k> (the same problem as a posterior bleed). Your notes: <k>sitting position, leaning forward</k>, pinch the nostrils.', src: 'A62, A63n, B66, B67' },
    { k: 'card', id: 'm4-epimx', h: 'Epistaxis: assessment & management', src: 'A63, A63n, B67', hl: true, ph: 'epistaxis2', cap: 'Pinching the nostrils (A63, B67)',
      b: `<ol><li><k>Try to estimate the amount of blood loss</k> — A: <k>relay this information to the staff at the receiving facility</k>.</li>
      <li><k>Place a non-trauma patient in a sitting position, leaning forward</k>, and <k>pinch his or her nostrils together</k> — B: <k>with firm pressure for 20 minutes</k>.</li>
      <li><k>Direct the patient not to sniff or blow his or her nose</k>.</li></ol>` },
    { k: 'photo', ph: 'epistaxis1', cap: 'Applying gauze to the nose before pinching (A63, B67)', src: 'A63, B67', notice: 'The child sits upright; the provider’s gloved fingers compress the soft part of the nose with gauze.' },
    { k: 'ix', type: 'epistaxis', id: 'm4-episim' },
    { k: 'ix', type: 'timer', id: 'm4-timers', title: 'Timers from your notes', src: 'A14n, A25n, B12, B23, B67',
      presets: [{ n: 'Nosebleed pinch', s: 1200, note: 'Firm pressure for <n>20 minutes</n> (B67).', src: 'B67' }, { n: 'Warm compress', s: 600, note: 'Chalazion/hordeolum: <n>5 to 10 minutes</n> several times a day.', src: 'A25n, B23' }, { n: 'Between eye drops', s: 300, note: '<n>5 minutes</n> between the first and second drop (not in emergencies).', src: 'A14n, B12' }] },
    { k: 'q', ids: ['m4q10', 'm4q11', 'm4q12', 'm4q13', 'm4q14', 'm4q15'] },

    { k: 'sec', h: 'Nasal foreign body' },
    { k: 'card', id: 'm4-fb', h: 'Foreign body in the nose', src: 'A64, A64n, B68', hl: true,
      b: `<k>Most likely to be seen in pediatric patients</k>.
      <br>Pressure in the nasal passage can cause <k>Tissue necrosis</k>, <k>Inflammation</k>, <k>Swelling</k>.
      <br><k>Tissue ulceration and epistaxis caused by inflammation</k>. <k>Sinusitis caused by nasal blockage</k>.` },
    { k: 'card', id: 'm4-fbmx', h: 'Foreign body: assessment & management', src: 'A65, A65n, B69',
      b: `<ul><li><k>Determine if the foreign body presents a life-threatening condition</k>.</li>
      <li>A: <k>You may be able to see only one end of the object or not see it at all</k>.</li>
      <li><k>Any persistent, foul-smelling, purulent discharge from the nares should lead to suspicion of a foreign body</k> — <k>Let it drain</k>.</li>
      <li><k>Transport the patient in a position of comfort</k>: <k>Limit the ability of gravity to introduce the object further into the cavity</k>; <k>Prevent aspiration</k>.</li>
      <li><k>Pain management or sedation may be necessary</k> — A: <k>Consultation with medical control is advised</k>.</li></ul>` },
    { k: 'ix', type: 'case', id: 'm4-case1', title: 'Case: the smelly nostril', src: 'A64, A65, B68, B69',
      intro: 'Mother calls about her 3-year-old: for a week, one nostril has had a thick, foul-smelling discharge. He is breathing comfortably and playing.',
      vitals: { HR: 110, RR: 24, SpO2: '99%', Temp: '37.2 °C' },
      steps: [
        { scene: 'Persistent, foul-smelling, purulent discharge from one naris.', q: 'What should you suspect?', o: [['A nasal foreign body', true, 'Any persistent, foul-smelling, purulent discharge from the nares should lead to suspicion of a foreign body (most likely in pediatric patients).'], ['Viral rhinitis', false, 'Rhinitis gives congestion, sneezing, itchy runny nose — not a foul one-sided discharge.'], ['Posterior epistaxis', false, 'No bleeding is described.']] },
        { scene: 'You can see only part of a small bead deep in the nostril. Discharge keeps coming.', q: 'What do you do with the discharge?', o: [['Let it drain', true, 'If you note discharge from the nose, let it drain.'], ['Suction it hard to pull the bead out', false, 'Not in your notes; you may only see one end of the object.', { HR: 128 }], ['Pack the nostril', false, 'Not in your notes.']] },
        { scene: 'Time to move him.', q: 'How do you transport?', o: [['Position of comfort — limit gravity pushing the object deeper and prevent aspiration', true, 'Correct. Pain management or sedation may be needed — consult medical control.'], ['Flat on his back with the head tilted back', false, 'Gravity could carry the object further in and risk aspiration.', { SpO2: '96%' }], ['Head down', false, 'No.']] }],
      end: 'Complications if missed: pressure → tissue necrosis, inflammation, swelling; inflammation → ulceration and epistaxis; blockage → sinusitis.' },
    { k: 'q', ids: ['m4q16', 'm4q17', 'm4q18'] },

    { k: 'sec', h: 'Rhinitis and sinusitis' },
    { k: 'card', id: 'm4-rhin', h: 'Rhinitis', src: 'A66, A66n, A67, A67n, B70, B71', hl: true,
      b: `<k>Inflammation of the nasal cavity</k>.
      <br>May be caused by <k>Bacterial infection</k>, <k>Viral infection</k>, <k>Allergens</k>, <k>Medications</k>, <k>Changes in environmental temperature</k>, <k>Other factors</k>. Can also be caused by: <k>Certain medications</k>, <k>Foreign bodies</k>, <k>Irritants in the air</k>, <k>Hormonal changes in pregnancy</k>.
      <br>Signs and symptoms: <k>Nasal congestion</k>, <k>Sneezing</k>, <k>Itchy runny nose</k>, <k>Itchy eyes</k>, <k>Postnasal drip</k>, <k>Cough</k>.
      <br><k>Keep the patient in the Fowler position</k>; <k>Provide transport</k>.` },
    { k: 'card', id: 'm4-sinus', h: 'Sinusitis', src: 'A68, A68n, A69, A69n, B72, B73', hl: true,
      flag: 'Prevalence differs: A68 says <b>29.3 million</b>, B72 says <b>28.9 million</b> adult Americans per year (CDC). Default exam answer here: B (your annotated deck). Know both.',
      b: `<k>Sinus inflammation</k>; occurs when <k>drainage from the sinuses becomes disrupted</k> — A: <k>Sinuses become colonized with nasal bacteria and infected</k>.
      <br>Symptoms: <k>Facial pressure and pain</k>, <k>sore throat</k>, <k>nasal congestion</k>, <k>toothache</k>, <k>headache</k>, <k>fever</k>, <k>chills</k>, <k>muscle aches and pains</k>.
      <br>Affects <n>28.9 million</n> (B) / <n>29.3 million</n> (A) <k>adult Americans per year</k> according to the <k>CDC</k>. <k>Young children and older adults are more susceptible</k>.
      <br>Can be <k>chronic, acute, or recurrent</k>. Prehospital: <k>treatment of any respiratory compromise and transport</k>. <k>Treatment is aimed at reducing inflammation and draining the sinuses</k>: <k>Mild to moderate symptoms can be treated with a saline rinse and decongestant</k>; <k>Antibiotics are typically prescribed after 7 to 10 days</k>.` },
    { k: 'ix', type: 'sort', id: 'm4-rssort', title: 'Rhinitis or sinusitis?', src: 'A66–A69, B70–B73',
      buckets: [{ n: 'Rhinitis', items: ['Inflammation of the nasal cavity', 'Sneezing', 'Itchy eyes', 'Hormonal changes in pregnancy', 'Keep in Fowler position'] }, { n: 'Sinusitis', items: ['Drainage from the sinuses disrupted', 'Facial pressure and pain', 'Toothache', 'Saline rinse and decongestant', 'Antibiotics after 7 to 10 days'] }] },
    { k: 'q', ids: ['m4q19', 'm4q20', 'm4q21', 'm4q22', 'm4q23'] },
    { k: 'spell', terms: ['Epistaxis', 'Anosmia', 'Kiesselbach', 'Nasopharyngeal'] },
    { k: 'sa', id: 'm4sa1' }, { k: 'sa', id: 'm4sa2' }, { k: 'sa', id: 'm4sa3' }, { k: 'sa', id: 'm4sa4' }, { k: 'sa', id: 'm4sa5' },
  ],

  lists: [
    { id: 'm4-nosefx', title: 'The nose acts as a', src: 'A55n, B58', items: ['Filter', 'Humidifier', 'Heater'], foils: ['Cooler', 'Pressure regulator for the ear', 'Producer of tears'] },
    { id: 'm4-vasc', title: 'Inside of the nose is extremely vascular, so', src: 'A55, A55n, B58', items: ['Excellent route for some medicines', 'Faster than intravenous administration (A)', 'Can cause nasal tissue to bleed', 'Drug abuse', 'Nasal mucosa offers a short route to the brain'], foils: ['It cannot absorb medicines', 'It never bleeds in older adults'] },
    { id: 'm4-smellcause', title: 'Causes of loss of smelling sensation', src: 'A56n, B59', items: ['Aging', 'Smoking', 'Allergies', 'Rhinitis', 'Polyps', 'Flu', 'COVID-19', 'Medications', 'Traumatic brain injury'], foils: ['Otitis media', 'Glaucoma', 'Cerumen'] },
    { id: 'm4-smell', title: 'Smelling disorders', src: 'A56, B59', items: ['Anosmia', 'Dysosmia', 'Hyperosmia', 'Hyposmia', 'Presbyosmia'], foils: ['Presbyopia', 'Dysphagia', 'Parosmia-cusis'] },
    { id: 'm4-ap', title: 'Nose — anatomy and physiology', src: 'A57, A58, B60, B61', items: ['One of two primary entry points for oxygen', 'Warms and humidifies air', 'Contains bony structures', 'Connected with the sinuses'], foils: ['The only entry point for oxygen', 'Contains no bone'] },
    { id: 'm4-sinuses', title: 'Paranasal sinuses on the figure', src: 'A58, B61', items: ['Frontal', 'Ethmoid', 'Maxillary', 'Sphenoid'], foils: ['Temporal', 'Mastoid', 'Parietal'] },
    { id: 'm4-turb', title: 'Turbinates on the nasal figure', src: 'A57, B60', items: ['Superior turbinate', 'Middle turbinate', 'Inferior turbinate'], foils: ['Lateral turbinate', 'Posterior turbinate'] },
    { id: 'm4-assess', title: 'Nose — patient assessment', src: 'A59, B62', items: ['Look for environmental clues', 'Ensure that the scene is safe', 'Determine whether airway and breathing are sufficient', 'Determine the patient’s level of distress'], foils: ['Test visual acuity', 'Check for Battle sign first'] },
    { id: 'm4-npa', title: 'Do NOT insert an NPA or attempt nasotracheal intubation with', src: 'A60, B63', items: ['Suspected nasal fractures', 'CSF or blood leakage from the nose'], foils: ['Allergic rhinitis', 'Hyposmia', 'Sinusitis'] },
    { id: 'm4-epicause', title: 'Epistaxis — causes', src: 'A61, B65', items: ['Digital trauma (most common)', 'Dryness', 'Hypertension'], foils: ['Hypotension', 'Otitis media', 'Glaucoma'] },
    { id: 'm4-epimx', title: 'Epistaxis — management', ordered: true, src: 'A63, B67', items: ['Try to estimate the amount of blood loss', 'Place a non-trauma patient sitting, leaning forward', 'Pinch the nostrils together (firm pressure, 20 minutes)', 'Direct the patient not to sniff or blow the nose'], foils: ['Tilt the head back', 'Insert a nasopharyngeal airway'] },
    { id: 'm4-fbpress', title: 'Nasal foreign body — pressure can cause', src: 'A64, B68', items: ['Tissue necrosis', 'Inflammation', 'Swelling'], foils: ['Anosmia', 'Otitis media', 'Halos'] },
    { id: 'm4-fbmx', title: 'Nasal foreign body — assessment & management', src: 'A65, B69', items: ['Determine if life-threatening', 'Persistent, foul-smelling, purulent discharge → suspect foreign body', 'Let it drain', 'Transport in a position of comfort', 'Pain management or sedation may be necessary'], foils: ['Remove it with forceps on scene', 'Lay the child flat with head back'] },
    { id: 'm4-rhcause', title: 'Rhinitis — may be caused by', src: 'A66, A66n, B70', items: ['Bacterial infection', 'Viral infection', 'Allergens', 'Medications', 'Changes in environmental temperature', 'Foreign bodies', 'Irritants in the air', 'Hormonal changes in pregnancy'], foils: ['Digital trauma', 'Glaucoma', 'Ossicle fracture'] },
    { id: 'm4-rhsx', title: 'Rhinitis — signs and symptoms', src: 'A67, B71', items: ['Nasal congestion', 'Sneezing', 'Itchy runny nose', 'Itchy eyes', 'Postnasal drip', 'Cough'], foils: ['Toothache', 'Facial pressure', 'Halos around lights'] },
    { id: 'm4-sinsx', title: 'Sinusitis — symptoms', src: 'A68n, B72', items: ['Facial pressure and pain', 'Sore throat', 'Nasal congestion', 'Toothache', 'Headache', 'Fever', 'Chills', 'Muscle aches and pains'], foils: ['Itchy eyes', 'Postnasal drip only', 'Halos around lights'] },
    { id: 'm4-sinmx', title: 'Sinusitis — management', src: 'A69, A69n, B73', items: ['Treat any respiratory compromise and transport', 'Reduce inflammation and drain the sinuses', 'Saline rinse and decongestant for mild to moderate symptoms', 'Antibiotics typically after 7 to 10 days'], foils: ['Antibiotics on day 1 for everyone', 'Fowler position and diuretics'] },
  ],

  qs: [
    { id: 'm4q1', lv: 'R', src: 'A55n, B58', hl: true, s: 'The nose acts as a:', o: ['Filter, humidifier, and heater', 'Filter, cooler, and dryer', 'Pressure valve for the ears', 'Tear drain only'], w: 'Filter, humidifier, and heater for air that enters the body.', tw: 'Cooling and drying are the opposite.' },
    { id: 'm4q2', lv: 'R', src: 'A56, B59', hl: true, s: 'Anosmia is:', o: ['Total loss of sense of smell', 'Decreased sense of smell', 'Distorted sense of smell', 'Loss of smell from normal aging'], w: 'Anosmia = total loss.', tw: 'Decreased = hyposmia.' },
    { id: 'm4q3', lv: 'R', src: 'A56, B59', hl: true, s: 'Loss of smell from normal aging is called:', o: ['Presbyosmia', 'Hyposmia', 'Dysosmia', 'Anosmia'], w: 'Presbyosmia.', tw: 'Hyposmia is decreased smell from any cause.' },
    { id: 'm4q4', lv: 'U', src: 'B58', only: 'B', hl: true, s: 'Why does B mention drug abuse and the brain on the nose slide?', o: ['Nasal mucosa offers a short route to the brain', 'The nose produces cerebrospinal fluid', 'Smelling disorders cause addiction', 'Nasal bones connect to the skull base only'], w: 'The inside of the nose is extremely vascular; nasal mucosa offers a short route to the brain.', tw: 'CSF can leak from the nose after injury, but the nose does not make it.' },
    { id: 'm4q5', lv: 'R', src: 'A57, B60', hl: true, s: 'The nose is one of how many primary entry points for oxygen?', o: ['Two', 'One', 'Three', 'Four'], w: 'One of two primary entry points for oxygen.', tw: 'It is not the only one (the mouth is the other).' },
    { id: 'm4q6', lv: 'R', src: 'A58, B61', s: 'Which sinus is labelled “deep” on the sinus figure?', o: ['Sphenoid', 'Frontal', 'Maxillary', 'Ethmoid'], w: 'Sphenoid (deep).', tw: 'The maxillary sinuses are in the cheeks.' },
    { id: 'm4q7', lv: 'A', src: 'A60, B63', s: 'Head-injured patient with clear fluid from the nose needs an airway adjunct. Which is contraindicated?', o: ['A nasopharyngeal airway', 'An oropharyngeal airway', 'High-flow oxygen', 'Suctioning the mouth'], w: 'No NPA or nasotracheal intubation with CSF or blood leakage from the nose (or suspected nasal fracture).', tw: 'An oral airway is not on the restricted list.' },
    { id: 'm4q8', lv: 'A', src: 'A60n, B63', hl: true, s: 'A 72-year-old has a nosebleed. What should you always consider?', o: ['A hypertensive crisis', 'Meniere disease', 'Glaucoma', 'Nasal foreign body'], w: 'Always consider a hypertensive crisis when an older person has a nosebleed.', tw: 'Foreign bodies are mostly pediatric.' },
    { id: 'm4q9', lv: 'U', src: 'A59n', only: 'A', s: 'When is a nosebleed life-threatening (A59n)?', o: ['When it is severe or blocks the airway with swelling or blood', 'Whenever it lasts more than 1 minute', 'Only in children', 'Never'], w: 'A severe nosebleed or condition that blocks the airway with swelling or blood is life-threatening.', tw: 'Duration of 1 minute is not a criterion in your notes.' },
    { id: 'm4q10', lv: 'R', src: 'A61, B65', hl: true, s: 'The most common cause of epistaxis is:', o: ['Digital trauma', 'Hypertension', 'Dryness', 'Cocaine use'], w: 'Most common cause: digital trauma; others: dryness, hypertension.', tw: 'Hypertension is a cause, but not the most common.' },
    { id: 'm4q11', lv: 'R', src: 'A62n', only: 'A', s: 'Anterior nosebleeds most typically occur in the:', o: ['Kiesselbach plexus', 'Sphenoid sinus', 'Inferior turbinate', 'Nasopharynx'], w: 'Kiesselbach plexus.', tw: 'Not in your notes.' },
    { id: 'm4q12', lv: 'U', src: 'A62, B66', hl: true, s: 'Which feature belongs to a POSTERIOR nosebleed?', o: ['Blood drains into the throat, causing nausea and vomiting', 'Bleeds fairly slowly', 'Usually self-limiting and resolves quickly', 'Kiesselbach plexus'], w: 'Posterior: usually more severe; blood drains into the throat → nausea and vomiting.', tw: 'Slow, self-limiting bleeding is anterior.' },
    { id: 'm4q13', lv: 'A', src: 'A63, B67', hl: true, s: 'Positioning for a non-trauma patient with a nosebleed:', o: ['Sitting, leaning forward, pinching the nostrils', 'Supine with the head tilted back', 'Recovery position with the head down', 'Sitting, head tilted back'], w: 'Sitting position, leaning forward; pinch the nostrils together.', tw: 'Head back lets blood drain into the throat.' },
    { id: 'm4q14', lv: 'R', src: 'B67', only: 'B', hl: true, s: 'How long do you pinch the nostrils (B)?', o: ['20 minutes with firm pressure', '5 minutes', '1 minute', 'Until the patient sneezes'], w: 'Firm pressure for 20 minutes.', tw: '5 minutes is the eye-drop wait.' },
    { id: 'm4q15', lv: 'R', src: 'A63, B67', hl: true, s: 'Which instruction is in your notes for epistaxis?', o: ['Do not sniff or blow the nose', 'Blow the nose every 5 minutes', 'Sniff saline to clear clots', 'Lie flat'], w: 'Direct the patient not to sniff or blow his or her nose.', tw: 'Blowing restarts bleeding.' },
    { id: 'm4q16', lv: 'R', src: 'A64, B68', hl: true, s: 'Nasal foreign bodies are most likely seen in:', o: ['Pediatric patients', 'Older adults', 'Pregnant women', 'Athletes'], w: 'Most likely in pediatric patients.', tw: 'Not in your notes.' },
    { id: 'm4q17', lv: 'A', src: 'A65, B69', s: 'Which finding should make you suspect a nasal foreign body?', o: ['Persistent, foul-smelling, purulent discharge from the nares', 'Sneezing and itchy eyes', 'Clear fluid after head injury', 'Halos around lights'], w: 'Persistent, foul-smelling, purulent discharge → suspect a foreign body; let it drain.', tw: 'Sneezing and itchy eyes = rhinitis.' },
    { id: 'm4q18', lv: 'U', src: 'A65n, B69', s: 'Why transport a nasal foreign-body patient in a position of comfort?', o: ['To limit gravity introducing the object further and to prevent aspiration', 'To make the discharge stop', 'Because supine is required for children', 'To keep the nostrils pinched'], w: 'Limit the ability of gravity to introduce the object further into the cavity; prevent aspiration.', tw: 'You let discharge drain — you do not stop it.' },
    { id: 'm4q19', lv: 'R', src: 'A66n, B70', s: 'Which is listed as a cause of rhinitis?', o: ['Hormonal changes in pregnancy', 'Digital trauma', 'Fat emboli', 'Blast pressure waves'], w: 'Bacterial/viral infection, allergens, medications, temperature changes, foreign bodies, irritants, hormonal changes in pregnancy.', tw: 'Digital trauma is the most common cause of epistaxis.' },
    { id: 'm4q20', lv: 'A', src: 'A67n, B71', hl: true, s: 'Positioning for rhinitis:', o: ['Fowler position', 'Trendelenburg', 'Prone', 'Left lateral recumbent'], w: 'Keep the patient in the Fowler position; provide transport.', tw: 'Not in your notes.' },
    { id: 'm4q21', lv: 'R', src: 'A68n, B72', hl: true, s: 'Who is more susceptible to sinusitis?', o: ['Young children and older adults', 'Teenagers only', 'Pregnant women', 'Contact lens wearers'], w: 'Young children and older adults are more susceptible.', tw: 'Not in your notes.' },
    { id: 'm4q22', lv: 'R', src: 'A69n, B73', hl: true, s: 'For sinusitis, antibiotics are typically prescribed after:', o: ['7 to 10 days', '1 to 2 days', '20 minutes', '30 to 120 minutes'], w: 'Antibiotics typically after 7 to 10 days; mild–moderate: saline rinse and decongestant.', tw: '30–120 minutes is the retinal occlusion figure.' },
    { id: 'm4q23', lv: 'R', src: 'B72 (A68: 29.3 million)', flag: 'A68 says 29.3 million; B72 says 28.9 million. This question follows B.', hl: true, s: 'Per your annotated deck (B), sinusitis affects how many adult Americans per year (CDC)?', o: ['28.9 million', '2.9 million', '89 million', '290,000'], w: 'B72: 28.9 million (A68 says 29.3 million).', tw: 'Off by a factor of ten.' },
  ],

  sa: [
    { id: 'm4sa1', src: 'A56, B59', q: 'Define the five smelling disorders.', keys: ['Anosmia — total loss', 'Dysosmia — distorted', 'Hyperosmia — increased sensitivity', 'Hyposmia — decreased', 'Presbyosmia — loss from normal aging'], model: 'Anosmia: total loss of sense of smell. Dysosmia: distorted. Hyperosmia: increased sensitivity. Hyposmia: decreased. Presbyosmia: loss from normal aging.' },
    { id: 'm4sa2', src: 'A60, B63', q: 'When must you not insert a nasopharyngeal airway or attempt nasotracheal intubation?', keys: ['Suspected nasal fractures', 'CSF leakage from the nose', 'Blood leakage from the nose'], model: 'In any patient with suspected nasal fractures or CSF or blood leakage from the nose.' },
    { id: 'm4sa3', src: 'A61–A63, B65–B67', q: 'Epistaxis: causes, the two types, and prehospital management.', keys: ['Digital trauma (most common), dryness, hypertension', 'Anterior: slow, self-limiting (Kiesselbach plexus)', 'Posterior: more severe, blood to throat → N/V', 'Estimate blood loss', 'Sit leaning forward, pinch nostrils (20 min firm), no sniffing/blowing'], model: 'Causes: digital trauma (most common), dryness, hypertension. Anterior: usually self-limiting, bleeds slowly (Kiesselbach plexus). Posterior: more severe, blood drains into the throat causing nausea and vomiting. Estimate blood loss and relay it; non-trauma patient sitting, leaning forward, pinch nostrils (firm pressure 20 minutes); no sniffing or blowing. Consider hypertensive crisis in older patients.' },
    { id: 'm4sa4', src: 'A64, A65, B68, B69', q: 'Nasal foreign body: complications and management.', keys: ['Pressure: tissue necrosis, inflammation, swelling', 'Ulceration and epistaxis; sinusitis from blockage', 'Suspect with persistent foul purulent discharge — let it drain', 'Position of comfort (gravity, aspiration)', 'Pain management/sedation — consult medical control'], model: 'Pressure causes tissue necrosis, inflammation and swelling; inflammation causes ulceration and epistaxis; blockage causes sinusitis. Determine if life-threatening; persistent foul-smelling purulent discharge suggests a foreign body — let it drain. Transport in position of comfort (limit gravity, prevent aspiration). Pain management or sedation may be needed (consult medical control).' },
    { id: 'm4sa5', src: 'A68, A69, B72, B73', q: 'Sinusitis: what happens, symptoms, and treatment.', keys: ['Drainage from sinuses disrupted (colonized with bacteria)', 'Facial pressure/pain, sore throat, congestion, toothache, headache, fever, chills, aches', 'Treat respiratory compromise and transport', 'Saline rinse + decongestant; antibiotics after 7–10 days'], model: 'Sinus drainage is disrupted and the sinuses become colonized and infected. Facial pressure and pain, sore throat, nasal congestion, toothache, headache, fever, chills, muscle aches. Can be chronic, acute or recurrent. Prehospital: treat any respiratory compromise and transport. Reduce inflammation and drain: saline rinse and decongestant; antibiotics typically after 7–10 days.' },
  ],

  nums: [
    { v: 'Two', q: 'The nose is one of how many primary entry points for oxygen?', d: ['One', 'Three', 'Four'], src: 'A57, B60' },
    { v: 'Two types', q: 'How many types of epistaxis?', d: ['Three types', 'Four types', 'One type'], src: 'A62, B66' },
    { v: '20 minutes', q: 'Firm nostril pinch for a nosebleed (B)?', d: ['5 minutes', '10 minutes', '45 minutes'], src: 'B67' },
    { v: '28.9 million', q: 'Adult Americans with sinusitis per year — deck B (CDC)?', d: ['29.3 million (that is deck A)', '8.9 million', '289 million'], src: 'B72', flag: 'A68 says 29.3 million' },
    { v: '29.3 million', q: 'Adult Americans with sinusitis per year — deck A (CDC)?', d: ['28.9 million (that is deck B)', '2.93 million', '293 million'], src: 'A68', flag: 'B72 says 28.9 million' },
    { v: '7 to 10 days', q: 'Sinusitis: antibiotics are typically prescribed after…', d: ['1 to 2 days', '3 to 4 weeks', '24 hours'], src: 'A69n, B73' },
    { v: '5', q: 'How many smelling disorders are listed?', d: ['3', '4', '6'], src: 'A56, B59' },
    { v: '4', q: 'How many sinus groups are labelled on the sinus figure?', d: ['2', '3', '6'], src: 'A58, B61' },
  ],

  spell: [
    { t: 'Epistaxis', hint: 'Nosebleed.', ar: 'رعاف', src: 'A61, B65' },
    { t: 'Anosmia', hint: 'Total loss of sense of smell.', ar: 'فقدان الشم', src: 'A56, B59' },
    { t: 'Kiesselbach', hint: 'Anterior nosebleeds most typically occur in the ___ plexus (A).', ar: 'ضفيرة كيسلباخ', src: 'A62n' },
    { t: 'Nasopharyngeal', hint: 'Do not insert a ___ airway with suspected nasal fracture.', ar: 'أنفي بلعومي', src: 'A60, B63' },
    { t: 'Presbyosmia', hint: 'Loss of smell from normal aging.', ar: 'فقدان الشم بسبب العمر', src: 'A56, B59' },
    { t: 'Sinusitis', hint: 'Sinus inflammation.', ar: 'التهاب الجيوب', src: 'A68, B72' },
  ],

  flash: [
    ['Nose: 3 functions for incoming air', 'Filter, humidifier, heater.', 'A55n, B58'],
    ['NPA / nasotracheal intubation contraindications', 'Suspected nasal fractures; CSF or blood leakage from the nose.', 'A60, B63'],
    ['Older patient + nosebleed → always consider…', 'A hypertensive crisis.', 'A60n, B63'],
    ['Epistaxis management (3 steps)', 'Estimate blood loss; non-trauma patient sitting, leaning forward, pinch nostrils (firm, 20 min — B); no sniffing or blowing.', 'A63, B67'],
    ['Anterior vs posterior nosebleed', 'Anterior: Kiesselbach plexus, slow, self-limiting. Posterior: more severe, drains into throat → nausea and vomiting.', 'A62, B66'],
    ['Nasal foreign body red flag', 'Persistent, foul-smelling, purulent discharge from the nares — let it drain.', 'A65, B69'],
    ['Rhinitis position', 'Fowler position; provide transport.', 'A67, B71'],
    ['Sinusitis treatment ladder', 'Respiratory compromise + transport → saline rinse and decongestant → antibiotics after 7–10 days.', 'A69, B73'],
  ],

  ents: [
    { n: 'Epistaxis', ty: 'Condition', src: 'A61–A63, B65–B67', f: { Definition: 'Nosebleed; two types (anterior, posterior)', 'Cause / mechanism': 'Digital trauma (most common), dryness, hypertension', Symptoms: 'Anterior: slow, self-limiting. Posterior: severe, blood into throat → N/V', Management: 'Estimate blood loss; sit, lean forward, pinch 20 min; no sniffing/blowing; consider hypertensive crisis in older adults' } },
    { n: 'Nasal foreign body', ty: 'Condition', src: 'A64, A65, B68, B69', f: { Definition: 'Object lodged in the nasal passage', Who: 'Mostly pediatric', Symptoms: 'Persistent, foul-smelling, purulent discharge; necrosis, inflammation, swelling, ulceration, epistaxis, sinusitis', Management: 'Determine life threat; let discharge drain; position of comfort; pain mgmt/sedation with medical control' } },
    { n: 'Rhinitis', ty: 'Condition', src: 'A66, A67, B70, B71', f: { Definition: 'Inflammation of the nasal cavity', 'Cause / mechanism': 'Bacterial/viral infection, allergens, medications, temperature changes, foreign bodies, irritants, pregnancy hormones', Symptoms: 'Congestion, sneezing, itchy runny nose, itchy eyes, postnasal drip, cough', Management: 'Fowler position; transport' } },
    { n: 'Sinusitis', ty: 'Condition', src: 'A68, A69, B72, B73', f: { Definition: 'Sinus inflammation when drainage is disrupted', Who: 'Young children and older adults more susceptible; 28.9 (B) / 29.3 (A) million US adults/yr', Symptoms: 'Facial pressure and pain, sore throat, congestion, toothache, headache, fever, chills, aches', Management: 'Treat respiratory compromise, transport; saline rinse + decongestant; antibiotics after 7–10 days' } },
    { n: 'Anosmia', ty: 'Term', src: 'A56, B59', f: { Meaning: 'Total loss of sense of smell', 'Look-alikes': 'Hyposmia (decreased), presbyosmia (aging)' } },
    { n: 'Hyposmia', ty: 'Term', src: 'A56, B59', f: { Meaning: 'Decreased sense of smell', 'Look-alikes': 'Anosmia (total loss), hyperosmia (increased)' } },
    { n: 'Nasopharyngeal airway', ty: 'Device', src: 'A60, B63', f: { 'Never use with': 'Suspected nasal fractures; CSF or blood leakage from the nose', 'Same rule for': 'Nasotracheal intubation' } },
  ],

  hooks: [
    ['Nose = “FHH”: Filter, Humidifier, Heater', 'What it does to air entering the body.'],
    ['Smell words: A-nosmia = none; Hypo = low; Hyper = high; Dys = distorted; Presby = old', 'Presby- also appears in presbyopia (old eyes) — same root, different sense.'],
    ['Nosebleed: “Sit, Lean, Pinch, Don’t Sniff — 20”', 'Sitting, leaning forward, pinch nostrils firmly for 20 minutes, no sniffing or blowing.'],
    ['“Front bleeds slow, back bleeds go (down the throat)”', 'Anterior = slow and self-limiting; posterior = severe, into the throat → N/V.'],
    ['“Fracture or Fluid → no Nasal tube”', 'Suspected nasal fracture or CSF/blood from the nose → no NPA, no nasotracheal intubation.'],
  ],

  arSum: `<ul>
  <li>الأنف بارز فيتعرض للإصابات، وهو <b>filter, humidifier, heater</b> للهواء. المواد المسببة للحساسية والجسيمات والكيماويات تسبب التهاباً وعدوى وإصابة. داخله غني جداً بالأوعية: طريق ممتاز لبعض الأدوية (A: أسرع من الوريد ⚑)، قد ينزف، يستخدم في تعاطي المخدرات، وطريق قصير للدماغ (B).</li>
  <li>فقدان الشم له أسباب: العمر، التدخين، الحساسية، rhinitis، polyps، الإنفلونزا، COVID-19، الأدوية، إصابات الدماغ. الاضطرابات: <b>Anosmia</b> (فقدان كامل)، <b>Dysosmia</b> (تشوّه)، <b>Hyperosmia</b> (زيادة الحساسية)، <b>Hyposmia</b> (نقص)، <b>Presbyosmia</b> (بسبب العمر) — وتؤثر على التذوق.</li>
  <li>الأنف أحد مدخلين رئيسيين للأكسجين، يدفئ ويرطب الهواء، فيه عظام، ومتصل بالجيوب (frontal, ethmoid, maxillary, sphenoid).</li>
  <li>التقييم: البيئة، الأمان، المجرى الهوائي والتنفس، درجة الضيق. <b>لا تستخدم NPA ولا nasotracheal intubation</b> مع اشتباه كسر الأنف أو تسرب CSF أو دم من الأنف. فكّر دائماً في <b>hypertensive crisis</b> عند نزيف الأنف لكبار السن.</li>
  <li><b>Epistaxis</b>: أشيع سبب digital trauma، ثم الجفاف وارتفاع الضغط. Anterior (ضفيرة Kiesselbach، بطيء ويتوقف ذاتياً) و Posterior (أشد، الدم ينزل للحلق فيسبب غثياناً وقيئاً). العلاج: قدّر كمية الدم، اجلس المريض (غير الرضّي) مائلاً للأمام، اضغط فتحتي الأنف بقوة <b>20 دقيقة</b> (B)، ولا يستنشق أو يمخط.</li>
  <li><b>Foreign body</b>: غالباً عند الأطفال؛ الضغط يسبب نخراً والتهاباً وتورماً، ثم تقرح ونزيف، والانسداد يسبب sinusitis. إفراز صديدي كريه مستمر → اشتبه بجسم غريب ودعه يصرف؛ انقل بوضعية مريحة لمنع دخوله أعمق ومنع الاستنشاق.</li>
  <li><b>Rhinitis</b>: التهاب التجويف الأنفي (عدوى، حساسية، أدوية، حرارة، أجسام غريبة، مهيجات، هرمونات الحمل) — احتقان، عطاس، حكة، سيلان، تنقيط خلفي، كحة؛ وضعية <b>Fowler</b>.</li>
  <li><b>Sinusitis</b>: تعطل تصريف الجيوب؛ ألم وضغط في الوجه، ألم حلق وأسنان، صداع، حرارة، قشعريرة، آلام عضلية. 28.9 مليون (B) / 29.3 مليون (A) ⚑. محلول ملحي ومزيل احتقان، ومضاد حيوي بعد <b>7–10 أيام</b>.</li></ul>`,
});
