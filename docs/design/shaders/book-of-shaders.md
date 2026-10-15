---
name: Book of Shaders
slug: book-of-shaders
section: Shaders
section_slug: shaders
source_url: https://thebookofshaders.com/
designeer_url: https://designeer.xyz/visuals
designeer_blurb: Interactive guide to mastering fragment shaders.
paywall: free
pricing_summary:
  'Completely free open-source educational guide under Creative Commons and MIT.'
open_source: true
license: CC-BY-NC-SA-3.0
category_tags:
  [shaders, glsl, webgl, creative-coding, education, fragment-shaders]
best_for:
  [learning shaders, procedural textures, math visualization, creative coding]
stack: ['glsl']
execution_mode: reference
surface: ['web-3d']
status: active
agent_friendly: false
last_verified: 2026-10-07
---

# Book of Shaders

> Interactive guide to mastering fragment shaders. TolongLabs developers reach
> for The Book of Shaders to master GLSL fragment shader mathematics, procedural
> generative patterns, noise functions, and cellular textures from first
> principles.

## At a glance

| Field          | Value                                                                                                 |
| -------------- | ----------------------------------------------------------------------------------------------------- |
| Source         | [thebookofshaders.com](https://thebookofshaders.com/)                                                 |
| Paywall        | **Free** — 100% free open-access online book                                                          |
| Open source    | Yes — CC-BY-NC-SA-3.0 / MIT code ([GitHub](https://github.com/patriciogonzalezvivo/thebookofshaders)) |
| Type           | Interactive educational book and reference guide                                                      |
| Works with     | GLSL, WebGL, OpenGL ES, Three.js, Canvas                                                              |
| Best for       | Learning shaders, procedural textures, math visualization                                             |
| Agent-friendly | No — educational reading resource without a CLI or API                                                |

## What it is

The Book of Shaders is an acclaimed step-by-step educational guide and reference
work written by Patricio Gonzalez Vivo and Jen Lowe. It demystifies the parallel
processing world of fragment shaders (GLSL), guiding web developers and creative
coders from basic color mathematics to complex procedural graphics.

What makes the book unique is its interactive format. Every code snippet in the
book is rendered by an embedded, live WebGL canvas (powered by `glslCanvas` and
`glslEditor`). Readers can modify variables, edit formulas, and test algorithms
directly inside their web browser, seeing changes recompile in real time.

The curriculum covers core fragment shader concepts systematically:

- Uniforms and coordinate systems (`gl_FragCoord`, `u_resolution`, `u_time`).
- Algorithmic drawing: shaping functions, step, smoothstep, and color mixing.
- 2D matrices: translation, rotation, and coordinate scale transforms.
- Procedural generation: pseudo-random hashes, 1D/2D value noise, gradient
  noise, Simplex noise, and Worley/cellular noise.
- Fractal Brownian Motion (fBm) and turbulent textures.

## Paywall and pricing

- **Free:** The entire book, chapters, interactive code sandboxes, and GitHub
  source files are 100% freely readable online.
- **Paid:** None.
- **Sign-up required?** No.
- **Licence for client work:** The written text is licensed under Creative
  Commons Attribution-NonCommercial-ShareAlike 3.0 (CC-BY-NC-SA-3.0). The
  accompanying code examples, shaders, and utility scripts are licensed under
  the permissive MIT license, allowing algorithms to be incorporated into
  commercial client projects.

Checked on the official website and repository on 2026-10-07.

## How to use

1. Start reading from the foundational chapters:
   - Chapter 03: Uniforms.
   - Chapter 05: Shaping Functions.
   - Chapter 10: Generative Designs.
   - Chapter 11: 2D Noise.

2. Experiment with live code blocks directly in the browser by adjusting
   algorithmic parameters.

3. Port an algorithm (such as fractional Brownian motion) into a Three.js or
   WebGL custom shader material:

```glsl
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

// 2D Random hash from The Book of Shaders
float random(in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

// 2D Value Noise
float noise(in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec3 color = vec3(noise(st * 4.0 + u_time * 0.2));
    gl_FragColor = vec4(color, 1.0);
}
```

## Examples

- [Book of Shaders Homepage](https://thebookofshaders.com/) — Main interactive
  table of contents covering algorithmic drawing and noise.
- [Chapter 05: Shaping Functions](https://thebookofshaders.com/05/) —
  Foundational visual guide on using `smoothstep`, power curves, and sine waves
  for graphic interpolation.
- [Chapter 11: Noise](https://thebookofshaders.com/11/) — Detailed breakdown of
  Perlin and Simplex procedural noise implementations.

## When to use it

- Use it when you need to understand the underlying mathematics of generative
  gradients, liquid surfaces, or custom WebGL visual effects.
- Use it as an authoritative reference for classic GLSL noise and random
  algorithms.
- Skip it if you need ready-to-use React components without writing GLSL from
  scratch; use [Paper Shaders](../shaders/paper-shaders.md) or
  [shadercn](../shaders/shadercn.md) instead.

## Agent notes

- Official GitHub repository:
  `https://github.com/patriciogonzalezvivo/thebookofshaders`.
- Companion tools created by the author include `glslCanvas` and `glslViewer`,
  useful for testing standalone `.frag` files in CI or terminal environments.
- Code snippets use GLSL 1.0 ES syntax (`gl_FragColor`); when adapting for
  Three.js WebGL 2 (`#version 300 es`), convert `varying` to `in` and replace
  `gl_FragColor` with `out vec4 fragColor`.

## Alternatives in this repo

- [compute.toys](../shaders/compute-toys.md) — Modern interactive WebGPU
  playground focusing on WGSL compute shaders.
- [Shaderfrog](../shaders/shaderfrog.md) — Visual node-based graph editor for
  assembling GLSL shaders interactively.
- [Paper Shaders](../shaders/paper-shaders.md) — Production-ready,
  zero-dependency shader library with drop-in React components.

## Sources

- [The Book of Shaders](https://thebookofshaders.com/) — checked 2026-10-07
- [Book of Shaders GitHub Repository](https://github.com/patriciogonzalezvivo/thebookofshaders)
  — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals)
