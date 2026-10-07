---
name: Flowbite
slug: flowbite
section: Component Libraries
section_slug: component-libraries
source_url: https://flowbite.com/
designeer_url: https://designeer.xyz/components
designeer_blurb: Extensive component library for Tailwind CSS.
paywall: freemium
pricing_summary:
  'Free open-source core library under MIT; Flowbite Pro is $149 Developer, $249
  Designer, or $799 Team.'
open_source: true
license: MIT
category_tags: [tailwind, components, framework-wrappers, react, svelte, vue]
best_for: [web applications, enterprise dashboards, marketing sites]
stack: [tailwind, javascript, react, svelte, vue]
agent_friendly: true
last_verified: 2026-10-07
---

# Flowbite

> Extensive component library for Tailwind CSS. TolongLabs developers reach for
> Flowbite to build complex web applications and admin portals with a
> battle-tested library of over 600 components, interactive JS plugins, and
> native framework wrappers.

## At a glance

| Field          | Value                                                        |
| -------------- | ------------------------------------------------------------ |
| Source         | [flowbite.com](https://flowbite.com/)                        |
| Paywall        | **Freemium** — free open-source core; Pro from $149 one-time |
| Open source    | Yes — MIT ([GitHub](https://github.com/themesberg/flowbite)) |
| Type           | Component library, Tailwind plugin, and UI blocks            |
| Works with     | Tailwind CSS, React, Vue, Svelte, Angular, vanilla JS        |
| Best for       | Web applications, enterprise dashboards, marketing sites     |
| Agent-friendly | Yes — npm packages, CLI, comprehensive typed documentation   |

## What it is

Flowbite is one of the most mature and widely adopted component libraries built
on top of Tailwind CSS. Maintained by Bergson and the Themesberg team, it
provides over 600 UI components, form controls, charts, interactive elements,
and layout blocks designed to adhere to web accessibility standards.

Unlike libraries that provide only raw utility snippets, Flowbite includes an
interactive JavaScript engine that powers dynamic behaviors—such as drawer
navigation, dropdown menus, modal overlays, tabs, datepickers, and tooltips—via
standard HTML `data-*` attributes. This enables frontend developers to implement
interactive UI controls without binding themselves to a specific client-side
JavaScript framework.

Flowbite also offers official, deeply integrated framework packages:
`flowbite-react`, `flowbite-svelte`, and `flowbite-vue`. These wrappers expose
typed, idiomatic component interfaces while using Tailwind CSS utility classes
under the hood for styling and theming.

## Paywall and pricing

- **Free:** The core Flowbite library (all base components, form elements,
  interactive JavaScript plugins, and community framework adapters) is 100% free
  and open source under the MIT licence.
- **Paid:** Flowbite Pro provides access to advanced application blocks,
  dashboard screen templates, and a comprehensive Figma design system. Pricing
  is structured as one-time lifetime purchases: Developer Edition is $149 (1
  developer), Designer Edition is $249 (includes Figma file), and Team Edition
  is $799 (up to 10 members).
- **Sign-up required?** No account is required to install the open-source npm
  packages. An account is required for purchasing and downloading Pro packages.
- **Licence for client work:** Free MIT components are permitted for unlimited
  commercial and client projects. Flowbite Pro permits unlimited commercial,
  client, and SaaS deployments.

Verified on the official Flowbite pricing and licensing documentation on
2026-10-07.

## How to use

1. Install Flowbite as a package in your project:

```bash
bun add flowbite
```

2. Add the Flowbite plugin to your `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.js'
  ],
  plugins: [require('flowbite/plugin')]
}
```

3. Initialize Flowbite's interactive listeners in your main client file:

```javascript
import 'flowbite'
```

4. Alternatively, in a React project, install and use `flowbite-react`:

```bash
bun add flowbite-react
```

```tsx
import { Button, Modal } from 'flowbite-react'
import { useState } from 'react'

export function ConfirmActionModal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open confirmation</Button>
      <Modal show={open} onClose={() => setOpen(false)}>
        <Modal.Header>Confirm changes</Modal.Header>
        <Modal.Body>
          <p className="text-base text-gray-500 dark:text-gray-400">
            Are you sure you want to deploy these configuration updates?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpen(false)}>Proceed</Button>
          <Button color="gray" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
```

## Examples

- [Flowbite Button Component](https://flowbite.com/docs/components/buttons/) —
  Comprehensive documentation on button variants, gradients, sizing, and icons.
- [Flowbite Modal Component](https://flowbite.com/docs/components/modal/) —
  Modal dialog with vanilla data-attribute triggers and React state bindings.
- [Flowbite UI Blocks](https://flowbite.com/blocks/) — Hundreds of responsive
  application and marketing layout blocks.

## When to use it

- Use it when building enterprise web applications, admin portals, or client
  dashboards that require a proven, extensive set of accessible UI widgets.
- Use it when your team values official framework wrappers across React, Svelte,
  or Vue rather than managing custom copy-paste primitive files.
- Skip it when your project architecture strictly follows shadcn/ui and Radix
  primitives; use [Preline UI](../component-libraries/preline-ui.md) or
  [Base CN](../component-libraries/base-cn.md) instead.
- Skip it when you only need unstyled headless primitives; use
  [Headless UI](../component-libraries/headless-ui.md) instead.

## Agent notes

- Official documentation URL: `https://flowbite.com/docs`.
- Source repository: `https://github.com/themesberg/flowbite`.
- When using Tailwind v3, ensure `./node_modules/flowbite/**/*.js` is added to
  the `content` glob in `tailwind.config.js` to ensure interactive utility
  classes are generated.
- In Next.js App Router, `flowbite-react` components containing interactive
  state must be used within client components annotated with `'use client'`.

## Alternatives in this repo

- [Preline UI](../component-libraries/preline-ui.md) — Comprehensive Tailwind
  CSS component system with advanced dashboard blocks and MCP integration.
- [TailGrids](../component-libraries/tailgrids.md) — Responsive Tailwind blocks
  geared toward landing pages and marketing sections.

## Sources

- [Flowbite Official Site](https://flowbite.com/) — checked 2026-10-07
- [Flowbite Documentation](https://flowbite.com/docs) — checked 2026-10-07
- [Flowbite Pricing](https://flowbite.com/pro/) — checked 2026-10-07
- [Flowbite GitHub Repository](https://github.com/themesberg/flowbite) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components)
