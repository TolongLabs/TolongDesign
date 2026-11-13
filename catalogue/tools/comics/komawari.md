---
name: Manga Panel Layout Generator
slug: komawari
section: Comics
section_slug: comics
source_url: https://tools.oyasumi-gamedev.com/komawari/
designeer_url: https://oyasumi-gamedev.com/tools/komawari/
designeer_blurb: Free tool that makes batches of manga panel-layout options.
paywall: free
pricing_summary:
  Free, no sign-up, no paid tier, no export limit. Exports carry no credit
  requirement.
open_source: false
license: proprietary
category_tags: [comics, manga, layout, svg, generative, browser-tool]
best_for:
  [
    manga page layouts,
    storyboard grids,
    panel guides for CLIP Studio Paint,
    comic-style page mockups,
    poster grids
  ]
stack: ['browser']
execution_mode: browser-app
surface: ['comics', 'print']
status: active
agent_friendly: true
last_verified: 2026-10-14
---

# Manga Panel Layout Generator

> Free tool that makes batches of manga panel-layout options.
>
> Reach for it when a page needs a panel grid that is more interesting than even
> columns, and you would rather pick one from a batch of twelve to forty-eight
> than draw rules by hand.

## At a glance

| Field          | Value                                                                             |
| -------------- | --------------------------------------------------------------------------------- |
| Source         | [tools.oyasumi-gamedev.com/komawari](https://tools.oyasumi-gamedev.com/komawari/) |
| Paywall        | **Free** — no account, no paid tier                                               |
| Open source    | No — `proprietary`; output files are free to use                                  |
| Type           | Browser panel-layout generator (コマ割りジェネレーター)                           |
| Works with     | Any browser; output feeds CLIP STUDIO PAINT, Photoshop, Blender, the web          |
| Best for       | Manga pages, storyboard grids, comic page mockups                                 |
| Agent-friendly | Yes — `?lang=en`, `#` share links, stable `#id` selectors                         |

## What it is

A free, single-page browser app by MIYADAIKU (おやすみゲーム開発部). It draws
manga panel layouts with a random-number generator and shows them as a batch of
cards — 12, 24 or 48 at a time — so you pick a page structure instead of drawing
one.

Every layout is a "genome": each tier's height ratio, the tilt of each tier
divider, each column's width ratio inside a tier, where a panel is split, and
which edges bleed past the paper. The page format is applied on top of that
genome, so one genome fits a B5 manuscript, a 4:5 social image or a square. That
split is what makes mutate mode possible. Layouts come from a seeded PRNG
(Mulberry32 over an FNV-1a hash of the seed text), so the same seed and settings
always rebuild the same batch. The app is one HTML file of about 153 KB, no
libraries, no AI, no server call. The author states the program was written with
Claude Code.

Two things to know. Layouts are generated in manga reading order (right to
left), and the comics direction is its exact horizontal mirror: the same seed
gives a mirror image rather than a new draw. And the SVG holds panel outlines
only — reading numbers and the inner-frame guide are preview-only.

## Paywall and pricing

- **Free:** everything. No account, no login, no export limit, no watermark, and
  no ads inside the app.
- **Paid:** none. There is no pricing page and no paid tier.
- **Sign-up required?** No.
- **Licence for client work:** two separate things. The app itself is
  `proprietary` — no public repository, no published source licence — so do not
  rehost or vendor the file. The exported SVG and PNG may be used for anything,
  commercial or not, with no credit required.

The article's FAQ, verbatim:

> 「はい。書き出したコマ割り（SVG・PNG）は、商用・非商用を問わず自由に使えます。クレジットの表記も要りません。」

"Yes — exported layouts (SVG and PNG) may be used freely, commercial or
non-commercial, and no credit notice is required." The app footer states only
that nothing is uploaded. Credit, where you give it, goes to MIYADAIKU
(おやすみゲーム開発部). Checked 2026-10-14.

## How to use

Open https://tools.oyasumi-gamedev.com/komawari/?lang=en for the English UI. The
Japanese UI differs only in labels.

1. Pick a preset chip: **Orderly / Dialogue** (整然・会話), **Standard** (標準),
   **Action** (アクション) or **Splash / Title page** (見せゴマ・扉). It sets
   the sliders and the tier dropdown; moving any slider clears the chip.
2. Set **Format** (判型) to `Manga page (B5/A5)`, `Social portrait 4:5` or
   `Square 1:1`, and **Reading** (読む向き) to `Right→left (manga)` or
   `Left→right (comics)`.
3. Adjust the sliders: **Horizontal tilt** (横線の斜め), **Vertical tilt**
   (縦線の斜め), **Bleed** (断ち切り), **Inner splits** (コマ内分割), **Big
   panels** (大ゴマ率), **Border width** (枠線太さ).
4. Type a **Seed**, or press **Generate new batch** (🎲 新しい束を生成) for a
   random six-character one. Press again for another batch.
5. Click a card to open the enlarged view. The caption reads
   `#3/24 · 7 panels · seed: SC-2026#3` — card three of that seed's batch.
   Numbers on the cards are the reading order.
6. Fix a page that is almost right: drag a divider (grab within about 10 screen
   px — it turns orange when you are close), click panels to select, **Shift**
   extends the selection, then press **Delete** or **Delete selected**
   (🗑 選んだコマを消す). Ctrl+Z and **Undo** (↶ 元に戻す) restore, 50 steps per
   card. An edited card is marked `edited`, and its share link carries the edit.
7. Press **Mutate from this** (🧬 これをベースに変異) for variations that keep
   this page's skeleton. **Mutation** (変異度) sets how far they drift; **Back
   to gacha** (⟲ ガチャに戻る) leaves the mode.
8. Export with **Save SVG** or **Save PNG (2400px tall)**, or press **Copy
   link** for a URL that reopens this exact page.

Reading order runs right to left for `manga` and left to right for `comics`, top
to bottom in both. The Seed box also takes a whole card reference: type
`SC-2026#5` and press Enter to rebuild that batch and open card 5.

### Inputs and parameters

There is no file import of any kind — no `<input type="file">` exists in the
app. Everything goes in through the controls.

| Control (id)              | English label         | Values / range / default                                                      |
| ------------------------- | --------------------- | ----------------------------------------------------------------------------- |
| `#chips` buttons          | presets               | Orderly / Dialogue, Standard, Action, Splash / Title page                     |
| `#ratio`                  | Format                | `0.708` Manga page B5/A5 (default), `0.8` Social portrait 4:5, `1` Square 1:1 |
| `#dir`                    | Reading               | `rtl` Right→left (manga), `ltr` Left→right (comics)                           |
| `#rows`                   | Tiers                 | 1–2, 1–3, 2–3, 2–4 (default), 3–4                                             |
| `#pcOn` `#pcMin` `#pcMax` | Set panel count       | off by default; 1–24 each, defaults Min 4, Max 7                              |
| `#tiltH`                  | Horizontal tilt       | 0–100, default 25                                                             |
| `#tiltV`                  | Vertical tilt         | 0–100, default 25                                                             |
| `#bleed`                  | Bleed                 | 0–100, default 20                                                             |
| `#nest`                   | Inner splits          | 0–100, default 20                                                             |
| `#big`                    | Big panels            | 0–100, default 20                                                             |
| `#lineW`                  | Border width          | 2–10, default 4 (SVG `stroke-width` in viewBox units)                         |
| `#count`                  | Count                 | 12, 24 (default), 48                                                          |
| `#seed`                   | Seed                  | free text, max 64 chars, default `SC-2026`; `name#n` opens card n             |
| `#numbers`                | Reading-order numbers | checked; preview only                                                         |
| `#guide`                  | Inner frame guide     | checked; preview only                                                         |
| `#mut`                    | Mutation              | 5–100, default 35 (mutate mode only)                                          |

Preset values from the source: Orderly / Dialogue is tilt 0/0, bleed 5, splits
15, big panels 8, tiers 3–4. Standard is 25/25, 20, 20, 20, tiers 2–4. Action is
55/55, 45, 28, 35, tiers 2–3. Splash / Title page is 40/40, 75, 10, 70, tiers
1–3. Count is a real cost: 48 layouts means 48 whole SVG documents in the page.

### Export and hand-off

- **SVG** — one `<svg>`, a white background `<rect>`, then one `<polygon>` per
  panel. `viewBox` is `0 0 708 1000` for B5, `0 0 800 1000` for 4:5,
  `0 0 1000 1000` for square, and `width`/`height` carry real units: `182mm` x
  `257mm`, `1080` x `1350`, `1080` x `1080`. A `<title>` holds the file stem, a
  `<desc>` the share link.
- **PNG** — rasterised in the page at 2400 px tall, width following the format
  (B5 gave 1699 x 2400). White background, no transparency.
- **File names** follow
  `komawari_<seed>_<g03|m03|base>_<b5|sns|sq>[_ltr]_<hash6>.<ext>`; a real one
  was `komawari_2Q89QA_g03_b5_ltr_6b9c0f.svg`. The hash covers the genome, the
  page size and the border weight, so two layouts never collide.
- **Clipboard** — only **Copy link**. Batch ZIP and clipboard PNG belong to the
  sibling speech balloon tool.

Into CLIP STUDIO PAINT, as the app footer and the article describe:

1. **PNG underlay, then split frame borders (their recommendation).** Import the
   PNG, put it under the manuscript, make one [Panel frame folder], then drag
   with the [Panel frame] tool's [Split frame border] along the lines. A few
   drags give real panels with masks. Splitting frame borders is PRO/EX only.
2. **SVG as vectors.** [File] → [Import] → [Vector] turns the SVG into a vector
   layer (CLIP STUDIO PAINT 1.10.0 and later). The lines are usable as they are,
   but no panel-folder masks are created.
3. **Register the result as material.** Turn a layout into panels once, register
   it, and drag it from the material palette next time.

Elsewhere the exports are ordinary files. Photoshop takes the PNG as a guide
layer and can place the SVG as a smart object, keeping the vectors — but the SVG
has no layer groups, so one-panel-per-layer means importing it into a vector
editor instead. Blender takes the PNG as a viewport reference image or an image
texture. On the web the SVG drops straight into HTML: each panel is a
`<polygon>`, so CSS can restyle the grid or a build step can wrap each one. See
the [SVG Guide](../reading/svg-guide.md) for the markup and
[SVGOMG](../utilities/svgomg.md) to shrink it.

### Driving it from an agent

The app reads a full state hash from the URL fragment, so an agent needs no
clicks to reach a page: build the hash, load it, click export. This script is
the tested core — roll a batch, apply a preset, open card 3, export both
formats.

```js
import { chromium } from 'playwright'
const APP = 'https://tools.oyasumi-gamedev.com/komawari/?lang=en'
const browser = await chromium.launch()
const page = await browser.newPage({ acceptDownloads: true })
await page.goto(APP, { waitUntil: 'load' })
await page.selectOption('#count', '48')
await page.fill('#seed', 'SC-2026') // this seed's batch; #roll would pick a random seed
await page.waitForSelector('#gallery .card')
await page.click('#chips button[data-p="action"]') // preset
await page.click('#gallery .card[data-i="2"]') // open card 3
await page.waitForSelector('#viewer[open]')
for (const btn of ['#dlSvg', '#dlPng']) {
  const [dl] = await Promise.all([
    page.waitForEvent('download'),
    page.click(btn)
  ])
  await dl.saveAs('out/' + dl.suggestedFilename())
}
await browser.close()
```

A hand-written hash needs no clicking at all. This one is verified: it gives
`#4/12 · 7 panels · seed: SC-2026#4`, right to left, 6 px border, and an SVG
carrying `width="182mm" height="257mm"`.

```
https://tools.oyasumi-gamedev.com/komawari/?lang=en#s=SC-2026&r=0.708&d=rtl&lw=6&c=12&num=1&gd=1&rows=3-4&th=0&tv=0&b=5&ne=15&bg=8&p=seizen&i=4
```

Load the same hash twice and the panel coordinates are byte-identical, so a hash
is safe to store in a repo and re-export later.

## Examples

- [The app](https://tools.oyasumi-gamedev.com/komawari/?lang=en) — the English
  UI; Generate new batch shows the whole loop.
- [Demo post on X](https://x.com/sharp_maker/status/2106866323720724763) — the
  author's announcement: bulk generation and non-destructive deformation.
- [Official article](https://oyasumi-gamedev.com/tools/komawari/) — the how-to,
  the mutation-strength table and the FAQ, in Japanese.
- [A working share link](https://tools.oyasumi-gamedev.com/komawari/?lang=en#s=SC-2026&r=0.708&d=rtl&lw=6&c=12&num=1&gd=1&rows=3-4&th=0&tv=0&b=5&ne=15&bg=8&p=seizen&i=4)
  — opens card 4 of the `SC-2026` batch, ready to export.
- [A mutate-mode link](https://tools.oyasumi-gamedev.com/komawari/?lang=en#s=MINE&r=0.708&d=rtl&lw=4&c=8&num=0&gd=0&m=1&mut=60&g=eyJ3IjpbMSwxLDFdLCJ0IjpbMCwwXSwiciI6W3sidyI6WzFdLCJ0IjpbXSwicCI6W1swLDBdXX0seyJ3IjpbMV0sInQiOltdLCJwIjpbWzAsMF1dfSx7InciOlsxXSwidCI6W10sInAiOltbMCwwXV19XX0&gl=my-base&i=1)
  — a hand-written base genome of three plain tiers, driving a batch of
  variants.
- [Split frame border lesson](https://tips.clip-studio.com/ja-jp/articles/1477)
  — the CLIP STUDIO TIPS page the article links for route 1.
- [SVG vector import lesson](https://tips.clip-studio.com/ja-jp/articles/3714) —
  the TIPS page for route 2, on importing SVG as a vector layer.
- [Panel layout basics](https://oyasumi-gamedev.com/manga-panel-layout-basics/)
  — the author on reading order, big panels and pacing: the brief to feed the
  sliders.

## When to use it

- Use it when a manga or comic page needs a structure and picking from 24
  options beats placing rules by hand.
- Use it for a storyboard or thumbnail grid; 12 cards in one roll blocks out a
  scene fast.
- Use it as a panel guide in CLIP STUDIO PAINT through the PNG underlay route,
  or as vector lines through SVG import.
- Use it outside comics: the square and 4:5 formats make usable poster and
  social grids, and the SVG is a clean start for a web page of bordered regions,
  since panels are plain polygons a stylesheet can drive.
- Skip it when you also need balloons and lettering: that is the
  [Speech Balloon Generator](../comics/fukidashi.md), which takes a komawari PNG
  as an underlay.
- Skip it when you start from a script: [Comicalizer](../comics/comicalizer.md)
  builds whole storyboard pages from a plot, and
  [Name Gacha](../comics/namegacha.md) places characters into these layouts.
- Skip it for hand-placed, free-form panel shapes: use
  [Figma](../interface-design/figma.md) or, open source,
  [Penpot](../interface-design/penpot.md).
- Skip it if you want one panel per layer in a vector document; the SVG is flat.
  See [SVGOMG](../utilities/svgomg.md) to optimise it.

## Agent notes

- **App URL:** `https://tools.oyasumi-gamedev.com/komawari/`
- **URL parameters:** `?lang=` with `ja`, `en`, `zh-Hans`, `zh-Hant`, `ko`,
  `hi`, `th`, `es`, `fr`; anything else falls back to `ja`. `?embed=1` hides the
  header and footer for the namegacha iframe — avoid it for exports: it also
  adds a "use this layout for a storyboard" button that posts to the parent.
- **State hash** (after `#`, `URLSearchParams` format, no encoding needed): `s`
  seed, `r` ratio, `d` direction, `lw` border width, `c` count, `num` 0/1, `gd`
  0/1, `rows` (`2-4`), `th` `tv` `b` `ne` `bg` sliders, `p` preset key
  (`seizen`, `std`, `action`, `tobira`), `pc` `min-max` panel count, `i` 1-based
  card to open. A missing `d` means `rtl`; a missing `pc` means "no panel-count
  filter", which keeps pre-feature links reproducing old pages.
- **Mutate mode in the hash:** `m=1`, `mut` strength, `g` base genome, `gl` its
  label. **Edited card:** `e`, the edited genome.
- **Genome format** (`g`, `e`): base64url of compact JSON,
  `{"w":[tier heights],"t":[tier tilts],"r":[{"w":[col widths],"t":[col tilts],"p":[[flags,nestU],...]}]}`.
  Widths are positive, at most 50; tilts run -1..1; 1–8 tiers; 1–6 columns per
  tier; `flags` is a bit mask, 1 = bleed top, 2 = bottom, 4 = right, 8 = left;
  `nestU` is the split position inside a panel (0 or 1 means no split).
  Constraints: `rowTilt.length == tiers - 1`, `colTilt.length == columns - 1`,
  `panels.length == colW.length`. Numbers are rounded to four decimals, so one
  genome always encodes to one string. Minimal genome, verified to load:

  ```
  {"w":[1],"t":[],"r":[{"w":[1],"t":[],"p":[[0,0]]}]}
  -> eyJ3IjpbMV0sInQiOltdLCJyIjpbeyJ3IjpbMV0sInQiOltdLCJwIjpbWzAsMF1dfV19
  ```

  A bad genome fails silently: the app ignores the field and falls back to the
  seed batch, so it looks like the hash did nothing.

- **Selectors:** `#gallery .card` (a `<button>`, index in `data-i`, zero-based),
  `#chips button[data-p="action"]`, `#seed`, `#count`, `#ratio`, `#dir`,
  `#rows`, `#roll`, `#pcOn`, `#tiltH`, `#tiltV`, `#bleed`, `#nest`, `#big`,
  `#lineW`, `#numbers`, `#guide`, `#viewer[open]`, `#vPage svg`,
  `#vPage svg polygon`, `#vMeta`, `#vPrev`, `#vNext`, `#vMut`, `#vLink`,
  `#vDel`, `#vUndo`, `#dlSvg`, `#dlPng`, `#mut`, `#mutbar`, `#mutBase`,
  `#mutExit`, `#lang`, `#cBtn`. `#dlSvg` and `#dlPng` fire real browser
  downloads: wait for `download` in parallel with the click, or the file is
  lost.
- **Reading state without parsing the SVG:** the caption
  `#gallery .card .cap span:last-child` reads `7 panels`. `#vMeta` reads
  `#3/48 · 7 panels · seed: SC-2026#3`, or `variant 12 (base SC-2026)`, or
  `base: <label>` for the base card.
- **Keyboard:** `ArrowLeft` / `ArrowRight` for the previous/next card while the
  preview is open, `Delete` or `Backspace` to remove selected panels, Ctrl+Z or
  Cmd+Z to undo. Keys are ignored while focus is in a form field. `Esc` clears a
  panel selection first and closes the preview on the next press — verified.
- **Editing:** click a panel, then `#vDel` deletes it and reflows its
  neighbours; deleting every panel is refused. An agent can drive it with
  `mouse.move` / `mouse.down` / `mouse.up` on `#vPage svg`, or put finished
  geometry straight into the `e=` hash field.
- **Limits:** exports are always 2400 px tall; there is no size control and no
  8000 px cap in this app (that cap belongs to the speech balloon tool). Panel
  count filters between 1 and 24, and generation gives up after 240 tries per
  layout, so the filter is best-effort: with `pc=5-6` and tiers 1–3, all 48
  cards came back with 5 or 6 panels, but that is not guaranteed. Panels are
  never thinner than 10 units, tiers never below 60, columns never below 50 (the
  page is 1000 units tall), so strong tilts get damped rather than producing
  slivers. A tier shorter than 160 units will not split, so **Inner splits**
  does nothing on dense pages.
- **Timing and privacy:** slider and seed input is debounced 120 ms, and the app
  flushes a pending re-render before opening the preview or saving, so clicking
  export straight after typing is safe. The layout maths, the SVG and the PNG
  rasterisation are all local; the only network call in the file is the contact
  form, and only on submit. `localStorage` holds `komawari.lang` and
  `komawari.dir`.
- **Licence duties:** do not vendor or rehost the app HTML. Exported layouts
  need no attribution; credit MIYADAIKU (おやすみゲーム開発部) if you choose.
- **Beta status:** live and still patched. The server reported
  `Last-Modified: 2026-10-13` on 2026-10-14, and source comments date the manual
  edit feature to 2026-10-07. The blog documentation lags the app — its FAQ
  still says only right-to-left is supported, which the app contradicts.
- **Gotcha:** share links deliberately drop `lang` and `embed`, so a copied link
  opens in the recipient's own language, outside the iframe. The `#` is cleared
  from the address bar after it is applied, so do not read state back out of
  `location.hash` — keep the link instead. The link also comes from the
  _current_ card, so `#vLink` must be clicked with the preview open, and its
  `i=` field is 1-based while `data-i` is 0-based.
- **Gotcha:** the hash is applied on load only. Changing just the fragment of an
  already-loaded page does nothing (verified: the old seed and format stayed on
  screen). Load the full URL from a blank page, or reload.

## Alternatives in this repo

- [Speech Bubble Generator](../comics/fukidashi.md) — the matching balloon tool;
  takes a komawari PNG as an underlay and flattens the two together.
- [Name Gacha](../comics/namegacha.md) — storyboard beats plus this panel
  engine, reachable through `?embed=1`.
- [Effect Lines & Screentone Generator](../comics/koukasen.md) and
  [Background Gacha](../comics/haikeigacha.md) — artwork to fill the panels once
  the layout is fixed.
- [SVGOMG](../utilities/svgomg.md) — shrink the exported SVG before shipping.
- [Blender](../3d/blender.md) — where a PNG layout becomes a reference plane.

## Sources

- [The app](https://tools.oyasumi-gamedev.com/komawari/) — checked 2026-10-14
- [Official article and FAQ](https://oyasumi-gamedev.com/tools/komawari/) —
  checked 2026-10-14
- [Demo post on X](https://x.com/sharp_maker/status/2106866323720724763) —
  checked 2026-10-14
- [CLIP STUDIO TIPS: panel frames and splitting](https://tips.clip-studio.com/ja-jp/articles/1477)
  and [SVG vector import](https://tips.clip-studio.com/ja-jp/articles/3714) —
  both checked 2026-10-14
- [Manga panel layout basics](https://oyasumi-gamedev.com/manga-panel-layout-basics/)
  — checked 2026-10-14
