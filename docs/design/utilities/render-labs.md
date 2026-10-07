---
name: Render Labs
slug: render-labs
section: Utilities
section_slug: utilities
source_url: 'https://render-labs.evlog.cloud/'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: Image rendering tool from evlog team.
paywall: free
pricing_summary:
  'The browser editor opens without sign-in or a payment gate; no price or paid
  tier is published. The source is in an MIT-licensed repository.'
open_source: true
license: MIT
category_tags: [image, rendering, motion]
best_for: [rendered image experiments, motion previews]
stack: [nuxt, vue]
agent_friendly: true
last_verified: 2026-10-07
---

# Render Labs

> Image rendering tool from the evlog team. Its browser editor supports still
> shots, video timelines, camera effects, and stylized exports.

## At a glance

| Field          | Value                                                                                                  |
| -------------- | ------------------------------------------------------------------------------------------------------ |
| Source         | [render-labs.evlog.cloud](https://render-labs.evlog.cloud/)                                            |
| Paywall        | **Free** — the browser editor opened without sign-in or a payment gate                                 |
| Open source    | Yes — MIT ([source in evlog’s GitHub repository](https://github.com/evloghq/evlog/tree/main/apps/lab)) |
| Type           | Browser-based image and video rendering workspace                                                      |
| Works with     | Browser; source app uses Nuxt and Vue                                                                  |
| Best for       | Product shots, short video renders, and stylized exports                                               |
| Agent-friendly | Yes — source is available in an MIT-licensed repository                                                |

## What it is

Render Labs is a browser editor for composing and exporting image and video
renders. On 2026-10-07, Chromium loaded the official page with HTTP 200 and the
title “Render labs by evlog.” The workspace offers Shot and Video modes, media
and text layers, desktop/tablet/phone viewport presets, camera and lighting
controls, stylization options (Dither, ASCII, Halftone, Posterize, and CRT), and
output presets. Its initial canvas says “Nothing on this frame animates.”

The source is the `apps/lab` application in the public `evloghq/evlog`
repository. Its root MIT license applies to the repository; the app package is
named `render-labs` and uses Nuxt. The author also announced the project as open
source. The `/pricing` and `/docs` URLs render Nuxt 404 pages, while the editor
itself opens without a sign-in or payment prompt.

## Paywall and pricing

- **Free:** The editor opened directly in a browser without sign-in or a payment
  gate.
- **Paid:** No plan or price is published; `/pricing` renders a Nuxt 404 page.
- **Sign-up required?** No prompt appeared in the editor checked.
- **Licence for client work:** The application source is covered by the
  repository’s MIT license. No separate terms for user-supplied inputs or
  rendered output were found; use media you have rights to.

Access and pricing were checked on 2026-10-07.

## How to use

1. Open the editor and drop an image or video onto the canvas, or add media and
   text from the layer controls.
2. Choose Shot for a single frame or Video for a timeline, then select the
   target viewport preset.
3. Adjust the camera, focus, lighting, grade, and stylization controls to suit
   the render.
4. Choose an output size and use the visible copy/export controls. Use source
   media cleared for the intended project.

## Examples

- [Shot controls](https://github.com/evloghq/evlog/blob/main/apps/lab/app/components/lab/LabShotBar.vue)
  — source for the single-frame workspace controls.
- [Video timeline](https://github.com/evloghq/evlog/blob/main/apps/lab/app/components/lab/LabTimeline.vue)
  — source for clip and timeline controls.
- [Render effects](https://github.com/evloghq/evlog/blob/main/apps/lab/app/components/lab/LabEffects.vue)
  — source for image and video effect controls.

## When to use it

- Use it when a browser-based still or short video render is useful for a page,
  product mockup, or documentation animation.
- Check output quality and source-media rights before using a render in a client
  deliverable.
- Skip it when the workflow needs a documented API or deterministic build
  integration; no public API was found.

## Agent notes

- The official editor loaded in Chromium on 2026-10-07; `/pricing` and `/docs`
  render Nuxt 404 pages.
- Source is in `evloghq/evlog/apps/lab`; the repository is MIT licensed. There
  is no separate package install command, public API, MCP server, or `llms.txt`.
- The tool is a browser workspace, not a confirmed image-rendering API.

## Alternatives in this repo

- [Tooooools](../utilities/tooooools.md) — a verifiable browser tool for raster
  effects and export.
- [Dither Lab](../utilities/dither-lab.md) — use for a focused image dithering
  experiment.
- [ASCII Studio](../utilities/ascii-studio.md) — use for a documented
  image-to-ASCII workflow.

## Sources

- [Official Render Labs editor](https://render-labs.evlog.cloud/) — checked
  2026-10-07; HTTP 200
- [Official pricing route](https://render-labs.evlog.cloud/pricing) — checked
  2026-10-07; Nuxt 404 page
- [Official docs route](https://render-labs.evlog.cloud/docs) — checked
  2026-10-07; Nuxt 404 page
- [Render Labs source](https://github.com/evloghq/evlog/tree/main/apps/lab) —
  checked 2026-10-07
- [Repository MIT license](https://github.com/evloghq/evlog/blob/main/LICENSE) —
  checked 2026-10-07
- [Author’s open-source announcement](https://www.linkedin.com/posts/hugorcd_just-open-sourced-render-labs-theres-activity-7489003079430979584-2reX)
  — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/utilities) — checked 2026-10-07
