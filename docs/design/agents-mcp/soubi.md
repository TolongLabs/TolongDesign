---
name: Soubi
slug: soubi
section: Agents & MCP
section_slug: agents-mcp
source_url: 'https://soubi.vercel.app/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Compiler transforming agent skill definitions.'
paywall: free
pricing_summary:
  'The CLI and compiler are open source under Apache-2.0 and free.'
open_source: true
license: Apache-2.0
category_tags: [agent-plugins, skills, compiler]
best_for: ['cross-agent instructions', 'reusable agent plugins']
stack: ['typescript', 'nodejs']
execution_mode: mcp-skill
surface: ['development']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Soubi

> Compiler transforming agent skill definitions. TolongLabs use: Use its
> compiler to maintain one set of agent skills across supported coding tools.

## At a glance

| Field          | Value                                              |
| -------------- | -------------------------------------------------- |
| Source         | [Official site](https://soubi.vercel.app/)         |
| Paywall        | **Free** — Free Apache-2.0 CLI and compiler        |
| Open source    | Yes — Apache-2.0                                   |
| Type           | Framework and compiler for cross-agent plugins     |
| Works with     | Node.js, TypeScript, Claude, Codex, Gemini, Cursor |
| Best for       | cross-agent instructions, reusable agent plugins   |
| Agent-friendly | Yes — direct Markdown, CLI, or MCP use             |

## What it is

Soubi is a framework for defining reusable agent plugins and compiling them into
manifests for supported coding agents. A plugin can include instructions,
skills, commands, agents, hooks, and MCP tools.

It keeps one source definition compatible across agent ecosystems instead of
requiring separate config files. The compatibility page lists current targets
and feature differences.

## Paywall and pricing

- **Free:** The CLI, compiler, docs, and source are free and Apache-2.0
  licensed.
- **Paid:** No paid tier or charge was listed.
- **Sign-up required?:** No Soubi account is required; a local Node.js project
  is used to initialize and build a plugin.
- **Licence for client work:** Apache-2.0 allows commercial use subject to terms
  and notices. Check third-party packages and agent platform requirements.

Checked 2026-10-07.

## How to use

1. Initialize a plugin project with the CLI, then add the instructions and
   capabilities the team needs in source form.

2. Use the architecture guide to understand how Soubi maps skills, commands,
   agents, hooks, and MCP tools to targets.

3. Compile for the selected agents, inspect generated manifests, and test a
   workflow before distributing the plugin.

```bash
npx soubi@latest init my-plugin
```

## Examples

- [CLI docs](https://soubi.vercel.app/docs/cli) — Initialize and manage a plugin
  project.
- [Architecture](https://soubi.vercel.app/docs/architecture) — Understand source
  definitions and generated manifests.
- [Compatibility](https://soubi.vercel.app/docs/compatibility) — Check features
  supported by each target.

## When to use it

- Use it when a team maintains common skills or commands for several agents.
- Skip it when one agent and a plain AGENTS.md or native skill are sufficient.

## Agent notes

The site documents `soubi` initialization; use the package runner that matches
the project.

Generated manifests are agent-facing configuration. Keep secrets out of source
and check compatibility before relying on a feature.

## Alternatives in this repo

- [skills](../agents-mcp/skills.md) — Install focused instructions from the
  shadcn-labs collection.
- [Herdr](../agents-mcp/herdr.md) — Supervise live sessions instead of compiling
  plugins.
- [agentcn](../agents-mcp/agentcn.md) — Add ready-made recipes to a supported
  framework.

## Sources

- [Official site](https://soubi.vercel.app/) — checked 2026-10-07
- [CLI docs](https://soubi.vercel.app/docs/cli) — checked 2026-10-07
- [Architecture](https://soubi.vercel.app/docs/architecture) — checked
  2026-10-07
- [Compatibility](https://soubi.vercel.app/docs/compatibility) — checked
  2026-10-07
- [GitHub repository](https://github.com/Aniket-508/soubi) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build) — checked 2026-10-07
