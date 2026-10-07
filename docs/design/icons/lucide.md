---
name: Lucide
slug: lucide
section: Icons
section_slug: icons
source_url: https://lucide.dev/
designeer_url: https://designeer.xyz/visuals
designeer_blurb:
  Community-maintained Feather Icons fork with thousands of glyphs.
paywall: free
pricing_summary: 'Completely free and open source under the ISC license.'
open_source: true
license: ISC
category_tags: [icons, svg, react-icons, feather, ui-icons, vector-graphics]
best_for: [web applications, shadcn ui, react projects, clean interface icons]
stack: [react, vue, svelte, web-components]
agent_friendly: true
last_verified: 2026-10-07
---

# Lucide

> Community-maintained Feather Icons fork with thousands of glyphs. TolongLabs
> developers reach for Lucide as the default, go-to icon set for modern web
> applications and dashboards due to its rigorous 24px optical grid and
> first-class framework packages.

## At a glance

| Field          | Value                                                           |
| -------------- | --------------------------------------------------------------- |
| Source         | [lucide.dev](https://lucide.dev/)                               |
| Paywall        | **Free** — 100% free and open source under ISC                  |
| Open source    | Yes — ISC ([GitHub](https://github.com/lucide-icons/lucide))    |
| Type           | SVG icon library and framework component suite                  |
| Works with     | React, Next.js, Vue, Svelte, Angular, Solid, Figma, Static SVGs |
| Best for       | Web applications, shadcn/ui, React projects, dashboard UI       |
| Agent-friendly | Yes — npm packages (`lucide-react`), CLI, tree-shakeable SVG    |

## What it is

Lucide is an open-source icon library created as a community-driven continuation
and expansion of Cole Bemis' iconic Feather Icons. While Feather stopped updates
at ~280 icons, the Lucide project has expanded the collection to over 1,500
pixel-aligned, beautifully consistent vector glyphs.

The entire icon system is drawn on a strict 24×24 pixel grid with a default
stroke width of 2px, rounded caps, and rounded joins. This geometric discipline
ensures that every glyph in an application shares identical visual weight and
optical clarity, preventing the visual jarring common in mixed-source icon
libraries.

Lucide has become the de facto standard icon library for the modern React
ecosystem, chosen by shadcn/ui and many prominent design systems. It distributes
tree-shakeable packages for all major frameworks (`lucide-react`,
`lucide-vue-next`, `lucide-svelte`, `lucide-solid`, `lucide-angular`, and
vanilla web components), meaning only the icons explicitly imported in your code
are included in your client bundle.

## Paywall and pricing

- **Free:** The entire icon library, web browser, SVG downloads, and framework
  npm packages are 100% free and open source.
- **Paid:** None. No pro tier, paywall, or locked glyphs.
- **Sign-up required?** No.
- **Licence for client work:** Distributed under the ISC license (functionally
  identical to MIT / BSD 2-Clause). Free for unrestricted commercial, client,
  and proprietary applications without royalty fees.

Checked on the official Lucide website and repository on 2026-10-07.

## How to use

1. Install the framework package for your stack:

```bash
# For React / Next.js
bun add lucide-react

# For Vue 3
bun add lucide-vue-next

# For Svelte
bun add lucide-svelte
```

2. Import and use icons as tree-shakeable React components:

```tsx
import { Search, ArrowRight, ShieldCheck } from 'lucide-react'

export function ActionButton() {
  return (
    <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
      <ShieldCheck className="h-4 w-4" />
      <span>Verify Account</span>
      <ArrowRight className="h-4 w-4" />
    </button>
  )
}
```

3. Customize stroke, size, and color dynamically with props:

```tsx
<Search
  size={20}
  strokeWidth={1.5}
  color="currentColor"
  className="text-slate-500"
/>
```

## Examples

- [Lucide Icons Directory](https://lucide.dev/icons/) — Interactive search tool
  with tag filtering, size/stroke sliders, and one-click code copy.
- [Lucide React Guide](https://lucide.dev/guide/packages/lucide-react) —
  Official documentation for React integration, tree-shaking, and global icon
  configuration.
- [Lucide GitHub Repository](https://github.com/lucide-icons/lucide) — Upstream
  monorepo containing SVG source vectors, build scripts, and package generators.

## When to use it

- Use it as the default, standard icon set for all TolongLabs web applications,
  dashboards, and shadcn/ui-powered interfaces.
- Use it whenever you need consistent outline icons with configurable stroke
  weights (1px to 3px) across React, Vue, or Svelte.
- Skip it if your design system specifically calls for filled, duotone, or heavy
  weighted icons; use [Phosphor](../icons/phosphor.md) instead.
- Skip it if you need variable font ligatures with optical size axes; use
  [Material Symbols](../icons/material-symbols.md) instead.

## Agent notes

- Package: `lucide-react`. Every icon is exported in PascalCase (e.g.
  `arrow-right` becomes `<ArrowRight />`).
- Tree-shaking is fully supported in Vite, Next.js, and Webpack via ES module
  exports (`import { IconName } from 'lucide-react'`).
- Icon names match their search terms on `https://lucide.dev/icons/`.

## Alternatives in this repo

- [Phosphor](../icons/phosphor.md) — Comprehensive icon set offering six
  distinct weights (Thin, Light, Regular, Bold, Fill, Duotone).
- [Material Symbols](../icons/material-symbols.md) — Google's variable font icon
  family with 2,500+ glyphs and optical size axes.

## Sources

- [Lucide Website](https://lucide.dev/) — checked 2026-10-07
- [Lucide GitHub Repository](https://github.com/lucide-icons/lucide) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/visuals)
