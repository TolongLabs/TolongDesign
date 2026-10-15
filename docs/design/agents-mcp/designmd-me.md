---
name: designmd.me
slug: designmd-me
section: Agents & MCP
section_slug: agents-mcp
source_url: 'https://designmd.me/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Generator creating machine-readable design specifications.'
paywall: freemium
pricing_summary:
  'Single-page generation uses 4 credits and multi-page generation 8; credit
  pack USD prices are not published.'
open_source: false
license: proprietary
category_tags: [design-systems, generator, cli]
best_for: ['website to DESIGN.md', 'agent design context']
stack: []
execution_mode: browser-app
surface: ['reference', 'web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# designmd.me

> Generator creating machine-readable design specifications. TolongLabs use: Use
> its URL-to-DESIGN.md workflow to prepare a concrete style brief for an agent.

## At a glance

| Field          | Value                                                 |
| -------------- | ----------------------------------------------------- |
| Source         | [Official site](https://designmd.me/)                 |
| Paywall        | **Freemium** — Credits; USD pack prices not published |
| Open source    | No — proprietary                                      |
| Type           | Website-to-DESIGN.md generator                        |
| Works with     | Web app, CLI, Figma, coding agents                    |
| Best for       | website to DESIGN.md, agent design context            |
| Agent-friendly | Yes — direct Markdown, CLI, or MCP use                |

## What it is

designmd.me accepts a website URL and creates an agent-readable DESIGN.md, with
a browser preview and optional Figma import. Its workflow reads page structure
and computed styles.

A CLI and an agent skill expose generation to coding workflows. The output is a
design reference, not a guarantee that every route or responsive state was
captured.

## Paywall and pricing

- **Free:** The site says a card is not required to start; starter credit
  quantity is not stated.
- **Paid:** Generation costs 4 credits for a single-page specification or 8 for
  multi-page. HTML preview costs 8 extra credits and Figma import costs 12;
  credit packs are one-time and do not expire, but USD prices are not published.
- **Sign-up required?:** The web flow can be started without a card. The CLI
  requires `designmdme login` to use account credits.
- **Licence for client work:** The hosted service is proprietary. The reviewed
  pages do not state a separate output license; confirm service terms and
  source-site rights before using extracted assets.

Checked 2026-10-07.

## How to use

1. Enter a public URL in the web generator, choose single-page or multi-page
   capture, and inspect the preview before spending credits on add-ons.

2. For terminal use, authenticate with `designmdme login`; use single-page mode
   for a focused page and multi-page mode when navigation matters.

3. Review the DESIGN.md for tokens and component rules. Keep only relevant
   patterns and add them to project context for the coding agent.

4. Check the implementation against the source site and project requirements;
   manually correct details from a single captured page.

```bash
bunx designmdme --website stripe.com
```

## Examples

- [GitHub preview](https://designmd.me/examples/github-preview.html) — Rendered
  sample of the output a design spec can guide.
- [System comparison](https://designmd.me/compare/new) — Compare two design
  systems before choosing a direction.
- [DESIGN.md explainer](https://designmd.me/what-is-design-md) — Review the
  format before creating a project brief.

## When to use it

- Use it when a public reference site should become a structured agent brief.
- Skip it for authenticated pages or when official source tokens are required;
  validate values manually.

## Agent notes

The published CLI package is `designmdme`; the site also documents an agent
skill.

Runs consume credits. Review existing output before repeating captures or
ordering previews.

## Alternatives in this repo

- [Refero](../agents-mcp/refero.md) — Browse extracted systems without
  submitting a source URL.
- [designmd.supply](../agents-mcp/designmd-supply.md) — Use public guides and an
  open-source generator.
- [getdesign.md](../agents-mcp/getdesign-md.md) — Choose from a prebuilt catalog
  or request a private extraction.

## Sources

- [Official site](https://designmd.me/) — checked 2026-10-07
- [CLI](https://designmd.me/cli) — checked 2026-10-07
- [Credit updates](https://designmd.me/whats-new) — checked 2026-10-07
- [Sample preview](https://designmd.me/examples/github-preview.html) — checked
  2026-10-07
- [Compare](https://designmd.me/compare/new) — checked 2026-10-07
- [Explainer](https://designmd.me/what-is-design-md) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build) — checked 2026-10-07
