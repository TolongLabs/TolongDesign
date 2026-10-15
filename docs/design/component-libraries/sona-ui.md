---
name: Sona UI
slug: sona-ui
section: Component Libraries
section_slug: component-libraries
source_url: https://www.sonaui.com/
designeer_url: https://designeer.xyz/components
designeer_blurb: Animated React components you fully own.
paywall: free
pricing_summary: 'Free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [react, tailwind, motion, shadcn, components]
best_for: [interactive web applications, micro-interactions, showcases]
stack: ['react', 'tailwind', 'motion', 'shadcn']
execution_mode: registry
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Sona UI

> Animated React components you fully own. TolongLabs developers reach for Sona
> UI to integrate thoughtful spring motion, micro-interactions, and visual
> effects into React applications without taking on opaque package dependencies.

## At a glance

| Field          | Value                                                                |
| -------------- | -------------------------------------------------------------------- |
| Source         | [sonaui.com](https://www.sonaui.com/)                                |
| Paywall        | **Free** — 100% free and open source                                 |
| Open source    | Yes — MIT ([GitHub](https://github.com/Dinil-Thilakarathne/sona-ui)) |
| Type           | Component library and shadcn registry                                |
| Works with     | React 19, Tailwind CSS v4, Motion (`motion`)                         |
| Best for       | Interactive web applications, micro-interactions, showcases          |
| Agent-friendly | Yes — shadcn CLI registry, copy-paste components, agent docs         |

## What it is

Sona UI is an open-source React component library and registry created by Dinil
Thilakarathne (@codebydinil). It provides animated, accessible UI elements built
natively on React 19, Tailwind CSS 4, and Motion.

Rather than being distributed as an immutable npm bundle, Sona UI follows the
shadcn distribution model: components are copied directly into your codebase.
This gives developers unconstrained ownership to adapt animation curves,
Tailwind utility classes, and markup semantics to match exact brand
requirements.

The component catalog spans both foundational controls and expressive creative
widgets:

- **Interactive Controls:** Fluid tabs (`fluid-tabs`), morphing surface
  containers (`morph-surface`), animated switches, hold-to-delete buttons,
  expanding action bars, and magnetic buttons.
- **Micro-Interactions:** Ripple buttons, bubble-up interactions, and fluid
  sliders with spring feedback.
- **Typography & Motion:** Spinning circular text, staggered split text
  animations, and smooth marquees.
- **Visual Displays:** Radial card marquees, 3D depth tiles, and pointer-driven
  image trail effects.

All components come typed in TypeScript, support full keyboard navigation and
ARIA attributes, and automatically respect `prefers-reduced-motion` settings.

## Paywall and pricing

- **Free:** The complete component catalog, Motion Lab tool, documentation, and
  registry are 100% free and open source.
- **Paid:** None.
- **Sign-up required?** No.
- **Licence for client work:** Released under the MIT licence. Completely
  permissible for commercial client websites and SaaS applications.

Checked on the official website and repository on 2026-10-07.

## How to use

1. Add the Sona UI registry to your project's `components.json`:

```json
{
  "registries": {
    "@sona-ui": {
      "url": "https://sonaui.com/r/{name}.json"
    }
  }
}
```

2. Install a component using the shadcn CLI:

```bash
bunx --bun shadcn@latest add @sona-ui/fluid-tabs
```

3. Import and render the component within your React project:

```tsx
'use client'

import { FluidTabs } from '@/components/ui/fluid-tabs'

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'settings', label: 'Settings' }
]

export function NavigationTabs() {
  return (
    <div className="p-4">
      <FluidTabs tabs={tabs} defaultValue="overview" />
    </div>
  )
}
```

## Examples

- [Fluid Tabs Component](https://www.sonaui.com/docs/fluid-tabs) — Interactive
  demonstration of spring-animated tab highlight tracking.
- [Morph Surface Component](https://www.sonaui.com/docs/morph-surface) — Smooth
  layout morphing container between compact and expanded states.
- [Sona UI Motion Lab](https://www.sonaui.com/tools/motion-lab) — Interactive
  tuning sandbox for inspecting spring physics and dampening coefficients.

## When to use it

- Use it when crafting modern SaaS dashboards, interactive portfolios, or
  landing pages that benefit from tactile button physics and smooth transitions.
- Use it when your stack is built on React 19, Tailwind v4, and Motion.
- Skip it when building static multi-page Astro sites where minimal client
  JavaScript is preferred; consider [Bearnie](../component-libraries/bearnie.md)
  instead.

## Agent notes

- Official documentation URL: `https://www.sonaui.com/docs/home`.
- GitHub repository: `https://github.com/Dinil-Thilakarathne/sona-ui`.
- Compatible with shadcn CLI via `@sona-ui/<component>`.
- Requires Motion (`motion` package) as an animation peer dependency.

## Alternatives in this repo

- [Nexvyn UI](../component-libraries/nexvyn-ui.md) — Sibling React registry with
  focus on design engineer micro-interactions.
- [Fluid Functionalism](../component-libraries/fluid-functionalism.md) —
  Component library emphasizing functional physical motion across Radix and Base
  UI.
- [interior-dev](../component-libraries/interior-dev.md) — Micro-interactions
  and instant feedback states for interactive elements.

## Sources

- [Sona UI Official Website](https://www.sonaui.com/) — checked 2026-10-07
- [Sona UI Documentation](https://www.sonaui.com/docs/home) — checked 2026-10-07
- [Sona UI GitHub Repository](https://github.com/Dinil-Thilakarathne/sona-ui) —
  checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components)
