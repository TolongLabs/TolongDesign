# Agent Retrieval Improvements

## Goal and authority

Resolve GitHub issues #6–#12 and their tracking issue #13. Agents must find tools
by what they produce and how they are used, receive short actionable results,
and retain access to complete source documents. The user requested an
orchestrator/reviewer workflow using OpenCode, Antigravity and River workers,
with at most 20 concurrent workers, and autonomous execution after designing
the workflow. This instruction replaces interactive planning/dispatch pauses
for this goal; it does not permit unverified claims or unrelated changes.

The initial baseline is commit `0b10971`: 441 registered docs, 64 passing tests,
zero doc errors and four pre-existing example-link warnings. The original
checkout has unrelated local graph changes and untracked files; leave them
untouched. Use an isolated integration worktree and isolated worker worktrees.

## Architecture and scope

Keep the Markdown documents authoritative. Indexes and section READMEs remain
generated. Use a shared typed vocabulary and validation helpers, one local
search scorer shared by both CLI entry points, pure Markdown extraction and
card rendering helpers, and a testable link-check classifier. No embeddings,
vector database, remote search, compatibility composer, inferred licence
approval, aesthetic metadata or unrelated refactoring.

Ship one reviewed integration PR linking all seven implementation issues.
Closing an issue requires its acceptance checks, not merely a worker report.
Do not close the tracking issue until all child requirements are delivered.

## Schema and migration (#7–#10)

- Add required `execution_mode`, `surface` and `status` frontmatter keys.
- `execution_mode` is one of `registry`, `package`, `snippet`, `mcp-skill`,
  `browser-app`, `reference`. It describes the primary documented workflow,
  not whether the site has a web page. Prefer the explicit How-to-use path:
  registry CLI adds source; dependency install is package; copied code is
  snippet; dedicated agent CLI/MCP/skill is mcp-skill; operating a browser app
  to generate/export content is browser-app; reading/browsing or manual
  desktop use is reference. Do not classify every gallery as a browser app.
- Keep `agent_friendly` as a compatibility field. Do not derive permission,
  cost, unattended automation support or licence approval from execution mode.
- `surface` is a nonempty list of documented output/use domains. Vocabulary:
  `web-ui`, `web-3d`, `cli-tui`, `email`, `pdf`, `video`, `og-image`, `audio`,
  `comics`, `desktop`, `print`, `reference`, `web-asset`, `development`,
  `hosting`, `mobile-ui`. `web-asset` covers badges, cursor decorations and
  other assets which are not UI component libraries. A resource can have more
  than one supported surface, but not a speculative list of all possible uses.
- `status` is `active`, `degraded` or `unreachable`. Active means the existing
  dated doc describes an available workflow without a recorded failure; it
  is not a claim of a fresh live check. Existing unavailable/replaced tools
  need coordinator live review and a dated body explanation. Unknown network
  or bot-blocking evidence must not automatically mark a tool unreachable.
- `stack` uses an explicit vocabulary built from the catalogue's observed
  technologies. Preserve specialized names rather than forcing them to React.
  Canonical aliases: `framer-motion` → `motion`, `radix-ui` → `radix`, `node`
  → `nodejs`, `workers` → `cloudflare-workers`, `postgres` → `postgresql`,
  `web` → `browser`. Query aliases work too. Unknown document stack values fail
  validation. Review shadcn-tagged docs and add shadcn to stack when the
  documented registry/compatibility supports it; do not infer from styling.
- Metadata workers emit JSON proposals with literal evidence quotes and section
  names, not edits. The coordinator validates coverage, verifies every quote
  against the source, reviews ambiguous cases, then applies frontmatter only.
  Preserve body text and `last_verified` unless facts are actually rechecked.

All seven comics tools must classify as browser-app with comics surface.
`--surface web-ui` within component-libraries must exclude termcn, emailcn,
pdfcn, framecn, ogimagecn, shieldcn, soundcn, cuelume and oneko.

## Search contract (#6)

Add a pure ranker accepting `{ id, name, meta, body }` records. It searches
name/identity, tags/stack, best_for, blurb and body as separate fields. Use
BM25-style term frequency and length normalization; calibrate field weights
against a committed set of real queries rather than prescribing purportedly
universal multipliers. Record the measured baseline and selected weights.

Use at least 20 queries across distinct domains, with relevant resource IDs
reviewed against their docs. Separate calibration queries from evaluation
queries. Report top-five recall for the old AND/alphabetic ordering and the new
ordering. Exact resource names must rank first. Motion libraries must precede
Blender for `smooth hero animation`. Support Unicode and punctuation, dedupe
query terms and use deterministic ID ties. Terms absent from the corpus must
not cause arbitrary recommendations; no-match queries return zero results.
Use partial term matches for natural language recall; retain literal substring
coverage where needed by existing callers. Filters run before ranking, and
ranking must not bypass them.

Both find and design search use this ranker. Preserve find's JSON array and
design search's `{ query, total, results }` JSON object, including provenance
and matched-term/excerpt fields. Add `--mode` (comma-separated OR), `--surface`
(comma-separated OR), `--include-unreachable`, and `--format card`; retain
section, stack, paywall, agent, oss, limit and existing show/context behavior.
Unreachable tools are hidden unless explicitly included. Empty find text
continues to list filtered resources; design search still requires text.
Invalid mode/surface/format/flag values return usage errors, not zero results.
Full-doc loaders and context packs continue to tolerate old fixture metadata;
required frontmatter is enforced by the maintenance validator.

## Install extraction and cards (#11)

Extract the first shell fence (`bash`, `sh` or `shell`) inside `## How to use`.
Do not leak a block from the next H2; handle CRLF, longer fences and backticks
inside code. Return `null` when no shell block exists. The generated `install`
field preserves the literal block; never execute it.

Cards contain name, ID, execution mode, install or source URL, one best_for
value and doc path. Bound text output to approximately 80 tokens (320 chars)
per result. Never truncate a shell command into a misleading executable
fragment: replace a long/multiline command with a pointer to the doc instead.
Keep complete commands in the machine-readable index. Reject incompatible
`--json --format card` explicitly. Test both entry points and release bundles.

## Availability reports (#10)

Preserve link checking and add opt-in `--status` with optional `--json` and
existing section selection. Check each registered resource's source_url, even
if it is absent from Markdown links. Emit suggested status, checked date,
request/final URL, HTTP code or error, and reason. Reports never edit docs.
2xx suggests active; 404/410, DNS or a checked provider paused-deployment
response suggest unreachable; temporary failures suggest degraded. 401/403/429
are blocked/undetermined, not unreachable. A 200 placeholder or replaced
product requires content review, never keyword-only automatic lifecycle edits.
Use bounded concurrency/timeouts and cancel or consume response bodies.

Recheck hexter-ui, butter-nav, curated-domains and sombra against live evidence.
Update their status and dates only after this review. Network tests use local
HTTP fixtures and deterministic error inputs; CI never needs live websites.

## Creator links (#12)

Extend Person with optional `created_tools: string[]` of exact section/slug IDs
and `created_tools_evidence`, an object keyed by each linked ID containing
`source_url`, `checked` and a literal attribution `quote`. No fuzzy name/host
join. Seed a small useful set only where official author/tool/repo attribution
can be verified. Leave other entries unchanged; absence is not proof they made
no tools. Validator checks IDs, duplicates, evidence coverage, URL and date.
Generated people Markdown links the person to tool docs and credit sources.

## Ownership and execution order

1. Coordinator defines contracts, writes spec/plan and runs baseline.
2. Independent builders: schema validation; ranking/eval; link reports;
   Markdown extraction/cards/people renderer. Disjoint files, tests first.
3. Six or fewer OpenCode metadata workers extract partitioned proposals. A
   River evidence worker collects official creator credits. Neither modifies
   application source, catalogue records or generated files.
4. Coordinator reviews modules/evidence and integrates doc migration; a bounded
   CLI integration worker wires the stable module interfaces and tests flags.
5. Coordinator reviews the entire diff, verifies all issue checks, refreshes
   generated indexes and graph, tests a packaged installation, opens a PR,
   waits for successful CI and ships within the user's end-to-end goal.

Workers never run git, change config, install global dependencies, or edit files
outside the exact work order. Each gets logs, time/turn caps and a report; an
exit code is not proof of delivery. Use at most six workers per backend and at
most 20 overall. Retry failed work once with a smaller brief, then handle or
report the exact limitation. No blind mass retries.

## Verification gate

Run `bun test`, `bun run index`, `bun run check`, `bun run format`,
`bun run format:check`, `bun run smoke:release` and the new search eval. Verify
index regeneration is idempotent. Run each issue's CLI example and negative
filter checks. Review new tests for real assertions and preserve the original
64-test behavior except the deliberately changed search ordering/semantics.
Check staged paths for downloaded assets, credentials, scratch files and
unrelated graph/repomix changes. Read live issue/PR state before publishing.
Record actual worker corrections, cost where available and residual limitations.
