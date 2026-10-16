# Technical reference

**As-built reference, checked against source baseline `2e10faa` (2026-10-15).**
This document explains implementation and operating boundaries, not a proposed
hosted architecture. Documentation assets added with this guide do not change
retrieval behavior. [Product requirements](./PRD.md) describe the product's
purpose and quality bar; [CLI.md](./CLI.md) is the installation/runbook guide.

## Contents

| System                   | Reference                                                                                                                                           |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Architecture and data    | [Runtime](#runtime-architecture) · [Authority](#source-authority) · [Schema](#resource-and-creator-schema)                                          |
| Retrieval and interfaces | [Loading](#resource-loading) · [Ranking](#search-and-ranking) · [CLI](#cli-contracts) · [JSON](#machine-readable-contracts)                         |
| Maintenance              | [Generation](#index-generation) · [Availability](#availability-review) · [Skills](#agent-handoff) · [Graph](#knowledge-graph)                       |
| Delivery and assurance   | [Release](#release-and-installation) · [Trust](#security-and-privacy) · [Tests](#verification-and-ci) · [Recovery](#operations-and-troubleshooting) |

## Runtime architecture

TolongDesign is a **documentation repository plus a local Bun/TypeScript CLI**.
There is no application server, remote search index, database service or model
call on the retrieval path.

[![The CLI calls a source-file loader, an in-memory ranker or a context builder, and writes results to stdout. Only the loader reads catalogue documents.](./diagrams/system-architecture.svg)](./diagrams/system-architecture.html)

| Layer             | Owner                                                   | Responsibility                                                                                             |
| ----------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Command handling  | `design.ts`, `find.ts`, `cli-lib.ts`                    | Parse arguments, select operations, write stdout/stderr and exit status.                                   |
| Resource loading  | `design-lib.ts`                                         | Resolve the selected root, read registration and document bytes, parse metadata and hash source bytes.     |
| Retrieval         | `design-lib.ts`, `search-lib.ts`                        | Apply filters and score in-memory resources. No direct file/network I/O in the scorer.                     |
| Context and cards | `design-lib.ts`, `resource-card.ts`                     | Full source hand-off or bounded navigation output.                                                         |
| Maintenance       | `build-index.ts`, `check-docs.ts`, `check-links.ts`     | Generate views, validate content and report external-link observations. These are separate from retrieval. |
| Distribution      | `release-lib.ts`, `release-info.ts`, `smoke-release.ts` | Build an allowlisted private package, inspect installation integrity and test isolated installation.       |

A request uses the root relative to the executing entrypoint: checkout
`scripts/design.ts` or installed `dist/design.js`. It does not select a new
catalogue merely because the caller changed into another project.

## Source authority

| Path                                                  | Authority / lifecycle                                                                                                                                  |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `data/catalogue.json`                                 | Hand-maintained registration and scraped/curated provenance. `tools[]` identifies resources; `people[]` records creators and optional credit evidence. |
| `docs/design/<section>/<slug>.md`                     | Authored resource facts, frontmatter, procedure, examples, rights, gotchas and sources.                                                                |
| `templates/tool-doc.md` + `catalogue-schema.ts`       | Document and metadata contract. The template is the authoring interface; the schema is executable validation.                                          |
| `data/index.json`                                     | Generated metadata plus derived `install`; useful for consumers, but **not the authority used by runtime search**.                                     |
| `docs/design/README.md`, section READMEs, `people.md` | Generated human-readable views. Regenerate instead of editing.                                                                                         |
| `graphify-out/`                                       | Derived relationship/discovery aid. It is neither a runtime dependency nor proof of compatibility or factual correctness.                              |
| `release-manifest.json`                               | Build-generated payload hashes and version/resource-count record for an installed snapshot.                                                            |

The generator and runtime loader resolve a few fields differently: generation
uses catalogue identity/source fields to construct index rows, while runtime
resources can prefer nonempty frontmatter `name` and `source_url`. The
maintenance validator requires matching registration where specified. Do not
rely on intentional divergence between the sources.

## Resource and creator schema

Stable resource identity is `section_slug/slug`; `doc` is a registered path
under `docs/design/`. Required frontmatter keys and the nine ordered H2 sections
are defined in
[`lib.ts`](https://github.com/TolongLabs/TolongDesign/blob/2e10faa846d775c0e1abdcb518c4931d79f1d288/scripts/lib.ts),
[`catalogue-schema.ts`](https://github.com/TolongLabs/TolongDesign/blob/2e10faa846d775c0e1abdcb518c4931d79f1d288/scripts/catalogue-schema.ts)
and the
[template](https://github.com/TolongLabs/TolongDesign/blob/2e10faa846d775c0e1abdcb518c4931d79f1d288/templates/tool-doc.md).

| Field                                   | Shape / meaning                                                                                             |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `name`, `slug`, `section`, `source_url` | Resource identity and primary source. Registration consistency is checked during maintenance.               |
| `category_tags`, `best_for`, `stack`    | Lists. Stack uses a finite canonical vocabulary; tags are search terms, not compatibility evidence.         |
| `paywall`                               | `free`, `freemium`, `paid`, `unknown`. Paywall is access/pricing, not licence permission.                   |
| `pricing_summary`, `license`            | Authored statements with source evidence; unpublished details stay explicit.                                |
| `open_source`, `agent_friendly`         | Booleans. `agent_friendly` remains a legacy compatibility filter.                                           |
| `execution_mode`                        | Exactly one documented primary operating method.                                                            |
| `surface`                               | Nonempty list of documented output/use domains. It is independent of section.                               |
| `status`                                | Dated `active`, `degraded` or `unreachable` classification—not a live probe.                                |
| `last_verified`                         | Dated source verification, not a rolling service-health or API guarantee.                                   |
| `install`                               | Derived from document content; never maintained by hand in the index or trusted from arbitrary frontmatter. |

Execution modes are `registry`, `package`, `snippet`, `mcp-skill`,
`browser-app`, `reference`. Surface values include interfaces, 3D, media,
comics, assets and supporting development/hosting/reference domains. Use
[METADATA.md](./METADATA.md) and exported `SURFACES`/`STACKS` for the complete
current vocabulary; do not create a parallel unofficial list.

Creator links are optional `created_tools` IDs with matching
`created_tools_evidence[id] = { source_url, checked, quote }`. Validation checks
shape, dates, IDs and evidence coverage. It does not fetch the attribution
source or judge the quote's truth. A maintainer must verify that evidence.
Missing links mean unresearched, not “this person made nothing.”

## Resource loading

The loader performs these steps for each CLI operation that needs resources:

1. Resolve the root and `data/catalogue.json`; require nonempty registration
   fields and a valid `tools[]` array.
2. Restrict doc paths to `docs/design/`: reject absolute/drive paths,
   backslashes, controls, empty/dot/traversal segments and resolved escapes.
3. Read each **registered** document, decode UTF-8, parse YAML frontmatter and
   compute SHA-256 over the original bytes.
4. Build resource records and derive the first supported shell block under How
   to use as `meta.install`.

The runtime loader is defensive, but it is not the full maintenance validator.
Some missing legacy metadata has fallbacks; malformed YAML or a non-mapping
frontmatter is a data error. Run `bun run check` before treating authored data
as compliant. Unregistered Markdown is not automatically included in search.

## Search and ranking

[![A search request validates arguments, loads registered source documents and hashes, filters resources, ranks matches, and returns results.](./diagrams/retrieval-sequence.svg)](./diagrams/retrieval-sequence.html)

### Pipeline

`searchResources` validates options, filters resources, then calls the pure
`rankDocuments` helper. The body supplied to that helper is complete Markdown
plus searchable metadata. No cached `data/index.json`, knowledge graph,
embedding store or network service participates.

| Filter                   | Behavior                                                                                                                                  |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Availability             | `unreachable` excluded unless `--include-unreachable`; `degraded` stays visible.                                                          |
| `--mode`, `--surface`    | Comma-separated OR values within a flag; different flags combine with AND. Empty, repeated or unknown vocabulary values are usage errors. |
| `--stack`                | Canonicalize documented aliases before matching, e.g. `framer-motion` → `motion`, `radix-ui` → `radix`.                                   |
| `--section`, `--paywall` | Section slug/name and normalized paywall matching.                                                                                        |
| `--agent`, `--oss`       | Require explicit `true`; absent/unknown is not accepted as true.                                                                          |
| `--tag`                  | Exact tag/category-tag matching, exposed by `find` rather than `design search`.                                                           |

### Scoring behavior

The implementation is **field-weighted BM25-style keyword ranking**, not a
semantic model or a full linguistic search engine.

| Field                                  | Weight | Length-normalization `b` |
| -------------------------------------- | -----: | -----------------------: |
| Identity: name, ID, metadata slug/name |      8 |                      0.5 |
| Category tags, tags, stack             |      5 |                      0.2 |
| Intended use (`best_for`)              |      5 |                      0.3 |
| Blurb/description/pricing summary      |      3 |                      0.5 |
| Full body                              |      1 |                     0.75 |

For the **filtered corpus**, `N` is the number of documents and `df(t)` counts
documents matching query term `t` in any field. The main calculation is:

```text
idf(t)   = ln(1 + (N - df(t) + 0.5) / (df(t) + 0.5))
B(field) = 1 - b + b × field_length / average_field_length
norm_tf  = occurrence_count / B(field)
contrib  = field_weight × norm_tf × (k1 + 1) / (norm_tf + k1)
k1       = 1.2
```

Contributions sum across fields and terms. A coordination factor rewards
matching more of the query's unique terms. Exact resource-name or qualified-ID
matches receive a boost and sort ahead of nonexact matches. Remaining results
sort by score, then stable ID for ties within `1e-9`.

Terms split on whitespace and lowercase; occurrences are substring matches. A
small English suffix-stripping fallback can match stems, at reduced strength
(`0.5` in body, `0.8` elsewhere). This is not language-aware stemming, fuzzy
spelling correction or token-boundary matching. Partial multiword matches are
eligible; queries no longer require every word. Empty input to the shared helper
sorts by name/ID; the `design search` command itself requires query text.

Scores are relative to the filtered corpus and are not public result fields. Do
not compare them across changed filters or claim benchmark-wide relevance. The
24-query fixture in `search-eval.test.ts` is a bounded regression check; its
measured recall is not a general product-quality guarantee.

### Cost and limits

Each invocation reads the registered docs and computes matches in memory. There
is no persistent search cache. Ranking scans fields for query terms and computes
corpus statistics; catalogue size, doc length and query length affect cost. No
latency, memory or maximum-catalogue-size SLA is established.

## CLI contracts

| Command                | Input / output contract                                                                                                 |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `design search <text>` | Default 10 results; JSON object or human-readable excerpts/cards. `total` is the number matched before limiting.        |
| `find [text]`          | Query optional; default effectively unlimited results. JSON remains an array of metadata rows.                          |
| `show <id>`            | Exact qualified ID, or unique unqualified slug. Plain mode returns full Markdown; JSON returns the loaded resource.     |
| `context <id>...`      | Exact resolution; preserve first request order; deduplicate repeated resources; full Markdown plus provenance/warnings. |
| `doctor [--json]`      | Version/root/resource count, skill paths and explicit checkout/release integrity state.                                 |
| `--version`            | Package version. This alone does not prove a checkout matches a published release with the same version.                |

Both search frontends share filters and ranking. `--json` and `--format card`
are mutually exclusive. `--limit` must be a positive safe integer. Unknown
flags, ambiguous slugs and unknown IDs are usage errors; IDs are exact and
case-sensitive. Use qualified IDs such as `motion/gsap` for stable references.

| Exit | Meaning                                                           | Channel                         |
| ---- | ----------------------------------------------------------------- | ------------------------------- |
| `0`  | Success, including empty search or checkout-mode doctor warnings. | Results on stdout.              |
| `1`  | Data, integrity, I/O or unexpected operational failure.           | Human-readable error on stderr. |
| `2`  | Invalid command usage, flags, ID or conflicting output options.   | Human-readable error on stderr. |

`--json` selects successful output; it does not create a structured JSON error
protocol. Do not parse stderr as a successful result.

## Machine-readable contracts

These are shapes, not an exhaustive fake resource response:

```text
design search --json
{ query: string, total: number, results: SearchResource[] }

find --json
ResourceMetadata[]

show --json
Resource

context --json
{ schema_version: 1, brief: string | null,
  resources: ContextResource[], warnings: string[] }
```

| Record             | Fields                                                                                                                                                                       |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SearchResource`   | `id`, `name`, `section_slug`, `slug`, `paywall`, `agent_friendly`, `source_url`, `last_verified`, `doc`, `matched_terms`, `excerpt`. Excerpts are bounded to 240 characters. |
| `Resource`         | Identity/source fields plus `sha256`, complete `markdown`, `paywall`, `agent_friendly`, `open_source`, extensible `meta`.                                                    |
| `ContextResource`  | `id`, `name`, `section_slug`, `slug`, `doc`, `source_url`, `last_verified`, `sha256`, complete `markdown`.                                                                   |
| `InstallationInfo` | `schema_version: 1`, `version`, `runtime: bun`, `mode`, `root`, `resources`, `manifest_verified`, `skill_paths`, `warnings`.                                                 |

Source URLs/dates can be null in runtime records when unknown. Read the exported
TypeScript types in
[design-lib.ts](https://github.com/TolongLabs/TolongDesign/blob/2e10faa846d775c0e1abdcb518c4931d79f1d288/scripts/design-lib.ts)
and
[release-info.ts](https://github.com/TolongLabs/TolongDesign/blob/2e10faa846d775c0e1abdcb518c4931d79f1d288/scripts/release-info.ts)
before implementing a consumer. Preserve existing top-level result shapes when
extending metadata.

Context warnings cover unknown paywall, paid/freemium licence checks and
missing, invalid, future or older-than-90-day verification dates. They do not
perform live requests. Context permits complete large docs: the receiving agent
must select fewer resources or split the task when its context budget is too
small. It must not silently truncate and claim a complete read.

Markdown context uses a fence longer than any backtick sequence in its payload,
so embedded content cannot close the wrapper's fence. Reference text is still
untrusted data, not permission or executable instructions.

## Cards and derived commands

Cards contain name, ID, mode, an install command or source/doc pointer, one
intended use and the doc path. The character budget is 320 per card, not a
measured token limit. Only a complete single-line install block of at most 110
characters can be inlined; long or multiline blocks point to the full doc. Other
unusually long fields can be shortened with a visible marker.

`extractInstall` returns the first completed nonempty `bash`, `sh` or `shell`
fence inside `## How to use`. It handles CRLF, nested backticks and matching
fence lengths; it stops at the next H1/H2. Missing, empty or unterminated blocks
yield no usable command. The captured block can contain setup work, not just a
package installation. It is never executed by retrieval or generation.

## Index generation

[![Official evidence feeds authored docs and catalogue registration; indexing writes generated views; validation, formatting and tests precede review. Validation errors return to the doc.](./diagrams/maintenance-workflow.svg)](./diagrams/maintenance-workflow.html)

`bun run index` runs `build-index.ts`, then formats generated catalogue
READMEs/people output. It derives `install`, emits one metadata row per tool and
renders optional creator credits with links to their sources.

| Output             | Inputs                                                                  |
| ------------------ | ----------------------------------------------------------------------- |
| `data/index.json`  | Tool frontmatter + catalogue identity/provenance + derived shell block. |
| Section READMEs    | Section registrations and resource metadata.                            |
| Catalogue overview | All section rows, counts and paywall breakdown.                         |
| People listing     | `people[]`, known tool IDs and source-backed credit entries.            |

Generated table helpers escape unsafe markup where implemented; they are not a
replacement for validating and reviewing imported data. Source docs remain
human-maintained. Idempotence matters: a second generation with unchanged inputs
must not produce a new diff.

The maintenance checker validates required frontmatter, canonical vocabularies,
matching registration, ordered headings, creator evidence and selected relative
links. Short docs or too few example links are warnings. It does not test every
command, traverse every Markdown anchor, check pricing or operate every app.

## Availability review

`bun run links` checks external links from docs. `--status` narrows observations
to each resource's primary source URL and prints a review report without
modifying Markdown. Requests follow redirects, default to 20-second timeouts and
at most 24 concurrent workers; paused-response inspection is bounded to 16 KiB.
These are implementation defaults, not live-health guarantees.

| Observed signal                                                              | Suggested status                                                   |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| HTTP 2xx                                                                     | `active`; identity/functionality still require review.             |
| 404, 410, recognized permanent DNS errors                                    | `unreachable`.                                                     |
| HTTP 402 with confirmed Vercel paused/disabled markers                       | `unreachable`. Generic payment-required pages are only `degraded`. |
| 401, 403, 429                                                                | Undetermined (`null`), not proof of removal.                       |
| Timeout, temporary/generic network errors, 5xx or other inconclusive failure | `degraded`.                                                        |

A successful response can be a parked domain, renamed service or different
product. A failed example link must not retire an otherwise available primary
resource. Confirm product identity and the documented core workflow before
editing status and adding a dated reason.

## Agent handoff

| Location                                 | Role                                                                                                      |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `.agents/skills/design-project/SKILL.md` | Tool-agnostic project-design instructions.                                                                |
| `.claude/skills/design-project/SKILL.md` | Byte-identical Claude mirror.                                                                             |
| `docs/WORKFLOW.md`                       | Brief, references, direction approval, full context, implementation and actual output review.             |
| `pick-design-stack` skill mirrors        | Website-specific choices; web-ui filtering prevents unrelated surfaces from dominating component choices. |
| `docs/scenarios/dictation-landing.md`    | A documented acceptance scenario, not proof a sample site was built.                                      |

Doctor reports skill paths. Installation does not write global harness
configuration or register those skills automatically. The target agent must read
its own project's instructions and design system, obey its approval gates and
treat context as reference data. The website workflow does not imply every
resource is a website dependency or that manual apps are unattended tools.

## Knowledge graph

Graphify output is a separate derived view for relationship questions and source
discovery. Runtime search does not read it, and a graph edge is not a licence or
compatibility contract. Prefer explicit source/provenance over an inferred
association. Catalogue records and shared concepts can be distinct nodes; do not
merge resource metadata merely because labels resemble each other.

Refresh the graph after notable source changes with `/graphify . --update` in a
configured authoring environment. Inspect coverage, dangling edges and source
attribution before committing outputs. Keep caches, cost logs and dated local
snapshots out of unrelated changes. The graph is not required in a private CLI
archive.

## Release and installation

[![A matching version tag triggers private CI checks, an allowlisted bundle, hashes and isolated installation smoke before private release publication. Consumers verify the archive, install it and run doctor.](./diagrams/release-workflow.svg)](./diagrams/release-workflow.html)

### Snapshot boundary

The source baseline has `package.json` version `0.1.2`, but published `v0.1.2`
was released on 2026-10-11, before the newer retrieval changes. A working-tree
version string alone is not release provenance. Check tag, source revision,
asset bytes and manifest; use the checkout for unreleased source behavior. This
documentation change does not publish a new release.

### Build and payload

`bun run build:release` validates private package metadata and source paths,
stages an explicit allowlist, bundles the Bun CLI, writes a payload manifest,
packs with lifecycle scripts disabled and writes the compressed archive's
`SHA256SUMS`. Existing published output names are rejected rather than replaced.

| Included                                                                 | Excluded                                                          |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| Private `package.json`, `dist/design.js`, data catalogue/index.          | Git history, credentials, customer data and worker output.        |
| Registered design Markdown, research, guides and selected scenario docs. | Dependency trees, caches, graphify artifacts and local snapshots. |
| Mirrored `design-project` instructions and required dependency licence.  | Automatic global skill registration or post-install execution.    |
| Explicitly allowlisted documentation/diagram files.                      | Arbitrary assets, source packs and copied third-party artwork.    |

The package root README is based on the CLI installation guide, not the
repository's illustrated overview. The generated manifest has `schema_version`,
`version`, `resource_count` and a path-to-SHA-256 `files` map; it does not hash
itself.

### Publication gates

The release workflow runs only for a `v*` tag in the named private repository.
It requires private package metadata and an exact tag/version match, then runs
locked dependency installation, tests, doc checks, mirror comparison, release
build, checksum verification and isolated installation smoke. Only then are
verified assets uploaded to a draft and the private release published. Existing
published releases are not overwritten by that workflow.

A release tag is an explicit maintainer action. Editing docs, merging a PR or
building an archive locally does not publish one.

### Doctor and consumer trust

| Mode / condition                                                       | Behavior                                                                                           |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Checkout without a manifest                                            | Return checkout mode and a warning; do not claim verified package integrity.                       |
| Bundled CLI without a manifest                                         | Data error.                                                                                        |
| Release manifest                                                       | Validate schema/version/count, listed file hashes, required coverage and registered resource docs. |
| Skill mirrors differ, files are missing, unsafe paths or hashes differ | Data error; reinstall a verified release rather than rewriting the manifest.                       |

Doctor checks manifest-listed files and required coverage; it is not a host
security scanner or proof against arbitrary extra local files. Search does not
implicitly run doctor on every invocation. Run doctor deliberately after
installation or an update.

Archive checksums depend on a trusted source for both the archive and checksum.
They are not cryptographic signatures and do not prevent an authorized publisher
from replacing both. Package installation still executes trusted internal
software; the read-only retrieval boundary does not mean arbitrary downloaded
code is safe.

## Security and privacy

| Boundary               | Control                                                                                               | Limit                                                                                        |
| ---------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Catalogue → filesystem | Registered-path and realpath containment; release inspection rejects symlinked payload paths.         | Not an adversarial OS sandbox or a guarantee against concurrent hostile filesystem mutation. |
| Documents → agent      | Full docs remain reference data; no embedded command execution; fenced context output.                | The receiving agent must enforce its own instruction hierarchy and approvals.                |
| Target project         | Retrieval does not write project files, record audio, invoke models or install resource dependencies. | A user redirecting stdout or independently operating a resource is a separate action.        |
| Private distribution   | Private repository guards, authenticated assets, allowlisted files, hashes and isolated smoke tests.  | No public-registry publication or signed supply-chain attestation.                           |
| External sources       | Explicit link checks and human verification of current facts/rights.                                  | Remote sites can change, block bots or serve a different product.                            |

Keep credentials in existing authenticated tooling, not in catalogue entries,
logs, diagrams, release payloads or customer context committed to this repo. The
CLI needs no model-provider key. Optional research and graph extraction
providers have their own data and cost boundaries.

## Verification and CI

| Check                                               | Proves                                                                               | Does not prove                                           |
| --------------------------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| `bun test`                                          | Library/CLI/schema/ranking/context/release regressions covered by the current suite. | Every live resource, operating system or untested input. |
| `bun run check`                                     | The implemented catalogue/template validation rules.                                 | End-to-end tool behavior or source truth.                |
| `bun run index` + diff                              | Reproducible generated views when run twice on unchanged inputs.                     | Live freshness or search relevance.                      |
| `bun run format:check`                              | Formatting of configured Markdown/JSON/TypeScript files.                             | Type safety or runtime correctness.                      |
| `bun run build:release` + `smoke:release <archive>` | Buildable, allowlisted package and isolated installation/diagnostic behavior.        | Visual quality or universal platform support.            |

The Verify workflow runs tests, doc checks, skill-mirror comparison, build and
installed smoke on pushes/PRs. The tag-release workflow adds private/version
checks and archive-checksum verification before publication. Neither current
workflow contains a general `tsc` typecheck or `format:check` step; run
formatting locally and do not imply those gates ran in CI.

## Operations and troubleshooting

| Symptom                            | Location / cause                                                                   | Action                                                                                |
| ---------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| No expected search hit             | Wrong surface/mode, unreachable exclusion, broad keywords or dated classification. | Try a shorter query or `find` without text, inspect metadata, then exact `show <id>`. |
| Ambiguous ID                       | Same unqualified slug in more than one section.                                    | Use the exact `section/slug` suggested by the error.                                  |
| Usage error                        | Parser/filter validation.                                                          | Check `--help`, vocabulary and mutually exclusive output flags; expect exit 2.        |
| Missing/invalid doc or unsafe path | Catalogue registration, YAML or root containment.                                  | Repair source data in a checkout; never suppress the failure.                         |
| Installed integrity error          | Missing/tampered payload or manifest mismatch.                                     | Download and verify an explicit trusted release again.                                |
| Generated views drift              | Source edited without index regeneration.                                          | Run index, inspect diff, regenerate again and require stability.                      |
| Live site appears changed          | Dated source facts or product replacement.                                         | Confirm identity and core workflow, add dated evidence, then revise status/facts.     |

For resource additions/refreshes, follow
[contributing](https://github.com/TolongLabs/TolongDesign/blob/2e10faa846d775c0e1abdcb518c4931d79f1d288/.github/CONTRIBUTING.md)
and the [metadata guide](./METADATA.md). Keep facts, inferred judgments and
unverified claims separate. No background freshness monitor, automatic repair or
arbitrary agent execution loop is part of this system.

## Source map

| Responsibility               | Implementation                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CLI grammar and errors       | [design.ts](https://github.com/TolongLabs/TolongDesign/blob/2e10faa846d775c0e1abdcb518c4931d79f1d288/scripts/design.ts) · [find.ts](https://github.com/TolongLabs/TolongDesign/blob/2e10faa846d775c0e1abdcb518c4931d79f1d288/scripts/find.ts) · [cli-lib.ts](https://github.com/TolongLabs/TolongDesign/blob/2e10faa846d775c0e1abdcb518c4931d79f1d288/scripts/cli-lib.ts)                                                       |
| Loading, filters and context | [design-lib.ts](https://github.com/TolongLabs/TolongDesign/blob/2e10faa846d775c0e1abdcb518c4931d79f1d288/scripts/design-lib.ts)                                                                                                                                                                                                                                                                                                 |
| Scorer and evaluation        | [search-lib.ts](https://github.com/TolongLabs/TolongDesign/blob/2e10faa846d775c0e1abdcb518c4931d79f1d288/scripts/search-lib.ts) · [search-eval.test.ts](https://github.com/TolongLabs/TolongDesign/blob/2e10faa846d775c0e1abdcb518c4931d79f1d288/scripts/search-eval.test.ts) · [query fixtures](https://github.com/TolongLabs/TolongDesign/blob/2e10faa846d775c0e1abdcb518c4931d79f1d288/scripts/fixtures/search-queries.json) |
| Schema and editorial checks  | [catalogue-schema.ts](https://github.com/TolongLabs/TolongDesign/blob/2e10faa846d775c0e1abdcb518c4931d79f1d288/scripts/catalogue-schema.ts) · [lib.ts](https://github.com/TolongLabs/TolongDesign/blob/2e10faa846d775c0e1abdcb518c4931d79f1d288/scripts/lib.ts) · [check-docs.ts](https://github.com/TolongLabs/TolongDesign/blob/2e10faa846d775c0e1abdcb518c4931d79f1d288/scripts/check-docs.ts)                               |
| Index, credits and cards     | [build-index.ts](https://github.com/TolongLabs/TolongDesign/blob/2e10faa846d775c0e1abdcb518c4931d79f1d288/scripts/build-index.ts) · [index-fields.ts](https://github.com/TolongLabs/TolongDesign/blob/2e10faa846d775c0e1abdcb518c4931d79f1d288/scripts/index-fields.ts) · [resource-card.ts](https://github.com/TolongLabs/TolongDesign/blob/2e10faa846d775c0e1abdcb518c4931d79f1d288/scripts/resource-card.ts)                 |
| Availability                 | [check-links.ts](https://github.com/TolongLabs/TolongDesign/blob/2e10faa846d775c0e1abdcb518c4931d79f1d288/scripts/check-links.ts) · [link-check-lib.ts](https://github.com/TolongLabs/TolongDesign/blob/2e10faa846d775c0e1abdcb518c4931d79f1d288/scripts/link-check-lib.ts)                                                                                                                                                     |
| Package and diagnostics      | [release-lib.ts](https://github.com/TolongLabs/TolongDesign/blob/2e10faa846d775c0e1abdcb518c4931d79f1d288/scripts/release-lib.ts) · [release-info.ts](https://github.com/TolongLabs/TolongDesign/blob/2e10faa846d775c0e1abdcb518c4931d79f1d288/scripts/release-info.ts) · [smoke-release.ts](https://github.com/TolongLabs/TolongDesign/blob/2e10faa846d775c0e1abdcb518c4931d79f1d288/scripts/smoke-release.ts)                 |
| CI                           | [Verify](https://github.com/TolongLabs/TolongDesign/blob/2e10faa846d775c0e1abdcb518c4931d79f1d288/.github/workflows/verify.yml) · [Private release](https://github.com/TolongLabs/TolongDesign/blob/2e10faa846d775c0e1abdcb518c4931d79f1d288/.github/workflows/release.yml)                                                                                                                                                     |

Diagrams are Archify-generated, source-linked snapshots pinned to `2e10faa`.
[Diagram sources, validation and local viewing](./diagrams/README.md) explain
how to inspect and regenerate them. Static exports are documentation aids; the
interactive viewer is not a runtime component of TolongDesign.
