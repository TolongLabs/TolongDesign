---
name: 'daisyUI'
slug: 'daisyui'
section: 'Component Libraries'
section_slug: 'component-libraries'
source_url: 'https://daisyui.com/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Component class library for Tailwind CSS.'
paywall: freemium
pricing_summary:
  'The Tailwind plugin is free and MIT licensed; official Blueprint MCP is $22
  monthly, $45 quarterly, or $600 lifetime.'
open_source: true
license: MIT
category_tags: ['tailwind', 'components', 'themes', 'mcp']
best_for: ['fast tailwind ui', 'themeable websites']
stack: ['tailwind']
execution_mode: package
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# daisyUI

> Component class library for Tailwind CSS.

A TolongLabs developer can reach for it when a project uses Tailwind and needs
quick themeable UI classes without adopting a React component package.

## At a glance

| Field          | Value                                                                                                                                |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Source         | [daisyui.com](https://daisyui.com/)                                                                                                  |
| Paywall        | **Freemium** — The Tailwind plugin is free and MIT licensed; official Blueprint MCP is $22 monthly, $45 quarterly, or $600 lifetime. |
| Open source    | Yes — The core plugin is MIT licensed; paid Blueprint agent tooling is a separate product.                                           |
| Type           | CSS component class library and theme plugin for Tailwind CSS                                                                        |
| Works with     | Tailwind CSS; framework-agnostic HTML output                                                                                         |
| Best for       | fast Tailwind UI, themeable websites                                                                                                 |
| Agent-friendly | Yes — documented source, CLI, or agent workflow                                                                                      |

## What it is

daisyUI is a component class library for Tailwind CSS. It adds semantic classes
and themes for common interface pieces without requiring a React component
runtime.

The checked component index listed 68 components, including buttons, cards, and
drawers. It can be used with framework-agnostic HTML and styled through theme
variables.

The core plugin is free and open source. The official product also sells digital
products and a Blueprint MCP subscription, so the wider offering is freemium.

## Paywall and pricing

- **Free:** Core daisyUI plugin and component classes are free to use.
- **Paid:** The official Blueprint page listed $22 for one month, $45 for three
  months, or $600 lifetime. The official store also offers paid digital
  products.
- **Sign-up required?** No — the core plugin is public; Blueprint is a separate
  paid service.
- **Licence for client work:** MIT covers the plugin. Check the terms for
  separately purchased store assets before using them in client work.

Pricing and access were checked on 2026-10-07.

## How to use

1. Install daisyUI as a development dependency in a Tailwind project.
2. Enable the plugin in the CSS entry point, then use component classes in
   markup.
3. Choose or define a theme and verify contrast, focus states, and responsive
   behavior for the client design.

Install or add the documented component with:

```bash
bun add -D daisyui@latest
```

The official docs show this minimal usage or setup:

```css
@import 'tailwindcss';
@plugin "daisyui";
```

## Examples

- [Button](https://daisyui.com/components/button/) — Button styles, variants,
  and states.
- [Card](https://daisyui.com/components/card/) — Card composition and layout
  options.
- [Drawer](https://daisyui.com/components/drawer/) — Responsive drawer pattern
  and controls.

## When to use it

- Use it when a project uses Tailwind and needs quick themeable UI classes
  without adopting a React component package.

- Skip it when the team needs strongly typed React components or a specific
  accessibility primitive API; compare
  [HeroUI](../component-libraries/heroui.md) or
  [coss ui](../component-libraries/coss-ui.md).

## Agent notes

- The core plugin is CSS-first and does not add a JavaScript component runtime.
- Paid Blueprint is separate from the free component plugin; the checked page
  listed monthly, quarterly, and lifetime options.
- Use the official docs for current Tailwind setup instructions.

## Alternatives in this repo

- [HeroUI](../component-libraries/heroui.md) — Accessible React components with
  a typed component API.
- [coss ui](../component-libraries/coss-ui.md) — Base UI-backed React
  primitives.
- [8bitcn](../component-libraries/8bitcn.md) — shadcn-style components with a
  distinct retro theme.

## Sources

- [Official site](https://daisyui.com/) — checked 2026-10-07
- [Install docs](https://daisyui.com/docs/install/) — checked 2026-10-07
- [Components index](https://daisyui.com/components/) — checked 2026-10-07
- [Button](https://daisyui.com/components/button/) — checked 2026-10-07
- [Card](https://daisyui.com/components/card/) — checked 2026-10-07
- [Drawer](https://daisyui.com/components/drawer/) — checked 2026-10-07
- [Blueprint](https://daisyui.com/blueprint/?lang=de) — checked 2026-10-07
- [Store terms](https://daisyui.com/store/pages/terms/?lang=en) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
