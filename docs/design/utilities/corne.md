---
name: Corne
slug: corne
section: Utilities
section_slug: utilities
source_url: 'https://corne.rs/'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: Documentation for the Corne split keyboard.
paywall: unknown
pricing_summary:
  'The source URL now hosts Lisse, and its pricing could not be determined.'
open_source: true
license: MIT
category_tags: [css, corners, ui, effects]
best_for: [smooth corners, squircle treatments, border styling]
stack: [javascript, react, vue, svelte]
agent_friendly: true
last_verified: 2026-10-07
---

# Corne

> Documentation for the Corne split keyboard. The listed URL now hosts Lisse, a
> smooth-corner library, so the original keyboard resource has been replaced.

## At a glance

| Field          | Value                                                                    |
| -------------- | ------------------------------------------------------------------------ |
| Source         | [corne.rs](https://corne.rs/)                                            |
| Paywall        | **Unknown** — the URL changed products and current pricing is not stated |
| Open source    | Yes — current Lisse repository is MIT-licensed                           |
| Type           | Smooth-corner rendering library                                          |
| Works with     | JavaScript, React, Vue, Svelte, and other documented integrations        |
| Best for       | Smooth corners and squircle-shaped UI surfaces                           |
| Agent-friendly | Yes — package installation and framework docs are available              |

## What it is

Designeer's entry describes Corne, the split keyboard. The batch's source URL
`corne.rs` now serves Lisse, a JavaScript library for rendering smoothed or
squircle-like corners. The live site links to the Lisse project and playground;
it is not the keyboard documentation described by the directory entry.

Lisse exposes per-corner radius, smoothing, borders, and shadow styling. Its
repository documents framework packages, including a React integration, as well
as recipes and a playground. This doc describes the current site at the listed
URL so readers can recognize the product change; it does not describe the Corne
keyboard.

The source change makes this a potentially stale catalogue record. Verify the
directory entry before relying on it as a reference for a split keyboard.

## Paywall and pricing

- **Free:** The public Lisse repository is MIT-licensed.
- **Paid:** No current Lisse subscription or price was established.
- **Sign-up required?** No sign-up is shown for the public playground or docs.
- **Licence for client work:** The Lisse repository is MIT-licensed. This
  applies to the library code, not to any unrelated keyboard assets.

Paywall is **unknown** because the listed source URL changed products and no
current pricing terms were published in the sources reviewed. Checked
2026-10-07.

## How to use

For a React project, install the framework package:

```bash
bun add @lisse/react
```

The repository's React integration uses the `SmoothCorners` component:

```tsx
import { SmoothCorners } from '@lisse/react'

export function Panel() {
  return (
    <SmoothCorners radius={24} smoothing={0.7}>
      <div className="panel-content">Content</div>
    </SmoothCorners>
  )
}
```

Use the playground to tune radius and smoothing against the real component
shape. Keep the effect subtle for controls with dense labels, and check the
result at multiple sizes before making it a shared design token.

## Examples

- [Lisse playground](https://corne.rs/playground) — adjust corner settings in
  the browser before choosing a value.
- [Getting started](https://github.com/JaceThings/Lisse/wiki/Getting-Started) —
  follow the documented framework setup.
- [Lisse recipes](https://github.com/JaceThings/Lisse/wiki/Recipes) — review
  combinations for borders, shadows, and corner effects.
- [Lisse repository](https://github.com/JaceThings/Lisse) — inspect package
  source and framework entry points.

## When to use it

- Use the current Lisse project when a web interface needs controlled smooth
  corners beyond a standard CSS radius.
- Compare the effect with the rest of the page; a pronounced squircle can make
  an otherwise restrained UI feel inconsistent.
- Skip this entry when researching Corne keyboard hardware. The source now
  points to another product, so find the keyboard's current official docs.

## Agent notes

- The source URL currently resolves to Lisse, not the Corne keyboard.
- React package: `@lisse/react`; install with `bun add @lisse/react`.
- The repository also describes Vue and Svelte integrations; use each
  framework's current README and package name before installing.
- Playground: [corne.rs/playground](https://corne.rs/playground).
- Repository: [JaceThings/Lisse](https://github.com/JaceThings/Lisse).
- Do not cite this record as keyboard documentation without correcting the
  catalogue's source metadata.

## Alternatives in this repo

- [Painterly](../component-libraries/painterly.md) — use for broader illustrated
  or hand-made component styling.
- [Drawably](../utilities/drawably.md) — add sketched outlines to React UI
  primitives.
- [shadcn/ui](../component-libraries/shadcn-ui.md) — use for conventional
  reusable React components.

## Sources

- [Listed source URL, now Lisse](https://corne.rs/) — checked 2026-10-07
- [Lisse playground](https://corne.rs/playground) — checked 2026-10-07
- [Lisse GitHub repository](https://github.com/JaceThings/Lisse) — checked
  2026-10-07
- [Getting started guide](https://github.com/JaceThings/Lisse/wiki/Getting-Started)
  — checked 2026-10-07
- [Recipes guide](https://github.com/JaceThings/Lisse/wiki/Recipes) — checked
  2026-10-07
- [MIT licence](https://github.com/JaceThings/Lisse/blob/main/LICENSE) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/utilities) — checked 2026-10-07
