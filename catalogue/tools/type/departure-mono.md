---
name: Departure Mono
slug: departure-mono
section: Type
section_slug: type
source_url: https://departuremono.com/
designeer_url: https://designeer.xyz/visuals
designeer_blurb: Pixel monospace typeface designed for terminals.
paywall: free
pricing_summary:
  'Completely free and open source under the SIL Open Font License.'
open_source: true
license: OFL-1.1
category_tags: [typography, monospace, pixel-font, retro, coding-fonts]
best_for: [code blocks, terminal interfaces, retro ui, technical badges]
stack: ['css']
execution_mode: snippet
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Departure Mono

> Pixel monospace typeface designed for terminals. TolongLabs developers reach
> for Departure Mono when designing retro-computing UIs, command palettes, code
> blocks, or hardware-inspired dashboard widgets that require pixel-perfect
> lo-fi technical aesthetic.

## At a glance

| Field          | Value                                                                   |
| -------------- | ----------------------------------------------------------------------- |
| Source         | [departuremono.com](https://departuremono.com/)                         |
| Paywall        | **Free** — 100% open source under SIL OFL                               |
| Open source    | Yes — OFL-1.1 ([GitHub](https://github.com/rektdeckard/departure-mono)) |
| Type           | Monospaced pixel typeface                                               |
| Works with     | CSS, Web typography, Desktop OS, Terminals, Code editors                |
| Best for       | Code blocks, terminal interfaces, retro UI, technical badges            |
| Agent-friendly | Yes — direct GitHub font releases, Homebrew cask, raw OTF/WOFF2         |

## What it is

Departure Mono is an open-source monospaced pixel typeface designed by Helena
Zhang. Inspired by the constraints of early command-line consoles, retro CRT
displays, late 1990s pixel fonts, and classic science-fiction interfaces, it
delivers a distinct lo-fi technical mood while maintaining legible letterforms.

Unlike naive bitmap fonts that lack extended character sets, Departure Mono
features 1,186 glyphs in version 1.500. It covers Basic Latin, Latin Extended-A,
Cyrillic, Greek, small caps, old-style numerals, fractions, and an extensive
suite of box-drawing characters and geometric symbols for ASCII user interfaces.

The typeface is engineered on an 11-pixel grid. While distributed as vector
OpenType (OTF) and Web Open Font (WOFF2) formats, it renders with crisp,
unaliased pixel fidelity when styled at integer multiples of 11px (11px, 22px,
33px, etc.) with font-smoothing disabled or tuned.

## Paywall and pricing

- **Free:** The entire font family, source files, and web font packages are 100%
  free to download, use, embed, and redistribute.
- **Paid:** None. Optional voluntary tips and donations can be sent to the
  designer via Buy Me a Coffee.
- **Sign-up required?** No. Direct downloads are hosted on GitHub Releases and
  Homebrew.
- **Licence for client work:** Distributed under the SIL Open Font License 1.1
  (OFL-1.1). Client projects and commercial web applications may freely embed
  and bundle the font in web applications, PDFs, and software products.

Checked on the official repository release documentation on 2026-10-07.

## How to use

1. Download the font files or install via Homebrew for local preview:

```bash
brew install font-departure-mono
```

2. For web projects, place `DepartureMono-Regular.woff2` in your public assets
   directory (e.g. `public/fonts/DepartureMono-Regular.woff2`).

3. Define the `@font-face` rule in your global stylesheet and set up an 11px
   scale utility:

```css
@font-face {
  font-family: 'Departure Mono';
  src: url('/fonts/DepartureMono-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

.font-pixel {
  font-family: 'Departure Mono', monospace;
  font-size: 11px;
  line-height: 11px;
  -webkit-font-smoothing: none;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
}
```

4. Use the font for technical widgets or terminal blocks:

```tsx
export function TerminalBadge({
  label,
  status
}: {
  label: string
  status: string
}) {
  return (
    <div className="font-pixel inline-flex items-center gap-2 border border-emerald-500/30 bg-emerald-950/20 px-2 py-1 text-emerald-400">
      <span>[SYS.OK]</span>
      <span>{label}</span>
      <span className="text-emerald-500/60">→ {status}</span>
    </div>
  )
}
```

## Examples

- [Departure Mono Official Specimen](https://departuremono.com/) — Interactive
  type specimen demonstrating glyphs, size multipliers, and box-drawing layout.
- [Departure Mono GitHub Repository](https://github.com/rektdeckard/departure-mono)
  — Source repository containing vector glyphs, build scripts, and changelog.
- [Departure Mono v1.500 Release](https://github.com/rektdeckard/departure-mono/releases/tag/v1.500)
  — Official distribution release containing pre-built OTF, WOFF, and WOFF2 font
  archives.

## When to use it

- Use it when designing developer tools, cyberpunk themes, crypto/DeFi
  interfaces, or retro command palettes where a technical lo-fi mood is desired.
- Use it for headers, status badges, telemetry displays, and code callouts where
  the 11px grid matches the visual design scale.
- Skip it for long-form editorial copy or dense administrative data tables; use
  clean monospaced or sans-serif fonts such as
  [Fontsource](../type/fontsource.md) or [Fontshare](../type/fontshare.md)
  instead.

## Agent notes

- Official GitHub repository: `https://github.com/rektdeckard/departure-mono`.
- Font grid rule: always set CSS `font-size` in increments of 11px (`11px`,
  `22px`, `33px`) to prevent fuzzy sub-pixel anti-aliasing artifacts.
- Combine with `-webkit-font-smoothing: none` in CSS when true pixel-art edges
  are desired in Chromium/WebKit browsers.
- Includes full ASCII and Unicode box-drawing blocks (`┌─┐`, `└─┘`, `▖▗▘▙`),
  making it suitable for rendering console-style ASCII tables and diagrams.

## Alternatives in this repo

- [Fontsource](../type/fontsource.md) — Comprehensive collection of self-hosted
  open-source fonts covering standard UI, serif, and monospaced typefaces.
- [Fontshare](../type/fontshare.md) — Free, high-quality professional font
  service curated by the Indian Type Foundry.

## Sources

- [Departure Mono Homepage](https://departuremono.com/) — checked 2026-10-07
- [Departure Mono GitHub Releases](https://github.com/rektdeckard/departure-mono/releases)
  — checked 2026-10-07
- [Departure Mono Repository](https://github.com/rektdeckard/departure-mono) —
  checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals)
