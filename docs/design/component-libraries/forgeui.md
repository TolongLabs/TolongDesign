---
name: ForgeUI
slug: forgeui
section: Component Libraries
section_slug: component-libraries
source_url: 'https://forgeui.in/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Animated React and Tailwind components and templates.'
paywall: freemium
pricing_summary:
  'Free tier with core copy-paste components; Pro is $99 one-time (regular $169)
  for lifetime access.'
open_source: true
license: proprietary
category_tags: [react, tailwind, motion, shadcn, components]
best_for: [saas landing pages, animated blocks, marketing websites]
stack: [react, nextjs, tailwind, motion]
agent_friendly: true
last_verified: 2026-10-07
---

# ForgeUI

> Animated React and Tailwind components and templates. TolongLabs developers
> reach for ForgeUI when assembling marketing pages and SaaS dashboards that
> require eye-catching motion, GSAP polish, and direct shadcn/ui compatibility.

## At a glance

| Field          | Value                                                                             |
| -------------- | --------------------------------------------------------------------------------- |
| Source         | [forgeui.in](https://forgeui.in/)                                                 |
| Paywall        | **Freemium** — free components; Pro $99 one-time                                  |
| Open source    | Yes — permissive commercial ([GitHub](https://github.com/AmanShakya0018/forgeui)) |
| Type           | Component and marketing block library                                             |
| Works with     | React, Next.js, Tailwind CSS, Motion, GSAP                                        |
| Best for       | SaaS landing pages, animated headers, bento grids                                 |
| Agent-friendly | Yes — copy-paste source code and clean TypeScript                                 |

## What it is

ForgeUI is a curated component and marketing block library created by Aman
Shakya (@amanshakya0018). Built specifically for modern web teams leveraging
shadcn/ui, ForgeUI expands upon standard UI primitives with pre-styled, animated
marketing blocks and SaaS application sections.

The library catalogues over 200 components, blocks, illustrations, and complete
website templates. It specializes in interactive visual elements that typically
require substantial engineering time to configure, such as kinetic hero
sections, interactive pricing toggles, animated onboarding flows, reactor stream
visualizers, and bento grids.

ForgeUI components are engineered using Next.js, Tailwind CSS, Motion (formerly
Framer Motion), and GSAP. Because they adhere to shadcn conventions, they can be
copied directly into your project's codebase without creating vendor lock-in or
introducing heavy runtime wrappers.

## Paywall and pricing

- **Free:** A selection of foundational components, blocks, and visual effects
  are free to copy and use in personal or commercial projects.
- **Paid:** ForgeUI Pro provides lifetime all-access to the entire catalog of
  209+ components, marketing blocks, illustrations, and templates for a one-time
  payment of $99 (regularly $169). No recurring subscription fees.
- **Sign-up required?** No account needed to copy free components. Account and
  checkout required for Pro access.
- **Licence for client work:** Pro and free tiers grant full rights to build
  unlimited commercial projects, client websites, and SaaS apps. Reselling the
  components directly as a standalone UI kit is prohibited.

Verified on the official ForgeUI pricing page on 2026-10-07.

## How to use

1. Ensure your Next.js project has Tailwind CSS and Lucide React installed:

```bash
bun add motion lucide-react clsx tailwind-merge
```

2. Configure your standard Tailwind utility helper in `lib/utils.ts` (matching
   the shadcn/ui convention).
3. Browse `https://forgeui.in/` to locate the desired block (e.g., an animated
   hero section or interactive pricing calculator).
4. Copy the component code directly into your repository (e.g.,
   `components/forgeui/hero-section.tsx`) and customize content:

```tsx
import { HeroSection } from '@/components/forgeui/hero-section'

export default function Landing() {
  return (
    <main>
      <HeroSection
        title="Ship polished SaaS products faster"
        description="Production-ready components engineered for high conversion."
      />
    </main>
  )
}
```

## Examples

- [ForgeUI Introduction](https://forgeui.in/docs/introduction) — Setup guide
  detailing prerequisites, dependencies, and folder conventions.
- [Hero Section Blocks](https://forgeui.in/blocks/hero-section) — Animated hero
  blocks featuring badge counters, glowing gradients, and CTA layouts.
- [Header Navigation Blocks](https://forgeui.in/blocks/header) — Responsive
  navbars with blur backdrops, mobile sheet transitions, and drop-down menus.
- [Animated Form Component](https://forgeui.in/components/animated-form) —
  Multi-step interactive form component with fluid step transitions.

## When to use it

- Use it when building high-energy marketing sites and landing pages that need
  smooth motion effects and visual flair on top of shadcn/ui.
- Use it to rapidly assemble full page sections (headers, feature grids, hero
  blocks) with minimal styling effort.
- Skip it when you only need unstyled, accessibility-first primitive logic; use
  [Radix](../component-libraries/radix.md) or
  [Base UI](../component-libraries/base-ui.md) instead.

## Agent notes

- Agent-friendly: all component code is provided in clean, self-contained
  TypeScript with standard Tailwind CSS utility classes.
- Requires `motion` (or `framer-motion`) and occasionally `gsap` for specific
  complex timeline sequences.
- Fully compatible with standard shadcn/ui directory layouts and
  `components.json` configurations.

## Alternatives in this repo

- [shadcn/ui](../component-libraries/shadcn-ui.md) — The core open-source design
  system and component registry that ForgeUI builds upon.
- [21st.dev](../component-libraries/21st-dev.md) — Massive community marketplace
  and registry of shadcn-compatible components and animated UI.
- [Motion Primitives](../component-libraries/motion-primitives.md) — Focused,
  open-source animation primitives kit powered by Motion.

## Sources

- [Official site](https://forgeui.in/) — checked 2026-10-07
- [ForgeUI Pricing](https://forgeui.in/pricing) — checked 2026-10-07
- [GitHub Repository](https://github.com/AmanShakya0018/forgeui) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components)
