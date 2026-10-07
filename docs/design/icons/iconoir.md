---
name: 'Iconoir'
slug: 'iconoir'
section: 'Icons'
section_slug: 'icons'
source_url: 'https://iconoir.com/'
designeer_url: 'https://designeer.xyz/visuals'
designeer_blurb: 'Open-source SVG icons with consistent strokes.'
paywall: free
pricing_summary:
  'The complete icon set and framework packages are free under MIT; no premium
  tier is published.'
open_source: true
license: 'MIT'
category_tags: ['icon-library', 'svg', 'react', 'outline']
best_for:
  ['consistent outline systems', 'react interfaces', 'custom svg assets']
stack: ['react', 'svg']
agent_friendly: true
last_verified: 2026-10-07
---

# Iconoir

> Open-source SVG icons with consistent strokes. At TolongLabs, use it as a
> reference for choosing and implementing icons that fit the project.

## At a glance

| Field          | Value                                                           |
| -------------- | --------------------------------------------------------------- |
| Source         | [Official site](https://iconoir.com/)                           |
| Paywall        | **Free — no paid tier published**                               |
| Open source    | Yes — MIT                                                       |
| Type           | Open-source SVG icon library                                    |
| Works with     | SVG, React, Vue, CSS, Figma                                     |
| Best for       | consistent outline systems, react interfaces, custom svg assets |
| Agent-friendly | Yes                                                             |

## What it is

Iconoir is an open-source icon family with more than 1,600 unique SVG icons
designed on a 24-pixel grid. Its drawings use a consistent stroke style and are
available as raw SVG files and framework packages.

The React package exports individual components and supports standard SVG
properties. A provider can set shared defaults such as size, color, and stroke
width, which helps keep a project-wide icon system consistent.

## Paywall and pricing

- Free: all icons and published integrations; the official docs state there are
  no premium icons.
- Paid: no paid tier or price is published.
- Sign-up required? No account or email signup is required for the package or
  icon files.
- Client work: MIT permits commercial and client projects.

Pricing and licence information checked 2026-10-07.

## How to use

1. Search the catalog for the required symbol and inspect the matching SVG or
   framework variant.
2. Install iconoir-react for a React project, or use the core SVG files if the
   project needs static assets.
3. Import only the components used and set common defaults through
   IconoirProvider when needed.
4. Review stroke width and size at the target display scale; provide accessible
   labels for meaningful icons.

Install with Bun:

```bash
bun add iconoir-react
```

Minimal usage from the official documentation:

```tsx
import { Check } from 'iconoir-react'

export function StatusIcon() {
  return <Check color="currentColor" width={24} height={24} />
}
```

## Examples

- [React package docs](https://iconoir.com/docs/packages/iconoir-react) — Check
  and provider examples with color, width, height, and stroke props.
- [CSS package docs](https://iconoir.com/docs/packages/css) — Shows using an
  icon class from the CSS distribution.
- [Vue package docs](https://iconoir.com/docs/packages/iconoir-vue) — Framework
  component integration for a Vue project.

## When to use it

- Use it when you want a broad, consistent outline family with direct framework
  support.
- Skip it when the project needs highly filled or multicolor symbols; compare
  Phosphor or Iconify.

## Agent notes

- React package: iconoir-react; core SVG package: iconoir. The docs use
  PascalCase component names.
- Named imports make it practical to keep the dependency tree focused on used
  icons.
- MIT applies to the project. Check any third-party fonts or surrounding assets
  separately.

## Alternatives in this repo

- [Lucide](../icons/lucide.md) — A similarly restrained outline family.
- [Heroicons](../icons/heroicons.md) — A smaller set with polished React and Vue
  components.
- [Phosphor](../icons/phosphor.md) — A broader range of weights and styles.

## Sources

- [Official site](https://iconoir.com/) — checked 2026-10-07
- [Documentation index](https://iconoir.com/docs) — checked 2026-10-07
- [React package](https://iconoir.com/docs/packages/iconoir-react) — checked
  2026-10-07
- [CSS package](https://iconoir.com/docs/packages/css) — checked 2026-10-07
- [Vue package](https://iconoir.com/docs/packages/iconoir-vue) — checked
  2026-10-07
- [Changelog](https://iconoir.com/docs/changelog) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals) — checked 2026-10-07; page
  fetch unavailable, blurb copied from batch metadata
