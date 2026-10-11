# Project design workflow

## Intent and authorization

TolongLabs needs private, use-case-aware tool selection and enough source
context for its existing coding agent to implement and verify ambitious designs.
The first acceptance scenario is a dictation-app landing page with 3D, parallax,
storytelling, and SEO. This change builds the workflow, not that website.

The user approved this direction and authorized autonomous AFK delivery, Codex
workers on `gpt-6-luna` with `max` effort, a feature branch, and a pull request.
The main agent owns architecture and skill design. The AFK instruction replaces
interactive spec/plan review gates; those reviews remain explicit self-reviews,
not claimed human approvals.

## Approach

Add a read-only Bun CLI and a model-discoverable `design-project` skill mirrored
in `.claude/skills/` and `.agents/skills/`. Keep `bun run find` compatible. The
existing agent reasons about the brief; the CLI performs deterministic local
retrieval and complete context assembly. No model API, network access, hidden
ranking judgment, target-project mutation, skill installation, or asset download
runs inside the CLI.

Jev was considered for semantic ranking. It adds no value inside an agent turn
that already has the brief and judgment capability. Lexical search is explicitly
retrieval evidence, not a relevance-confidence score or final recommendation.

## CLI contract

Entry point: `bun run design -- <command>`. Use a source-relative catalogue root
so the absolute script also works from a separate target-project directory.

| Command                                     | Output                                       |
| ------------------------------------------- | -------------------------------------------- |
| `search <text> [filters] [--json]`          | Literal full-document matches and evidence   |
| `show <slug-or-section/slug> [--json]`      | The entire original Markdown document        |
| `context <id>... [--brief <text>] [--json]` | Complete documents and a provenance manifest |

Search filters: `--section`, `--stack`, `--paywall`, `--agent`, `--oss`,
`--limit` (positive integer, default 10). Values and terms are case-insensitive.
Free text requires every whitespace-delimited term somewhere in the document or
its metadata; the agent decomposes long briefs into several targeted searches.
Order is stable by tool name then section/slug. No implicit gallery exclusion.
Validate flags, missing values, enum values, limits, unexpected positional args,
and ambiguous or unknown IDs. Exit 2 for usage errors, 1 for data/read failures,
0 for valid empty searches. Errors go to stderr; JSON stdout is parseable.

`search --json` returns `{ query, total, results }`; each result contains `id`,
`name`, `section_slug`, `slug`, `paywall`, `agent_friendly`, `source_url`,
`last_verified`, `doc`, `matched_terms`, and `excerpt`. Excerpts are navigation
evidence only. `total` is measured before the limit. No text prints before JSON.

`show --json` returns one complete record. `context --json` returns
`{ schema_version: 1, brief, resources, warnings }`. Complete resource records
contain `id`, `name`, `section_slug`, `slug`, `doc`, `source_url`,
`last_verified`, `sha256`, and `markdown` (the original file including YAML).
Preserve request order and deduplicate IDs. A manifest records the original doc
path, source URL, verification date, and SHA-256 of its exact UTF-8 contents.
Warn on unknown paywall, paid/freemium licensing checks, absent/invalid/future
or older-than-90-day verification dates. Mark all supplied docs as reference
data, not instructions overriding project or user policy. Never truncate a
context pack silently. Reject context assembly if any requested document is
missing.

Export the library functions `loadResources(root)`,
`searchResources(resources, query, options)`, `resolveResource(resources, id)`,
`buildContext(resources, ids, brief?, now?)`, and `renderContext(pack)` from
`scripts/design-lib.ts`. `loadResources` uses `data/catalogue.json` for
registered paths and the actual Markdown/frontmatter for content, not a stale
generated index. Validate containment under `docs/design/`, reject symlink
escapes, and never resolve user IDs as arbitrary filesystem paths. Imported
modules do not run the CLI. Main entry point catches errors with stable exit
codes.

`SearchOptions` uses `{ section?, stack?, paywall?, agent?, oss?, limit? }`.
`searchResources` returns the same object as search JSON. `buildContext` accepts
`now: Date` for deterministic warning tests. Export `UsageError` and `DataError`
classes so the CLI can distinguish validation from source failures without
matching error strings. Resource records also retain `meta` for filtering;
context JSON resources contain only the complete-record fields listed above.
Markdown context wraps each full raw doc in a fence longer than any backtick
sequence in that doc, so embedded examples remain intact reference material.

## Agent workflow

The skill routes new and existing project design briefs through five evidence
stages: brief/constraints, references, visual direction, implementation context,
and rendered verification. Each stage ends in a concrete completion criterion.
It must inspect target project rules, stack, existing components, and design
system before recommending replacements. Use existing project conventions;
PLAYBOOK defaults only fill genuinely unspecified new projects.

References include galleries whose `agent_friendly` is false. Inspect visible
images and live interactions with available browser/image tools; otherwise ask
for supplied references and mark visual evidence unavailable. Extract
principles, not protected assets. Static mockups do not specify 3D camera or
scroll behavior.

Treat image-to-code as an optional image-first companion: generate original
references, analyze them, then implement. It neither browses galleries nor
replaces SEO, accessibility, motion, or browser verification. Explicit approval
is required before installing external skills, sending private material to an
image service, or using paid assets. Link upstream rather than vendor its skill.

Full context means all selected local docs plus task-relevant current official
source guidance and compatibility checks. Record unresolved facts; avoid source
claims unsupported by the documents. Do not treat price verification dates as
API-version guarantees. Build in the target project only after its approvals.

Review actual desktop/mobile renders and key scroll positions against the brief
and approved references. Require semantic crawlable content, metadata, keyboard
paths, reduced motion, meaningful mobile fallback, measured loading behavior,
and visual revisions. A passing build does not imply visual quality or rankings.

## Documentation and collection

Add `docs/WORKFLOW.md`, a dictation acceptance scenario, and one tool doc for
the upstream image-to-code skill. Add its catalogue entry and regenerate
indexes. Point to the workflow from existing entry docs and the existing
stack-selection skill, preserving identical `.agents/` and `.claude/` mirrors.

## Verification and boundaries

Bun tests cover body-only retrieval, galleries, filters, all validation
branches, ambiguous IDs, full content and hashes, no silent omissions, warning
dates, path/symlink containment, clean JSON, and running from another cwd. Test
the registered corpus to retrieve GSAP for scroll storytelling and React Three
Fiber for React 3D, then assemble those docs with a gallery and the companion
skill.

The scenario requires real browser/image evidence to call a website visually
verified; this feature's deterministic tests prove only retrieval and handoff.
Run `bun test`, `bun run check`, `bun run index`, and `bun run format`; review
the diff for unrelated formatter churn and third-party assets. Do not report the
example website as built. Preserve the user's pre-sync graph stash.
