---
name: Eldora UI
slug: eldora-ui
section: Component Libraries
section_slug: component-libraries
source_url: https://eldoraui.site/
designeer_url: https://designeer.xyz/components
designeer_blurb: Animated components tailored for web landings.
paywall: free
pricing_summary: 'Completely free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags:
  [react, tailwind, framer-motion, animations, landing-pages, components]
best_for: [landing pages, marketing websites, interactive portfolios]
stack: ['react', 'nextjs', 'tailwind', 'motion']
execution_mode: snippet
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Eldora UI

> Animated components tailored for web landings. TolongLabs developers reach for
> Eldora UI to enhance React and Next.js landing pages with over 150 free,
> animated UI components, kinetic text effects, and interactive visual blocks.

## At a glance

| Field          | Value                                                             |
| -------------- | ----------------------------------------------------------------- |
| Source         | [eldoraui.site](https://eldoraui.site/)                           |
| Paywall        | **Free** — 100% free and open source                              |
| Open source    | Yes — MIT ([GitHub](https://github.com/karthikmudunuri/eldoraui)) |
| Type           | Component library and animation primitives                        |
| Works with     | React, Next.js, Tailwind CSS, Framer Motion                       |
| Best for       | Landing pages, marketing websites, interactive portfolios         |
| Agent-friendly | Yes — copy-paste code snippets, CLI integration                   |

## What it is

Eldora UI is an open-source library of over 150 animated components, visual
effects, and layout blocks created by Karthik Mudunuri. Designed to empower
developers building modern web landings, it combines React, Next.js, Tailwind
CSS, and Framer Motion into production-ready UI elements.

Like shadcn/ui and Magic UI, Eldora UI embraces the copy-paste distribution
model. Instead of locking projects into an external package dependency with
opinionated styles, it offers source code that developers can copy and customize
directly within their codebase.

The component collection spans expressive text reveals, kinetic buttons, shimmer
cards, animated carousels, background gradients, and interactive bento grids.
Every component is designed to work smoothly with Tailwind CSS styling
conventions and supports dark mode out of the box.

## Paywall and pricing

- **Free:** The complete library of over 150 components and templates is 100%
  free and open source under the MIT licence.
- **Paid:** None. Eldora UI does not feature paid tiers, subscriptions, or
  locked premium components.
- **Sign-up required?** No. All components are accessible without registration.
- **Licence for client work:** Released under the MIT licence. Permitted for use
  in commercial, client, and proprietary websites without licensing fees.

Verified on the official Eldora UI website and GitHub repository on 2026-10-07.

## How to use

1. Install prerequisite animation and utility dependencies:

```bash
bun add motion clsx tailwind-merge
```

2. Copy the desired component from Eldora UI into your project:

```tsx
'use client'

import React from 'react'

export function ShimmerButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {children}
      </span>
    </button>
  )
}
```

3. Render the component in your application layout:

```tsx
export function HeroCTA() {
  return (
    <div className="flex justify-center p-8">
      <ShimmerButton>Explore Features</ShimmerButton>
    </div>
  )
}
```

## Examples

- [Eldora UI Components](https://www.eldoraui.site/components) — Interactive
  showcase of buttons, text effects, backgrounds, and layout widgets.
- [Eldora UI Portfolio Template](https://www.eldoraui.site/docs/templates/portfolio)
  — Portfolio starter template showcasing integrated components and layout.
- [Eldora UI GitHub Repository](https://github.com/karthikmudunuri/eldoraui) —
  Source code repository containing all component implementations.

## When to use it

- Use it when you want to add fluid motion and modern landing page accents to a
  Next.js or React application for free.
- Use it when you need animated buttons, text revealers, or glowing card effects
  that copy directly into your repository.
- Skip it when you are building dense data analytics dashboards; use
  [Tremor](../component-libraries/tremor.md) instead.
- Skip it when you only need unstyled headless primitives; use
  [Headless UI](../component-libraries/headless-ui.md) instead.

## Agent notes

- Official documentation URL: `https://www.eldoraui.site/`.
- GitHub repository: `https://github.com/karthikmudunuri/eldoraui`.
- Requires `motion` (or `framer-motion`) and standard `cn` helper (`clsx` +
  `tailwind-merge`).
- Components using Framer Motion animations or window scroll hooks must include
  the `'use client'` directive in Next.js App Router.

## Alternatives in this repo

- [Magic UI](../component-libraries/magic-ui.md) — Animated components for
  landing pages with official shadcn CLI registry support.
- [Aceternity UI](../component-libraries/aceternity-ui.md) — Trendsetting
  animated components and complex 3D visual effects.

## Sources

- [Eldora UI Official Site](https://www.eldoraui.site/) — checked 2026-10-07
- [Eldora UI GitHub Repository](https://github.com/karthikmudunuri/eldoraui) —
  checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components)
