---
name: Making Software
slug: making-software
section: Reading
section_slug: reading
source_url: 'https://www.makingsoftware.com/'
designeer_url: 'https://designeer.xyz/'
designeer_blurb: 'Essays examining how tools shape design.'
paywall: paid
pricing_summary:
  'Interactive digital reference book; Basic Edition is $99 one-time for all 32
  chapters, with an Advanced Edition offering illustration courses and print
  pre-orders.'
open_source: false
license: proprietary
category_tags:
  [
    computer-graphics,
    software-foundations,
    shaders,
    bezier-curves,
    color-spaces
  ]
best_for:
  [
    understanding how digital tools work under the hood,
    rasterization,
    vector geometry
  ]
stack: []
agent_friendly: false
last_verified: 2026-10-07
---

# Making Software

> Essays examining how tools shape design. TolongLabs developers and designers
> reach for Making Software to understand the computer graphics fundamentals,
> mathematics, and hardware architectures that power modern creative software.

## At a glance

| Field          | Value                                                 |
| -------------- | ----------------------------------------------------- |
| Source         | [makingsoftware.com](https://www.makingsoftware.com/) |
| Paywall        | **Paid** — $99 one-time purchase                      |
| Open source    | No — proprietary digital book and illustrations       |
| Type           | Illustrated technical reference book and essays       |
| Works with     | Modern web browsers, e-readers                        |
| Best for       | Understanding computer graphics, rasterization, math  |
| Agent-friendly | No — commercial illustrated book, no API or CLI       |

## What it is

Making Software is an illustrated digital reference manual authored by Dan
Hollick, an educator and motion designer. Rather than teaching a specific
software package (like Figma or Photoshop) or a frontend framework, it explains
how the underlying computational and hardware systems that drive digital design
actually work.

Presented as a living digital book spanning 32 chapters, the resource tackles
fundamental questions through intuitive, hand-crafted technical diagrams:

- **Display & Input Hardware:** How touchscreen electrode matrices detect
  gestures, how pixels emit light, and how subpixel rendering functions.
- **Vector Graphics:** The mathematical foundations of Bézier curves, control
  points, and geometry calculation engines.
- **Image Processing:** The algorithms behind Gaussian blurs, convolution
  kernels, image downsampling, and anti-aliasing.
- **Color Systems:** The physical and digital realities of color gamuts, sRGB vs
  Display P3, and perceptual color spaces.
- **Rendering & Shaders:** How GPU pipelines process fragment shaders, lighting
  models, and rasterization.

It bridges the gap between high-level user interface design and lower-level
computer science, giving creators a grounded mental model of their mediums.

## Paywall and pricing

- **Free:** Sample preview excerpts and table of contents are publicly visible
  on the landing page.
- **Paid:** The complete digital book is sold as a one-time purchase:
  - **Basic Edition:** $99 one-time payment for the full 32-chapter digital book
    and all future updates.
  - **Advanced Edition:** Includes the complete digital book, lifetime updates,
    a searchable glossary, a comprehensive reading list, a 2-hour technical
    illustration course, and priority access to pre-order future physical print
    runs.
- **Sign-up required?** Yes, account creation and purchase are required to
  unlock and read the complete chapter library.
- **Licence for client work:** Concepts, algorithmic models, and mathematical
  principles can be applied freely to custom software and shader pipelines. The
  illustrations and written text are copyrighted by Dan Hollick.

Verified on the official Making Software website on 2026-10-07.

## How to use

1. Deepen graphics fundamentals: Read chapters on Bézier mathematics and vector
   rasterization when building custom canvas drawing tools or SVG manipulation
   utilities.
2. Optimize shader and filter pipelines: Consult the sections on convolution
   matrices and Gaussian blurs when implementing performant WebGL visual effects
   or CSS backdrop filters.
3. Master color spaces: Study the color gamut chapters to ensure digital
   products accurately handle wide-gamut displays without unintended clipping or
   banding.
4. Elevate team technical literacy: Use the illustrated concepts in technical
   documentation to explain how browser rendering engines handle graphical
   assets.

## Examples

- [Making Software Official Site](https://www.makingsoftware.com/) — Main
  product portal detailing chapters, topics, and purchase options.
- [Gaussian Blur Chapter Overview](https://www.makingsoftware.com/) —
  Illustrated breakdown of convolution kernels and blur algorithms.
- [Vector Graphics & Bézier Breakdown](https://www.makingsoftware.com/) —
  Step-by-step visual explanation of how vector paths are computed and rendered.

## When to use it

- Use it when designing graphics software, creative developer tools, WebGL
  shaders, or custom canvas engines where deep technical understanding is
  required.
- Use it to develop a first-principles mental model of how computer graphics and
  screens operate.
- Skip it if you need immediate CSS snippets or pre-built UI components; consult
  [Smashing Magazine](../reading/smashing-magazine.md) or
  [Interfaces](../reading/interfaces.md) instead.

## Agent notes

- Non-machine-readable: Making Software is a paid proprietary digital book
  without an open API, CLI, or `llms.txt`.
- Bot protection and rate limits (HTTP 429) may restrict automated scrapers from
  fetching landing page assets directly.
- The conceptual frameworks—such as convolution kernels, Bézier handles, and
  perceptual color models—are standard computer science principles that agents
  can reference in technical code discussions.

## Alternatives in this repo

- [Interfaces](../reading/interfaces.md) — Monthly design engineering magazine
  focusing on web-native motion, React, and tactile UI details.
- [Visual Rambling](../reading/visual-rambling.md) — Free personal visual essays
  exploring 3D transformations, dithering, and distance fields.

## Sources

- [Official site](https://www.makingsoftware.com/) — checked 2026-10-07
- [Making Software Overview](https://www.makingsoftware.com/) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/)
