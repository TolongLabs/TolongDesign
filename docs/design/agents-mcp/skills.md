---
name: skills
slug: skills
section: Agents & MCP
section_slug: agents-mcp
source_url: 'https://www.skills.sh/shadcn-labs/skills'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Agent skills for shadcn registries and developer workflows.'
paywall: free
pricing_summary:
  'The listed skills are MIT licensed and the skills CLI is free.'
open_source: true
license: MIT
category_tags: [agent-skills, shadcn, developer-workflows]
best_for: ['registry authoring', 'agent maintenance tasks']
stack: []
agent_friendly: true
last_verified: 2026-10-07
---

# skills

> Agent skills for shadcn registries and developer workflows. TolongLabs use:
> Use its installable skills to give agents focused instructions for repository
> workflows.

## At a glance

| Field          | Value                                                     |
| -------------- | --------------------------------------------------------- |
| Source         | [Official site](https://www.skills.sh/shadcn-labs/skills) |
| Paywall        | **Free** — Free MIT skills and CLI                        |
| Open source    | Yes — MIT                                                 |
| Type           | Skill directory for Shadcn Labs workflows                 |
| Works with     | skills.sh CLI, coding agents                              |
| Best for       | registry authoring, agent maintenance tasks               |
| Agent-friendly | Yes — direct Markdown, CLI, or MCP use                    |

## What it is

This entry is the shadcn-labs collection published through skills.sh. Its skills
cover registry launch work, Mastra file-agent migration, Tailwind-to-StyleX
migration, and SVG icon-set creation and audits.

Skills are instruction packages coding agents load for a task. They are not UI
components or a hosted agent service; the repository documents installing the
full collection or selecting one skill.

## Paywall and pricing

- **Free:** The collection is free and the repository states it is MIT licensed.
- **Paid:** No paid plan, download fee, or service charge was listed.
- **Sign-up required?:** No account is required to install from the public
  repository; an agent client that supports skills is needed to use them.
- **Licence for client work:** MIT applies to the repository and skill content;
  external tools and platform terms still apply.

Checked 2026-10-07.

## How to use

1. Browse the shadcn-labs listing or README to choose a skill matching the
   current task.

2. Install the collection or select one named skill with the `skills` CLI. Keep
   it in the project or agent scope that will use it.

3. Give the agent a task matching the skill description, then review changes and
   run the project’s own migration or build checks.

```bash
bunx skills add shadcn-labs/skills
bunx skills add shadcn-labs/skills --skill launch-shadcn-registry
```

## Examples

- [skills.sh collection](https://www.skills.sh/shadcn-labs/skills) — Browse the
  published collection and install target.
- [Repository README](https://github.com/shadcn-labs/skills/blob/main/README.md)
  — See skill names and installation commands.
- [Skills CLI docs](https://www.skills.sh/docs/cli) — Read syntax for adding or
  selecting skills.

## When to use it

- Use it for registry authoring, Mastra migration, StyleX migration, or icon-set
  workflows.
- Skip it when the task needs design references or UI components; use a design
  system or component registry.

## Agent notes

The README lists skill names and exact flags. Choose only the smallest set
needed for the task.

A skill provides instructions, not runtime code or credentials; the agent still
needs project tools and access.

## Alternatives in this repo

- [Soubi](../agents-mcp/soubi.md) — Author and compile a custom plugin for
  several agents.
- [agentcn](../agents-mcp/agentcn.md) — Install complete workflows into a
  supported app.
- [typeui.sh](../agents-mcp/typeui-sh.md) — Use a hosted catalog of design
  skills and prompts.

## Sources

- [skills.sh listing](https://www.skills.sh/shadcn-labs/skills) — checked
  2026-10-07
- [GitHub README](https://github.com/shadcn-labs/skills/blob/main/README.md) —
  checked 2026-10-07
- [GitHub repository](https://github.com/shadcn-labs/skills) — checked
  2026-10-07
- [Skills CLI docs](https://www.skills.sh/docs/cli) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build) — checked 2026-10-07
