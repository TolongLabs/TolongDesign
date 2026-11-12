# Repo restructure: design and delivery workflow

Status: approved direction, not started. Tracker:
[#25](https://github.com/TolongLabs/TolongDesign/issues/25). Baseline:
`27fe061`, 2026-11-13, 270 tests pass, `bun run check` reports 447/447 docs and
0 errors.

This file is the one exception to the rule in #26 that plans live in issues.
Workers need a brief they can read from a worktree. The pull request that closes
#25 deletes it.

## Intent

TolongDesign reads as a documentation repository. It must read, and work, as a
tool that coding agents use: a knowledge base, a retrieval engine that behaves
like a search engine, and procedures served on demand like skills. The CLI is
the first interface and MCP is the second.

## Goals

- A file's directory states who writes it, whether it ships, and whether search
  returns it.
- The engine is a library (`src/core`) with thin interfaces (`src/cli`,
  `src/mcp`).
- Search returns tool docs, research and skills.
- Adding a doc, a skill or a collection needs no edit to release tooling.

## Non-goals

- Changing catalogue content (#18 and #19 continue separately).
- Vector search, a hosted service, public npm publication.
- Bun workspaces or a `packages/` tree.

## Anti-goals

- A restructure that changes CLI output without saying so.
- A test count that drops because a worker deleted failing tests.
- Native-model quota spent on mechanical moves.

## Target layout

| Directory      | Holds                                                       | Ships                          | Search returns it         |
| -------------- | ----------------------------------------------------------- | ------------------------------ | ------------------------- |
| `catalogue/`   | Tool docs, research, registry, generated indexes            | Yes, all of it                 | Yes                       |
| `skills/`      | Procedures, one folder each                                 | Consumer skills                | Yes, after #33            |
| `collections/` | Our own design code, one self-contained package each        | No                             | Through its catalogue doc |
| `src/`         | The engine: `core/`, `cli/`, later `mcp/`                   | Bundled                        | No                        |
| `scripts/`     | Maintenance: index, check, links, release                   | No                             | No                        |
| `docs/`        | `product.md`, `architecture.md`, `cli.md`, assets, diagrams | `cli.md` as the package README | No                        |

```text
catalogue/
  tools/<section>/<slug>.md    was docs/design/<section>/
  research/<slug>.md           was docs/research/
  catalogue.json  index.json   was data/
  SCHEMA.md  TEMPLATE.md       was docs/METADATA.md, templates/tool-doc.md
  README.md  people.md         generated
skills/<name>/SKILL.md         one source; .claude/skills and .agents/skills are symlinks
collections/<name>/            own package.json and scripts
src/core/  src/cli/  src/mcp/
scripts/   scripts/release/
```

## Work items

Each issue holds its own problem statement, steps and acceptance checks. The
issue is the contract; this table adds order, batch and starting tier.

| Order | Issue                                                                            | Batch | Starts at | Why that tier                                       |
| ----- | -------------------------------------------------------------------------------- | ----- | --------- | --------------------------------------------------- |
| 1     | [#26](https://github.com/TolongLabs/TolongDesign/issues/26) hygiene              | 1     | Tier 1    | Ignore rules and deletions                          |
| 2     | [#27](https://github.com/TolongLabs/TolongDesign/issues/27) catalogue move       | 1     | Tier 1    | Mechanical move, verified by scripts                |
| 3     | [#28](https://github.com/TolongLabs/TolongDesign/issues/28) skills               | 1     | Tier 2    | Release builder and CI change with the move         |
| 4     | [#29](https://github.com/TolongLabs/TolongDesign/issues/29) engine split         | 1     | Tier 3    | Loader merge needs judgement; output must not move  |
| 5     | [#30](https://github.com/TolongLabs/TolongDesign/issues/30) one search command   | 2     | Tier 2    | Small behaviour change with tests                   |
| 6     | [#31](https://github.com/TolongLabs/TolongDesign/issues/31) collections          | 2     | Tier 1    | Script moves and command rewrites                   |
| 7     | [#32](https://github.com/TolongLabs/TolongDesign/issues/32) docs and payload     | 2     | Tier 2    | Prose consolidation plus a release rule             |
| 8     | [#33](https://github.com/TolongLabs/TolongDesign/issues/33) typed entries        | 3     | Tier 3    | New engine behaviour                                |
| 9     | [#34](https://github.com/TolongLabs/TolongDesign/issues/34) MCP server           | 3     | Tier 3    | New interface; one consult allowed before dispatch  |
| 10    | [#35](https://github.com/TolongLabs/TolongDesign/issues/35) frontmatter as truth | 3     | Tier 1    | Scripted migration; blocked on the owner's decision |

Batches 1 and 2 ship together as `0.3.0` because #27 changes the `doc` path in
JSON output and the installed layout.

## Decisions

Made by the owner:

- Restructure by role as in #25.
- Deliver through the worker ladder below, with stacked pull requests, one batch
  review by a worker, and automatic merge when gates pass.

Made by the orchestrator, open to change before Batch 1 starts:

- `catalogue/tools/`, not `catalogue/resources/`.
- Symlinks for skill mirrors. Fallback: one symlink per skill, then generated
  copies with a CI diff.
- MCP is the subcommand `tolongdesign mcp` in the same binary.
- Collection source and `knowledge/` stay checkout-only.
- Workers do not run git. The orchestrator commits, pushes and opens pull
  requests. A plain `mv` is enough; git detects the renames.

## Delivery workflow

### Roles

| Role         | Who                      | Does                                                                           | Never does                          |
| ------------ | ------------------------ | ------------------------------------------------------------------------------ | ----------------------------------- |
| Orchestrator | The main session         | Writes briefs, dispatches, runs gates, commits, opens and merges pull requests | Implements, or reads full diffs     |
| Implementer  | A worker from the ladder | Edits files in its worktree, runs the gates, writes a report                   | Runs git, or edits outside its list |
| Reviewer     | One worker per batch     | Reads the whole stack once, reports findings                                   | Edits files                         |
| Consultant   | Native model             | Answers one named question                                                     | Implements                          |

### The ladder

| Tier | Skill          | Model and effort                     | Mode                                                     | Use for                                    |
| ---- | -------------- | ------------------------------------ | -------------------------------------------------------- | ------------------------------------------ |
| 1    | `codex-fanout` | `gpt-6-luna`, `max`                  | `--dangerously-bypass-approvals-and-sandbox`             | Mechanical, fully specified work           |
| 2    | `meta-fanout`  | `muse-spark-1.3-contributor`, `high` | `META_PERMISSION_MODE=bypassPermissions`                 | Moderate judgement inside a clear contract |
| 3    | `agy-fanout`   | `gemini-4-hydrogen`, `high`          | `--dangerously-skip-permissions`, `--add-dir <worktree>` | Design-sensitive code, and batch review    |
| 4    | Native         | `opus-5.5`, `xhigh`                  | Read-only subagent                                       | Consult only                               |

Rules:

1. An issue starts at the tier in the work-items table.
2. A failed gate gets one retry at the same tier. The retry brief adds the
   failing output and names the defect.
3. A second failure climbs one tier. The new brief carries both failures.
4. After two failures at Tier 3, the orchestrator asks the consultant one
   question: the failing output, `git diff --stat` and the issue text. A Tier 3
   worker applies the answer.
5. If that fails, the batch stops. The orchestrator comments on the issue and
   names the assumption it now doubts. This is the only unplanned human stop.
6. One consult per issue. #34 may use its consult before dispatch, to check the
   server design against the MCP SDK.

Every dangerous-mode worker runs in its own throwaway git worktree under the
session scratch directory, never in the main checkout.
`muse-spark-1.3-contributor` is trained on by Meta; that is acceptable because
this repository is public. Each skill's own preflight runs once per batch
(`codex login status`, `meta-fanout/setup.sh`, `agy models`).

### Quota rules for the orchestrator

- Build each brief from a template: issue number, this spec's path, base branch,
  the files it may touch "and nothing else", the gates, the report format. Do
  not restate the issue; the worker reads it with `gh issue view`.
- Judge a worker by the gate output and the last 30 lines of its report. Do not
  read logs or diffs in full.
- Dispatch is serial inside a stack, because each branch starts from the tip of
  the one below. Parallel dispatch, up to six, applies only inside one issue
  with disjoint files (#35 step 1) and to #33 and #35 in Batch 3.

### Gates

The orchestrator runs these in the worktree after every worker and before every
push. All must pass.

```bash
bun install --frozen-lockfile
bun test                                  # case count must not drop; 270 at baseline
bun run check                             # 447/447 docs, 0 errors
bun run index && git diff --exit-code     # generated files are current
git diff --name-only main... | grep -E '\.(md|json|ts)$' | xargs bunx prettier --check
bun run build:release && bun run smoke:release "release/tolong-design-$(bun -e 'process.stdout.write(require("./package.json").version)').tgz"
bun run typecheck                         # from #29 onward
```

Golden output: before Batch 1, save the output of these commands to
`.cache/golden/`. After each issue, the output must match, apart from the
`docs/design/` to `catalogue/tools/` prefix after #27. The comparison ends at
#30, which changes search on purpose.

```bash
bun run design -- search scroll --section motion --json
bun run design -- show gsap
bun run design -- context gsap saaspo --json
bun run find -- --section icons --paywall free --json
```

### Stack, review, merge

1. **Stack.** One branch and one pull request per issue, named
   `<type>/<issue>-<topic>`. The first targets `main`; each next one targets the
   branch below it. The body follows the house pull request format and says
   `Closes #N`.
2. **Review.** When the batch's stack is complete and every gate is green, one
   Tier 3 reviewer reads the stack in a read-only worktree at its tip. It checks
   each issue's acceptance list, files changed outside the brief, weakened or
   deleted tests, invented facts in docs, and leftover old paths. It writes one
   findings table: pull request, severity (`blocking` or `note`), file,
   evidence. A pull request written at Tier 3 is reviewed at Tier 2 instead, so
   no model reviews its own work.
3. **Fix.** A blocking finding goes to a worker one tier above the author, on
   that branch. The orchestrator rebases the branches above it and reruns the
   gates. Notes are posted on the pull request and do not block.
4. **Merge.** Bottom-up, when the gates pass, the `Verify` workflow is green and
   no blocking finding is open: `gh pr merge <n> --merge --delete-branch`.
   GitHub retargets the next pull request to `main`; wait for its `Verify` run,
   then merge it. Use merge commits, not squash, so the stack does not need a
   rebase between merges.
5. **Close.** Tick the issue in #25 and remove the worktrees.

### Human touchpoints

Approval of this spec is the standing answer for every dispatch it names: the
chunks, the worker CLI, the model, the effort and the mode. It replaces the
per-dispatch question in the fan-out skills for this project only.

| When                    | What the owner does                        |
| ----------------------- | ------------------------------------------ |
| Start of each batch     | Says "go"                                  |
| Before #35              | Says yes or no to retiring the registry    |
| After Batch 2 is merged | Tags `v0.3.0`, which publishes the release |
| A batch stops (rule 5)  | Reads the comment and decides              |

Nothing else needs the owner.

## Left to the builder

- File names inside `src/core` beyond those listed in #29.
- The wording of AGENTS.md, `product.md` and `architecture.md`, within the
  one-home-per-fact rule in #32.
- Test layout, provided no test case is lost.
