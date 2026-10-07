---
name: 'Amicro'
slug: 'amicro'
section: 'Component Libraries'
section_slug: 'component-libraries'
source_url: 'https://amicro.vercel.app/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Lightweight drop-in React micro-animation primitives.'
paywall: free
pricing_summary: 'Free and MIT licensed; no paid tier was listed.'
open_source: true
license: MIT
category_tags: ['react', 'animation', 'micro-interactions']
best_for: ['micro-interactions', 'transition effects']
stack: ['react', 'motion', 'tailwind']
agent_friendly: true
last_verified: 2026-10-07
---

# Amicro

> Lightweight drop-in React micro-animation primitives.

A TolongLabs developer can reach for it when a React screen needs a small,
focused transition and the team wants component source inside the project.

## At a glance

| Field          | Value                                                                     |
| -------------- | ------------------------------------------------------------------------- |
| Source         | [amicro.vercel.app](https://amicro.vercel.app/)                           |
| Paywall        | **Free** — Free and MIT licensed; no paid tier was listed.                |
| Open source    | Yes — The official GitHub repository publishes the package under MIT.     |
| Type           | React micro-transition component collection and CLI                       |
| Works with     | React 18 or 19, Node.js 18+, Tailwind CSS 3 or 4, Motion or Framer Motion |
| Best for       | micro-interactions, transition effects                                    |
| Agent-friendly | Yes — documented source, CLI, or agent workflow                           |

## What it is

Amicro is a set of drop-in React micro-interaction and transition components.
The site describes them as lightweight primitives for adding movement to
interface elements.

The official repository publishes both an npm package and a CLI that can
initialize a project and add individual registry components. It documents React
18/19 and Tailwind 3/4 compatibility.

The repository describes components such as card arcs, interactive carousels,
and cover-flow carousels. Despite the site’s “premium” wording, the checked
repository and package are MIT licensed and no paid tier was listed.

## Paywall and pricing

- **Free:** The repository, package, and CLI are free to use.
- **Paid:** Not published; no paid plan was listed.
- **Sign-up required?** No — the public repository and npm package are
  accessible without sign-up.
- **Licence for client work:** MIT permits commercial use subject to its notice
  and attribution terms.

Pricing and access were checked on 2026-10-07.

## How to use

1. Install the package if you want its package API, or initialize the CLI to add
   individual components.
2. Use the CLI to add a named component such as `card-arc-5` to the project.
3. Review the generated component and required Motion dependency, then adjust
   the interaction to match the surrounding UI.

Install or add the documented component with:

```bash
npx @subhanhq/amicro@latest init
```

The official docs show this minimal usage or setup:

```bash
npx @subhanhq/amicro@latest add card-arc-5
```

## Examples

- [Card ARC 5](https://github.com/Subhan-code/Amicro--Micro-transitions-) —
  Repository README documents the card arc component and add command.
- [Interactive Carousel](https://github.com/Subhan-code/Amicro--Micro-transitions-)
  — Repository README lists a carousel interaction.
- [CoverFlow Carousel](https://github.com/Subhan-code/Amicro--Micro-transitions-)
  — Repository README lists a cover-flow variant.

## When to use it

- Use it when a React screen needs a small, focused transition and the team
  wants component source inside the project.

- Skip it for a full design system or conventional control set; compare
  [HeroUI](../component-libraries/heroui.md) or
  [Fancy Components](../component-libraries/fancy-components.md).

## Agent notes

- The CLI package is `@subhanhq/amicro`; the repository documents `init` and
  component-specific `add` commands.
- The documented baseline is React 18/19 and Node.js 18+; check the README for
  Motion and Tailwind requirements.
- The repository license is MIT.

## Alternatives in this repo

- [NumberFlow](../component-libraries/numberflow.md) — Focused animation for
  numeric values.
- [Fancy Components](../component-libraries/fancy-components.md) — Playful
  components with physics effects.
- [React Bits](../component-libraries/react-bits.md) — Broader animated React
  collection.

## Sources

- [Official site](https://amicro.vercel.app/) — checked 2026-10-07
- [GitHub repository and README](https://github.com/Subhan-code/Amicro--Micro-transitions-)
  — checked 2026-10-07
- [License](https://github.com/Subhan-code/Amicro--Micro-transitions-/blob/main/LICENSE)
  — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
