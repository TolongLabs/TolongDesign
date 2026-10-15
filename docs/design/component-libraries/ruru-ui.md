---
name: Ruru UI
slug: ruru-ui
section: Component Libraries
section_slug: component-libraries
source_url: https://ui.ruru.build/
designeer_url: https://designeer.xyz/components
designeer_blurb: 'Accessible customizable UI components for React.'
paywall: free
pricing_summary:
  'Ruru UI is described as MIT licensed; no paid tier or price is published.'
open_source: true
license: MIT
category_tags: [react, tailwind, components, accessibility]
best_for: [forms, app primitives, accessible controls]
stack: ['react', 'tailwind']
execution_mode: registry
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Ruru UI

> Accessible customizable UI components for React. Use its CLI to add a small
> set of reusable primitives to a React project.

## At a glance

| Field          | Value                                      |
| -------------- | ------------------------------------------ |
| Source         | [ui.ruru.build](https://ui.ruru.build/)    |
| Paywall        | **Free** — MIT                             |
| Open source    | Yes — MIT licence linked from the docs     |
| Type           | React UI component library                 |
| Works with     | React, TypeScript, Tailwind CSS            |
| Best for       | Common controls, forms, tabs, and overlays |
| Agent-friendly | Yes — interactive CLI and component docs   |

## What it is

Ruru UI is a customizable library of React components and blocks. Its docs index
common primitives including buttons, inputs, tabs, selects, modals, switches,
accordions, tooltips, and spinners. The project provides a CLI wizard that
configures a project and adds selected local component files.

The quick start asks about TypeScript, the global CSS file, the Tailwind
configuration, and use of CSS variables. This setup makes it suitable for
projects that want to edit their component source rather than depend on a closed
runtime package.

The documentation states that Ruru UI is MIT licensed. Check the generated
output against the app's existing styling and accessibility conventions.

## Paywall and pricing

- **Free:** the documentation and CLI are public.
- **Paid:** no paid tier or price is published.
- **Sign-up required?** No sign-up is listed for the CLI.
- **Licence for client work:** MIT, according to the official docs.
- **Checked:** 2026-10-07.

## How to use

1. Initialize the project with the official Ruru UI CLI:

```bash
bunx ruru-ui-cli@latest init
```

2. Follow its prompts for TypeScript, CSS, Tailwind configuration, and color
   variables.
3. Run the add command and choose the desired components in the interactive
   selector:

```bash
bunx ruru-ui-cli@latest add
```

4. Open the generated component page in the docs for the exact export and usage
   pattern. The CLI adds local files, which you can customize alongside the
   app's styles.

## Examples

- [Button documentation](https://ui.ruru.build/docs/components/button) — a
  general-purpose button primitive.
- [Accordion documentation](https://ui.ruru.build/docs/components/accordion) —
  expandable content structure.
- [Tabs documentation](https://ui.ruru.build/docs/components/tabs) — grouped
  content navigation.
- [Quick Start](https://ui.ruru.build/docs) — setup workflow and licence.

## When to use it

- Use it for common React controls that should live as editable local source.
- Use it when the app uses Tailwind and benefits from a guided setup command.
- Skip it if you need specialized GPU or scroll-driven effects; compare
  [Componentry](../component-libraries/componentry.md).

## Agent notes

The CLI is interactive. A coding agent should run it in a terminal with access
to the target project and inspect every generated file. The current quick-start
page documents setup but does not include a complete component import snippet;
follow the linked component page for the current export.

## Alternatives in this repo

- [Great UI](../component-libraries/great-ui.md) — a broader collection of
  visual and marketing components.
- [Odyssey UI](../component-libraries/odyssey-ui.md) — animated shadcn-focused
  page components.

## Sources

- [Official site](https://ui.ruru.build/) — checked 2026-10-07
- [Quick Start](https://ui.ruru.build/docs) — checked 2026-10-07
- [Button docs](https://ui.ruru.build/docs/components/button) — checked
  2026-10-07
- [Accordion docs](https://ui.ruru.build/docs/components/accordion) — checked
  2026-10-07
- [Tabs docs](https://ui.ruru.build/docs/components/tabs) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
