---
name: Paper Shaders
slug: paper-shaders
section: Shaders
section_slug: shaders
source_url: https://shaders.paper.design/
designeer_url: https://designeer.xyz/visuals
designeer_blurb: Zero-dependency shaders ready to import.
paywall: free
pricing_summary: 'Completely free and open source under the Apache-2.0 license.'
open_source: true
license: Apache-2.0
category_tags: [shaders, webgl, react, canvas, background-effects, generative]
best_for:
  [
    mesh gradients,
    liquid metal,
    noise textures,
    landing page backgrounds,
    zero-dependency
  ]
stack: ['react', 'javascript', 'typescript']
execution_mode: package
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Paper Shaders

> Zero-dependency shaders ready to import. TolongLabs developers reach for Paper
> Shaders to embed high-performance, ultra-fast WebGL visual effects like mesh
> gradients, liquid metal, god rays, and noise into websites with zero external
> dependencies.

## At a glance

| Field          | Value                                                                |
| -------------- | -------------------------------------------------------------------- |
| Source         | [shaders.paper.design](https://shaders.paper.design/)                |
| Paywall        | **Free** — 100% free and open source under Apache-2.0                |
| Open source    | Yes — Apache-2.0 ([GitHub](https://github.com/paper-design/shaders)) |
| Type           | Zero-dependency WebGL shader library and React components            |
| Works with     | React, Next.js, Vanilla JavaScript, WebGL 1/2                        |
| Best for       | Mesh gradients, liquid metal, noise textures, landing heroes         |
| Agent-friendly | Yes — npm packages (`@paper-design/shaders-react`), clean JSX        |

## What it is

Paper Shaders is an open-source library of zero-dependency, production-ready
WebGL canvas shaders developed by Paper Design (paper.design). Unlike heavy 3D
engines that require multi-megabyte Three.js bundles, Paper Shaders executes raw
WebGL directly on lightweight `<canvas>` elements, making it exceptionally fast
and lightweight for modern web landing pages.

The library features an aesthetic, carefully curated catalog of contemporary
visual effects:

- **Mesh Gradients**: Multi-point fluid gradients with interactive flow
  dynamics.
- **Liquid Metal**: Reflective, mercury-like undulating surfaces.
- **Dithering & Halftone**: Retro graphic novel pixelation and dot screens.
- **Noise & Grain**: Fine-grained film grain and turbulent Perlin fields.
- **God Rays & Smoke Rings**: Volumetric light shafts and circular vapor blooms.

Paper Shaders offers both a framework-agnostic JavaScript package
(`@paper-design/shaders`) and dedicated React bindings
(`@paper-design/shaders-react`). The official website features an interactive
studio where developers can visually tune parameters (speed, colors, scale,
distortion, grain intensity) and copy pre-configured React component snippets.

## Paywall and pricing

- **Free:** The complete shader collection, npm packages, web studio editor, and
  GitHub source code are 100% free and open source.
- **Paid:** None.
- **Sign-up required?** No. Available publicly on npm and the web without an
  account.
- **Licence for client work:** Distributed under the Apache License 2.0.
  Permitted for commercial websites, client deliverables, and SaaS applications
  without requiring public attribution.

Checked on the official Paper Shaders website and GitHub repository on
2026-10-07.

## How to use

1. Install the official React package via Bun or npm:

```bash
bun add @paper-design/shaders-react
```

2. For vanilla JavaScript or Svelte/Vue projects, install the core library:

```bash
bun add @paper-design/shaders
```

3. Import and render a shader component directly in your React layout:

```tsx
'use client'

import { MeshGradient } from '@paper-design/shaders-react'

export function HeroBanner() {
  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-slate-950">
      <MeshGradient
        className="absolute inset-0 h-full w-full"
        colors={['#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4']}
        speed={0.6}
        distortion={0.8}
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-extrabold text-white sm:text-6xl">
          Designed with Ultra-Fast Shaders
        </h1>
        <p className="mt-4 max-w-xl text-lg text-slate-200">
          Lightweight, zero-dependency WebGL effects running at 60 frames per
          second.
        </p>
      </div>
    </div>
  )
}
```

## Examples

- [Paper Shaders Studio](https://shaders.paper.design/) — Interactive online
  gallery and visual parameter editor for all supported shaders.
- [God Rays Effect Demo](https://shaders.paper.design/god-rays) — Demonstration
  of volumetric light ray bloom and dispersion controls.
- [Paper Shaders GitHub Repository](https://github.com/paper-design/shaders) —
  Official repository containing GLSL sources, React component wrappers, and
  benchmarks.

## When to use it

- Use it on SaaS and agency landing pages to create eye-catching animated
  gradient or liquid metal backgrounds without bloating your JavaScript bundle.
- Use it when you need wide mobile device compatibility; because it uses raw
  WebGL, it runs smoothly across iOS Safari and Android devices where WebGPU is
  not yet universal.
- Skip it if you need full 3D scene graphs, lighting models, or glTF asset
  loaders; use [React Three Fiber](../3d/react-three-fiber.md) instead.
- Skip it if your project is standardized on WebGPU and TypeGPU; use
  [shadercn](../shaders/shadercn.md) instead.

## Agent notes

- Package: `@paper-design/shaders-react` (React) or `@paper-design/shaders`
  (vanilla).
- All components render directly to an HTML5 `<canvas>` element and accept
  standard styling props (`className`, `style`).
- Supports automatic pause/resume when off-screen via IntersectionObserver to
  preserve battery life on mobile devices.

## Alternatives in this repo

- [shadercn](../shaders/shadercn.md) — WebGPU and TypeGPU shader components
  distributed via the shadcn CLI copy-paste model.
- [Orbkit](../shaders/orbkit.md) — Specialized collection of spherical GLSL
  shaders with live parameters.
- [Shaderfrog](../shaders/shaderfrog.md) — Visual node-based tool for composing
  custom WebGL shaders from scratch.

## Sources

- [Paper Shaders Website](https://shaders.paper.design/) — checked 2026-10-07
- [Paper Shaders GitHub Repository](https://github.com/paper-design/shaders) —
  checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals)
