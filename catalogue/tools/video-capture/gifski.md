---
name: Gifski
slug: gifski
section: Video & Capture
section_slug: video-capture
source_url: 'https://gif.ski/'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: 'High-quality video-to-GIF converter preserving framerates.'
paywall: free
pricing_summary:
  'Completely free and open source under the AGPL-3.0 licence with no paid tiers
  or restrictions.'
open_source: true
license: AGPL-3.0
category_tags: [gif, video-converter, rust, cli, compression]
best_for:
  [
    high-quality gif generation,
    github readme demos,
    documentation embeds,
    pull request animations
  ]
stack: ['rust', 'c', 'cli']
execution_mode: mcp-skill
surface: ['video']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Gifski

> High-quality video-to-GIF converter preserving framerates. TolongLabs
> developers reach for Gifski to convert high-definition MP4 demo recordings
> into crisp, smooth 50fps GIFs for GitHub README files and documentation
> without color banding.

## At a glance

| Field          | Value                                                           |
| -------------- | --------------------------------------------------------------- |
| Source         | [gif.ski](https://gif.ski/)                                     |
| Paywall        | **Free** — 100% free and open source                            |
| Open source    | Yes — AGPL-3.0 ([GitHub](https://github.com/ImageOptim/gifski)) |
| Type           | High-end GIF encoder CLI and native macOS application           |
| Works with     | macOS, Linux, Windows, Rust, Cargo, FFmpeg, Homebrew            |
| Best for       | GitHub README demos, pull request clips, smooth web GIFs        |
| Agent-friendly | Yes — scriptable CLI binary, Rust library crate, C API          |

## What it is

Gifski is a world-class GIF encoder developed in Rust by Kornel Lesiński (the
author of `pngquant` and ImageOptim). Designed to squeeze the absolute maximum
visual quality out of the notoriously constrained, 37-year-old GIF format,
Gifski solves the banding, dithering noise, and framerate stutters typical of
naive conversion tools.

While standard GIF tools are limited to a single 256-color palette across an
entire animation—or produce jarring color flicker with naive per-frame
palettes—Gifski combines advanced cross-frame quantization with cross-frame
temporal error diffusion dithering. By computing custom palettes and
distributing color variations smoothly over time, it generates animations that
approach 24-bit truecolor fidelity while retaining strict compatibility with any
browser or Markdown viewer.

Gifski is distributed as both a command-line tool for developers and CI/CD
pipelines, and a standalone native macOS desktop drag-and-drop utility created
by Sindre Sorhus. It can accept raw video files (MP4, MOV, WebM) via FFmpeg or
raw PNG frame sequences, producing lightweight, stutter-free animations up to
50fps.

## Paywall and pricing

- **Free:** Completely free and open source. The CLI, Rust crate, C library, and
  open-source macOS builds are free to download and run without limitations.
- **Paid:** None. Optional paid tip jar / alternative proprietary licensing
  options directly from the author for commercial products requiring AGPL
  exemption.
- **Sign-up required?** No. No account or registration needed.
- **Licence for client work:** Distributed under the GNU AGPLv3 license. Free
  for internal developer tooling, CI build scripts, and generating marketing
  GIFs for client websites and documentation.

Checked on the official website and repository documentation on 2026-10-07.

## How to use

1. Install Gifski CLI via Homebrew or Cargo:

On macOS via Homebrew:

```bash
brew install gifski
```

On Linux or cross-platform via Cargo:

```bash
cargo install gifski
```

2. Convert a recorded MP4 demo video into an optimized GIF using the CLI:

```bash
gifski --fps 30 --width 960 --quality 90 -o demo.gif input.mp4
```

3. Pipeline with FFmpeg for fine-grained frame trimming:

```bash
ffmpeg -ss 00:00:02 -to 00:00:08 -i recording.mov -f yuv4mpegpipe - | gifski -o trimmed-demo.gif -
```

4. Convert an exported PNG image sequence into an animated GIF:

```bash
gifski -o animation.gif --fps 24 frame*.png
```

5. Embed the generated GIF directly into a GitHub project `README.md` or landing
   page asset folder. The file plays automatically across all browsers without
   relying on `<video>` tag autoplay permissions or video codecs.

## Examples

- [Gifski Official Website](https://gif.ski/) — Visual side-by-side comparisons
  demonstrating Gifski versus standard QuickTime and FFmpeg GIF exports.
- [Gifski GitHub Repository](https://github.com/ImageOptim/gifski) — Upstream
  Rust source code, benchmarks, and installation guides.
- [Gifski macOS App](https://sindresorhus.com/gifski) — Sindre Sorhus's native
  Mac wrapper offering drag-and-drop trimming and dimension resizing.

## When to use it

- Use it whenever you need an animated walkthrough embedded in a GitHub README,
  documentation page, or client pull request where raw `<video>` tags are either
  blocked by Markdown renderers or lack autoplay.
- Use it to convert high-resolution screen recordings from Screen Studio,
  BetterShot, or Recordly into crisp, flicker-free GIFs.
- Skip it if your website frontend can use modern `<video>` tags with MP4 or
  WebM; modern video formats achieve 5-10x smaller file sizes than even the best
  GIFs.
- Skip it if you need in-browser device mockups and timeline animations; use
  [Tokokino](../video-capture/tokokino.md) instead.

## Agent notes

- Command-line tool with zero interactive prompt requirements; ideal for coding
  agents to run inside automated build pipelines.
- Reads from standard input (`stdin`) via YUV4MPEG2 streams, allowing piping
  directly from FFmpeg without writing temporary files to disk.
- High memory usage during multi-frame quantization; pass `--width` to cap
  dimensions (e.g. `--width 960` or `--width 1280`) when running in
  resource-limited container environments.

## Alternatives in this repo

- [BetterShot](../video-capture/bettershot.md) — Native Mac screenshot and
  screen recording utility with built-in GIF export capabilities.
- [Recordly](../video-capture/recordly.md) — Open-source screen recording tool
  with automatic cursor zooms and project exports.
- [Tokokino](../video-capture/tokokino.md) — In-browser device mockup and
  product demo editor that renders animated GIF and WebM assets.

## Sources

- [Official site](https://gif.ski/) — checked 2026-10-07
- [GitHub repository](https://github.com/ImageOptim/gifski) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/utilities)
