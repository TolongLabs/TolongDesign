---
name: Spell UI
slug: spell-ui
section: Component Libraries
section_slug: component-libraries
source_url: https://spell.sh/
designeer_url: https://designeer.xyz/components
designeer_blurb: 'High-craft interactive components for modern apps.'
paywall: free
pricing_summary:
  'Public components and registry commands are available without a listed fee;
  no paid plan was found.'
open_source: false
license: unknown
category_tags: [react, shadcn, tailwind, mcp]
best_for: [marketing pages, interactive blocks, agent-assisted UI]
stack: ['react', 'tailwind', 'shadcn']
execution_mode: registry
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Spell UI

> High-craft interactive components for modern apps. Browse its copy-ready React
> pieces when a page needs a tailored marketing block or interface detail.

## At a glance

| Field          | Value                                                |
| -------------- | ---------------------------------------------------- |
| Source         | [spell.sh](https://spell.sh/)                        |
| Paywall        | **Free** — public components and CLI commands        |
| Open source    | No project-wide licence statement found              |
| Licence        | Unknown                                              |
| Type           | React component, block, and template catalogue       |
| Works with     | React, Tailwind CSS, shadcn CLI                      |
| Best for       | Marketing interfaces and custom interactive sections |
| Agent-friendly | Yes — shadcn registry and MCP setup docs             |

## What it is

Spell UI is a curated collection of copyable components and page sections. Its
docs cover interaction patterns, charts, badges, signature effects, and
templates. The pieces are designed to be added to a React project and then
edited in place.

Spell also documents an MCP setup for coding tools, so an agent can discover and
install registry items. The official pages checked expose component commands
without a visible paid gate. No product-wide source licence was found, so treat
individual usage rights as unconfirmed.

Some blocks need more than a copied component. For example, the Spotify card
uses a server route and a metadata dependency to fetch track details.

## Paywall and pricing

- **Free:** public component pages and their shadcn registry commands.
- **Paid:** no paid tier or price was published on the checked pages.
- **Sign-up required?** No sign-up was listed for the public components.
- **Licence for client work:** no project-wide commercial licence was found;
  review any component-specific terms before client use.
- **Checked:** 2026-10-07.

## How to use

1. Browse the components index and choose a component page.
2. Add a component with the shadcn CLI; the Badge command is:

```bash
bunx shadcn@latest add @spell/badge
```

3. Import the local component and customize its classes and copy:

```tsx
import { Badge } from '@/components/ui/badge'

export function Status() {
  return <Badge>Default</Badge>
}
```

4. For an agent workflow, follow the MCP page and let the coding tool use the
   Spell registry. Keep server-only setup, such as Spotify metadata routes,
   outside client components.

## Examples

- [Badge](https://spell.sh/docs/badge) — a small status component and its
  registry command.
- [Chart](https://spell.sh/docs/chart) — inspect a data visualization example.
- [Signature](https://spell.sh/docs/signature) — see a drawn-signature input.
- [Spotify Card](https://spell.sh/docs/spotify-card) — review the server-side
  metadata requirement.

## When to use it

- Use it when a product needs a distinctive marketing block or a component that
  is easy to fork into the app.
- Use it when an agent can benefit from Spell's registry or MCP instructions.
- Skip it when the project needs a published commercial licence or a broad
  accessible foundation set; compare
  [Ruru UI](../component-libraries/ruru-ui.md).

## Agent notes

Spell's docs include an MCP setup path and registry commands. The CLI command is
shadcn-based; no separate runtime package name is needed for each item. Check
the copied code for dependencies and client-only APIs. Spotify Card needs a
server route and spotify-url-info according to its component page.

## Alternatives in this repo

- [Ruru UI](../component-libraries/ruru-ui.md) — conventional React primitives
  with an MIT licence.
- [Great UI](../component-libraries/great-ui.md) — a collection focused on React
  and Tailwind sections and effects.

## Sources

- [Official site](https://spell.sh/) — checked 2026-10-07
- [Component index](https://spell.sh/docs/components) — checked 2026-10-07
- [MCP docs](https://spell.sh/docs/mcp) — checked 2026-10-07
- [Badge](https://spell.sh/docs/badge) — checked 2026-10-07
- [Chart](https://spell.sh/docs/chart) — checked 2026-10-07
- [Signature](https://spell.sh/docs/signature) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
