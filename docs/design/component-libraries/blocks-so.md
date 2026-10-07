---
name: 'blocks.so'
slug: 'blocks-so'
section: 'Component Libraries'
section_slug: 'component-libraries'
source_url: 'https://blocks.so/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Open-source website blocks installable via CLI.'
paywall: free
pricing_summary: 'Free and MIT licensed; no paid tier was listed.'
open_source: true
license: MIT
category_tags: ['react', 'tailwind', 'shadcn', 'blocks']
best_for: ['website sections', 'shadcn projects']
stack: ['react', 'nextjs', 'tailwind', 'shadcn']
agent_friendly: true
last_verified: 2026-10-07
---

# blocks.so

> Open-source website blocks installable via CLI.

A TolongLabs developer can reach for it when a shadcn project needs ready-made
website sections that can be edited as local source.

## At a glance

| Field          | Value                                                      |
| -------------- | ---------------------------------------------------------- |
| Source         | [blocks.so](https://blocks.so/)                            |
| Paywall        | **Free** — Free and MIT licensed; no paid tier was listed. |
| Open source    | Yes — The official GitHub repository is MIT licensed.      |
| Type           | Open-source shadcn website block registry                  |
| Works with     | React, Tailwind CSS, shadcn/ui                             |
| Best for       | website sections, shadcn projects                          |
| Agent-friendly | Yes — documented source, CLI, or agent workflow            |

## What it is

blocks.so is a collection of website blocks installed into React projects using
shadcn’s registry tooling. Its categories include login, dialogs, and sidebars.

The official site describes more than 60 free shadcn UI components. The public
GitHub repository documents registry configuration and add commands.

Because the blocks are copied into the app, developers can edit them directly
instead of relying on a runtime package.

## Paywall and pricing

- **Free:** The site presents its blocks as free and the repository is open
  source.
- **Paid:** Not published; no paid plan was listed.
- **Sign-up required?** No — public catalogue and registry instructions do not
  require an account.
- **Licence for client work:** MIT permits commercial use subject to its notice
  and attribution terms.

Pricing and access were checked on 2026-10-07.

## How to use

1. Add the blocks.so registry entry to the shadcn configuration as shown in the
   repository README.
2. Run the shadcn CLI with the requested block identifier, such as
   `@blocks-so/login-01`.
3. Review the generated files and dependencies, then adapt labels, validation,
   and responsive layout to the application.

Install or add the documented component with:

```bash
npx shadcn@latest add @blocks-so/login-01
```

The official docs show this minimal usage or setup:

```json
{ "registries": { "@blocks-so": "https://blocks.so/r/{name}.json" } }
```

## Examples

- [Login 01](https://blocks.so/login/login-01) — Login block with form and page
  composition.
- [Dialog 01](https://github.com/ephraimduncan/blocks/blob/main/README.md) — The
  README documents this block family and registry workflow.
- [Sidebar 01](https://github.com/ephraimduncan/blocks/blob/main/README.md) —
  The README documents a sidebar block identifier.

## When to use it

- Use it when a shadcn project needs ready-made website sections that can be
  edited as local source.

- Skip it when the app is not using React and shadcn conventions; compare
  [Opensource UI](../component-libraries/opensource-ui.md) for standalone
  copy-paste pieces.

## Agent notes

- The registry command is component-specific; confirm the identifier in the
  official catalogue or README.
- The repository contains the registry configuration pattern and MIT licence.
- Check dependencies and aliases after the CLI copies source into the project.

## Alternatives in this repo

- [shadcnblocks](../component-libraries/shadcnblocks.md) — Larger catalogue with
  both free and paid content.
- [8bitcn](../component-libraries/8bitcn.md) — Retro style registry for shadcn
  projects.
- [Kibo UI](../component-libraries/kibo-ui.md) — Broader component registry with
  CLI.

## Sources

- [Official site](https://blocks.so/) — checked 2026-10-07
- [Login block](https://blocks.so/login/login-01) — checked 2026-10-07
- [GitHub repository README](https://github.com/ephraimduncan/blocks/blob/main/README.md)
  — checked 2026-10-07
- [GitHub repository](https://github.com/ephraimduncan/blocks) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
