---
name: CoolDock
slug: cooldock
section: Desktop
section_slug: desktop
source_url: 'https://cooldock.app/'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: 'Secondary dock supporting desktop monitoring widgets.'
paywall: paid
pricing_summary:
  'One-time purchase starting at $15 (regular $29 / €29.99) with lifetime access
  and no recurring subscriptions.'
open_source: false
license: proprietary
category_tags: [dock, macos, widgets, desktop, productivity]
best_for:
  [
    live desktop monitoring,
    temporary file shelves,
    quick actions,
    music controls
  ]
stack: []
execution_mode: reference
surface: ['desktop']
status: active
agent_friendly: false
last_verified: 2026-10-07
---

# CoolDock

> Secondary dock supporting desktop monitoring widgets. TolongLabs developers
> reach for CoolDock to pin live system stats, timers, quick actions, and a
> temporary file shelf directly alongside the macOS dock without cluttering the
> menu bar.

## At a glance

| Field          | Value                                                      |
| -------------- | ---------------------------------------------------------- |
| Source         | [cooldock.app](https://cooldock.app/)                      |
| Paywall        | **Paid** — $15 one-time lifetime license (no subscription) |
| Open source    | No — proprietary macOS software                            |
| Type           | Native macOS desktop dock and widget utility               |
| Works with     | macOS 14.0 Sonoma or later (Apple silicon and Intel)       |
| Best for       | Live system metrics, temporary file shelves, quick toggles |
| Agent-friendly | No — GUI desktop utility without developer API             |

## What it is

CoolDock is a customizable secondary desktop dock for macOS created by App It
Studio. Designed to sit elegantly beside or above the native Apple Dock,
CoolDock transforms unused screen margin into an active dashboard for live
widgets, system toggles, and workflow shortcuts.

Rather than cramming every utility into an overcrowded macOS menu bar, CoolDock
provides dedicated modular widgets for system resources (CPU, RAM, network
rates), audio and Spotify / Apple Music playback controls, Pomodoro focus
timers, upcoming calendar events, weather forecasts, and reminders.

For web developers and designers, one of its most practical components is the
integrated File Shelf. Developers can drag image assets, SVG icons, and download
archives onto the shelf to keep them floating above active IDE and Figma
windows, ready to drop into code editors or browser upload dialogs without
digging through Finder folders.

## Paywall and pricing

- **Free:** No permanent free tier; free download and demonstration previews are
  available on the website.
- **Paid:** One-time purchase with no subscriptions:
  - **Single Mac Lifetime:** $15 / €14.99–€29.99 (promotional entry pricing;
    standard list price $29). Includes lifetime access to the app and all future
    updates.
  - **Multi-Device Licenses:** Tiered lifetime packages for up to 5 Macs (up to
    €99.99).
  - All purchases include a 14-day money-back guarantee.
- **Sign-up required?** No account creation needed; licensing is activated via
  license key emailed after Stripe checkout.
- **Licence for client work:** Allowed for commercial and freelance workstation
  use.

Checked on the official website and Stripe checkout flow on 2026-10-07.

## How to use

1. Download the installer DMG from `https://cooldock.app/` and drag CoolDock
   into `/Applications`.

2. Launch CoolDock and grant requested macOS permissions for Accessibility and
   System Events.

3. Customize your secondary dock layout:

- Open CoolDock Settings (`Cmd + ,`).
- Choose screen positioning: attach beside the native Mac Dock, pin to the top,
  or anchor to screen edges.
- Toggle desired widgets: System Stats, Now Playing, Calendar, or Clipboard.

4. Use the File Shelf during design implementations:

- Drag SVG icons and export assets directly onto the CoolDock File Shelf widget.
- Assets stay persistently accessible across full-screen workspace switches.
- Drag them directly into your Next.js `/public` folder or component imports.

5. Monitor local dev builds:

- Keep the System Stats widget visible to monitor memory pressure and CPU spikes
  during heavy webpack / bun bundling or Docker container runs.

## Examples

- [CoolDock Features](https://cooldock.app/#features) — Visual tour of modular
  widgets including Pomodoro timers, quick toggles, and audio controllers.
- [CoolDock Widget Gallery](https://cooldock.app/#widgets) — Catalog of live
  system monitoring widgets, calendars, and file shelves.
- [CoolDock Pricing and FAQ](https://cooldock.app/#pricing) — Details on
  lifetime licensing, macOS Sonoma compatibility, and refund policies.

## When to use it

- Use it on macOS multi-monitor setups or large external displays where having a
  dedicated dock for system monitors, media playback, and asset shelves boosts
  day-to-day speed.
- Use it when your macOS menu bar is already overwhelmed with status icons.
- Skip it if you need clipboard history tracking and OCR search instead of dock
  widgets; use [Supaste](../desktop/supaste.md) instead.
- Skip it if you are looking to monitor SaaS revenue metrics rather than desktop
  hardware metrics; use [Revone](../desktop/revone.md) instead.

## Agent notes

- CoolDock is a closed-source macOS GUI application with no public scriptable
  interface or CLI.
- No direct agent automation capabilities; intended purely for developer
  workstation convenience.

## Alternatives in this repo

- [Supaste](../desktop/supaste.md) — Companion utility from the same developer
  providing Mac clipboard history, notch shelves, and screenshot OCR.
- [Revone](../desktop/revone.md) — Native macOS menu bar and widget dashboard
  for tracking payment processor revenue and subscriptions.

## Sources

- [Official site](https://cooldock.app/) — checked 2026-10-07
- [Pricing section](https://cooldock.app/#pricing) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/utilities)
