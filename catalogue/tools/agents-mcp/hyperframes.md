---
name: HyperFrames
slug: hyperframes
section: Agents & MCP
section_slug: agents-mcp
source_url: 'https://www.hyperframes.dev/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Headless HTML-to-MP4 video rendering engine.'
paywall: free
pricing_summary:
  'The renderer and agent workflow are Apache-2.0; no paid plan for the core
  workflow was listed.'
open_source: true
license: Apache-2.0
category_tags: [video, html, agent-skills]
best_for: ['programmatic marketing videos', 'agent-generated motion']
stack: ['html', 'javascript', 'gsap']
execution_mode: mcp-skill
surface: ['video']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# HyperFrames

> Headless HTML-to-MP4 video rendering engine. TolongLabs use: Use its renderer
> to create editable HTML-based videos with an agent.

## At a glance

| Field          | Value                                                 |
| -------------- | ----------------------------------------------------- |
| Source         | [Official site](https://www.hyperframes.dev/)         |
| Paywall        | **Free** — Free Apache-2.0 renderer and skill         |
| Open source    | Yes — Apache-2.0                                      |
| Type           | HTML-to-MP4 video renderer and agent workflow         |
| Works with     | HTML, JavaScript, GSAP, MP4, coding agents            |
| Best for       | programmatic marketing videos, agent-generated motion |
| Agent-friendly | Yes — direct Markdown, CLI, or MCP use                |

## What it is

HyperFrames turns HTML scenes into MP4 video. The current site focuses on
branded mobile ads, with templates and code blocks an agent can use to build
video projects.

The project is open source and can be started from the CLI or installed as an
agent skill. A Studio workflow is also described; reviewed pages list no
separate core-renderer price.

## Paywall and pricing

- **Free:** The renderer, CLI workflow, and skill are Apache-2.0 licensed and
  free.
- **Paid:** No paid plan for the core renderer was listed. Check Studio and
  connected media services for terms or costs.
- **Sign-up required?:** The local project workflow requires no HyperFrames
  account. An agent CLI may need provider credentials.
- **Licence for client work:** Apache-2.0 permits commercial use subject to
  terms and notices. Check licenses for fonts, footage, music, and other assets.

Checked 2026-10-07.

## How to use

1. Initialize a project from the CLI or install the HyperFrames skill into a
   compatible agent. Start from a template for a known aspect ratio and scene
   structure.

2. Build scenes as HTML/CSS/JavaScript and use catalog blocks for motion. Give
   the agent copy, product assets, duration, and target ratio.

3. Render and preview the video. Verify pacing, text legibility, and asset
   licenses; the create workflow can package a ZIP for preview or rendering.

```bash
npx hyperframes init my-video
npx skills add heygen-com/hyperframes
```

## Examples

- [Block catalog](https://www.hyperframes.dev/?view=catalog) — Browse reusable
  motion pieces such as headline and counter treatments.
- [Claude Opus launch session](https://www.hyperframes.dev/session/f88646ad-2f83-4ec5-a541-660a5163a828)
  — Inspect a complete agent-produced video project.
- [Blue Professional design](https://www.hyperframes.dev/design/blue-professional)
  — See a professional product-ad direction.
- [Creative Mode design](https://www.hyperframes.dev/design/creative-mode) —
  Compare a more expressive visual direction.

## When to use it

- Use it when a team needs short branded videos and wants an agent to author
  motion scenes as editable HTML.
- Skip it when the deliverable is a static page or the project needs a React
  component library.

## Agent notes

The site documents `npx hyperframes init` and a skills.sh install. Use the
project skill to follow renderer conventions.

Rendered videos can contain assets with separate terms; document source media
and check the MP4 at mobile size.

## Alternatives in this repo

- [Aura](../agents-mcp/aura.md) — Generate and edit interactive pages in a
  visual builder.
- [Open Design](../agents-mcp/open-design.md) — Create prototypes through a
  local-first design-agent workspace.
- [typeui.sh](../agents-mcp/typeui-sh.md) — Use animation prompts without a
  video renderer.

## Sources

- [Official site](https://www.hyperframes.dev/) — checked 2026-10-07
- [Create workflow](https://www.hyperframes.dev/create) — checked 2026-10-07
- [Studio](https://www.hyperframes.dev/studio) — checked 2026-10-07
- [Block catalog](https://www.hyperframes.dev/?view=catalog) — checked
  2026-10-07
- [Example session](https://www.hyperframes.dev/session/f88646ad-2f83-4ec5-a541-660a5163a828)
  — checked 2026-10-07
- [Blue Professional](https://www.hyperframes.dev/design/blue-professional) —
  checked 2026-10-07
- [Creative Mode](https://www.hyperframes.dev/design/creative-mode) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/build) — checked 2026-10-07
