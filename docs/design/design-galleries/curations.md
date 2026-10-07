---
name: 'Curations'
slug: 'curations'
section: 'Design Galleries'
section_slug: 'design-galleries'
source_url: 'https://curations.supply/'
designeer_url: 'https://designeer.xyz/'
designeer_blurb: 'Library of curated digital design assets.'
paywall: free
pricing_summary:
  'Public directory browsing is free; sign-in is required to save favorites. No
  paid access plan or price is published; sponsored placements may appear.'
open_source: false
license: 'unknown'
category_tags: ['curation', 'design-resources', 'directory']
best_for: ['finding curated resource lists']
stack: []
agent_friendly: false
last_verified: 2026-10-07
---

# Curations

> Library of curated digital design assets. Use it to collect focused
> references, then turn observed patterns into a project-specific brief.

## At a glance

| Field          | Value                                                                                                             |
| -------------- | ----------------------------------------------------------------------------------------------------------------- |
| Source         | [curations.supply](https://curations.supply/)                                                                     |
| Paywall        | **Free** — Featured entries are public; the terms say sign-in is required to save favorites.                      |
| Open source    | No — the terms say the service's branding, layout, and original content belong to Panda Network or its licensors. |
| Type           | Directory of curated design tools, references, and resources                                                      |
| Works with     | Browser research; no code stack                                                                                   |
| Best for       | finding curated resource lists                                                                                    |
| Agent-friendly | No — human-facing reference browsing                                                                              |

## What it is

On 2026-10-07, a headless browser loaded the official homepage with HTTP 200 and
the title “Curations Supply - Curated Directory of Curations Supplied by
Experts.” The homepage's `document.body.innerText` was empty, although its DOM
contained 365 links. The official `/featured` page loaded 17 named entries,
including Mobbin, Navbar Gallery, Best Designs on X, and MaxiBestOf.

The `/terms` page loaded and describes a public directory of curated tools and
design inspiration. It says sign-in is required for saving favorites and that
some placements may be sponsored. The `/pricing` route returned HTTP 200 but
showed “No curations found,” not a pricing table. Public browsing works without
sign-in; no paid membership or price was published in the pages checked.

## Paywall and pricing

- **Free:** The 17 entries on the public Featured page can be browsed without
  signing in.
- **Paid:** No paid access plan or price was published. The terms say some
  placements may be sponsored but do not state a rate.
- **Sign-up required?** No to browse; yes to save favorites, according to the
  terms.
- **Licence for client work:** The terms reserve rights in the service's own
  branding, layout, and content. Follow the licence at each third-party source
  before reusing its work.

The access and pricing details above were checked on 2026-10-07.

## How to use

1. Open the Featured page or choose a topic such as Design Inspiration,
   Typography, or Tool Directories.
2. Follow a listing to its own site; Curations Supply is a directory, not the
   publisher of the linked resources.
3. If you want to save items to Favorites, follow the terms' sign-in
   requirement. The terms also describe an optional newsletter and contributor
   submissions.
4. Record each original resource URL and check its current licence and terms.
5. Treat sponsored placements as disclosed recommendations, not an endorsement
   by TolongLabs.

## Examples

These entries appeared on the official Featured page when checked. They link to
the original resource sites:

- [Mobbin](https://mobbin.com/discover/apps/web) — mobile and web UI/UX design
  references.
- [Navbar Gallery](https://navbar.gallery/) — website navigation inspiration.
- [MaxiBestOf typefaces](https://maxibestof.one/typefaces) — a curated typeface
  collection.

## When to use it

- Use it to find public design references and follow them to their original
  sources.
- Skip it when you need a verified licence for the resources themselves; use
  each linked source's own terms before adopting assets.

## Agent notes

The browser-rendered Featured page lists resources as outbound links; no public
API, CLI, `llms.txt`, or agent integration was found. The homepage's visible
text remained empty in the browser capture, but `/featured` exposed 17 entries.
The `/docs` route showed the same “No curations found” state as `/pricing`.

## Alternatives in this repo

- [Design Bookmark](../design-galleries/design-bookmark.md) — a visible
  directory of design resources.
- [DesEngs](../design-galleries/desengs-com.md) — design-engineering links and
  learning resources.
- [isthereanytool](../design-galleries/isthereanytool.md) — searchable tool
  listings and editorial guides.

## Sources

- [Official site](https://curations.supply/) — checked 2026-10-07; HTTP 200,
  title loaded, empty `document.body.innerText`, and 365 DOM links
- [Featured Curations](https://curations.supply/featured) — checked 2026-10-07;
  17 entries rendered
- [Terms of Service](https://curations.supply/terms) — checked 2026-10-07; last
  updated 2026-08-31
- [Pricing route](https://curations.supply/pricing) — checked 2026-10-07; HTTP
  200 but showed “No curations found,” not pricing
- [Third-party Cootab listing](https://cootab.com/explore/sites/curations-supply)
  — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/) — checked 2026-10-07
