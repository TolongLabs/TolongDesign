---
name: Headless UI
slug: headless-ui
section: Component Libraries
section_slug: component-libraries
source_url: https://headlessui.com/
designeer_url: https://designeer.xyz/components
designeer_blurb: Unstyled accessible components from Tailwind Labs.
paywall: free
pricing_summary: 'Completely free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [headless, accessible, unstyled, tailwind, react, vue]
best_for: [accessible web apps, design systems, custom component styling]
stack: ['react', 'vue', 'tailwind']
execution_mode: package
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Headless UI

> Unstyled accessible components from Tailwind Labs. TolongLabs developers reach
> for Headless UI to build robust, fully accessible interactive components with
> zero default styles, allowing complete visual freedom via Tailwind CSS.

## At a glance

| Field          | Value                                                            |
| -------------- | ---------------------------------------------------------------- |
| Source         | [headlessui.com](https://headlessui.com/)                        |
| Paywall        | **Free** — 100% free and open source                             |
| Open source    | Yes — MIT ([GitHub](https://github.com/tailwindlabs/headlessui)) |
| Type           | Headless unstyled component primitives                           |
| Works with     | React, Vue, Tailwind CSS                                         |
| Best for       | Accessible web apps, design systems, custom component styling    |
| Agent-friendly | Yes — npm packages, TypeScript definitions, headless API         |

## What it is

Headless UI is an unstyled, fully accessible UI component library created by
Adam Wathan and the Tailwind Labs team. It provides the functional mechanics and
accessibility plumbing for complex interactive elements—such as dropdown menus,
modals, comboboxes, tabs, popovers, and disclosure toggles—without applying any
CSS styling or opinions.

Designing accessible interactive controls from scratch is notoriously difficult.
Elements like dropdown menus and comboboxes require complex keyboard navigation
(arrow key traversal, Home/End jumping, escape-key closing), ARIA attribute
synchronization (`aria-expanded`, `aria-activedescendant`), focus trapping, and
portal positioning. Headless UI encapsulates all of these behaviors into cleanly
composed React and Vue primitives.

Because the library ships zero CSS styles, it pairs naturally with Tailwind CSS.
Developers use standard Tailwind utility classes, conditional state modifiers
(like `data-focus`, `data-hover`, and `data-checked`), and transition helpers to
craft bespoke designs without wrestling with CSS overrides or specificity
battles.

## Paywall and pricing

- **Free:** The complete library, all component primitives for both React and
  Vue, and official documentation are 100% free and open source under the MIT
  licence.
- **Paid:** None. Headless UI has no paid tiers, pro licenses, or enterprise
  subscriptions.
- **Sign-up required?** No account is required to install the packages or read
  the documentation.
- **Licence for client work:** Released under the MIT licence. Completely free
  for use in commercial, client, and proprietary web applications without
  royalty fees.

Verified on the official Headless UI documentation and GitHub repository on
2026-10-07.

## How to use

1. Install Headless UI for React (or Vue):

```bash
bun add @headlessui/react
```

2. Render an accessible dropdown menu styled with Tailwind CSS:

```tsx
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export function ActionMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Options
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#account"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Account settings
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#support"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Support
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
```

## Examples

- [Menu (Dropdown) Component](https://headlessui.com/react/menu) — Fully
  accessible dropdown with keyboard selection and directional arrow navigation.
- [Dialog (Modal) Component](https://headlessui.com/react/dialog) —
  Focus-trapped accessible modal with background scroll lock and portal
  rendering.
- [Combobox (Autocomplete)](https://headlessui.com/react/combobox) — Accessible
  autocomplete input supporting filtering, multi-select, and virtual scrolling.

## When to use it

- Use it when you are building a custom design system or unique brand visual
  language and need robust accessibility foundations without visual styling
  opinions.
- Use it when building applications with React or Vue and Tailwind CSS where
  keyboard navigation and screen reader support are mandatory.
- Skip it when you want pre-styled, ready-to-paste components; use
  [HyperUI](../component-libraries/hyperui.md) or
  [Flowbite](../component-libraries/flowbite.md) instead.
- Skip it when you are already building with Radix UI and shadcn/ui; use
  [Base CN](../component-libraries/base-cn.md) or
  [Animate UI](../component-libraries/animate-ui.md) instead.

## Agent notes

- Official documentation URL: `https://headlessui.com/`.
- Source repository: `https://github.com/tailwindlabs/headlessui`.
- Headless UI v2 introduces native support for Tailwind `data-*` attribute
  modifiers (such as `data-[focus]:...` and `data-[closed]:...`), eliminating
  the need for render-prop function bodies in many components.
- In Next.js App Router, components using interactive state and browser events
  must be placed inside client components (`'use client'`).

## Alternatives in this repo

- [Base CN](../component-libraries/base-cn.md) — Unstyled primitives built on
  MUI's Base UI adapted for shadcn styling.
- [Animate UI](../component-libraries/animate-ui.md) — Accessible primitives
  enhanced with Motion spring transitions.

## Sources

- [Headless UI Official Site](https://headlessui.com/) — checked 2026-10-07
- [Headless UI Documentation](https://headlessui.com/react/menu) — checked
  2026-10-07
- [Headless UI GitHub Repository](https://github.com/tailwindlabs/headlessui) —
  checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components)
