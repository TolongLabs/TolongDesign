---
name: fx
slug: fx
section: Agents & MCP
section_slug: agents-mcp
source_url: 'https://fx.sh/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'High-performance coding agent CLI in Zig.'
paywall: free
pricing_summary:
  'The CLI is open source under Apache-2.0; model-provider usage may have
  separate costs.'
open_source: true
license: Apache-2.0
category_tags: [coding-agent, cli, zig]
best_for: ['lightweight repository work', 'embeddable agent workflows']
stack: ['zig', 'cli']
execution_mode: mcp-skill
surface: ['development', 'cli-tui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# fx

> High-performance coding agent CLI in Zig. TolongLabs use: Use its native CLI
> for direct, permission-aware coding work in a repository.

## At a glance

| Field          | Value                                                   |
| -------------- | ------------------------------------------------------- |
| Source         | [Official site](https://fx.sh/)                         |
| Paywall        | **Free** — Free Apache-2.0 CLI; provider use may cost   |
| Open source    | Yes — Apache-2.0                                        |
| Type           | Small native coding-agent CLI and harness               |
| Works with     | macOS, Linux, providers, terminal, WebAssembly          |
| Best for       | lightweight repository work, embeddable agent workflows |
| Agent-friendly | Yes — direct Markdown, CLI, or MCP use                  |

## What it is

fx is a small native coding-agent CLI written in Zig. It reads and edits a
repository, runs commands, and works interactively or with a single `fx ask`
request.

The project emphasizes a compact binary and model flexibility, including local
and cloud inference. Docs cover installation, authentication, usage, privacy,
and project instructions.

## Paywall and pricing

- **Free:** The CLI and source are free under Apache-2.0. The current release is
  described as experimental.
- **Paid:** No fx subscription is listed. A connected model provider may charge
  for usage or require a subscription.
- **Sign-up required?:** No fx account is needed for installation;
  authentication depends on the selected provider.
- **Licence for client work:** Apache-2.0 permits commercial use subject to
  terms and notices. Provider billing, model licenses, and data handling remain
  separate.

Checked 2026-10-07.

## How to use

1. Install the native binary using the official setup script for macOS or Linux
   and check supported platforms before automation.

2. Open a project and start `fx`, then choose a provider through the provider
   command. Set project instructions for repository conventions.

3. Use interactive mode for ongoing work or `fx ask` for one request. Keep
   permissions appropriate and inspect file changes before accepting them.

```bash
curl -fsSL https://fx.sh/setup.sh | bash
cd path/to/project
fx
fx ask "explain this repository"
```

## Examples

- [Quick start](https://fx.sh/docs) — Install, authenticate, and send an initial
  request.
- [Working with fx](https://fx.sh/docs/using-fx/working-with-fx) — Review
  interactive workflow and controls.
- [Project instructions](https://fx.sh/docs/configure-fx/project-instructions) —
  Set repository-level guidance for the agent.
- [Data and privacy](https://fx.sh/docs/using-fx/data-and-privacy) — Understand
  provider and workspace data handling.

## When to use it

- Use it when a project needs a small local coding agent for terminal or
  automation work.
- Skip it when the team needs a visual multi-agent manager; use Ghostex or
  another desktop workspace.

## Agent notes

The installer provides `fx`; the one-shot entry point is `fx ask`. Read provider
and permissions docs before use.

The project is experimental and changes frequently. Pin a known release for
repeatable CI.

## Alternatives in this repo

- [Ghostex](../agents-mcp/ghostex.md) — Manage persistent sessions in a desktop
  workspace.
- [Herdr](../agents-mcp/herdr.md) — Supervise long-running agent terminals
  across machines.
- [Webclaw](../agents-mcp/webclaw.md) — Fetch web content through an API or MCP
  service.

## Sources

- [Official site](https://fx.sh/) — checked 2026-10-07
- [Quick start](https://fx.sh/docs) — checked 2026-10-07
- [Installation](https://fx.sh/docs/getting-started/installation) — checked
  2026-10-07
- [Working with fx](https://fx.sh/docs/using-fx/working-with-fx) — checked
  2026-10-07
- [Project instructions](https://fx.sh/docs/configure-fx/project-instructions) —
  checked 2026-10-07
- [Data and privacy](https://fx.sh/docs/using-fx/data-and-privacy) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/build) — checked 2026-10-07
