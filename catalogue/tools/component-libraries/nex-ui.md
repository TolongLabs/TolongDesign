---
name: 'Nex UI'
slug: nex-ui
section: 'Component Libraries'
section_slug: component-libraries
source_url: 'https://nexui.dev/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Extensible component library for modern startups.'
paywall: free
pricing_summary:
  'Free forever; the components are MIT-licensed and copied into the project
  source.'
open_source: true
license: 'MIT'
category_tags: [react, tailwind, components]
best_for: [startup interfaces, dashboards]
stack: ['react', 'tailwind']
execution_mode: registry
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Nex UI

> Extensible component library for modern startups. Yes — CLI, component
> catalog, and copyable TypeScript source.

## At a glance

| Field          | Value                                                                                        |
| -------------- | -------------------------------------------------------------------------------------------- |
| Source         | [nexui.dev](https://nexui.dev/)                                                              |
| Paywall        | **Free** — Free forever; the components are MIT-licensed and copied into the project source. |
| Open source    | Yes — MIT ([project source](https://github.com/jessinsam/nexui)).                            |
| Type           | Source-copy React component library                                                          |
| Works with     | React, Tailwind CSS v4, React 19, and common React frameworks                                |
| Best for       | startup interfaces, dashboards                                                               |
| Agent-friendly | Yes — Yes — CLI, component catalog, and copyable TypeScript source                           |

## What it is

Nex UI is an accessible component collection with a CLI that writes plain
TypeScript and Tailwind source into the developer's project. The official site
says the files are owned and editable after installation, with no runtime
wrapper.

The current home page describes more than 100 components, while the CLI
documentation currently enumerates 57 names. Because the totals differ across
official pages, use the live component directory as the current inventory.

The documentation identifies the library as MIT-licensed and free forever. It
supports Tailwind CSS v4 and React 19, with framework setup guidance.

## Paywall and pricing

- **Free:** The CLI and component source are free; the docs state free forever.
- **Paid:** No paid tier or price was published on the official pages reviewed.
- **Sign-up required?** No account is required to use the CLI.
- **Licence for client work:** MIT, according to the official site and docs.

Pricing and access were checked on 2026-10-07.

## How to use

1. Use a React project with Tailwind CSS v4. Run the CLI initializer once to
   create configuration and the class utility.

2. Install only the components needed. The CLI can add several named components
   in one invocation.

3. Import the generated file from the path the CLI prints. Edit the source
   directly to fit the product's design tokens.

4. Use the component directory to browse by category or search before deciding
   what to add.

Official setup or install command:

```bash
pnpm dlx @jessin/nexui@latest init
pnpm dlx @jessin/nexui@latest add button card badge
```

Minimal documented usage or configuration example:

```tsx
import { Button } from '@/components/ui/button'

export function Cta() {
  return <Button>Get started</Button>
}
```

## Examples

- [Component directory](https://www.nexui.dev/components) — Browse auth,
  data-view, form, chart, and other components.
- [Cards category](https://www.nexui.dev/components?category=Card) — A filtered
  view of card examples.
- [CLI reference](https://www.nexui.dev/docs/cli) — Lists add, search, list, and
  init commands.

## When to use it

- Use it when a React project needs editable source and a quick way to add
  selected components.
- Skip it when your app is not on React or you need headless primitives rather
  than styled source; compare [Base UI](../component-libraries/base-ui.md) or
  [shadcn/ui](../component-libraries/shadcn-ui.md).

## Agent notes

- Docs: https://www.nexui.dev/docs. CLI package: @jessin/nexui.
- The CLI writes component files and does not add a runtime dependency.
- The marketing home and CLI page list different component totals; query the
  live CLI inventory before planning.
- Tailwind CSS v4 and React 19 are stated in the current documentation.

## Alternatives in this repo

- [shadcn/ui](../component-libraries/shadcn-ui.md) — A wider community registry
  with the same source-ownership workflow.
- [21st.dev](../component-libraries/21st-dev.md) — A community component catalog
  with agent-assisted discovery.
- [Re UI](../component-libraries/re-ui.md) — Base UI components, blocks, and
  registry items.

## Sources

- [NexUI home](https://www.nexui.dev/) — checked 2026-10-07
- [Documentation](https://www.nexui.dev/docs) — checked 2026-10-07
- [CLI reference](https://www.nexui.dev/docs/cli) — checked 2026-10-07
- [Component directory](https://www.nexui.dev/components) — checked 2026-10-07
- [GitHub repository](https://github.com/jessinsam/nexui) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
