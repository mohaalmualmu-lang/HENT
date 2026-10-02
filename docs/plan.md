# EENT study site — Phase 2 plan

You asked me to run all phases without stopping, so this plan was not held for approval. Defaults I chose for the open questions are in section 8; each is a one-line change.

## 1. Coverage map (from `docs/inventory.md`)

| Topic | Lists | List items | Numbers | Tables | Figures / photos | Entities |
|---|---|---|---|---|---|---|
| Intro + eye A&P | 2 | 9 | 4 (2 nerves, CN II/III/IV/VI) | — | 2 figures (17 + 6 labels) | 6 structures, 4 nerves |
| Eye assessment & procedures | 14 | 74 | 9 (4, 8, 3, 5–15 min, 5 min, 8, 4, 1–2 drops, 3 types, 10–20 in/25–51 cm, 45°, 0) | T1 (7 rows) | 4 drawings + 2 device photos | 6 devices, 4 procedures |
| Eye conditions (8) | 26 | 118 | 8 (5–10 min, 4 types, 6 causes ×2, 30–120 min, third, ninety) | T2 (4 rows), T3 (4 rows) | 4 photos | 13 conditions/types |
| Ears (5 topics) | 18 | 86 | 5 (three parts, <2 h, up to 2 days, hours–days) | — | 1 figure (18 labels), 1 B-only figure, 1 photo | 6 conditions, 2 devices |
| Nose (6 topics) | 16 | 75 | 6 (two entry points, 4 sinuses, two types, 20 min, 29.3/28.9 M, 7–10 days) | T4 (5 rows), T5 (3 rows) | 2 figures (5 + 4 labels), 2 photos | 11 conditions/terms |
| Throat I: mouth, neck, oral | 20 | 96 | 4 (CN VI/VII/IX/XII, 6 disorders, 4 nerves) | T6 (6 rows) | 7 figures (4+7+6+6+9+10+2 labels), 2 photos | 12 conditions |
| Throat II: airway infections (6) | 20 | 98 | 4 (type b, 100%, next smaller size, 10 features) | — | 3 photos | 6 conditions |
| **Total** | **116** | **~556** | **~40** | **6 tables (29 rows)** | **12 labelled figures (94 labels) + 17 photos/drawings** | **~60** |

## 2. Modules (ordered so each builds on the last)

| # | Module | Covers (refs) | Why this split |
|---|---|---|---|
| 1 | **Eye I — anatomy, assessment, procedures** | Intro; eye A&P; assessment; drops; irrigation; contact lenses; prosthesis; ophthalmoscope (A1–A21, B1–B18, B26) | You need the structures (cornea, iris, aqueous humor, optic nerve) and the exam routine before any eye disease makes sense. |
| 2 | **Eye II — eye conditions** | Conjunctivitis, chalazion/hordeolum, glaucoma, CRAO, iritis, papilledema, orbital cellulitis, corneal abrasion (A22–A38, B20–B38) | Eight look-alike "red/painful eye" conditions: grouped so they can be compared head-to-head. |
| 3 | **Ears** | Purpose, three parts, sound path, assessment, otoscope, cerumen, labyrinthitis, Meniere, otitis (A39–A54, B40–B56) | Self-contained organ; vertigo conditions need the inner-ear anatomy first. |
| 4 | **Nose** | Functions, smell disorders, A&P, assessment (NPA rule), epistaxis, foreign body, rhinitis, sinusitis (A55–A69, B58–B73) | The nosebleed competency is named in the NEMS standard; airway-adjunct rule links to Module 6. |
| 5 | **Throat I — mouth, neck, oral disease** | Throat overview, reflux, swallowing nerves, mouth/neck anatomy, throat assessment, dental abscess, oral soft tissue, thrush, Ludwig angina, TMJ (A70–A88, A104–A105, B75–B94, B111–B113) | Mouth and neck anatomy first, then the infections that start in teeth and soft tissue (Ludwig angina is the bridge to airway threats). |
| 6 | **Throat II — airway-threatening infections** | Epiglottitis, laryngitis, tracheitis, tonsillitis, pharyngitis, peritonsillar abscess (A89–A103, B95–B110) | Six sore-throat conditions with the highest airway stakes; built for "which one is it?" discrimination. |

## 3. Entity cards

| Type | Fields |
|---|---|
| Condition | Definition · Cause / mechanism · Who (risk) · Symptoms · Signs · Prehospital management · Hospital treatment · Danger flag · Source slides · ⚑ |
| Structure | Where · What it does · On which figure · Linked conditions |
| Device / procedure | Purpose · Steps or parts · Rules (when / never) · Source |
| Drug / treatment | Used for · Who gives it (prehospital / physician / hospital) · Source |
| Term (smell disorders, oral lesions) | Meaning · Look-alikes |

## 4. Interactives per module (★ = the one or two that teach the most)

- **M1:** ★ Tap-to-label eye cross-section (17) and lacrimal system (6), EN/Arabic chips + "Find" quiz · ★ 3D eye (three.js): rotate, tap parts, cut-open slider, intraocular-pressure slider · Eye-drop application order builder · Irrigation direction drill (inside → outside corner) · Structure → what-to-assess matcher (T1) · Contact-lens decision triage (remove? hard or soft method?) · Ophthalmoscope Skill Drill sequence · Prosthesis clue sorter.
- **M2:** ★ Aqueous-humor flow simulator (normal / open-angle / narrow-angle / normal-tension) with live pressure gauge and symptom panel · ★ "Red eye" case engine (acute narrow-angle glaucoma, CRAO, orbital cellulitis) · Chalazion vs hordeolum picture compare · Acute / chronic / infectious iritis sorter · Periorbital vs orbital cellulitis sorter · Glaucoma-type matcher.
- **M3:** ★ Tap-to-label ear (18) + sound-path route builder with a marker travelling the figure · ★ Meniere fluid simulator (endolymph slider → distension → rupture → hair-cell damage; 3D inner-ear model inflates) · External / middle / inner sorter · Otitis externa vs media sorter · Vertigo case (labyrinthitis vs Meniere).
- **M4:** ★ Epistaxis simulator (position, pinch, 20-minute timer, sniff/blow, anterior vs posterior, older hypertensive patient) · NPA / nasotracheal "can I insert?" triage · Nasal cavity (5) + sinus (4) labels · Smell-disorder matcher · Foreign-body case.
- **M5:** Labels for teeth, tooth, glands, anterior neck, neck arteries, neck veins, TMJ (44 labels) · ★ Ludwig angina airway case · Oral-lesion matcher (T6) · Thrush risk sorter · Mouth-nerve recall.
- **M6:** ★ Epiglottitis "don't agitate" monitor simulator (SpO₂ / RR trace reacts to what you do) · ★ "Which sore throat is it?" discriminator (6 conditions) · Tracheitis airway-prep (ET tube sizes) · Symptoms-vs-signs sorter · Peritonsillar case.
- Every interactive records completion; "Skip for now" is allowed and marked.

## 5. Question plan

Exam format was not given; default = **mostly 4-option MCQ + short answers that ask you to list or spell** (your handwritten spelling list and "التعداد" on p167 point to this).

| Module | MCQ (recall / understanding / application) | NOT/EXCEPT + list items (auto-built from every list, reshuffled each time) | Picture questions | Short answer (list / spell / explain) |
|---|---|---|---|---|
| M1 | ~40 | every list (14) | label + device photos | 8 |
| M2 | ~50 | 26 lists | 4 photos | 10 |
| M3 | ~35 | 18 lists | ear figure + Meniere | 8 |
| M4 | ~35 | 16 lists | 2 figures, 2 photos | 8 |
| M5 | ~35 | 20 lists | 7 figures, 2 photos | 8 |
| M6 | ~40 | 20 lists | 3 photos | 8 |

Plus: numbers drill (every number), spelling drill (every term you handwrote + key terms), label quizzes (94 labels). Each explanation says why the answer is right and why the trap is wrong; distractors come from the same category; options are shuffled every time.

## 6. Illustrations needed (external image AI — prompts in `docs/illustration-prompts.md`)

1. Acute narrow-angle glaucoma eye (cloudy cornea, mid-dilated irregular pupil) — M2 glaucoma card.
2. Periorbital vs orbital cellulitis side-by-side — M2 cellulitis card.
3. Corneal abrasion under blue light — M2.
4. Anterior vs posterior epistaxis flow (sagittal) — M4.
5. Epiglottitis child in tripod / sniffing position, drooling — M6.
6. Ludwig angina: swollen floor of mouth / neck — M5.
7. Otitis media bulging eardrum vs normal eardrum — M3.
8. Papilledema optic disc vs normal — M2.
9. Eye-drop pouch technique (pulling lower lid) — M1.
10. Irrigation inside → outside corner — M1.

## 7. Conflicts
See the ⚑ section at the end of `docs/inventory.md`: 5 between your files (sinusitis 29.3 vs 28.9 million is the only one that changes an answer), 7 between your files and standard references (CRAO "vein" sentence, Hib "virus", swallowing nerve "VI", pharyngitis "without pain", nasal route "faster than IV", "ophthalmologists not trained to recognize iritis", otitis media "in the ear canal"). Each is flagged ⚑ on its card and in its questions; your files' wording is the exam answer.

## 8. Questions (answered with defaults so the build could continue)
1. **Which deck is the instructor's?** Default: B (the Chapter 20 PDF you annotated). Effect: badges only. Change `INSTRUCTOR_DECK` in `site/src/content/meta.js`.
2. **Exam format?** Default: mostly 4-option MCQ + short answer (list / spell). Change: tell me and I'll rebalance the question mix.
3. **May slide images be used?** Default: yes, inside your private artifact for personal study (the images are © Jones & Bartlett / photo agencies). If you plan to share the link publicly, tell me and I'll swap them for the AI illustrations.
