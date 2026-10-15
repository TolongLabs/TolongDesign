---
name: 'Scritto'
slug: scritto
section: 'Component Libraries'
section_slug: component-libraries
source_url: 'https://scrit.to/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Rolling character text transition component library.'
paywall: free
pricing_summary:
  'Free and open source under MIT; no paid tier was published on the official
  site or package pages reviewed.'
open_source: true
license: 'MIT'
category_tags: [react, vue, svelte, text-animation]
best_for: [changing labels, formatted counters]
stack: ['react', 'vue', 'svelte', 'solid']
execution_mode: package
surface: ['web-ui']
status: degraded
agent_friendly: true
last_verified: 2026-10-07
---

# Scritto

> Rolling character text transition component library. Yes — public npm packages
> and GitHub documentation.

## At a glance

| Field          | Value                                                                                                                 |
| -------------- | --------------------------------------------------------------------------------------------------------------------- |
| Source         | [scrit.to](https://scrit.to/)                                                                                         |
| Paywall        | **Free** — Free and open source under MIT; no paid tier was published on the official site or package pages reviewed. |
| Open source    | Yes — MIT ([project source](https://github.com/JaceThings/Scritto)).                                                  |
| Type           | Rolling text animation library                                                                                        |
| Works with     | Framework-independent web component plus React, Vue, Svelte, and Solid bindings                                       |
| Best for       | changing labels, formatted counters                                                                                   |
| Agent-friendly | Yes — Yes — public npm packages and GitHub documentation                                                              |

## What it is

Scritto animates changing text in place. It compares old and new values, keeps
unchanged characters still, and rolls changed glyphs into their new positions.
It supports strings and numbers, rather than only numeric digits.

The core package is a framework-independent custom element, with thin bindings
for React, Vue, Svelte, and Solid. An optional scritto-flow wrapper animates
nearby words when a value changes width.

The repository and npm package pages identify the packages as MIT. The official
homepage timed out when opened directly during verification, but its indexed
content and GitHub README provided the product and installation details.

## Paywall and pricing

- **Free:** Public npm packages and repository are available at no cost.
- **Paid:** No paid plan or price was published on the official pages reviewed.
- **Sign-up required?** No account is needed to install the npm packages.
- **Licence for client work:** MIT, shown in the GitHub repository and npm
  package metadata.

Pricing and access were checked on 2026-10-07.

## How to use

1. Choose the framework binding for the app: @scritto/react, @scritto/vue,
   @scritto/svelte, or @scritto/solid. Each wrapper brings in the core.

2. Install the binding and render Scritto with an initial value. Update the
   value through the framework's normal state flow.

3. For vanilla JavaScript, install @scritto/core and use the scritto-text custom
   element; call update() to animate a change.

4. Use it for short, frequently updated values. Glyphs render in their own
   spans, so ligatures and kerning are disabled inside the animated value.

Official setup or install command:

```bash
bun add @scritto/react
```

Minimal documented usage or configuration example:

```tsx
import Scritto from '@scritto/react'

export function Counter() {
  return <Scritto value="1,000" />
}
```

## Examples

- [Official homepage](https://scrit.to/) — Product explanation and framework
  package list, available in the search index.
- [GitHub README](https://github.com/JaceThings/Scritto) — Vanilla, React, Vue,
  Svelte, and Solid quick starts.
- [React package](https://www.npmjs.com/package/@scritto/react) — React adapter
  install and usage example.
- [Core package](https://www.npmjs.com/package/@scritto/core) —
  Framework-independent custom-element example.

## When to use it

- Use it when a price, count, status, or short label changes and keeping stable
  glyphs helps readers track the update.
- Skip it for paragraphs or text that must preserve kerning and ligatures;
  compare [Rolling Number](../component-libraries/rolling-number.md) or
  [NumberFlow](../component-libraries/numberflow.md) for number-specific
  animation.

## Agent notes

- The official homepage could not be opened directly in this check; the GitHub
  README and npm pages were readable.
- The React binding is @scritto/react and depends on @scritto/core, so a
  separate core install is unnecessary.
- The implementation needs Intl.Segmenter, Web Animations API, CSS masks, and
  linear() easing; the README says it does not polyfill them.
- Fast successive updates may overlap outgoing glyphs; keep duration shorter
  than the normal update interval.

## Alternatives in this repo

- [Rolling Number](../component-libraries/rolling-number.md) — A rolling counter
  focused on formatted numeric values.
- [NumberFlow](../component-libraries/numberflow.md) — A number animation
  library with locale-aware formatting.
- [Transitions](../component-libraries/transitions.md) — A general library for
  interface motion recipes.

## Sources

- [Scritto homepage](https://scrit.to/) — checked 2026-10-07
- [GitHub repository and README](https://github.com/JaceThings/Scritto) —
  checked 2026-10-07
- [React npm package](https://www.npmjs.com/package/@scritto/react) — checked
  2026-10-07
- [Core npm package](https://www.npmjs.com/package/@scritto/core) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
