---
name: Supaste
slug: supaste
section: Desktop
section_slug: desktop
source_url: 'https://supaste.com/'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: 'Clipboard manager and screenshot history for Mac.'
paywall: paid
pricing_summary:
  'One-time purchase of $15 (regular $29) for a lifetime Mac license with no
  subscriptions.'
open_source: false
license: proprietary
category_tags: [clipboard, macos, screenshots, ocr, utilities]
best_for:
  [clipboard history, visual clip search, notch shelf storage, screenshot ocr]
stack: []
execution_mode: reference
surface: ['desktop']
status: active
agent_friendly: false
last_verified: 2026-10-07
---

# Supaste

> Clipboard manager and screenshot history for Mac. TolongLabs developers reach
> for Supaste to retain an indexed visual history of copied code snippets,
> colors, URLs, and screenshots accessible via an interactive MacBook notch
> shelf.

## At a glance

| Field          | Value                                                       |
| -------------- | ----------------------------------------------------------- |
| Source         | [supaste.com](https://supaste.com/)                         |
| Paywall        | **Paid** — $15 one-time lifetime license (regular $29)      |
| Open source    | No — proprietary macOS software                             |
| Type           | Native macOS clipboard and screenshot history manager       |
| Works with     | macOS 14.0 Sonoma or later (Apple silicon and Intel)        |
| Best for       | Clipboard history, notch shelf, screenshot OCR, asset reuse |
| Agent-friendly | No — GUI desktop utility; manual shortcut invocation        |

## What it is

Supaste is a visual clipboard manager and screenshot history application crafted
for macOS by App It Studio. Rather than maintaining a plain text list like basic
clipboard utilities, Supaste organizes every copied snippet, color hex code,
image asset, and URL into an indexed, searchable visual catalog categorized by
content type and origin application.

A distinguishing design element of Supaste is its MacBook Notch shelf
integration. By hovering or dragging items toward the top center display notch,
a discreet drop shelf reveals itself. Developers can temporarily stow hex codes,
SVGs, API tokens, or reference screenshots in the notch shelf, pulling them down
into their IDE or Figma canvas on demand.

Beyond standard text pasting, Supaste incorporates built-in on-device optical
character recognition (OCR) that extracts copyable text from past screenshots.
It includes an on-screen color picker, iCloud synchronization across Mac
workstations, and smart filters that automatically redact or segregate sensitive
password clips.

## Paywall and pricing

- **Free:** No permanent free plan; free app download and previews available.
- **Paid:** One-time payment with lifetime access:
  - **Lifetime License:** $15 one-time purchase via Polar checkout (limited
    offer discounted from $29 list price). Includes perpetual app usage and
    future updates.
- **Sign-up required?** No account creation needed; software license delivered
  instantly upon checkout.
- **Licence for client work:** Allowed for commercial client development and
  agency workflows on licensed hardware.

Checked on the official website and Polar checkout on 2026-10-07.

## How to use

1. Download Supaste from `https://supaste.com/` and move it to `/Applications`.

2. Launch Supaste and grant macOS Accessibility and Screen Recording permissions
   to allow clipboard monitoring and screenshot history indexing.

3. Access clipboard history with keyboard shortcuts:

- Press `Cmd + Shift + V` to summon the quick search overlay.
- Filter copied items by category tabs: Text, Images, Colors, Links, or Files.
- Type to fuzzy-search across historical code snippets or extracted OCR strings.
- Press `Enter` to paste directly into your active code editor.

4. Use the MacBook Notch shelf:

- Drag an image, icon, or color swatch up into the MacBook display notch.
- The Notch shelf opens smoothly, storing the item in temporary quick-access.
- Drag items down into your project folders or browser tabs when ready.

5. Extract text from UI mockups with OCR:

- In the Supaste history viewer, select any screenshot.
- Click the OCR button or highlight text directly within the screenshot image to
  copy rendered typography without retyping.

## Examples

- [Supaste Features](https://supaste.com/#features) — Visual overview of notch
  shelves, smart filters, and inline paste popovers.
- [Supaste Pricing](https://supaste.com/#pricing) — Lifetime license details and
  early adopter pricing.
- [Supaste FAQ](https://supaste.com/#faq) — Offline privacy architecture and
  iCloud sync security documentation.

## When to use it

- Use it on macOS development machines to prevent accidental loss of copied code
  blocks, API keys, color palettes, and reference links during rapid
  development.
- Use it when you want a visual clipboard with MacBook notch shelf integration
  and built-in OCR text extraction.
- Skip it if you need an open-source, cross-platform file transfer tool across
  multiple devices; use [LocalSend](../desktop/localsend.md) instead.
- Skip it if you need a full-fledged screen recorder with camera zooms; use
  [CleanShot X](../desktop/cleanshot-x.md) or
  [BetterShot](../video-capture/bettershot.md).

## Agent notes

- Closed-source macOS GUI application.
- Operates entirely offline with local SQLite/CoreData storage; clipboard
  contents never touch external cloud servers except optional private iCloud
  sync.
- Coding agents cannot programmatically query Supaste's local history database.

## Alternatives in this repo

- [CoolDock](../desktop/cooldock.md) — Companion utility providing a secondary
  desktop dock with live widgets and file shelves.
- [CleanShot X](../desktop/cleanshot-x.md) — Dedicated Mac screenshot and screen
  recording utility with floating thumbnails and cloud uploads.

## Sources

- [Official site](https://supaste.com/) — checked 2026-10-07
- [Pricing section](https://supaste.com/#pricing) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/utilities)
