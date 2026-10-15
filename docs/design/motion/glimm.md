---
name: glimm
slug: glimm
section: Motion
section_slug: motion
source_url: 'https://glimm.dev/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: Shader-driven page transitions for Next.js.
paywall: free
pricing_summary:
  'glimm is MIT-licensed and free to install; the official site lists no paid
  tier.'
open_source: true
license: MIT
category_tags: [page-transitions, webgl, animation]
best_for: [route transitions, focused mode changes, confirmed actions]
stack: ['react', 'nextjs', 'webgl']
execution_mode: package
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# glimm

> Shader-driven page transitions for Next.js.
>
> Reach for it when a major route or mode change should feel like a deliberate
> moment, not a routine click.

## At a glance

| Field          | Value                                         |
| -------------- | --------------------------------------------- |
| Source         | [glimm.dev](https://glimm.dev/)               |
| Paywall        | **Free** — MIT-licensed npm package           |
| Open source    | Yes — MIT, stated on the official site        |
| Type           | WebGL page-transition library                 |
| Works with     | React 18+ and Next.js 13+                     |
| Best for       | Route changes and high-salience state changes |
| Agent-friendly | Yes — install and setup prompt are documented |

## What it is

glimm is a small React and Next.js library for shader-driven transitions. It
sweeps a colored WebGL band across the screen while the next view appears
underneath. The site describes the library as under 10 KB with no runtime
dependencies.

The root provider initializes its WebGL context when a transition is first used.
Developers can trigger a sweep with a transition link, a navigation hook, or a
root-level link interceptor. Presets control the palette, easing, direction,
duration, band width, and optional edge effects.

The library is intentionally for selected transitions. Its own guidance warns
against sweeping on every internal link, passive hover, repeated list action, or
loading state.

## Paywall and pricing

- **Free:** the npm package, examples, and documentation are public.
- **Paid:** no paid plan or commercial tier is listed.
- **Sign-up required?** No for the website, demos, or package install.
- **Licence for client work:** the official site labels glimm MIT licensed.

Pricing and licence details were checked on 2026-10-07.

## How to use

1. Add the package to a Next.js project:

   ```bash
   bun add glimm
   ```

2. Wrap the app body in `GlimmProvider` in the root layout.
3. Choose one trigger style. Use `TransitionLink` when the destination is known,
   `useTransitionRouter()` for programmatic navigation, or `InterceptLinks` for
   internal links that should be handled automatically.
4. Set a palette or easing override on the provider or an individual trigger.
   The six built-in palettes are `prism`, `berry`, `lagoon`, `citrus`, `azure`,
   and `ember`.
5. Keep a transition for moments where a new screen meaningfully replaces the
   previous context. Measure the effect on real devices before applying it
   broadly.

   ```tsx
   import { GlimmProvider, TransitionLink } from 'glimm/next'

   export function RootLayout({ children }) {
     return (
       <GlimmProvider palette="prism">
         <TransitionLink href="/about">About</TransitionLink>
         {children}
       </GlimmProvider>
     )
   }
   ```

## Examples

- [Publish demo](https://glimm.dev/demos/publish) — sweeps during a publishing
  flow.
- [Autopilot demo](https://glimm.dev/demos/autopilot) — demonstrates a switch
  that changes a mode.
- [Theme demo](https://glimm.dev/demos/theme) — applies a transition while
  changing the visual theme.
- [Tasks demo](https://glimm.dev/demos/tasks) — shows the library alongside a
  checklist interaction.

## When to use it

- Use it for publishing, checkout, presentation, review, or other state changes
  that replace the current context.
- Use it when a product already has a Next.js App Router and can dedicate a root
  provider to navigation transitions.
- Skip it for routine page links or controls that users activate repeatedly.
  Prefer the browser's normal navigation or a smaller local transition.
- Skip it where WebGL is unavailable or its visual effect conflicts with
  reduced-motion needs. A general-purpose timeline library may suit other motion
  patterns better.

## Agent notes

- Package: `glimm`; Next.js entry point: `glimm/next`.
- Peer requirements listed on the official page: React 18+ and Next.js 13+.
- A provider alone stays idle until a sweep is triggered.
- Avoid putting `InterceptLinks` on every page without checking which routes
  should be animated; the official guidance recommends using it sparingly.
- The site includes a natural-language setup prompt for coding agents, but
  review route coverage and client-side boundaries after generation.

## Alternatives in this repo

- [morphicons](../motion/morphicons.md) — animate transitions between SVG icons
  inside a page.
- [textmotion](../motion/textmotion.md) — add a focused rolling text effect to
  interface labels or values.
- [Devouring Details](../motion/devouring-details.md) — study smaller
  interaction patterns and their implementation rationale.

## Sources

- [Official site and documentation](https://glimm.dev/) — checked 2026-10-07
- [Publish demo](https://glimm.dev/demos/publish) — checked 2026-10-07
- [Autopilot demo](https://glimm.dev/demos/autopilot) — checked 2026-10-07
- [Theme demo](https://glimm.dev/demos/theme) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
