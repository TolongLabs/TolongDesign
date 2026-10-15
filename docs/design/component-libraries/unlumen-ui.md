---
name: 'unlumen UI'
slug: unlumen-ui
section: 'Component Libraries'
section_slug: component-libraries
source_url: 'https://ui.unlumen.com/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Minimalist React component library with CLI.'
paywall: freemium
pricing_summary:
  'Free components are available; Pro is $119 one-time, Studio is $430 for five
  seats, and annual access is $69 per year.'
open_source: false
license: 'proprietary'
category_tags: [react, motion, shadcn, components]
best_for: [polished react interfaces, interactive components]
stack: ['react', 'nextjs', 'tailwind', 'shadcn']
execution_mode: registry
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# unlumen UI

> Minimalist React component library with CLI. Yes — registry CLI and public
> component docs.

## At a glance

| Field          | Value                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Source         | [ui.unlumen.com](https://ui.unlumen.com/)                                                                                             |
| Paywall        | **Freemium** — Free components are available; Pro is $119 one-time, Studio is $430 for five seats, and annual access is $69 per year. |
| Open source    | No — proprietary.                                                                                                                     |
| Type           | Animated React component registry                                                                                                     |
| Works with     | React, Next.js, Tailwind CSS, and shadcn CLI                                                                                          |
| Best for       | polished react interfaces, interactive components                                                                                     |
| Agent-friendly | Yes — Yes — registry CLI and public component docs                                                                                    |

## What it is

unlumen UI is a collection of React components distributed through a
shadcn-style registry. The public site presents free and premium items, with the
premium collection focused on animated navigation, chat, and interaction
patterns.

The current pricing page lists 80 components and a CLI install path. Pro
provides current and future premium components; Studio adds five seats and team
support. Annual access provides new components while the subscription is active.

The components are proprietary digital assets, even when a free item is visible.
The licence permits use in unlimited personal or client projects but prohibits
standalone resale or redistribution.

## Paywall and pricing

- **Free:** Selected components are available without buying Pro.
- **Paid:** Pro is $119 one-time, Studio is $430 one-time for five seats, and
  annual access is $69/year.
- **Sign-up required?** Free items can be browsed publicly; paid downloads
  require account access and a licence key.
- **Licence for client work:** The pricing FAQ permits unlimited personal or
  client projects, but forbids standalone redistribution. The licence is
  proprietary.

Pricing and access were checked on 2026-10-07.

## How to use

1. Browse the component index and filter by free or Pro status before selecting
   a pattern.

2. Install the item using the shadcn CLI command shown on its page. Paid
   components require the documented licence key setup.

3. Use the generated source in the app and customize colors, copy, sizing, and
   motion for the product.

4. Test interaction states and keyboard behavior; do not redistribute the source
   as a standalone component product.

Official setup or install command:

```bash
bun x --bun shadcn@latest add @unlumen-ui/ai-chat
```

Minimal documented usage example:

```tsx
import { AiChat } from '@/components/unlumen-ui/ai-chat'

export function AssistantPanel() {
  return <AiChat />
}
```

## Examples

- [Notion Floating Action Menu](https://ui.unlumen.com/components/notion-floating-action-menu)
  — A contextual floating-menu interaction.
- [Gooey Navbar Menu](https://ui.unlumen.com/components/gooey-navbar-menu) — An
  animated navigation menu example.
- [AI Chat](https://ui.unlumen.com/components/ai-chat) — A conversational UI
  component.
- [Social Hover Cards](https://ui.unlumen.com/components/social-hover-cards) — A
  hover-card interaction with an upstream source note.

## When to use it

- Use it when a React product needs a polished interaction and can follow the
  commercial component licence.
- Skip it when a permissive open-source licence is required or a minimal
  baseline is enough; compare
  [Motion Primitives](../component-libraries/motion-primitives.md) or
  [shadcn/ui](../component-libraries/shadcn-ui.md).

## Agent notes

- Docs and pricing: https://ui.unlumen.com/. The site uses a shadcn registry
  install flow.
- Keep UNLUMEN_LICENSE_KEY in .env.local and out of version control.
- Pro includes future component releases for life; annual access includes
  releases only while active.
- Client work is permitted under the pricing FAQ; standalone redistribution is
  not.

## Alternatives in this repo

- [Motion Primitives](../component-libraries/motion-primitives.md) — A
  motion-focused component alternative.
- [Animate UI](../component-libraries/animate-ui.md) — An animated component set
  with a copyable workflow.
- [Magic UI](../component-libraries/magic-ui.md) — A broad source of polished
  React effects.

## Sources

- [unlumen UI home](https://ui.unlumen.com/) — checked 2026-10-07
- [Component index](https://ui.unlumen.com/components) — checked 2026-10-07
- [Pricing and licence FAQ](https://ui.unlumen.com/pricing) — checked 2026-10-07
- [Notion Floating Action Menu](https://ui.unlumen.com/components/notion-floating-action-menu)
  — checked 2026-10-07
- [Gooey Navbar Menu](https://ui.unlumen.com/components/gooey-navbar-menu) —
  checked 2026-10-07
- [AI Chat](https://ui.unlumen.com/components/ai-chat) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
