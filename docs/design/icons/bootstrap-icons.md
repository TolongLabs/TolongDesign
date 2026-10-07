---
name: 'Bootstrap Icons'
slug: 'bootstrap-icons'
section: 'Icons'
section_slug: 'icons'
source_url: 'https://icons.getbootstrap.com/'
designeer_url: 'https://designeer.xyz/visuals'
designeer_blurb: 'Official icon library designed for Bootstrap.'
paywall: free
pricing_summary:
  'The library is free and open source under MIT; no paid tier is published.'
open_source: true
license: 'MIT'
category_tags: ['icon-library', 'svg', 'bootstrap', 'webfont']
best_for: ['bootstrap interfaces', 'svg and font use', 'general web UI']
stack: ['svg', 'css', 'javascript']
agent_friendly: true
last_verified: 2026-10-07
---

# Bootstrap Icons

> Official icon library designed for Bootstrap. At TolongLabs, use it as a
> reference for choosing and implementing icons that fit the project.

## At a glance

| Field          | Value                                                   |
| -------------- | ------------------------------------------------------- |
| Source         | [Official site](https://icons.getbootstrap.com/)        |
| Paywall        | **Free — no paid tier published**                       |
| Open source    | Yes — MIT ([repository](https://github.com/twbs/icons)) |
| Type           | Open-source icon library                                |
| Works with     | SVG, icon font, CSS, Bootstrap, any web stack           |
| Best for       | bootstrap interfaces, svg and font use, general web UI  |
| Agent-friendly | Yes                                                     |

## What it is

Bootstrap Icons is the official icon set from the Bootstrap project. It contains
more than 2,000 icons and can be used with Bootstrap or on its own.

The project distributes individual SVG files, a sprite, and an icon font. This
makes it useful for both framework projects and plain HTML pages, while
retaining a familiar, consistent outline and fill vocabulary.

## Paywall and pricing

- Free: browse, download, and use all icons under the MIT licence.
- Paid: no paid tier or price is published.
- Sign-up required? No for the website, package, or source files.
- Client work: MIT permits commercial and client use. Brand icons still
  represent their respective owners.

Pricing and licence information checked 2026-10-07.

## How to use

1. Search the icon catalog by name and open the detail page to inspect SVG and
   font options.
2. Install the package if the project uses the bundled icon font; otherwise
   download only the SVG assets needed.
3. Use the documented bi class naming pattern for font icons, or inline the SVG
   for direct color and sizing control.
4. Add visible text or an accessible label when the icon is the only content in
   a control.

Install with Bun:

```bash
bun add bootstrap-icons
```

Minimal usage from the official documentation:

```html
<i class="bi bi-heart" aria-hidden="true"></i>
```

## Examples

- [Heart](https://icons.getbootstrap.com/icons/heart/) — Outline heart with tags
  and SVG download.
- [Heart fill](https://icons.getbootstrap.com/icons/heart-fill/) — A filled
  companion for selected or active states.
- [Search heart](https://icons.getbootstrap.com/icons/search-heart/) — A more
  specific combined symbol for discovery interfaces.

## When to use it

- Use it when you want a familiar, broad set that supports SVG, sprite, and font
  delivery.
- Skip it when its Bootstrap-era proportions do not fit the design; compare
  Lucide, Iconoir, or Heroicons.

## Agent notes

- Package: bootstrap-icons. Font classes use the bi prefix; SVG files can be
  embedded directly.
- The icon library is independent of Bootstrap CSS, so it can be used in any web
  stack.
- Use aria-hidden for decorative icons and label icon-only actions.

## Alternatives in this repo

- [Lucide](../icons/lucide.md) — A restrained outline set with framework
  packages.
- [Iconoir](../icons/iconoir.md) — An alternative with a clear stroke system.
- [Tabler Icons](../icons/tabler-icons.md) — A larger set with outline and
  filled variants.

## Sources

- [Official site](https://icons.getbootstrap.com/) — checked 2026-10-07
- [Heart icon](https://icons.getbootstrap.com/icons/heart/) — checked 2026-10-07
- [Heart fill icon](https://icons.getbootstrap.com/icons/heart-fill/) — checked
  2026-10-07
- [Search heart icon](https://icons.getbootstrap.com/icons/search-heart/) —
  checked 2026-10-07
- [GitHub repository](https://github.com/twbs/icons) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals) — checked 2026-10-07; page
  fetch unavailable, blurb copied from batch metadata
