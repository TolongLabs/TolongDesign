---
name: 'Heroicons'
slug: 'heroicons'
section: 'Icons'
section_slug: 'icons'
source_url: 'https://heroicons.com/'
designeer_url: 'https://designeer.xyz/visuals'
designeer_blurb: 'Handcrafted SVG icons from Tailwind creators.'
paywall: free
pricing_summary:
  'The complete icon set and framework packages are free under the MIT licence;
  no paid tier is published.'
open_source: true
license: 'MIT'
category_tags: ['icon-library', 'svg', 'react', 'vue', 'outline', 'filled']
best_for:
  [
    'tailwind projects',
    'product interfaces',
    'consistent outline and solid icons'
  ]
stack: ['react', 'vue', 'svg']
execution_mode: package
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Heroicons

> Handcrafted SVG icons from Tailwind creators. At TolongLabs, use it as a
> reference for choosing and implementing icons that fit the project.

## At a glance

| Field          | Value                                                                                           |
| -------------- | ----------------------------------------------------------------------------------------------- |
| Source         | [Official site](https://heroicons.com/)                                                         |
| Paywall        | **Free — no paid tier published**                                                               |
| Open source    | Yes — MIT ([repository](https://github.com/tailwindlabs/heroicons/blob/master/react/README.md)) |
| Type           | Handcrafted SVG icon set                                                                        |
| Works with     | React, Vue, SVG                                                                                 |
| Best for       | tailwind projects, product interfaces, consistent outline and solid icons                       |
| Agent-friendly | Yes                                                                                             |

## What it is

Heroicons is a compact interface icon family from the creators of Tailwind CSS.
The current site lists 316 icons, designed for 24-pixel outline and solid
styles, with smaller solid variants for compact controls.

The official packages expose icons as framework components, while the repository
also contains the source SVGs. Its visual language is simple and restrained, so
it works well in products that do not need a highly expressive icon style.

## Paywall and pricing

- Free: the full icon collection, source SVGs, and React and Vue packages.
- Paid: no paid plan or price is published.
- Sign-up required? No for browsing or installing the public packages.
- Client work: MIT permits commercial and client projects. Brand marks remain
  subject to their owners' trademark rules.

Pricing and licence information checked 2026-10-07.

## How to use

1. Search the official gallery and pick the outline or solid style that matches
   the role of the icon.
2. Add the React package and import a named component from the size and style
   path.
3. Use a consistent size within a control family; pass an accessible label to
   interactive controls.
4. Keep decorative SVGs out of the accessibility tree when nearby text already
   names the control.

Install with Bun:

```bash
bun add @heroicons/react
```

Minimal usage from the official documentation:

```tsx
import { BeakerIcon } from '@heroicons/react/24/solid'

export function Example() {
  return <BeakerIcon className="size-6" aria-hidden="true" />
}
```

## Examples

- [Home outline](https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/home.svg)
  — A typical 24-pixel outline navigation symbol.
- [Heart outline](https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/heart.svg)
  — A small, clear outline suitable for a favorite control.
- [Academic cap solid](https://github.com/tailwindlabs/heroicons/blob/master/src/24/solid/academic-cap.svg)
  — A filled example with the same family geometry.

## When to use it

- Use it when a project wants a restrained interface set that pairs naturally
  with Tailwind layouts.
- Skip it when you need thousands of specialized symbols or a more expressive
  range of weights; compare Phosphor or Iconify.

## Agent notes

- React package: @heroicons/react. Import paths encode both size and style, for
  example 24/outline or 24/solid.
- The package includes React components; the source SVG repository is useful
  when the project needs static files.
- Use accessible labels on icon-only buttons and hide purely decorative SVGs.

## Alternatives in this repo

- [Lucide](../icons/lucide.md) — A similar outline-first interface family.
- [Tabler Icons](../icons/tabler-icons.md) — A larger set with outline and
  filled variants.
- [Phosphor](../icons/phosphor.md) — More weights and a broader expressive
  range.

## Sources

- [Official gallery](https://heroicons.com/) — checked 2026-10-07
- [React README](https://github.com/tailwindlabs/heroicons/blob/master/react/README.md)
  — checked 2026-10-07
- [Home outline SVG](https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/home.svg)
  — checked 2026-10-07
- [Heart outline SVG](https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/heart.svg)
  — checked 2026-10-07
- [Academic cap solid SVG](https://github.com/tailwindlabs/heroicons/blob/master/src/24/solid/academic-cap.svg)
  — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals) — checked 2026-10-07; page
  fetch unavailable, blurb copied from batch metadata
