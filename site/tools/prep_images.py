#!/usr/bin/env python3
"""Image prep for the EENT study site.

* Labelled figures (site/src/figures.json): every baked-in label box is erased
  (filled with the median colour of a thin ring around the box) so the site can
  redraw the labels as tappable HTML chips. Label centres are written back as
  percentages to site/src/figures.gen.json.
* Photos and illustrations: resized and compressed.
Output: site/assets/out/<id>.webp
Run: python3 site/tools/prep_images.py
"""
import json, os, statistics
from PIL import Image, ImageDraw

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'assets', 'src')
OUT = os.path.join(ROOT, 'assets', 'out')
os.makedirs(OUT, exist_ok=True)

PHOTOS = {
    # id: (source file, max width, quality, caption, ref)
    'lens_hard': ('S018_19460.jpg', 520, 62),
    'lens_drops': ('S019_20484.jpg', 520, 62),
    'lens_soft': ('S019_20485.jpg', 520, 62),
    'ophthalmoscope': ('S021_22532.jpg', 220, 65),
    'conjunctivitis': ('S022_23557.jpg', 620, 62),
    'chalazion': ('S024_25605.jpg', 560, 62),
    'hordeolum': ('S024_25606.jpg', 560, 62),
    'iritis': ('S029_9541637.jpg', 620, 62),
    'otoscope': ('S045_46084.jpg', 220, 65),
    'epistaxis1': ('S063_63492.jpg', 560, 60),
    'epistaxis2': ('S063_63493.jpg', 560, 60),
    'dental_abscess': ('S078_78853.jpg', 560, 60),
    'thrush': ('S082_82949.jpg', 440, 62),
    'tonsillitis': ('S097_98309.jpg', 600, 62),
    'pharyngitis': ('S099_100356.jpg', 600, 62),
    'peritonsillar': ('S101_102405.jpg', 600, 62),
    'meniere': ('B53_meniere.png', 216, 80),
}


def ring_median(im, box, pad=4, ring=5):
    x, y, w, h = box
    W, H = im.size
    px = im.load()
    xs0, ys0 = max(0, x - pad - ring), max(0, y - pad - ring)
    xs1, ys1 = min(W - 1, x + w + pad + ring), min(H - 1, y + h + pad + ring)
    samples = []
    for yy in range(ys0, ys1 + 1):
        for xx in range(xs0, xs1 + 1):
            inner = (x - pad <= xx <= x + w + pad) and (y - pad <= yy <= y + h + pad)
            if not inner:
                samples.append(px[xx, yy])
    if not samples:
        return (255, 255, 255)
    return tuple(int(statistics.median(c[i] for c in samples)) for i in range(3))


def inpaint(im, box, pad=3):
    """Fill the box by blending the 4 boundary pixels of each row/column
    (inverse-distance weights) so labels sitting on shaded skin vanish
    without leaving a flat patch."""
    x, y, w, h = box
    W, H = im.size
    x0, y0 = max(1, x - pad), max(1, y - pad)
    x1, y1 = min(W - 2, x + w + pad), min(H - 2, y + h + pad)
    px = im.load()
    def med(pts):
        return tuple(sorted(p[i] for p in pts)[len(pts) // 2] for i in range(3))
    left = [med([px[x0 - 1, yy], px[max(0, x0 - 3), yy], px[max(0, x0 - 5), yy]]) for yy in range(y0, y1 + 1)]
    right = [med([px[x1 + 1, yy], px[min(W - 1, x1 + 3), yy], px[min(W - 1, x1 + 5), yy]]) for yy in range(y0, y1 + 1)]
    top = [med([px[xx, y0 - 1], px[xx, max(0, y0 - 3)], px[xx, max(0, y0 - 5)]]) for xx in range(x0, x1 + 1)]
    bot = [med([px[xx, y1 + 1], px[xx, min(H - 1, y1 + 3)], px[xx, min(H - 1, y1 + 5)]]) for xx in range(x0, x1 + 1)]
    for yy in range(y0, y1 + 1):
        for xx in range(x0, x1 + 1):
            dl, dr, dt, db = xx - x0 + 1, x1 - xx + 1, yy - y0 + 1, y1 - yy + 1
            ws = (1 / dl, 1 / dr, 1 / dt, 1 / db)
            cs = (left[yy - y0], right[yy - y0], top[xx - x0], bot[xx - x0])
            t = sum(ws)
            px[xx, yy] = tuple(int(sum(wv * c[i] for wv, c in zip(ws, cs)) / t) for i in range(3))


def save(im, name, maxw, q):
    if im.width > maxw:
        im = im.resize((maxw, round(im.height * maxw / im.width)), Image.LANCZOS)
    path = os.path.join(OUT, name + '.webp')
    im.save(path, 'WEBP', quality=q, method=6)
    return im.size, os.path.getsize(path)


def main():
    figs = json.load(open(os.path.join(ROOT, 'src', 'figures.json')))
    gen = {}
    total = 0
    for fid, f in figs.items():
        im = Image.open(os.path.join(SRC, f['src'])).convert('RGB')
        W, H = im.size
        d = ImageDraw.Draw(im)
        labels = []
        for text, ar, box in f['labels']:
            inpaint(im, box)
            x, y, w, h = box
            labels.append({'t': text, 'ar': ar,
                           'x': round((x + w / 2) / W * 100, 2),
                           'y': round((y + h / 2) / H * 100, 2)})
        size, nbytes = save(im, 'fig_' + fid, 1000, 70)
        total += nbytes
        gen[fid] = {k: v for k, v in f.items() if k not in ('labels', 'src')}
        gen[fid].update({'img': 'fig_' + fid, 'w': size[0], 'h': size[1], 'labels': labels})
        print(f'fig {fid:10s} {size} {nbytes/1024:.0f} KB, {len(labels)} labels')
    for pid, (src, maxw, q) in PHOTOS.items():
        im = Image.open(os.path.join(SRC, src)).convert('RGB')
        size, nbytes = save(im, 'ph_' + pid, maxw, q)
        total += nbytes
        print(f'photo {pid:14s} {size} {nbytes/1024:.0f} KB')
    json.dump(gen, open(os.path.join(ROOT, 'src', 'figures.gen.json'), 'w'), ensure_ascii=False, indent=1)
    print(f'TOTAL {total/1024:.0f} KB')


if __name__ == '__main__':
    main()
