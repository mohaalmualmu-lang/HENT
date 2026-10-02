// Build: concatenates the source parts into one self-contained HTML file.
// Usage: node site/tools/build.mjs   ->  dist/index.html
import fs from 'fs'; import path from 'path'; import { fileURLToPath } from 'url';
const SITE = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const ROOT = path.dirname(SITE);
const rd = p => fs.readFileSync(path.join(SITE, p), 'utf8');
const ENGINE = ['content/meta.js', 'engine/core.js', 'engine/quiz.js', 'engine/figures.js', 'engine/ix.js', 'engine/sims.js', 'engine/three3d.js', 'engine/claude.js', 'engine/render.js', 'engine/tools.js'];
const CONTENT = fs.readdirSync(path.join(SITE, 'src/content')).filter(f => /^m\d+\.js$/.test(f)).sort().map(f => 'content/' + f);
const imgs = {};
for (const f of fs.readdirSync(path.join(SITE, 'assets/out'))) if (f.endsWith('.webp')) imgs[f.replace('.webp', '')] = 'data:image/webp;base64,' + fs.readFileSync(path.join(SITE, 'assets/out', f)).toString('base64');
const figs = JSON.parse(rd('src/figures.gen.json'));
const js = [...ENGINE, ...CONTENT, 'engine/main.js'].map(p => `/* ---- ${p} ---- */\n` + rd('src/' + p)).join('\n');
const html = rd('src/head.html') + `<style>\n${rd('src/engine/styles.css')}\n</style>\n<noscript><p style="padding:16px">This study site needs JavaScript.</p></noscript>\n<script>\nconst IMG = ${JSON.stringify(imgs)};\nconst FIGS = ${JSON.stringify(figs)};\n</script>\n<script>\n${js}\n</script>\n`;
fs.mkdirSync(path.join(ROOT, 'dist'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'dist/index.html'), html);
console.log('dist/index.html', (html.length / 1024).toFixed(0) + ' KB', CONTENT.length + ' content modules');
