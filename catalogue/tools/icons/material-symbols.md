---
name: Material Symbols
slug: material-symbols
section: Icons
section_slug: icons
source_url: 'https://fonts.google.com/icons'
designeer_url: 'https://designeer.xyz/visuals'
designeer_blurb: 'Google variable icon font spanning three styles.'
paywall: free
pricing_summary: 'Completely free and open source under the Apache-2.0 licence.'
open_source: true
license: Apache-2.0
category_tags: [icons, variable-fonts, google, ui-icons, design-system]
best_for: [web applications, dashboards, cross-platform apps]
stack: ['css', 'react', 'vue', 'web-components']
execution_mode: package
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Material Symbols

> Google variable icon font spanning three styles. TolongLabs developers reach
> for Material Symbols to equip web applications with a massive, consistent, and
> dynamically customizable icon system via a single variable font file.

## At a glance

| Field          | Value                                                                        |
| -------------- | ---------------------------------------------------------------------------- |
| Source         | [fonts.google.com/icons](https://fonts.google.com/icons)                     |
| Paywall        | **Free** — 100% free and open source                                         |
| Open source    | Yes — Apache-2.0 ([GitHub](https://github.com/google/material-design-icons)) |
| Type           | Variable icon font and SVG icon library                                      |
| Works with     | CSS, React, Vue, HTML, Web Components                                        |
| Best for       | Web applications, dashboards, cross-platform apps                            |
| Agent-friendly | Yes — npm package, Google Fonts CDN, SVG downloads                           |

## What it is

Material Symbols is Google's consolidated icon system and the successor to the
legacy Material Icons library. It contains over 2,500 distinct glyphs across
three primary stylistic treatments: Outlined, Rounded, and Sharp. Designed to
align with Google's Material Design 3 design system, it covers virtually every
standard interaction and conceptual pattern needed in modern digital interfaces.

The primary architectural advancement of Material Symbols is its foundation on
OpenType variable font technology. Instead of requiring separate font files or
static SVG bundles for varying weights and active states, the entire icon set is
packaged into a single variable font file. Developers can continuously adjust
four variable font axes directly via CSS: Fill (0 or 1), Weight (100 to 700),
Grade (-50 to 200), and Optical Size (20px to 48px).

Compared to icon libraries like Lucide or Heroicons, Material Symbols offers
massive glyph coverage and typographic flexibility. Icons render as font
ligatures or inline SVGs, allowing smooth transitions between outline and filled
states without swapping DOM elements or loading auxiliary asset bundles.

## Paywall and pricing

- **Free:** The complete glyph collection, all variable font files, static
  TTF/WOFF2 web fonts, and raw SVGs are 100% free to use, download, modify, and
  distribute.
- **Paid:** None. There are no paid tiers, pro licenses, or paywalled glyphs.
- **Sign-up required?** No. All assets are accessible and embeddable without a
  Google account.
- **Licence for client work:** Distributed under the Apache License Version 2.0.
  Permitted for use in commercial, client, and proprietary web applications
  without royalty fees or mandatory customer-facing attribution.

Verified on the official Google Fonts and repository licensing documentation on
2026-10-07.

## How to use

1. Embed the variable font stylesheet: Add the Google Fonts stylesheet link to
   your document `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  rel="stylesheet"
/>
```

2. Alternatively, self-host via npm / bun: Install the distribution package to
   bundle fonts locally without external CDN dependencies:

```bash
bun add material-symbols
```

Import only the chosen style in your global stylesheet or entry file:

```javascript
import 'material-symbols/outlined.css'
```

3. Render an icon with font ligatures: Reference the icon glyph name as the text
   content of the element:

```tsx
export function StatusBadge({ active }: { active: boolean }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm font-medium">
      <span className="material-symbols-outlined text-base">
        {active ? 'check_circle' : 'pending'}
      </span>
      {active ? 'Operational' : 'Paused'}
    </span>
  )
}
```

4. Customize variable font axes via CSS: Adjust fill, stroke thickness, or
   optical sizing with `font-variation-settings`:

```css
.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
}

.material-symbols-outlined.filled {
  font-variation-settings:
    'FILL' 1,
    'wght' 600,
    'GRAD' 0,
    'opsz' 24;
}
```

## Examples

- [Google Fonts Icons Browser](https://fonts.google.com/icons) — Interactive
  catalog to search over 2,500 glyphs, test optical size/weight sliders, and
  copy HTML or SVG snippets.
- [Material Symbols Developer Guide](https://developers.google.com/fonts/docs/material_symbols)
  — Official Google guide covering variable font axes, self-hosting, and CSS
  customization.
- [Google Material Design Icons GitHub Repository](https://github.com/google/material-design-icons)
  — Upstream source repository containing raw SVGs, font binaries, and release
  notes.

## When to use it

- Use it when building comprehensive web applications, dashboards, or admin
  portals that require an extensive, unified icon set.
- Use it when your design system benefits from variable font axes, such as
  animating between outline and filled states on interaction or tuning stroke
  weights to match custom typography.
- Skip it when you need dedicated React/Vue tree-shakeable SVG components
  without font ligature dependencies; use [Lucide](../icons/lucide.md) or
  [Phosphor](../icons/phosphor.md) instead.
- Skip it when building Tailwind-centric landing pages where a minimalist,
  curated set of icons is preferred; use [Heroicons](../icons/heroicons.md)
  instead.

## Agent notes

- Official guide: `https://developers.google.com/fonts/docs/material_symbols`.
- Coding agents can integrate icons directly by adding `material-symbols`
  (`bun add material-symbols`) or inserting the Google Fonts CDN link.
- Ligatures require exact snake_case icon identifiers matching the official
  Google Fonts directory (e.g. `settings`, `account_circle`, `search`).
- When bundling locally with bundlers (Vite, Next.js, Webpack), import targeted
  stylesheets like `material-symbols/outlined.css` rather than the root package
  to avoid including redundant font weights and style variants.

## Alternatives in this repo

- [Lucide](../icons/lucide.md) — Community-driven, tree-shakeable icon set
  packaged as native components for React, Vue, Svelte, and vanilla JS.
- [Phosphor](../icons/phosphor.md) — Flexible icon family with six uniform
  weights and dedicated framework component packages.
- [Heroicons](../icons/heroicons.md) — Clean, minimalist icon set handcrafted by
  the Tailwind CSS team for seamless Tailwind utility integration.

## Sources

- [Google Fonts Icons](https://fonts.google.com/icons) — checked 2026-10-07
- [Material Symbols Developer Guide](https://developers.google.com/fonts/docs/material_symbols)
  — checked 2026-10-07
- [Google Material Design Icons GitHub](https://github.com/google/material-design-icons)
  — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals)
