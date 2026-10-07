---
name: Aceternity UI
slug: aceternity-ui
section: Component Libraries
section_slug: component-libraries
source_url: https://ui.aceternity.com/
designeer_url: https://designeer.xyz/components
designeer_blurb: Trendy animated components and hero sections.
paywall: freemium
pricing_summary:
  'Free open-source components under MIT; All-Access Pro is $169/year, $199
  one-time lifetime, or $1,590 for teams.'
open_source: true
license: MIT
category_tags: [react, tailwind, framer-motion, 3d, hero-sections, components]
best_for: [landing pages, marketing websites, hero sections]
stack: [react, nextjs, tailwind, framer-motion]
agent_friendly: true
last_verified: 2026-10-07
---

# Aceternity UI

> Trendy animated components and hero sections. TolongLabs developers reach for
> Aceternity UI to integrate bold, visually complex animated effects like 3D
> cards, spotlight beams, and hero parallax layouts into React and Next.js web
> applications.

## At a glance

| Field          | Value                                                         |
| -------------- | ------------------------------------------------------------- |
| Source         | [ui.aceternity.com](https://ui.aceternity.com/)               |
| Paywall        | **Freemium** — 200+ free components; Pro from $169/yr or $199 |
| Open source    | Yes — MIT ([GitHub](https://github.com/aceternity/ui))        |
| Type           | Component library and visual effect kit                       |
| Works with     | React, Next.js, Tailwind CSS, Framer Motion                   |
| Best for       | Landing pages, marketing websites, hero sections              |
| Agent-friendly | Yes — copy-paste code, CLI-friendly, shadcn compatible        |

## What it is

Aceternity UI is a showcase of animated React components created by Manu Arora.
Designed to capture cutting-edge visual trends in web design, it equips
developers with dramatic UI elements that normally require advanced Three.js,
Framer Motion, and custom SVG math. Components include interactive 3D cards,
background lamps, floating docks, spark lines, and grid pattern shaders.

Like shadcn/ui, Aceternity UI does not operate as an npm dependency wrapper.
Instead, it provides accessible, customizable source code intended to be copied
directly into project repositories. Each component relies on standard Tailwind
CSS utility classes, Framer Motion transitions, and occasionally Three.js or
HTML5 Canvas scripts.

The distinguishing trait of Aceternity UI is its high visual impact. While
traditional component systems emphasize understated forms and tables, Aceternity
is built specifically for hero sections, feature grids, and landing page
centerpieces that demand immediate user attention and modern design credibility.

## Paywall and pricing

- **Free:** Over 200 components (such as 3D Card Effect, Lamp Effect, Hero
  Parallax, Sparkles, and Background Beams) are 100% free and open source under
  the MIT licence.
- **Paid:** Aceternity UI Pro / All-Access unlocks over 200 premium blocks and
  full landing page templates. Annual Access costs $169/year, Lifetime Access
  costs a one-time fee of $199, and Team Access (up to 10 members) costs $1,590
  one-time.
- **Sign-up required?** No account is needed to view documentation or copy free
  component source code. An account is required for Pro purchases.
- **Licence for client work:** Free MIT components may be used in unlimited
  commercial, proprietary, and client projects without royalties. Pro templates
  and blocks grant commercial usage rights for client work and SaaS.

Verified on the official Aceternity UI website and pricing documentation on
2026-10-07.

## How to use

1. Install prerequisite utility libraries in your Next.js or React application:

```bash
bun add framer-motion clsx tailwind-merge
```

2. If using components with 3D or canvas elements, install optional peer
   libraries as indicated in their specific component docs:

```bash
bun add three @types/three @react-three/fiber
```

3. Configure your Tailwind setup with the required animation utilities or copy
   the component directly from the documentation site into your project:

```tsx
'use client'

import React from 'react'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'

export function ProductCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Interactive 3D Display
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to observe the multi-layer depth perspective.
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}
```

## Examples

- [3D Card Effect](https://ui.aceternity.com/components/3d-card-effect) — A card
  component that tilts and separates inner layers in 3D space on mouse hover.
- [Lamp Effect](https://ui.aceternity.com/components/lamp-effect) — A theatrical
  glowing lamp hero backdrop commonly used in modern developer tool homepages.
- [Hero Parallax](https://ui.aceternity.com/components/hero-parallax) — A
  multi-row scrolling grid with dynamic perspective transforms linked to scroll
  offset.

## When to use it

- Use it when crafting flagship marketing pages, startup landing sites, or
  developer portfolio projects where visual polish and memorable interactions
  are critical.
- Use it when you need specific complex interactions (like spotlights, 3D pins,
  or text reveals) without writing custom WebGL or canvas logic.
- Skip it when building functional, high-density data tables and admin tools;
  reach for [Tremor](../component-libraries/tremor.md) instead.
- Skip it when building minimal, animation-free corporate sites where extra
  JavaScript bundles for Framer Motion or Three.js are undesirable.

## Agent notes

- Official documentation URL: `https://ui.aceternity.com/components`.
- Many Aceternity components require the `'use client'` directive in Next.js App
  Router due to mouse tracking hooks and Framer Motion state.
- Ensure the `cn` helper exists at `@/lib/utils` before pasting components.
- Components using Canvas or Three.js may trigger SSR hydration mismatches if
  rendered before client mount; wrap them in client-only guards or dynamic
  imports with `ssr: false` when necessary.

## Alternatives in this repo

- [Magic UI](../component-libraries/magic-ui.md) — Closely related landing page
  animation library with a strict shadcn registry CLI integration.
- [Animate UI](../component-libraries/animate-ui.md) — Motion-enhanced
  primitives focused on standard interactive controls.

## Sources

- [Aceternity UI Official Site](https://ui.aceternity.com/) — checked 2026-10-07
- [Aceternity UI Pricing](https://ui.aceternity.com/pricing) — checked
  2026-10-07
- [Aceternity UI Components](https://ui.aceternity.com/components) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components)
