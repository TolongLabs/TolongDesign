---
name: SVG Guide
slug: svg-guide
section: Reading
section_slug: reading
source_url: 'https://www.svg.guide/'
designeer_url: 'https://designeer.xyz/'
designeer_blurb: 'Guide to mastering SVG markup and animations.'
paywall: freemium
pricing_summary:
  'Free foundation preview lesson available; full interactive SVG course
  enrollment is $199 USD one-time.'
open_source: false
license: proprietary
category_tags: [svg, animation, vector-graphics, path-math, interactive-course]
best_for:
  [mastering svg path syntax, vector micro-interactions, responsive svg scaling]
stack: ['svg', 'html', 'css', 'javascript']
execution_mode: reference
surface: ['reference']
status: active
agent_friendly: false
last_verified: 2026-10-07
---

# SVG Guide

> Guide to mastering SVG markup and animations. TolongLabs developers reach for
> SVG Guide to demystify complex SVG path commands, coordinate systems, and
> performant vector animations.

## At a glance

| Field          | Value                                               |
| -------------- | --------------------------------------------------- |
| Source         | [svg.guide](https://www.svg.guide/)                 |
| Paywall        | **Freemium** — free preview lesson; Course $199 USD |
| Open source    | No — proprietary interactive course                 |
| Type           | Interactive technical mini-course & SVG manual      |
| Works with     | Modern web browsers, SVG, CSS, JavaScript           |
| Best for       | Mastering SVG paths, vector animation, SVG scaling  |
| Agent-friendly | No — interactive web-based course, no API or CLI    |

## What it is

SVG Guide (also published as "Interactive SVG Animations" at `svg.guide` and
`svg-animations.how`) is a specialized interactive course created by Nanda
Syahrasyad, an engineer at Vercel known for his interactive technical tutorials
at `nan.fyi`.

The course tackles one of the most intimidating areas of frontend web
development: reading, writing, and animating Scalable Vector Graphics by hand.
Instead of treating SVGs as static exported image blobs from Figma or
Illustrator, it teaches developers how the SVG format works from first
principles:

- **SVG Paths & The "d" Attribute:** Deconstructing the cryptic string syntax of
  path commands (`M`, `L`, `C`, `S`, `Q`, `A`, `Z`), explaining how control
  points, cubic Béziers, and arc parameters shape curves.
- **Coordinate Systems & ViewBoxes:** Deep dives into `viewBox`,
  `preserveAspectRatio`, and responsive SVG scaling behavior.
- **Path Animations:** Techniques for animating line drawing
  (`stroke-dasharray`, `stroke-dashoffset`), morphing shapes, and chaining
  micro-interactions.
- **Interactive Sandboxes:** Embedded interactive sliders and visual playground
  widgets that let learners manipulate control points and see coordinate changes
  reflected immediately.

## Paywall and pricing

- **Free:** A complete foundation preview lesson is accessible for free online
  at `https://courses.nan.fyi/svg/00-svg-foundations`, covering basic SVG syntax
  and coordinate spaces.
- **Paid:** Full enrollment in the "Interactive SVG Animations" course is a
  one-time purchase of $199 USD, providing permanent access to all lessons,
  interactive coding exercises, and future updates.
- **Sign-up required?** No for reading the free foundations preview lesson. Yes
  for full course enrollment and saving exercise progress.
- **Licence for client work:** Techniques, path formulas, and animation logic
  taught in the course can be applied freely to commercial client websites.
  Course text, interactive widgets, and illustrations are copyrighted by Nanda
  Syahrasyad.

Verified on the official SVG Guide website on 2026-10-07.

## How to use

1. Learn SVG foundations: Complete the free introductory module
   (`https://courses.nan.fyi/svg/00-svg-foundations`) to build a solid mental
   model of the SVG viewport, user coordinate space, and viewBox attributes.
2. Hand-tune exported icons: Apply path understanding to inspect bloated SVG
   exports from design tools, cleaning up redundant nodes and optimizing path
   commands directly in code.
3. Implement path drawing animations: Use the mathematical concepts of
   `stroke-dasharray` and `stroke-dashoffset` to build lightweight, performant
   icon load transitions without third-party animation libraries.
4. Animate morphing paths: Master cubic Bézier parameter matching to create
   seamless morphing transitions between icon states (e.g., play to pause,
   hamburger to close).

## Examples

- [SVG Foundations Preview](https://courses.nan.fyi/svg/00-svg-foundations) —
  Free interactive lesson breaking down SVG coordinate spaces and basic shapes.
- [Course Enrollment Portal](https://www.svg.guide/#enroll) — Official course
  outline and enrollment page detailing curriculum modules.
- [Interactive SVG Animations Alternative Domain](https://svg-animations.how/) —
  Mirror landing page for the interactive course.

## When to use it

- Use it when building bespoke icon animations, complex progress indicators,
  interactive vector maps, or morphing UI state transitions.
- Use it to understand and debug SVG rendering glitches that occur across
  different screen densities and aspect ratios.
- Skip it if you only need standard static icons; use an icon library like
  [Lucide](../icons/material-symbols.md) instead.

## Agent notes

- Non-machine-readable: The course is delivered as an interactive Next.js web
  application without an open API or CLI.
- The fundamental mathematical principles of SVG path commands (`M`, `C`, `Q`,
  `A`) and stroke-dashoffset tricks taught in the course are universally
  applicable when generating raw SVG markup or CSS animations.
- Free preview module provides clean, accessible explanations of `viewBox` math.

## Alternatives in this repo

- [Animations.dev](../reading/animations-dev.md) — Broader comprehensive course
  on UI animation timing, spring physics, and Framer Motion.
- [Codrops](../reading/codrops.md) — Experimental creative frontend tutorials
  and WebGL demos with open-source GitHub code.

## Sources

- [Official site](https://www.svg.guide/) — checked 2026-10-07
- [Free Preview Lesson](https://courses.nan.fyi/svg/00-svg-foundations) —
  checked 2026-10-07
- [Designeer listing](https://designeer.xyz/)
