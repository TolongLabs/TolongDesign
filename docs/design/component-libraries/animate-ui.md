---
name: Animate UI
slug: animate-ui
section: Component Libraries
section_slug: component-libraries
source_url: https://animate-ui.com/
designeer_url: https://designeer.xyz/components
designeer_blurb: Accessible shadcn components animated with Motion.
paywall: free
pricing_summary: 'Completely free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [react, tailwind, motion, shadcn, accessible, components]
best_for: [web applications, accessible interfaces, micro-interactions]
stack: [react, nextjs, tailwind, framer-motion]
agent_friendly: true
last_verified: 2026-10-07
---

# Animate UI

> Accessible shadcn components animated with Motion. TolongLabs developers reach
> for Animate UI to upgrade traditional shadcn/ui components with fluid,
> accessible micro-interactions and transitions powered by Motion.

## At a glance

| Field          | Value                                                         |
| -------------- | ------------------------------------------------------------- |
| Source         | [animate-ui.com](https://animate-ui.com/)                     |
| Paywall        | **Free** — 100% free and open source                          |
| Open source    | Yes — MIT ([GitHub](https://github.com/imskyleen/animate-ui)) |
| Type           | Component library and animation primitives                    |
| Works with     | React, Next.js, Tailwind CSS, Motion, Radix UI                |
| Best for       | Web applications, accessible interfaces, micro-interactions   |
| Agent-friendly | Yes — copy-paste source, shadcn CLI registry                  |

## What it is

Animate UI is an open-source component distribution system created by Kyleen
(@imskyleen) that enhances standard shadcn/ui and Radix UI elements with
delightful, accessible animations powered by Motion (Framer Motion). It bridges
the gap between standard accessible headless primitives and high-end animated
interactions.

Unlike standalone animation libraries that provide only visual flair or
marketing decorations, Animate UI focuses directly on core application UI
controls: accordions, dialogs, dropdowns, tabs, popovers, and interactive
animated Lucide icons. Every component retains full keyboard navigation, screen
reader accessibility, and ARIA compliant semantics inherited from Radix UI and
Base UI.

The library adheres strictly to the copy-paste philosophy. Rather than locking
developers into a restrictive npm runtime abstraction, components are pulled
directly into the local codebase via the standard shadcn CLI registry, allowing
seamless customization and zero version conflicts.

## Paywall and pricing

- **Free:** The entire library, including all animated primitives, application
  components, text effects, background shaders, and animated icons, is 100% free
  and open source under the MIT licence.
- **Paid:** None. There are no paid tiers, no pro subscriptions, and no gated
  templates.
- **Sign-up required?** No. All components and code examples are immediately
  browsable and copyable without registration.
- **Licence for client work:** Distributed under the MIT licence. Free for
  commercial and client projects without royalties or restrictions.

Verified on the official Animate UI documentation and GitHub repository on
2026-10-07.

## How to use

1. Ensure your React or Next.js project has Tailwind CSS and shadcn/ui
   configured.

2. Install the necessary animation dependencies:

```bash
bun add motion lucide-react
```

3. Add an animated component directly using the shadcn registry CLI:

```bash
bunx --bun shadcn@latest add "https://animate-ui.com/r/accordion"
```

4. Import and render the animated component in your application code:

```tsx
'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/animate-ui/accordion'

export function FaqSection() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-lg">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          How does Animate UI differ from shadcn?
        </AccordionTrigger>
        <AccordionContent>
          It preserves all accessibility semantics while adding smooth spring
          physics transitions using Motion.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
```

## Examples

- [Animated Accordion](https://animate-ui.com/docs/components/radix/accordion) —
  An accessible Radix UI accordion enhanced with smooth height and content
  fades.
- [Animated Dialog](https://animate-ui.com/docs/components/radix/dialog) — Modal
  dialog component featuring scale, blur, and opacity entrance and exit
  transitions.
- [Animated Icons](https://animate-ui.com/docs/icons) — Interactive Lucide icons
  with motion-based hover and click state transformations.

## When to use it

- Use it when building product web applications and dashboards that already use
  shadcn/ui and Radix UI primitives, but need smoother, more expressive
  interactions.
- Use it when strict accessibility (WCAG compliance, screen reader support,
  keyboard focus rings) is non-negotiable.
- Skip it when you only need marketing hero sections, 3D globes, and decorative
  landing page banners; use [Magic UI](../component-libraries/magic-ui.md) or
  [Aceternity UI](../component-libraries/aceternity-ui.md) instead.
- Skip it when building Tailwind apps without React or Framer Motion; use
  [HyperUI](../component-libraries/hyperui.md) or
  [Flowbite](../component-libraries/flowbite.md) instead.

## Agent notes

- Official documentation URL: `https://animate-ui.com/docs`.
- Source repository: `https://github.com/imskyleen/animate-ui`.
- Compatible with
  `bunx --bun shadcn@latest add "https://animate-ui.com/r/<component>"`.
- Requires `motion` (or `framer-motion`) and `lucide-react` as peer
  dependencies.
- Next.js App Router requires `'use client'` on all Animate UI wrappers due to
  Motion spring animations.

## Alternatives in this repo

- [Magic UI](../component-libraries/magic-ui.md) — Animated components designed
  specifically for marketing and landing pages.
- [Base CN](../component-libraries/base-cn.md) — Sibling library rebuilding
  shadcn/ui primitives on unstyled Base UI.

## Sources

- [Animate UI Official Site](https://animate-ui.com/) — checked 2026-10-07
- [Animate UI GitHub Repository](https://github.com/imskyleen/animate-ui) —
  checked 2026-10-07
- [Animate UI Documentation](https://animate-ui.com/docs) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components)
