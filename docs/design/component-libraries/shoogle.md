---
name: Shoogle
slug: shoogle
section: Component Libraries
section_slug: component-libraries
source_url: https://shoogle.dev/
designeer_url: https://designeer.xyz/components
designeer_blurb: Search engine spanning shadcn component registries.
paywall: free
pricing_summary: 'Free public search engine and MCP server.'
open_source: false
license: proprietary
category_tags: [search-engine, shadcn, registries, mcp, directory]
best_for: [discovering shadcn blocks, mcp agent lookup, registry search]
stack: []
agent_friendly: true
last_verified: 2026-10-07
---

# Shoogle

> Search engine spanning shadcn component registries. TolongLabs developers and
> coding agents reach for Shoogle to discover, inspect, and install community UI
> components and layout blocks across hundreds of public shadcn registries.

## At a glance

| Field          | Value                                                          |
| -------------- | -------------------------------------------------------------- |
| Source         | [shoogle.dev](https://shoogle.dev/)                            |
| Paywall        | **Free** — 100% free search engine and MCP server              |
| Open source    | No — Proprietary web service                                   |
| Type           | Search engine, registry directory, and MCP server              |
| Works with     | shadcn/ui, Cursor, Claude Code, AI agents                      |
| Best for       | Discovering shadcn blocks, MCP agent lookup, registry search   |
| Agent-friendly | Yes — native MCP server, agent skill guides, public search API |

## What it is

Shoogle is a specialized search engine and directory created by Ali Bey
(@alibey_10) that indexes the expanding universe of community shadcn/ui
registries. As thousands of developers publish independent component registries,
locating specific blocks (such as pricing grids, testimonial carousels, or auth
cards) across disparate documentation sites becomes challenging.

Shoogle indexes more than 26,000 community components, blocks, and templates.
Its discovery engine offers several key capabilities:

- **Keyword & Category Search:** Fast semantic and lexical search across names,
  descriptions, and code contents of community registries.
- **Visual Previews & Copyable Commands:** Displays live component rendering and
  ready-to-run `npx shadcn add` commands referencing the exact registry URL.
- **Registry Directory:** Curated registry index cataloging independent
  creators, enterprise kits, and domain-specific ecosystems.
- **Native MCP Server:** Dedicated Model Context Protocol server (`/mcp`) that
  equips AI coding agents (such as Claude Code, Cursor, and custom agentic
  assistants) with live lookup tools to find and inject components directly into
  active projects.

## Paywall and pricing

- **Free:** The web search engine, registry directory, and MCP server endpoints
  are 100% free to use.
- **Paid:** None.
- **Sign-up required?** No. Bookmark synchronization is optional.
- **Licence for client work:** The search platform is free to use. Components
  indexed by Shoogle are subject to their respective creators' open-source
  licenses (mostly MIT).

Checked on the official website on 2026-10-07.

## How to use

1. Open [shoogle.dev](https://shoogle.dev/) and enter your component query (e.g.
   `hero with video` or `pricing table`).
2. Filter results by registry or component category.
3. Copy the installation command displayed on the card and run it in your
   terminal:

```bash
bunx --bun shadcn@latest add https://registry-url.com/r/pricing-block.json
```

4. For coding agents, configure the Shoogle MCP server to search components
   autonomously during development:

```json
{
  "mcpServers": {
    "shoogle": {
      "command": "npx",
      "args": ["-y", "@shoogle/mcp"]
    }
  }
}
```

## Examples

- [Shoogle Explore Search](https://shoogle.dev/search?tab=explore) — Interactive
  search interface querying tens of thousands of community shadcn blocks.
- [Shoogle Registry Directory](https://shoogle.dev/directory) — Comprehensive
  listing of registered third-party registries.
- [Shoogle MCP Server Guide](https://shoogle.dev/mcp) — Instructions for
  connecting Claude Code and Cursor to live registry search.

## When to use it

- Use it when starting a new page design and searching for specialized blocks
  (e.g. multi-step wizard, interactive pricing slider, or complex hero layout)
  beyond default shadcn primitives.
- Use it within AI agent toolkits via MCP so coding agents can find and install
  verified community components autonomously.
- Skip it when you already know the specific component package you need; use
  direct registries like [Shadcn Labs](../component-libraries/shadcn-labs.md) or
  [Nexvyn UI](../component-libraries/nexvyn-ui.md) instead.

## Agent notes

- Official portal: `https://shoogle.dev/`.
- MCP configuration guide available at `https://shoogle.dev/mcp`.
- Agents can query Shoogle to discover valid `npx shadcn add <url>` command
  lines for any requested UI pattern.
- Search indexes cover components compatible with both Tailwind v3 and v4.

## Alternatives in this repo

- [Shadcn Labs](../component-libraries/shadcn-labs.md) — The curated collective
  of domain-specific registries (termcn, framecn, emailcn, pdfcn).
- [startercn](../component-libraries/startercn.md) — Template for creating your
  own registry indexed by engines like Shoogle.

## Sources

- [Shoogle Official Website](https://shoogle.dev/) — checked 2026-10-07
- [Shoogle MCP Guide](https://shoogle.dev/mcp) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components)
