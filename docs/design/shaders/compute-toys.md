---
name: compute.toys
slug: compute-toys
section: Shaders
section_slug: shaders
source_url: https://compute.toys/
designeer_url: https://designeer.xyz/visuals
designeer_blurb: Sandbox for authoring WGSL compute shaders.
paywall: free
pricing_summary: 'Completely free web sandbox with no paid tier.'
open_source: true
license: MIT
category_tags: [shaders, webgpu, wgsl, compute-shaders, playground, gpgpu]
best_for:
  [webgpu experimentation, wgsl compute shaders, particle systems, simulations]
stack: [wgsl, webgpu]
agent_friendly: true
last_verified: 2026-10-07
---

# compute.toys

> Sandbox for authoring WGSL compute shaders. TolongLabs developers reach for
> compute.toys to prototype, share, and benchmark next-generation WebGPU compute
> shaders and physics simulations directly in the browser.

## At a glance

| Field          | Value                                                          |
| -------------- | -------------------------------------------------------------- |
| Source         | [compute.toys](https://compute.toys/)                          |
| Paywall        | **Free** — 100% free web sandbox                               |
| Open source    | Yes — MIT ([GitHub](https://github.com/compute-toys))          |
| Type           | WebGPU compute shader sandbox and community gallery            |
| Works with     | WebGPU, WGSL (WebGPU Shading Language), Chrome, Edge, Firefox  |
| Best for       | WebGPU experimentation, WGSL compute shaders, particle systems |
| Agent-friendly | Yes — public shader URLs, copyable WGSL code, GitHub org       |

## What it is

compute.toys is a browser-based creative coding playground purpose-built for
WebGPU compute shaders, functioning as the WebGPU equivalent of Shadertoy. While
traditional shader platforms focus strictly on raster fragment pipelines,
compute.toys gives developers full access to General-Purpose GPU (GPGPU) compute
pipelines authored in WGSL (WebGPU Shading Language).

The platform allows users to build multi-pass compute pipelines where threads
can read and write to arbitrary storage buffers, textures, and atomic variables.
This enables classes of real-time web graphics that are virtually impossible in
legacy WebGL: large-scale N-body particle simulations, fluid dynamics, Conway's
Game of Life cellular automata, real-time path tracing, and complex volumetric
raymarching.

Key features of compute.toys include:

- Multi-pass pipeline configuration with ping-pong compute buffers.
- Direct WGSL syntax highlighting, live compilation, and detailed GPU error
  logs.
- Built-in uniform bindings for screen resolution, elapsed time, mouse
  interaction, and camera projections.
- Community showcase of high-performance WebGPU art and physics demonstrations.

## Paywall and pricing

- **Free:** Entirely free. Authoring shaders, browsing the community catalog,
  and executing WebGPU pipelines require no subscription or payment.
- **Paid:** None.
- **Sign-up required?** Only for publishing and saving shaders under a user
  profile; browsing, running, and copying code requires no account.
- **Licence for client work:** The web application and engine are open-source.
  Community shaders are shared under permissive open-source or creative commons
  terms as declared by individual authors.

Checked on the official compute.toys site and GitHub organization on 2026-10-07.

## How to use

1. Open [compute.toys](https://compute.toys/) in a browser supporting WebGPU
   (Chrome, Edge, Safari Technology Preview, or Firefox Nightly).
2. Browse the featured gallery to inspect existing compute pipelines (e.g.
   particle swarms, fluid grids, or raymarched fractals).
3. Click **New Toy** to start writing a fresh compute shader.
4. Write a basic compute pass in WGSL:

```rust
// Basic WGSL compute shader entry point on compute.toys
@compute @workgroup_size(16, 16)
fn main(@builtin(global_invocation_id) id: vec3<u32>) {
    let screen_size = textureDimensions(screen);
    if (id.x >= screen_size.x || id.y >= screen_size.y) {
        return;
    }

    let uv = vec2<f32>(id.xy) / vec2<f32>(screen_size);
    let color = vec4<f32>(uv.x, uv.y, sin(time.elapsed), 1.0);

    textureStore(screen, id.xy, color);
}
```

5. Test and compile in real time with immediate GPU error feedback.

## Examples

- [compute.toys Showcase](https://compute.toys/) — Central gallery showcasing
  interactive WebGPU physics, fluid solvers, and ray tracers.
- [compute-toys GitHub Organization](https://github.com/compute-toys) — Source
  repositories for the platform's shader engine and public shader collections.
- [Public Shaders Archive](https://github.com/compute-toys/public-shaders) —
  Repository containing raw WGSL code for community-curated compute shaders.

## When to use it

- Use it when developing next-generation WebGPU visual effects that require
  GPGPU compute capabilities (millions of physics particles, grid fluids).
- Use it as an online scratchpad to test and debug WGSL compute routines before
  integrating them into a WebGPU application.
- Skip it if your project must support older mobile browsers or WebGL 2 devices
  without WebGPU support; use [Three.js](../3d/three-js.md) or
  [Paper Shaders](../shaders/paper-shaders.md) instead.

## Agent notes

- Target language is WGSL (WebGPU Shading Language), not GLSL or HLSL.
- Requires WebGPU browser support; does not run on headless environments without
  Vulkan/Metal GPU hardware acceleration or SwiftShader flags.
- When adapting code for production, integrate WGSL strings into native WebGPU
  `device.createComputePipeline()` calls.

## Alternatives in this repo

- [Book of Shaders](../shaders/book-of-shaders.md) — Conceptual guide teaching
  traditional GLSL fragment shaders and math.
- [shadercn](../shaders/shadercn.md) — Pre-packaged React components built on
  WebGPU and TypeGPU for drop-in UI integration.
- [Shaderfrog](../shaders/shaderfrog.md) — Visual node-based graph editor for
  assembling GLSL shaders interactively.

## Sources

- [compute.toys Web Application](https://compute.toys/) — checked 2026-10-07
- [compute-toys GitHub Organization](https://github.com/compute-toys) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/visuals)
