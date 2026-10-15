---
name: VRoid Studio
slug: vroid-studio
section: 3D
section_slug: 3d
source_url: 'https://vroid.com/en/studio'
designeer_url: 'https://vroid.com/en/studio'
designeer_blurb: 3D character creation software.
paywall: free
pricing_summary: Free to download and use on Windows, macOS and iPad.
open_source: false
license: proprietary
category_tags: [3d, characters, avatars, vrm, anime]
best_for: [anime-style characters, avatars, game characters]
stack: ['desktop', 'vrm']
execution_mode: reference
surface: ['web-asset', 'web-3d']
status: active
agent_friendly: false
last_verified: 2026-10-11
---

# VRoid Studio

> 3D character creation software.
>
> Reach for it when a web scene needs an original anime-style character and
> nobody on the team models in Blender.

## At a glance

| Field          | Value                                                |
| -------------- | ---------------------------------------------------- |
| Source         | [vroid.com/en/studio](https://vroid.com/en/studio)   |
| Paywall        | **Free** — "free to use for anyone"                  |
| Open source    | No — proprietary app by pixiv                        |
| Type           | Desktop and iPad app for making 3D characters        |
| Works with     | Exports VRM; load in three.js with three-vrm         |
| Best for       | Anime-style characters for web scenes and games      |
| Agent-friendly | No — a GUI app; agents use its exported `.vrm` files |

## What it is

VRoid Studio is pixiv's free app for building anime-style 3D characters. You
start from preset bodies, faces, hair and clothes, adjust them with sliders, and
paint textures directly on the model. Hair is drawn as strands with a pen tool,
and pen pressure is supported.

Every model exports as a VRM file. VRM keeps the rig, facial expressions and
hair physics, so the character is ready to animate in three.js with
[three-vrm](../3d/three-vrm.md). Models can also be uploaded to
[VRoid Hub](https://hub.vroid.com/en), pixiv's sharing site, where other
creators publish VRM characters under their own terms.

## Paywall and pricing

- **Free:** the whole app. The site says "VRoid Studio is free to use for
  anyone."
- **Paid:** none published.
- **Sign-up required?** No for the app. A pixiv account is needed to upload to
  VRoid Hub.
- **Licence for client work:** the
  [guidelines](https://vroid.com/en/studio/guidelines) say anyone, individuals
  or companies, may sell or use for commercial purposes the meshes, textures and
  preset items VRoid Studio provides, unless an item's licence has a special
  clause. You can sell exported models and edit them in other software. You set
  your own terms for models you make. Models made by others (for example on
  VRoid Hub) follow their creator's terms.

Checked 2026-10-11.

## How to use

1. Download VRoid Studio from [vroid.com/en/studio](https://vroid.com/en/studio)
   (Steam is recommended for desktop; Windows and macOS installers and an iPad
   App Store version are also offered).
2. Start a new model from a preset and adjust face, hair, body and clothes.
3. Export as VRM. Set the model's usage terms in the export dialog.
4. Load the `.vrm` file in three.js with [three-vrm](../3d/three-vrm.md).
5. Animate it with clips from [Mixamo](../3d/mixamo.md) or with `.vrma`
   animations.

## Examples

- [VRoid Studio product page](https://vroid.com/en/studio) — feature tour:
  presets, hair drawing, texture painting and VRM export.
- [Usage guidelines](https://vroid.com/en/studio/guidelines) — what you may do
  with exported models and preset items commercially.
- [VRoid Hub](https://hub.vroid.com/en) — published VRM characters; each lists
  its own usage terms.
- [three-vrm humanoid animation demo](https://pixiv.github.io/three-vrm/packages/three-vrm/examples/humanoidAnimation/index.html)
  — drop an exported VRM in to see it animated in the browser.

## When to use it

- Use it for an original anime or toon character in a three.js scene, game or
  landing hero.
- Use it when you need a rigged character with expressions and hair physics
  without modelling skills.
- Skip it for realistic or non-humanoid models. Use [Blender](../3d/blender.md).
- Skip it when stock props or environments are what you need. Use
  [Poly Haven](../3d/poly-haven.md).

## Agent notes

- GUI only: no CLI or API. An agent can only consume the exported `.vrm`.
- Ask the user for the `.vrm` file path, and the model's licence, before wiring
  it into a project.
- VRM 0.x exports face the opposite way; call `VRMUtils.rotateVRM0(vrm)` in
  three-vrm.
- Do not commit `.vrm` models to this repo. Link to them instead.

## Alternatives in this repo

- [Blender](../3d/blender.md) — full modelling and rigging, far more effort.
- [three-vrm](../3d/three-vrm.md) — the loader for what VRoid Studio exports.
- [Mixamo](../3d/mixamo.md) — free animations to drive the character.

## Sources

- [Official site](https://vroid.com/en/studio) — checked 2026-10-11
- [Usage guidelines](https://vroid.com/en/studio/guidelines) — checked
  2026-10-11
- [VRoid Hub](https://hub.vroid.com/en) — checked 2026-10-11
