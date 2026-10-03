# read-aloud.js API reference

Contents: Options · Methods · State and events · CSS tokens · Framework snippets · How text is chosen · Troubleshooting

## Options (`ReadAloud.init(options)`)
| option | default | meaning |
|---|---|---|
| `targets` | `''` | Selector of elements that get a Listen button. Leave it empty to place your own buttons. |
| `button` | `'end'` | `'end'`, `'start'`, or `function(target, button)` to insert the button yourself. |
| `skip` | `''` | Extra selector of things never read. These are already skipped: `script, style, svg, canvas, video, audio, iframe, button, select, textarea, input, pre, kbd, [aria-hidden=true], [hidden], .ra-skip` and anything with `display:none` or `visibility:hidden`. |
| `lang` | `''` | Language of Latin-script text (`'en'`, `'fr'`…). The default comes from the nearest `lang` attribute, then `'en'`. Paragraphs that are mostly Arabic always use `'ar'`. |
| `ui` | `''` | Label language, `'en'` or `'ar'`. The default comes from `<html lang>`. |
| `rates` | `[0.75, 0.9, 1, 1.15, 1.3, 1.5]` | Steps for the speed button. |
| `rate` | `1` | Starting speed. After that, the user's last choice is remembered. |
| `voice` | `''` | Preferred voice name. Otherwise the best local or neural voice for the language is picked. |
| `storageKey` | `'read-aloud'` | localStorage key. Make it unique per project on a shared domain. |
| `remember` | `true` | Resume at the saved sentence of each element. |
| `stopOnNavigate` | `true` | Stop (place saved) on `hashchange` and `popstate`. |
| `pauseWhenHidden` | `true` | Pause when the page is hidden (screen off, app switch, call). |
| `autoScroll` | `true` | Keep the spoken word on screen, clear of fixed bars and the player. |
| `bottom` | `null` | px, or a function returning px, to keep the player above. `null` detects fixed bottom bars. |
| `clean` | `null` | `function(text, lang, element) → text`. Extra pronunciation fixes, applied to the spoken text only. |
| `keyOf` | `null` | `function(element) → string`. A stable key for the saved place. The default is the element `id`, then `data-ra-key`, then the path plus a hash of the text. |
| `onState` | `null` | `function(state)`. Called on every change. |

## Methods
- `init(options)`: merges options, injects the CSS once and attaches buttons when `targets` is set.
  Returns the API.
- `attach(root?)`: adds Listen buttons to `targets` inside `root` that don't have one yet. Call it after
  rendering new content.
- `button(element)`: returns a ready Listen button for `element`, not yet inserted.
- `read(element)`: starts reading `element`, resuming at its saved sentence. Call it from a tap, because iOS
  needs a user gesture.
- `toggle(element, button?)`: reads, or pauses/resumes if `element` is already being read. Registers `button`
  so its label follows the state.
- `pause()`, `resume()`, `next()`, `prev()`, `restart()`: move within the current session.
- `stop()`: closes the player and keeps the saved place.
- `setRate(r)`, `cycleRate()`: set or step the speed. The change applies immediately.
- `voices(lang?)`: the device's voices, optionally filtered by language.
- `setVoice(name)`: chooses a voice by name.
- `forget(element?)`: clears the saved place for one element, or for all of them.
- `state()`: returns `{ state: 'idle' | 'playing' | 'paused', index, total, sentence, word, rate, el }`.
- `destroy()`: removes the buttons, player, styles and listeners.
- `supported`: `false` when the browser has no speech synthesis. No buttons are added in that case.
- `highlightApi`: `true` when the CSS Highlight API is used, which means the page DOM is never changed.

## State and events
`document.addEventListener('readaloud:state', e => e.detail)` fires on every change and carries the same
object as `state()`. Use it to sync your own buttons or analytics.

## CSS tokens (set them on `:root`, or under your dark-mode selector)
`--ra-accent` (word background, play button, borders) · `--ra-on-accent` (text on the accent) ·
`--ra-soft` (sentence tint) · `--ra-surface` (player background) · `--ra-text` · `--ra-muted` · `--ra-line` ·
`--ra-shadow` · `--ra-radius` · `--ra-z` (player z-index).

The defaults sit in `:where(:root)`, so any rule of yours wins. The `::highlight()` colours are read from the
element being read each time Listen starts, so theme toggles take effect on the next Listen. Classes you can
style: `.ra-btn` (with `.ra-active` while reading), `.ra-player`, `.ra-pb`, `.ra-main`, `.ra-speed`,
`.ra-lab`, `.ra-toast`. In fallback mode the word spans are `.ra-w`, with `.ra-s` for the sentence and
`.ra-on` for the word.

## Framework snippets

**Plain HTML**
```html
<script src="js/read-aloud.js"></script>
<script>ReadAloud.init({ targets: '.lesson section', storageKey: 'lessons-ra' });</script>
```

**React**
```jsx
import { useEffect, useState } from 'react';
import '../lib/read-aloud.js'; // sets window.ReadAloud (SSR-safe)

export function ListenButton({ targetRef }) {
  const [st, setSt] = useState('idle');
  useEffect(() => {
    const on = e => setSt(e.detail.el === targetRef.current ? e.detail.state : 'idle');
    document.addEventListener('readaloud:state', on);
    return () => document.removeEventListener('readaloud:state', on);
  }, [targetRef]);
  if (typeof window === 'undefined' || !window.ReadAloud?.supported) return null;
  return <button type="button" onClick={() => window.ReadAloud.toggle(targetRef.current)}>
    {st === 'playing' ? 'Pause' : st === 'paused' ? 'Resume' : 'Listen'}</button>;
}
// Somewhere at app start: window.ReadAloud.init({ storageKey: 'my-app-ra' });
// On route change: window.ReadAloud.stop();
```

**Vue 3**
```js
import '@/lib/read-aloud.js';
onMounted(() => window.ReadAloud.init({ targets: '.card' }));
watch(() => route.fullPath, () => { window.ReadAloud.stop(); nextTick(() => window.ReadAloud.attach()); });
```

**Single-file build (Node)**
```js
const ra = fs.readFileSync(SKILL_DIR + '/assets/read-aloud.js', 'utf8');
html = html.replace('</body>', `<script>${ra}</script><script>ReadAloud.init({targets:'.card'})</script></body>`);
```

**Bilingual pages**: Arabic paragraphs are spoken with an Arabic voice automatically. If the device has none,
those paragraphs are skipped and the user is told. Mark mixed blocks with `lang="ar"` or `lang="en"` when the
automatic letter count would guess wrong.

## How text is chosen
Inside the element being read, the text is split into **blocks**: headings, paragraphs, list items, table
cells, and runs of inline text separated by block elements or `<br>`. Each block is cleaned, which skips
Arabic glosses in English text, citations and emoji, and reads symbols as words. The cleaned text is then
split into **sentences** of at least about 25 characters. Sentences longer than about 230 characters are
split again at a comma near the middle. Every spoken word is mapped back to a word on the page, so the
highlight lands on the right word even after `clean()` rewrote the text.

## Troubleshooting
| symptom | cause and fix |
|---|---|
| Nothing happens on the first tap on iPhone | `read()` was called after an `await` or a timer, outside the tap. Call it directly in the click handler. |
| The highlight runs ahead of or behind the voice | The voice sends no word events (Chrome with Google voices), so timing is estimated. It self-corrects after one or two sentences. Edge or Safari give exact timing. |
| The player covers a custom bottom bar | The bar isn't `position: fixed` or `sticky`. Pass `bottom: () => bar.offsetHeight`. |
| Words in an inner scrolling panel don't scroll into view | They should, because the nearest scrollable ancestor is detected. Check that the panel has `overflow-y: auto` and a fixed height. |
| Arabic is skipped | The device has no Arabic voice. See the voice install steps in SKILL.md step 6. |
| React warns about changed DOM | Only possible in fallback mode (no Highlight API, older Safari). Spans are removed on stop. Use your own button (React snippet above) instead of `targets` inside React trees. |
