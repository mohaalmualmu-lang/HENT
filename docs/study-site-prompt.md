# Prompt: build an interactive study site from your own course files

Copy everything below the line into a new Claude session (Claude Code or claude.ai with file access),
upload your files, and fill the [BRACKETS]. Works for any subject; the idea is the same each time.

---

## The idea (read this first)
Turn lecture files (slides, PDFs, notes) into a **guided learning path** that makes a student understand
and remember, not just read. Four rules make it work:
1. **The files are the only source of truth.** Nothing is invented; anything added from outside is clearly
   labelled "Beyond your notes"; conflicts between files or with standard references are flagged, never
   silently fixed.
2. **Nothing is skipped.** First build an exhaustive inventory (every slide/page, table, figure label,
   number, list, handwritten note) with slide references. At the end an automated audit proves every
   inventory item appears in the site.
3. **Learn by doing, in short steps.** One idea per page ("slide mode"): a short explanation, then
   think-first questions, then interactive practice, then recall.
4. **Spaced repetition.** Wrong answers return in flashcards on a schedule (1, 3, 7, 16, 35 days).

## Prompt
You are building an interactive study website for me.

**Subject / audience:** [e.g. BSc EMS student, HEENT emergencies]. **Site language:** [English]. **Chat with me in:** [Arabic].
**Source files (in the repo / uploaded):** [file names]. They are the ONLY source of truth.
**Exam style:** [4-option MCQ + list/spell short answers].

Work in phases and do not move on until the previous one is finished. If I say "finish everything without
stopping", run all phases and report the defaults you chose.

**Phase 1 – Inventory.** Write `docs/inventory.md`: every slide/page with reference ids, tables verbatim,
figure labels, handwriting, numbers, lists (ordered or not), conflicts between files (⚑), and slides that
are not examinable.

**Phase 2 – Plan.** Split into 5–8 modules. For each: cards, think-first questions, interactives, question
pool, flashcards, memory hooks, a summary in my language. Write `docs/plan.md` and state your defaults for
anything unclear.

**Phase 3 – Build and publish module 1 + home page.** Then **Phase 4** all other modules, tools and QA.
**Phase 5** prompts for illustrations (white background, no text, ≥1600 px).

**Content rules**
- Short cards: one idea, plain words, key terms highlighted, source slide on every card.
- Every list becomes a recall exercise with foils; every number becomes a drill; every figure becomes a
  tap-to-label exercise.
- Add "Beyond your notes" boxes only for real gaps, clearly labelled.

**Question rules**
- Authored MCQs: correct answer + a plausible trap based on a common mistake; explain why each wrong option is wrong.
- Auto-generate extra questions from every list, number and figure label.
- Short answers (list / spell) graded by Claude when available, else self-marked.

**Interactives (aim for 40+):** sorters, matchers, route/sequence builders, triage drills, case scenarios,
simulators, timers, 3D models, picture compares.

**Tools:** search, flashcards (spaced repetition), exam builder (length, modules, timer, instant/end
feedback, weakest-first results), my mistakes, numbers drill, spelling drill, cheat sheet, entity compare
hub, settings.

**Listen:** a Listen button on cards with a floating player (previous sentence, pause/resume at the same
place, next, speed) and a darker highlight on the spoken word — use the `/read-aloud` skill.

**Design:** dark-first, calm and clinical, readable fonts, light theme too, designed for a phone first
(360 px) but fine on iPad and PC. Progress bar, streak, due-cards counter.

**Technical:** one self-contained HTML file (images inlined as WebP), source split into content files and
engine files with a build script, state in localStorage (wrapped in try/catch), no backend.

**QA (must pass before you say done):** headless browser run at 360 px in both themes that clicks every
step and completes every interactive; no console errors, no horizontal overflow, no broken images;
`audit` script showing 100 % of inventory items found; list of flagged conflicts.

**Publishing:** publish as an artifact and **republish every update to the same link**. Keep
`docs/handoff.md` with status, counts, file map, decisions, and how to rebuild; commit and push to a branch
(no pull request unless I ask).

Start with Phase 1 now.
