---
name: Lightswind
slug: lightswind
section: Component Libraries
section_slug: component-libraries
source_url: https://lightswind.com/
designeer_url: https://designeer.xyz/components
designeer_blurb: Tailwind components featuring lighting and glows.
paywall: freemium
pricing_summary:
  'Free core component library under MIT; Pro tier offers lifetime access with
  pricing gated behind checkout.'
open_source: true
license: MIT
category_tags: [tailwind, lighting, glows, animations, react, mcp]
best_for: [lighting effects, glowing borders, dark mode interfaces]
stack: [react, tailwind]
agent_friendly: true
last_verified: 2026-10-07
---

# Lightswind

> Tailwind components featuring lighting and glows. TolongLabs developers reach
> for Lightswind to equip React and Tailwind web applications with luminous
> lighting effects, glowing borders, and futuristic neon accents.

## At a glance

| Field          | Value                                                                          |
| -------------- | ------------------------------------------------------------------------------ |
| Source         | [lightswind.com](https://lightswind.com/)                                      |
| Paywall        | **Freemium** — 200+ free components; Pro tier for blocks                       |
| Open source    | Yes — MIT ([GitHub](https://github.com/codewithMUHILAN/Lightswind-UI-Library)) |
| Type           | Component library with lighting and glow effects                               |
| Works with     | React, Next.js, Tailwind CSS                                                   |
| Best for       | Lighting effects, glowing borders, dark mode interfaces                        |
| Agent-friendly | Yes — CLI tool, MCP server integration, copy-paste snippets                    |

## What it is

Lightswind UI is an AI-native, CLI-first component library created by Muhilan
(@codewithMUHILAN) that specializes in glowing borders, neon lighting effects,
and luminous surface shaders for React and Tailwind CSS. It is designed
specifically to satisfy the visual demands of futuristic, dark-mode developer
tools and Web3 applications.

Standard Tailwind component systems often treat lighting as an afterthought,
limiting visual treatments to simple box shadows. Lightswind takes a different
approach by engineering dynamic gradient masks, ambient backlights, conic glow
spinners, beam borders, and pulse indicators directly into reusable React
components.

The library uses a copy-paste distribution model driven by a dedicated CLI tool.
Upon installation, component code is written directly into the developer's local
project, enabling direct modification of Tailwind color variables and keyframe
animations. Lightswind also provides Model Context Protocol (MCP) support for AI
agent workflows.

## Paywall and pricing

- **Free:** The open-source core library containing over 200 base components
  (such as glowing buttons, border lights, and radiant cards) is 100% free under
  the MIT licence.
- **Paid:** Lightswind Pro provides exclusive premium components, full-page
  application blocks, and direct authenticated MCP server access. Pro is sold as
  a one-time lifetime developer licence (exact dollar pricing is gated behind
  the account sign-in flow).
- **Sign-up required?** No account is needed to install the free npm package or
  copy free components. An account and API key are required for Pro and MCP
  features.
- **Licence for client work:** Free MIT components may be used in unlimited
  commercial and client projects without restriction. Pro licences include
  commercial rights for client deployments and SaaS products.

Verified on the official Lightswind documentation and repository on 2026-10-07.

## How to use

1. Install the Lightswind CLI or npm package:

```bash
bun add lightswind-ui
```

2. Add a glowing card component into your React or Next.js project:

```tsx
'use client'

import React from 'react'

export function GlowingCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="relative group p-0.5 rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 rounded-2xl opacity-75 blur-sm group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-tilt" />
      <div className="relative px-7 py-6 bg-slate-950 rounded-2xl leading-none flex flex-col justify-between">
        <h3 className="text-white text-lg font-bold">{title}</h3>
        <p className="text-slate-400 text-sm mt-2">{desc}</p>
      </div>
    </div>
  )
}
```

3. Render the card inside a dark-themed container:

```tsx
export function HeroShowcase() {
  return (
    <div className="bg-slate-900 p-12 flex justify-center">
      <GlowingCard
        title="Luminous Architecture"
        desc="Powered by radiant CSS keyframes and Tailwind utilities."
      />
    </div>
  )
}
```

## Examples

- [Lightswind Components](https://lightswind.com/components) — Catalog of
  glowing borders, radiant cards, and kinetic buttons.
- [Lightswind Pricing](https://lightswind.com/pricing) — Account portal for
  obtaining Pro licences and MCP API keys.
- [Lightswind GitHub Repository](https://github.com/codewithMUHILAN/Lightswind-UI-Library)
  — Open-source repository with documentation and CLI tool.

## When to use it

- Use it when designing dark-mode developer tools, crypto/Web3 interfaces, or
  gaming websites where luminous neon accents and lighting effects are desired.
- Use it when you want ready-made glowing cards, borders, and light rays without
  hand-coding complex SVG filters or canvas shaders.
- Skip it when building minimal, light-mode corporate or enterprise business
  tools; use [Tremor](../component-libraries/tremor.md) or
  [Flowbite](../component-libraries/flowbite.md) instead.
- Skip it when your project does not use React; use
  [HyperUI](../component-libraries/hyperui.md) instead.

## Agent notes

- Official documentation URL: `https://lightswind.com/docs`.
- Source repository: `https://github.com/codewithMUHILAN/Lightswind-UI-Library`.
- Lightswind provides an MCP (Model Context Protocol) server for AI coding
  agents to fetch component snippets and design tokens directly.
- Ensure Tailwind animation keyframes and custom color gradients are properly
  defined in your configuration file when pasting standalone components.

## Alternatives in this repo

- [Magic UI](../component-libraries/magic-ui.md) — Animated landing page
  components featuring border beams and particles.
- [Aceternity UI](../component-libraries/aceternity-ui.md) — Dramatic animated
  components featuring lamp effects, spotlights, and 3D cards.

## Sources

- [Lightswind Official Site](https://lightswind.com/) — checked 2026-10-07
- [Lightswind GitHub Repository](https://github.com/codewithMUHILAN/Lightswind-UI-Library)
  — checked 2026-10-07
- [Lightswind Pricing](https://lightswind.com/pricing) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components)
