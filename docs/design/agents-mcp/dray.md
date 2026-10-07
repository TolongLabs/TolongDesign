---
name: Dray
slug: dray
section: 'Agents & MCP'
section_slug: agents-mcp
source_url: 'https://www.drayhq.com/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Unified desktop workspace managing coding agents.'
paywall: free
pricing_summary: 'Completely free and open source under the Apache-2.0 licence.'
open_source: true
license: Apache-2.0
category_tags: [agents, desktop-app, worktrees, orchestration, multi-agent]
best_for:
  [
    managing parallel coding agents,
    git worktree orchestration,
    desktop agent supervision
  ]
stack: []
agent_friendly: true
last_verified: 2026-10-07
---

# Dray

> Unified desktop workspace managing coding agents. TolongLabs developers use
> Dray to supervise, orchestrate, and run multiple AI coding agents in parallel
> across isolated Git worktrees within a single unified desktop window.

## At a glance

| Field          | Value                                                              |
| -------------- | ------------------------------------------------------------------ |
| Source         | [drayhq.com](https://www.drayhq.com/)                              |
| Paywall        | **Free** — 100% free and open source under Apache-2.0              |
| Open source    | Yes — Apache-2.0 ([GitHub](https://github.com/monorepo-labs/dray)) |
| Type           | Multi-agent desktop GUI workspace and orchestration manager        |
| Works with     | Claude Code, Codex, Grok, Git worktrees, macOS, Vercel             |
| Best for       | Managing parallel coding agents, Git worktree orchestration        |
| Agent-friendly | Yes — orchestrates CLI agents, streams tool calls and diffs        |

## What it is

Dray is an open-source macOS desktop workspace application designed to
orchestrate and monitor swarms of AI coding agents simultaneously. While running
individual coding agents in terminal tabs often leads to cluttered windows,
conflicting git locks, and lost context, Dray consolidates all active agent
sessions into a cohesive multi-pane desktop canvas.

Dray operates on top of the developer's existing model subscriptions and CLI
tools (including Claude Code, Codex, pi, fx, and Grok). When instructed to
tackle a large task, a parent agent can break down the requirements into
subtasks and spawn parallel worker sessions. Dray isolates each concurrent agent
session into its own temporary Git worktree, preventing concurrent file writes
from corrupting the repository.

The application interface includes live tool call streams, diff inspectors,
split-view conversation tiles, and direct pull request integrations (with
automated AI code reviews from Greptile and live Vercel preview status checks).
Developers can supervise agent progress, approve sensitive terminal commands,
and merge finished worktrees directly from the GUI.

## Paywall and pricing

- **Free:** The complete Dray desktop application, source code, and release
  binaries are 100% free and open source.
- **Paid:** None. Operates directly on the AI model credentials and subscription
  keys (Anthropic, OpenAI, xAI) that the developer already holds.
- **Sign-up required?** No.
- **Licence for client work:** Apache License 2.0. Unrestricted for personal,
  commercial, and enterprise development workflows.

Verified on the official Dray website and GitHub repository on 2026-10-07.

## How to use

1. Download and install Dray: Download the macOS release build from
   `https://www.drayhq.com/` or build from source via GitHub.
2. Connect your local projects: Open Dray and select your local Git repository.
3. Configure coding agent runners: Ensure your preferred CLI agents (e.g. Claude
   Code or Codex) are installed and authenticated in your shell environment.
4. Launch a swarm of tasks: Press `⌘N` to create a new task or instruct a parent
   session to divide work into parallel sessions:

```text
Split this refactoring into three sessions and run them in parallel:
1. Update component styling to Tailwind v4 in a worktree
2. Write unit tests for the auth service
3. Refactor API routes to use Hono
```

5. Supervise and merge: Review diffs and terminal logs in Dray's split-view
   panes. When checks pass and worktrees are clean, approve the squash and merge
   into your main branch.

## Examples

- [Dray Official Website](https://www.drayhq.com/) — Product overview showcasing
  agent orchestration, worktree isolation, and split views.
- [GitHub Repository](https://github.com/monorepo-labs/dray) — Upstream source
  code, issue tracker, and build instructions.
- [Dray Release Downloads](https://github.com/monorepo-labs/dray/releases) —
  Compiled desktop installer packages for macOS.

## When to use it

- Use it when executing complex feature builds that can be divided into
  distinct, parallel subtasks handled by multiple simultaneous AI agents.
- Use it to eliminate Git branch switching friction by leveraging automated
  worktree management.
- Skip it when you only need an in-browser prototyping sandbox; use
  [Bolt.new](../development/bolt-new.md).
- Skip it for automated natural-language E2E browser testing; use
  [Alumnium](../development/alumnium.md).

## Agent notes

- Official site: `https://www.drayhq.com/`.
- GitHub repository: `https://github.com/monorepo-labs/dray`.
- Dray acts as a supervisor layer over local CLI agents; ensure Git is
  configured with appropriate worktree permissions.
- Worktrees created by Dray follow structured naming patterns (e.g.
  `worktree-<random-slug>`) and clean up automatically upon task completion or
  branch merge.

## Alternatives in this repo

- [Alumnium](../development/alumnium.md) — Natural-language end-to-end testing
  platform controlled via Model Context Protocol.
- [v0](../development/v0.md) — Generative AI interface builder for scaffolding
  React and shadcn/ui components.

## Sources

- [Official site](https://www.drayhq.com/) — checked 2026-10-07
- [GitHub repository](https://github.com/monorepo-labs/dray) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/build)
