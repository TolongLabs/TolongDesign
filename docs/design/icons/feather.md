---
name: 'Feather'
slug: 'feather'
section: 'Icons'
section_slug: 'icons'
source_url: 'https://feathericons.com/'
designeer_url: 'https://designeer.xyz/visuals'
designeer_blurb: 'Minimalist open-source icon set on 24px grid.'
paywall: free
pricing_summary:
  'All icons and code are free under MIT; no paid tier is published.'
open_source: true
license: 'MIT'
category_tags: ['icon-library', 'svg', 'javascript', 'outline']
best_for:
  ['minimal interfaces', 'lightweight outline symbols', 'customized svg']
stack: ['javascript', 'svg']
agent_friendly: true
last_verified: 2026-10-07
---

# Feather

> Minimalist open-source icon set on 24px grid. At TolongLabs, use it as a
> reference for choosing and implementing icons that fit the project.

## At a glance

| Field          | Value                                                                                         |
| -------------- | --------------------------------------------------------------------------------------------- |
| Source         | [Official site](https://feathericons.com/)                                                    |
| Paywall        | **Free — no paid tier published**                                                             |
| Open source    | Yes — MIT ([repository](https://github.com/feathericons/feather/blob/main/README.md?plain=1)) |
| Type           | Minimalist open-source icon set                                                               |
| Works with     | SVG, JavaScript, HTML, React wrappers                                                         |
| Best for       | minimal interfaces, lightweight outline symbols, customized svg                               |
| Agent-friendly | Yes                                                                                           |

## What it is

Feather is a minimalist outline icon set built on a 24 by 24 grid. Its official
site currently shows 287 icons and lets users adjust size, stroke width, and
color before copying or downloading SVG.

The JavaScript package can replace placeholder elements with inline SVG, while
individual files can be embedded directly. The simple outline style is easy to
theme but does not include filled counterparts or a very large catalog.

## Paywall and pricing

- Free: the complete set, website editor, SVG files, and JavaScript package.
- Paid: no paid tier or price is published.
- Sign-up required? No for browsing, copying, or installing.
- Client work: MIT permits commercial and client projects.

Pricing and licence information checked 2026-10-07.

## How to use

1. Search the icon gallery and adjust size, stroke width, and color in the
   preview.
2. Install feather-icons when the page needs the JavaScript replacement helper,
   or copy the SVG directly.
3. Place a data-feather attribute on the element and run feather.replace after
   the markup is available.
4. Keep decorative icons hidden from assistive technology and label icon- only
   actions.

Install with Bun:

```bash
bun add feather-icons
```

Minimal usage from the official documentation:

```html
<i data-feather="circle" aria-hidden="true"></i>

<script>
  feather.replace()
</script>
```

## Examples

- [Activity icon gallery](https://feathericons.com/) — Preview and customize a
  specific icon in the browser.
- [JavaScript replacement guide](https://github.com/feathericons/feather/blob/main/README.md?plain=1)
  — Shows data-feather markup and feather.replace().
- [Starter CodePen](https://codepen.io/pen?template=WOJZdM) — An official
  starting point for experimenting with the set.

## When to use it

- Use it when an interface needs a small, consistent outline vocabulary with
  minimal visual weight.
- Skip it when filled states, extensive domain-specific symbols, or multiple
  weights are required.

## Agent notes

- Package: feather-icons. The JavaScript helper injects SVG into matching
  data-feather elements.
- Icons use a 24 by 24 grid and default 2-pixel strokes; keep sizing and stroke
  choices consistent.
- MIT applies to the project. Add accessible labels to interactive controls.

## Alternatives in this repo

- [Lucide](../icons/lucide.md) — A maintained family that grew from Feather's
  visual style.
- [Heroicons](../icons/heroicons.md) — A polished small set with React and Vue
  packages.
- [Iconoir](../icons/iconoir.md) — A larger consistent-stroke library.

## Sources

- [Official gallery](https://feathericons.com/) — checked 2026-10-07
- [GitHub README](https://github.com/feathericons/feather/blob/main/README.md?plain=1)
  — checked 2026-10-07
- [MIT licence](https://github.com/feathericons/feather/blob/main/LICENSE) —
  checked 2026-10-07
- [Starter CodePen](https://codepen.io/pen?template=WOJZdM) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals) — checked 2026-10-07; page
  fetch unavailable, blurb copied from batch metadata
