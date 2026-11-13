---
name: Mixamo
slug: mixamo
section: 3D
section_slug: 3d
source_url: 'https://www.mixamo.com/'
designeer_url: 'https://www.mixamo.com/'
designeer_blurb:
  Free Adobe library of auto-rigging and motion-capture character animations.
paywall: free
pricing_summary: Free with an Adobe ID; no Creative Cloud subscription needed.
open_source: false
license: proprietary
category_tags: [3d, animation, motion-capture, characters, rigging]
best_for: [character animation, walk and run cycles, web games]
stack: ['fbx', 'threejs']
execution_mode: browser-app
surface: ['web-3d', 'web-asset']
status: active
agent_friendly: false
last_verified: 2026-10-11
---

# Mixamo

> Free Adobe library of auto-rigging and motion-capture character animations.
>
> Reach for it when a 3D character needs believable walking, running or idle
> motion and there is no animator on the team.

## At a glance

| Field          | Value                                                     |
| -------------- | --------------------------------------------------------- |
| Source         | [mixamo.com](https://www.mixamo.com/)                     |
| Paywall        | **Free** — needs an Adobe ID                              |
| Open source    | No — Adobe service                                        |
| Type           | Web app: motion-capture animation library and auto-rigger |
| Works with     | FBX download; three.js and three-vrm via retargeting      |
| Best for       | Walk, run and idle cycles for game-like web scenes        |
| Agent-friendly | No — browser app behind a login; agents use the files     |

## What it is

Mixamo is Adobe's web service for character animation. It has a library of
motion-capture animations (walks, runs, idles, gestures, dances) and an
auto-rigger that adds a skeleton to an uploaded humanoid model. You preview an
animation on a character in the browser, adjust it, and download it.

For web work the common use is to download animation clips as FBX and retarget
them onto another character. The official [three-vrm](../3d/three-vrm.md)
examples include a helper that converts a Mixamo FBX clip so it plays on a VRM
model, for example one made in [VRoid Studio](../3d/vroid-studio.md).

## Paywall and pricing

- **Free:** the service. Adobe's FAQ says it is free for anyone with an Adobe ID
  and does not require a Creative Cloud subscription.
- **Paid:** none.
- **Sign-up required?** Yes, an Adobe ID. Adobe's FAQ says Enterprise and
  Federated IDs cannot use it.
- **Licence for client work:** Adobe's FAQ lists personal, commercial and
  non-profit projects, including games and films, as allowed royalty-free. A
  2022 Adobe community FAQ (not official terms) adds that you may not distribute
  the raw character or animation files, sell them as stock assets, or use them
  to train machine-learning models. Ship clips embedded in the project, not as a
  separate downloadable folder.

Checked 2026-10-11. The Adobe FAQ page blocks automated fetches; facts came from
Adobe's FAQ as shown in search results. Re-check the terms before a client
launch.

## How to use

1. Sign in at [mixamo.com](https://www.mixamo.com/) with an Adobe ID.
2. Open **Animations** and search for the motion you need (for example
   "walking", "running", "idle").
3. Preview it, adjust the settings, and download as FBX.
4. For a VRM character, copy `loadMixamoAnimation.js` and `mixamoVRMRigMap.js`
   from the three-vrm
   [humanoidAnimation example](https://github.com/pixiv/three-vrm/tree/dev/packages/three-vrm/examples/humanoidAnimation)
   and play the result:

   ```js
   import { loadMixamoAnimation } from './loadMixamoAnimation.js'

   const mixer = new THREE.AnimationMixer(vrm.scene)
   const clip = await loadMixamoAnimation('/anims/walking.fbx', vrm)
   mixer.clipAction(clip).play()
   // each frame: mixer.update(delta); vrm.update(delta)
   ```

5. Blend between idle, walk and run clips with `AnimationAction` weights, as in
   the three.js skinning-blending example.

## Examples

- [three-vrm humanoid animation demo](https://pixiv.github.io/three-vrm/packages/three-vrm/examples/humanoidAnimation/index.html)
  — drop in a VRM and a Mixamo FBX to see the retarget live.
- [three.js skinning and blending](https://threejs.org/examples/webgl_animation_skinning_blending.html)
  — crossfading idle, walk and run clips on one character.
- [Mixamo FAQ](https://helpx.adobe.com/creative-cloud/faq/mixamo-faq.html) —
  Adobe's own terms summary.

## When to use it

- Use it for a third-person character that walks, runs and idles in a three.js
  scene.
- Use it when hand-keyed animation is out of scope.
- Skip it for stylised or cartoon motion that mocap cannot give you; animate in
  [Blender](../3d/blender.md) instead.
- Skip it for UI motion. Use [Motion](../motion/motion.md) or
  [GSAP](../motion/gsap.md).

## Agent notes

- No public API or CLI. A person downloads clips; the agent wires them in.
- three.js loads FBX with `FBXLoader` from `three/addons/loaders/FBXLoader.js`.
- The clip inside a Mixamo FBX is named `mixamo.com`; the three-vrm helper finds
  it with `THREE.AnimationClip.findByName(asset.animations, 'mixamo.com')`.
- Bone names start with `mixamorig`; the rig map in the three-vrm example maps
  them to VRM humanoid bones.
- Do not commit Mixamo files to this repo. Keep them in the project that ships
  them.

## Alternatives in this repo

- [Blender](../3d/blender.md) — hand animation and editing of Mixamo clips.
- [three-vrm](../3d/three-vrm.md) — plays Mixamo clips on VRM characters.

## Sources

- [Official site](https://www.mixamo.com/) — checked 2026-10-11
- [Mixamo FAQ](https://helpx.adobe.com/creative-cloud/faq/mixamo-faq.html) —
  checked 2026-10-11 via search results (page blocks bots)
- [Adobe community licensing FAQ (2022)](https://community.adobe.com/questions-696/mixamo-faq-licensing-royalties-ownership-eula-and-tos-589400)
  — checked 2026-10-11
- [three-vrm humanoidAnimation example](https://github.com/pixiv/three-vrm/tree/dev/packages/three-vrm/examples/humanoidAnimation)
  — checked 2026-10-11
