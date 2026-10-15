---
name: AI Stack
slug: ai-stack
section: Development
section_slug: development
source_url: 'https://github.com/alp82/aistack'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Directory comparing modern AI tech stacks.'
paywall: free
pricing_summary: 'Completely free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [ai-stack, directory, config-sync, cli, benchmarking]
best_for: [ai workflow benchmarking, config syncing, tech stack discovery]
stack: ['typescript', 'nodejs']
execution_mode: mcp-skill
surface: ['development']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# AI Stack

> Directory comparing modern AI tech stacks. TolongLabs developers use AI Stack
> to benchmark community AI engineering workflows and seamlessly synchronize
> agent rules, prompt libraries, and MCP configurations across local machines.

## At a glance

| Field          | Value                                                          |
| -------------- | -------------------------------------------------------------- |
| Source         | [github.com/alp82/aistack](https://github.com/alp82/aistack)   |
| Paywall        | **Free** — 100% free and open source under MIT licence         |
| Open source    | Yes — MIT ([GitHub](https://github.com/alp82/aistack))         |
| Type           | AI stack directory, comparison platform, and config CLI        |
| Works with     | Cursor, Claude Code, AGENTS.md, MCP, TypeScript, Node.js       |
| Best for       | AI workflow benchmarking, config syncing, tech stack discovery |
| Agent-friendly | Yes — CLI tool (`@use-aistack/cli`), config discovery scanner  |

## What it is

AI Stack (hosted at `aistack.to` and developed by Alper Ortac) is an open-source
community platform and command-line tool modeled as a "StackShare for AI". It
enables engineering teams to discover, compare, and benchmark the specific
combinations of models, agent frameworks, MCP servers, and developer tooling
used to build modern AI software.

The platform consists of two integrated components: a public web application
where developers explore community stacks and side-by-side cost comparisons, and
an automated CLI tool (`@use-aistack/cli`). The CLI inspects local repositories
to detect AI configuration files—such as `.cursorrules`, `CLAUDE.md`,
`AGENTS.md`, skill directories, and `mcp.json`—allowing engineers to upload or
fork entire agent setups in a single command.

Privacy is a core design tenet of AI Stack: source code, proprietary prompts,
and private repository names never leave the user's machine. The CLI only
aggregates workflow metrics, such as session counts, model names, and active
tool identifiers, keeping sensitive intellectual property secure.

## Paywall and pricing

- **Free:** The web platform at `aistack.to`, open-source repository, and CLI
  tool are 100% free to browse, use, and publish.
- **Paid:** None. No subscription fees or paywalled listings.
- **Sign-up required?** Yes for publishing custom stacks or syncing local
  configurations (supports email or Google SSO); no for browsing stacks.
- **Licence for client work:** MIT License. Permitted for commercial, client,
  and internal engineering usage.

Verified on the official GitHub repository and web app on 2026-10-07.

## How to use

1. Browse and compare AI setups: Visit `https://aistack.to/` to evaluate tools,
   frameworks, and prompt engineering conventions adopted by top open-source
   teams.
2. Install or execute the CLI via Bun:

```bash
# Authenticate with your AI Stack account
bunx @use-aistack/cli login
```

3. Collect and sync your local repository AI configuration: Run `collect` inside
   a repository to index your agent configs:

```bash
bunx @use-aistack/cli collect
```

The tool scans for `.cursorrules`, `CLAUDE.md`, `AGENTS.md`, `.cursor/rules/`,
`mcp.json`, and agent skill folders, linking them to your profile.

4. Scaffold an AI stack onto a new workstation: Apply a published configuration
   directly into a new repository:

```bash
bunx @use-aistack/cli create
```

## Examples

- [AI Stack Web App](https://aistack.to) — Interactive web platform to browse
  active community stacks, compare tool usage, and view leaderboards.
- [AI Stack GitHub Repository](https://github.com/alp82/aistack) — Upstream
  monorepo containing the TanStack Start web app, database schemas, and CLI.
- [npm Package: @use-aistack/cli](https://www.npmjs.com/package/@use-aistack/cli)
  — Official distribution package for automated configuration sync and
  telemetry.

## When to use it

- Use it when standardizing AI coding guidelines, MCP tools, and prompt rules
  across distributed engineering teams or client engagements.
- Use it when onboarding a new workstation and needing to pull team agent
  configurations without manual copying.
- Skip it when you need a project scaffolding tool for TypeScript web apps; use
  [Better T Stack](../development/better-t-stack.md).
- Skip it when looking for free cloud and infrastructure credits for your open
  source projects; consult [OSS Perks](../development/oss-perks.md).

## Agent notes

- Official repository: `https://github.com/alp82/aistack`.
- CLI package: `@use-aistack/cli` (run with `bunx @use-aistack/cli <cmd>`).
- Recognized file patterns include `AGENTS.md`, `CLAUDE.md`, `.cursorrules`,
  `.cursor/rules/*.mdc`, and `.mcp.json`.
- The CLI includes an auto-sync flag (`sync --auto on`) which defaults to
  refreshing usage metrics every 6 hours without interrupting terminal
  workflows.

## Alternatives in this repo

- [Better T Stack](../development/better-t-stack.md) — CLI scaffolding modern
  full-stack TypeScript setups with native agent support.
- [OSS Perks](../development/oss-perks.md) — Curated directory of free cloud
  credits, hosting, and developer perks for open-source maintainers.

## Sources

- [GitHub repository](https://github.com/alp82/aistack) — checked 2026-10-07
- [README documentation](https://raw.githubusercontent.com/alp82/aistack/main/README.md)
  — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build)
