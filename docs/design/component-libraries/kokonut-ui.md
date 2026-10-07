---
name: 'Kokonut UI'
slug: kokonut-ui
section: 'Component Libraries'
section_slug: component-libraries
source_url: 'https://kokonutui.com/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Creative interactive components for shadcn format.'
paywall: freemium
pricing_summary:
  'The core library is free and MIT-licensed; KokonutUI Pro lifetime access is
  currently $119 one-time.'
open_source: true
license: 'MIT'
category_tags: [react, tailwind, motion, shadcn]
best_for: [interactive interfaces, landing pages]
stack: [react, nextjs, tailwind]
agent_friendly: true
last_verified: 2026-10-07
---

# Kokonut UI

> Creative interactive components for shadcn format. Yes — shadcn CLI, MCP
> server, and public component docs.

## At a glance

| Field          | Value                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------------------------------------- |
| Source         | [kokonutui.com](https://kokonutui.com/)                                                                             |
| Paywall        | **Freemium** — The core library is free and MIT-licensed; KokonutUI Pro lifetime access is currently $119 one-time. |
| Open source    | Yes — MIT ([project source](https://github.com/kokonut-labs/kokonutui)).                                            |
| Type           | Copyable animated component registry                                                                                |
| Works with     | React, Next.js, Tailwind CSS v4, and Motion                                                                         |
| Best for       | interactive interfaces, landing pages                                                                               |
| Agent-friendly | Yes — Yes — shadcn CLI, MCP server, and public component docs                                                       |

## What it is

Kokonut UI is a collection of React components and templates built around
Tailwind CSS, Motion, and the shadcn copy-into-your-project workflow. The site
advertises more than 100 open-source components.

Each component page provides a preview, installation command, source, and any
extra dependencies. The visual emphasis is on interactions such as particle
buttons, profile cards, and stylized inputs rather than a complete
general-purpose design system.

The public repository is MIT-licensed. KokonutUI Pro sells additional components
and templates separately from the free core library.

## Paywall and pricing

- **Free:** Core components and their source are available from the public
  registry.
- **Paid:** KokonutUI Pro currently lists lifetime access for $119 one-time.
- **Sign-up required?** No for free registry items; Pro access is tied to a
  purchase.
- **Licence for client work:** MIT applies to the open-source repository. Check
  Pro terms for separately sold assets.

Pricing and access were checked on 2026-10-07.

## How to use

1. Start with a React or Next.js project using Tailwind CSS v4. Initialize
   shadcn if needed.

2. Add a component from the registry with the shadcn CLI. Utilities and listed
   dependencies can be installed by the CLI.

3. Import the copied file from the path shown on the component page and use it
   in a client component where interaction requires it.

4. If using an agent, connect the shadcn MCP server and ask it to find the exact
   registry item before adding it.

Official setup or install command:

```bash
bunx --bun shadcn@latest add @kokonutui/particle-button
```

Minimal documented usage or configuration example:

```tsx
import ParticleButton from '@/components/kokonutui/particle-button'

export default function Page() {
  return <ParticleButton />
}
```

## Examples

- [Particle Button](https://kokonutui.com/docs/buttons/particle-button) — A
  button that releases animated particles on click.
- [Profile Dropdown](https://kokonutui.com/docs/navigation/profile-dropdown) — A
  profile and account presentation component.
- [AI Input Search](https://kokonutui.com/docs/ai/ai-input-search) — A styled
  input and search example from the component docs.
- [MCP setup](https://kokonutui.com/docs/mcp) — Agent-assisted registry
  browsing.

## When to use it

- Use it when a React or Next.js page needs expressive motion with components
  you can edit locally.
- Skip it when you need a neutral primitive set or do not use Tailwind v4;
  compare [shadcn/ui](../component-libraries/shadcn-ui.md) or
  [Base UI](../component-libraries/base-ui.md).

## Agent notes

- Docs: https://kokonutui.com/docs. Tailwind CSS v4 is the documented baseline.
- Check each component page for optional packages and install them before
  building.
- The CLI needs components.json; manual copy and paste is also supported.
- MCP support uses the shadcn MCP server. Pro items are separately licensed.

## Alternatives in this repo

- [shadcn/ui](../component-libraries/shadcn-ui.md) — A less animated base for
  general UI primitives.
- [Aceternity UI](../component-libraries/aceternity-ui.md) — A similarly
  expressive source of landing-page effects.
- [Magic UI](../component-libraries/magic-ui.md) — Copyable React effects and
  components.

## Sources

- [Kokonut UI home](https://kokonutui.com/) — checked 2026-10-07
- [Installation docs](https://kokonutui.com/docs) — checked 2026-10-07
- [Particle Button](https://kokonutui.com/docs/buttons/particle-button) —
  checked 2026-10-07
- [MCP guide](https://kokonutui.com/docs/mcp) — checked 2026-10-07
- [GitHub repository](https://github.com/kokonut-labs/kokonutui) — checked
  2026-10-07
- [Pro pricing](https://kokonutui.pro/pricing) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
