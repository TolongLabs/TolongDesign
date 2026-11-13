---
name: Componentry
slug: componentry
section: Component Libraries
section_slug: component-libraries
source_url: https://componentry.dev/
designeer_url: https://designeer.xyz/components
designeer_blurb: 'Customizable React UI primitives and components.'
paywall: free
pricing_summary:
  'Public component docs and registry commands are available; no paid tier or
  price is published.'
open_source: false
license: unknown
category_tags: [react, animation, webgl, shadcn]
best_for: [animated backgrounds, scroll effects, card interactions]
stack: ['react', 'nextjs', 'tailwind', 'shadcn']
execution_mode: registry
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Componentry

> Customizable React UI primitives and components. Use its focused collection
> when a page needs a documented animation or GPU effect.

## At a glance

| Field          | Value                                                         |
| -------------- | ------------------------------------------------------------- |
| Source         | [componentry.dev](https://componentry.dev/)                   |
| Paywall        | **Free** — public pages and install commands                  |
| Open source    | Source is copied into projects; no project-wide licence found |
| Licence        | Unknown; component pages advise checking upstream licences    |
| Type           | React component and animation collection                      |
| Works with     | React, Tailwind CSS, shadcn CLI                               |
| Best for       | Scroll interactions, card stacks, and animated backgrounds    |
| Agent-friendly | Yes — registry commands and component APIs                    |

## What it is

Componentry groups React components by use case, including text animation,
scroll effects, animated backgrounds, and image effects. The collection page
currently lists 53 components. Each detail page provides a preview, install
command, API reference, and source usage notes.

Components are added to the application as editable source through the shadcn
CLI. Dependencies vary by item; examples include GSAP and CSS utility packages.
Component pages warn that some work is inspired by other open-source projects
and tell users to verify licences and implementation details.

## Paywall and pricing

- **Free:** the component catalogue, docs, and registry commands are public.
- **Paid:** no paid plan or price was published on the checked pages.
- **Sign-up required?** No sign-up was listed for public registry items.
- **Licence for client work:** no collection-wide licence was found. Verify
  source and upstream licensing item by item.
- **Checked:** 2026-10-07.

## How to use

1. Open Collections and choose the effect category that fits the page.
2. Check the item page for browser behavior, API, and dependencies.
3. Install a selected component. For Aurora Flow, the official command is:

```bash
bunx shadcn@latest add @componentry/aurora-flow
```

4. Import the local component and set its preset:

```tsx
import { AuroraFlow } from '@/components/ui/aurora-flow'

export function Hero() {
  return <AuroraFlow preset="ocean" className="min-h-[600px]" />
}
```

5. Follow the page's performance guidance. Aurora Flow pauses outside the
   viewport and uses a static frame when reduced motion is requested.

## Examples

- [Layered Stack](https://componentry.dev/docs/components/layered-stack) — a
  card stack with spring interactions.
- [Aurora Flow](https://componentry.dev/docs/components/aurora-flow) — a
  procedural hero background with motion controls.
- [Orbit Card Stack](https://componentry.dev/docs/components/orbit-card-stack) —
  an orbiting team-card presentation.
- [Animated Gradient](https://componentry.dev/docs/components/animated-gradient)
  — a customizable WebGL gradient.

## When to use it

- Use it when a landing page needs one defined effect with editable source.
- Use it when the component docs expose the browser and reduced-motion behavior
  needed by the project.
- Skip it for basic form controls or when the source licence cannot be
  confirmed; compare [Ruru UI](../component-libraries/ruru-ui.md).

## Agent notes

Registry items are straightforward for coding agents to add, but no global
licence was found. Check the item's own dependency and licence notes before
copying code into a client repository. Some effects use WebGL; inspect
performance and reduced-motion behavior on the selected page.

## Alternatives in this repo

- [Canvas UI](../component-libraries/canvas-ui.md) — GPU effects and liquid
  interactions.
- [Vengeance UI](../component-libraries/vengeance-ui.md) — animated blocks and
  scroll-driven components.

## Sources

- [Official site](https://componentry.dev/) — checked 2026-10-07
- [Collections](https://componentry.dev/collections) — checked 2026-10-07
- [Layered Stack](https://componentry.dev/docs/components/layered-stack) —
  checked 2026-10-07
- [Aurora Flow](https://componentry.dev/docs/components/aurora-flow) — checked
  2026-10-07
- [Orbit Card Stack](https://componentry.dev/docs/components/orbit-card-stack) —
  checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
