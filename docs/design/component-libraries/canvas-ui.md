---
name: Canvas UI
slug: canvas-ui
section: Component Libraries
section_slug: component-libraries
source_url: https://canvasui.dev/
designeer_url: https://designeer.xyz/components
designeer_blurb: 'GPU-accelerated liquid physics and canvas shaders.'
paywall: free
pricing_summary:
  'Components are presented as free; the site publishes no paid plan or price.'
open_source: false
license: unknown
category_tags: [canvas, webgl, webgpu, shaders, react]
best_for: [gpu effects, hero sections, liquid interactions]
stack: [react, solid, preact, vue, svelte, typescript]
agent_friendly: true
last_verified: 2026-10-07
---

# Canvas UI

> GPU-accelerated liquid physics and canvas shaders. Use its registry components
> when a page needs a GPU-driven interaction or material effect.

## At a glance

| Field          | Value                                                             |
| -------------- | ----------------------------------------------------------------- |
| Source         | [canvasui.dev](https://canvasui.dev/)                             |
| Paywall        | **Free** — components are publicly available                      |
| Open source    | No OSI licence is confirmed; a Commons Clause restriction applies |
| Licence        | Custom MIT + Commons Clause terms; no SPDX identifier published   |
| Type           | GPU component and effect library                                  |
| Works with     | React, Solid, Preact, Vue, Svelte, and vanilla TypeScript         |
| Best for       | Liquid, glass, cloth, and particle effects                        |
| Agent-friendly | Yes — shadcn registry commands and copyable source                |

## What it is

Canvas UI is a collection of GPU-based visual effects and interface components.
The official docs describe React and framework-agnostic usage, with WebGL and
WebGPU implementations. Components can be added from its shadcn registry or
adapted from the source shown in the docs.

Examples include glass-like surfaces, cloth motion, frost, and particle reveals.
The product is intended for visual effects that would be costly to recreate with
ordinary CSS. Browser support depends on the selected rendering path; the docs
mark some HTML-in-canvas functionality as experimental.

The project calls itself open source and publishes a custom MIT plus Commons
Clause notice. That notice is not an SPDX license identifier. Read its current
terms before redistributing the components as a standalone product.

## Paywall and pricing

- **Free:** the public component catalogue and registry commands are available.
- **Paid:** no paid plan or price is published.
- **Sign-up required?** No sign-up is listed for the public components.
- **Licence for client work:** the site says personal and commercial app use is
  allowed, while resale or redistribution of the components themselves is
  restricted by the Commons Clause. Check the current licence text.
- **Checked:** 2026-10-07.

## How to use

1. Start with a React project configured for the shadcn CLI.
2. Add the particle reveal component with the documented registry command:

```bash
bunx shadcn@latest add @canvas-ui/particle-reveal-react
```

3. Import the generated local component and place page content inside it:

```tsx
import { ParticleReveal } from '@/components/canvasui/ParticleReveal'

export function Hero() {
  return (
    <ParticleReveal radius={300}>
      <YourContent />
    </ParticleReveal>
  )
}
```

4. Compare the WebGL/WebGPU option and check fallback behavior on the target
   browsers before using a GPU-only effect as essential content.

## Examples

- [Glass Object](https://canvasui.dev/docs/components/glass-object) — inspect a
  glass material and its controls.
- [Cloth](https://canvasui.dev/docs/components/cloth) — see a deforming surface
  effect.
- [Frost](https://canvasui.dev/docs/components/frost) — compare a frosted
  surface treatment.
- [Particle Object](https://canvasui.dev/docs/components/particle-object) —
  review a particle-based 3D example.

## When to use it

- Use it for a hero, product visual, or interactive showcase where GPU motion
  adds useful meaning.
- Use it when the team can test WebGL/WebGPU behavior and performance.
- Skip it for routine forms and dense app screens; use a conventional component
  library such as [Ruru UI](../component-libraries/ruru-ui.md).

## Agent notes

The official registry is suitable for coding agents because components are added
as local source. Treat the Commons Clause as a real restriction: avoid reselling
the source as a component pack. Confirm browser compatibility and fallbacks,
particularly where HTML-in-canvas is involved.

## Alternatives in this repo

- [Componentry](../component-libraries/componentry.md) — copyable React
  components for motion and visual effects.
- [Great UI](../component-libraries/great-ui.md) — a broader React and Tailwind
  collection with simpler copy-paste usage.

## Sources

- [Official site](https://canvasui.dev/) — checked 2026-10-07
- [Canvas UI docs](https://canvasui.dev/docs) — checked 2026-10-07
- [Glass Object](https://canvasui.dev/docs/components/glass-object) — checked
  2026-10-07
- [Cloth](https://canvasui.dev/docs/components/cloth) — checked 2026-10-07
- [Frost](https://canvasui.dev/docs/components/frost) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
