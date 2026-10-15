---
name: Name Gacha
slug: namegacha
section: Comics
section_slug: comics
source_url: https://tools.oyasumi-gamedev.com/namegacha/
designeer_url: https://oyasumi-gamedev.com/tools/namegacha/
designeer_blurb:
  Free tool that auto-places character roughs into manga panel layouts.
paywall: free
pricing_summary:
  Free with no account. Exports may be used commercially with no credit; a VRM
  you load keeps its own licence.
open_source: false
license: proprietary
category_tags: [manga, storyboard, panel-layouts, pose, vrm, threejs]
best_for:
  [
    manga name drafts,
    panel blocking,
    dialogue blocking,
    pose reference,
    shot planning
  ]
stack: ['javascript', 'svg', 'canvas', 'threejs', 'browser']
execution_mode: browser-app
surface: ['comics']
status: active
agent_friendly: true
last_verified: 2026-10-14
---

# Name Gacha

> Free tool that auto-places character roughs into manga panel layouts.
>
> Reach for it when the panels are drawn and nobody can say who stands where,
> which way they face, or how big the shot should be.

## At a glance

| Field          | Value                                                                               |
| -------------- | ----------------------------------------------------------------------------------- |
| Source         | [tools.oyasumi-gamedev.com/namegacha](https://tools.oyasumi-gamedev.com/namegacha/) |
| Paywall        | **Free** — no sign-up, no paid tier                                                 |
| Open source    | No — served unminified, no repository or licence file                               |
| Type           | Browser storyboard blocker for manga name pages (ネーム)                            |
| Works with     | Any modern browser; VRM models; CLIP STUDIO PAINT                                   |
| Best for       | Name pages, dialogue blocking, pose reference                                       |
| Agent-friendly | Yes — static page, stable `#id` selectors, share state                              |

## What it is

Name Gacha is one HTML page that shoots a conversation scene panel by panel.
Pick a panel layout, give it one to three figures, choose a tone, and it rolls
six candidate pages. Each candidate scores every panel against a set of
directing rules, so the options differ in shot size, camera height, lens and
gaze, not just in figure placement. Lock the panels you like and reroll the
rest. MIYADAIKU (おやすみゲーム開発部) built it as the storyboard step of their
manga tool chain; the sibling tools sit in the tabs above the canvas.

Figures are 3D mannequins built from joint angles, not image-generation output.
Swap a mannequin for one of two bundled VRoid Studio models or for a `.vrm` of
your own and the same pose and camera apply. Figures render as a 3D mannequin, a
2D rough or a silhouette. The page ships as a single 2.13 MB static file with
inline CSS and JavaScript — no build step, no framework, no account — and is
labelled **In development · M3.8**. three.js r170 (MIT) loads separately, only
when a VRM or a 3D room is on screen.

## Paywall and pricing

- **Free:** everything. Every control and every export.
- **Paid:** none.
- **Sign-up required?** No.
- **Licence for client work:** the article states:

  > 書き出した絵（PNG・SVG・PSD）は、商用・非商用を問わず自由に使えます。クレジットの表記も要りません。ただし、VRM のキャラで描いた時は、そのキャラのモデルの利用条件に従ってください。

  Exported images (PNG, SVG, PSD) may be used freely, commercial or
  non-commercial. No credit required. When you draw with a VRM character, follow
  that model's conditions. The bundled models (F01, M01) may not be extracted or
  redistributed.

- The tool is proprietary: no repository, no licence file. three.js is MIT; the
  two bundled VRM models are not free assets.

Checked 2026-10-14.

## How to use

1. Open `https://tools.oyasumi-gamedev.com/namegacha/?lang=en`. The page ships
   in Japanese and remembers the choice. Nine languages ship: ja, en, zh-Hans,
   zh-Hant, ko, hi, th, es, fr.
2. In **Controls** → **🎲 Gacha**, pick a layout preset
   (`#chips button[data-p]`): _Orderly / Dialogue_ (`seizen`), _Standard_
   (`std`), _Action_ (`action`) or _Splash / Title page_ (`tobira`). Set
   **Format** (`#ratio`) to B5/A5, 4:5 or 1:1, and **Reading** (`#dir`) to
   _Right→left (manga)_ or _Left→right (comics)_; the reading order also follows
   the UI language.
3. Set **Figures** (`#castN button[data-n]`) to 1, 2 or 3. Each row has a name
   field (max 6 characters), a height in cm (80–220) and an appearance select
   (`#castList .cchar`): _Mannequin_, _F01_, _M01_ or _From file (.vrm)…_.
   Dropping a `.vrm` on the row works too. With a VRM loaded, **Terms** opens
   the licence fields the model carries (see _Agent notes_).
4. Choose **Randomness** (`#tempSeg`), **Tone** (`#tone`) and **Peak panel**
   (`#peakSeg`), then press **🎲 Roll gacha** (`#gachaBtn`). Six options appear
   above the page (`#cands .cand`), each scored out of 100. Click one.
5. Click a panel to open **Panel camera** (`#insp`). Nine selects drive it:
   `#iSubj`, `#iShot`, `#iAz`, `#iElev`, `#iLens`, `#iRoll`, `#iAnchor`,
   `#iIntent`, `#iTech`. Lock it with `#lockSeg button` (_None_, _Camera_,
   _Pose_, _All_) so a later roll leaves it alone, then use `#rrCam` or
   `#rrPose` to reroll just that panel.
6. To change a pose press `⚙ {name} by numbers` (`#iActors .ipg[data-id="A"]`).
   That opens the **Pose** tab, which is
   [Pose Gacha](https://tools.oyasumi-gamedev.com/posegacha/) embedded with
   `?embed=1`, on that panel's camera. Pick an action, move a slider, press
   `✎ Send to the current panel & character` (`#pick`). Name Gacha takes the
   pose and the VRoid expression, locks the panel and switches back. Or use
   `✎ Adjust joints` (`#kePoseEdit`) to rotate joints in a dialog.
7. Export: **PNG (2400px tall)** (`#exPng`), **SVG (with layers)** (`#exSvg`),
   **For CLIP STUDIO (PSD)** (`#exPsd`) or **Line SVGs (ZIP)** (`#exCsp`).
   `🔗 Copy link` (`#exLink`) gives a share URL.

### Inputs and parameters

| Control             | Selector                    | Values                                                                                                     |
| ------------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Layout preset       | `#chips button[data-p]`     | `seizen` rows 3-4, `std` 2-4, `action` 2-3, `tobira` 1-3                                                   |
| Format              | `#ratio`                    | `0.708` B5/A5, `0.8` 4:5, `1` square                                                                       |
| Reading             | `#dir`                      | `rtl` manga, `ltr` comics                                                                                  |
| Layout seed         | `#seed`                     | 64 chars; accepts `seed#n`                                                                                 |
| Layout number       | `#num`                      | 1–48                                                                                                       |
| Set panel count     | `#pcOn`, `#pcMin`, `#pcMax` | 1–24, defaults 4 and 7                                                                                     |
| Mutation level      | `#mutLv`                    | 5–100, step 5, default 35                                                                                  |
| Figures             | `#castN button[data-n]`     | 1–3                                                                                                        |
| Name / height       | `#castList .cname` / `.ccm` | 6 chars / 80–220 cm                                                                                        |
| Appearance          | `#castList .cchar`          | mannequin, `f01`, `m01`, file                                                                              |
| Draw as             | `#styleSeg button[data-s]`  | `3d`, `2d`, `sil`                                                                                          |
| VRM draw mode       | `#vrmMode button[data-m]`   | `flat`, `orig`, `gray`, `tone`                                                                             |
| My Poses            | `#mpListBtn`, `#mpFile`     | `.vrma,.bvh,.glb,.json`, up to 500, names 24 chars                                                         |
| Gacha seed          | `#gseed`                    | 24 chars                                                                                                   |
| Randomness          | `#tempSeg button[data-t]`   | `safe` K=12, `balance` 16, `wild` 22                                                                       |
| Tone                | `#tone`                     | `auto`, `calm`, `tension`, `conflict`, `surprise`, `intimate`, `sad`, `comedy`, `resolve`, `uneasy`, `joy` |
| Peak panel          | `#peakSeg button[data-k]`   | `strong`, `quiet`                                                                                          |
| Scoring             | `#modList input[data-k]`    | 0–5 step 0.5, 12 terms                                                                                     |
| Subject             | `#iSubj`                    | `A`,`B`,`C`,`AB`,`ALL`,`otsA`,`otsB`,`povA`,`povB`                                                         |
| Shot                | `#iShot`                    | `ELS LS FS KS MS MCU CU ECU`                                                                               |
| View                | `#iAz`                      | `front` 0°, `q` 38°, `side` 90°, `qback` 140°, `back2` 165°, `back` 180°                                   |
| Height              | `#iElev`                    | `top` 72°, `high` 35°, `slight` 14°, `highlv`, `eye`, `lowlv`, `low` −18°, `worm` −40°                     |
| Lens (vertical FOV) | `#iLens`                    | `xwide` 84°, `wide` 62°, `std` 40°, `tele` 24°, `xtele` 14°                                                |
| Tilt                | `#iRoll`                    | `none` 0°, `l` −12°, `r` 12°, `L2` −22°, `R2` 22°                                                          |
| Placement           | `#iAnchor`                  | `auto`, `far`, `against`, `L`, `l`, `c`, `r`, `R`                                                          |
| Direction           | `#iIntent`                  | the 10 tones, no `auto`                                                                                    |
| Technique           | `#iTech`                    | 17 keys incl. `pov`, `profile`, `dutch`, `hands`                                                           |
| Expression          | `#iActors select`           | auto, joy, angry, sad, relaxed, surprised, neutral (VRM only)                                              |
| Lock                | `#lockSeg button[data-m]`   | `none`, `cam`, `pose`, `all`                                                                               |

Figures come from joint angles, not from image-generation AI. Pose Gacha adds 23
actions and a 46-pose library to the 65 built-in pose keys (`stand`, `cross`,
`walk`, `g_punch`, `g_cry`, …).

### Export and hand-off

| Export   | Selector  | Measured output                                                                                                                                  |
| -------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| PNG      | `#exPng`  | 1699 × 2400 RGBA, no reading-flow lines, notes, numbers or scores                                                                                |
| SVG      | `#exSvg`  | same size, Inkscape-labelled layers: Paper, Eye level, Figures, Balloons, Names, Frame borders, Panel notes, Reading-flow lines, Numbers, Scores |
| PSD      | `#exPsd`  | `8BPS` v1, 3 channels, 8-bit RGB, 350 DPI; lines are raster                                                                                      |
| Line ZIP | `#exCsp`  | uncompressed ZIP: `01_Frame borders.svg`, one SVG per figure, `NN_Balloons.svg`, `Eye level.svg`, `Underlay.png`, `How to import.txt`            |
| Link     | `#exLink` | `#`-hash URL, 1695 chars for a 9-panel page                                                                                                      |

Files are named
`namegacha_<layoutSeed>-<layoutNumber>_<gachaSeed>-<option>.png`, with the same
base for `.svg` and `.psd` and `_clipstudio.zip` for the ZIP. Our run produced
`namegacha_SMOKE-1-1_JF2JD-2.png` (1,387,381 bytes), `.psd` (8,252,884),
`_clipstudio.zip` (3,164,872) and `.svg` (2,284,646).

**CLIP STUDIO PAINT.** Open the PSD with `[File] > [Open]`; local colour sits at
100% opacity and the guides at 20%. For vector lines, open `Underlay.png`, then
`[File] > [Import] > [Vector]` and select every `.svg` in the ZIP.
`How to import.txt` inside the ZIP repeats this.

**Photoshop, Illustrator, a web page, three.js.** The PSD is a plain RGB PSD
(verified header `8BPS`, 8-bit, 3 channels), so a layered-PSD importer can read
it, but the tool documents no Photoshop hand-off. The SVG is ordinary SVG with
named `<g>` groups and drops into a web page, Illustrator or Inkscape untouched;
VRM figures arrive as base64 `<image>` elements, which is why the file is about
2.3 MB. For three.js use the PNG or SVG as a texture — Name Gacha exports no 3D
scene, so there is no GLB hand-off. For Blender, no hand-off path is published.

### Driving it from an agent

The whole advertised job runs headlessly. This script was tested against the
live app (save it as an `.mjs` file and run it with `bun` or `node`):

```js
import { chromium } from 'playwright'

const browser = await chromium.launch({
  args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader']
}) // software WebGL when headless
const page = await browser.newPage({ acceptDownloads: true })
await page.goto('https://tools.oyasumi-gamedev.com/namegacha/?lang=en')
await page.waitForSelector('#cands .cand', { timeout: 60_000 })
// both bundled VRMs (17.7 MB) must parse first
const vrmLoaded = () => {
  const m = document.querySelector('#vrmMsg')
  return m && m.textContent && !/Loading/.test(m.textContent)
}
await page.waitForFunction(vrmLoaded, null, { timeout: 300_000 })
await page.fill('#seed', 'SMOKE-1')
await page.click('#castN button[data-n="2"]')
await page.selectOption('#tone', 'conflict')
await page.click('#tempSeg button[data-t="wild"]')
await page.click('#gachaBtn')
await page.waitForFunction(
  () => document.querySelectorAll('#cands .cand').length > 0
)
await page.click('#cands .cand[data-k="1"]')
// VRM figures are <image> elements over the polygons and swallow real clicks,
// so dispatch the click on the polygon itself
await page.$eval('#page [data-i="1"]', (el) =>
  el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
)
await page.click('#iActors .ipg[data-id="A"]') // Pose Gacha on panel 2
const frame = page.frameLocator('#poseFrame')
await frame.locator('#status').waitFor({ timeout: 180_000 })
await frame.locator('#acts button[data-k="punch"]').click()
await frame.locator('#params').evaluate((box) => {
  const s = [...box.querySelectorAll('input[type=range]')].find(
    (i) => i.id !== 'p_style'
  )
  s.value = String(+s.min + (+s.max - +s.min) * 0.7)
  s.dispatchEvent(new Event('input', { bubbles: true }))
})
await frame.locator('#pick').click()
await page.waitForFunction(() =>
  document.querySelector('#rrMsg').textContent.trim()
)
for (const sel of ['#exPng', '#exPsd', '#exCsp', '#exSvg']) {
  const [dl] = await Promise.all([
    page.waitForEvent('download', { timeout: 600_000 }),
    page.click(sel)
  ])
  await dl.saveAs('out/' + dl.suggestedFilename())
}
```

**Hand-writable state: the share link.** After reading it the page wipes the
hash, so capture `location.hash` at document-start. The first half is
komawari-compatible query parameters. The second, `ng=`, is the Name Gacha state
as JSON, `deflate-raw` then base64url, prefixed `z` (`j` means uncompressed,
used when `CompressionStream` is missing):

```
#s=DEMO&r=0.708&d=rtl&lw=4&c=48&rows=2-3&th=25&tv=25&b=20&ne=20&bg=20&p=std&i=1&ng=zrdNBS8MwFA…
```

Minimum `ng` object. `p` must hold one entry per panel in layout `i` or the page
is ignored; each entry is `[shot, focus, speaker, intent]`.

```json
{
  "v": 1,
  "n": 2,
  "c": [
    ["AYE", 155],
    ["BO", 180]
  ],
  "g": "HANDMADE",
  "t": "balance",
  "s": "3d",
  "o": "1111111111111",
  "tn": "tension",
  "p": [
    [
      {
        "subj": "AB",
        "shot": "LS",
        "az": "side",
        "elev": "high",
        "lens": "wide",
        "anchor": "far",
        "roll": "none",
        "pose": { "A": "stand", "B": "cross" },
        "gaze": { "A": "partner", "B": "partner" }
      },
      "A",
      "A",
      "calm"
    ],
    [
      {
        "subj": "A",
        "shot": "MCU",
        "az": "q",
        "elev": "eye",
        "lens": "std",
        "anchor": "auto",
        "roll": "none",
        "pose": { "A": "g_punch", "B": "cross" },
        "gaze": { "A": "partner", "B": "partner" }
      },
      "A",
      "A",
      "conflict"
    ]
  ]
}
```

A five-entry version of that object loaded and restored every authored shot, the
tone, both cast names and heights and the gacha seed; the status bar read _From
link_. Pose keys are the table keys (`stand`, `cross`, `walk`, `run`,
`lookback`) plus `g_<action>` for the other Pose Gacha actions — `g_run` is not
a key, `run` is.

Pose Gacha has its own, much smaller hash. Camera values are divided by the
character's height in metres, so the link survives a height change:
`#pg=cry:3,0.338,0.096,1,-0.281,-0.073,-0.02,0.244&c=f01&k=1.461,0.928,2.086,0,0.57,0,30,0`

## Examples

- [Launch post, 2026-10-07](https://x.com/sharp_maker/status/2107659747885515071)
  — 41-second recording of the first release: six options per roll, a custom VRM
  loaded, then the Komawari tab handing a layout back.
- [Pose Gacha update, 2026-10-09](https://x.com/sharp_maker/status/2108385022147498436)
  — recording of picking one panel and changing that character's pose with the
  new action editor.
- [Official how-to and FAQ](https://oyasumi-gamedev.com/tools/namegacha/) — the
  ten tones with their shooting rules, the lock-and-reroll workflow, the export
  list, the Japanese output licence, and what _In development_ means for
  reproducibility.
- [Pose Gacha](https://tools.oyasumi-gamedev.com/posegacha/) and
  [its article](https://oyasumi-gamedev.com/tools/posegacha/) — 23 actions in
  four groups, the pose library, expression controls, PNG at 1200/1600/2400 px
  and VRMA export.
- [Working share link, layout only](https://tools.oyasumi-gamedev.com/namegacha/#s=DEMO&r=0.708&d=rtl&lw=4&c=48&rows=2-3&th=25&tv=25&b=20&ne=20&bg=20&p=std&i=1)
  — hand-written, opens a 5-panel right-to-left page. Add `&ng=` from the format
  above to pin every shot too.

## When to use it

- Use it when a manga or comic page is blocked and the panels already exist.
- Use it for a name draft (ネーム) before inking: shot sizes, eye lines and gaze
  are readable before any linework exists.
- Use it to test three ways through one layout, then lock the winner.
- Use it for shot planning outside comics: film and animation storyboards, the
  framing pass of a web page or a social carousel, or a poster sequence that
  needs five candidate crops.
- Use it for pose reference. A figure standing in the right place at the right
  size is a usable underdrawing; export PNG and trace.
- Skip it when you need finished art. There is no inking, colouring or lettering
  beyond placeholder balloons.
- Skip it for the layout alone.
  [Manga Panel Layout Generator](../comics/komawari.md) generates the panel grid
  and exports SVG or PNG with no 3D.
- Skip it when the pose is the job. Open Pose Gacha directly and export PNG or
  VRMA.
- Skip it for balloons or effect lines as the main job; use
  [Speech Bubble Generator](../comics/fukidashi.md) and
  [Effect Lines & Screentone Generator](../comics/koukasen.md), then send the
  result back into a panel.
- Skip it for a whole episode. [Comicalizer](../comics/comicalizer.md) takes a
  plot and produces a full episode of name pages.
- Skip it for real places. [Location Scout](../comics/rokehan.md) builds
  backgrounds from map and elevation data;
  [Background Gacha](../comics/haikeigacha.md) builds rooms.
- Skip it for a 3D scene you control. Use [Blender](../3d/blender.md) or
  [three.js](../3d/three-js.md) with a [VRM](../3d/three-vrm.md) you made in
  [VRoid Studio](../3d/vroid-studio.md); this page renders but exports no 3D.
- Skip it for flow diagrams: [Excalidraw](../whiteboard/excalidraw.md).

## Agent notes

- App: `https://tools.oyasumi-gamedev.com/namegacha/`. `?lang=` takes ja, en,
  zh-Hans, zh-Hant, ko, hi, th, es or fr; order of precedence is `?lang=` → this
  tool's setting → the Komawari setting → browser → `en`. `?nochars` skips the
  bundled characters and the 17.7 MB download. `?vmode=flat|orig|gray|tone` sets
  the VRM render mode. `?author` reveals two author-only buttons in My Poses.
- Hash: `#<komawari params>&ng=<deflate-raw + base64url JSON>`. `#hg=` imports a
  room from Background Gacha. The hash is read once and then cleared.
- Pose Gacha: `https://tools.oyasumi-gamedev.com/posegacha/`, `?embed=1` in an
  iframe, `?dev=1` reveals a "random joints" button. Inside `#poseFrame` the
  child posts `{app:'posegacha', type:'pick', act, p, ex, to}` to the parent.
- Selectors worth memorising: `#gachaBtn`, `#cands .cand[data-k]`,
  `#page [data-i]`, `#iSubj`…`#iTech`, `#lockSeg button[data-m]`, `#rrCam`,
  `#iActors .ipg[data-id]`, `#castList .cchar`, `#castList .vinfo`, `#exPng`,
  `#exSvg`, `#exPsd`, `#exCsp`, `#exLink`, `#bulkCount` (12/24/48),
  `#viewSeg button[data-v]`.
- Gotchas we hit: `page.click('#page [data-i="1"]')` times out because VRM
  figures are `<image>` elements over the polygons — dispatch on the polygon or
  use `force: true`. A hash-only `page.goto` is a same-document navigation and
  silently does nothing; add a query parameter to force a reload. `#rrAll`,
  `#rrCam` and `#rrPose` disable themselves as the lock tightens. `#pcMin` and
  `#pcMax` stay disabled until `#pcOn` is ticked.
- `#komaFrame`, `#bgFrame`, `#poseFrame`, `#fukiFrame` and `#koukaFrame` are
  iframes of the sibling tools. Name Gacha posts `{app:'namegacha', type:…}`
  into them and accepts replies only from the matching `contentWindow`.
- Limits: 48 layouts per page (`NMAX`), 1–24 panels when `#pcOn` is on, 1–3
  figures, names 6 characters, heights 80–220 cm, standing positions ±3 m (±40 m
  with a room), 500 My Poses, pose names 24 characters, layout seed 64, gacha
  seed 24, share link under 16,000 characters.
- Exports are 2400 px tall, so a B5 page is a 1699 × 2400 canvas. iOS and iPad
  browsers cap canvas area near 16.78 million pixels and `toBlob` then returns
  null, which the app reports as _The image is too large to export_.
- VRM rendering caps at 6e6 pixels per draw and caches 128 MB of rendered
  figures. Both bundled models total 17,717,024 bytes and download automatically
  on first load: `chars/f01.vrm` 8,735,040 B and `chars/m01.vrm` 8,981,984 B.
  `lib/three_ng.js` is 802,958 B, on demand.
- VRM licence: `#castList .vinfo` opens `#vrmDlg`, which reads the licence out
  of the model rather than asking a server. VRM 1.0 rows are Name, Authors,
  Version, Copyright, Who can use it as an avatar, Commercial use, Violent
  content, Sexual content, Political or religious use, Antisocial or hate use,
  Credit notation, Redistribution, Modification, License, Other license. VRM 0.x
  rows are Name, Authors, Version, Contact, Reference, Who can use it as an
  avatar, Violent content, Sexual content, Commercial use, Other permissions,
  License, Other license. Our run on the bundled F01 showed _Author only_, _Not
  allowed_ for violent and sexual content, _Allowed_ for commercial use and
  `Redistribution_Prohibited` as the licence.
- Attribution duties: none for your output. A VRM you load keeps its own terms,
  and a VRM 1.0 model defaults to `personalNonProfit` commercial use and
  `required` credit. The bundled models may not be extracted or redistributed.
- Beta status: the page says **In development · M3.8**. The same seed can give a
  different result after an update; a share link keeps working because it
  carries the page, not just the seed. My Poses live in `localStorage` under
  `namegacha.mypose.v1` and are lost when storage is blocked, so export them.
- Nothing leaves the browser. CSP is `connect-src 'self' blob:`; no upload, no
  analytics, no ad script. Share links carry the settings and the page's shots
  but **not** a VRM loaded from a file and **not** the contents of My Poses —
  only the bundled character id and the pose key.
- Our headless timings on software-rendered Chromium: 2.9 s to first paint,
  about 35 s to parse both bundled VRMs, 22 s for the PNG, 3.7 s for the PSD,
  0.7 s for the ZIP, 0.1 s for the SVG. Allow five minutes end to end and a 600
  s download timeout.

## Alternatives in this repo

- [Manga Panel Layout Generator](../comics/komawari.md) — the panel grid on its
  own, SVG or PNG.
- [Comicalizer](../comics/comicalizer.md) — plot text to a whole episode.
- [Background Gacha](../comics/haikeigacha.md) and
  [Location Scout](../comics/rokehan.md) — rooms and real places as backgrounds.
- [Speech Bubble Generator](../comics/fukidashi.md) and
  [Effect Lines & Screentone Generator](../comics/koukasen.md) — balloons, focus
  lines and screentone.
- [VRoid Studio](../3d/vroid-studio.md) — make the `.vrm` you load here.
- [three-vrm](../3d/three-vrm.md) — a VRM in a three.js scene you control.
- [Blender](../3d/blender.md) — full 3D control when you need a real scene.

## Sources

- [App](https://tools.oyasumi-gamedev.com/namegacha/) — checked 2026-10-14
- [Official how-to and FAQ](https://oyasumi-gamedev.com/tools/namegacha/) —
  checked 2026-10-14
- [Pose Gacha app](https://tools.oyasumi-gamedev.com/posegacha/) — checked
  2026-10-14
- [Pose Gacha article](https://oyasumi-gamedev.com/tools/posegacha/) — checked
  2026-10-14
- [Author's tool list](https://oyasumi-gamedev.com/tools/) — checked 2026-10-14
- [Launch post on X](https://x.com/sharp_maker/status/2107659747885515071) —
  checked 2026-10-14
- [Pose Gacha post on X](https://x.com/sharp_maker/status/2108385022147498436) —
  checked 2026-10-14
