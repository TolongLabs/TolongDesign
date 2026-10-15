---
name: Watermelon UI
slug: watermelon-ui
section: Component Libraries
section_slug: component-libraries
source_url: https://watermelon.sh/
designeer_url: https://designeer.xyz/components
designeer_blurb: React component library for shadcn ecosystem.
paywall: free
pricing_summary: 'Completely free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [react, tailwind, shadcn, components, dashboards, templates]
best_for: [web applications, dashboards, shadcn projects]
stack: ['react', 'nextjs', 'tailwind', 'shadcn']
execution_mode: registry
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Watermelon UI

> React component library for shadcn ecosystem. TolongLabs developers reach for
> Watermelon UI to expand shadcn/ui projects with production-ready blocks,
> dashboard interfaces, and pre-built React components.

## At a glance

| Field          | Value                                                      |
| -------------- | ---------------------------------------------------------- |
| Source         | [watermelon.sh](https://watermelon.sh/)                    |
| Paywall        | **Free** — 100% free and open source                       |
| Open source    | Yes — MIT ([GitHub](https://github.com/WatermelonCorp))    |
| Type           | Component registry and UI block collection                 |
| Works with     | React, Next.js, Tailwind CSS, shadcn/ui                    |
| Best for       | Web applications, dashboards, shadcn projects              |
| Agent-friendly | Yes — shadcn CLI registry integration, copy-paste snippets |

## What it is

Watermelon UI is an open-source component registry designed to extend the
shadcn/ui ecosystem. Maintained by WatermelonCorp, it provides a comprehensive
suite of production-ready React components, full-page dashboard layouts, and
application blocks styled with Tailwind CSS.

Rather than competing with shadcn/ui or introducing another proprietary styling
abstraction, Watermelon UI operates as a natural extension. It uses the exact
same underlying architectural principles: accessible headless primitives, clean
Tailwind CSS utility classes, and direct source-code distribution.

The library is especially strong in complex application patterns: multi-step
forms, datatable filters, dashboard navigation bars, user profile management
panels, and analytics widgets. By leveraging the shadcn registry format,
developers can add Watermelon UI components directly into their existing
repositories without configuration drift.

## Paywall and pricing

- **Free:** The complete Watermelon UI library, all components, blocks, and
  dashboard templates are 100% free and open source under the MIT licence.
- **Paid:** None. There are no paid tiers, subscriptions, or paywalls.
- **Sign-up required?** No account is required to browse, preview, or copy any
  components.
- **Licence for client work:** Distributed under the MIT licence. Free for
  commercial and client projects without royalties or usage restrictions.

Verified on the official Watermelon UI website and registry documentation on
2026-10-07.

## How to use

1. Ensure your Next.js or React application is configured with Tailwind CSS and
   shadcn/ui.

2. Add a component directly using the shadcn registry CLI:

```bash
bunx --bun shadcn@latest add "https://ui.watermelon.sh/r/button"
```

3. Alternatively, copy component source code directly from the documentation:

```tsx
import { Button } from '@/components/ui/button'

export function UserActions() {
  return (
    <div className="flex items-center gap-3">
      <Button variant="default">Save changes</Button>
      <Button variant="ghost">Cancel</Button>
    </div>
  )
}
```

## Examples

- [Watermelon UI Components](https://ui.watermelon.sh/components) — Grid of
  available UI components including inputs, cards, and dialogs.
- [Watermelon UI Blocks](https://ui.watermelon.sh/blocks) — Full application
  sections including settings pages and dashboard summaries.
- [Watermelon Official Portal](https://watermelon.sh/) — Overview of the
  Watermelon developer tool ecosystem.

## When to use it

- Use it when your project already uses shadcn/ui and you need additional
  ready-made application blocks and page layouts.
- Use it when building SaaS web applications that require clean, consistent
  design without reinventing complex UI layouts.
- Skip it when you are building marketing sites that require high-intensity 3D
  effects or canvas particles; use
  [Magic UI](../component-libraries/magic-ui.md) or
  [Aceternity UI](../component-libraries/aceternity-ui.md) instead.
- Skip it when your project does not use React; use
  [Flowbite](../component-libraries/flowbite.md) or
  [Preline UI](../component-libraries/preline-ui.md) instead.

## Agent notes

- Official documentation URL: `https://ui.watermelon.sh/`.
- Components are fully compatible with `bunx --bun shadcn@latest add`.
- Integrates seamlessly with existing shadcn/ui configurations in
  `components.json`.
- Note: Do not confuse Watermelon UI with WatermelonDB (the local database
  library for React Native); this resource is strictly a React component
  library.

## Alternatives in this repo

- [Beautiful UI](../component-libraries/beautiful-ui.md) — Free open-source
  shadcn component library tailored for AI-native user interfaces.
- [Base CN](../component-libraries/base-cn.md) — Rebuilt shadcn components using
  MUI's Base UI primitives.

## Sources

- [Watermelon UI Official Site](https://watermelon.sh/) — checked 2026-10-07
- [Watermelon UI Components](https://ui.watermelon.sh/components) — checked
  2026-10-07
- [Watermelon GitHub](https://github.com/WatermelonCorp) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components)
