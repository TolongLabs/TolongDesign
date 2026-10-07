---
name: morphicons
slug: morphicons
section: Motion
section_slug: motion
source_url: 'https://www.morphicons.com/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: Spring-physics icon morphing animation library.
paywall: free
pricing_summary:
  'The MIT-licensed package and its public playground are free; no paid plan is
  listed.'
open_source: true
license: MIT
category_tags: [icons, svg, animation]
best_for: [icon state changes, navigation controls, status feedback]
stack: [react, vue, svelte, react-native, astro]
agent_friendly: true
last_verified: 2026-10-07
---

# morphicons

> Spring-physics icon morphing animation library.
>
> Use it when a control needs one icon to move naturally into another as its
> state changes.

## At a glance

| Field          | Value                                                    |
| -------------- | -------------------------------------------------------- |
| Source         | [morphicons.com](https://www.morphicons.com/)            |
| Paywall        | **Free** — MIT package and public playground             |
| Open source    | Yes — [MIT](https://github.com/guillermolg00/morphicons) |
| Type           | SVG icon animation library                               |
| Works with     | React, Vue, Svelte, React Native, Astro                  |
| Best for       | State changes, toggles, validation, player controls      |
| Agent-friendly | Yes — package, examples, and `llms.txt`                  |

## What it is

morphicons animates between stroke-based SVG icons. It accepts icon path data or
Lucide's `IconNode` data, so the icons can come from Lucide, Tabler, Heroicons
outline, Iconoir, and other compatible sets.

Its framework bindings render the icon as inline SVG and animate when the icon
data changes. The library calculates rotation and shape alignment, then applies
interruptible spring motion. The core has no runtime dependencies; it is a small
animation primitive rather than a replacement icon collection.

The public site combines a searchable icon playground with a copyable component
showcase. Separate adapters support CSS masks and canvas targets when inline SVG
is not the right rendering surface.

## Paywall and pricing

- **Free:** the package, documentation, playground, and showcase are public.
- **Paid:** no paid plan or package tier is listed on the official site.
- **Sign-up required?** No for browsing the site or installing the public npm
  package.
- **Licence for client work:** the library is MIT. Check the licence of each
  icon set separately; the demo icons retain their own licences.

Pricing and licence details were checked on 2026-10-07.

## How to use

1. Add the library and a compatible icon-data package to a React project:

   ```bash
   bun add morphicons lucide
   ```

2. Import icon data from `lucide`, not the `lucide-react` component package.
   morphicons consumes the `IconNode` data rather than rendered React icons.
3. Render the icon for the current state. Replacing `Menu` with `X` animates the
   change without a separate animation wrapper or a manually declared pair.

   ```tsx
   import { MorphIcon } from 'morphicons/react'
   import { Menu, X } from 'lucide'

   export function MenuButton({ open }: { open: boolean }) {
     return <MorphIcon icon={open ? X : Menu} spring="snappy" />
   }
   ```

4. Use the showcase to compare springs and stroke widths, then copy the
   component that matches the project's icon set and framework.
5. For gesture-controlled progress, use the documented `from`, `to`, and
   `progress` props instead of a spring-driven state change.

## Examples

These examples are interactive cards on the official showcase page.

- [Copy to clipboard](https://www.morphicons.com/showcase) — morphs Copy into
  Check after a copy action.
- [Password visibility](https://www.morphicons.com/showcase) — morphs Eye into
  EyeOff from an input's trailing control.
- [Theme toggle](https://www.morphicons.com/showcase) — morphs Sun into Moon in
  one icon slot.
- [Canvas adapter](https://www.morphicons.com/showcase/canvas) — drives a chart
  indicator and Mapbox map pins through canvas targets.

## When to use it

- Use it when an outline icon represents a meaningful state transition, such as
  menu open/closed, validation success/error, or play/pause.
- Use it when the project already has SVG path data and needs consistent
  interaction across several icon sets.
- Skip it for static illustrations, filled glyph icons, or transitions where the
  source paths do not represent compatible stroke geometry. Use a static icon or
  a general-purpose timeline animation library.
- Skip it when the animation itself would obscure the control's label or delay
  access to the next action.

## Agent notes

- Package: `morphicons`; React entry: `morphicons/react`.
- Icon data comes from a data package such as `lucide`, not `lucide-react`.
- React 18+, Vue 3.3+, and Svelte 5 are optional peers for their bindings.
- React Native additionally needs `react-native-svg`; check the repository
  README for the supported React Native and Metro requirements.
- The default behavior does not follow the operating system's reduced-motion
  setting. Set `reducedMotion="user"` when the product should honor it.
- The site publishes an `llms.txt` for agent-oriented documentation access.

## Alternatives in this repo

- [textmotion](../motion/textmotion.md) — use when text, rather than an icon,
  needs a compact roll transition.
- [glimm](../motion/glimm.md) — use for shader-driven transitions between
  Next.js pages.
- [Devouring Details](../motion/devouring-details.md) — study interaction
  reasoning and downloadable React examples.

## Sources

- [Official site](https://www.morphicons.com/) — checked 2026-10-07
- [Showcase](https://www.morphicons.com/showcase) — checked 2026-10-07
- [Canvas adapter example](https://www.morphicons.com/showcase/canvas) — checked
  2026-10-07
- [GitHub README and MIT licence](https://github.com/guillermolg00/morphicons) —
  checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
