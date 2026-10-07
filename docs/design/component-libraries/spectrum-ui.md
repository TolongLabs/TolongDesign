---
name: 'Spectrum UI'
slug: 'spectrum-ui'
section: 'Component Libraries'
section_slug: 'component-libraries'
source_url: 'https://ui.spectrumhq.in/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Polished components designed for SaaS websites.'
paywall: free
pricing_summary:
  'The component library is free under Apache-2.0; no paid plan was listed.'
open_source: true
license: Apache-2.0
category_tags: ['react', 'nextjs', 'tailwind', 'animation', 'mcp']
best_for: ['saas interfaces', 'agent-assisted component discovery']
stack: ['react', 'nextjs', 'tailwind', 'shadcn']
agent_friendly: true
last_verified: 2026-10-07
---

# Spectrum UI

> Polished components designed for SaaS websites.

A TolongLabs developer can reach for it when building a SaaS surface with
motion-ready blocks or when an agent needs an MCP-backed component search
workflow.

## At a glance

| Field          | Value                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------- |
| Source         | [ui.spectrumhq.in](https://ui.spectrumhq.in/)                                             |
| Paywall        | **Free** — The component library is free under Apache-2.0; no paid plan was listed.       |
| Open source    | Yes — Official LLM information identifies Apache-2.0 licensing for the component library. |
| Type           | Animated component and block registry with MCP server                                     |
| Works with     | React, Next.js, TypeScript, Tailwind CSS, shadcn/ui; Node.js 18+ for MCP                  |
| Best for       | SaaS interfaces, agent-assisted component discovery                                       |
| Agent-friendly | Yes — documented source, CLI, or agent workflow                                           |

## What it is

Spectrum UI is a collection of polished, animated components and page blocks
aimed at SaaS interfaces. It targets React, Next.js, Tailwind CSS, Motion, and
shadcn conventions.

The site reports more than 250 components and variants. Public docs group
examples such as feedback cards, cards, and kanban layouts.

An MCP server exposes search, retrieval, and install operations to coding
agents. Some browser component pages gate code behind a free sign-in even though
the library is free.

## Paywall and pricing

- **Free:** Public component library and registry are free; the official docs
  describe more than 250 components and block variants.
- **Paid:** Not published; no paid plan was listed.
- **Sign-up required?** Yes — a free sign-in is required on some component pages
  to reveal code or commands; MCP docs are public.
- **Licence for client work:** Apache-2.0 permits commercial use subject to its
  licence conditions.

Pricing and access were checked on 2026-10-07.

## How to use

1. Browse the docs by component category and inspect the states and variants.
2. For agent access, configure the documented MCP server with Node.js 18 or
   later.
3. Use the component install command or MCP install action, then review the
   generated source and dependencies in the app.

Install or add the documented component with:

```bash
npx shadcn@latest add @spectrumui/accordion
```

The official docs show this minimal usage or setup:

```toml
[mcp_servers.spectrum-ui]
command = "npx"
args = ["-y", "@spectrumui/mcp"]
```

## Examples

- [Feedback card](https://ui.spectrumhq.in/docs/feedback) — Feedback interaction
  and card treatment.
- [Card](https://ui.spectrumhq.in/docs/card) — Reusable card composition and
  visual variants.
- [Kanban](https://ui.spectrumhq.in/docs/kanban) — Board-style workflow UI.

## When to use it

- Use it when building a SaaS surface with motion-ready blocks or when an agent
  needs an MCP-backed component search workflow.

- Skip it if the project does not use its React and Tailwind assumptions;
  compare [coss ui](../component-libraries/coss-ui.md) for Base UI primitives.

## Agent notes

- Node.js 18+ is listed for the MCP server.
- Some page-level source and CLI details require a free account in the browser.
- Official LLM information states Apache-2.0; keep attribution and licence
  material with copied code.

## Alternatives in this repo

- [Cult UI](../component-libraries/cult-ui.md) — Animated shadcn components and
  blocks.
- [shadcnblocks](../component-libraries/shadcnblocks.md) — Large catalogue of
  free and paid shadcn blocks.
- [Fancy Components](../component-libraries/fancy-components.md) — Playful
  motion components with public registry docs.

## Sources

- [Official site](https://ui.spectrumhq.in/) — checked 2026-10-07
- [LLM information and licence](https://ui.spectrumhq.in/llm-info) — checked
  2026-10-07
- [Installation](https://ui.spectrumhq.in/docs/installation) — checked
  2026-10-07
- [MCP documentation](https://ui.spectrumhq.in/docs/mcp) — checked 2026-10-07
- [Feedback](https://ui.spectrumhq.in/docs/feedback) — checked 2026-10-07
- [Card](https://ui.spectrumhq.in/docs/card) — checked 2026-10-07
- [Kanban](https://ui.spectrumhq.in/docs/kanban) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
