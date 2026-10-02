# Handoff — EENT Emergencies Lab

**Artifact (always republish to this link):** https://claude.ai/artifact/DK4MdfxE2r73XBRhWQjS23
**Repo branch:** `claude/eent-study-site` (repo `mohaalmualmu-lang/hent`)

## Status
All phases done in one run (you asked me not to stop): Phase 1 inventory → Phase 2 plan → Phase 3 home + Module 1 (published) → Phase 4 Modules 2–6 + tools, full QA + 100 % coverage audit → Phase 5 illustration prompts written (no images generated yet).

## What's inside
6 modules · 81 cards · 6 think-first reveals · 6 rebuilt tables (T1–T6) · 12 tap-to-label figures (94 labels, EN/Arabic) · 15 photos/drawings · 45 interactives (2 three.js 3D models, 5 simulators, 7 clinical cases, sorters, matchers, route builders, triage drills, picture compares, timers) · 170 authored MCQs (7 picture questions) inside a 556-question pool (auto-built from every list, number and figure label) · 36 short answers (Claude-graded when available, else self-marked) · 36 spelling terms · 127 lists / 577 list items · 44 numbers · 49 entities · 222 flashcards (SRS 1·3·7·16·35 days) · 28 memory hooks · Arabic summary per module · 16 ⚑ flags.

Tools: search, flashcards, exam builder (length, modules, timer, instant/end feedback, short answers, weakest-first results with drill, weighted mixed review), my mistakes, numbers drill, spelling drill (+ your handwriting table), cheat sheet, entity hub (compare + “which one is it?”), visual lab (+ picture quiz), Arabic summary page, settings.

## Files
- `docs/inventory.md` — Phase 1 inventory (every item with A/B slide refs; ⚑ conflicts; non-examinable slides).
- `docs/plan.md` — Phase 2 plan and the defaults chosen for the 3 open questions.
- `docs/illustration-prompts.md` — 10 prompts (send 1 and 2 first) + review checklist.
- `site/src/content/m1.js … m6.js` — all content per module (cards, lists with foils, MCQs, short answers, numbers, spelling, flashcards, entities, hooks, Arabic summary). `meta.js` holds `INSTRUCTOR_DECK`.
- `site/src/engine/*` — styles, core, quiz, figures, interactives, simulators, 3D, Claude hook, renderer, tools.
- `site/src/figures.json` — figure label boxes (source); `figures.gen.json` — generated label positions.
- `site/tools/prep_images.py` — erases baked-in labels, compresses to WebP (`site/assets/out`).
- `site/tools/build.mjs` → `dist/index.html` (single self-contained file, ~1.1 MB).
- `site/tools/qa.mjs` — headless QA (360 px, dark + light; clicks every step, completes every interactive, opens every tool; console errors, overflow, broken images, audio gain). Needs `site/tools/vendor/three.r128.min.js` (git-ignored; `npm pack three@0.128.0`).
- `site/tools/audit.mjs` — coverage audit of every `backticked` inventory phrase against the build.

Rebuild: `python3 site/tools/prep_images.py && node site/tools/build.mjs && node site/tools/audit.mjs && node site/tools/qa.mjs`.

## Update — slides + listen
- Modules now open in **slide mode**: one step per page (card, question, figure, interactive, case), with Back / Next, swipe left/right, arrow keys, section jump, and the 5 “Finish strong” pages at the end. Settings → Module layout switches back to one scrolling page.
- **Listen**: every study card and think-first answer has a Listen button (and a speaker button in the slide bar). It reads the card’s English paragraphs sentence by sentence and highlights the part being read; Arabic text and slide refs are skipped. Settings: auto-read each card when its slide opens, speed (0.75×–1.3×), voice. The Arabic summary gets its own Listen button when the device has an Arabic voice.
- **Reading player** (appears while reading): ⟲ from start · ⏮ previous sentence · ▶/❚❚ pause–resume at the same sentence · ⏭ next sentence · speed button (0.75–1.5×, changes immediately) · ✕ close. The sentence you stopped at is saved per card (`S.listenPos`), so Listen resumes there after a pause, a closed reader, a slide change, a reload, or an interruption (screen off / call / browser dropping speech).
- **Word follow**: the sentence is read continuously (one utterance, never word by word) while the word being spoken gets a darker highlight inside the sentence highlight. It uses the voice's real word events where the browser sends them (Safari on iPhone/iPad/Mac, Edge, most Windows voices) and otherwise a timed estimate that learns the voice's pace after each sentence and remembers it (`S.wcal`). Spoken text and page words are matched with a longest-common-subsequence alignment (handles "CN VII" → "cranial nerve 7", "→" → "leads to", dropped slide refs); checked on all 395 slides / 6,038 words with no out-of-order jumps. The page scrolls so the spoken word stays in the part of the screen not covered by the controls. Works for the Arabic summary too.
- **Phone / iPad / PC**: checked at 360×780, 375×667, 390×844, landscape 568×320, 667×375, 780×360, 844×390, iPad 820×1180 and 1180×820, desktop 1366×900, dark and light: no horizontal overflow, the spoken word always visible. On short landscape screens the header scrolls away, the bottom bar is compact and the reading player sits beside Back/Next in one row.
- Chrome's online Google voices stop after ~15 s: long sentences are split at a comma near the middle (no chunk over ~225 characters) and the voice is nudged every 10 s (not on Android).
- Code: `site/src/engine/speech.js` (Speech session + Player); slide mode in `renderModuleSlides()` (`render.js`).

## Key decisions (change any of them)
1. Instructor deck assumed = **B** (`EENT & Note.pdf`); only affects ★ on A-only/B-only badges.
2. Exam format assumed = mostly 4-option MCQ + short answers that ask you to **list** or **spell** (from your p167 note).
3. Slide images are used inside your private artifact for personal study.
4. Sinusitis number: questions follow B (28.9 million); A’s 29.3 million is shown and drilled too.
5. Conflicts with standard references are kept as your notes say, flagged ⚑ with a note.

## Next
- Answer the 3 defaults if any are wrong.
- Generate illustrations 1–2 from `docs/illustration-prompts.md`, send them back for checking; then 3–10.
