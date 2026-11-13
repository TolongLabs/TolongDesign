---
name: Evil Buttons
slug: evil-buttons
section: Component Libraries
section_slug: component-libraries
source_url: https://www.evilbuttons.com/
designeer_url: https://designeer.xyz/components
designeer_blurb: 'Interactive and tactile button components.'
paywall: free
pricing_summary:
  'The button registry is free and the repository states Apache-2.0; no paid
  tier is listed.'
open_source: true
license: Apache-2.0
category_tags: [react, shadcn, buttons, motion]
best_for: [tactile buttons, destructive confirmations, playful interactions]
stack: ['react', 'tailwind', 'shadcn']
execution_mode: registry
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Evil Buttons

> Interactive and tactile button components. Browse the demos when a primary
> action needs a deliberate press, reveal, or playful motion.

## At a glance

| Field          | Value                                                  |
| -------------- | ------------------------------------------------------ |
| Source         | [evilbuttons.com](https://www.evilbuttons.com/)        |
| Paywall        | **Free** — no paid tier listed                         |
| Open source    | Yes — Apache-2.0                                       |
| Type           | React button collection and shadcn registry            |
| Works with     | React, Tailwind CSS, shadcn/ui                         |
| Best for       | Action feedback and distinctive call-to-action buttons |
| Agent-friendly | Yes — individual CLI commands and prop docs            |

## What it is

Evil Buttons is a focused set of animated and interactive buttons. The site
shows live examples and documents each component with an installation command,
usage example, props, dependencies, and accessibility notes.

Examples include buttons that reveal a masked value, require a hold before
confirming a destructive action, show a glitch effect, or launch particle
effects. These are specific interaction patterns rather than replacements for a
full design system.

The homepage currently lists 28 components and identifies the project as open
source under Apache 2.0. Check each component's dependencies before adding one
to a production bundle.

## Paywall and pricing

- **Free:** the site exposes component previews and registry commands.
- **Paid:** no paid tier or price was listed.
- **Sign-up required?** No.
- **Licence for client work:** Apache-2.0, as stated by the official site.
- **Checked:** 2026-10-07.

## How to use

1. Choose a button page and review its preview, notes, keyboard behavior, and
   dependency list.
2. Install the selected registry item; for a hold-to-confirm button:

```bash
bunx shadcn@latest add @evilbuttons/hold-button
```

3. Import the local component and provide the required action:

```tsx
import { HoldButton } from '@/components/evil-buttons/hold-button'

export function ConfirmDelete() {
  return (
    <HoldButton
      duration={1500}
      label="Hold to delete"
      onConfirm={() => deleteRecord()}
    />
  )
}
```

4. Keep destructive actions clear and provide a conventional accessible
   alternative if the interaction is not suitable for the task.

## Examples

- [AshBurstButton](https://www.evilbuttons.com/docs/ash-burst-button) — a
  particle burst that reacts to activation.
- [RevealButton](https://www.evilbuttons.com/docs/reveal-button) — hold or
  toggle to show a masked value.
- [HoldButton](https://www.evilbuttons.com/docs/hold-button) — deliberate
  press-and-hold confirmation with keyboard support.
- [GlitchButton](https://www.evilbuttons.com/docs/glitch-button) — controlled
  glitch treatment with reduced-motion behavior.

## When to use it

- Use it when button interaction is a central part of the experience.
- Use a hold or slide pattern only when the extra gesture clearly prevents an
  accidental action.
- Skip it for broad application controls; use a general-purpose library such as
  [Ruru UI](../component-libraries/ruru-ui.md).

## Agent notes

Commands are shadcn registry installs; there is no single npm package for the
whole collection. Inspect the component page for imported dependencies. Several
pages explain keyboard behavior and reduced-motion handling. Do not make a
destructive action depend on color or motion alone.

## Alternatives in this repo

- [Vengeance UI](../component-libraries/vengeance-ui.md) — animated React
  elements for wider landing-page layouts.
- [cuelume](../component-libraries/cuelume.md) — interface sound cues instead of
  button-only visual feedback.

## Sources

- [Official site](https://www.evilbuttons.com/) — checked 2026-10-07
- [AshBurstButton](https://www.evilbuttons.com/docs/ash-burst-button) — checked
  2026-10-07
- [RevealButton](https://www.evilbuttons.com/docs/reveal-button) — checked
  2026-10-07
- [HoldButton](https://www.evilbuttons.com/docs/hold-button) — checked
  2026-10-07
- [GitHub repository](https://github.com/radiumcoders/evil-buttons) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
