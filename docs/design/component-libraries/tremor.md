---
name: Tremor
slug: tremor
section: Component Libraries
section_slug: component-libraries
source_url: https://tremor.so/
designeer_url: https://designeer.xyz/components
designeer_blurb: Modular React library for building dashboards.
paywall: free
pricing_summary: 'Completely free and open source under the Apache-2.0 licence.'
open_source: true
license: Apache-2.0
category_tags:
  [react, tailwind, dashboards, charts, analytics, data-visualization]
best_for: [dashboards, internal tools, analytics, data visualization]
stack: [react, tailwind]
agent_friendly: true
last_verified: 2026-10-07
---

# Tremor

> Modular React library for building dashboards. TolongLabs developers reach for
> Tremor to construct data-rich dashboards, KPI cards, and analytical charts
> with opinionated, clean design and seamless Tailwind CSS integration.

## At a glance

| Field          | Value                                                             |
| -------------- | ----------------------------------------------------------------- |
| Source         | [tremor.so](https://tremor.so/)                                   |
| Paywall        | **Free** — 100% free and open source                              |
| Open source    | Yes — Apache-2.0 ([GitHub](https://github.com/tremorlabs/tremor)) |
| Type           | Dashboard component library and visualization primitives          |
| Works with     | React, Next.js, Tailwind CSS, Radix UI                            |
| Best for       | Dashboards, internal tools, analytics, data visualization         |
| Agent-friendly | Yes — npm package, Tremor Raw copy-paste code, TypeScript         |

## What it is

Tremor is an open-source React component library purpose-built for creating
dashboards, analytics applications, and internal enterprise tools. Founded by
Tremor Labs and backed by Y Combinator, it translates complex charting and
metric display patterns into clean, accessible React components styled with
Tailwind CSS.

Building analytics interfaces usually requires stitching together multiple
incompatible dependencies: low-level chart canvas tools, separate form controls,
color tokens, and tooltip engines. Tremor unifies these requirements by
providing cohesive components—such as AreaChart, BarChart, DonutChart,
SparkAreaChart, Metric, Tracker, and Card—that look professionally styled right
out of the box.

Tremor provides both a standalone npm package (`@tremor/react`) and "Tremor
Raw", a copy-and-paste architecture modelled after shadcn/ui. In Tremor Raw,
components are built directly on Radix UI primitives and Tailwind CSS, giving
developers total control to customize typography, layout, and theming directly
in their source files.

## Paywall and pricing

- **Free:** The complete component library, Tremor Raw primitives, and charting
  elements are 100% free and open source under the Apache-2.0 licence.
- **Paid:** None. There are no paid tiers, subscriptions, or paywalled charts.
- **Sign-up required?** No account is required to install the npm package, copy
  Tremor Raw components, or view documentation.
- **Licence for client work:** Released under the Apache-2.0 licence. Fully
  permitted for use in commercial, proprietary, and client web applications
  without royalty fees.

Verified on the official Tremor documentation and repository on 2026-10-07.

## How to use

1. Install Tremor into your React or Next.js project:

```bash
bun add @tremor/react
```

2. Add Tremor's paths to your `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
```

3. Render a dashboard KPI card with an area chart in your application:

```tsx
'use client'

import { Card, Metric, Text, AreaChart } from '@tremor/react'

const chartdata = [
  { date: 'Jan 26', SemiAnalysis: 2890, 'The Pragmatic Engineer': 2338 },
  { date: 'Feb 26', SemiAnalysis: 2756, 'The Pragmatic Engineer': 2103 },
  { date: 'Mar 26', SemiAnalysis: 3322, 'The Pragmatic Engineer': 2194 },
  { date: 'Apr 26', SemiAnalysis: 3470, 'The Pragmatic Engineer': 2108 }
]

export function DashboardMetric() {
  return (
    <Card className="max-w-md mx-auto">
      <Text>Active Subscribers</Text>
      <Metric>3,470</Metric>
      <AreaChart
        className="h-72 mt-4"
        data={chartdata}
        index="date"
        categories={['SemiAnalysis', 'The Pragmatic Engineer']}
        colors={['indigo', 'cyan']}
      />
    </Card>
  )
}
```

## Examples

- [Area Chart Component](https://www.tremor.so/docs/components/area-chart) —
  Interactive time-series area charts with smooth curves and hover tooltips.
- [Bar Chart Component](https://www.tremor.so/docs/components/bar-chart) —
  Categorical bar and column charts supporting stacked and grouped layouts.
- [Card Component](https://www.tremor.so/docs/components/card) — Structured
  dashboard container card with padding, borders, and dark mode tokens.

## When to use it

- Use it when developing metrics dashboards, administrative backends, SaaS
  reporting portals, or internal business intelligence tools.
- Use it when you need clean, accessible charts and metric widgets that match
  Tailwind CSS design conventions without configuring D3 from scratch.
- Skip it when building consumer-facing marketing landing pages with rich 3D
  motion; use [Magic UI](../component-libraries/magic-ui.md) or
  [Aceternity UI](../component-libraries/aceternity-ui.md) instead.
- Skip it when building non-React applications; use
  [Preline UI](../component-libraries/preline-ui.md) or
  [Flowbite](../component-libraries/flowbite.md) instead.

## Agent notes

- Official documentation URL: `https://www.tremor.so/docs`.
- GitHub repository: `https://github.com/tremorlabs/tremor`.
- In Next.js App Router, Tremor components containing charts rely on Recharts
  and browser DOM dimensions, requiring the `'use client'` directive.
- Ensure `./node_modules/@tremor/**/*.{js,ts,jsx,tsx}` is configured in your
  `tailwind.config.js` `content` array so Tremor utility classes are compiled.

## Alternatives in this repo

- [Preline UI](../component-libraries/preline-ui.md) — Comprehensive Tailwind
  component library with deep dashboard layouts and interactive plugins.
- [Flowbite](../component-libraries/flowbite.md) — Multi-framework Tailwind
  component library featuring charts, modals, and datatables.

## Sources

- [Tremor Official Site](https://tremor.so/) — checked 2026-10-07
- [Tremor Documentation](https://www.tremor.so/docs) — checked 2026-10-07
- [Tremor GitHub Repository](https://github.com/tremorlabs/tremor) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components)
