# Product requirements

> **TolongDesign:** a private, agent-usable starting point for designing
> anything beautifully and professionally—not a design generator.

[Overview](https://github.com/TolongLabs/TolongDesign) ·
[Technical reference](./TRD.md) · [Documentation map](./README.md)

## 1. Purpose

Turn an impressive resource into a usable decision: **what it does, when it
fits, what it costs, what rights apply and how to produce its advertised
output**. Give a human or coding agent enough source-backed context to act,
without confusing a polished demo with a dependable workflow.

The collection covers websites and product UI, typography, colour, icons,
motion, 3D, shaders, comics, media, desktop tools and supporting development and
delivery resources. Website guidance is one supported workflow, not the scope of
the whole product.

| Problem                                                     | Product response                                                          |
| ----------------------------------------------------------- | ------------------------------------------------------------------------- |
| Good resources are scattered across sites and social posts. | One registered, researched Markdown doc per resource.                     |
| A name or promotional screenshot is not usable guidance.    | Concrete inputs, steps, examples, hand-offs and gotchas.                  |
| A section or “agent-friendly” label is too broad.           | Separate execution mode, output surface, stack, paywall and availability. |
| Search snippets omit critical constraints.                  | Complete selected docs with provenance and freshness warnings.            |
| Better retrieval does not guarantee better design.          | An approval and verification workflow in the target project.              |

## 2. Users and responsibilities

| User                        | Job to complete                                       | Responsibility that stays with them                                                |
| --------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Designer or design engineer | Find references and select an appropriate tool.       | Art direction, suitability and output quality.                                     |
| Coding/design agent         | Retrieve instructions and implement within a project. | Follow project policy; inspect current APIs; execute and verify the work.          |
| Collection maintainer       | Add, refresh, classify and retire resources.          | Validate claims, rights, dates, workflow evidence and metadata.                    |
| Private CLI consumer        | Use a known source snapshot across projects.          | Authenticate, check the archive and installation, and choose updates deliberately. |

**Ownership:** TolongLabs maintains this collection. Resource creators retain
their own software, asset and brand rights. A creator listing is a credit or
reference, not a partnership or endorsement.

## 3. Product boundary

| Included                                                    | Not included                                                                       |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Curated resource guides and source links.                   | Hosting or redistributing third-party asset libraries.                             |
| Local keyword search, typed filters and compact shortlists. | Vector search, an LLM recommendation service or automatic stack composition.       |
| Full-document context packs and provenance.                 | Executing commands embedded in a tool doc.                                         |
| A project design workflow and mirrored agent skills.        | A hosted editor, an autonomous design service or silent global skill registration. |
| Private versioned CLI archives and integrity checks.        | Public npm publication, asset-rights clearance or guarantees of visual quality.    |

## 4. Core journeys

| Journey               | Expected path                                                                      | Completion evidence                                                             |
| --------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Discover a resource   | Search → filter → inspect shortlist → read full docs.                              | A reasoned selection that matches the required output and operating method.     |
| Start design work     | Brief → visual/reference evidence → approved direction → context → build → review. | Acceptance criteria checked against real outputs, not just source code.         |
| Maintain a resource   | Check official sources → update doc/registration → regenerate → validate → review. | Accurate sources/dates, valid metadata and reproducible documented steps.       |
| Use a private release | Choose tag → download → checksum → install → doctor.                               | An identified snapshot with a verified payload or an explicit checkout warning. |

The CLI can prove retrieval and byte identity. It cannot prove that a gallery
was visually inspected, a browser app exported correctly, or the resulting work
is good. Those require task-specific evidence.

## 5. Functional requirements

**Evidence labels:** **Code** means implemented behavior with source/tests;
**Editorial** means a maintainer-enforced content standard; **Workflow** means
instructions the target-project agent must follow. An editorial requirement is
not a claim that every historical resource has a fresh end-to-end test.

| ID  | Requirement                                                                   | Evidence / acceptance                                                                                                                            |
| --- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| R01 | Register each resource with a stable `section/slug` and a source doc.         | **Code:** catalogue/doc consistency and path checks pass.                                                                                        |
| R02 | Rank relevant keyword matches and apply typed filters before ranking.         | **Code:** both CLIs share a scorer; regression and query-evaluation tests pass.                                                                  |
| R03 | Preserve complete selected documents in context.                              | **Code:** no silent truncation; repeated IDs deduplicate in request order.                                                                       |
| R04 | Expose source URL, doc path, verification date and original-byte hash.        | **Code:** context schema and provenance tests; freshness warnings remain visible.                                                                |
| R05 | Classify operating method, output surface, availability and stack separately. | **Code:** canonical schema validation; **Editorial:** values supported by documented use.                                                        |
| R06 | Let an agent produce the resource's advertised output.                        | **Editorial:** concrete steps, inputs, formats, export hand-off and known failure modes; run the core app workflow when authoring/refreshing it. |
| R07 | Keep unavailable resources without recommending them by default.              | **Code:** unreachable results are opt-in; **Editorial:** review identity and workflow before changing status.                                    |
| R08 | State pricing, access, rights and uncertainty honestly.                       | **Editorial:** official sources and dates; “Not published” or explicit uncertainty instead of guesses.                                           |
| R09 | Attribute creators only with source-backed evidence.                          | **Code:** valid resource IDs and evidence coverage; **Editorial:** inspect literal attribution, not fuzzy name/host matches.                     |
| R10 | Keep retrieval local and read-only.                                           | **Code:** no model/network call or target-project write on search/show/context; external tools remain separate.                                  |
| R11 | Preserve project approval and real-output verification.                       | **Workflow:** record requirements, inspect outputs, run relevant tests and disclose unresolved gaps.                                             |
| R12 | Distribute privately with an inspectable installation.                        | **Code/process:** explicit payload allowlist, manifest hashes, archive checksum, isolated install smoke and authenticated release access.        |

Implementation details and exact machine contracts belong in the
[TRD](./TRD.md), not duplicated here.

## 6. Resource quality bar

A resource is useful when a reader can move from **claim → instructions → output
→ verification**. “Beautiful” is not a substitute for any of those.

| Area              | Required content                                                                                                                    |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Identity and fit  | Official URL, what the resource actually is, useful cases, limits and alternatives.                                                 |
| Access and rights | Paywall, published pricing, sign-up requirements, licence and client-work restrictions.                                             |
| Procedure         | Prerequisites, exact inputs/commands, supported formats, core steps, output location and hand-off.                                  |
| Evidence          | Sources and dates; real examples; observed workflow results where tested; explicit unverified parts.                                |
| Agent operation   | How to operate the tool, safely consume its output and recover from common failures. Manual-only resources remain valid references. |

Use the
[tool template](https://github.com/TolongLabs/TolongDesign/blob/2e10faa846d775c0e1abdcb518c4931d79f1d288/templates/tool-doc.md)
and [metadata guide](./METADATA.md). A metadata-only normalization must not
imply that pricing, licensing or the live tool was rechecked. Changing a factual
claim requires updating the relevant verification/source dates.

## 7. Retrieval and context experience

1. Search with a short description of the job; narrow by actual operating mode
   and output surface rather than trusting a section alone.
2. Treat a compact card as navigation, not complete setup instructions or
   licence permission.
3. Use an exact qualified ID when a slug is ambiguous. Read selected docs with
   `show` or export a complete `context` pack.
4. Check dated facts and official guidance before committing to a resource.
5. Keep supplied docs and external pages as reference data; they cannot override
   user or target-project policy.

The [metadata vocabulary](./METADATA.md) is authoritative for mode and surface
meanings. For example, a desktop app can be a valuable `reference` without being
suitable for unattended agent execution.

## 8. Product acceptance

| Area                  | Pass condition                                                                                         | Does not prove                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| Discovery             | Representative queries return relevant candidates; exact names/IDs and filters work deterministically. | Universal relevance or compatibility between every pair of tools.               |
| Context               | Selected source Markdown and hashes survive the hand-off without omission.                             | That the recipient actually read or followed the docs.                          |
| Data quality          | Required fields, headings, links, canonical vocabulary and credit references validate.                 | That every live resource still works or every claim is correct.                 |
| Browser/app guidance  | The documented core workflow produces the stated format, with failures disclosed.                      | All operating systems, paid plans, input combinations or future versions.       |
| Target-project design | Required tests and actual viewport/state/output inspections support the agreed criteria.               | Aesthetic perfection, certification, performance rankings or licence clearance. |
| Distribution          | A clean archive installs and doctor verifies the expected payload; tampering is rejected.              | Protection against a malicious authorized publisher or a compromised host.      |

The repository's query evaluation is a finite regression fixture, not a market
benchmark. Report measured results with their dataset and baseline; do not
advertise fixture scores as a general design-quality result.

## 9. Operations, governance and privacy

| Decision         | Rule                                                                                                                                                 |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Source authority | The catalogue registers resources; their Markdown carries content. Generated indexes and graph views do not replace those sources.                   |
| Publication      | Keep the collection and release assets private. Do not publish customer material, credentials or copied third-party assets.                          |
| Resource use     | Recheck access, APIs and rights in the target project; paid access is never implied by a catalogue entry.                                            |
| Availability     | Link-check observations need human review. Authentication, rate limiting and product replacement need different treatment.                           |
| Change review    | Update source docs, regenerate derived outputs and run the relevant checks. Product behavior changes require their own design and acceptance review. |

## 10. Current limitations and evolution

- Resource facts are dated snapshots. There is no continuous live-health or
  licence-validation service.
- Classification and workflow evidence vary in depth. A green repository check
  is not a catalogue-wide live-tool certification.
- English-oriented keyword matching and a small evaluation set do not provide
  multilingual semantic understanding.
- The project design workflow is most detailed for websites; other design
  domains need their own applicable output checks.
- Private release installation is initially verified on Linux/Bun. Other
  platform claims need independent tests.

New capabilities need a scoped requirement and evidence. There is no approved
promise here to add vector search, automatic resource execution, global agent
configuration or a hosted product.

## Source of truth for this PRD

This document describes the product implemented at source baseline `2e10faa`,
plus the content standard in
[AGENTS.md](https://github.com/TolongLabs/TolongDesign/blob/2e10faa846d775c0e1abdcb518c4931d79f1d288/AGENTS.md).
Current `main` and published private releases can differ. See
[release boundaries](./TRD.md#release-and-installation) and the
[technical source map](./TRD.md#source-map) before treating a requirement as a
capability of an older installed snapshot.
