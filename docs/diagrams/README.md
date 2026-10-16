# Architecture diagrams

Generated with **Archify 3.0.1** from inspected repository code and policy. Each
diagram pins its source evidence to
[`2e10faa`](https://github.com/TolongLabs/TolongDesign/tree/2e10faa846d775c0e1abdcb518c4931d79f1d288).
Later source changes need a fresh evidence review; these are snapshots, not live
runtime telemetry.

## Open a diagram

| Diagram                   | Static image                      | Interactive HTML                      | Source                              |
| ------------------------- | --------------------------------- | ------------------------------------- | ----------------------------------- |
| Resource to finished work | [SVG](./overview.svg)             | [Viewer](./overview.html)             | [JSON](./overview.json)             |
| Local CLI architecture    | [SVG](./system-architecture.svg)  | [Viewer](./system-architecture.html)  | [JSON](./system-architecture.json)  |
| Search request sequence   | [SVG](./retrieval-sequence.svg)   | [Viewer](./retrieval-sequence.html)   | [JSON](./retrieval-sequence.json)   |
| Collection maintenance    | [SVG](./maintenance-workflow.svg) | [Viewer](./maintenance-workflow.html) | [JSON](./maintenance-workflow.json) |
| Private release and trust | [SVG](./release-workflow.svg)     | [Viewer](./release-workflow.html)     | [JSON](./release-workflow.json)     |

GitHub renders the static SVGs, not the interactive HTML. Open an HTML file from
a local checkout in a browser, or download it first. The viewer is
self-contained; it does not start a TolongDesign server or require a hosted
diagram service. SVG exports follow the host's light/dark preference.

## Evidence

[`verification.json`](./verification.json) records each source JSON, HTML and
SVG hash, source revision and generator. The four Archify gates are separate:
validation, deterministic delivery, strict artifact check and real-browser
check. Native export produces the static dual-theme SVG without viewer overlays.

Hashes identify delivered bytes. They do not make a stale architectural claim
current or certify semantic correctness without source review. Perceptual review
is recorded separately from automated layout/browser checks.

## Regenerate

Use a source checkout with the pinned commit available and an installed Archify
CLI. Archify is an authoring tool, not a dependency of the TolongDesign CLI. Set
`ARCHIFY_CHROME` only if Chrome/Chromium is not discovered automatically.

```bash
node /path/to/archify/bin/archify.mjs finalize architecture \
  docs/diagrams/system-architecture.json \
  .archify/review-system/system-architecture.html \
  --repo-root . --quality showcase --json
```

Use `workflow` for overview, maintenance and release; use `sequence` for the
retrieval sequence. Preserve the candidate's portable `meta.output` or use an
explicit CLI output, as above. Use a fresh evidence folder when changing a
candidate which already has browser evidence.

1. Review the actual source responsibilities, I/O ownership, conditions and
   trust boundaries. Update the pin and citations only after inspecting them.
2. Finalize the complete candidate; require all four gates to pass.
3. Inspect light/dark rendering. Follow Archify's measured repair guidance
   rather than dropping relationships to pass layout checks.
4. Export **SVG · Auto** from the native viewer menu. Copy the exact finalized
   HTML and formatted source JSON into this directory.
5. Update hashes/review status in `verification.json`; verify embedded links and
   the documentation payload. Formatting must leave the frozen JSON unchanged.

Full local receipts and screenshots live in ignored `.archify/` request folders.
They are not private-release payloads. The compact verification file is a
portable project record, not a replacement for rerunning Archify after edits.
