---
name: BetterShot
slug: bettershot
section: Video & Capture
section_slug: video-capture
source_url: 'https://www.bettershot.site/'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: 'Screen recorder featuring cursor zoom and captions.'
paywall: free
pricing_summary:
  'Completely free and open source under the BSD-3-Clause licence with no tiers,
  subscriptions, or watermarks.'
open_source: true
license: BSD-3-Clause
category_tags: [screen-recording, screenshot, macos, swiftui, open-source]
best_for:
  [
    open-source screen recording,
    cursor zooms,
    screenshot annotation,
    self-hosted sharing
  ]
stack: [swift, swiftui]
agent_friendly: true
last_verified: 2026-10-07
---

# BetterShot

> Screen recorder featuring cursor zoom and captions. TolongLabs developers
> reach for BetterShot to record screen walkthroughs with automated cursor zoom
> and annotations on macOS without paying for proprietary subscription
> recorders.

## At a glance

| Field          | Value                                                                           |
| -------------- | ------------------------------------------------------------------------------- |
| Source         | [bettershot.site](https://www.bettershot.site/)                                 |
| Paywall        | **Free** — 100% free and open source ($0 forever)                               |
| Open source    | Yes — BSD-3-Clause ([GitHub](https://github.com/KartikLabhshetwar/better-shot)) |
| Type           | Native macOS SwiftUI screenshot and screen recording app                        |
| Works with     | macOS 14+ Sonoma (Apple silicon and Intel)                                      |
| Best for       | Open-source CleanShot alternative, cursor zooms, annotations                    |
| Agent-friendly | Yes — URL scheme automation, 75+ hotkeys, open-source codebase                  |

## What it is

BetterShot is a modern, open-source screenshot, screen recording, and video
editing application engineered natively in SwiftUI for macOS by Kartik
Labhshetwar. Built as a transparent, free alternative to commercial utilities
like CleanShot X, Loom, and Screen Studio, BetterShot provides professional
capture and presentation capabilities without recurring monthly fees.

The application combines a rapid screenshot tool with an integrated video
editor. For screenshots, BetterShot offers an instant capture deck with
customizable gradient backdrops, padding, drop shadows, numbered step badges,
blur tools, and on-screen color pickers.

For video recordings, BetterShot records high-framerate screen and webcam
footage offline. Its built-in timeline editor allows developers to guide the
viewer's eye by placing smooth camera zooms directly onto the timeline, applying
cursor highlight effects, trimming clips, customizing camera bubble layouts, and
exporting to MP4 or animated GIFs without watermarks. It also supports
self-hosted S3/R2 cloud uploads for teams wanting private, brand-owned share
links.

## Paywall and pricing

- **Free ($0 Forever):** Completely free. All features—including unlimited
  recordings, 4K exports, cursor zooms, timeline editing, annotations, and URL
  scheme automation—are unrestricted with no trials or locked tiers.
- **Paid:** None. There are no paid subscriptions or licenses.
- **Sign-up required?** No. No account or email registration required.
- **Licence for client work:** Distributed under the BSD 3-Clause License. Fully
  permitted for commercial workflows, client demo recordings, and agency assets.

Checked on the official website and GitHub repository on 2026-10-07.

## How to use

1. Download the latest BetterShot DMG release from GitHub:

```bash
curl -LO https://github.com/KartikLabhshetwar/better-shot/releases/latest/download/BetterShot-arm64.dmg
```

Mount the disk image and drag BetterShot into your `/Applications` directory.

2. Launch BetterShot and grant macOS Screen Recording and Accessibility
   permissions.

3. Configure custom shortcuts for capture:

- Open Settings to map shortcuts for Area Screenshot, Fullscreen Screenshot, or
  Video Recording.
- Customize your preferred screenshot canvas background (gradient presets,
  corner radius, shadow softness).

4. Record an interface walkthrough:

- Press your recording hotkey and select your browser viewport.
- Record your interaction, narration, and webcam bubble.
- Stop recording to open the integrated BetterShot video editor.

5. Add camera zooms and export:

- Scrub the timeline to points of interest (e.g. clicking a dropdown or typing
  in a terminal).
- Click "Add Zoom" to focus the camera frame onto that specific region.
- Click **Export** to render an optimized MP4 video or generate a GIF for
  inclusion in pull requests and release notes.

## Examples

- [BetterShot Official Website](https://www.bettershot.site/) — Interactive tour
  of screenshot styling, video timeline editor, and feature comparison.
- [BetterShot GitHub Repository](https://github.com/KartikLabhshetwar/better-shot)
  — Full SwiftUI source code, releases, and architectural documentation.
- [BetterShot Release Notes](https://github.com/KartikLabhshetwar/better-shot/releases)
  — Changelog tracking additions like custom S3 uploads and URL scheme
  automation.

## When to use it

- Use it when you want a free, open-source replacement for CleanShot X or Loom
  on macOS that runs completely offline with zero telemetry.
- Use it to create product walkthroughs with cursor zooms and beautiful
  background padding without paying a monthly Screen Studio subscription.
- Skip it if you need programmatic, code-based video generation with React; use
  [Remotion](../video-capture/remotion.md) instead.
- Skip it if you need cross-platform recording support on Linux or Windows; use
  [Recordly](../video-capture/recordly.md) instead.

## Agent notes

- Open-source SwiftUI application:
  `https://github.com/KartikLabhshetwar/better-shot`.
- Supports macOS URL scheme triggers (`bettershot://capture`) for scriptable
  capture automation.
- All recordings and screenshots process locally; supports custom S3/Cloudflare
  R2 endpoints for automated cloud uploads without third-party vendor lock-in.

## Alternatives in this repo

- [CleanShot X](../desktop/cleanshot-x.md) — The premier proprietary Mac
  screenshot utility with scrolling capture and cloud hosting.
- [Recordly](../video-capture/recordly.md) — Open-source cross-platform screen
  recorder with auto-zoom and timeline editing.
- [Screen Studio](../video-capture/screen-studio.md) — Commercial macOS screen
  recorder with automatic bezier cursor smoothing and cinematic camera zooms.

## Sources

- [Official site](https://www.bettershot.site/) — checked 2026-10-07
- [GitHub repository](https://github.com/KartikLabhshetwar/better-shot) —
  checked 2026-10-07
- [Designeer listing](https://designeer.xyz/utilities)
