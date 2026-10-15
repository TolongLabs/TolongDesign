---
name: Location Scout
slug: rokehan
section: Comics
section_slug: comics
source_url: https://tools.oyasumi-gamedev.com/rokehan/
designeer_url: https://oyasumi-gamedev.com/tools/rokehan/
designeer_blurb:
  Free tool that draws real-world streets as manga line art and tone.
paywall: free
pricing_summary:
  Free, no sign-up, no paid tier. Output is free for commercial and
  non-commercial use with a map credit.
open_source: false
license: proprietary
category_tags:
  [comics, manga, backgrounds, 3d, maps, line-art, screentone, threejs]
best_for:
  [manga backgrounds, webtoon backdrops, storyboards, 3d city scenes for art]
stack: ['browser', 'threejs']
execution_mode: browser-app
surface: ['comics', 'web-3d']
status: active
agent_friendly: true
last_verified: 2026-10-14
---

# Location Scout

> Free tool that draws real-world streets as manga line art and tone.
>
> Reach for it when a page needs a real street as a background and a photograph
> would not match the art.

## At a glance

| Field          | Value                                                                           |
| -------------- | ------------------------------------------------------------------------------- |
| Source         | [tools.oyasumi-gamedev.com/rokehan](https://tools.oyasumi-gamedev.com/rokehan/) |
| Paywall        | **Free** — no sign-up, no paid tier                                             |
| Open source    | No — source-available, but no repository or licence grant                       |
| Type           | Browser tool that rebuilds a real city block in 3D and draws it                 |
| Works with     | Chrome, Edge, Firefox, Safari; desktop recommended                              |
| Agent-friendly | Yes — hash share links, headless exports, hand-written KML                      |

## What it is

Location Scout (どこでもロケハン) is a free browser app by MIYADAIKU
(おやすみゲーム開発部). It fetches OpenStreetMap footprints and elevation tiles
for one area, extrudes them into a 3D city, and draws that city as manga
background art: line art, screentone and solid black. You place a camera, pick
one of four drawing styles, and export a PNG, an SVG, a 3D model or a share
link. It runs client-side on three.js r170 in WebGL with no account and no
runtime AI, and ships 321 example places, about 619,000 Japanese and 1,173,000
Italian search names, and city packs for 248 cities plus all of Japan and Italy.
Its room-interior sibling is [Background Gacha](../comics/haikeigacha.md).

## Paywall and pricing

- **Free:** everything, with no sign-up, login, paid tier or pricing page.
  Commercial and non-commercial use is allowed with credit:

  > 作った絵は、商用・非商用を問わず使えます。公開する時は、地図データの出典「©
  > OpenStreetMap
  > contributors」を絵の近くか作品の奥付などに書いてください（OpenStreetMap の決まり・印刷物では
  > https://www.openstreetmap.org/copyright
  > も）。3D モデル（GLB・FBX・OBJ）を人に配る時も、同じ出典を付けてください（地図データの部分は ODbL です）。

  In English: use the pictures you make, commercially or not, and credit the map
  near the picture or in your credits; for printed works print the copyright URL
  too.

Checked 2026-10-14. Beyond
`3D 表示に three.js（MIT ライセンス）を 使っています`, the app names no licence
for its own code, so treat the code as source-available, not reusable.

## How to use

The English UI is `https://tools.oyasumi-gamedev.com/rokehan/?lang=en`. It opens
on Shibuya Crossing. Japanese labels follow in parentheses.

1. **Pick a place.** Type a name, address or coordinates into the search box and
   press **Search** (探す). Name search covers Japan and Italy only;
   `35.6595, 139.7005` works anywhere. One hit builds at once, several appear
   under **Candidates** (候補一覧).
2. **Set the area.** **Size** (広さ) is the near-area side, 200 m to 1 km,
   default 300 m. **Surroundings** (遠景) adds simple blocks around it: None, 2
   km or 4 km, default 2 km.
3. **Aim the camera.** Pick a preset on the 3D view — Overview, Top, Wide view,
   crossing eye-level shots, street shots — or drag to orbit. **Lens** (レンズ)
   is 14–85 mm; **Straight verticals** (縦線をまっすぐ) forces two-point
   perspective.
4. **Choose a drawing style.** Four buttons above the viewport: Color (カラー),
   Color + lines (カラー＋線), Line art (線画), Lines + tone (線画＋トーン).
   **Light · Tone** (光・トーン) opens the tray.
5. **Draw the tone.** There: **Direction** (方位) and **Height** (高さ) for the
   sun, or **Real sun** (実際の太陽) with **Month** and **Time**; **Shadow** and
   **Base color** strength; **Pattern** (模様) from 27 patterns, with size and
   opacity; **Solid black** (ベタ) **Range** and **White lines** (白抜き);
   **Outline** (輪郭) and **Line** (線).
6. **Fill the street.** Under **What to build** (作る物): terrain, trees, road
   markings and poles, **Detailed nearby buildings & trees**, a **Season**, tree
   style, leaf edge and **People & cars**. **Re-roll unknown heights** re-rolls
   guessed buildings.
7. **Move around.** Click the map or the 3D ground to drop a pin, then **Move
   camera here (F)** or press F, or **Stand here** (目の高さで立つ).
8. **Export.** PNG, SVG, GLB, FBX, OBJ or **Copy link**.

### Inputs and parameters

Places are typed, pasted or dragged in; only numbers inside a link are read.

| Input                       | Accepted form                                                        |
| --------------------------- | -------------------------------------------------------------------- |
| Decimal coordinates         | `35.6595, 139.7005`; also `?q=`, `ll=` and `query=` links            |
| Degrees / minutes / seconds | `35°39'34"N 139°42'02"E`; Japanese `北緯…東経…` forms work           |
| Google Maps / OSM link      | `.../@35.6595,139.7005,17z`, `.../#map=18/35.6595/139.7005`          |
| Google Earth (web) link     | `@lat,lon,alt a,dist d,fov y,heading h,tilt t` — sets the camera too |
| Plus Code                   | `8Q7XMP5R+R6`; a short `MP5R+R6` needs a place name after it         |
| File                        | KML, KMZ, GeoJSON via the file button or a drag                      |

Controls, with the ranges and defaults read from the running app.

| Control                  | Range / options                     | Default     |
| ------------------------ | ----------------------------------- | ----------- |
| `#size` / `#far`         | 200 m–1 km / none, 2 km, 4 km       | 300 m, 2 km |
| `#lens`                  | 14–85 mm, step 1                    | 24 mm       |
| `#lw` / `#olk`           | line 0.2–5.0 / outline 1.0–3.0×     | 1.0 / 1.1   |
| `#lightAz` / `#lightEl`  | 0–355 step 5 / 5–85 step 1          | 330° / 45°  |
| `#sunMonth` / `#sunHour` | 1–12 / 5–19 step 0.25               | 10, 15:00   |
| `#toneC` / `#toneS`      | 0–250%, step 10                     | 100%        |
| `#pat` / `#patScale`     | 27 patterns / 10–300%               | dots, 100%  |
| `#beta` / `#toneA`       | solid black 0–100% / opacity 0–100% | 40%, 100%   |

### Export and hand-off

File names start `rokehan_<lat4>_<lon4>`; the PNG adds the mode. **Copy link**
writes the share link to the clipboard, or shows it as a message when the
clipboard is blocked.

- **PNG** — long side 2400, 3600 or 4800 px. **Transparent paper for line art**
  drops the paper in the line modes; **Put the map data credit in the
  bottom-right corner** stamps it in.
- **SVG** — vector paths from the visible shape edges, `..._lines.svg`, the same
  size as the PNG so the two stack exactly. No tone, no solid black, no colour,
  no window patterns on distant buildings.
- **GLB, FBX, OBJ** — the GLB is one glTF binary; **Include the surroundings**
  adds the far view (4 km can exceed 50 MB). The FBX is binary FBX 7.4, refused
  above 6 million vertices, and the article calls its unit cm while the OBJ
  README says metres, so check the scale on import. The OBJ is a ZIP of `.obj`,
  `.mtl` and `README.txt`, refused above 5 million vertices.

**CLIP STUDIO PAINT** takes the SVG through [File] → [Import] → [Vector] as one
editable vector layer, and the GLB or FBX through [File] → [Import] → [3D data].
**Blender, Unity and Maya** open the GLB or FBX directly; both carry material
colours only, no texture images, and UVs are box-projected at 1 unit = 1 m.
**Photoshop** opens the PNG, or you can export twice and separate the lines. **A
web page** loads the GLB with `GLTFLoader`.

### Driving it from an agent

Everything works headlessly. This script was tested against the live app:

```js
// save as scout.mjs, then: bun scout.mjs
import { chromium } from 'playwright'
const browser = await chromium.launch({
  args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader']
}) // software WebGL when headless
const page = await browser.newPage({ acceptDownloads: true })
await page.goto(
  'https://tools.oyasumi-gamedev.com/rokehan/?lang=en' +
    '#ll=35.659500,139.700500&s=300&far=0&crowd=0' +
    '&cam=0,120,210,0,20,-60,28&mode=linetone',
  { waitUntil: 'domcontentloaded' }
)
for (;;) {
  // wait for the build, ~22 s Shibuya
  if (await page.evaluate(() => !!window.__rk?.DATA?.model)) break
  await new Promise((r) => setTimeout(r, 3000))
}
await page.click('#modes button[data-k="linetone"]')
await page.click('#ltBtn') // open the light and tone tray
await page.selectOption('#pat', 'kakeami')
await page.$eval('#beta', (el) => {
  // range inputs need a real event
  el.value = '40'
  el.dispatchEvent(new Event('input', { bubbles: true }))
})
const grab = async (sel) => {
  // export blocks the main thread, so
  const [dl] = await Promise.all([
    // click needs a long timeout too
    page.waitForEvent('download', { timeout: 900000 }),
    page.click(sel, { timeout: 900000, noWaitAfter: true })
  ])
  await dl.saveAs('out/' + dl.suggestedFilename())
}
await grab('#png')
await grab('#svg')
await grab('#glb')
```

Selectors, from the app's own source: `#modes button[data-k="linetone"]`,
`#ltBtn`, `#ltBox`, `#toneGrp`, `#pat`, `#patScale`, `#toneA`, `#beta`,
`#pngSize`, `#png`, `#svg`, `#glb`, `#fbx`, `#obj`, `#link`, `#placeFile`.

The share-link hash is hand-writable; `hashFor()` writes it and `readHash()`
reads it.

```text
#ll=<lat>,<lon>&s=<metres>&seed=<int>&far=<km>&crowd=<0|1|2>
 &season=<...>&leaf=<smooth|boko|fusa>&tree=<tone|soft|line>&n=<name>
 &flat=1&notree=1&noprop=1
 &cam=<px,py,pz,tx,ty,tz,lens>&mode=<color|colorline|line|linetone>
```

`ll` is required; without it the hash is ignored. `s` is the near-area side in
metres, `far` the surroundings in kilometres. `cam` needs exactly seven finite
numbers: camera position xyz and target xyz in metres in the app's local frame,
whose origin is the area centre, then focal length in mm; a malformed `cam` is
dropped and Overview used instead. `flat`, `notree` and `noprop` are the off
switches. The link under Examples was hand-written in this format and loaded.

KML is hand-writable too: the app reads the first `<Point>`, or the first
`<LookAt>` or `<Camera>`, and ignores the rest. Coordinates are longitude first,
so a `<Point>` holding `139.7026,35.6580,0` in a `<kml>` document moved the
build there when dropped onto `#placeFile`. GeoJSON works the same way, through
the first Point in the file.

## Examples

- [The author's X post](https://x.com/sharp_maker/status/2109834006703292423) —
  loaded; the launch announcement, with the author's answers on attribution and
  on AI.
- [The official article and FAQ](https://oyasumi-gamedev.com/tools/rokehan/) —
  loaded; the walkthrough, the licence paragraph and the FAQ.
- [Shibuya Crossing, hand-written share link](https://tools.oyasumi-gamedev.com/rokehan/?lang=en#ll=35.659500,139.700500&s=300&far=0&crowd=0&cam=0,120,210,0,20,-60,28&mode=linetone)
  — built from the Tokyo pack in 22 s, then exported a 2400×1818 PNG of 2.0 MB,
  an SVG of 79,837 segments and a 92 MB GLB (the app reports 36 meshes; three.js
  parses them into 185).
- [Times Square, hand-written share link](https://tools.oyasumi-gamedev.com/rokehan/?lang=en#ll=40.758000,-73.985500&s=300&far=2&cam=0,150,260,0,25,-70,35&mode=linetone)
  — loaded with a 2 km far view; the credit then also reads `© OpenMapTiles`.

## When to use it

- Use it for a manga or webtoon background that must be a real street or skyline
  you cannot visit, or when the camera, not your eye, must set the vanishing
  points. Use it for a storyboard pass too.
- Use it for 3D work: the GLB and FBX are real meshes with metric units and UVs.
  Use it for non-comic design as well, such as a poster or a hero image with a
  drawn city.
- Skip it for interiors; use [Background Gacha](../comics/haikeigacha.md).
- Skip it when you need panels, balloons or characters: compose with
  [Manga Panel Layout Generator](../comics/komawari.md),
  [Speech Bubble Generator](../comics/fukidashi.md) and
  [Name Gacha](../comics/namegacha.md).
- Skip it for an invented location, or when the area has thin map data: check
  `#info` first, and model the city in [Blender](../3d/blender.md).

## Agent notes

- App: `https://tools.oyasumi-gamedev.com/rokehan/`. English UI: append
  `?lang=en`; `hreflang` also lists `ja`, `zh-Hans`, `zh-Hant`, `ko`, `hi`,
  `th`, `es`, `fr`. Order: `?lang=`, `rokehan.lang`, the sibling keys
  `haikeigacha.lang`, `namegacha.lang`, `komawari.lang`, browser, `en`.
  `?embed=1` hides the header and footer inside a frame; `?sets=`,
  `?nominatim=1` and `?overpass=0` only work on `LOCAL` (`file:`, `localhost`).
  Poll `window.__rk.DATA.model`, `window.__rk.PLACE` and
  `window.__rk.VIEW.camState()` to read the state back.
- Beta. The FAQ says the version can change and the same link can then draw
  slightly differently; export what you must reproduce. Build time measured
  headlessly: Shibuya on the Tokyo pack, 300 m, 22 s from a cold browser to
  `DATA.model`; the app reports 2.1 s of that.
- Data sources: city packs at
  `https://tools.oyasumi-gamedev.com/rokehan/packs/index.json` (248 packs),
  `packs-jp/` and `packs-it/` for all of Japan and Italy, `search/index.json`
  for the search lists, OpenFreeMap vector tiles for the surroundings, GSI DEM
  tiles in Japan, AWS Terrain Tiles elsewhere. Overpass is the fallback and is
  off on the public site, so prefer the packs. Attribution is mandatory and
  exported per format: PNG stamps `© OpenStreetMap contributors` (plus
  `© OpenMapTiles` with the far view), SVG writes a comment and `<metadata>`,
  GLB sets `asset.copyright`, FBX uses the SceneInfo comment, and OBJ carries it
  in the file head and a bundled `README.txt`.
- Privacy: typed names are matched against site-hosted lists and never sent out;
  only the latitude and longitude reach the tile and elevation hosts, cached for
  7 days. Hard caps: PNG 4800 px, FBX 6 million vertices, OBJ 5 million. Expect
  large files: a 300 m Shibuya GLB was 92 MB.
- Gotchas from the headless run. `#pat` lives in `#toneGrp`, `hidden` until the
  mode is `linetone`, so set the mode first. After a build the app rewrites the
  hash without `cam` and `mode`, so read the camera from
  `window.__rk.VIEW.camState()`. Timings for one Shibuya view: PNG 34.2 s, SVG
  10.6 s, GLB 1.1 s.

## Alternatives in this repo

- [Comicalizer](../comics/comicalizer.md) — stages characters on a Location
  Scout background. [Background Gacha](../comics/haikeigacha.md) — the same
  drawing styles applied to rooms, with a GLB export.
- [Manga Panel Layout Generator](../comics/komawari.md) and
  [Effect Lines & Screentone Generator](../comics/koukasen.md) — the page around
  the plate, and the effect lines and screentone to finish it.
- [Blender](../3d/blender.md) — when the city must be modelled.
  [Three.js](../3d/three-js.md) loads the GLB in a page;
  [gltf.report](../3d/gltf-report.md) inspects it.

## Sources

- [App](https://tools.oyasumi-gamedev.com/rokehan/) and its
  [English UI](https://tools.oyasumi-gamedev.com/rokehan/?lang=en) — checked
  2026-10-14
- [Official article and FAQ](https://oyasumi-gamedev.com/tools/rokehan/), the
  [X demo post](https://x.com/sharp_maker/status/2109834006703292423) and the
  [tool index](https://oyasumi-gamedev.com/tools/) — checked 2026-10-14
- [City pack index](https://tools.oyasumi-gamedev.com/rokehan/packs/index.json)
  — checked 2026-10-14
- [OpenStreetMap copyright](https://www.openstreetmap.org/copyright) and the
  app's own unminified source (1,082,197 bytes, plus the 723 KB
  `lib/three_hg.js`, three.js r170) — checked 2026-10-14
