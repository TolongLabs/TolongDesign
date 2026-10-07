---
name: sensory-ui
slug: sensory-ui
section: Component Libraries
section_slug: component-libraries
source_url: https://www.sensory-ui.com/
designeer_url: https://designeer.xyz/components
designeer_blurb: 'Sound design system for shadcn/ui components.'
paywall: free
pricing_summary:
  'The project is open source under MIT and free for personal and commercial
  use.'
open_source: true
license: MIT
category_tags: [audio, shadcn, react, web-audio, accessibility]
best_for: [semantic sound cues, shadcn interaction feedback]
stack: [react, nextjs, shadcn]
agent_friendly: true
last_verified: 2026-10-07
---

# sensory-ui

> Sound design system for shadcn/ui components. Add opt-in audio feedback to
> familiar controls while keeping the visual interaction intact.

## At a glance

| Field          | Value                                                                 |
| -------------- | --------------------------------------------------------------------- |
| Source         | [sensory-ui.com](https://www.sensory-ui.com/)                         |
| Paywall        | **Free** — MIT licensed                                               |
| Open source    | Yes — [GitHub repository](https://github.com/SatyamVyas04/sensory-ui) |
| Type           | Sound-enabled shadcn component set                                    |
| Works with     | React, Next.js 13.4+, shadcn/ui                                       |
| Best for       | Semantic interaction, overlay, and notification cues                  |
| Agent-friendly | Yes — registry CLI and source docs                                    |

## What it is

sensory-ui is a sound layer for React and Next.js interfaces. It provides
shadcn/ui replacements with a sound prop and a shared provider. The repository
lists 24 components, 17 sound roles, and nine sound packs.

Audio is synthesized at runtime with the Web Audio API. The project says it
ships no audio files and makes no network requests for sound playback. It also
supports global, category, and interaction-level controls, and respects reduced
motion settings.

The sound is opt-in by interaction role. The site recommends treating sound as
meaningful feedback and providing a visual counterpart.

## Paywall and pricing

- **Free:** the project is MIT licensed and its README says free for personal
  and commercial use.
- **Paid:** no paid tier or price is published.
- **Sign-up required?** No.
- **Licence for client work:** MIT.
- **Checked:** 2026-10-07.

## How to use

1. Start with a Next.js 13.4+ project where shadcn/ui is initialized and Node.js
   18+ is available.
2. Add the full registry set:

```bash
bunx shadcn@latest add SatyamVyas04/sensory-ui/sensory-ui
```

3. Wrap the app in the provider and give a component a semantic sound role:

```tsx
import { SensoryUIProvider } from '@/components/ui/sensory-ui/config/provider'
import { Button } from '@/components/ui/sensory-ui/button'

export function AppButton() {
  return (
    <SensoryUIProvider>
      <Button sound="interaction.tap">Save</Button>
    </SensoryUIProvider>
  )
}
```

4. Keep hero sounds opt-in; review the documented categories and disable options
   before enabling feedback globally.

## Examples

- [Live Button and sound-pack showcase](https://www.sensory-ui.com/) — hear
  normal and subtle button cues and compare sound packs.
- [Toggle controls](https://www.sensory-ui.com/) — try checkbox, switch,
  radio-group, and toggle-group interactions.
- [Notifications and overlays](https://www.sensory-ui.com/) — compare toast,
  dialog, drawer, dropdown, and select cues.
- [Repository usage guide](https://github.com/SatyamVyas04/sensory-ui) — inspect
  provider, sound prop, and hook examples.

## When to use it

- Use it when a product wants a consistent sound layer for familiar shadcn
  controls.
- Use it when sound is an optional enhancement with an equivalent visual cue.
- Skip it for non-React projects or interfaces where audio is inappropriate.

## Agent notes

The registry command is the quickest coding-agent path. The shared provider and
package files are copied into the application, so inspect the generated diff.
Keep sound enabled only after a deliberate product decision. Avoid passing
sensitive data to example controls; repository examples may use sample
secret-shaped strings to demonstrate reveal behavior.

## Alternatives in this repo

- [cuelume](../component-libraries/cuelume.md) — a smaller Web Audio API package
  for custom interface sounds.
- [Evil Buttons](../component-libraries/evil-buttons.md) — tactile animated
  buttons without a full sound design layer.

## Sources

- [Official site](https://www.sensory-ui.com/) — checked 2026-10-07
- [GitHub repository and README](https://github.com/SatyamVyas04/sensory-ui) —
  checked 2026-10-07
- [Installation and usage](https://github.com/SatyamVyas04/sensory-ui) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
