---
name: Rive
slug: rive
section: Motion
section_slug: motion
source_url: https://rive.app/
designeer_url: https://designeer.xyz/components
designeer_blurb: Interactive state-machine vector animation tool.
paywall: freemium
pricing_summary:
  'Free editor for personal exploration and learning; Cadet plan is $17/month
  (or $9/month billed annually) for production exports.'
open_source: false
license: proprietary
category_tags:
  [motion, animation, vector, state-machine, runtime, interactive, 2d]
best_for:
  [interactive vector graphics, state machines, game UI, micro-interactions]
stack: [react, vue, webgl, canvas, flutter, ios, android]
agent_friendly: true
last_verified: 2026-10-07
---

# Rive

> Interactive state-machine vector animation tool. Use it to build interactive
> characters, button states, and graphics driven by real-time code inputs.

## At a glance

| Field          | Value                                                         |
| -------------- | ------------------------------------------------------------- |
| Source         | [rive.app](https://rive.app/)                                 |
| Paywall        | **Freemium** — free editor; Cadet plan from $9/mo for exports |
| Open source    | No — proprietary editor; open-source runtimes (MIT/Apache)    |
| Type           | Vector animation design tool and interactive runtime engine   |
| Works with     | Web (Canvas/WebGL), React, Vue, Svelte, iOS, Android, Flutter |
| Best for       | Interactive vector graphics, state machines, game UI          |
| Agent-friendly | Yes — npm runtime packages, clean state machine input APIs    |

## What it is

Rive is a next-generation vector animation design suite and runtime format.
While conventional animation tools (like After Effects or Lottie) export static,
linear video or frame sequences, Rive builds interactive state machines that
react live to mouse moves, user clicks, pointer proximity, and external data
feeds.

In the Rive web editor, designers create vector artwork, rig skeletal bones,
define inverse kinematics (IK), and construct logic state machines with inputs,
transitions, and blend trees. When exported as a tiny `.riv` binary file, the
entire animation—complete with all interactive logic—runs natively on hardware
via Rive's custom rendering engine.

On the web, developers embed `.riv` assets using lightweight open-source
runtimes (`@rive-app/canvas` or `@rive-app/react-canvas`). By passing state
machine input values from JavaScript or React props, the graphics respond with
zero video buffering or frame drops at 120 FPS.

## Paywall and pricing

- **Free Plan:** $0/seat/month. Full access to the Rive design editor, unlimited
  personal files, 1 team project, 3 shared files, and AI agent experimentation.
  However, production `.riv` file exporting is restricted.
- **Paid Subscriptions (for Exports):**
  - **Cadet:** $17/seat/month ($9/seat/month billed annually). Unlimited
    production `.riv` exports, up to 3 seats, and full asset rights.
  - **Voyager:** $39/seat/month ($32/seat/month billed annually). Shared team
    asset libraries, Rive CDN hosting, and monthly AI credits.
  - **Enterprise:** Custom volume pricing with SSO, SOC2 compliance, and
    dedicated technical support.
- **Sign-up required?** Yes, account creation is required to use the cloud
  editor.
- **Licence for client work:** Exported `.riv` assets generated under paid plans
  (Cadet or higher) can be used commercially in client apps and websites without
  royalties.

Checked on 2026-10-07.

## How to use

1. Design the artwork and configure state machine inputs (e.g., boolean
   `isHovered`, number `progress`) inside the Rive editor at `rive.app`.
2. Export the asset as a `.riv` file (e.g., `button.riv`) and place it in your
   public assets directory.
3. Install the Rive React runtime using Bun:

```bash
bun add @rive-app/react-canvas
```

4. Render the interactive state machine in your React component:

```tsx
import { useRive, useStateMachineInput } from '@rive-app/react-canvas'

export function InteractiveButton() {
  const { rive, RiveComponent } = useRive({
    src: '/assets/button.riv',
    stateMachines: 'State Machine 1',
    autoplay: true
  })

  const isHoveredInput = useStateMachineInput(
    rive,
    'State Machine 1',
    'isHovered'
  )

  return (
    <div
      className="h-16 w-48 cursor-pointer"
      onMouseEnter={() => isHoveredInput && (isHoveredInput.value = true)}
      onMouseLeave={() => isHoveredInput && (isHoveredInput.value = false)}
    >
      <RiveComponent />
    </div>
  )
}
```

## Examples

- [Rive Marketplace](https://rive.app/marketplace/) — browse public interactive
  vector files, characters, and UI components shared by the community.
- [Rive React Runtime Documentation](https://rive.app/community/doc/overview/doc54N8RkZ2K)
  — integration guide for React, Next.js, and state machine hooks.
- [Rive Pricing Page](https://rive.app/pricing) — official seat tiers, annual
  billing discounts, and export feature matrices.

## When to use it

- Use it when you need rich, reactive vector illustrations—like an animated
  mascot following the cursor or an interactive audio visualizer.
- Use it to replace heavy MP4 videos or GIF animations with crisp, tiny vector
  binaries (often under 50KB).
- Skip it when animating standard DOM HTML elements and CSS layouts; use Motion
  or GSAP instead.

## Agent notes

- Official documentation URL: `https://rive.app/community/doc`
- React package: `@rive-app/react-canvas`
- Vanilla web package: `@rive-app/canvas`
- Runtime engines are open-source and do not require server API keys.
- AI coding agents can interact with state machines by setting input variables
  (`boolean`, `number`, `trigger`) on the Rive instance.

## Alternatives in this repo

- [Lottie](../motion/lottie.md) — lightweight JSON-based vector animation format
  exported from After Effects.
- [Motion](../motion/motion.md) — production-ready animation library for React
  and DOM layout transitions.
- [GSAP](../motion/gsap.md) — industry-standard JavaScript timeline and SVG
  manipulation engine.

## Sources

- [Rive Official Site](https://rive.app/) — checked 2026-10-07
- [Rive Pricing](https://rive.app/pricing) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components)
