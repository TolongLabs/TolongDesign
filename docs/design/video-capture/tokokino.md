---
name: Tokokino
slug: tokokino
section: Video & Capture
section_slug: video-capture
source_url: 'https://tokokino.com/'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: 'In-browser editor for device framing and mockups.'
paywall: free
pricing_summary:
  'Completely free and open source under the AGPL-3.0 licence with local-first
  in-browser rendering.'
open_source: true
license: AGPL-3.0
category_tags: [mockups, device-frames, video-editor, screenshots, open-source]
best_for:
  [
    in-browser device mockups,
    animated product reveals,
    high-resolution still exports,
    social media demo graphics
  ]
stack: [react, nextjs, typescript, tailwind]
agent_friendly: true
last_verified: 2026-10-07
---

# Tokokino

> In-browser editor for device framing and mockups. TolongLabs developers reach
> for Tokokino to wrap web and mobile captures into pixel-accurate 3D device
> frames, animated timeline reveals, and 8K export stills entirely in the
> browser.

## At a glance

| Field          | Value                                                                     |
| -------------- | ------------------------------------------------------------------------- |
| Source         | [tokokino.com](https://tokokino.com/)                                     |
| Paywall        | **Free** — 100% free and open source                                      |
| Open source    | Yes — AGPL-3.0 ([GitHub](https://github.com/ShivaBhattacharjee/tokokino)) |
| Type           | In-browser device mockup generator and timeline animation editor          |
| Works with     | Modern web browsers (Chrome, Safari, Firefox), Next.js, WebGL             |
| Best for       | Device framing, animated mockups, social graphics, 8K stills              |
| Agent-friendly | Yes — open-source React codebase, client-side rendering pipeline          |

## What it is

Tokokino is an open-source, local-first web application created by Shiva
Bhattacharjee for styling screenshots, mockups, and interactive product demo
videos. Designed as an agile alternative to heavy design software like Figma or
After Effects, Tokokino allows developers to transform raw screen captures into
striking, publication-ready visual assets directly in the browser.

The application includes a rich collection of pixel-accurate device frames:
iPhone, iPad, Google Pixel, Samsung Galaxy, MacBook, iMac, Apple Watch, and
browser chrome shells (Safari, Chrome, Arc). Users can sample automatic color
palettes directly from their uploaded captures, choose from eight realistic
shadow algorithms (Drop, Soft, Hard, Glow, Float, Linear, Contact, Stack), and
overlay custom typography with over 100 Google Fonts.

Beyond static mockups, Tokokino features a built-in animation timeline. Users
can keyframe position, tilt angles, zoom scales, shadow depth, lighting, and
camera perspectives to produce animated product reveals and screen flows,
exporting the result as high-framerate GIFs or WebM/MP4 video files with
optional background audio.

## Paywall and pricing

- **Free:** 100% free and open source. All features—including all device frames,
  timeline keyframing, shadow models, high-resolution exports up to 8K, and
  video rendering—are available without subscriptions or watermarks.
- **Paid:** None. No pro tiers, paywalls, or feature locks.
- **Sign-up required?** No. No account or email login required to access the
  full editor and export assets.
- **Licence for client work:** Distributed under the GNU AGPLv3 license. Free
  for generating commercial marketing graphics, client landing page assets, and
  app store promotional screenshots.

Checked on the official repository and web editor on 2026-10-07.

## How to use

1. Open the Tokokino web editor at `https://tokokino.com/` and click "Start
   editing".

2. Import your screen capture or flow:

- Drag and drop a PNG/JPEG screenshot or MP4 video recording into the canvas.

3. Select a device frame:

- Open the Device panel and select your desired frame: MacBook Pro, iPhone 16
  Pro, iPad Air, or Safari browser chrome.
- Tokokino automatically wraps the capture with realistic bezel curvature and
  screen glare.

4. Customize lighting, shadows, and background:

- Select an auto-generated palette sampled harmoniously from your screenshot.
- Adjust shadow parameters: choose "Contact" or "Float" shadow and dial blur
  radius and elevation.
- Add annotations, badge pills, or text callouts styled with custom fonts.

5. Animate or export:

- **For Stills:** Click **Export** to save PNG, WebP, or JPEG files at HD, 4K,
  or 8K resolution.
- **For Motion:** Switch to the Timeline view, set keyframes for camera zoom and
  device tilt, and render the animation to an animated GIF or WebM video.

## Examples

- [Tokokino Web Editor](https://tokokino.com/) — Interactive canvas supporting
  real-time device framing, shadow models, and timeline scrubbing.
- [Tokokino GitHub Repository](https://github.com/ShivaBhattacharjee/tokokino) —
  Open-source Next.js repository with full frontend source code.
- [Tokokino Template Gallery](https://tokokino.com/) — Pre-configured layout
  templates for App Store screenshots, Product Hunt launches, and Twitter
  banners.

## When to use it

- Use it when you need to showcase web and mobile interfaces inside
  photorealistic hardware frames (MacBook, iPhone, Safari) for landing page
  heroes or documentation.
- Use it to create animated device reveal videos and social media announcement
  teasers without opening Figma or Premiere Pro.
- Skip it if you need programmatic, code-defined animations integrated into a
  React codebase; use [Remocn](../video-capture/remocn.md) or
  [Remotion](../video-capture/remotion.md) instead.
- Skip it if you specifically need angled 3D camera sweeps across an infinite
  plane; use [Slant It](../video-capture/slant-it.md) instead.

## Agent notes

- Open-source repository: `https://github.com/ShivaBhattacharjee/tokokino`.
- Runs fully in-browser with local-first processing; no image data or video
  frames are sent to remote servers.
- Ideal reference for coding agents looking to study modern Next.js, Canvas, and
  WebGL compositing pipelines.

## Alternatives in this repo

- [Slant It](../video-capture/slant-it.md) — In-browser tool for turning screen
  recordings into 3D perspective animations with realistic reflections.
- [BetterShot](../video-capture/bettershot.md) — Open-source native Mac screen
  recorder and screenshot utility with custom frames and annotations.
- [Remocn](../video-capture/remocn.md) — Open-source motion graphics and
  animation component library for Remotion and React.

## Sources

- [Official site](https://tokokino.com/) — checked 2026-10-07
- [GitHub repository](https://github.com/ShivaBhattacharjee/tokokino) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/utilities)
