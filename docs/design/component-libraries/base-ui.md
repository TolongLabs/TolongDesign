---
name: Base UI
slug: base-ui
section: Component Libraries
section_slug: component-libraries
source_url: 'https://base-ui.com/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Unstyled component primitives from Radix and MUI.'
paywall: free
pricing_summary: 'Completely free and open-source under the MIT license.'
open_source: true
license: MIT
category_tags: [react, unstyled, primitives, accessibility, headless, mui]
best_for: [design systems, accessible primitives, headless UI, custom styling]
stack: [react]
agent_friendly: true
last_verified: 2026-10-07
---

# Base UI

> Unstyled component primitives from Radix and MUI. TolongLabs developers reach
> for Base UI when engineering custom design systems that demand uncompromising
> accessibility standards without fighting pre-existing visual opinions.

## At a glance

| Field          | Value                                                       |
| -------------- | ----------------------------------------------------------- |
| Source         | [base-ui.com](https://base-ui.com/)                         |
| Paywall        | **Free** — 100% open-source under MIT                       |
| Open source    | Yes — MIT ([GitHub](https://github.com/mui/base-ui))        |
| Type           | Headless, unstyled accessible UI primitives                 |
| Works with     | React, Next.js, plain CSS, Tailwind CSS, CSS Modules        |
| Best for       | Bespoke enterprise design systems, accessibility compliance |
| Agent-friendly | Yes — single package, predictable API, LLM docs             |

## What it is

Base UI is an open-source library of unstyled, accessible UI component
primitives for React. Developed collaboratively by the teams behind Material UI
(MUI), Radix UI, and Floating UI, Base UI consolidates lessons learned from
first-generation headless libraries into a cohesive, highly refined foundation.

Unlike styled libraries that prescribe class names and color tokens, Base UI
imposes zero visual styling. It handles the intricate mechanics of user
interaction: robust keyboard navigation, ARIA attributes, focus trapping, screen
reader announcements, popup collisions, and portal layering.

The library is distributed as a single tree-shakable npm package
(`@base-ui/react`). Components are engineered for composability, meaning you can
style them using standard CSS, Tailwind utility classes, CSS Modules, or
styled-components without fighting CSS specificity wars or runtime style
injections.

## Paywall and pricing

- **Free:** The complete package, all component primitives, source code, and
  documentation are 100% free under the permissive MIT license.
- **Paid:** No paid tiers, commercial licenses, or paywalled components.
- **Sign-up required?** No account or registration required.
- **Licence for client work:** Permissive MIT license allows unrestricted use in
  commercial client products, enterprise software, and open-source packages.

Verified on the official Base UI website and GitHub repository on 2026-10-07.

## How to use

1. Install the single package into your React project using Bun:

```bash
bun add @base-ui/react
```

2. Configure a stacking context isolation in your root CSS to ensure portal
   popups always render above page contents:

```css
/* styles.css */
.root {
  isolation: isolate;
}
```

3. Import and compose unstyled primitives, styling them with your preferred
   solution (e.g. Tailwind CSS):

```tsx
import { Dialog } from '@base-ui/react/dialog'

export function AccessibleModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded bg-black px-4 py-2 text-white">
        View details
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 bg-black/50" />
        <Dialog.Popup className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-xl">
          <Dialog.Title className="text-lg font-bold">
            Project Details
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-sm text-gray-600">
            Fully accessible modal dialog built with Base UI primitives.
          </Dialog.Description>
          <Dialog.Close className="mt-4 rounded bg-gray-200 px-3 py-1 text-sm">
            Close
          </Dialog.Close>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
```

## Examples

- [Base UI Quick Start](https://base-ui.com/react/overview/quick-start) — Guide
  covering installation, portal setup, and LLM coding assistant workflows.
- [Dialog Component Docs](https://base-ui.com/react/components/dialog) —
  Comprehensive API reference and styling examples for accessible modal dialogs.
- [Popover Component Docs](https://base-ui.com/react/components/popover) —
  Floating UI-backed popovers with collision detection and position flipping.
- [GitHub Repository](https://github.com/mui/base-ui) — Public repository with
  full test suites and architectural documentation.

## When to use it

- Use it when building a custom corporate design system from scratch where
  default Tailwind styles or Radix opinions need complete re-architecting.
- Use it to guarantee strict WCAG 2.2 accessibility compliance for enterprise or
  government clients.
- Skip it when you want pre-styled, ready-to-use visual components out of the
  box; choose [shadcn/ui](../component-libraries/shadcn-ui.md) instead.

## Agent notes

- Highly agent-friendly: all primitives are exported from `@base-ui/react` with
  consistent compound component APIs (`Component.Root`, `Component.Trigger`,
  `Component.Popup`).
- Base UI maintains dedicated LLM documentation and prompts on its site,
  optimizing it for AI-assisted frontend generation.
- Tree-shakable: importing multiple components from `@base-ui/react` does not
  bloat bundle size.

## Alternatives in this repo

- [Radix](../component-libraries/radix.md) — The landmark unstyled primitive
  library from WorkOS that pioneered headless React component architecture.
- [shadcn/ui](../component-libraries/shadcn-ui.md) — Pre-styled, copy-paste
  components built by layering Tailwind CSS on top of headless primitives.

## Sources

- [Official site](https://base-ui.com/) — checked 2026-10-07
- [GitHub Repository](https://github.com/mui/base-ui) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components)
