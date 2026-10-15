---
name: Ramps
slug: ramps
section: Color
section_slug: color
source_url: https://www.ramps.studio/
designeer_url: https://designeer.xyz/visuals
designeer_blurb: Design token tool generating OKLCH ramps.
paywall: free
pricing_summary: 'Completely free with no sign-up or API key required.'
open_source: false
license: proprietary
category_tags:
  [design-tokens, oklch, color-ramps, tailwind-v4, semantic-tokens, llms-txt]
best_for:
  [
    design system handoff,
    tailwind v4 themes,
    dark mode palettes,
    agent workflows
  ]
stack: ['css', 'tailwind']
execution_mode: mcp-skill
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Ramps

> Design token tool generating OKLCH ramps. TolongLabs developers reach for
> Ramps to generate perceptually-even OKLCH color scales and usage-first
> semantic tokens for light and dark themes that coding agents can read and
> apply directly.

## At a glance

| Field          | Value                                                         |
| -------------- | ------------------------------------------------------------- |
| Source         | [ramps.studio](https://www.ramps.studio/)                     |
| Paywall        | **Free** — 100% free with no account or API key needed        |
| Open source    | No — proprietary web application                              |
| Type           | Color ramp generator and semantic token tool                  |
| Works with     | Tailwind CSS v4, CSS Custom Properties, Figma, JSON           |
| Best for       | Design system handoff, Tailwind v4 themes, dark mode palettes |
| Agent-friendly | Yes — public `llms.txt`, REST JSON API, query string contract |

## What it is

Ramps (ramps.studio) is a specialized color system generator created by Ryan
Reid as part of the Studio Tools suite. Designed explicitly for developer and AI
agent handoffs, it turns a single brand hex color into a complete, accessible
design token system without requiring JavaScript execution or account signups.

The tool derives perceptually-uniform OKLCH scales, automatic secondary and
tertiary accents, a matched neutral scale, and status colors (success, warning,
error, info). Rather than merely reporting contrast scores after the fact, Ramps
enforces WCAG AA (4.5:1) or AAA (7:1) mathematical thresholds during generation,
guaranteeing accessible pairings for every token.

Ramps maps primitive ramp steps into functional semantic tokens (such as
`bg-canvas`, `bg-surface-raised`, `text-primary`, `border-subtle`, and
`ring-focus`), providing consistent light-and-dark pairings. Coding agents can
query the public API endpoint or ingest the raw plaintext palette to configure
Tailwind v4 or CSS themes immediately.

## Paywall and pricing

- **Free:** Entirely free to use. All palette generations, token exports, the
  JSON API, and the `llms.txt` documentation require no payment or subscription.
- **Paid:** None. There are no paid plans or rate-limited tiers.
- **Sign-up required?** No. No account, session cookie, or API key is required.
- **Licence for client work:** Free for unrestricted personal and commercial
  client use.

Checked on the official ramps.studio website on 2026-10-07.

## How to use

1. Generate a palette directly in your browser or agent workflow by passing your
   6-digit brand hex code:

```
https://www.ramps.studio/?b=2563eb
```

2. Query the raw JSON API directly in terminal scripts or code agents:

```bash
curl -s "https://www.ramps.studio/api/palette?b=2563eb"
```

3. Export the resulting tokens to Tailwind CSS v4 in your `globals.css`:

```css
@theme {
  --color-primary-50: oklch(0.97 0.02 250);
  --color-primary-500: oklch(0.55 0.22 250);
  --color-primary-950: oklch(0.2 0.08 250);

  /* Semantic aliases */
  --color-bg-canvas: var(--color-neutral-50);
  --color-text-primary: var(--color-neutral-900);
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-canvas: var(--color-neutral-950);
    --color-text-primary: var(--color-neutral-50);
  }
}
```

## Examples

- [Ramps Studio Homepage](https://www.ramps.studio/) — Default interactive
  palette view demonstrating semantic token tables and light/dark modes.
- [Ramps JSON API Endpoint](https://www.ramps.studio/api/palette?b=3d7dff) —
  Machine-readable JSON payload containing hex, OKLCH values, and WCAG ratios.
- [Ramps LLMs.txt Documentation](https://www.ramps.studio/llms.txt) — Official
  AI agent contract defining URL query parameters and semantic token
  definitions.

## When to use it

- Use it at the start of any web project to quickly establish accessible light
  and dark mode color tokens from a client's brand color.
- Use it in automated coding agent setups where an LLM needs to generate
  complete theme variables without hallucinating contrast values.
- Skip it when you only need to explore a single color gamut boundary or convert
  color spaces; use [OKLCH](../color/oklch.md) instead.
- Skip it when you want to fine-tune individual steps in a custom CIELAB matrix;
  use [Huetone](../color/huetone.md) instead.

## Agent notes

- Agent contract available at `https://www.ramps.studio/llms.txt`.
- URL parameters:
  - `b`: brand hex without `#` (e.g. `b=3b82f6`).
  - `s`: scheme (`complementary`, `analogous`, `triadic`, `split`,
    `monochromatic`).
  - `c`: WCAG target (`AA` or `AAA`).
  - `f`: color notation (`oklch`, `hex`, `rgb`, `hsl`).
- API returns structured JSON: `https://www.ramps.studio/api/palette?b=<hex>`.
- Notice that inputs are calibrated to a fixed perceptual lightness curve, so
  the exact input hex might shift slightly to preserve scale uniformity.

## Alternatives in this repo

- [Huetone](../color/huetone.md) — Accessible palette creator balancing
  perceptual lightness across custom multi-hue scales.
- [OKLCH](../color/oklch.md) — Color picker and converter for individual OKLCH
  colors with 3D gamut visualization.
- [Color.review](../color/color-review.md) — Interactive two-color contrast
  analyzer with visual WCAG threshold contours.

## Sources

- [Ramps Studio](https://www.ramps.studio/) — checked 2026-10-07
- [Ramps llms.txt](https://www.ramps.studio/llms.txt) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals)
