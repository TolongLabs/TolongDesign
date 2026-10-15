---
name: Ghostex
slug: ghostex
section: Agents & MCP
section_slug: agents-mcp
source_url: 'https://ghostex.dev/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Orchestrates multiple background coding agent sessions.'
paywall: free
pricing_summary: 'The official site says the desktop workspace is free forever.'
open_source: true
license: MIT
category_tags: [coding-agents, orchestration, desktop]
best_for: ['persistent agent sessions', 'concurrent coding work']
stack: ['rust', 'gpui']
execution_mode: reference
surface: ['development', 'desktop']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Ghostex

> Orchestrates multiple background coding agent sessions. TolongLabs use: Use
> its desktop workspace to keep several coding-agent sessions organized.

## At a glance

| Field          | Value                                             |
| -------------- | ------------------------------------------------- |
| Source         | [Official site](https://ghostex.dev/)             |
| Paywall        | **Free** — Free open-source desktop application   |
| Open source    | Yes — MIT                                         |
| Type           | Desktop workspace for coding-agent sessions       |
| Works with     | macOS, Windows, Linux, supported agent CLIs       |
| Best for       | persistent agent sessions, concurrent coding work |
| Agent-friendly | Yes — direct Markdown, CLI, or MCP use            |

## What it is

Ghostex is a desktop workspace for launching and supervising coding-agent
sessions. It combines agent terminals with chat, project views, an embedded
browser and editor, remote machines, and session management.

It is an open-source Rust and GPUI project. Ghostex manages the coding-agent
CLIs you choose; it is not itself a design system or model provider. The
repository publishes platform installers and release notes.

## Paywall and pricing

- **Free:** The application is free to download and the site says it is free
  forever. Bring a supported agent CLI and model access.
- **Paid:** No paid Ghostex plan was listed. Model providers and third-party
  tools may charge separately.
- **Sign-up required?:** No Ghostex subscription is required; some integrations
  or providers may need their own accounts.
- **Licence for client work:** The repository is MIT licensed. Third-party
  agents, models, and services retain their own terms.

Checked 2026-10-07.

## How to use

1. Install Ghostex for the target operating system. The repository documents
   Homebrew for macOS and packages for Windows and Linux.

2. Open a project, select an installed coding agent, and start a session. Use
   chat or terminal view to send work while keeping the session attached to its
   project.

3. Use project-board, remote-machine, or coordinator workflows when work spans
   sessions. Review agent changes in the project before accepting them.

```bash
brew install ghostex
```

## Examples

- [Feature overview](https://ghostex.dev/) — Review workspace screenshots and
  feature groups.
- [Repository README](https://github.com/maddada/Ghostex) — See supported
  agents, platform installers, and comparisons.
- [Release notes](https://github.com/maddada/Ghostex/releases) — Inspect current
  notes for coordinator and session workflows.

## When to use it

- Use it when a team needs persistent local sessions and one view over several
  agent CLIs.
- Skip it for headless automation or a hosted team API; use a CLI supervisor or
  provider workflow.

## Agent notes

Ghostex launches external agents and organizes their sessions. It is a
human-facing application layer, not a model API.

Check current platform support and installers before standardizing across a
team.

## Alternatives in this repo

- [Herdr](../agents-mcp/herdr.md) — Use a terminal-first supervisor for
  persistent processes.
- [fx](../agents-mcp/fx.md) — Run a small native coding-agent CLI.
- [Soubi](../agents-mcp/soubi.md) — Build and distribute skills, commands, and
  MCP tools as plugins.

## Sources

- [Official site](https://ghostex.dev/) — checked 2026-10-07
- [GitHub repository](https://github.com/maddada/Ghostex) — checked 2026-10-07
- [Releases](https://github.com/maddada/Ghostex/releases) — checked 2026-10-07
- [Appcast](https://github.com/maddada/Ghostex/blob/main/appcast.xml) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/build) — checked 2026-10-07
