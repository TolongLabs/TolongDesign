---
name: Libraries.dev
slug: libraries-dev
section: Component Libraries
section_slug: component-libraries
source_url: https://libraries.dev/
designeer_url: https://designeer.xyz/components
designeer_blurb: UI effects and components for agents.
paywall: freemium
pricing_summary:
  'Free core components on npm; Pro tier starts at $9/month or $149 one-time for
  lifetime Studio access.'
open_source: true
license: MIT
category_tags: [react, webgl, shaders, ai-agents, visual-effects]
best_for: [ai applications, hero sections, interactive visual effects]
stack: ['react', 'webgl']
execution_mode: package
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Libraries.dev

> UI effects and components for agents. TolongLabs developers reach for
> Libraries.dev to embed high-craft WebGL and canvas visual effects—such as
> border beams, thinking orbs, liquid metal, and gooey blobs—into AI products
> and interactive hero sections.

## At a glance

| Field          | Value                                                               |
| -------------- | ------------------------------------------------------------------- |
| Source         | [libraries.dev](https://libraries.dev/)                             |
| Paywall        | **Freemium** — free core npm effects; Pro $149 one-time             |
| Open source    | Yes — MIT ([GitHub](https://github.com/Jakubantalik/Libraries.dev)) |
| Type           | Visual effect component collection and agent studio                 |
| Works with     | React, WebGL, Canvas, Next.js                                       |
| Best for       | AI applications, hero sections, interactive visual effects          |
| Agent-friendly | Yes — agent prompt workflows, agent skills, npm packages            |

## What it is

Libraries.dev is an open-source visual effects collection and creative tooling
platform created by Jakub Antalik, Andrei Brinza, and Martin Petercak. It is
built specifically for AI products and modern landing pages requiring
production-ready WebGL, shader, and canvas visual effects.

The collection is organized into several dedicated effect libraries:

- **Beam:** Animated glowing border beams tracing cards, modal perimeters, and
  button strokes.
- **Orbs:** Multi-layer WebGL thinking orbs that react dynamically to speech,
  system load, or conversational state.
- **Metal:** Interactive liquid metal surfaces that ripple and reflect light on
  hover or device orientation.
- **Gooey:** Fluid SVG and canvas metaball physics creating gooey, merging
  interface containers.
- **Image, Voice, & Bots:** Shimmering image load states, audio waveform
  renderers, and animated avatar bot representations.

The project is structured around an agent-native workflow: developers can copy
calibrated prompt instructions directly into coding agents (such as Claude Code,
Cursor, or Codex) to scaffold and customize the effects in code.

## Paywall and pricing

- **Free:** Core component source code and base packages are free and open
  source on GitHub and npm.
- **Paid (Libraries Pro):**
  - **Pro Monthly / Yearly:** $9/month or $90/year.
  - **Pro Lifetime:** $149 one-time purchase with all future library updates.
    Unlocks the interactive visual Studio, agent-based customization tuning, and
    Pro variant shaders.
  - **Business Tier:** $59/month or $590/year (includes 5 seats, extra Studio AI
    credits, and priority support).
- **Sign-up required?** No for free open-source usage; yes for Pro Studio
  access.
- **Licence for client work:** Core code is distributed under the MIT licence.
  Pro purchases allow use in unlimited client and commercial projects.

Checked on the official website on 2026-10-07.

## How to use

1. Choose the effect needed for your interface (e.g. Beam or Orbs).
2. Install the desired effect library via bun:

```bash
bun add @libraries/beam
```

3. Wrap your target UI element or card container:

```tsx
import { BorderBeam } from '@libraries/beam'

export function AgentFeatureCard() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900 p-8">
      <h3 className="text-lg font-semibold text-white">Autonomous Agent</h3>
      <p className="mt-2 text-sm text-neutral-400">
        Active monitoring and real-time execution.
      </p>
      <BorderBeam
        size={250}
        duration={12}
        delay={9}
        colorFrom="#ffaa40"
        colorTo="#9c40ff"
      />
    </div>
  )
}
```

4. Alternatively, use the Libraries.dev agent prompt workflow by copying the
   component prompt from the documentation into your coding assistant.

## Examples

- [Beam Documentation](https://libraries.dev/beam.html) — Live demo and
  configuration parameters for the border beam effect.
- [Thinking Orbs Demo](https://libraries.dev/orbs.html) — Interactive WebGL orb
  visualizations responding to audio amplitude.
- [Libraries.dev GitHub](https://github.com/Jakubantalik/Libraries.dev) — Open
  source repository containing effect recipes and usage guidelines.

## When to use it

- Use it when building AI interfaces that require visual feedback for thinking,
  voice listening, or model reasoning states.
- Use it to create eye-catching hero sections and high-conversion feature cards
  with border beams and fluid metal textures.
- Skip it when your project requires standard transactional form controls; use
  [Prompt Kit](../component-libraries/prompt-kit.md) or
  [Sona UI](../component-libraries/sona-ui.md) instead.

## Agent notes

- Official documentation URL: `https://libraries.dev/how-to-use.html`.
- Pro Studio portal: `https://libraries.dev/pro.html`.
- Agent-friendly workflow documented at `https://libraries.dev/skill.html`.
- WebGL and heavy canvas effects require fallback handling for environments
  without hardware acceleration.

## Alternatives in this repo

- [Prompt Kit](../component-libraries/prompt-kit.md) — Comprehensive chat,
  reasoning, and input component primitives for AI apps.
- [Sona UI](../component-libraries/sona-ui.md) — Animated React component
  library built with Motion and Tailwind CSS.

## Sources

- [Libraries.dev Official Website](https://libraries.dev/) — checked 2026-10-07
- [Libraries Pro Pricing](https://libraries.dev/pro.html) — checked 2026-10-07
- [Libraries.dev GitHub](https://github.com/Jakubantalik/Libraries.dev) —
  checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components)
