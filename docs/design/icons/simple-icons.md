---
name: 'Simple Icons'
slug: 'simple-icons'
section: 'Icons'
section_slug: 'icons'
source_url: 'https://simpleicons.org/'
designeer_url: 'https://designeer.xyz/visuals'
designeer_blurb: 'Over three thousand SVG brand logos.'
paywall: free
pricing_summary:
  'The package and icon catalog are free; the project is released under CC0 and
  has no paid tier.'
open_source: true
license: 'CC0-1.0'
category_tags: ['brand-icons', 'svg', 'javascript', 'logos']
best_for: ['software brand marks', 'technology directories', 'brand logo grids']
stack: ['javascript', 'svg']
agent_friendly: true
last_verified: 2026-10-07
---

# Simple Icons

> Over three thousand SVG brand logos. At TolongLabs, use it as a reference for
> choosing and implementing icons that fit the project.

## At a glance

| Field          | Value                                                          |
| -------------- | -------------------------------------------------------------- |
| Source         | [Official site](https://simpleicons.org/)                      |
| Paywall        | **Free — no paid tier published**                              |
| Open source    | Yes — CC0-1.0 ([repository](https://simpleicons.org/?q=gith))  |
| Type           | Brand icon catalog                                             |
| Works with     | SVG, JavaScript, HTML, framework wrappers                      |
| Best for       | software brand marks, technology directories, brand logo grids |
| Agent-friendly | Yes                                                            |

## What it is

Simple Icons is a catalog of more than 3,400 monochrome SVG brand marks. The
browser supports search and individual icon inspection; the npm package exposes
icon data for use in application code.

The project is dedicated to the public domain under CC0, but that does not grant
trademark rights to the names and marks represented by individual icons. Check a
brand's own usage guidelines before using its logo in a client interface.

## Paywall and pricing

- Free: browse, download, and install the published icon package.
- Paid: no paid tier or price is published.
- Sign-up required? No for the catalog or package.
- Client work: the repository is CC0, but individual brands may impose trademark
  and usage rules.

Pricing and licence information checked 2026-10-07.

## How to use

1. Search by brand name in the official catalog and inspect the icon's canonical
   name and color.
2. Install the JavaScript package when icon data is needed in code, or use the
   raw SVG when only a few marks are required.
3. Import the named export and render its SVG body with the dimensions and
   accessibility text the project needs.
4. Check the brand's own guidelines before presenting the symbol as an
   endorsement or product identity.

Install with Bun:

```bash
bun add simple-icons
```

Minimal usage from the official documentation:

```js
import { siSimpleicons } from 'simple-icons'

console.log(siSimpleicons.title, siSimpleicons.hex)
```

## Examples

- [GitHub search results](https://simpleicons.org/?q=gith) — Shows GitHub,
  GitHub Pages, GitHub Actions, and related marks.
- [Simple Icons mark](https://simpleicons.org/?modal=icon&q=simpleicons) —
  Inspect an individual mark and its project data.
- [Official usage README](https://github.com/simple-icons/simple-icons/blob/develop/README.md?plain=1)
  — Package imports and SVG usage examples.

## When to use it

- Use it for company, product, platform, and developer-tool logos.
- Skip it for general UI symbols; use Lucide or Tabler, and check trademarks
  before using any brand mark.

## Agent notes

- Package: simple-icons. Icon exports use names such as siSimpleicons and
  include SVG path data.
- Project licence: CC0-1.0. The separate disclaimer calls out varying trademark
  and per-icon constraints.
- Do not infer a company's endorsement from inclusion in this catalog.

## Alternatives in this repo

- [theSVG](../icons/thesvg.md) — Brand icons with multiple variants and cloud
  architecture marks.
- [Devicon](../icons/devicon.md) — Logos for programming languages and
  development tools.
- [Iconify](../icons/iconify.md) — Many brand sets alongside general-purpose
  icons.

## Sources

- [Official catalog](https://simpleicons.org/) — checked 2026-10-07
- [GitHub search results](https://simpleicons.org/?q=gith) — checked 2026-10-07
- [Individual mark](https://simpleicons.org/?modal=icon&q=simpleicons) — checked
  2026-10-07
- [Usage README](https://github.com/simple-icons/simple-icons/blob/develop/README.md?plain=1)
  — checked 2026-10-07
- [Trademark disclaimer](https://github.com/simple-icons/simple-icons/blob/develop/DISCLAIMER.md)
  — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals) — checked 2026-10-07; page
  fetch unavailable, blurb copied from batch metadata
