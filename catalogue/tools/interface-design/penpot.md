---
name: Penpot
slug: penpot
section: Interface Design
section_slug: interface-design
source_url: 'https://penpot.app/'
designeer_url: 'https://designeer.xyz/'
designeer_blurb: Open-source web design platform supporting SVG.
paywall: freemium
pricing_summary:
  'Professional is free; Unlimited is $7/editor/month capped at $175, Enterprise
  is $25/member/month, and private server pricing is $50,000/year.'
open_source: true
license: MPL-2.0
category_tags: [design, prototyping, open-source, svg, mcp]
best_for: [interface design, design systems, self-hosted workflows]
stack: []
execution_mode: browser-app
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Penpot

> Open-source web design platform supporting SVG. It provides a shared design
> and prototyping workspace with inspectable vector-based files.

## At a glance

| Field          | Value                                                                    |
| -------------- | ------------------------------------------------------------------------ |
| Source         | [penpot.app](https://penpot.app/)                                        |
| Paywall        | **Freemium** — free Professional plan; paid team and server plans.       |
| Open source    | Yes — MPL-2.0.                                                           |
| Type           | Browser-based interface design and prototyping platform.                 |
| Works with     | Web app, SVG, browser workflows, and official MCP integration.           |
| Best for       | Interface design, design systems, and teams needing open-source tooling. |
| Agent-friendly | Yes — Penpot provides an MCP server for supported coding clients.        |

## What it is

Penpot is an open-source design and prototyping application built around web
standards and SVG. Designers can create interfaces, components, shared
libraries, and interactive prototypes in a browser workspace.

The application can be used through Penpot's hosted service or self-hosted. Its
official MCP server exposes design context to compatible AI clients. This can
help an agent inspect files, but it does not replace the team's decisions about
responsive rules, content, accessibility, or implementation structure.

## Paywall and pricing

- **Free:** Professional is listed at $0 and includes the core design workspace.
- **Paid:** Unlimited is $7 per editor per month, capped at $175/month.
  Enterprise is $25 per member per month. A private server is listed at
  $50,000/year. Verify plan limits and billing before adoption.
- **Sign-up required?** An account is required to create and collaborate in
  hosted files. Self-hosting requires operating the application yourself.
- **Licence for client work:** Penpot's code is MPL-2.0. That covers the
  software; separately review licenses for fonts, images, and shared assets.

Prices checked 2026-10-07.

## How to use

1. Create a workspace and a file for the product or client. Organize pages by
   flow or feature rather than placing every screen on one canvas.
2. Define reusable typography, colors, and components, then build the key
   screens and connect them into a prototype.
3. Test the flow at the intended viewport sizes. Include empty, loading,
   validation, and error states in the design file.
4. For handoff, inspect the file and export SVG assets where appropriate.
   Document behavior and responsive rules that cannot be inferred from a static
   frame.
5. To use the MCP integration, follow the official setup guide for the supported
   client, authorize access, and scope the agent to the relevant file or page.

## Examples

- [Penpot Design System](https://penpot.app/penpothub/libraries-templates/penpot-design-system)
  — inspect a reusable library and its component organization.
- [Design systems 101](https://penpot.app/blog/penpot-for-design-systems-101/) —
  guidance for building and maintaining a system in Penpot.
- [Components and shared libraries](https://penpot.app/blog/tutorial-use-components-and-shared-libraries/)
  — a practical walkthrough of reusable interface parts.
- [Flexible layout for responsive design](https://penpot.app/blog/penpot-flexible-layout-for-responsive-design/)
  — see how flexible constraints support responsive layouts.

## When to use it

- Use it when teams want a browser design workspace with open-source software
  and SVG-oriented assets.
- Consider self-hosting when deployment control is important and the team can
  maintain the service.
- Choose a code-first workflow when the work is primarily implementation and
  does not need a separate visual design canvas.

## Agent notes

- Official application repository:
  [penpot/penpot](https://github.com/penpot/penpot).
- Official MCP repository:
  [penpot/penpot-mcp](https://github.com/penpot/penpot-mcp).
- The MCP server is integrated with Penpot's development work; follow its
  current setup instructions rather than guessing configuration keys.
- The design application's MPL-2.0 license does not automatically license
  user-created or imported assets.
- Review generated implementation against the source file and test the actual
  interaction states in a browser.

## Alternatives in this repo

- [Figma](../interface-design/figma.md) — widely used hosted design and handoff
  platform with its own MCP workflow.
- [Framer](../interface-design/framer.md) — visual canvas focused on designing
  and publishing websites.
- [Spline](../interface-design/spline.md) — author 3D scenes and interactive
  visual elements in a browser.

## Sources

- [Official site](https://penpot.app/) — checked 2026-10-07
- [Pricing](https://penpot.app/pricing) — checked 2026-10-07
- [Penpot source repository](https://github.com/penpot/penpot) — checked
  2026-10-07
- [Penpot MCP repository](https://github.com/penpot/penpot-mcp) — checked
  2026-10-07
- [Penpot Design System library](https://penpot.app/penpothub/libraries-templates/penpot-design-system)
  — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/) — checked 2026-10-07
