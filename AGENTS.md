# AGENTS.md

Instructions for coding agents working in this repository or using it as a
reference. The rules below apply to every task; the linked documents carry the
detail and are read when the task calls for them.

## Project

TolongDesign is TolongLabs' private **web-design starting point**. It is a
documentation repository, not an app: one Markdown doc per curated design tool
or resource (component libraries, galleries, icons, type, color, motion,
shaders, agents & MCP, deploy, reading, and more), scraped from
[Designeer](https://designeer.xyz) and researched individually.

Every tool doc records the **source URL**, **paywall** (`free`, `freemium`,
`paid`, `unknown`), pricing, licence, **how to use** it (install commands and
snippets for code libraries), **examples**, when to use it, agent notes, and
alternatives. Indexes and `data/index.json` are generated from the docs'
frontmatter.

Use it two ways:

1. **As a reference** while building a TolongLabs website: start at
   [docs/README.md](docs/README.md), pick tools with the
   [design playbook](docs/PLAYBOOK.md), filter with `bun run find`.
2. **As a repo to maintain**: add, refresh, or correct tool docs.

## Layout

```
docs/README.md                 Start here: what is in the repo and how to use it
docs/PLAYBOOK.md               How to pick a stack and start a new web design
docs/design/README.md          Generated: every section with counts
docs/design/<section>/README.md Generated: one row per tool in the section
docs/design/<section>/<slug>.md One doc per tool (hand-written / researched)
docs/design/people.md          Generated: design engineers worth following
data/catalogue.json            Raw Designeer scrape (tools + people); source of truth for what exists
data/index.json                Generated: every doc's frontmatter, flat
templates/tool-doc.md          The contract every tool doc follows
templates/worker-brief.md      Work order used to fan out doc research to agents
scripts/                       check-docs.ts, build-index.ts, find.ts, check-links.ts (Bun + TypeScript)
graphify-out/                  Knowledge graph of this repo (graph.json, GRAPH_REPORT.md)
```

## Commands

Bun is the package manager and runtime.

```bash
bun install                 # once
bun run check               # validate every doc against the catalogue + template (must pass)
bun run index               # regenerate all indexes and data/index.json from frontmatter
bun run find -- <text> [--section <slug>] [--paywall free|freemium|paid] [--tag x] [--stack react] [--agent] [--oss] [--json]
bun run links [-- <section>] # HTTP-check external links in docs (403/429 = bot-blocked, ignore)
bun run format              # prettier
```

## Rules

- Think before editing, keep changes minimal and surgical, and verify before
  claiming done: run `bun run check` and `bun run index` after touching any
  doc, then `bun run format`.
- **The template is the contract.** Every tool doc has the frontmatter keys and
  the nine H2 headings of [templates/tool-doc.md](templates/tool-doc.md), in
  order. `bun run check` enforces it.
- **Never invent facts.** Prices, URLs, package names, install commands and
  counts come from the official site, checked on the date in `last_verified`.
  If something is not published, write "Not published". When you update a
  fact, update `last_verified` and the "checked" date in Sources.
- **Generated files are never hand-edited**: `docs/design/README.md`,
  `docs/design/<section>/README.md`, `docs/design/people.md`,
  `data/index.json`. Change the doc frontmatter (or `data/catalogue.json`) and
  run `bun run index`.
- **Adding a tool:** add an entry to `data/catalogue.json` `tools[]` (with
  `doc` = `docs/design/<section_slug>/<slug>.md`), write the doc from the
  template, then `bun run index && bun run check`.
- **Paywall is about the tool, not the licence.** Open-source with a paid pro
  tier is `freemium`. Trial-only is `paid`. Check commercial / client-work
  licensing for paid assets (fonts, icon sets, templates) and note it.
- **No third-party assets in this repo.** Link to fonts, icons, screenshots and
  templates; never download or commit them. A private repo is still a copy.
- **No secrets.** Never commit API keys or tokens.
- Relative links between docs use `../<section_slug>/<slug>.md`.
- If `rtk` is installed, prefix every shell command with it (`rtk git status`);
  otherwise run commands as they are.
- Commit with conventional messages (`docs(icons): refresh lucide pricing`).

## Documents

| Read When                                                 | Document                                        |
| --------------------------------------------------------- | ----------------------------------------------- |
| Orienting in the repo, or using it on a project           | [docs/README.md](docs/README.md)                |
| Starting a new website design / choosing a stack          | [Design playbook](docs/PLAYBOOK.md)             |
| Browsing every section with counts                        | [Design catalogue](docs/design/README.md)       |
| Writing or refreshing a tool doc                          | [Tool doc template](templates/tool-doc.md)      |
| Fanning research out to worker agents                     | [Worker brief](templates/worker-brief.md)       |
| Branching, committing, or opening a pull request          | [Contributing](.github/CONTRIBUTING.md)         |
| Answering "which tools relate to X" across the repo       | `graphify-out/GRAPH_REPORT.md`, `/graphify query` |
| Refreshing the knowledge graph after doc changes          | `/graphify . --update`                          |
