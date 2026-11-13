---
name: Nexvyn UI
slug: nexvyn-ui
section: Component Libraries
section_slug: component-libraries
source_url: https://ui.nexvyn.dev/
designeer_url: https://designeer.xyz/components
designeer_blurb: Polished drop-in components for digital interfaces.
paywall: free
pricing_summary: 'Free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [react, tailwind, motion, shadcn, radix-ui]
best_for: [interactive landing pages, animated dashboards, tactile ui]
stack: ['react', 'nextjs', 'tailwind', 'motion', 'shadcn']
execution_mode: registry
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Nexvyn UI

> Polished drop-in components for digital interfaces. TolongLabs developers
> reach for Nexvyn UI to add tactile, physics-based micro-interactions and
> creative UI components to React applications using the shadcn registry
> workflow.

## At a glance

| Field          | Value                                                      |
| -------------- | ---------------------------------------------------------- |
| Source         | [ui.nexvyn.dev](https://ui.nexvyn.dev/)                    |
| Paywall        | **Free** — 100% free and open source                       |
| Open source    | Yes — MIT ([GitHub](https://github.com/Nexvyn/ui))         |
| Type           | Component library and shadcn registry                      |
| Works with     | React 19, Next.js 16, Tailwind CSS v4, Motion, Radix UI    |
| Best for       | Interactive landing pages, animated dashboards, tactile UI |
| Agent-friendly | Yes — shadcn CLI registry, copy-paste components           |

## What it is

Nexvyn UI is an open-source React component collection built specifically for
design engineers. Built with React 19, Tailwind CSS v4, Radix UI primitives, and
the Motion animation library, it emphasizes fluid spring physics and tangible
visual feedback.

Rather than offering generic form controls, Nexvyn UI focuses on expressive,
highly crafted interface elements that elevate product quality. Its catalog
includes:

- **Navigation Primitives:** Bouncing collapsible sidebars (`bounce-sidebar`),
  morphing pill navigations (`morph-nav`), and floating compass menus.
- **Interactive Inputs:** Password inputs with animated gaze-tracking eye
  indicators, multi-action AI composer inputs (`ai-input`), and adaptive action
  buttons.
- **Visual & Showcase Effects:** Dynamic shader-like gradient orbs (`fluid-orb`,
  `glow-orb`), gooey dropdown menus, and device mockups (laptop and phone
  containers).
- **Core Form Primitives:** Accessible accordions, breadcrumbs, checkboxes,
  context menus, and subtle tab strips.

Components are delivered as self-contained source files via the shadcn CLI
registry, giving developers complete ownership to modify markup, Tailwind
utilities, and spring configurations locally.

## Paywall and pricing

- **Free:** The full component collection and registry endpoints are 100% free
  and open source.
- **Paid:** None.
- **Sign-up required?** No.
- **Licence for client work:** Released under the MIT licence. Free for
  commercial and client web applications.

Checked on the official website and repository on 2026-10-07.

## How to use

1. Ensure your project is configured with shadcn and Tailwind CSS v4.
2. Install a chosen component using the shadcn CLI:

```bash
bunx --bun shadcn@latest add https://ui.nexvyn.dev/r/bounce-sidebar.json
```

3. Or install an interactive input directly:

```bash
bunx --bun shadcn@latest add https://ui.nexvyn.dev/r/password-input.json
```

4. Import and render the component in your React application:

```tsx
'use client'

import { PasswordInput } from '@/components/ui/password-input'

export function LoginForm() {
  return (
    <div className="max-w-sm space-y-4 p-6">
      <label className="text-sm font-medium">Password</label>
      <PasswordInput placeholder="Enter your password..." />
    </div>
  )
}
```

## Examples

- [Bounce Sidebar Component](https://ui.nexvyn.dev/components/bounce-sidebar) —
  Interactive preview demonstrating spring-damped collapsible navigation.
- [AI Input Component](https://ui.nexvyn.dev/components/ai-input) — Multi-slot
  chat composer with action drawers and attachment handling.
- [Nexvyn UI GitHub Repository](https://github.com/Nexvyn/ui) — Open source
  repository containing component registry manifests and source code.

## When to use it

- Use it when designing creative SaaS landing pages, portfolio showcases, or AI
  applications that need expressive micro-interactions.
- Use it when you want ready-made motion components that work seamlessly with
  Tailwind v4 and React 19 without configuration overhead.
- Skip it when you need strict, enterprise-minimal design systems without
  expressive physical motion; consider standard shadcn/ui or
  [Bearnie](../component-libraries/bearnie.md) instead.

## Agent notes

- Official documentation URL: `https://ui.nexvyn.dev/`.
- GitHub repository: `https://github.com/Nexvyn/ui`.
- Built on top of React 19, Motion (`motion`), and Tailwind CSS v4.
- Can be installed via
  `npx shadcn add https://ui.nexvyn.dev/r/<component>.json`.

## Alternatives in this repo

- [Sona UI](../component-libraries/sona-ui.md) — Animated React component
  library emphasizing tactile interactions and Motion springs.
- [Fluid Functionalism](../component-libraries/fluid-functionalism.md) —
  Motion-forward component library with dual Radix and Base UI backends.
- [startercn](../component-libraries/startercn.md) — Base template for
  publishing custom shadcn component registries.

## Sources

- [Nexvyn UI Official Website](https://ui.nexvyn.dev/) — checked 2026-10-07
- [Nexvyn UI Components](https://ui.nexvyn.dev/components) — checked 2026-10-07
- [Nexvyn UI GitHub Repository](https://github.com/Nexvyn/ui) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components)
