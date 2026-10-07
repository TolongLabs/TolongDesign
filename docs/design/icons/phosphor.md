---
name: Phosphor
slug: phosphor
section: Icons
section_slug: icons
source_url: https://phosphoricons.com/
designeer_url: https://designeer.xyz/visuals
designeer_blurb: Icon family providing six consistent weights.
paywall: free
pricing_summary: 'Completely free and open source under the MIT license.'
open_source: true
license: MIT
category_tags: [icons, svg, duotone, multi-weight, react-icons, design-system]
best_for:
  [multi-weight icons, duotone styles, web applications, editorial design]
stack: [react, vue, web-components]
agent_friendly: true
last_verified: 2026-10-07
---

# Phosphor

> Icon family providing six consistent weights. TolongLabs developers reach for
> Phosphor when an interface requires a deeply cohesive icon system with
> seamless switching between thin, light, regular, bold, fill, and duotone
> weights.

## At a glance

| Field          | Value                                                         |
| -------------- | ------------------------------------------------------------- |
| Source         | [phosphoricons.com](https://phosphoricons.com/)               |
| Paywall        | **Free** — 100% free and open source under MIT                |
| Open source    | Yes — MIT ([GitHub](https://github.com/phosphor-icons/core))  |
| Type           | Multi-weight vector icon family and framework component suite |
| Works with     | React, Vue, Svelte, Web Components, Figma, Flutter, Elm       |
| Best for       | Multi-weight icons, duotone styles, web applications          |
| Agent-friendly | Yes — npm packages (`@phosphor-icons/react`), SVG exports     |

## What it is

Phosphor is an open-source icon family designed by Helena Zhang and Tobias
Fried. While many icon sets provide only a single outline stroke or a basic
filled counterpart, Phosphor is built from the ground up around six meticulously
crafted weights across all 1,200+ glyphs:

- **Thin**: Delicate 1px lines for large editorial displays.
- **Light**: Crisp, refined 1.5px lines for elegant interfaces.
- **Regular**: Balanced 2px lines for standard UI controls.
- **Bold**: Heavy 2.5px strokes for high-contrast alerts and active states.
- **Fill**: Solid silhouettes for selected tabs, badges, and toggle states.
- **Duotone**: Two-tone shaded glyphs with translucent secondary fills.

Every glyph is designed on a consistent 16×16 and 32×32 grid with optical
compensation, ensuring that swapping from a `regular` icon to a `fill` or
`duotone` variant preserves exact spatial dimensions without shifting sibling
layout elements.

Phosphor provides dedicated component libraries for all major web frameworks,
including `@phosphor-icons/react`, `@phosphor-icons/vue`, and
`@phosphor-icons/web`. It includes an `<IconContext.Provider>` pattern allowing
developers to set global weights, sizes, and colors across entire application
subtrees.

## Paywall and pricing

- **Free:** The complete collection of over 1,200 icons across all six weights,
  web fonts, raw SVGs, and framework packages is 100% free and open source.
- **Paid:** None.
- **Sign-up required?** No. Direct web access and npm installation without an
  account.
- **Licence for client work:** Distributed under the MIT license. Fully
  permissive for commercial applications, client websites, and digital products.

Checked on the official Phosphor website and repository on 2026-10-07.

## How to use

1. Install the Phosphor package for your framework:

```bash
# For React
bun add @phosphor-icons/react

# For Vue 3
bun add @phosphor-icons/vue
```

2. Render icons with specific weights:

```tsx
import { Heart, House, MagnifyingGlass } from '@phosphor-icons/react'

export function NavigationBar() {
  return (
    <nav className="flex items-center gap-4">
      {/* Regular outline */}
      <House size={24} weight="regular" />

      {/* Duotone variant */}
      <MagnifyingGlass size={24} weight="duotone" />

      {/* Active filled state */}
      <Heart size={24} weight="fill" className="text-red-500" />
    </nav>
  )
}
```

3. Configure global defaults using `IconContext`:

```tsx
import { IconContext } from '@phosphor-icons/react'

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <IconContext.Provider
      value={{
        color: 'currentColor',
        size: 20,
        weight: 'duotone',
        mirrored: false
      }}
    >
      {children}
    </IconContext.Provider>
  )
}
```

## Examples

- [Phosphor Icons Catalog](https://phosphoricons.com/) — Web search application
  with instant weight switching, color adjustments, and copyable SVG/JSX code.
- [Phosphor React GitHub](https://github.com/phosphor-icons/react) — Official
  React package repository featuring prop references and TypeScript types.
- [Phosphor Core GitHub](https://github.com/phosphor-icons/core) — Source
  repository storing the raw SVGs and geometric source assets for all weights.

## When to use it

- Use it when your design system needs duotone icons to add depth and warmth to
  cards and dashboards.
- Use it when interface elements change weight to reflect active or selected
  states (e.g. outline tab icon changes to `fill` when active).
- Skip it if your application is standardized on strict 24px outline strokes
  matching standard shadcn/ui defaults; use [Lucide](../icons/lucide.md)
  instead.
- Skip it if you need variable font ligatures; use
  [Material Symbols](../icons/material-symbols.md) instead.

## Agent notes

- Package: `@phosphor-icons/react`.
- Supports the `weight` prop on every component:
  `'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'`.
- All icon components support tree-shaking and standard SVG HTML attributes.
- Use `<IconContext.Provider>` in root layouts to avoid repeating `size` and
  `weight` props on every individual icon call.

## Alternatives in this repo

- [Lucide](../icons/lucide.md) — Streamlined 24px outline icon set widely
  adopted as the default for shadcn/ui and React dashboards.
- [Material Symbols](../icons/material-symbols.md) — Google's variable font icon
  family with 2,500+ glyphs and optical size axes.

## Sources

- [Phosphor Icons Website](https://phosphoricons.com/) — checked 2026-10-07
- [Phosphor React GitHub](https://github.com/phosphor-icons/react) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/visuals)
