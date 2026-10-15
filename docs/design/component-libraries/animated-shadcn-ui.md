---
name: Animated shadcn/ui
slug: animated-shadcn-ui
section: Component Libraries
section_slug: component-libraries
source_url: https://shadcn-animated.vercel.app/
designeer_url: https://designeer.xyz/components
designeer_blurb: 'Motion-powered variants of shadcn/ui components.'
paywall: free
pricing_summary:
  'The public project is MIT licensed and its CLI and package are available
  without charge.'
open_source: true
license: MIT
category_tags: [react, shadcn, motion, components]
best_for: [animated controls, navigation, lightweight motion]
stack: ['react', 'shadcn']
execution_mode: registry
surface: ['web-ui']
status: degraded
agent_friendly: true
last_verified: 2026-10-07
---

# Animated shadcn/ui

> Motion-powered variants of shadcn/ui components. Use the project when you want
> an animated control that still fits a shadcn-style React app.

## At a glance

| Field          | Value                                                              |
| -------------- | ------------------------------------------------------------------ |
| Source         | [shadcn-animated.vercel.app](https://shadcn-animated.vercel.app/)  |
| Paywall        | **Free** — MIT licensed                                            |
| Open source    | Yes — [GitHub repository](https://github.com/sopo/shadcn-animated) |
| Type           | Animated React component package and CLI                           |
| Works with     | React and shadcn/ui                                                |
| Best for       | Buttons, icon toggles, and navigation controls                     |
| Agent-friendly | Yes — package, CLI, and source examples                            |

## What it is

Animated shadcn/ui is an expanding collection of hand-crafted animated
components designed to work like shadcn/ui components. The official repository
lists examples including an image card, button, icon toggle, and navigation
buttons.

The repository includes a package and a command-line installer for adding
individual components. The project site did not render during this check, but
the linked GitHub repository was readable and linked back to that documentation
site.

The repository identifies its licence as MIT. The README's current component
list may be ahead of the rendered site, so check the project before building
against a specific component.

## Paywall and pricing

- **Free:** package, CLI, and public source are available.
- **Paid:** no paid plan or price is published.
- **Sign-up required?** No.
- **Licence for client work:** MIT.
- **Checked:** 2026-10-07.

## How to use

1. Install the package in a React project:

```bash
bun add shadcn-animated
```

2. Add the desired component from the project's CLI:

```bash
bunx shadcn-animated add button
```

3. Import and render it like a shadcn component:

```tsx
import { Button } from 'shadcn-animated'

export default function App() {
  return <Button>Button</Button>
}
```

4. Review the copied component and its dependencies against your app's existing
   shadcn configuration.

## Examples

- [Image card example](https://github.com/sopo/shadcn-animated) — the README
  lists an animated image-card component and preview.
- [Button example](https://github.com/sopo/shadcn-animated) — the README lists a
  motion-powered button and install command.
- [Icon toggle example](https://github.com/sopo/shadcn-animated) — inspect the
  toggle as a small animated control.
- [Navigation button examples](https://github.com/sopo/shadcn-animated) —
  compare forward and back navigation variants.

## When to use it

- Use it when an app already follows shadcn conventions and needs motion on a
  small number of controls.
- Use it when the team wants to inspect and edit the component source.
- Skip it for broad animated page sections or GPU effects; compare
  [Componentry](../component-libraries/componentry.md).

## Agent notes

The package name is shadcn-animated. Its CLI adds items by short names such as
button and icon-toggle. The official GitHub README is currently the clearest
installation reference because the linked site did not render. Confirm that the
requested component exists before asking an agent to install it.

## Alternatives in this repo

- [Evil Buttons](../component-libraries/evil-buttons.md) — interactive button
  components with individual docs and prop details.
- [Great UI](../component-libraries/great-ui.md) — page sections and visual
  components for React and Tailwind.

## Sources

- [Official site](https://shadcn-animated.vercel.app/) — checked 2026-10-07;
  unavailable
- [GitHub repository and README](https://github.com/sopo/shadcn-animated) —
  checked 2026-10-07
- [Repository licence](https://github.com/sopo/shadcn-animated) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
