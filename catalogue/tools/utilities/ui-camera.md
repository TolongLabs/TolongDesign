---
name: ui.camera
slug: ui-camera
section: Utilities
section_slug: utilities
source_url: https://ui.camera/
designeer_url: https://designeer.xyz/utilities
designeer_blurb: 3D mockups and scene staging for software.
paywall: free
pricing_summary:
  'Free browser-based 3D staging tool; pricing plans not published.'
open_source: false
license: proprietary
category_tags: [mockups, 3d, screenshots, product-photography, staging]
best_for:
  [software mockups, product photography, landing page visuals, pitch decks]
stack: []
execution_mode: browser-app
surface: ['web-asset', 'video']
status: active
agent_friendly: false
last_verified: 2026-10-07
---

# ui.camera

> 3D mockups and scene staging for software. TolongLabs developers reach for
> ui.camera to transform flat UI screenshots into photorealistic 3D staged
> mockups with real camera optics and cinematic depth of field.

## At a glance

| Field          | Value                                                        |
| -------------- | ------------------------------------------------------------ |
| Source         | [ui.camera](https://ui.camera/)                              |
| Paywall        | **Free** — Browser-based 3D staging; no paywall published    |
| Open source    | No — Proprietary browser application                         |
| Type           | 3D software mockup and scene staging tool                    |
| Works with     | PNG, JPG, WebP, AVIF, GIF, MP4, MOV, WebM                    |
| Best for       | Software mockups, product photography, landing page hero art |
| Agent-friendly | No — Interactive 3D viewport and camera controls             |

## What it is

ui.camera is a browser-based creative tool designed for digital product
photography and software staging. Created to replace clunky Photoshop PSD
templates and complex 3D software like Blender for routine marketing tasks,
ui.camera enables designers and developers to stage realistic 3D angles of their
software directly in the browser.

Users upload still screenshots (PNG, JPG, WebP, AVIF) or screen recordings (MP4,
MOV, WebM). The tool projects the media onto virtual screens positioned in 3D
space, providing precise camera parameters: 3-axis rotation (pitch, yaw, roll),
focal length, aperture blur (depth of field), lighting intensity, and custom
background staging.

Because it supports both still graphics and looped video formats, developers can
create high-impact hero section assets where application videos play smoothly
inside isometric or perspective-skewed device frames.

## Paywall and pricing

- **Free:** Staging 3D scenes, uploading screenshots and video captures,
  adjusting camera optics, and exporting visuals are available in the browser.
- **Paid:** Not published. The platform does not currently display a public
  pricing table or subscription wall for its core staging features.
- **Sign-up required?** Optional. You can stage mockups immediately without an
  account; signing up enables saving multi-asset projects.
- **Licence for client work:** Visual assets produced with ui.camera can be used
  in client marketing websites, product launches, and commercial pitch decks.

Verified on the official web application on 2026-10-07.

## How to use

1. Go to [ui.camera](https://ui.camera/) in your browser.
2. Drag and drop your product screenshots or an MP4 screen recording into the
   media tray.
3. Select your target canvas aspect ratio (e.g. 16:9 for website heroes, 1:1 for
   social cards).
4. Use the 3D controls to orient the camera view:
   - Adjust `X` (pitch), `Y` (yaw), and `Z` (roll) angles.
   - Adjust the aperture slider (`AF ƒ`) to set subtle depth-of-field blur.
5. Configure background lighting, shadows, and environment colors.
6. Export the final high-resolution render as an AVIF/PNG image or MP4 video
   loop for your website:

```html
<div class="relative mx-auto max-w-5xl rounded-2xl p-4 shadow-2xl">
  <!-- Staged 3D product visual -->
  <video
    src="/media/dashboard-staged.mp4"
    autoplay
    loop
    muted
    playsinline
    class="w-full rounded-xl"
  />
</div>
```

## Examples

- [ui.camera Studio](https://ui.camera/) — Interactive browser workspace for 3D
  screen staging and virtual camera control.
- [Sample Staging Gallery](https://ui.camera/) — Built-in demo presets
  showcasing staged mockups of applications like Linear and ElevenLabs.
- [Video Export Preview](https://ui.camera/) — Real-time rendering of animated
  MP4 screen recordings inside 3D perspectives.

## When to use it

- Use it when designing hero sections for SaaS landing pages, feature reveals,
  or portfolio case studies.
- Use it when you want photorealistic perspective and depth of field without
  rendering scenes in Blender or purchasing mockup stock packs.
- Skip it for simple flat code snippets; use [Ray.so](../utilities/ray-so.md)
  instead.
- Skip it if you need Open Graph social meta card previews; use
  [OGFolio](../utilities/ogfolio.md) instead.

## Agent notes

- Official application: `https://ui.camera/`.
- Runs fully in WebGL/Canvas; intended for visual design workflows by developers
  and designers.
- Accepts both raster images (PNG, WebP, AVIF) and video files (MP4, WebM) as
  input textures.

## Alternatives in this repo

- [Ray.so](../utilities/ray-so.md) — Fast screenshot generator for styled code
  snippets and terminal captures.
- [OGFolio](../utilities/ogfolio.md) — Gallery and inspector for social share
  cards and Open Graph visuals.
- [Anim8](../utilities/anim8.md) — Video to animated vector SVG converter.

## Sources

- [Official site](https://ui.camera/) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/utilities)
