---
name: CleanShot X
slug: cleanshot-x
section: Desktop
section_slug: desktop
source_url: 'https://cleanshot.com/'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: 'Ultimate screen capture and recording utility.'
paywall: paid
pricing_summary:
  'Basic license is $35 one-time with one year of updates; Pro cloud
  subscription is $10/user/month ($8/mo annual).'
open_source: false
license: proprietary
category_tags: [screenshot, screen-recording, macos, utilities, capture]
best_for:
  [scrolling capture, quick annotations, bug reports, visual documentation]
stack: []
execution_mode: reference
surface: ['desktop', 'video']
status: active
agent_friendly: false
last_verified: 2026-10-07
---

# CleanShot X

> Ultimate screen capture and recording utility. TolongLabs developers reach for
> CleanShot X to replace standard macOS screenshot shortcuts with pixel-perfect
> scrolling captures, quick annotation overlays, and high-framerate demo
> recordings.

## At a glance

| Field          | Value                                                        |
| -------------- | ------------------------------------------------------------ |
| Source         | [cleanshot.com](https://cleanshot.com/)                      |
| Paywall        | **Paid** — $35 one-time perpetual license or $10/user/mo Pro |
| Open source    | No — proprietary macOS software                              |
| Type           | Native macOS capture and recording utility                   |
| Works with     | macOS 11.0 Big Sur and later (Apple silicon and Intel)       |
| Best for       | Scrolling capture, quick annotations, bug reports, GIF demos |
| Agent-friendly | No — GUI application without public CLI or scriptable API    |

## What it is

CleanShot X is a premium screen capture, scrolling capture, and screen recording
application crafted exclusively for macOS. Built by MakeTheWeb, it serves as an
all-in-one replacement for Apple's built-in `Cmd + Shift + 4` and
`Cmd + Shift + 5` system screenshot tools, integrating over 50 specialized
features into a single lightweight menu bar utility.

When a screenshot is captured, CleanShot X displays an interactive floating
thumbnail overlay. From this thumbnail, developers can drag the image directly
into Slack, GitHub, or Figma, copy it to the clipboard, trigger an OCR text
recognition pass, or open a built-in canvas editor equipped with arrows, blur
tools, callout counters, and highlighters.

For web development and design reviews, CleanShot X excels at scrolling captures
across tall web pages and application viewports. It stitches long web pages
accurately without seam artifacts, hides desktop icons during recordings, pins
reference screenshots on top of other windows, and records screen clips to MP4
or optimized 60fps GIF formats.

## Paywall and pricing

- **Free:** No permanent free tier. CleanShot provides a 30-day money-back
  guarantee and trial options through distributors like Setapp.
- **Paid:**
  - **Basic (App Only):** $35 one-time purchase. Includes a perpetual license
    for one Mac, one year of free software updates (optional update renewal at
    ~$19/year thereafter), and 1 GB of free CleanShot Cloud storage.
  - **CleanShot Pro:** $10 per user/month ($8/user/month billed annually).
    Includes continuous Mac app updates, unlimited CleanShot Cloud storage,
    custom domain / custom branding for shareable links, team workspaces,
    password-protected links, and self-destruct timers.
- **Sign-up required?** Optional for the Basic desktop app; required if using
  CleanShot Cloud links or subscribing to CleanShot Pro.
- **Licence for client work:** Commercial and client design work is permitted
  under both Basic and Pro licenses.

Checked on the official pricing and checkout pages on 2026-10-07.

## How to use

1. Download the application installer from the official website or install via
   Homebrew Cask:

```bash
brew install --cask cleanshot
```

2. Launch CleanShot X and grant macOS permissions for Screen Recording,
   Accessibility, and Notifications in macOS System Settings.

3. Replace standard macOS screenshot shortcuts in CleanShot X Preferences:

- Set `Cmd + Shift + 4` to **Capture Area**.
- Set `Cmd + Shift + 3` to **Capture Fullscreen**.
- Assign a dedicated shortcut (e.g. `Cmd + Shift + 7`) to **Scrolling Capture**.

4. Perform scrolling web page captures:

- Trigger Scrolling Capture over a long webpage or design artboard.
- Drag the selection box over the scrollable container and click "Start
  Capture".
- Scroll down steadily; CleanShot X automatically stitches DOM fragments into a
  single high-resolution PNG image.

5. Annotate bug reports and pull requests:

- From the floating thumbnail, click the pencil icon to open the annotation
  editor.
- Use the Step counter tool to number steps to reproduce an issue.
- Use the Pixelate / Blur tool to sanitize confidential API keys or customer
  data before publishing.

## Examples

- [CleanShot X Features](https://cleanshot.com/features) — Complete overview of
  OCR text recognition, pin to screen, and custom canvas backgrounds.
- [CleanShot Cloud Sharing](https://cleanshot.com/) — Demonstration of one-click
  cloud uploads, auto-copied links, and team collaboration galleries.
- [CleanShot X Scrolling Capture Demo](https://cleanshot.com/features) — Visual
  walkthrough of scrolling capture across multi-column web layouts.

## When to use it

- Use it as your default daily screenshot and quick-recording utility on macOS
  when sharing QA reports, design reviews, or pull request visuals.
- Use it when you need seamless scrolling captures of responsive web pages or
  instant OCR extraction from mockups and error dialogs.
- Skip it if you need an open-source, zero-cost native Mac screenshot utility
  with local self-hosting; use [BetterShot](../video-capture/bettershot.md)
  instead.
- Skip it if you need high-end marketing demo videos with automated 3D zooms and
  cursor smoothing; use [Screen Studio](../video-capture/screen-studio.md)
  instead.

## Agent notes

- CleanShot X is a closed-source macOS GUI application with no native CLI or
  package API for automated coding agent invocation.
- Coding agents cannot programmatically capture screens via CleanShot X; agents
  should instruct human developers to capture screenshots and provide paths or
  URLs, or use headless Playwright / Puppeteer screenshot commands in scripts.
- Supports macOS URL scheme triggers for basic actions if configured by the
  user.

## Alternatives in this repo

- [BetterShot](../video-capture/bettershot.md) — Free and open-source native Mac
  screenshot and screen recorder with custom backgrounds and annotations.
- [Supaste](../desktop/supaste.md) — Mac clipboard manager with visual
  screenshot history and notch storage for rapid asset reuse.
- [Screen Studio](../video-capture/screen-studio.md) — Dedicated screen recorder
  with automatic smooth cursor tracking and cinematic zoom effects.

## Sources

- [Official site](https://cleanshot.com/) — checked 2026-10-07
- [Pricing](https://cleanshot.com/pricing) — checked 2026-10-07
- [Features](https://cleanshot.com/features) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/utilities)
