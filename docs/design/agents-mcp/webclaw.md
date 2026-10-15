---
name: Webclaw
slug: webclaw
section: Agents & MCP
section_slug: agents-mcp
source_url: 'https://webclaw.io/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Converts any webpage into structured markdown.'
paywall: freemium
pricing_summary:
  'Free includes 500 credits/month; paid plans are Starter $19, Growth $49, Pro
  $99, and Scale $399/month.'
open_source: true
license: AGPL-3.0
category_tags: [web-scraping, markdown, mcp]
best_for: ['web extraction for agents', 'structured page data']
stack: ['rust', 'cli', 'mcp']
execution_mode: mcp-skill
surface: ['development']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Webclaw

> Converts any webpage into structured markdown. TolongLabs use: Use its
> extraction tools to provide agents with clean, structured content from public
> pages.

## At a glance

| Field          | Value                                                 |
| -------------- | ----------------------------------------------------- |
| Source         | [Official site](https://webclaw.io/)                  |
| Paywall        | **Freemium** — 500 free credits/mo; plans from $19/mo |
| Open source    | Yes — AGPL-3.0                                        |
| Type           | Web scraping API and local tools                      |
| Works with     | REST API, MCP, CLI, Rust self-hosted core             |
| Best for       | web extraction for agents, structured page data       |
| Agent-friendly | Yes — direct Markdown, CLI, or MCP use                |

## What it is

Webclaw converts public pages into Markdown or structured data through hosted
API, CLI, and MCP tools. It also offers extractors for tables, pricing pages,
and brand kits.

The hosted account uses credits, while the project publishes an AGPL-3.0 Rust
core for self-hosting. Costs vary by operation, so check current docs before a
bulk crawl.

## Paywall and pricing

- **Free:** Free includes 500 credits monthly with no card required; the
  homepage lists one credit per basic page.
- **Paid:** Starter is $19/month for 5,000 credits, Growth $49/month for 25,000,
  Pro $99/month for 100,000, and Scale $399/month for 500,000. Annual billing
  advertises two months free.
- **Sign-up required?:** No card for the free plan. An account key is needed for
  hosted API or MCP use.
- **Licence for client work:** The core is AGPL-3.0; review obligations before
  modifying or offering a networked fork. Hosted access has separate terms.

Checked 2026-10-07.

## How to use

1. For one-off extraction, open a web tool, submit a public URL, and choose
   Markdown or structured output.

2. For agents, configure the documented MCP tools or call REST with an account
   key stored outside the prompt.

3. For self-hosting, follow repository setup for the Rust core. Compare expected
   volume with hosted credits before choosing an operating mode.

```bash
npx create-webclaw
```

## Examples

- [Website to Markdown](https://webclaw.io/tools/website-to-markdown) — Extract
  readable content for an agent or search index.
- [Table to CSV](https://webclaw.io/tools/website-table-to-csv) — Turn an HTML
  table into structured CSV.
- [Pricing extractor](https://webclaw.io/tools/pricing-page-extractor) — Focus
  extraction on plan names, amounts, and billing.
- [Brand kit extractor](https://webclaw.io/tools/website-brand-kit-extractor) —
  Collect public visual-brand signals from a page.

## When to use it

- Use it when an agent needs repeatable web extraction or structured content
  from public sites.
- Skip it for authenticated pages, private data, or scraped content without
  permission; use an approved data source.

## Agent notes

The site advertises REST, CLI, and 12 MCP tools. Check current docs for
endpoints, authentication, and credit costs.

Respect robots and site terms; avoid sending credentials or personal data into
unrelated context.

## Alternatives in this repo

- [fx](../agents-mcp/fx.md) — Run a local coding agent for repository work.
- [integrations.sh](../agents-mcp/integrations-sh.md) — Look up API and
  developer-integration specifications.
- [is-agentic.com](../agents-mcp/is-agentic-com.md) — Audit public crawler and
  agent readiness.

## Sources

- [Official site and pricing](https://webclaw.io/) — checked 2026-10-07
- [GitHub repository](https://github.com/0xMassi/webclaw) — checked 2026-10-07
- [Markdown tool](https://webclaw.io/tools/website-to-markdown) — checked
  2026-10-07
- [Table to CSV](https://webclaw.io/tools/website-table-to-csv) — checked
  2026-10-07
- [Pricing extractor](https://webclaw.io/tools/pricing-page-extractor) — checked
  2026-10-07
- [Brand kit](https://webclaw.io/tools/website-brand-kit-extractor) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/build) — checked 2026-10-07
