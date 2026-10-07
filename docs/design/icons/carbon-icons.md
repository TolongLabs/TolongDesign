---
name: 'Carbon Icons'
slug: 'carbon-icons'
section: 'Icons'
section_slug: 'icons'
source_url: 'https://carbondesignsystem.com/'
designeer_url: 'https://designeer.xyz/visuals'
designeer_blurb: 'IBM official icon library for enterprise design.'
paywall: free
pricing_summary:
  'Carbon Icons are available with the free Apache-2.0 Carbon Design System; no
  paid icon tier is published.'
open_source: true
license: 'Apache-2.0'
category_tags: ['icon-library', 'ibm', 'react', 'enterprise']
best_for:
  [
    'enterprise applications',
    'carbon design system projects',
    'data-heavy interfaces'
  ]
stack: ['react']
agent_friendly: true
last_verified: 2026-10-07
---

# Carbon Icons

> IBM official icon library for enterprise design. At TolongLabs, use it as a
> reference for choosing and implementing icons that fit the project.

## At a glance

| Field          | Value                                                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Source         | [Official site](https://carbondesignsystem.com/)                                                                         |
| Paywall        | **Free — no paid tier published**                                                                                        |
| Open source    | Yes — Apache-2.0 ([repository](https://github.com/carbon-design-system/carbon/blob/main/packages/icons-react/README.md)) |
| Type           | IBM Carbon Design System icon library                                                                                    |
| Works with     | React, Vue, Angular, Carbon components                                                                                   |
| Best for       | enterprise applications, carbon design system projects, data-heavy interfaces                                            |
| Agent-friendly | Yes                                                                                                                      |

## What it is

Carbon Icons are the icon set used by IBM's Carbon Design System. The system
provides a large collection of interface symbols and documents standard sizes of
16, 20, 24, and 32 pixels.

The React package exports icons as components and fits best when a project
follows Carbon's spacing, typography, and interaction conventions. It is usable
outside Carbon, but its visual language is designed to work as part of that
broader system.

## Paywall and pricing

- Free: the design system and icon packages are available under Apache 2.0.
- Paid: no paid icon tier or price is published.
- Sign-up required? No for the documentation or package.
- Client work: Apache 2.0 permits commercial and client use; retain any required
  licence notices.

Pricing and licence information checked 2026-10-07.

## How to use

1. Search the Carbon icon documentation and choose a symbol plus its intended
   16, 20, 24, or 32 pixel size.
2. Install the React icon package and import named components where the project
   uses React.
3. Use the Carbon size prop and pair the symbol with the system's spacing and
   color tokens.
4. Follow Carbon guidance for focusability and labels when an icon is
   interactive.

Install with Bun:

```bash
bun add @carbon/icons-react
```

Minimal usage from the official documentation:

```tsx
import { Add } from '@carbon/icons-react'

export function AddButtonIcon() {
  return <Add size={32} aria-hidden="true" />
}
```

## Examples

- [Carbon icon code docs](https://www.carbondesignsystem.com/building-blocks/foundations/icons/code)
  — Documents Add imports and supported icon sizes.
- [React package README](https://github.com/carbon-design-system/carbon/blob/main/packages/icons-react/README.md)
  — Shows React component usage and accessibility props.
- [Carbon design system](https://www.carbondesignsystem.com/) — See how icons
  sit within the wider Carbon system.

## When to use it

- Use it when a project adopts IBM Carbon or needs an enterprise-focused visual
  system.
- Skip it when only a small icon package is needed; Lucide or Heroicons has less
  system overhead.

## Agent notes

- React package: @carbon/icons-react. Use named imports to keep the build
  focused.
- Documented sizes are 16, 20, 24, and 32 pixels; choose a small set of sizes
  for consistency.
- The package uses Apache 2.0. Carbon's broader visual conventions matter when
  mixing it with another design system.

## Alternatives in this repo

- [Tabler Icons](../icons/tabler-icons.md) — A broad, MIT-licensed alternative
  with SVG files.
- [Lucide](../icons/lucide.md) — A lighter outline set for custom systems.
- [Heroicons](../icons/heroicons.md) — A smaller product-focused component
  family.

## Sources

- [Carbon Design System](https://www.carbondesignsystem.com/) — checked
  2026-10-07
- [Icon code documentation](https://www.carbondesignsystem.com/building-blocks/foundations/icons/code)
  — checked 2026-10-07
- [React package README](https://github.com/carbon-design-system/carbon/blob/main/packages/icons-react/README.md)
  — checked 2026-10-07
- [Official source URL](https://carbondesignsystem.com/) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals) — checked 2026-10-07; page
  fetch unavailable, blurb copied from batch metadata
