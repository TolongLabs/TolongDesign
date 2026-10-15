---
name: 'NumberFlow'
slug: 'numberflow'
section: 'Component Libraries'
section_slug: 'component-libraries'
source_url: 'https://number-flow.barvian.me/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Smooth number transitions across modern frameworks.'
paywall: free
pricing_summary: 'Free and open source; no paid tier was listed.'
open_source: true
license: MIT
category_tags: ['react', 'animation', 'numbers']
best_for: ['animated counters', 'live metrics']
stack: ['react']
execution_mode: package
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# NumberFlow

> Smooth number transitions across modern frameworks.

A TolongLabs developer can reach for it when a React interface updates numeric
values and a restrained transition helps users track the change.

## At a glance

| Field          | Value                                                     |
| -------------- | --------------------------------------------------------- |
| Source         | [number-flow.barvian.me](https://number-flow.barvian.me/) |
| Paywall        | **Free** — Free and open source; no paid tier was listed. |
| Open source    | Yes — MIT-licensed package source is published on GitHub. |
| Type           | Animated number component                                 |
| Works with     | React; JavaScript package with framework integrations     |
| Best for       | animated counters, live metrics                           |
| Agent-friendly | Yes — documented source, CLI, or agent workflow           |

## What it is

NumberFlow animates changes between numeric values while keeping the number
readable to assistive technology. It is designed for counters, prices, metrics,
and other values that update over time.

The React package is dependency-free and customizable. The project also
documents integrations and examples for several modern frameworks.

Unlike a broad component library, it focuses on number transitions and
formatting, so it can be added without adopting a larger visual system.

## Paywall and pricing

- **Free:** The package and documentation are free to use.
- **Paid:** Not published; no paid plan was listed.
- **Sign-up required?** No — the package and documentation are public.
- **Licence for client work:** MIT permits commercial use subject to its notice
  and attribution terms.

Pricing and access were checked on 2026-10-07.

## How to use

1. Install the React package in the application.
2. Render `NumberFlow` with a numeric `value`; update that prop when the
   displayed number changes.
3. Use the examples to choose formatting and motion behavior for input,
   activity, countdown, or dashboard contexts.

Install or add the documented component with:

```bash
bun add @number-flow/react
```

The official docs show this minimal usage or setup:

```tsx
import NumberFlow from '@number-flow/react'

function Example() {
  return <NumberFlow value={123} />
}
```

## Examples

- [Input example](https://number-flow.barvian.me/examples) — See the value
  transition while editing a number.
- [Activity example](https://number-flow.barvian.me/examples) — See changing
  values in a live activity presentation.
- [Countdown example](https://number-flow.barvian.me/examples) — See a
  time-sensitive value update over time.
- [Showcase](https://number-flow.barvian.me/showcase/) — Review real-world
  presentation examples.

## When to use it

- Use it when a React interface updates numeric values and a restrained
  transition helps users track the change.

- Skip it for static numbers or complex charts; compare
  [Evil Charts](../component-libraries/evil-charts.md) for charting.

## Agent notes

- The value prop is the input; NumberFlow handles the transition when it
  changes.
- Keep the underlying value numeric and use documented formatting options for
  display.
- The React package name is `@number-flow/react`; the repository is MIT
  licensed.

## Alternatives in this repo

- [Evil Charts](../component-libraries/evil-charts.md) — Animated charts rather
  than single-value transitions.
- [daisyUI](../component-libraries/daisyui.md) — Framework-agnostic Tailwind
  component classes.
- [beUI](../component-libraries/beui.md) — Broader animated React components.

## Sources

- [Official site](https://number-flow.barvian.me/) — checked 2026-10-07
- [Examples](https://number-flow.barvian.me/examples) — checked 2026-10-07
- [Showcase](https://number-flow.barvian.me/showcase/) — checked 2026-10-07
- [GitHub repository](https://github.com/barvian/number-flow) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
