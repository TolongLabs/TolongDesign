---
name: Shaderfrog
slug: shaderfrog
section: Shaders
section_slug: shaders
source_url: https://shaderfrog.com/
designeer_url: https://designeer.xyz/visuals
designeer_blurb: Visual node-based editor for composing shaders.
paywall: freemium
pricing_summary:
  'Free tier with core editor and shader export; Shaderfrog Pro is $33 one-time.'
open_source: false
license: proprietary
category_tags: [shaders, glsl, webgl, three-js, visual-editor, node-graph]
best_for:
  [
    visual shader composition,
    three-js materials,
    procedural textures,
    material blending
  ]
stack: ['glsl', 'threejs']
execution_mode: browser-app
surface: ['web-3d']
status: active
agent_friendly: false
last_verified: 2026-10-07
---

# Shaderfrog

> Visual node-based editor for composing shaders. TolongLabs developers reach
> for Shaderfrog to design, compose, and blend complex WebGL materials visually
> before exporting them directly into Three.js applications.

## At a glance

| Field          | Value                                                                                  |
| -------------- | -------------------------------------------------------------------------------------- |
| Source         | [shaderfrog.com](https://shaderfrog.com/)                                              |
| Paywall        | **Freemium** — free tier; Pro $33 one-time                                             |
| Open source    | No — proprietary web app; parser core is MIT ([GitHub](https://github.com/ShaderFrog)) |
| Type           | Visual node-based WebGL shader editor and composer                                     |
| Works with     | Three.js, Babylon.js, PlayCanvas, GLSL, WebGL                                          |
| Best for       | Visual shader composition, Three.js materials, procedural fx                           |
| Agent-friendly | No — interactive GUI node graph without CLI or public API                              |

## What it is

Shaderfrog is an online visual WebGL shader editor and material composer created
by Andrew Ray. While conventional shader development requires writing low-level
GLSL code and manually stitching vertex and fragment pipelines together,
Shaderfrog introduces a hybrid visual node graph where developers can combine
existing shaders like building blocks.

Inside Shaderfrog, you can take multiple independent shaders (such as a noise
generator, a Fresnel rim light effect, and a ripple distortion) and wire their
outputs together into a unified Three.js material. The underlying engine parses
the GLSL abstract syntax trees (ASTs), renames conflicting variables, and
produces clean, monolithic GLSL code ready for production.

Shaderfrog supports interactive preview meshes (spheres, cubes, planes, custom
3D models), dynamic uniform controls (color pickers, numeric sliders, texture
samplers), and direct export targets for popular WebGL engines including
Three.js, Babylon.js, and PlayCanvas.

## Paywall and pricing

- **Free:** The visual node graph editor, community shader browsing, shader
  creation, and standard shader exports are completely free.
- **Paid:** Shaderfrog Pro is available as a **$33 one-time payment**
  ("pre-launch offer granting access to all future Pro features without a
  recurring subscription").
  - Pro features include uploading custom textures, high-resolution texture
    support, user avatar uploads, a "PRO" community badge, and access to all
    future pro features.
- **Sign-up required?** Free browsing and editing work immediately; account
  creation is required to save shaders to the community library or purchase Pro.
- **Licence for client work:** Exported GLSL shaders are your own creation and
  can be used freely in commercial and client web projects.

Checked on the official Shaderfrog products and pricing page on 2026-10-07.

## How to use

1. Open [shaderfrog.com](https://shaderfrog.com/) and navigate to the
   **Editor**.
2. Create or import shader nodes into your graph:
   - Add a base color or surface texture node.
   - Add an effect node (e.g., animated noise, water ripple, glass refraction).
   - Connect the output of the modifier node into the input of the surface
     shader.
3. Use the live 3D preview viewport to inspect the material under different
   lighting conditions and model geometries.
4. Tweak exposed uniforms (speed, intensity, color) via the properties panel.
5. Click **Export** to download the compiled GLSL shader or copy the Three.js
   boilerplate.

```typescript
import * as THREE from 'three'

// Example integrating a compiled Shaderfrog shader into Three.js
export function createFrogMaterial(uniforms: Record<string, THREE.IUniform>) {
  return new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      rippleStrength: { value: 0.08 },
      ...uniforms
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform float rippleStrength;
      varying vec2 vUv;
      void main() {
        vec2 uv = vUv + sin(vUv.yx * 10.0 + time) * rippleStrength;
        gl_FragColor = vec4(uv.x, uv.y, 1.0, 1.0);
      }
    `
  })
}
```

## Examples

- [Shaderfrog Community Gallery](https://shaderfrog.com/) — Public library of
  hundreds of shaders created and composed by the community.
- [Shaderfrog Pro Details](https://shaderfrog.com/products) — Official product
  page listing one-time purchase terms and Pro features.
- [ShaderFrog GitHub Organization](https://github.com/ShaderFrog) — Open-source
  repositories including `glsl-parser` used by the platform's AST engine.

## When to use it

- Use it when you want to design complex, multi-layered WebGL materials without
  manually writing hundreds of lines of GLSL math.
- Use it to quickly prototype visual ideas (glows, holograms, liquid surfaces)
  and export them directly into Three.js.
- Skip it if you want ready-made, copy-paste React components; use
  [Paper Shaders](../shaders/paper-shaders.md) or
  [shadercn](../shaders/shadercn.md) instead.
- Skip it if you are writing modern WebGPU compute shaders; use
  [compute.toys](../shaders/compute-toys.md) instead.

## Agent notes

- Core parsing libraries (`glsl-parser`) are available under the `ShaderFrog`
  organization on GitHub.
- While the visual editor is GUI-driven, exported shaders produce standard
  `THREE.ShaderMaterial` configurations compatible with React Three Fiber.
- Uniform values exported from Shaderfrog can be animated dynamically in code
  using standard RAF animation loops or Drei's `useFrame`.

## Alternatives in this repo

- [Paper Shaders](../shaders/paper-shaders.md) — Pre-packaged, zero-dependency
  shader effects ready for immediate React or vanilla web integration.
- [Book of Shaders](../shaders/book-of-shaders.md) — Interactive written guide
  explaining fundamental fragment shader math from the ground up.
- [compute.toys](../shaders/compute-toys.md) — Online sandbox for authoring WGSL
  compute shaders on WebGPU.

## Sources

- [Shaderfrog Website](https://shaderfrog.com/) — checked 2026-10-07
- [Shaderfrog Products & Pricing](https://shaderfrog.com/products) — checked
  2026-10-07
- [ShaderFrog GitHub Organization](https://github.com/ShaderFrog) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/visuals)
