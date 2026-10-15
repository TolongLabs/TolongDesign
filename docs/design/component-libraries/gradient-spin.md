---
name: Gradient Spin
slug: gradient-spin
section: Component Libraries
section_slug: component-libraries
source_url: https://gradient-spin.vercel.app/
designeer_url: https://designeer.xyz/components
designeer_blurb: Spinning gradient loading indicator for React.
paywall: free
pricing_summary: 'Free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [react, loader, spinner, oklab, css-animation]
best_for: [loading indicators, chat feeds, async ui status]
stack: ['react']
execution_mode: package
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Gradient Spin

> Spinning gradient loading indicator for React. TolongLabs developers reach for
> Gradient Spin to replace standard spinning circles with a compositor-driven,
> zero-dependency matrix loading indicator calibrated in OKLab color space.

## At a glance

| Field          | Value                                                         |
| -------------- | ------------------------------------------------------------- |
| Source         | [gradient-spin.vercel.app](https://gradient-spin.vercel.app/) |
| Paywall        | **Free** — 100% free and open source                          |
| Open source    | Yes — MIT ([GitHub](https://github.com/BIAsia/gradient-spin)) |
| Type           | React component and npm package                               |
| Works with     | React 18/19                                                   |
| Best for       | Loading indicators, chat feeds, async UI status               |
| Agent-friendly | Yes — single npm package, zero dependencies, simple prop API  |

## What it is

Gradient Spin is a zero-dependency React matrix loading spinner created by Mona
Biasia (Ziye). It visualizes loading states through a grid of cells swept by a
gradient wavefront—acting as the matrix equivalent of a progress bar's shimmer.

The component is engineered around several distinct technical strengths:

- **Compositor-Only Animation:** Every cell shares a single CSS opacity keyframe
  animation using negative per-cell animation delays determined by distance
  functions across the grid. This ensures the spinner continues ticking smoothly
  on the compositor thread even when the main JavaScript thread is heavily
  blocked by client-side work.
- **Steady-State Mount:** Because of negative delays, the looping wave is
  already mid-flight on the first paint, eliminating abrupt entrance ramp-ups.
- **OKLab Color Interpolation:** Gradient color stops are interpolated in the
  perceptually uniform OKLab color space rather than raw sRGB, avoiding murky
  gray zones between saturated hue transitions.
- **Wavefront Patterns:** Supports four distinct geometric sweep patterns:
  `arrow-up` (chevron fold across center column), `ripple` (expanding concentric
  Chebyshev rings), `diagonal` (sweeping anti-diagonal wave), and `snake`
  (boustrophedon scrolling path).
- **Self-Contained Styling:** Styles are injected once at runtime using
  `useInsertionEffect` with deduplicated style IDs. No Tailwind configuration,
  external CSS stylesheets, or runtime animation engines are required.

## Paywall and pricing

- **Free:** The complete package, source code, and live demo are 100% free and
  open source.
- **Paid:** None.
- **Sign-up required?** No.
- **Licence for client work:** Distributed under the MIT licence. Completely
  permissible for commercial and client web products.

Checked on the official website and repository on 2026-10-07.

## How to use

1. Install the package via bun:

```bash
bun add gradient-spin
```

2. Import and render the component with default settings (3x3 grid, sunrise
   palette, arrow-up pattern):

```tsx
import { GradientSpin } from 'gradient-spin'

export function LoadingBadge() {
  return (
    <div className="flex items-center gap-2">
      <GradientSpin />
      <span className="text-xs text-muted-foreground">Syncing data...</span>
    </div>
  )
}
```

3. Configure custom patterns, dimensions, and gradient palettes:

```tsx
export function ChatLoadingFeed() {
  return (
    <div className="p-4 text-center">
      <GradientSpin
        gradient="bay"
        pattern="snake"
        rows={4}
        cols={6}
        cellSize={5}
        label="Loading previous conversation history"
      />
    </div>
  )
}
```

## Examples

- [Gradient Spin Live Showcase](https://gradient-spin.vercel.app/) — Interactive
  playground to test patterns (`arrow-up`, `diagonal`, `snake`, `ripple`), grid
  dimensions, and palettes.
- [Gradient Spin GitHub Repository](https://github.com/BIAsia/gradient-spin) —
  Source code containing the OKLab sampler and mathematical distance functions.
- [Gradient Shimmer Repository](https://github.com/BIAsia/gradient-shimmer) —
  Sister library sharing the same gradient palette engine for text shimmers.

## When to use it

- Use it in chat feeds, card skeletons, or dashboard sync widgets where a
  distinctive, retro-modern matrix loader enhances brand identity.
- Use it when you need a resilient spinner that never stutters during heavy
  client-side React renders or data hydration.
- Skip it when you need dozens of diverse dot-matrix loader geometries or custom
  SVG loaders; consider [Dot Matrix](../component-libraries/dot-matrix.md)
  instead.

## Agent notes

- Official repository: `https://github.com/BIAsia/gradient-spin`.
- Package name: `gradient-spin` (`bun add gradient-spin`).
- Includes built-in color presets: `sunrise`, `bubble`, `peach`, `tonic`,
  `mint`, `spring`, `twilight`, `bay`.
- Fully accessible out of the box with `role="status"` and automatic reduced
  motion freezing when `prefers-reduced-motion` is active.

## Alternatives in this repo

- [Dot Matrix](../component-libraries/dot-matrix.md) — Over fifty dot-matrix
  loader primitives installable via the shadcn registry.
- [Colorion Text Effects](../component-libraries/colorion-text-effects.md) —
  Pure CSS gradient and animated text visual effects.

## Sources

- [Gradient Spin Live Demo](https://gradient-spin.vercel.app/) — checked
  2026-10-07
- [Gradient Spin GitHub](https://github.com/BIAsia/gradient-spin) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components)
