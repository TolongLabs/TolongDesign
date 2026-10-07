---
name: Hallmark
slug: hallmark
section: Utilities
section_slug: utilities
source_url: 'https://www.usehallmark.com/'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: Landing page builder producing handcrafted designs.
paywall: free
pricing_summary:
  'The Hallmark skill is MIT-licensed and no Hallmark subscription price is
  published.'
open_source: true
license: MIT
category_tags: [agent-skill, web-design, audit]
best_for: [landing pages, design audits, visual redesigns]
stack: [react, tailwind]
agent_friendly: true
last_verified: 2026-10-07
---

# Hallmark

> Landing page builder producing handcrafted designs. Its coding-agent skill
> helps teams vary page structure and avoid generic interface patterns.

## At a glance

| Field          | Value                                                                        |
| -------------- | ---------------------------------------------------------------------------- |
| Source         | [usehallmark.com](https://www.usehallmark.com/)                              |
| Paywall        | **Free** — MIT-licensed skill; no Hallmark fee shown                         |
| Open source    | Yes — [MIT on GitHub](https://github.com/Nutlope/hallmark/blob/main/LICENSE) |
| Type           | Design skill for AI coding assistants                                        |
| Works with     | Claude Code, Cursor, and Codex                                               |
| Best for       | New pages, audits, redesigns, design study                                   |
| Agent-friendly | Yes — installable skill with explicit verbs                                  |

## What it is

Hallmark is a design skill for coding agents, maintained in the public
`Nutlope/hallmark` repository. It guides the agent through page structure, type,
color, spacing, motion, and a final review against common generic UI patterns.

It has four workflows: build a new page, audit an existing page, redesign a page
while preserving its content and information architecture, and study a reference
screenshot or URL to extract reusable design direction. The published site
includes worked pages as demonstrations.

The skill reads the existing project and is designed to work within its
framework and file conventions. Its repository includes references and
implementation guardrails, so it is more than a prompt template.

## Paywall and pricing

- **Free:** The skill is distributed from a public MIT-licensed repository.
- **Paid:** No Hallmark subscription or price is published. The site says the
  workflow is powered by Together AI; any model cost depends on the AI service
  selected by the developer.
- **Sign-up required?** A GitHub account is not required to use the published
  install command; the coding assistant may have its own account requirements.
- **Licence for client work:** The skill code is MIT-licensed. Review any
  generated third-party assets and the chosen model provider's terms separately.

Checked 2026-10-07 against the Hallmark site and repository licence.

## How to use

1. Install the skill in the coding assistant with the official Skills CLI:

   ```bash
   bunx skills add nutlope/hallmark
   ```

2. Open the TolongLabs website project and ask the agent for the requested page.
   Hallmark is designed to attach to the build workflow automatically.
3. For an existing page, use `hallmark audit <target>` to request a ranked
   diagnosis without edits.
4. Use `hallmark redesign <target>` to change the page's visual structure while
   preserving its content and project boundaries.
5. Use `hallmark study <screenshot-or-url>` to extract layout and visual
   direction from a reference without copying its pixels.
6. Review the result against the existing brand and verify that the agent has
   followed the repository's own design and safety rules.

## Examples

- [Bubble, guided sourdough](https://www.usehallmark.com/examples/hum-07/) — a
  four-stage editorial product page with a clear use workflow.
- [Hollowback Apiary](https://www.usehallmark.com/examples/garden-01/) — a
  single-origin honey landing page with product lots and restrained detail.
- [Hyperlane / 26](https://www.usehallmark.com/examples/hyperlane/) — an event
  page with programme, ticket information, and a strongly themed layout.
- [Cold Snap EP](https://www.usehallmark.com/examples/carnival-01/) — a music
  release page using a distinct record-label visual structure.

## When to use it

- Use it when an agent is building or revising a marketing page and needs
  stronger structure, hierarchy, and design-review guidance.
- Use `study` when a reference's layout or visual language should inform a new
  page without reproducing its exact appearance.
- Skip it when the task is mainly application logic, backend behavior, or a
  fully specified design system that the agent must preserve exactly.

## Agent notes

- Official install: `bunx skills add nutlope/hallmark`.
- Repository: [Nutlope/hallmark](https://github.com/Nutlope/hallmark); the skill
  supports Claude Code, Cursor, and Codex.
- The skill is opinionated about structural variety but preserves existing
  project tokens and constraints unless the user directs otherwise.
- Its `audit` workflow is diagnostic; it does not edit the target page.
- Do not treat the license to the skill as a license to copy a referenced
  website, its images, or paid assets.

## Alternatives in this repo

- [Impeccable](../agents-mcp/impeccable.md) — another coding-agent design
  workflow for improving frontend output.
- [designmd.me](../agents-mcp/designmd-me.md) — use when the project needs a
  portable design-system specification.
- [shadcn/ui](../component-libraries/shadcn-ui.md) — use for reusable React
  primitives rather than an agent's design process.

## Sources

- [Official site and worked examples](https://www.usehallmark.com/) — checked
  2026-10-07
- [GitHub repository and install notes](https://github.com/Nutlope/hallmark) —
  checked 2026-10-07
- [Hallmark skill instructions](https://github.com/Nutlope/hallmark/blob/main/skills/hallmark/SKILL.md)
  — checked 2026-10-07
- [MIT licence](https://github.com/Nutlope/hallmark/blob/main/LICENSE) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/utilities) — checked 2026-10-07
