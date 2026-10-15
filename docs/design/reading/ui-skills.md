---
name: UI Skills
slug: ui-skills
section: Reading
section_slug: reading
source_url: 'https://ui-skills.com/'
designeer_url: 'https://designeer.xyz/'
designeer_blurb: 'Course teaching techniques for designing with AI.'
paywall: free
pricing_summary:
  'Completely free open-source directory, agent skills registry, MCP server, and
  design playbook.'
open_source: true
license: MIT
category_tags:
  [agent-skills, mcp, prompt-engineering, accessibility, design-systems, cli]
best_for:
  [
    equipping ai coding agents with ui design rules,
    mcp server integration,
    frontend audit checklists
  ]
stack: ['typescript', 'nodejs', 'mcp']
execution_mode: mcp-skill
surface: ['development']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# UI Skills

> Course teaching techniques for designing with AI. TolongLabs developers and AI
> coding agents reach for UI Skills to install structured UI design skills,
> connect design-system MCP servers, and enforce high-craft frontend standards.

## At a glance

| Field          | Value                                                      |
| -------------- | ---------------------------------------------------------- |
| Source         | [ui-skills.com](https://ui-skills.com/)                    |
| Paywall        | **Free** — 100% free open-source platform                  |
| Open source    | Yes — MIT ([GitHub](https://github.com/ibelick/ui-skills)) |
| Type           | AI agent skills registry, design rules & MCP ecosystem     |
| Works with     | Claude Code, Cursor, Codex, Windsurf, Node.js, Bun         |
| Best for       | Equipping AI agents with UI rules, MCP servers, a11y       |
| Agent-friendly | Yes — CLI, MCP server, llms.txt, registry endpoint         |

## What it is

UI Skills is an open-source platform and registry created by Julien Thibeaut
(@ibelick) to help developers and AI coding agents build distinctive,
production-grade frontend interfaces. With over 9,400 GitHub stars, it has
become the standard ecosystem for bridging modern design engineering craft with
autonomous AI coding tools.

The platform provides several integrated tools:

1. **Agent Skills Registry:** A searchable registry of specialized skill
   definitions authored by leading designers and engineers (including Julien
   Thibeaut, Emil Kowalski, Jakub Krehel, Anthony Fu, and Addy Osmani). Skills
   cover accessibility, animation audits, design system compliance, anti-generic
   aesthetics, and UI polish.
2. **Design Playbook:** Actionable, concise engineering rules for craft—such as
   preventing layout shifts with `aspect-ratio`, balancing headers with
   `text-wrap: balance`, aligning numeric data with `tabular-nums`, and ensuring
   44px touch targets.
3. **Design.md Standards:** Living specification files capturing the visual and
   architectural design rules of top brands (Vercel, Clerk, Atlassian,
   Mintlify).
4. **Tooling Ecosystem:** Dedicated CLI (`bunx ui-skills`), an MCP (Model
   Context Protocol) server, and raw text registries (`registry.txt`,
   `llms.txt`).

## Paywall and pricing

- **Free:** 100% of the UI Skills ecosystem—the website, skills registry, CLI
  tool, MCP server, design playbook, and GitHub repository—is completely free
  under the MIT license.
- **Paid:** None. There are no paid subscription tiers or locked resources.
- **Sign-up required?** No. All endpoints, documentation, and skill definitions
  are accessible without authentication.
- **Licence for client work:** Permissive MIT license allows developers and
  agents to freely incorporate the rules, code snippets, and skills into
  commercial client codebases.

Verified on the official UI Skills website and GitHub repository on 2026-10-07.

## How to use

1. Install skills into an AI coding assistant: Use the CLI to install curated UI
   skills into your project's agent directory (e.g. for Claude Code, Cursor, or
   Antigravity):
   ```bash
   bunx ui-skills add frontend-design
   ```
2. Configure the MCP server: Connect the UI Skills Model Context Protocol server
   to your IDE or agent runtime to let agents query design rules dynamically:
   ```json
   {
     "mcpServers": {
       "ui-skills": {
         "command": "bunx",
         "args": ["-y", "ui-skills-mcp"]
       }
     }
   }
   ```
3. Adopt playbook rules: Reference the Playbook
   (`https://ui-skills.com/playbook`) during PR reviews to check for core
   accessibility and layout hygiene (`text-balance`, `tabular-nums`, 44px tap
   targets).
4. Align with brand rules: Read `Design.md` profiles
   (`https://ui-skills.com/design-md`) to benchmark how production teams
   document design constraints for AI.

## Examples

- [Skills Directory](https://ui-skills.com/skills) — Comprehensive catalog of
  vetted agent skills covering motion, accessibility, and visual craft.
- [Design Playbook](https://ui-skills.com/playbook) — Quick-reference guide of
  essential frontend implementation patterns.
- [MCP Documentation](https://ui-skills.com/mcp/docs) — Setup guide for
  connecting UI Skills to MCP-compliant AI agents.

## When to use it

- Use it whenever configuring AI coding assistants (Claude Code, Cursor, Codex)
  to build interfaces that avoid generic, low-effort AI aesthetics.
- Use it to enforce consistent accessibility standards and tactile motion rules
  across team projects.
- Skip it if you are seeking a traditional UI component library with pre-built
  CSS classes; use component libraries like Shadcn UI instead.

## Agent notes

- Exceptionally agent-friendly: UI Skills provides
  `https://ui-skills.com/llms.txt`, a raw registry at
  `https://ui-skills.com/skills/registry.txt`, and a dedicated MCP server.
- Coding agents can directly fetch and consume skill files to self-program their
  review criteria before writing UI code.
- Works natively with Bun (`bunx ui-skills`) and Node.js.

## Alternatives in this repo

- [User Interface Wiki](../reading/user-interface-wiki.md) — Open-source living
  manual and agent skill containing 152 rules for interface craft.
- [The Shape of AI](../reading/the-shape-of-ai.md) — Pattern library exploring
  user experience patterns for designing generative AI interfaces.

## Sources

- [Official site](https://ui-skills.com/) — checked 2026-10-07
- [GitHub Repository](https://github.com/ibelick/ui-skills) — checked 2026-10-07
- [LLMs.txt Endpoint](https://ui-skills.com/llms.txt) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/)
