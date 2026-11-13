---
name: OpenCode
slug: opencode
section: Agents & MCP
section_slug: agents-mcp
source_url: https://opencode.ai/
designeer_url: https://designeer.xyz/build
designeer_blurb: Open-source terminal AI coding agent.
paywall: freemium
pricing_summary:
  'Open-source CLI is free with BYOK models; OpenCode Go cloud subscription is
  $10/month and Go Plus is $40/month.'
open_source: true
license: MIT
category_tags: [ai, terminal, cli, agent, coding, mcp]
best_for: [terminal coding, repo refactoring, interactive ai assistance]
stack: ['typescript', 'nodejs', 'bun']
execution_mode: mcp-skill
surface: ['cli-tui', 'development']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# OpenCode

> Open-source terminal AI coding agent. Use it to build features, inspect git
> diffs, and orchestrate web repo refactors directly from the shell.

## At a glance

| Field          | Value                                                          |
| -------------- | -------------------------------------------------------------- |
| Source         | [opencode.ai](https://opencode.ai/)                            |
| Paywall        | **Freemium** — MIT CLI free with BYOK; cloud plans from $10/mo |
| Open source    | Yes — MIT ([GitHub](https://github.com/anomalyco/opencode))    |
| Type           | Autonomous terminal coding agent                               |
| Works with     | Terminal, Git, Node.js, Bun, Anthropic, OpenAI, local models   |
| Best for       | Terminal coding, repo refactoring, interactive AI assistance   |
| Agent-friendly | Yes — CLI binary, scriptable commands, MCP client support      |

## What it is

OpenCode is an open-source terminal-based AI coding assistant developed by
Anomaly. Designed as an alternative to proprietary CLI companions like Claude
Code, OpenCode runs directly in the developer's shell with native capabilities
to read files, execute commands, generate patches, and manage git commits.

The agent uses an interactive terminal UI (TUI) displaying reasoning steps,
subagent executions, and file diffs before applying modifications to disk. It
supports bring-your-own-key (BYOK) configurations across Claude 3.5 Sonnet,
GPT-4o, DeepSeek, and local Ollama or vLLM endpoints.

Beyond standard shell execution, OpenCode integrates with Model Context Protocol
(MCP) servers, enabling it to connect to project documentation tools, visual
design canvases, and test runners during automated code editing sessions.

## Paywall and pricing

- **Free:** The open-source CLI is 100% free under the MIT licence. Users supply
  their own API keys from Anthropic, OpenAI, or local runners with zero
  subscription fees.
- **Paid (OpenCode Go / Cloud):**
  - **OpenCode Go:** $10/month for managed access to premium models, cloud
    session persistence, and web portal access without separate provider keys.
  - **Go Plus:** $40/month for higher rate limits, multi-agent parallel
    reasoning passes, and team credit sharing.
  - **OpenCode Zen:** Pay-as-you-go credit top-ups for burst usage.
- **Sign-up required?** No sign-up required when running the open-source CLI
  with personal API keys. Required for OpenCode Go cloud plans.
- **Licence for client work:** MIT licence allows unrestricted commercial and
  client usage.

Checked on 2026-10-07.

## How to use

1. Install the OpenCode CLI globally using the official installer script or npm:

```bash
curl -fsSL https://opencode.ai/v2/install | bash
```

2. Export your preferred LLM provider key or run the interactive setup wizard:

```bash
export ANTHROPIC_API_KEY="your-anthropic-key"
opencode config
```

3. Navigate to your project directory and start an interactive coding session:

```bash
opencode
```

4. Or execute single-turn automated tasks from CI/CD or agent scripts:

```bash
opencode run "Refactor src/components/Card.tsx to use Tailwind v4 and motion"
```

## Examples

- [OpenCode Official Documentation](https://opencode.ai/v2/docs) — command
  reference, keyboard shortcuts, and MCP configuration.
- [OpenCode GitHub Repository](https://github.com/anomalyco/opencode) — core
  terminal client source, issue tracker, and release changelog.
- [OpenCode Installation Guide](https://opencode.ai/v2/install) — automated
  install scripts for macOS, Linux, and Windows WSL.

## When to use it

- Use it when you need a powerful, open-source terminal coding assistant without
  being locked into a single proprietary subscription ecosystem.
- Use it to run batch automated code modifications and linters across multiple
  workspaces with your own API keys.
- Skip it if you require a visual in-browser canvas or Figma plugin; use Efecto
  or Kombai for canvas-based visual design.

## Agent notes

- Official documentation URL: `https://opencode.ai/v2/docs`
- GitHub repository: `https://github.com/anomalyco/opencode`
- Config file: stored in `~/.config/opencode/config.json` or `.opencode/` inside
  project repositories.
- Fully supports headless non-interactive mode via `opencode run "<prompt>"`,
  making it invokable by other automation scripts.

## Alternatives in this repo

- [bb](../agents-mcp/bb.md) — open-source development environment built for
  coding agents.
- [SkillSync](../agents-mcp/skillsync.md) — context and skill synchronization
  across developer editors and agent runners.
- [Foglamp](../agents-mcp/foglamp.md) — observability and telemetry platform
  tracking agent latency and API costs.

## Sources

- [OpenCode Official Site](https://opencode.ai/) — checked 2026-10-07
- [OpenCode GitHub Repository](https://github.com/anomalyco/opencode) — checked
  2026-10-07
- [OpenCode Documentation](https://opencode.ai/v2/docs) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build)
