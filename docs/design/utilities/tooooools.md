---
name: Tooooools
slug: tooooools
section: Utilities
section_slug: utilities
source_url: 'https://www.tooooools.app/'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: In-browser utilities to dither and pixelate images.
paywall: free
pricing_summary:
  'The creator says Tooooools is free for personal and commercial use.'
open_source: false
license: proprietary
category_tags: [image-effects, dithering, pixel-art]
best_for: [image treatments, halftone graphics, animated effects]
stack: []
execution_mode: browser-app
surface: ['web-asset']
status: active
agent_friendly: false
last_verified: 2026-10-07
---

# Tooooools

> In-browser utilities to dither and pixelate images. Use its focused effect
> editors when a project needs a custom raster treatment rather than a stock
> image filter.

## At a glance

| Field          | Value                                         |
| -------------- | --------------------------------------------- |
| Source         | [tooooools.app](https://www.tooooools.app/)   |
| Paywall        | **Free** — personal and commercial use        |
| Open source    | No public source repository linked            |
| Type           | In-browser image and video effects            |
| Works with     | JPG, PNG, and MP4 where an effect supports it |
| Best for       | Dithering, halftone, CRT, and pixel effects   |
| Agent-friendly | No — no API or code interface is published    |

## What it is

Tooooools is a collection of browser-based image effects created by Daniil
Sukhovskoy. The main workflow is to upload media, choose an effect, tune its
controls, and export the canvas.

The site lists effects including stippling, dots, patterns, edge, distortion,
displacement, dithering, bevel, recolor, scatter, cellular automata, gradients,
CRT, and ASCII. Some effects accept video as well as still images.

The individual effect pages expose their own controls. Dithering includes
Floyd–Steinberg and other modes; dots and stippling expose grid or size
settings; CRT offers monitor styles, bloom, and color-convergence controls.

## Paywall and pricing

- **Free:** The official page says the tool is free for personal and commercial
  use. Attribution is not required, though appreciated.
- **Paid:** No subscription or price is listed for the editor.
- **Sign-up required?** No account is shown as a requirement for editing or
  exporting.
- **Licence for client work:** The site explicitly permits personal and
  commercial use. It asks users to consider optional attribution.

Checked 2026-10-07 on the official homepage and effect pages. The site does not
publish a separate software licence or source repository.

## How to use

1. Open an effect page or select an effect from the main menu.
2. Upload a JPG or PNG; use MP4 only on effects that list video support.
3. Set the canvas dimensions, then tune the effect-specific controls. Start with
   a moderate pixel or grid size and adjust after checking the full image.
4. Use preprocessing controls such as blur, grain, gamma, black point, and white
   point to simplify an image before applying the effect.
5. Compare settings at the final intended size. Export the canvas when the
   effect reads well at both detail and thumbnail scales.
6. For effects with vector export, save SVG when the artwork needs to scale or
   continue in a vector editor.

## Examples

- [Dithering](https://www.tooooools.app/effects/dithering) — choose a pattern,
  pixel size, and color mode for a controlled dithered image.
- [Halftone dots](https://www.tooooools.app/effects/dots) — adjust grid type,
  angle, dot size, corner radius, and noise.
- [CRT monitor](https://www.tooooools.app/effects/crt) — tune monitor type,
  bloom, glow, and RGB convergence for a screen-like treatment.
- [Distortion](https://www.tooooools.app/effects/distort) — combine a distortion
  map with horizontal and vertical shift strength.

## When to use it

- Use it to make custom texture or pixel treatments for campaign graphics,
  editorial assets, or a distinctive site illustration.
- Use its dedicated effect page when you already know the treatment you want;
  the controls are more specific than a single generic filter.
- Skip it when the design needs a responsive live effect or a reusable package
  that runs as part of the website interface.

## Agent notes

- The editing workflow runs in the browser; no npm package, API, or CLI is
  documented.
- Keyboard shortcuts shown on the site include Ctrl/Cmd+O to upload and
  Ctrl/Cmd+S to export.
- The homepage says it accepts JPG, PNG, and MP4; individual effect pages may
  support different input combinations.
- Check the selected page's export options before promising SVG or video output.

## Alternatives in this repo

- [Dither Lab](../utilities/dither-lab.md) — a smaller editor focused on
  dithering and tone controls.
- [Screenshot Studio](../utilities/screenshot-studio.md) — use for screenshot
  framing, presentation backgrounds, and mockups.
- [Dither Kit](../component-libraries/dither-kit.md) — use when the effect needs
  to be part of a coded interface.

## Sources

- [Official homepage](https://www.tooooools.app/) — checked 2026-10-07
- [Dithering effect](https://www.tooooools.app/effects/dithering) — checked
  2026-10-07
- [Dots effect](https://www.tooooools.app/effects/dots) — checked 2026-10-07
- [CRT effect](https://www.tooooools.app/effects/crt) — checked 2026-10-07
- [Distortion effect](https://www.tooooools.app/effects/distort) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/utilities) — checked 2026-10-07
