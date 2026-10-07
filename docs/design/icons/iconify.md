---
name: 'Iconify'
slug: 'iconify'
section: 'Icons'
section_slug: 'icons'
source_url: 'https://iconify.design/'
designeer_url: 'https://designeer.xyz/visuals'
designeer_blurb: 'Unified framework providing instant icon access.'
paywall: free
pricing_summary:
  'Free to browse and use; no paid plan is published for Iconify. Individual
  icon sets retain their own licences.'
open_source: true
license: 'Apache-2.0'
category_tags: ['icon-library', 'svg', 'icon-search', 'react']
best_for: ['large icon catalogs', 'mixed icon families', 'react interfaces']
stack: ['react', 'svg']
agent_friendly: true
last_verified: 2026-10-07
---

# Iconify

> Unified framework providing instant icon access. At TolongLabs, use it as a
> reference for choosing and implementing icons that fit the project.

## At a glance

| Field          | Value                                                      |
| -------------- | ---------------------------------------------------------- |
| Source         | [Official site](https://iconify.design/)                   |
| Paywall        | **Free — no paid tier published**                          |
| Open source    | Yes — Apache-2.0                                           |
| Type           | Icon collection and framework                              |
| Works with     | React, web components, SVG, CSS tooling                    |
| Best for       | large icon catalogs, mixed icon families, react interfaces |
| Agent-friendly | Yes                                                        |

## What it is

Iconify combines a searchable browser for open icon sets with framework
integrations that load SVG icon data on demand. Its catalog currently lists more
than 325,000 icons across more than 220 sets.

The Iconify React package is a renderer and loader, not a single visual family.
Each icon set has its own design and licence; check the set page before choosing
icons for client work.

## Paywall and pricing

- Free: browse, copy, and use the public icon sets. The React package is open
  source.
- Paid: no Iconify usage plan or price is published. Third-party icon-set terms
  can differ.
- Sign-up required? No for browsing or using the public API and packages.
- Client work: allowed where the selected icon set permits it. Read the per- set
  licence and brand rules.

Pricing and licence information checked 2026-10-07.

## How to use

1. Search the icon browser by concept, then filter or open a set to compare its
   visual language.
2. Choose icons from one set where possible; avoid mixing outline weights and
   corner styles without a design reason.
3. Add the React package, then use the exact set prefix and icon name shown by
   the browser.
4. Review the page at production size and note the chosen set and its licence in
   the project.

Install with Bun:

```bash
bun add @iconify/react
```

Minimal usage from the official documentation:

```tsx
import { Icon } from '@iconify/react'

export function HomeIcon() {
  return <Icon icon="mdi-light:home" />
}
```

## Examples

- [Material Symbols set](https://icon-sets.iconify.design/material-symbols/) —
  Large catalog with a consistent family and category browsing.
- [Tabler set](https://icon-sets.iconify.design/tabler/) — A substantial outline
  set with its own MIT licence.
- [Simple Icons set](https://icon-sets.iconify.design/simple-icons/) — Brand
  marks; check trademark rules as well as the listed set licence.

## When to use it

- Use it when a project needs a broad searchable catalog or several established
  icon families.
- Skip it when the design needs one tightly controlled visual system; choose a
  focused set such as Lucide or Heroicons.

## Agent notes

- React package: @iconify/react. Icon names use set prefixes, such as mdi-
  light:home.
- Icons load from the public Iconify API on demand. Plan for network loading, or
  bundle icon data for offline and server-rendered output.
- Next.js React components render client-side; the official guide notes a
  possible initial delay. Check each set's licence before shipping.

## Alternatives in this repo

- [Lucide](../icons/lucide.md) — A focused open-source outline family.
- [Tabler Icons](../icons/tabler-icons.md) — A similarly broad, MIT-licensed SVG
  family.
- [Heroicons](../icons/heroicons.md) — A smaller, cohesive set for product
  interfaces.

## Sources

- [Official site](https://iconify.design/) — checked 2026-10-07
- [React components](https://iconify.design/docs/icon-components/react/) —
  checked 2026-10-07
- [Icon browser](https://icon-sets.iconify.design/) — checked 2026-10-07
- [Material Symbols set](https://icon-sets.iconify.design/material-symbols/) —
  checked 2026-10-07
- [Tabler set](https://icon-sets.iconify.design/tabler/) — checked 2026-10-07
- [Simple Icons set](https://icon-sets.iconify.design/simple-icons/) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/visuals) — checked 2026-10-07; page
  fetch unavailable, blurb copied from batch metadata
