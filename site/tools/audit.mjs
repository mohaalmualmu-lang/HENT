// Coverage audit: every `backticked` phrase in docs/inventory.md must appear in
// the built site (dist/index.html), after normalising tags, quotes and case.
// Usage: node site/tools/audit.mjs   (exit 1 if anything is missing)
import fs from 'fs'; import path from 'path'; import { fileURLToPath } from 'url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const inv = fs.readFileSync(path.join(ROOT, 'docs/inventory.md'), 'utf8');
const html = fs.readFileSync(path.join(ROOT, 'dist/index.html'), 'utf8');
const norm = s => s.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\\'/g, "'")
  .replace(/[’‘]/g, "'").replace(/[“”]/g, '"').replace(/[–—]/g, '-').replace(/\s+/g, ' ').toLowerCase().trim();
const site = norm(html.replace(/data:image\/webp;base64,[A-Za-z0-9+/=]+/g, ''));
const lines = inv.split('\n');
const items = []; let section = '';
lines.forEach((l, i) => {
  if (/^#+ /.test(l)) section = l.replace(/^#+ /, '');
  for (const m of l.matchAll(/`([^`]+)`/g)) items.push({ p: m[1], line: i + 1, section });
});
const skip = new Set(['HEENT Emergencies.pptx', 'EENT & Note.pdf', 'site/src/content/meta.js', 'INSTRUCTOR_DECK', 'site/tools/audit.mjs', 'backticks']);
const missing = []; let checked = 0;
for (const it of items) {
  if (skip.has(it.p) || /[؀-ۿ]/.test(it.p) && !site.includes(norm(it.p))) { if (skip.has(it.p)) continue; }
  checked++;
  const n = norm(it.p);
  if (!site.includes(n)) missing.push(it);
}
const uniq = [...new Map(missing.map(m => [m.p, m])).values()];
console.log(`Inventory phrases checked: ${checked} (unique ${new Set(items.map(i => i.p)).size})`);
console.log(`Found in site: ${checked - missing.length}/${checked} = ${((checked - missing.length) / checked * 100).toFixed(1)}%`);
if (uniq.length) { console.log('\nMISSING (' + uniq.length + '):'); uniq.forEach(m => console.log(`  L${m.line} [${m.section.slice(0, 40)}] ${m.p}`)); process.exit(1); }
console.log('COVERAGE 100%');
