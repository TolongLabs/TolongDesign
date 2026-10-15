---
name: Base CN
slug: base-cn
section: Component Libraries
section_slug: component-libraries
source_url: https://basecn.dev/
designeer_url: https://designeer.xyz/components
designeer_blurb: Base UI primitives adapted for shadcn.
paywall: free
pricing_summary: 'Completely free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [base-ui, shadcn, headless, accessible, react, tailwind]
best_for: [react applications, accessible component systems, design systems]
stack: ['react', 'tailwind', 'base-ui', 'shadcn']
execution_mode: registry
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Base CN

> Base UI primitives adapted for shadcn. TolongLabs developers reach for Base CN
> to combine shadcn/ui's copy-paste architecture and Tailwind CSS styling with
> MUI's robust, unstyled Base UI component primitives.

## At a glance

| Field          | Value                                                            |
| -------------- | ---------------------------------------------------------------- |
| Source         | [basecn.dev](https://basecn.dev/)                                |
| Paywall        | **Free** — 100% free and open source                             |
| Open source    | Yes — MIT ([GitHub](https://github.com/akash3444/basecn))        |
| Type           | Headless component distribution and shadcn registry              |
| Works with     | React, Next.js, Tailwind CSS, Base UI                            |
| Best for       | React applications, accessible component systems, design systems |
| Agent-friendly | Yes — copy-paste code, shadcn CLI registry integration           |

## What it is

Base CN is an open-source component distribution library created by Akash
(@akash3444) that ports the familiar component interface and styling patterns of
shadcn/ui to MUI's modern Base UI headless primitives. It offers developers an
alternative to the default Radix UI foundation while keeping the same
utility-first Tailwind CSS design.

Base UI is an unstyled component library developed by the team behind Material
UI, engineered for extreme performance, clean DOM structures, and comprehensive
WAI-ARIA accessibility compliance. Base CN wraps these primitives in the
opinionated Tailwind utility classes that developers expect from shadcn/ui,
covering buttons, dialogs, dropdowns, inputs, sliders, and tooltips.

By using Base CN, teams gain access to Base UI's advanced positioning, focus
management, and composite widget handling without having to write custom CSS or
invent design tokens from scratch. Components are added directly to the local
codebase using the shadcn CLI registry format.

## Paywall and pricing

- **Free:** The complete Base CN library, all component implementations, and
  registry endpoints are 100% free and open source under the MIT licence.
- **Paid:** None. There are no paid subscriptions, commercial paywalls, or
  premium tiers.
- **Sign-up required?** No account is needed to view documentation or install
  components.
- **Licence for client work:** Released under the MIT licence. Free for
  commercial and client work without royalties or mandatory attribution.

Verified on the official Base CN website and GitHub repository on 2026-10-07.

## How to use

1. Ensure your Next.js or React application is configured with Tailwind CSS and
   shadcn/ui.

2. Install Base UI primitives:

```bash
bun add @base-ui-components/react
```

3. Add a component using the shadcn CLI pointing to Base CN's registry:

```bash
bunx --bun shadcn@latest add "https://basecn.dev/r/button"
```

4. Render the component in your application:

```tsx
import { Button } from '@/components/ui/button'

export function ActionSection() {
  return (
    <div className="flex gap-4 p-6">
      <Button variant="default">Save changes</Button>
      <Button variant="outline">Cancel</Button>
    </div>
  )
}
```

## Examples

- [Base CN Button](https://basecn.dev/docs/components/button) — Accessible
  button variants powered by Base UI's native focus ring management.
- [Base CN Dialog](https://basecn.dev/docs/components/dialog) — Modal dialog
  with accessible focus trapping and smooth portal mounting.
- [Base CN Select](https://basecn.dev/docs/components/select) — Custom select
  menu with full keyboard traversal and floating positioning.

## When to use it

- Use it when your team prefers Base UI's architectural model and DOM rendering
  over Radix UI, but still wants the developer experience and Tailwind styling
  of shadcn/ui.
- Use it when building enterprise React web apps where Base UI's accessibility
  and performance guarantees are desired.
- Skip it when your project does not use React; use
  [Flowbite](../component-libraries/flowbite.md) or
  [Preline UI](../component-libraries/preline-ui.md) instead.
- Skip it when you want pure, unstyled headless primitives without shadcn
  styling conventions; use [Headless UI](../component-libraries/headless-ui.md)
  instead.

## Agent notes

- Official documentation URL: `https://basecn.dev/docs/components/accordion`.
- GitHub repository: `https://github.com/akash3444/basecn`.
- Compatible with
  `bunx --bun shadcn@latest add "https://basecn.dev/r/<component>"`.
- Requires `@base-ui-components/react` as the underlying headless engine.
- All interactive components that use browser events or client-side hooks
  require `'use client'` in Next.js App Router.

## Alternatives in this repo

- [Headless UI](../component-libraries/headless-ui.md) — Unstyled accessible
  primitives from Tailwind Labs supporting both React and Vue.
- [Animate UI](../component-libraries/animate-ui.md) — Motion-enhanced
  primitives for the standard Radix/shadcn ecosystem.

## Sources

- [Base CN Official Site](https://basecn.dev/) — checked 2026-10-07
- [Base CN Documentation](https://basecn.dev/docs/components/accordion) —
  checked 2026-10-07
- [Base CN GitHub Repository](https://github.com/akash3444/basecn) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components)
