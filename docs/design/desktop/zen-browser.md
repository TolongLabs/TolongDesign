---
name: Zen Browser
slug: zen-browser
section: Desktop
section_slug: desktop
source_url: 'https://zen-browser.app/'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: 'Firefox fork with vertical tabs and focus.'
paywall: free
pricing_summary:
  'Completely free and open source under the MPL-2.0 licence with no
  subscriptions or telemetry tracking.'
open_source: true
license: MPL-2.0
category_tags: [browser, firefox, open-source, productivity, privacy]
best_for:
  [
    vertical tabs,
    split-screen browsing,
    web development testing,
    distraction-free workflow
  ]
stack: [c++, rust, javascript]
agent_friendly: true
last_verified: 2026-10-07
---

# Zen Browser

> Firefox fork with vertical tabs and focus. TolongLabs developers reach for Zen
> Browser to inspect responsive web layouts side-by-side with native split
> views, vertical tab workspaces, and strict privacy defaults on the Gecko
> engine.

## At a glance

| Field          | Value                                                            |
| -------------- | ---------------------------------------------------------------- |
| Source         | [zen-browser.app](https://zen-browser.app/)                      |
| Paywall        | **Free** — 100% free and open source                             |
| Open source    | Yes — MPL-2.0 ([GitHub](https://github.com/zen-browser/desktop)) |
| Type           | Open-source desktop web browser based on Mozilla Firefox         |
| Works with     | macOS, Windows, Linux, Firefox Add-ons, Gecko engine             |
| Best for       | Split-screen responsive testing, vertical tabs, workspaces       |
| Agent-friendly | Yes — standard web browser, Firefox DevTools, CLI launch flags   |

## What it is

Zen Browser is an open-source web browser built on the Mozilla Firefox (Gecko)
engine, created to offer a calmer, more intentional browsing experience. Built
as an alternative to Chromium-dominated browsers and proprietary tools like Arc,
Zen delivers modern productivity primitives without compromising user privacy or
submitting to corporate telemetry.

The browser's signature interface centers on collapsible vertical tabs, distinct
workspaces, and native split views. Developers can divide a single window into
two, three, or four simultaneous web viewports. This makes it effortless to test
a local web application across multiple viewport widths, compare live staging
environments with local development servers, or keep API documentation open
beside a preview window.

Zen Browser supports the full library of Firefox add-ons and extensions. It also
features a built-in "Zen Theme Store" (Zen Mods), allowing developers to
customize tab styling, animations, toolbar densities, and color schemes via
user-contributed CSS enhancements.

## Paywall and pricing

- **Free:** Completely free and open source. All capabilities—including vertical
  tabs, split views, workspaces, and theme mods—are available without fees.
- **Paid:** None. No pro versions, paid upgrades, or premium feature locks.
  Users may support development via GitHub Sponsors or community donations.
- **Sign-up required?** No. No account required to browse, customize themes, or
  install extensions. Optional Firefox Sync account can be used for cross-device
  bookmarks.
- **Licence for client work:** Distributed under the Mozilla Public License 2.0
  (MPL-2.0). Freely permitted for commercial use, client web testing, and agency
  workstations.

Checked on the official repository and site documentation on 2026-10-07.

## How to use

1. Install Zen Browser on your operating system:

On macOS via Homebrew Cask:

```bash
brew install --cask zen-browser
```

On Linux via Flatpak:

```bash
flatpak install flathub app.zen_browser.zen
```

On Windows via Winget:

```bash
winget install Zen-Team.Zen-Browser
```

2. Configure developer workspaces:

- Click the Workspace switcher at the top of the vertical tab strip.
- Create a dedicated "Development" workspace for localhost ports and technical
  documentation, and a separate "Client Reviews" workspace.

3. Test responsive web layouts with Split Views:

- Open your local development server (e.g. `http://localhost:3000`).
- Right-click another tab (or press the split shortcut) and select "Split Tab".
- Drag the central divider to inspect responsive CSS behavior across two
  distinct viewport widths side by side.

4. Customize UI density via Zen Mods:

- Open `Zen Settings > Mods` or visit `https://zen-browser.app/mods`.
- Enable developer-focused tweaks such as minimal URL bars, compact tab strips,
  or custom dark-mode contrast filters.

5. Open Firefox Developer Tools:

- Press `Cmd + Option + I` (or `F12`) to inspect DOM elements, CSS Grid/Flexbox
  overlays, network waterfall requests, and storage cookies.

## Examples

- [Zen Browser Official Site](https://zen-browser.app/) — Download links,
  release highlights, and feature documentation.
- [Zen Browser GitHub Repository](https://github.com/zen-browser/desktop) —
  Source code, issue tracker, and release builds with over 44,000 GitHub stars.
- [Zen Mods Store](https://zen-browser.app/mods) — Curated collection of
  community CSS themes and UI enhancements.

## When to use it

- Use it as your primary development browser when you want modern vertical tabs,
  tab workspaces, and side-by-side split screens without Chromium monopoly
  lock-in.
- Use it to ensure your websites and design systems render flawlessly on the
  Gecko rendering engine alongside WebKit and Blink.
- Skip it if you need automated headless browser testing inside CI/CD pipelines;
  use Playwright or Puppeteer with headless Firefox.
- Skip it if you are looking for a terminal emulator with browser-like tab
  splits; use [Canario](../desktop/canario.md) instead.

## Agent notes

- GitHub repository: `https://github.com/zen-browser/desktop`.
- Gecko-based browser; accepts standard Firefox command-line arguments:
  `zen -devtools -new-window http://localhost:3000`.
- Compatible with all Firefox WebExtensions, React Developer Tools, and Redux
  DevTools.

## Alternatives in this repo

- [Canario](../desktop/canario.md) — Rio-based terminal emulator that organizes
  CLI sessions into browser-like spaces and split panes.
- [Warp](../desktop/warp.md) — Modern terminal with block navigation and
  embedded AI developer workflows.

## Sources

- [Official site](https://zen-browser.app/) — checked 2026-10-07
- [GitHub repository](https://github.com/zen-browser/desktop) — checked
  2026-10-07
- [Zen Mods](https://zen-browser.app/mods) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/utilities)
