---
name: 'MX Icons'
slug: 'mx-icons'
section: 'Icons'
section_slug: 'icons'
source_url: 'https://mx-icons.vercel.app/'
designeer_url: 'https://designeer.xyz/visuals'
designeer_blurb: 'Large collection of customizable React icons.'
paywall: free
pricing_summary:
  'MX Icons is free for personal and commercial use under MIT; no paid tier is
  published.'
open_source: true
license: 'MIT'
category_tags: ['icon-library', 'react', 'svg', 'tree-shaking']
best_for:
  ['react products', 'large icon collections', 'fine-grained customization']
stack: ['react']
execution_mode: package
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# MX Icons

> Large collection of customizable React icons. At TolongLabs, use it as a
> reference for choosing and implementing icons that fit the project.

## At a glance

| Field          | Value                                                              |
| -------------- | ------------------------------------------------------------------ |
| Source         | [Official site](https://mx-icons.vercel.app/)                      |
| Paywall        | **Free — no paid tier published**                                  |
| Open source    | Yes — MIT ([repository](https://github.com/ig-imanish/mx-icons))   |
| Type           | Customizable React icon library                                    |
| Works with     | React 18 and 19                                                    |
| Best for       | react products, large icon collections, fine-grained customization |
| Agent-friendly | Yes                                                                |

## What it is

MX Icons is a React icon library with thousands of customizable SVG components.
The project README describes outline, solid, and mini variants, tree-shaking,
and no runtime dependencies beyond React.

The official preview lets developers browse the set and see component names. It
is focused on React rather than serving as a general-purpose browser for
unrelated icon families.

## Paywall and pricing

- Free: the full package and live preview are available under MIT.
- Paid: no paid tier or price is published.
- Sign-up required? No for browsing the preview or installing the package.
- Client work: the official project states that MIT permits personal and
  commercial use.

Pricing and licence information checked 2026-10-07.

## How to use

1. Search the live preview for an icon and note its exported component name.
2. Install the mx-icons package and import only the symbols used in the
   component tree.
3. Choose a linear, solid, or mini variant when the library provides that name.
4. Set size and color through component props, then check the icon at its final
   interface scale.

Install with Bun:

```bash
bun add mx-icons
```

Minimal usage from the official documentation:

```tsx
import { NoteTextLinear } from 'mx-icons'

export function NoteIcon() {
  return <NoteTextLinear size={24} color="currentColor" />
}
```

## Examples

- [Live preview](https://mx-icons.vercel.app/) — Browse the catalog and inspect
  component names.
- [Project README](https://github.com/ig-imanish/mx-icons) — Shows
  NoteTextLinear imports and package details.
- [Package listing](https://www.npmjs.com/package/mx-icons) — Distribution page
  for the React package.

## When to use it

- Use it when the project is React-based and wants many tree-shakeable SVG
  components.
- Skip it for non-React frameworks or if the project needs a multi-library
  search browser.

## Agent notes

- Package: mx-icons. The README says it supports React 18 and 19.
- Named component imports let a bundler include only the symbols that are used.
- Do not assume the package's icon names are identical to another library's
  naming scheme.

## Alternatives in this repo

- [Heroicons](../icons/heroicons.md) — A focused React and Vue package.
- [Iconoir](../icons/iconoir.md) — A broad SVG family with React support.
- [Iconify](../icons/iconify.md) — A unified search across several icon
  families.

## Sources

- [Official preview](https://mx-icons.vercel.app/) — checked 2026-10-07
- [GitHub README](https://github.com/ig-imanish/mx-icons) — checked 2026-10-07
- [Live preview](https://mx-icons.vercel.app/) — checked 2026-10-07
- [Package listing](https://www.npmjs.com/package/mx-icons) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals) — checked 2026-10-07; page
  fetch unavailable, blurb copied from batch metadata
