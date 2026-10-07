---
name: APCA
slug: apca
section: Color
section_slug: color
source_url: https://www.myndex.com/APCA/
designeer_url: https://designeer.xyz/visuals
designeer_blurb: Modern contrast algorithm matching visual perception.
paywall: free
pricing_summary:
  'Completely free for web use and WCAG 3 evaluation under a custom W3
  cooperative license.'
open_source: true
license: proprietary
category_tags:
  [accessibility, a11y, contrast-algorithm, wcag-3, typography, color-science]
best_for:
  [typography contrast, wcag 3 readiness, dark mode readability, text sizing]
stack: [javascript, node]
agent_friendly: true
last_verified: 2026-10-07
---

# APCA

> Modern contrast algorithm matching visual perception. TolongLabs developers
> reach for APCA to evaluate typography contrast based on human visual
> perception, spatial frequency, and font weight rather than the flawed math of
> legacy WCAG 2.

## At a glance

| Field          | Value                                                                 |
| -------------- | --------------------------------------------------------------------- |
| Source         | [apcacontrast.com](https://apcacontrast.com/)                         |
| Paywall        | **Free** — 100% free for web use and W3C guideline evaluation         |
| Open source    | Yes — Custom W3 license ([GitHub](https://github.com/Myndex/apca-w3)) |
| Type           | Perceptual contrast algorithm and npm package                         |
| Works with     | JavaScript, TypeScript, CSS, WCAG 3 draft standards, Node.js          |
| Best for       | Typography contrast, WCAG 3 readiness, dark mode readability          |
| Agent-friendly | Yes — npm package (`apca-w3`), CLI, and pure JS math functions        |

## What it is

APCA (Accessible Perceptual Contrast Algorithm) is an advanced readability and
contrast evaluation algorithm developed by Andrew Somers at Myndex. It is the
candidate contrast algorithm designated for future W3C/AGWG standards, including
WCAG 3 (Silver).

Legacy WCAG 2.x contrast formulas calculate a simple ratio of relative luminance
(`(L1 + 0.05) / (L2 + 0.05)`), which ignores critical aspects of human vision.
Under WCAG 2, dark mode interfaces suffer severe mathematical distortions (often
falsely rejecting readable text while approving unreadable thin gray glyphs on
white). Furthermore, WCAG 2 treats a tiny 10px light font identically to a heavy
72px bold title.

APCA models how the human visual cortex processes light from self-illuminated
computer monitors. It calculates an Lc (Lightness Contrast) score ranging from
-108 to +106, accounting for polarity (dark text on light background vs. light
on dark), spatial frequency (font weight and stroke thickness), and surrounding
display flare.

## Paywall and pricing

- **Free:** Free to use online, and the official `apca-w3` npm library is free
  to install and execute for web-delivered content and accessibility evaluation.
- **Paid:** None for standard web design and development use.
- **Sign-up required?** No. Direct npm install or web usage without
  registration.
- **Licence for client work:** Licensed under a specialized W3 cooperative
  license ("Limited W3 License for Compliant Code Only") granting royalty-free
  rights for web content and compliance evaluation with W3C guidelines.

Checked on the official Myndex repository license documentation on 2026-10-07.

## How to use

1. Install the official canonical W3C-compliant package:

```bash
bun add apca-w3
```

2. Evaluate contrast between text and background colors in JavaScript or
   TypeScript:

```typescript
import { calcAPCA } from 'apca-w3'

// Returns an Lc (Lightness Contrast) score
// Syntax: calcAPCA(textColor, backgroundColor)
const lightModeScore = calcAPCA('#1a1a1a', '#ffffff')
console.log(lightModeScore) // ~ -103 (excellent body text contrast)

const darkModeScore = calcAPCA('#e0e0e0', '#121212')
console.log(darkModeScore) // ~ 92 (high contrast for dark mode)
```

3. Interpret Lc scores against typographic requirements:
   - **Lc 90+**: Preferred for body text smaller than 14px or weights under 400.
   - **Lc 75**: Minimum for body text (16px, weight 400).
   - **Lc 60**: Minimum for large content text (24px 400 or 16px 700).
   - **Lc 45**: Minimum for non-text UI elements, large headlines, or disabled
     controls.
   - **Lc < 30**: Not suitable for readable text.

## Examples

- [APCA Contrast Calculator](https://apcacontrast.com/) — Official web-based
  interactive calculator with font size and weight lookup grids.
- [apca-w3 GitHub Repository](https://github.com/Myndex/apca-w3) — Canonical
  implementation containing reference JS math, lookup tables, and test suites.
- [APCA in a Nutshell](https://git.myndex.com/) — Official developer guide
  explaining polarity, spatial frequency, and luminance perception theory.

## When to use it

- Use it when designing dark-mode themes to ensure text remains comfortable and
  legible without creating blinding halogen glare.
- Use it to pair font sizes and weights directly with color shades in modern
  design systems.
- Skip it when your project must strictly satisfy legacy contractual legal
  mandates requiring WCAG 2.1 AA (4.5:1 ratio) compliance; use
  [Color.review](../color/color-review.md) or Bridge-PCA instead.

## Agent notes

- Package name: `apca-w3` (do not use legacy or unmaintained forks).
- Returns a signed number: negative Lc indicates dark text on a light
  background; positive Lc indicates light text on a dark background. Use
  `Math.abs(score)` when comparing against threshold minimums.
- Supports sRGB hex strings (`#ffffff`), RGB arrays, and integer color values.

## Alternatives in this repo

- [Color.review](../color/color-review.md) — Visual contrast inspector mapped
  against legal WCAG 2.1 AA/AAA ratio contours.
- [OKLCH](../color/oklch.md) — Interactive color space tool designed for
  perceptually uniform lightness calibration.
- [Ramps](../color/ramps.md) — Automated token tool enforcing contrast
  thresholds across light and dark color scales.

## Sources

- [Myndex APCA Guide](https://git.myndex.com/) — checked 2026-10-07
- [APCA Contrast Web Calculator](https://apcacontrast.com/) — checked 2026-10-07
- [apca-w3 GitHub Repository](https://github.com/Myndex/apca-w3) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/visuals)
