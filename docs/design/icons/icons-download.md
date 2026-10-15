---
name: Icons.download
slug: icons-download
section: Icons
section_slug: icons
source_url: https://icons.download/
designeer_url: https://designeer.xyz/visuals
designeer_blurb: Curated icon library in sixteen aesthetic styles.
paywall: free
pricing_summary:
  'Free for personal and commercial use under a permissive licence; no
  attribution required.'
open_source: false
license: proprietary
category_tags: [icons, svg, figma, vector, design-system]
best_for: [landing pages, web applications, multi-style icon matching]
stack: []
execution_mode: snippet
surface: ['web-ui']
status: active
agent_friendly: false
last_verified: 2026-10-07
---

# Icons.download

> Curated icon library in sixteen aesthetic styles. TolongLabs developers reach
> for Icons.download when a website requires a distinct visual weight or corner
> style across a compact, consistent set of essential user interface icons.

## At a glance

| Field          | Value                                                      |
| -------------- | ---------------------------------------------------------- |
| Source         | [icons.download](https://icons.download/)                  |
| Paywall        | **Free** — 100% free for personal and commercial use       |
| Open source    | No — Custom permissive proprietary licence                 |
| Type           | Web icon catalog and Figma asset kit                       |
| Works with     | Figma, SVG, HTML, Web graphic workflows                    |
| Best for       | Landing pages, web applications, multi-style icon matching |
| Agent-friendly | No — Browser UI and Figma file only; no public API or CLI  |

## What it is

Icons.download is a curated vector icon collection crafted by designer Vitaly
Belousov. The collection includes 275 core interface symbols rendered across 16
distinct stylistic variations, yielding 4,400 icon assets in total.

The 16 styles explore combinations of stroke thickness (thin, regular, bold),
corner treatments (sharp, rounded), and fills (outline, solid, duotone). This
allows designers and developers to maintain identical conceptual iconography
across diverse visual identities, whether designing a brutalist sharp outline
layout, a playful rounded mobile app, or a high-density dashboard with thin
strokes.

Icons can be previewed directly on the web, filtered by style variant and dark
or light modes, and downloaded as raw SVGs or duplicated directly into Figma.

## Paywall and pricing

- **Free:** All 275 icons across all 16 styles are free to download and use in
  unlimited personal and commercial projects.
- **Paid:** None. There are no pro plans, subscriptions, or paywalled styles.
- **Sign-up required?** No. Downloads and Figma community duplicates require no
  account on the site.
- **Licence for client work:** Free for commercial products, apps, websites, and
  client work without mandatory attribution. Reselling or redistributing the
  assets as a competing icon set is prohibited.

Verified on the official license page on 2026-10-07.

## How to use

1. Browse the icon catalog at [icons.download](https://icons.download/).
2. Select your desired stylistic combination from the style switcher (e.g.,
   Rounded Outline, Sharp Bold, Thin, Solid).
3. Click an icon to copy its optimized SVG markup directly to your clipboard.
4. Paste the SVG into your React, Vue, or HTML templates:

```tsx
export function SettingsIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5 text-neutral-700"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  )
}
```

5. For design phase work, duplicate the official Figma Community file to your
   team library.

## Examples

- [Icons.download Web App](https://icons.download/) — Interactive browser with
  real-time style toggles and one-click SVG copying.
- [Icons.download License Page](https://icons.download/license) — Complete terms
  governing personal and commercial application permissions.
- [Figma Community File](https://www.figma.com/community/file/1163795927589313139/free-universal-icons)
  — Official Figma component library containing all 275 icons and 16 styles.

## When to use it

- Use it when you need a tight, consistent set of common UI icons that match an
  exact aesthetic weight (e.g. sharp geometric or ultra-rounded).
- Use it during early Figma design sprints when prototyping with vector
  components.
- Skip it when you need hundreds of niche icons or domain-specific symbols; use
  [icons0](../icons/icons0.md) or [Icon Foundry](../icons/icon-foundry.md).
- Skip it if you require animated hover micro-interactions; use
  [Heroicons Animated](../icons/heroicons-animated.md) or
  [Lucide Animated](../icons/lucide-animated.md).

## Agent notes

- Official site: `https://icons.download/`.
- Does not publish an npm package or CLI; developers must copy or inline the SVG
  source code.
- SVGs use standardized 24x24 viewBox dimensions and `currentColor` fills and
  strokes, making them straightforward to recolor via CSS classes.

## Alternatives in this repo

- [Icon Foundry](../icons/icon-foundry.md) — Comprehensive directory indexing
  47,000+ open-source SVG icons across multiple families.
- [icons0](../icons/icons0.md) — Search engine and MCP server covering 200k+
  icons with shadcn integration.
- [Material Symbols](../icons/material-symbols.md) — Google variable icon font
  providing continuous typographic weight and fill controls.

## Sources

- [Official site](https://icons.download/) — checked 2026-10-07
- [License](https://icons.download/license) — checked 2026-10-07
- [Figma Community](https://www.figma.com/community/file/1163795927589313139/free-universal-icons)
  — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals)
