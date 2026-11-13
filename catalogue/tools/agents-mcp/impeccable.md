---
name: Impeccable
slug: impeccable
section: Agents & MCP
section_slug: agents-mcp
source_url: https://impeccable.style/
designeer_url: https://designeer.xyz/build
designeer_blurb: Design intelligence skill for AI agents.
paywall: free
pricing_summary: '100% free and open-source under the Apache-2.0 license.'
open_source: true
license: Apache-2.0
category_tags: [ai, design, skill, rules, agents, prompt-engineering]
best_for: [agent design taste, typography rules, layout guidance]
stack: []
execution_mode: mcp-skill
surface: ['web-ui', 'reference']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Impeccable

> Design intelligence skill for AI agents. Use it to give coding agents strict,
> high-taste design rules for spacing, typography, and visual hierarchy.

## At a glance

| Field          | Value                                                              |
| -------------- | ------------------------------------------------------------------ |
| Source         | [impeccable.style](https://impeccable.style/)                      |
| Paywall        | **Free** — 100% free and open source                               |
| Open source    | Yes — Apache-2.0 ([GitHub](https://github.com/pbakaus/impeccable)) |
| Type           | Agent skill, ruleset, and design design engineering guide          |
| Works with     | Claude Code, Cursor, Windsurf, Antigravity, Copilot, CLI agents    |
| Best for       | Agent design taste, typography rules, layout guidance              |
| Agent-friendly | Yes — CLI installer, Markdown rules, agent prompt injection        |

## What it is

Impeccable is a design intelligence system and agent skill created by Paul
Bakaus (former Google and Zynga design/developer advocate). It addresses the
common problem of AI-generated websites looking generic, improperly padded, or
mechanically misaligned.

Rather than relying on basic boilerplate prompts, Impeccable equips AI agents
with systematic, professional design heuristics. It encodes concrete principles
governing typographic scale, optical padding, contrast thresholds, responsive
grid mechanics, and semantic color tokens.

Impeccable installs as a local skill or project rulefile inside repositories.
When a coding agent is tasked with building a landing page or tweaking a UI
component, the Impeccable skill actively constrains the agent from making
amateur design mistakes like unpadded containers, mismatched font weights, or
harsh drop shadows.

## Paywall and pricing

- **Free:** 100% free. The repository, CLI installer, and rulesets are released
  under the open-source Apache-2.0 licence.
- **Paid:** No paid tiers, subscriptions, or paywalled modules.
- **Sign-up required?** No sign-up required.
- **Licence for client work:** Apache-2.0 permits commercial client builds,
  private corporate repositories, and modification without royalty.

Checked on 2026-10-07.

## How to use

1. Install the Impeccable CLI into your development workflow:

```bash
npx impeccable install
```

2. Initialize the skill in your project repository to create the design guide:

```bash
npx impeccable init
```

3. In your agent instructions (such as `AGENTS.md` or `.cursorrules`), import
   the Impeccable design standards:

```markdown
Follow the design guidelines defined in `.impeccable/rules.md`. Ensure all
typography uses fluid scaling, spacing sticks to a consistent 4px/8px grid, and
contrast complies with APCA/WCAG standards.
```

4. Prompt your agent to review or generate UI with design intelligence enabled:

```bash
claude "Review src/components/Hero.tsx using the Impeccable design skill"
```

## Examples

- [Impeccable Official Site](https://impeccable.style/) — design manifesto,
  visual comparisons, and agent capability breakdown.
- [Impeccable Documentation](https://impeccable.style/docs) — comprehensive rule
  reference covering typography, spacing, color, and motion.
- [Impeccable GitHub Repository](https://github.com/pbakaus/impeccable) — source
  code, skill definitions, and CLI tooling.

## When to use it

- Use it whenever you rely on AI coding agents to write frontend code and want
  to avoid cookie-cutter or poorly aligned interfaces.
- Use it to establish high-taste, repeatable design standards across an agency
  team or open-source community.
- Skip it if your repository strictly follows an existing, rigid enterprise
  design system like IBM Carbon or Salesforce Lightning with strict linting.

## Agent notes

- Official documentation URL: `https://impeccable.style/docs`
- GitHub repository: `https://github.com/pbakaus/impeccable`
- Skill format: structured Markdown guidelines that can be embedded into system
  prompts, `.cursorrules`, `CLAUDE.md`, or `AGENTS.md`.
- Requires no external runtime dependencies in production code; all logic acts
  as prompt-time design governance.

## Alternatives in this repo

- [Agentation](../agents-mcp/agentation.md) — visual browser annotation tool
  passing localized element context to agents.
- [Efecto](../agents-mcp/efecto.md) — visual web design canvas where agents
  build layouts via MCP commands.
- [Kombai](../agents-mcp/kombai.md) — AI design engineer converting visual
  mockups directly into production UI components.

## Sources

- [Impeccable Official Site](https://impeccable.style/) — checked 2026-10-07
- [Impeccable GitHub Repository](https://github.com/pbakaus/impeccable) —
  checked 2026-10-07
- [Impeccable Documentation](https://impeccable.style/docs) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build)
