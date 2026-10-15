---
name: 'Remix Icon'
slug: 'remix-icon'
section: 'Icons'
section_slug: 'icons'
source_url: 'https://remixicon.com/'
designeer_url: 'https://designeer.xyz/visuals'
designeer_blurb: 'Neutral icon library in outline and fill.'
paywall: free
pricing_summary:
  'The icon library is free to use; no paid tier is published. Its January 2026
  custom licence has use restrictions.'
open_source: false
license: 'proprietary'
category_tags: ['icon-library', 'svg', 'react', 'line', 'fill']
best_for:
  ['neutral interface icons', 'line and fill pairs', 'commercial web projects']
stack: ['react', 'css', 'svg']
execution_mode: package
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Remix Icon

> Neutral icon library in outline and fill. At TolongLabs, use it as a reference
> for choosing and implementing icons that fit the project.

## At a glance

| Field          | Value                                                                 |
| -------------- | --------------------------------------------------------------------- |
| Source         | [Official site](https://remixicon.com/)                               |
| Paywall        | **Free — no paid tier published**                                     |
| Open source    | No — proprietary                                                      |
| Type           | Neutral icon system                                                   |
| Works with     | React, Vue, webfont, SVG                                              |
| Best for       | neutral interface icons, line and fill pairs, commercial web projects |
| Agent-friendly | Yes                                                                   |

## What it is

Remix Icon is a neutral icon system with line and fill versions of common
interface symbols. The current site reports more than 3,200 icons and exposes a
searchable browser and downloadable source.

Since January 2026, the icons use Remix Icon License v1.0 rather than the older
permissive licence. The new terms allow royalty-free commercial and client use
in products, but prohibit selling the icons as a standalone pack, using them as
a logo, or making a competing icon library.

## Paywall and pricing

- Free: browse and use the icons under Remix Icon License v1.0.
- Paid: no paid plan or price is published; access is royalty-free.
- Sign-up required? No for the public browser or packages.
- Client work: commercial and client projects are permitted, but the custom
  licence restricts standalone resale, logo use, and competing icon libraries.

Pricing and licence information checked 2026-10-07.

## How to use

1. Search the official gallery for a symbol and compare its line and fill
   versions.
2. Install the React package for components, or use the webfont package when
   class-based markup fits the project.
3. Import one named component and style its size and color through the
   documented props.
4. Keep the icon as a functional or decorative part of the product, not the
   product being sold.

Install with Bun:

```bash
bun add @remixicon/react
```

Minimal usage from the official documentation:

```tsx
import { RiHeartFill } from '@remixicon/react'

export function FavoriteIcon() {
  return <RiHeartFill size={24} aria-hidden="true" />
}
```

## Examples

- [Gallery](https://www.remixicon.com/) — Search the current line and fill
  families in the official browser.
- [React component guide](https://github.com/Remix-Design/RemixIcon) — The
  README demonstrates RiHeartFill and component styling.
- [Webfont examples](https://github.com/Remix-Design/RemixIcon) — The README
  shows paired admin line and fill classes.

## When to use it

- Use it when the project needs a broad, neutral vocabulary with line and fill
  counterparts.
- Skip it for logo or brand identity work, standalone icon redistribution, or
  when an OSI-approved licence is required.

## Agent notes

- React package: @remixicon/react. Webfont package: remixicon; CSS classes use
  ri-name-line or ri-name-fill.
- Use Remix Icon License v1.0 for current assets. The old open-source label in
  older descriptions does not describe the current licence.
- Do not use these symbols as logos or trademarks, or package them into a
  competing icon set.

## Alternatives in this repo

- [Lucide](../icons/lucide.md) — A permissively licensed neutral outline set.
- [Tabler Icons](../icons/tabler-icons.md) — A MIT-licensed set with a similar
  interface focus.
- [Iconoir](../icons/iconoir.md) — A MIT-licensed alternative with consistent
  strokes.

## Sources

- [Official gallery](https://www.remixicon.com/) — checked 2026-10-07
- [GitHub usage and package guide](https://github.com/Remix-Design/RemixIcon) —
  checked 2026-10-07
- [Current licence](https://github.com/Remix-Design/RemixIcon/blob/master/License)
  — checked 2026-10-07
- [Licence change release](https://github.com/Remix-Design/RemixIcon/releases) —
  checked 2026-10-07
- [Official source URL](https://remixicon.com/) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals) — checked 2026-10-07; page
  fetch unavailable, blurb copied from batch metadata
