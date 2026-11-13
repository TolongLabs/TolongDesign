---
name: 'Boxicons'
slug: 'boxicons'
section: 'Icons'
section_slug: 'icons'
source_url: 'https://boxicons.com/'
designeer_url: 'https://designeer.xyz/visuals'
designeer_blurb: 'Vector icons crafted in three styles.'
paywall: freemium
pricing_summary:
  'A free icon library is available; paid yearly plans are $39 for one user, $99
  for up to 8 users, and $249 for up to 30 users.'
open_source: true
license: 'CC-BY-4.0'
category_tags: ['icon-library', 'svg', 'react', 'vue', 'svelte', 'brands']
best_for:
  ['large icon catalogs', 'multiple visual weights', 'framework components']
stack: ['react', 'vue', 'svelte', 'javascript']
execution_mode: package
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Boxicons

> Vector icons crafted in three styles. At TolongLabs, use it as a reference for
> choosing and implementing icons that fit the project.

## At a glance

| Field          | Value                                                              |
| -------------- | ------------------------------------------------------------------ |
| Source         | [Official site](https://boxicons.com/)                             |
| Paywall        | **Freemium — free tier; paid options listed below**                |
| Open source    | Yes — CC-BY-4.0                                                    |
| Type           | Vector icon collection                                             |
| Works with     | React, Vue, Svelte, JavaScript, SVG, fonts                         |
| Best for       | large icon catalogs, multiple visual weights, framework components |
| Agent-friendly | Yes                                                                |

## What it is

Boxicons is a vector icon collection with basic, filled, and brand packs. Its
current site advertises a catalog of more than 50,000 icons, while the pricing
page distinguishes the free subset from Pro content.

The React, Vue, Svelte, and JavaScript packages expose framework components. The
free icon assets use CC BY 4.0, the font uses OFL, and the code uses MIT; Pro
assets have separate per-seat terms.

## Paywall and pricing

- Free: the published free icon subset, browser, and framework packages.
- Paid: the pricing page lists Pro at $39 per year for one user, Team at $99 per
  year for up to 8, and Enterprise at $249 per year for up to 30.
- Sign-up required? The site does not state a sign-up requirement for free
  package use; paid access requires an account.
- Client work: free icons allow commercial use with CC BY attribution. Pro
  assets are governed by the separate paid licence.

Pricing and licence information checked 2026-10-07.

## How to use

1. Search the official library and confirm whether the selected icon belongs to
   the free or Pro pack.
2. Install the React package for tree-shakeable components, or use the SVG, CSS,
   or font route documented for the project.
3. Import only the needed component and choose its basic, filled, or brand pack.
4. Add attribution where required by the free icon licence and avoid
   redistributing the raw icon set.

Install with Bun:

```bash
bun add @boxicons/react
```

Minimal usage from the official documentation:

```tsx
import { Alarm, Home } from '@boxicons/react'

export function Example() {
  return (
    <>
      <Alarm />
      <Home />
    </>
  )
}
```

## Examples

- [Alarm React icon](https://docs.boxicons.com/react/free/install) — The
  official install guide demonstrates the Alarm component.
- [Pack variants](https://docs.boxicons.com/react/free/install) — Shows the same
  Alarm symbol in basic and filled packs.
- [Home and Twitter](https://docs.boxicons.com/react/free/install) — The basic
  example imports Home and Twitter components.

## When to use it

- Use it when a project needs many symbols and benefits from basic, filled, and
  brand variants.
- Skip Pro content when the project cannot manage per-seat licensing; Lucide and
  Tabler offer free permissive alternatives.

## Agent notes

- React package: @boxicons/react. The official docs state that named imports are
  tree-shakeable.
- Free icon files use CC BY 4.0, font files use OFL 1.1, and library code uses
  MIT.
- Check whether each asset is free or Pro before including it in a client build
  or design handoff.

## Alternatives in this repo

- [Tabler Icons](../icons/tabler-icons.md) — A permissively licensed outline and
  filled set.
- [Iconify](../icons/iconify.md) — A unified browser for many independent icon
  sets.
- [Bootstrap Icons](../icons/bootstrap-icons.md) — A free MIT-licensed set with
  SVG and font delivery.

## Sources

- [Official library](https://boxicons.com/) — checked 2026-10-07
- [Pricing](https://boxicons.com/pricing) — checked 2026-10-07
- [React installation](https://docs.boxicons.com/react/free/install) — checked
  2026-10-07
- [Free licence](https://docs.boxicons.com/license/free) — checked 2026-10-07
- [Pro licence](https://docs.boxicons.com/license/pro) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals) — checked 2026-10-07; page
  fetch unavailable, blurb copied from batch metadata
