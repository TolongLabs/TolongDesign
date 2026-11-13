---
name: ASCII Motion Studio
slug: ascii-motion-studio
section: Utilities
section_slug: utilities
source_url: 'https://devault-ascii.pages.dev/ascii-generator/app/'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: Not on Designeer; official URL used.
paywall: free
pricing_summary:
  "Entirely free with no account: every style, video-to-ASCII, MP4/GIF export
  and 4K output runs client-side. Devault's separate $9/month Pro plan is for
  its design-inspiration library, not this generator."
open_source: false
license: proprietary
category_tags:
  [
    ascii-art,
    braille,
    dithering,
    halftone,
    video-effects,
    retro,
    terminal-graphics
  ]
best_for:
  [
    ascii art,
    video-to-ascii,
    braille art,
    brick mosaics,
    crt visuals,
    free exports
  ]
stack: []
execution_mode: browser-app
surface: ['web-ui', 'video']
status: active
agent_friendly: false
last_verified: 2026-10-25
---

# ASCII Motion Studio

> Free browser studio turning images and video into ASCII, braille, halftone,
> dither or brick mosaics. The deepest fully-free image- and video-to-ASCII
> converter in this repo — WebGL2 rendering, edge tracing and MP4/GIF export
> with no account and no paid tier.

## At a glance

| Field          | Value                                                                             |
| -------------- | --------------------------------------------------------------------------------- |
| Source         | [devault-ascii.pages.dev](https://devault-ascii.pages.dev/ascii-generator/)       |
| Paywall        | **Free** — everything, no account; Devault Pro ($9/mo) is a separate product      |
| Open source    | No — proprietary, all rendering runs client-side                                  |
| Type           | Web app: image/video → ASCII, braille, halftone, dither, LEGO-style bricks        |
| Works with     | PNG, JPG, WebP input · MP4, MOV, WebM, GIF input · MP4, GIF, JPEG/WebP/PNG export |
| Best for       | Free video-to-ASCII, CRT/terminal visuals, high-quality offline conversion        |
| Agent-friendly | No — pure UI, no API, MCP or URL parameter API beyond presets                     |

## What it is

ASCII Motion Studio is the ASCII art generator made by
[Devault](https://devault.design), a design-inspiration library. It has two
surfaces at `devault-ascii.pages.dev/ascii-generator/`: a landing page of live
demos and an app at `app/`. The app accepts images or video (upload,
drag-and-drop or clipboard paste), renders them live as glyphs in a WebGL2
canvas, and exports stills and animations entirely in the browser — nothing is
uploaded to a server.

Fourteen presets cover the range: Devault, Mono, Old monitor (phosphor CRT with
scanlines, curvature and flicker), Amber glow, Digital rain, Printed page,
Braille, Halftone, True colour, Brick mosaic, plus ASCII/Binary/Dither/Halftone
Gradient overlays that keep the photo visible with glyphs as texture. Ten
character styles underpin them: classic and detailed ASCII ramps, shade blocks
(`█▓▒░`), sparse, binary, braille, halftone dots, dither and LEGO-style bricks
matched to a fixed 33-colour brick palette. Image inputs can be replaced free of
charge by four built-in samples (a rocket video, an orb, a gradient, a
spotlight), so the full pipeline can be tested without any media of your own.

Where it stands out technically: edge tracing (Sobel in a Web Worker) steers
glyphs along contours; a CRT post-processing stack (bloom, scanlines, curvature,
chromatic aberration, vignette, grain, flicker, twinkle) is built in; and
exports reach MP4 at 720p/1080p/4K via WebCodecs, with a GIF fallback for
browsers without it. Storage-free and cookie-free: it honours Do Not Track and
Global Privacy Control, and the single analytics beacon (visit and button counts
to a Cloudflare Worker) is suppressed when either is set.

This entry replaces the former ASCII Studio (asciistudio.space) entry, which
offered a similar image/video → ASCII editor with a React component export; that
tool's pricing page showed only placeholder terms, while ASCII Motion Studio
provides a complete, verifiable free feature set.

## Paywall and pricing

- **Free:** the entire tool — all 14 presets, all 10 character styles, video
  input, edge tracing, CRT effects, MP4/GIF/image export up to 4K, no watermark,
  no sign-up.
- **Paid:** none for the generator. Devault's Pro plan ($9/month, or yearly
  billing shown at devault.design/pricing) unlocks their separate
  design-inspiration library and its MCP server; it is unrelated to this tool.
- **Sign-up required?** No.
- **Licence for client work:** not published. The tool is proprietary; treat
  exported art as your own composition (it renders your media), but no explicit
  output licence is stated.

Checked 2026-10-25.

## How to use

1. Open the [app](https://devault-ascii.pages.dev/ascii-generator/app/) and drop
   an image or video anywhere on the page (or paste from the clipboard, or click
   Upload / Sample). A rocket video sample loads by default.
2. Pick a preset from the rail above the controls, then tune under **Style**
   (character set, custom ramp up to 40 chars, dither pattern, Geist Mono or
   system font, detail 20–400 columns, letter spacing), **On image**
   (keep-photo-underneath overlay with 5 blend modes), **Tone** (brightness,
   contrast, gamma, shadow cutoff, irregularity, auto-levels, invert),
   **Colour** (mono ink or 7 palettes; background dark/black/paper/
   custom/transparent), **Contours** (edge tracing strength) and **Effects**
   (bloom, scanlines, curvature, chromatic aberration, vignette, grain, flicker,
   twinkle, animate). Double-click any slider to reset it.
3. Export from the Export panel: **image** (JPEG/WebP/PNG, size fits the source
   resolution), **video** as MP4 at 720p/1080p/4K (WebCodecs) or GIF fallback,
   from videos or from stills with **Animate** on. Files save as
   `devault-ascii-<timestamp>.<ext>`. Transparent-background PNG export works
   via the Clear background mode (effects off in that mode).
4. To start from a look, link presets by URL:
   `app/?preset=devault|terminal|amber|matrix|newsprint|braille|halftone|colour|bricks|ascii-gradient`
   or `app/?style=dither`. There is no other query API.

An agent can drive the app with a headless browser (the whole workflow above was
verified this way): navigate to the app URL, use `input[type=file]#file` for
media, read the canvas at `#out`, and trigger the export buttons in the export
panel. There is no network API to call instead.

## Examples

- [Devault preset on the sample video](https://devault-ascii.pages.dev/ascii-generator/)
  — the landing hero runs the generator live on a rocket video; the preset pills
  show each style family.
- [Before/after gallery](https://devault-ascii.pages.dev/ascii-generator/#styles)
  — eight draggable comparisons (braille over discs, bricks over gold, colour
  over ring photo, gradients) demonstrating each style's target look.
- [Old monitor / Digital rain presets](https://devault-ascii.pages.dev/ascii-generator/app/?preset=terminal)
  — open the app pre-loaded with the CRT preset; swap the sample for your own
  video to test motion handling.

## When to use it

- Use it when a project needs image- or video-to-ASCII with a free, unlimited,
  client-side pipeline — especially video (MP4/GIF export) and braille or
  brick-mosaic looks.
- Use the Gradient-overlay presets to texture a photo or hero gradient with
  glyphs while keeping the image visible.
- Skip it when you need SVG, HTML or ANSI output — use
  [ASCIInator](asciinator.md) instead — or when an agent must drive renders
  without a browser: [ASCII Magic](ascii-magic.md) has an MCP server.
- Skip it when you need a ready-made component: the former
  [ASCII Studio](https://github.com/vansh-nagar/ascii-studio) (MIT) exported a
  React component; this tool exports media files only.

## Agent notes

- App entry: `https://devault-ascii.pages.dev/ascii-generator/app/`; landing:
  `…/ascii-generator/`. Static Vite build; no cookies, no localStorage, no
  third-party requests (one first-party analytics beacon, suppressed under Do
  Not Track / Global Privacy Control).
- Upload input is `input#file`; stage canvas is `#out`; hold the Compare button
  to peek at the source. Drag-drop and paste are wired on `window`.
- Preset URL params (`?preset=`, `?style=`) apply on load; no other URL API.
- MP4 export requires WebCodecs (recent Chrome, Edge, Safari); otherwise the
  export falls back to GIF (12 fps, ≤15 s, 256-colour quantized).
- Everything renders locally in WebGL2 — safe for confidential media; exports
  are generated in-page.
- The tool honours `prefers-reduced-motion` across its landing animations; the
  app's Animate toggle is user-controlled and unaffected.

## Alternatives in this repo

- [ASCII Magic](ascii-magic.md) — deeper style catalogue (100+) and an MCP
  server for agent-driven renders, but styles and 4K sit behind $8/mo Pro.
- [ASCIInator](asciinator.md) — choose for SVG/HTML/text/ANSI exports rather
  than video and effects.
- [ASCII Studio (retired)](https://github.com/vansh-nagar/ascii-studio) — the
  MIT tool this entry replaces; still open source if a React component export
  matters more than a complete free feature set.
- [ascii.rest](../component-libraries/ascii-rest.md) — pre-built animated ASCII
  pieces as TypeScript modules when conversion is not needed.
- [Tooooools](tooooools.md) — raster effects (dither, dots, CRT) without text
  rendering.

## Sources

- [App](https://devault-ascii.pages.dev/ascii-generator/app/) — checked
  2026-10-25; HTTP 200; full workflow exercised in a headless browser
- [Landing page](https://devault-ascii.pages.dev/ascii-generator/) — checked
  2026-10-25; HTTP 200
- [Devault pricing](https://devault.design/pricing) — checked 2026-10-25; HTTP
  200; confirms Pro $9/mo is for the design library, not the generator
- [Devault](https://devault.design) — checked 2026-10-25; HTTP 200
- [Designeer listing](https://designeer.xyz/utilities) — checked 2026-10-25
