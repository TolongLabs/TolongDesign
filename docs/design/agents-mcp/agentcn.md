---
name: agentcn
slug: agentcn
section: Agents & MCP
section_slug: agents-mcp
source_url: 'https://agentcn.run/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Customizable and production-ready AI agent recipes for React.'
paywall: free
pricing_summary:
  'The registry and recipes are MIT licensed and free; no paid plan was listed.'
open_source: true
license: MIT
category_tags: [agent-recipes, react, registry]
best_for: ['agent capabilities for apps', 'workflow examples']
stack: ['typescript', 'react', 'eve', 'mastra']
execution_mode: registry
surface: ['development']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# agentcn

> Customizable and production-ready AI agent recipes for React. TolongLabs use:
> Use its recipe registry to add complete agent workflows to supported projects.

## At a glance

| Field          | Value                                          |
| -------------- | ---------------------------------------------- |
| Source         | [Official site](https://agentcn.run/)          |
| Paywall        | **Free** — Free MIT recipe registry            |
| Open source    | Yes — MIT                                      |
| Type           | Registry of composable AI-agent recipes        |
| Works with     | Eve, Flue, Mastra, LangGraph/Dawn, shadcn CLI  |
| Best for       | agent capabilities for apps, workflow examples |
| Agent-friendly | Yes — direct Markdown, CLI, or MCP use         |

## What it is

agentcn is a registry of agent recipes added to a project with the shadcn CLI.
Examples cover search, SEO audits, DESIGN.md extraction, files, meetings, and
other app tasks.

Recipes target frameworks such as Eve, Flue, Mastra, and LangGraph/Dawn. They
add source and configuration, so inspect dependencies and environment
requirements before deployment.

## Paywall and pricing

- **Free:** The registry, recipes, and install workflow are free and MIT
  licensed.
- **Paid:** No paid tier or charge was listed.
- **Sign-up required?:** Browsing does not require an account. A supported
  project and any provider keys required by a recipe are needed to run it.
- **Licence for client work:** The repository is MIT licensed. Review external
  service and model terms before deploying a recipe for a client.

Checked 2026-10-07.

## How to use

1. Open a supported agent project and satisfy framework prerequisites. The
   installation guide lists required environment variables.

2. Choose a recipe and add it with the shadcn CLI using the Bun runner shown
   below.

3. Inspect generated files, configure secrets through environment variables, and
   test controlled inputs before production.

```bash
bunx shadcn@latest add @agentcn/eve/extract-design-md
```

## Examples

- [Deep Search](https://www.agentcn.run/docs/agents/eve/deep-search) — Recipe
  for multi-step search and retrieval.
- [AI SEO Audit](https://www.agentcn.run/docs/agents/eve/ai-seo-audit) —
  Website-analysis workflow with agent steps.
- [Extract DESIGN.md](https://www.agentcn.run/docs/agents/eve/extract-design-md)
  — Design-focused recipe for front-end work.

## When to use it

- Use it when an agent-framework app needs a workflow scaffold rather than a
  one-off prompt.
- Skip it for unsupported frameworks or an isolated component; use a compatible
  skill or implement directly.

## Agent notes

The shadcn-compatible registry installs source into the project, where an agent
can inspect and customize it.

Some workflows need third-party keys. Keep them in environment variables and
review dependencies.

## Alternatives in this repo

- [mcpcn](../agents-mcp/mcpcn.md) — Install UI blocks for assistant interfaces.
- [skills](../agents-mcp/skills.md) — Pull portable instructions without
  application logic.
- [Soubi](../agents-mcp/soubi.md) — Compile a team plugin for coding agents.

## Sources

- [Official site](https://agentcn.run/) — checked 2026-10-07
- [Installation](https://www.agentcn.run/docs/installation) — checked 2026-10-07
- [Deep Search](https://www.agentcn.run/docs/agents/eve/deep-search) — checked
  2026-10-07
- [AI SEO Audit](https://www.agentcn.run/docs/agents/eve/ai-seo-audit) — checked
  2026-10-07
- [Extract DESIGN.md](https://www.agentcn.run/docs/agents/eve/extract-design-md)
  — checked 2026-10-07
- [GitHub repository](https://github.com/shadcn-labs/agentcn) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/build) — checked 2026-10-07
