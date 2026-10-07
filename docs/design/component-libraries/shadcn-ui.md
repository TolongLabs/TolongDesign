---
name: shadcn/ui
slug: shadcn-ui
section: Component Libraries
section_slug: component-libraries
source_url: 'https://ui.shadcn.com/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Components you copy directly into codebases.'
paywall: free
pricing_summary: 'Completely free and open-source under the MIT license.'
open_source: true
license: MIT
category_tags: [react, tailwind, radix, components, design-system]
best_for: [design systems, web applications, dashboards, landing pages]
stack: [react, nextjs, tailwind]
agent_friendly: true
last_verified: 2026-10-07
---

# shadcn/ui

> Components you copy directly into codebases. TolongLabs developers and AI
> coding agents treat shadcn/ui as the default starting foundation for React and
> Next.js web applications, giving complete ownership of code without runtime
> package lock-in.

## At a glance

| Field          | Value                                                  |
| -------------- | ------------------------------------------------------ |
| Source         | [ui.shadcn.com](https://ui.shadcn.com/)                |
| Paywall        | **Free** — 100% open-source under MIT                  |
| Open source    | Yes — MIT ([GitHub](https://github.com/shadcn-ui/ui))  |
| Type           | Copy-paste component collection and CLI registry       |
| Works with     | React, Next.js, Vite, Remix, Tailwind CSS, Radix UI    |
| Best for       | Design systems, SaaS dashboards, web applications      |
| Agent-friendly | Yes — CLI automation, registry schema, copy-paste code |

## What it is

shadcn/ui is an open-source component distribution model created by shadcn.
Unlike traditional component libraries distributed as monolithic npm packages,
shadcn/ui provides beautifully designed, accessible components that developers
copy and paste directly into their own codebase.

Built on accessible primitives from Radix UI and styled with Tailwind CSS,
shadcn/ui components prioritize composability, total ownership, and granular
customizability. Because the code lives directly inside your project (typically
in `@/components/ui`), you have complete control over styling, DOM structure,
and runtime logic without wrestling with rigid component library abstractions.

The project features dozens of essential primitives (Dialog, Dropdown Menu,
Combobox, Sheet, Data Table, Form), advanced charting blocks built with
Recharts, and an extensive CLI registry system that has become the industry
standard for modern frontend component distribution.

## Paywall and pricing

- **Free:** Entire library, documentation, CLI tool, chart collection, and
  pre-built blocks are 100% free and open-source under the MIT license.
- **Paid:** No paid tiers, pro licenses, or enterprise paywalls.
- **Sign-up required?** No account or authentication required.
- **Licence for client work:** Permissive MIT license allows unrestricted use in
  commercial products, client websites, and internal company tools.

Verified on the official shadcn/ui site and GitHub repository on 2026-10-07.

## How to use

1. Initialize shadcn/ui in an existing React / Next.js project using Bun:

```bash
bunx --bun shadcn@latest init
```

2. Follow the interactive prompts to configure your Tailwind CSS setup, CSS
   variables, and component path aliases (stored in `components.json`).
3. Add specific components on demand using the CLI:

```bash
bunx --bun shadcn@latest add button dialog
```

4. Import and compose the components directly in your application:

```tsx
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

export function ActionDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Action</DialogTitle>
          <DialogDescription>
            This action modifies production data immediately.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
```

## Examples

- [Installation Guide](https://ui.shadcn.com/docs/installation) — Framework-
  specific setup guides for Next.js, Vite, Remix, Astro, and Laravel.
- [Component Documentation](https://ui.shadcn.com/docs/components) — Interactive
  previews and code examples for all 50+ core UI components.
- [Pre-Built Blocks](https://ui.shadcn.com/blocks) — Full-page application
  layouts including dashboard shells, authentication screens, and settings
  pages.
- [Area Charts](https://ui.shadcn.com/charts/area) — Composable, themeable chart
  components built with Recharts and Tailwind CSS.

## When to use it

- Use it as the baseline UI foundation for virtually all TolongLabs React and
  Next.js projects that require clean aesthetics and full accessibility.
- Use it when you need total ownership of the component source code to adapt
  internal design tokens and custom brand styling.
- Skip it when building in non-React frameworks (Vue, Svelte) or when purely
  unstyled primitives are preferred without Tailwind; consult
  [Base UI](../component-libraries/base-ui.md) or
  [Radix](../component-libraries/radix.md) instead.

## Agent notes

- Highly agent-friendly: AI coding assistants can directly execute
  `shadcn add <component>` via terminal tools or inspect local files in
  `components/ui/` without external documentation fetching.
- Supports registry URLs, custom registries, and `components.json` configuration
  files.
- Standard peer dependencies include `clsx`, `tailwind-merge`, and
  `class-variance-authority` (cva).

## Alternatives in this repo

- [Radix](../component-libraries/radix.md) — Unstyled headless primitive library
  that powers the core accessibility logic behind shadcn/ui.
- [Base UI](../component-libraries/base-ui.md) — Next-generation unstyled UI
  primitives from the MUI and Radix teams with native CSS styling flexibility.
- [21st.dev](../component-libraries/21st-dev.md) — Community marketplace and
  registry extending the shadcn ecosystem with thousands of third-party blocks.

## Sources

- [Official site](https://ui.shadcn.com/) — checked 2026-10-07
- [GitHub Repository](https://github.com/shadcn-ui/ui) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components)
