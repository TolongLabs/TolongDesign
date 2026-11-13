---
name: Speech Bubble Generator
slug: fukidashi
section: Comics
section_slug: comics
source_url: https://tools.oyasumi-gamedev.com/fukidashi/
designeer_url: https://oyasumi-gamedev.com/tools/fukidashi/
designeer_blurb: Free tool that makes manga speech balloons sized to their text.
paywall: free
pricing_summary:
  Free in the browser, no account. Output is free for commercial use, no credit
  required.
open_source: false
license: proprietary
category_tags: [manga, speech-bubbles, svg, png, typography, procedural, batch]
best_for: [manga dialogue, webtoon balloons, comic page layouts, social art]
stack: ['browser']
execution_mode: browser-app
surface: ['comics', 'web-asset']
status: active
agent_friendly: true
last_verified: 2026-10-14
---

# Speech Bubble Generator

> Free tool that makes manga speech balloons sized to their text.
>
> Reach for it when a line of dialogue needs a balloon that fits it, and the
> balloon has to come out as clean vector art, not a photo of a drawing.

## At a glance

| Field          | Value                                                                     |
| -------------- | ------------------------------------------------------------------------- |
| Source         | [tools.oyasumi-gamedev.com](https://tools.oyasumi-gamedev.com/fukidashi/) |
| Paywall        | **Free** — no account, no limit, no tier                                  |
| Open source    | No — unminified single-file app, no repo, no code licence                 |
| Type           | Browser tool for manga speech balloons and comic page layouts             |
| Made by        | MIYADAIKU (おやすみゲーム開発部), X @sharp_maker                          |
| Works with     | Any browser. Canvas 2D and hand-built SVG, vanilla JS, no three.js        |
| Agent-friendly | Yes — a `window.FUKI` API, a hand-writable share hash, no network         |

## What it is

フキダシジェネレーター builds manga speech balloons from maths. The outline is
not an image: it is an ellipse or rounded rectangle plus a ring of spike or puff
points placed by a seeded PRNG (mulberry32), so the same seed text and the same
settings always rebuild the same balloon. Balloon, tail and chain joints are
merged with a polygon union, so a frame-only export has no stray line where two
shapes overlap.

Sixteen types cover the usual manga vocabulary: Oval (楕円), Box (角丸), Cloud
(雲), Thought (思考), Wave (波), Digital (電子音), Gloom (もやもや), Aura
(オーラ), Sparkle (キラキラ), Spiky (トゲ), Burst (爆発), Shaky (震え), Flash
(フラッシュ), Urchin (ウニフラ), Brush (筆) and Crack (ひび割れ). Each brings
its own sliders. Spiky, for instance, has spike count, spike length, size
variation, irregularity, spike curve and inner roundness.

The balloon resizes itself to the text. The app binary-searches the smallest
scale at which the laid-out text box plus padding fits inside the outline. Text
is typeset for comics: vertical writing with small kana and punctuation
repositioned, long vowels upright, "!!" and two-digit numbers set sideways
(縦中横), and kinsoku rules that keep "、" and "。" off the start of a line.

Three batch jobs sit around that core. A gacha rolls 12, 24 or 48 variations of
the current type, and a mutate mode breaks up the shape you already have. A
script box turns a list of lines into one balloon per line, with brackets
picking the type. A page mode drops balloons onto an underlay image or a blank
B5, SNS 4:5 or square sheet and saves the page as one PNG. It is all one HTML
file, no dependencies and no server; the only request it can make is its contact
form.

## Paywall and pricing

- **Free:** everything. No paid tier, no usage cap.
- **Paid:** none. **Sign-up required?** No.
- **Licence for client work:** free use, commercial or not, no credit required.
  The app footer and the article FAQ say:

  > 書き出したフキダシ（PNG・SVG）は、商用・非商用を問わず自由に使えます。クレジットの表記も要りません。同梱のアンチック体は、SIL
  > Open Font License
  > 1.1 のフォント（源暎アンチック・びぜんアンチック）から文字を絞った改変版で、このフォントで作った画像の使い道は制限されません。

  Translation: exported balloons (PNG, SVG) may be used freely, commercial or
  not, and no credit is required. The bundled Antique faces are reduced modified
  versions of 源暎アンチック and びぜんアンチック under the SIL Open Font
  License 1.1. Images made with those fonts have no use restriction.

- **App code:** served unminified but with no repository, no LICENSE file and no
  statement about reuse. Treat it as source-available, not reusable.

Checked 2026-10-14. Pricing is not published anywhere else.

## How to use

1. Open <https://tools.oyasumi-gamedev.com/fukidashi/?lang=en>. The language
   picker (🌐) sits in the header. `?lang=` wins over the stored choice, which
   wins over the browser's languages; English is the fallback.
2. Pick a type from the row of 16 thumbnails in `#types`. Each button is
   `#types button[data-t="<key>"]`, for example `ellipse`, `cloud`, `spike`. The
   tool opens on Spiky.
3. Type the line into `#text`. With "Fit the bubble to the text" on (`size.fit`)
   the balloon grows to fit. Newlines are line breaks; blank lines split the
   text into a chain of touching balloons, up to four.
4. Fix the shape by hand. Drag `●` to move spikes and puffs, `◆` for the tail
   tip, `■` for the tail base, `✛` for the text position. Double-click empty
   space to add a handle, double-click a `●` to remove it. `#resetF` undoes the
   hand edits.
5. Pick a voice chip in `#voiceChips` to set shape, line, tail and fill
   together: Plain, Whisper, Weak, Shout, Broadcast, Distant, Eerie, Thought,
   Caption. `#intensity` (0–100, middle is the default) moves spike length, line
   width and more in one go.
6. Set line and colour under "Line · Fill · Color": seven line styles (Solid,
   Dashed, Dotted, Double, Tapered, Hand-drawn, Brush), four fills (White, Black
   with white text, Gray, Screentone), five colour presets (Mono, Inverted, Pop,
   Pastel, Night), an optional shadow, and "Focus lines" (集中線) for a
   radiating outer decoration.
7. Set the export options in the "Save" pane: Inside (White fill / Frame only),
   Background (Transparent / White), Scale (1× to 4×) and, for SVG, "Outline
   text".
8. Export. "Save" has a "With text" row and a "No text" row, each with
   `Save PNG`, `Save SVG` and `Copy`. Below the preview, `#qPng` and `#qCopy`
   save the preview exactly as shown, so they follow the "Text" toggle.
9. For a page: "Load art or panels…" (`#underLoad`, accepts `image/*`) or pick a
   blank B5 / SNS 4:5 / Square, press `#pageAdd` per balloon, drag them into
   place, then `#underSave`.

### Inputs and parameters

| Group  | Control                                               | Selector or state key                                            | Range / values                                                                                                              | Default                     |
| ------ | ----------------------------------------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| Type   | 16 types                                              | `#types button[data-t]`                                          | ellipse, rect, cloud, thought, wave, electronic, fuzz, aura, sparkle, spike, explosion, tremble, flash, urchin, fude, crack | `spike`                     |
| Type   | Seed, reroll, reroll noise, flip, intensity           | `#seed`, `#seedRoll`, `#noiseRoll`, `#flip`, `#intensity`        | seed up to 40 chars; intensity 0–100                                                                                        | `SC-2026`, 50               |
| Shape  | Per-type sliders                                      | `input[data-path^="P."]`                                         | spike / puff / corner count, length, jitter, irregularity, curve, inner roundness                                           | per type                    |
| Shape  | Rotation, wobble, noise, noise scale, hand-drawn      | `rot`, `wob`, `noise.amt`, `noise.size`, `hand`                  | −90–90°, then 0–100 four times                                                                                              | 0, 0, 0, 30, 0              |
| Shape  | Fit to text, padding, rounder, fixed size             | `size.fit`, `.pad`, `.round`, `.w`, `.h`                         | on, 0–200%, 0–100%, 40–2000 px twice                                                                                        | on, 60%, 35%, 340 × 240     |
| Shape  | Linked bubbles                                        | `chain.on`, `.dir`, `.overlap`, `.neck`                          | on, 0–359°, −40–50%, 0–100                                                                                                  | off, 135°, 12%, 45          |
| Tail   | Add / delete, style                                   | `#tailAdd`, `#tailDel`, `[data-tp="style"]`                      | 1–8 tails; curve, tri, bubble, zigzag, line                                                                                 | 1, curve                    |
| Tail   | Angle, length, width, curve, smooth base, bubbles     | `[data-tp="…"]`                                                  | 0–359°, 2–400, 3–60, −100–100, 0–100, 1–6                                                                                   | 118°, 70, 16, 30, 45, 3     |
| Text   | Dialogue, writing, font                               | `#text`, `text.s`, `.chips[data-path="text.vert"]`, `#fontChips` | up to 4000 chars; vertical / horizontal; antique, antiqueB, gothic, mincho, maru, `user:<name>`                             | per language                |
| Text   | Size, line gap, letter gap, wrap, dx, dy              | `text.*`                                                         | 10–120 px, 0–150%, −15–60%, 0–30 chars, ±200 px twice                                                                       | 30 px, 30%, 0%, 0, 0, 0     |
| Text   | Bold, sideways "!!", align                            | `text.bold`, `.tcy`, `.align`                                    | on / off, on / off, top or center                                                                                           | off, on, top                |
| Line   | Style, width, taper, outer halo                       | `line.style`, `.w`, `.brush`, `halo`                             | 7 styles, 0–16 px, 0–100, 0–24 px                                                                                           | solid, 3.5 px, 55, 0        |
| Fill   | Fill, screentone density                              | `fill`, `tone`                                                   | white, black, gray, tone; 5–60%                                                                                             | white, 20%                  |
| Color  | Line, fill, text, auto, shadow                        | `color.*`                                                        | hex inputs; on, ±30 px twice, 10–100%, 0–30 px                                                                              | #111111, #ffffff, auto, off |
| Color  | Focus lines (集中線)                                  | `deco.*`                                                         | on, 8–240 lines, 10–200, 1–100, 0–100                                                                                       | off, 60, 60, 30, 20         |
| Save   | Inside, background, scale, outline text               | `ex.fill`, `.bg`, `.scale`, `.outline`                           | fill / frame; clear / white; 1×–4× with an 8000 px cap; on / off                                                            | fill, clear, 2×, on         |
| Page   | Underlay, blank sheets, scale, opacity, text variants | `#underFile`, `#pageBlank`, `#underScale`, `#underOp`, `ex.text` | `image/*`; 1240×1754, 1080×1350, 1080×1080; 5–500; 10–100; on / off / both                                                  | none                        |
| Gacha  | Count, mix, vary, mutation                            | `#gCount`, `gacha.*`                                             | 12 / 24 / 48, on / off, on / off, 5–100                                                                                     | 24, off, off, 35            |
| Script | Script box, split mode                                | `#script`, `#scriptMode`                                         | up to 200 lines, 20000 chars; line / block                                                                                  | line                        |
| Import | User font                                             | `#fontFile`                                                      | `.ttf .otf .woff .woff2`, session only                                                                                      | none                        |

Script bracket rules, with "Pick the type by brackets" on: `( )` gives a
Thought, `【 】` or `[ ]` a Box, `『 』` a Digital, `《 》` or `<< >>` a
Whisper, `〈 〉` or `< >` a Broadcast, `〔 〕` a Weak. Any line with `!!`, `!?`
or `?!` becomes a Spiky whose intensity rises with the number of `!`. A line
with no symbol keeps the currently selected type.

Keyboard: `Ctrl+Z` undo, `Ctrl+Y` redo, `Delete` or `Backspace` removes the
selected handle, `H` toggles the handle overlay, `T` toggles the text, `Esc`
closes the results grid.

### Export and hand-off

| Output       | Filename pattern                                                       | Notes                                                        |
| ------------ | ---------------------------------------------------------------------- | ------------------------------------------------------------ |
| PNG          | `fukidashi_<type>_<seed>_moji\|nomoji_shiro\|waku.png`                 | transparent or white, 1×–4×                                  |
| SVG          | same with `.svg`                                                       | one path per ring; `<text>` unless outlined                  |
| Copy         | none                                                                   | PNG to the clipboard via `ClipboardItem`                     |
| 8 at once    | `fukidashi_<type>_<seed>_all.zip`                                      | fill / frame only × text / no text, PNG and SVG              |
| Page         | `fukidashi_page_<underlay name>.png`                                   | underlay at its own pixel size; a ZIP for both text variants |
| Gacha batch  | `fukidashi_gacha_<NN>_<type>_…png` in `fukidashi_gacha_<count>.zip`    | one PNG per card                                             |
| Script batch | `fukidashi_script_<NNN>_<type>_…png` in `fukidashi_script_<count>.zip` | also `script_list.txt`                                       |
| Result sheet | `fukidashi_sheet_<count>.png`                                          | the whole grid on one image, up to 6 columns                 |

`moji` is with text, `nomoji` without, `shiro` white fill, `waku` frame only.
Every variant is rendered from the same bounding box with the same 10 px margin,
so a with-text PNG and a no-text PNG line up pixel for pixel when stacked as
layers. ZIPs use the store method: no compression, no library, written by hand.

- **CLIP STUDIO PAINT or Photoshop:** press `Copy` and paste, or open the
  exported PNG. Use frame only for flat colour and white fill over artwork.
  Raise "Outer halo" so the outline survives over screentone and solid blacks,
  and use the Inverted preset over solid black.
- **Blender:** import the SVG as a vector object (Import ▸ SVG) or the PNG as an
  image plane with alpha. The SVG is plain `<path>` geometry, so it scales
  without softening. Text is only outlines if you export with the Antique face.
- **A web page:** the SVG is standalone, with a `viewBox` and no external
  references, so `<img src="balloon.svg" width="420">` works as is and dropping
  the markup into the DOM renders it too. Verified in Chromium: an exported oval
  loaded as `<img>` at its natural 262 × 210 with no network fetch. For Japanese
  text in an un-outlined export, ship a webfont or switch to Antique and keep
  "Outline text" on.

### Driving it from an agent

The app exposes `window.FUKI` once the page has loaded. Keys seen at runtime:
`st`, `compose`, `renderPNG`, `svgExport`, `makeZip`, `layoutText`, `unionPoly`,
`scene`, `TYPES`, `defaultState`, `fromAny`, `packState`, `unpackState`,
`fontState`, `glyphPathD`, `ensureFont`, `liveScene`, `under`, `lang`,
`setLang`. `st` is a live getter and setter. `fontState` is a plain object, not
a function.

```js
import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage({ acceptDownloads: true })
await page.goto('https://tools.oyasumi-gamedev.com/fukidashi/?lang=en', {
  waitUntil: 'load',
  timeout: 60000
})
await page.waitForFunction(() => !!window.FUKI, null, { timeout: 30000 })
await page.fill('#text', 'Time for tea!')
await page.click('.chips[data-path="text.vert"] button[data-v="0"]')
await page.click('#types button[data-t="ellipse"]')
await page.waitForTimeout(400) // let the animation-frame render settle

for (const [sel, name] of [
  ['#dlPngT', 'out/balloon.png'],
  ['#dlSvgT', 'out/balloon.svg'],
  ['#dlZip', 'out/balloon-all.zip']
]) {
  const [dl] = await Promise.all([
    page.waitForEvent('download'),
    page.click(sel)
  ])
  await dl.saveAs(name)
}
await page.screenshot({ path: 'out/screen.png' })
await browser.close()
```

Setting the state directly is shorter when you already know what you want.
`fromAny()` merges over `defaultState()` and clamps every value, so a partial
object is safe, and render is synchronous, so there is no download event to wait
for.

```js
await page.evaluate(() => {
  const F = window.FUKI
  F.st = F.fromAny({
    v: 3,
    type: 'cloud',
    seed: 'AGENT-1',
    text: { s: 'Chapter 1', vert: false, font: 'gothic', size: 34 },
    line: { style: 'solid', w: 4 },
    halo: 3
  })
})
const png = await page.evaluate(() =>
  window.FUKI.renderPNG({ text: true, fill: true }).toDataURL('image/png')
)
```

**Hand-writable share links.** The address bar hash holds the state, in one of
two formats: `#z=<base64url(raw deflate JSON)>`, which is what "Copy share link"
writes, and `#j=<base64url(JSON)>`, the uncompressed form the reader also
accepts and the one an agent can write without a compressor. A default balloon
is 614 characters of `z=` hash, the demo below 673.

The JSON is `shareable(state)`: only the current type's entry from `P` and `F`,
with `ex` and `gacha` removed. `unpackState()` merges it back over the defaults,
so you only send the keys you want to change. Export settings and gacha settings
never travel in a link.

```js
const STATE = {
  v: 3,
  type: 'explosion',
  seed: 'DOC-EXPLOSION',
  text: { s: 'NO WAY!', vert: false, font: 'gothic', size: 46 },
  line: { style: 'double', w: 4 },
  fill: 'white',
  color: {
    line: '#111111',
    fill: '#ffe14d',
    textAuto: true,
    shadow: { on: true, x: 6, y: 6, color: '#111111', alpha: 100, blur: 0 }
  }
}
const b64url = (b) =>
  Buffer.from(b)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
const url =
  'https://tools.oyasumi-gamedev.com/fukidashi/?lang=en#j=' +
  b64url(Buffer.from(JSON.stringify(STATE), 'utf8'))
```

That URL is 442 characters. It was loaded in Chromium and screenshotted to
confirm it opens on the yellow Burst balloon. Two rules matter: a hash-only
navigation does not reload the page and the app reads the hash once on load, so
go to `about:blank` first; after loading, the app strips the hash and keeps your
stored settings until you touch something, so `Ctrl+Z` returns to them.

## Examples

- [X demo post](https://x.com/sharp_maker/status/2107074501733384654) — the
  author's launch post, 5 October 2026:
  "吹き出しを非破壊で変形＆ガチャで大量自動生成できるツールも作成しました"
  ("made a tool that deforms speech balloons non-destructively and
  mass-generates them with gacha"). Links straight to the app. Read through the
  X oEmbed endpoint, because the logged-out page is empty.
- [Official article and FAQ](https://oyasumi-gamedev.com/tools/fukidashi/) — the
  how-to, a table of what each of the 16 types is for, and the FAQ that states
  the free-use and privacy terms in Japanese.
- [Working share link, Burst "NO WAY!"](https://tools.oyasumi-gamedev.com/fukidashi/?lang=en#j=eyJ2IjozLCJ0eXBlIjoiZXhwbG9zaW9uIiwic2VlZCI6IkRPQy1FWFBMT1NJT04iLCJ0ZXh0Ijp7InMiOiJOTyBXQVkhIiwidmVydCI6ZmFsc2UsImZvbnQiOiJnb3RoaWMiLCJzaXplIjo0Nn0sImxpbmUiOnsic3R5bGUiOiJkb3VibGUiLCJ3Ijo0fSwiZmlsbCI6IndoaXRlIiwiY29sb3IiOnsibGluZSI6IiMxMTExMTEiLCJmaWxsIjoiI2ZmZTE0ZCIsInRleHRBdXRvIjp0cnVlLCJzaGFkb3ciOnsib24iOnRydWUsIngiOjYsInkiOjYsImNvbG9yIjoiIzExMTExMSIsImFscGhhIjoxMDAsImJsdXIiOjB9fX0)
  — a 442-character link written by hand from the JSON above; opens with the
  balloon already built. Verified in Chromium, 726 × 667 px at 2×.
- [Bundled font licence](https://tools.oyasumi-gamedev.com/fukidashi/lib/LICENSE_fonts.txt)
  — the full SIL OFL 1.1 text for the two subset Antique faces, plus the note
  that images made with them are unrestricted.

## When to use it

- Use it for manga and webtoon dialogue, where the balloon must fit the line and
  sit on top of finished art.
- Use it to build a comic page. Drop a
  [Manga Panel Layout Generator](../comics/komawari.md) export underneath, lay
  out the balloons, and save one PNG for the whole page. For a storyboard or
  pitch deck, `scriptPage` fills a blank sheet in reading order, right to left,
  top to bottom.
- Use it outside comics for a social graphic, a sticker sheet or a poster. The
  Save pane exports a transparent PNG up to 8000 px, and the frame-only variant
  is a ready-made outline for any artwork.
- Use it in a 3D scene. Import the SVG into [Blender](../3d/blender.md), or feed
  the exported `<path>` data to `THREE.Shape` in a [Three.js](../3d/three-js.md)
  scene for a billboard or a comic overlay.
- Skip it when the page needs characters and camera work, not just balloons.
  [Comicalizer](../comics/comicalizer.md) builds whole storyboard pages and
  [Name Gacha](../comics/namegacha.md) places characters; both embed this app.
- Skip it for speed lines, focus lines and screentones around the balloon; use
  [Effect Lines & Screentone Generator](../comics/koukasen.md).
- Skip it for a plain rounded callout on a web page; a CSS border-radius box or
  an icon from the [Icons](../icons/README.md) section is lighter than an SVG
  export.

## Agent notes

- App URL `https://tools.oyasumi-gamedev.com/fukidashi/`. English UI `?lang=en`.
  Valid values: `ja`, `en`, `zh-Hans`, `zh-Hant`, `ko`, `hi`, `th`, `es`, `fr`.
  Bots are forced to Japanese, so a crawler sees the Japanese UI even with
  `?lang=en`.
- `?embed=1` only does anything inside an iframe. It reveals the "Send to
  NameGacha" bar (`#ngSend`) that the parent talks to over `postMessage`.
  Verified: top level `#ngSend` stays hidden; inside an iframe it appears.
  `?host=comicalizer` swaps that bar for the Comicalizer wording.
- A share link carries the dialogue text in clear, so anyone with the link reads
  the line. `shareUrl()` refuses to build a link over 8000 characters; 4000
  characters of text is the state ceiling, which lands near 650 characters of
  compressed hash.
- PNG cap: the longest side is clamped to 8000 px. Verified at 4× with 300
  characters and 200% padding, which produced 8000 × 1095. A result sheet is
  clamped to 7800 px on its longest side.
- Output size is the bounding box of the drawing plus a 10 px margin, times the
  scale, and `#sizeInfo` shows the same number. Let the render settle before
  reading it: text input is debounced and the readout can be a frame behind.
- Text limits: 4000 characters in the state, 30 max on the wrap slider (0 means
  no auto-wrap), 200 lines per script, 20000 characters of script stored.
- Structure limits: 8 tails per balloon, 4 linked balloons (the fifth and beyond
  fold into the fourth and `#warn` says so), no tail on Flash and Sparkle, no
  chaining on Flash, Sparkle and Urchin.
- SVG text is only converted to outlines with the bundled Antique or Antique
  Bold. Verified: an Antique export had 0 `<text>` and 8 `<path>` nodes, a Sans
  export had 11 `<text>` nodes and no paths, so it depends on the viewer's
  system fonts. User-loaded fonts never outline and are session-only.
- The bundled faces load on demand from
  `https://tools.oyasumi-gamedev.com/fukidashi/lib/font_antique.js` and
  `font_antique_b.js`, a few hundred kilobytes gzipped each. `?lang=en` starts
  on a system font and downloads nothing. Click
  `#fontChips button[data-v="antique"]` to start the load, then poll
  `window.FUKI.fontState.antique` for `ready` or `error`. `#fontLoad` is the
  _user_ font button and opens a file picker; it does not fetch the bundled
  faces.
- Nothing leaves the browser except the contact form: the dialogue, the underlay
  image, a user font, the art, favourites and settings all stay local, and the
  app carries no analytics or ad script. That form is a POST to
  `https://oyasumi-gamedev.com/wp-json/contact-form-7/v1/contact-forms/5/feedback`
  with `credentials: 'omit'`, only when you submit it.
- Local storage keys: `fukidashi.state.v2` (state schema version 3),
  `fukidashi.ui.v1`, `fukidashi.favs.v1` (up to 30 favourites),
  `fukidashi.lang.v1`. The page composite and the underlay image are never
  saved, so export before closing the tab. Clear these keys for a clean run.
- Determinism: the same seed and settings always rebuild the same balloon.
  `seed` is truncated to 40 characters and the noise seed is stripped to word
  characters. Hand-edited handles live under `F`, for the current type only.
- Gotchas hit while testing: a hash-only `page.goto` does not reload, so a share
  link looks ignored; the type buttons carry `data-t`, not text; chips are
  addressed by the `data-path` or `data-tp` attribute on the container with the
  value in the button's `data-v`; `FUKI.fontState` is an object; and PNG
  downloads arrive as a `download` event, not as a file the page writes.
- There is no public repository and no code licence. The app is unminified, so
  the code is readable, but do not copy it into a product.

## Alternatives in this repo

- [Manga Panel Layout Generator](../comics/komawari.md) — the panel grid to put
  under these balloons. Exports a PNG this app loads as an underlay.
- [Comicalizer](../comics/comicalizer.md) — full comic pages with characters in
  the panels. [Name Gacha](../comics/namegacha.md) names them and embeds this
  app with `?embed=1`.
- [Effect Lines & Screentone Generator](../comics/koukasen.md) — speed lines and
  impact effects around the balloon.
- [SVGOMG](../utilities/svgomg.md) — tidy an exported SVG before committing it.
  [Blender](../3d/blender.md) and [Three.js](../3d/three-js.md) take the balloon
  into a 3D scene.

## Sources

- [App](https://tools.oyasumi-gamedev.com/fukidashi/) — checked 2026-10-14
- [App with the English UI](https://tools.oyasumi-gamedev.com/fukidashi/?lang=en)
  — checked 2026-10-14
- [Official article and FAQ](https://oyasumi-gamedev.com/tools/fukidashi/) —
  checked 2026-10-14
- [X demo post](https://x.com/sharp_maker/status/2107074501733384654) — checked
  2026-10-14
- [Bundled font licence](https://tools.oyasumi-gamedev.com/fukidashi/lib/LICENSE_fonts.txt)
  — checked 2026-10-14
- [Sister tools index](https://oyasumi-gamedev.com/tools/) — checked 2026-10-14
