---
name: Canario
slug: canario
section: Desktop
section_slug: desktop
source_url: 'https://rioterm.com/canario'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: 'Terminal organizing CLI sessions into panes.'
paywall: free
pricing_summary:
  'Free during public beta for macOS 14+ on Apple silicon with no paywalls or
  required sign-ups.'
open_source: true
license: MIT
category_tags: [terminal, cli, macos, rust, tabs]
best_for:
  [
    multi-pane development,
    live tab previews,
    command bar navigation,
    terminal image extraction
  ]
stack: [rust, bash, zsh, fish]
agent_friendly: true
last_verified: 2026-10-07
---

# Canario

> Terminal organizing CLI sessions into panes. TolongLabs developers reach for
> Canario to run agent loops, dev servers, and editors side-by-side with
> browser-style workspaces, live tab hover previews, and native image
> extraction.

## At a glance

| Field          | Value                                                       |
| -------------- | ----------------------------------------------------------- |
| Source         | [rioterm.com/canario](https://rioterm.com/canario)          |
| Paywall        | **Free** — public beta, free for macOS 14+ Apple silicon    |
| Open source    | Yes — MIT ([GitHub](https://github.com/raphamorim/rio))     |
| Type           | Native macOS terminal emulator built on librio              |
| Works with     | macOS 14+ Sonoma on Apple silicon, Zsh, Bash, Fish          |
| Best for       | Multi-pane dev setups, hover previews, drag-and-drop images |
| Agent-friendly | Yes — Kitty graphics protocol, fast PTY, standard CLI input |

## What it is

Canario is a specialized macOS terminal emulator developed by Rapha Amorim as a
modern spin-off of Rio Terminal. Built atop the high-performance `librio` Rust
engine, Canario inherits Rio's GPU-accelerated rendering, color fidelity, and
virtual terminal parser, but wraps it in an interaction model designed to think
like a modern web browser.

Instead of managing convoluted tmux configuration files or struggling with rigid
terminal windows, Canario structures command sessions into distinct Spaces,
flexible split panes, and tabs. A standout feature is live tab hover previews:
hovering your mouse over any background tab or pane in the sidebar renders an
instant live thumbnail of that shell session. Developers can confirm whether a
Vite build has finished or an AI agent has paused for user input without
switching active focus.

Canario also rethinks media interactions in the CLI. By implementing the Kitty
graphics protocol, images render crisply inside terminal buffers. Clicking an
image displays it in a lightbox where macOS Live Text extracts text or QR codes
directly from rendered pixels, and images can be dragged straight out of the
terminal buffer into Slack or Figma as standard PNG files.

## Paywall and pricing

- **Free:** The Canario beta is completely free to download and use on macOS.
- **Paid:** None. No subscription tiers, pro licenses, or paywalls exist. Users
  may optionally sponsor Rio development via GitHub Sponsors.
- **Sign-up required?** No. No account creation or telemetry login required.
- **Licence for client work:** Core engine distributed under the MIT License.
  Freely permitted for commercial and client software development.

Checked on the official Rio and Canario documentation on 2026-10-07.

## How to use

1. Download Canario DMG from the official website
   (`https://rioterm.com/canario`) or install the Rio ecosystem package.

2. Launch Canario on macOS Sonoma (14.0+) running on Apple silicon.

3. Organize development environments into split panes:

- Press `Cmd + D` to split the active pane vertically.
- Press `Shift + Cmd + D` to split horizontally.
- Navigate across panes using `Option + Cmd + Arrow` keys or cycle with
  `Cmd + [` and `Cmd + ]`.
- Each pane retains its individual working directory, scrollback buffer, and
  process state even across application restarts.

4. Use the global Command Bar (`Cmd + K`):

- Press `Cmd + K` to fuzzy-search across open tabs, active pane titles, or
  trigger built-in actions like font zooming or space toggles.

5. Extract visual assets and logs:

- Run scripts that output images (e.g. charts or badge generators).
- Click the rendered image to trigger macOS Live Text OCR.
- Drag the image directly out of Canario onto your desktop or into a browser
  window.

## Examples

- [Canario Landing Page](https://rioterm.com/canario) — Visual showcase of live
  tab previews, dynamic splits, and Kitty graphics integration.
- [Rio Terminal Documentation](https://rioterm.com/docs/install) — Upstream
  reference for configuration options, keybindings, and terminal emulation
  features.
- [Rio GitHub Repository](https://github.com/raphamorim/rio) — Open-source Rust
  rendering engine powering Canario.

## When to use it

- Use it on macOS Apple silicon when running multiple concurrent processes—such
  as Next.js dev servers, AI agent logs, and Git status monitors—side-by-side in
  clean visual splits.
- Use it when you want rich terminal features (splits, image previews,
  drag-and-drop) without the overhead or account requirements of Warp.
- Skip it if you need cross-platform Linux or Windows support; use Rio directly
  or [Warp](../desktop/warp.md).
- Skip it if you primarily need a web browser with split tabs rather than a
  terminal; use [Zen Browser](../desktop/zen-browser.md) instead.

## Agent notes

- Official site: `https://rioterm.com/canario`.
- Upstream engine repo: `https://github.com/raphamorim/rio`.
- Supports Kitty graphics protocol for in-terminal raster rendering.
- Fast PTY handling makes it well-suited for high-throughput coding agent
  output.

## Alternatives in this repo

- [Warp](../desktop/warp.md) — Rust-based AI terminal organized into discrete
  blocks with team workflows and LLM command assistance.
- [Zen Browser](../desktop/zen-browser.md) — Firefox-based browser that brings
  similar workspace and split-view paradigms to web browsing.

## Sources

- [Official Canario site](https://rioterm.com/canario) — checked 2026-10-07
- [Rio GitHub repository](https://github.com/raphamorim/rio) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/utilities)
