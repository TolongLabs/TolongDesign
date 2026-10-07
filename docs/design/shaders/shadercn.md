---
name: shadercn
slug: shadercn
section: Shaders
section_slug: shaders
source_url: https://shadercn.run/
designeer_url: https://designeer.xyz/visuals
designeer_blurb: 'Shader components for React, built on vgpu and TypeGPU.'
paywall: free
pricing_summary: 'Completely free and open source under the MIT license.'
open_source: true
license: MIT
category_tags: [shaders, webgpu, react, shadcn, typegpu, vgpu, components]
best_for:
  [webgpu react components, modern landing pages, interactive hero backgrounds]
stack: [react, typescript, webgpu]
agent_friendly: true
last_verified: 2026-10-07
---

# shadercn

> Shader components for React, built on vgpu and TypeGPU. TolongLabs developers
> reach for shadercn to add hardware-accelerated WebGPU visual effects and
> animated backgrounds to React projects using the familiar shadcn CLI
> copy-paste model.

## At a glance

| Field          | Value                                                               |
| -------------- | ------------------------------------------------------------------- |
| Source         | [shadercn.run](https://shadercn.run/)                               |
| Paywall        | **Free** — 100% free and open source under MIT                      |
| Open source    | Yes — MIT ([GitHub](https://github.com/shadcn-labs/shadercn))       |
| Type           | Shader component registry for React                                 |
| Works with     | React, Next.js, WebGPU, TypeGPU, vgpu, shadcn/ui                    |
| Best for       | WebGPU React components, modern landing pages, hero effects         |
| Agent-friendly | Yes — shadcn CLI distribution (`npx shadcn add ...`), copyable code |

## What it is

shadercn is an open-source component library and registry created by Aniket
Pawar under the Shadcn Labs organization. It bridges the gap between advanced
WebGPU shader programming and modern React UI engineering by adopting the
popular shadcn/ui distribution model.

Rather than installing a monolithic npm dependency that locks you into a rigid
API, shadercn distributes individual shader components directly into your
codebase. Each component is self-contained and built on top of `TypeGPU` (a
strongly typed TypeScript toolchain for WebGPU) and `vgpu`, providing clean
TypeScript interfaces, reactive React props, and high-performance WebGPU canvas
rendering.

The library features a variety of modern web graphics effects designed for
landing page heroes and interactive cards, including:

- Fluid dynamic gradients and iridescent light sheets.
- Interactive noise fields responding to mouse velocity.
- Chromatic aberration distortions and mesh warps.
- Particle grids and reactive GPU wave simulations.

## Paywall and pricing

- **Free:** Entirely free and open source. All registry components and source
  code can be copied and customized without charge.
- **Paid:** None.
- **Sign-up required?** No. Direct web access and CLI installation without an
  account.
- **Licence for client work:** Distributed under the MIT license. Fully
  permissive for commercial websites and client projects.

Checked on the official shadercn website and GitHub repository on 2026-10-07.

## How to use

1. Ensure your project is configured with React and Tailwind CSS.
2. Install a shader component directly via the standard shadcn CLI:

```bash
bunx --bun shadcn@latest add "https://shadercn.run/r/aurora-shader"
```

3. Alternatively, install core WebGPU primitives:

```bash
bun add typegpu vgpu
```

4. Import and use the component in your React application:

```tsx
'use client'

import { AuroraShader } from '@/components/shaders/aurora-shader'

export function HeroBackground() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <AuroraShader
        className="absolute inset-0 h-full w-full opacity-80"
        speed={0.8}
        intensity={1.2}
      />
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <h1 className="text-5xl font-bold tracking-tight text-white">
          Hardware Accelerated WebGPU Shaders
        </h1>
      </div>
    </div>
  )
}
```

## Examples

- [shadercn Live Gallery](https://shadercn.run/) — Interactive web gallery
  previewing real-time WebGPU shaders with live parameter sliders.
- [shadcn-labs/shadercn GitHub](https://github.com/shadcn-labs/shadercn) —
  Upstream repository containing component source code, TypeGPU pipelines, and
  presets.
- [Shadcn Labs Ecosystem](https://github.com/shadcn-labs) — Community hub
  hosting sibling UI component registries and starter templates.

## When to use it

- Use it on modern React or Next.js landing pages when you want stunning,
  contemporary WebGPU shader backgrounds without writing raw WGSL code.
- Use it when your team follows the shadcn/ui pattern of owning and customizing
  component source code inside your `components/` directory.
- Skip it if you need compatibility with legacy browsers that lack WebGPU; use
  [Paper Shaders](../shaders/paper-shaders.md) (built on WebGL) instead.
- Skip it if you are authoring custom compute shaders from scratch; use
  [compute.toys](../shaders/compute-toys.md) instead.

## Agent notes

- Component registry URL pattern: `https://shadercn.run/r/<component-name>`.
- Built on WebGPU; requires modern browser environments (Chrome 113+, Edge 113+,
  Safari 18+, Firefox Nightly) with WebGPU enabled.
- Coding agents can download and place component source files directly into
  `components/ui/` or `components/shaders/` without modifying package configs.

## Alternatives in this repo

- [Paper Shaders](../shaders/paper-shaders.md) — Zero-dependency WebGL shaders
  offering broader fallback compatibility for older devices.
- [Orbkit](../shaders/orbkit.md) — Collection of specialized WebGL shaders
  tailored for animated spherical and orb effects.
- [compute.toys](../shaders/compute-toys.md) — Development sandbox for building
  and benchmarking custom WGSL compute routines.

## Sources

- [shadercn Website](https://shadercn.run/) — checked 2026-10-07
- [shadcn-labs/shadercn GitHub](https://github.com/shadcn-labs/shadercn) —
  checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals)
