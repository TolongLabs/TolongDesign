---
name: Sombra
slug: sombra
section: Design Galleries
section_slug: design-galleries
source_url: 'https://sombra.design/'
designeer_url: 'https://designeer.xyz/'
designeer_blurb: Showcase of dark-mode website interfaces.
paywall: unknown
pricing_summary:
  'The live domain serves a Gradient Composer, but the directory-listed gallery
  identity and its pricing or access terms could not be verified.'
open_source: false
license: unknown
category_tags: [gradients, backgrounds, visual-editor, react]
best_for: [layered gradient backgrounds, React background prototypes]
stack: ['react']
execution_mode: browser-app
surface: ['web-asset', 'web-ui']
status: degraded
agent_friendly: true
last_verified: 2026-10-15
---

# Sombra

> Showcase of dark-mode website interfaces. The current official domain instead
> renders a gradient composition tool, so the listing and live product do not
> presently match.

## At a glance

| Field          | Value                                                                                           |
| -------------- | ----------------------------------------------------------------------------------------------- |
| Source         | [sombra.design](https://sombra.design/)                                                         |
| Paywall        | **Unknown** — the live product does not match the directory description, and no price is shown. |
| Open source    | No — no public source repository was found in the pages searched.                               |
| Type           | The listed product is a dark-site gallery; the live URL renders a gradient composer.            |
| Works with     | The live page offers a React code export; other requirements are not published.                 |
| Best for       | Experimenting with layered gradients if this is the intended product.                           |
| Agent-friendly | Partial — the live page exposes a Copy React action; no CLI or API was found.                   |

## What it is

Designeer describes Sombra as a showcase of dark-mode website interfaces. In a
headless Chromium browser on 2026-10-07, `https://sombra.design/` returned HTTP
200 with the title “Sombra — Gradient Composer.” The rendered page showed
palette presets (DIA, Ocean, Sunset, Aurora, Candy, Ember, Mono), a layered
composition editor, controls for shape, finish, and motion, and an Export Code /
Copy React action. It says a composition needs at least two layers and allows up
to ten.

The `/pricing` and `/about` paths returned the same composer page. No separate
pricing, licensing, owner, or shareable example pages were exposed. Because the
live product does not match the Designeer description, it is not possible to
confirm that the current composer is the gallery listed here.

## Paywall and pricing

- **Free:** The current composer controls rendered without a sign-in prompt, but
  the listed gallery's access terms could not be confirmed.
- **Paid:** Not published. The `/pricing` path returned the composer rather than
  pricing information.
- **Sign-up required?** No prompt appeared before the composer loaded; whether
  export or other features are gated is unknown.
- **Licence for client work:** Unknown. No current licence or terms page was
  found.

Pricing and identity checked 2026-10-07. Paywall remains unknown because the
live product and the directory listing do not match.

## How to use

1. Confirm that the current Gradient Composer is the intended Sombra product;
   the page does not match the Designeer listing checked on 2026-10-07.
2. If so, choose a palette preset and arrange between two and ten layers; the
   top row is the front-most layer.
3. Adjust style, color, shape, finish, and motion, then open Export Code and
   choose Copy React.
4. Confirm current ownership and reuse terms before shipping generated code. For
   dark-site references, use
   [Dark Mode Design](../design-galleries/dark-mode-design.md) or
   [Minimal Gallery](../design-galleries/minimal-gallery.md).

## Examples

No separate example URLs, shareable presets, or official launch post were found.
The current page exposes presets inside one app, but they do not have individual
links and the composer may not be the directory-listed product.

- [Current Sombra page](https://sombra.design/) — the browser-rendered Gradient
  Composer; not a verified example of the listed gallery.

## When to use it

- Use it only after the official gallery is available and current terms can be
  checked.
- Skip it while unavailable; use
  [Dark Mode Design](../design-galleries/dark-mode-design.md) for a working
  dark-site gallery.

## Agent notes

**Availability recheck — 2026-10-15 (GMT+8):** The homepage returns HTTP 200 and
renders Sombra — Gradient Composer, including layers and a Copy React control.
The listed dark-mode gallery remains unverified. The domain is not dead; keep
the identity mismatch visible rather than treating the composer as the original
gallery. Other pricing, licensing and feature statements retain their separately
dated source checks.

- The current page exposes React code copying but no separate docs, API, MCP
  server, or CLI.
- On 2026-10-07, `/pricing` and `/about` returned the same HTTP 200 composer
  page as the root.
- Do not infer that the current composer is the dark-mode gallery in the
  Designeer description.

## Alternatives in this repo

- [Dark Mode Design](../design-galleries/dark-mode-design.md) — A currently
  accessible gallery focused on dark-themed websites.
- [Minimal Gallery](../design-galleries/minimal-gallery.md) — A broad gallery
  with dark colors as a searchable style.
- [Curated Design](../design-galleries/curated-design.md) — Live website
  examples with style and page-section filters.

## Sources

- [Primary URL availability recheck](https://sombra.design/) — checked
  2026-10-15; availability and product identity only.
- [Official site](https://sombra.design/) — HTTP 200; Gradient Composer
  rendered; checked 2026-10-07
- [Pricing path](https://sombra.design/pricing) — same composer page; checked
  2026-10-07
- [About path](https://sombra.design/about) — same composer page; checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/) — checked 2026-10-07
