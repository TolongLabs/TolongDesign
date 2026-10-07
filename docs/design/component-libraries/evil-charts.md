---
name: 'Evil Charts'
slug: 'evil-charts'
section: 'Component Libraries'
section_slug: 'component-libraries'
source_url: 'https://evilcharts.com/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Animated SVG charts designed for shadcn/ui.'
paywall: free
pricing_summary: 'Free and MIT licensed; no paid tier was listed.'
open_source: true
license: MIT
category_tags: ['react', 'charts', 'svg', 'shadcn']
best_for: ['animated data charts', 'dashboard visualizations']
stack: ['react', 'tailwind', 'recharts', 'shadcn']
agent_friendly: true
last_verified: 2026-10-07
---

# Evil Charts

> Animated SVG charts designed for shadcn/ui.

A TolongLabs developer can reach for it when a React dashboard needs
configurable Recharts visualizations with animated SVG presentation.

## At a glance

| Field          | Value                                                      |
| -------------- | ---------------------------------------------------------- |
| Source         | [evilcharts.com](https://evilcharts.com/)                  |
| Paywall        | **Free** — Free and MIT licensed; no paid tier was listed. |
| Open source    | Yes — The official GitHub repository is MIT licensed.      |
| Type           | Animated chart registry for React and shadcn/ui            |
| Works with     | React, Recharts, Tailwind CSS, shadcn/ui                   |
| Best for       | animated data charts, dashboard visualizations             |
| Agent-friendly | Yes — documented source, CLI, or agent workflow            |

## What it is

Evil Charts is a collection of animated SVG charts for React, built around
Recharts and shadcn/ui conventions. It distributes chart components through a
registry.

The docs include composed, radar, area, and line chart examples. The component
source can be copied into the application and configured with project data.

The visual motion is the main distinction. Use chart animation to support data
reading, and provide a clear static or reduced-motion presentation where needed.

## Paywall and pricing

- **Free:** The chart registry and documented examples are free.
- **Paid:** Not published; no paid plan was listed.
- **Sign-up required?** No — public chart docs and registry commands do not
  require an account.
- **Licence for client work:** MIT permits commercial use subject to its notice
  and attribution terms.

Pricing and access were checked on 2026-10-07.

## How to use

1. Open the installation docs and choose the Recharts registry.
2. Add a named chart component with the shadcn CLI.
3. Pass the project data and chart configuration, then compose grid, axes, and
   data series as shown in the docs.

Install or add the documented component with:

```bash
npx shadcn@latest add @evilcharts/recharts-composed-chart
```

The official docs show this minimal usage or setup:

```tsx
import { EvilComposedChart } from '@/components/evilcharts/charts/recharts-composed-chart'

;<EvilComposedChart xDataKey="month" data={data} config={chartConfig}>
  <EvilComposedChart.Grid />
  <EvilComposedChart.XAxis dataKey="month" />
  <EvilComposedChart.Bar dataKey="revenue" variant="gradient" />
</EvilComposedChart>
```

## Examples

- [Composed chart](https://evilcharts.com/docs/recharts/composed-chart/static) —
  Combine chart series in one visualization.
- [Radar chart](https://evilcharts.com/docs/recharts/radar-chart/static) — Show
  multivariate values in a radar layout.
- [Area chart](https://evilcharts.com/docs/recharts/area-chart/static) — Display
  a time series with an area treatment.

## When to use it

- Use it when a React dashboard needs configurable Recharts visualizations with
  animated SVG presentation.

- Skip it for static data displays or non-React applications; compare
  [NumberFlow](../component-libraries/numberflow.md) for animated single values.

## Agent notes

- The install identifier follows the `@evilcharts/recharts-...` registry naming.
- The shown component API composes chart primitives and receives data plus a
  config object.
- Respect reduced-motion preferences and keep labels and tooltips
  understandable.

## Alternatives in this repo

- [NumberFlow](../component-libraries/numberflow.md) — Animated numeric values
  rather than full charts.
- [HeroUI](../component-libraries/heroui.md) — General React UI components for
  dashboard controls.
- [Spectrum UI](../component-libraries/spectrum-ui.md) — SaaS components and
  blocks beyond charting.

## Sources

- [Official site](https://evilcharts.com/) — checked 2026-10-07
- [Installation](https://evilcharts.com/docs/recharts/installation) — checked
  2026-10-07
- [Composed chart](https://evilcharts.com/docs/recharts/composed-chart/static) —
  checked 2026-10-07
- [Radar chart](https://evilcharts.com/docs/recharts/radar-chart/static) —
  checked 2026-10-07
- [Area chart](https://evilcharts.com/docs/recharts/area-chart/static) — checked
  2026-10-07
- [GitHub repository](https://github.com/legions-developer/evilcharts) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
