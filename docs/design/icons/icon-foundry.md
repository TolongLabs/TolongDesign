---
name: Icon Foundry
slug: icon-foundry
section: Icons
section_slug: icons
source_url: https://iconfoundry.store/
designeer_url: https://designeer.xyz/visuals
designeer_blurb: Searchable collection of icons from many families.
paywall: free
pricing_summary:
  'Completely free with optional free account for saving collections; no paid
  plans.'
open_source: false
license: proprietary
category_tags: [icons, search-engine, svg, figma-plugin, aggregation]
best_for: [icon search, cross-library comparison, svg copying, brand logos]
stack: []
agent_friendly: false
last_verified: 2026-10-07
---

# Icon Foundry

> Searchable collection of icons from many families. TolongLabs developers reach
> for Icon Foundry to quickly compare icons across major design systems and copy
> SVGs or brand logos without installing command-line tools.

## At a glance

| Field          | Value                                                      |
| -------------- | ---------------------------------------------------------- |
| Source         | [iconfoundry.store](https://iconfoundry.store/)            |
| Paywall        | **Free** — 100% free; no paid tiers                        |
| Open source    | No — Web application is proprietary (aggregates OSS icons) |
| Type           | Web icon search engine and Figma plugin                    |
| Works with     | Figma, SVG, Web browsers, HTML                             |
| Best for       | Icon search, cross-library comparison, brand logos         |
| Agent-friendly | No — Browser UI and Figma plugin only                      |

## What it is

Icon Foundry is an online icon browser maintained by independent design studio
Fresh Contrast. It aggregates more than 47,000 vector icons across premier
open-source icon libraries into a unified, high-speed interface with dark mode
support and customizable preview sizing.

The platform indexes major icon sets including Heroicons, Lucide, Tabler,
Phosphor, Material Design Icons, Bootstrap Icons, Remix Icon, and Ionicons. In
addition to interface glyphs, Icon Foundry curates comprehensive collections of
brand logos, software badges, and sports team emblems (NBA, NFL, NHL, MLB, MLS,
and European football clubs).

Rather than forcing users to clone repositories or register accounts, Icon
Foundry offers instant one-click copying of clean SVG markup that pastes
directly into Figma, code editors, or browser devtools.

## Paywall and pricing

- **Free:** Instant searching, previewing, and copying of all 47,000+ SVG icons
  is completely free. Creating a free account allows saving personal
  collections.
- **Paid:** None. There are no paid tiers, subscriptions, or credit systems.
- **Sign-up required?** No for searching and copying SVGs. Sign-up is optional
  only to bookmark and save icon collections.
- **Licence for client work:** The indexed libraries are published under MIT,
  Apache 2.0, ISC, or CC BY 4.0 licenses, allowing use in client and commercial
  products with customary open-source respect.

Verified on the official website, about, and legal pages on 2026-10-07.

## How to use

1. Visit [iconfoundry.store](https://iconfoundry.store/) in your browser.
2. Search for the desired concept (e.g. "calendar", "download", or "github").
3. Filter by icon family if you want to keep visual style consistent (e.g.
   Phosphor or Lucide).
4. Click on an icon to copy its SVG markup directly to your clipboard.
5. Paste the SVG into your JSX, Vue template, or Figma canvas:

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon"
>
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <polyline points="7 10 12 15 17 10" />
  <line x1="12" y1="15" x2="12" y2="3" />
</svg>
```

6. Alternatively, install the official Figma plugin from the Figma Community to
   insert icons directly into design files.

## Examples

- [Icon Foundry Explorer](https://iconfoundry.store/) — Live searchable web
  catalog across 47,000+ icons and logos.
- [About Icon Foundry](https://iconfoundry.store/about.html) — Background on the
  project origins and curated library roster.
- [Legal & Attributions](https://iconfoundry.store/legal.html) — Comprehensive
  licensing breakdown for every included icon library.

## When to use it

- Use it when you need to quickly locate a specific icon or brand logo without
  remembering which icon library contains it.
- Use it when designing directly in Figma and you want to test multiple icon
  family variants side by side.
- Skip it if you need automated agent workflows via MCP or CLI; use
  [icons0](../icons/icons0.md) instead.
- Skip it if you need animated micro-interactions; use
  [Lucide Animated](../icons/lucide-animated.md) or
  [Heroicons Animated](../icons/heroicons-animated.md).

## Agent notes

- Official website: `https://iconfoundry.store/`.
- No public API or CLI is offered; this is a human-oriented search and copy
  utility.
- For programmatic agent retrieval of icon data, prefer
  [icons0](../icons/icons0.md).

## Alternatives in this repo

- [icons0](../icons/icons0.md) — Open-source hybrid icon search engine with an
  MCP server and shadcn registry.
- [Icons.download](../icons/icons-download.md) — Curated 275-icon library
  rendered in sixteen distinct stroke and corner styles.
- [Material Symbols](../icons/material-symbols.md) — Google variable font with
  thousands of glyphs and adjustable CSS axes.

## Sources

- [Official site](https://iconfoundry.store/) — checked 2026-10-07
- [About page](https://iconfoundry.store/about.html) — checked 2026-10-07
- [Legal page](https://iconfoundry.store/legal.html) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals)
