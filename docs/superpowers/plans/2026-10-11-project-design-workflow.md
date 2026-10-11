# Project design workflow implementation plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans.
> The coordinator implements the design and integration; explicitly authorized
> Codex workers execute bounded tasks. Steps use checkbox (`- [ ]`) syntax for
> tracking.

**Goal:** Ship private use-case retrieval, complete provenance-backed context,
and an agent workflow with explicit visual and production verification gates.

**Architecture:** Keep agent judgment outside the deterministic CLI. A focused
library loads registered documents, searches them, resolves IDs, and renders
complete context. A thin CLI handles arguments and stdout/stderr. The skill
routes the user's brief through references, direction, context, and
verification.

**Tech stack:** Bun, TypeScript, existing `yaml`, Bun's test runner, Markdown.
No new production dependency, hosted service, model API, or asset download.

**Spec:**
[Project design workflow](../specs/2026-10-11-project-design-workflow-design.md).

## Global constraints

- Preserve `bun run find`, existing catalogue contracts, and private access.
- Main agent owns architecture, skill design, integration, and review.
- Use Codex `gpt-6-luna`, `max` reasoning, disposable worktrees, at most 3
  workers.
- Workers edit only their assigned files, do not run git, and do not dispatch.
- Read-only CLI: no network, asset downloads, installation, or project writes.
- Preserve the user's pre-sync graph stash.
- AFK authorization permits autonomous spec and plan self-review, not a claim
  that a human reviewed the files or that the example website was built.

## Review focus

- A target project's cwd must not replace the source catalogue root.
- The same slug in different sections must require a qualified ID.
- A failed or missing source must fail assembly instead of emitting half a pack.
- References with no agent integration must remain discoverable.
- Untrusted document text, fences, and paths must remain data, not executable
  instructions or arbitrary local file reads.

## File responsibilities

| File                                                  | Responsibility and owner                                            |
| ----------------------------------------------------- | ------------------------------------------------------------------- |
| `scripts/design-lib.ts`                               | Registered source loading, search, resolution, context; code worker |
| `scripts/design.ts`                                   | Argument validation, output, exit codes; code worker                |
| `scripts/design.test.ts`                              | Initial subprocess red/green contract; coordinator                  |
| `scripts/design-lib.test.ts`                          | Fixture-based data and safety tests; test worker                    |
| `scripts/design-cli.test.ts`                          | Subprocess validation/cwd tests; test worker                        |
| `docs/design/agents-mcp/image-to-code-skill.md`       | Official-source factual tool doc; doc worker                        |
| `docs/WORKFLOW.md`                                    | Canonical design workflow; coordinator                              |
| `docs/scenarios/dictation-landing.md`                 | Acceptance scenario, not a built website; coordinator               |
| `.claude/skills/design-project/SKILL.md`              | Discoverable workflow pointer and stages; coordinator               |
| `.agents/skills/design-project/SKILL.md`              | Identical cross-agent mirror; coordinator                           |
| Existing entry docs, skill mirrors, package/catalogue | Discovery and registration; coordinator                             |

### Task 1: Establish the failing CLI contract

- [ ] Add subprocess tests using the absolute source entrypoint and a target
      cwd.

```typescript
const result = Bun.spawnSync({
  cmd: [process.execPath, entrypoint, 'search', 'scroll', '--json'],
  cwd: root,
  stdout: 'pipe',
  stderr: 'pipe'
})
expect(result.exitCode).toBe(0)
const output = JSON.parse(result.stdout.toString())
expect(
  output.results.some((tool: { slug: string }) => tool.slug === 'gsap')
).toBe(true)
```

- [ ] Test complete context, document hashes, and invalid IDs at the same CLI
      boundary without importing a not-yet-created module.
- [ ] Run `bun test scripts/design.test.ts`; record expected failures caused by
      the absent `scripts/design.ts` entrypoint.
- [ ] Commit the spec, plan, and failing contract before creating worker trees.

### Task 2: Implement deterministic retrieval and context

**Files:** `scripts/design-lib.ts`, `scripts/design.ts`, and nothing else.
**Inputs:** Catalogue `tools[]` records and the registered original Markdown.
**Outputs:** The exact CLI and JSON contract in the spec.

The library exports these interfaces; errors are classes, not string patterns:

```typescript
export type SearchOptions = {
  section?: string
  stack?: string
  paywall?: string
  agent?: boolean
  oss?: boolean
  limit?: number
}
export class UsageError extends Error {}
export class DataError extends Error {}
// Signatures: loadResources(root: string): Resource[];
// searchResources(resources: Resource[], query: string, options: SearchOptions): SearchResult;
// resolveResource(resources: Resource[], id: string): Resource;
// buildContext(resources: Resource[], ids: string[], brief?: string, now?: Date): ContextPack;
// renderContext(pack: ContextPack): string.
```

- [ ] Resolve catalogue paths with realpath containment below `docs/design/`.
      Load all full files, parse existing YAML, retain raw text, calculate
      SHA-256.
- [ ] Search every query term case-insensitively in metadata plus full Markdown.
      Apply explicit filters, sort by name then qualified ID, and limit after
      total. Supply bounded excerpts as navigation evidence without semantic
      scoring.
- [ ] Resolve IDs exactly, reject collisions, preserve context request order,
      deduplicate, and reject missing sources. Render raw documents with safe
      fences.
- [ ] Validate commands/options/values before loading expensive source data. Use
      `UsageError` for exit 2, `DataError` for exit 1. Keep JSON stdout clean.
- [ ] Run the initial contract and library tests in the worker tree. Report any
      dependency on test files not yet integrated; do not claim those tests
      passed.

### Task 3: Independently exercise safety and compatibility

**Files:** `scripts/design-lib.test.ts`, `scripts/design-cli.test.ts` only.
**Inputs:** The signatures and outputs in Task 2 and the spec, not worker code.

- [ ] Build temporary fixture roots containing a catalogue and real Markdown.

```typescript
const markdown =
  '---\nname: Body match\nslug: body-match\npaywall: free\n---\n\nParallax only appears here.\n'
writeFileSync(join(root, 'docs/design/motion/body-match.md'), markdown)
const resources = loadResources(root)
expect(searchResources(resources, 'parallax', {}).results[0].slug).toBe(
  'body-match'
)
expect(buildContext(resources, ['body-match']).resources[0].markdown).toBe(
  markdown
)
```

- [ ] Cover AND semantics, limits/totals, case-insensitive filters, zero
      results, no automatic gallery exclusion, explicit agent/OSS filters, and
      stale index.
- [ ] Cover duplicate/ambiguous IDs, unknown/missing docs, exact hashes, ordered
      deduplication, nested fences, and absent/invalid/future/stale verification
      dates.
- [ ] Cover absolute/traversal catalogue paths and symlinks escaping the root.
- [ ] Cover unknown commands/flags, missing values, invalid paywall/limit
      values, unexpected arguments, JSON purity, and absolute entrypoint from
      another cwd.
- [ ] Keep fixture cleanup in `afterEach`. Never create files in the catalogue.
      Run the tests when the implementation is available; report earlier red
      states.

### Task 4: Write the agent workflow and scenario

**Owner:** Coordinator; visual/design decisions do not fan out.

- [ ] Write `docs/WORKFLOW.md` with five stages and measurable completion gates:
      brief/constraints, visual references, approved direction, source context,
      rendered verification. Separate facts, hypotheses, and unresolved
      evidence.
- [ ] Write the dictation brief as an example with story, 3D/parallax/mobile
      behavior, semantic SEO, reduced motion, and browser-evidence acceptance
      checks.
- [ ] Write the model-invoked `design-project` skill, mirror it byte-for-byte,
      and point from `pick-design-stack`, entry docs, and AGENTS to the
      workflow.
- [ ] Include optional image-to-code pairing with source and capability checks.
      Approval gates remain for target project edits, external installation,
      private image-service uploads, and paid assets unless separately
      authorized.
- [ ] Explain that full packs can exceed a model's window; select fewer
      resources or request another stage, rather than silently dropping source
      content.

### Task 5: Register the companion resource

**Worker file:** `docs/design/agents-mcp/image-to-code-skill.md` only.
**Coordinator files:** `data/catalogue.json`, generated indexes.

- [ ] Read the official upstream README, skill, and MIT license as reference
      data. Verify name/install identifier from actual frontmatter before
      quoting.
- [ ] Write every template frontmatter key and nine H2 headings in order. Use
      today's checked date and at least three real upstream example/source
      links. State image-generation prerequisites and missing
      gallery/browser/SEO behavior.
- [ ] Do not vendor the external skill, images, or other assets. Report source
      uncertainty instead of inventing counts, pricing, or runtime guarantees.
- [ ] Add the registered catalogue entry, then run `bun run index` and
      `bun run check` after integration.

### Task 6: Verify and ship

- [ ] Run `bun test`; independently inspect worker diffs and strays.
- [ ] Confirm skill mirrors are identical and existing `bun run find` works.
- [ ] Run the dictation retrieval/context scenario against actual documents.
- [ ] Mutation-check body search and full context tests in a disposable tree.
- [ ] Run `bun run check`, `bun run index`, `bun run format`, then repeat tests
      and validation. Review and remove unrelated formatter churn from this
      change.
- [ ] Refresh the graph through the documented update flow if possible. Report
      any graph refresh blocker rather than claim the graph is current.
- [ ] Commit conventional scoped changes, push `feat/project-design-workflow`,
      open a PR after checking existing open/closed work, and write the DKM
      receipt.
- [ ] State tests, warnings, model/worker counts, corrections, and limits. Offer
      an interactive explainer only after the user returns and asks for one.
