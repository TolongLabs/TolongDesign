---
name: 'HeroUI'
slug: 'heroui'
section: 'Component Libraries'
section_slug: 'component-libraries'
source_url: 'https://www.heroui.com/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Modern React UI library, formerly NextUI.'
paywall: freemium
pricing_summary:
  'Core HeroUI is free and Apache-2.0; HeroUI Pro sells premium components,
  templates, and AI tools, with price not published in the checked pages.'
open_source: true
license: Apache-2.0
category_tags: ['react', 'tailwind', 'accessibility', 'react-aria']
best_for: ['accessible product interfaces', 'react applications']
stack: ['react', 'tailwind', 'react-aria']
agent_friendly: true
last_verified: 2026-10-07
---

# HeroUI

> Modern React UI library, formerly NextUI.

A TolongLabs developer can reach for it when a React product needs accessible
components with a documented, typed API and Tailwind v4 styling.

## At a glance

| Field          | Value                                                                                                                                                           |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Source         | [www.heroui.com](https://www.heroui.com/)                                                                                                                       |
| Paywall        | **Freemium** — Core HeroUI is free and Apache-2.0; HeroUI Pro sells premium components, templates, and AI tools, with price not published in the checked pages. |
| Open source    | Yes — The core library is open source under Apache-2.0; HeroUI Pro is a separate paid offering.                                                                 |
| Type           | Accessible React component library built on React Aria                                                                                                          |
| Works with     | React, Tailwind CSS v4, React Aria                                                                                                                              |
| Best for       | accessible product interfaces, React applications                                                                                                               |
| Agent-friendly | Yes — documented source, CLI, or agent workflow                                                                                                                 |

## What it is

HeroUI is a React component library built on React Aria, with accessible
interaction behavior and Tailwind CSS v4 styling. It was formerly known as
NextUI.

The v3 docs cover component installation, framework setup, and individual
components such as buttons, cards, and accordions. The core library is
Apache-2.0 licensed.

HeroUI Pro is a separate paid product for premium components, templates, and AI
tooling. Its existence makes the overall offering freemium even though the core
library is free.

## Paywall and pricing

- **Free:** Core HeroUI components and documentation are free.
- **Paid:** HeroUI Pro offers premium components, templates, and AI tooling; the
  price was not published on the official pages checked.
- **Sign-up required?** No — core docs and package use are public; Pro access is
  separate.
- **Licence for client work:** Apache-2.0 permits commercial use subject to its
  licence conditions. Check Pro terms for premium assets.

Pricing and access were checked on 2026-10-07.

## How to use

1. Use the official install flow to add `@heroui/react` and `@heroui/styles` to
   the application.
2. Import a component and choose its documented variant and props.
3. Check the framework guide for Tailwind v4 setup and the MCP docs if using an
   AI coding agent.

Install or add the documented component with:

```bash
bun add @heroui/react @heroui/styles
```

The official docs show this minimal usage or setup:

```tsx
import { Button } from '@heroui/react'

export default function HomePage() {
  return <Button variant="tertiary">Hello HeroUI</Button>
}
```

## Examples

- [Button](https://heroui.com/en/docs/react/components/button) — Button variants
  and accessible interaction.
- [Card](https://heroui.com/en/docs/react/components/card) — Card composition
  and layout API.
- [Accordion](https://heroui.com/en/docs/react/components/accordion) —
  Disclosure group behavior and variants.

## When to use it

- Use it when a React product needs accessible components with a documented,
  typed API and Tailwind v4 styling.

- Skip it when the project is not React-based or is on Tailwind v3; compare
  [daisyUI](../component-libraries/daisyui.md) for framework-agnostic classes.

## Agent notes

- The current v3 setup expects Tailwind CSS v4 and React Aria-backed behavior.
- The docs include an MCP server and agent setup; use the official configuration
  for current tool names.
- Core Apache-2.0 licensing does not automatically cover separate HeroUI Pro
  materials.

## Alternatives in this repo

- [coss ui](../component-libraries/coss-ui.md) — Base UI-backed copy-paste
  primitives.
- [daisyUI](../component-libraries/daisyui.md) — Tailwind classes with no React
  runtime.
- [Kibo UI](../component-libraries/kibo-ui.md) — Registry components aimed at AI
  interfaces.

## Sources

- [Official site](https://www.heroui.com/) — checked 2026-10-07
- [React getting started](https://heroui.com/en/docs/react/getting-started) —
  checked 2026-10-07
- [Framework setup](https://heroui.com/en/docs/react/getting-started/frameworks)
  — checked 2026-10-07
- [Button](https://heroui.com/en/docs/react/components/button) — checked
  2026-10-07
- [Card](https://heroui.com/en/docs/react/components/card) — checked 2026-10-07
- [Accordion](https://heroui.com/en/docs/react/components/accordion) — checked
  2026-10-07
- [MCP server](https://heroui.com/en/docs/react/getting-started/mcp-server) —
  checked 2026-10-07
- [HeroUI Pro](https://heroui.pro/) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
