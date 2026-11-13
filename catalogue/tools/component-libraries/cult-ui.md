---
name: 'Cult UI'
slug: 'cult-ui'
section: 'Component Libraries'
section_slug: 'component-libraries'
source_url: 'https://www.cult-ui.com/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Animated React components with Framer Motion.'
paywall: freemium
pricing_summary:
  'Free components are available; Cult UI Pro was listed at $129 one-time during
  a sale ($179 regular price).'
open_source: true
license: MIT
category_tags: ['react', 'animation', 'tailwind', 'shadcn', 'motion']
best_for: ['animated interfaces', 'marketing pages']
stack: ['react', 'tailwind', 'shadcn', 'motion']
execution_mode: registry
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Cult UI

> Animated React components with Framer Motion.

A TolongLabs developer can reach for it when a React page needs a polished
animated detail or the team wants shadcn-compatible source it can edit.

## At a glance

| Field          | Value                                                                                                                     |
| -------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Source         | [www.cult-ui.com](https://www.cult-ui.com/)                                                                               |
| Paywall        | **Freemium** — Free components are available; Cult UI Pro was listed at $129 one-time during a sale ($179 regular price). |
| Open source    | Yes — The free public components are MIT licensed; Pro blocks and templates are a separate paid offering.                 |
| Type           | Animated React and shadcn component registry                                                                              |
| Works with     | React, Tailwind CSS, shadcn/ui, Motion                                                                                    |
| Best for       | animated interfaces, marketing pages                                                                                      |
| Agent-friendly | Yes — documented source, CLI, or agent workflow                                                                           |

## What it is

Cult UI is an animated React component registry that distributes local source
through shadcn-compatible commands. The public library includes interaction and
visual effects built with motion.

The checked site listed 154 free open-source components. A separate Pro product
adds blocks, components, and templates under a paid licence.

The component docs include install commands and usage examples, making the
collection suitable for both direct developer use and agent retrieval.

## Paywall and pricing

- **Free:** The site lists 154 animated open-source components that can be
  installed from the registry.
- **Paid:** Cult UI Pro was listed at $129 one-time sale price, with a stated
  regular price of $179, for additional blocks, components, and templates.
- **Sign-up required?** No — free docs and registry pages are public; Pro
  content requires purchase.
- **Licence for client work:** MIT applies to the open-source components; verify
  the separate Pro licence for paid blocks and templates.

Pricing and access were checked on 2026-10-07.

## How to use

1. Choose a component in the docs and review its dependencies and usage.
2. Add it through the documented shadcn registry command, then import the copied
   component in the app.
3. For Pro blocks, confirm purchase access and licence terms; do not assume the
   free MIT licence covers paid templates.

Install or add the documented component with:

```bash
pnpm dlx shadcn@latest add https://cult-ui.com/r/animated-number.json
```

The official docs show this minimal usage or setup:

```tsx
import { AnimatedNumber } from '@/components/ui/animated-number'

;<AnimatedNumber value={value} />
```

## Examples

- [Animated Number](https://www.cult-ui.com/docs/components/animated-number) —
  Animate a changing numeric value.
- [Halo Search](https://www.cult-ui.com/docs/components/halo-search) — Search
  control with a halo visual treatment.
- [Tabs Illustration Vercel](https://www.cult-ui.com/docs/components/tabs-illustration-vercel)
  — Tabbed content with a visual illustration panel.

## When to use it

- Use it when a React page needs a polished animated detail or the team wants
  shadcn-compatible source it can edit.

- Skip it when a neutral component system or an entirely open-source block
  catalogue is required; compare [HeroUI](../component-libraries/heroui.md) or
  [blocks.so](../component-libraries/blocks-so.md).

## Agent notes

- The registry command can use a direct component JSON URL shown on the docs
  page.
- Free components are MIT; Pro blocks and templates are separately licensed.
- Check dependencies and motion behavior before adding a component to a shared
  design system.

## Alternatives in this repo

- [Fancy Components](../component-libraries/fancy-components.md) — Playful
  components with an MIT licence.
- [React Bits](../component-libraries/react-bits.md) — Animated effects and Pro
  page blocks.
- [Spectrum UI](../component-libraries/spectrum-ui.md) — SaaS components with
  MCP access.

## Sources

- [Official site](https://www.cult-ui.com/) — checked 2026-10-07
- [Installation](https://www.cult-ui.com/docs/installation) — checked 2026-10-07
- [Animated Number](https://www.cult-ui.com/docs/components/animated-number) —
  checked 2026-10-07
- [Halo Search](https://www.cult-ui.com/docs/components/halo-search) — checked
  2026-10-07
- [Tabs Illustration](https://www.cult-ui.com/docs/components/tabs-illustration-vercel)
  — checked 2026-10-07
- [Pro pricing](https://pro.cult-ui.com/pricing?affonso=newcult.co) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
