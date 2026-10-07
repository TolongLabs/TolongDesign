---
name: SRCL
slug: srcl
section: Component Libraries
section_slug: component-libraries
source_url: https://www.sacred.computer/
designeer_url: https://designeer.xyz/components
designeer_blurb: Retro DOS-style terminal component kit.
paywall: free
pricing_summary: 'Free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [react, terminal, retro, dos, tui]
best_for: [retro terminal web apps, developer portals, cli tools]
stack: [react, nextjs]
agent_friendly: true
last_verified: 2026-10-07
---

# SRCL

> Retro DOS-style terminal component kit. TolongLabs developers reach for SRCL
> (Sacred Computer) to build web applications, documentation hubs, and developer
> tools with an uncompromising monospace, box-drawing DOS terminal aesthetic.

## At a glance

| Field          | Value                                                                    |
| -------------- | ------------------------------------------------------------------------ |
| Source         | [sacred.computer](https://sacred.computer/)                              |
| Paywall        | **Free** — 100% free and open source                                     |
| Open source    | Yes — MIT ([GitHub](https://github.com/internet-development/www-sacred)) |
| Type           | Terminal component library and CLI framework                             |
| Works with     | React 19, Next.js 16, TypeScript, Python                                 |
| Best for       | Retro terminal web apps, developer portals, CLI tools                    |
| Agent-friendly | Yes — native llms.txt, raw component text routes, agent docs             |

## What it is

SRCL (Sacred Computer Repository/Library) is an open-source React component
library and design framework developed by Internet Development Studio
(internet.dev). It is designed to construct web applications, static sites, and
desktop interfaces governed by precise retro terminal aesthetics.

The library is built around a comprehensive set of monospace layout rules,
box-drawing characters, and ANSI color tokens:

- **Web UI Components:** Over 40 production React components including Window
  frames, ActionBars, ASCIICanvas surfaces, DataTables, TreeViews, BlockLoaders,
  MatrixLoaders, and modal window managers.
- **Simulacrum CLI Framework:** A zero-dependency CLI framework written in
  TypeScript (with an identical Python mirror) that mirrors the exact same
  visual primitives in real terminal alt-screens.
- **Unified Palette System:** Both the web components and the CLI screens source
  their color values from a shared `colors.json` palette, ensuring byte-level
  aesthetic agreement across browser and terminal.

SRCL is exceptionally agent-friendly: the live site publishes an exhaustive
`llms.txt` catalog and exposes every component's raw source code as plain text
under `/llm/components/<Name>.tsx.txt` for immediate agent ingestion.

## Paywall and pricing

- **Free:** The complete component catalog, CLI frameworks, and documentation
  are 100% free and open source.
- **Paid:** None.
- **Sign-up required?** No.
- **Licence for client work:** Distributed under the MIT licence. Free for
  commercial products, developer tools, and client deliverables.

Checked on the official website and repository on 2026-10-07.

## How to use

1. Install the package via npm or bun:

```bash
bun add srcl
```

2. Alternatively, copy any component source directly from the raw agent
   endpoint:

```bash
curl -s https://sacred.computer/llm/components/Window.tsx.txt > components/Window.tsx
```

3. Import and render the component with terminal styling:

```tsx
import { Window, Text, Button } from 'srcl'

export function TerminalDialog() {
  return (
    <Window title="SYSTEM_DIAGNOSTICS">
      <div className="p-4 space-y-3 font-mono">
        <Text>Status: Operational</Text>
        <Text>Memory: 640K Conventional RAM</Text>
        <Button onClick={() => console.log('Reboot')}>EXECUTE</Button>
      </div>
    </Window>
  )
}
```

## Examples

- [Sacred Computer Showcase](https://sacred.computer/) — Massive interactive
  kitchen-sink demonstrating all components, windows, and ASCII games.
- [Sacred Computer LLM Reference](https://sacred.computer/llms.txt) —
  Machine-readable sitemap linking component documentation and agent orientation
  guides.
- [Components Catalog](https://sacred.computer/llm/components/AGENTS.md) —
  Detailed breakdown of component props, tokens, and CLI primitive equivalents.

## When to use it

- Use it when building developer platforms, esoteric landing pages, technical
  documentation hubs, or retro gaming interfaces that demand authentic DOS
  terminal styling.
- Use it when you need consistent visual layouts spanning both web browsers and
  command-line applications.
- Skip it when you need standard modern SaaS enterprise aesthetics; consider
  [startercn](../component-libraries/startercn.md) or
  [Nexvyn UI](../component-libraries/nexvyn-ui.md) instead.

## Agent notes

- Official documentation URL: `https://sacred.computer/llms.txt`.
- Component raw text endpoint pattern:
  `https://sacred.computer/llm/components/<Name>.tsx.txt`.
- GitHub repository: `https://github.com/internet-development/www-sacred`.
- Built on React 19 and Next.js 16 with zero external CSS framework
  dependencies; uses scoped terminal custom properties (`--theme-*`,
  `--ansi-*`).

## Alternatives in this repo

- [termcn](../component-libraries/termcn.md) — Terminal UI components built for
  Ink and OpenTUI inside actual terminal processes.
- [Dot Matrix](../component-libraries/dot-matrix.md) — Dot matrix and LED loader
  primitives for shadcn.

## Sources

- [Sacred Computer Website](https://sacred.computer/) — checked 2026-10-07
- [Sacred Computer AGENTS Reference](https://sacred.computer/llm/AGENTS.md) —
  checked 2026-10-07
- [Sacred Computer GitHub](https://github.com/internet-development/www-sacred) —
  checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components)
