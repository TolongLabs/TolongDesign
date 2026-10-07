---
name: Cursor
slug: cursor
section: Development
section_slug: development
source_url: https://cursor.com/
designeer_url: https://designeer.xyz/build
designeer_blurb: 'AI-first code editor for rapid development.'
paywall: freemium
pricing_summary:
  'Hobby is free; Individual starts at $20/month and Teams at $40/user/month.'
open_source: false
license: proprietary
category_tags: [ai, coding-agent, editor, ide]
best_for: [codebase exploration, agent edits, multi-file tasks]
stack: []
agent_friendly: true
last_verified: 2026-10-07
---

# Cursor

> AI-first code editor for rapid development. Use its Agent workflow for
> codebase questions, planned changes, edits, and review in one desktop
> workspace.

## At a glance

| Field          | Value                                            |
| -------------- | ------------------------------------------------ |
| Source         | [cursor.com](https://cursor.com/)                |
| Paywall        | **Freemium** — free Hobby tier and paid plans    |
| Open source    | No — proprietary editor and service              |
| Licence        | Proprietary                                      |
| Type           | Desktop code editor and coding agent             |
| Works with     | macOS, Windows, Linux; VS Code-style projects    |
| Best for       | Repository understanding, edits, and code review |
| Agent-friendly | Yes — built-in agent, rules, MCP, and CLI        |

## What it is

Cursor is a code editor with an integrated coding agent. Its docs describe using
Agent to understand a repository, plan and implement a feature, fix a bug, and
review a diff. It also supports project rules, MCP integrations, skills,
plugins, and cloud agents.

The editor is based on the VS Code workflow and accepts familiar project folders
and extensions. Its agent can search and edit the local codebase and use
terminal commands. Teams can share rules, MCP servers, and plugins.

## Paywall and pricing

- **Free:** Hobby is listed as free with limited Agent requests and access to
  Composer.
- **Paid:** Individual starts at $20/month. Teams starts at $40/user/month. The
  current pricing page also offers higher individual and team plans.
- **Sign-up required?** Sign in to use AI features.
- **Licence for client work:** proprietary service terms; review privacy and
  data-use settings for client repositories.
- **Checked:** 2026-10-07.

## How to use

1. Download Cursor from the official site, open the app, and sign in.
2. Open a project folder and start with a small task. The quickstart suggests
   asking Cursor to explain the codebase before making an edit.
3. Use Agent to describe the change and inspect the generated diff.
4. Add persistent project guidance in AGENTS.md or .cursor/rules, then connect
   MCP servers through project configuration if needed.

```md
# Example project instruction

Follow the existing component patterns and keep changes within the requested
feature area.
```

## Examples

- [Quickstart](https://cursor.com/docs/get-started/quickstart) — install, sign
  in, understand a codebase, make an edit, and review it.
- [Rules](https://cursor.com/docs/rules) — create version-controlled project
  instructions in .cursor/rules.
- [MCP integrations](https://prod.cursor.com/help/customization/mcp) — connect
  external tools for Agent to use.
- [Pricing](https://cursor.com/pricing) — compare Hobby, Individual, and Team.

## When to use it

- Use it when developers want an editor and coding agent in one desktop tool.
- Use it when repository context, project rules, and diff review matter.
- Skip it when a terminal-first workflow or editor-neutral tool is required;
  compare [Claude Code](../development/claude-code.md).

## Agent notes

Cursor supports .cursor/rules and AGENTS.md project instructions. Project MCP
configuration can be shared in .cursor/mcp.json; keep credentials in environment
variables and avoid committing secrets. Review privacy mode and team data
settings before using a client repository.

## Alternatives in this repo

- [Claude Code](../development/claude-code.md) — terminal-first repository
  coding agent.
- [Zed](../development/zed.md) — native editor with optional hosted AI and
  external agents.

## Sources

- [Official site](https://cursor.com/) — checked 2026-10-07
- [Quickstart](https://cursor.com/docs/get-started/quickstart) — checked
  2026-10-07
- [Pricing](https://cursor.com/pricing) — checked 2026-10-07
- [Rules docs](https://cursor.com/docs/rules) — checked 2026-10-07
- [MCP help](https://prod.cursor.com/help/customization/mcp) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/build) — checked 2026-10-07
