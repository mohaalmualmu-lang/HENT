---
name: read-aloud
description: Add a "Listen" read-aloud tool to any website or web app. It reads the page's text aloud sentence by sentence with the device's own voices (free, offline, no API key), tints the sentence being read and puts a darker highlight on the word being spoken. A floating player has from-start, previous-sentence, pause/resume, next-sentence, speed and close buttons, remembers where the reader stopped, supports English and Arabic, and fits phone, iPad and desktop. Use this skill whenever the user wants text-to-speech, a listen / read-aloud / speak button, audio narration for articles, lessons, flashcards or study notes, or karaoke-style word highlighting. Also use it when they write things like "خلي الموقع يقرأ النص", "أداة الاستماع", "قراءة صوتية", "أبي أسمع النص" or "/read-aloud", even if they never mention the Web Speech API. Ships a tested drop-in script and a headless check.
---

# Read-aloud

Adds the read-aloud tool first built for an EMS study site to any web project. Everything ships in one file,
`assets/read-aloud.js` (about 40 KB unminified, no dependencies). It is already debugged against the real-world problems
listed under "Why the engine is built this way", so copy it as it is and spend your effort fitting it to the
project, not rewriting it.

What the user gets:
- A **Listen** button on each chosen block, such as a card, article or lesson section. Tapping it reads the
  text continuously, one sentence per utterance. The current sentence gets a soft tint and the spoken word a
  darker highlight that moves with the voice.
- A **floating player** with ⟲ from start · ⏮ previous sentence · ▶/❚❚ pause–resume at the same sentence ·
  ⏭ next sentence · speed (0.75–1.5×) · ✕ close. The place is saved per block, so Listen continues where the
  reader stopped, even after a reload, screen-off or call.
- **Word follow** that uses the voice's real word events where the browser sends them (Safari on iPhone, iPad
  and Mac, Edge, most Windows voices). Otherwise it uses a timed estimate that learns the voice's pace after
  each sentence.
- **Auto-scroll** that keeps the spoken word on screen and clear of sticky headers, fixed bottom bars and the
  player.
- **Arabic and English** chosen per paragraph: Arabic paragraphs use an Arabic voice, and Arabic glosses inside
  English text are skipped. The labels can be in English or Arabic.
- **No page changes while reading** where the CSS Highlight API exists (Chrome/Edge 105+, Safari 17.2+,
  Firefox 140+). Older browsers get word spans that are removed again when reading stops, which matters for
  React and Vue pages.

## Steps

### 1. Look at the project first
Work out:
- **Stack and build:** plain HTML, a single-file build, a bundler, or a framework with SSR.
- **Readable units:** which elements hold the text a learner would want to listen to (`.card`, `article`,
  `.lesson-section`, a flashcard back…). Choose units of a paragraph to a page. The whole `<body>` is too
  much, and single list items are too little.
- **Fixed bars:** sticky headers and bottom navigation (usually detected automatically), plus any custom
  bars that aren't `position: fixed`.
- **Theme:** the colour tokens, and how dark mode is switched (media query or a class/attribute toggle).
- **Text quirks:** language(s), and notation that reads badly aloud, such as citations, slide refs,
  abbreviations or symbols.

### 2. Add the script
- **Static or multi-file sites:** copy `assets/read-aloud.js` next to the other scripts, for example
  `public/js/`, then add `<script src="js/read-aloud.js"></script>`.
- **Single-file HTML builds:** inline the file in a `<script>` tag. Reading it from the skill folder at build
  time is better than pasting it by hand.
- **Bundlers:** `import './read-aloud.js'`. This sets `window.ReadAloud`, and the file also works as
  `module.exports`.
- **SSR (Next, Nuxt, SvelteKit):** the file is SSR-safe (it returns a no-op stub without `document`), but
  only call it from client code, such as `useEffect`, `onMounted` or a dynamic import.
- **Zero-code option:** `<script src="read-aloud.js" data-targets=".card, article"></script>`.

### 3. Initialise
```js
ReadAloud.init({
  targets: '.card, article',        // gets a Listen button each
  skip: '.source, .badge',          // never read these (buttons, inputs, pre, svg, hidden things are skipped already)
  storageKey: 'myproject-read-aloud'
});
```
- **Pages that render more content later** (tabs, "load more", slides): call `ReadAloud.attach(newContainer)`
  after rendering.
- **Framework-owned DOM (React, Vue, Svelte):** render your own button and call
  `ReadAloud.toggle(element, buttonElement)`. Keep the label in sync from the `readaloud:state` event or the
  `onState` option. Library-made buttons work too, but owning the button is cleaner with a virtual DOM. See
  `references/api.md` for React and Vue snippets.
- **Routing other than hash or popstate:** call `ReadAloud.stop()` on route change. The place is saved, so the
  next Listen resumes.
- Hidden content (`display:none`) is not read. That's intended, so answers behind a "reveal" stay unspoken
  until revealed.

### 4. Fit it to the project
- **Colours:** map the `--ra-*` tokens to the project's own tokens. If dark mode is a class or attribute
  toggle, set the tokens under that selector too. The defaults follow `prefers-color-scheme`.
  ```css
  :root{--ra-accent:var(--brand);--ra-on-accent:#fff;--ra-soft:color-mix(in srgb,var(--brand) 20%,transparent);--ra-surface:var(--card);--ra-text:var(--fg);--ra-line:var(--border)}
  ```
  Keep the contrast of `--ra-on-accent` on `--ra-accent` at 4.5:1 or more, because the spoken word is drawn
  in those colours.
- **Pronunciation:** use the `clean(text, lang, el)` option for project notation. It runs on the spoken text
  only, and the highlight still lines up because spoken and page words are aligned with a
  longest-common-subsequence match. For example:
  ```js
  clean: (t, lang) => lang === 'en' ? t
     .replace(/\((?:[AB]\d+n?(?:[–,\s-]+[AB]?\d+n?)*)\)/g, ' ')                 // slide refs "(A22n, B20)"
     .replace(/\bCN\s+(XII|XI|X|IX|VIII|VII|VI|V|IV|III|II|I)\b/g, (m, r) =>
        'cranial nerve ' + (['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'].indexOf(r) + 1)) : t
  ```
  Arrows, en-dash ranges, °, ≥/≤, e.g./i.e., emoji and `[1]` citations are already handled.
- **Language:** `lang` sets the page's main Latin-script language (the default comes from `<html lang>`), and
  `ui: 'ar'` switches the labels to Arabic.
- **Player position:** use `bottom` only if the player overlaps a bar that isn't `position: fixed`.

### 5. Verify
Run the bundled headless check. It uses a simulated voice, so it works without audio:
```bash
node <skill-dir>/scripts/check.mjs path/to/page.html            # or http://localhost:3000/lesson
node <skill-dir>/scripts/check.mjs page.html --target "#lesson-1" --shots qa-shots
```
The check covers:
- The Listen button opens the player.
- The highlighted word advances, both with word events and on estimated timing.
- Pause, previous sentence, resume at the same sentence, speed, close, and resume-after-reload all work.
- The page DOM is untouched while reading, or restored exactly in fallback mode.
- There's no horizontal overflow, and the spoken word stays visible at 360×780, 780×360, 568×320, 820×1180,
  1180×820 and 1366×900, in light and dark.

It needs Playwright with Chromium (`npm i -D playwright && npx playwright install chromium`, or pass
`--chromium <path>`). Fix every FAIL and look at the screenshots. If Playwright can't be installed, at least
load the page and confirm `ReadAloud.supported` and that a Listen click shows the player.

### 6. Tell the user
Keep it short, and in the user's language:
- What was added and where.
- Real audio can't be heard in a sandbox. Ask them to try it on their phone.
- Word timing is exact on iPhone, iPad, Safari and Edge, and estimated on Chrome with Google voices, where it
  improves after the first sentence.
- Arabic needs an Arabic voice on the device:
  - iPhone/iPad: Settings → Accessibility → Spoken Content → Voices → Arabic.
  - Android: Settings → Text-to-speech → Google → install Arabic.
  - Windows: Settings → Time & language → Speech → add an Arabic voice.
- Browsers only start speech after a tap, so there's no autoplay on page load.

## Why the engine is built this way (don't undo these)
- **One utterance per sentence, never per word.** Speech stays natural, ⏮ and ⏭ have something to step
  through, and a pause can resume at a sentence boundary. The Web Speech API can't seek inside an utterance.
- **The first `speak()` runs synchronously inside the tap.** iOS refuses speech that isn't started by a user
  gesture.
- **A token is bumped before every `cancel()`, and stale events are ignored.** Otherwise a cancelled
  utterance's `onend` advances the wrong sentence.
- **Each utterance is kept in a variable.** Chrome can garbage-collect it and never fire `onend`.
- **There's an 80 ms delay before speaking after a cancel while busy.** Some engines drop the new utterance
  otherwise.
- **Long sentences split at a comma, and online voices get a 10 s pause/resume nudge (not on Android).** This
  works around Chrome's online voices going silent after about 15 seconds.
- **A watchdog and a `visibilitychange` handler pause the session.** When speech silently dies, the user can
  press ▶ and continue from the same sentence.

## Files
- `assets/read-aloud.js`: the library. Copy it unchanged.
- `assets/demo.html`: a working example with a sticky header, a fixed bottom bar, mixed inline text, a table,
  and an Arabic card. Open it to try the tool.
- `scripts/check.mjs`: the headless verification described in step 5.
- `references/api.md`: every option, method, event and CSS token, with React, Vue and single-file snippets.
  Read it when you need more than the steps above.
