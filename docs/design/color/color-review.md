---
name: Color.review
slug: color-review
section: Color
section_slug: color
source_url: https://color.review/
designeer_url: https://designeer.xyz/visuals
designeer_blurb: Contrast checker helping design accessible palettes.
paywall: free
pricing_summary: 'Completely free web tool with no paid tiers.'
open_source: false
license: proprietary
category_tags: [color-contrast, accessibility, a11y, wcag, color-picker]
best_for: [text readability, wcag audits, accessible color pairing, ui review]
stack: [css]
agent_friendly: false
last_verified: 2026-10-07
---

# Color.review

> Contrast checker helping design accessible palettes. TolongLabs developers
> reach for Color.review to visually test foreground and background color
> combinations against WCAG AA and AAA thresholds on a continuous 2D contrast
> plane.

## At a glance

| Field          | Value                                                       |
| -------------- | ----------------------------------------------------------- |
| Source         | [color.review](https://color.review/)                       |
| Paywall        | **Free** — 100% free web application                        |
| Open source    | No — proprietary web application                            |
| Type           | Color contrast checker and palette evaluator                |
| Works with     | Web browsers, Hex colors, WCAG 2.1 compliance audits        |
| Best for       | Text readability, WCAG audits, accessible color pairing     |
| Agent-friendly | No — interactive GUI canvas without CLI, npm, or public API |

## What it is

Color.review is a web-based color contrast and accessibility testing tool
created by Anton Robsarve. Unlike traditional contrast checkers that only return
a static pass/fail number after entering two hex codes, Color.review maps the
entire foreground/background relationship onto a continuous two-dimensional
saturation and brightness canvas.

On the 2D surface, boundary lines plot the exact thresholds required to meet
WCAG 2.1 AA (4.5:1) and AAA (7:1) compliance for body text, as well as AA (3:1)
for large headlines and interactive UI components. This allows designers to
freely drag a color point across the plane and immediately understand how much
room they have before falling below legal or accessible readability levels.

The interface provides side-by-side previews of real typographic samples,
including small body paragraphs, bold headings, and secondary text labels,
simulating real-world reading conditions across both light and dark backgrounds.

## Paywall and pricing

- **Free:** All features, including 2D contrast maps, WCAG compliance
  calculation, headline/body text simulation, and shareable URL permalinks, are
  completely free.
- **Paid:** None. No commercial tier, paid subscriptions, or locked features.
- **Sign-up required?** No. Works immediately in any web browser without an
  account.
- **Licence for client work:** Free to use for personal, commercial, and client
  evaluations without restriction.

Checked on the official Color.review web application on 2026-10-07.

## How to use

1. Open [color.review](https://color.review/) in your browser.
2. Enter your background color hex value on the left panel (e.g. `#FFFFFF` or
   `#0F172A`).
3. Enter your foreground text color on the right panel, or drag the selector
   circle across the saturation/brightness canvas.
4. Observe the contour lines:
   - Stay inside the inner contour to guarantee WCAG AAA (7:1) for body text.
   - Stay inside the middle contour for WCAG AA (4.5:1) for standard text.
   - The outer contour represents the 3:1 threshold for large text (18pt+ or
     14pt bold).
5. Copy the URL to share the exact contrast pair with team members or clients
   (e.g. `https://color.review/check/1E293B-FFFFFF`).

6. Apply verified colors to your CSS variables:

```css
:root {
  --color-surface: #0f172a;
  --color-text-primary: #f8fafc; /* 15.8:1 - Passes AAA */
  --color-text-secondary: #94a3b8; /* 5.2:1 - Passes AA */
}
```

## Examples

- [Color.review Checker](https://color.review/) — Interactive two-dimensional
  contrast explorer showing live WCAG boundary curves.
- [High Contrast Dark Mode Example](https://color.review/check/0D1117-58A6FF) —
  Inspecting link contrast against a GitHub-style dark canvas.
- [Subtle Secondary Text Check](https://color.review/check/FFFFFF-64748B) —
  Evaluating whether a secondary slate text color passes AA body guidelines.

## When to use it

- Use it when reviewing brand typography or interface components to ensure
  colors pass WCAG 2.1 compliance audits.
- Use it to find the maximum possible saturation for an accent color without
  sacrificing readable contrast on a given background.
- Skip it when generating full multi-step ramps with automatic token naming; use
  [Ramps](../color/ramps.md) or [Huetone](../color/huetone.md) instead.
- Skip it when you need perceptual contrast modeling under WCAG 3 drafts; use
  [APCA](../color/apca.md) instead.

## Agent notes

- URL structure supports direct deep linking:
  `https://color.review/check/<bgHex>-<fgHex>` (without `#` characters). Agents
  can construct this link in design review notes.
- Purely browser-based tool without an npm package or REST API. Coding agents
  cannot call it via CLI; calculations must be validated via algorithmic
  formulas or complementary packages like `apca-w3`.

## Alternatives in this repo

- [APCA](../color/apca.md) — Advanced perceptual contrast algorithm calculating
  readability based on spatial frequency, font weight, and modern display
  physics.
- [OKLCH](../color/oklch.md) — Interactive picker exploring perceptually uniform
  lightness and wide-gamut display support.
- [Ramps](../color/ramps.md) — Generates full accessible color ramps and
  semantic design tokens with enforced contrast constraints.

## Sources

- [Color.review Web Tool](https://color.review/) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals)
