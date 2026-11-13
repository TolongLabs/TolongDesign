# AGENTS.md

Instructions for coding agents working in this repository or using it as a
reference. The rules below apply to every task; the linked documents carry the
detail and are read when the task calls for them.

## Project

TolongDesign is TolongLabs' private **design starting point**: tools and
resources for designing anything beautifully and professionally — websites and
product UI, 3D, motion, type, comics and more. It is a documentation repository,
not an app: one Markdown doc per curated design tool or resource (component
libraries, galleries, icons, type, color, motion, shaders, 3D, comics, agents &
MCP, deploy, reading, and more), mostly scraped from
[Designeer](https://designeer.xyz), plus hand-picked additions, each researched
individually.

Every tool doc records the **source URL**, **paywall** (`free`, `freemium`,
`paid`, `unknown`), pricing, licence, **how to use** it (install commands and
snippets for code libraries, the tested workflow for apps), **examples**, when
to use it, agent notes, and alternatives. Indexes and `catalogue/index.json` are
generated from the docs' frontmatter.

Use it two ways:

1. **As a reference** for any TolongLabs design work: start at
   [docs/README.md](docs/README.md), pick tools with the
   [design playbook](skills/pick-design-stack/playbook.md), filter with
   `tolongdesign search` (checkout: `bun run design -- search …`). For a
   use-case-aware design task, invoke `design-project` and follow
   [the project design workflow](skills/design-project/workflow.md); retrieve
   complete source context with `bun run design`.
2. **As a repo to maintain**: add, refresh, or correct tool docs.

## Layout

```
docs/README.md                 Start here: what is in the repo and how to use it
skills/<name>/SKILL.md            Procedure an agent follows; consumer skills ship in the release
.claude/skills, .agents/skills  Symlinks to ../skills, one per agent harness
catalogue/README.md                 Generated: every section with counts
catalogue/tools/<section>/README.md Generated: one row per tool in the section
catalogue/tools/<section>/<slug>.md One doc per tool (hand-written / researched)
catalogue/research/<slug>.md        Research that supports catalogue choices
catalogue/people.md                 Generated: design engineers worth following
catalogue/catalogue.json            Designeer scrape plus hand-added tools (tools + people); source of truth for what exists
catalogue/index.json                Generated: every doc's frontmatter, flat
catalogue/SCHEMA.md                 Execution modes, surfaces, status and creator metadata
collections/<name>/            TolongLabs-owned design code: src, tests, demo, previews (see collections/README.md)
catalogue/TEMPLATE.md                 The contract every tool doc follows
skills/add-tool-doc/worker-brief.md   Work order used to fan out doc research to agents
scripts/                       check-docs.ts, build-index.ts, check-links.ts (Bun + TypeScript)
graphify-out/                  Knowledge graph of this repo (graph.json, GRAPH_REPORT.md)
```

## Commands

Bun is the package manager and runtime.

```bash
bun install                 # once
bun run check               # validate every doc against the catalogue + template (must pass)
bun run index               # regenerate all indexes and catalogue/index.json from frontmatter
bun run design -- search [<text>] [--section <slug>] [--paywall free|freemium|paid] [--tag x] [--stack react] [--mode registry,package] [--surface web-ui] [--include-unreachable] [--format card] [--agent] [--oss] [--json]
bun run links [-- <section>] # HTTP-check external links in docs (403/429 = bot-blocked, ignore)
bun run links -- --status --json # suggest resource status from primary URLs; never edits docs
bun run format              # prettier
```

## Rules

- Think before editing, keep changes minimal and surgical, and verify before
  claiming done: run `bun run check` and `bun run index` after touching any doc,
  then `bun run format`.
- **The template is the contract.** Every tool doc has the frontmatter keys and
  the nine H2 headings of [catalogue/TEMPLATE.md](catalogue/TEMPLATE.md), in
  order. `bun run check` enforces it. Read
  [resource metadata](catalogue/SCHEMA.md) before assigning execution modes,
  surfaces, status, stack or creator links.
- **Every doc must let an agent produce what the tool advertises.** "How to use"
  and "Agent notes" carry the concrete steps, inputs, formats, export hand-off
  and gotchas. For apps, run the core workflow yourself (a headless browser for
  web apps) and document the steps that worked.
- **Never invent facts.** Prices, URLs, package names, install commands and
  counts come from the official site, checked on the date in `last_verified`. If
  something is not published, write "Not published". When you update a fact,
  update `last_verified` and the "checked" date in Sources.
- **Generated files are never hand-edited**: `catalogue/README.md`,
  `catalogue/tools/<section>/README.md`, `catalogue/people.md`,
  `catalogue/index.json`. Change the doc frontmatter (or
  `catalogue/catalogue.json`) and run `bun run index`.
- **Adding a tool:** add an entry to `catalogue/catalogue.json` `tools[]` (with
  `doc` = `catalogue/tools/<section_slug>/<slug>.md`), write the doc from the
  template, then `bun run index && bun run check`.
- **Paywall is about the tool, not the licence.** Open-source with a paid pro
  tier is `freemium`. Trial-only is `paid`. Check commercial / client-work
  licensing for paid assets (fonts, icon sets, templates) and note it.
- **No third-party assets in this repo.** Link to fonts, icons, screenshots and
  templates; never download or commit them. A private repo is still a copy.
- **No secrets.** Never commit API keys or tokens.
- Relative links between docs use `../<section_slug>/<slug>.md`.
- Plans and specs go in issues and pull request bodies; scratch output goes in
  `.cache/`; no external tool writes under `docs/` or the catalogue.
- If `rtk` is installed, prefix every shell command with it (`rtk git status`);
  otherwise run commands as they are.
- Commit with conventional messages (`docs(icons): refresh lucide pricing`).

## Documents

| Read When                                                  | Document                                                |
| ---------------------------------------------------------- | ------------------------------------------------------- |
| Orienting in the repo, or using it on a project            | [docs/README.md](docs/README.md)                        |
| Changing product scope, requirements or acceptance         | [Product requirements](docs/PRD.md)                     |
| Changing retrieval, schemas, trust boundaries or packaging | [Technical reference](docs/TRD.md)                      |
| Starting a new website design / choosing a stack           | [Design playbook](skills/pick-design-stack/playbook.md) |
| Browsing every section with counts                         | [Design catalogue](catalogue/README.md)                 |
| Writing or refreshing a tool doc                           | [Tool doc template](catalogue/TEMPLATE.md)              |
| Fanning research out to worker agents                      | [Worker brief](skills/add-tool-doc/worker-brief.md)     |
| Building or changing a collection (our own design code)    | [Collections](collections/README.md)                    |
| Branching, committing, or opening a pull request           | [Contributing](.github/CONTRIBUTING.md)                 |
| Answering "which tools relate to X" across the repo        | `graphify-out/GRAPH_REPORT.md`, `/graphify query`       |
| Refreshing the knowledge graph after doc changes           | `/graphify . --update`                                  |
