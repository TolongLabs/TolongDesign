---
name: 'Linear'
slug: 'linear'
section: 'Whiteboard'
section_slug: 'whiteboard'
source_url: 'https://linear.app/'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: 'Project management software setting speed standards.'
paywall: freemium
pricing_summary:
  'Free includes up to 2 teams and 250 issues; Basic is $10 per user monthly and
  Business is $16 per user monthly when billed annually.'
open_source: false
license: proprietary
category_tags: ['project-management', 'issues', 'roadmap', 'mcp']
best_for: ['product roadmaps', 'issue triage', 'team planning']
stack: []
execution_mode: mcp-skill
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Linear

> Project management software setting speed standards.

> Use it to turn product plans into owned, trackable work and give agents scoped
> access.

## At a glance

| Field          | Value                                                                                                                                              |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Source         | [linear.app](https://linear.app/)                                                                                                                  |
| Paywall        | **freemium** — Free includes up to 2 teams and 250 issues; Basic is $10 per user monthly and Business is $16 per user monthly when billed annually |
| Open source    | No — proprietary                                                                                                                                   |
| Type           | Product planning and issue tracking service                                                                                                        |
| Works with     | Web, desktop, mobile; Linear MCP                                                                                                                   |
| Best for       | product roadmaps, issue triage, team planning                                                                                                      |
| Agent-friendly | Yes — official MCP server supports authenticated project workflows                                                                                 |

## What it is

Linear is a hosted issue tracker and product planning system. Teams organize
work into issues, projects, initiatives, cycles, and custom views.

It is not a whiteboard or a design canvas. It belongs beside design work when a
team needs clear ownership, progress tracking, and product delivery workflows.

Linear also publishes an MCP server for agents. It can expose authorized Linear
actions to a coding agent, so teams should scope its access to the workspace and
workflow they intend to automate.

## Paywall and pricing

- The Free plan is $0 and lists unlimited members, up to 2 teams, and 250
  issues.
- Basic is $10 per user per month and Business is $16 per user per month when
  billed annually. Enterprise pricing is custom.
- Sign-up and workspace access are required to use the hosted product. MCP use
  requires authentication.
- The service is proprietary; no client-work restriction was listed on the
  pricing page.

Checked 2026-10-07. Prices can change; use the linked official page for current
terms.

## How to use

- Create a workspace and teams that reflect product ownership rather than
  mirroring every project folder.
- Track implementation as issues, group larger outcomes into projects, and use
  cycles for time-bounded planning.
- Create custom views for recurring triage or design review queues; use
  initiatives when work spans multiple projects.
- To connect an agent, configure the official MCP endpoint and authenticate it
  with only the workspace access needed.

```bash
codex mcp add linear --url https://mcp.linear.app/mcp
```

## Examples

- [Project templates](https://linear.app/docs/project-templates) — Start a
  project with a repeatable project structure.
- [Initiatives](https://linear.app/docs/initiatives) — Coordinate multiple
  projects around a larger outcome.
- [Custom views](https://linear.app/docs/custom-views) — Save a focused issue
  view for recurring team workflows.

## When to use it

- Use it when a product team needs issue ownership, planning, status, and
  cross-project visibility.
- Skip it for sketches and freeform discovery; use tldraw for canvases or
  Obsidian for local research notes.

## Agent notes

- MCP endpoint: https://mcp.linear.app/mcp. Linear also documents a read-only
  endpoint for restricted agent access.
- The MCP server requires workspace authentication and can create or update work
  when granted write permissions.
- Use the official docs to review tool capabilities before allowing agents to
  write issues or change project state.
- Linear is a hosted proprietary service, not a local project database.

## Alternatives in this repo

- [Obsidian](../whiteboard/obsidian.md) — For linked research notes stored as
  local Markdown.
- [tldraw](../whiteboard/tldraw.md) — For visual planning and collaborative
  canvas work.

## Sources

- [Official site](https://linear.app/) — checked 2026-10-07
- [Pricing](https://linear.app/pricing) — checked 2026-10-07
- [MCP server setup](https://linear.app/docs/mcp) — checked 2026-10-07
- [Project templates](https://linear.app/docs/project-templates) — checked
  2026-10-07
- [Initiatives](https://linear.app/docs/initiatives) — checked 2026-10-07
- [Custom views](https://linear.app/docs/custom-views) — checked 2026-10-07
- [Cycles](https://linear.app/docs/use-cycles) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/utilities) — checked 2026-10-07;
  page was not readable in the research browser.
