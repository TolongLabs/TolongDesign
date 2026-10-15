---
name: DotForge
slug: dotforge
section: Utilities
section_slug: utilities
source_url: https://dotforge.vercel.app/
designeer_url: https://designeer.xyz/utilities
designeer_blurb: Real-time dither effect generator for web.
paywall: free
pricing_summary:
  'Completely free real-time browser tool; no paid tiers or sign-up required.'
open_source: false
license: proprietary
category_tags: [dithering, retro, canvas, animation, video-export]
best_for: [dither effects, retro visuals, pixel art animation, video export]
stack: []
execution_mode: browser-app
surface: ['video', 'web-asset']
status: active
agent_friendly: false
last_verified: 2026-10-07
---

# DotForge

> Real-time dither effect generator for web. TolongLabs developers reach for
> DotForge to generate stylized retro dither animations, halftone graphics, and
> color-quantized video loops for brutalist and vintage web designs.

## At a glance

| Field          | Value                                                           |
| -------------- | --------------------------------------------------------------- |
| Source         | [dotforge.vercel.app](https://dotforge.vercel.app/)             |
| Paywall        | **Free** — 100% free; no paid plans or subscriptions            |
| Open source    | No — Proprietary browser application deployed on Vercel         |
| Type           | Real-time dither animation generator and canvas effect builder  |
| Works with     | WebGL, Canvas, PNG, WebM, MP4, Embed HTML                       |
| Best for       | Dither effects, retro visuals, pixel art animation, video loops |
| Agent-friendly | No — Interactive graphical canvas workspace                     |

## What it is

DotForge is an interactive, browser-based visual studio for creating real-time
dither effects and motion graphics. Embracing the retro computing and
neo-brutalist design trends, DotForge applies algorithmic color reduction and
spatial patterning to images, text, and 3D shapes.

The application contains more than 50 visual effects and mathematical dither
algorithms, including ordered Bayer matrices (Bayer 4x4, Bayer 8x8), Halftone
screens, Blue Noise, Crosshatch, Diamond, Spiral, and ASCII character dithering.
Users can upload custom images, enter 3D rotating text, or manipulate geometric
primitives in 3D space with real-time controls for pitch, yaw, roll, and spin
speed.

DotForge provides fine-grained controls over palette limits,
foreground/background swaps, color blending modes, pixel scale, and
post-processing bloom. Exports can be saved as static high-res PNGs, animated
WebM/MP4 video recordings, or embeddable HTML/canvas snippets.

## Paywall and pricing

- **Free:** All 50+ effects, 3D text tools, video recording captures, and code
  exports are completely free.
- **Paid:** None. There are no paid tiers or premium features.
- **Sign-up required?** No. Operates directly in the browser without an account.
- **Licence for client work:** Exported images, videos, and embed code can be
  freely integrated into personal, editorial, and commercial client projects.

Verified on the live application on 2026-10-07.

## How to use

1. Open [dotforge.vercel.app](https://dotforge.vercel.app/) on a desktop screen.
2. Select your content source: upload an image, type 3D text, or pick a built-in
   preset.
3. Select a dither pattern from the Dither menu (e.g. Bayer 8x8, Halftone, or
   Blue Noise).
4. Tweak color palettes, threshold spread, pixel scale, and animation speed.
5. In the Export drawer, choose your target format:
   - High-resolution PNG (up to 1920x1080).
   - Animated Video (WebM or MP4, 5 to 15 seconds).
   - Embed HTML code.
6. Insert the exported asset into your website:

```html
<!-- Dithered video loop in a retro-themed landing page -->
<div
  class="relative overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950 p-2"
>
  <video
    src="/media/dither-hero.mp4"
    autoplay
    loop
    muted
    playsinline
    class="w-full rounded"
  />
</div>
```

## Examples

- [DotForge Studio](https://dotforge.vercel.app/) — Main canvas studio featuring
  real-time parameter sliders and effect presets.
- [Bayer & Halftone Algorithms](https://dotforge.vercel.app/) — Demonstration of
  classic ordered matrix and continuous halftone dithering.
- [3D Text Dither Mode](https://dotforge.vercel.app/) — Dynamic real-time 3D
  text rotator rendered through customizable ASCII and dither matrices.

## When to use it

- Use it when designing brutalist, cyberpunk, early-web, or retro
  gaming-inspired websites that need textured pixel art visual assets.
- Use it to create eye-catching animated video headers and backgrounds that feel
  distinct from standard clean photographic imagery.
- Skip it for clean photographic image compression; use
  [Squoosh](../utilities/squoosh.md) instead.
- Skip it if you need pure text ASCII art without motion; use
  [ASCIInator](../utilities/asciinator.md) instead.

## Agent notes

- Official application: `https://dotforge.vercel.app/`.
- Desktop/tablet screen recommended due to the density of canvas controls.
- Can export both raster video clips and lightweight embeddable HTML/canvas
  code.

## Alternatives in this repo

- [ASCIInator](../utilities/asciinator.md) — Dedicated browser tool for
  converting static imagery into clean ASCII text art.
- [Playgrnd](../utilities/playgrnd.md) — Collection of offline generative art
  tools including dithered landmasses and textures.
- [Squoosh](../utilities/squoosh.md) — Image optimizer with standard lossy and
  lossless codecs.

## Sources

- [Official site](https://dotforge.vercel.app/) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/utilities)
