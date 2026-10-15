---
name: 60fps
slug: 60fps
section: Design Galleries
section_slug: design-galleries
source_url: 'https://60fps.design/'
designeer_url: 'https://designeer.xyz/'
designeer_blurb: Recordings of interfaces that move well.
paywall: freemium
pricing_summary:
  'Free to explore; PRO is $15/month or $150/year, and the separate MCP plan is
  $29/month or $69/quarter.'
open_source: false
license: proprietary
category_tags: [motion, interaction, inspiration, gallery]
best_for: [micro-interactions, onboarding, motion references]
stack: []
execution_mode: reference
surface: ['reference', 'web-ui', 'mobile-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# 60fps

> Recordings of interfaces that move well. Use it to study interaction behavior
> and motion before implementing an original version for a project.

## At a glance

| Field          | Value                                              |
| -------------- | -------------------------------------------------- |
| Source         | [60fps.design](https://60fps.design/)              |
| Paywall        | **Freemium** — free explore; PRO $15/mo or $150/yr |
| Open source    | No — proprietary service                           |
| Type           | Motion and interaction reference gallery           |
| Works with     | Web and app interaction design                     |
| Best for       | Micro-interactions, onboarding, motion studies     |
| Agent-friendly | Yes — a paid MCP plan supports coding agents       |

## What it is

60fps is a searchable reference library of recorded interactions from real apps,
with descriptions of how each interaction moves. A shot page groups a recording
with its app, category, and motion tags such as swipe, morph, or spring physics.

The library is useful for comparing a specific behavior across products: for
example, a card stack, a bottom sheet, an onboarding sequence, or a loading
state. PRO currently lists 2,100 shots across 492 apps and 67 storyboards.

This is a motion reference service, not a React component library. Its terms say
the recorded apps, interfaces, brands, and assets belong to their owners. Use
the recordings to study behavior, then design and implement for the project's
own brand and content.

## Paywall and pricing

- **Free:** 60fps is free to explore. Some filters and curated material are
  reserved for paid access.
- **Paid:** PRO costs $15 per month or $150 per year. It unlocks all filters,
  the full shot library, storyboards, and other member features.
- **Paid MCP:** the MCP plan is separate from PRO and costs $29 per month or $69
  per quarter. Terms retain MCP access for active PRO keys bought on or before
  2026-09-12.
- **Sign-up required?** Public browsing works without a license key. Paid access
  uses a key sent after purchase.
- **Licence for client work:** the library is reference material, not a grant to
  reuse third-party app recordings or assets. The terms say generated motion
  code may be used in projects, but does not grant rights to the app it was
  derived from. Build an original treatment and follow the source app's rights
  separately.

Pricing and terms checked 2026-10-07.

## How to use

1. Open [Shots](https://60fps.design/shots/filter) and start with a motion
   pattern, gesture, effect, element, or app category relevant to the brief.
2. Open a promising shot and watch the recording more than once. Note the
   starting state, user trigger, sequence of changes, and where the motion
   settles.
3. Compare several examples for the same interaction. Separate the shared
   behavior from product-specific branding, copy, color, and imagery.
4. Turn the findings into a short project brief: component, trigger, initial
   state, motion beats, end state, input method, and any reduced-motion or
   accessibility constraints.
5. Implement and review the behavior in the TolongLabs project. Do not copy a
   source app's brand, copy, icons, or assets.
6. For agent-assisted lookup, use the separate MCP plan and its setup guide. MCP
   can search shots and return motion breakdowns; its motion code is SwiftUI, so
   web projects need a framework-specific implementation.

## Examples

- [Airbnb Photo Pop and Slide Animation](https://60fps.design/shots/airbnb-photo-pop-and-slide-animation)
  — a card stack where a tapped photo scales, rotates, and moves behind the
  deck.
- [Must Movie Detail Sheet](https://60fps.design/shots/must-movie-detail-sheet)
  — a poster-to-detail shared-element transition, dismiss gesture, and
  expandable episode section.
- [Atoms Long Press to Get Started Pulse Interaction](https://60fps.design/shots/atoms-long-press-to-get-started-pulse-interaction)
  — a hold gesture that fills a progress ring and expands into onboarding.

## When to use it

- Use it when a project needs motion references for onboarding, cards,
  navigation, sheets, or feedback states.
- Use it to explain motion as a sequence of states and triggers rather than as a
  vague request to make an interface feel polished.
- Skip it when you need ready-to-install web components or production React
  code. For web-focused interaction references, compare
  [Hover States](../design-galleries/hover-states.md).

## Agent notes

- The [MCP page](https://60fps.design/mcp) lists tools for searching shots,
  reading breakdowns, and retrieving related examples. MCP is a paid plan and is
  separate from current PRO subscriptions.
- The MCP can return SwiftUI motion code; do not assume it is a web snippet.
  Translate the behavior into the project's actual framework and input model.
- 60fps's terms say descriptions, breakdowns, filters, search keywords, and
  generated code may be inaccurate or out of date. Treat them as starting points
  and verify the recording and behavior before shipping.
- The MCP is read-only and has published request limits; consult its current
  terms before automating repeated searches.

## Alternatives in this repo

- [Details](../design-galleries/details.md) — analysis focused on product
  micro-interactions.
- [Hover States](../design-galleries/hover-states.md) — examples centered on
  interactive web design.
- [Motionimo](../design-galleries/motionimo.md) — another motion-oriented
  reference collection.

## Sources

- [Official site](https://60fps.design/) — checked 2026-10-07
- [Shot filters](https://60fps.design/shots/filter) — checked 2026-10-07
- [PRO pricing](https://60fps.design/pro) — checked 2026-10-07
- [MCP plan and setup](https://60fps.design/mcp) — checked 2026-10-07
- [Terms of Use](https://60fps.design/terms) — checked 2026-10-07
- [Airbnb example](https://60fps.design/shots/airbnb-photo-pop-and-slide-animation)
  — checked 2026-10-07
- [Must example](https://60fps.design/shots/must-movie-detail-sheet) — checked
  2026-10-07
- [Atoms example](https://60fps.design/shots/atoms-long-press-to-get-started-pulse-interaction)
  — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/) — checked 2026-10-07; the page did
  not render in the browser.
