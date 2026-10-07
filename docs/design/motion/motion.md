---
name: Motion
slug: motion
section: Motion
section_slug: motion
source_url: https://motion.dev/
designeer_url: https://designeer.xyz/components
designeer_blurb: Production-ready animation library for React applications.
paywall: freemium
pricing_summary:
  'Core library is 100% free and open-source under MIT; Motion+ add-on is $300
  lifetime for individuals or $249/seat/year for teams.'
open_source: true
license: MIT
category_tags: [motion, animation, react, vue, javascript, springs]
best_for: [react animations, layout transitions, exit animations, gestures]
stack: [react, vue, typescript, javascript]
agent_friendly: true
last_verified: 2026-10-07
---

# Motion

> Production-ready animation library for React applications. Use it to build
> fluid spring transitions, layout morphs, exit presence, and gesture controls.

## At a glance

| Field          | Value                                                           |
| -------------- | --------------------------------------------------------------- |
| Source         | [motion.dev](https://motion.dev/)                               |
| Paywall        | **Freemium** — core library free (MIT); Motion+ from $300       |
| Open source    | Yes — MIT ([GitHub](https://github.com/motiondivision/motion))  |
| Type           | Animation and gesture library for React, Vue, and JavaScript    |
| Works with     | React, Next.js, Vue, vanilla JavaScript, Tailwind CSS           |
| Best for       | React animations, layout transitions, exit animations, gestures |
| Agent-friendly | Yes — npm package (`motion`), dedicated AI skill and MCP        |

## What it is

Motion (formerly known as Framer Motion, maintained by Matt Perry) is the
industry-standard animation library for React and modern JavaScript. Trusted by
companies like Framer and Figma across hundreds of thousands of production
websites, Motion combines high-performance physics-based spring calculations
with hardware-accelerated browser animation APIs (`ScrollTimeline` and WAAPI).

The library eliminates traditional CSS keyframe friction through declarative
component primitives:

- `motion.div`: animates independent transform properties (`x`, `y`, `scale`,
  `rotate`) without extra wrapper elements.
- `AnimatePresence`: keeps elements alive during unmounting so they can play
  smooth exit transitions before removal from the DOM.
- `layout`: animates between different flexbox or grid layouts with a single
  prop using hardware-accelerated transforms.
- Gestures: native support for `whileHover`, `whileTap`, and draggable physics.

With version 12 and 13, Motion expanded beyond React to provide unified,
lightweight runtime packages for vanilla JavaScript and Vue, alongside dedicated
AI agent skills and MCP tools.

## Paywall and pricing

- **Free:** The core animation library (`motion` npm package) is 100% free and
  open source under the MIT licence for both personal and commercial web
  projects.
- **Paid (Motion+ / Motion Plus):**
  - **Individual Lifetime:** $300 one-time payment for lifetime updates.
    Includes 460+ copy-paste animation examples, Motion Studio visual transition
    editor, MotionScore performance auditor, and AI Kit prompts.
  - **Team:** $249/seat/year for collaborative engineering teams.
- **Sign-up required?** No sign-up required to install or use the open-source
  library. Required only for Motion+ member content.
- **Licence for client work:** MIT licence allows unrestricted commercial and
  client website development.

Checked on 2026-10-07.

## How to use

1. Install the `motion` package into your React or Next.js project using Bun:

```bash
bun add motion
```

2. Create an animated component using the `motion` component primitives:

```tsx
'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'

export function AccordionItem({
  title,
  content
}: {
  title: string
  content: string
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-zinc-200 py-4 dark:border-zinc-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between font-medium"
      >
        <span>{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          ↓
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden text-sm text-zinc-500 pt-2"
          >
            <p>{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
```

3. For AI coding workflows, install the Motion skill and MCP tools to guide
   agents in authoring performant transforms without layout thrashing:

```bash
npx skills add motion
```

## Examples

- [React Mega Menu Example](https://motion.dev/examples/react-mega-menu) —
  responsive navigation menu with layout morphing and spring physics.
- [Parallax Scroll Animation](https://motion.dev/examples/react-parallax) —
  scroll-linked motion driven by `useScroll` and `useTransform`.
- [Skeleton Shimmer Example](https://motion.dev/examples/react-skeleton-shimmer)
  — performant loading skeleton transition using GPU transforms.

## When to use it

- Use it on any React, Next.js, or Vue website that requires interactive UI
  micro-animations, accordion reveals, modals, or spring-based gestures.
- Use it when you need seamless exit animations via `AnimatePresence`.
- Skip it for complex canvas-rendered character animations or 2D vector state
  machines; use Rive instead.

## Agent notes

- Official documentation URL: `https://motion.dev/docs`
- Package import in modern React: `import { motion } from 'motion/react'` (or
  legacy `framer-motion`).
- Package install: `bun add motion`
- Built-in AI Kit: `https://motion.dev/ai-kit` provides MCP server and skills
  for Claude Code and Cursor.
- Always prefer animating `transform` (`x`, `y`, `scale`) and `opacity` rather
  than `width`, `height`, or `top` to prevent reflows.

## Alternatives in this repo

- [GSAP](../motion/gsap.md) — industry-standard timeline animation engine for
  complex multi-step sequences.
- [Theatre.js](../motion/theatre-js.md) — visual motion sequencer and keyframe
  timeline editor for the DOM and Three.js.
- [Rive](../motion/rive.md) — interactive vector animation format with state
  machines and runtime engines.

## Sources

- [Motion Official Site](https://motion.dev/) — checked 2026-10-07
- [Motion Documentation](https://motion.dev/docs) — checked 2026-10-07
- [Motion Examples](https://motion.dev/examples) — checked 2026-10-07
- [Motion+ Pricing](https://motion.dev/plus) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components)
