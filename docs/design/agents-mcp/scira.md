---
name: Scira
slug: scira
section: Agents & MCP
section_slug: agents-mcp
source_url: https://scira.ai/
designeer_url: https://designeer.xyz/build
designeer_blurb: Minimalist open-source AI search engine.
paywall: freemium
pricing_summary:
  'Open-source codebase is free under AGPL-3.0 with self-hosting; hosted app
  offers free daily searches and paid Pro and Max tiers.'
open_source: true
license: AGPL-3.0
category_tags: [ai, search, open-source, vercel-ai-sdk, mcp, research]
best_for: [ad-free search, technical research, self-hosted ai engine]
stack: [nextjs, typescript, tailwind]
agent_friendly: true
last_verified: 2026-10-07
---

# Scira

> Minimalist open-source AI search engine. Use it to conduct fast, cited
> research across web sources without commercial tracking, sponsored ads, or SEO
> bloat.

## At a glance

| Field          | Value                                                            |
| -------------- | ---------------------------------------------------------------- |
| Source         | [scira.ai](https://scira.ai/)                                    |
| Paywall        | **Freemium** — open source AGPL-3.0; hosted free & Pro tiers     |
| Open source    | Yes — AGPL-3.0 ([GitHub](https://github.com/zaidmukaddam/scira)) |
| Type           | Minimalist AI-powered search engine and research assistant       |
| Works with     | Vercel AI SDK, Next.js, Tavily, Firecrawl, MCP                   |
| Best for       | Ad-free search, technical research, self-hosted AI engine        |
| Agent-friendly | Yes — open source Next.js codebase, MCP client, clean JSON       |

## What it is

Scira (originally known as MiniPerplx) is an open-source, minimalist AI search
engine created by developer Zaid Mukaddam. Built as a clean alternative to
commercial answer engines like Perplexity, Scira focuses on speed, typographic
simplicity, and verifiable source attribution without ad clutter.

Under the hood, Scira is built with Next.js and the Vercel AI SDK. It combines
real-time web search APIs (such as Tavily and Exa) with web content extractors
(Firecrawl) and code execution sandboxes (e2b.dev). When a user submits a query,
Scira dynamically plans sub-queries, scrapes relevant technical documentation,
synthesizes a grounded answer, and lists direct citation cards.

In addition to the hosted web client at `scira.ai`, the complete application is
open source under AGPL-3.0. Developers can self-host their own instance, plug in
their own LLM and search API keys, or connect Scira's companion MCP tools to
their local coding agents.

## Paywall and pricing

- **Free (Self-Hosted):** 100% free under AGPL-3.0. Clone the repository and
  supply your own API keys for Groq, OpenAI, Anthropic, and Tavily.
- **Free (Hosted at scira.ai):** Free tier includes limited daily searches
  (e.g., 3-5 grounded queries per day) with full citation links.
- **Paid (Hosted Plans):**
  - **Pro:** Monthly subscription offering unlimited fast searches, advanced
    models (Claude 3.5 Sonnet, GPT-4o), and deep research mode.
  - **Max:** High-tier subscription with image generation, extended reasoning
    limits, and highest weekly token caps.
- **Sign-up required?** Optional for basic hosted searches; required for Pro
  subscription and personal query history.
- **Licence for client work:** AGPL-3.0 requires modifications to the core
  engine to remain open source if distributed or served over a network; search
  outputs, answers, and research notes are unrestricted.

Checked on 2026-10-07.

## How to use

1. Run queries directly on the hosted service at `scira.ai` for quick, ad-free
   technical research:

```text
What are the breaking changes between Tailwind CSS v3 and v4 for CSS variables?
```

2. Or self-host a private instance inside your TolongLabs infrastructure:

```bash
git clone https://github.com/zaidmukaddam/scira.git
cd scira
bun install
```

3. Create a `.env.local` file with your provider keys:

```bash
OPENAI_API_KEY="your-openai-key"
TAVILY_API_KEY="your-tavily-key"
```

4. Run the local development server:

```bash
bun run dev
```

5. Connect the companion `scira-mcp-chat` client to Claude Code or Cursor to
   give your coding agent native grounded web-search capabilities.

## Examples

- [Scira Official Search](https://scira.ai/) — live minimalist search interface
  providing cited, real-time answers.
- [Scira GitHub Repository](https://github.com/zaidmukaddam/scira) — full source
  code, Vercel AI SDK integration, and self-hosting documentation.
- [Scira MCP Chat Client](https://github.com/zaidmukaddam/scira-mcp-chat) —
  companion MCP client demonstrating tool use with Model Context Protocol.

## When to use it

- Use it when researching obscure technical bugs, new library API changes, or
  design patterns without wading through sponsored Google links.
- Use it to deploy a private, internal search engine for your engineering team
  with custom knowledge scrapers.
- Skip it when you need in-repo code editing and terminal diff management; use
  OpenCode instead.

## Agent notes

- Official application URL: `https://scira.ai/`
- GitHub repository: `https://github.com/zaidmukaddam/scira`
- Companion MCP tool: `https://github.com/zaidmukaddam/scira-mcp-chat`
- Built on Next.js 15, Vercel AI SDK, and Tailwind CSS.
- Can be containerized and run locally via Docker.

## Alternatives in this repo

- [Distill](../agents-mcp/distill.md) — intelligent desktop agent organizing and
  synthesizing scattered research notes.
- [OpenCode](../agents-mcp/opencode.md) — open-source autonomous terminal AI
  coding assistant.
- [Foglamp](../agents-mcp/foglamp.md) — observability and telemetry platform
  tracking agent performance and costs.

## Sources

- [Scira Official Site](https://scira.ai/) — checked 2026-10-07
- [Scira GitHub Repository](https://github.com/zaidmukaddam/scira) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/build)
