---
name: '@web-kits/audio'
slug: web-kits-audio
section: Development
section_slug: development
source_url: 'https://audio.raphaelsalaja.com/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Declarative sound library for web apps.'
paywall: free
pricing_summary: 'Completely free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [audio, sound-effects, synthesis, web-audio, react]
best_for: [ui sound effects, micro-interactions, web audio synthesis]
stack: [typescript, javascript, react]
agent_friendly: true
last_verified: 2026-10-07
---

# @web-kits/audio

> Declarative sound library for web apps. TolongLabs developers use
> @web-kits/audio to generate crisp, synthesized UI interaction sound effects in
> real time using plain JavaScript objects without loading external audio
> assets.

## At a glance

| Field          | Value                                                           |
| -------------- | --------------------------------------------------------------- |
| Source         | [audio.raphaelsalaja.com](https://audio.raphaelsalaja.com/)     |
| Paywall        | **Free** — 100% free and open source under MIT licence          |
| Open source    | Yes — MIT ([GitHub](https://github.com/raphaelsalaja/web-kits)) |
| Type           | Web Audio synthesis and declarative UI sound library            |
| Works with     | Web Audio API, React, TypeScript, JavaScript, modern browsers   |
| Best for       | UI sound effects, micro-interactions, procedural web audio      |
| Agent-friendly | Yes — npm package, React hooks, llms.txt and agent skill docs   |

## What it is

`@web-kits/audio` is a declarative Web Audio synthesis library crafted by
Raphael Salaja. Instead of requiring web applications to download static MP3 or
WAV audio files for simple UI interactions—which adds network latency and
bandwidth bloat—`@web-kits/audio` synthesizes audio waveforms programmatically
on the client via the browser's native Web Audio API.

Sounds are defined declaratively as lightweight JavaScript objects specifying
wave generators (sine, triangle, square, noise), frequency ramps, envelope
decays, modulation, and spatial audio pan values. Calling the resulting function
plays the synthesized audio immediately with zero network delay.

The library includes first-class React bindings (`useSound`, `usePatch`), an
interactive patch library of pre-tuned UI sounds (clicks, pops, notifications,
toggles, error buzzes), and a dedicated CLI to install patches directly from
registries or GitHub.

## Paywall and pricing

- **Free:** The `@web-kits/audio` library, React hooks, CLI, sound patches, and
  documentation are 100% free and open source.
- **Paid:** None. No subscription fees or paid asset packs.
- **Sign-up required?** No.
- **Licence for client work:** MIT License. Permitted for commercial and client
  web applications.

Verified on the official `@web-kits/audio` website and documentation on
2026-10-07.

## How to use

1. Install the package via Bun:

```bash
bun add @web-kits/audio
```

2. Define and trigger a sound in vanilla TypeScript:

```typescript
import { defineSound } from '@web-kits/audio'

// Declaratively configure a tactile UI "pop" sound
export const popSound = defineSound({
  source: {
    type: 'sine',
    frequency: { start: 440, end: 180 }
  },
  envelope: { decay: 0.06 },
  gain: 0.3
})

// Trigger the sound on button press
popSound()
```

3. Use within React components via the `useSound` hook:

```tsx
'use client'

import { useSound } from '@web-kits/audio/react'

export function ActionButton() {
  const [playClick] = useSound({
    source: { type: 'sine', frequency: { start: 600, end: 300 } },
    envelope: { decay: 0.04 },
    gain: 0.25
  })

  return (
    <button
      onClick={() => playClick()}
      className="rounded bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-500"
    >
      Click Me
    </button>
  )
}
```

## Examples

- [Documentation Overview](https://audio.raphaelsalaja.com/) — Interactive sound
  preview board demonstrating sine, square, and filtered noise synthesis.
- [React Hooks Guide](https://audio.raphaelsalaja.com/docs/react) — Tutorial on
  managing audio contexts and triggering sounds from React lifecycles.
- [Sound Patches Library](https://audio.raphaelsalaja.com/library) — Searchable
  index of pre-configured UI sound patches ready to import.

## When to use it

- Use it when designing tactile, high-polish web applications that benefit from
  subtle audio cues on button presses, toggles, success toasts, or deletions.
- Use it to eliminate external audio asset downloads, keeping web performance
  high and HTTP requests minimal.
- Skip it when you need live visual parameter tuning toolbars; consider
  [DialKit](../development/dialkit.md).
- Skip it when you only need animated text morphing; use
  [Torph](../development/torph.md).

## Agent notes

- Official documentation: `https://audio.raphaelsalaja.com/`.
- Includes an official `llms.txt` endpoint
  (`https://audio.raphaelsalaja.com/llms.txt`) optimized for coding agents.
- Browser audio policies require a user interaction (click, tap, keypress)
  before the browser's `AudioContext` can emit sound. Never trigger audio during
  initial page load without prior user interaction.

## Alternatives in this repo

- [DialKit](../development/dialkit.md) — Floating interface toolbar for tuning
  visual animation parameters and spring physics in real time.
- [Torph](../development/torph.md) — Dependency-free animated text morphing
  component for fluid typographic state transitions.

## Sources

- [Official site](https://audio.raphaelsalaja.com/) — checked 2026-10-07
- [Documentation](https://audio.raphaelsalaja.com/docs) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build)
