---
name: 'beUI'
slug: 'beui'
section: 'Component Libraries'
section_slug: 'component-libraries'
source_url: 'https://beui.dev/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Animated React components with Tailwind CSS.'
paywall: freemium
pricing_summary:
  'Free components are available; beUI Pro was listed at $149 lifetime or $109
  yearly during a limited offer.'
open_source: true
license: unknown
category_tags: ['react', 'animation', 'tailwind', 'shadcn', 'mcp']
best_for: ['animated product ui', 'agent-assisted implementation']
stack: ['react', 'nextjs', 'tailwind', 'shadcn', 'motion']
execution_mode: registry
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# beUI

> Animated React components with Tailwind CSS.

A TolongLabs developer can reach for it when a React application needs
motion-rich controls or agent-oriented interface pieces and the project accepts
its Tailwind and Motion setup.

## At a glance

| Field          | Value                                                                                                                     |
| -------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Source         | [beui.dev](https://beui.dev/)                                                                                             |
| Paywall        | **Freemium** — Free components are available; beUI Pro was listed at $149 lifetime or $109 yearly during a limited offer. |
| Open source    | Yes — The free component library is described as open source; a specific SPDX licence for the free repo was not verified. |
| Type           | Animated React components plus paid Pro blocks and agent tools                                                            |
| Works with     | React 19, Next.js, Tailwind CSS 4, shadcn/ui, Motion                                                                      |
| Best for       | animated product UI, agent-assisted implementation                                                                        |
| Agent-friendly | Yes — documented source, CLI, or agent workflow                                                                           |

## What it is

beUI is a collection of animated React components built with Motion and Tailwind
CSS. The current site requires React 19 and Tailwind CSS 4. Its public library
lists 138 components and exposes component-specific install commands.

The product also sells beUI Pro, which adds larger blocks and agent-oriented
tools such as a paid MCP endpoint. The free and Pro collections have separate
access terms.

Component pages show import and usage examples. The free site describes the
project as open source, but a specific SPDX licence for the free repository was
not verified in this check.

## Paywall and pricing

- **Free:** The public site lists 138 free animated components and provides
  install commands.
- **Paid:** beUI Pro lists $149 lifetime and $109 yearly during a limited offer
  checked on 2026-10-07; paid blocks and MCP access are separate.
- **Sign-up required?** No — free component installs are public; Pro blocks and
  MCP require the paid Pro licence.
- **Licence for client work:** Check the licence attached to each free component
  and the separate Pro terms before client use; prices were promotional when
  checked.

Pricing and access were checked on 2026-10-07.

## How to use

1. Open a component page and review its preview, dependencies, and install
   command.
2. Run the component-specific command, then import the copied component from the
   documented project path.
3. For paid Pro blocks or the Pro MCP endpoint, confirm the current price and
   license before using them in a client project.

Install or add the documented component with:

```bash
bunx --bun shadcn add @beui/button-metallic
```

The official docs show this minimal usage or setup:

```tsx
import { MetallicButton } from '@/components/motion/button'

;<MetallicButton>Continue</MetallicButton>
```

## Examples

- [Metallic Button](https://beui.dev/components/motion/button) — Animated button
  component with install and usage details.
- [Voice Orb](https://beui.dev/components/agents/voice-orb) — Voice-oriented
  agent interface component.
- [Arc Picker](https://beui.dev/components/motion/arc-picker) — Animated picker
  interaction.

## When to use it

- Use it when a React application needs motion-rich controls or agent-oriented
  interface pieces and the project accepts its Tailwind and Motion setup.

- Skip it when Skip Pro content if the project cannot accept a paid licence;
  compare [Fancy Components](../component-libraries/fancy-components.md) or
  [Cult UI](../component-libraries/cult-ui.md).

## Agent notes

- The site documents Bun-based shadcn add commands; install the dependencies
  listed on each component page.
- The Pro MCP endpoint is licensed separately; do not configure it with a free
  account.
- The checked Pro prices were presented as a limited offer and can change.

## Alternatives in this repo

- [Cult UI](../component-libraries/cult-ui.md) — Animated React collection with
  a separate paid Pro tier.
- [Fancy Components](../component-libraries/fancy-components.md) — Public
  playful components with MIT licence.
- [Spectrum UI](../component-libraries/spectrum-ui.md) — Free SaaS blocks with
  documented MCP integration.

## Sources

- [Official site](https://beui.dev/) — checked 2026-10-07
- [Motion components](https://beui.dev/components/motion) — checked 2026-10-07
- [Metallic Button](https://beui.dev/components/motion/button) — checked
  2026-10-07
- [Voice Orb](https://beui.dev/components/agents/voice-orb) — checked 2026-10-07
- [Arc Picker](https://beui.dev/components/motion/arc-picker) — checked
  2026-10-07
- [Pro agent docs and pricing](https://pro.beui.dev/components/agents) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
