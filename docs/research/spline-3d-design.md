# Spline (spline.design) 3D design + AI generation — research notes

Research date: 2026-10-25. Groundwork for building a similar web-based 3D editor
with 3D model generation. Every claim links to the source that owns it with its
access date; anything Spline does not disclose is marked UNKNOWN or NOT
PUBLISHED. Confirmed-vs-inference labels appear where the difference matters.

## Sources

- https://spline.design/ (2026-10-25)
- https://spline.design/3d-design (2026-10-25)
- https://spline.design/ai-generate (2026-10-25)
- https://spline.design/pricing (2026-10-25)
- https://spline.design/mcp (2026-10-25)
- https://spline.design/changelog (2026-10-25)
- https://blog.spline.design/ (2026-10-25)
- https://docs.spline.design/skill.md (2026-10-25)
- npm registry:
  [@splinetool/runtime](https://www.npmjs.com/package/@splinetool/runtime)
  2.0.111,
  [@splinetool/react-spline](https://www.npmjs.com/package/@splinetool/react-spline)
  4.1.0, [@splinetool/loader](https://www.npmjs.com/package/@splinetool/loader)
  2.0.111,
  [@splinetool/viewer](https://www.npmjs.com/package/@splinetool/viewer) 2.0.111
  (all 2026-10-25; runtime tarball downloaded and inspected)
- https://github.com/orgs/splinetool/repositories (2026-10-25)
- Sample `.splinecode` file
  `https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode` (downloaded,
  byte-inspected 2026-10-25)
- Comparison landscape: meshy.ai, tripo3d.ai, sloyd.ai, kaedim3d.com, womp.com,
  lumalabs.ai (all 2026-10-25)
- Open models: github.com/Microsoft/TRELLIS,
  huggingface.co/tencent/Hunyuan3D-2.1,
  huggingface.co/microsoft/TRELLIS-image-large,
  github.com/VAST-AI-Research/TripoSR, github.com/TencentARC/InstantMesh (all
  2026-10-25)
- https://github.com/XRFoundation and
  https://github.com/EtherealEngine/etherealengine (2026-10-25)

---

## 1. Product surface

**What it is.** Spline is a browser-based collaborative editor for interactive
3D (and, since 2025, 2D via its Hana product). The `/3d-design` page calls it
"The 3D and 2D editor for teams and their agents. Ship to the web, iOS and
Android", pitched around "Agents build the first pass, designers refine it"
([/3d-design](https://spline.design/3d-design), 2026-10-25). The homepage claims
"Spline is a free 3D design tool in the browser" ([/](https://spline.design/),
2026-10-25).

**Editor features** ([/3d-design](https://spline.design/3d-design), 2026-10-25):

- **Modeling**: primitives, booleans ("3D modeling and booleans"), 3D vector
  editing, sculpting ([/](https://spline.design/)), reusable components,
  templates library, camera controls.
- **Materials**: a layer-based material system ("stack layers instead of writing
  shaders") with glass/fresnel/displace layers, a ready-made library, PBR and
  HDR workflow, video textures. Post-2025-08 the renderer supports PBR with IBL,
  screen-space reflections, physical sky, hair, GPU instancing
  ([changelog, "Introducing Spline V2", 2026-08-21](https://spline.design/changelog)).
- **Interactivity/motion**: states and events, timeline animation (added
  2025-09-18 per changelog), game controls, physics (rigid bodies, colliders,
  gravity, forces), particles.
- **Data**: variables (numbers/booleans/text), conditional actions, webhooks and
  API requests.
- **Rendering**: real-time; post-processing (bloom, depth of field, color
  grading); "WebGPU rendering with WebGL fallback".

**Collaboration** ([/3d-design](https://spline.design/3d-design), 2026-10-25):
real-time multiplayer editing with visible cursors — agents included ("Your team
and its agents model, animate and ship interactive 3D together, in real time",
[/](https://spline.design/)) — in-scene comments, teams/projects/ folders,
shareable links. The operation model is notable: "Every change lands as an
operation in a live file" ([/](https://spline.design/)), i.e. an operation-log
document (Figma/CRDT-style). The exact sync protocol is NOT PUBLISHED.

**Client vs server.** CONFIRMED: the editor runs in the browser (WebGL, WebGPU
by default since V2), and published scenes render client-side via the
@splinetool/runtime. CONFIRMED server-side: `.splinecode` export URLs are minted
server-side at export time
([docs.spline.design/skill.md](https://docs.spline.design/skill.md)); files are
served from `prod.spline.design`; AI generation "runs in the cloud" on "our own
servers" ([/ai-generate](https://spline.design/ai-generate)); remote MCP calls
run in the cloud without a local editor open
([changelog, 2026-10-19](https://spline.design/changelog)). Where physical
simulation, asset processing, or code generation execute is NOT PUBLISHED.

**Export/publish targets** ([/3d-design](https://spline.design/3d-design) +
[/pricing](https://spline.design/pricing), 2026-10-25):

- Web: publish link, embed (`<spline-viewer>`), or code export (React code
  export; "code download export" is Pro+; self-hosted code export is
  Enterprise-only per the pricing table).
- iOS: SwiftUI view or Xcode project (Metal).
- Android: Jetpack Compose view or APK/App Bundle (Vulkan).
- Asset formats: JPG/PNG, MP4/GIF, GLTF/GLB; USDZ and STL on Pro/Max.

**Pricing** ([/pricing](https://spline.design/pricing), 2026-10-25): per seat,
USD — Free (watermarked web exports, 20 MCP calls/day, no AI), Hobby $15/mo
(2,000 AI credits/mo), Pro $30/mo (3,000 credits), Max $70/mo (10,000 credits),
Enterprise custom. "The 3D and 2D editors draw from the same credits", which do
not roll over; extra credits cost $5 per 1,000 (cap 10k– 20k/seat/mo depending
on tier).

## 2. 3D generation (Spline AI 3D Generation)

**What is advertised** ([/ai-generate](https://spline.design/ai-generate),
2026-10-25). Two modes, combinable:

- **Text to 3D**: "Type a sentence and four looks land in seconds. Turn the one
  you like into a model." (four candidate previews, then mesh the pick)
- **Image to 3D**: "A photo, a sketch or a screenshot: drop it in and it comes
  back with volume." Constraints: one object, front-facing, PNG/JPG/ WebP up to
  15 MB.
- "You can also add a reference image to a prompt, to steer both."

**What it produces.** CONFIRMED: a conventional textured triangle mesh, not a
NeRF or splat. "Spline builds a textured 3D model with PBR maps" — base color,
metallic-roughness, normal — "as GLTF or GLB, and as USDZ or STL on Pro and
Max", importable into Blender/Unity/Unreal. The page's example model shows
1,122,848 faces / 700,747 vertices / 4.7 MB — i.e. high-poly quality appropriate
for offline/render use, needing decimation for real-time web use (inference; the
page does not state a decimation story).

**Pipeline (CONFIRMED — this is the headline finding).** Spline does not claim
proprietary generation models. The /ai-generate page names the engines behind it
as selectable options:

> "Hunyuan3D (the default) balances detail and speed", "Hunyuan 3.1 Pro gives
> the sharpest, most detailed geometry", "Trellis 2 handles shapes that pass
> through each other", and "Meshy gives a clean result with little cleanup" —
> "The same image can be run through multiple models to compare."

So Spline's text→3D is prompt → (presumably a text-to-image front end — the
"four looks" language matches image-candidate selection) → mesh via Tencent
Hunyuan3D or Microsoft TRELLIS or Meshy as backends, producing a PBR-textured
GLB. The text-to-image step and any post-processing (retopology, map baking,
decimation) is NOT PUBLISHED. No NeRF/Gaussian-splatting generation pipeline is
claimed anywhere. Note the runtime _does_ ship a `gaussian-splat-compression.js`
module (runtime tarball, 2026-10-25), so the viewer can render splats — but
generation output is meshes.

**Billing** ([/ai-generate](https://spline.design/ai-generate), 2026-10-25):
available on every paid plan (Hobby+); billed in two steps (four previews, then
meshing) with cost shown beforehand; meshing a previously generated image
charges only the model step; regenerating/opening an existing model is free. AI
credit allowances per tier are in the pricing table above. Texture generation is
listed as a separate AI feature in the pricing matrix (AI Texture Generation).

**Agent integration.** The in-editor AI agent can build/edit whole scenes
(materials, lights, cameras, variables, interactions) with an AI chat agent
([changelog, 2026-08-21](https://spline.design/changelog)); generation is also
reachable via the toolbar ("Press the AI button on the toolbar and choose AI
Generate") and by agents over MCP
([/ai-generate](https://spline.design/ai-generate)). The /ai-generate page links
a "prompt.md" prompt-guidance resource. Scroll-driven agent voice in the runtime
references OpenAI Realtime (runtime tarball `runtime-aiAssistant-JYKXMMRS.js`,
inspected 2026-10-25 — CONFIRMED at bundle level, Spline has not published docs
on it).

**Privacy claim** ([/ai-generate](https://spline.design/ai-generate)): Spline AI
"does not use any of our users' files or data"; only shared feedback collects
prompts; handled "on our own servers."

**History.** Spline first announced "Spline AI" (text-to-3D objects in the
editor) in 2023; the current /ai-generate product is a V2-era relaunch. The
original announcement page is no longer linked from the site — historical
wording NOT VERIFIED from primary sources in this study. The blog also announced
"Spell – A 3D World Model" on 2025-01-22
([blog.spline.design](https://blog.spline.design/), 2026-10-25); its current
status is UNKNOWN (no follow-up posts found).

## 3. Tech stack evidence

**Renderer.** CONFIRMED: three.js. The shipped `@splinetool/runtime` 2.0.111
tarball (downloaded and inspected 2026-10-25) vendors three.js: the standalone
WebGPU build references `three/webgpu` once and contains `WebGPURenderer` 39
times plus `THREE.MeshStandardNodeMaterial`; the packed chunks expose
`THREE.BufferAttribute`, `THREE.DRACOLoader`, `THREE.FunctionOverloadingNode`
(three.js TSL node API), and others (45 distinct `THREE.*` symbols in the
standalone WebGPU bundle). The package's own `AGENTS.md` confirms a raw-three.js
escape hatch exists: "If you want raw three.js objects and materials, that is
`@splinetool/loader`." Since Spline V2 (2026-08-21) the renderer is "New
TSL-based WebGPU renderer as default with WebGL fallback"
([changelog](https://spline.design/changelog)) — TSL is three.js's Three Shading
Language for WebGPU, confirming a current three.js dependency. WebGPU detection
uses `navigator.gpu` (bundle, 2026-10-25).

**Runtime packages** (npm registry + tarball, 2026-10-25):

- `@splinetool/runtime` 2.0.111 — 36.2 MB unpacked, 372 files, ESM+CJS, exports
  standalone builds (`runtime.standalone.js`, `.webgl.js`, `.webgpu.js`,
  `.webgpu.min.js`, `.webgpu.micro.js`) plus side modules: `physics.wasm`,
  `bevel.wasm`, `boolean.wasm`, `navmesh.wasm`, `hana-ui.wasm`, audio,
  gaussian-splat compression, DRACOLoader. Runtime dependencies are only
  `on-change` and `semver-compare` — three.js is bundled in, not a peer. **There
  is no `license` field** — the runtime is proprietary, not open source. Bundle
  strings include Rapier (`rapier` ×149) — the physics is almost certainly
  Rapier WASM (CONFIRMED at string level; Rapier is Rust/WASM and widely used
  with three.js; Spline has not published a statement).
- `@splinetool/react-spline` 4.1.0 — MIT, thin React wrapper (26.8 KB, deps:
  blurhash, thumbhash, lodash.debounce, react-merge-refs), has a `/next` entry
  point.
- `@splinetool/loader` 2.0.111 — same engine packaged as a loader exposing the
  raw three.js scene graph.
- `@splinetool/viewer` 2.0.111 — the `<spline-viewer>` web component, lazy-loads
  by viewport.

**The runtime pipeline** (CONFIRMED from the package's own AGENTS.md and
runtime.d.ts, 2026-10-25):

1. Editor → Export → Code mints
   `https://prod.spline.design/<id>/scene.splinecode` server-side. The URL
   cannot be derived from file ids or share links.
2. `new Application(canvas, { renderer: 'webgl'|'webgpu'|auto, renderMode: 'auto'|'manual'|'continuous', wasmPath, htmlContentMode })`
   then `await app.load(url)` — the runtime `fetch()`es the `.splinecode` (CORS
   request), or `app.start(arrayBuffer)` on bytes you fetched yourself.
3. The scene loads as an object graph with typed variables, named events, and an
   API of `findObjectByName/findObjectById` (returning change-tracking proxies —
   "edits through it re-render"), `setVariable/getVariable`, `addEventListener`,
   `emitEvent`, `play/stop`, geometry swap, and session-only
   `createObject/cloneObject/removeObject` covering ~24 primitive/light/text
   types. Nothing writes back to the Spline file — "There is no API here to
   create, save, publish or export a scene."
4. Events fire only if authored in the editor:
   `mouseDown, mouseUp, mouseHover, keyDown, keyUp, start, lookAt, follow, scroll, collision, rendered`
   (complete union from runtime.d.ts).
5. Watermarks are baked into scene data (`SplineWatermark` shared image) on free
   plans.

**`.splinecode` format** (CONFIRMED at byte level, sample file downloaded
2026-10-25). The sample file (5.8 KB) starts
`d4 72 40 94 a5 "scene" a5 "shared" a5 "frames" a5 "schema" d4 72 41 …` — this
is MessagePack: `0xd4` is a fixext1 marker (ext type byte `0x72` = ASCII "r",
likely a format version, followed by `0x40`), then `0x94` opens a fixarray and
`0xa5`-prefixed fixstrs spell out a keyed structure (`scene`, `shared`,
`frames`, `schema`, `backgroundColor`, `postprocessing`, `fog`, `publish`…).
Decoding the body as a MessagePack stream yields those exact map keys. So:
**.splinecode is a versioned MessagePack container (custom ext header + nested
maps describing scene graph, frames/animation, schema) with geometry/textures
most likely Draco-compressed and fetched separately or embedded** — the Draco
evidence is the bundled `THREE.DRACOLoader` and `draco` strings in runtime.js
(CONFIRMED); whether meshes travel in-file or as side requests was not tested on
a media-heavy scene (UNKNOWN at that level of detail). `.spline` (stripped
editor document) and `.hanacode` (2D Hana) are separate formats; only
`.splinecode`/`.hanacode` load in runtimes.

**Org open-source repos**
([github.com/splinetool](https://github.com/orgs/splinetool/repositories),
2026-10-25): only 4 public repos — react-spline (MIT, 1.4k stars), r3f-spline
(MIT, hook for react-three-fiber, stale since 2022), spline-ios (C++, no license
shown), spline-skills (MIT, new). The editor itself and the core runtime are
closed source.

**Founders/XREngine claim.** NOT CONFIRMED. The task brief said "Spline's
founders built XREngine." I could not verify this from primary sources: the
XRFoundation org (XREngine → Ethereal Engine → iR Engine) names no members and
mentions Spline nowhere; Etsy/Crunchbase-style pages 403'd. npm maintainer
emails (alejandro@, guillaume@, marco@ @spline.design) are the only primary
identity signals. Treat this claim as unverified folklore until a primary source
turns up.

## 3b. Live reverse-engineering of the marketing site (REA, 2026-10-25)

Independent confirmation from the shipped `spline.design/3d-design` page bundles
(all 32 JS chunks downloaded and statically inspected from Vercel; statements
below carry their own evidence from those chunks):

- The marketing site itself embeds live Spline scenes via the runtime: chunks
  reference `https://prod.spline.design/<id>/scene.splinecode` (e.g.
  `DGI6oWLNcrhyDwvi`, `ZIloIOkaB5v3Q89d`, `LBcuzYYUJP9DQsMY`,
  `k6LtAOpIg6SufYQ4`). Strings in the runtime chunks confirm the same loader
  errors the npm package has ("splinecode file is more recent than the library.
  Please upgrade @splinetool/runtime"), so the site embeds the same proprietary
  runtime as the npm package.
- Engine markers in the page chunks: `three`, `WebGPU`, `TSL`, `splinecode`,
  `physics`, `GLTF` all hit in the same bundles — consistent with the
  vendored-three.js + WebGPU/TSL renderer described in section 3.
- A second sample scene was downloaded and byte-inspected
  (https://prod.spline.design/LBcuzYYUJP9DQsMY/scene.splinecode, 176 KB,
  2026-10-25): header bytes `d4 72 40`, then keyed map
  `{"schema", "scene", "frames", "shared", "version" → 0x84 (132), "objects", "publish", "styles", …}`
  — same MessagePack + ext-type `0x72` ("r") envelope described below, including
  the per-record `d4 72 42` ("rB") object entries with `fi/id/data/children`
  keys. Format claim now independently verified on two scenes.
- The AI generation call flow does not appear in the public page bundles: no
  `hunyuan|trellis|meshy|text-to-3d` strings and no generation API URLs.
  Confirms generation is a server-side, app-only flow behind `app.spline.design`
  auth (chunks only reference `app.spline.design/signin`, `cdn.spline.design/`,
  and `docs.spline.design/`). Generation pipeline internals remain NOT PUBLIC.

---

## 4. Similar tools landscape (public claims only)

- **Meshy** ([meshy.ai](https://www.meshy.ai/), 2026-10-25): the pure-play
  generator Spline itself offers as a backend. Text/image→3D "in under a
  minute", AI Texturing (albedo/normal/metallic/roughness, 4K HD), auto-rigging
  with 600+ motion presets, print-oriented STL/OBJ/3MF, game-oriented
  FBX/GLB/USDZ, an API, MCP server, CLI. Claims 100M+ models generated, "The
  Only 3D AI Trained to Print". Notably, one of Spline's selectable backends is
  literally "Meshy".
- **Tripo** ([tripo3d.ai](https://www.tripo3d.ai/), fetch 403'd 2026-10-25 —
  claims NOT VERIFIED from primary source). Maker of TripoSR (below); VAST AI
  offers text/image→3D with mesh output. Position: generator, not editor.
- **Sloyd** ([sloyd.ai](https://www.sloyd.ai/), 2026-10-25): closest in spirit
  for games. Text- and image-to-3D plus "AI-guided parametric templates",
  rigged/animated characters, skyboxes, sprite sheets, MP4/MP3, manifold STL for
  printing, a production API exposing polycount/topology/ texture-resolution
  control, custom style training, positioned as "not credit based" / unlimited
  generation.
- **Luma Genie** ([lumalabs.ai](https://www.lumalabs.ai/), 2026-10-25):
  effectively dead. The Genie URL serves Luma's homepage, which mentions neither
  Genie nor any 3D product — the company now leads with Ray 3.2 video, a
  multimodal agent app, and UNI-1 brand intelligence. Historical Genie claims
  could not be re-verified from a primary source.
- **Kaedim** ([kaedim3d.com](https://www.kaedim3d.com/), 2026-10-25): a
  human-in-the-loop production service, not a self-serve tool — turns "sketches,
  reference packs, product photos, briefs" into production 3D "in hours" with
  markups/revisions by named reviewers; enterprise pricing, IP/training opt-outs
  emphasized. The page doesn't state formats or that humans make the assets (a
  "Secret Sauce 3D for Professional 3D Artists" footer hints at the artist
  network).
- **Womp** ([womp.com](https://womp.com/), 2026-10-25): free browser 3D modeling
  with SDF/CSG "liquid" blending ("Like clay, but parametric"), freehand
  strokes→geometry, a "Spark generation" prompt feature, asset library, and an
  integrated print-and-ship store. Editing-first like Spline, generation second;
  no web runtime/code-export story advertised.

## 5. Build-your-own groundwork

**Open-source editor/runtime stack.** A Spline-like product decomposes into:
three.js (WebGL2/WebGPU; the `three/webgpu` + TSL node material system is what
Spline V2 adopted), react-three-fiber + drei for React integration (see
[our R3F assessment](./react-three-fiber-assessment.md)), Rapier (WASM physics —
same engine Spline's bundle embeds), a CRDT/Yjs-style operation log for
multiplayer (Spline: "Every change lands as an operation in a live file"), and a
scene-serialization format. Prior art: the archived XREngine/Ethereal Engine
lineage (metaverse-scale three.js engine,
[archived repo](https://github.com/EtherealEngine/etherealengine)), which
demonstrates multiplayer spatial editing in the browser but is not a design
tool.

**Text-to-3D research models** (all runnable today on a single GPU):

| Model                                                                   | Input                             | Output                                                                                                                            | Method                                                                                               | Speed / HW                                         | License                                               |
| ----------------------------------------------------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ----------------------------------------------------- |
| [Hunyuan3D 2.1](https://huggingface.co/tencent/Hunyuan3D-2.1) (Tencent) | image (family does text→image→3D) | high-fidelity mesh **with PBR material** — "production-ready PBR Material" ([arXiv:2506.15442](https://arxiv.org/abs/2506.15442)) | shape + PBR texture dielines stages                                                                  | ~80k HF downloads/mo; details in paper             | tencent-hunyuan-community (restrictive; review terms) |
| [TRELLIS](https://github.com/Microsoft/TRELLIS) (Microsoft)             | image (or text, multi-image)      | **three representations: radiance field, 3D Gaussians, mesh**; GLB export with simplification + texture baking                    | "Structured LATent (SLAT)" + "Rectified Flow Transformers", up to 2B params, 500K-asset training set | 16 GB+ GPU needed; MIT (models + majority of code) |
| [TripoSR](https://github.com/VAST-AI-Research/TripoSR)                  | single image                      | mesh, vertex colors or baked texture                                                                                              | LRM feed-forward reconstruction                                                                      | **"<0.5 s on an A100"**, ~6 GB VRAM default        | MIT (code, weights, demo)                             |
| [InstantMesh](https://github.com/TencentARC/InstantMesh)                | single image (rembg segmentation) | `.obj` vertex-colored, or texture-mapped via `--export_texmap`; NeRF and FlexiCubes variants                                      | Zero123++ multiview diffusion → sparse-view reconstruction                                           | efficient, numbers unpublished                     | Apache-2.0 code; check HF card for weights            |

The exact architectures Spline calls "Hunyuan3D", "Hunyuan 3.1 Pro", "Trellis
2", "Meshy" on /ai-generate are commercial versions; which public checkpoints
they correspond to is UNKNOWN. Risk note: Hunyuan and Meshy are third-party
brands inside a competitor's UI — if we build, model choice is a procurement
decision, not a moat.

**What a Spline-like web editor architecture needs** (synthesis of the above;
inferences where sources are silent):

1. A scene document model (graph + operations + schema versioning) — Spline's
   msgpack `scene/shared/frames/schema` layout is the shape to imitate.
2. A three.js rendering core; WebGPU/TSL path with WebGL fallback (Spline's V2
   default) — plus post-processing bundles (bloom, DoF, grading ship as separate
   chunks in Spline's runtime).
3. Server-side export/CDN: mint scene URLs at publish time, serve bytes from a
   CDN (`prod.spline.design` pattern), binary-packed scenes.
4. A watch-mode runtime with events/variables API — the spectator half of the
   editor loaded from the same serialized format.
5. AI generation microservice: image candidates → mesh (Hunyuan/TRELLIS-class
   models behind a queue), then PBR map baking and GLB packaging; credit
   metering per step (Spline bills previews and meshing separately).
6. Agentic control surface: an MCP server that reads/writes a live file (Spline:
   streamable HTTP + OAuth at `mcp.spline.design/mcp`, routed to a live editor
   session; desktop app runs a local server bound to 127.0.0.1 with an origin
   allowlist).
7. Physics/events/variables interpreter (Rapier + a small behavior VM) that runs
   identically in editor preview and exported runtime.
8. Multiplayer sync (operations log + presence), which is what makes "agents and
   humans in one live file" possible.

## Implications for building our own

- Spline's "AI 3D generation" is **open-model orchestration, not proprietary
  research**: they expose Hunyuan3D, Hunyuan 3.1 Pro, TRELLIS 2, and Meshy by
  name as user-selectable backends. A competent text/image→mesh service on open
  checkpoints reaches product parity today.
- Output everywhere is **classic textured GLB with PBR maps** (base color,
  metallic-roughness, normal) — no NeRF/splat generation. Plan for
  decimation/retopology, since even the page's own example is a 1.1M-face mesh.
- The two-step generate (N previews, then mesh the pick) with per-step credit
  metering is the proven UX+pricing pattern; replicate it.
- `.splinecode` is just **MessagePack with a tiny custom ext header** (verified
  byte-level); serialize your scene graph, version it, serve from CDN. Nothing
  exotic to reverse.
- The runtime is **vendored three.js + Rapier WASM + side-chunked features**
  (post-processing, navmesh, booleans, splat compression) at ~36 MB unpacked
  with a proprietary license — the architecture is open-source-compatible even
  though Spline's code is not.
- Spline V2 runs a **TSL/three-webgpu renderer with WebGL fallback**; there is
  no reason to go custom-engine for a new product.
- The genuinely differentiating layer Spline built is **agentic editing over MCP
  with OAuth, routed to a live multiplayer file** — the "live file with
  operation log" is the hard part worth designing first, not the AI.
- Editor features to match for parity: layered materials, states/events,
  timeline, physics, variables/webhooks, booleans/vector editing — all
  implementable on three.js/R3F, none proprietary.
- Beware licenses: Hunyuan's community license and TRELLIS submodule licenses
  (diffoctreerast, FlexiCubes) are not plain MIT; TripoSR and TRELLIS core are
  the cleanest starts.
- Self-hosted/code export is Spline's Enterprise-only ceiling — an open runtime
  with a self-host export story is the cheapest wedge against them.
