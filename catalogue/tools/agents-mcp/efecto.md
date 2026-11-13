---
name: Efecto
slug: efecto
section: Agents & MCP
section_slug: agents-mcp
source_url: https://efecto.app/
designeer_url: https://designeer.xyz/build
designeer_blurb: Agent-first visual web canvas with MCP.
paywall: free
pricing_summary:
  'Free to use; includes artboards, auto-layout, and 66 MCP tools.'
open_source: false
license: proprietary
category_tags: [ai, canvas, design-tool, mcp, tailwind, ui]
best_for: [agent web design, canvas prototyping, mcp ui generation]
stack: ['react', 'tailwind']
execution_mode: mcp-skill
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Efecto

> Agent-first visual web canvas with MCP. Use it to collaborate with AI agents
> on an infinite canvas that renders real JSX and Tailwind CSS in real time.

## At a glance

| Field          | Value                                                                                               |
| -------------- | --------------------------------------------------------------------------------------------------- |
| Source         | [efecto.app](https://efecto.app/)                                                                   |
| Paywall        | **Free** — $0 for the design tool and MCP integration                                               |
| Open source    | No — proprietary web app; open MCP plugin ([GitHub](https://github.com/pablostanley/efecto-plugin)) |
| Type           | Agent-first visual design canvas and MCP server                                                     |
| Works with     | Claude Code, Cursor, Windsurf, React, Tailwind CSS                                                  |
| Best for       | Agent web design, canvas prototyping, MCP UI generation                                             |
| Agent-friendly | Yes — 66 dedicated MCP tools, live canvas IPC, JSX export                                           |

## What it is

Efecto is an in-browser design environment created by designer Pablo Stanley
where AI agents are treated as first-class collaborators. While legacy tools
like Figma treat AI as an add-on plugin, Efecto provides an infinite canvas
specifically built to be manipulated programmatically by coding agents.

The canvas supports familiar design primitives—artboards, nested layers,
auto-layout (flexbox), typography hierarchies, and brand palettes. However,
instead of static vector paths, Efecto's internal rendering engine generates
real web code using React JSX and Tailwind CSS classes.

Through its Model Context Protocol (MCP) server, developers connect their local
coding agents (such as Claude Code or Cursor) directly to the browser canvas.
The agent has access to 66 specialized MCP tools to create artboards, adjust
padding, swap typography tokens, insert responsive components, and export
production-ready JSX.

## Paywall and pricing

- **Free:** The web application and MCP tooling are completely free ($0 USD) to
  use for both personal and commercial design projects.
- **Paid:** No subscription fees, seat licenses, or paid tiers.
- **Sign-up required?** Optional; canvas can be used directly in the browser
  with local browser storage.
- **Licence for client work:** Free to use for client websites and commercial
  products. Generated JSX and Tailwind markup is owned by the creator.

Checked on 2026-10-07.

## How to use

1. Open `efecto.app` in your browser to launch a new visual canvas.
2. Install the Efecto MCP plugin in your local agent environment:

```bash
npx skills add pablostanley/efecto-plugin
```

3. Or add the MCP configuration to your agent's settings file:

```json
{
  "mcpServers": {
    "efecto": {
      "command": "npx",
      "args": ["-y", "efecto-mcp"]
    }
  }
}
```

4. Ask your agent to construct or iterate on visual layouts:

```text
Connect to my open Efecto canvas. Create a mobile artboard for an onboarding flow,
apply our brand indigo color scheme, and generate a 3-step feature carousel
using Tailwind CSS flexbox.
```

5. Watch the agent lay out components in real time on the canvas, inspect the
   visual output, and copy the clean React code into your repository.

## Examples

- [Efecto Canvas](https://efecto.app/) — live browser design canvas with
  artboards, layers, and real-time agent synchronization.
- [Efecto Plugin on GitHub](https://github.com/pablostanley/efecto-plugin) —
  open MCP tool integration and installation instructions.
- [Pablo Stanley Substack / Efecto](https://substack.com/@pablostanley) —
  development updates, MCP tool tutorials, and agent design demonstrations.

## When to use it

- Use it when you want to design collaboratively with an AI agent in a visual
  environment before committing code to your repository.
- Use it to generate landing pages, dashboards, and responsive marketing layouts
  backed by real Tailwind CSS code.
- Skip it if you only need headless terminal refactoring without visual canvas
  interaction; use OpenCode instead.

## Agent notes

- Official application URL: `https://efecto.app/`
- GitHub MCP plugin: `https://github.com/pablostanley/efecto-plugin`
- Exposes 66 discrete MCP tool actions covering artboard creation, style
  mutation, layer reordering, and asset insertion.
- Emits standard Tailwind CSS classes and React JSX components.

## Alternatives in this repo

- [Agentation](../agents-mcp/agentation.md) — on-screen DOM annotation tool
  passing visual feedback into coding agents.
- [Kombai](../agents-mcp/kombai.md) — AI design engineer that converts Figma
  designs into clean React and CSS code.
- [Causal](../agents-mcp/causal.md) — spatial AI canvas workspace for notes,
  planning, and visual idea maps.

## Sources

- [Efecto Official Site](https://efecto.app/) — checked 2026-10-07
- [Efecto Plugin GitHub](https://github.com/pablostanley/efecto-plugin) —
  checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build)
