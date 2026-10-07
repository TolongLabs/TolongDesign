---
name: Distill
slug: distill
section: Agents & MCP
section_slug: agents-mcp
source_url: https://distill.id/
designeer_url: https://designeer.xyz/build
designeer_blurb: Intelligent agent organizing scattered research notes.
paywall: freemium
pricing_summary:
  'Free desktop app with local vault and BYOK models; Cloud sync tiers are
  Starter $12/month, Plus $20/month, and Pro $50/month.'
open_source: false
license: proprietary
category_tags: [ai, notes, research, mcp, desktop]
best_for: [research synthesis, design notes, context vaults]
stack: []
agent_friendly: true
last_verified: 2026-10-07
---

# Distill

> Intelligent agent organizing scattered research notes. Use it to synthesize
> visual references, user feedback, and specs into clean Markdown briefs.

## At a glance

| Field          | Value                                                       |
| -------------- | ----------------------------------------------------------- |
| Source         | [distill.id](https://distill.id/)                           |
| Paywall        | **Freemium** — free local desktop app; Cloud from $12/month |
| Open source    | No — proprietary                                            |
| Type           | AI research assistant and local knowledge vault             |
| Works with     | macOS, Markdown, MCP servers, REST API                      |
| Best for       | Research synthesis, design notes, context vaults            |
| Agent-friendly | Yes — local Markdown files, MCP integration, API endpoints  |

## What it is

Distill is an AI-powered desktop application and knowledge agent designed to
gather fragmented notes, screenshots, web clips, and design briefs into
coherent, structured documents. It operates over a local file-based vault while
offering agentic indexing, automated summarization, and concept linking.

Rather than locking notes into a proprietary cloud database, Distill stores
documents as plain Markdown files on disk. Its embedded agent reads local files,
answers queries about project context, and creates topic clusters without
requiring manual tagging.

For developers and design teams using Model Context Protocol (MCP), Distill
exposes a local MCP server interface. External coding agents running in tools
like Claude Code or Cursor can query Distill's index to pull relevant user
stories, brand constraints, and design requirements straight into active coding
sessions.

## Paywall and pricing

- **Free:** Desktop application with local file vaults, full search, and
  bring-your-own-key (BYOK) support for Anthropic and OpenAI API keys.
- **Paid (Cloud Sync):**
  - **Starter:** $12/month for encrypted cloud vault backup and cross-device
    access.
  - **Plus:** $20/month for hosted agent execution, team sharing, and shared
    indexes.
  - **Pro:** $50/month for high-volume hosted reasoning, priority indexing, and
    collaborative team vaults.
- **Sign-up required?** Optional for local offline use; required for cloud sync
  and team collaboration.
- **Licence for client work:** Proprietary application. Client notes, exported
  Markdown briefs, and synthesised specifications belong entirely to the user.

Checked on 2026-10-07.

## How to use

1. Download Distill for macOS from `distill.id` and point it to your project
   workspace or a local Markdown directory.
2. In the settings panel, configure an API key (Anthropic or OpenAI) or connect
   to a local LLM runner for on-device inference.
3. Import raw assets: drag and drop web links, competitive design screenshots,
   and client transcripts into Distill.
4. Run the Distill synthesis agent to generate project briefs:

```markdown
Synthesize all visual bookmarks and client comments in the "landing-page-v2"
folder into a component requirements checklist formatted for Next.js.
```

5. Connect Distill's MCP server to your coding agent config to expose notes:

```json
{
  "mcpServers": {
    "distill": {
      "command": "distill-mcp",
      "args": ["--vault", "/path/to/project-vault"]
    }
  }
}
```

## Examples

- [Distill Home](https://distill.id/) — overview of the intelligent research
  assistant, local-first architecture, and visual graph.
- [Distill Pricing](https://distill.id/pricing) — comparison between free local
  vaults and cloud sync plans.
- [Distill MCP Tools Documentation](https://distill.id/docs/tools/mcps) — guide
  to hooking Distill context into external AI coding tools.

## When to use it

- Use it when beginning a new design project and juggling design inspiration,
  client interview transcripts, and technical requirements.
- Use it as an MCP context bridge so coding agents have real-time access to
  curated project documentation.
- Skip it when you only need a quick code-level scratchpad; use standard project
  Markdown files inside the repo instead.

## Agent notes

- Official documentation URL: `https://distill.id/docs`
- MCP server guide: `https://distill.id/docs/tools/mcps`
- Vault format: standard filesystem directory containing `.md` files and image
  attachments, making it directly inspectable by shell tools and CLI agents.
- Agents can read generated briefs directly from the vault directory without
  interacting with the GUI.

## Alternatives in this repo

- [Causal](../agents-mcp/causal.md) — spatial AI canvas workspace for visual
  brainstorming and project planning.
- [Agentation](../agents-mcp/agentation.md) — converts visual on-screen UI
  annotations directly into agent context.
- [SkillSync](../agents-mcp/skillsync.md) — cross-editor context synchronization
  and skill sharing for coding agents.

## Sources

- [Distill Official Site](https://distill.id/) — checked 2026-10-07
- [Distill Pricing](https://distill.id/pricing) — checked 2026-10-07
- [Distill Documentation](https://distill.id/docs) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build)
