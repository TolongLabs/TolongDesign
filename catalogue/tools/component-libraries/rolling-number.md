---
name: 'Rolling Number'
slug: rolling-number
section: 'Component Libraries'
section_slug: component-libraries
source_url: 'https://rolling.kitlangton.dev/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Smooth digit-rolling number counter for React.'
paywall: free
pricing_summary: 'Free and open source under MIT; no paid tier was published.'
open_source: true
license: 'MIT'
category_tags: [react, solid, numbers, animation]
best_for: [live metrics, prices and counters]
stack: ['react', 'solid', 'typescript']
execution_mode: package
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Rolling Number

> Smooth digit-rolling number counter for React. Yes — npm package, TypeScript
> types, and readable source.

## At a glance

| Field          | Value                                                                       |
| -------------- | --------------------------------------------------------------------------- |
| Source         | [rolling.kitlangton.dev](https://rolling.kitlangton.dev/)                   |
| Paywall        | **Free** — Free and open source under MIT; no paid tier was published.      |
| Open source    | Yes — MIT ([project source](https://github.com/kitlangton/rolling-number)). |
| Type           | Digit-rolling number and text animation library                             |
| Works with     | React 18/19, Solid, and a framework-independent TypeScript core             |
| Best for       | live metrics, prices and counters                                           |
| Agent-friendly | Yes — Yes — npm package, TypeScript types, and readable source              |

## What it is

Rolling Number is an animation library that rolls changing digits and formatted
values into place. The repository provides a framework-independent TypeScript
core plus React and Solid adapters.

The React component supports locale formatting and values such as currencies.
The project says the DOM core has no runtime dependencies, and the adapters
target modern React and Solid versions.

The public GitHub repository is MIT-licensed. The project includes a live demo,
documentation in Markdown, and a benchmark page.

## Paywall and pricing

- **Free:** Public npm packages and source are available at no cost.
- **Paid:** No paid tier or price was published.
- **Sign-up required?** No account is required to install the package.
- **Licence for client work:** MIT, according to the GitHub repository.

Pricing and access were checked on 2026-10-07.

## How to use

1. Install the package with Bun or another package manager.

2. Import the React adapter and its stylesheet, then pass a numeric value and
   optional locale formatting.

3. Use duration to tune roll timing; update the value from application state
   rather than remounting the component.

4. Check the demo and benchmarks if the counter will update frequently or render
   many values.

Official setup or install command:

```bash
bun add @kitlangton/rolling-number
```

Minimal documented usage or configuration example:

```tsx
import { RollingNumber } from '@kitlangton/rolling-number/react'
import '@kitlangton/rolling-number/styles.css'

export function Price() {
  return (
    <RollingNumber
      value={1234.56}
      locales="en-US"
      format={{ style: 'currency', currency: 'USD' }}
      duration={500}
    />
  )
}
```

## Examples

- [Live demo](https://rolling.kitlangton.dev/) — Try formatted values and
  observe the digit motion.
- [Markdown documentation](https://rolling.kitlangton.dev/index.md) — Text
  version of installation and API documentation.
- [Benchmarks](https://rolling.kitlangton.dev/benchmarks.html) — Performance
  comparisons for the implementation.
- [GitHub repository](https://github.com/kitlangton/rolling-number) — Package
  source and framework adapters.

## When to use it

- Use it for prices, counters, dashboard metrics, or other changing values where
  digit continuity helps readers follow updates.
- Skip it for long prose or values changing faster than the animation can
  finish; compare [NumberFlow](../component-libraries/numberflow.md) for another
  number-focused option.

## Agent notes

- React import path is @kitlangton/rolling-number/react; Solid has a separate
  adapter.
- Import the package stylesheet when using the React package.
- The component uses Intl formatting; choose locale and currency options
  explicitly.
- The DOM core is framework-independent; use the documented adapter for the
  target framework.

## Alternatives in this repo

- [NumberFlow](../component-libraries/numberflow.md) — A React number transition
  library with formatted output.
- [Re UI](../component-libraries/re-ui.md) — A broader registry with number and
  application components.
- [shadcn/ui](../component-libraries/shadcn-ui.md) — General copyable primitives
  for a custom counter.

## Sources

- [Rolling Number demo](https://rolling.kitlangton.dev/) — checked 2026-10-07
- [Markdown documentation](https://rolling.kitlangton.dev/index.md) — checked
  2026-10-07
- [Benchmarks](https://rolling.kitlangton.dev/benchmarks.html) — checked
  2026-10-07
- [GitHub repository](https://github.com/kitlangton/rolling-number) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
