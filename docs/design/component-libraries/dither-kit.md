---
name: 'Dither Kit'
slug: dither-kit
section: 'Component Libraries'
section_slug: component-libraries
source_url: 'https://www.tripwire.sh/dither-kit'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Dithered chart components with retro aesthetic.'
paywall: free
pricing_summary:
  'The public CLI and registry source are free; no paid tier was published.'
open_source: false
license: 'unknown'
category_tags: [react, charts, canvas, shadcn]
best_for: [retro data visualizations, dashboard charts]
stack: ['react', 'tailwind', 'shadcn', 'canvas']
execution_mode: registry
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Dither Kit

> Dithered chart components with retro aesthetic. Yes — CLI, shadcn registry,
> and public GitHub README.

## At a glance

| Field          | Value                                                                               |
| -------------- | ----------------------------------------------------------------------------------- |
| Source         | [www.tripwire.sh/dither-kit](https://www.tripwire.sh/dither-kit)                    |
| Paywall        | **Free** — The public CLI and registry source are free; no paid tier was published. |
| Open source    | Source is public or described as OSS; licence caveat is below.                      |
| Type           | Composable dithered chart and effect components                                     |
| Works with     | React, Tailwind CSS, and shadcn/ui                                                  |
| Best for       | retro data visualizations, dashboard charts                                         |
| Agent-friendly | Yes — Yes — CLI, shadcn registry, and public GitHub README                          |

## What it is

Dither Kit is a set of composable chart components and decorative effects for
shadcn projects. Area, line, bar, pie, and radar charts render through an
ordered-dither canvas engine and expose a Recharts-style child API.

The package also includes standalone pixel avatars, buttons, and gradient
effects. Its CLI writes source into the project and keeps a lockfile so copied
components can later be updated or diffed.

The public repository is available and its CLI package is MIT-licensed, but a
root licence for all copied component source was not verified. The overall
component licence is marked unknown.

## Paywall and pricing

- **Free:** The registry and CLI are publicly available; no payment gate was
  shown.
- **Paid:** No paid tier or price was published.
- **Sign-up required?** No account is required for CLI or shadcn registry
  installs.
- **Licence for client work:** The CLI package is MIT, but the licence for all
  registry component source was not confirmed.

Pricing and access were checked on 2026-10-07.

## How to use

1. Set up Tailwind and a shadcn project with components.json; the charts are
   unstyled without Tailwind.

2. Install an individual item with the Dither Kit CLI, or use the GitHub
   shorthand with shadcn.

3. Import chart parts from the generated component file and provide data, a
   config map, and child axes or tooltip elements.

4. Choose chart variants and bloom intensity, then verify contrast and canvas
   output on the real dashboard background.

Official setup or install command:

```bash
npx @dither-kit/cli add area-chart
```

Minimal documented usage or configuration example:

```tsx
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Legend,
  Tooltip
} from '@/components/dither-kit/area-chart'

const data = [
  { month: 'Jan', desktop: 186 },
  { month: 'Feb', desktop: 240 }
]
const config = { desktop: { label: 'Desktop', color: 'blue' } }

;<AreaChart data={data} config={config} bloom="aura">
  <XAxis dataKey="month" />
  <YAxis />
  <Legend isClickable />
  <Tooltip labelKey="month" />
  <Area dataKey="desktop" variant="gradient" />
</AreaChart>
```

## Examples

- [Dither Kit demos and docs](https://www.tripwire.sh/dither-kit) — Live
  examples of the chart and visual styles.
- [GitHub README](https://github.com/Boring-Software-Inc/dither-kit) — Area,
  bar, pie, radar, avatar, button, and gradient examples.
- [Area chart API](https://github.com/Boring-Software-Inc/dither-kit) —
  Composable chart API and CLI installation example.
- [CLI package](https://www.npmjs.com/package/@dither-kit/cli) — Public
  command-line package metadata.

## When to use it

- Use it when a dashboard or campaign needs a deliberate retro chart treatment
  and the project can use Tailwind.
- Skip it when charts need standard SVG semantics or a verified component-source
  licence is required; compare
  [Evil Charts](../component-libraries/evil-charts.md) or
  [Re UI](../component-libraries/re-ui.md).

## Agent notes

- The repository README documents npx @dither-kit/cli add area-chart and a
  shadcn registry alternative.
- Charts use Tailwind styling and shared packages such as motion and d3 are
  resolved by the registry.
- CLI lockfile support helps track changes to copied files; review diffs before
  updating.
- The CLI package is MIT, but the root component source licence was not
  established.

## Alternatives in this repo

- [Evil Charts](../component-libraries/evil-charts.md) — A chart component
  library with a similar visual focus.
- [Re UI](../component-libraries/re-ui.md) — A broader registry of charts and
  application components.
- [Component Gallery](../component-libraries/component-gallery.md) — A discovery
  resource for comparing chart options.

## Sources

- [Dither Kit home and demos](https://www.tripwire.sh/dither-kit) — checked
  2026-10-07
- [GitHub repository](https://github.com/Boring-Software-Inc/dither-kit) —
  checked 2026-10-07
- [CLI package](https://www.npmjs.com/package/@dither-kit/cli) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
