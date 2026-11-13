---
name: 'Tabler Icons'
slug: 'tabler-icons'
section: 'Icons'
section_slug: 'icons'
source_url: 'https://tabler.io/icons'
designeer_url: 'https://designeer.xyz/visuals'
designeer_blurb: 'Library of thousands of outline icons.'
paywall: freemium
pricing_summary:
  'The MIT icon library is free; optional downloadable icon packages cost $9 or
  $69 one time.'
open_source: true
license: 'MIT'
category_tags: ['icon-library', 'svg', 'outline', 'filled', 'react']
best_for: ['product interfaces', 'large outline sets', 'static svg assets']
stack: ['svg', 'react']
execution_mode: package
surface: ['web-ui', 'web-asset']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Tabler Icons

> Library of thousands of outline icons. At TolongLabs, use it as a reference
> for choosing and implementing icons that fit the project.

## At a glance

| Field          | Value                                                            |
| -------------- | ---------------------------------------------------------------- |
| Source         | [Official site](https://tabler.io/icons)                         |
| Paywall        | **Freemium — free tier; paid options listed below**              |
| Open source    | Yes — MIT ([repository](https://github.com/tabler/tabler-icons)) |
| Type           | Open-source SVG icon set                                         |
| Works with     | SVG, HTML, React, Vue                                            |
| Best for       | product interfaces, large outline sets, static svg assets        |
| Agent-friendly | Yes                                                              |

## What it is

Tabler Icons is a large set of outline and filled interface icons drawn on a 24
by 24 grid. The browser reports more than 6,200 icons and lets users search,
inspect, and customize size, color, and stroke.

The MIT-licensed files can be used as static SVG or through framework packages.
The paid store sells additional packaged formats and bundled design assets;
payment is not needed to use the open icon library.

## Paywall and pricing

- Free: the MIT icon set, browser, SVG files, and code packages are available at
  no cost.
- Paid: the official page lists a $9 one-time icon package and a $69 one- time
  bundle with additional templates and illustrations.
- Sign-up required? Not required for the free browser or package usage.
- Client work: MIT permits commercial and client projects. Paid asset bundles
  have separate terms.

Pricing and licence information checked 2026-10-07.

## How to use

1. Search the official explorer by concept and compare outline with filled
   variants.
2. Use the static SVG package when you want files in the repository, or choose
   the framework package for component imports.
3. Install the SVG package, then reference a downloaded icon as an image or
   inline its SVG markup.
4. Set dimensions and accessible text in the consuming component; mark
   decorative icons as hidden from assistive technology.

Install with Bun:

```bash
bun add @tabler/icons
```

Minimal usage from the official documentation:

```html
<img src="path/to/icon.svg" alt="icon title" />
```

## Examples

- [Disabled icon](http://tabler.io/icons/icon/disabled) — A concrete detail page
  linked by the SVG usage guide.
- [Static SVG guide](https://docs.tabler.io/icons/static-files/svg) — Shows
  inline SVG and image embedding patterns.
- [Icon explorer](https://tabler.io/icons) — Search and compare outlines, fills,
  and categories.

## When to use it

- Use it when a product needs a broad, consistent interface family with editable
  SVG files.
- Skip it when the project already standardizes on a different visual system;
  compare Lucide or Carbon Icons.

## Agent notes

- Static SVG package: @tabler/icons. Separate framework packages are available;
  check the official packages page before choosing one.
- The icon grid is 24 by 24 and uses stroke-width customization. Keep values
  consistent instead of adjusting every icon independently.
- MIT covers the library. Do not assume that paid template and illustration
  assets share the same terms.

## Alternatives in this repo

- [Lucide](../icons/lucide.md) — A smaller outline set with a similar restrained
  feel.
- [Iconify](../icons/iconify.md) — A unified browser across many icon families.
- [Heroicons](../icons/heroicons.md) — A smaller product-focused set with React
  and Vue packages.

## Sources

- [Official icon explorer and pricing](https://tabler.io/icons) — checked
  2026-10-07
- [SVG documentation](https://docs.tabler.io/icons/static-files/svg) — checked
  2026-10-07
- [Packages](https://tabler.io/icons/packages) — checked 2026-10-07
- [Disabled icon example](http://tabler.io/icons/icon/disabled) — checked
  2026-10-07
- [GitHub repository](https://github.com/tabler/tabler-icons) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/visuals) — checked 2026-10-07; page
  fetch unavailable, blurb copied from batch metadata
