# ICQR Magic Tree study

Checked 2026-10-11. This study uses REA to distinguish published descriptions,
actual browser evidence, and unverified behavior at
[tree.icqr.com](https://tree.icqr.com/). It is not a site clone or a claim that
this environment verified the complete 3D experience.

## Method and worker outcomes

The requested dispatch was one `gpt-6.1-sol` worker at `xhigh` and three
`gpt-6-luna` workers at `max`, in disposable worktrees. Codex rejected the Sol
model with ChatGPT authentication; no model was substituted. Two Luna workers
returned the factual REA doc and static site-reference notes. The technical
worker was interrupted by a full 1 GB `/tmp` filesystem before producing its
report. Its partial static observations are not reported as completed work.

The main agent completed actual REA 6.4.0 browser inspection using Node.js
24.21.0 and an isolated Chrome 152 profile. Moving this session's partial
package cache off `/tmp` and using disk-backed `TMPDIR` restored tooling. Global
agent settings, MCP registrations, other browser profiles, and target-site
assets were not modified or committed.

REA listed the page target, collected bounded passive DOM/accessibility
observations, and captured viewport screenshots. Each PNG's bytes were decoded
locally and checked against REA's SHA-256. The main agent inspected the images.
Viewport changes used the isolated browser's published protocol; screenshot and
page evidence came from REA. No forms were submitted, sharing triggered, or
private content accessed.

## Published identity

The title is “ICQR Magic Tree — 3D QR Code Generator.” The page description
presents a link-to-scannable-3D-tree tool with season/color customization and
sharing. Its author metadata says “ICQR”; no individual creator was identified
in the inspected source. Product descriptions are not successful-generation or
scannability tests.

Static HTML inspection found metadata but no readable application body content.
Runtime inspection is therefore necessary to understand the controls and layout.
No verified source-code repository, SDK, public agent API, pricing page, or
asset-reuse licence was established in this inspection.

## Observed runtime states

| Viewport             | Observed result                                                                     |
| -------------------- | ----------------------------------------------------------------------------------- |
| 780 × 493, landscape | “Unsupported screen size” and “Please use portrait mode or a bigger display.”       |
| 1440 × 900, desktop  | Canvas plus centered bottom URL/share/season/audio controls; brand mark at top left |
| 390 × 844, portrait  | Same controls in a nearly full-width bottom group; brand mark centered above        |

Desktop and portrait accessibility captures each reported 38 nodes and named
controls for the URL, Share link, Spring/Summer/Autumn, Unmute, inspiration
credits, and “Tap the tree to see QR code.” Desktop/mobile DOM captures each
reported 152 nodes. These are observed inventories, not accessibility scores.

The images show a warm neutral background, rounded controls, a tan share action,
and restrained surrounding UI. Summer is visibly selected. The central canvas
area remained blank in this environment; do not describe intended tree shape,
materials, camera motion, or seasonal effects from these frames.

## Graphics and coverage limits

The isolated browser's own GPU report marked `webgl` and `webgpu` as
`unavailable_software`. A correctly sized desktop reload produced the same
blank-canvas screenshot hash. This is an environment capability limit, not proof
that the website's 3D implementation is broken.

A supplementary Chrome DevTools MCP attempt could not open a separate context
because its shared browser profile was already in use. That browser was not
stopped or reconfigured. Full 3D geometry/animation remains unverified and needs
a suitable browser with working graphics support.

REA's captures were attach-limited and policy-filtered. They do not contain
complete navigation history, pre-attachment requests/console events, raw cookies
or response bodies, or a full script/source archive. The observations did not
exercise URL changes, share behavior, season transitions, audio, keyboard
traversal, reduced motion, QR scanning, or full loading-performance
measurements. No Lighthouse score, FPS, Core Web Vitals, search ranking, or
broad compatibility claim is made.

## Evidence manifest

Raw REA JSON and PNGs remain local scratch evidence, outside the committed
collection. No third-party screenshots, scripts, logos, fonts, or geometry are
vendored. These hashes identify the actual inspected PNGs:

| Artifact           | SHA-256                                                            |
| ------------------ | ------------------------------------------------------------------ |
| `tree-initial.png` | `621f38000a95dbc44e825f5c555d2d91950fa3827915268882af1282ba3d71a7` |
| `tree-desktop.png` | `aba587f87b6e4479b3650df572b2e4fab480f41f7cb7eaafef11fddaefd7fe99` |
| `tree-mobile.png`  | `e49ae8c64d9e1af17f795f4660dfbb2756d736c4840986e5df27c6ddec048382` |

A SHA identifies a captured frame; it does not promise future live-site renders
will be identical. REA used a 1.5-second observation window for the viewport
passes and 5 seconds for the correctly sized reload. Those are capture
durations, not page-speed measurements.

## Use in TolongDesign

[ICQR Magic Tree](../design/design-galleries/icqr-magic-tree.md) is a visual
reference, not an installable implementation library.
[REA](../design/agents-mcp/rea.md) is the evidence-collection tool. Keep those
roles separate in a project brief.

Apply observed principles, such as a product-focused visual region and
viewport-aware control grouping, to an original design. For a dictation page,
choose its own truthful product metaphor rather than copying a QR tree. Follow
[the project workflow](../WORKFLOW.md), read complete chosen implementation
docs, check licences, and inspect actual target-project renders before calling a
3D/parallax design verified. Metadata and a successful screenshot command alone
cannot satisfy that visual gate.

## Sources

- [Official public page](https://tree.icqr.com/) — metadata, DOM, accessibility,
  and actual viewport captures checked 2026-10-11.
- [REA repository](https://github.com/morluto/rea) — tool source and scope
  checked 2026-10-11.
- [REA browser guide](https://rea.tools/guides/browser/) — documented browser
  workflow checked 2026-10-11; current CLI help was additionally verified.
