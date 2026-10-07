---
name: loading.dev
slug: loading-dev
section: Component Libraries
section_slug: component-libraries
source_url: https://loading.dev/
designeer_url: https://designeer.xyz/components
designeer_blurb: 'Lightweight library of loading indicators for React.'
paywall: free
pricing_summary:
  'The package is free under MIT; no paid tier or price is listed.'
open_source: true
license: MIT
category_tags: [react, loading, indicators, accessibility]
best_for: [async states, inline loading, page progress]
stack: [react]
agent_friendly: true
last_verified: 2026-10-07
---

# loading.dev

> Lightweight library of loading indicators for React. Use its live previews to
> match a loader to the wait state, then install the corresponding component.

## At a glance

| Field          | Value                                                             |
| -------------- | ----------------------------------------------------------------- |
| Source         | [loading.dev](https://loading.dev/)                               |
| Paywall        | **Free** — MIT                                                    |
| Open source    | Yes — [GitHub repository](https://github.com/jakubkrehel/loading) |
| Type           | React spinner and loading-indicator library                       |
| Works with     | React 19 or later                                                 |
| Best for       | Inline and full-page loading states                               |
| Agent-friendly | Yes — npm package, docs, and llms.txt link                        |

## What it is

loading.dev is a React library of lightweight animated indicators. The site
lists indicators including Arc, Atom, Blocks, Cascade, Comet, Orbit, Pulse,
Ripple, and Wave. The repository says they respect reduced motion and require
React 19 or later.

Each indicator has its own preview and controls for properties such as size,
color, duration, and animation state. Additional props vary by spinner. The site
links to the package on npm, its GitHub source, and an llms.txt file for
machine-readable discovery.

## Paywall and pricing

- **Free:** the package and all documented spinner examples are available.
- **Paid:** no paid plan or price is listed.
- **Sign-up required?** No.
- **Licence for client work:** MIT, according to the repository.
- **Checked:** 2026-10-07.

## How to use

1. Install the library:

```bash
bun add loading-dev
```

2. Import a spinner and set its dimensions. Arc inherits text color by default:

```tsx
import { Arc } from 'loading-dev'

export function LoadingIndicator() {
  return <Arc size={32} />
}
```

3. Add adjacent text or status semantics in the app so the visual animation is
   not the only indication that work is in progress.
4. Use spinner-specific props only after checking that indicator's docs.

## Examples

- [Arc](https://loading.dev/spinners/arc) — an open stroke rotating in a circle,
  with size, easing, and cap controls.
- [Atom](https://loading.dev/spinners/atom) — three rings tumbling in a circle.
- [Blocks](https://loading.dev/spinners/blocks) — a grid sweep that can run
  diagonally, by rows, or by columns.

## When to use it

- Use it when a React application needs a consistent loading visual and the app
  already targets React 19 or later.
- Use it when the spinner needs to inherit color and fit local styles.
- Skip it for progress that can be communicated more clearly with a measured
  percentage or skeleton layout.

## Agent notes

The package name is loading-dev. React 19 or later is required. The docs show
size, color, duration, playState, and component-specific props. Respect reduced
motion and include a separate accessible status message where needed.

## Alternatives in this repo

- [Ruru UI](../component-libraries/ruru-ui.md) — includes a spinner alongside
  general application primitives.
- [Great UI](../component-libraries/great-ui.md) — page components and
  transition effects rather than a dedicated spinner package.

## Sources

- [Official site](https://loading.dev/) — checked 2026-10-07
- [Arc](https://loading.dev/spinners/arc) — checked 2026-10-07
- [Atom](https://loading.dev/spinners/atom) — checked 2026-10-07
- [Blocks](https://loading.dev/spinners/blocks) — checked 2026-10-07
- [GitHub repository](https://github.com/jakubkrehel/loading) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
