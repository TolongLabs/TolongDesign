---
name: Radix
slug: radix
section: Component Libraries
section_slug: component-libraries
source_url: 'https://www.radix-ui.com/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Accessible unstyled UI primitives for React.'
paywall: free
pricing_summary: 'Completely free and open-source under the MIT license.'
open_source: true
license: MIT
category_tags:
  [react, primitives, accessibility, headless, radix-themes, unstyled]
best_for: [accessible primitives, design systems, headless components]
stack: ['react']
execution_mode: package
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Radix

> Accessible unstyled UI primitives for React. TolongLabs developers reach for
> Radix as the battle-tested standard for building accessible, headless React
> components and custom design systems.

## At a glance

| Field          | Value                                                        |
| -------------- | ------------------------------------------------------------ |
| Source         | [radix-ui.com](https://www.radix-ui.com/)                    |
| Paywall        | **Free** — 100% open-source under MIT                        |
| Open source    | Yes — MIT ([GitHub](https://github.com/radix-ui/primitives)) |
| Type           | Headless accessible primitives and theme system              |
| Works with     | React, Next.js, Tailwind CSS, CSS Modules, Stitches          |
| Best for       | Accessible component logic, design systems, UI themes        |
| Agent-friendly | Yes — granular npm packages, stable compound APIs            |

## What it is

Radix UI is a comprehensive open-source design engineering ecosystem maintained
by WorkOS. Radix is best known for Radix Primitives—a collection of 28+
unstyled, accessible UI components for React that handle the complex behavioral
logic of interactive interfaces without prescribing styling.

Radix Primitives follow the WAI-ARIA Authoring Practices guide, providing
complete keyboard navigation, automatic ARIA markup, focus management, portal
rendering, and collision detection out of the box. Because primitives are
headless and unstyled, developers can wrap them in Tailwind CSS, plain CSS, or
CSS Modules. Radix Primitives serve as the foundational engine beneath many of
the web's top design systems, including shadcn/ui.

In addition to headless primitives, the ecosystem offers Radix Themes (a pre-
styled, accessible React component library optimized for rapid development),
Radix Colors (an accessible, comprehensive color system with automated dark mode
pairing), and Radix Icons.

## Paywall and pricing

- **Free:** Primitives, Themes, Colors, Icons, and documentation are completely
  free and open-source under the MIT license.
- **Paid:** No paid subscriptions, commercial license fees, or gated modules.
- **Sign-up required?** No account or registration required.
- **Licence for client work:** Permissive MIT license allows unrestricted
  commercial use across client applications, proprietary products, and SaaS.

Verified on the official Radix UI website and GitHub repository on 2026-10-07.

## How to use

1. Install individual unstyled primitives as needed in your React project:

```bash
bun add @radix-ui/react-dialog
```

2. Alternatively, for pre-styled components, install Radix Themes:

```bash
bun add @radix-ui/themes
```

3. Compose unstyled primitives with your preferred CSS or Tailwind utility
   classes:

```tsx
import * as Dialog from '@radix-ui/react-dialog'

export function UserDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded bg-blue-600 px-4 py-2 text-white">
        Open Account
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6 shadow-lg">
          <Dialog.Title className="text-lg font-semibold">
            Account Overview
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-sm text-gray-500">
            Manage your personal settings and active subscriptions.
          </Dialog.Description>
          <Dialog.Close className="mt-4 rounded bg-gray-100 px-3 py-1 text-sm">
            Close
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
```

## Examples

- [Radix Primitives Overview](https://www.radix-ui.com/primitives) — Full
  component catalog covering Dialog, Dropdown Menu, Tooltip, Popover, and Tabs.
- [Radix Themes Getting Started](https://www.radix-ui.com/themes/docs/overview/getting-started)
  — Documentation for building full applications with Radix's pre-styled system.
- [Radix Colors System](https://www.radix-ui.com/colors) — 12-step color scales
  engineered for accessible contrast, dark mode pairing, and component states.
- [Radix Icons](https://www.radix-ui.com/icons) — Crisp 15x15 SVG icon library
  packaged for React applications.

## When to use it

- Use it when you need fine-grained control over individual UI primitives (e.g.
  installing just `@radix-ui/react-tooltip` or `@radix-ui/react-popover`).
- Use it as the bedrock for bespoke design systems where strict ARIA compliance
  is mandatory.
- Skip it if you want ready-to-use styled components with Tailwind copy-paste
  convenience; choose [shadcn/ui](../component-libraries/shadcn-ui.md) instead.

## Agent notes

- Highly agent-friendly: granular package structure (`@radix-ui/react-*`) allows
  AI coding agents to install only the exact primitives needed.
- Consistent compound component naming convention (`Dialog.Root`,
  `Dialog.Trigger`, `Dialog.Content`).
- Excellent TypeScript typings and event handlers (`onOpenChange`, `asChild`).

## Alternatives in this repo

- [Base UI](../component-libraries/base-ui.md) — Next-generation unstyled UI
  primitives from the MUI and Radix contributors with single-package
  distribution.
- [shadcn/ui](../component-libraries/shadcn-ui.md) — Pre-styled React components
  that combine Radix primitives with Tailwind CSS utility classes.

## Sources

- [Official site](https://www.radix-ui.com/) — checked 2026-10-07
- [GitHub Repository](https://github.com/radix-ui/primitives) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components)
