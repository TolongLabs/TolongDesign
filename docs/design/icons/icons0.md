---
name: icons0
slug: icons0
section: Icons
section_slug: icons
source_url: https://icons0.dev/
designeer_url: https://designeer.xyz/visuals
designeer_blurb: Search engine covering over 200k icons.
paywall: free
pricing_summary: 'Completely free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [icons, search-engine, mcp, shadcn, vector-search]
best_for: [icon search, ai agents, shadcn integration]
stack: [react, nextjs, tailwind, typescript]
agent_friendly: true
last_verified: 2026-10-07
---

# icons0

> Search engine covering over 200k icons. TolongLabs developers reach for icons0
> to query hundreds of icon collections semantically and install them directly
> into projects via MCP or shadcn registries.

## At a glance

| Field          | Value                                                         |
| -------------- | ------------------------------------------------------------- |
| Source         | [icons0.dev](https://icons0.dev/)                             |
| Paywall        | **Free** — 100% free and open source                          |
| Open source    | Yes — MIT ([GitHub](https://github.com/marcoripa96/i0))       |
| Type           | Icon search engine, MCP server, and registry                  |
| Works with     | React, Next.js, shadcn/ui, Tailwind CSS, MCP clients          |
| Best for       | Icon search, AI agents, shadcn integration                    |
| Agent-friendly | Yes — MCP server endpoint, shadcn registry, React code export |

## What it is

icons0 is an open-source, hybrid search engine and distribution registry for
over 200,000 icons gathered across more than 150 open-source icon collections
(such as Lucide, Tabler, Material Design Icons, Phosphor, and Simple Icons).
Created by Marco Ripa, it addresses the friction of hunting through dozens of
fragmented icon libraries and installing heavy npm bundle dependencies.

Under the hood, icons0 uses Turso (libSQL) with an FTS5 full-text index and
Gemini embeddings (`gemini-embedding-001`) to support hybrid semantic and
keyword icon discovery with Reciprocal Rank Fusion (RRF). Searching for an
abstract concept like "status" or "payment" returns relevant icons across every
supported library even if the glyph name does not contain the exact keyword.

Unlike conventional browser-only icon aggregators, icons0 treats AI coding
agents and modern component registries as first-class consumers. It runs an
integrated Model Context Protocol (MCP) server directly at `/mcp` and provides a
shadcn-compatible component registry endpoint so developers can add standalone,
typed React icon components without pulling in monolithic npm libraries.

## Paywall and pricing

- **Free:** The complete web search interface, the public MCP server endpoint,
  and the shadcn registry endpoints are free without restrictions.
- **Paid:** None. There are no paid plans, subscriptions, or gated icon sets.
- **Sign-up required?** No. Searching, downloading SVGs, copying React code, and
  querying the MCP endpoint require no authentication.
- **Licence for client work:** The codebase and service are MIT licensed.
  Individual icon sets retain their respective open-source licenses (primarily
  MIT, Apache 2.0, CC0, and ISC), all of which permit commercial client work.

Verified on the official GitHub repository and live web interface on 2026-10-07.

## How to use

1. Install icons directly into a React / Next.js project using shadcn CLI:

```bash
bunx --bun shadcn@latest add https://icons0.dev/r/lucide:home.json
```

2. Import and use the installed icon component:

```tsx
import { LucideHome } from '@/components/icons/lucide-home'

export function DashboardNav() {
  return (
    <nav className="flex items-center gap-2">
      <LucideHome className="size-5 text-neutral-700" />
      <span>Overview</span>
    </nav>
  )
}
```

3. Connect the MCP server to your AI coding agent configuration (e.g. in your
   MCP client settings):

```json
{
  "mcpServers": {
    "icons0": {
      "url": "https://icons0.dev/mcp"
    }
  }
}
```

4. Prompt your coding agent to find and install icons using tool calls like
   `search-icons` and `get-icon` without manually searching the web.

## Examples

- [icons0 Web App](https://icons0.dev/) — Interactive web UI for hybrid semantic
  and keyword search with filtering across 150+ collections.
- [icons0 MCP Server Endpoint](https://icons0.dev/mcp) — Streamlined Model
  Context Protocol endpoint providing icon retrieval tools for AI agents.
- [icons0 GitHub Repository](https://github.com/marcoripa96/i0) — Source code,
  database schema, seeding scripts, and self-hosting documentation.

## When to use it

- Use it when you need to search across multiple icon libraries simultaneously
  using natural language concepts rather than exact icon names.
- Use it when using shadcn/ui or standalone React setups where you want
  individual icons without bloating `node_modules` with massive icon packages.
- Use it when configuring AI coding agents to look up and insert SVG icon
  components autonomously via MCP.
- Skip it when you are already standardized on a single unified icon component
  library like [Lucide Animated](../icons/lucide-animated.md) or
  [Material Symbols](../icons/material-symbols.md).

## Agent notes

- Official source: `https://github.com/marcoripa96/i0`.
- The MCP server exposes four tools: `search-icons`, `get-icon`,
  `list-collections`, and `list-licenses`.
- Standalone components can be fetched via HTTP JSON registry at
  `https://icons0.dev/r/<collection>:<name>.json` or
  `https://i0-phi.vercel.app/r/<collection>:<name>.json`.
- Output React components are fully typed, SVG-inlined, and use Tailwind CSS
  classes for sizing and color styling.

## Alternatives in this repo

- [Icon Foundry](../icons/icon-foundry.md) — Browser-based directory for
  searching and copying SVGs across popular open-source icon sets.
- [Lucide Animated](../icons/lucide-animated.md) — Motion-enhanced React icon
  library with built-in micro-interactions.
- [Material Symbols](../icons/material-symbols.md) — Google variable icon font
  spanning 2,500+ glyphs with adjustable optical weight and fill axes.

## Sources

- [Official site](https://icons0.dev/) — checked 2026-10-07
- [GitHub repository](https://github.com/marcoripa96/i0) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals)
