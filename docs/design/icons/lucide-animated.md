---
name: Lucide Animated
slug: lucide-animated
section: Icons
section_slug: icons
source_url: https://lucide-animated.com/
designeer_url: https://designeer.xyz/visuals
designeer_blurb: Lucide icons enhanced with micro-animations.
paywall: free
pricing_summary: 'Completely free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [icons, animation, lucide, motion, shadcn]
best_for: [micro-interactions, animated icons, web apps, shadcn-ui]
stack: [react, motion, tailwind]
agent_friendly: true
last_verified: 2026-10-07
---

# Lucide Animated

> Lucide icons enhanced with micro-animations. TolongLabs developers reach for
> Lucide Animated to bring subtle, delightful reactive hover and click
> animations to modern React interfaces built with shadcn/ui.

## At a glance

| Field          | Value                                                         |
| -------------- | ------------------------------------------------------------- |
| Source         | [lucide-animated.com](https://lucide-animated.com/)           |
| Paywall        | **Free** — 100% free and open source                          |
| Open source    | Yes — MIT ([GitHub](https://github.com/pqoqubbw/icons))       |
| Type           | Animated SVG component library and shadcn registry            |
| Works with     | React, Next.js, Motion, Tailwind CSS, shadcn/ui               |
| Best for       | Micro-interactions, animated icons, web apps, shadcn-ui       |
| Agent-friendly | Yes — shadcn registry endpoint, llms.txt, MCP server endpoint |

## What it is

Lucide Animated is an open-source library of more than 350 animated icon
components for React, created by developer @pqoqubbw. Building upon the popular
Lucide open-source icon set, Lucide Animated equips each icon with purposeful
micro-animations using Motion (formerly Framer Motion).

Rather than animating the entire icon container indiscriminately, the animations
are crafted per glyph: bell icons swing on an anchor point, folders open and
close their flaps, search icons pulse, and battery icons fill progressively.
These details make user interfaces feel responsive, tactile, and modern without
feeling distracting.

Lucide Animated is built with direct support for the shadcn/ui ecosystem.
Developers can add individual animated icons directly into their component tree
using the shadcn CLI registry, keeping bundle sizes minimal and code completely
accessible for custom editing.

## Paywall and pricing

- **Free:** All 350+ animated icons, the registry endpoints, documentation, and
  MCP tools are completely free.
- **Paid:** None. Sponsorship is optional via GitHub Sponsors and the site.
- **Sign-up required?** No. No registration or account is needed.
- **Licence for client work:** Free for personal and commercial projects under
  the MIT License. Components may be used in commercial web products; direct
  resale of the icon library itself as a standalone asset pack is restricted.

Verified on the official GitHub repository and website on 2026-10-07.

## How to use

1. Add an animated icon component directly to your project using shadcn CLI:

```bash
bunx --bun shadcn@latest add https://lucide-animated.com/r/bell.json
```

2. Alternatively, install dependencies manually:

```bash
bun add motion lucide-react
```

3. Render the animated icon in your application:

```tsx
import { Bell } from '@/components/icons/bell'

export function NotificationsTrigger() {
  return (
    <button
      type="button"
      className="flex items-center gap-2 rounded-md p-2 hover:bg-neutral-100"
    >
      <Bell className="size-5 text-neutral-700" />
      <span className="text-sm font-medium">Alerts</span>
    </button>
  )
}
```

4. For AI coding workflows, leverage the machine-readable documentation: fetch
   `https://lucide-animated.com/llms.txt` or connect to the `/mcp` endpoint.

## Examples

- [Lucide Animated Explorer](https://lucide-animated.com) — Live preview gallery
  to test hover interactions on over 350 animated icons.
- [shadcn Registry Index](https://lucide-animated.com/r/registry.json) — Schema
  and list of all standalone animated components consumable via CLI.
- [GitHub Repository](https://github.com/pqoqubbw/icons) — Complete TypeScript
  and Motion source code with agent skills and MCP server.

## When to use it

- Use it when your design system already uses Lucide and you want to add
  interactive life to navigation links, buttons, and state indicators.
- Use it with Next.js and shadcn/ui to install individual animated icons
  directly into your `components/` folder without external runtime wrappers.
- Skip it when your project avoids Motion or requires zero JavaScript for icons;
  use static [Material Symbols](../icons/material-symbols.md) instead.
- Skip it if your existing codebase is built around Tailwind Labs' Heroicons;
  use [Heroicons Animated](../icons/heroicons-animated.md) instead.

## Agent notes

- Official documentation for agents: `https://lucide-animated.com/llms.txt`.
- Built-in MCP server available at `https://lucide-animated.com/mcp`.
- Registry components can be fetched individually:
  `https://lucide-animated.com/r/<icon-name>.json`.
- Uses `motion` and standard Tailwind utility classes for animation states.

## Alternatives in this repo

- [Heroicons Animated](../icons/heroicons-animated.md) — Animated micro-motion
  components based on Heroicons for React, Vue, Svelte, and Angular.
- [icons0](../icons/icons0.md) — Fast icon search engine with vector discovery
  and MCP support for static SVG icons.
- [Material Symbols](../icons/material-symbols.md) — Google variable icon font
  supporting CSS-driven weight, grade, and fill transitions.

## Sources

- [Official site](https://lucide-animated.com/) — checked 2026-10-07
- [GitHub repository](https://github.com/pqoqubbw/icons) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals)
