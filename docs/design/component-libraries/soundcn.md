---
name: soundcn
slug: soundcn
section: Component Libraries
section_slug: component-libraries
source_url: https://soundcn.xyz/
designeer_url: https://designeer.xyz/components
designeer_blurb: Collection of copy-paste UI sound effects.
paywall: free
pricing_summary:
  'Free and open source code under MIT; audio assets primarily CC0.'
open_source: true
license: MIT
category_tags: [audio, sound-effects, web-audio-api, shadcn, react]
best_for: [tactile button audio, app notification chimes, game-like ui]
stack: ['react', 'typescript', 'shadcn']
execution_mode: registry
surface: ['audio']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# soundcn

> Collection of copy-paste UI sound effects. TolongLabs developers reach for
> soundcn to add subtle auditory feedback to button presses, toggle switches,
> and modal notifications without external audio hosting or CORS headaches.

## At a glance

| Field          | Value                                                       |
| -------------- | ----------------------------------------------------------- |
| Source         | [soundcn.xyz](https://soundcn.xyz/)                         |
| Paywall        | **Free** — 100% free and open source                        |
| Open source    | Yes — MIT ([GitHub](https://github.com/kapishdima/soundcn)) |
| Type           | Sound effect registry and Web Audio hook                    |
| Works with     | React, Next.js, Web Audio API, TypeScript, shadcn CLI       |
| Best for       | Tactile button audio, app notification chimes, game-like UI |
| Agent-friendly | Yes — shadcn CLI registry, self-contained base64 TS modules |

## What it is

soundcn is an open-source audio asset registry and hook library created by Dima
Kapish (@kapishdima). It solves the cumbersome friction of incorporating audio
feedback into web interfaces—eliminating the need to host external MP3/WAV
files, configure CDN storage, debug CORS issues, or install heavy runtime
dependencies.

The registry offers over 700 curated UI sound effects spanning multiple
functional categories:

- **Button Clicks & Toggles:** Soft clicks, mechanical switches, wooden pops,
  and digital taps for instant physical tactile feedback.
- **Alerts & Notifications:** Chimes, bells, warning alerts, success pings, and
  completion sweeps.
- **Navigation & Gestures:** Drawer slide sounds, sheet dismissals, card flips,
  and tab shifts.
- **Retro & Game Audio:** 8-bit blips, sci-fi sweeps, and coin pickups.

Every sound in the registry is packaged as a self-contained TypeScript file
containing an inline base64 data URI. Installing a sound installs the `.ts`
sound asset and a lightweight, zero-dependency `useSound` hook that plays audio
via the native browser Web Audio API. Because the sounds are compiled into the
code bundle as string constants, playback is instantaneous without network
latency.

## Paywall and pricing

- **Free:** The registry, sound catalog, playback hooks, and documentation are
  100% free and open source.
- **Paid:** None.
- **Sign-up required?** No.
- **Licence for client work:** Code is distributed under the MIT licence. Most
  sound assets are sourced from CC0 collections (such as Kenney). Note that the
  optional World of Warcraft collection (110 sounds) contains proprietary
  Blizzard assets and should be avoided in commercial client projects.

Checked on the official website and repository on 2026-10-07.

## How to use

1. Ensure your React project is initialized with shadcn/ui.
2. Install any sound effect using the shadcn CLI:

```bash
bunx --bun shadcn add @soundcn/click-soft
```

3. Import the sound data URI and `useSound` hook in your component:

```tsx
'use client'

import { useSound } from '@/hooks/use-sound'
import { clickSoftSound } from '@/sounds/click-soft'

export function ActionButton() {
  const [play] = useSound(clickSoftSound)

  return (
    <button
      onClick={() => {
        play()
        console.log('Action dispatched')
      }}
      className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground transition active:scale-95"
    >
      Save Changes
    </button>
  )
}
```

## Examples

- [soundcn Audio Explorer](https://soundcn.xyz/) — Interactive audio board
  allowing instant preview and testing of all 700+ UI sounds.
- [soundcn GitHub Repository](https://github.com/kapishdima/soundcn) — Monorepo
  containing audio generator scripts and `useSound` hook implementation.
- [soundcn Click Audio Collection](https://soundcn.xyz/) — Curated catalog of
  subtle micro-click sounds designed specifically for web inputs.

## When to use it

- Use it in web applications, dashboards, or productivity tools where subtle
  click and toggle sounds heighten physical responsiveness and confirmation.
- Use it to give gaming dashboards, creative tools, or kiosk interfaces sensory
  character.
- Skip it when your project does not need audio feedback or when accessibility
  requirements dictate strictly silent interfaces.

## Agent notes

- Official catalog: `https://soundcn.xyz/`.
- GitHub repository: `https://github.com/kapishdima/soundcn`.
- Install command pattern: `npx shadcn add @soundcn/<sound-name>`.
- Audio assets are stored as base64 data URIs within `sounds/<sound-name>.ts`,
  requiring zero external asset bundling or static file routing.

## Alternatives in this repo

- [interior-dev](../component-libraries/interior-dev.md) — Visual and physical
  micro-interactions that pair with soundcn audio cues.
- [Shadcn Labs](../component-libraries/shadcn-labs.md) — Sibling ecosystem of
  modular domain-specific component registries.

## Sources

- [soundcn Official Website](https://soundcn.xyz/) — checked 2026-10-07
- [soundcn GitHub Repository](https://github.com/kapishdima/soundcn) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components)
