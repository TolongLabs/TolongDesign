---
name: bb
slug: bb
section: Agents & MCP
section_slug: agents-mcp
source_url: https://getbb.app/
designeer_url: https://designeer.xyz/build
designeer_blurb: Open-source development environment for coding agents.
paywall: free
pricing_summary: '100% free and open-source under the MIT license.'
open_source: true
license: MIT
category_tags: [ai, ide, desktop, agent, electron, environment]
best_for: [agent workflows, visual diffing, isolated code execution]
stack: [typescript, electron, nodejs]
agent_friendly: true
last_verified: 2026-10-07
---

# bb

> Open-source development environment for coding agents. Use it to run, preview,
> and orchestrate agent builds with visual diffs and sandboxed tool execution.

## At a glance

| Field          | Value                                                    |
| -------------- | -------------------------------------------------------- |
| Source         | [getbb.app](https://getbb.app/)                          |
| Paywall        | **Free** — 100% free and open source                     |
| Open source    | Yes — MIT ([GitHub](https://github.com/get-bb/bb))       |
| Type           | Developer environment and IDE for coding agents          |
| Works with     | macOS, Linux, Windows, Git, Node.js, Bun, MCP            |
| Best for       | Agent workflows, visual diffing, isolated code execution |
| Agent-friendly | Yes — CLI launch, native MCP support, file system IPC    |

## What it is

bb is an open-source desktop development environment designed from the ground up
around AI coding agents. While traditional code editors treat AI as a sidebar
plugin or inline autocomplete assistant, bb structures the entire workspace
around agent runs, task queues, and visual workspace changes.

Inside bb, developers can dispatch autonomous agents on isolated git branches,
watch live terminal output, inspect generated visual components in an embedded
preview browser, and review file diffs side-by-side before committing changes.

The application includes native integration with Model Context Protocol (MCP), a
local extension marketplace, and support for multi-model configurations
including Claude, OpenAI, and local models via Ollama.

## Paywall and pricing

- **Free:** 100% free under the MIT licence. Available as pre-built binaries for
  macOS, Linux, and Windows, or buildable from source.
- **Paid:** No paid plans or paywalled features. Users supply their own model
  API keys or connect to local runners.
- **Sign-up required?** No sign-up required.
- **Licence for client work:** MIT licence allows full commercial use, client
  delivery, and proprietary extensions.

Checked on 2026-10-07.

## How to use

1. Download the desktop application from `getbb.app` or run the CLI runner:

```bash
npx bb-app@latest
```

2. Open a project repository inside bb. The app automatically detects package
   managers (Bun, pnpm, npm) and framework dev servers (Next.js, Vite).
3. Connect your preferred model keys in the settings panel (Anthropic, OpenAI,
   or Ollama for local offline execution).
4. Assign a task in the agent panel:

```text
Build a responsive pricing section component with 3 tiers using Tailwind CSS
and Lucide icons.
```

5. Review the staged visual diff, test the component in the embedded browser
   frame, and approve the git commit with a single click.

## Examples

- [bb Official Website](https://getbb.app/) — feature overview, download links,
  and desktop UI screenshots.
- [bb Extension Marketplace](https://getbb.app/marketplace) — community-built
  extensions, tools, and MCP adapters.
- [bb GitHub Repository](https://github.com/get-bb/bb) — full TypeScript source
  code, issue tracker, and contribution guide.

## When to use it

- Use it when executing complex, multi-file agentic refactors where you need
  visual branch isolation and interactive diff reviews.
- Use it as a clean sandbox for testing autonomous agent scripts without risking
  accidental changes to your main working branch.
- Skip it if you prefer working entirely within a minimal headless terminal; use
  OpenCode instead.

## Agent notes

- Official documentation URL: `https://getbb.app/`
- GitHub repository: `https://github.com/get-bb/bb`
- CLI package: `bb-app`
- Communicates with external agent processes through standard IPC and MCP
  transports.
- Workspace settings are stored in `.bb/config.json`.

## Alternatives in this repo

- [OpenCode](../agents-mcp/opencode.md) — open-source terminal AI coding agent
  with interactive shell execution.
- [Capacity](../agents-mcp/capacity.md) — natural language web workspace
  generating full-stack applications.
- [Foglamp](../agents-mcp/foglamp.md) — observability and telemetry platform for
  monitoring agent latency and costs.

## Sources

- [bb Official Site](https://getbb.app/) — checked 2026-10-07
- [bb GitHub Repository](https://github.com/get-bb/bb) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build)
