# Contributing To TolongDesign

TolongDesign is documentation. A change is good when every fact in it can be
traced to the tool's official site on the date it says, and `bun run check`
passes.

## The Two Rules

**Never invent a fact.** Prices, URLs, package names, install commands and
counts come from the official site. If it is not published, write "Not
published". Update `last_verified` whenever you re-check a doc.

**Never hand-edit generated files.** `docs/design/README.md`, every
`docs/design/<section>/README.md`, `docs/design/people.md` and
`data/index.json` come from `bun run index`.

## Workflow

1. `bun install`
2. Edit or add docs (see `.claude/skills/add-tool-doc/SKILL.md`).
3. `bun run index && bun run check && bun run format`
4. Commit with a conventional message, scoped by section:
   - `docs(icons): add phosphor`
   - `docs(component-libraries): refresh shadcn pricing`
   - `chore(scripts): add --stack filter to find`
5. Push a branch `<type>/<short-topic>` and open a pull request; a teammate
   reviews. Small doc fixes can go straight to `main`.

## Refresh Cadence

Pricing drifts. Before relying on a paid tool for a client project, re-check its
pricing page. A quarterly sweep re-runs the research fan-out with
[templates/worker-brief.md](../templates/worker-brief.md) over docs whose
`last_verified` is oldest.

## Working With AI Coding Agents

Agents read [AGENTS.md](../AGENTS.md) (Claude Code and Gemini via `CLAUDE.md` /
`GEMINI.md` imports). For bulk research, split `data/catalogue.json` into
batches and give each worker the worker brief plus its batch file; workers
write only the doc paths in their batch. Review with `bun run check` before
committing.

## Never Do These

- Commit downloaded fonts, icons, screenshots or template files.
- Commit API keys or tokens.
- Quote a price without a source link and date.
