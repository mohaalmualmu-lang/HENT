/* Module 6 — Throat II: airway-threatening infections (A89–A103, B95–B110) */
MOD({
  id: 'm6', n: 6, title: 'Throat II — Airway-threatening infections', sub: 'Epiglottitis, laryngitis, tracheitis, tonsillitis, pharyngitis and peritonsillar abscess — and how to tell them apart.',
  ar: 'الحلق ٢: الالتهابات المهددة لمجرى الهواء', refs: 'A89–A103 · B95–B110',
  steps: [
    { k: 'sec', h: 'Epiglottitis' },
    { k: 'card', id: 'm6-epi', h: 'Epiglottitis', src: 'A89, A89n, B95', hl: true,
      flag: 'Both files call Haemophilus influenzae type b a “virus”. It is a bacterium (Hib). For the exam, learn the sentence as written.',
      b: `<k>Inflammation of the epiglottis</k> — it <k>Blocks the trachea and obstructs the airway</k>.
      <br><k>Often result of the Haemophilus influenzae type b virus</k>; B adds: <k>in unvaccinated adults</k>, and the slide lists the <k>Hib vaccine</k>.` },
    { k: 'card', id: 'm6-episx', h: 'Epiglottitis: symptoms and signs', src: 'A90, A90n, B96', hl: true,
      b: `Symptoms: <k>Fever</k>, <k>Sore throat</k>, <k>Painful swallowing</k>, <k>Stridor</k>, <k>Respiratory distress</k>.
      <br>Signs: <k>Patient will look sick and anxious</k>; will <k>sit upright in the classic tripod position or in the sniffing position</k>; <k>Patient may be drooling</k>; <k>Work of breathing is increased</k>; <k>Pallor or cyanosis may be evident</k>.` },
    { k: 'ix', type: 'sort', id: 'm6-epissort', title: 'Epiglottitis: symptom or sign?', src: 'A90, B96',
      buckets: [{ n: 'Symptoms', items: ['Fever', 'Sore throat', 'Painful swallowing', 'Stridor', 'Respiratory distress'] }, { n: 'Signs', items: ['Looks sick and anxious', 'Tripod or sniffing position', 'Drooling', 'Increased work of breathing', 'Pallor or cyanosis'] }] },
    { k: 'card', id: 'm6-epimx', h: 'Epiglottitis: management', src: 'A91, A91n, B97', hl: true,
      b: `<k>Transport to an appropriate hospital while maintaining the airway</k>:
      <ol><li><k>Minimize on-scene time</k>.</li><li><k>Do not attempt procedures that might agitate the patient</k>.</li><li><k>Do not attempt to look in the mouth</k>.</li><li><k>Alert receiving personnel of suspected diagnosis and patient's condition</k>.</li></ol>` },
    { k: 'ix', type: 'epiglottitis', id: 'm6-episim' },
    { k: 'q', ids: ['m6q1', 'm6q2', 'm6q3', 'm6q4', 'm6q5'] },

    { k: 'sec', h: 'Laryngitis' },
    { k: 'card', id: 'm6-lar', h: 'Laryngitis', src: 'A92, A92n, A93, A93n, B98, B99', hl: true,
      b: `<k>Swelling and inflammation of larynx associated with hoarseness or loss of voice</k> <span class="ar" lang="ar">(بحة)</span>. <k>Can be the result of overuse</k>. <k>Most common form caused by a virus</k>.
      <br>Can also be caused by: <k>Pneumonia</k>, <k>Irritants</k>, <k>Chemicals</k>, <k>Gastroesophageal reflux disease</k>, <k>Bronchitis</k>, <k>Allergies</k>, <k>Bacterial infections</k>.
      <br>Symptoms: <k>Fever</k>, <k>Hoarseness</k>, <k>Swollen lymph nodes or glands in the neck</k>.
      <br><k>Obtain a good history to rule out evolving upper airway obstruction or an allergic reaction</k>. <k>Consider fracture of the hyoid bone</k>. <k>Have the patient follow up with a physician</k>.` },
    { k: 'q', ids: ['m6q6', 'm6q7', 'm6q8'] },

    { k: 'sec', h: 'Tracheitis' },
    { k: 'card', id: 'm6-trach', h: 'Tracheitis', src: 'A94, A94n, A95, A95n, B100, B101', hl: true,
      b: `<k>Bacterial infection of the trachea caused by Staphylococcus aureus</k>. <k>Frequently occurs in young children following a viral upper respiratory infection</k>. <k>The trachea is easily blocked by swelling</k>; <k>It can be a life-threatening condition</k>.
      <br>Symptoms: <k>Deep croup-like cough</k>, <k>Difficulty breathing</k>, <k>High fever</k>, <k>High-pitched stridor with breathing</k>.
      <br>Patients may exhibit <k>Tripod positioning</k> and <k>Intercostal retractions</k>; it <k>Can proceed from respiratory distress to respiratory failure if not addressed</k>.` },
    { k: 'card', id: 'm6-trachmx', h: 'Tracheitis: supportive prehospital care', src: 'A96, A96n, B102', hl: true,
      b: `<ol><li><k>Minimize stress to the patient</k>.</li><li><k>Administer 100% oxygen</k>.</li><li><k>Use pulse oximetry</k>.</li><li><k>Monitor vital signs</k>.</li><li><k>Be prepared for difficult intubation</k> — A: <k>Have the correct size ET tube as well as the next smaller size available</k>.</li><li><k>Transport promptly</k> to an appropriate facility.</li></ol>` },
    { k: 'ix', type: 'triage', id: 'm6-trachprep', title: 'Tracheitis: prepare for the airway', src: 'A96, A96n, B102',
      cards: [
        { s: 'You are getting ready for a possible difficult intubation in a 4-year-old with tracheitis. Which tubes do you lay out?', o: ['The correct size ET tube and the next smaller size', 'Only the correct size', 'The correct size and the next larger size', 'Only a nasopharyngeal airway'], w: 'Have the correct size ET tube as well as the next smaller size available — the trachea is easily blocked by swelling.' },
        { s: 'Oxygen for the same child?', o: ['Administer 100% oxygen', 'Room air to avoid upsetting him', 'Low-flow 2 L only', 'Only if SpO₂ falls below 80%'], w: 'Administer 100% oxygen and use pulse oximetry.' },
        { s: 'The child is frightened and crying.', o: ['Minimize stress to the patient', 'Separate the child from the parent', 'Examine the throat with a tongue blade', 'Lie him flat'], w: 'Minimize stress to the patient.' },
        { s: 'Intercostal retractions are getting worse.', o: ['Transport promptly — it can progress from respiratory distress to failure', 'Wait on scene for improvement', 'Give a saline rinse', 'Encourage coughing and release'], w: 'Can proceed from respiratory distress to respiratory failure if not addressed; transport promptly.' }] },
    { k: 'q', ids: ['m6q9', 'm6q10', 'm6q11', 'm6q12'] },

    { k: 'sec', h: 'Tonsillitis' },
    { k: 'card', id: 'm6-tons', h: 'Tonsillitis', src: 'A97, A97n, A98, A98n, B103–B105', hl: true, ph: 'tonsillitis', cap: 'Tonsillitis — red, swollen tonsils with patches (A97, B103)',
      b: `<k>Swelling and inflammation of the tonsils</k> — A: tonsils are <k>oval-shaped pads of tissue at the back of the throat</k>. <k>Usually caused by viral infections</k>, <k>but can also be caused by bacteria</k>.
      <br>Symptoms: <k>Swollen tonsils</k>, <k>Sore throat</k>, <k>Difficulty swallowing</k>.
      <br>Patients present with: <k>Red, swollen tonsils</k>; <k>White or yellow coating or patches on the tonsils</k>; <k>Fever</k>; <k>Sore throat</k>; and one or more of: <k>Pain when swallowing</k>, <k>Enlarged or tender lymph nodes in the neck</k>, <k>Bad breath</k>, <k>Headache</k>, <k>Stiff neck</k>, <k>Drooling</k>.
      <br><k>Transport for further evaluation</k> (B: <k>Transport to ED for evaluation</k>).` },
    { k: 'q', ids: ['m6q13', 'm6q14', 'm6q15'] },

    { k: 'sec', h: 'Pharyngitis' },
    { k: 'card', id: 'm6-phar', h: 'Pharyngitis', src: 'A99, A99n, A100, A100n, B106, B107', hl: true, ph: 'pharyngitis', cap: 'Pharyngitis — red, inflamed pharynx (A99, B106)',
      flag: 'Both files: pharyngitis is “often due to a rapid onset of sore throat <b>without</b> discomfort or pain with swallowing”. Standard references describe painful swallowing as typical. Learn the sentence as written.',
      b: `<k>Inflammation of the pharynx</k>. <k>Often due to a rapid onset of sore throat without discomfort or pain with swallowing</k>.
      <br>Symptoms: <k>Fever</k>, <k>Pharyngeal erythema</k>, <k>Headache</k>, <k>Purulent, patchy yellow, gray, or white exudate</k>, <k>Nasal congestion</k>, <k>Hoarseness</k>, <k>Cough</k>, <k>Ulcers on the soft palate</k>.
      <br><k>Treatment involves follow-up with the emergency department</k>. <k>A major prehospital concern is assessment for partial airway obstruction</k> (B slide: <k>Assess for airway obstruction</k>).` },
    { k: 'q', ids: ['m6q16', 'm6q17', 'm6q18'] },

    { k: 'sec', h: 'Peritonsillar abscess' },
    { k: 'card', id: 'm6-pta', h: 'Peritonsillar abscess', src: 'A101–A103, A101n–A103n, B108–B110', hl: true, ph: 'peritonsillar', cap: 'Peritonsillar abscess (A101, B108)',
      b: `<k>Collection of infected material around the tonsils</k>; a <k>Complication of tonsillitis</k> — B: <k>From bacterial infection</k>, <k>made rare thanks to use of antibiotics</k>.
      <br><k>One or both tonsils are infected</k>; <k>Roof of the mouth and neck or chest may be infected</k>.
      <br>Patient may have: <k>Chills</k>, <k>Difficulty opening the mouth</k>, <k>Pain with opening the mouth</k>, <k>Facial swelling</k>, <k>Fever</k>, <k>Drooling or inability to swallow saliva</k>, <k>Headache</k>, <k>Muffled voice</k>, <k>Sore throat</k>, <k>Tender glands of the jaw and throat</k>.
      <br><k>Treatment includes antibiotics and draining the abscess</k>; <k>May include tonsillectomy</k>; <k>Hospital transport</k>. A: <k>In some cases, condition may be life threatening</k>.` },
    { k: 'ix', type: 'compare', id: 'm6-throatcmp', title: 'Tonsillitis, pharyngitis or peritonsillar abscess?', src: 'A97, A99, A101, B103, B106, B108',
      items: [{ ph: 'tonsillitis', n: 'Tonsillitis', notice: 'Red, swollen tonsils with white or yellow coating or patches.' }, { ph: 'pharyngitis', n: 'Pharyngitis', notice: 'Red, inflamed pharynx (pharyngeal erythema).' }, { ph: 'peritonsillar', n: 'Peritonsillar abscess', notice: 'A swollen collection of infected material around a tonsil (1.5× magnified).' }] },
    { k: 'q', ids: ['m6q19', 'm6q20', 'm6q21', 'm6q22'] },

    { k: 'sec', h: 'Which sore throat is it?' },
    { k: 'ix', type: 'triage', id: 'm6-which', title: 'Which one is it?', src: 'A89–A103, B95–B110', how: 'One presentation per card. Pick the condition your notes describe.',
      cards: [
        { s: 'Unvaccinated adult, fever, painful swallowing, stridor, sitting in the sniffing position, drooling.', o: ['Epiglottitis', 'Laryngitis', 'Tonsillitis', 'Pharyngitis'], w: 'Epiglottitis — often Hib; tripod/sniffing, drooling, stridor.' },
        { s: 'Teacher after a week of shouting: hoarse, fever, swollen neck glands, breathing fine.', o: ['Laryngitis', 'Epiglottitis', 'Tracheitis', 'Peritonsillar abscess'], w: 'Laryngitis — swelling of the larynx with hoarseness; can be overuse.' },
        { s: 'Toddler a few days after a cold: deep croup-like cough, high fever, high-pitched stridor, intercostal retractions.', o: ['Tracheitis', 'Tonsillitis', 'Pharyngitis', 'Laryngitis'], w: 'Tracheitis — Staphylococcus aureus after a viral URI in young children.' },
        { s: 'Red swollen tonsils with white patches, sore throat, difficulty swallowing, tender neck nodes, bad breath.', o: ['Tonsillitis', 'Peritonsillar abscess', 'Epiglottitis', 'Ludwig angina'], w: 'Tonsillitis.' },
        { s: 'Rapid-onset sore throat, pharyngeal erythema, patchy exudate, ulcers on the soft palate, nasal congestion, cough.', o: ['Pharyngitis', 'Tonsillitis', 'Laryngitis', 'Tracheitis'], w: 'Pharyngitis — assess for partial airway obstruction; follow-up with the ED.' },
        { s: 'After tonsillitis: can’t open the mouth without pain, muffled voice, facial swelling, can’t swallow saliva, chills.', o: ['Peritonsillar abscess', 'Tonsillitis', 'TMJ disorder', 'Pharyngitis'], w: 'Peritonsillar abscess — complication of tonsillitis.' }] },
    { k: 'ix', type: 'triage', id: 'm6-mx', title: 'Management, one card per condition', src: 'A91, A93, A96, A98n, A100, A103, B97–B110',
      cards: [
        { s: 'Epiglottitis', o: ['Minimize scene time; do not agitate; do not look in the mouth; alert the hospital', 'Examine the throat with a tongue blade first', 'Have the patient follow up with a physician', 'Saline rinse and decongestant'], w: 'Transport while maintaining the airway; minimize on-scene time; no agitating procedures; never look in the mouth; alert receiving personnel.' },
        { s: 'Laryngitis', o: ['Good history to rule out evolving obstruction or allergy; consider hyoid fracture; physician follow-up', 'Aggressive airway management', 'Administer 100% oxygen and prepare two ET tubes', 'Drain the abscess'], w: 'Good history; consider hyoid fracture; physician follow-up.' },
        { s: 'Tracheitis', o: ['Minimize stress, 100% oxygen, pulse oximetry, vitals, prepare for difficult intubation, transport promptly', 'Follow up with a physician', 'Warm water rinse', 'Position of comfort only'], w: 'Supportive prehospital care.' },
        { s: 'Tonsillitis', o: ['Transport for further evaluation', 'Tonsillectomy on scene', 'Aggressive airway management', 'Diuretics'], w: 'Transport for further evaluation.' },
        { s: 'Pharyngitis', o: ['Assess for partial airway obstruction; follow-up with the ED', 'IV antibiotics on scene', 'Do not look in the mouth', 'Fowler position and decongestant'], w: 'A major prehospital concern is assessment for partial airway obstruction.' },
        { s: 'Peritonsillar abscess', o: ['Hospital transport — antibiotics and draining the abscess (may include tonsillectomy)', 'Physician follow-up only', 'Warm compresses', 'Antiemetic'], w: 'Antibiotics and draining; may include tonsillectomy; hospital transport; can be life threatening.' }] },
    { k: 'ix', type: 'case', id: 'm6-case1', title: 'Case: the quiet, drooling child', src: 'A89–A91, B95–B97',
      intro: 'Unvaccinated 5-year-old, sudden high fever. He sits bolt upright, leaning forward on his hands, chin pushed out, drooling. Soft stridor. His mother is holding him.',
      vitals: { HR: 148, RR: 34, SpO2: '93%', Temp: '39.6 °C' },
      steps: [
        { scene: 'He looks sick and anxious. He refuses to lie down.', q: 'Field impression?', o: [['Epiglottitis', true, 'Fever, sore throat, painful swallowing, stridor; sick and anxious, tripod/sniffing position, drooling — often Hib.'], ['Tonsillitis', false, 'Tonsillitis does not produce this airway picture.'], ['Croup-like tracheitis', false, 'Tracheitis has a deep croup-like cough and follows a viral URI.']] },
        { scene: 'Your partner reaches for a tongue blade “to have a quick look”.', q: 'You say:', o: [['Stop — do not attempt to look in the mouth', true, 'Do not attempt to look in the mouth; do not agitate.'], ['Go ahead, quickly', false, 'Agitation worsens obstruction.', { SpO2: '86%', HR: 166 }], ['Lie him flat first so you can see', false, 'Agitating procedure — and he chose upright.', { SpO2: '85%' }]] },
        { scene: 'Ready to move.', q: 'Plan?', o: [['Leave him on his mother’s lap upright, minimize on-scene time, transport while maintaining the airway, alert the hospital', true, 'Minimize on-scene time and alert receiving personnel of the suspected diagnosis and condition.'], ['Start an IV on scene first', false, 'Procedures that might agitate the patient are out.', { HR: 170 }]] }],
      end: 'Epiglottitis inflames the epiglottis, which blocks the trachea and obstructs the airway.' },
    { k: 'spell', terms: ['Epiglottitis', 'Tracheitis', 'Pharyngitis', 'Peritonsillar'] },
    { k: 'sa', id: 'm6sa1' }, { k: 'sa', id: 'm6sa2' }, { k: 'sa', id: 'm6sa3' }, { k: 'sa', id: 'm6sa4' }, { k: 'sa', id: 'm6sa5' }, { k: 'sa', id: 'm6sa6' },
  ],

  lists: [
    { id: 'm6-episx', title: 'Epiglottitis — symptoms', src: 'A90, A90n, B96', items: ['Fever', 'Sore throat', 'Painful swallowing', 'Stridor', 'Respiratory distress'], foils: ['Deep croup-like cough', 'Hoarseness with overuse', 'Trismus'] },
    { id: 'm6-episign', title: 'Epiglottitis — signs', src: 'A90, A90n, B96', items: ['Looks sick and anxious', 'Sits upright in the tripod or sniffing position', 'May be drooling', 'Work of breathing is increased', 'Pallor or cyanosis may be evident'], foils: ['Lies flat comfortably', 'Muffled voice with facial swelling'] },
    { id: 'm6-epimx', title: 'Epiglottitis — transport while maintaining the airway', ordered: false, src: 'A91, B97', items: ['Minimize on-scene time', 'Do not attempt procedures that might agitate the patient', 'Do not attempt to look in the mouth', 'Alert receiving personnel of suspected diagnosis and condition'], foils: ['Inspect the epiglottis with a tongue blade', 'Lay the patient supine'] },
    { id: 'm6-larcause', title: 'Laryngitis — causes', src: 'A92, A92n, B98', items: ['Overuse', 'Virus (most common)', 'Pneumonia', 'Irritants', 'Chemicals', 'Gastroesophageal reflux disease', 'Bronchitis', 'Allergies', 'Bacterial infections'], foils: ['Staphylococcus aureus tracheal infection', 'Candida albicans', 'Infected tooth root'] },
    { id: 'm6-larsx', title: 'Laryngitis — symptoms', src: 'A93, B99', items: ['Fever', 'Hoarseness', 'Swollen lymph nodes or glands in the neck'], foils: ['Stridor and drooling', 'Deep croup-like cough'] },
    { id: 'm6-larmx', title: 'Laryngitis — management', src: 'A93, A93n, B99', items: ['Good history to rule out evolving upper airway obstruction or an allergic reaction', 'Consider fracture of the hyoid bone', 'Have the patient follow up with a physician'], foils: ['Prepare two ET tube sizes', 'Drain the abscess'] },
    { id: 'm6-trsx', title: 'Tracheitis — symptoms', src: 'A95, A95n, B101', items: ['Deep croup-like cough', 'Difficulty breathing', 'High fever', 'High-pitched stridor with breathing'], foils: ['Hoarseness from overuse', 'White patches on tonsils'] },
    { id: 'm6-trsign', title: 'Tracheitis — patients may exhibit', src: 'A95, B101', items: ['Tripod positioning', 'Intercostal retractions', 'Progression from respiratory distress to respiratory failure'], foils: ['Muffled voice', 'Jaw locking'] },
    { id: 'm6-trmx', title: 'Tracheitis — supportive prehospital care', src: 'A96, B102', items: ['Minimize stress to the patient', 'Administer 100% oxygen', 'Use pulse oximetry', 'Monitor vital signs', 'Be prepared for difficult intubation', 'Transport promptly'], foils: ['Look in the mouth with a tongue blade', 'Antiemetic'] },
    { id: 'm6-tonsx', title: 'Tonsillitis — symptoms', src: 'A98, B104', items: ['Swollen tonsils', 'Sore throat', 'Difficulty swallowing'], foils: ['Stridor', 'Croup-like cough'] },
    { id: 'm6-tonpres', title: 'Tonsillitis — patients present with', src: 'A98, A98n, B104', items: ['Red, swollen tonsils', 'White or yellow coating or patches on the tonsils', 'Fever', 'Sore throat'], foils: ['Ulcers on the soft palate', 'Muffled voice'] },
    { id: 'm6-tonmore', title: 'Tonsillitis — one or more of', src: 'A98n, B105', items: ['Pain when swallowing', 'Enlarged or tender lymph nodes in the neck', 'Bad breath', 'Headache', 'Stiff neck', 'Drooling'], foils: ['Intercostal retractions', 'Hyoid fracture'] },
    { id: 'm6-pharsx', title: 'Pharyngitis — symptoms', src: 'A100, A100n, B107', items: ['Fever', 'Pharyngeal erythema', 'Headache', 'Purulent, patchy yellow, gray, or white exudate', 'Nasal congestion', 'Hoarseness', 'Cough', 'Ulcers on the soft palate'], foils: ['Trismus', 'Tripod position with drooling'] },
    { id: 'm6-ptasx', title: 'Peritonsillar abscess — patient may have', src: 'A102, A102n, B109', items: ['Chills', 'Difficulty opening the mouth', 'Pain with opening the mouth', 'Facial swelling', 'Fever', 'Drooling or inability to swallow saliva', 'Headache', 'Muffled voice', 'Sore throat', 'Tender glands of the jaw and throat'], foils: ['Deep croup-like cough', 'Ulcers on the soft palate'] },
    { id: 'm6-ptasite', title: 'Peritonsillar abscess — infection may be in', src: 'A102, B109', items: ['One or both tonsils', 'Roof of the mouth', 'Neck or chest'], foils: ['Middle ear', 'Sinuses'] },
    { id: 'm6-ptamx', title: 'Peritonsillar abscess — treatment', src: 'A103, B110', items: ['Antibiotics', 'Draining the abscess', 'May include tonsillectomy', 'Hospital transport'], foils: ['Warm compresses', 'Diuretics'] },
  ],

  qs: [
    { id: 'm6q1', lv: 'R', src: 'A89, B95', hl: true, flag: 'Your files say “virus”; Hib is a bacterium.', s: 'Per your notes, epiglottitis is often the result of:', o: ['Haemophilus influenzae type b', 'Staphylococcus aureus', 'Candida albicans', 'Streptococcus from a tooth root'], w: 'Haemophilus influenzae type b (B: in unvaccinated adults; Hib vaccine).', tw: 'Staph aureus causes tracheitis.' },
    { id: 'm6q2', lv: 'R', src: 'A90, B96', hl: true, s: 'The classic posture of an epiglottitis patient is:', o: ['Sitting upright in the tripod or sniffing position', 'Lying flat', 'Lateral recumbent', 'Head down'], w: 'Sits upright in the classic tripod position or sniffing position.', tw: 'Lateral recumbent is for drainage in swallowing problems.' },
    { id: 'm6q3', lv: 'A', src: 'A91, B97', hl: true, s: 'Which action is FORBIDDEN in suspected epiglottitis?', o: ['Looking in the mouth', 'Minimizing on-scene time', 'Alerting the receiving hospital', 'Maintaining the airway during transport'], w: 'Do not attempt to look in the mouth; do not agitate.', tw: 'Minimizing scene time is required.' },
    { id: 'm6q4', lv: 'U', src: 'A91, B97', s: 'Why avoid agitating a patient with epiglottitis?', o: ['Agitation can worsen an airway already obstructed by the inflamed epiglottis', 'It raises intraocular pressure', 'It causes nosebleeds', 'It is only a comfort issue'], w: 'The inflamed epiglottis blocks the trachea; your notes: do not attempt procedures that might agitate.', tw: 'Not merely comfort — airway.' },
    { id: 'm6q5', lv: 'R', src: 'A90n, B96', s: 'Which is a SIGN (not a symptom) of epiglottitis in your notes?', o: ['Pallor or cyanosis', 'Fever', 'Sore throat', 'Painful swallowing'], w: 'Signs: sick and anxious, tripod/sniffing, drooling, increased work of breathing, pallor or cyanosis.', tw: 'Fever is listed as a symptom.' },
    { id: 'm6q6', lv: 'R', src: 'A92, B98', hl: true, s: 'Laryngitis is associated with:', o: ['Hoarseness or loss of voice', 'Stridor and drooling', 'Trismus', 'Croup-like cough'], w: 'Swelling and inflammation of the larynx with hoarseness or loss of voice.', tw: 'Stridor and drooling = epiglottitis.' },
    { id: 'm6q7', lv: 'R', src: 'A92n, B98', hl: true, s: 'The most common form of laryngitis is caused by:', o: ['A virus', 'Bacteria', 'Allergies', 'GERD'], w: 'Most common form caused by a virus.', tw: 'Bacteria are one of the “also” causes.' },
    { id: 'm6q8', lv: 'A', src: 'A93, B99', s: 'In laryngitis your notes tell you to consider:', o: ['Fracture of the hyoid bone', 'Nasal fracture', 'Basilar skull fracture', 'Mandible dislocation'], w: 'Consider fracture of the hyoid bone; good history; physician follow-up.', tw: 'Nasal fracture is the NPA contraindication.' },
    { id: 'm6q9', lv: 'R', src: 'A94, B100', hl: true, s: 'Tracheitis is a bacterial infection caused by:', o: ['Staphylococcus aureus', 'Haemophilus influenzae type b', 'Candida albicans', 'Viruses only'], w: 'Staphylococcus aureus; frequently in young children after a viral URI.', tw: 'Hib is epiglottitis.' },
    { id: 'm6q10', lv: 'R', src: 'A95n, B101', s: 'The cough of tracheitis is described as:', o: ['Deep croup-like', 'Productive with blood', 'Absent', 'Barking only at night'], w: 'Deep croup-like cough, difficulty breathing, high fever, high-pitched stridor.', tw: 'Not in your notes.' },
    { id: 'm6q11', lv: 'A', src: 'A96n', only: 'A', s: 'Preparing for difficult intubation in tracheitis, you should have:', o: ['The correct size ET tube and the next smaller size', 'The correct size and the next larger size', 'Only the correct size', 'A nasopharyngeal airway only'], w: 'Correct size + next smaller size.', tw: 'Larger makes no sense in a swollen trachea.' },
    { id: 'm6q12', lv: 'R', src: 'A96, B102', s: 'Oxygen in tracheitis:', o: ['Administer 100% oxygen', 'Avoid oxygen to prevent agitation', 'Low-flow only', 'Only after intubation'], w: 'Administer 100% oxygen; use pulse oximetry.', tw: 'Not in your notes.' },
    { id: 'm6q13', lv: 'R', src: 'A97, B103', hl: true, s: 'Tonsillitis is usually caused by:', o: ['Viral infections (can also be bacterial)', 'Fungal infection', 'Allergies', 'Trauma'], w: 'Usually viral; can also be bacterial.', tw: 'Not in your notes.' },
    { id: 'm6q14', lv: 'R', src: 'A98, B104', hl: true, s: 'On exam, tonsillitis shows:', o: ['Red, swollen tonsils with white or yellow coating or patches', 'Creamy white lesions on the tongue', 'Ulcers on the soft palate only', 'A swollen floor of the mouth'], w: 'Red, swollen tonsils; white/yellow coating or patches; fever; sore throat.', tw: 'Creamy white tongue lesions = thrush.' },
    { id: 'm6q15', lv: 'R', src: 'A97, B103', img: 'ph_tonsillitis', s: 'This picture best matches:', o: ['Tonsillitis', 'Thrush', 'Epiglottitis', 'Ludwig angina'], w: 'Red, swollen tonsils with patches.', tw: 'Thrush lesions sit on the tongue and cheeks.' },
    { id: 'm6q16', lv: 'R', src: 'A99, B106', flag: 'Your files: “without discomfort or pain with swallowing”; standard references differ.', s: 'Per your notes, pharyngitis is often a rapid onset of sore throat:', o: ['Without discomfort or pain with swallowing', 'With severe pain on opening the mouth', 'With a deep croup-like cough', 'With stridor and drooling'], w: 'Often due to a rapid onset of sore throat without discomfort or pain with swallowing (as written in both files).', tw: 'Pain opening the mouth = peritonsillar abscess.' },
    { id: 'm6q17', lv: 'R', src: 'A100, B107', s: 'Which is a listed symptom of pharyngitis?', o: ['Ulcers on the soft palate', 'Muffled voice', 'Intercostal retractions', 'Jaw locking'], w: 'Fever, erythema, headache, exudate, nasal congestion, hoarseness, cough, soft-palate ulcers.', tw: 'Muffled voice = peritonsillar abscess.' },
    { id: 'm6q18', lv: 'A', src: 'A100n, B107', s: 'Major prehospital concern in pharyngitis:', o: ['Assessment for partial airway obstruction', 'Hyoid fracture', 'Hypertensive crisis', 'Contact lens removal'], w: 'A major prehospital concern is assessment for partial airway obstruction; follow-up with the ED.', tw: 'Hyoid fracture is considered in laryngitis.' },
    { id: 'm6q19', lv: 'R', src: 'A101, B108', s: 'A peritonsillar abscess is:', o: ['A collection of infected material around the tonsils — a complication of tonsillitis', 'Inflammation of the epiglottis', 'Cellulitis of the floor of the mouth', 'A blocked oil gland'], w: 'Collection of infected material around the tonsils; complication of tonsillitis (B: bacterial, rare thanks to antibiotics).', tw: 'Floor-of-mouth cellulitis = Ludwig angina.' },
    { id: 'm6q20', lv: 'U', src: 'A102n, B109', s: 'Which finding points to peritonsillar abscess rather than simple tonsillitis?', o: ['Difficulty and pain opening the mouth with a muffled voice', 'Sore throat', 'Fever', 'Swollen tonsils'], w: 'Difficulty/pain opening the mouth, facial swelling, drooling or inability to swallow saliva, muffled voice.', tw: 'Sore throat and fever occur in both.' },
    { id: 'm6q21', lv: 'R', src: 'A103, B110', s: 'Treatment of peritonsillar abscess includes:', o: ['Antibiotics and draining the abscess (may include tonsillectomy)', 'Warm compresses', 'Diuretics', 'Saline rinse'], w: 'Antibiotics and draining; may include tonsillectomy; hospital transport.', tw: 'Warm compresses are for eyelid inflammation.' },
    { id: 'm6q22', lv: 'R', src: 'A101, B108', img: 'ph_peritonsillar', s: 'This magnified view of swelling around a tonsil shows:', o: ['Peritonsillar abscess', 'Pharyngitis', 'Thrush', 'Epiglottitis'], w: 'A collection of infected material around the tonsil.', tw: 'Pharyngitis is generalized redness of the pharynx.' },
  ],

  sa: [
    { id: 'm6sa1', src: 'A90, A91, B96, B97', q: 'Epiglottitis: list the symptoms, the signs, and the four transport rules.', keys: ['Symptoms: fever, sore throat, painful swallowing, stridor, respiratory distress', 'Signs: sick/anxious, tripod or sniffing, drooling, increased WOB, pallor/cyanosis', 'Minimize on-scene time', 'Do not agitate; do not look in the mouth', 'Alert receiving personnel'], model: 'Symptoms: fever, sore throat, painful swallowing, stridor, respiratory distress. Signs: sick and anxious, upright tripod or sniffing position, drooling, increased work of breathing, pallor or cyanosis. Transport while maintaining the airway: minimize on-scene time; no agitating procedures; do not look in the mouth; alert receiving personnel.' },
    { id: 'm6sa2', src: 'A92, A93, B98, B99', q: 'Laryngitis: causes, symptoms and management.', keys: ['Overuse; most commonly viral', 'Also: pneumonia, irritants, chemicals, GERD, bronchitis, allergies, bacteria', 'Fever, hoarseness, swollen neck nodes', 'History to rule out obstruction/allergy; consider hyoid fracture; physician follow-up'], model: 'Swelling and inflammation of the larynx with hoarseness. Overuse; most common form viral; also pneumonia, irritants, chemicals, GERD, bronchitis, allergies, bacterial infections. Symptoms: fever, hoarseness, swollen neck nodes. Good history (rule out evolving upper airway obstruction or allergy), consider hyoid fracture, physician follow-up.' },
    { id: 'm6sa3', src: 'A94–A96, B100–B102', q: 'Tracheitis: cause, who, symptoms, signs and supportive care.', keys: ['Staphylococcus aureus bacterial infection', 'Young children after viral URI', 'Croup-like cough, difficulty breathing, high fever, high-pitched stridor', 'Tripod, intercostal retractions', 'Minimize stress, 100% O2, SpO2, vitals, difficult intubation prep, transport'], model: 'Bacterial infection of the trachea (Staphylococcus aureus), frequently in young children after a viral URI; trachea easily blocked by swelling. Deep croup-like cough, difficulty breathing, high fever, high-pitched stridor; tripod positioning, intercostal retractions; can progress to respiratory failure. Minimize stress, 100% oxygen, pulse oximetry, vitals, prepare for difficult intubation (correct ET tube + next smaller), transport promptly.' },
    { id: 'm6sa4', src: 'A97, A98, B103–B105', q: 'Tonsillitis: cause, symptoms, presentation and action.', keys: ['Usually viral, can be bacterial', 'Swollen tonsils, sore throat, difficulty swallowing', 'Red swollen tonsils with white/yellow patches, fever', 'One or more: painful swallowing, tender nodes, bad breath, headache, stiff neck, drooling', 'Transport for further evaluation'], model: 'Swelling and inflammation of the tonsils, usually viral (can be bacterial). Symptoms: swollen tonsils, sore throat, difficulty swallowing. Present with red swollen tonsils, white/yellow coating or patches, fever, sore throat, plus one or more of pain when swallowing, enlarged/tender neck nodes, bad breath, headache, stiff neck, drooling. Transport for further evaluation.' },
    { id: 'm6sa5', src: 'A99, A100, B106, B107', q: 'Pharyngitis: definition, eight symptoms, and the major prehospital concern.', keys: ['Inflammation of the pharynx', 'Fever, pharyngeal erythema, headache, exudate', 'Nasal congestion, hoarseness, cough, ulcers on soft palate', 'Assess for partial airway obstruction; ED follow-up'], model: 'Inflammation of the pharynx (rapid-onset sore throat, per notes without pain on swallowing). Fever, pharyngeal erythema, headache, purulent patchy yellow/gray/white exudate, nasal congestion, hoarseness, cough, ulcers on the soft palate. Major concern: assess for partial airway obstruction; follow-up with the ED.' },
    { id: 'm6sa6', src: 'A101–A103, B108–B110', q: 'Peritonsillar abscess: what it is, features, and treatment.', keys: ['Collection of infected material around the tonsils; complication of tonsillitis', 'Difficulty/pain opening mouth, facial swelling, muffled voice', 'Drooling or inability to swallow saliva, chills, fever, tender jaw/throat glands', 'Antibiotics + drainage; may include tonsillectomy; hospital transport'], model: 'Collection of infected material around the tonsils — complication of tonsillitis (bacterial; rare with antibiotics). One or both tonsils, roof of mouth, neck or chest may be infected. Chills, difficulty and pain opening the mouth, facial swelling, fever, drooling or inability to swallow saliva, headache, muffled voice, sore throat, tender jaw/throat glands. Antibiotics and draining (may include tonsillectomy); hospital transport; can be life threatening.' },
  ],

  nums: [
    { v: 'Type b', q: 'Epiglottitis: Haemophilus influenzae type…?', d: ['Type a', 'Type c', 'Type 2'], src: 'A89, B95' },
    { v: '100% oxygen', q: 'Oxygen concentration to give in tracheitis?', d: ['24% oxygen', '40% oxygen', 'Room air'], src: 'A96, B102' },
    { v: 'Correct size + next smaller size', q: 'ET tubes to have ready in tracheitis (A)?', d: ['Correct size + next larger size', 'Correct size only', 'Two sizes larger'], src: 'A96n' },
    { v: '10', q: 'How many peritonsillar-abscess features are listed (A102n/B109)?', d: ['5', '7', '12'], src: 'A102n, B109' },
    { v: '8', q: 'How many pharyngitis symptoms are listed?', d: ['4', '6', '10'], src: 'A100n, B107' },
  ],

  spell: [
    { t: 'Epiglottitis', hint: 'Inflammation of the epiglottis.', ar: 'التهاب لسان المزمار', src: 'B96 ✍' },
    { t: 'Tracheitis', hint: 'Bacterial infection of the trachea (Staph aureus).', ar: 'التهاب القصبة', src: 'p167 ✍' },
    { t: 'Pharyngitis', hint: 'Inflammation of the pharynx.', ar: 'التهاب البلعوم', src: 'B106 ✍' },
    { t: 'Peritonsillar', hint: '___ abscess: infected material around the tonsils.', ar: 'حول اللوزة', src: 'A101, B108' },
    { t: 'Laryngitis', hint: 'Swelling of the larynx with hoarseness.', ar: 'التهاب الحنجرة', src: 'A92, B98' },
    { t: 'Haemophilus', hint: '___ influenzae type b (epiglottitis).', ar: 'المستدمية', src: 'A89, B95' },
  ],

  flash: [
    ['Epiglottitis: 4 transport rules', 'Minimize on-scene time; no agitating procedures; do not look in the mouth; alert receiving personnel.', 'A91, B97'],
    ['Epiglottitis posture', 'Upright in the classic tripod or sniffing position, often drooling.', 'A90n, B96'],
    ['Laryngitis: what to consider', 'Fracture of the hyoid bone (and rule out evolving obstruction or allergy).', 'A93, B99'],
    ['Tracheitis organism & typical patient', 'Staphylococcus aureus; young children after a viral URI.', 'A94, B100'],
    ['Tracheitis supportive care (6)', 'Minimize stress, 100% O₂, pulse oximetry, vital signs, prepare for difficult intubation (correct + next smaller ET tube), transport promptly.', 'A96, B102'],
    ['Pharyngitis: major prehospital concern', 'Assessment for partial airway obstruction.', 'A100n, B107'],
    ['Peritonsillar abscess: 3 telltale features', 'Difficulty/pain opening the mouth, muffled voice, drooling/inability to swallow saliva (+ facial swelling).', 'A102n, B109'],
  ],

  ents: [
    { n: 'Epiglottitis', ty: 'Condition', src: 'A89–A91, B95–B97', f: { Definition: 'Inflammation of the epiglottis; blocks the trachea and obstructs the airway', 'Cause / mechanism': 'Often Haemophilus influenzae type b (“virus” per notes ⚑); unvaccinated adults (B)', Symptoms: 'Fever, sore throat, painful swallowing, stridor, respiratory distress', Signs: 'Sick, anxious, tripod/sniffing, drooling, increased WOB, pallor/cyanosis', Management: 'Transport maintaining airway; minimize scene time; do not agitate; do not look in mouth; alert hospital' } },
    { n: 'Laryngitis', ty: 'Condition', src: 'A92, A93, B98, B99', f: { Definition: 'Swelling and inflammation of the larynx with hoarseness or loss of voice', 'Cause / mechanism': 'Overuse; virus (most common); pneumonia, irritants, chemicals, GERD, bronchitis, allergies, bacteria', Symptoms: 'Fever, hoarseness, swollen neck nodes', Management: 'History; consider hyoid fracture; physician follow-up' } },
    { n: 'Tracheitis', ty: 'Condition', src: 'A94–A96, B100–B102', f: { Definition: 'Bacterial infection of the trachea (Staphylococcus aureus)', Who: 'Young children after a viral URI', Symptoms: 'Deep croup-like cough, difficulty breathing, high fever, high-pitched stridor', Signs: 'Tripod positioning, intercostal retractions', Management: 'Minimize stress, 100% O₂, SpO₂, vitals, difficult-intubation prep, prompt transport' } },
    { n: 'Tonsillitis', ty: 'Condition', src: 'A97, A98, B103–B105', f: { Definition: 'Swelling and inflammation of the tonsils', 'Cause / mechanism': 'Usually viral; can be bacterial', Symptoms: 'Swollen tonsils, sore throat, difficulty swallowing', Signs: 'Red swollen tonsils, white/yellow patches, fever', Management: 'Transport for further evaluation' } },
    { n: 'Pharyngitis', ty: 'Condition', src: 'A99, A100, B106, B107', f: { Definition: 'Inflammation of the pharynx; rapid-onset sore throat (without pain on swallowing per notes ⚑)', Symptoms: 'Fever, erythema, headache, exudate, nasal congestion, hoarseness, cough, soft-palate ulcers', Management: 'Assess for partial airway obstruction; ED follow-up' } },
    { n: 'Peritonsillar abscess', ty: 'Condition', src: 'A101–A103, B108–B110', f: { Definition: 'Collection of infected material around the tonsils; complication of tonsillitis', Symptoms: 'Chills, difficulty/pain opening mouth, facial swelling, fever, drooling, headache, muffled voice, sore throat, tender glands', Management: 'Antibiotics + drainage; may include tonsillectomy; hospital transport' } },
  ],

  hooks: [
    ['Epiglottitis: “3 D’s + a Don’t”', 'Drooling, Distress (stridor, tripod/sniffing), Discomfort swallowing (painful swallowing) — and DON’T look in the mouth.'],
    ['Tracheitis: “Staph after a cold, croup that won’t fold”', 'Staphylococcus aureus after a viral URI; deep croup-like cough and high fever.'],
    ['Hoarse = Larynx', 'Laryngitis is the hoarse one — think hyoid fracture.'],
    ['Peritonsillar: “Can’t open, can’t swallow, can’t talk clearly”', 'Pain opening the mouth, drooling/can’t swallow saliva, muffled voice.'],
  ],

  arSum: `<ul>
  <li><b>Epiglottitis</b>: التهاب لسان المزمار يسد القصبة ومجرى الهواء — غالباً <b>Haemophilus influenzae type b</b> (الملفات تقول virus ⚑)، عند غير المطعّمين (B). الأعراض: حرارة، ألم حلق، ألم بلع، <b>stridor</b>، ضيق تنفس. العلامات: يبدو مريضاً وقلقاً، يجلس بوضعية <b>tripod/sniffing</b>، سيلان لعاب، جهد تنفسي، شحوب أو زرقة. النقل مع الحفاظ على المجرى: قلل وقت الموقع، لا تهيّج المريض، <b>لا تنظر في الفم</b>، أبلغ المستشفى.</li>
  <li><b>Laryngitis</b>: التهاب الحنجرة مع <b>بحة</b> أو فقدان الصوت؛ من الإجهاد أو فيروس غالباً، وأيضاً التهاب رئوي، مهيجات، كيماويات، GERD، bronchitis، حساسية، بكتيريا. حرارة، بحة، تضخم الغدد. خذ تاريخاً جيداً، فكّر في كسر <b>hyoid bone</b>، ومتابعة مع الطبيب.</li>
  <li><b>Tracheitis</b>: عدوى بكتيرية في القصبة (<b>Staph aureus</b>) عند الأطفال الصغار بعد عدوى فيروسية — كحة عميقة مثل الخانوق، صعوبة تنفس، حرارة عالية، stridor؛ tripod و intercostal retractions؛ قد يتطور لفشل تنفسي. الرعاية: تقليل التوتر، <b>100% oxygen</b>، pulse oximetry، العلامات الحيوية، الاستعداد لتنبيب صعب (أنبوب بالمقاس الصحيح والأصغر منه)، النقل السريع.</li>
  <li><b>Tonsillitis</b>: التهاب اللوزتين (فيروسي غالباً) — لوزتان حمراوان متورمتان مع بقع بيضاء أو صفراء، حرارة، ألم بلع، تضخم الغدد، رائحة فم، صداع، تيبس رقبة، سيلان لعاب. انقل للتقييم.</li>
  <li><b>Pharyngitis</b>: التهاب البلعوم (حسب ملفاتك بدون ألم بلع ⚑) — حرارة، احمرار، صداع، إفرازات صديدية، احتقان، بحة، كحة، تقرحات في سقف الحلق الرخو. أهم شيء: تقييم <b>partial airway obstruction</b>.</li>
  <li><b>Peritonsillar abscess</b>: تجمع صديد حول اللوزة، مضاعفة لالتهاب اللوزتين (نادر بفضل المضادات الحيوية) — صعوبة وألم فتح الفم، تورم الوجه، صوت مكتوم، عدم القدرة على بلع اللعاب، قشعريرة وحرارة. العلاج: مضاد حيوي وتصريف وقد يحتاج استئصال اللوزتين؛ النقل للمستشفى.</li></ul>`,
});
