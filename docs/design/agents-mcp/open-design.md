---
name: Open Design
slug: open-design
section: Agents & MCP
section_slug: agents-mcp
source_url: 'https://open-design.ai/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Standardized design systems formatted for agents.'
paywall: freemium
pricing_summary:
  'Local use is free; regular monthly cloud subscriptions start at $10 for Go.'
open_source: true
license: Apache-2.0
category_tags: [design-systems, agent-workflows, desktop]
best_for: ['local design-agent workflow', 'HTML prototypes']
stack: [nodejs, pnpm]
agent_friendly: true
last_verified: 2026-10-07
---

# Open Design

> Standardized design systems formatted for agents. TolongLabs use: Use its
> local agent workflow to generate, review, and export a real HTML prototype.

## At a glance

| Field          | Value                                            |
| -------------- | ------------------------------------------------ |
| Source         | [Official site](https://open-design.ai/)         |
| Paywall        | **Freemium** — Free local use; cloud from $10/mo |
| Open source    | Yes — Apache-2.0                                 |
| Type           | Local-first design-agent workspace               |
| Works with     | macOS, Windows, Node.js, pnpm, coding agents     |
| Best for       | local design-agent workflow, HTML prototypes     |
| Agent-friendly | Yes — direct Markdown, CLI, or MCP use           |

## What it is

OpenDesign is a collaborative workspace for coding agents that generate and
review HTML prototypes. It includes open design-system plugins, sharing,
comments, and artifact export.

The project is open source and can run locally with an agent. Hosted plans add
managed model credits and team features; local development has specific Node.js
and pnpm requirements.

## Paywall and pricing

- **Free:** The local desktop and self-hosted workflow are available without a
  paid subscription; the repository is Apache-2.0.
- **Paid:** Regular monthly pricing lists Go $10, Plus $20, Pro $100, and Max
  $200. The page also shows introductory and annual discounts; check it before
  purchase.
- **Sign-up required?:** Local use requires the app and a configured agent.
  Cloud credits and team features require an account.
- **Licence for client work:** Apache-2.0 applies to the repository; review
  plugin and third-party model terms before distributing modifications or using
  paid services for clients.

Checked 2026-10-07.

## How to use

1. Install the desktop app, connect a supported local agent, and select a
   design-system plugin that fits the project direction.

2. For the developer quickstart, use Node.js 24 and pnpm 10.33.2, install
   repository dependencies, and run local tools.

3. Run a design skill to create an HTML artifact, inspect it, and use edits or
   comments to guide the next pass. Export reviewed HTML, PNG, or PDF.

```bash
git clone https://github.com/nexu-io/open-design
cd open-design
pnpm install
pnpm tools-dev
```

```bash
od skill run open-design-landing --output ./artifact.html
```

## Examples

- [Airbnb system](https://open-design.ai/plugins/design-system-airbnb/) —
  Hospitality-oriented visual system plugin.
- [Apple system](https://open-design.ai/plugins/design-system-apple/) —
  Restrained product UI system to inspect and adapt.
- [Cal.com system](https://open-design.ai/plugins/design-system-cal/) —
  Scheduling product reference and component direction.

## When to use it

- Use it when developers want an agent to generate and iterate on HTML
  prototypes in a shared review surface.
- Skip it when you only need to browse references; use Refero or getdesign.md
  without setting up a workspace.

## Agent notes

The quickstart documents the `od` CLI and skills such as `open-design-landing`;
follow pinned Node and pnpm versions.

Keep cloud credits and open-source licensing separate, and review plugin terms
before client delivery.

## Alternatives in this repo

- [Aura](../agents-mcp/aura.md) — Use a hosted visual page builder.
- [Neuform](../agents-mcp/neuform.md) — Browse remixable landing-page templates.
- [getdesign.md](../agents-mcp/getdesign-md.md) — Choose a prebuilt analysis
  instead of running a workspace.

## Sources

- [Official site](https://open-design.ai/) — checked 2026-10-07
- [Quickstart](https://open-design.ai/quickstart/) — checked 2026-10-07
- [Pricing](https://open-design.ai/pricing/) — checked 2026-10-07
- [Airbnb plugin](https://open-design.ai/plugins/design-system-airbnb/) —
  checked 2026-10-07
- [Apple plugin](https://open-design.ai/plugins/design-system-apple/) — checked
  2026-10-07
- [Cal.com plugin](https://open-design.ai/plugins/design-system-cal/) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/build) — checked 2026-10-07
