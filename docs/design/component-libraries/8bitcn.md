---
name: '8bitcn'
slug: '8bitcn'
section: 'Component Libraries'
section_slug: 'component-libraries'
source_url: 'https://8bitcn.com/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Retro 8-bit components for shadcn projects.'
paywall: free
pricing_summary:
  'Free MIT-licensed components; premium blocks and themes are announced as
  future offerings with no price published.'
open_source: true
license: MIT
category_tags: ['react', 'tailwind', 'shadcn', 'retro']
best_for: ['retro interfaces', 'pixel-art styling']
stack: ['react', 'nextjs', 'tailwind', 'shadcn']
execution_mode: registry
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# 8bitcn

> Retro 8-bit components for shadcn projects.

A TolongLabs developer can reach for it when a project deliberately calls for a
retro or pixel-art interface and uses shadcn conventions.

## At a glance

| Field          | Value                                                                                                                         |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Source         | [8bitcn.com](https://8bitcn.com/)                                                                                             |
| Paywall        | **Free** — Free MIT-licensed components; premium blocks and themes are announced as future offerings with no price published. |
| Open source    | Yes — The official repository publishes an MIT licence.                                                                       |
| Type           | Retro component registry for shadcn projects                                                                                  |
| Works with     | React, Tailwind CSS, shadcn/ui                                                                                                |
| Best for       | retro interfaces, pixel-art styling                                                                                           |
| Agent-friendly | Yes — documented source, CLI, or agent workflow                                                                               |

## What it is

8bitcn is a retro-styled component and block registry for shadcn projects. It
applies pixel-art and 8-bit visual treatment to common interface patterns.

The checked docs described more than 50 components and blocks. Individual
component pages include registry commands and examples.

The FAQ describes premium blocks and themes as future offerings, but no current
price was published. The current free repository is MIT licensed.

## Paywall and pricing

- **Free:** The current components and blocks are free to use.
- **Paid:** Premium blocks and themes are described as coming soon; no price or
  paid plan was published.
- **Sign-up required?** No — public docs and registry commands do not require an
  account.
- **Licence for client work:** MIT permits commercial use subject to its notice
  and attribution terms.

Pricing and access were checked on 2026-10-07.

## How to use

1. Choose a component or block in the docs and inspect its variant and props.
2. Use the shadcn registry command to add the item to the project.
3. Keep the pixel style intentional: check text legibility, focus states, and
   mobile sizing alongside the visual treatment.

Install or add the documented component with:

```bash
pnpm dlx shadcn@latest add @8bitcn/button
```

The official docs show this minimal usage or setup:

```tsx
import { Button } from '@/components/ui/8bit/button'

;<Button variant="outline">Button</Button>
```

## Examples

- [Button](https://www.8bitcn.com/docs/components/button) — Retro button styles
  and variants.
- [Date picker](https://www.8bitcn.com/docs/components/date-picker) — Calendar
  input with 8-bit visual treatment.
- [Hero 2](https://www.8bitcn.com/docs/blocks/hero/hero2) — Retro hero block
  composition.

## When to use it

- Use it when a project deliberately calls for a retro or pixel-art interface
  and uses shadcn conventions.

- Skip it for neutral product UI or when familiar platform controls matter more;
  compare [daisyUI](../component-libraries/daisyui.md) or
  [HeroUI](../component-libraries/heroui.md).

## Agent notes

- The docs use a shadcn-compatible registry command and copied source.
- Premium content is announced as future work; its price was not published on
  the checked FAQ.
- Check focus visibility and text contrast because pixel styling can reduce
  clarity at small sizes.

## Alternatives in this repo

- [daisyUI](../component-libraries/daisyui.md) — Broad themeable Tailwind
  component classes.
- [blocks.so](../component-libraries/blocks-so.md) — Free shadcn blocks with a
  more neutral visual style.
- [React Bits](../component-libraries/react-bits.md) — Animated effects rather
  than a retro component theme.

## Sources

- [Official site](https://8bitcn.com/) — checked 2026-10-07
- [Docs](https://www.8bitcn.com/docs) — checked 2026-10-07
- [Button](https://www.8bitcn.com/docs/components/button) — checked 2026-10-07
- [Date picker](https://www.8bitcn.com/docs/components/date-picker) — checked
  2026-10-07
- [Hero block](https://www.8bitcn.com/docs/blocks/hero/hero2) — checked
  2026-10-07
- [FAQ](https://www.8bitcn.com/docs/blocks/faq) — checked 2026-10-07
- [GitHub repository](https://github.com/TheOrcDev/8bitcn-ui) — checked
  2026-10-07
- [License](https://github.com/TheOrcDev/8bitcn-ui/blob/main/license.md) —
  checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
