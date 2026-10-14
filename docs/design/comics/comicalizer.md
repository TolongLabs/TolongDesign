---
name: Comicalizer
slug: comicalizer
section: Comics
section_slug: comics
source_url: https://tools.oyasumi-gamedev.com/comicalizer/
designeer_url: https://oyasumi-gamedev.com/tools/comicalizer/
designeer_blurb:
  Free tool that turns a plot into one chapter of manga storyboard (name).
paywall: free
pricing_summary: Free, no sign-up, no paid tier; everything runs in the browser.
open_source: false
license: proprietary
category_tags: [comics, manga, storyboard, plotting, threejs]
best_for:
  [
    manga storyboards,
    plot to panel layouts,
    comics pre-production,
    panel layout studies,
    story beats for social posts
  ]
stack: [browser, threejs]
agent_friendly: true
last_verified: 2026-10-14
---

# Comicalizer

> Free tool that turns a plot into one chapter of manga storyboard (name).
>
> Reach for it when the script is written but the panel breakdown is not: paste
> a plot, press one button, and get a full chapter of laid-out pages you can
> export as a layered PSD.

## At a glance

| Field          | Value                                                                                   |
| -------------- | --------------------------------------------------------------------------------------- |
| Source         | [tools.oyasumi-gamedev.com/comicalizer](https://tools.oyasumi-gamedev.com/comicalizer/) |
| Paywall        | **Free** — no sign-up, no paid tier                                                     |
| Open source    | No — source-available, no repository or licence file                                    |
| Type           | Browser app: plot text in, multi-page storyboard out                                    |
| Works with     | Any current browser; three.js r170 and WebGL inside                                     |
| Best for       | Manga storyboards, layout studies, comics pre-production                                |
| Agent-friendly | Yes — text plot syntax, JSON project file, runs headless                                |

## What it is

Comicalizer (コミカライザー) is a free browser app by MIYADAIKU
(おやすみゲーム開発部, X: @sharp_maker). You write a plot — page by page, panel
by panel, who says what — in a small line-based markup. The app turns that text
into one chapter of manga storyboard: panel layout per page, shot size and angle
per panel, poses and expressions on 3D characters, speech balloons, effect lines
and backgrounds.

It runs on the engine of the author's [Name Gacha](../comics/namegacha.md)
sibling tool. Name Gacha rolls random layouts and you pick one; Comicalizer
keeps what the plot states and decides the rest from the page flow. A page built
here can be opened in Name Gacha and sent back. Characters are bundled VRoid
models or a mannequin; real-city backgrounds come from
[Location Scout](../comics/rokehan.md) and room backgrounds from
[Background Gacha](../comics/haikeigacha.md).

Pages export as PNG, layered PSD (350 DPI, 8-bit RGB) or a CLIP STUDIO ZIP of
vector line art. The header carries "In development" and the author warns that a
later version can produce a slightly different storyboard from the same plot.

## Paywall and pricing

- **Free:** everything. No account, no credits, no paid tier, no export cap.
- **Paid:** none.
- **Sign-up required?** No. Nothing is uploaded and nothing is metered.
- **Licence for client work:** yes, commercial and non-commercial, no credit
  line. Two carve-outs are stated on the article: the bundled character models
  keep their own terms, and map-based backgrounds need an attribution line.

The output licence, from the official article:

> 「書き出した絵（PNG・PSD・SVG）は、商用・非商用を問わず自由に使えます。クレジットの表記も要りません。ただし、同梱のキャラで描いた時は、キャラのモデルの利用条件に従ってください。」

"Exported artwork (PNG, PSD, SVG) is free to use, commercial or not. No credit
note is required. However, when you draw with the bundled characters, follow the
terms of use of the character model."

For real-city backgrounds:

> 「ロケハンの背景を使った時は、地図データの出典「© OpenStreetMap
> contributors」を書いてください（遠景を入れた時は「© OpenMapTiles」も）。」

"When you use a Location Scout background, write the map credit '© OpenStreetMap
contributors' (and '© OpenMapTiles' as well when the far view is included)."

Checked 2026-10-14. No pricing page is published.

## How to use

The English interface is described below; the Japanese label follows in
parentheses the first time a control appears. Add `?lang=en` to the URL.

1. Open <https://tools.oyasumi-gamedev.com/comicalizer/?lang=en>. A two-page
   sample plot is already built; edit it or press "Sample" (見本) to restore it.
2. Work in the left column, "Plot" (プロット). "Form" (フォーム) writes the
   syntax for you with dropdowns; "Text" (テキスト) lets you type or paste the
   markup directly. Agents want "Text".
3. Write the cast: `Cast: Ken=M01 (174cm), Mia=F01 (137cm)`. The model is `M01`,
   `F01` or `Doll`; the height in cm sets how large each person draws next to
   the others. Six people can appear on one page.
4. Write scenes, pages and panels (syntax below, or press "How to write"
   (書き方) for the built-in reference, which lists every accepted word in nine
   languages).
5. Press "▶ Make storyboard" (▶ ネームを作る). With "Auto" (自動) ticked it
   rebuilds after every edit instead.
6. Read the notices under the plot box. Each names a line number and a problem —
   an unknown staging word, panels out of order, a page crowding nine or more
   panels. Click a notice to jump to its line. Unknown words never fail the
   build, so always read this list.
7. Click a panel in the middle column. The right column opens its shot size,
   camera angle, view, lens, technique, composition, intent, people, balloons
   and effect lines. Dropdowns redraw that panel at once and lock it against
   later re-generation. "Write edits to plot" (手直しをプロットに書く) folds
   hand edits back into the plot as detail specs.
8. For variants, "Other layout" (別の割り) and "Other staging" (別の演出) open a
   grid of 12 scored options over the page; click one to adopt it, "More
   options" (ほかの案) for the next 12, Escape or "Close" (閉じる) to dismiss.
9. Set backgrounds with "Choose background" (背景を選ぶ). The dialog has three
   tabs: "Near" (近景, rooms from Background Gacha), "Distant" (遠景, "in
   preparation" and disabled) and "Location" (ロケハン, real streets from
   Location Scout). Roll a room and press "Make a storyboard in this room"; in
   Location Scout, drop a pin and press its send-back button. The choice is
   stored as "Background 01" and can be reused per scene or per page.
10. Export from "Export ▾" (書き出す ▾) at the bottom right, or keep the whole
    state with "Save project" (プロジェクトを保存).

### Inputs and parameters

| Input or parameter   | What it accepts                                                                                                                                                                              |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Plot file            | `.txt`, `.md`, `.markdown`, `text/plain`, `text/markdown`; max 2 MB. BOM and CRLF are remembered and written back.                                                                           |
| Project file         | `.json`, `application/json`; max 20 MB.                                                                                                                                                      |
| `Title:`             | Free text, cut to 80 characters. Also sets the export file name.                                                                                                                             |
| `Reading direction:` | `Right to left` or `Left to right`.                                                                                                                                                          |
| `First page:`        | `Left` or `Right`. With direction this places the page turns.                                                                                                                                |
| `Paper size:`        | `A3`, `B4`, `A4`, `B5` (default), `A5`, `B6`. Changes text scale only.                                                                                                                       |
| `Cast:`              | `Name=M01 (174cm)`, `Name=Doll`. Use commas when a name has a space.                                                                                                                         |
| `Language:`          | `ja`, `en`, `zh-Hans`, `zh-Hant`, `ko`, `hi`, `th`, `es`, `fr`, or the language's own name.                                                                                                  |
| `Text size:`         | `Dialogue 12pt, Narration 12pt, SFX 100%`. Dialogue and narration 4–72 pt, SFX 20–400 %. Defaults 12 pt, 12 pt, 100 %.                                                                       |
| Character art        | "Original colors + lines", "Flat color + lines", "Grayscale + lines", "Tone + lines".                                                                                                        |
| Detail specs         | `[Camera pos=… rot=… roll=… lens=…]`, `[Ken pos=… yaw=… pose=… face=… gaze=…]`, `[Balloon Ken=shout,80,4821]`, `[Effect Focus lines density=70 center=Ken]`, `[Same=1-2]`, `[Standing=1-2]`. |
| Background spec      | `[Background classroom no=12]` on a scene line; `[No background]` suppresses it.                                                                                                             |
| JSON block           | A ```json fence directly under a panel carries that panel's numeric detail values, in the project file's shape.                                                                              |

### Export and hand-off

"Export ▾" has six entries; all of them are client-side downloads.

| Menu entry                  | File                           | Notes                                    |
| --------------------------- | ------------------------------ | ---------------------------------------- |
| PNG (this page)             | `<Title>_<NN>P.png`            | 2400 px tall, width from the page aspect |
| PNG (all pages, ZIP)        | `<Title>_pages.zip`            | one PNG per page                         |
| PSD (this page)             | `<Title>_<NN>P.psd`            | 8-bit RGB, 350 DPI, layered              |
| PSD (all pages, ZIP)        | `<Title>_psd.zip`              | one PSD per page                         |
| CLIP STUDIO ZIP (this page) | `<Title>_<NN>P_clipstudio.zip` | vector SVGs plus raster fills            |
| CLIP STUDIO ZIP (all pages) | `<Title>_clipstudio.zip`       | one folder per page                      |

The PSD layer stack, bottom to top: Paper, Background, Effect lines, Local
color, Figures (a group with one layer per person, `Figure A_<name>`), Frame
borders, Balloons, Sound effects. Layers the page does not use are not created.
The stack was read back out of an exported PSD, not copied from the menu
tooltip.

The CLIP STUDIO ZIP for a page holds `01_Frame borders.svg`,
`02_Figure A_<name>.svg`, `NN_Balloons.svg`, the effect-line and background
PNGs, `Underlay.png` (the finished page as a raster guide) and a
`How to import.txt`.

- **CLIP STUDIO PAINT:** open the PSD with File > Open for a same-size canvas
  with every layer. For editable line art use the ZIP: make a 1699×2400 px
  canvas, add `Underlay.png` with Import > Image, then each `.svg` with Import >
  Vector (one file becomes one vector layer). Balloon SVGs hold outlines only;
  the lettering lives in the underlay and the PSD.
- **Photoshop:** open the PSD directly; layer names carry through. The PNGs are
  plain RGBA and drop in as smart objects.
- **Blender:** the PNGs and the underlay work as camera-plane references for
  building a 3D set that matches a chosen panel.
- **Web pages and three.js:** the PNGs are flat images usable as `<img>` sources
  or textures in a [Three.js](../3d/three-js.md) scene. The SVGs are plain path
  geometry with no embedded raster, so they scale and recolour cleanly.

### Driving it from an agent

The whole workflow runs headlessly. `#plot` is a real `<textarea>` and the
buttons carry stable ids.

This two-page plot, in English keywords, built and exported in the headless run.
Copy it as a starting point; it uses a cast line, a scene header, page markers,
a page-turn tag, every voice type and a camera detail spec:

```text
Title: The Roof After School
Reading direction: Right to left
First page: Left
Cast: Ken=M01 (174cm), Mia=F01 (137cm)
Language: English

# Scene: Rooftop at dusk

Page 1
1: Background (rooftop fence) [Establishing shot, Long shot]
2: Mia "You came..." Ken [Medium shot]
3: Ken "...You said it was urgent." [Reaction shot]
4: Mia (I practised this all night...) [Close-up]
5: Mia Ken [Beat]
[Camera pos=1.2,1.5,3 rot=30,-10 roll=5 lens=35mm]

Page 2 [Page-turn reveal]
1: Ken "So? What is it?" [Medium close-up]
2: Mia "The club is closing." [Tension, Close-up]
3: Ken "Huh?" [Climax, Surprise, Focus lines, Low angle, Large panel]
4: Mia "And I... I'm leaving in spring." Ken [Extreme close-up, Sadness]
```

The script that produced the exported files (`PLOT` holds the text above):

```js
import { chromium } from 'playwright'

const browser = await chromium.launch({
  args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader']
}) // software WebGL when headless
const page = await browser.newPage({ acceptDownloads: true })
await page.goto('https://tools.oyasumi-gamedev.com/comicalizer/?lang=en')

// Wait for the start-up build of the sample plot to finish.
await page.waitForFunction(
  () => document.querySelectorAll('#strip .th').length > 0
)

// Paste a plot in the documented syntax and build it.
await page.click('#modeText') // switch the left column to text mode
await page.fill('#plot', PLOT)
await page.click('#make')
await page.waitForFunction(
  () => document.querySelectorAll('#strip .th').length === 2
)

// Export. The menu is a <details> that closes after each click, so re-open it
// every time and call the button's own click() rather than the hidden label.
async function grab(selector) {
  await page.evaluate(() =>
    document.querySelectorAll('details.menu').forEach((d) => (d.open = true))
  )
  const [dl] = await Promise.all([
    page.waitForEvent('download'),
    page.evaluate((s) => document.querySelector(s).click(), selector)
  ])
  return dl
}

await (await grab('#pngOne')).saveAs('out/page.png')
await (await grab('#psdOne')).saveAs('out/page.psd')
await (await grab('#projSave')).saveAs('out/project.comicalizer.json')
await browser.close()
```

Plots also load from a file: `page.setInputFiles('#fPlot', 'plot.md')`, and
projects through `page.setInputFiles('#fProj', 'project.json')`. Both inputs are
`hidden`, which `setInputFiles` does not mind.

A minimal project file an agent can write by hand, verified to load:

```json
{
  "format": "comicalizer-project",
  "version": 4,
  "app": "2026-10-09",
  "plot": {
    "text": "Title: Hand Made\nCast: Ken=M01\n\nPage 1\n1: Ken \"Hi.\"\n"
  },
  "pages": [{ "n": 1, "v": { "layout": 0, "stage": 0 } }]
}
```

`pages[].n` must exist in the embedded plot; an unmatched page is skipped with a
notice, and a missing `v` makes the app rebuild that page rather than fail the
load. Loading replaces the current plot with `plot.text`, so the file is
self-contained.

## Examples

- [Demo post on X](https://x.com/sharp_maker/status/2109077243779842502) — the
  launch post and its 52-second walkthrough: 12 layout options, a low-angle
  climax panel, a pose swap, a room roll and the PSD export menu.
- [Official article](https://oyasumi-gamedev.com/tools/comicalizer/) — the full
  Japanese reference: plot syntax, the 12-option grids, backgrounds, export
  formats, and the FAQ covering price, licence and privacy.
- [The app itself](https://tools.oyasumi-gamedev.com/comicalizer/?lang=en) — the
  English UI; its "Sample" button loads a working two-page plot in the current
  language, the fastest way to see every syntax element at once.
- [Camera and shot direction](https://oyasumi-gamedev.com/manga-name-camera-direction/)
  — the author's own article on camera height and distance; it is the reasoning
  behind the shot and angle words the plot syntax uses.
- [Background Gacha as Comicalizer embeds it](https://tools.oyasumi-gamedev.com/haikeigacha/?embed=1&lang=en)
  — opened from the background dialog; roll a room, then the send-back button
  becomes available.

## When to use it

- Use it when a plot exists and the panel breakdown does not, and you want a
  whole chapter rather than one page.
- Use it for a first pass you intend to redraw. The output is a name, not
  finished art, and the PSD is built to be drawn over.
- Use it for camera and pose studies: ask for a panel at
  `[Low angle, Extreme close-up]` and see it before committing to a drawing.
- Use it for non-comic work that wants sequential panels — social carousels,
  storyboard animatics, explainer strips, or a visual script before an
  illustration.
- Use it to hand a 3D reference set to [Blender](../3d/blender.md): pick
  backgrounds and camera angles here, then match the set in 3D.
- Skip it when you need one panel layout, not a chapter; use
  [Manga Panel Layout Generator](../comics/komawari.md) and place it yourself.
- Skip it when you only need balloons or effect lines;
  [Speech Bubble Generator](../comics/fukidashi.md) and
  [Effect Lines & Screentone Generator](../comics/koukasen.md) do one job each
  with more control.
- Skip it when the final art is the point and you will not redraw: a vector tool
  such as [Figma](../interface-design/figma.md) or
  [Penpot](../interface-design/penpot.md) gives precise control, and
  [Spline](../interface-design/spline.md) if the scene should be real 3D.

## Agent notes

- **URLs.** App `https://tools.oyasumi-gamedev.com/comicalizer/`, article
  `https://oyasumi-gamedev.com/tools/comicalizer/`, English via `?lang=en`.
- **URL parameters the app reads:** `lang` only. `?embed=1`, `?render=1` and
  `?tok=` appear in the source but belong to the sibling tools Comicalizer
  embeds, not to this app. Start-up language order: `?lang=` >
  `comicalizer.lang` in localStorage > `namegacha.lang` > `komawari.lang` >
  browser language > `en`.
- **No project share link.** Only a _page_ can be handed to Name Gacha, as a URL
  hash
  `#s=…&r=…&d=…&lw=…&c=…&pc=…&rows=…&th=…&tv=…&b=…&ne=…&bg=…&p=…&i=…&e=…&ng=…`.
  `ng` is the payload: `z` plus URL-safe base64 of raw-deflate JSON, or `j` plus
  base64 when compression is unavailable. The app writes and reads it through
  "Open this page in Name Gacha" and "Load Name Gacha link…" (the latter via a
  `window.prompt`). Do not hand-author this hash; write a plot or a project
  file.
- **Plot syntax, complete.** Header lines are read anywhere in the file:
  `Title:`, `Reading direction:`, `First page:`, `Paper size:`, `Cast:`,
  `Language:`, `Text size:`. Scene: `# Scene: name` (hash optional, trailing
  brackets may be a background spec). Page: `Page 1`, `Pg. 1`, `1P`, `P1`,
  `第1页`, `第1頁`, `1페이지`, `หน้า 1`, or three or more `-`, `=`, `ー`, `＝`.
  Panel: `Panel 1:`, `1:`, `1コマ目：`, `1.`, `①`…`⑳`, `- `, `・`, `第1格：`,
  `1컷:`.
- **Panel contents**, split on spaces or `、` and read left to right:
  `Name "text"` speech, `Name (text)` inner voice, `Name <text>` off-screen
  voice, `Name {text}` phone or broadcast, `Name 「……」` a silent balloon,
  `Name` alone (or `Name_`) present but silent, `【text】` narration, `《text》`
  sound effect, `Background (desc)` a panel with nobody in it, `[tags]` for
  directives. Also accepted: `Narration "…"` and `Caption "…"`, `SFX "…"` and
  `Sound effect "…"`, `<<text>>` for sound effects, and the alternate quote
  pairs `""`, `“”`, `«»` for speech with `()` `〈〉` `<>` `『』` `{}` for the
  other voices. `／` inside a line splits it into linked balloons for one
  speaker, and a space-padded `/` does the same in the Latin-script languages;
  `\n` breaks the line inside the balloon.
- **Directives**, inside `[ ]` or `［ ］`, split on `、` or `,`. 123 terms in 14
  groups: shot size (8, ELS…ECU), camera angle (8), view (5), lens (5), roll
  (2), people in shot (2), composition (5), technique (27), panel role (5),
  staging intent (10), panel size and shape (6), page (4, Page-turn reveal,
  Cliffhanger, Two-page spread, Title page), effect lines (27) and balloon voice
  types (9), plus 16 balloon shapes read only inside a `Balloon` spec. English
  abbreviations work: `CU`, `LS`, `MS`, `MCU`, `ECU`, `ELS`, `FS`, `KS`, `OTS`,
  `POV`, `EWS`, `XLS`.
- **One value per category** for shot, angle, view, lens, roll, people,
  composition, role and intent — a second value replaces the first and logs a
  notice. Effect lines, techniques, sizes and page tags may repeat.
- **A directive right after a line** applies to that line only when it is a
  balloon type (`Mia "Stop!" [Burst balloon]`); any other word in the same group
  still lands on the panel.
- **A bare `[Camera pos=…]` line** is not a panel: it is read as a continuation
  of the panel above it. Put it on its own line directly under the panel.
- **Detail-spec keys:** `Camera` with `pos` (x,y,z metres), `rot`
  (horizontal,vertical degrees), `look`, `roll`, `lens` (mm), `fov`; a person's
  name with `pos` (x,z), `yaw`, `pose`, `face` (name plus an optional 0–100
  strength), `gaze`; `Balloon` with a voice type, strength and shape number or a
  bare shape such as `cloud`; `Effect` with a type, `density`, `center` and
  `seed`; and the panel references `same=1-2` and `standing=1-2`. Every key and
  value has an equivalent in each of the nine plot languages.
- **Limits.** Six cast per page and nine panels per page log warnings. Plot file
  2 MB, project file 20 MB, project text 400,000 characters, 400 pages, 300
  backgrounds, 200 scene-background entries; titles and scene names cut at 80
  characters. Undo holds 60 steps in the panel editor and 200 in the form.
- **Export size** is always 2400 px tall; width follows the page aspect. A page
  that draws a background loads three.js first, so its first export is slower.
  The raster step uses `canvas.toBlob`, so on iOS the ~16.78-megapixel cap makes
  very tall pages fail rather than produce a bad file.
- **Beta status.** The header says "In development" and the project file records
  `app: 2026-10-09`. The article warns the same plot can give a slightly
  different storyboard after a version bump, so keep the project file or the
  exports if the result matters.
- **Attribution duties.** None for ordinary output. A Location Scout background
  needs "© OpenStreetMap contributors", plus "© OpenMapTiles" when the far view
  is included. The bundled VRoid characters are for use inside the tool only and
  cannot be extracted or redistributed.
- **What never leaves the browser.** The plot, the built storyboard and every
  export stay local. The plot and last-used settings live in localStorage under
  `comicalizer.plot.v1`, `comicalizer.lang`, `comicalizer.vrmMode` and
  `comicalizer.show`. Only a real-city background sends anything: the hidden
  Location Scout iframe requests its latitude and longitude bounding box from
  OpenStreetMap, OpenFreeMap, GSI and Terrain Tiles servers. Bundled characters
  and the Japanese balloon fonts are fetched from the same site as the app.
- **Selectors.** `#plot`, `#modeText`, `#modeForm`, `#make`, `#makeMsg`,
  `#msgs`, `#plotOpen`, `#plotSave`, `#plotSample`, `#plotHelp`, `#fPlot`,
  `#fProj`, `#projSave`, `#projOpen`, `#pngOne`, `#pngAll`, `#psdOne`,
  `#psdAll`, `#cspOne`, `#cspAll`, `#reLayout`, `#reStage`, `#layoutEdit`,
  `#roomPick`, `#viewMode`, `#strip`, `#view`, `#prev`, `#next`, `#pageNo`,
  `#spread`, `#vrm`, `#vrmMode`, `#hideChara`, `#roughOn`, `#undo`, `#redo`,
  `#zoomFit`, `#cands`, `#embedDlg`, `#embedFrame`, `#lang`. Thumbnails are
  `#strip .th`; panel hit targets inside the page SVG carry `data-i`.
- **Gotchas hit while testing.** The export menu is a `<details>` that closes
  after one click, so call the button's `click()`. A plot line starting with a
  bracket followed by a space is a list item, not a panel line. `Standing` on
  its own is not a staging term (only the `[Standing=1-2]` panel reference is);
  for a pause use `Beat` or `Hold beat`. Add every non-cast name to `Cast:` or
  it logs "Unknown word". First paint downloads a 3.1 MB HTML file, so give
  `page.goto` a 120-second timeout and wait for `#strip .th` before acting.

## Alternatives in this repo

- [Name Gacha](../comics/namegacha.md) — the engine underneath; rolls one page
  at a time instead of building a chapter from a plot.
- [Manga Panel Layout Generator](../comics/komawari.md) — panel layouts alone,
  as a bundle of options.
- [Speech Bubble Generator](../comics/fukidashi.md) — balloons as a generator,
  with more per-balloon control than a plot line gives you.
- [Effect Lines & Screentone Generator](../comics/koukasen.md) — effect lines
  and screentones on their own.
- [Background Gacha](../comics/haikeigacha.md) — the 3D rooms Comicalizer rolls
  for interior scenes.
- [Location Scout](../comics/rokehan.md) — the real-city backgrounds it embeds.
- [Blender](../3d/blender.md) — where a Comicalizer panel becomes a real 3D set.

## Sources

- [Comicalizer app](https://tools.oyasumi-gamedev.com/comicalizer/?lang=en) —
  loaded headlessly; UI labels, selectors, plot syntax, export behaviour and the
  exported files all come from that run — checked 2026-10-14
- [Official article](https://oyasumi-gamedev.com/tools/comicalizer/) — pricing,
  the output licence, the map-attribution clause, the background tabs, the FAQ —
  checked 2026-10-14
- [Demo post on X](https://x.com/sharp_maker/status/2109077243779842502) —
  fetched through the fxtwitter API; the author's walkthrough video — checked
  2026-10-14
- [Camera and shot direction](https://oyasumi-gamedev.com/manga-name-camera-direction/)
  — the vocabulary the staging directives come from — checked 2026-10-14
- [Background Gacha embed](https://tools.oyasumi-gamedev.com/haikeigacha/?embed=1&lang=en)
  — opened from inside Comicalizer's background dialog — checked 2026-10-14
