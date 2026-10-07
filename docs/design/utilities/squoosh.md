---
name: Squoosh
slug: squoosh
section: Utilities
section_slug: utilities
source_url: https://squoosh.app/
designeer_url: https://designeer.xyz/utilities
designeer_blurb: Browser image compression with visual comparisons.
paywall: free
pricing_summary: 'Completely free and open source under the Apache-2.0 licence.'
open_source: true
license: Apache-2.0
category_tags: [image-compression, webp, avif, webassembly, performance]
best_for:
  [image compression, web performance, format conversion, visual comparison]
stack: [webassembly, javascript, nodejs]
agent_friendly: true
last_verified: 2026-10-07
---

# Squoosh

> Browser image compression with visual comparisons. TolongLabs developers reach
> for Squoosh to compress bitmaps into modern WebP and AVIF formats while
> inspecting compression artifacts via a 1:1 side-by-side visual slider.

## At a glance

| Field          | Value                                                                    |
| -------------- | ------------------------------------------------------------------------ |
| Source         | [squoosh.app](https://squoosh.app/)                                      |
| Paywall        | **Free** — 100% free and open source                                     |
| Open source    | Yes — Apache-2.0 ([GitHub](https://github.com/GoogleChromeLabs/squoosh)) |
| Type           | WebAssembly image compressor and comparison tool                         |
| Works with     | WebP, AVIF, MozJPEG, OxiPNG, Web browsers, Node.js CLI                   |
| Best for       | Image compression, format conversion, web performance                    |
| Agent-friendly | Yes — CLI tool `@squoosh/cli`, local WebAssembly codecs                  |

## What it is

Squoosh is an open-source image optimization web application built by the Google
Chrome Labs team. Designed to demonstrate the power of WebAssembly (Wasm) in
modern browsers, Squoosh compiles state-of-the-art native image encoders
(including MozJPEG, WebP, AVIF, and OxiPNG) to run directly inside client
hardware.

Because compression runs locally via WebAssembly, images never leave the user's
machine or upload to an external server. This guarantees absolute privacy for
confidential client assets and eliminates network latency.

The web interface features an interactive split-screen comparison slider. Users
can assign different codecs, quality levels, color palettes, and resize options
to the left and right panes, visually inspecting how compression parameters
affect visual clarity and final byte size before downloading.

## Paywall and pricing

- **Free:** The complete web tool, all encoders, PWA offline support, and CLI
  are 100% free.
- **Paid:** None. There are no paid plans or subscriptions.
- **Sign-up required?** No. Squoosh functions without registration or login.
- **Licence for client work:** Distributed under the Apache License 2.0. Images
  optimized with Squoosh can be published freely in commercial and client
  websites.

Verified on the official Google Chrome Labs repository on 2026-10-07.

## How to use

1. Optimize images visually via the web interface:
   - Visit [squoosh.app](https://squoosh.app/) in any modern browser.
   - Drop an image (PNG, JPEG, WebP, AVIF).
   - Select your target format (e.g. WebP or AVIF) and adjust the effort and
     quality sliders.
   - Drag the center divider to compare compression artifacts against the
     original.
   - Click the download icon in the bottom corner.

2. Optimize images via command line / scripting: Use the Squoosh CLI to batch
   compress assets in a web project:

```bash
bunx @squoosh/cli --webp auto --avif auto public/images/*.png
```

3. Configure responsive markup using the optimized images:

```html
<picture>
  <source srcset="/hero.avif" type="image/avif" />
  <source srcset="/hero.webp" type="image/webp" />
  <img
    src="/hero.jpg"
    alt="Platform hero"
    width="1200"
    height="630"
    loading="eager"
  />
</picture>
```

## Examples

- [Squoosh Web Application](https://squoosh.app/) — Client-side compressor with
  split-screen comparison slider and codec controls.
- [GitHub Repository](https://github.com/GoogleChromeLabs/squoosh) — Upstream
  source code and WebAssembly build scripts by Google Chrome Labs.
- [Squoosh Privacy Architecture](https://github.com/GoogleChromeLabs/squoosh/blob/dev/README.md#privacy)
  — Verification that image data remains strictly on-device without remote
  uploads.

## When to use it

- Use it when optimizing large hero banners, marketing photographs, or mockups
  where visual quality cannot be sacrificed.
- Use it to find the ideal quality threshold between AVIF and WebP for a given
  photographic asset.
- Skip it for vector graphics and icons; use [SVGOMG](../utilities/svgomg.md)
  instead.
- Skip it if you need stylized dithering rather than natural photographic
  compression; use [DotForge](../utilities/dotforge.md) instead.

## Agent notes

- Official application: `https://squoosh.app/`.
- Offline Progressive Web App (PWA) compatible.
- While the web app is visual, CLI batch operations can be automated using
  `@squoosh/cli` (`bunx @squoosh/cli`).
- All image encoding operations execute client-side via WebAssembly modules.

## Alternatives in this repo

- [SVGOMG](../utilities/svgomg.md) — Visual optimizer and minifier for vector
  SVG graphics.
- [DotForge](../utilities/dotforge.md) — Real-time dither effect and color
  reduction builder for stylistic visual assets.
- [Anim8](../utilities/anim8.md) — Video to animated vector SVG converter.

## Sources

- [Official site](https://squoosh.app/) — checked 2026-10-07
- [GitHub repository](https://github.com/GoogleChromeLabs/squoosh) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/utilities)
