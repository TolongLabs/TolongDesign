---
name: Background Gacha
slug: haikeigacha
section: Comics
section_slug: comics
source_url: https://tools.oyasumi-gamedev.com/haikeigacha/
designeer_url: https://oyasumi-gamedev.com/tools/haikeigacha/
designeer_blurb: Free tool that rolls 3D rooms to use as manga backgrounds.
paywall: free
pricing_summary:
  Free, no sign-up. Every room type, render mode and export is free.
open_source: false
license: proprietary
category_tags:
  [manga, comics, backgrounds, 3d, browser, threejs, screentone, line-art]
best_for:
  [manga backgrounds, storyboard backdrops, panel staging, room reference]
stack: [browser, threejs]
agent_friendly: true
last_verified: 2026-10-14
---

# Background Gacha

> Free tool that rolls 3D rooms to use as manga backgrounds.
>
> Reach for it when a panel or a storyboard needs a believable room behind the
> characters and you would rather not draw every desk and chair by hand.

## At a glance

| Field          | Value                                                                                   |
| -------------- | --------------------------------------------------------------------------------------- |
| Source         | [tools.oyasumi-gamedev.com/haikeigacha](https://tools.oyasumi-gamedev.com/haikeigacha/) |
| Paywall        | **Free** — no account, no paid tier                                                     |
| Open source    | No — proprietary, no licensed repository                                                |
| Type           | Browser 3D room generator, line art and screentone output                               |
| Works with     | Any modern browser; exports PNG, GLB, recipe JSON, links                                |
| Best for       | Manga backgrounds, storyboards, panel staging, room refs                                |
| Agent-friendly | Yes — stable `#id` selectors, a JSON recipe, share links                                |

## What it is

Background Gacha (背景ガチャ) is a free browser app by MIYADAIKU
(おやすみゲーム開発部, X: [@sharp_maker](https://x.com/sharp_maker)). It builds
a 3D room from a number and draws it the way a manga background is drawn: line
art with screentone, or flat colour.

The room is procedural, not AI-generated. The floor is a grid of 0.5 m cells,
each carrying attributes (zone, "keep clear" walkway, floor height); each edge
carries a wall or an opening. Six nodes run top to bottom over that grid --
Shape, Openings, Zones, Placement, Dressing, Details -- and furniture generators
drop boxes and cylinders onto the cells. The author's own note counts 28
categories and 35 generators. No image model is involved and no file leaves the
browser.

Three room types ship today: Classroom (教室), Bedroom (自室) and Living room
(リビング). It belongs to a family of manga tools on the same site, alongside
[Name Gacha](../comics/namegacha.md),
[Manga Panel Layout Generator](../comics/komawari.md) and
[Effect Lines & Screentone Generator](../comics/koukasen.md), and hands a
finished room to Name Gacha as a scene. It carries a β badge.

## Paywall and pricing

- **Free:** everything. All three room types, all four render modes, all
  exports, the share link and the Name Gacha hand-off.
- **Paid:** none. No paid tier, no account, no official pricing page.
- **Sign-up required?** No.
- **Licence for client work:** free for commercial and non-commercial use, no
  credit needed.

The app footer states, verbatim in Japanese:

> 作った背景（PNG・GLB）は、商用・非商用を問わず自由に使えます（クレジット不要）。

"The backgrounds you make (PNG, GLB) are free to use, commercially or not (no
credit needed)." The site FAQ repeats the same grant for PNG and GLB in the same
words. No prohibition clause and no warranty term for output is published. The
only credit duty is the three.js MIT notice, which covers the app's own
rendering, not your output. Checked 2026-10-14.

## How to use

1. Open https://tools.oyasumi-gamedev.com/haikeigacha/ , adding `?lang=en` for
   the English UI. It starts on a Classroom with seed 20261007.
2. Pick a room type in the top bar -- **Classroom** (教室), **Bedroom** (自室)
   or **Living room** (リビング) -- then press **Roll a room** (部屋ガチャ).
   Every press gives a different room; the same seed always gives the same one.
   Press **Layout only** (配置だけ) instead to keep the room shape and the
   furniture designs and re-roll only where things sit.
3. Choose a camera in the **Camera** dropdown or drag in the viewport. Presets:
   Overview, Top-down (plan), eye level from each corner, from the doorway,
   Seated eye level, Low angle, High angle; the Classroom adds views from the
   back toward the blackboard and from the teacher's desk. Set **Lens** (14-85
   mm) for wide or tight framing.
4. Pick a render mode above the viewport: **Color**, **Color + lines**, **Line
   art** or **Lines + tone**. Press the **Light / Tone** button to open the
   light and tone panel. Line art draws only outlines plus floorboard and
   ceiling-panel joints.
5. Set **Direction** and **Height** for the sun and **Cast shadows** to
   One-sided or Two-sided. In Lines + tone, set the **Shadow** and **Base
   color** tone strengths (0-250 per cent), pick a **Pattern**, set its
   **Size**, and optionally tick **Show as gray fill**.
6. Fix the room by hand in the **Floor plan** panel: click an object to select
   it, drag to move, `R` to rotate, `Delete` to remove, double-click to re-roll
   just that object. Click an edge to cycle wall → window → door. Edited nodes
   get a lock mark, so later rolls keep your changes.
7. Use **Category gacha** to swap every desk or chair at once (🎲), open the
   design list (▦, 12/24/48 options plus mutations), keep a category's design
   across rolls (🔒), or set a count with ◀ ▶. Set **Width**, **Depth** and
   **Ceiling** numerically for exact dimensions, and raise **Lived-in look
   (mess)** to tilt chairs and scatter small items.
8. Export from the **Export** panel: **PNG (current view)**, **GLB (3D model)**,
   **Save recipe** or **🔗 Copy link**.

### Inputs and parameters

| Control                 | Element                     | Range or values                                      | Default       |
| ----------------------- | --------------------------- | ---------------------------------------------------- | ------------- |
| Room type               | `#types`                    | classroom, bedroom, living                           | classroom     |
| Seed                    | `#seed`                     | any non-negative integer                             | 20261007      |
| Render mode             | `#modes`                    | color, colorline, line, linetone                     | color         |
| Line weight             | `#lw`                       | 0.2-5, step 0.1                                      | 1.0           |
| Sun direction / height  | `#lightAz`                  | 0-355 step 5 / 5-85 step 1 (deg)                     | 300 / 45      |
| Cast shadows            | `#castSide`                 | single, double                                       | single        |
| Tone shadows / base     | `#toneS`                    | 0-250, step 10 (per cent)                            | 100           |
| Tone pattern            | `#pat`                      | Tone (dots) plus 26 generators                       | dots          |
| Pattern size / opacity  | `#patScale`                 | 0.1-3 step 0.05 / 0-100 step 5                       | 1 / 100       |
| Gray fill               | `#toneFill`                 | on / off                                             | off           |
| Camera / lens           | `#cams`                     | 12 presets built from the room / 14-85 mm            | overview / 24 |
| View toggles            | `#twopt`, `#cut`, `#shadow` | two-point lock, hide near walls, shadows             | off / on / on |
| Width / Depth / Ceiling | `#pW`,`#pD`                 | 2-20 m step 0.5 / 2.1-5 m step 0.05                  | automatic     |
| Lived-in look (mess)    | `#mess`                     | 0-100, step 5                                        | 50            |
| PNG long side           | `#pngSize`                  | 2400, 3600, 4800 px                                  | 2400          |
| Transparent paper       | `#alpha`                    | on / off (line modes only)                           | off           |
| Controls scheme / eye   | `#nav`                      | std, mmb, alt, pen, look, pad / 0.2-2.4 m eye height | std / 1.50    |

The tone **Pattern** dropdown holds Tone (dots) plus 26 generators in five
groups -- Focus lines, Effect lines, Cross-hatch, Tones and Mood. They are the
generators from [Effect Lines & Screentone Generator](../comics/koukasen.md),
reachable here as tone textures. The tool imports no images and no 3D models;
the only incoming data is a recipe JSON through **Load recipe** or a share link
in the URL hash.

### Export and hand-off

| Output     | Button                 | File name                         | Format                                    |
| ---------- | ---------------------- | --------------------------------- | ----------------------------------------- |
| PNG        | **PNG (current view)** | `haikei_<type>_<seed>_<mode>.png` | long side 2400/3600/4800 px, 8-bit RGBA   |
| GLB        | **GLB (3D model)**     | `haikei_<type>_<seed>.glb`        | binary glTF 2.0, metres, Y-up             |
| Recipe     | **Save recipe**        | `haikei_<type>_<seed>.json`       | the app state, pretty-printed JSON        |
| Share link | **🔗 Copy link**       | --                                | URL with the room, camera and mode in `#` |

- **Sizes.** The PNG long side is the value in **Long side**; the short side
  follows the viewport, so a 2400 px export from the default window came out
  2400 x 1818.
- **Transparent paper.** Tick **Transparent paper for line art** in Line art or
  Lines + tone. A verified export was 2400 x 1818 RGBA with the background fully
  transparent and only the lines opaque.
- **CLIP STUDIO PAINT** wants `File → Import → 3D data`, Ver.1.12.7 or later,
  per the app's own hint: each piece of furniture arrives as its own node and
  units are metres. **Blender** takes `File → Import → glTF 2.0 (.glb)`; the
  exporter comment also names Unity and Godot. For a **web page or three.js**,
  load the GLB with `GLTFLoader` (see [Three.js](../3d/three-js.md)).
- **What the GLB contains.** A root `Room` node with two children: `Shell`
  (floor, ceiling, walls) and `Items` (one node per object). Each item node
  carries `extras` with `kind`, `cat`, `gen`, `key`, `cell` and `rot`, so a
  script can find every desk or chair by name. Floorboard and ceiling-panel
  lines are not in the GLB -- the line-art shader draws those.
- **Onward to Name Gacha.** **✎ Use this room in Name Gacha** opens
  `/namegacha/` in a new tab with the room as the scene and characters standing
  on its floor. That hand-off was verified by building the `#hg=` link by hand.

### Driving it from an agent

Every control has a stable `#id` and the app needs no login, so a headless
browser drives it directly. This script ran against the live app and produced
all three files:

```js
import { chromium } from 'playwright'

const browser = await chromium.launch({
  args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader']
}) // software WebGL when headless
const page = await browser.newPage({ acceptDownloads: true })
await page.goto('https://tools.oyasumi-gamedev.com/haikeigacha/?lang=en')
await page.waitForFunction(
  () => document.querySelector('#c3')?.width > 0,
  null,
  { timeout: 60000 }
)

await page.click('#types button[data-k="classroom"]')
await page.click('#gacha') // roll a room
await page.fill('#seed', '20261007')
await page.press('#seed', 'Enter') // #seed fires on "change"
await page.click('#modes button[data-k="linetone"]') // line art + tone

for (const [sel, name] of [
  ['#png', 'room.png'],
  ['#glb', 'room.glb'],
  ['#json', 'recipe.json']
]) {
  const dl = page.waitForEvent('download', { timeout: 300000 })
  await page.click(sel)
  await (await dl).saveAs('out/' + name)
}
await browser.close()
```

The one gotcha: `#seed` commits on the `change` event, so `page.fill` alone is
not enough -- press Enter or blur afterwards, or the roll keeps its random seed.

Two formats an agent can write itself, both verified by loading them back into
the app.

**A readable share link.** A room with no manual edits and default settings
encodes as plain text, so an agent can link to one without touching the UI:

```
https://tools.oyasumi-gamedev.com/haikeigacha/?lang=en#t=living&s=7&m=linetone
```

`t` is the room type, `s` the seed, `m` the render mode. Anything else -- a
hand-painted cell, a locked category, a non-default mess value -- forces the
compressed form `#r=<base64url of zlib-compressed JSON>`. Use zlib deflate (a
stream starting `78 9c`), not raw deflate and not gzip: raw deflate fails
silently and the app quietly builds its default classroom. In JavaScript,
`CompressionStream('deflate')` gives the right bytes; in Node,
`zlib.deflateSync`. Language is never put in the link; the view fields are
listed under Agent notes.

**A recipe JSON.** **Save recipe** writes the whole state pretty-printed. Only
two keys are required:

```json
{
  "app": "haikeigacha",
  "type": "bedroom",
  "seed": 12345,
  "params": { "W": 10, "D": 10, "H": 2.6 },
  "mess": 1,
  "counts": { "shelf": 3 }
}
```

Loading that file gives a 5.0 x 5.0 m bedroom with a 2.60 m ceiling and three
shelves, and the same object behaves identically when served as a `#r=` link.
`params.W` and `params.D` count 0.5 m cells, so `W: 10` is a 5.0 m room.

## Examples

- [X demo post](https://x.com/sharp_maker/status/2107975422982099238) — the
  author's clip of rolling a classroom, switching to line art with tone and
  changing the sun angle.
- [Official how-to article](https://oyasumi-gamedev.com/tools/haikeigacha/) —
  the walkthrough, the node explanation, the author's technical note and FAQ.
- [The app, English UI](https://tools.oyasumi-gamedev.com/haikeigacha/?lang=en)
  — the tool itself; every claim here was checked on it.
- [Official tool list](https://oyasumi-gamedev.com/tools/) — the sibling manga
  tools, including Name Gacha and Komawari.
- [Name Gacha](https://tools.oyasumi-gamedev.com/namegacha/?lang=en) — its
  Background tab embeds this tool and picks up a room from the `#hg=` link.

## When to use it

- Use it when a manga or webtoon panel needs a room behind the characters and
  the perspective has to hold up.
- Use it for a name or storyboard: roll a room, pick a camera preset, export a
  line-art PNG and draw over it.
- Use it to stage a shot before committing to a drawing, or to hand a GLB to
  [Blender](../3d/blender.md) when a 3D character has to share the room.
- Use it outside comics as a greyboxed interior: a wide shot for a poster, a
  line-art texture for a social graphic, or a stand-in room in a three.js
  prototype.
- Skip it when the background has to be a real place. Use
  [Location Scout](../comics/rokehan.md), which builds streets from map and
  elevation data.
- Skip it for outdoor, fantasy or sci-fi scenery; those room types do not exist.
  Build the set in [Blender](../3d/blender.md) instead.
- Skip it when the panel needs effect lines or a balloon rather than a room; use
  [Effect Lines & Screentone Generator](../comics/koukasen.md) or
  [Speech Bubble Generator](../comics/fukidashi.md).

## Agent notes

- App: `https://tools.oyasumi-gamedev.com/haikeigacha/`. How-to page:
  `https://oyasumi-gamedev.com/tools/haikeigacha/`.
- URL parameters. `?lang=` takes `ja`, `en`, `zh-Hans`, `zh-Hant`, `ko`, `hi`,
  `th`, `es`, `fr`. Language resolves as URL → this tool's saved choice → Name
  Gacha's → Komawari's → the browser's language list → English. English is the
  fallback, not Japanese.
- `?embed=1` turns the page into a panel for Name Gacha, but only inside an
  iframe (`window.parent !== window`); opened top-level it does nothing. It
  hides the header and footer, shows a pick button that `postMessage`s
  `{app:'haikeigacha', type:'pick', v, recipe}` to the parent, and accepts
  `{app:'namegacha', type:'show', recipe}` and
  `{app:'namegacha', type:'lang', code}` back. `?embed=1&render=1` makes it an
  offscreen renderer that answers `render` requests with a PNG data URL, and
  also accepts `?tok=`.
- The hand-off recipe is `#hg=` plus `z` plus base64url zlib-deflate of the same
  state object. Verified end to end: Name Gacha's Background tab loads
  `/haikeigacha/?embed=1` in an iframe (no `render=1`) and that frame shows the
  room from the code.
- The app refuses to be framed by anyone but itself or the article host:
  `frame-ancestors 'self' https://oyasumi-gamedev.com`. A local test page cannot
  iframe it; the owner's own tool pages can. Reach the embed through
  `https://tools.oyasumi-gamedev.com/namegacha/` if you need to drive it.
- Share-link details. `#t=<type>&s=<seed>` only while the state is plain, else
  `#r=<base64url zlib-deflate JSON>` (stream starts `78 9c`; raw deflate and
  gzip are silently ignored). A failed decode is silent too: the app just builds
  its default classroom, so check that `#status` reads "Opened the room from the
  link". The view fields are `m` (render mode), `c` (camera position x,y,z,
  target x,y,z and lens, 7 numbers), `o` (line weight, sun direction, sun
  height, shadow tone, pattern size, base tone) and `tp` (shadow pattern, base
  pattern, pattern size, pattern seed, tone opacity, gray fill 0|1, cast-shadow
  faces 1|2). The `o` field stores pattern size as `patScale * 4.5`, so a scale
  of 1 is written `4.5`. A hash over 60,000 characters is rejected. `?lang=` is
  not carried in links.
- Recipe JSON. Required: `app` = `"haikeigacha"`, `type` in `classroom` /
  `bedroom` / `living`. Optional: `v`, `seed`, `nodeSeeds`, `catSeeds`,
  `catStyles`, `catLocks`, `locks`, `cellEdits`, `params`, `mess`, `counts`,
  `countLocks`, `sizeLock`. `params.W` and `params.D` are cell counts clamped to
  4-40 (so 5-20 m), `params.H` to 2.1-5, `mess` to 0-1. `catStyles` entries with
  an unknown generator are dropped. A file whose `app` is not `haikeigacha` is
  refused with "This is not a Background Gacha recipe (JSON)".
- Grid geometry: one cell is 0.5 m, walls are 0.12 m thick, rotation is 0/1/2/3
  for +z/+x/-z/-x. `cellEdits` keys are `"i,j"` with value 0 (outside) or 1
  (room).
- Keyboard: `Ctrl+Z` undo, `Ctrl+Shift+Z` or `Ctrl+Y` redo, `R` rotate the
  selected object, `Delete` or `Backspace` delete it, `Escape` deselect. In the
  Middle-button orbit scheme numpad 1, 3 and 7 give front, side and top (9
  flips) and numpad +/- zoom. In Alt + buttons, `A` and `F` frame the whole
  room. The pen scheme binds `Space`, `Z` and `R` like a paint program.
- Tone limits: a pattern finer than the current view can draw is rendered at the
  finest size that works and the app says so in the status line. Density is
  capped per generator (60,000 stipple points, for example). PNG export renders
  at 2x and downscales only while `width * height * 4 <= 24,000,000`, so a 4800
  px export onto a very large canvas falls back to 1x.
- Nothing leaves the browser. No upload, no account, no analytics inside the
  app; the response CSP is `connect-src 'self'`. Storage is three `localStorage`
  keys: `haikeigacha.lang`, `haikeigacha.ltOpen`, `haikeigacha.nav`. The Name
  Gacha hand-off is a `#hg=` link carrying `z` plus base64url zlib-deflate of
  the same recipe object.
- Beta and unstable by the author's own warning:
  "いまも機能を足している開発中のツールです。版が変わると、同じ seed や共有リンクでも、部屋の作りが変わることがあります。"
  A `v` field marks the generation rules. Keep the PNG or GLB of any room worth
  keeping.
- Licensing duties: the app renders with three.js and its OrbitControls, both
  MIT, shipped as `lib/LICENSE_three.txt`. The app itself is not open source and
  has no repository or LICENSE file. The output grant is a free-use permission,
  not an open-source licence.
- Gotchas found in testing: rendering is on demand, with no animation loop, so
  wait on the download event or on `#status` rather than a frame. The furniture
  generators and tone patterns run on the main thread, so a 4800 px Lines + tone
  export is slow under software rendering. `#c3` has zero width until the first
  layout, so wait for a width before clicking.
- Dead code warning. The served script also defines `hgExportOBJ`, `hgZip`,
  `svgDoc` and `svgLayer`, but nothing in this page calls them. OBJ, MTL and SVG
  export are not reachable from the UI; do not plan around them.
- Selectors, all verified by clicking them: `#types` `#gacha` `#placeOnly`
  `#seed` `#undo` `#redo` `#modes` `#lw` `#ltBtn` `#ltBox` `#cams` `#lens`
  `#twopt` `#cut` `#shadow` `#nav` `#map` `#tools` `#addtools` `#pW` `#pD` `#pH`
  `#pAuto` `#sizeLock` `#mess` `#cats` `#png` `#pngSize` `#alpha` `#glb` `#link`
  `#json` `#loadbtn` `#load` `#toName` `#status` `#exMsg` `#c3`. The segmented
  ones take child buttons with `data-k` (`#types button[data-k]`).

## Alternatives in this repo

- [Name Gacha](../comics/namegacha.md) — takes a room as a scene and poses
  characters on its floor.
- [Location Scout](../comics/rokehan.md) — real places from map data, when a
  made-up room will not do.
- [Comicalizer](../comics/comicalizer.md) — composites a background and
  characters into finished panels.
- [Manga Panel Layout Generator](../comics/komawari.md) — the panel layout the
  room is drawn into.
- [Effect Lines & Screentone Generator](../comics/koukasen.md) — source of the
  tone patterns reused here.
- [Blender](../3d/blender.md) — open the GLB to relight or re-render it.
- [Three.js](../3d/three-js.md) — load the GLB into a web scene.

## Sources

- [The app](https://tools.oyasumi-gamedev.com/haikeigacha/) — checked 2026-10-14
- [The app, English UI](https://tools.oyasumi-gamedev.com/haikeigacha/?lang=en)
  — checked 2026-10-14
- [Official how-to article and FAQ](https://oyasumi-gamedev.com/tools/haikeigacha/)
  — checked 2026-10-14
- [X demo post](https://x.com/sharp_maker/status/2107975422982099238) — checked
  2026-10-14
- [Official tool list](https://oyasumi-gamedev.com/tools/) — checked 2026-10-14
- [three.js licence shipped with the app](https://tools.oyasumi-gamedev.com/haikeigacha/lib/LICENSE_three.txt)
  — checked 2026-10-14
- [Name Gacha](https://tools.oyasumi-gamedev.com/namegacha/?lang=en) — the
  receiving end of the hand-off, checked 2026-10-14
