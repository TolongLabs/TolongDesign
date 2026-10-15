---
name: Remocn
slug: remocn
section: Video & Capture
section_slug: video-capture
source_url: 'https://www.remocn.dev/'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: 'Remotion animation components for video production.'
paywall: free
pricing_summary:
  'Completely free and open source under the MIT licence with no paywalls or
  gated assets.'
open_source: true
license: MIT
category_tags: [remotion, react, motion-graphics, shaders, ai-agents]
best_for:
  [
    ai agent video generation,
    product demo animations,
    webgl background shaders,
    remotion component templates
  ]
stack: ['react', 'tailwind', 'remotion', 'typescript']
execution_mode: snippet
surface: ['video']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Remocn

> Remotion animation components for video production. TolongLabs developers
> reach for Remocn to assemble programmatic product demo videos using ready-made
> Remotion components, procedural background shaders, and AI agent skills.

## At a glance

| Field          | Value                                                            |
| -------------- | ---------------------------------------------------------------- |
| Source         | [remocn.dev](https://www.remocn.dev/)                            |
| Paywall        | **Free** — 100% free and open source                             |
| Open source    | Yes — MIT ([GitHub](https://github.com/Remocn/remocn))           |
| Type           | Component library and animation toolkit for Remotion             |
| Works with     | Remotion, React, Tailwind CSS, TypeScript, Claude Code, Cursor   |
| Best for       | AI-generated demo videos, background shaders, kinetic typography |
| Agent-friendly | Yes — copy-paste source, agent skills, CLI prompts, npm          |

## What it is

Remocn is an open-source animation and component library built specifically for
Remotion. Inspired by the shadcn/ui philosophy of copy-pasteable, customizable
code, Remocn provides production-ready building blocks for video creators,
developers, and AI coding agents who want to generate polished product demo
videos without wrestling with raw frame math from scratch.

The library features an extensive catalog of motion graphics elements:

- **Procedural Shaders & Backgrounds:** GPU-accelerated WebGL shaders including
  Mesh Gradients, Grain Gradients, Warp Swirls, Liquid Metal, Perlin Noise,
  Voronoi patterns, and God Rays.
- **UI & Layout Mockups:** Kinetic typography, browser frames, terminal windows,
  avatar stacks, notification toasts, and badge reveals.
- **Transitions & Effects:** Smooth camera zooms, light tunnels, dither passes,
  and rhythmic particle pulses.

Crucially, Remocn is designed from the ground up to pair with AI coding agents
(such as Claude Code, Cursor, and Antigravity). Instead of manually assembling
sequences, developers prompt their agent to scaffold scenes using Remocn's
structured components and skills, watching the video render live in the browser
player.

## Paywall and pricing

- **Free:** Completely free and open source. All components, GLSL shaders,
  motion templates, and agent integration skills are available without fees.
- **Paid:** None. No pro tiers, subscription locks, or watermarks. Sponsorships
  are accepted via GitHub Sponsors.
- **Sign-up required?** No. No account, API key, or authentication required.
- **Licence for client work:** Distributed under the MIT License. Freely
  permitted for commercial video rendering and client projects.

Checked on the official website and GitHub repository on 2026-10-07.

## How to use

1. Set up a Remotion project with Remocn:

In an empty project directory, initialize your video app:

```bash
bunx create-video@latest
```

2. Add Remocn dependencies:

```bash
bun add @remotion/player @remotion/cli lucide-react clsx tailwind-merge
```

3. Install the Remocn skill for your AI coding agent: Provide your agent with
   the Remocn skill prompt from `https://www.remocn.dev/` so it understands
   Remocn component APIs and compositional structure.

4. Import Remocn background shaders and UI components into a composition:

```tsx
import { AbsoluteFill } from 'remotion'
import { MeshGradient } from './components/shaders/MeshGradient'
import { KineticText } from './components/typography/KineticText'

export function ProductHeroVideo() {
  return (
    <AbsoluteFill className="bg-slate-950">
      <MeshGradient
        colors={['#3b82f6', '#8b5cf6', '#ec4899']}
        speed={0.8}
        wireframe={false}
      />
      <AbsoluteFill className="flex items-center justify-center">
        <KineticText
          text="Ship Faster with TolongLabs"
          fontSize={72}
          delayInFrames={15}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  )
}
```

5. Preview live in the Remotion player and render the final MP4:

```bash
bun run start
```

## Examples

- [Remocn Component Gallery](https://www.remocn.dev/) — Interactive previews of
  UI layouts, transitions, typography effects, and icons.
- [Remocn Shaders Showcase](https://www.remocn.dev/) — Live WebGL demos of Neuro
  Noise, Caustics, Liquid Metal, and God Rays shaders.
- [Remocn GitHub Repository](https://github.com/Remocn/remocn) — Source code,
  component templates, and agent skill configurations.

## When to use it

- Use it when you are building programmatic videos in Remotion and want high-end
  motion graphics and shaders without writing complex WebGL shaders or spring
  functions manually.
- Use it to equip coding agents (Claude Code, Cursor) with a standardized
  library of video components to generate product teasers from text prompts.
- Skip it if you are looking for an in-browser graphical UI with timeline
  scrubbing; use [Tokokino](../video-capture/tokokino.md) or
  [Slant It](../video-capture/slant-it.md) instead.
- Skip it if you are editing live camera or screen recordings; use
  [BetterShot](../video-capture/bettershot.md) instead.

## Agent notes

- Official site: `https://www.remocn.dev/`.
- GitHub repository: `https://github.com/Remocn/remocn`.
- Highly agent-friendly: components follow consistent copy-paste patterns
  similar to shadcn/ui.
- Components are designed for Remotion; requires standard React, TypeScript, and
  Tailwind CSS bundling.

## Alternatives in this repo

- [Remotion](../video-capture/remotion.md) — The underlying React-based video
  rendering framework powering Remocn components.
- [Tokokino](../video-capture/tokokino.md) — In-browser editor for device
  mockups and timeline product demos without code.

## Sources

- [Official site](https://www.remocn.dev/) — checked 2026-10-07
- [GitHub repository](https://github.com/Remocn/remocn) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/utilities)
