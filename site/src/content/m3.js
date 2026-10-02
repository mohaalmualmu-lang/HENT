/* Module 3 — Ears (A39–A54, B40–B56) */
MOD({
  id: 'm3', n: 3, title: 'Ears', sub: 'Hearing and balance, the three parts of the ear, ear assessment and the otoscope, impacted cerumen, labyrinthitis, Meniere disease, otitis externa and media.',
  ar: 'الأذن', refs: 'A39–A54 · B40–B56',
  steps: [
    { k: 'sec', h: 'Hearing and balance' },
    { k: 'card', id: 'm3-ears', h: 'Why the ears matter', src: 'A39, A39n, B40',
      b: `The ears are <k>The primary structures for hearing and balance</k>; B adds they are <k>Integral to self-protection</k>.
      <br>Disorders and injuries can leave a person unable to <k>Communicate</k>, <k>React</k>, and <k>Maintain equilibrium</k>.
      <ul><li><k>Changes in air pressure can cause ear discomfort</k>.</li>
      <li><k>Tumors on cranial nerves</k> can affect the inner ear and balance, facial sensation, eye movement, facial movement, taste, and hearing.</li>
      <li>B: <k>Hearing loss can affect a child's ability to develop communication, language, and social skills</k>.</li></ul>` },
    { k: 'card', id: 'm3-parts', h: 'The ear is divided into three anatomic parts', src: 'A40, A40n, B41', hl: true,
      b: `<ul><li><k>External ear</k>: <k>Pinna</k>, <k>External auditory canal</k>, <k>External portion of the tympanic membrane</k> (<k>eardrum</k>).</li>
      <li><k>Middle ear</k>: <k>Inner portion of the tympanic membrane</k>, <k>Ossicles</k>.</li>
      <li><k>Inner ear</k>: <k>Cochlea</k>, <k>Semicircular canals</k>.</li></ul>
      Sound waves travel through the ear, and then the internal ear structures <k>form nerve impulses that travel to the brain via the auditory nerve</k>. <k>The brain converts these impulses into sound</k>.`,
      flag: 'The slides (A41, B42) say “from nerve impulses that travel to brain”; the notes say the internal ear structures “form” nerve impulses. The notes’ wording is used here.' },
    { k: 'fig', fig: 'ear' },
    { k: 'ix', type: 'sort', id: 'm3-partsort', title: 'External, middle or inner ear?', src: 'A40n, B41',
      buckets: [{ n: 'External ear', items: ['Pinna', 'External auditory canal', 'External portion of the tympanic membrane'] }, { n: 'Middle ear', items: ['Inner portion of the tympanic membrane', 'Ossicles'] }, { n: 'Inner ear', items: ['Cochlea', 'Semicircular canals'] }] },
    { k: 'ix', type: 'seq', id: 'm3-sound', title: 'Route: how sound becomes hearing', fig: 'ear', src: 'A40, A41n, B41, B42',
      how: 'Tap in order; the marker follows the path on the ear figure. <span class="pill only">Beyond your notes: the middle steps (eardrum → ossicles → cochlea) come from the figure; the notes give the start and the end.</span>',
      items: ['Sound waves enter at the pinna', 'Travel down the external auditory canal', 'Reach the tympanic membrane (eardrum)', 'Pass across the ossicles (malleus, incus, stapes)', 'Inner-ear structures (cochlea) form nerve impulses', 'Impulses travel to the brain via the auditory nerve', 'The brain converts the impulses into sound'],
      pts: [[8, 36], [38, 47], [50, 45], [55, 47], [74, 53], [83, 46], [93, 30]] },
    { k: 'ix', type: 'ear3d', id: 'm3-ear3d' },
    { k: 'q', ids: ['m3q1', 'm3q2', 'm3q3', 'm3q4'] },

    { k: 'sec', h: 'Ear assessment' },
    { k: 'card', id: 'm3-inj', h: 'Possible ear injuries', src: 'A42n, B43', hl: true,
      b: `<ul><li><k>Foreign objects forced into the auditory canal can damage the eardrum</k>.</li>
      <li><k>Ear infections may cause the eardrum to blister and bleed</k>; <k>inner ear infections may cause pressure behind the eardrum</k>.</li>
      <li><k>Blast pressure waves can burst the eardrum</k>.</li></ul>` },
    { k: 'card', id: 'm3-assess', h: 'Ear assessment, step by step', src: 'A42–A44, A42n–A44n, B43–B45',
      b: `<ol><li><k>Observe the scene to rule out hazards</k> to EMS personnel and crew.</li>
      <li>As you approach, assess: <k>Approximate age and sex</k>, <k>Environmental conditions</k>, patient’s <k>degree of distress</k>, <k>Whether the patient is wearing a hearing aid</k>.</li>
      <li><k>Ensure airway patency, breathing adequacy, and circulation</k>; <k>Manage life threats</k>; <k>Take a complete history</k>.</li>
      <li>Observe ears for: <k>Drainage</k>, <k>Excess cerumen (earwax)</k>, <k>Inflammation</k>, <k>Swelling</k>.</li>
      <li><k>Have the patient rate his or her pain using OPQRST</k>; A: <k>Include pertinent negatives</k>.</li>
      <li>Ask about: <k>Changes in hearing</k>, <k>Tinnitus (ringing in the ears)</k>, <k>Dizziness</k>.</li>
      <li>Inspect and palpate for: <k>Wounds</k>, <k>Swelling</k>, <k>Drainage</k> (A: <k>Pus</k>, <k>Blood</k>, <k>Cerebrospinal fluid</k>), and <k>Battle sign</k> — A: <k>discoloration and tenderness</k> — <k>of the mastoid process</k>.</li></ol>` },
    { k: 'think', q: 'Clear fluid drains from the ear of a patient who fell, and there is bruising behind the ear. Which two findings on your inspection list are these?', a: '<k>Drainage</k> — A lists <k>Cerebrospinal fluid</k> among the drainage types — and <k>Battle sign</k> (discoloration and tenderness of the mastoid process).', src: 'A44n, B45' },
    { k: 'card', id: 'm3-oto', h: 'The otoscope', src: 'A45, A45n, B26', ph: 'otoscope', cap: 'Otoscope (A45, B26)',
      b: `<k>Used to visualize abnormalities of the external canal and tympanic membrane</k>.
      <ul><li>A: <k>consists of a head and a handle</k>; the head contains <k>an electric light source and a low-power magnifying lens</k>; the front of the head takes a disposable plastic earpiece (<k>speculum</k>). The examiner inserts the speculum and looks through a lens on the rear of the headpiece.</li>
      <li>Paramedics must work in an <k>expanded scope of practice</k> and receive additional training from their medical director (<k>Skill Drill 19-2</k>).</li>
      <li>Even if trained, <k>transport the patient to receive a complete assessment</k> of the external canal and middle ear. <k>Document and communicate your findings</k>.</li></ul>` },
    { k: 'ix', type: 'seq', id: 'm3-assessq', title: 'Ear assessment in order', src: 'A42–A44, B43–B45',
      items: ['Observe the scene for hazards', 'As you approach: age and sex, environment, distress, hearing aid', 'Ensure ABCs and manage life threats', 'Take a complete history', 'Observe ears: drainage, excess cerumen, inflammation, swelling', 'Rate pain with OPQRST; ask about hearing changes, tinnitus, dizziness', 'Inspect and palpate: wounds, swelling, drainage, Battle sign'] },
    { k: 'q', ids: ['m3q5', 'm3q6', 'm3q7', 'm3q8', 'm3q9', 'm3q10'] },

    { k: 'sec', h: 'Impacted cerumen' },
    { k: 'card', id: 'm3-cer', h: 'Impacted cerumen (earwax)', src: 'A46, A46n, A47, A47n, B47, B48',
      b: `<k>Cerumen</k> is a <k>yellowish, oily substance found in the outer ear canal (earwax)</k>. It helps <k>prevent dirt and water from entering</k> the middle ear canal and may protect the ear from <k>bacteria or fungus</k>.
      <br>May present as <k>Wet—a sticky brown color</k> or <k>Dry—a grayish flaky substance</k>. It can become impacted and <k>cause pressure against the eardrum</k>.
      <br><k>More common in older adults</k>. Other risk factors: <k>Abnormal ear canal shape</k>, <k>Diseases that cause increased production of cerumen</k> (A: <k>Keratosis</k>), <k>Improper use of cotton swabs</k>.` },
    { k: 'card', id: 'm3-cermx', h: 'Impacted cerumen: assessment & treatment', src: 'A47n, A48, A48n, B49',
      b: `Symptoms: <k>Sensation of pressure or fullness in the ears</k>, <k>Dizziness</k>, <k>Ringing in the ears</k>, <k>Loss of hearing</k>, <k>Pain or itching in the ears</k>.
      <br>Prehospital treatment: <k>Thorough history</k> and <k>Visual inspection of the ear</k>.
      <ul><li><k>Treatment is aimed at removing the excess cerumen</k>.</li><li><k>Do not attempt to extract the material yourself</k>.</li><li><k>If left untreated, infection and irritation can occur</k>.</li><li>A: <k>Follow-up is necessary</k>.</li></ul>` },
    { k: 'q', ids: ['m3q11', 'm3q12', 'm3q13', 'm3q14'] },

    { k: 'sec', h: 'Labyrinthitis' },
    { k: 'card', id: 'm3-lab', h: 'Labyrinthitis', src: 'A49, A49n, B50', hl: true,
      b: `Most commonly recognized as <k>the feeling of vertigo or loss of balance after an ear infection or upper respiratory infection</k>.
      <br>An <k>Effect on the nerves of the inner ear</k> and a loss of balance from <k>irritation and swelling of the inner ear</k>.
      <br>Symptoms (slide): <k>Loss of balance</k>, <k>Ringing in the ears</k>, <k>Loss of hearing</k>, <k>Vomiting</k>. Other symptoms (outline): ringing in the ears, <k>Dizziness</k>, loss of hearing, <k>Nausea</k>, vomiting. B: <k>Possible permanent hearing loss</k>.` },
    { k: 'card', id: 'm3-labmx', h: 'Labyrinthitis: management', src: 'A50, A50n, B51, B52',
      b: `Prehospital treatment is directed at: <k>Reducing the severity of the nausea and vomiting</k>; <k>Transporting the patient in a position of comfort</k>.
      <br><k>Serious disorders will need to be ruled out by a CT scan and an MRI</k>. B: <k>Prompt treatment of respiratory and ear infections</k>.
      <br>Hospital treatment: <k>Antiemetic for nausea and vomiting</k>; <k>Antihistamine for swelling</k>; <k>Antivertigo medicine</k>; <k>Diazepam as sedative</k> (B slide: <k>Diazepam (Valium) as a sedative/muscle relaxant</k>).` },
    { k: 'q', ids: ['m3q15', 'm3q16', 'm3q17', 'm3q18'] },

    { k: 'sec', h: 'Meniere disease' },
    { k: 'card', id: 'm3-men', h: 'Meniere disease', src: 'A51, A51n, B53', hl: true,
      b: `<k>Chronic condition of the inner ear</k> characterized by: <k>Dizziness described as spinning vertigo</k>, <k>Low-frequency hearing loss</k>, <k>Tinnitus</k>, <k>Feeling of fullness in the affected ear</k>.
      <br>Involves the <k>Overproduction and defective absorption of endolymphatic fluid</k>, which <k>increases the volume and pressure within the labyrinth of the inner ear</k>.
      <ul><li><k>Distention results in rupture and mixing of the endolymph and perilymph fluids</k>.</li>
      <li>This mixture <k>disrupts the balance of fluid and electrolytes</k> within the labyrinth and <k>damages the vestibular and cochlear hair cells</k>.</li></ul>
      <k>Attacks of less than 2 hours in the early stages</k>; <k>altered balance up to 2 days</k>. As the disease progresses, <k>symptoms last hours to days</k>. May result in <k>Permanent tinnitus</k>, <k>moderate to severe hearing loss</k>, and <k>chronic unsteadiness</k>.` },
    { k: 'photo', ph: 'meniere', cap: 'Normal vs Ménière disease inner ear (B53 only)', src: 'B53', notice: 'In the Ménière drawing the membranous labyrinth (blue) is visibly swollen — the distended endolymph space.' },
    { k: 'ix', type: 'meniere', id: 'm3-mensim' },
    { k: 'card', id: 'm3-menmx', h: 'Meniere disease: management', src: 'A52, A52n, B54',
      b: `<ul><li><k>Prehospital care includes treating the nausea and vomiting with an antiemetic</k>.</li><li><k>The physician may treat with diuretics and an antiemetic</k>.</li><li>B: <k>Limited success with surgical procedures</k>.</li></ul>` },
    { k: 'ix', type: 'sort', id: 'm3-vertsort', title: 'Labyrinthitis or Meniere disease?', src: 'A49–A52, B50–B54',
      buckets: [{ n: 'Labyrinthitis', items: ['Follows an ear infection or upper respiratory infection', 'Irritation and swelling of the inner ear', 'Hospital: antihistamine for swelling, diazepam', 'CT scan and MRI to rule out serious disorders'] },
        { n: 'Meniere disease', items: ['Chronic condition of the inner ear', 'Overproduction and defective absorption of endolymphatic fluid', 'Low-frequency hearing loss and fullness in the ear', 'Physician may treat with diuretics'] }] },
    { k: 'q', ids: ['m3q19', 'm3q20', 'm3q21', 'm3q22', 'm3q23'] },

    { k: 'sec', h: 'Otitis externa and media' },
    { k: 'card', id: 'm3-otitis', h: 'Otitis externa and media', src: 'A53, A53n, B55', hl: true,
      flag: 'Both files define otitis as an infection from bacterial growth “in the ear canal”, but the middle ear (otitis media) lies behind the eardrum, not in the canal. Learn the definition as written.',
      b: `<k>Infection that results from bacterial growth in the ear canal</k>.
      <ul><li><k>Otitis externa—infection of the outer ear</k>.</li><li><k>Otitis media—infection of the middle ear</k>.</li></ul>
      <k>More common in children than adults</k>. <k>Most commonly bacterial infections</k>: <k>Otitis externa can also be an allergic or fungal reaction</k>; <k>Otitis media can be virally induced</k>.` },
    { k: 'card', id: 'm3-otmx', h: 'Otitis: assessment & management', src: 'A54, A54n, B56', hl: true,
      b: `Signs and symptoms: <k>Pain</k>, <k>Itching</k>, <k>Edema and erythema</k>, <k>Diminished hearing acuity</k>, <k>Inflamed, bulging tympanic membrane</k> on exam with otoscope.
      <br><k>Prehospital treatment should be directed at relieving unbearable symptoms</k>: <k>Monitor the patient's condition</k>; <k>administer pain medication when necessary</k>.
      <br>A: <k>In the hospital setting, antibiotics may be administered</k>; if symptoms do not improve, <k>tympanocentesis (needle aspiration)</k> may be performed.` },
    { k: 'ix', type: 'sort', id: 'm3-otsort', title: 'Otitis externa or otitis media?', src: 'A53, A53n, B55',
      buckets: [{ n: 'Otitis externa', items: ['Infection of the outer ear', 'Can also be an allergic or fungal reaction'] }, { n: 'Otitis media', items: ['Infection of the middle ear', 'Can be virally induced', 'Bulging tympanic membrane (behind it)'] }],
      after: 'Both: most commonly bacterial, more common in children than adults. <span class="pill only">The last item’s placement is beyond your notes: the tympanic membrane separates the outer and middle ear.</span>' },
    { k: 'q', ids: ['m3q24', 'm3q25', 'm3q26', 'm3q27'] },

    { k: 'sec', h: 'Put it together' },
    { k: 'ix', type: 'case', id: 'm3-case1', title: 'Case: the room is spinning', src: 'A49–A52, B50–B54',
      intro: '46-year-old man, third episode this year. The room is spinning, his right ear feels full and is ringing, and he cannot hear low voices on that side. He has vomited twice. The last episode lasted about an hour.',
      vitals: { HR: 92, BP: '134/82', RR: 18, SpO2: '98%' },
      steps: [
        { scene: 'No recent ear or respiratory infection. Recurrent episodes.', q: 'Most likely condition?', o: [['Meniere disease', true, 'Chronic inner-ear condition: spinning vertigo, low-frequency hearing loss, tinnitus, fullness in the affected ear; early attacks under 2 hours.'], ['Labyrinthitis', false, 'Labyrinthitis follows an ear infection or upper respiratory infection.'], ['Impacted cerumen', false, 'Cerumen can cause fullness and dizziness, but not recurrent spinning attacks with this pattern.'], ['Otitis media', false, 'Otitis gives pain, itching, edema/erythema and a bulging eardrum.']] },
        { scene: 'He keeps retching.', q: 'Prehospital care per your notes?', o: [['Treat the nausea and vomiting with an antiemetic', true, 'Prehospital care includes treating the nausea and vomiting with an antiemetic.'], ['Give a diuretic now', false, 'Diuretics are what the physician may use, not prehospital care.', { HR: 98 }], ['Attempt to extract earwax', false, 'Never extract cerumen yourself — and this is not cerumen.']] },
        { scene: 'His wife asks what happens as the disease progresses.', q: 'What do your notes say?', o: [['Symptoms last hours to days; permanent tinnitus, moderate to severe hearing loss and chronic unsteadiness may result', true, 'Correct.'], ['It always disappears after the third attack', false, 'Not in your notes.'], ['Attacks get shorter, under 10 minutes', false, 'The opposite — they lengthen to hours to days.']] }],
      end: 'Meniere: overproduction and defective absorption of endolymph → distention → rupture and mixing of endolymph and perilymph → hair-cell damage.' },
    { k: 'ix', type: 'case', id: 'm3-case2', title: 'Case: dizzy after a cold', src: 'A49, A50, B50–B52',
      intro: '23-year-old woman, one week after a chest cold. Since this morning she feels the room tilt when she moves, her ears ring, and she has vomited.',
      vitals: { HR: 104, BP: '118/74', RR: 18, SpO2: '99%' },
      steps: [
        { scene: 'Vertigo/loss of balance after an upper respiratory infection.', q: 'Your impression?', o: [['Labyrinthitis', true, 'Vertigo or loss of balance after an ear infection or upper respiratory infection.'], ['Meniere disease', false, 'Meniere is a chronic condition with low-frequency hearing loss and fullness; nothing points to a URI trigger.'], ['Papilledema', false, 'Papilledema is swelling of the optic nerve.']] },
        { scene: 'She is most comfortable lying on her side with eyes closed.', q: 'Prehospital treatment?', o: [['Reduce the nausea and vomiting; transport in a position of comfort', true, 'Prehospital treatment is directed at reducing N/V and transporting in a position of comfort.'], ['Make her sit upright for the whole trip', false, 'Position of comfort.', { HR: 112 }], ['Give diazepam on scene as a muscle relaxant', false, 'Diazepam is listed under hospital treatment.']] },
        { scene: 'At the hospital the physician mentions imaging.', q: 'Why?', o: [['Serious disorders need to be ruled out by a CT scan and an MRI', true, 'Correct.'], ['To drain the endolymph', false, 'Not in your notes.'], ['To remove earwax', false, 'No.']] }],
      end: 'Hospital treatment: antiemetic, antihistamine for swelling, antivertigo medicine, diazepam as a sedative.' },
    { k: 'spell', terms: ['Labyrinthitis', 'Cerumen', 'Tinnitus', 'Tympanic'] },
    { k: 'sa', id: 'm3sa1' }, { k: 'sa', id: 'm3sa2' }, { k: 'sa', id: 'm3sa3' }, { k: 'sa', id: 'm3sa4' }, { k: 'sa', id: 'm3sa5' }, { k: 'sa', id: 'm3sa6' },
  ],

  lists: [
    { id: 'm3-unable', title: 'Ear disorders can leave a person unable to', src: 'A39, B40', items: ['Communicate', 'React', 'Maintain equilibrium'], foils: ['Swallow', 'Smell', 'See'] },
    { id: 'm3-ext', title: 'External ear — parts', src: 'A40n, B41', items: ['Pinna', 'External auditory canal', 'External portion of the tympanic membrane'], foils: ['Ossicles', 'Cochlea', 'Semicircular canals'] },
    { id: 'm3-mid', title: 'Middle ear — parts', src: 'A40n, B41', items: ['Inner portion of the tympanic membrane', 'Ossicles'], foils: ['Pinna', 'Cochlea', 'Semicircular canals'] },
    { id: 'm3-inn', title: 'Inner ear — parts', src: 'A40n, B41', items: ['Cochlea', 'Semicircular canals'], foils: ['Ossicles', 'Pinna', 'External auditory canal'] },
    { id: 'm3-injury', title: 'Possible ear injuries', src: 'A42n, B43', items: ['Foreign objects forced into the auditory canal can damage the eardrum', 'Ear infections may cause the eardrum to blister and bleed', 'Inner ear infections may cause pressure behind the eardrum', 'Blast pressure waves can burst the eardrum'], foils: ['Cotton swabs always rupture the cochlea', 'Loud music dislocates the ossicles'] },
    { id: 'm3-approach', title: 'Ear patient: assess as you approach', src: 'A42, B43', items: ['Approximate age and sex of the patient', 'Environmental conditions', 'Patient’s degree of distress', 'Whether the patient is wearing a hearing aid'], foils: ['Visual acuity', 'Pupil size', 'Blood glucose'] },
    { id: 'm3-observe', title: 'Observe ears for', src: 'A43, B44', items: ['Drainage', 'Excess cerumen (earwax)', 'Inflammation', 'Swelling'], foils: ['Halos', 'Stridor', 'Pallor'] },
    { id: 'm3-ask', title: 'Ask the ear patient about', src: 'A44, B45', items: ['Changes in hearing', 'Tinnitus (ringing in the ears)', 'Dizziness'], foils: ['Double vision', 'Loss of smell', 'Toothache'] },
    { id: 'm3-inspect', title: 'Inspect and palpate the ear for', src: 'A44, B45', items: ['Wounds', 'Swelling', 'Drainage', 'Battle sign of the mastoid process'], foils: ['Halos around lights', 'Kiesselbach plexus bleeding'] },
    { id: 'm3-drain', title: 'Ear drainage may be (A44n)', src: 'A44n', items: ['Pus', 'Blood', 'Cerebrospinal fluid'], foils: ['Aqueous humor', 'Vitreous humor', 'Endolymph'] },
    { id: 'm3-otoparts', title: 'Otoscope (A45n)', src: 'A45n', items: ['Consists of a head and a handle', 'Head: electric light source and low-power magnifying lens', 'Front: attachment for a disposable plastic earpiece (speculum)'], foils: ['A concave mirror with rotating lenses', 'A suction cup'] },
    { id: 'm3-cerform', title: 'Cerumen may present as', src: 'A46, B47', items: ['Wet—a sticky brown color', 'Dry—a grayish flaky substance'], foils: ['Wet—a clear watery fluid', 'Dry—a white powdery crust'] },
    { id: 'm3-cerrisk', title: 'Impacted cerumen — risk factors', src: 'A47, A47n, B47, B48', items: ['More common in older adults', 'Abnormal ear canal shape', 'Diseases that cause increased production of cerumen', 'Improper use of cotton swabs'], foils: ['Upper respiratory infection', 'Blast pressure waves', 'Insect bites'] },
    { id: 'm3-cersx', title: 'Impacted cerumen — symptoms', src: 'A47n, A48, B49', items: ['Sensation of pressure or fullness in the ears', 'Dizziness', 'Ringing in the ears', 'Loss of hearing', 'Pain or itching in the ears'], foils: ['Bloody otorrhea after a blast', 'Spinning vertigo lasting days'] },
    { id: 'm3-cermx', title: 'Impacted cerumen — treatment', src: 'A48, A48n, B49', items: ['Thorough history', 'Visual inspection of the ear', 'Treatment is aimed at removing the excess cerumen', 'Do not attempt to extract the material yourself', 'Follow-up is necessary'], foils: ['Irrigate the canal on scene', 'Extract it with a cotton swab'] },
    { id: 'm3-labsx', title: 'Labyrinthitis — symptoms', src: 'A49, A49n, B50', items: ['Loss of balance', 'Ringing in the ears', 'Dizziness', 'Loss of hearing', 'Nausea', 'Vomiting'], foils: ['Feeling of fullness and low-frequency hearing loss (chronic)', 'Bulging tympanic membrane', 'Halos around lights'] },
    { id: 'm3-labpre', title: 'Labyrinthitis — prehospital treatment directed at', src: 'A50, B51', items: ['Reducing the severity of the nausea and vomiting', 'Transporting the patient in a position of comfort'], foils: ['Giving diuretics', 'Extracting cerumen'] },
    { id: 'm3-labhosp', title: 'Labyrinthitis — hospital treatment', src: 'A50n, B52', items: ['Antiemetic for nausea and vomiting', 'Antihistamine for swelling', 'Antivertigo medicine', 'Diazepam as sedative'], foils: ['Diuretics', 'Tympanocentesis', 'Topical steroid eye drops'] },
    { id: 'm3-mensx', title: 'Meniere disease — characterized by', src: 'A51, B53', items: ['Dizziness described as spinning vertigo', 'Low-frequency hearing loss', 'Tinnitus', 'Feeling of fullness in the affected ear'], foils: ['High-frequency hearing loss', 'Ear pain and itching', 'Bulging tympanic membrane'] },
    { id: 'm3-menseq', title: 'Meniere disease — pathophysiology in order', ordered: true, src: 'A51, A51n, B53', items: ['Overproduction and defective absorption of endolymphatic fluid', 'Volume and pressure within the labyrinth increase', 'Distention results in rupture and mixing of endolymph and perilymph', 'Fluid and electrolyte balance disrupted', 'Vestibular and cochlear hair cells damaged'], foils: ['Bacteria grow in the ear canal'] },
    { id: 'm3-menlate', title: 'Meniere disease — may result in', src: 'A51n, B53', items: ['Permanent tinnitus', 'Moderate to severe hearing loss', 'Chronic unsteadiness'], foils: ['Blindness', 'Facial paralysis', 'Anosmia'] },
    { id: 'm3-menmx', title: 'Meniere disease — treatment', src: 'A52, B54', items: ['Prehospital: antiemetic for nausea and vomiting', 'Physician: diuretics and an antiemetic', 'Limited success with surgical procedures'], foils: ['Prehospital: diuretics', 'Prehospital: tympanocentesis'] },
    { id: 'm3-otsx', title: 'Otitis externa and media — signs and symptoms', src: 'A54, B56', items: ['Pain', 'Itching', 'Edema and erythema', 'Diminished hearing acuity', 'Inflamed, bulging tympanic membrane'], foils: ['Spinning vertigo lasting days', 'Battle sign'] },
    { id: 'm3-otmx', title: 'Otitis — management', src: 'A54, A54n, B56', items: ['Relieve unbearable symptoms', 'Monitor the patient’s condition', 'Administer pain medication when necessary', 'Hospital: antibiotics may be administered', 'Tympanocentesis (needle aspiration) if symptoms do not improve'], foils: ['Diuretics', 'Extract earwax'] },
  ],

  qs: [
    { id: 'm3q1', lv: 'R', src: 'A39, B40', s: 'The ears are the primary structures for:', o: ['Hearing and balance', 'Hearing and smell', 'Balance and vision', 'Hearing only'], w: 'Primary structures for hearing and balance.', tw: 'Smell is the nose.' },
    { id: 'm3q2', lv: 'R', src: 'A40n, B41', hl: true, s: 'The ossicles belong to the:', o: ['Middle ear', 'External ear', 'Inner ear', 'Eustachian tube'], w: 'Middle ear: inner portion of the tympanic membrane + ossicles.', tw: 'The inner ear holds the cochlea and semicircular canals.' },
    { id: 'm3q3', lv: 'R', src: 'A40n, B41', s: 'The cochlea and semicircular canals form the:', o: ['Inner ear', 'Middle ear', 'External ear', 'Mastoid process'], w: 'Inner ear: cochlea, semicircular canals.', tw: 'Middle ear = inner tympanic membrane + ossicles.' },
    { id: 'm3q4', lv: 'U', src: 'A41n, B42', s: 'Per your notes, how does sound reach the brain?', o: ['Internal ear structures form nerve impulses that travel via the auditory nerve', 'Sound waves travel directly up the Eustachian tube', 'The optic nerve carries vibration', 'The ossicles send impulses through the facial nerve'], w: 'Internal ear structures form nerve impulses → auditory nerve → brain converts them into sound.', tw: 'The Eustachian tube is not part of the hearing pathway in your notes.' },
    { id: 'm3q5', lv: 'R', src: 'A42n, B43', hl: true, s: 'What can burst the eardrum?', o: ['Blast pressure waves', 'Excess cerumen', 'Labyrinthitis', 'Meniere disease'], w: 'Blast pressure waves can burst the eardrum.', tw: 'Impacted cerumen causes pressure against the eardrum, not a burst.' },
    { id: 'm3q6', lv: 'R', src: 'A42, B43', s: 'As you approach an ear patient, which of these is on your list?', o: ['Whether the patient is wearing a hearing aid', 'Visual acuity in each eye', 'PERRLA', 'Capillary refill'], w: 'Age and sex, environmental conditions, degree of distress, hearing aid.', tw: 'Visual acuity is part of the eye exam.' },
    { id: 'm3q7', lv: 'R', src: 'A44, B45', s: 'Tinnitus means:', o: ['Ringing in the ears', 'Loss of balance', 'Ear pain', 'Bleeding from the ear'], w: 'Tinnitus = ringing in the ears.', tw: 'Loss of balance is a vertigo/dizziness symptom.' },
    { id: 'm3q8', lv: 'U', src: 'A44, A44n, B45', s: 'Battle sign is:', o: ['Discoloration and tenderness of the mastoid process', 'Ringing in the ears after a blast', 'A bulging tympanic membrane', 'Excess cerumen'], w: 'Battle sign (discoloration and tenderness) of the mastoid process of the skull.', tw: 'A bulging eardrum is an otitis finding.' },
    { id: 'm3q9', lv: 'R', src: 'A45, B26', s: 'The otoscope is used to visualize:', o: ['Abnormalities of the external canal and tympanic membrane', 'The retina and macula', 'The vocal cords', 'The nasal turbinates'], w: 'External canal and tympanic membrane.', tw: 'The retina is examined with the ophthalmoscope.' },
    { id: 'm3q10', lv: 'U', src: 'A45, A45n', s: 'You are trained to use an otoscope and it is in your scope. What now?', o: ['Still transport the patient for a complete assessment, and document and communicate findings', 'Treat and release if the eardrum looks normal', 'Remove any cerumen you see', 'Skip the history'], w: 'Even if trained, transport to receive a complete assessment; document and communicate findings.', tw: 'Your notes do not allow treat-and-release on otoscope findings.' },
    { id: 'm3q11', lv: 'R', src: 'A46, B47', s: 'Dry cerumen looks like:', o: ['A grayish flaky substance', 'A sticky brown substance', 'Clear watery fluid', 'Yellow pus'], w: 'Dry—grayish flaky; wet—sticky brown.', tw: 'Sticky brown is wet cerumen.' },
    { id: 'm3q12', lv: 'R', src: 'A47n, B47', s: 'Impacted cerumen is more common in:', o: ['Older adults', 'Infants', 'Young athletes', 'Pregnant women'], w: 'More common in older adults.', tw: 'Not in your notes.' },
    { id: 'm3q13', lv: 'A', src: 'A48n, B49', s: 'An older man has impacted earwax with fullness and hearing loss. What do you NOT do?', o: ['Attempt to extract the material yourself', 'Take a thorough history', 'Visually inspect the ear', 'Encourage follow-up'], w: 'Do not attempt to extract the material yourself.', tw: 'Thorough history is part of prehospital treatment.' },
    { id: 'm3q14', lv: 'R', src: 'A47, B48', s: 'A listed risk factor for impacted cerumen:', o: ['Improper use of cotton swabs', 'Upper respiratory infection', 'Blast injury', 'Diuretics'], w: 'Abnormal canal shape, diseases increasing cerumen, improper cotton-swab use (and older age).', tw: 'URI precedes labyrinthitis.' },
    { id: 'm3q15', lv: 'R', src: 'A49, B50', hl: true, s: 'Labyrinthitis is most commonly recognized as vertigo or loss of balance after:', o: ['An ear infection or upper respiratory infection', 'Head trauma', 'A blast injury', 'Using cotton swabs'], w: 'After an ear infection or upper respiratory infection.', tw: 'Not the trigger in your notes.' },
    { id: 'm3q16', lv: 'A', src: 'A50, B51', s: 'Prehospital treatment of labyrinthitis is directed at:', o: ['Reducing nausea and vomiting and transporting in a position of comfort', 'Giving diuretics', 'Draining the inner ear', 'Extracting earwax'], w: 'Reduce N/V; position of comfort.', tw: 'Diuretics are a Meniere physician treatment.' },
    { id: 'm3q17', lv: 'R', src: 'A50, B51', s: 'Serious disorders in a labyrinthitis patient will be ruled out by:', o: ['A CT scan and an MRI', 'An otoscope exam alone', 'A tympanocentesis', 'A blood glucose'], w: 'CT scan and MRI.', tw: 'Tympanocentesis is for otitis that does not improve.' },
    { id: 'm3q18', lv: 'R', src: 'A50n, B52', s: 'Which is a HOSPITAL treatment for labyrinthitis?', o: ['Diazepam as a sedative', 'Diuretics', 'Warm compresses', 'Saline rinse'], w: 'Antiemetic, antihistamine for swelling, antivertigo medicine, diazepam (Valium) as sedative/muscle relaxant.', tw: 'Diuretics belong to Meniere disease.' },
    { id: 'm3q19', lv: 'R', src: 'A51, B53', hl: true, s: 'Meniere disease hearing loss is typically:', o: ['Low-frequency', 'High-frequency', 'Sudden and total in both ears', 'Absent'], w: 'Low-frequency hearing loss, with spinning vertigo, tinnitus and fullness.', tw: 'Not high-frequency.' },
    { id: 'm3q20', lv: 'U', src: 'A51, A51n, B53', hl: true, s: 'The underlying problem in Meniere disease is:', o: ['Overproduction and defective absorption of endolymphatic fluid', 'Bacterial growth in the ear canal', 'Impacted cerumen against the eardrum', 'Irritation and swelling after a URI'], w: 'Overproduction + defective absorption of endolymph → increased volume and pressure in the labyrinth.', tw: 'Irritation/swelling after a URI is labyrinthitis.' },
    { id: 'm3q21', lv: 'R', src: 'A51n, B53', s: 'In the early stages of Meniere disease, attacks last:', o: ['Less than 2 hours (balance altered up to 2 days)', 'Days to weeks', 'Seconds only', 'Exactly 20 minutes'], w: 'Attacks of less than 2 hours early; altered balance up to 2 days; later hours to days.', tw: 'Hours to days is later in the disease.' },
    { id: 'm3q22', lv: 'A', src: 'A52, B54', s: 'Prehospital care for a Meniere attack with vomiting:', o: ['An antiemetic for nausea and vomiting', 'Diuretics', 'Diazepam as muscle relaxant', 'Antibiotics'], w: 'Prehospital: antiemetic. The physician may treat with diuretics and an antiemetic.', tw: 'Diuretics are given by the physician.' },
    { id: 'm3q23', lv: 'U', src: 'A51n, B53', s: 'What damages the vestibular and cochlear hair cells in Meniere disease?', o: ['Mixing of endolymph and perilymph that disrupts fluid and electrolyte balance', 'Bacteria from the ear canal', 'Loud noise exposure', 'Cotton-swab trauma'], w: 'Distention → rupture → mixing of endolymph and perilymph → disrupted fluid/electrolyte balance → hair-cell damage.', tw: 'Bacteria are the otitis story.' },
    { id: 'm3q24', lv: 'R', src: 'A53, B55', hl: true, s: 'Otitis media is infection of the:', o: ['Middle ear', 'Outer ear', 'Inner ear', 'Mastoid skin'], w: 'Otitis media = middle ear; otitis externa = outer ear.', tw: 'Outer ear = externa.' },
    { id: 'm3q25', lv: 'R', src: 'A53n, B55', hl: true, s: 'Which form of otitis can also be an allergic or fungal reaction?', o: ['Otitis externa', 'Otitis media', 'Both equally', 'Neither'], w: 'Otitis externa can also be an allergic or fungal reaction; otitis media can be virally induced.', tw: 'Otitis media is the one that can be virally induced.' },
    { id: 'm3q26', lv: 'A', src: 'A54, B56', s: 'Prehospital treatment of otitis externa or media is directed at:', o: ['Relieving unbearable symptoms — monitor, pain medication when necessary', 'Antibiotics on scene', 'Tympanocentesis on scene', 'Antiemetics for vertigo'], w: 'Relieve unbearable symptoms: monitor, administer pain medication when necessary.', tw: 'Antibiotics may be given in the hospital setting.' },
    { id: 'm3q27', lv: 'R', src: 'A54n', only: 'A', s: 'If otitis symptoms do not improve in hospital, what may be performed?', o: ['Tympanocentesis (needle aspiration)', 'CT and MRI', 'Diuretic therapy', 'Tonsillectomy'], w: 'Tympanocentesis (needle aspiration).', tw: 'CT/MRI rule out serious disorders in labyrinthitis.' },
  ],

  sa: [
    { id: 'm3sa1', src: 'A40n, B41', q: 'Name the three anatomic parts of the ear and the structures in each.', keys: ['External: pinna, external auditory canal, external portion of the tympanic membrane', 'Middle: inner portion of the tympanic membrane, ossicles', 'Inner: cochlea, semicircular canals'], model: 'External ear (pinna, external auditory canal, external portion of the tympanic membrane); middle ear (inner portion of the tympanic membrane, ossicles); inner ear (cochlea, semicircular canals).' },
    { id: 'm3sa2', src: 'A42–A44, B43–B45', q: 'List what you observe, ask about, and inspect/palpate in an ear assessment.', keys: ['Observe: drainage, excess cerumen, inflammation, swelling', 'Ask: changes in hearing, tinnitus, dizziness', 'Inspect/palpate: wounds, swelling, drainage, Battle sign'], model: 'Observe ears for drainage, excess cerumen, inflammation, swelling. Ask about changes in hearing, tinnitus, dizziness (and rate pain with OPQRST). Inspect and palpate for wounds, swelling, drainage (pus, blood, CSF) and Battle sign of the mastoid process.' },
    { id: 'm3sa3', src: 'A46–A48, B47–B49', q: 'Impacted cerumen: risk factors, symptoms and prehospital treatment.', keys: ['Older adults, abnormal canal shape, diseases increasing cerumen, cotton swabs', 'Pressure/fullness, dizziness, ringing, hearing loss, pain or itching', 'Thorough history and visual inspection', 'Do not extract it yourself'], model: 'Risk: older adults, abnormal ear canal shape, diseases that increase cerumen (keratosis), improper cotton-swab use. Symptoms: pressure/fullness, dizziness, ringing, hearing loss, pain or itching. Prehospital: thorough history and visual inspection; do not attempt to extract it; untreated → infection and irritation; follow-up needed.' },
    { id: 'm3sa4', src: 'A49, A50, B50–B52', q: 'Labyrinthitis: what is it, prehospital treatment, and hospital treatment?', keys: ['Vertigo/loss of balance after ear infection or URI', 'Reduce nausea and vomiting', 'Transport in position of comfort', 'CT and MRI to rule out serious disorders', 'Antiemetic, antihistamine, antivertigo, diazepam'], model: 'Vertigo or loss of balance after an ear infection or URI (inner-ear irritation and swelling). Prehospital: reduce nausea/vomiting; transport in a position of comfort. CT and MRI rule out serious disorders. Hospital: antiemetic, antihistamine for swelling, antivertigo medicine, diazepam as sedative.' },
    { id: 'm3sa5', src: 'A51, A52, B53, B54', q: 'Meniere disease: four features, the pathophysiology, and treatment.', keys: ['Spinning vertigo, low-frequency hearing loss, tinnitus, fullness', 'Overproduction and defective absorption of endolymph', 'Rupture and mixing of endolymph and perilymph → hair-cell damage', 'Prehospital antiemetic; physician diuretics + antiemetic'], model: 'Chronic inner-ear condition: spinning vertigo, low-frequency hearing loss, tinnitus, fullness. Overproduction and defective absorption of endolymph increases labyrinth volume/pressure; distention → rupture and mixing of endolymph and perilymph → fluid/electrolyte imbalance → vestibular and cochlear hair-cell damage. Prehospital antiemetic; physician diuretics and antiemetic.' },
    { id: 'm3sa6', src: 'A53, A54, B55, B56', q: 'Otitis externa vs media: definitions, causes, signs, and prehospital care.', keys: ['Externa = outer ear; media = middle ear', 'Mostly bacterial; externa may be allergic/fungal; media may be viral', 'Pain, itching, edema and erythema, diminished hearing, bulging TM', 'Relieve unbearable symptoms; monitor; pain medication'], model: 'Bacterial growth infection (more common in children). Externa = outer ear (can be allergic or fungal); media = middle ear (can be viral). Pain, itching, edema and erythema, diminished hearing acuity, inflamed bulging TM. Prehospital: relieve unbearable symptoms, monitor, pain medication when necessary; hospital antibiotics, tympanocentesis if no improvement.' },
  ],

  nums: [
    { v: 'Three anatomic parts', q: 'Into how many anatomic parts is the ear divided?', d: ['Two anatomic parts', 'Four anatomic parts', 'Five anatomic parts'], src: 'A40, B41' },
    { v: 'Less than 2 hours', q: 'Meniere disease: length of attacks in the early stages?', d: ['Less than 20 minutes', '6 to 12 hours', '2 to 3 days'], src: 'A51n, B53' },
    { v: 'Up to 2 days', q: 'Meniere disease: balance may stay altered for…', d: ['Up to 2 hours', 'Up to 2 weeks', 'Up to 20 minutes'], src: 'A51n, B53' },
    { v: 'Hours to days', q: 'Meniere disease: how long symptoms last as the disease progresses?', d: ['Seconds to minutes', 'Weeks to months', 'Exactly 2 hours'], src: 'A51n, B53' },
  ],

  spell: [
    { t: 'Labyrinthitis', hint: 'Vertigo or loss of balance after an ear infection or URI.', ar: 'التهاب التيه', src: 'B51 ✍' },
    { t: 'Cerumen', hint: 'Earwax.', ar: 'شمع الأذن', src: 'A46, B47' },
    { t: 'Tinnitus', hint: 'Ringing in the ears.', ar: 'طنين الأذن', src: 'A44, B45' },
    { t: 'Tympanic', hint: '___ membrane = eardrum.', ar: 'طبلي', src: 'A40n, B41' },
    { t: 'Meniere', hint: '___ disease: overproduction and defective absorption of endolymph.', ar: 'مينيير', src: 'A51, B53' },
    { t: 'Ossicles', hint: 'Tiny bones of the middle ear.', ar: 'العظيمات', src: 'A40n, B41' },
  ],

  flash: [
    ['Three parts of the ear and their structures', 'External: pinna, external auditory canal, external TM. Middle: inner TM, ossicles. Inner: cochlea, semicircular canals.', 'A40n, B41'],
    ['Three possible ear injuries (A42n/B43)', 'Foreign objects can damage the eardrum; infections may blister/bleed it (inner ear infections → pressure behind it); blast pressure waves can burst it.', 'A42n, B43'],
    ['Battle sign', 'Discoloration and tenderness of the mastoid process.', 'A44n, B45'],
    ['Impacted cerumen: the one thing NOT to do', 'Do not attempt to extract the material yourself.', 'A48n, B49'],
    ['Labyrinthitis vs Meniere: the trigger', 'Labyrinthitis follows an ear infection or URI. Meniere is a chronic condition from overproduction/defective absorption of endolymph.', 'A49, A51'],
    ['Meniere: prehospital vs physician treatment', 'Prehospital: antiemetic. Physician: diuretics + antiemetic. (Surgery: limited success.)', 'A52, B54'],
    ['Otitis: prehospital goal', 'Relieve unbearable symptoms — monitor, pain medication when necessary.', 'A54, B56'],
  ],

  ents: [
    { n: 'Impacted cerumen', ty: 'Condition', src: 'A46–A48, B47–B49', f: { Definition: 'Earwax (yellowish oily substance) impacted, causing pressure against the eardrum', 'Cause / mechanism': 'Older adults; abnormal canal shape; diseases increasing cerumen; improper cotton-swab use', Symptoms: 'Pressure/fullness, dizziness, ringing, hearing loss, pain or itching', Management: 'History, visual inspection; do not extract yourself; follow-up' } },
    { n: 'Labyrinthitis', ty: 'Condition', src: 'A49, A50, B50–B52', f: { Definition: 'Vertigo or loss of balance after an ear infection or URI', 'Cause / mechanism': 'Irritation and swelling of the inner ear affecting its nerves', Symptoms: 'Loss of balance, ringing, dizziness, hearing loss, nausea, vomiting; possible permanent hearing loss', Management: 'Reduce N/V, position of comfort; CT/MRI; hospital: antiemetic, antihistamine, antivertigo, diazepam' } },
    { n: 'Meniere disease', ty: 'Condition', src: 'A51, A52, B53, B54', f: { Definition: 'Chronic condition of the inner ear', 'Cause / mechanism': 'Overproduction and defective absorption of endolymph → distention → rupture and mixing with perilymph → hair-cell damage', Symptoms: 'Spinning vertigo, low-frequency hearing loss, tinnitus, fullness; attacks <2 h early', Management: 'Prehospital antiemetic; physician diuretics + antiemetic' } },
    { n: 'Otitis externa', ty: 'Condition', src: 'A53, A54, B55, B56', f: { Definition: 'Infection of the outer ear', 'Cause / mechanism': 'Bacterial growth; can also be allergic or fungal', Who: 'More common in children', Symptoms: 'Pain, itching, edema and erythema, diminished hearing', Management: 'Relieve unbearable symptoms; pain medication' } },
    { n: 'Otitis media', ty: 'Condition', src: 'A53, A54, B55, B56', f: { Definition: 'Infection of the middle ear', 'Cause / mechanism': 'Mostly bacterial; can be virally induced', Who: 'More common in children', Signs: 'Inflamed, bulging tympanic membrane on otoscope', Management: 'Relieve unbearable symptoms; hospital antibiotics; tympanocentesis if no improvement' } },
    { n: 'Otoscope', ty: 'Device', src: 'A45, B26', f: { Purpose: 'Visualize abnormalities of the external canal and tympanic membrane', 'Parts (A)': 'Head (light + low-power magnifying lens) and handle; disposable speculum', 'Paramedic use': 'Expanded scope + medical director training; still transport' } },
    { n: 'Tympanic membrane', ty: 'Structure', src: 'A40n, B41', f: { 'Also called': 'Eardrum', Where: 'External portion = external ear; inner portion = middle ear', 'Linked conditions': 'Burst by blast waves; blistered by infection; bulging in otitis' } },
  ],

  hooks: [
    ['Ear parts: “Pinna-Canal-Drum | Drum-Bones | Snail-Loops”', 'External: pinna, canal, outer drum. Middle: inner drum, ossicles (bones). Inner: cochlea (snail), semicircular canals (loops).'],
    ['“LABYRINTHitis Lags behind a cold”', 'It follows an ear infection or upper respiratory infection.'],
    ['Meniere = “too much water in the maze”', 'Endolymph overproduced + poorly absorbed → maze swells → ruptures → hair cells damaged. FULL ear, LOW tones, RINGING, SPINNING.'],
    ['Cerumen: “Look, don’t dig”', 'History + visual inspection; never extract it yourself.'],
  ],

  arSum: `<ul>
  <li>الأذن مسؤولة عن <b>السمع والتوازن</b>. اضطراباتها قد تمنع التواصل، رد الفعل، والحفاظ على التوازن. تغيّر ضغط الهواء يسبب انزعاج الأذن، وأورام الأعصاب القحفية تؤثر على السمع والتوازن.</li>
  <li>ثلاثة أجزاء: <b>External ear</b> (الصيوان، القناة السمعية، الجزء الخارجي لطبلة الأذن)، <b>Middle ear</b> (الجزء الداخلي للطبلة، <b>ossicles</b>)، <b>Inner ear</b> (القوقعة <b>cochlea</b>، القنوات الهلالية). تراكيب الأذن الداخلية تكوّن إشارات عصبية تنتقل عبر <b>auditory nerve</b> والدماغ يحولها لصوت.</li>
  <li>إصابات: أجسام غريبة تضر الطبلة، الالتهابات قد تسبب نفطات ونزيف، موجات الانفجار قد تمزق الطبلة.</li>
  <li>التقييم: الأمان، العمر والجنس، البيئة، درجة الضيق، <b>hearing aid</b>؛ ABCs؛ التاريخ؛ لاحظ الإفرازات، الشمع الزائد، الالتهاب، التورم؛ قيّم الألم بـ OPQRST؛ اسأل عن تغير السمع، <b>tinnitus</b> (طنين)، الدوخة؛ افحص الجروح، التورم، الإفرازات (صديد، دم، CSF)، و <b>Battle sign</b> على عظم الخشاء. <b>Otoscope</b> يحتاج scope موسّع وتدريب، ومع ذلك انقل المريض.</li>
  <li><b>Impacted cerumen</b>: شمع رطب بني لزج أو جاف رمادي متقشر؛ أكثر عند كبار السن؛ أعراض: امتلاء، دوخة، طنين، ضعف سمع، ألم أو حكة. <b>لا تحاول استخراجه بنفسك</b>.</li>
  <li><b>Labyrinthitis</b>: دوار وفقدان توازن بعد التهاب أذن أو جهاز تنفسي علوي. قبل المستشفى: تقليل الغثيان والقيء، النقل بوضعية مريحة؛ CT و MRI؛ في المستشفى: antiemetic، antihistamine، antivertigo، diazepam.</li>
  <li><b>Meniere disease</b>: مرض مزمن — دوار دوّار، ضعف سمع للترددات المنخفضة، طنين، امتلاء الأذن. السبب: زيادة إنتاج وضعف امتصاص <b>endolymph</b> ← تمدد ← تمزق واختلاط مع perilymph ← تلف خلايا الشعر. الهجمات أقل من ساعتين في البداية (التوازن يتأثر حتى يومين)، ثم ساعات إلى أيام. قبل المستشفى: <b>antiemetic</b>؛ الطبيب: diuretics + antiemetic.</li>
  <li><b>Otitis externa</b> (الأذن الخارجية؛ قد تكون تحسسية أو فطرية) و <b>otitis media</b> (الوسطى؛ قد تكون فيروسية)، أكثر عند الأطفال: ألم، حكة، وذمة واحمرار، ضعف سمع، طبلة منتفخة. قبل المستشفى: تخفيف الأعراض ومسكن.</li></ul>`,
});
