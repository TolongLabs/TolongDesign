---
name: 'Opensource UI'
slug: 'opensource-ui'
section: 'Component Libraries'
section_slug: 'component-libraries'
source_url: 'https://opensourceui.in/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Copy-paste React UI and device mockups.'
paywall: free
pricing_summary: 'Free and MIT licensed; no paid tier was listed.'
open_source: true
license: MIT
category_tags: ['react', 'nextjs', 'tailwind', 'copy-paste']
best_for: ['quick-start ui', 'device mockups']
stack: ['react', 'nextjs', 'tailwind']
execution_mode: snippet
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Opensource UI

> Copy-paste React UI and device mockups.

A TolongLabs developer can reach for it when the team wants direct ownership of
small React components or needs device and browser mockups.

## At a glance

| Field          | Value                                                                                            |
| -------------- | ------------------------------------------------------------------------------------------------ |
| Source         | [opensourceui.in](https://opensourceui.in/)                                                      |
| Paywall        | **Free** — Free and MIT licensed; no paid tier was listed.                                       |
| Open source    | Yes — The official site states that components are MIT licensed for personal and commercial use. |
| Type           | Copy-paste React component catalogue                                                             |
| Works with     | React, Next.js, TypeScript, Tailwind CSS                                                         |
| Best for       | quick-start UI, device mockups                                                                   |
| Agent-friendly | Yes — documented source, CLI, or agent workflow                                                  |

## What it is

Opensource UI is a catalogue of copy-paste React and Next.js interface
components, including buttons, forms, loaders, tables, social cards, and device
mockups.

The checked components index listed 207 components in 30 categories. Each
component page describes its dependencies and shows source usage rather than
requiring a single bundled package.

Its device mockups are useful when product screenshots need a browser, phone,
tablet, or computer frame without sourcing a separate asset.

## Paywall and pricing

- **Free:** The public component source and device mockups are available free.
- **Paid:** Not published; no paid plan was listed.
- **Sign-up required?** No — public component pages can be browsed and copied
  without sign-up.
- **Licence for client work:** The stated MIT licence permits commercial and
  client work; keep the licence notice where applicable.

Pricing and access were checked on 2026-10-07.

## How to use

1. Browse the component index by category and open a component page.
2. Copy the TypeScript source into the project and add the dependencies listed
   on that page.
3. Update imports and utility classes to match the app, then verify the
   component at the project breakpoints.

Install or add the documented component with:

```bash
bun add clsx tailwind-merge lucide-react
```

The official docs show this minimal usage or setup:

```tsx
import { AddToCartButton } from '@/components/buttons/add-to-cart-button'

;<AddToCartButton label="Add to cart" onAddToCart={async () => addItem(id)} />
```

## Examples

- [Add to cart button](https://opensourceui.in/components/add-to-cart-button) —
  Async action button with a documented callback.
- [Analog clock minimal](https://opensourceui.in/components/analog-clock-minimal)
  — Minimal time display component.
- [Browser mockup](https://opensourceui.in/components/browser) — Frame an
  interface screenshot in a browser shell.

## When to use it

- Use it when the team wants direct ownership of small React components or needs
  device and browser mockups.

- Skip it when you need a maintained package with a unified API; compare
  [HeroUI](../component-libraries/heroui.md) or
  [Kibo UI](../component-libraries/kibo-ui.md).

## Agent notes

- There is no single library install; copy source and install only the
  dependencies listed for the chosen component.
- Check whether the component page assumes an alias such as `@/components`.
- The official site states MIT and commercial use; retain required notices.

## Alternatives in this repo

- [Kibo UI](../component-libraries/kibo-ui.md) — Component registry with a CLI
  for copying pieces.
- [blocks.so](../component-libraries/blocks-so.md) — shadcn website blocks
  installed through a registry.
- [8bitcn](../component-libraries/8bitcn.md) — Retro components for projects
  using shadcn conventions.

## Sources

- [Official site](https://opensourceui.in/) — checked 2026-10-07
- [Component index](https://opensourceui.in/components) — checked 2026-10-07
- [Add to cart button](https://opensourceui.in/components/add-to-cart-button) —
  checked 2026-10-07
- [Analog clock](https://opensourceui.in/components/analog-clock-minimal) —
  checked 2026-10-07
- [Browser mockup](https://opensourceui.in/components/browser) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
