---
name: Magic UI
slug: magic-ui
section: Component Libraries
section_slug: component-libraries
source_url: https://magicui.design/
designeer_url: https://designeer.xyz/components
designeer_blurb: Animated components crafted for landing pages.
paywall: freemium
pricing_summary:
  'Free open-source components under MIT; Pro tiers start at $19/month or $199
  one-time lifetime.'
open_source: true
license: MIT
category_tags: [react, tailwind, animations, framer-motion, landing-pages]
best_for: [marketing sites, landing pages, hero sections]
stack: ['react', 'nextjs', 'tailwind', 'motion']
execution_mode: registry
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Magic UI

> Animated components crafted for landing pages. TolongLabs developers reach for
> Magic UI to quickly add polished, eye-catching animated interactions and
> visual accents to Next.js marketing landing pages.

## At a glance

| Field          | Value                                                          |
| -------------- | -------------------------------------------------------------- |
| Source         | [magicui.design](https://magicui.design/)                      |
| Paywall        | **Freemium** — free core components; Pro from $19/mo or $199   |
| Open source    | Yes — MIT ([GitHub](https://github.com/magicuidesign/magicui)) |
| Type           | Component library and animation primitives                     |
| Works with     | React, Next.js, Tailwind CSS, Motion                           |
| Best for       | Marketing sites, landing pages, hero sections                  |
| Agent-friendly | Yes — copy-paste source, shadcn CLI registry                   |

## What it is

Magic UI is a curated library of animated React components created by Dillion
Verma, tailored specifically for high-converting landing pages and marketing
websites. Built on top of Tailwind CSS, React, and Motion (formerly Framer
Motion), it provides ready-to-use visual elements such as interactive grids,
background effects, dynamic text transitions, and kinetic cards.

Rather than acting as a traditional monolithic npm dependency, Magic UI follows
the distribution model popularized by shadcn/ui. Components are distributed as
raw source code via the shadcn CLI or direct copy-paste snippets. Developers
retain full ownership and control of the code inside their project repository,
making styling adjustments and dependency tuning seamless.

Magic UI distinguishes itself from traditional UI libraries like Radix UI or
Headless UI by focusing squarely on marketing aesthetics rather than basic
application controls. Instead of plain form inputs or standard dialogs, it
specializes in attention-grabbing visual features like marquee carousels, 3D
globes, animated borders, and bento grid layouts.

## Paywall and pricing

- **Free:** The core open-source component library (over 50 animated components
  including Marquee, Bento Grid, Globe, Animated Beam, and Border Beam) is
  completely free under the MIT licence.
- **Paid:** Magic UI Pro offers pre-assembled premium landing page templates and
  full-page sections. Pricing plans include Creator at $19/month, Studio at
  $49/month (up to 5 team members), or a lifetime All-Access option typically
  priced at $199 one-time.
- **Sign-up required?** No account is required to browse and copy the free
  open-source components. An account is required for purchasing Pro templates.
- **Licence for client work:** Free MIT components may be used in unlimited
  commercial and client projects without restriction. Pro purchases include
  commercial usage rights for client websites and SaaS applications.

Verified on the official Magic UI documentation and Pro pricing pages on
2026-10-07.

## How to use

1. Ensure your React or Next.js project has Tailwind CSS and the shadcn/ui CLI
   configured.

2. Install the necessary animation dependencies:

```bash
bun add motion clsx tailwind-merge
```

3. Add a component using the shadcn registry CLI:

```bash
bunx --bun shadcn@latest add "https://magicui.design/r/marquee"
```

4. Import and render the component in your page:

```tsx
import { Marquee } from '@/components/magicui/marquee'

const reviews = [
  { name: 'Alice', body: 'Transformed our landing page conversion rates.' },
  { name: 'Bob', body: 'The animations feel silky smooth out of the box.' }
]

export function TestimonialsSection() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((rev) => (
          <div key={rev.name} className="mx-4 rounded-xl border p-4 bg-card">
            <p className="font-semibold">{rev.name}</p>
            <p className="text-sm text-muted-foreground">{rev.body}</p>
          </div>
        ))}
      </Marquee>
    </div>
  )
}
```

## Examples

- [Marquee Component](https://magicui.design/docs/components/marquee) — An
  infinite smooth scrolling marquee for social proof logos and testimonial
  tickers.
- [Bento Grid Component](https://magicui.design/docs/components/bento-grid) — A
  responsive visual grid layout for showcasing modern product features.
- [Globe Component](https://magicui.design/docs/components/globe) — An
  interactive canvas-based 3D globe animation for enterprise and network
  visualizations.

## When to use it

- Use it when designing modern SaaS landing pages, portfolio sites, or startup
  launches that require subtle, high-end motion design without building shaders
  or complex canvas math from scratch.
- Use it when your project already uses Tailwind CSS and shadcn/ui, making
  integration frictionless.
- Skip it when you are building complex data-heavy admin dashboards with minimal
  animation needs; use [Tremor](../component-libraries/tremor.md) instead.
- Skip it when you only need foundational unstyled accessible primitives; use
  [Headless UI](../component-libraries/headless-ui.md) instead.

## Agent notes

- Official documentation URL: `https://magicui.design/docs`.
- Components are compatible with the official `shadcn` CLI registry format,
  meaning coding agents can run `bunx --bun shadcn@latest add @magicui/<name>`
  or specify direct registry URLs.
- Requires Tailwind CSS and `motion` (or `framer-motion`). Ensure utility
  helpers like `cn` (`clsx` + `tailwind-merge`) exist in `@/lib/utils`.
- In Next.js App Router, animated components that use hooks or browser APIs
  require the `'use client'` directive.

## Alternatives in this repo

- [Aceternity UI](../component-libraries/aceternity-ui.md) — Sibling library
  offering trendsetting visual components and complex 3D canvas effects.
- [Animate UI](../component-libraries/animate-ui.md) — Motion-enhanced
  primitives designed specifically to upgrade standard shadcn/ui elements.

## Sources

- [Magic UI Official Site](https://magicui.design/) — checked 2026-10-07
- [Magic UI Documentation](https://magicui.design/docs) — checked 2026-10-07
- [Magic UI GitHub Repository](https://github.com/magicuidesign/magicui) —
  checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components)
