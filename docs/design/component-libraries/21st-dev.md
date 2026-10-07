---
name: 21st.dev
slug: 21st-dev
section: Component Libraries
section_slug: component-libraries
source_url: 'https://21st.dev/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Community shadcn registry with interactive previews.'
paywall: freemium
pricing_summary:
  'Free for individuals with unlimited installs and MCP code retrieval; AI
  generation credits from $5.'
open_source: false
license: proprietary
category_tags: [react, tailwind, shadcn, registry, mcp, marketplace]
best_for:
  [copy-paste components, shadcn registry, AI code retrieval, animated UI]
stack: [react, nextjs, tailwind]
agent_friendly: true
last_verified: 2026-10-07
---

# 21st.dev

> Community shadcn registry with interactive previews. TolongLabs developers and
> AI coding agents reach for 21st.dev as an expansive marketplace of over 12,000
> copy-paste React components, creative shaders, and animated blocks accessible
> via CLI and MCP.

## At a glance

| Field          | Value                                                 |
| -------------- | ----------------------------------------------------- |
| Source         | [21st.dev](https://21st.dev/)                         |
| Paywall        | **Freemium** — free unlimited installs; AI credits $5 |
| Open source    | No — proprietary platform; components permissive      |
| Type           | Component marketplace and shadcn registry             |
| Works with     | React, Next.js, Tailwind CSS, Motion, Three.js, MCP   |
| Best for       | Creative UI components, animated blocks, agent search |
| Agent-friendly | Yes — CLI install command, native MCP server support  |

## What it is

21st.dev is an open community component registry and creative interface
marketplace built on top of the shadcn/ui distribution paradigm. Curating more
than 12,000 production React components, website templates, and customized
themes, the platform connects independent design engineers with frontend
builders worldwide.

The platform bridges standard functional UI with high-end creative web craft.
Its catalog spans over 2,000 marketing blocks (animated hero banners, GLSL
shaders, liquid and metallic background canvas effects, procedural gradients)
and 2,100 standalone UI components (conversational AI chats, interactive 3D
cards, bespoke navigation bars, and micro-interactions).

21st.dev is deeply integrated with AI coding workflows. In addition to a web-
based interactive preview playground and single-line CLI commands, it exposes an
MCP server allowing AI coding assistants to search the catalog and retrieve
component source code directly during terminal development sessions.

## Paywall and pricing

- **Free (Builder Plan):** Free for individual developers. Includes unlimited
  component browsing, copy-pasting, CLI installations, verified template
  downloads, unlimited component code retrieval via MCP, SVG logo searches, and
  5 free automated PR reviews via Design Bug Bot.
- **Paid (Builder + AI & Team):**
  - **Builder + AI:** Introduces AI multi-model component generation, live React
    sandboxes, and automated Design Bug Bot PR reviews with monthly AI credits
    (additional credit bundles start at +100 credits for $5, which roll over).
  - **Team / Team + AI:** Adds centralized team billing, shared component
    collections, and team administration controls.
  - **Premium Templates:** Select complex full-website templates are sold
    individually by their third-party creators.
- **Sign-up required?** Browsing and copying code snippets is free without
  signing in. Account required for CLI / MCP access and bookmarking.
- **Licence for client work:** Most individual components are published under
  permissive terms for personal and commercial client work. Check author notes
  on individual marketplace submissions.

Verified on the official 21st.dev pricing and features pages on 2026-10-07.

## How to use

1. Search for components on `https://21st.dev/` or query the catalog directly
   using an AI agent equipped with the 21st MCP server.
2. Install a chosen component into your Next.js / Tailwind project using the
   21st CLI:

```bash
bunx 21st@latest add animated-hero
```

3. Alternatively, copy the raw TypeScript and Tailwind source code directly into
   your `@/components` directory.
4. Import and customize the component in your layout:

```tsx
import { AnimatedHero } from '@/components/animated-hero'

export default function Home() {
  return (
    <AnimatedHero
      headline="Build faster with verified components"
      ctaText="Explore Registry"
    />
  )
}
```

## Examples

- [Component Marketplace](https://21st.dev/community/components) — Directory of
  thousands of searchable React components with live sandboxes.
- [Templates Directory](https://21st.dev/community/templates) — Full-site
  starter kits and marketing templates designed by community design engineers.
- [Animated Hero Blocks](https://21st.dev/community/components/s/animated-hero)
  — Interactive hero sections featuring dynamic lighting and canvas effects.
- [Pricing and Plan Comparison](https://21st.dev/pricing) — Detailed breakdown
  of Builder, Builder + AI, and Team subscription features.

## When to use it

- Use it when looking for creative, high-polish components (shaders, particle
  effects, animated cards) that exceed standard utility UI libraries.
- Use it within AI coding agents to retrieve pre-built, tested UI code via MCP.
- Skip it if you need a minimal, zero-dependency unstyled primitive set; consult
  [shadcn/ui](../component-libraries/shadcn-ui.md) or
  [Radix](../component-libraries/radix.md) instead.

## Agent notes

- Exceptionally agent-friendly: provides an official MCP tool
  (`search_21st_components` and code retrieval) enabling agents to find and drop
  components directly into local codebases.
- Components frequently require dependencies such as `motion`, `lucide-react`,
  `three`, or `@react-three/fiber` depending on the complexity of the visual
  effect.
- Adheres to standard shadcn/ui folder layout conventions.

## Alternatives in this repo

- [shadcn/ui](../component-libraries/shadcn-ui.md) — The foundational open-
  source component collection that defines the registry format.
- [ForgeUI](../component-libraries/forgeui.md) — Curated collection of animated
  SaaS blocks and templates for React and Tailwind.
- [Motion Primitives](../component-libraries/motion-primitives.md) — Focused,
  open-source animation primitives kit powered by Motion.

## Sources

- [Official site](https://21st.dev/) — checked 2026-10-07
- [21st.dev Pricing](https://21st.dev/pricing) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components)
