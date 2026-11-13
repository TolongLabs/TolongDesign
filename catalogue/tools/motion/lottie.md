---
name: Lottie
slug: lottie
section: Motion
section_slug: motion
source_url: https://lottiefiles.com/
designeer_url: https://designeer.xyz/components
designeer_blurb: Lightweight JSON-based vector animation format.
paywall: freemium
pricing_summary:
  'Free plan for personal, non-commercial exploration; Individual plan is
  ~$19.99/month and Team is ~$24.99/user/month (billed annually) for commercial
  use.'
open_source: false
license: proprietary
category_tags:
  [motion, animation, vector, lottie, json, dotlottie, illustrations]
best_for:
  [vector animations, micro-interactions, after effects exports, dotlottie]
stack: ['react', 'vue', 'webgl', 'canvas', 'ios', 'android']
execution_mode: package
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Lottie

> Lightweight JSON-based vector animation format. Use it to render crisp, After
> Effects animations and micro-interactions on the web without GIF bloat.

## At a glance

| Field          | Value                                                          |
| -------------- | -------------------------------------------------------------- |
| Source         | [lottiefiles.com](https://lottiefiles.com/)                    |
| Paywall        | **Freemium** — free tier (personal); Team plan ~$24.99/seat/mo |
| Open source    | No — proprietary platform; open-source players (MIT/Apache)    |
| Type           | Vector animation format, marketplace, and web runtime players  |
| Works with     | Web, React, Vue, iOS, Android, Figma, After Effects            |
| Best for       | Vector animations, micro-interactions, dotLottie packaging     |
| Agent-friendly | Yes — npm web components (`@lottiefiles/dotlottie-react`)      |

## What it is

Lottie is an open animation file format that encodes vector motion graphics into
compact JSON data. Created originally by Airbnb and evolved extensively by
LottieFiles, the format allows animators to design complex motion inside Adobe
After Effects or Figma and render it natively across the web, mobile, and
embedded devices at full display resolution.

LottieFiles serves as the primary ecosystem hub for the format. It provides a
cloud-based collaboration suite, visual colour and speed editors, an asset
marketplace, and modern packaging via the `dotLottie` format (which bundles JSON
animation data, raster assets, and fonts into a compressed archive up to 80%
smaller than standard Lottie JSON).

On web projects, developers consume Lottie files through lightweight open-source
runtimes like `@lottiefiles/dotlottie-react` or `lottie-web`. The player renders
animations using standard SVG paths or canvas operations, providing programmatic
controls to pause, loop, reverse, or trigger playback on scroll.

## Paywall and pricing

- **Free Plan:** $0. Includes access to public community animations, basic web
  player embed tools, and private personal file testing for non-commercial use.
- **Paid Subscriptions (Billed Annually):**
  - **Individual:** ~$19.99/user/month. Private projects, unlimited format
    conversions (GIF, MP4, dotLottie), color palette customization, and asset
    history.
  - **Team:** ~$24.99/user/month. Commercial licence for client and product
    work, shared team workspaces, version control, and Figma plugin sync.
  - **Enterprise:** Custom pricing for large companies requiring SSO, custom API
    integrations, and centralized asset governance.
- **Sign-up required?** Yes, account creation is required to download assets or
  manage files on LottieFiles.
- **Licence for client work:** Free tier is restricted to personal,
  non-commercial projects. Commercial client websites require paid subscriptions
  or royalty-free commercial marketplace licenses.

Checked on 2026-10-07.

## How to use

1. Download a `.lottie` or `.json` animation file from LottieFiles, or export
   one from After Effects / Figma using the LottieFiles plugin.
2. Place the animation file in your Next.js `public/` directory (e.g.
   `public/confetti.lottie`).
3. Install the official dotLottie React player using Bun:

```bash
bun add @lottiefiles/dotlottie-react
```

4. Embed the animation in your React component:

```tsx
'use client'

import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export function SuccessCelebration() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="h-48 w-48">
        <DotLottieReact src="/confetti.lottie" loop={false} autoplay={true} />
      </div>
      <h2 className="text-xl font-semibold mt-4">Order Confirmed!</h2>
    </div>
  )
}
```

## Examples

- [LottieFiles Free Animations Marketplace](https://lottiefiles.com/free-animations)
  — searchable catalogue of thousands of free vector micro-animations.
- [dotLottie Documentation](https://dotlottie.io/) — technical overview of the
  compressed `.lottie` binary format and modern web runtimes.
- [LottieFiles Pricing](https://lottiefiles.com/pricing) — official plans, team
  collaboration features, and commercial licence guidelines.

## When to use it

- Use it for decorative micro-interactions, animated onboarding illustrations,
  icon ticks, and empty-state graphics designed in After Effects.
- Use it when you need tiny, responsive vector animations without raster
  pixelation.
- Skip it when you need interactive state machines driven by dynamic physics or
  inverse kinematics; use Rive instead.

## Agent notes

- Official documentation URL: `https://developers.lottiefiles.com/`
- Recommended modern player package: `@lottiefiles/dotlottie-react`
- Legacy package: `lottie-web`
- Prefer `.lottie` files over raw `.json` files to save bandwidth and bundle
  size.
- Animations run client-side; always add `'use client'` when integrating into
  Next.js App Router components.

## Alternatives in this repo

- [Rive](../motion/rive.md) — interactive vector animation format with state
  machine logic and native runtime engines.
- [Morphrig](../motion/morphrig.md) — interactive technical guide on how SVG
  icon morphing actually works.
- [Motion](../motion/motion.md) — production-ready animation library for React
  and DOM layout transitions.

## Sources

- [LottieFiles Official Site](https://lottiefiles.com/) — checked 2026-10-07
- [LottieFiles Pricing](https://lottiefiles.com/pricing) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components)
