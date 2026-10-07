---
name: Morphrig
slug: morphrig
section: Motion
section_slug: motion
source_url: https://morphrig.dev/
designeer_url: https://designeer.xyz/components
designeer_blurb: Interactive manual on how icon morphing works.
paywall: free
pricing_summary:
  '100% free interactive web manual and educational guide; no paywalls or
  sign-up.'
open_source: false
license: proprietary
category_tags: [motion, animation, svg, morphing, math, icons, guide]
best_for: [icon morphing mechanics, svg path interpolation, animation theory]
stack: [svg, webgl, canvas, javascript]
agent_friendly: true
last_verified: 2026-10-07
---

# Morphrig

> Interactive manual on how icon morphing works. Use it to understand the
> geometry, path alignment, and point interpolation behind fluid SVG shape
> transitions.

## At a glance

| Field          | Value                                                             |
| -------------- | ----------------------------------------------------------------- |
| Source         | [morphrig.dev](https://morphrig.dev/)                             |
| Paywall        | **Free** — 100% free interactive publication                      |
| Open source    | No — proprietary educational guide                                |
| Type           | Interactive technical manual and shape morphing reference         |
| Works with     | SVG, Canvas, JavaScript, Web Animations API, Flubber              |
| Best for       | Icon morphing mechanics, SVG path interpolation, animation theory |
| Agent-friendly | Yes — clear algorithmic explanations, formula breakdowns          |

## What it is

Morphrig is an in-depth interactive technical manual created by design engineer
Sanyam Punia (`sanyam.sh`). It deconstructs one of the most deceptively simple
interactions on the modern web: morphing one vector icon into another (such as a
hamburger navigation icon transforming into a close cross).

While developers often assume path morphing is a simple tween, the underlying
mathematics requires solving non-trivial geometric problems:

- **Arity matching:** ensuring both shapes share the same number of path
  commands and coordinate vertices.
- **Winding order & direction:** aligning clockwise vs counter-clockwise path
  traversals to prevent twisted, inverted meshes during intermediate frames.
- **Correspondence & centroids:** matching which line segment transforms into
  which, minimizing path travel distance and distortion.
- **Subdivision:** splitting Bezier curves into equal arc-length segments.

Written in ten sequential chapters with real-time interactive vector scrubbers,
Morphrig explains how morphing compilers work from first principles, ending with
practical techniques to implement custom morphing rigs in production.

## Paywall and pricing

- **Free:** Completely free to read and explore. All ten parts, the interactive
  path scrubbers, the technical glossary, and the colophon are publicly
  accessible.
- **Paid:** No subscription fees, paywalls, or gated chapters.
- **Sign-up required?** No sign-up required.
- **Licence for client work:** Free educational resource. Algorithms and SVG
  path interpolation techniques demonstrated can be freely implemented in
  commercial client code.

Checked on 2026-10-07.

## How to use

1. Read the manual sequentially starting at Part 0
   (`morphrig.dev/docs/what-morphing-is`).
2. Use the interactive scrubbers on the site to inspect intermediate shapes
   between source and destination vectors.
3. Consult the **Glossary** (`morphrig.dev/glossary`) to understand specific
   geometric terms: arity, winding order, centroid distance, and segment
   subdivision.
4. Apply the manual's path matching principles when building custom SVG morphs
   using JavaScript interpolation libraries like `flubber` or GSAP MorphSVG:

```typescript
import { interpolate } from 'flubber'

const hamburgerPath = 'M3 6h18 M3 12h18 M3 18h18'
const crossPath = 'M4 4l16 16 M20 4L4 20'

// Flubber handles arity and subdivision matching as explained in Morphrig
const morph = interpolate(hamburgerPath, crossPath, {
  maxSegmentLength: 2
})

export function animateMorph(progress: number, svgPathElement: SVGPathElement) {
  svgPathElement.setAttribute('d', morph(progress))
}
```

## Examples

- [Morphrig Part 0: What Morphing Is](https://morphrig.dev/docs/what-morphing-is)
  — introductory chapter exploring the geometry of vector interpolation.
- [Morphrig Parts Index](https://morphrig.dev/docs) — full list of ten technical
  parts covering path alignment, subdivision, and compilers.
- [Morphrig Glossary](https://morphrig.dev/glossary) — formal mathematical and
  topological definitions for icon morphing engineering.

## When to use it

- Use it when designing bespoke animated icon sets, tab bar indicators, or logo
  transitions and needing to understand why SVG paths distort or invert.
- Use it to learn how production path-morphing libraries (like GSAP MorphSVG or
  Flubber) function under the hood.
- Skip it if you need pre-built, ready-to-use animated icons right out of the
  box; use Morphicons or Lottie instead.

## Agent notes

- Official publication URL: `https://morphrig.dev/`
- Documentation chapters URL: `https://morphrig.dev/docs`
- Excellent algorithmic reference for AI agents tasked with debugging SVG path
  distortion or writing custom path subdivision functions.
- Written by Sanyam Punia (`https://sanyam.sh`).

## Alternatives in this repo

- [Morphicons](../motion/morphicons.md) — pre-built morphing vector icons ready
  for immediate drop-in use.
- [GSAP](../motion/gsap.md) — JavaScript animation engine including MorphSVG for
  commercial path tweening.
- [Easing Wizard](../motion/easing-wizard.md) — visual generator for custom CSS
  spring and cubic-bezier easing curves.

## Sources

- [Morphrig Official Site](https://morphrig.dev/) — checked 2026-10-07
- [Morphrig Documentation](https://morphrig.dev/docs) — checked 2026-10-07
- [Morphrig Glossary](https://morphrig.dev/glossary) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components)
