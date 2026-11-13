# AGENTS.md

Instructions for coding agents working in this repository or using it as a
reference. The rules below apply to every task; the linked documents carry the
detail and are read when the task calls for them.

## Project

TolongDesign is TolongLabs' knowledge base plus a retrieval engine: one
researched Markdown doc per curated design tool or resource (component
libraries, galleries, icons, type, color, motion, shaders, 3D, comics, agents &
MCP, deploy, reading, and more), served by a local CLI today and MCP next. It is
not a design generator: the catalogue supplies evidence, the target project's
human or agent supplies judgment, implementation and rendered verification.

Every tool doc records the **source URL**, **paywall** (`free`, `freemium`,
`paid`, `unknown`), pricing, licence, **how to use** it (install commands and
snippets for code libraries, the tested workflow for apps), **examples**, when
to use it, agent notes, and alternatives. Indexes and `catalogue/index.json` are
generated from the docs' frontmatter.

**Glossary.** A **catalogue** entry describes someone else's tool. A
**collection** is our own design code. A **skill** is a procedure an agent
follows.

Use it two ways:

1. **As a reference** for any TolongLabs design work: start at the
   [repository README](README.md), pick tools with the
   [design playbook](skills/pick-design-stack/playbook.md), filter with
   `tolongdesign search` (checkout: `bun run design -- search …`). For a
   use-case-aware design task, invoke `design-project` and follow
   [the project design workflow](skills/design-project/workflow.md); retrieve
   complete source context with `bun run design`.
2. **As a repo to maintain**: add, refresh, or correct tool docs.

## Layout

A file's directory answers three questions: who writes it, does it ship, can
search return it.

| Directory      | Holds                                                                                                  | Ships in the release                 | Search returns it         |
| -------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------------- |
| `catalogue/`   | Knowledge: tool docs, research, registry, generated indexes                                            | Yes, all of it                       | Yes                       |
| `skills/`      | Procedures an agent follows, one folder each                                                           | Consumer skills                      | Yes, after #33            |
| `collections/` | Our own design code, one self-contained package each                                                   | No                                   | Through its catalogue doc |
| `src/`         | The engine: `core/`, `cli/`, later `mcp/`                                                              | Bundled                              | —                         |
| `scripts/`     | Maintenance: index, check, links, release                                                              | No                                   | —                         |
| `docs/`        | Three pages about this repo: `product.md`, `architecture.md`, `cli.md`, plus `assets/` and `diagrams/` | Only `cli.md`, as the package README | —                         |

```
catalogue/tools/<section>/<slug>.md One doc per tool (hand-written / researched)
catalogue/research/<slug>.md        Research that supports catalogue choices
catalogue/people.json               Hand-maintained people and creator-credit data
catalogue/designeer-scrape.json     Frozen Designeer scrape; archival, never read at runtime
catalogue/SCHEMA.md                 Field meanings: execution modes, surfaces, status and creator metadata
catalogue/TEMPLATE.md               The contract every tool doc follows
catalogue/README.md                 Generated: every section with counts
catalogue/tools/<section>/README.md Generated: one row per tool in the section
catalogue/people.md                 Generated: design engineers worth following
catalogue/index.json                Generated: every doc's frontmatter, flat
skills/<name>/SKILL.md              Procedure an agent follows; consumer skills ship in the release
.claude/skills, .agents/skills      Symlinks to ../skills, one per agent harness
collections/<name>/                 TolongLabs-owned design code (see collections/README.md)
skills/add-tool-doc/worker-brief.md Work order used to fan out doc research to agents
src/core/, src/cli/                 The retrieval engine and its CLI
scripts/                            check-docs.ts, build-index.ts, check-links.ts, release/ (Bun + TypeScript)
docs/                               product.md, architecture.md, cli.md, assets/, diagrams/
graphify-out/                       Knowledge graph of this repo (graph.json, GRAPH_REPORT.md)
```

## Commands

Bun is the package manager and runtime.

```bash
bun install                 # once
bun run check               # validate every doc against the catalogue + template (must pass)
bun run index               # regenerate all indexes and catalogue/index.json from frontmatter
bun run design -- search [<text>] [--kind tool|research|skill] [--section <slug>] [--paywall free|freemium|paid] [--tag x] [--stack react] [--mode registry,package] [--surface web-ui] [--include-unreachable] [--format card] [--agent] [--oss] [--json]
bun run design -- show <id> [--json] # tool, research/<slug> or skill/<name>
bun run design -- context <id...> --brief "<text>" [--json]
bun run design -- skill list [--json]
bun run design -- skill show <name> [--json]
bun run design -- mcp # start the read-only MCP stdio server
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
  [resource metadata](catalogue/SCHEMA.md) for field meanings before assigning
  execution modes, surfaces, status, stack or creator links.
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
  `catalogue/index.json`. Change the doc frontmatter (or `catalogue/people.json`
  for people data) and run `bun run index`.
- **Adding a tool:** write one doc at
  `catalogue/tools/<section_slug>/<slug>.md`. The path sets its section and
  slug; display names come from `src/core/sections.ts`. Then run
  `bun run index && bun run check`.
- **Paywall is about the tool, not the licence.** Open-source with a paid pro
  tier is `freemium`. Trial-only is `paid`. Check commercial / client-work
  licensing for paid assets (fonts, icon sets, templates) and note it.
- **No third-party assets in this repo.** Link to fonts, icons, screenshots and
  templates; never download or commit them. The repo is public, so a copy here
  is still a copy.
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
| Orienting in the repo, or using it on a project            | [Repository README](README.md)                          |
| Changing product scope, requirements or acceptance         | [Product requirements](docs/product.md)                 |
| Changing retrieval, schemas, trust boundaries or packaging | [Technical reference](docs/architecture.md)             |
| Installing, updating or diagnosing the CLI                 | [CLI guide](docs/cli.md)                                |
| Starting a new website design / choosing a stack           | [Design playbook](skills/pick-design-stack/playbook.md) |
| Browsing every section with counts                         | [Design catalogue](catalogue/README.md)                 |
| Writing or refreshing a tool doc                           | [Tool doc template](catalogue/TEMPLATE.md)              |
| Fanning research out to worker agents                      | [Worker brief](skills/add-tool-doc/worker-brief.md)     |
| Building or changing a collection (our own design code)    | [Collections](collections/README.md)                    |
| Branching, committing, or opening a pull request           | [Contributing](.github/CONTRIBUTING.md)                 |
| Answering "which tools relate to X" across the repo        | `graphify-out/GRAPH_REPORT.md`, `/graphify query`       |
| Refreshing the knowledge graph after doc changes           | `/graphify . --update`                                  |
