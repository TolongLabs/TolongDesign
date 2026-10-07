---
name: Torph
slug: torph
section: Development
section_slug: development
source_url: 'https://torph.lochie.me/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Dependency-free text morphing animation library.'
paywall: free
pricing_summary: 'Completely free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [animation, text-morphing, typography, react, svelte]
best_for: [text transitions, counter animations, status transitions]
stack: [react, vue, svelte, javascript, typescript]
agent_friendly: true
last_verified: 2026-10-07
---

# Torph

> Dependency-free text morphing animation library. TolongLabs developers use
> Torph to add fluid typographic continuity, character-level morphing, and
> smooth numeric counter animations to web interfaces without external
> dependencies.

## At a glance

| Field          | Value                                                         |
| -------------- | ------------------------------------------------------------- |
| Source         | [torph.lochie.me](https://torph.lochie.me/)                   |
| Paywall        | **Free** — 100% free and open source under MIT licence        |
| Open source    | Yes — MIT ([GitHub](https://github.com/lochie/torph))         |
| Type           | Text animation and character morphing micro-library           |
| Works with     | React, Vue, Svelte, TypeScript, vanilla JavaScript            |
| Best for       | Text transitions, counter animations, status change effects   |
| Agent-friendly | Yes — npm package (`torph`), concise component API, zero deps |

## What it is

Torph is a lightweight, dependency-free text animation library created by Lochie
Axon. Built to provide seamless visual continuity for text updates across modern
web interfaces, Torph animates character transitions smoothly whenever its text
children change, preventing jarring layout jumps and abrupt textual swaps.

Rather than treating text changes as simple opacity crossfades, Torph analyzes
the difference between previous and incoming strings. It matches identical
characters, slides changing letters into position, and handles numeric values
intelligently by scrolling numbers along the block axis—making it particularly
effective for pricing cards, live counters, and status badges.

The library is completely framework-agnostic while exporting tailored component
wrappers for React (`torph/react`), Vue (`torph/vue`), and Svelte
(`torph/svelte`). It operates entirely on client-side DOM animations with custom
physics-based spring curves and zero runtime dependencies.

## Paywall and pricing

- **Free:** The complete Torph library, framework adapters, interactive
  showcase, and source code are 100% free and open source.
- **Paid:** None.
- **Sign-up required?** No.
- **Licence for client work:** MIT License. Permitted for commercial and client
  websites without restriction.

Verified on the official Torph website and GitHub repository on 2026-10-07.

## How to use

1. Install Torph using Bun:

```bash
bun add torph
```

2. Render morphing text inside a React component:

```tsx
'use client'

import { useState } from 'react'
import { TextMorph } from 'torph/react'

export function StatusIndicator() {
  const [status, setStatus] = useState('Processing Transaction')

  return (
    <div className="flex flex-col items-start gap-4 p-6">
      <div className="rounded-full bg-zinc-900 px-4 py-2 font-mono text-sm text-zinc-200">
        <TextMorph>{status}</TextMorph>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setStatus('Processing Transaction')}
          className="rounded border px-3 py-1 text-xs"
        >
          Processing
        </button>
        <button
          onClick={() => setStatus('Payment Completed')}
          className="rounded border px-3 py-1 text-xs"
        >
          Completed
        </button>
        <button
          onClick={() => setStatus('Order Shipped')}
          className="rounded border px-3 py-1 text-xs"
        >
          Shipped
        </button>
      </div>
    </div>
  )
}
```

3. Customize spring dynamics or duration via props:

```tsx
<TextMorph
  duration={400}
  spring={{ stiffness: 300, damping: 25 }}
  onAnimationComplete={() => console.log('Morph finished')}
>
  {currentValue}
</TextMorph>
```

## Examples

- [Torph Official Showcase](https://torph.lochie.me/) — Live interactive demo
  board displaying direct text morphing, numeric counters, and button labels.
- [GitHub Repository](https://github.com/lochie/torph) — Source repository
  containing framework entrypoints and implementation details.
- [npm Package: torph](https://www.npmjs.com/package/torph) — Official npm
  distribution and release versions.

## When to use it

- Use it on buttons, badges, headers, or banners that transition between dynamic
  states (such as "Save" to "Saved", or "Loading" to "Success").
- Use it for dashboard metric tickers and price tags where smooth digit sliding
  elevates visual craft.
- Skip it when you need live interactive parameter tuning docks for animations;
  use [DialKit](../development/dialkit.md).
- Skip it when looking for Web Audio synthesis; explore
  [@web-kits/audio](../development/web-kits-audio.md).

## Agent notes

- Official site: `https://torph.lochie.me/`.
- Framework imports: import from subpaths according to the framework
  (`torph/react`, `torph/vue`, or `torph/svelte`).
- The component accepts single string children. Avoid passing complex nested JSX
  trees to `<TextMorph>` to ensure accurate character diffing.
- Dependency-free: no Framer Motion, GSAP, or external animation runtimes are
  required.

## Alternatives in this repo

- [DialKit](../development/dialkit.md) — Floating interface toolbar for tuning
  spring parameters, colors, and layout spacing interactively.
- [@web-kits/audio](../development/web-kits-audio.md) — Declarative Web Audio
  synthesis library for interactive sound effects.

## Sources

- [Official site](https://torph.lochie.me/) — checked 2026-10-07
- [GitHub repository](https://github.com/lochie/torph) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build)
