---
name: ICQR Magic Tree
slug: icqr-magic-tree
section: Design Galleries
section_slug: design-galleries
source_url: https://tree.icqr.com/
designeer_url: https://tree.icqr.com/
designeer_blurb: A 3D QR-code tree generator and interactive design reference.
paywall: unknown
pricing_summary:
  'No pricing was published in the inspected page. Public reference UI is
  reachable without login; broader product pricing is not verified.'
open_source: false
license: Not published
category_tags: [reference, 3d, qr-codes, interactive, responsive]
best_for:
  [
    interactive product references,
    responsive control layouts,
    spatial product metaphors
  ]
stack: []
execution_mode: reference
surface: ['reference', 'web-ui', 'web-3d']
status: active
agent_friendly: false
last_verified: 2026-10-11
---

# ICQR Magic Tree

> A 3D QR-code tree generator and interactive design reference. Use the public
> interface to research spatial product metaphors and responsive controls, not
> as an asset or implementation package to import.

## At a glance

| Field          | Value                                                                          |
| -------------- | ------------------------------------------------------------------------------ |
| Source         | [tree.icqr.com](https://tree.icqr.com/)                                        |
| Paywall        | **Unknown** — public UI is visible; no pricing was found in this inspection    |
| Open source    | No verified source repository or open-source licence was found                 |
| Type           | Standalone interactive website; categorized here as a visual reference         |
| Works with     | Browser; reference principles can inform any target stack                      |
| Best for       | Product-metaphor research, canvas-led composition, responsive controls         |
| Agent-friendly | No published coding-agent interface was found; inspect visually with a browser |

## What it is

The published page title is “ICQR Magic Tree — 3D QR Code Generator.” Its
metadata describes converting a link into a scannable 3D tree with season and
color customization and sharing. Those are published product descriptions, not a
claim that every feature was verified in this study.

Runtime inspection found a canvas, URL textbox, a share control, Spring/Summer/
Autumn radio controls, an audio control, and an inspiration-credits button.
Desktop and portrait-mobile captures show a warm neutral background, a dotted
ICQR mark, generous central space, and a rounded control group near the bottom.
The desktop group is centered; the portrait group uses most of the width.

The available headless browser reported WebGL unavailable and captured a blank
canvas area. The study verifies the surrounding UI, not the intended tree
geometry, animation, QR scannability, or successful generation. The collection
must not use those captures as proof of the full 3D experience.

## Paywall and pricing

- **Public reference access:** The inspected page and rendered controls were
  reachable without authentication.
- **Pricing:** Not published in the inspected page. This is not evidence that
  every ICQR product or feature is free.
- **Sign-up required?** No login was needed to view the observed reference UI;
  other actions or offerings were not assessed.
- **Licence for client work:** Not published. Public viewing does not grant
  reuse rights to the logo, code, screenshots, geometry, or other assets.

Checked on 2026-10-11. The `open_source: false` value means no open-source
release was verified, not that an unpublished source licence was disproved.

## How to use

1. Open the public page in a supported browser and inspect the visual states
   relevant to your brief. Verify that the 3D scene actually renders before
   describing its geometry or animation.
2. Compare desktop and portrait-mobile layouts. A 780 × 493 landscape capture
   showed “Unsupported screen size” and requested portrait or a larger display;
   1440 × 900 and 390 × 844 exposed the controls.
3. Record composition, hierarchy, control placement, and observed behavior in
   your brief. Keep product claims separate from tested behavior.
4. Use [REA](../agents-mcp/rea.md) for bounded browser evidence and the
   [project design workflow](../../WORKFLOW.md) for translating reference
   principles into an original design.
5. Choose actual implementation libraries separately. Do not treat this site as
   a licensed template, downloadable scene, or documented API.

## Examples

There is one public application URL. These are three observed viewport cases,
not separate official demo pages or undocumented deep links:

- [Desktop reference](https://tree.icqr.com/) — at 1440 × 900, inspect the
  centered bottom controls and top-left brand placement; 3D rendering remained
  unverified in the headless environment.
- [Portrait-mobile reference](https://tree.icqr.com/) — at 390 × 844, inspect
  the centered brand and nearly full-width URL/season controls.
- [Small landscape fallback](https://tree.icqr.com/) — at 780 × 493, observe the
  explicit unsupported-size message rather than assuming every viewport receives
  the same interface.

## When to use it

- Use it as a specific reference for connecting a product concept to a spatial
  interaction and for positioning controls around a large visual region.
- Use its observed responsive states to inform your own viewport acceptance
  checks, rather than blindly copying its size restrictions.
- Skip it as an implementation source when you need documented packages, APIs,
  source licences, or a guaranteed reusable 3D model.

## Agent notes

- Primary URL: `https://tree.icqr.com/`; inspect real renders, not metadata
  alone.
- `agent_friendly: false` does not make this reference useless. A browser and
  [REA](../agents-mcp/rea.md) can collect evidence, but that does not create a
  published site API or grant asset rights.
- [Study evidence](../../research/tree-icqr-study.md) distinguishes static
  metadata, actual runtime controls, viewport captures, and graphics limits.
- Full tree appearance, season transitions, sound behavior, sharing, keyboard
  traversal, reduced motion, performance, and QR scannability remain unverified.
- Preserve source attribution and build an original composition with separately
  documented, licence-checked tools. Do not commit this site's assets here.

## Alternatives in this repo

- [Awwwards](../design-galleries/awwwards.md) — a broader inspiration source.
- [Saaspo](../design-galleries/saaspo.md) — SaaS page and section references.
- [React Three Fiber](../3d/react-three-fiber.md) — an implementation library
  for a React project's original 3D experience, not an equivalent gallery.

## Sources

- [Official public page](https://tree.icqr.com/) — metadata and runtime UI
  checked 2026-10-11 with REA 6.4.0 and an isolated Chrome session.
- [ICQR study](../../research/tree-icqr-study.md) — observation method, captured
  viewport states, evidence hashes, and limitations; checked 2026-10-11.
- [REA browser guide](https://rea.tools/guides/browser/) — inspection method
  checked 2026-10-11.
