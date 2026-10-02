/* Module 5 — Throat I: mouth, neck & oral disease (A70–A88, A104–A105, B75–B94, B111–B113) */
MOD({
  id: 'm5', n: 5, title: 'Throat I — Mouth, neck & oral disease', sub: 'Throat disorders and swallowing, esophageal reflux, mouth and neck anatomy, throat assessment, dental abscess, oral soft-tissue disease, thrush, Ludwig angina, TMJ disorders.',
  ar: 'الحلق ١: الفم والرقبة وأمراض الفم', refs: 'A70–A88, A104–A105 · B75–B94, B111–B113',
  steps: [
    { k: 'sec', h: 'The throat' },
    { k: 'card', id: 'm5-throat', h: 'Disorders of the pharynx and larynx', src: 'A70, A70n, B75', hl: true,
      flag: 'Both files: “Cranial nerves VI, VII, IX, and XII all play a role in swallowing.” Standard references list V, VII, IX, X and XII (VI is the abducens, which moves the eye). Learn the list as written.',
      b: `<k>Acute inflammation and infections, chronic inflammation, or abnormal growths</k>. Specific disorders:
      <ol><li><k>Vocal cord polyps and nodules</k></li><li><k>Contact ulcers</k></li><li><k>Vocal cord paralysis</k></li><li><k>Laryngoceles</k></li><li><k>Laryngeal papillomas</k></li><li><k>Cancer</k></li></ol>
      <k>Throat infections are common in children</k>. <k>Throat problems can be exacerbated by swallowing problems</k>:
      <ul><li><k>Cranial nerves VI, VII, IX, and XII all play a role in swallowing</k>.</li>
      <li><k>Neurologic problems associated with stroke or trauma can cause swallowing difficulty</k>.</li>
      <li><k>Aspiration pneumonia is a life-threatening condition</k> — A: prehospital treatment of aspiration = <k>maintaining a patent airway, ensuring adequate breathing, close monitoring of vital signs, and prompt transport for definitive care</k>.</li></ul>` },
    { k: 'card', id: 'm5-reflux', h: 'Esophageal reflux', src: 'A71, A71n, B76', hl: true,
      b: `<k>Esophageal disorders can affect the throat</k>. <k>The valve at the end of the esophagus keeps acidic stomach contents from coming back up the throat</k>.
      <br><k>In esophageal reflux, the valve only partially closes or opens too much</k>. Symptoms: <k>Burning sensation in the chest</k>, <k>Indigestion</k> <span class="ar" lang="ar">(عسر هضم)</span>, <k>Change in voice tone</k>. It <k>Can cause a precancerous condition</k>.` },
    { k: 'q', ids: ['m5q1', 'm5q2', 'm5q3', 'm5q4'] },

    { k: 'sec', h: 'Mouth and neck anatomy' },
    { k: 'card', id: 'm5-mouth', h: 'The mouth', src: 'A72, A73, B77, B78', hl: true,
      b: `<k>Assessment begins at the opening of the mouth with the teeth</k>.
      <br><k>Hypoglossal, glossopharyngeal, trigeminal, and facial nerves supply the mouth and its structures</k>.` },
    { k: 'fig', fig: 'teeth' },
    { k: 'fig', fig: 'tooth' },
    { k: 'fig', fig: 'glands' },
    { k: 'card', id: 'm5-neck', h: 'The neck', src: 'A74, A74n, A75, A75n, B79, B80', hl: true,
      b: `<k>The neck consists of the anterior and posterior portions</k>.
      <br>The anterior part includes: <k>Thyroid and cricoid cartilage</k>, <k>Trachea</k>, <k>Numerous muscles and nerves</k>, <k>Major blood vessels</k> — the <k>Internal and external carotid arteries</k> and <k>Internal and external jugular veins</k>.
      <br><k>Vertebral arteries run laterally to the cervical vertebrae in the posterior part of the neck</k>.` },
    { k: 'fig', fig: 'neck' },
    { k: 'fig', fig: 'arteries' },
    { k: 'fig', fig: 'veins' },
    { k: 'ix', type: 'sort', id: 'm5-necksort', title: 'Anterior or posterior neck?', src: 'A74, A75, A75n, B79, B80',
      buckets: [{ n: 'Anterior neck', items: ['Thyroid and cricoid cartilage', 'Trachea', 'Numerous muscles and nerves', 'Internal and external carotid arteries', 'Internal and external jugular veins'] }, { n: 'Posterior neck', items: ['Vertebral arteries (beside the cervical vertebrae)'] }] },
    { k: 'q', ids: ['m5q5', 'm5q6', 'm5q7'] },

    { k: 'sec', h: 'Throat assessment' },
    { k: 'card', id: 'm5-assess', h: 'Throat patient assessment', src: 'A77, A77n, B81, B82',
      b: `<ul><li>Patients with <k>swallowing abnormalities or copious mucous production</k> should be placed in a position to <k>allow drainage</k>: <k>Lateral recumbent or recovery position</k>.</li>
      <li><k>Assessing stroke patients must include early recognition of airway threats</k>.</li>
      <li><k>For patients who cannot protect their airways and are at risk for aspiration into the lungs, intubation should be considered</k>.</li>
      <li>Consider <k>epiglottitis</k> if there are symptoms of: <k>Sore throat</k>, <k>Drooling</k>, <k>A forward-hanging head</k>.</li></ul>` },
    { k: 'think', q: 'A stroke patient drools and gurgles. Before anything fancy: what position, and why?', a: '<k>Lateral recumbent or recovery position</k> — swallowing abnormalities or copious mucous production need a position that <k>allows drainage</k>; aspiration pneumonia is life-threatening. If they cannot protect the airway, <k>intubation should be considered</k>.', src: 'A70n, A77, B82' },
    { k: 'q', ids: ['m5q8', 'm5q9', 'm5q10'] },

    { k: 'sec', h: 'Dentalgia and dental abscess' },
    { k: 'card', id: 'm5-dent', h: 'Dentalgia and dental abscess', src: 'A78, A78n, B84, B85', hl: true, ph: 'dental_abscess', cap: 'Facial swelling from a dental abscess (A78, B85)',
      b: `<k>Dentalgia (toothache)</k> <k>can be the start of a dental abscess</k>. B: <k>Cavity harbors bacteria</k>.
      <br><k>A dental abscess occurs when bacteria growth spreads directly from a cavity into the gums, facial tissue, bones, and/or neck</k>. <k>It may have to be drained surgically</k>.
      <br>B: <k>Pain relieved when ruptured</k> — it <k>Drains pus</k> and <k>Reduces swelling</k>.` },
    { k: 'card', id: 'm5-dentmx', h: 'Dental abscess: assessment & management', src: 'A79, A79n, B86', hl: true,
      b: `<ul><li>Infection may have become <k>systemic</k> if the patient has: <k>Fever</k>, <k>Chills</k>, <k>Nausea</k>, <k>Vomiting</k>.</li>
      <li><k>An abscess in the throat, neck, or under the tongue can affect the ability to breathe</k>.</li>
      <li><k>Prehospital treatment is aimed at relieving the symptoms</k>: <k>Drainage into the mouth should be rinsed with warm water</k> (B: <k>Rinse with warm water if ruptured</k>).</li>
      <li><k>Encourage transport</k>.</li></ul>` },
    { k: 'q', ids: ['m5q11', 'm5q12', 'm5q13'] },

    { k: 'sec', h: 'Diseases of oral soft tissue' },
    { k: 'card', id: 'm5-oral', h: 'Oral soft-tissue disease', src: 'A80, A80n, A81, B87, B88', hl: true,
      b: `<k>Can be root cause of other health problems</k>: <k>Gum disease has been linked to heart disease, stroke, diabetes, osteoporosis</k>, and B: <k>low-birth-weight babies</k>.
      <br>B: <k>Be aware that patients may be too embarrassed to discuss condition</k>; <k>Assess lumps and sores in mouth</k>. <k>Rule out urticaria and allergic reactions</k> when assessing mouth sores or lumps.` },
    { k: 'table', h: 'T6 · Common mouth disorders', src: 'A80, A80n, B87', hl: true, head: ['Disorder', 'Description'],
      rows: [['<k>Cold sores</k>', 'A: <k>Painful sores on the lips and around the mouth</k>'], ['<k>Canker sores</k>', 'A: <k>Shallow, painful ulcers in the mouth</k>'], ['<k>Oral candidiasis (thrush)</k>', '<k>Yeast infection that causes white patches in the mouth or on the oral mucosa</k>'], ['<k>Leukoplakia</k>', '<k>Causes excess cell growth in mouth, cheek, or gums</k>; <k>Presents as white patches</k>'], ['<k>Gingivitis</k> <span class="ar" lang="ar">(التهاب اللثة)</span>', 'A: <k>Red swollen gums</k>'], ['<k>Bad breath</k>', 'A: <k>Usually linked to plaque and poor oral hygiene</k>']] },
    { k: 'ix', type: 'match', id: 'm5-oralmatch', title: 'Mouth disorder → description', src: 'A80n, B87',
      pairs: [['Cold sores', 'Painful sores on the lips and around the mouth'], ['Canker sores', 'Shallow, painful ulcers in the mouth'], ['Thrush', 'Yeast infection causing white patches on the oral mucosa'], ['Leukoplakia', 'Excess cell growth in mouth, cheek, or gums'], ['Gingivitis', 'Red swollen gums'], ['Bad breath', 'Linked to plaque and poor oral hygiene']] },
    { k: 'q', ids: ['m5q14', 'm5q15'] },

    { k: 'sec', h: 'Oral candidiasis (thrush)' },
    { k: 'card', id: 'm5-thrush', h: 'Oral candidiasis (thrush)', src: 'A82, A82n, B89', hl: true, ph: 'thrush', cap: 'Creamy white lesions on the tongue (A82, B89)',
      b: `A condition in which <k>the fungus Candida albicans accumulates on the lining of the mouth</k>.
      <br><k>Creamy white lesions on the tongue and inner cheeks</k> that <k>May be painful and may bleed as they are rubbed or scraped</k>. B: lesions <k>Can spread to the roof of the mouth, gums, tonsils, or pharynx</k>.` },
    { k: 'card', id: 'm5-thrushmx', h: 'Thrush: who gets it & what to do', src: 'A83–A85, A83n–A85n, B90–B92', hl: true,
      b: `Most likely found in: <k>Babies</k> (B: <k>Infants</k>), <k>Patients with compromised immune systems</k>, <k>Patients who wear dentures</k>, <k>Patients who use inhaled corticosteroids</k>.
      <br>Additional symptoms: B: <k>Bleeding</k>; <k>Pain</k>; <k>Cracking and redness at the corners of the mouth</k>; <k>Loss of taste</k>; <k>Cottony feeling in the mouth</k>; in severe cases <k>lesions can move down the esophagus</k>, causing the <k>sensation that food is getting stuck in the throat</k> when swallowing.
      <br>Increased risk with a history of: <k>HIV/AIDS</k>, <k>Cancer</k>, <k>Diabetes</k>, <k>Vaginal yeast infections</k>.
      <br><k>Treat higher priorities</k>; <k>Make the patient comfortable</k> and <k>encourage follow-up with physician</k>; A: <k>Always use standard precautions</k>.` },
    { k: 'ix', type: 'sort', id: 'm5-thrushsort', title: 'Thrush: “most likely found in” or “increased-risk history”?', src: 'A83, A85, B90, B92',
      buckets: [{ n: 'Most likely found in', items: ['Babies (infants)', 'Compromised immune systems', 'Denture wearers', 'Inhaled corticosteroid users'] }, { n: 'History that raises risk', items: ['HIV/AIDS', 'Cancer', 'Diabetes', 'Vaginal yeast infections'] }] },
    { k: 'q', ids: ['m5q16', 'm5q17', 'm5q18', 'm5q19'] },

    { k: 'sec', h: 'Ludwig angina' },
    { k: 'card', id: 'm5-ludwig', h: 'Ludwig angina', src: 'A86, A86n, A87, B93, B94', hl: true,
      b: `<k>Type of cellulitis caused by bacteria from an infected tooth root or mouth injury</k>.
      <br><k>Occurs on the floor of the mouth under the tongue</k> (B slide: floor of mouth or under tongue). <k>Rapid swelling and airway obstruction</k>.
      <br>Physical exam: <k>Redness and swelling of the neck or under the chin</k>; <k>Tongue may be swollen</k>. <k>An airway through the nasal passages possibly needed</k>.
      <br>Symptoms: <k>Difficulty breathing</k>, <k>Difficulty swallowing</k>, <k>Neck pain</k>, <k>Neck swelling</k>, <k>Fever</k>, <k>Drooling</k>, <k>Altered speech sounds</k>.` },
    { k: 'card', id: 'm5-ludmx', h: 'Ludwig angina: management', src: 'A88, A88n, B94',
      b: `<ul><li><k>Prehospital treatment requires aggressive management of the airway in severe cases</k>.</li>
      <li>B: <k>Early treatment with steroids to reduce swelling</k>.</li>
      <li>A: <k>Contact medical control physician early on</k>; <k>Remain calm and organized</k>; <k>Attend to basic ABCs</k>.</li>
      <li><k>Pay particular attention to the condition and smells originating in the mouth</k>.</li></ul>` },
    { k: 'ix', type: 'case', id: 'm5-case1', title: 'Case: “I can’t swallow my spit”', src: 'A86–A88, B93, B94',
      intro: '34-year-old man, bad molar for two weeks. Since last night the area under his chin and the front of his neck are red, hard and swollen. He is drooling, his voice sounds strange, and he is sitting forward.',
      vitals: { HR: 118, BP: '136/84', RR: 26, SpO2: '94%', Temp: '39.1 °C' },
      steps: [
        { scene: 'Floor of the mouth is raised; the tongue looks swollen and pushed up.', q: 'Field impression?', o: [['Ludwig angina', true, 'Cellulitis from an infected tooth root/mouth injury on the floor of the mouth under the tongue; redness and swelling of neck/under chin; drooling, altered speech, fever.'], ['Simple dental abscess', false, 'This has spread to the floor of the mouth with neck swelling and airway threat — Ludwig angina.'], ['Tonsillitis', false, 'Tonsillitis shows red swollen tonsils with patches.'], ['TMJ disorder', false, 'TMJ: jaw pain, locking — no infection picture.']] },
        { scene: 'His breathing is getting harder; SpO₂ drifting down.', q: 'Priority?', o: [['Aggressive airway management (severe case) and contact medical control early', true, 'Prehospital treatment requires aggressive management of the airway in severe cases; contact medical control early; an airway through the nasal passages may be needed.'], ['Rinse his mouth with warm water and leave', false, 'Warm-water rinsing is for dental abscess drainage, not an airway threat.', { SpO2: '90%', RR: 30 }], ['Lay him flat to examine the mouth', false, 'Not in your notes — and flat worsens a swollen airway.', { SpO2: '89%' }]] },
        { scene: 'En route.', q: 'What else do your notes ask you to watch?', o: [['The condition and smells originating in the mouth; remain calm and organized; basic ABCs', true, 'Correct.'], ['Only his blood glucose', false, 'Not in your notes.']] }],
      end: 'B also lists early treatment with steroids to reduce swelling.' },
    { k: 'q', ids: ['m5q20', 'm5q21', 'm5q22'] },

    { k: 'sec', h: 'Temporomandibular joint disorders' },
    { k: 'card', id: 'm5-tmj', h: 'TMJ disorders', src: 'A104, A104n, A105, A105n, B111–B113',
      b: `<k>Temporomandibular joint (TMJ)</k>: where the <k>posterior condyle of the mandible articulates with the temporal bone</k>. A: it <k>Allows movement of the mandible</k> and <k>Allows a patient to talk, chew, and yawn</k>.
      <br>Causes: <k>Arthritis damage to the joint's cartilage</k>, <k>Jaw injury</k>, <k>Jaw muscle fatigue from grinding or clenching of the teeth</k>.
      <br>Symptoms: <k>Headache</k>, <k>Jaw pain</k>, <k>Aching around the ear</k>, <k>An uneven bite and/or painful bite</k>, <k>Difficulty chewing</k>, <k>Locking of the joint causing difficulty either opening or closing the mouth</k>.
      <br><k>Usually managed by the patient's physician or dentist</k>; B: <k>Pain medication for symptoms</k>, <k>Surgical interventions</k>.` },
    { k: 'fig', fig: 'tmj' },
    { k: 'q', ids: ['m5q23', 'm5q24', 'm5q25'] },
    { k: 'spell', terms: ['Dentalgia', 'Candidiasis', 'Leukoplakia', 'Glossopharyngeal'] },
    { k: 'sa', id: 'm5sa1' }, { k: 'sa', id: 'm5sa2' }, { k: 'sa', id: 'm5sa3' }, { k: 'sa', id: 'm5sa4' }, { k: 'sa', id: 'm5sa5' }, { k: 'sa', id: 'm5sa6' },
  ],

  lists: [
    { id: 'm5-throatdis', title: 'Specific throat disorders', src: 'A70n, B75', items: ['Vocal cord polyps and nodules', 'Contact ulcers', 'Vocal cord paralysis', 'Laryngoceles', 'Laryngeal papillomas', 'Cancer'], foils: ['Peritonsillar abscess', 'Epiglottitis', 'Ludwig angina'] },
    { id: 'm5-swallowcn', title: 'Cranial nerves that play a role in swallowing (per your notes)', flag: 'Standard references: V, VII, IX, X, XII.', src: 'A70n, B75', items: ['VI', 'VII', 'IX', 'XII'], foils: ['II', 'III', 'VIII'] },
    { id: 'm5-asp', title: 'Prehospital treatment of aspiration (A70n)', src: 'A70n', items: ['Maintaining a patent airway', 'Ensuring adequate breathing', 'Close monitoring of vital signs', 'Prompt transport for definitive care'], foils: ['Antibiotics on scene', 'Encouraging oral fluids'] },
    { id: 'm5-reflux', title: 'Esophageal reflux — symptoms', src: 'A71, B76', items: ['Burning sensation in the chest', 'Indigestion', 'Change in voice tone'], foils: ['Drooling', 'Stridor', 'Halos around lights'] },
    { id: 'm5-mouthcn', title: 'Nerves supplying the mouth and its structures', src: 'A73, B78', items: ['Hypoglossal', 'Glossopharyngeal', 'Trigeminal', 'Facial'], foils: ['Oculomotor', 'Optic', 'Abducens'] },
    { id: 'm5-teeth', title: 'Teeth labelled on the mouth figure', src: 'A72, B77', items: ['Molars', 'Premolars', 'Canine', 'Incisors'], foils: ['Wisdom crowns', 'Cuspids-only'] },
    { id: 'm5-tooth', title: 'Tooth cross-section labels', src: 'A72, B77', items: ['Enamel', 'Dentin', 'Periodontal membrane', 'Pulp with nerves and blood vessels', 'Root canal combining nerves and blood vessels', 'Crown', 'Root'], foils: ['Cochlea', 'Cricoid'] },
    { id: 'm5-glands', title: 'Salivary-gland figure labels', src: 'A73, B78', items: ['Parotid duct', 'Parotid gland', 'Masseter muscle', 'Submandibular duct', 'Submandibular gland', 'Sublingual gland'], foils: ['Lacrimal gland', 'Thyroid gland'] },
    { id: 'm5-antneck', title: 'Anterior part of the neck includes', src: 'A74, A75, B79, B80', items: ['Thyroid and cricoid cartilage', 'Trachea', 'Numerous muscles and nerves', 'Internal and external carotid arteries', 'Internal and external jugular veins'], foils: ['Vertebral arteries', 'Cervical vertebrae'] },
    { id: 'm5-neckfig', title: 'Anterior neck figure labels', src: 'A74, B79', items: ['Thyroid cartilage', 'Cricoid cartilage', 'Cricothyroid membrane', 'Trachea', 'Carotid arteries', 'Sternocleidomastoid muscle'], foils: ['Vertebral artery', 'Hyoid membrane'] },
    { id: 'm5-artfig', title: 'Neck arteries figure labels', src: 'A75, B80', items: ['Internal carotid', 'Carotid sinus', 'Vertebral', 'Subclavian', 'Facial', 'External carotid', 'Superior thyroid', 'Common carotid', 'Brachiocephalic'], foils: ['Retromandibular', 'Lingual vein'] },
    { id: 'm5-veinfig', title: 'Neck veins figure labels', src: 'A76, B81', items: ['Retromandibular', 'Internal jugular', 'External jugular', 'Subclavian', 'Right brachiocephalic', 'Facial', 'Lingual', 'Superior thyroid', 'Superior vena cava'], foils: ['Carotid sinus', 'Vertebral'] },
    { id: 'm5-thrassess', title: 'Throat patient assessment', src: 'A77, A77n, B82', items: ['Swallowing abnormalities/copious mucus: position to allow drainage', 'Lateral recumbent or recovery position', 'Stroke patients: early recognition of airway threats', 'Cannot protect airway and at risk for aspiration: consider intubation'], foils: ['Supine with head tilted back for all', 'Look in the mouth of every drooling child'] },
    { id: 'm5-epiconsider', title: 'Consider epiglottitis with symptoms of', src: 'A77, B82', items: ['Sore throat', 'Drooling', 'A forward-hanging head'], foils: ['Toothache', 'Jaw locking', 'Halos'] },
    { id: 'm5-systemic', title: 'Dental infection may be systemic if the patient has', src: 'A79n, B86', items: ['Fever', 'Chills', 'Nausea', 'Vomiting'], foils: ['Loss of taste', 'Jaw locking', 'Tinnitus'] },
    { id: 'm5-dentmx', title: 'Dental abscess — prehospital', src: 'A79, A79n, B86', items: ['Relieve the symptoms', 'Rinse drainage into the mouth with warm water', 'Encourage transport', 'Watch for an abscess affecting breathing (throat, neck, under the tongue)'], foils: ['Incise and drain on scene', 'Ice water rinse'] },
    { id: 'm5-gum', title: 'Gum disease has been linked to', src: 'A80n, B87', items: ['Heart disease', 'Stroke', 'Diabetes', 'Osteoporosis', 'Low-birth-weight babies'], foils: ['Glaucoma', 'Meniere disease', 'Sinusitis'] },
    { id: 'm5-oral', title: 'Common mouth disorders', src: 'A80, B87', items: ['Cold sores', 'Canker sores', 'Oral candidiasis (thrush)', 'Leukoplakia', 'Gingivitis', 'Bad breath'], foils: ['Ludwig angina', 'Laryngoceles', 'Tonsillitis'] },
    { id: 'm5-thrspread', title: 'Thrush lesions can spread to (B)', src: 'B89', items: ['Roof of the mouth', 'Gums', 'Tonsils', 'Pharynx'], foils: ['Larynx', 'Nasal septum', 'Middle ear'] },
    { id: 'm5-thrwho', title: 'Thrush — most likely found in', src: 'A83, B90', items: ['Babies', 'Patients with compromised immune systems', 'Patients who wear dentures', 'Patients who use inhaled corticosteroids'], foils: ['Contact lens wearers', 'Older adults with cerumen', 'Athletes'] },
    { id: 'm5-thrsx', title: 'Thrush — additional symptoms', src: 'A84, A84n, B91', items: ['Bleeding', 'Pain', 'Cracking and redness at the corners of the mouth', 'Loss of taste', 'Cottony feeling in the mouth', 'Sensation of food stuck in the throat'], foils: ['Muffled voice', 'Trismus with fever'] },
    { id: 'm5-thrrisk', title: 'Thrush — increased-risk history', src: 'A85, B92', items: ['HIV/AIDS', 'Cancer', 'Diabetes', 'Vaginal yeast infections'], foils: ['Hypertension', 'Glaucoma', 'Asthma without steroids'] },
    { id: 'm5-ludsx', title: 'Ludwig angina — symptoms', src: 'A87, B94', items: ['Difficulty breathing', 'Difficulty swallowing', 'Neck pain', 'Neck swelling', 'Fever', 'Drooling', 'Altered speech sounds'], foils: ['White patches on tonsils', 'Halos'] },
    { id: 'm5-ludmx', title: 'Ludwig angina — management', src: 'A88, A88n, B94', items: ['Aggressive management of the airway in severe cases', 'Early treatment with steroids to reduce swelling (B)', 'Contact medical control physician early on', 'Remain calm and organized', 'Attend to basic ABCs', 'Attention to the condition and smells from the mouth'], foils: ['Rinse with warm water and release'] },
    { id: 'm5-tmjcause', title: 'TMJ disorders — causes', src: 'A104, B111', items: ['Arthritis damage to the joint’s cartilage', 'Jaw injury', 'Jaw muscle fatigue from grinding or clenching of the teeth'], foils: ['Infected tooth root', 'Otitis media'] },
    { id: 'm5-tmjsx', title: 'TMJ disorders — symptoms', src: 'A105, B112', items: ['Headache', 'Jaw pain', 'Aching around the ear', 'An uneven bite and/or painful bite', 'Difficulty chewing', 'Locking of the joint'], foils: ['Drooling with fever', 'Tinnitus and vertigo'] },
    { id: 'm5-tmjmx', title: 'TMJ disorders — management', src: 'A105, B113', items: ['Usually managed by the patient’s physician or dentist', 'Pain medication for symptoms (B)', 'Surgical interventions (B)'], foils: ['Aggressive airway management', 'IV antibiotics'] },
  ],

  qs: [
    { id: 'm5q1', lv: 'R', src: 'A70n, B75', hl: true, s: 'Which is on your list of specific throat disorders?', o: ['Laryngoceles', 'Ludwig angina', 'Peritonsillar abscess', 'Epiglottitis'], w: 'Vocal cord polyps and nodules, contact ulcers, vocal cord paralysis, laryngoceles, laryngeal papillomas, cancer.', tw: 'Ludwig angina is a separate condition (floor of the mouth).' },
    { id: 'm5q2', lv: 'R', src: 'A70n, B75', hl: true, flag: 'Your notes say VI, VII, IX, XII; standard references say V, VII, IX, X, XII.', s: 'Per your notes, which cranial nerves play a role in swallowing?', o: ['VI, VII, IX, and XII', 'II, III, IV, and VI', 'I, II, VIII, and X', 'III, V, VIII, and XI'], w: 'Your notes: VI, VII, IX, and XII.', tw: 'II, III, IV, VI are the eye nerves.' },
    { id: 'm5q3', lv: 'U', src: 'A70n, B75', hl: true, s: 'Why do swallowing problems matter in throat patients?', o: ['Aspiration pneumonia is a life-threatening condition', 'They cause glaucoma', 'They always mean cancer', 'They cause epistaxis'], w: 'Swallowing problems exacerbate throat problems; aspiration pneumonia is life-threatening.', tw: 'Not in your notes.' },
    { id: 'm5q4', lv: 'R', src: 'A71, B76', hl: true, s: 'In esophageal reflux, the valve at the end of the esophagus:', o: ['Only partially closes or opens too much', 'Closes completely and permanently', 'Is absent from birth', 'Blocks the trachea'], w: 'Valve only partially closes or opens too much → burning in the chest, indigestion, change in voice tone; can cause a precancerous condition.', tw: 'Blocking the trachea describes epiglottitis.' },
    { id: 'm5q5', lv: 'R', src: 'A73, B78', hl: true, s: 'Which nerves supply the mouth and its structures?', o: ['Hypoglossal, glossopharyngeal, trigeminal, and facial', 'Optic, oculomotor, trochlear, and abducens', 'Vagus, accessory, and phrenic', 'Olfactory and vestibulocochlear'], w: 'Hypoglossal, glossopharyngeal, trigeminal, facial.', tw: 'Those are the eye nerves.' },
    { id: 'm5q6', lv: 'R', src: 'A75n, B80', s: 'The vertebral arteries run:', o: ['Laterally to the cervical vertebrae in the posterior neck', 'In front of the trachea', 'Inside the carotid sheath', 'Along the jaw to the face'], w: 'Vertebral arteries run laterally to the cervical vertebrae in the posterior part of the neck.', tw: 'Nothing on the anterior list runs in front of the trachea like that.' },
    { id: 'm5q7', lv: 'R', src: 'A74, B79', s: 'On the anterior-neck figure, which membrane lies between the thyroid and cricoid cartilages?', o: ['Cricothyroid membrane', 'Tympanic membrane', 'Periodontal membrane', 'Hyoid membrane'], w: 'Cricothyroid membrane.', tw: 'Periodontal membrane is in the tooth figure.' },
    { id: 'm5q8', lv: 'A', src: 'A77, B82', s: 'A patient with copious mucous production can’t clear it. Position?', o: ['Lateral recumbent or recovery position', 'Supine with head tilted back', 'Fowler position', 'Trendelenburg'], w: 'Lateral recumbent or recovery position to allow drainage.', tw: 'Fowler position is for rhinitis.' },
    { id: 'm5q9', lv: 'R', src: 'A77, B82', s: 'Consider epiglottitis when you find:', o: ['Sore throat, drooling, and a forward-hanging head', 'Jaw locking and headache', 'Facial pressure and toothache', 'Creamy white tongue lesions'], w: 'Sore throat, drooling, forward-hanging head.', tw: 'Facial pressure + toothache = sinusitis.' },
    { id: 'm5q10', lv: 'U', src: 'A77n, B82', s: 'A patient cannot protect the airway and is at risk of aspiration. Your notes say:', o: ['Intubation should be considered', 'Give oral fluids', 'Rinse with warm water', 'Encourage coughing only'], w: 'For patients who cannot protect their airways and are at risk for aspiration, intubation should be considered.', tw: 'Not in your notes.' },
    { id: 'm5q11', lv: 'R', src: 'A78, B84', hl: true, s: 'Dentalgia means:', o: ['Toothache', 'Gum inflammation', 'Jaw locking', 'Loss of taste'], w: 'Dentalgia = toothache; it can be the start of a dental abscess.', tw: 'Gum inflammation = gingivitis.' },
    { id: 'm5q12', lv: 'U', src: 'A79n, B86', hl: true, s: 'Which findings suggest a dental infection has become systemic?', o: ['Fever, chills, nausea, vomiting', 'Bad breath and plaque', 'Jaw clicking', 'Cracked corners of the mouth'], w: 'Fever, chills, nausea, vomiting.', tw: 'Bad breath = plaque and poor hygiene.' },
    { id: 'm5q13', lv: 'A', src: 'A79n, B86', s: 'A dental abscess has ruptured and is draining into the mouth. Prehospital action?', o: ['Rinse with warm water; relieve symptoms; encourage transport', 'Incise it further', 'Pack it with gauze and release', 'Rinse with cold antiseptic only'], w: 'Drainage into the mouth should be rinsed with warm water; encourage transport.', tw: 'Not in your notes.' },
    { id: 'm5q14', lv: 'R', src: 'A80n, B87', hl: true, s: 'Leukoplakia:', o: ['Causes excess cell growth in mouth, cheek, or gums and presents as white patches', 'Is red swollen gums', 'Is shallow painful ulcers', 'Is painful sores on the lips'], w: 'Leukoplakia = excess cell growth, white patches.', tw: 'Red swollen gums = gingivitis.' },
    { id: 'm5q15', lv: 'A', src: 'A81, B88', s: 'When assessing mouth sores or lumps, what must you rule out?', o: ['Urticaria and allergic reactions', 'Glaucoma', 'Meniere disease', 'Nasal fracture'], w: 'Rule out urticaria and allergic reactions (B: patients may be embarrassed).', tw: 'Unrelated.' },
    { id: 'm5q16', lv: 'R', src: 'A82, B89', hl: true, s: 'Thrush is caused by:', o: ['The fungus Candida albicans', 'Staphylococcus aureus', 'Haemophilus influenzae type b', 'Streptococcus only'], w: 'Candida albicans accumulates on the lining of the mouth.', tw: 'Staph aureus causes tracheitis.' },
    { id: 'm5q17', lv: 'R', src: 'A82n, B89', hl: true, img: 'ph_thrush', s: 'Creamy white lesions that may bleed when scraped, as shown, suggest:', o: ['Oral candidiasis (thrush)', 'Leukoplakia', 'Canker sores', 'Ludwig angina'], w: 'Thrush: creamy white lesions on tongue and cheeks; may be painful and bleed when rubbed or scraped.', tw: 'Leukoplakia is white patches from excess cell growth — not scrape-off lesions in your notes.' },
    { id: 'm5q18', lv: 'U', src: 'A83, B90', s: 'Which patient group is listed as most likely to have thrush?', o: ['Patients who use inhaled corticosteroids', 'Contact lens wearers', 'Patients with nosebleeds', 'Young athletes'], w: 'Babies, immunocompromised, denture wearers, inhaled corticosteroid users.', tw: 'Not in your notes.' },
    { id: 'm5q19', lv: 'R', src: 'A84n, B91', hl: true, s: 'In severe thrush, lesions moving down the esophagus cause:', o: ['A sensation that food is getting stuck in the throat', 'Stridor', 'Battle sign', 'Halos around lights'], w: 'Lesions can move down the esophagus → food-stuck sensation when swallowing.', tw: 'Stridor is an airway sign (epiglottitis, tracheitis).' },
    { id: 'm5q20', lv: 'R', src: 'A86, B93', s: 'Ludwig angina is a type of cellulitis caused by bacteria from:', o: ['An infected tooth root or mouth injury', 'The middle ear', 'An infected sinus', 'The conjunctiva'], w: 'Infected tooth root or mouth injury; floor of the mouth under the tongue.', tw: 'Sinus infection is an orbital cellulitis risk.' },
    { id: 'm5q21', lv: 'A', src: 'A88, B94', s: 'Severe Ludwig angina — prehospital treatment requires:', o: ['Aggressive management of the airway', 'Warm compresses', 'Fowler position and transport only', 'Antiemetic'], w: 'Aggressive airway management in severe cases; contact medical control early; ABCs.', tw: 'Fowler position is for rhinitis.' },
    { id: 'm5q22', lv: 'R', src: 'B94', only: 'B', s: 'B lists which early treatment for Ludwig angina?', o: ['Steroids to reduce swelling', 'Diuretics', 'Antivertigo medicine', 'Saline rinse and decongestant'], w: 'Early treatment with steroids to reduce swelling.', tw: 'Saline rinse is for sinusitis.' },
    { id: 'm5q23', lv: 'R', src: 'A104n, B111', s: 'The TMJ is where:', o: ['The posterior condyle of the mandible articulates with the temporal bone', 'The maxilla meets the frontal bone', 'The hyoid meets the trachea', 'The ossicles meet the eardrum'], w: 'Posterior condyle of the mandible + temporal bone.', tw: 'Ossicles are middle-ear bones.' },
    { id: 'm5q24', lv: 'R', src: 'A104, B111', s: 'A listed cause of TMJ disorders:', o: ['Jaw muscle fatigue from grinding or clenching of the teeth', 'Infected tooth root', 'Candida albicans', 'Blast injury'], w: 'Arthritis damage to cartilage, jaw injury, grinding/clenching fatigue.', tw: 'Infected tooth root causes Ludwig angina.' },
    { id: 'm5q25', lv: 'R', src: 'A105, B113', s: 'TMJ disorders are usually managed by:', o: ['The patient’s physician or dentist', 'Emergency airway management', 'An ophthalmologist', 'Diuretics'], w: 'Usually managed by the patient’s physician or dentist (B: pain medication, surgical interventions).', tw: 'No airway emergency in TMJ.' },
  ],

  sa: [
    { id: 'm5sa1', src: 'A70n, B75', q: 'List the six specific throat disorders.', keys: ['Vocal cord polyps and nodules', 'Contact ulcers', 'Vocal cord paralysis', 'Laryngoceles', 'Laryngeal papillomas', 'Cancer'], model: 'Vocal cord polyps and nodules; contact ulcers; vocal cord paralysis; laryngoceles; laryngeal papillomas; cancer.' },
    { id: 'm5sa2', src: 'A73, A74, A75, B78–B80', q: 'Name the nerves supplying the mouth and the contents of the anterior neck.', keys: ['Hypoglossal, glossopharyngeal, trigeminal, facial', 'Thyroid and cricoid cartilage, trachea', 'Muscles and nerves', 'Internal/external carotid arteries and jugular veins'], model: 'Mouth: hypoglossal, glossopharyngeal, trigeminal, facial nerves. Anterior neck: thyroid and cricoid cartilage, trachea, numerous muscles and nerves, major vessels (internal and external carotid arteries, internal and external jugular veins). Vertebral arteries run in the posterior neck.' },
    { id: 'm5sa3', src: 'A78, A79, B84–B86', q: 'Dental abscess: how it forms, systemic signs, and prehospital care.', keys: ['Bacteria spread from a cavity into gums, facial tissue, bones and/or neck', 'Systemic: fever, chills, nausea, vomiting', 'Abscess in throat/neck/under tongue can affect breathing', 'Relieve symptoms; warm water rinse; encourage transport'], model: 'Bacteria growth spreads directly from a cavity into the gums, facial tissue, bones and/or neck (may need surgical drainage). Systemic if fever, chills, nausea, vomiting. Abscess in the throat, neck or under the tongue can affect breathing. Relieve symptoms, rinse drainage with warm water, encourage transport.' },
    { id: 'm5sa4', src: 'A80, A80n, B87', q: 'List the six common mouth disorders with a description of each.', keys: ['Cold sores — painful sores on lips/around mouth', 'Canker sores — shallow painful ulcers', 'Thrush — yeast infection, white patches', 'Leukoplakia — excess cell growth, white patches', 'Gingivitis — red swollen gums', 'Bad breath — plaque, poor hygiene'], model: 'Cold sores (painful sores on and around the lips); canker sores (shallow, painful ulcers); oral candidiasis/thrush (yeast infection, white patches); leukoplakia (excess cell growth, white patches); gingivitis (red swollen gums); bad breath (plaque and poor oral hygiene).' },
    { id: 'm5sa5', src: 'A82–A85, B89–B92', q: 'Thrush: cause, appearance, who gets it, risk history, and management.', keys: ['Candida albicans', 'Creamy white lesions that may bleed when scraped', 'Babies, immunocompromised, dentures, inhaled corticosteroids', 'HIV/AIDS, cancer, diabetes, vaginal yeast infections', 'Treat higher priorities, comfort, follow-up, standard precautions'], model: 'Candida albicans on the mouth lining → creamy white lesions on tongue/cheeks, painful, bleed if scraped (may spread to roof of mouth, gums, tonsils, pharynx). Most likely in babies, immunocompromised, denture wearers, inhaled-corticosteroid users. Risk history: HIV/AIDS, cancer, diabetes, vaginal yeast infections. Treat higher priorities, make comfortable, encourage follow-up, standard precautions.' },
    { id: 'm5sa6', src: 'A86–A88, B93, B94', q: 'Ludwig angina: definition, symptoms, and prehospital management.', keys: ['Cellulitis from infected tooth root or mouth injury, floor of mouth', 'Rapid swelling and airway obstruction', 'Difficulty breathing/swallowing, neck pain/swelling, fever, drooling, altered speech', 'Aggressive airway management; contact medical control early; ABCs'], model: 'Cellulitis from bacteria of an infected tooth root or mouth injury, on the floor of the mouth under the tongue; rapid swelling and airway obstruction; red swollen neck/under chin. Symptoms: difficulty breathing and swallowing, neck pain and swelling, fever, drooling, altered speech. Aggressive airway management in severe cases (nasal airway may be needed), contact medical control early, remain calm, ABCs, watch smells from the mouth; B: early steroids.' },
  ],

  nums: [
    { v: 'VI, VII, IX, and XII', q: 'Cranial nerves that play a role in swallowing (per your notes)?', d: ['II, III, IV, and VI', 'I, V, VIII, and X', 'III, IV, VI, and XI'], src: 'A70n, B75', flag: 'Standard: V, VII, IX, X, XII' },
    { v: '6', q: 'How many specific throat disorders are listed?', d: ['4', '5', '8'], src: 'A70n, B75' },
    { v: '4', q: 'How many nerves supply the mouth and its structures?', d: ['2', '3', '6'], src: 'A73, B78' },
    { v: '6', q: 'How many common mouth disorders are listed?', d: ['4', '5', '8'], src: 'A80, B87' },
  ],

  spell: [
    { t: 'Dentalgia', hint: 'Toothache.', ar: 'ألم الأسنان', src: 'B84 ✍' },
    { t: 'Candidiasis', hint: 'Oral ___ = thrush.', ar: 'داء المبيضات', src: 'A82, B89' },
    { t: 'Leukoplakia', hint: 'Excess cell growth presenting as white patches.', ar: 'الطلاوة البيضاء', src: 'A80n, B87' },
    { t: 'Glossopharyngeal', hint: 'One of the four nerves supplying the mouth (CN IX).', ar: 'اللساني البلعومي', src: 'A73, B78' },
    { t: 'Gingivitis', hint: 'Red swollen gums.', ar: 'التهاب اللثة', src: 'A80n, B87 ✍' },
    { t: 'Temporomandibular', hint: 'The joint where the mandible meets the temporal bone.', ar: 'الصدغي الفكي', src: 'A104, B111' },
  ],

  flash: [
    ['Swallowing cranial nerves (your notes)', 'VI, VII, IX, and XII. ⚑ standard: V, VII, IX, X, XII.', 'A70n, B75'],
    ['Esophageal reflux: 3 symptoms + 1 risk', 'Burning in the chest, indigestion, change in voice tone; can cause a precancerous condition.', 'A71, B76'],
    ['Four nerves of the mouth', 'Hypoglossal, glossopharyngeal, trigeminal, facial.', 'A73, B78'],
    ['Drooling patient with swallowing problems: position', 'Lateral recumbent or recovery position (allow drainage).', 'A77, B82'],
    ['Dental abscess: systemic signs', 'Fever, chills, nausea, vomiting.', 'A79n, B86'],
    ['Thrush: 4 “most likely” groups', 'Babies, immunocompromised, denture wearers, inhaled corticosteroid users.', 'A83, B90'],
    ['Thrush: 4 risk histories', 'HIV/AIDS, cancer, diabetes, vaginal yeast infections.', 'A85, B92'],
    ['Ludwig angina: where and the danger', 'Floor of the mouth under the tongue; rapid swelling and airway obstruction → aggressive airway management.', 'A86, A88, B93, B94'],
    ['TMJ: 3 causes', 'Arthritis damage to cartilage; jaw injury; jaw-muscle fatigue from grinding/clenching.', 'A104, B111'],
  ],

  ents: [
    { n: 'Esophageal reflux', ty: 'Condition', src: 'A71, B76', f: { Definition: 'Valve at the end of the esophagus only partially closes or opens too much', Symptoms: 'Burning sensation in the chest, indigestion, change in voice tone', Danger: 'Can cause a precancerous condition' } },
    { n: 'Aspiration pneumonia', ty: 'Condition', src: 'A70n, B75', f: { Definition: 'Life-threatening complication of swallowing problems', Management: 'A: patent airway, adequate breathing, close vital-sign monitoring, prompt transport' } },
    { n: 'Dental abscess', ty: 'Condition', src: 'A78, A79, B84–B86', f: { Definition: 'Bacteria spread from a cavity into gums, facial tissue, bones and/or neck; toothache (dentalgia) can be the start', Symptoms: 'Systemic if fever, chills, nausea, vomiting; may affect breathing', Management: 'Relieve symptoms; warm water rinse; encourage transport; may need surgical drainage' } },
    { n: 'Oral candidiasis (thrush)', ty: 'Condition', src: 'A82–A85, B89–B92', f: { Definition: 'Candida albicans accumulates on the mouth lining', Who: 'Babies, immunocompromised, dentures, inhaled corticosteroids; risk: HIV/AIDS, cancer, diabetes, vaginal yeast infections', Symptoms: 'Creamy white lesions; bleeding, pain, cracked corners, loss of taste, cottony mouth, food-stuck sensation', Management: 'Treat priorities, comfort, follow-up, standard precautions' } },
    { n: 'Leukoplakia', ty: 'Condition', src: 'A80n, B87', f: { Definition: 'Excess cell growth in mouth, cheek, or gums', Signs: 'White patches' } },
    { n: 'Gingivitis', ty: 'Condition', src: 'A80n, B87', f: { Definition: 'Red swollen gums', Danger: 'Gum disease linked to heart disease, stroke, diabetes, osteoporosis, low-birth-weight babies' } },
    { n: 'Ludwig angina', ty: 'Condition', src: 'A86–A88, B93, B94', f: { Definition: 'Cellulitis from an infected tooth root or mouth injury, floor of the mouth under the tongue', Symptoms: 'Difficulty breathing/swallowing, neck pain/swelling, fever, drooling, altered speech; swollen tongue', Management: 'Aggressive airway management (severe), nasal airway may be needed, medical control early, ABCs; B: early steroids' } },
    { n: 'TMJ disorders', ty: 'Condition', src: 'A104, A105, B111–B113', f: { Definition: 'Disorders of the joint between the mandibular condyle and the temporal bone', 'Cause / mechanism': 'Arthritis damage, jaw injury, grinding/clenching fatigue', Symptoms: 'Headache, jaw pain, aching around the ear, uneven/painful bite, difficulty chewing, locking', Management: 'Physician or dentist; pain medication; surgery (B)' } },
    { n: 'Cricothyroid membrane', ty: 'Structure', src: 'A74, B79', f: { Where: 'Between the thyroid and cricoid cartilages (anterior neck figure)' } },
  ],

  hooks: [
    ['Mouth nerves: “Hungry Girls Try Food”', 'Hypoglossal, Glossopharyngeal, Trigeminal, Facial.'],
    ['Thrush: “Babies, Broken immunity, Bridges (dentures), Breathers (inhaled steroids)”', 'The four groups most likely to have thrush.'],
    ['Ludwig = “Low floor, high danger”', 'Floor of the mouth → swelling pushes the tongue up → airway obstruction.'],
    ['TMJ causes: “Arthritis, Accident, Anxious grinding”', 'Cartilage damage, jaw injury, clenching/grinding fatigue.'],
  ],

  arSum: `<ul>
  <li>اضطرابات البلعوم والحنجرة: التهابات حادة ومزمنة أو نموات غير طبيعية — vocal cord polyps and nodules، contact ulcers، vocal cord paralysis، laryngoceles، laryngeal papillomas، cancer. التهابات الحلق شائعة عند الأطفال، ومشاكل البلع تزيدها. حسب ملفاتك الأعصاب <b>VI, VII, IX, XII</b> مسؤولة عن البلع (⚑ المراجع: V, VII, IX, X, XII). <b>Aspiration pneumonia</b> مهددة للحياة.</li>
  <li><b>Esophageal reflux</b>: الصمام لا ينغلق جيداً أو ينفتح أكثر — حرقة في الصدر، <b>عسر هضم</b>، تغير نبرة الصوت، وقد يسبب حالة ما قبل سرطانية.</li>
  <li>الفحص يبدأ من الأسنان. أعصاب الفم: hypoglossal, glossopharyngeal, trigeminal, facial. الرقبة الأمامية: الغضروف الدرقي والحلقي، القصبة، العضلات والأعصاب، الشرايين السباتية والأوردة الوداجية؛ الشرايين الفقرية في الخلف.</li>
  <li>التقييم: صعوبة البلع أو كثرة المخاط ← وضعية <b>recovery</b>؛ مرضى الجلطة: انتبه للمجرى الهوائي؛ من لا يحمي مجراه ← فكّر في intubation؛ فكّر في <b>epiglottitis</b> مع ألم الحلق، سيلان اللعاب، والرأس المائل للأمام.</li>
  <li><b>Dentalgia</b> قد تكون بداية <b>dental abscess</b>: البكتيريا تنتشر من التسوس للثة والوجه والعظم والرقبة. علامات انتشار: حرارة، قشعريرة، غثيان، قيء. خراج الحلق أو تحت اللسان يهدد التنفس. اشطف بماء دافئ وشجع النقل.</li>
  <li>أمراض الفم: cold sores، canker sores، thrush، leukoplakia، <b>gingivitis</b> (التهاب اللثة)، bad breath. أمراض اللثة مرتبطة بالقلب والجلطة والسكري وهشاشة العظام وانخفاض وزن المواليد. استبعد urticaria والحساسية.</li>
  <li><b>Thrush</b>: فطر Candida albicans — بقع بيضاء كريمية تنزف عند الحك. الأكثر عرضة: الرضع، ضعيفو المناعة، أصحاب الأطقم، مستخدمو الكورتيزون المستنشق؛ تاريخ HIV/AIDS، سرطان، سكري، فطريات مهبلية.</li>
  <li><b>Ludwig angina</b>: التهاب نسيج من جذر سن ملتهب في أرضية الفم تحت اللسان — تورم سريع وانسداد مجرى الهواء؛ صعوبة تنفس وبلع، سيلان لعاب، تغير الكلام. إدارة مجرى هواء عدوانية، اتصل بالطبيب مبكراً، و steroids مبكراً (B).</li>
  <li><b>TMJ</b>: مفصل الفك مع العظم الصدغي. الأسباب: التهاب المفاصل، إصابة الفك، الطحن والضغط على الأسنان. الأعراض: صداع، ألم الفك وحول الأذن، عضة غير متساوية، صعوبة المضغ، قفل المفصل. يعالجه الطبيب أو طبيب الأسنان.</li></ul>`,
});
