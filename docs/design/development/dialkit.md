---
name: DialKit
slug: dialkit
section: Development
section_slug: development
source_url: 'https://www.dialkit.dev/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Floating interface toolbar for parameter tuning.'
paywall: free
pricing_summary: 'Completely free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags:
  [parameter-tuning, animation-devtools, sliders, ui-controls, motion]
best_for:
  [
    tuning spring animations,
    live design adjustment,
    interactive component prototyping
  ]
stack: ['react', 'typescript']
execution_mode: package
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# DialKit

> Floating interface toolbar for parameter tuning. TolongLabs developers use
> DialKit to shape animations and UI layouts by feel, tweaking spring physics,
> colors, and spacing in real time via an embedded floating dock.

## At a glance

| Field          | Value                                                         |
| -------------- | ------------------------------------------------------------- |
| Source         | [dialkit.dev](https://www.dialkit.dev/)                       |
| Paywall        | **Free** — 100% free and open source under MIT licence        |
| Open source    | Yes — MIT ([GitHub](https://github.com/joshpuckett/dialkit))  |
| Type           | In-browser visual parameter tuning toolbar and animation dock |
| Works with     | React, Next.js, Motion (Framer Motion), Tailwind CSS, CSS     |
| Best for       | Tuning spring animations, live design adjustment, prototyping |
| Agent-friendly | Yes — npm package (`dialkit`), structured prompts, clean API  |

## What it is

DialKit is an open-source visual design and parameter-tuning toolkit created by
Josh Puckett. Designed around the philosophy of "shaping your ideas by feel,"
DialKit embeds an elegant floating toolbar into local web applications, allowing
developers and designers to tweak visual values in real time without constantly
switching back and forth to their code editor.

DialKit supports an extensive range of control inputs: numeric sliders with
configurable ranges and steps, boolean toggles, text fields, dropdown selectors,
color pickers (automatically parsing Hex, RGB, HSL, OKLCH, and Display P3), and
interactive spring pads. It also includes an animation timeline dock that lets
creators scrub, sequence, and keyframe multiple clips visually.

Crucially, DialKit automatically isolates itself from production environments:
the toolbar renders exclusively during local development unless explicitly
enabled via `productionEnabled`. It also ships with curated agent prompts,
making it trivial for AI coding assistants to wire DialKit controls into
existing motion components.

## Paywall and pricing

- **Free:** The DialKit package, React adapters, timeline editor, and
  documentation are 100% free and open source.
- **Paid:** None.
- **Sign-up required?** No.
- **Licence for client work:** MIT License. Permitted for commercial and client
  web applications.

Verified on the official DialKit documentation and GitHub repository on
2026-10-07.

## How to use

1. Install DialKit via Bun:

```bash
bun add dialkit
```

2. Wrap your component or layout with `useDial` controls and mount
   `<DialRoot />`:

```tsx
'use client'

import { useDial, DialRoot } from 'dialkit'

export function AnimatedCard() {
  const [values] = useDial({
    title: { type: 'text', default: 'Make room to play.' },
    radius: [16, 0, 48],
    scale: [1, 0.8, 1.5],
    color: '#6366f1',
    visible: true
  })

  if (!values.visible) return null

  return (
    <>
      <div
        style={{
          borderRadius: `${values.radius}px`,
          transform: `scale(${values.scale})`,
          backgroundColor: values.color
        }}
        className="p-8 text-white shadow-xl transition-transform"
      >
        <h2 className="text-xl font-bold">{values.title}</h2>
      </div>

      {/* Floating control dock renders only in development */}
      <DialRoot />
    </>
  )
}
```

3. Tune values interactively in the browser: Drag sliders, select colors, and
   observe live visual feedback instantly.
4. Persist preferred values: Copy the finalized parameters back into your CSS or
   Tailwind utility classes.

## Examples

- [DialKit Interactive Playground](https://www.dialkit.dev/) — Live homepage
  demonstrating interactive spring sliders, typography scaling, and toggle
  modes.
- [GitHub Repository & Reference](https://github.com/joshpuckett/dialkit) —
  Source code and complete API documentation for all control types.
- [DialKit Timeline Guide](https://github.com/joshpuckett/dialkit/blob/main/docs/timeline.md)
  — Reference for building complex multi-clip animation timelines.

## When to use it

- Use it when designing spring animations, micro-interactions, modal
  transitions, or complex layout spacing where static numbers fail to capture
  the right "feel".
- Use it during design review sessions with clients or designers to tune visual
  parameters collaboratively in a live build.
- Skip it when you only need text morphing continuity; use
  [Torph](../development/torph.md).
- Skip it when you need Web Audio sound effects; see
  [@web-kits/audio](../development/web-kits-audio.md).

## Agent notes

- Official site: `https://www.dialkit.dev/`.
- DialKit controls automatically hide in production builds
  (`process.env.NODE_ENV === 'production'`) unless `productionEnabled` is passed
  to `<DialRoot />`.
- Coding agents can easily wire DialKit into Motion components: expose
  `visualDuration` and `bounce` numbers via `useDial` and pass them into
  Motion's `transition={{ type: 'spring', ...values }}` prop.

## Alternatives in this repo

- [Torph](../development/torph.md) — Dependency-free animated text morphing
  component for smooth typographic state updates.
- [@web-kits/audio](../development/web-kits-audio.md) — Declarative Web Audio
  synthesis library for procedural interface sound effects.

## Sources

- [Official site](https://www.dialkit.dev/) — checked 2026-10-07
- [GitHub repository](https://github.com/joshpuckett/dialkit) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/build)
