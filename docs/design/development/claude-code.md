---
name: Claude Code
slug: claude-code
section: Development
section_slug: development
source_url: https://claude.com/claude-code
designeer_url: https://designeer.xyz/build
designeer_blurb: 'Agentic coding tool inside your terminal.'
paywall: paid
pricing_summary:
  'Claude Code is included with Pro at $20 monthly ($17/month billed annually)
  and Max from $100/month; API use is billed separately.'
open_source: false
license: proprietary
category_tags: [ai, coding-agent, terminal, cli]
best_for: [repository tasks, code changes, terminal workflows]
stack: []
agent_friendly: true
last_verified: 2026-10-07
---

# Claude Code

> Agentic coding tool inside your terminal. Use it for repository-level work
> when the agent needs to read files, edit code, and run project commands.

## At a glance

| Field          | Value                                                                    |
| -------------- | ------------------------------------------------------------------------ |
| Source         | [claude.com/product/claude-code](https://claude.com/product/claude-code) |
| Paywall        | **Paid** — available on eligible paid plans or metered API access        |
| Open source    | No — proprietary software                                                |
| Licence        | Proprietary                                                              |
| Type           | Terminal coding agent with IDE and web interfaces                        |
| Works with     | macOS, Linux, WSL, Windows, VS Code, JetBrains                           |
| Best for       | Multi-file coding tasks and repository exploration                       |
| Agent-friendly | Yes — it is a coding agent                                               |

## What it is

Claude Code is Anthropic's coding agent for working with a local codebase. It
can inspect files, edit code, run commands, and use tools exposed through MCP.
It is available in a terminal and through editor, desktop, web, and other
interfaces described in the official product docs.

The quickstart asks for a project and a Claude subscription, Console account, or
supported cloud-provider access. Claude Code is not included in the Free plan.
The official pricing page lists it with Pro and Max.

Claude Code is a client tool, not an open-source package. API or Console use has
separate metered billing from the consumer subscription.

## Paywall and pricing

- **Free:** Claude's Free plan does not include Claude Code.
- **Paid:** Pro is $20/month or $17/month with an annual subscription billed at
  $200 upfront. Max starts at $100/month; the plan page shows 5x and 20x usage
  options.
- **API access:** Console/API use is charged separately by usage.
- **Sign-up required?** Yes; authenticate with a supported Anthropic account,
  Console account, or cloud provider.
- **Licence for client work:** the software is proprietary; generated code is
  governed separately by the project's own licences and terms.
- **Checked:** 2026-10-07.

## How to use

1. Install the native CLI on macOS, Linux, or WSL:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

2. Open a terminal in the project and start Claude Code:

```bash
cd path/to/project
claude
```

3. Ask it to explain the codebase or propose a small scoped change. Review its
   plan and edits, then run the project's checks yourself.
4. Add project-specific guidance in CLAUDE.md and connect tools through MCP only
   when the task needs them.

## Examples

- [Quickstart](https://code.claude.com/docs/en/quickstart) — install and
  complete a first coding task.
- [Memory and project instructions](https://code.claude.com/docs/en/memory) —
  persist repository context with CLAUDE.md files.
- [MCP integrations](https://code.claude.com/docs/en/mcp) — connect the agent to
  external tools and data sources.

## When to use it

- Use it for changes that span files and require repository context.
- Use it when the agent can run the same local commands as the developer.
- Skip it when the task should not grant an agent access to a working tree or
  command execution.

## Agent notes

Keep credentials and environment variables out of prompts and committed files. A
Console/API login incurs token-based charges separately from the Claude
subscription. On Windows, follow the official Windows install guidance and
ensure the required shell is available. Review diffs and command output before
accepting changes.

## Alternatives in this repo

- [Cursor](../development/cursor.md) — AI coding agent integrated into a desktop
  editor.
- [Zed](../development/zed.md) — native editor with external agent and AI
  workflows.

## Sources

- [Claude Code product page](https://claude.com/product/claude-code) — checked
  2026-10-07
- [Plans and pricing](https://claude.com/pricing) — checked 2026-10-07
- [Claude Code quickstart](https://code.claude.com/docs/en/quickstart) — checked
  2026-10-07
- [Memory docs](https://code.claude.com/docs/en/memory) — checked 2026-10-07
- [MCP docs](https://code.claude.com/docs/en/mcp) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build) — checked 2026-10-07
