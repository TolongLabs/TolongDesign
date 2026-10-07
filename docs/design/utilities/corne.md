---
name: Corne
slug: corne
section: Utilities
section_slug: utilities
source_url: 'https://corne.rs/'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: Documentation for the Corne split keyboard.
paywall: free
pricing_summary:
  'The current Lisse library is public and MIT-licensed; no paid plan or price
  is published.'
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

| Field          | Value                                                                              |
| -------------- | ---------------------------------------------------------------------------------- |
| Source         | [corne.rs](https://corne.rs/)                                                      |
| Paywall        | **Free** — the current Lisse library and source are public; no paid plan is shown. |
| Open source    | Yes — MIT ([Lisse repository](https://github.com/JaceThings/Lisse)).               |
| Type           | Smooth-corner rendering library                                                    |
| Works with     | JavaScript, React, Vue, Svelte, and other documented integrations                  |
| Best for       | Smooth corners and squircle-shaped UI surfaces                                     |
| Agent-friendly | Yes — package installation and framework docs are available                        |

## What it is

On 2026-10-07, a headless browser loaded `corne.rs` with HTTP 200 and the page
identified itself as “lisse,” not Corne keyboard documentation. It described a
JavaScript library for smooth, squircle-like corners, showed an interactive
demo, and published install commands for React, Vue, Svelte, and framework-
agnostic packages. The `/pricing` and `/docs` paths returned to the same
homepage.

The linked public Lisse repository identifies the library as MIT-licensed and
publishes framework bindings and usage documentation. This entry therefore
describes Lisse at the listed URL; it does not describe the Corne keyboard
hardware from the Designeer blurb.

## Paywall and pricing

- **Free:** The public Lisse packages, source repository, playground, and docs
  are available without a paid plan.
- **Paid:** No paid tier or price is published; `/pricing` returns to the home
  page.
- **Sign-up required?** No for the playground, package installation, or public
  docs.
- **Licence for client work:** MIT for the Lisse library code. This does not
  apply to unrelated Corne keyboard assets.

Pricing and access checked 2026-10-07.

## How to use

For a React project, install the framework package named in the official
repository:

```bash
npm install @lisse/react
```

The repository's React integration uses the `SmoothCorners` component:

```tsx
import { SmoothCorners } from '@lisse/react'

export function Panel() {
  return (
    <SmoothCorners
      corners={{ radius: 20, smoothing: 0.6 }}
      style={{ background: '#fff', padding: 24 }}
    >
      <h2>Content</h2>
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
- [Pricing route](https://corne.rs/pricing) — checked 2026-10-07; returned to
  the Lisse homepage
- [Docs route](https://corne.rs/docs) — checked 2026-10-07; returned to the
  Lisse homepage
- [Lisse playground](https://corne.rs/playground) — checked 2026-10-07
- [Lisse GitHub repository](https://github.com/JaceThings/Lisse) — checked
  2026-10-07
- [Lisse repository README](https://github.com/JaceThings/Lisse#readme) —
  checked 2026-10-07; package names and MIT licence
- [Getting started guide](https://github.com/JaceThings/Lisse/wiki/Getting-Started)
  — checked 2026-10-07
- [Recipes guide](https://github.com/JaceThings/Lisse/wiki/Recipes) — checked
  2026-10-07
- [MIT licence](https://github.com/JaceThings/Lisse/blob/main/LICENSE) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/utilities) — checked 2026-10-07
