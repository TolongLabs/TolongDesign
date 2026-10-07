---
name: 'Re UI'
slug: re-ui
section: 'Component Libraries'
section_slug: component-libraries
source_url: 'https://reui.io/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Accessible UI components using Base UI.'
paywall: freemium
pricing_summary:
  'Free MIT components are available; Pro blocks and icons are paid, with Pro
  from $249 one-time and Ultimate from $499 one-time.'
open_source: true
license: 'MIT'
category_tags: [react, base-ui, tailwind, shadcn]
best_for: [accessible interfaces, application ui]
stack: [react, tailwind, shadcn]
agent_friendly: true
last_verified: 2026-10-07
---

# Re UI

> Accessible UI components using Base UI. Yes — shadcn registry, MCP server, and
> agent skills.

## At a glance

| Field          | Value                                                                                                                                         |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Source         | [reui.io](https://reui.io/)                                                                                                                   |
| Paywall        | **Freemium** — Free MIT components are available; Pro blocks and icons are paid, with Pro from $249 one-time and Ultimate from $499 one-time. |
| Open source    | Yes — MIT ([project source](https://reui.io/docs/registry)).                                                                                  |
| Type           | Base UI component and block registry                                                                                                          |
| Works with     | React, Base UI, Tailwind CSS, and shadcn CLI                                                                                                  |
| Best for       | accessible interfaces, application ui                                                                                                         |
| Agent-friendly | Yes — Yes — shadcn registry, MCP server, and agent skills                                                                                     |

## What it is

Re UI is a registry of accessible, customizable React components built on Base
UI. Its free component set uses the c-* naming pattern and is installed into the
project through the shadcn CLI.

The wider catalog includes marketing and application blocks, AI-agent
interfaces, icons, and templates. Free components coexist with paid blocks and
icon packs; paid registry items use an authenticated licence key.

The official site links an MCP server and agent instructions. No Re UI npm
package is required: @reui is a shadcn registry namespace, not an npm scope.

## Paywall and pricing

- **Free:** Public primitives and c-* components are available without a licence
  key.
- **Paid:** Pro starts at $249 one-time; Ultimate starts at $499 one-time. The
  catalogue also includes paid blocks, icons, and templates.
- **Sign-up required?** Free items do not require purchase. Paid registry items
  require a Re UI account and licence key.
- **Licence for client work:** Free components are MIT-licensed; check the
  plan's commercial terms for paid assets.

Pricing and access were checked on 2026-10-07.

## How to use

1. Initialize shadcn and add the @reui registry namespace to components.json.

2. Install a free component using its @reui/c-* name. The CLI copies code and
   adds declared dependencies.

3. For a paid block or icon, put the licence key in an environment variable and
   configure the registry authorization header as the docs specify.

4. Review the selected style variant and source, then adapt spacing, theme
   tokens, and copy to the product.

Official setup or install command:

```bash
pnpm dlx shadcn@latest add @reui/c-alert-1
```

Minimal documented usage example:

```tsx
import { Alert, AlertDescription, AlertTitle } from '@/components/reui/alert'

export function Pattern() {
  return (
    <Alert>
      <AlertTitle>Alert!</AlertTitle>
      <AlertDescription>This is an alert.</AlertDescription>
    </Alert>
  )
}
```

## Examples

- [Marketing Pricing Block](https://reui.io/blocks/marketing/pricing) — A
  plan-comparison layout.
- [Application Form Block](https://reui.io/blocks/application/form) — An
  application form layout.
- [Application Flow Block](https://reui.io/blocks/application/flow) — A
  multi-step application surface.
- [AI Chat Block](https://reui.io/blocks/ai-agents/ai-chat) — A conversational
  interface example.

## When to use it

- Use it when an application needs Base UI semantics plus editable source, or
  when a whole product block is useful.
- Skip it when you need only a small neutral primitive package; compare
  [Base UI](../component-libraries/base-ui.md) or
  [shadcn/ui](../component-libraries/shadcn-ui.md).

## Agent notes

- Docs: https://reui.io/docs. The registry guide explains that @reui is not an
  npm scope.
- Free components use the c-* naming pattern; paid blocks and icons require
  registry authentication.
- MCP and agent skill support are documented on the official site.
- Keep REUI_LICENSE_KEY in the environment and never commit it.

## Alternatives in this repo

- [shadcn/ui](../component-libraries/shadcn-ui.md) — The base copyable component
  registry.
- [21st.dev](../component-libraries/21st-dev.md) — A community component library
  with agent-oriented discovery.
- [Base UI](../component-libraries/base-ui.md) — The headless primitives
  underneath Re UI.

## Sources

- [Re UI home](https://reui.io/) — checked 2026-10-07
- [Documentation](https://reui.io/docs) — checked 2026-10-07
- [Getting started](https://reui.io/docs/get-started) — checked 2026-10-07
- [Registry guide](https://reui.io/docs/registry) — checked 2026-10-07
- [Base Alert component](https://reui.io/docs/components/base/alert) — checked
  2026-10-07
- [Pricing](https://reui.io/pricing) — checked 2026-10-07
- [Marketing pricing block](https://reui.io/blocks/marketing/pricing) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
