# EENT inventory — Phase 1 (exhaustive)

Subject: **Diseases of the Eyes, Ears, Nose, and Throat (EENT / HEENT emergencies)** — paramedic (BSc EMS) level.

## Sources and reference codes

| Code | File | What it is | How it was read |
|---|---|---|---|
| **A** | `HEENT Emergencies.pptx` | 105-slide Jones & Bartlett deck (labelled *Chapter 19*). Every slide has speaker notes ("Lecture Outline"). | Text + tables + notes extracted from every slide; all 28 embedded images extracted and viewed. (LibreOffice cannot run in this sandbox, so slides were not rasterised; every slide's text frames and pictures were enumerated instead. Slide 61 and 80 contain one empty placeholder each.) |
| **B** | `EENT & Note.pdf` | 171-page GoodNotes export of the newer *Chapter 20* deck: each slide is printed with its Lecture Outline underneath. Contains **your highlights and handwriting**. | Text extracted page by page; every page rasterised and viewed (110 dpi, handwriting re-rendered at 250 dpi). |

* `A12` = deck A slide 12 (on-slide text). `A12n` = the speaker notes of A slide 12.
* `B12` = deck B slide 12 (the printed slide **and** the Lecture Outline under it). B slide → PDF page: B1=p1, B2=p2–3, B3=p4, B4=p5–6, B5=p7, B6=p8–9, B7=p10–11, B8=p12–13, B9=p14–15, B10=p16, B11=p17–18, B12=p19–20, B13=p21–22, B14=p23–24, B15=p25, B16=p26, B17=p27, B18=p28–29, B19=p30, B20=p31–32, B21=p33–34, B22=p35–36, B23=p37, B24=p38–40, B25=p41–42, B26=p43, B27=p44–45, B28=p46–47, B29=p48–49, B30=p50, B31=p51–52, B32=p53–54, B33=p55–56, B34=p57–58, B35=p59, B36=p60, B37=p61–62, B38=p63, B39=p64, B40=p65, B41=p66–67, B42=p68, B43=p69–70, B44=p71, B45=p72–73, B46=p74, B47=p75–76, B48=p77, B49=p78–79, B50=p80–81, B51=p82, B52=p83, B53=p84–85, B54=p86, B55=p87–88, B56=p89–90, B57=p91, B58=p92–93, B59=p94–95, B60=p96, B61=p97, B62=p98, B63=p99, B64=p100, B65=p101, B66=p102, B67=p103, B68=p104, B69=p105–106, B70=p107–108, B71=p109–110, B72=p111–112, B73=p113–114, B74=p115, B75=p116–117, B76=p118–119, B77=p120, B78=p121, B79=p122, B80=p123, B81=p124–125, B82=p126–127, B83=p128, B84=p129, B85=p130, B86=p131–132, B87=p133–134, B88=p135, B89=p136, B90=p137, B91=p138–139, B92=p140, B93=p141–142, B94=p143–144, B95=p145, B96=p146–147, B97=p148, B98=p149–150, B99=p151–152, B100=p153, B101=p154–155, B102=p156, B103=p157, B104=p158–159, B105=p160, B106=p161, B107=p162–163, B108=p164, B109=p165–166, (handwritten page p167), B110=p168, B111=p169, B112=p170, B113=p171.
* **A-only** / **B-only** = the point appears in only one file. When a point is in both, both codes are given. Merge rule: UNION — every point from either file is kept.
* ✎ = you highlighted it (blue highlighter) in B. ✍ = your handwriting in B.
* ⚑ = conflict (see the Conflicts section at the end). Your files' version is kept for the exam.
* Text in `backticks` = the exact key phrase the coverage audit (`site/tools/audit.mjs`) looks for in the built site.

**Instructor deck (unconfirmed):** neither file is labelled as the instructor's own. Default used in the site: **B is treated as the course deck you studied from** (it carries your lecture highlights); A-only and B-only points are both badged, so nothing depends on this choice. Change `INSTRUCTOR_DECK` in `site/src/content/meta.js` if A is the instructor's.

### Your handwriting (✍) — transcribed

| Where | Written | Meaning |
|---|---|---|
| B9 (p14) | `Ecchymosis` … `discoloration` | spelling of Ecchymosis; Ecchymosis = discoloration |
| B9 (p15) | `Conjunctivae` | spelling |
| B13 (p21) next to Glaucoma | `مياه زرقاء` | Arabic for glaucoma |
| B20 (p32) next to "highly contagious" | `معدي` | Arabic: contagious |
| B22 (p36) | `Hordeolum` | spelling (stye = hordeolum) |
| B47 (p47) next to Tuberculosis | `TB` | abbreviation |
| B30 (p50) | `Papilledema` | spelling |
| B51 (p82) | `Labyrinthitis` | spelling |
| B76 (p118) next to Indigestion | `عسر هضم` | Arabic: indigestion |
| B84 (p129) | `Dentalgia` | spelling |
| B87 (p134) next to Gingivitis | `التهاب اللثة` | Arabic: gum inflammation |
| B96 (p146) | `Epiglottitis` | spelling |
| B99 (p151) next to Hoarseness | `بحة` | Arabic: hoarseness |
| B106 (p161) | `Pharyngitis` | spelling |
| p167 (own page) | `3- Papl…`, `4- Trachiti…`, circled `خلص`, `التعداد ①` | a numbered spelling list (3 = Papilledema, 4 = Tracheitis); "التعداد" = enumeration/listing. **Interpretation used:** the exam may ask you to *spell* terms and to *list (enumerate)* items, so the site adds a spelling drill and list-recall short answers. |

---

## 0. Introduction — A1–A4, B1–B2

- Title: `Diseases of the Eyes, Ears, Nose, and Throat` — A1 (Chapter 19), B1 (Chapter 20)
- NEMS competency (Medicine): integrates assessment findings with epidemiology and pathophysiology to form a `field impression` and implement a comprehensive treatment/disposition plan for a patient with a medical complaint — A2, A2n
- Competency: knowledge of anatomy, physiology, epidemiology, pathophysiology, psychosocial impact, presentations, prognosis, and management of `common or major diseases of the eyes, ears, nose, and throat, including nosebleed` — A3, A3n (pp 1144–1163)
- Calls may involve disorders of the eyes, ears, nose, and throat `(EENT)` — A4, B2
  - `A significant number of these calls involve trauma` — A4, B2 ✎
  - Familiarity with EENT conditions helps when assessing the patient; also allows you to `educate the patient on prevention or potential care` — A4n, B2 ✎ ("Patient assessment", "Patient education (prevention and care)")
  - Patients may need transport to an ED with access to an `eye specialist or an ear, nose, and throat specialist` — A4, A4n, B2

## 1. The Eye — anatomy & physiology — A5–A7, B4–B5

- Eye connected to the brain by `two nerves` — A5n, B4 ✎
- `Oculomotor nerve` (`CN III`; third cranial nerve) — A5, B4
  - Innervates the muscles that cause `motion of the eyeballs and upper eyelids` — A5, B4
  - B-only: `Works with trochlear (CN IV) and abducens (CN VI)` nerves — B4
  - `Carries parasympathetic nerve fibers` that cause `constriction of the pupil and accommodation of the lens` — A5n, B4
- `Optic nerve` (`second cranial nerve`) — `Provides the sense of vision` — A5, B4
- **Figure: eye cross-section** (A6, B5; notes "structures of the eye") — 16 labels: `Anterior compartment filled with aqueous humor`, `Anterior chamber`, `Posterior chamber`, `Posterior compartment filled with vitreous humor`, `Iris`, `Cornea`, `Pupil`, `Lens`, `Suspensory ligaments`, `Ciliary muscle`, `Fovea`, `Vein`, `Artery`, `Optic nerve`, `Retina`, `Choroid`, `Sclera`
- **Figure: lacrimal system** (A7, B4 picture; notes "lacrimal system of tear glands and ducts") — 6 labels: `Lacrimal gland`, `Pupil`, `Iris`, `Nasolacrimal duct`, `Sclera`, `Conjunctiva` (blue arrows show tears flowing across the eye toward the nasolacrimal duct)

## 2. Eye — patient assessment — A8–A16, B6–B15

- `Ensure scene safety` — A8, B6
- `Keep your patient calm` — A8, B6
- `Form a general impression` — A8, B6: note `environmental clues` ✎, approximate `age and sex` ✎, `degree of distress` ✎ — A8n, B6
- `Assess airway and breathing` — A8, B6: rule out life threats; `Do not be distracted by a swollen, irritated eye` and miss priorities (A-only, A8n)
- `Early transport may improve outcomes` — A8n, B6
- `Cover both eyes` to `limit damage to the affected eye through sympathetic movement` ✎ — A8, B6
- `Consider pain management` — A8, B6
- `Cardiac monitoring is recommended` — A8, B6
  - `Ocular pressure can stimulate the vagus nerve` ✎ — A8n, B6
  - `Eye drops/medication can cause side effects such as low or high blood pressure` — A8n, B6
- `Provide emotional care` for the patient — A9n, B6
- `Obtain the chief complaint and history` — A9, B7
  - `OPQRST` = B-only expansion `Onset, Provocation/palliation, Quality, Region/radiation, Severity, Timing` — B7
  - How and when did symptoms begin? / What symptoms are experienced? / `Are both eyes affected?` / Any underlying diseases or conditions of the eye? — A9n, B7
- Symptoms that may indicate a **serious ocular condition** (4) — A9, B7 ✎:
  1. `Visual loss that does not improve` when the patient blinks
  2. `Double vision`
  3. `Severe eye pain`
  4. `Foreign body sensation`
- `Perform a thorough examination` — A9, B8: `Use standard precautions`; `Avoid aggravating the affected area` — A9n, B8
- Assess for (8) — A10, B8: `Pain or tenderness`, `Swelling`, `Abnormal movement or loss of movement`, `Sensation changes`, `Circulatory changes`, `Deformity`, `Visual changes`, `Airway compromise`
- Visible ocular structures and what to look for — A11–A12, B9–B10 ✎ (→ table T1)
- Pupils: `PERRLA` = `pupils equal, round, reactive to light and accommodation` — A12n, B10 (slide: "Size, shape, equality, reaction to light")
- Ocular function tests (3) — A13, B11:
  - `Visual acuity` — ability to see `large and small letters` ✎; `Test each eye separately and document results` — A13n, B11
  - `Peripheral vision` — ability to recognize an object `entering the extremes of the visual field` — A13, B11 ✎
  - `Ocular motility` — ability to `move the eyes in all directions` ✎; check for `paralysis of gaze` or discoordination between the two eyes = `dysconjugate gaze` ✎ — A13n, B11
- `Obtain a full set of baseline vital signs` — A14; A-only: `Reassess every 5–15 minutes` depending on condition — A14n
- Adverse effects if the patient — A14, B12: `Uses more than one eye medication`; `Uses too much medication`
- Ask how the patient administered any eye medication — A14, B12
  - `wait 5 minutes between the first and second drop` ✎ — A14n, B12
  - B-only: `5-minute rule does not apply to emergency situations` — B12
- Eye drops are used for (8) — A15n, B13 ✎ (✍ glaucoma = مياه زرقاء): `Conjunctivitis`, `Dry, red, or itchy eyes`, `Eye pain`, `Glaucoma`, `Eye surgery`, `Herpes simplex`, `Corneal abrasions`, `Lubrication/tear production`
- Applying eye drops and lubricants (4 steps, in order) — A15, B14:
  1. `Gently squeezing the lower eyelid` to make a `pouch`
  2. Applying the medication `into the lower lid`
  3. Having the patient `close the eyes and roll them downward`
  4. `Applying gentle pressure to the corner of the eyes` to prevent drainage of the medication from the eye
- `Ask patients which medications they have already taken` — A15n, B14
- `Irrigation` may be necessary for `chemical or thermal burns` — A16, B15 ✎
  - `Use sterile water or isotonic saline solution` ✎
  - `Flush liquid from the inside corner to the outside of the eye` ✎
- `Eye injuries should be seen in the emergency department` — A16, B15
- `Eye injuries may be irreversible` — A16, B15
  - A-only: `Communication is key` to keeping the patient calm and informed; `Early decisions to transport can improve some outcomes`; `Early communication with medical control` can help direct your care — A16n

### T1 (table, A11–A12/B9–B10, verbatim) — Structure → what to assess
| Structure | Assess for |
|---|---|
| `Orbital rim` | Ecchymosis, swelling, lacerations, tenderness |
| `Eyelids` | Ecchymosis, swelling, lacerations, abnormalities |
| `Corneas` | Foreign bodies |
| `Conjunctivae` | `Redness, pus, inflammation, foreign bodies` |
| `Globes` | `Redness, abnormal pigmentation, lacerations` |
| `Eye surface` | Growths, discoloration, `differences between eyes` ✎ |
| `Pupils` | Size, shape, equality, reaction to light (PERRLA) |

✍ `Ecchymosis` = discoloration (B9).

## 3. Contact lenses, prosthesis, ophthalmoscope — A17–A21, B16–B18, B26

- `The only indication for removing contact lenses in the prehospital setting is a chemical burn of the eye` ✎ — A17, B16
- `three types of contact lenses` (A-only list) — A17: `Hard`, `Rigid gas-permeable`, `Soft (hydrophilic)`
- Remove a `hard` lens ✎: `Use a small suction cup`, `moistening the end with saline` — A18, B16 (figure: suction cup on lens)
- Remove `soft lenses` ✎: `Place one to two drops of saline in the eye`; `Gently pinch the lens` between your gloved thumb and index finger and lift it off — A19, B17 (figures: saline drop; pinch)
- `Advise emergency department staff if a patient is wearing contact lenses` — A19n, B17
- **Eye prosthesis** — suspect an artificial eye if ✎ (A20, B18):
  1. `The eye does not respond to light`
  2. `does not move in concert with the opposite eye`
  3. `does not appear quite the same as the opposite eye`
  4. `The patient says he or she has one` (if you are unsure, ask the patient) — A20n, B18
  - B-only: `No harm in treating like real eye` ✎; `Strive to accurately determine eye function` — B18
- **Ophthalmoscope** — A21, A21n, B26
  - `Rarely used by paramedics` ✎ — A21, B26
  - B-only: Ophthalmoscope `Used to examine structures of the eye`; Otoscope `Used to examine ear's external canal and tympanic membrane` — B26
  - A-only (A21n): consists of a `concave mirror and a battery-powered light`, usually in the handle; `A rotating selection of lenses` and adjustable depth and magnification
  - Effective evaluation requires `Dilation of the patient's pupil with medication` and `Significant diagnostic expertise` — A21, A21n
  - A-only `Skill Drill 19-1` steps (A21n):
    1. `Darken the environment`; patient looks straight ahead at a distant object
    2. Light no brighter than necessary; lens set to `0`; `Use your right hand and eye to examine the patient's right eye` (left for left)
    3. Look into the pupil from `10 to 20 inches (25 to 51 cm)` away at a `45° angle`; you should see the retina as a `red reflex` (bright orange glow); move closer to see the `fundus`; adjust lens; `Locate a blood vessel and follow it back to the disk` (point of reference)
    4. Inspect `size, color, and clarity of the disk`; note blood-vessel integrity and retinal lesions; `Move nasally to observe the macula`; repeat other eye
  - Figures: ophthalmoscope photo (A21, B26); otoscope photo (A45, B26)

## 4. Eye conditions — A22–A38, B19–B38

### 4.1 Conjunctivitis — A22–A23, B20–B21
- `Conjunctivitis` (`"pink eye"`) — conjunctiva becomes `inflamed and red` ✎ — A22, B20
- A-only: conjunctiva = `thin layer that lines inside of the eyelids and white of the eye` — A22n
- `starts in one eye and spreads to the other eye` ✎ — A22, B20
- Causes: `bacteria, viruses, allergies, chemicals, or foreign bodies` (slide lists Bacteria, Viruses, Allergies, Foreign bodies) — A22, B20
  - `Viral conjunctivitis is often associated with an upper respiratory virus` ✎
  - Bacterial — caused by bacterial infections ✎
  - `Viral and bacterial forms are highly contagious` ✎ (✍ معدي)
  - `Allergic conjunctivitis` — caused by a trigger or irritating allergen, `such as pollen` ✎
  - `Chlorine in swimming pools and air pollution` → `chemical conjunctivitis` ✎
  - Foreign body → the eye `produce tears in an attempt to flush out the object` ✎
- Assessment & management — A23, B21 ✎:
  - `Perform a general assessment of the patient's vision`; A-only components: visual acuity, `external eye`, pupils, peripheral vision, eye movement — A23n
  - `Viral conjunctivitis normally resolves on its own`
  - `Bacterial conjunctivitis requires a topical antibiotic`
  - `Severe allergic conjunctivitis` may need `NSAIDs`, `antihistamines`, and `topical steroid eye drops`
- Photo: inflamed red conjunctiva (A22, B20)

### 4.2 Inflammation of the eyelid (chalazion and hordeolum) — A24–A25, B22–B23
- `A protective film of oil glands and oil ducts across the eye` ✎ — A24n, B22
- `Chalazion`: small swollen bump or pustule on the `external eyelid` formed by `blockage and swelling of oil gland` ✎ — A24, B22; B-only `Usually painless` — B22
- `Hordeolum`: `Infection of an oil gland` that produces a `red tender lump` in the eyelid or at the `lid margin` ✎ — A24, B22; `commonly known as a stye` ✎ (✍ Hordeolum); B-only `Internal or external (stye)` — B22
- Assessment & management — A25, B23:
  - `A thorough assessment of vital signs, history, and transport` for physician evaluation
  - `apply warm compresses for 5 to 10 minutes several times a day` ✎ (slide: "warm washcloth")
  - `Topical or oral antibiotics may be prescribed`
- Photos: chalazion (A24, B22), hordeolum/stye (A24, B22)

### 4.3 Glaucoma — A26–A27, B24–B25 ✍ مياه زرقاء
- `Group of conditions that lead to increased intraocular pressure` ✎ — A26, B24
- `One of the leading causes of blindness` ✎ — A26n, B24
- `Aqueous humor` — A26n, B24: `Clear, watery fluid that fills the eye's anterior chamber`; `Maintains intraocular pressure` ✎, provides nutrients to the inner surface of the eye, and `helps to bend light`; `Circulates through the pupil and drains into the venous system by the canal of Schlemm` ✎
- Types (4) ✎ — A26, B24 (→ table T2): `Open-angle glaucoma`, `Normal-tension glaucoma`, `Narrow-angle glaucoma` (`angle-closure glaucoma`), `Secondary glaucoma`
- Secondary glaucoma = result of `conditions that damage the drainage channel` ✎; causes (6): `Diabetes`, `Eye injuries`, `Leukemia`, `Sickle cell anemia`, `Some types of arthritis` ✎, `Cataracts` — A26n, B24
- `Incidence increases with age` ✎ — A26n, B24
- `Usually treated with eye drops to reduce ocular pressures` ✎ — A26, B24
- Assessment & management — A27, B25:
  - Complaints: `Loss of field of vision (specifically peripheral vision)` ✎; B-only `Tunnel vision leading up to vision loss` ✎ — B25
  - `acute attack of narrow-angle glaucoma` ✎ may report (6): `Severe eye pain`, `Headache`, `Photophobia`, `Nausea and vomiting`, `Blurred vision`, `Halos around lights`
  - `The cornea may look cloudy` ✎; pupils often have `irregular margins` ✎ and can be `fixed in mid-position and dilated` ✎
  - `Acute narrow-angle glaucoma is a medical emergency` ✎
  - `Rule out trauma or physical injury`; `Perform a general eye assessment`; `Document pertinent negatives and abnormal findings`; `An ophthalmologist will perform a more comprehensive assessment`
  - A-only: `All patients with eye injuries or conditions should be taken to the emergency department for follow-up` — A27n

### T2 (table built from A26n/B24 — glaucoma types)
| Type | Mechanism / feature |
|---|---|
| Open-angle | `Aqueous fluid drains too slowly` ✎; pressure builds up within the eye and `damages the optic nerve` ✎; `most common type of glaucoma` ✎ |
| Normal-tension | Can cause `vision changes with no increase in intraocular pressure` ✎ |
| Narrow-angle (angle-closure) | Fluid does not drain properly due to `narrowing of the drainage channel` ✎; pressure builds in the `posterior chamber`, which `pushes the lens forward` ✎; the lens `pushes the iris into the drainage channel, completely blocking it` ✎ |
| Secondary | Result of conditions that damage the drainage channel (diabetes, eye injuries, leukemia, sickle cell anemia, some arthritis, cataracts) |

### 4.4 Central retinal artery occlusion (CRAO) — A28, B27
- `Central retinal artery occlusion` — blood supply to the retina becomes blocked ✎ because of a `clot or embolus` in the central retinal artery or one of its branches — A28, B27
- Possible causes (6) ✎ — A28n, B27: `embolus from the carotid artery`, `valvular heart disease`, `drug abuse`, `fat emboli`, `arterial spasm`, `oral contraceptive use`
- May cause `partial blindness`, `temporary or permanent` ✎ — A28, B27
- `Sudden, painless loss of vision in one eye` ✎ — A28n, B27
- A-only: symptoms may be preceded by `flickering or a transient loss of vision weeks or months before` the acute event — A28n
- ⚑ `Vision loss in central retinal vein occlusion may progress over 30 to 120 minutes` ✎ — A28n, B27
- B-only: `Can occur during sleep` ✎; slide: Rapid loss of vision — Painless ✎, Can occur during sleep, An emergency, Requires immediate transport — B27
- `Immediate transport in a situation involving a rapid loss of vision` — A28, B27

### 4.5 Iritis — A29–A30, B28–B29
- `Inflammation of the iris` — A29, B28
- Also called `anterior uveitis` ✎ — A29n, B28
- `Third leading preventable cause of blindness` — A29n, B28
- Can be `acute or chronic` ✎
  - Acute — caused by `trauma or irritants` ✎ and `usually affects only one eye`
  - Chronic causes (4): `Autoimmune diseases` ✎, `Different types of arthritis`, `Irritable bowel disease`, `Crohn's disease`
  - Infectious causes (3): `Lyme disease`, `Tuberculosis` (✍ TB), `Sexually transmitted diseases`
- Presents as `a red area surrounding the iris` ✎, `cloudy vision` ✎, or `an unusually shaped pupil` ✎ — A30, B29
- `Focus on history` — A30, B29
- `Acute iritis usually responds well to topical corticosteroids` ✎ `as long as the cause is not fungal, viral, or bacterial` ✎ — A30n, B29
- `Chronic iritis should be referred to a specialist` — A30, B29; `referred to a uveitis specialist or an ocular immunologist` — A30n, B29
- A-only: `Ninety different pathogens or autoimmune processes` can cause chronic or recurrent iritis — A30n
- B-only ⚑: `Ophthalmologists are not trained to recognize iritis` — B29
- `Iritis can result in permanent disability if left untreated` ✎ — A30n, B29
- Photo: iritis — red ring around the iris (A29, B28)

### 4.6 Papilledema — A31–A33, B30–B32 ✍ Papilledema (+ p167 "3- Papl…")
- `Papilledema` ✎ — `Swelling or inflammation of the optic nerve` ✎; A-only "at the rear part of the eye" — A31, B30
- Symptoms (4) — A31, B30: `Headaches` ✎, `Nausea with possible vomiting` ✎, `Temporary vision loss or narrowing vision fields` ✎, `A graying in the field of vision` ✎
- Causes — A32, B31: `Abscess`, `Tumor`, `Inner ear infection`, `Lung infection`, `Dental infection`; other causes: `Meningitis`, `Fever`, `Hypertensive crisis`, `Chronic high blood pressure`, `Guillain-Barré syndrome`
- `Diagnosis will be made by an ophthalmologist or physician` — A33n, B32
- Prehospital management (5) — A33, B32: `Treating symptoms`, `Transporting`, `Assessing ABCs`, `Assessing for life threats`, `Administering analgesics or a mild sedative, if needed`

### 4.7 Cellulitis of the orbit — A34–A35, B33–B35
- `Commonly caused by Staphylococcus and Streptococcus` bacterial infections — A34n, B33
- **Periorbital cellulitis** — A34, B33: `More prevalent in children than adults`; also known as `preseptal cellulitis or eyelid cellulitis` ✎; presents as `a painful, red, swollen eyelid` ✎; `Fever`; `Redness of part of the white part of the eyes` ✎; risk factors (3): `Insect bites` ✎, `Upper respiratory disorders`, `Trauma`
- **Orbital cellulitis** — A34, B34: `An infection within the eye socket`; `Considered a medical emergency`; `Goal of treatment: to avoid the formation of an abscess`; risk factors (5): `Sinusitis`, `Tooth infections`, `Facial or middle ear infections` (slide: Ear infections), `Trauma`, `Sinus infections`
- Assessment & management — A35, B35: `Treatment in children is usually IV antibiotics` ✎; `Adults are generally treated with oral antibiotics` ✎; prehospital: `Ruling out life threats`, `Obtaining a thorough history`, `Transporting the patient to the appropriate care site`

### T3 (table, A34/B33–B34) — Periorbital vs orbital cellulitis
| | Periorbital (preseptal / eyelid) | Orbital |
|---|---|---|
| Where | Eyelid | `Within the eye socket` |
| Who | More in children than adults | — |
| Seriousness | Painful, red, swollen eyelid; fever; redness of part of the white of the eye | Medical emergency; goal = avoid abscess |
| Risk factors | Insect bites; upper respiratory disorders; trauma | Sinusitis; tooth infections; facial or middle ear infections; trauma; sinus infections |

### 4.8 Corneal abrasion (or ulcer) — A36–A38, B36–B38
- A-only: `Cornea: a transparent outer covering of the eye` — A36n
- `The most common eye injury seen in emergency departments` ✎ — A36, B36
- Caused by (4) ✎: `direct trauma`, `foreign bodies`, `contact lenses`, `exposure to ultraviolet radiation` — A36, B36
- `Ulcer can develop without prompt treatment of abrasion` ✎ — `Can cause blindness if left untreated` ✎ — A36, B36
- Symptoms (7) — A37, B37: `Pain with extraocular movement`, `Redness`, `Excessive tearing`, `Sensation of having something foreign in the eye`, `Blurred vision or loss of vision`, `Photophobia`, `Headache`
- Prehospital management (3) — A38, B38: `Rule out life threats`, `Take a thorough history`, `Transport promptly`

## 5. The Ears — A39–A54, B39–B56

### 5.1 Overview & A&P — A39–A41, B40–B42
- `The primary structures for hearing and balance` — A39, B40; B-only `Integral to self-protection` — B40
- Disorders/injuries can leave a person unable to (3): `Communicate`, `React`, `Maintain equilibrium` — A39, B40
- `Changes in air pressure can cause ear discomfort` — A39n, B40
- `Tumors on cranial nerves` can affect the inner ear and balance, facial sensation, eye movement, facial movement, taste, and hearing — A39n, B40
- B-only: `Hearing loss can affect a child's ability to develop communication, language, and social skills` — B40
- `The ear is divided into three anatomic parts` ✎ — A40, B41:
  - `External ear` ✎: `Pinna`, `External auditory canal`, `External portion of the tympanic membrane` (`eardrum` ✎)
  - `Middle ear` ✎: `Inner portion of the tympanic membrane` ✎, `Ossicles` ✎
  - `Inner ear` ✎: `Cochlea`, `Semicircular canals`
- Sound waves travel through the ear, and then the internal ear structures `form nerve impulses that travel to the brain via the auditory nerve`; `The brain converts these impulses into sound` — A41n, B42 (⚑ slide wording "from nerve impulses")
- **Figure: ear** (A40, B41) — labels: `External ear`, `Middle ear`, `Inner ear`, `Auricle (Pinna)`, `External auditory canal`, `Tympanic membrane`, `Semicircular canals`, `Oval window`, `Vestibular nerve`, `Cochlear nerve`, `Cochlea`, `Vestibule`, `Round window`, `Eustachian (auditory) tube`, `Malleus`, `Incus`, `Stapes`, `Ossicles`

### 5.2 Ear — patient assessment — A42–A45, B43–B45
- Possible ear injuries — A42n, B43 ✎: `Foreign objects forced into the auditory canal can damage the eardrum`; `Ear infections may cause the eardrum to blister and bleed`; `inner ear infections may cause pressure behind the eardrum`; `Blast pressure waves can burst the eardrum`
- `Observe the scene to rule out hazards` to EMS personnel and crew — A42, B43
- As you approach, assess (4): `Approximate age and sex`, `Environmental conditions`, `degree of distress`, `Whether the patient is wearing a hearing aid` — A42, B43
- `Ensure airway patency, breathing adequacy, and circulation`; `Manage life threats`; `Take a complete history` — A43, B44
- Observe ears for (4): `Drainage`, `Excess cerumen (earwax)`, `Inflammation`, `Swelling` — A43, B44
- `Have the patient rate his or her pain using OPQRST`; A-only `Include pertinent negatives` — A44, A44n, B45
- Ask about (3): `Changes in hearing`, `Tinnitus (ringing in the ears)`, `Dizziness` — A44, B45
- Inspect and palpate for (4): `Wounds`, `Swelling`, `Drainage` (A-only: `Pus`, `Blood`, `Cerebrospinal fluid`), `Battle sign` = `discoloration and tenderness` (A-only definition) `of the mastoid process` — A44, A44n, B45
- **Otoscope** — A45, A45n, B26: `Used to visualize abnormalities of the external canal and tympanic membrane` — A45
  - A-only (A45n): `consists of a head and a handle`; head contains `an electric light source and a low-power magnifying lens`; front has attachment for a disposable plastic earpiece (`speculum`); examiner inserts the speculum and looks through a lens on the rear of the headpiece; paramedics must work in an `expanded scope of practice` and receive additional training from their medical director (also on A45 slide); `Skill Drill 19-2`; even if trained, `transport the patient to receive a complete assessment`; `Document and communicate your findings`

### 5.3 Impacted cerumen — A46–A48, B47–B49
- `Cerumen` = `yellowish, oily substance found in the outer ear canal (earwax)` — A46, B47
- Helps `prevent dirt and water from entering` the middle ear canal and may protect from `bacteria or fungus` — A46n, B47
- May present as: `Wet—a sticky brown color`; `Dry—a grayish flaky substance` — A46, B47
- Can become impacted and `cause pressure against the eardrum` — A46, B47
- `More common in older adults` — A47n, B47
- Other risk factors (3) — A47, B48: `Abnormal ear canal shape`, `Diseases that cause increased production of cerumen` (A-only example `Keratosis`), `Improper use of cotton swabs`
- Symptoms (5) — A48, B49: `Sensation of pressure or fullness in the ears`, `Dizziness`, `Ringing in the ears`, `Loss of hearing`, `Pain or itching in the ears`
- Prehospital treatment: `Thorough history`, `Visual inspection of the ear` — A48, B49
- `Treatment is aimed at removing the excess cerumen`; `Do not attempt to extract the material yourself`; `If left untreated, infection and irritation can occur`; A-only `Follow-up is necessary` — A48n, B49

### 5.4 Labyrinthitis — A49–A50, B50–B52 ✍ Labyrinthitis
- `the feeling of vertigo or loss of balance after an ear infection or upper respiratory infection` ✎(vertigo) — A49, B50
- `Effect on the nerves of the inner ear` and loss of balance from `irritation and swelling of the inner ear` — A49, B50
- Symptoms (slide): `Loss of balance`, `Ringing in the ears`, `Loss of hearing`, `Vomiting`; other symptoms (outline): ringing in the ears, `Dizziness`, loss of hearing, `Nausea`, vomiting — A49, B50
- B-only: `Possible permanent hearing loss` — B50
- Prehospital treatment directed at: `Reducing the severity of the nausea and vomiting`; `Transporting the patient in a position of comfort` — A50, B51
- `Serious disorders will need to be ruled out by a CT scan and an MRI` — A50, B51
- B-only: `Prompt treatment of respiratory and ear infections` — B52
- Hospital treatment (4) — A50n, B52: `Antiemetic for nausea and vomiting`, `Antihistamine for swelling` (B slide: to reduce swelling), `Antivertigo medicine`, `Diazepam as sedative` (B slide: `Diazepam (Valium) as a sedative/muscle relaxant`)

### 5.5 Meniere disease — A51–A52, B53–B54
- `Chronic condition of the inner ear` ✎ characterized by (4): `Dizziness described as spinning vertigo` ✎, `Low-frequency hearing loss`, `Tinnitus`, `Feeling of fullness in the affected ear` — A51, B53
- `Overproduction and defective absorption of endolymphatic fluid`, which `increases the volume and pressure within the labyrinth of the inner ear` ✎ — A51, B53
- `Distention results in rupture and mixing of the endolymph and perilymph fluids` — A51n, B53
- The mixture `disrupts the balance of fluid and electrolytes` ✎ within the labyrinth and `damages the vestibular and cochlear hair cells` ✎ — A51n, B53
- `Attacks of less than 2 hours in the early stages`; `altered balance up to 2 days` — A51n, B53
- As the disease progresses, `symptoms last hours to days` — A51n, B53
- May result in `Permanent tinnitus` ✎, `moderate to severe hearing loss` ✎, and `chronic unsteadiness` ✎ — A51n, B53
- `Prehospital care includes treating the nausea and vomiting with an antiemetic` — A52, B54
- `The physician may treat with diuretics and an antiemetic` — A52, B54
- B-only: `Limited success with surgical procedures` — B54
- **Figure (B-only, B53): `Normal` vs `Ménière disease` inner ear** — the Ménière membranous labyrinth is visibly swollen (distended endolymph space)

### 5.6 Otitis externa and media — A53–A54, B55–B56
- `Infection that results from bacterial growth in the ear canal` ✎ — A53, B55
  - `Otitis externa—infection of the outer ear` ✎
  - `Otitis media—infection of the middle ear` ✎
- `More common in children than adults` ✎ — A53, B55
- `Most commonly bacterial infections` ✎; `Otitis externa can also be an allergic or fungal reaction` ✎; `Otitis media can be virally induced` ✎ — A53n, B55
- Signs and symptoms (5) — A54, B56: `Pain`, `Itching`, `Edema and erythema` ✎, `Diminished hearing acuity`, `Inflamed, bulging tympanic membrane` on exam with otoscope
- `Prehospital treatment should be directed at relieving unbearable symptoms`: `Monitor the patient's condition`; `administer pain medication when necessary` — A54, B56
- A-only: `In the hospital setting, antibiotics may be administered`; if symptoms do not improve, `tympanocentesis (needle aspiration)` may be performed — A54n

## 6. The Nose — A55–A69, B57–B73

### 6.1 Overview — A55–A56, B58–B59
- `Susceptible to injury because of prominent location on the face` — A55, B58
- `The nose acts as a filter, humidifier, and heater` ✎ for air that enters the body — A55n, B58
- `Allergens, particles, and chemicals can cause inflammation, infection, and injury` ✎ — A55, B58
- `Complications from nasal disorders are common` — A55n, B58; A-only `Can lead to systemic infections` — A55n; B-only `Many symptoms begin as nasal infections` — B58
- `The inside of the nose is extremely vascular` ✎ — A55, B58
  - `Excellent route for some medicines` ✎ — A55, B58; A-only ⚑ `Faster than intravenous administration` — A55n
  - B-only: `Can cause nasal tissue to bleed` ✎; `Drug abuse` (slide); `Nasal mucosa offers a short route to the brain` ✎ — B58
- `Loss of smelling sensation has many causes` ✎: `Aging, smoking, allergies, rhinitis, polyps, flu` ✎, B-only `coronavirus disease 2019 (COVID-19)` ✎, `medications`, `traumatic brain injury` ✎ — A56n, B59
- Smelling disorders (5) ✎ — A56, B59 (→ table T4)
- B-only: smelling disorders `Affect sense of taste` — B59

### T4 (table, A56/B59 verbatim) — Smelling disorders
| Term | Meaning |
|---|---|
| `Anosmia` | `total loss of sense of smell` |
| `Dysosmia` | `distorted sense of smell` |
| `Hyperosmia` | `increased sensitivity to smell` |
| `Hyposmia` | `decreased sense of smell` |
| `Presbyosmia` | `loss of smell from normal aging` |

### 6.2 Nose A&P — A57–A58, B60–B61
- `One of two primary entry points for oxygen` ✎ — A57, B60
- `Warms and humidifies air as it enters the body` ✎ — A57, B60
- `Contains bony structures` ✎ — A58, B61
- `Connected with the sinuses` ✎ — A58, B61
- **Figure: nasal cavity** (A57, B60) — labels: `Septum`, `Frontal sinus`, `Superior turbinate`, `Middle turbinate`, `Inferior turbinate` (arrows show air flowing over the turbinates)
- **Figure: paranasal sinuses** (A58, B61) — labels: `Frontal`, `Ethmoid`, `Maxillary`, `Sphenoid (deep)`

### 6.3 Nose — patient assessment — A59–A60, B62–B63
- `Look for environmental clues`; `Ensure that the scene is safe`; `Determine whether airway and breathing are sufficient`; `Determine the patient's level of distress` — A59, B62
- `The vascular nature of the nasal cavities makes them susceptible to bleeding` — A59, B62
- A-only: `A severe nosebleed or condition that blocks the airway with swelling or blood is a life-threatening condition` — A59n
- `Insert an airway adjunct as needed` — A60, B63
- `Do not insert a nasopharyngeal airway or attempt nasotracheal intubation` in any patient with: `Suspected nasal fractures`; `CSF or blood leakage from the nose` — A60, B63
- `Inquire about a previous history of nose conditions or bleeding` — A60, B63
- `Always consider a hypertensive crisis when an older person has a nosebleed` ✎ — A60n, B63

### 6.4 Epistaxis — A61–A63, B65–B67
- `Epistaxis` = `Nosebleed` — A61, B65
- `Most common cause is digital trauma` ✎ — A61, B65
- Other causes: `Dryness` ✎, `Hypertension` ✎ — A61, B65
- `Two types` ✎ — A62, B66 (→ table T5)
- Assessment & management — A63, B67:
  - `Try to estimate the amount of blood loss` ✎; A-only `relay this information to the staff at the receiving facility` — A63n
  - `Place a non-trauma patient in a sitting position, leaning forward` ✎, and `pinch his or her nostrils together` ✎; B-only `with firm pressure for 20 minutes` — B67
  - `Direct the patient not to sniff or blow his or her nose` ✎ — A63, B67
- Photos: EMT pinching a child's nostrils with gauze (2 views) (A63, B67)

### T5 (table, A62/B66) — Anterior vs posterior epistaxis
| | Anterior | Posterior |
|---|---|---|
| Location | A-only: `Most typically occur in the Kiesselbach plexus` | — |
| Bleeding | `Bleed fairly slowly` | `Usually more severe` ✎ |
| Course | `Usually self-limiting and resolve quickly` | Blood `drain into the patient's throat`, `causing nausea and vomiting` |

### 6.5 Nasal foreign body — A64–A65, B68–B69
- `Most likely to be seen in pediatric patients` ✎ — A64, B68
- Pressure in the nasal passage can cause (3): `Tissue necrosis`, `Inflammation`, `Swelling` — A64, B68
- `Tissue ulceration and epistaxis caused by inflammation` — A64, B68
- `Sinusitis caused by nasal blockage` ✎ — A64, B68
- `Determine if the foreign body presents a life-threatening condition` — A65, B69
- A-only: `You may be able to see only one end of the object or not see it at all` — A65n
- `Any persistent, foul-smelling, purulent discharge from the nares should lead to suspicion of a foreign body` — A65, B69; `Let it drain` — A65, B69
- `Transport the patient in a position of comfort` — A65, B69: `Limit the ability of gravity to introduce the object further into the cavity`; `Prevent aspiration`
- `Pain management or sedation may be necessary` — A65n, B69; A-only `Consultation with medical control is advised` — A65n

### 6.6 Rhinitis — A66–A67, B70–B71
- `Inflammation of the nasal cavity` ✎ — A66, B70
- May be caused by ✎: `Bacterial infection`, `Viral infection`, `Allergens`, `Medications`, `Changes in environmental temperature`, `Other factors` — A66, B70
- Can also be caused by: `Certain medications`, `Foreign bodies`, `Irritants in the air`, `Hormonal changes in pregnancy` — A66n, B70
- Signs and symptoms (6) — A67, B71: `Nasal congestion`, `Sneezing`, `Itchy runny nose`, `Itchy eyes`, `Postnasal drip`, `Cough`
- `Keep the patient in the Fowler position` ✎; `Provide transport` — A67, B71

### 6.7 Sinusitis — A68–A69, B72–B73
- `Sinus inflammation` ✎ — A68, B72
- Occurs when `drainage from the sinuses becomes disrupted` ✎ — A68, B72; A-only `Sinuses become colonized with nasal bacteria and infected` — A68n
- Symptoms (9) ✎ — A68n, B72: `Facial pressure and pain`, `sore throat`, `nasal congestion`, `toothache`, `headache`, `fever`, `chills`, `muscle aches and pains`
- ⚑ Affects `29.3 million` (A68) / `28.9 million` (B72) `adult Americans per year` according to the `CDC`
- `Young children and older adults are more susceptible` ✎ — A68n, B72
- Can be `chronic, acute, or recurrent` ✎ — A69, B73
- Prehospital management: `treatment of any respiratory compromise and transport` ✎ — A69, B73
- `Treatment is aimed at reducing inflammation and draining the sinuses` — A69, B73
- `Mild to moderate symptoms can be treated with a saline rinse and decongestant` ✎ — A69n, B73
- `Antibiotics are typically prescribed after 7 to 10 days` ✎ — A69n, B73

## 7. The Throat (incl. mouth & neck) — A70–A105, B74–B113

### 7.1 Overview — A70–A71, B75–B76
- Disorders of the pharynx and larynx: `Acute inflammation and infections, chronic inflammation, or abnormal growths` ✎ — A70, B75
- Specific disorders (6) — A70n, B75: `Vocal cord polyps and nodules` ✎, `Contact ulcers`, `Vocal cord paralysis`, `Laryngoceles`, `Laryngeal papillomas`, `Cancer`
- `Throat infections are common in children` ✎ — A70, B75
- `Throat problems can be exacerbated by swallowing problems` ✎ — A70, B75
  - ⚑ `Cranial nerves VI, VII, IX, and XII all play a role in swallowing` ✎ — A70n, B75
  - `Neurologic problems associated with stroke or trauma can cause swallowing difficulty`
  - `Aspiration pneumonia is a life-threatening condition` ✎; A-only prehospital treatment of aspiration: `maintaining a patent airway, ensuring adequate breathing, close monitoring of vital signs, and prompt transport for definitive care` — A70n
- `Esophageal disorders can affect the throat` ✎ — A71, B76
  - `The valve at the end of the esophagus keeps acidic stomach contents from coming back up the throat`
  - `In esophageal reflux, the valve only partially closes or opens too much`
  - Symptoms (3): `Burning sensation in the chest` ✎, `Indigestion` ✎ (✍ عسر هضم), `Change in voice tone` ✎
  - `Can cause a precancerous condition`

### 7.2 Mouth & neck A&P — A72–A76, B77–B81
- `Assessment begins at the opening of the mouth with the teeth` — A72, B77
- **Figure: open mouth / teeth** (A72, B77) — labels: `Molars`, `Premolars`, `Canine`, `Incisors`
- **Figure: tooth cross-section** (A72, B77) — labels: `Enamel`, `Dentin`, `Periodontal membrane`, `Pulp with nerves and blood vessels`, `Root canal combining nerves and blood vessels`, `Crown`, `Root`
- `Hypoglossal, glossopharyngeal, trigeminal, and facial nerves supply the mouth and its structures` ✎ — A73, B78
- **Figure: salivary glands** (A73, B78) — labels: `Parotid duct`, `Parotid gland`, `Masseter muscle`, `Submandibular duct`, `Submandibular gland`, `Sublingual gland`
- `The neck consists of the anterior and posterior portions` — A74n, B79
- Anterior part includes: `Thyroid and cricoid cartilage` ✎, `Trachea`, `Numerous muscles and nerves`, `Major blood vessels` ✎ — A74, B79
- Major blood vessels: `Internal and external carotid arteries`; `Internal and external jugular veins` — A75, B80
- `Vertebral arteries run laterally to the cervical vertebrae in the posterior part of the neck` — A75n, B80
- **Figure: anterior neck** (A74, B79) — labels: `Thyroid cartilage`, `Cricoid cartilage`, `Cricothyroid membrane`, `Trachea`, `Carotid arteries`, `Sternocleidomastoid muscle`
- **Figure: neck arteries** (A75, B80) — labels: `Internal carotid`, `Carotid sinus`, `Vertebral`, `Subclavian`, `Facial`, `External carotid`, `Superior thyroid`, `Common carotid`, `Brachiocephalic`
- **Figure: veins of the neck** (A76, B81) — labels: `Retromandibular`, `Internal jugular` (×2), `External jugular`, `Subclavian`, `Right brachiocephalic`, `Facial`, `Lingual`, `Superior thyroid`, `Superior vena cava`

### 7.3 Throat — patient assessment — A77, B81–B82
- Patients with `swallowing abnormalities or copious mucous production` should be placed in a position to `allow drainage` — A77, B82
  - `Lateral recumbent or recovery position`
- `Assessing stroke patients must include early recognition of airway threats` — A77n, B82
- `For patients who cannot protect their airways and are at risk for aspiration into the lungs, intubation should be considered` — A77n, B82
- Consider `epiglottitis` if there are symptoms of (3): `Sore throat`, `Drooling`, `A forward-hanging head` — A77, B82

### 7.4 Dentalgia and dental abscess — A78–A79, B84–B86 ✍ Dentalgia
- `Dentalgia (toothache)` ✎ `can be the start of a dental abscess` ✎ — A78, B84; B-only `Cavity harbors bacteria` — B84
- `A dental abscess occurs when bacteria growth spreads directly from a cavity into the gums, facial tissue, bones, and/or neck` ✎ — A78, B85
- `It may have to be drained surgically` — A78n, B85
- B-only: `Pain relieved when ruptured` — `Drains pus`, `Reduces swelling` — B85
- Infection may have become `systemic` if the patient has (4): `Fever`, `Chills`, `Nausea`, `Vomiting` — A79n, B86
- `An abscess in the throat, neck, or under the tongue can affect the ability to breathe` ✎ — A79, B86
- `Prehospital treatment is aimed at relieving the symptoms` — A79, B86
- `Drainage into the mouth should be rinsed with warm water` (B slide: `Rinse with warm water if ruptured`) — A79n, B86
- `Encourage transport` — A79n, B86
- Photo: facial swelling over the jaw (dental abscess) (A78, B85)

### 7.5 Diseases of oral soft tissue — A80–A81, B87–B88
- `Can be root cause of other health problems` ✎ — A80, B87
- `Gum disease has been linked to heart disease, stroke, diabetes, osteoporosis` ✎, and B-only `low-birth-weight babies` ✎ — A80n, B87
- Common mouth disorders (6) — A80, B87 (→ table T6)
- B-only: `Be aware that patients may be too embarrassed to discuss condition` — B88; `Assess lumps and sores in mouth` — B88
- `Rule out urticaria and allergic reactions` when assessing mouth sores or lumps — A81, B88

### T6 (table, A80n/B87) — Oral soft-tissue disorders
| Disorder | Description |
|---|---|
| `Cold sores` | `Painful sores on the lips and around the mouth` (A-only description) |
| `Canker sores` | `Shallow, painful ulcers in the mouth` (A-only description) |
| `Oral candidiasis (thrush)` | `Yeast infection that causes white patches in the mouth or on the oral mucosa` ✎ |
| `Leukoplakia` | `Causes excess cell growth in mouth, cheek, or gums`; `Presents as white patches` |
| `Gingivitis` (✍ التهاب اللثة) | `Red swollen gums` (A-only description) |
| `Bad breath` | `Usually linked to plaque and poor oral hygiene` (A-only description) |

### 7.6 Oral candidiasis (thrush) — A82–A85, B89–B92
- `the fungus Candida albicans accumulates on the lining of the mouth` ✎ — A82, B89
- `Creamy white lesions on the tongue and inner cheeks` ✎ — A82, B89
- `May be painful and may bleed as they are rubbed or scraped` ✎ — A82, B89
- B-only: lesions `Can spread to the roof of the mouth, gums, tonsils, or pharynx` ✎ — B89
- Most likely found in (4) — A83, B90: `Babies` (B outline: `Infants`), `Patients with compromised immune systems`, `Patients who wear dentures`, `Patients who use inhaled corticosteroids`
- Additional symptoms — A84, B91: B-only `Bleeding`; `Pain`; `Cracking and redness at the corners of the mouth`; `Loss of taste`; `Cottony feeling in the mouth`; in severe cases `lesions can move down the esophagus` ✎, causing the `sensation that food is getting stuck in the throat` when swallowing
- Patients at increased risk have a history of (4) — A85, B92: `HIV/AIDS`, `Cancer`, `Diabetes`, `Vaginal yeast infections`
- `Treat higher priorities`; `Make the patient comfortable`; `encourage follow-up with physician`; A-only `Always use standard precautions` — A85, B92
- Photo: creamy white lesions on the tongue (A82, B89)

### 7.7 Ludwig angina — A86–A88, B93–B94
- `Type of cellulitis caused by bacteria from an infected tooth root or mouth injury` — A86, B93
- `Occurs on the floor of the mouth under the tongue` (B slide: floor of mouth or under tongue) — A86, B93
- `Rapid swelling and airway obstruction` — A86n, B93
- `Redness and swelling of the neck or under the chin` — A86, B93; `Tongue may be swollen` — A86n, B93
- `An airway through the nasal passages possibly needed` — A86n, B93
- Symptoms (7) — A87, B94: `Difficulty breathing`, `Difficulty swallowing`, `Neck pain`, `Neck swelling`, `Fever`, `Drooling`, `Altered speech sounds`
- B-only: `Early treatment with steroids to reduce swelling` — B94
- `Prehospital treatment requires aggressive management of the airway in severe cases` — A88, B94
- `Contact medical control physician early on` — A88 (A-only); `Remain calm and organized` (A-only, A88n); `Attend to basic ABCs` (A-only, A88)
- `Pay particular attention to the condition and smells originating in the mouth` — A88n, B94

### 7.8 Epiglottitis — A89–A91, B95–B97 ✍ Epiglottitis
- `Inflammation of the epiglottis` ✎ — A89, B95
- `Blocks the trachea and obstructs the airway` ✎ — A89, B95
- ⚑ `Often result of the Haemophilus influenzae type b virus` ✎; B-only `in unvaccinated adults` — B95
- B-only: `Hib vaccine` — B95
- Symptoms (5) — A90, B96: `Fever`, `Sore throat`, `Painful swallowing`, `Stridor`, `Respiratory distress`
- Signs (5) — A90, B96: `Patient will look sick and anxious` ✎; `sit upright in the classic tripod position or in the sniffing position` ✎; `Patient may be drooling` ✎; `Work of breathing is increased`; `Pallor or cyanosis may be evident` ✎
- `Transport to an appropriate hospital while maintaining the airway` — A91, B97
  - `Minimize on-scene time`
  - `Do not attempt procedures that might agitate the patient`
  - `Do not attempt to look in the mouth`
  - `Alert receiving personnel of suspected diagnosis and patient's condition`

### 7.9 Laryngitis — A92–A93, B98–B99 ✍ بحة
- `Swelling and inflammation of larynx associated with hoarseness or loss of voice` ✎ — A92, B98
- `Can be the result of overuse` ✎ — A92, B98
- `Most common form caused by a virus` ✎ — A92n, B98
- Can also be caused by (7): `Pneumonia`, `Irritants`, `Chemicals`, `Gastroesophageal reflux disease`, `Bronchitis`, `Allergies`, `Bacterial infections` — A92, B98
- Symptoms (3): `Fever`, `Hoarseness`, `Swollen lymph nodes or glands in the neck` — A93, B99
- `Obtain a good history to rule out evolving upper airway obstruction or an allergic reaction` — A93n, B99
- `Consider fracture of the hyoid bone` — A93, B99
- `Have the patient follow up with a physician` — A93, B99

### 7.10 Tracheitis — A94–A96, B100–B102 (p167 "4- Trachiti…")
- `Bacterial infection of the trachea caused by Staphylococcus aureus` ✎ — A94, B100
- `Frequently occurs in young children following a viral upper respiratory infection` ✎ — A94, B100
- `The trachea is easily blocked by swelling`; `It can be a life-threatening condition` — A94, B100
- Symptoms (4) — A95, B101: `Deep croup-like cough`, `Difficulty breathing`, `High fever`, `High-pitched stridor with breathing`
- Patients may exhibit: `Tripod positioning`, `Intercostal retractions`; `Can proceed from respiratory distress to respiratory failure if not addressed` — A95, B101
- Supportive prehospital care (6) — A96, B102: `Minimize stress to the patient`, `Administer 100% oxygen`, `Use pulse oximetry`, `Monitor vital signs`, `Be prepared for difficult intubation` (A-only: `Have the correct size ET tube as well as the next smaller size available`), `Transport promptly` to an appropriate facility

### 7.11 Tonsillitis — A97–A98, B103–B105
- `Swelling and inflammation of the tonsils` ✎ — A97, B103; A-only: tonsils = `oval-shaped pads of tissue at the back of the throat` — A97n
- `Usually caused by viral infections` ✎, `but can also be caused by bacteria` ✎ — A97, B103
- Symptoms (3): `Swollen tonsils`, `Sore throat`, `Difficulty swallowing` — A98, B104
- Patients present with: `Red, swollen tonsils`; `White or yellow coating or patches on the tonsils` ✎; `Fever`; `Sore throat` — A98, B104
- One or more of (6) — A98n, B105: `Pain when swallowing`, `Enlarged or tender lymph nodes in the neck`, `Bad breath`, `Headache`, `Stiff neck`, `Drooling`
- `Transport for further evaluation` (B slide: `Transport to ED for evaluation`) — A98n, B105
- Photo: red swollen tonsils with exudate (A97, B103)

### 7.12 Pharyngitis — A99–A100, B106–B107 ✍ Pharyngitis
- `Inflammation of the pharynx` — A99, B106
- ⚑ `Often due to a rapid onset of sore throat without discomfort or pain with swallowing` — A99, B106
- Symptoms (8) — A100, B107: `Fever`, `Pharyngeal erythema`, `Headache`, `Purulent, patchy yellow, gray, or white exudate`, `Nasal congestion`, `Hoarseness`, `Cough`, `Ulcers on the soft palate`
- `Treatment involves follow-up with the emergency department` — A100, B107
- `A major prehospital concern is assessment for partial airway obstruction` (B slide: `Assess for airway obstruction`) — A100n, B107
- Photo: inflamed pharynx (A99, B106; "½x")

### 7.13 Peritonsillar abscess — A101–A103, B108–B110
- `Collection of infected material around the tonsils` — A101, B108
- `Complication of tonsillitis` — A101, B108; B-only `From bacterial infection`, `made rare thanks to use of antibiotics` — B108
- `One or both tonsils are infected` ✎ — A102, B109
- `Roof of the mouth and neck or chest may be infected` — A102n, B109
- Patient may have (10) — A102, B109: `Chills`, `Difficulty opening the mouth`, `Pain with opening the mouth`, `Facial swelling`, `Fever`, `Drooling or inability to swallow saliva`, `Headache`, `Muffled voice`, `Sore throat`, `Tender glands of the jaw and throat`
- `Treatment includes antibiotics and draining the abscess`; `May include tonsillectomy`; `Hospital transport` — A103, B110
- A-only: `In some cases, condition may be life threatening` — A103n
- Photo: swollen peritonsillar area (A101, B108; "1.5x")

### 7.14 Temporomandibular joint (TMJ) disorders — A104–A105, B111–B113
- `Temporomandibular joint (TMJ)`: where the `posterior condyle of the mandible articulates with the temporal bone` — A104n, B111
- A-only: `Allows movement of the mandible`; `Allows a patient to talk, chew, and yawn` — A104n
- Causes (3) — A104, B111: `Arthritis damage to the joint's cartilage`, `Jaw injury`, `Jaw muscle fatigue from grinding or clenching of the teeth`
- Symptoms (6) — A105, B112: `Headache`, `Jaw pain`, `Aching around the ear`, `An uneven bite and/or painful bite`, `Difficulty chewing`, `Locking of the joint causing difficulty either opening or closing the mouth`
- `Usually managed by the patient's physician or dentist` — A105, B113
- B-only: `Pain medication for symptoms`; `Surgical interventions` — B113
- **Figure: skull** (A104, B111) — labels: `Temporal bone`, `Temporomandibular joint`

---

## Numbers & counts (every one)
| Value | Fact | Ref |
|---|---|---|
| `2 nerves` | eye connects to brain by two nerves | A5n, B4 |
| `CN II` | optic nerve = second cranial nerve | A5, B4 |
| `CN III` | oculomotor = third cranial nerve | A5, B4 |
| `CN IV`, `CN VI` | trochlear, abducens (work with CN III) | B4 |
| 4 | symptoms that may indicate a serious ocular condition | A9, B7 |
| 8 | things to assess for in eye exam | A10, B8 |
| 3 | ocular function tests | A13, B11 |
| `5–15 minutes` | reassess vital signs (A-only) | A14n |
| `5 minutes` | wait between first and second drop (not in emergencies) | A14n, B12 |
| 8 | uses of eye drops | A15n, B13 |
| 4 | steps to apply eye drops | A15, B14 |
| `one to two drops` | saline before soft-lens removal | A19, B17 |
| `three types` | contact lenses | A17 |
| `10 to 20 inches (25 to 51 cm)`, `45°`, lens `0` | ophthalmoscope technique (A-only) | A21n |
| `5 to 10 minutes` | warm compresses, several times a day (chalazion/hordeolum) | A25n, B23 |
| 4 | glaucoma types | A26, B24 |
| 6 | causes of secondary glaucoma | A26n, B24 |
| 6 | acute narrow-angle glaucoma symptoms | A27n, B25 |
| 6 | possible causes of CRAO | A28n, B27 |
| `30 to 120 minutes` | vision loss progression (⚑ "vein" occlusion) | A28n, B27 |
| `Third` | iritis = third leading preventable cause of blindness | A29n, B28 |
| `Ninety` | pathogens/autoimmune processes causing chronic/recurrent iritis (A-only) | A30n |
| `three anatomic parts` | ear | A40, B41 |
| `less than 2 hours` | Meniere attacks, early stages | A51n, B53 |
| `up to 2 days` | altered balance after a Meniere attack | A51n, B53 |
| `hours to days` | Meniere symptoms as disease progresses | A51n, B53 |
| 5 | smelling disorders | A56, B59 |
| `two primary entry points` | nose = one of two entry points for oxygen | A57, B60 |
| 4 | paranasal sinuses on figure (frontal, ethmoid, maxillary, sphenoid) | A58, B61 |
| `Two types` | epistaxis | A62, B66 |
| `20 minutes` | firm pinch for epistaxis (B-only) | B67 |
| `29.3 million` / `28.9 million` ⚑ | adult Americans with sinusitis per year (CDC) | A68 / B72 |
| `7 to 10 days` | antibiotics typically prescribed after (sinusitis) | A69n, B73 |
| `VI, VII, IX, and XII` ⚑ | cranial nerves in swallowing | A70n, B75 |
| 6 | specific throat disorders | A70n, B75 |
| 4 | nerves supplying the mouth | A73, B78 |
| `type b` | Haemophilus influenzae type b | A89, B95 |
| `100% oxygen` | tracheitis | A96, B102 |
| `next smaller size` | ET tube to have ready (A-only) | A96n |
| 10 | peritonsillar abscess features | A102n, B109 |
| `pp 1144-1163` | textbook pages of the competency (A-only) | A3n |

## Entities (by type)
- **Conditions (27):** conjunctivitis (viral, bacterial, allergic, chemical, foreign-body), chalazion, hordeolum (stye), glaucoma (open-angle, normal-tension, narrow-angle/angle-closure, secondary), central retinal artery occlusion, iritis (anterior uveitis), papilledema, periorbital (preseptal) cellulitis, orbital cellulitis, corneal abrasion/ulcer, impacted cerumen, labyrinthitis, Meniere disease, otitis externa, otitis media, epistaxis (anterior, posterior), nasal foreign body, rhinitis, sinusitis, smelling disorders (anosmia, dysosmia, hyperosmia, hyposmia, presbyosmia), esophageal reflux, aspiration pneumonia, dentalgia, dental abscess, oral soft-tissue diseases (cold sores, canker sores, leukoplakia, gingivitis, bad breath), oral candidiasis (thrush), Ludwig angina, epiglottitis, laryngitis, tracheitis, tonsillitis, pharyngitis, peritonsillar abscess, TMJ disorders; throat disorders list (vocal cord polyps and nodules, contact ulcers, vocal cord paralysis, laryngoceles, laryngeal papillomas, cancer).
- **Drugs / treatments:** topical antibiotic; NSAIDs; antihistamines; topical steroid eye drops; warm compresses; topical or oral antibiotics; eye drops to reduce ocular pressure; topical corticosteroids; analgesics or mild sedative; IV antibiotics (children) / oral antibiotics (adults); antiemetic; antihistamine; antivertigo medicine; diazepam (Valium); diuretics; pain medication; antibiotics/tympanocentesis; saline rinse and decongestant; 100% oxygen; steroids (Ludwig, B-only); tonsillectomy; sterile water / isotonic saline (irrigation).
- **Procedures / skills:** irrigation; eye-drop application; contact-lens removal (hard/soft); ophthalmoscopy (Skill Drill 19-1); otoscopy (Skill Drill 19-2); airway adjunct (NPA contraindications); nasotracheal intubation (contraindications); pinching nostrils; positioning (sitting leaning forward, Fowler, position of comfort, lateral recumbent/recovery, tripod/sniffing); CT scan and MRI; surgical drainage; tympanocentesis; intubation consideration; pulse oximetry; cardiac monitoring.
- **Devices:** ophthalmoscope; otoscope (speculum); suction cup; hearing aid; contact lenses (hard, rigid gas-permeable, soft); eye prosthesis; nasopharyngeal airway; ET tube.
- **Anatomical structures:** every figure label above, plus aqueous humor, canal of Schlemm, drainage channel, optic nerve, oculomotor/trochlear/abducens nerves, conjunctiva, cornea, iris, pupil, lens, retina, endolymph/perilymph, labyrinth, vestibular & cochlear hair cells, auditory nerve, mastoid process, Kiesselbach plexus, sinuses, nares, pharynx, larynx, epiglottis, trachea, hyoid bone, esophageal valve, tonsils, soft palate, floor of mouth, mandibular condyle, temporal bone; cranial nerves V (trigeminal), VII (facial), IX (glossopharyngeal), XII (hypoglossal).
- **Signs:** PERRLA, dysconjugate gaze, red reflex, Battle sign, halos around lights, cloudy cornea, tripod/sniffing position, stridor, drooling, forward-hanging head, intercostal retractions, croup-like cough, muffled voice, pallor/cyanosis.
- **Organisms:** Staphylococcus, Streptococcus, Staphylococcus aureus, Haemophilus influenzae type b, Candida albicans; Lyme disease, tuberculosis, STDs (iritis).

## Figures & photos (all)
| ID | What | Labels | Source |
|---|---|---|---|
| F1 | Eye cross-section | 17 (above) | A6, B5 |
| F2 | Lacrimal system | 6 | A7, B4 |
| F3 | Hard lens removal with suction cup | — | A18, B16 |
| F4 | Saline drops into eye (soft lens) | — | A19, B17 |
| F5 | Pinching soft lens off | — | A19, B17 |
| F6 | Ophthalmoscope photo | — | A21, B26 |
| F7 | Conjunctivitis photo | — | A22, B20 |
| F8 | Chalazion photo | — | A24, B22 |
| F9 | Hordeolum (stye) photo | — | A24, B22 |
| F10 | Iritis photo | — | A29, B28 |
| F11 | Ear anatomy | 18 | A40, B41 |
| F12 | Otoscope photo | — | A45, B26 |
| F13 | Normal vs Ménière inner ear (B-only) | `Normal`, `Ménière disease` | B53 |
| F14 | Nasal cavity / turbinates | 5 | A57, B60 |
| F15 | Paranasal sinuses | 4 | A58, B61 |
| F16–17 | Epistaxis: pinching nostrils (2 photos) | — | A63, B67 |
| F18 | Open mouth / teeth | 4 | A72, B77 |
| F19 | Tooth cross-section | 7 | A72, B77 |
| F20 | Salivary glands & nerves slide | 6 | A73, B78 |
| F21 | Anterior neck | 6 | A74, B79 |
| F22 | Neck arteries | 9 | A75, B80 |
| F23 | Neck veins | 10 | A76, B81 |
| F24 | Dental abscess photo | — | A78, B85 |
| F25 | Thrush photo | — | A82, B89 |
| F26 | Tonsillitis photo | — | A97, B103 |
| F27 | Pharyngitis photo (½x) | — | A99, B106 |
| F28 | Peritonsillar abscess photo (1.5x) | — | A101, B108 |
| F29 | Skull / TMJ | 2 | A104, B111 |
| F30 | Book cover on title slide (non-examinable) | — | B1 |

No embedded videos or hyperlinks in either file. No tables exist as pasted images; T1–T6 are rebuilt from bulleted slides.

## Non-examinable slides (safe to drop — please confirm)
- A1 / B1 title slides (B1 includes a book-cover image).
- A2–A3 NEMS competency statements (kept in the site as a one-card overview because they name "including nosebleed").
- Section-divider slides: B3 (The Eye), B19 (Pathophysiology… Eye Conditions), B39 (The Ears), B46 (… Ear Conditions), B57 (The Nose), B64 (… Nose Conditions), B74 (The Throat), B83 (… Throat Conditions).
- Copyright lines ("© Jones & Bartlett Learning", photo credits) on every slide.
- "Made with Goodnotes" footer on every B page; blank continuation pages.

## Conflicts ⚑
**(a) Between your files**
1. Sinusitis prevalence: A68 `29.3 million` vs B72 `28.9 million` adult Americans per year. Site shows both; the exam answer follows B (newer deck) unless you tell me otherwise.
2. Ear A&P slide wording: A41 & B42 slides say sound waves travel "from nerve impulses"; the notes (A41n, B42) say the internal ear structures "form nerve impulses that travel to the brain via the auditory nerve". Site uses the notes' wording.
3. Thrush: A83 "Babies" vs B90 outline "Infants" — same meaning, both shown.
4. Diazepam: A50n "Diazepam as sedative" vs B52 slide "Diazepam (Valium) as a sedative/muscle relaxant" — union.
5. Chapter number 19 (A) vs 20 (B) — not examinable.

**(b) Between your files and standard references** (your version kept for the exam; a "Beyond your notes" note explains)
1. CRAO section says "Vision loss in **central retinal vein occlusion** may progress over 30 to 120 minutes" (A28n, B27). Standard references treat retinal *vein* occlusion as a separate condition from artery occlusion.
2. Epiglottitis "Haemophilus influenzae type b **virus**" (A89, B95). Hib is a bacterium.
3. "Cranial nerves **VI**, VII, IX, and XII all play a role in swallowing" (A70n, B75). Standard references list V, VII, IX, X and XII; VI (abducens) moves the eye.
4. Pharyngitis "rapid onset of sore throat **without** discomfort or pain with swallowing" (A99, B106). Standard references describe painful swallowing as typical of pharyngitis.
5. Nose route "**Faster than intravenous** administration" (A55n, A-only). Standard references describe intranasal as fast but not generally faster than IV.
6. "Ophthalmologists are not trained to recognize iritis" (B29, B-only). This is not a standard statement; recognising iritis is core ophthalmology.
7. Otitis media described as an infection from bacterial growth "in the ear canal" (A53, B55); the middle ear is behind the eardrum, not in the canal.
