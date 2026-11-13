---
name: Motion Primitives
slug: motion-primitives
section: Component Libraries
section_slug: component-libraries
source_url: 'https://motion-primitives.com/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Animated React components powered by Motion.'
paywall: free
pricing_summary: 'Completely free and open-source under the MIT license.'
open_source: true
license: MIT
category_tags:
  [react, motion, animation, tailwind, micro-interactions, components]
best_for: [micro-interactions, text effects, animated UI, spring physics]
stack: ['react', 'nextjs', 'tailwind', 'motion']
execution_mode: registry
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Motion Primitives

> Animated React components powered by Motion. TolongLabs developers reach for
> Motion Primitives when adding kinetic typography, tactile cursor reactions,
> and physics-driven spring animations to React interfaces without building
> animation choreographies from scratch.

## At a glance

| Field          | Value                                                              |
| -------------- | ------------------------------------------------------------------ |
| Source         | [motion-primitives.com](https://motion-primitives.com/)            |
| Paywall        | **Free** — 100% open-source under MIT                              |
| Open source    | Yes — MIT ([GitHub](https://github.com/ibelick/motion-primitives)) |
| Type           | Animated React UI component library                                |
| Works with     | React, Next.js, Motion (Framer Motion), Tailwind CSS               |
| Best for       | Text effects, animated numbers, tactile interactions               |
| Agent-friendly | Yes — CLI component installer and copy-paste code                  |

## What it is

Motion Primitives is an open-source animation component library created by
design engineer Julien Thibeaut (@ibelick). Engineered specifically for modern
React and Tailwind CSS stacks, it provides a modular collection of animated UI
primitives powered by Motion (formerly Framer Motion).

Rather than offering bloated, opinionated layout blocks, Motion Primitives
focuses on micro-interactions and sensory interface feedback. Its catalog covers
kinetic text animations (Text Morph, Text Loop, Text Scramble, Text Roll, Text
Shimmer Wave), dynamic counters (Sliding Number, Animated Number), interactive
containers (Border Trail, Morphing Popover, Infinite Slider, Progressive Blur),
and tactile pointer responses (Magnetic buttons, Custom Cursor, Spotlight,
Tilt).

Designed to slot seamlessly alongside shadcn/ui, each component can be installed
via a single CLI command or copied directly into your local components folder.
Animations rely on declarative spring physics, ensuring fluid interactivity that
adapts naturally to user input interruptions.

## Paywall and pricing

- **Free:** Entire component catalog, interactive documentation, CLI tool, and
  GitHub source code are 100% free under the permissive MIT license.
- **Paid:** No paid tiers, pro subscriptions, or hidden charges.
- **Sign-up required?** No account or registration required.
- **Licence for client work:** MIT license permits unrestricted use in client
  websites, commercial applications, and proprietary SaaS platforms.

Verified on the official Motion Primitives website and GitHub repository on
2026-10-07.

## How to use

1. Install required dependencies in your Next.js / Tailwind CSS project:

```bash
bun add motion lucide-react clsx tailwind-merge
```

2. Ensure your project has the standard `lib/utils.ts` helper configured with
   `clsx` and `tailwind-merge`.
3. Add any desired animated primitive using the official CLI:

```bash
bunx motion-primitives@latest add text-effect
```

4. Import and use the animated component in your React application:

```tsx
import { TextEffect } from '@/components/ui/text-effect'

export function HeroHeading() {
  return (
    <h1 className="text-4xl font-bold tracking-tight">
      <TextEffect preset="fade-in-blur" speedReveal={1.2}>
        Elevate your digital craft with kinetic motion
      </TextEffect>
    </h1>
  )
}
```

## Examples

- [Documentation Hub](https://motion-primitives.com/docs) — Complete catalog
  covering installation, component APIs, and live interactive sandboxes.
- [Text Effect Component](https://motion-primitives.com/docs/text-effect) —
  Declarative typography reveals supporting character, word, or line-by-line
  animations.
- [Infinite Slider](https://motion-primitives.com/docs/infinite-slider) —
  Smooth, hardware-accelerated continuous carousel for logos and image streams.
- [Installation Guide](https://motion-primitives.com/docs/installation) — Step-
  by-step configuration for Tailwind CSS and Motion integration.

## When to use it

- Use it when you need specific, high-polish micro-interactions—such as dynamic
  number tickers, glowing card borders, or animated headline reveals.
- Use it as an animation companion to
  [shadcn/ui](../component-libraries/shadcn-ui.md) without introducing heavy
  third-party CSS files.
- Skip it when you only need standard, non-animated UI primitives; consult
  [Radix](../component-libraries/radix.md) or
  [Base UI](../component-libraries/base-ui.md) instead.

## Agent notes

- Highly agent-friendly: provides an official CLI
  (`npx motion-primitives@latest add <name>`) and self-contained TypeScript
  components with typed props.
- Requires `motion` as a primary runtime dependency.
- Works cleanly with Tailwind CSS v3 and v4 setups and pairs with standard
  shadcn component architectures.

## Alternatives in this repo

- [shadcn/ui](../component-libraries/shadcn-ui.md) — Foundational accessible
  component library that Motion Primitives was designed to augment.
- [ForgeUI](../component-libraries/forgeui.md) — Pre-built animated marketing
  sections and SaaS templates combining Tailwind, Motion, and GSAP.
- [21st.dev](../component-libraries/21st-dev.md) — Community registry offering
  thousands of animated components and shader effects.

## Sources

- [Official site](https://motion-primitives.com/) — checked 2026-10-07
- [GitHub Repository](https://github.com/ibelick/motion-primitives) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components)
