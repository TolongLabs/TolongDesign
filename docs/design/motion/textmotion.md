---
name: textmotion
slug: textmotion
section: Motion
section_slug: motion
source_url: 'https://textmotion.dev/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: Zero-dependency text roll animation primitive.
paywall: free
pricing_summary:
  'The MIT-licensed `slot-text` package is free, with no paid plan listed.'
open_source: true
license: MIT
category_tags: [text-animation, micro-interactions, accessibility]
best_for: [status labels, counters, button feedback]
stack: [react, vue, solid, svelte]
agent_friendly: true
last_verified: 2026-10-07
---

# textmotion

> Zero-dependency text roll animation primitive.
>
> Use it for short text changes that benefit from a restrained, readable rolling
> transition.

## At a glance

| Field          | Value                                               |
| -------------- | --------------------------------------------------- |
| Source         | [textmotion.dev](https://textmotion.dev/)           |
| Paywall        | **Free** — MIT package `slot-text`                  |
| Open source    | Yes — MIT, stated on the official site              |
| Type           | Text transition primitive                           |
| Works with     | Vanilla JS, React, Vue, Solid, Svelte               |
| Best for       | Status text, counters, and short action labels      |
| Agent-friendly | Yes — npm package with documented framework exports |

## What it is

The site presents `slot-text`, a small dependency-free primitive that rolls text
into place. It splits text into clipped character or word slots, then slides old
and new faces through those slots with a stagger. It is intended for short
labels rather than paragraph animation.

The package exposes adapters for vanilla JavaScript, React, Vue, Solid, and
Svelte. The optional stylesheet provides the clipping needed for the rolling
effect; without it, text still updates but does not animate as a roll.

Calls can be interrupted or queued without stacking animations. The page also
shows reduced-motion and screen-reader considerations, so the effect can be used
without making text state changes inaccessible.

## Paywall and pricing

- **Free:** the package, website demos, and documentation are public.
- **Paid:** no paid plan or premium package is listed.
- **Sign-up required?** No for browsing or installing the package.
- **Licence for client work:** the package is MIT licensed. The site does not
  list restrictions on commercial use.

Pricing and licence details were checked on 2026-10-07.

## How to use

1. Add the package to the app:

   ```bash
   bun add slot-text
   ```

2. Import the React adapter and the stylesheet once in the application.
3. Pass the changing label as `text`. Use `rollBy: "word"` when keeping word
   spacing and ligatures together is more important than per-character motion.

   ```tsx
   import { SlotText } from 'slot-text/react'
   import 'slot-text/style.css'

   export function SaveStatus() {
     return <SlotText text="Changes saved" options={{ rollBy: 'word' }} />
   }
   ```

4. Choose direction and duration to match the meaning of the state change. The
   demo uses upward motion for forward progress and shows `flash()` for
   temporary feedback.
5. Keep the visible label available to assistive technology and respect the
   project's reduced-motion preference.

## Examples

All three examples below are live demonstrations on the official home page.

- [Operational status](https://textmotion.dev/) — a label rolling between
  operating states.
- [Request counter](https://textmotion.dev/) — updates only digits that change
  with `skipUnchanged`.
- [Save changes](https://textmotion.dev/) — shows a word-level label update for
  an action button.

## When to use it

- Use it for a short, changing status or action label where users should notice
  the update without a large animated flourish.
- Use it for counters whose changing digits should remain visually connected to
  their previous value.
- Skip it for long prose, rapidly changing data that would create constant
  motion, or content that must be scanned without animation.
- Skip it when a simple text replacement is clearer. Use a general-purpose
  timeline library for choreography involving several elements.

## Agent notes

- Package name: `slot-text`; the design reference is branded `textmotion`.
- Framework subpaths are `slot-text/react`, `slot-text/vue`, `slot-text/solid`,
  and `slot-text/svelte`.
- Import `slot-text/style.css` once for the roll clipping effect.
- Do not add a separate animation dependency; the package has zero runtime
  dependencies according to the official page.
- Check the chosen adapter's API before translating between framework versions.

## Alternatives in this repo

- [Morphicons](../motion/morphicons.md) — use when icon shapes, rather than
  text, need to transition.
- [glimm](../motion/glimm.md) — use for shader-driven transitions between
  Next.js pages.
- [Devouring Details](../motion/devouring-details.md) — study more involved
  micro-interaction examples and design rationale.

## Sources

- [Official site, demos, and usage docs](https://textmotion.dev/) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
