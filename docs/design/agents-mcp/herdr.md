---
name: Herdr
slug: herdr
section: Agents & MCP
section_slug: agents-mcp
source_url: 'https://herdr.dev/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Distributed runner managing coding agent jobs.'
paywall: free
pricing_summary:
  'The CLI is free and Apache-2.0; Herdr Cloud was described as coming soon with
  no price listed.'
open_source: true
license: Apache-2.0
category_tags: [coding-agents, process-supervisor, cli]
best_for: ['persistent agent terminals', 'remote sessions']
stack: [rust, cli]
agent_friendly: true
last_verified: 2026-10-07
---

# Herdr

> Distributed runner managing coding agent jobs. TolongLabs use: Use its
> supervisor to keep coding-agent processes running in persistent terminals.

## At a glance

| Field          | Value                                                |
| -------------- | ---------------------------------------------------- |
| Source         | [Official site](https://herdr.dev/)                  |
| Paywall        | **Free** — Free Apache-2.0 CLI; Cloud not priced     |
| Open source    | Yes — Apache-2.0                                     |
| Type           | Terminal-first supervisor for coding-agent processes |
| Works with     | CLI, SSH, coding-agent CLIs                          |
| Best for       | persistent agent terminals, remote sessions          |
| Agent-friendly | Yes — direct Markdown, CLI, or MCP use               |

## What it is

Herdr is a runtime and supervisor that keeps coding agents running in persistent
terminals. It can launch multiple agent CLIs and connect across machines over
SSH.

The tool is terminal-first rather than a visual IDE. Its docs include quick
start, command reference, installation, and an agent skill for coding workflows.

## Paywall and pricing

- **Free:** The CLI and source are Apache-2.0 licensed. The homepage describes
  Herdr Cloud as coming soon.
- **Paid:** No current paid plan or Cloud price was listed.
- **Sign-up required?:** Local CLI use requires no Herdr account. Remote agents
  need SSH and provider credentials.
- **Licence for client work:** Apache-2.0 permits commercial use subject to
  terms and notices; provider and remote-host terms remain separate.

Checked 2026-10-07.

## How to use

1. Install Herdr with the official script for the current platform. Check the
   install page for Windows or nonstandard shells.

2. Follow the quick start to launch an agent in a persistent session, then use
   the CLI reference to inspect controls. Configure SSH for remote machines.

3. Add the documented agent skill if you want an agent to manage jobs. Scope
   host access to the repositories and commands required.

```bash
curl -fsSL https://herdr.dev/install.sh | sh
```

## Examples

- [Quick start](https://herdr.dev/docs/quick-start/) — Launch and manage a
  persistent agent job.
- [CLI reference](https://herdr.dev/docs/cli-reference/) — Read commands and
  session controls.
- [Agent skill](https://herdr.dev/docs/agent-skill/) — Give an agent
  instructions for operating Herdr.

## When to use it

- Use it when agents need to remain active across disconnects or on remote
  machines.
- Skip it for one interactive local session; use the agent CLI or a desktop
  manager such as Ghostex.

## Agent notes

Read command semantics before allowing an agent to stop, resume, or remove
long-running jobs.

Cloud was marked coming soon; treat remote use as SSH-based unless current docs
specify otherwise.

## Alternatives in this repo

- [Ghostex](../agents-mcp/ghostex.md) — Use a desktop project view for multiple
  sessions.
- [fx](../agents-mcp/fx.md) — Use a small coding-agent CLI for repository work.
- [Soubi](../agents-mcp/soubi.md) — Package reusable agent commands, skills, and
  MCP tools.

## Sources

- [Official site](https://herdr.dev/) — checked 2026-10-07
- [Installation](https://herdr.dev/docs/install/) — checked 2026-10-07
- [Quick start](https://herdr.dev/docs/quick-start/) — checked 2026-10-07
- [CLI reference](https://herdr.dev/docs/cli-reference/) — checked 2026-10-07
- [Agent skill](https://herdr.dev/docs/agent-skill/) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build) — checked 2026-10-07
