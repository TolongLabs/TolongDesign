---
name: Dot Matrix
slug: dot-matrix
section: Component Libraries
section_slug: component-libraries
source_url: https://dotmatrix.zzzzshawn.cloud/
designeer_url: https://designeer.xyz/components
designeer_blurb: Over fifty dot-matrix loaders for shadcn.
paywall: free
pricing_summary: 'Free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [react, loaders, dot-matrix, shadcn, motion]
best_for: [retro loading states, terminal loaders, async indicators]
stack: [react, nextjs, tailwind, motion]
agent_friendly: true
last_verified: 2026-10-07
---

# Dot Matrix

> Over fifty dot-matrix loaders for shadcn. TolongLabs developers reach for Dot
> Matrix to replace boring circular spinners with expressive, retro pixel-grid
> loading primitives installed directly via the shadcn registry.

## At a glance

| Field          | Value                                                           |
| -------------- | --------------------------------------------------------------- |
| Source         | [dotmatrix.zzzzshawn.cloud](https://dotmatrix.zzzzshawn.cloud/) |
| Paywall        | **Free** — 100% free and open source                            |
| Open source    | Yes — MIT ([GitHub](https://github.com/zzzzshawn/matrix))       |
| Type           | Loader component library and shadcn registry                    |
| Works with     | React, Next.js, Tailwind CSS, Motion, shadcn/ui                 |
| Best for       | Retro loading states, terminal loaders, async indicators        |
| Agent-friendly | Yes — shadcn CLI registry, copy-paste components                |

## What it is

Dot Matrix is an open-source React component library of expressive dot-matrix
loading primitives created by Shawn (@zzzzshawn). Designed to integrate
effortlessly into modern React applications, it provides over 50 distinct
dot-matrix loading animations inspired by digital signs, hardware LED displays,
and retro digital interfaces.

Loaders are categorized across several visual formats:

- **Square Matrix:** Square grid arrays with cascading pixel sweeps, pulsating
  borders, and checkerboard transitions.
- **Circle & Radial Matrix:** Concentric orbital dots, rotating radars, and
  clock-face sweeping patterns.
- **Line & Grid Patterns:** Scanning wave bars, audio-style equalizer dots, and
  dynamic geometric waveforms.

Every loader is distributed via the shadcn registry protocol. Rather than
pulling in a heavy, rigid npm package with hundreds of unused variants,
developers install only the specific loader pattern needed into their local
`components/` folder. The components leverage Framer Motion / Motion and
Tailwind CSS utility classes for crisp rendering across all screen densities.

## Paywall and pricing

- **Free:** The complete collection of over 50 loaders, registry files, and
  documentation is 100% free and open source.
- **Paid:** None.
- **Sign-up required?** No.
- **Licence for client work:** Released under the MIT licence. Completely
  permissible for commercial and client deliverables.

Checked on the official website and repository on 2026-10-07.

## How to use

1. Ensure your project is configured with shadcn/ui.
2. Install a specific dot-matrix loader using the shadcn CLI:

```bash
bunx --bun shadcn@latest add https://dotmatrix.zzzzshawn.cloud/r/dotm-square-1.json
```

3. Import and render the loader in your React component:

```tsx
import { DotmSquare1 } from '@/components/ui/dotm-square-1'

export function CardSkeleton() {
  return (
    <div className="flex h-48 w-full items-center justify-center rounded-lg border bg-neutral-950 p-6 text-emerald-400">
      <DotmSquare1 className="h-8 w-8" />
    </div>
  )
}
```

## Examples

- [Dot Matrix Showcase](https://dotmatrix.zzzzshawn.cloud/) — Interactive visual
  catalog displaying all 50+ loader variants in action.
- [Dot Matrix Registry Index](https://dotmatrix.zzzzshawn.cloud/r/registry.json)
  — Raw registry schema mapping loader names to source endpoints.
- [Dot Matrix GitHub](https://github.com/zzzzshawn/matrix) — Source repository
  containing loader generators and Next.js showcase code.

## When to use it

- Use it when designing developer tools, cyberpunk aesthetics, AI telemetry
  dashboards, or crypto interfaces that call for retro hardware LED motifs.
- Use it to replace generic spinner SVGs with animated indicators that match
  monospace typography and monospace themes.
- Skip it when you only need a single mathematical gradient sweep; consider
  [Gradient Spin](../component-libraries/gradient-spin.md) instead.

## Agent notes

- Official catalog: `https://dotmatrix.zzzzshawn.cloud/`.
- GitHub repository: `https://github.com/zzzzshawn/matrix`.
- Install commands pull individual JSON components via
  `npx shadcn add https://dotmatrix.zzzzshawn.cloud/r/<name>.json`.
- Uses Motion (`motion`) for fine-grained frame transitions.

## Alternatives in this repo

- [Gradient Spin](../component-libraries/gradient-spin.md) — Single
  zero-dependency matrix spinner using OKLab gradient wavefronts.
- [SRCL](../component-libraries/srcl.md) — Comprehensive DOS-style retro
  terminal component library with ASCII and block loaders.

## Sources

- [Dot Matrix Official Website](https://dotmatrix.zzzzshawn.cloud/) — checked
  2026-10-07
- [Dot Matrix GitHub Repository](https://github.com/zzzzshawn/matrix) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components)
