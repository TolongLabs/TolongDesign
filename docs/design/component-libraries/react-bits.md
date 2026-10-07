---
name: 'React Bits'
slug: 'react-bits'
section: 'Component Libraries'
section_slug: 'component-libraries'
source_url: 'https://reactbits.dev/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Animated and creative components for React.'
paywall: freemium
pricing_summary:
  'Free components are available; Pro is $129 Starter, $249 Pro, or $349
  Ultimate, one-time.'
open_source: true
license: unknown
category_tags: ['react', 'animation', 'components']
best_for: ['animated interfaces', 'landing pages']
stack: ['react', 'nextjs', 'tailwind']
agent_friendly: true
last_verified: 2026-10-07
---

# React Bits

> Animated and creative components for React.

A TolongLabs developer can reach for it when a React page needs a distinctive
motion treatment and the team is comfortable owning copied component code.

## At a glance

| Field          | Value                                                                                                                      |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Source         | [reactbits.dev](https://reactbits.dev/)                                                                                    |
| Paywall        | **Freemium** — Free components are available; Pro is $129 Starter, $249 Pro, or $349 Ultimate, one-time.                   |
| Open source    | Yes — The free component repository uses a custom MIT plus Commons Clause license; that license is not an SPDX identifier. |
| Type           | Animated React component library and page-block collection                                                                 |
| Works with     | React, JavaScript or TypeScript, CSS or Tailwind CSS                                                                       |
| Best for       | animated interfaces, landing pages                                                                                         |
| Agent-friendly | Yes — documented source, CLI, or agent workflow                                                                            |

## What it is

React Bits is a collection of animated text, background, and interface
components. It is intended for developers who want a visual effect they can add
to a React project rather than build from scratch.

The free library offers JavaScript and TypeScript versions with CSS or Tailwind
styling. Its GitHub README lists 200+ free components. Pro adds larger
collections of page and application blocks plus templates.

The components are distributed through a shadcn-compatible registry, so they are
copied into a project and can be edited locally. The custom license has a
redistribution restriction.

## Paywall and pricing

- **Free:** Free access to the core text animations, backgrounds, and
  components; four code/style variants are offered.
- **Paid:** Pro is sold as one-time tiers: Starter $129, Pro $249, and Ultimate
  $349. Pro includes additional components, page blocks, app UI blocks, and
  templates.
- **Sign-up required?** No — public components can be browsed without an
  account; Pro access is purchased separately.
- **Licence for client work:** The free repo permits commercial use but
  restricts selling or redistributing the components themselves; read its custom
  license before shipping.

Pricing and access were checked on 2026-10-07.

## How to use

1. Browse the free categories and open a component page to inspect its variants
   and props.
2. Choose the matching JavaScript or TypeScript and CSS or Tailwind version for
   the project.
3. Add the component through the shadcn registry command, then tune its props
   and styles in the copied source.

Install or add the documented component with:

```bash
npx shadcn@latest add @react-bits/BlurText-TS-TW
```

The official docs show this minimal usage or setup:

```tsx
import BlurText from './BlurText'

;<BlurText text="Isn't this so cool?!" />
```

## Examples

- [Blur Text](https://reactbits.dev/text-animations/blur-text) — Text entrance
  animation with configurable text and motion.
- [Aurora](https://reactbits.dev/backgrounds/aurora) — Animated background
  effect for a hero or section.
- [Hero Section blocks](https://pro.reactbits.dev/docs/blocks/hero-section) —
  Pro hero layouts showing how the effects fit into page sections.

## When to use it

- Use it when a React page needs a distinctive motion treatment and the team is
  comfortable owning copied component code.

- Skip it when a restrained, accessible default component is enough; compare
  [HeroUI](../component-libraries/heroui.md) or
  [daisyUI](../component-libraries/daisyui.md).

## Agent notes

- Registry command uses a named component identifier; select the exact variant
  shown on the component page.
- Check the custom free-library license before republishing components as a
  library or template.
- Pro block and template access is separate from the free public component
  repository.

## Alternatives in this repo

- [Fancy Components](../component-libraries/fancy-components.md) — More playful
  physics-oriented React pieces.
- [Cult UI](../component-libraries/cult-ui.md) — Another motion-heavy shadcn
  registry.
- [NumberFlow](../component-libraries/numberflow.md) — Focused option for
  animated numeric values.

## Sources

- [Official site](https://reactbits.dev/) — checked 2026-10-07
- [GitHub repository](https://github.com/DavidHDev/react-bits) — checked
  2026-10-07
- [GitHub README](https://github.com/DavidHDev/react-bits/blob/main/README.md) —
  checked 2026-10-07
- [License](https://github.com/DavidHDev/react-bits/blob/main/LICENSE.md) —
  checked 2026-10-07
- [Pro overview](https://pro.reactbits.dev/about) — checked 2026-10-07
- [Blur Text](https://reactbits.dev/text-animations/blur-text) — checked
  2026-10-07
- [Aurora](https://reactbits.dev/backgrounds/aurora) — checked 2026-10-07
- [Hero Section blocks](https://pro.reactbits.dev/docs/blocks/hero-section) —
  checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
