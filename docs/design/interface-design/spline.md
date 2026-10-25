---
name: Spline
slug: spline
section: Interface Design
section_slug: interface-design
source_url: 'https://spline.design/'
designeer_url: 'https://designeer.xyz/'
designeer_blurb: Browser-based 3D design software with physics.
paywall: freemium
pricing_summary:
  'Free tier available with watermark and no AI; Hobby is $15/seat/month, Pro
  $30, Max $70, each with monthly AI credits (2k/3k/10k).'
open_source: false
license: proprietary
category_tags: [3d, interaction, physics, mcp, web-design, ai-3d-generation]
best_for: [interactive 3d scenes, web visuals, prototypes, ai 3d generation]
stack: []
execution_mode: browser-app
surface: ['web-3d']
status: active
agent_friendly: true
last_verified: 2026-10-25
---

# Spline

> Browser-based 3D design software with physics — now with AI 3D generation
> (Hunyuan3D, Trellis 2, Meshy) and MCP agent control.

## At a glance

| Field          | Value                                                                  |
| -------------- | ---------------------------------------------------------------------- |
| Source         | [spline.design](https://spline.design/)                                |
| Paywall        | **Freemium** — free tier watermarked; AI generation is paid-plan only. |
| Open source    | No — proprietary design software.                                      |
| Type           | Browser-based 3D scene and interaction editor with AI 3D generation.   |
| Works with     | Web embeds (`.splinecode` runtime), GLB/USDZ/STL exports, MCP.         |
| Best for       | Interactive 3D visuals, product scenes, text/image-to-3D models.       |
| Agent-friendly | Yes — MCP server plus AI Generate reachable by agents.                 |

## What it is

Spline is a visual editor for creating 3D scenes, animations, and interactions.
The editor supports objects, materials, lighting, and physics-based behavior.
Published scenes can be used as interactive web content.

It is a specialist tool for adding depth or interaction to a page, rather than a
general interface design system. Start with a focused scene and test its load
cost, readability, and behavior on touch devices before making it a central part
of a page.

## Paywall and pricing

- **Free:** A free plan is available with a watermark on web exports and 20 MCP
  calls/day. No AI generation.
- **Paid (all include AI credits that do not roll over):** Hobby $15/seat/mo
  (2,000 AI credits), Pro $30 (3,000), Max $70 (10,000); annual billing is
  cheaper. Extra credits cost $5 per 1,000 (cap 10k–30k by tier). Enterprise
  pricing is custom. The 3D and 2D editors draw from the same credits.
- **Sign-up required?** An account is needed to save and publish scenes.
- **Licence for client work:** Spline's terms describe a standard commercial
  license for published community content. Check the license of each scene and
  asset before remixing or using it commercially.

Prices checked 2026-10-25.

## AI 3D generation

Spline's headline feature ([/ai-generate](https://spline.design/ai-generate)).
Two modes: **text-to-3D** ("type a sentence and four looks land in seconds; turn
the one you like into a model") and **image-to-3D** (front-facing single object,
PNG/JPG/WebP ≤15 MB). A reference image can steer a text prompt.

- **The generation models are not proprietary.** Spline lets you pick the
  backend per generation: Hunyuan3D (default, "balances detail and speed"),
  Hunyuan 3.1 Pro ("sharpest geometry"), Trellis 2 ("shapes that pass through
  each other"), Meshy ("clean result with little cleanup"). The same image can
  run through several models to compare.
- **Output is a conventional textured mesh**, not a splat: PBR maps (base color,
  metallic-roughness, normal) exported as GLB/GLTF, and USDZ/STL on Pro/Max.
  Example stats on their page: 1,122,848 faces, 4.7 MB — decimate before
  real-time web use.
- **Billing is per step**: four previews are one charge, meshing is another
  (shown before you confirm); re-opening a generated model is free.
- **Privacy claim**: "does not use any of our users' files or data"; runs on
  Spline's own servers.

For a primary-source deep dive (pipeline, `.splinecode` format, runtime
internals, build-your-own comparisons), see
[the research notes](../../research/spline-3d-design.md).

## How to use

1. Create a scene and add only the objects needed to explain the visual idea.
2. Set materials, lighting, and camera framing. Add interaction states or
   physics only where they improve the user's understanding.
3. Preview the scene at the intended size and device. Reduce complexity if it
   distracts from page content or performs poorly.
4. Publish or export using the method documented for the project, then test the
   embed in the real page and check keyboard and reduced-motion behavior.
5. For AI generation: press the AI button on the toolbar and choose **AI
   Generate**, or type in the in-editor AI chat agent. Pick text-to-3D or
   image-to-3D, choose a backend model if needed, review the four preview looks,
   and mesh the pick. Export the result as GLB/GLTF (USDZ/STL on Pro/Max) or
   keep it as an editable scene object.
6. For MCP, enable Spline's MCP server and point the coding client at
   `mcp.spline.design/mcp` (streamable HTTP with OAuth); the server routes calls
   to a live editor session. Verify the current setup steps in the official
   guide before wiring a client.

## Examples

- [Spline examples](https://spline.design/examples) — explore the published
  examples gallery for interaction and visual references.
- [3D Text — Blue](https://spline.design/examples) — use the gallery's 3D text
  example to study text depth and camera framing.
- [Kids Playground Physics](https://spline.design/examples) — inspect how scene
  objects can react through physics.
- [Mini House — Conditional Logic](https://spline.design/examples) — review a
  scene that changes in response to conditional interaction.

The named scenes are presented in the examples gallery; individual public
permalink routes were not verified.

## When to use it

- Use it for a hero scene, product visual, or small interactive demonstration
  when 3D adds information or a clear visual point.
- Keep the static page useful if the scene is slow, blocked, or disabled.
- Skip it for ordinary UI icons or diagrams; a lightweight SVG is easier to
  load, edit, and make accessible.

## Agent notes

- Official documentation:
  [Spline Docs](https://docs.spline.design/basics/what-is-spline). An `llms.txt`
  is served at
  [docs.spline.design/llms.txt](https://docs.spline.design/llms.txt).
- **Format and runtime (verified 2026-10-25, research notes §3/§3b):** scenes
  publish as `.splinecode` — MessagePack with a 3-byte ext header (`d4 72 40`),
  keys `schema/scene/frames/shared/version` — served from
  `prod.spline.design/<id>/scene.splinecode` and loaded by the proprietary
  `@splinetool/runtime` (vendored three.js, WebGPU/TSL renderer with WebGL
  fallback, Rapier physics WASM). There is **no write-back API**: mutations are
  session-only.
- **Free-tier watermark is baked into scene data**, not added by the viewer.
- An agent that needs Spline's _capability_ without Spline itself should follow
  the reproduction path in the
  [research notes](../../research/spline-3d-design.md): three.js + R3F editor,
  message-packed scene document, and generation via open models (TRELLIS, MIT;
  TripoSR, MIT; Hunyuan3D 2.1, best PBR but license-restricted) or the Meshy/
  Tripo APIs — the same backends Spline fronts.
- MCP operates from a live Spline session; do not expect a browser-only session
  to expose its local server.
- A published scene can carry its own license and attribution requirements. Do
  not treat every community scene as an unrestricted source asset.
- Verify mobile performance, fallback content, and motion preferences in the
  target site.

## Alternatives in this repo

- [Figma](../interface-design/figma.md) — interface layouts and prototypes
  without a 3D scene editor.
- [Penpot](../interface-design/penpot.md) — open-source interface design and SVG
  authoring.
- [Framer](../interface-design/framer.md) — visual website design and publishing
  for primarily 2D page layouts.

## Sources

- [Official site](https://spline.design/) — checked 2026-10-25
- [Pricing](https://spline.design/pricing) — checked 2026-10-25
- [AI Generate](https://spline.design/ai-generate) — checked 2026-10-25
- [3D design](https://spline.design/3d-design) — checked 2026-10-25
- [Examples gallery](https://spline.design/examples) — checked 2026-10-25
- [What is Spline?](https://docs.spline.design/basics/what-is-spline) — checked
  2026-10-25
- [Spline MCP server guide](https://docs.spline.design/generate/spline-mcp-server)
  — checked 2026-10-25
- [Changelog](https://spline.design/changelog) — checked 2026-10-25
- npm `@splinetool/runtime` 2.0.111 tarball — downloaded and inspected
  2026-10-25
- `scene.splinecode` samples byte-inspected 2026-10-25 (two scenes)
- [Terms](https://spline.design/terms) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/) — checked 2026-10-07
- Deep-dive research notes:
  [docs/research/spline-3d-design.md](../../research/spline-3d-design.md) —
  2026-10-25
