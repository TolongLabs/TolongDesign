---
name: termcn
slug: termcn
section: Component Libraries
section_slug: component-libraries
source_url: https://termcn.dev/
designeer_url: https://designeer.xyz/components
designeer_blurb: 'Terminal UI components for React, built on Ink and OpenTUI.'
paywall: free
pricing_summary: 'Free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [terminal, cli, ink, opentui, react]
best_for: [cli tools, devtools, terminal dashboards]
stack: [react, ink, opentui]
agent_friendly: true
last_verified: 2026-10-07
---

# termcn

> Terminal UI components for React, built on Ink and OpenTUI. TolongLabs
> developers reach for termcn to build rich command-line tools, terminal
> dashboards, and interactive developer experiences using declarative React.

## At a glance

| Field          | Value                                                       |
| -------------- | ----------------------------------------------------------- |
| Source         | [termcn.dev](https://termcn.dev/)                           |
| Paywall        | **Free** — 100% free and open source                        |
| Open source    | Yes — MIT ([GitHub](https://github.com/shadcn-labs/termcn)) |
| Type           | Terminal component library and registry                     |
| Works with     | React, Ink, OpenTUI, Node.js, Bun                           |
| Best for       | CLI tools, devtools, terminal dashboards                    |
| Agent-friendly | Yes — shadcn CLI registry, copy-paste components, MCP docs  |

## What it is

termcn is an open-source component collection created by Aniket Pawar under the
Shadcn Labs collective. It brings the copy-paste architecture of shadcn/ui to
terminal user interfaces (TUIs), allowing developers to construct rich CLI
applications using familiar React declarative syntax.

The library targets two foundational terminal rendering runtimes:

- **Ink:** The standard React-for-CLI renderer that compiles JSX into ANSI
  terminal string streams.
- **OpenTUI:** A high-performance terminal UI renderer designed for modern text
  interfaces.

termcn provides dozens of terminal-ready components and blocks. In addition to
foundational terminal widgets like spinners, progress bars, tables, and command
prompts, termcn features data visualization (bar charts, line charts, gauges,
heatmaps) and specialized AI interaction components (chat message feeds, tool
call approval dialogs, streaming token blocks, and reasoning displays).

All components are theme-aware, integrating with terminal color schemes (such as
Dracula, Catppuccin, or custom palettes) and offering built-in fallback
mechanisms for environments with limited Unicode or color depth support.

## Paywall and pricing

- **Free:** The complete component registry, themes, templates, and
  documentation are 100% free and open source.
- **Paid:** None.
- **Sign-up required?** No.
- **Licence for client work:** Released under the MIT licence. Free for
  commercial CLI tools, internal devtools, and client deliverables.

Checked on the official website and repository on 2026-10-07.

## How to use

1. Set up a project with Ink or OpenTUI installed.
2. Add a terminal component to your project using the shadcn CLI:

```bash
bunx --bun shadcn@latest add @termcn/ink/spinner
```

For OpenTUI targets, specify the `opentui` namespace:

```bash
bunx --bun shadcn@latest add @termcn/opentui/spinner
```

3. Import and render the component inside your CLI entry point:

```tsx
import React from 'react'
import { render, Text, Box } from 'ink'
import { Spinner } from '@/components/ui/spinner'

function CliApp() {
  return (
    <Box flexDirection="row" gap={1}>
      <Spinner />
      <Text color="cyan">Analyzing repository dependencies...</Text>
    </Box>
  )
}

render(<CliApp />)
```

## Examples

- [termcn Installation Guide](https://termcn.dev/docs/installation) — Complete
  walkthrough for configuring Ink, OpenTUI, and terminal registries.
- [termcn Component Catalog](https://termcn.dev/docs/components) — Interactive
  previews of spinners, tables, charts, and layout primitives.
- [termcn GitHub Repository](https://github.com/shadcn-labs/termcn) — Monorepo
  containing registry sources, examples, and theme packages.

## When to use it

- Use it when developing CLI tools, scaffolding wizards, server monitors, or
  terminal AI agents that require polished text interfaces.
- Use it when your team already knows React and wants to leverage declarative UI
  patterns without learning low-level ncurses or manual ANSI cursor
  manipulation.
- Skip it when building browser-rendered web applications; use
  [SRCL](../component-libraries/srcl.md) for web-based terminal aesthetics or
  [startercn](../component-libraries/startercn.md) for standard web components.

## Agent notes

- Official documentation URL: `https://termcn.dev/docs`.
- Works through standard `npx shadcn add @termcn/ink/<component>` or
  `@termcn/opentui/<component>`.
- Requires an active Ink or OpenTUI runtime environment; components do not
  render directly into the browser DOM without an xterm.js or canvas wrapper.
- Includes MCP documentation routes and agent tooling configurations.

## Alternatives in this repo

- [SRCL](../component-libraries/srcl.md) — Browser-based React component library
  emulating DOS and retro terminal aesthetics inside web applications.
- [startercn](../component-libraries/startercn.md) — Base template for
  publishing custom shadcn-compatible registries.

## Sources

- [termcn Official Website](https://termcn.dev/) — checked 2026-10-07
- [termcn Documentation](https://termcn.dev/docs) — checked 2026-10-07
- [termcn GitHub Repository](https://github.com/shadcn-labs/termcn) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components)
