---
name: OKLCH
slug: oklch
section: Color
section_slug: color
source_url: https://oklch.com/
designeer_url: https://designeer.xyz/visuals
designeer_blurb: Color picker using perceptually uniform space.
paywall: free
pricing_summary: 'Completely free and open source under the MIT license.'
open_source: true
license: MIT
category_tags: [color-picker, oklch, oklab, color-spaces, css, evil-martians]
best_for: [accessible palettes, wide gamut colors, design systems, css styling]
stack: [css]
agent_friendly: true
last_verified: 2026-10-07
---

# OKLCH

> Color picker using perceptually uniform space. TolongLabs developers reach for
> OKLCH to create, visualize, and convert colors where changes in hue do not
> distort perceived brightness, ensuring consistent contrast across web
> palettes.

## At a glance

| Field          | Value                                                               |
| -------------- | ------------------------------------------------------------------- |
| Source         | [oklch.com](https://oklch.com/)                                     |
| Paywall        | **Free** — 100% free and open source under MIT                      |
| Open source    | Yes — MIT ([GitHub](https://github.com/evilmartians/oklch-picker))  |
| Type           | Color picker and color space converter                              |
| Works with     | Modern CSS (`oklch()`), P3 displays, Tailwind CSS v4, sRGB          |
| Best for       | Accessible palettes, wide gamut colors, design systems, CSS styling |
| Agent-friendly | Yes — web URL hash state, plain CSS snippets, open-source library   |

## What it is

OKLCH (oklch.com) is an interactive color picker and converter built by Evil
Martians (created by Andrey Sitnik and Roman Shamin). It visualizes color in the
OKLCH color space (Lightness, Chroma, Hue), a cylindrical transformation of the
perceptually uniform Oklab color model.

In legacy color spaces like HSL and RGB, perceived brightness varies wildly
across different hues; for example, pure yellow appears dramatically brighter
than pure blue even when both share an identical HSL lightness value of 50%.
OKLCH fixes this perceptual distortion: a lightness value of 70% in OKLCH has
identical perceived luminance regardless of hue or chroma.

The oklch.com web tool visualizes 2D slice graphs and a 3D color gamut volume,
helping designers and developers see the physical boundaries of sRGB, Display
P3, and Rec.2020 displays. It also warns when selected Chroma values exceed the
renderable gamut of standard screens, offering fallback clipping options.

## Paywall and pricing

- **Free:** Full interactive picker, 3D gamut visualization, conversion to
  Hex/RGB/P3, and APCA/WCAG contrast inspection are completely free.
- **Paid:** None. There are no paid subscriptions, pro plans, or locked
  features.
- **Sign-up required?** No. The tool operates client-side without registration.
- **Licence for client work:** Distributed under the MIT license. Commercial and
  client projects can freely use the web tool and embed the open-source code.

Checked on the official repository and web app on 2026-10-07.

## How to use

1. Open [oklch.com](https://oklch.com/) in any modern web browser.
2. Select your base lightness (`L`), saturation/chroma (`C`), and hue (`H`).
3. Toggle "Show P3" or "Show Rec2020" to verify whether your color is within
   standard sRGB boundaries or requires wide-gamut display support.
4. Copy the native CSS declaration:

```css
:root {
  --brand-primary: oklch(0.65 0.22 260);
  --brand-surface: oklch(0.98 0.01 260);
  --brand-text: oklch(0.2 0.04 260);
}
```

5. In Tailwind CSS v4, use the OKLCH token directly in your configuration or
   theme layer:

```css
@theme {
  --color-brand: oklch(0.65 0.22 260);
}
```

## Examples

- [OKLCH Color Picker](https://oklch.com/) — Interactive web tool with live 2D
  lightness/chroma/hue graphs and clipboard export.
- [OKLCH 3D Model View](https://oklch.com/#60,0.15,250,100) — Fullscreen 3D
  gamut explorer showing how the color sits within the sRGB and P3 color hulls.
- [Evil Martians OKLCH Repository](https://github.com/evilmartians/oklch-picker)
  — Source code repository showcasing math calculations, gamut mapping, and
  WebGL 3D rendering.

## When to use it

- Use it when designing color ramps for design systems where buttons, badges,
  and alerts of different hues must maintain identical perceived contrast.
- Use it when building sites targeting high-end mobile or Apple displays with
  vibrant Display P3 color gamuts.
- Skip it when dealing with legacy browsers that lack CSS Color Module Level 4
  support, or when generating full multi-token systems automatically; use
  [Ramps](../color/ramps.md) or [Huetone](../color/huetone.md) instead.

## Agent notes

- Modern browsers (Chrome 111+, Safari 15.4+, Firefox 113+) have universal
  native support for the CSS `oklch()` functional syntax.
- OKLCH syntax: `oklch(L C H [/ A])` where `L` is 0 to 1 (or 0% to 100%), `C` is
  0 to ~0.37 (unbounded theoretically), and `H` is 0 to 360 degrees.
- If gamut clipping occurs (color displays out of sRGB bounds), browsers will
  automatically map the chroma down to the nearest displayable gamut point.

## Alternatives in this repo

- [Ramps](../color/ramps.md) — Design token tool generating accessible OKLCH
  ramps and semantic tokens for Tailwind v4 and CSS.
- [Huetone](../color/huetone.md) — Accessible multi-hue palette builder
  balancing perceptual lightness across complete color systems.
- [Color.review](../color/color-review.md) — Two-color contrast checker focusing
  on WCAG compliance for foreground text and background pairs.

## Sources

- [OKLCH Color Picker](https://oklch.com/) — checked 2026-10-07
- [Evil Martians oklch-picker GitHub](https://github.com/evilmartians/oklch-picker)
  — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals)
