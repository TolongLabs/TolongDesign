# Agent Retrieval Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans
> to implement this plan task by task. CLI workers expand fixed work orders;
> the coordinator owns design decisions, review and integration. Do not run git.

**Goal:** Resolve #6–#12 and #13 with evidence-backed metadata and useful local retrieval.

**Architecture:** Markdown stays authoritative; generated index fields remain derived.
Pure modules implement vocabulary validation, ranking, Markdown extraction,
compact cards and availability classification. Existing CLI loaders keep their
provenance and security checks.

**Tech Stack:** Bun 1.4+, TypeScript, existing yaml and prettier dependencies.

**Spec:** `docs/superpowers/specs/2026-10-15-agent-retrieval-issues-design.md`

## Global constraints

- No new product dependencies, embeddings, vector database or network search.
- At most six workers per backend and 20 overall; each has disjoint files.
- TDD: save and run a failing test before implementation, then run passing tests.
- Preserve unrelated original-checkout graph edits and all untracked files.
- No automatic lifecycle edits, creator inference or guessed compatibility.
- Workers never run git; coordinator reviews and commits exact paths.

## Review focus

1. Unknown/empty/duplicate flag values fail explicitly; old JSON shapes survive.
2. A blocked or replaced site must not silently become a valid active resource.
3. Export scripts and long install blocks must not become truncated commands.
4. Ranking must respect filters and absent terms, not recommend arbitrary tools.
5. Creator credits and metadata quotes must resolve to actual source evidence.

## Task 1: Vocabulary and validation (#7–#10, #12)

**Files:** create `scripts/catalogue-schema.ts`, `scripts/catalogue-schema.test.ts`;
modify `scripts/lib.ts`, `scripts/check-docs.ts`.

**Produces:**

```ts
export const EXECUTION_MODES = ['registry','package','snippet','mcp-skill','browser-app','reference'] as const
export const SURFACES = ['web-ui','web-3d','cli-tui','email','pdf','video','og-image','audio','comics','desktop','print','reference','web-asset','development','hosting','mobile-ui'] as const
export const STATUSES = ['active','degraded','unreachable'] as const
export const STACKS: readonly string[]
export function normalizeStack(value: string): string
export function validateResourceMeta(meta: Record<string, unknown>, path: string): string[]
export function validatePeople(people: unknown, tools: { section_slug: string; slug: string }[]): string[]
```

The explicit STACKS list is the existing index's observed stack values with the
six spec aliases canonicalized, plus `radix`. Do not add speculative names.
`validateResourceMeta` validates required new keys, exact enums, nonempty lists,
string members, duplicates and canonical stack spellings. Maintenance validation
requires canonical source values; CLI query normalization accepts aliases.

Person adds optional `created_tools` and `created_tools_evidence` as specified.
Frontmatter keys and template contract remain in lib; check-docs combines old
checks with these helper errors and validates people even when no tool changed.

- [ ] Write negative tests for unknown stack, old alias, empty/non-string surface,
  invalid mode/status, duplicate values and missing metadata.
- [ ] Run `bun test scripts/catalogue-schema.test.ts`; observe failures.
- [ ] Implement constants and validators, then wire into lib/check-docs.
- [ ] Test broken creator ID, mismatched/missing evidence, invalid URL/date and
  valid small fixture; run focused tests and full `bun test`.
- [ ] Report red/green commands and exact touched files; coordinator reviews.

## Task 2: Shared ranking and eval (#6)

**Files:** create `scripts/search-lib.ts`, `scripts/search-lib.test.ts`,
`scripts/search-eval.test.ts`, `scripts/fixtures/search-queries.json`.

**Produces:**

```ts
export type SearchDocument = { id: string; name: string; meta: Record<string, unknown>; body: string }
export type RankedDocument<T> = { document: T; score: number; matched_terms: string[] }
export function rankDocuments<T extends SearchDocument>(documents: T[], query: string): RankedDocument<T>[]
```

Keep the module pure. Empty query sorts by name then ID; nonempty query returns
only matches and sorts descending by score then ID. Use per-field BM25-style
normalization with identity/name, tags/stack, best_for, blurb and body. Repeated
terms do not duplicate matched_terms. Unicode case-folding and punctuation must
not crash; preserve useful literal substring matches. No resource-specific
boosts or hard-coded answers. Record weight candidates and measured calibration
results in the worker report; coordinator confirms the selected setting.

- [ ] Write a minimum 20-query fixture using actual catalogue IDs, split into
  calibration/evaluation. Include animation, dashboard, comics, email, PDF,
  terminal, type, icons, 3D, color and source-code exact names.
- [ ] Add synthetic tests: name match beats body-only, no match returns none,
  duplicated terms do not change rank, non-ASCII queries, stable ties.
- [ ] Run focused tests and observe failures; implement the scorer.
- [ ] Eval test computes recall@5 for old AND/alphabetic and new scorer on the
  actual catalogue. Assert improvement on the held-out partition and report
  both metrics. Test motion libraries above Blender for the issue's query.
- [ ] Run focused and full tests; report failures rather than hiding them.

Example real assertion:

```ts
const ranked = rankDocuments([
  { id: 'a/one', name: 'Animation', meta: {}, body: '' },
  { id: 'a/two', name: 'Other', meta: {}, body: 'animation '.repeat(200) }
], 'animation')
expect(ranked[0].document.id).toBe('a/one')
```

## Task 3: Link status suggestions (#10)

**Files:** create `scripts/link-check-lib.ts`, `scripts/link-check-lib.test.ts`;
modify `scripts/check-links.ts`.

**Produces:**

```ts
export type LinkObservation = { url: string; final_url: string | null; http_status: number | null; error: string | null; checked: string; paused?: boolean }
export type StatusSuggestion = LinkObservation & { suggested_status: 'active' | 'degraded' | 'unreachable' | null; reason: string }
export function suggestStatus(observation: LinkObservation): StatusSuggestion
```

Null suggestion means blocked/undetermined. Classify 2xx active, 404/410 or
confirmed DNS/paused provider response unreachable, transient timeout/5xx
and other inconclusive failures degraded. A generic HTTP 402 is not enough to
assert paused; inspect the known provider's response with bounded content.
Do not infer replacement/coming-soon from arbitrary keyword matches.

- [ ] Write tests for 200, 404, 410, 402 paused, generic 402, DNS, timeout, 503,
  401/403/429 and redirect final URL; observe failing output.
- [ ] Implement the pure classifier and local HTTP fixture tests for redirects,
  timeout/body handling. No live network in tests.
- [ ] Wire `--status`, `--json` and section selection into existing link script.
  Include frontmatter source URLs; retain existing broken/bot-blocked reporting.
- [ ] Run focused and full tests; save a live report for the four issue examples
  for coordinator review, without editing any docs.

## Task 4: Index extraction, cards and people renderer (#11, #12)

**Files:** create `scripts/index-fields.ts`, `scripts/index-fields.test.ts`,
`scripts/resource-card.ts`, `scripts/resource-card.test.ts`; modify
`scripts/build-index.ts`.

**Produces:**

```ts
export function extractInstall(markdown: string): string | null
export function renderPeopleRows(people: Person[], tools: CatalogueTool[]): string[]
export type CardInput = { id: string; name: string; doc: string; source_url: string | null; meta: Record<string, unknown> }
export function renderResourceCard(resource: CardInput): string
```

- [ ] Write parser tests for no H2, next-section fences, bash/sh/shell, CRLF,
  longer code fences, nested backticks and literal multiline commands; observe
  failing tests before writing the parser.
- [ ] Implement extraction from How-to-use only and derive `install` in index.
  Do not change generated files in this worker.
- [ ] Write card tests bounding per-result output to 320 characters. Render all
  required fields; preserve short commands whole and point long commands to
  the doc rather than clipping them. Test long names/IDs and missing values.
- [ ] Write people renderer tests: known IDs link to correct relative docs,
  missing created_tools renders no assertion, source credits render safely.
- [ ] Implement generator changes and run focused/full tests. No catalogue edits.

## Task 5: Evidence extraction and coordinator migration (#7–#10, #12)

**Files:** metadata workers create only their assigned JSON proposal/report
under an ignored `.worker_tmp/` directory. Coordinator modifies each registered
tool doc's frontmatter, `data/catalogue.json`, `templates/tool-doc.md`,
`templates/worker-brief.md`, and mirrored add-tool-doc/pick-design-stack skills.

Proposal per doc: `{ id, doc, execution_mode, surface, status, stack,
 evidence: { execution_mode: {section,quote}, surface: [{value,section,quote}],
 status: {section,quote}, shadcn: {section,quote}|null }, uncertainties: [] }`.
Every quote is a literal substring of the original Markdown. Workers read the
doc; no invented quotations and no full doc rewriting. Keep the existing
last_verified dates unless the coordinator rechecks a source.

- [ ] Partition all 441 IDs exactly once into six batches, keeping nearby docs
  together; dispatch OpenCode space-bunny with explicit rules and time caps.
- [ ] Validate JSON coverage and quote substrings. Review all ambiguities and
  mode/surface transitions; rerun a smaller batch once if malformed.
- [ ] Apply reviewed metadata with a source-preserving frontmatter patcher;
  dedupe aliases, inspect the complete diff and ensure body checksums unchanged.
- [ ] Recheck the four known-unavailable sites and date only those reviewed docs.
- [ ] River collects official credits for a bounded named candidate set. Review
  URLs, attribution quotes and existing tool IDs before adding creator records.
- [ ] Add vocabulary definitions to templates and maintenance instructions;
  add `--surface web-ui` to website stack selection in both mirrored copies.

## Task 6: CLI integration (#6, #8–#11)

**Files:** modify `scripts/design-lib.ts`, `scripts/design.ts`, `scripts/find.ts`,
`scripts/design-lib.test.ts`, `scripts/design-cli.test.ts`, `scripts/design.test.ts`;
add `scripts/find-cli.test.ts` if needed.

**Consumes:** Tasks 1–4's exact exported interfaces. The integration worker
starts only after those modules are reviewed and combined.

- [ ] Extend SearchOptions with `mode?: string`, `surface?: string`,
  `includeUnreachable?: boolean`, and `tag?: string` for find compatibility.
  Add tests for OR comma modes/surfaces, aliases, invalid values, filters and
  default exclusion, then run and observe failures.
- [ ] Filter Resources before calling rankDocuments with `body: markdown`.
  Preserve security/path validation and show/context behavior.
- [ ] Add CLI flags/format validation, preserving both existing JSON shapes;
  design search still requires text, find permits a bare filtered list.
- [ ] Add subprocess tests for both entry points, invalid flags, json/card
  conflict, 320-char cards and unchanged show/context commands.
- [ ] Run full tests; update only tests that deliberately assert the old search
  semantics and explain each change in the report.

## Task 7: Final review and delivery (#13)

**Files:** docs/CLI.md, docs/README.md and relevant maintenance docs; generated
indexes via their command; graph outputs through incremental extraction.

- [ ] Coordinator reads every source diff and reviews all newly added tests.
- [ ] Run `bun run index`, `bun run check`, `bun run format`,
  `bun run format:check`, `bun test`, and `bun run smoke:release`.
- [ ] Rerun index and compare hashes for idempotence; run live acceptance CLI
  examples for #6–#11 and verify creator links/credit sources for #12.
- [ ] Refresh graph only in integration worktree; original local graph untouched.
- [ ] Confirm staged files exclude downloads, secrets, scratch and unrelated data.
- [ ] Commit reviewed changes, read open/closed issues and PRs, open one PR with
  `Closes #6` through `Closes #12`. Do not add attribution lines.
- [ ] Verify CI and merge within the autonomous end-to-end goal. Update #13's
  checklist with shipped evidence and close it after every child is resolved.
- [ ] Verify remote main, issue states and report actual results/corrections.
