---
name: Visual Rambling
slug: visual-rambling
section: Reading
section_slug: reading
source_url: 'https://visualrambling.space/'
designeer_url: 'https://designeer.xyz/'
designeer_blurb: 'Personal visual essays exploring interface design.'
paywall: free
pricing_summary:
  'Completely free access to all interactive visual essays, 3D math sketches,
  and dithering deep dives.'
open_source: false
license: proprietary
category_tags:
  [visual-essays, 3d-math, creative-coding, dithering, canvas-experiments]
best_for:
  [visualizing 3D transformations, dithering algorithms, distance fields]
stack: ['canvas', 'webgl', 'javascript']
execution_mode: reference
surface: ['reference']
status: active
agent_friendly: false
last_verified: 2026-10-07
---

# Visual Rambling

> Personal visual essays exploring interface design. TolongLabs creative coders
> and frontend engineers reach for Visual Rambling to study interactive
> visualizations of 3D geometry, dithering algorithms, and canvas math.

## At a glance

| Field          | Value                                                 |
| -------------- | ----------------------------------------------------- |
| Source         | [visualrambling.space](https://visualrambling.space/) |
| Paywall        | **Free** — open web access                            |
| Open source    | No — proprietary personal creative essays             |
| Type           | Interactive visual essays & creative coding sketches  |
| Works with     | Modern web browsers, HTML5 Canvas, WebGL              |
| Best for       | Visualizing 3D transformations, dithering, math       |
| Agent-friendly | No — interactive visual canvas essays, no API or CLI  |

## What it is

Visual Rambling is an independent portfolio of interactive visual essays and
creative coding experiments created by Damar Pramudita (@damarberlari). The site
serves as an exploratory notebook where mathematical and computational concepts
are unpacked through beautiful, scannable interactive graphics.

The platform is split into two complementary collections:

1. **Stories (Extended Visual Narratives):** Long-form interactive essays that
   break down complex graphical techniques step by step. Notable stories include
   a comprehensive two-part deep dive on image dithering (covering thresholding,
   error diffusion, Floyd-Steinberg algorithms, and ordered Bayer matrices),
   interactive guides on moving objects in 3D projective space, and visual
   explanations of neural network weight adjustments.
2. **Sketches (Brief Visual Experiments):** Self-contained algorithmic demos
   demonstrating specific mathematical phenomena—including signed distance
   fields (SDFs), electric field simulation lines, Truchet tile Rubik's cubes,
   depth-of-field point scattering, cube trails, and smooth paragraph layout
   transitions.

Each piece is custom-rendered in the browser using HTML5 Canvas, WebGL, or CSS
transforms, allowing readers to interact with parameters and witness algorithmic
behaviors dynamically.

## Paywall and pricing

- **Free:** All interactive essays, stories, and algorithmic sketches on
  `visualrambling.space` are 100% free to explore.
- **Paid:** None. There are no paid subscriptions, memberships, or locked
  chapters. The site is a personal passion project and creative portfolio.
- **Sign-up required?** No. Access is immediate without account creation. An RSS
  feed (`visualrambling.space/rss.xml`) is available for subscription.
- **Licence for client work:** Visual essays and artwork are copyrighted by
  Damar Pramudita. The mathematical formulas and standard rendering algorithms
  (e.g., dithering matrices, distance field formulas) demonstrated can be
  implemented freely in commercial projects.

Verified on the live Visual Rambling website on 2026-10-07.

## How to use

1. Learn dithering implementations: Study "Dithering - Part 1" and "Part 2"
   (`https://visualrambling.space/dithering-part-1/`) to understand how to
   reduce image color palettes while preserving perceptual detail for retro or
   stylized web graphics.
2. Understand 3D projection mathematics: Review "Moving Objects in 3D Space" to
   grasp coordinate systems, matrix transformations, and perspective projection
   before writing custom Three.js or canvas visualizers.
3. Explore distance fields: Inspect the "Distance Fields" sketch to understand
   how distance functions work, which is foundational for custom GLSL fragment
   shaders.
4. Benchmark interactive storytelling: Reference Visual Rambling's typography
   and interaction design when building educational client explainers or
   interactive product demonstrations.

## Examples

- [Dithering - Part 1](https://visualrambling.space/dithering-part-1/) — An
  interactive breakdown of thresholding, color quantization, and error
  diffusion.
- [Moving Objects in 3D Space](https://visualrambling.space/moving-objects-in-3d/)
  — Visual essay explaining 3D coordinate transformations and projections.
- [Distance Fields Sketch](https://visualrambling.space/sketches/distance-fields/)
  — Algorithmic canvas sketch demonstrating distance functions visually.

## When to use it

- Use it when implementing custom retro graphical styles, dithering shaders, or
  canvas-based data visualizations.
- Use it to learn and teach core computer graphics concepts through intuitive,
  interactive diagrams rather than abstract formulas.
- Skip it when looking for production React component kits or design system
  tokens; consult [Codrops](../reading/codrops.md) or
  [Interfaces](../reading/interfaces.md) instead.

## Agent notes

- Non-machine-readable: The site is a visual canvas-driven portfolio without an
  API, CLI, or `llms.txt`.
- The essays demonstrate classical algorithmic approaches (Floyd-Steinberg,
  Bayer matrix, perspective projection) that can be translated directly into
  TypeScript, WebGL, or Python code.
- Minimal external dependencies; animations run on lightweight canvas contexts.

## Alternatives in this repo

- [Making Software](../reading/making-software.md) — Comprehensive commercial
  reference manual breaking down computer graphics hardware and algorithms.
- [Codrops](../reading/codrops.md) — Creative frontend tutorials with
  open-source GitHub repositories and production-ready WebGL code.

## Sources

- [Official site](https://visualrambling.space/) — checked 2026-10-07
- [Dithering Essay](https://visualrambling.space/dithering-part-1/) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/)
