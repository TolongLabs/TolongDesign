---
name: three-vrm
slug: three-vrm
section: 3D
section_slug: 3d
source_url: 'https://github.com/pixiv/three-vrm'
designeer_url: 'https://github.com/pixiv/three-vrm'
designeer_blurb: Use VRM on three.js.
paywall: free
pricing_summary: Free and open source under the MIT licence.
open_source: true
license: MIT
category_tags: [3d, threejs, vrm, avatars, characters, animation]
best_for: [3d characters, avatar scenes, web games, anime-style characters]
stack: [javascript, typescript, threejs]
agent_friendly: true
last_verified: 2026-10-11
---

# three-vrm

> Use VRM on three.js.
>
> Reach for it when a three.js scene needs a rigged, anime-style character that
> walks, blinks and has moving hair, without modelling one yourself.

## At a glance

| Field          | Value                                                                 |
| -------------- | --------------------------------------------------------------------- |
| Source         | [github.com/pixiv/three-vrm](https://github.com/pixiv/three-vrm)      |
| Paywall        | **Free** — MIT                                                        |
| Open source    | Yes — MIT, by pixiv                                                   |
| Type           | three.js loader plugin and runtime for VRM avatar models              |
| Works with     | three.js (peer dependency `three >=0.137`), WebGL and WebGPU renderer |
| Best for       | Characters in 3D scenes, avatar viewers, small web games              |
| Agent-friendly | Yes — npm package, CDN builds, API reference and runnable examples    |

## What it is

three-vrm is pixiv's library for loading [VRM](https://vrm.dev/en/) files in
three.js. VRM is a glTF-based file format for humanoid avatars. It stores the
model plus a standard humanoid skeleton, facial expressions, look-at, spring
bones (hair and cloth physics) and the MToon toon-shading material.

The library is a `GLTFLoader` plugin. After loading, `gltf.userData.vrm` gives
you a VRM object with humanoid bones, expressions and spring bones that update
each frame. A sister package, `@pixiv/three-vrm-animation`, loads VRM Animation
(`.vrma`) clips. Version 3 added WebGPU support through `MToonNodeMaterial`
(three.js r167 or later).

It is the usual way to put a [VRoid Studio](../3d/vroid-studio.md) character
into a three.js scene and drive it with [Mixamo](../3d/mixamo.md) animations.

## Paywall and pricing

- **Free:** everything. The library is MIT-licensed.
- **Paid:** none.
- **Sign-up required?** No.
- **Licence for client work:** MIT allows commercial use. Each VRM **model**
  carries its own licence in its metadata (commercial use, credit,
  redistribution). Check the model's terms, not just the library's.

Checked 2026-10-11 (npm latest `@pixiv/three-vrm` 3.5.5).

## How to use

1. Install the library next to three.js:

   ```bash
   bun add three @pixiv/three-vrm
   ```

2. Register the plugin on a `GLTFLoader` and load a `.vrm` file (from the
   official README):

   ```js
   import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
   import { VRMLoaderPlugin } from '@pixiv/three-vrm'

   const loader = new GLTFLoader()
   loader.register((parser) => new VRMLoaderPlugin(parser))

   loader.load('/models/character.vrm', (gltf) => {
     const vrm = gltf.userData.vrm
     scene.add(vrm.scene)
   })
   ```

3. Call `vrm.update(delta)` every frame so spring bones and expressions run.
4. To animate, create a `THREE.AnimationMixer` on `vrm.scene`. Retarget Mixamo
   FBX clips with the `loadMixamoAnimation.js` helper from the official
   `humanoidAnimation` example, or load `.vrma` clips with
   `@pixiv/three-vrm-animation`.
5. For performance, the examples call `VRMUtils.removeUnnecessaryVertices`,
   `VRMUtils.combineSkeletons` and `VRMUtils.combineMorphs` after loading. Use
   `VRMUtils.rotateVRM0(vrm)` for older VRM 0.x models, which face the other
   way.

## Examples

- [Examples index](https://pixiv.github.io/three-vrm/packages/three-vrm/examples/)
  — live demos for basic loading, expressions, look-at, bones and materials.
- [Humanoid animation example](https://pixiv.github.io/three-vrm/packages/three-vrm/examples/humanoidAnimation/index.html)
  — drop in a VRM and a Mixamo FBX and watch it retargeted.
  [Source](https://github.com/pixiv/three-vrm/tree/dev/packages/three-vrm/examples/humanoidAnimation).
- [VRM Animation examples](https://pixiv.github.io/three-vrm/packages/three-vrm-animation/examples/)
  — playing `.vrma` clips.
- [basic.html source](https://github.com/pixiv/three-vrm/blob/release/packages/three-vrm/examples/basic.html)
  — the smallest complete page to copy from.

## When to use it

- Use it when a three.js scene needs a humanoid character, especially an
  anime-style one from [VRoid Studio](../3d/vroid-studio.md).
- Use it for a small third-person web game or an interactive story scene.
- Skip it for non-humanoid or realistic models. Load plain glTF with three.js's
  `GLTFLoader` (see [Three.js](../3d/three-js.md)).
- Skip it when a rendered video is enough and no interaction is needed; a
  pre-rendered clip from [Blender](../3d/blender.md) may be simpler.

## Agent notes

- Packages: `@pixiv/three-vrm`, `@pixiv/three-vrm-animation` (both MIT, 3.5.5 on
  2026-10-11). Peer dependency: `three >=0.137`.
- API reference: https://pixiv.github.io/three-vrm/docs/modules/three-vrm
- WebGPU: import `MToonNodeMaterial` from `@pixiv/three-vrm/nodes` and pass it
  to `MToonMaterialLoaderPlugin`; needs three.js r167+.
- The Mixamo retarget helper (`loadMixamoAnimation.js`, `mixamoVRMRigMap.js`)
  lives in the examples folder, not the npm package. Copy it into the project.
- Hair or cloth flying off on scaled models: read the repo guide
  `guides/spring-bones-on-scaled-models.md`.
- Do not commit third-party `.vrm` models to this repo. Link to them.

## Alternatives in this repo

- [Three.js](../3d/three-js.md) — plain `GLTFLoader` for non-VRM models.
- [React Three Fiber](../3d/react-three-fiber.md) — wrap the same loader in
  React components.
- [Mixamo](../3d/mixamo.md) — the animation source three-vrm retargets from.

## Sources

- [GitHub repository and README](https://github.com/pixiv/three-vrm) — checked
  2026-10-11
- [npm: @pixiv/three-vrm](https://www.npmjs.com/package/@pixiv/three-vrm) —
  checked 2026-10-11
- [Examples](https://pixiv.github.io/three-vrm/packages/three-vrm/examples/) —
  checked 2026-10-11
- [VRM format site](https://vrm.dev/en/) — checked 2026-10-11
