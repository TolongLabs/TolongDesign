---
name: Huetone
slug: huetone
section: Color
section_slug: color
source_url: https://huetone.ardov.me/
designeer_url: https://designeer.xyz/visuals
designeer_blurb: Accessible palette generator balancing contrast ratios.
paywall: free
pricing_summary: 'Completely free and open source under the MIT license.'
open_source: true
license: MIT
category_tags:
  [color-palette, design-system, design-tokens, lch, a11y, contrast]
best_for:
  [multi-hue design systems, color tokens, accessible ramps, figma tokens]
stack: [css]
agent_friendly: true
last_verified: 2026-10-07
---

# Huetone

> Accessible palette generator balancing contrast ratios. TolongLabs developers
> reach for Huetone to build predictable, harmonious multi-hue color systems
> where every step across different colors shares identical perceptual contrast
> against common backgrounds.

## At a glance

| Field          | Value                                                         |
| -------------- | ------------------------------------------------------------- |
| Source         | [huetone.ardov.me](https://huetone.ardov.me/)                 |
| Paywall        | **Free** — 100% free and open source under MIT                |
| Open source    | Yes — MIT ([GitHub](https://github.com/ardov/huetone))        |
| Type           | Palette generator and contrast matrix tool                    |
| Works with     | CIELAB / LCH color spaces, CSS custom properties, JSON tokens |
| Best for       | Multi-hue design systems, color tokens, accessible ramps      |
| Agent-friendly | Yes — JSON and CSS export, open-source repository             |

## What it is

Huetone is an open-source palette generator and design token tool created by
Alexey Ardov. It solves one of the most frustrating challenges in design system
architecture: ensuring that a numbered token (like `blue-500`, `green-500`, or
`red-500`) has identical contrast against white or black regardless of which hue
is chosen.

Built on the CIELAB / LCH color space, Huetone locks the perceived lightness
channel across rows of different color ramps. If the 500-level tone is
calibrated to a lightness of 55, switching from blue to purple or amber
maintains the exact same visual weight and WCAG contrast ratio without manual
tweaking.

The web app presents an interactive contrast matrix showing every color step
evaluated against both white and black (or custom background surfaces). It
identifies accessible pairs at a glance, flags combinations that fail WCAG AA,
and provides export options to JSON, CSS custom properties, and SVG swatches.

## Paywall and pricing

- **Free:** The full application, including unlimited color additions, custom
  steps, contrast matrix analysis, and code export, is 100% free.
- **Paid:** None. No subscription or paid pro plan exists.
- **Sign-up required?** No. Runs entirely in the user's browser with state saved
  locally.
- **Licence for client work:** Distributed under the MIT license. Client
  projects and commercial applications may freely use generated palettes and
  integrate the source code.

Checked on the official repository and web application on 2026-10-07.

## How to use

1. Open [huetone.ardov.me](https://huetone.ardov.me/) in your browser.
2. Define your desired lightness steps across the horizontal axis (e.g., 90, 80,
   70, 60, 50, 40, 30, 20, 10).
3. Add color hues (primary, neutral, success, warning, error) by entering base
   hex or LCH values.
4. Review the contrast matrix table beneath the ramps to verify that all
   corresponding steps satisfy WCAG AA (4.5:1) against your target backgrounds.
5. Click **Export** to copy either the raw JSON tokens or CSS custom properties.

```css
:root {
  /* Neutral ramp */
  --neutral-100: #f4f4f6;
  --neutral-500: #71717a;
  --neutral-900: #18181b;

  /* Primary blue ramp sharing identical LCH lightness steps */
  --primary-100: #eff6ff;
  --primary-500: #3b82f6;
  --primary-900: #1e3a8a;
}
```

## Examples

- [Huetone Web Application](https://huetone.ardov.me/) — Live interactive
  palette generator and contrast evaluation matrix.
- [Huetone GitHub Repository](https://github.com/ardov/huetone) — Full
  TypeScript source code demonstrating CIELAB calculations and palette state
  management.
- [Huetone Pre-configured Palette](https://huetone.ardov.me/) — Default
  demonstration palette balancing neutral, blue, green, and red scales.

## When to use it

- Use it when establishing a multi-color design system from scratch where button
  variants (primary, success, danger) must have uniform visual contrast.
- Use it to generate standardized design tokens for handoff to Figma and
  frontend codebases.
- Skip it if you only need to inspect a single color or convert wide-gamut P3
  values; use [OKLCH](../color/oklch.md) instead.
- Skip it if you need automated semantic role mapping (e.g. `bg-surface-raised`,
  `text-disabled`); use [Ramps](../color/ramps.md) instead.

## Agent notes

- GitHub repository: `https://github.com/ardov/huetone`.
- State can be saved and restored via browser local storage or exported as JSON.
- Coding agents can parse exported JSON palettes directly to generate Tailwind
  CSS v3/v4 color configurations or design-token files (`tokens.json`).

## Alternatives in this repo

- [Ramps](../color/ramps.md) — Generates semantic design tokens and OKLCH ramps
  with direct machine-readable agent endpoints and Tailwind v4 export.
- [OKLCH](../color/oklch.md) — Color picker and converter focusing on the OKLCH
  space and wide-gamut display hulls.
- [Color.review](../color/color-review.md) — Two-color foreground/background
  contrast tester with 2D visual contour lines.

## Sources

- [Huetone App](https://huetone.ardov.me/) — checked 2026-10-07
- [Huetone GitHub](https://github.com/ardov/huetone) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals)
