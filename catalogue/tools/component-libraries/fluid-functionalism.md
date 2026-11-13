---
name: Fluid Functionalism
slug: fluid-functionalism
section: Component Libraries
section_slug: component-libraries
source_url: https://www.fluidfunctionalism.com/
designeer_url: https://designeer.xyz/components
designeer_blurb: Components designed with purposeful physical animation.
paywall: free
pricing_summary: 'Free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [react, animation, motion, shadcn, radix-ui]
best_for: [web applications, animated ui, interactive dashboards]
stack: ['react', 'nextjs', 'tailwind', 'motion', 'shadcn']
execution_mode: registry
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Fluid Functionalism

> Components designed with purposeful physical animation. TolongLabs developers
> reach for Fluid Functionalism to build high-polish web applications where
> interface motion communicates system state rather than decorative flair.

## At a glance

| Field          | Value                                                                    |
| -------------- | ------------------------------------------------------------------------ |
| Source         | [fluidfunctionalism.com](https://www.fluidfunctionalism.com/)            |
| Paywall        | **Free** — 100% free and open source                                     |
| Open source    | Yes — MIT ([GitHub](https://github.com/mickadesign/fluid-functionalism)) |
| Type           | Component library and shadcn registry                                    |
| Works with     | React 19, Next.js 15, Tailwind CSS v4, Motion                            |
| Best for       | Web applications, animated UI, interactive dashboards                    |
| Agent-friendly | Yes — shadcn CLI registry, presets, copy-paste components                |

## What it is

Fluid Functionalism is an open-source React component library and shadcn/ui
registry created by product designer Micka Touillaud (@micka_design). The
project is anchored in functional motion: animations are driven by physical
spring dynamics designed to make state transitions immediately legible and
responsive to user input.

The library offers components across two distinct primitive backends: Radix UI
and Base UI. Both share the exact same component API, allowing engineering teams
to swap or standardize underlying headless primitives without refactoring layout
or interaction logic.

Every component shares a unified system of foundational design mechanics:

- **Fluid Hover:** A single floating highlight glides across lists and rows
  without blinking or jumping during cursor movement.
- **Spring Physics:** Three calibrated spring curves (fast, moderate, slow) with
  asymmetric entrance and exit speeds that can be interrupted smoothly.
- **Optical Weight Compensation:** Active or hovered typography changes weight
  without triggering reflow or horizontal layout shifts.
- **Elevation Surfaces:** Eight distinct elevation levels that maintain popover
  and modal clarity across both light and dark color schemes.

## Paywall and pricing

- **Free:** The complete component library, presets, and shared systems are free
  and open source.
- **Paid:** None. No subscription fees or proprietary barriers.
- **Sign-up required?** No. All components are accessible via public registry
  URLs and GitHub.
- **Licence for client work:** Distributed under the MIT licence. Completely
  permitted for personal, commercial, and client deliverables.

Checked on the official repository and site documentation on 2026-10-07.

## How to use

1. Install a component directly into your codebase using the shadcn CLI:

```bash
bunx --bun shadcn@latest add @fluid/dialog
```

2. Alternatively, add components using Base UI primitives instead of Radix:

```bash
bunx --bun shadcn@latest add @fluid/base/dialog
```

3. Import and render the component within your application:

```tsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

export function SettingsModal() {
  return (
    <Dialog>
      <DialogTrigger>Open Settings</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Account Settings</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">
          Update your profile preferences with spring-based motion.
        </p>
      </DialogContent>
    </Dialog>
  )
}
```

## Examples

- [Fluid Functionalism Documentation](https://www.fluidfunctionalism.com/docs/dialog)
  — Interactive preview demonstrating spring-damped dialog modals.
- [Fluid Hover System](https://www.fluidfunctionalism.com/docs/fluid-hover) —
  Showcase of smooth cursor-tracked list item highlights.
- [Fluid Functionalism GitHub](https://github.com/mickadesign/fluid-functionalism)
  — Full source repository detailing preset schemas and test suites.

## When to use it

- Use it when crafting flagship product interfaces, SaaS dashboards, or complex
  web applications that require tactile, spring-based motion.
- Use it when your team desires shadcn compatibility alongside interchangeable
  Radix UI and Base UI headless foundations.
- Skip it when building static content pages where runtime animation libraries
  introduce unwanted bundle size; consider
  [Bearnie](../component-libraries/bearnie.md) or standard HTML instead.

## Agent notes

- Official documentation URL: `https://www.fluidfunctionalism.com/`.
- Built for React 19, Next.js 15, Tailwind CSS v4, and Framer Motion / Motion.
- Uses standard shadcn registry manifests; agents can pull specific components
  via `@fluid/<component>` or raw JSON URLs.
- Lucide React is the default icon dependency, with support for custom icon
  providers via `IconProvider`.

## Alternatives in this repo

- [interior-dev](../component-libraries/interior-dev.md) — Micro-interactions
  and transitions tuned for rapid click responsiveness.
- [Sona UI](../component-libraries/sona-ui.md) — Animated React components with
  spring dynamics and copy-paste ownership.
- [Nexvyn UI](../component-libraries/nexvyn-ui.md) — Polished component kit
  blending Radix primitives with subtle tactile motion.

## Sources

- [Fluid Functionalism Website](https://www.fluidfunctionalism.com/) — checked
  2026-10-07
- [Fluid Functionalism GitHub](https://github.com/mickadesign/fluid-functionalism)
  — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components)
