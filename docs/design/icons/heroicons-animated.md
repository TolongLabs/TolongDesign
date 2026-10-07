---
name: Heroicons Animated
slug: heroicons-animated
section: Icons
section_slug: icons
source_url: https://heroicons-animated.com/
designeer_url: https://designeer.xyz/visuals
designeer_blurb: Heroicons enhanced with reactive hover animations.
paywall: free
pricing_summary: 'Completely free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [icons, animation, heroicons, motion, react]
best_for: [micro-interactions, animated icons, landing pages, interactive ui]
stack: [react, vue, svelte, motion]
agent_friendly: true
last_verified: 2026-10-07
---

# Heroicons Animated

> Heroicons enhanced with reactive hover animations. TolongLabs developers reach
> for Heroicons Animated to inject playful micro-interactions into buttons,
> navigation bars, and cards without hand-crafting Framer Motion SVG paths.

## At a glance

| Field          | Value                                                                  |
| -------------- | ---------------------------------------------------------------------- |
| Source         | [heroicons-animated.com](https://heroicons-animated.com/)              |
| Paywall        | **Free** — 100% free and open source                                   |
| Open source    | Yes — MIT ([GitHub](https://github.com/Aniket-508/heroicons-animated)) |
| Type           | Animated SVG component library                                         |
| Works with     | React, Vue, Svelte, Solid, Angular, Astro, Motion                      |
| Best for       | Micro-interactions, animated icons, landing pages                      |
| Agent-friendly | Yes — npm packages, TypeScript declarations, copy-paste ready          |

## What it is

Heroicons Animated is an open-source library that takes the standard Heroicons
icon set created by Tailwind Labs and enriches each glyph with physics-based
micro-animations. Developed by Aniket, the project converts static SVG paths
into interactive components powered by Motion (formerly Framer Motion).

When users hover, click, or trigger focus states on an icon, individual vector
elements react with tailored motion: magnifying glasses pulse, bell clappers
swing, checkmarks draw themselves dynamically, and arrows spring forward. This
elevates the polish of web interfaces without requiring developers to manually
coordinate SVG keyframes or CSS transitions.

The library is organized as a monorepo offering dedicated framework wrappers for
React (`@heroicons-animated/react`), Vue (`@heroicons-animated/vue`), Svelte
(`@heroicons-animated/svelte`), Solid, Angular, Preact, Astro, React Native, and
Flutter.

## Paywall and pricing

- **Free:** The complete library, all framework packages, and interactive
  documentation are 100% free and open source.
- **Paid:** None. No pro versions, paid licenses, or locked icons.
- **Sign-up required?** No. Packages are installable directly from npm and
  components can be previewed or copied without an account.
- **Licence for client work:** MIT License. Commercial and client projects are
  fully permitted without royalties or required visual attribution.

Verified on the official GitHub repository and website on 2026-10-07.

## How to use

1. Install the React package along with the Motion peer dependency:

```bash
bun add @heroicons-animated/react motion
```

2. Import and use an animated icon in a React / Next.js component:

```tsx
import { ArrowRightIcon, BellIcon } from '@heroicons-animated/react'

export function NotificationBell() {
  return (
    <button
      type="button"
      className="group flex items-center gap-2 rounded-lg border px-3 py-2 text-sm hover:bg-neutral-50"
    >
      <BellIcon className="size-5 text-neutral-600 group-hover:text-neutral-900" />
      <span>Notifications</span>
      <ArrowRightIcon className="size-4 text-neutral-400 group-hover:text-neutral-900" />
    </button>
  )
}
```

3. Customize sizing and colors using standard Tailwind CSS classes or inline SVG
   props.

## Examples

- [Heroicons Animated Documentation & Explorer](https://www.heroicons-animated.com)
  — Interactive web catalog to preview hover animations and copy import
  snippets.
- [GitHub Monorepo](https://github.com/Aniket-508/heroicons-animated) — Source
  code containing packages for React, Vue, Svelte, Solid, and Angular.
- [React Package Directory](https://github.com/Aniket-508/heroicons-animated/tree/main/packages/react)
  — Implementation details and TypeScript component exports for React.

## When to use it

- Use it when designing interactive buttons, primary navigation links, or
  empty-state actions that need subtle animated feedback on hover or tap.
- Use it on landing pages and marketing sites built with Tailwind CSS to
  compliment Tailwind's design aesthetic.
- Skip it when your project does not use Motion or requires minimal JS bundle
  size; use static [Material Symbols](../icons/material-symbols.md) instead.
- Skip it if your design system uses the Lucide icon family; use
  [Lucide Animated](../icons/lucide-animated.md) instead.

## Agent notes

- Official site: `https://www.heroicons-animated.com`.
- Requires peer dependency `motion` (or `motion-v` for Vue).
- Component names mirror Heroicons conventions with `Icon` suffix (e.g.,
  `BeakerIcon`, `BellIcon`, `ArrowRightIcon`).
- Supports tree-shaking; import specific components directly from
  `@heroicons-animated/react`.

## Alternatives in this repo

- [Lucide Animated](../icons/lucide-animated.md) — Motion-enhanced animated
  icons based on the Lucide icon set with shadcn registry integration.
- [icons0](../icons/icons0.md) — Multi-library icon search engine and MCP server
  for retrieving static SVG and React icons.
- [Material Symbols](../icons/material-symbols.md) — Google variable icon font
  supporting variable axes and native CSS transitions.

## Sources

- [Official site](https://heroicons-animated.com/) — checked 2026-10-07
- [GitHub repository](https://github.com/Aniket-508/heroicons-animated) —
  checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals)
