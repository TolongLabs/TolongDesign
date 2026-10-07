---
name: Recordly
slug: recordly
section: Video & Capture
section_slug: video-capture
source_url: 'https://recordly.dev/'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: 'Screen recording tool for polished developer demos.'
paywall: free
pricing_summary:
  'Completely free and open source under the AGPL-3.0 licence across macOS,
  Windows, and Linux.'
open_source: true
license: AGPL-3.0
category_tags:
  [screen-recording, open-source, auto-zoom, cross-platform, video-editor]
best_for:
  [
    cross-platform developer demos,
    auto-zoom screen recordings,
    smooth cursor paths,
    webcam bubbles
  ]
stack: [electron, typescript, react, vite]
agent_friendly: true
last_verified: 2026-10-07
---

# Recordly

> Screen recording tool for polished developer demos. TolongLabs developers
> reach for Recordly to produce high-impact software demos and walkthroughs with
> automatic zooming, silky cursor smoothing, and multi-track audio across all
> OSes.

## At a glance

| Field          | Value                                                              |
| -------------- | ------------------------------------------------------------------ |
| Source         | [recordly.dev](https://recordly.dev/)                              |
| Paywall        | **Free** — 100% free and open source                               |
| Open source    | Yes — AGPL-3.0 ([GitHub](https://github.com/webadderall/Recordly)) |
| Type           | Cross-platform desktop screen recorder and timeline editor         |
| Works with     | macOS, Windows, Linux, Electron, Vite, TypeScript                  |
| Best for       | Cross-platform demos, auto-zooms, dynamic webcam overlays          |
| Agent-friendly | Yes — open-source codebase, `.recordly` JSON project schema        |

## What it is

Recordly is a modern, open-source screen recorder and video editor engineered to
make professional product demos accessible to every developer. Built with
Electron, Vite, and React, Recordly breaks the historical limitation where
high-end screen recording utilities with automated zoom features were locked
exclusively to macOS.

While recording, Recordly tracks cursor coordinates and user clicks. In the
integrated post-recording editor, it applies automatic zoom transitions that
focus on active clicks, smooths out erratic mouse motion, and frames the
recording against customizable gradient or blurred backdrops.

Recordly features an intuitive multi-track timeline interface where users can
fine-tune video speeds, adjust zoom durations, overlay annotations, and edit
dual-source synchronized audio (microphone and system sound). Recordings can be
saved as native `.recordly` project bundles, allowing developers to reopen and
re-edit layout and zoom parameters at any time.

## Paywall and pricing

- **Free:** 100% free and open source. All capabilities—including unlimited
  recording lengths, auto-zooming, high-resolution exports, dynamic webcam
  bubbles, and project saves—are available without fees or watermarks.
- **Paid:** None. No subscription tiers, pro plans, or paid feature gates.
  Community tips and sponsorships are supported.
- **Sign-up required?** No. No account creation or authentication needed.
- **Licence for client work:** Distributed under the GNU AGPLv3 license. Free
  for creating commercial product demos, client walkthroughs, and documentation.

Checked on the official repository and website documentation on 2026-10-07.

## How to use

1. Download the pre-built installer for macOS, Windows, or Linux from the
   official website (`https://recordly.dev/`) or GitHub Releases.

2. Launch Recordly and configure recording inputs:

- Select the target display or application window.
- Select your microphone input and enable system audio capture.
- Enable the dynamic webcam overlay bubble (which automatically resizes and
  moves to stay clear of active UI interactions).

3. Record your walkthrough:

- Click **Start Recording** and perform your demo steps normally.
- Recordly captures raw video frames alongside timestamped cursor positions.

4. Edit the timeline:

- Review the automated zoom triggers generated around user clicks.
- Drag and drop timeline blocks to trim dead air or accelerate long loading
  bars.
- Add annotations, text callouts, or adjust background padding and corner
  radius.

5. Export the finished video:

- Export directly to MP4 or WebM format.
- Save the project file (`.recordly`) to version control or local project
  archives for future updates.

## Examples

- [Recordly Official Site](https://recordly.dev/) — Video samples demonstrating
  silky cursor motion, auto-zooming, and dynamic webcam bubbles.
- [Recordly GitHub Repository](https://github.com/webadderall/Recordly) — Source
  code, community contributions, and issue discussions with over 32,000 stars.
- [Recordly Releases](https://github.com/webadderall/Recordly/releases) —
  Downloadable binaries for macOS (dmg), Windows (exe/msi), and Linux
  (AppImage/deb).

## When to use it

- Use it when you need Screen Studio-style auto-zooms and polished cursor
  animations on Linux or Windows development workstations.
- Use it on macOS when you want a completely free, open-source alternative to
  proprietary subscription screen recorders.
- Skip it if you want lightweight in-browser recording without installing
  desktop packages; use [Cursorful](../video-capture/cursorful.md) instead.
- Skip it if you need programmatic, code-defined animations; use
  [Remotion](../video-capture/remotion.md) instead.

## Agent notes

- GitHub repository: `https://github.com/webadderall/Recordly`.
- Projects are saved as `.recordly` files containing JSON metadata describing
  timeline cuts, zoom coordinates, and asset references.
- Coding agents can inspect and modify `.recordly` project manifests directly to
  automate timeline edits or title text overlays.

## Alternatives in this repo

- [BetterShot](../video-capture/bettershot.md) — Free and open-source native
  macOS SwiftUI screen recorder and screenshot tool.
- [Cursorful](../video-capture/cursorful.md) — Screen recorder with automatic
  zoom available as a browser extension and desktop utility.
- [Screen Studio](../video-capture/screen-studio.md) — Commercial macOS screen
  recorder with high-fidelity camera zooms and cursor smoothing.

## Sources

- [Official site](https://recordly.dev/) — checked 2026-10-07
- [GitHub repository](https://github.com/webadderall/Recordly) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/utilities)
