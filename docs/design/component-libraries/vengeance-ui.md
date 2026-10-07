---
name: Vengeance UI
slug: vengeance-ui
section: Component Libraries
section_slug: component-libraries
source_url: https://www.vengeanceui.com/
designeer_url: https://designeer.xyz/components
designeer_blurb: 'Animated React components with scroll interactions.'
paywall: free
pricing_summary:
  'The official site and MIT repository present the components as free; no paid
  tier is listed.'
open_source: true
license: MIT
category_tags: [react, nextjs, tailwind, motion, shadcn]
best_for: [animated marketing pages, scroll effects, interactive buttons]
stack: [react, nextjs, tailwind]
agent_friendly: true
last_verified: 2026-10-07
---

# Vengeance UI

> Animated React components with scroll interactions. Use its registry when a
> landing page needs a distinctive motion detail or visual effect.

## At a glance

| Field          | Value                                                             |
| -------------- | ----------------------------------------------------------------- |
| Source         | [Vengeance UI](https://www.vengeanceui.com/)                      |
| Paywall        | **Free** — site says its components are open source               |
| Open source    | Yes — [MIT repository](https://github.com/Ashutoshx7/VengeanceUI) |
| Type           | React component catalogue and registry                            |
| Works with     | React, Next.js, Tailwind CSS, shadcn CLI                          |
| Best for       | Motion-heavy marketing pages and interactive blocks               |
| Agent-friendly | Yes — CLI, preview pages, and source                              |

## What it is

Vengeance UI is a catalogue of animated React components with live demos, usage
snippets, and shadcn-compatible registry entries. Its categories include
buttons, text and motion, interactive effects, cards, navigation, and
backgrounds.

The batch URL uses the spelling vengeanceui.com, which did not resolve in the
page reader. The current site opened at vengenceui.com (one fewer “a”); the
official component pages and linked GitHub repository use that spelling. The
catalogue pages disagree on the current item count, so this document avoids a
count that may be stale.

The official site describes the components as open source; the linked repository
identifies the licence as MIT.

## Paywall and pricing

- **Free:** the component catalogue and public registry entries are available.
- **Paid:** no paid tier or price was listed.
- **Sign-up required?** No sign-up was listed for component installs.
- **Licence for client work:** repository licence is MIT.
- **Checked:** 2026-10-07.

## How to use

1. Open a component page and inspect its live preview, props, and dependencies.
2. Install the item with its registry URL. The Animated Button example uses:

```bash
bunx shadcn@latest add https://raw.githubusercontent.com/Ashutoshx7/VengeanceUI/main/public/r/animated-button.json
```

3. Import the local component created by the CLI:

```tsx
import AnimatedButton from '@/components/ui/animated-button'

export function AnimatedButtonDemo() {
  return <AnimatedButton>Get Started</AnimatedButton>
}
```

4. Check whether the selected effect depends on WebGL, Motion, GSAP, or an
   additional registry dependency before using it on a critical path.

## Examples

- [Animated Button](https://www.vengenceui.com/components/my-animated-button) —
  a call-to-action with a shine effect.
- [Pop Button](https://www.vengenceui.com/components/pop-button) — a tactile
  three-dimensional press interaction.
- [Scroll Dissolve Reveal](https://www.vengenceui.com/components/scroll-dissolve-reveal)
  — an image transition tied to scroll progress.

## When to use it

- Use it when a page benefits from one memorable hover, scroll, or button
  treatment.
- Use it for a marketing site where the visual effect can be tested on target
  devices and with reduced motion.
- Skip it for conventional data-heavy app controls; compare
  [Ruru UI](../component-libraries/ruru-ui.md).

## Agent notes

The registry uses the shadcn CLI. Component pages include install commands,
source imports, and prop tables. The official host currently uses the spelling
vengenceui.com. Verify imports and dependencies against the selected page; the
homepage and component index report different catalogue counts.

## Alternatives in this repo

- [Skiper UI](../component-libraries/skiper-ui.md) — a freemium collection of
  animated primitives and page blocks.
- [Evil Buttons](../component-libraries/evil-buttons.md) — interaction-focused
  buttons with individual installation pages.

## Sources

- [Batch source URL](https://www.vengeanceui.com/) — checked 2026-10-07
- [Current official homepage](https://www.vengenceui.com/) — checked 2026-10-07
- [Components index](https://www.vengenceui.com/components) — checked 2026-10-07
- [Animated Button](https://www.vengenceui.com/components/my-animated-button) —
  checked 2026-10-07
- [Pop Button](https://www.vengenceui.com/components/pop-button) — checked
  2026-10-07
- [MIT repository](https://github.com/Ashutoshx7/VengeanceUI) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
