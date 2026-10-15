---
name: 'Obsidian'
slug: 'obsidian'
section: 'Whiteboard'
section_slug: 'whiteboard'
source_url: 'https://obsidian.md/'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: 'Local-first Markdown knowledge base with graphs.'
paywall: freemium
pricing_summary:
  'The core app is free; Sync starts at $4 per user per month annually and
  Publish at $8 per site per month annually.'
open_source: false
license: proprietary
category_tags: ['knowledge-base', 'markdown', 'graph', 'notes']
best_for: ['design research', 'interconnected briefs', 'local project docs']
stack: []
execution_mode: reference
surface: ['desktop']
status: active
agent_friendly: false
last_verified: 2026-10-07
---

# Obsidian

> Local-first Markdown knowledge base with graphs.

> Use it to keep research and design decisions linked in portable local
> Markdown.

## At a glance

| Field          | Value                                                                                                                            |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Source         | [obsidian.md](https://obsidian.md/)                                                                                              |
| Paywall        | **freemium** — The core app is free; Sync starts at $4 per user per month annually and Publish at $8 per site per month annually |
| Open source    | No — proprietary                                                                                                                 |
| Type           | Local-first notes application                                                                                                    |
| Works with     | Desktop and mobile; Markdown files                                                                                               |
| Best for       | design research, interconnected briefs, local project docs                                                                       |
| Agent-friendly | No — it is primarily a local app workflow; agents can edit vault files but there is no direct app API documented here            |

## What it is

Obsidian is a note-taking application that stores a vault as ordinary local
Markdown files. Users connect notes with wiki-style links and can browse those
relationships in Graph view.

Obsidian Bases adds database-like views over note properties, including tables,
cards, and lists. Plugins can extend the app, but the core value is a portable
folder of linked text rather than a hosted whiteboard.

For a TolongLabs project, a vault can hold research notes, design decisions, and
linked briefs. It is useful when the team wants local files and explicit
ownership of its knowledge base.

## Paywall and pricing

- The core app is free without limits and does not require an account.
- Sync is $4 per user per month billed annually or $5 monthly. Publish is $8 per
  site per month billed annually or $10 monthly.
- A commercial license is listed at $50 per user per year; it is optional for
  commercial use of the app.
- The app is proprietary. Sync and Publish require accounts and subscriptions;
  local vaults work without either service.

Checked 2026-10-07. Prices can change; use the linked official page for current
terms.

## How to use

- Install Obsidian and create a local vault for the project or research area.
- Write notes in Markdown and connect decisions with links such as
  `[[Design brief]]`.
- Open Graph view to inspect note relationships; use Local Graph when you only
  need a note's nearby connections.
- Use Bases when properties need sortable table, card, or list views. Keep the
  source notes readable as Markdown.

## Examples

- [Graph view](https://obsidian.md/help/plugins/graph) — Explore global and
  local note-link relationships.
- [Bases overview](https://obsidian.md/help/bases) — See structured views built
  from local Markdown properties.
- [Bases table view](https://obsidian.md/help/bases/views/table) — Review a
  concrete table view and its configuration.

## When to use it

- Use it when research and decisions need to stay in local, portable Markdown
  and connect through links.
- Skip it for live multi-user whiteboarding or issue tracking; use tldraw or
  Linear for those workflows.

## Agent notes

- Vault content is plain Markdown, so an agent with filesystem access can draft
  or update notes directly.
- Obsidian itself is a desktop application; do not assume a remote API, shared
  sync, or plugin behavior without setting it up.
- Sync and Publish are paid optional services; local vault use does not depend
  on them.
- Review community plugins before adopting them in a client workflow, since
  their permissions and maintenance vary.

## Alternatives in this repo

- [tldraw](../whiteboard/tldraw.md) — Use for interactive visual canvases rather
  than linked notes.
- [Linear](../whiteboard/linear.md) — Use for tracked work, projects, and team
  issue workflows.

## Sources

- [Official site](https://obsidian.md/) — checked 2026-10-07
- [Pricing](https://obsidian.md/pricing) — checked 2026-10-07
- [Graph view help](https://obsidian.md/help/plugins/graph) — checked 2026-10-07
- [Bases overview](https://obsidian.md/help/bases) — checked 2026-10-07
- [Bases table view](https://obsidian.md/help/bases/views/table) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/utilities) — checked 2026-10-07;
  page was not readable in the research browser.
