---
name: cuelume
slug: cuelume
section: Component Libraries
section_slug: component-libraries
source_url: https://cuelume.dev/
designeer_url: https://designeer.xyz/components
designeer_blurb: 'Micro interface sounds generated with Web Audio.'
paywall: free
pricing_summary:
  'The library is free under MIT; no paid tier or price is published.'
open_source: true
license: MIT
category_tags: [audio, react, web-audio, interaction]
best_for: [micro-interaction feedback, accessible sound cues]
stack: [javascript, react]
agent_friendly: true
last_verified: 2026-10-07
---

# cuelume

> Micro interface sounds generated with Web Audio. Add optional, synthesized
> feedback to browser controls without shipping sound files.

## At a glance

| Field          | Value                                                        |
| -------------- | ------------------------------------------------------------ |
| Source         | [cuelume.dev](https://cuelume.dev/)                          |
| Paywall        | **Free** — MIT licensed                                      |
| Open source    | Yes — [MIT repository](https://github.com/danielwh2/cuelume) |
| Type           | Browser audio library                                        |
| Works with     | JavaScript, React, HTML controls                             |
| Best for       | Quiet feedback on clicks, typing, and selection              |
| Agent-friendly | Yes — npm package, source, and docs                          |

## What it is

Cuelume synthesizes short interface sounds in the browser with the Web Audio
API. The package contains no audio files and has no runtime dependency.

The official site presents a small catalog of interaction sounds and themes. It
can be used with HTML attributes or through its JavaScript API. Playback is
browser-side; importing the package is safe in server-rendered applications.

The package is ESM-only and requires a modern browser with Web Audio support. It
is a focused sound layer, not a general audio player or design system.

## Paywall and pricing

- **Free:** the package and examples are publicly available.
- **Paid:** no paid plan or price is published.
- **Sign-up required?** No.
- **Licence for client work:** the GitHub repository identifies the package as
  MIT licensed, including commercial use.
- **Checked:** 2026-10-07.

## How to use

1. Install the npm package:

```bash
bun add cuelume
```

2. Bind the declarative attributes after the page's controls render:

```tsx
import { bind } from 'cuelume'

export function SoundControls() {
  return (
    <>
      <button data-cuelume-tap>Save</button>
      <input data-cuelume-type aria-label="Search" />
      <select data-cuelume-select aria-label="Sort">
        <option>Newest</option>
      </select>
    </>
  )
}

bind()
```

3. Alternatively, call the API directly from an interaction handler. The docs
   include named sounds such as loading and success.
4. Test with sound disabled and with keyboard input. Keep sound optional and
   preserve visual feedback for every state.

## Examples

- [Cuelume live demos](https://cuelume.dev/) — try the button, text input, and
  select examples to compare the interaction cues.
- [Sound catalog and API](https://cuelume.dev/docs) — compare named sounds,
  themes, and direct playback controls.
- [GitHub README](https://github.com/danielwh2/cuelume) — inspect package setup,
  declarative attributes, and the binding API.

## When to use it

- Use it when a product needs a subtle, consistent sound for a small set of
  meaningful actions.
- Use it when the app must avoid bundled audio assets or network audio loads.
- Skip it for music, long-form audio, or a full sound-effects timeline; choose a
  dedicated audio system instead.

## Agent notes

The package name is cuelume and the official install command is bun add cuelume.
The library uses Web Audio synthesis; no audio files need to be added to the
project. Bind controls only in the browser after they exist. Respect user
preferences and do not make sound the only signal of success or error.

## Alternatives in this repo

- [sensory-ui](../component-libraries/sensory-ui.md) — sound feedback attached
  to a wider set of shadcn/ui components.
- [Evil Buttons](../component-libraries/evil-buttons.md) — animated button
  interactions without an audio-first focus.

## Sources

- [Official site](https://cuelume.dev/) — checked 2026-10-07
- [Cuelume docs](https://cuelume.dev/docs) — checked 2026-10-07
- [GitHub repository](https://github.com/danielwh2/cuelume) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
