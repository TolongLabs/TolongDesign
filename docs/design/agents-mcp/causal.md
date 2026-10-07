---
name: Causal
slug: causal
section: Agents & MCP
section_slug: agents-mcp
source_url: https://causal.so/
designeer_url: https://designeer.xyz/build
designeer_blurb: AI canvas workspace for notes and plans.
paywall: freemium
pricing_summary:
  'Free plan includes desktop app, 100 notes/images, and 10 files; Pro plan
  unlocks unlimited items and 10x AI requests.'
open_source: false
license: proprietary
category_tags: [ai, canvas, notes, planning, mcp, desktop]
best_for: [spatial ideation, design planning, visual project mapping]
stack: []
agent_friendly: true
last_verified: 2026-10-07
---

# Causal

> AI canvas workspace for notes and plans. Use it to lay out design references,
> user research, and project roadmaps on an infinite spatial board with AI.

## At a glance

| Field          | Value                                                     |
| -------------- | --------------------------------------------------------- |
| Source         | [causal.so](https://causal.so/)                           |
| Paywall        | **Freemium** — free tier (100 notes); Pro plan available  |
| Open source    | No — proprietary                                          |
| Type           | Spatial AI canvas workspace and visual project planner    |
| Works with     | macOS desktop app, web browser, MCP tools                 |
| Best for       | Spatial ideation, design planning, visual project mapping |
| Agent-friendly | Yes — MCP integration, spatial layout agent, JSON exports |

## What it is

Causal (`causal.so`) is an AI-native infinite canvas workspace designed for
creative developers, designers, and startup founders who organize thinking
spatially rather than hierarchically. Unlike traditional document editors like
Notion or file vaults like Obsidian, Causal operates on the principle that
layout is organization: elements placed close together form natural semantic
clusters.

On the Causal canvas, users arrange sticky notes, design screenshots, web
bookmarks, PDF research papers, and interactive widgets. A native canvas AI
agent reads the full spatial context of the board—understanding visual
proximity, groupings, and connector lines—rather than treating items as isolated
text blocks.

The embedded agent assists with structuring messy brainstorms, clustering
customer feedback into feature requirements, and drafting technical roadmaps.
Through Model Context Protocol (MCP) connections, Causal can hand off mapped
project specifications to external coding agents for execution.

_(Note: Causal at `causal.so` is an independent spatial AI canvas and is not
affiliated with the financial modeling tool formerly at causal.app)._

## Paywall and pricing

- **Free Plan:** Free download of the macOS desktop app and web workspace.
  Includes up to 100 notes/images/links, 10 uploaded files, 5 interactive
  widgets, and starter AI requests.
- **Paid (Pro Plan):** Paid subscription unlocking unlimited notes, images,
  links, files, and widgets, along with 10x increased AI request allocations and
  cloud backup.
- **Sign-up required?** Optional for local evaluation; required for cloud sync
  and Pro features.
- **Licence for client work:** Proprietary application. Canvases, project plans,
  and exported briefs belong entirely to the user.

Checked on 2026-10-07.

## How to use

1. Download Causal for macOS or launch the web app at `causal.so`.
2. Create a new canvas for your TolongLabs project (e.g., "Client Website
   Redesign").
3. Drop visual moodboards, competitive screenshots, feature wishlist notes, and
   client transcripts onto the canvas.
4. Summon the Causal spatial agent to synthesize the board:

```text
Analyze the UI screenshots on the left and the client feedback notes on the
right. Cluster the requested features into three development milestones:
MVP, Phase 2, and Post-Launch Polish.
```

5. The agent visually moves notes into distinct milestone columns and drafts a
   structured roadmap card on the board.
6. Connect Causal's MCP server to Claude Code to allow your coding agent to
   query the roadmap directly during implementation sprints.

## Examples

- [Causal Official Website](https://causal.so/) — overview of the infinite
  spatial canvas and native AI agent capabilities.
- [Causal Product Showcase](https://causal.so/) — interactive preview of note
  clustering, spatial grouping, and macOS app features.
- [Causal on Product Hunt](https://www.producthunt.com/products/causal-2) —
  community launch overview, user reviews, and workflow demos.

## When to use it

- Use it at the start of a web project to map out information architecture,
  visual moodboards, and multi-step release plans.
- Use it when brainstorming complex interactions that are easier to understand
  as cards and visual arrows than as flat linear text.
- Skip it if you need immediate code generation or component output; use Efecto
  or Capacity instead.

## Agent notes

- Official application URL: `https://causal.so/`
- macOS desktop app with local persistence.
- Provides MCP server integration for external coding agents to query board
  state and project milestone definitions.
- Distinguish carefully from the unrelated financial tool formerly known as
  Causal (now Lucanet).

## Alternatives in this repo

- [Distill](../agents-mcp/distill.md) — intelligent agent organizing scattered
  research notes into local Markdown vaults.
- [Efecto](../agents-mcp/efecto.md) — agent-first visual design canvas backed by
  66 MCP tools for JSX and Tailwind generation.
- [Agentation](../agents-mcp/agentation.md) — visual browser annotation tool
  passing UI review feedback to agents.

## Sources

- [Causal Official Site](https://causal.so/) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build)
