---
name: Agentation
slug: agentation
section: Agents & MCP
section_slug: agents-mcp
source_url: https://www.agentation.com/
designeer_url: https://designeer.xyz/build
designeer_blurb: Converts on-screen UI annotations into context.
paywall: free
pricing_summary:
  'Free to use for internal development; source available under PolyForm Shield
  license.'
open_source: false
license: PolyForm-Shield-1.0.0
category_tags: [ai, mcp, annotations, ui, feedback, react]
best_for: [visual bug reports, ui feedback loops, agent context]
stack: ['react', 'nextjs', 'typescript']
execution_mode: package
surface: ['development', 'web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Agentation

> Converts on-screen UI annotations into context. Use it to let designers point
> at visual defects in the browser and pass structured instructions to agents.

## At a glance

| Field          | Value                                                                                    |
| -------------- | ---------------------------------------------------------------------------------------- |
| Source         | [agentation.com](https://www.agentation.com/)                                            |
| Paywall        | **Free** — no fee for internal development and team workflows                            |
| Open source    | No — PolyForm Shield License 1.0.0 ([GitHub](https://github.com/benjitaylor/agentation)) |
| Type           | Visual annotation overlay and MCP context provider                                       |
| Works with     | React, Next.js, Vite, Claude Code, Cursor, MCP                                           |
| Best for       | Visual bug reports, UI feedback loops, agent context                                     |
| Agent-friendly | Yes — CLI tool, MCP server, structured JSON schema                                       |

## What it is

Agentation is a visual feedback tool that bridges human design reviews with AI
coding agents. When reviewing a staging website or local development build,
designers and product managers click directly on rendered DOM elements to add
callouts, highlight alignment problems, or specify styling adjustments.

Instead of outputting non-actionable screenshots or ambiguous chat notes,
Agentation captures precise DOM metadata: CSS selector paths, computed bounding
boxes, layout styles, and surrounding component hierarchies. It compiles these
into a structured JSON payload tailored for large language models.

Through its bundled Model Context Protocol (MCP) server, external AI agents can
read these annotations directly. When an engineer asks their agent to fix visual
discrepancies, the agent inspects the annotation context to determine the exact
source component and CSS rules that need updating.

## Paywall and pricing

- **Free:** Completely free for internal development, client project reviews,
  and local agent workflows.
- **Paid:** No paid tiers or subscription paywalls for standard usage.
  Commercial redistribution or offering Agentation as a competing hosted SaaS
  product requires a commercial licence agreement from the author.
- **Sign-up required?** No sign-up required.
- **Licence for client work:** PolyForm Shield License 1.0.0 permits internal
  business use, client delivery, and testing, but prohibits building a competing
  commercial service with the software.

Checked on 2026-10-07.

## How to use

1. Install the Agentation review overlay package into your development build:

```bash
bun add -d agentation
```

2. Wrap your application layout with the `AgentationOverlay` provider (active
   only during development or staging):

```tsx
import { AgentationOverlay } from 'agentation'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {process.env.NODE_ENV === 'development' && <AgentationOverlay />}
        {children}
      </body>
    </html>
  )
}
```

3. Launch your app, click on an element, and leave feedback. Export annotations
   to `.agentation/tasks.json` or query them directly through the MCP server:

```bash
claude mcp add agentation -- npx -y agentation-mcp server
```

## Examples

- [Agentation Overview](https://www.agentation.com/) — interactive demo of
  browser element selection and LLM context extraction.
- [Agentation Install Guide](https://www.agentation.com/install) — integration
  recipes for Next.js, Vite, and standalone HTML pages.
- [Agentation Schema Specification](https://www.agentation.com/schema) — JSON
  schema defining bounding boxes, DOM paths, and prompt formatting.

## When to use it

- Use it when non-technical stakeholders or designers review site iterations and
  need to pass pinpoint visual change requests to coding agents.
- Use it to eliminate back-and-forth ambiguity about CSS layout issues on
  complex responsive components.
- Skip it when you are writing pure backend code or headless business logic with
  no visual DOM.

## Agent notes

- Official documentation URL: `https://www.agentation.com/install`
- Package name: `agentation` (runtime overlay), `agentation-mcp` (MCP server)
- MCP server command: `npx -y agentation-mcp server`
- Generates data files in `.agentation/`, which agents can view using standard
  file reading tools.
- Elements marked with `data-agent-ignore` are excluded from capture.

## Alternatives in this repo

- [Efecto](../agents-mcp/efecto.md) — visual web design canvas powered by MCP
  tools for agent layout generation.
- [Impeccable](../agents-mcp/impeccable.md) — design intelligence skill guiding
  agents in typography, spacing, and styling.
- [Distill](../agents-mcp/distill.md) — intelligent agent organizing scattered
  research notes and client briefs.

## Sources

- [Agentation Official Site](https://www.agentation.com/) — checked 2026-10-07
- [Agentation GitHub Repository](https://github.com/benjitaylor/agentation) —
  checked 2026-10-07
- [Agentation Installation](https://www.agentation.com/install) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/build)
