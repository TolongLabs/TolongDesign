---
name: Shiori
slug: shiori
section: Utilities
section_slug: utilities
source_url: 'https://www.shiori.sh/'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: Bookmark manager with CLI and Raycast support.
paywall: freemium
pricing_summary: 'Basic is free; Plus is $3/month and Pro is $10/month.'
open_source: false
license: proprietary
category_tags: [bookmarks, research, mcp, cli]
best_for: [design research, saved references, agent-accessible bookmarks]
stack: []
execution_mode: mcp-skill
surface: ['development']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Shiori

> Bookmark manager with CLI and Raycast support. Its API and MCP server let a
> coding assistant search saved references alongside a developer.

## At a glance

| Field          | Value                                                   |
| -------------- | ------------------------------------------------------- |
| Source         | [shiori.sh](https://www.shiori.sh/)                     |
| Paywall        | **Freemium** — Basic free; Plus $3/month; Pro $10/month |
| Open source    | No — hosted product; source licence not published       |
| Type           | Bookmark manager with enrichment and integrations       |
| Works with     | Browser, API, CLI, Raycast, MCP, and integrations       |
| Best for       | Collecting and retrieving design research               |
| Agent-friendly | Yes — public API, CLI, and hosted MCP endpoint          |

## What it is

Shiori is a bookmark manager for saving and organizing links. Its product pages
describe link extraction and enrichment, a web API, a command-line interface,
Raycast support, and an MCP server. These make saved references available to
both a developer and a connected coding assistant.

The Basic tier is free and includes unlimited links, basic extraction, API, CLI,
and MCP access. Paid plans add advanced enrichment and AI-oriented features.
Plus includes 100 advanced enrichments per month; Pro includes 500 and adds AI
chat and integrations, according to the official plan details.

For a design project, Shiori can hold references to competitor pages, visual
examples, and implementation docs. It is a research store, not a website gallery
or a replacement for a project brief.

## Paywall and pricing

- **Free:** Basic is $0 and includes unlimited links, basic extraction, API,
  CLI, and MCP.
- **Paid:** Plus is $3/month with 100 advanced enrichments. Pro is $10/month
  with 500 enrichments, AI chat, and integrations.
- **Sign-up required?** An account is required to save and sync a personal
  library; the public MCP endpoint is documented for authenticated use.
- **Licence for client work:** Shiori is a hosted service. No separate
  redistribution licence for the product or saved content was published.

Prices checked 2026-10-07 on the official site. Confirm current plan limits
before choosing a paid tier.

## How to use

1. Save useful design, documentation, and competitor URLs into a Shiori
   collection for the project.
2. Add concise notes or tags that preserve why each page is relevant, such as
   “pricing comparison” or “mobile navigation reference.”
3. For an API client, follow the official API guide and send the API key as a
   Bearer token. Keep the key in local configuration, not in source control.
4. To connect Codex to the hosted MCP server, use the documented command:

   ```bash
   codex mcp add shiori --url https://www.shiori.sh/mcp
   ```

5. Ask the agent to retrieve references by project topic, then cite each saved
   URL in the design brief rather than treating the bookmark title as evidence.

## Examples

- [API documentation](https://www.shiori.sh/docs/api) — retrieve and manage
  saved links through the authenticated HTTP API.
- [MCP documentation](https://www.shiori.sh/docs/mcp) — connect an assistant to
  search and use the bookmark library.
- [Skill documentation](https://www.shiori.sh/docs/skill) — see the documented
  agent-facing workflow.
- [Notion sync](https://www.shiori.sh/docs/notion-sync) — review a supported
  reference-sync integration.

## When to use it

- Use it when the team needs a persistent, searchable set of design and
  implementation references across a project.
- Use MCP when a coding agent should retrieve the team's curated links while
  drafting or implementing a page.
- Skip it when a one-off reference list is enough or when project policy does
  not allow storing research in a hosted third-party service.

## Agent notes

- Hosted MCP endpoint: `https://www.shiori.sh/mcp`.
- Codex setup: `codex mcp add shiori --url https://www.shiori.sh/mcp`.
- API authentication uses a Bearer token; never commit the token or include it
  in generated documentation.
- Basic has monthly limits on advanced enrichment; do not imply that every
  extraction or AI feature is unlimited.
- Read [API docs](https://www.shiori.sh/docs/api) and
  [MCP docs](https://www.shiori.sh/docs/mcp) for current capabilities.

## Alternatives in this repo

- [Open Source Together](../utilities/open-source-together.md) — discover
  open-source projects rather than organize saved references.
- [Raycast](../desktop/raycast.md) — use for desktop search and app workflows
  rather than a shared bookmark library.
- [Mesurer](../utilities/mesurer.md) — capture and annotate live-page review
  feedback.

## Sources

- [Official Shiori site and plans](https://www.shiori.sh/) — checked 2026-10-07
- [API documentation](https://www.shiori.sh/docs/api) — checked 2026-10-07
- [MCP documentation](https://www.shiori.sh/docs/mcp) — checked 2026-10-07
- [Skill documentation](https://www.shiori.sh/docs/skill) — checked 2026-10-07
- [Credits documentation](https://www.shiori.sh/docs/credits) — checked
  2026-10-07
- [Notion sync documentation](https://www.shiori.sh/docs/notion-sync) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/utilities) — checked 2026-10-07
