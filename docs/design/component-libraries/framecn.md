---
name: framecn
slug: framecn
section: Component Libraries
section_slug: component-libraries
source_url: https://framecn.dev/
designeer_url: https://designeer.xyz/components
designeer_blurb: 'Video rendering components for React, built on Editframe.'
paywall: free
pricing_summary: 'Free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [video, editframe, react, shadcn, motion]
best_for: [programmatic video, motion graphics, video exports]
stack: [react, editframe, tailwind]
agent_friendly: true
last_verified: 2026-10-07
---

# framecn

> Video rendering components for React, built on Editframe. TolongLabs
> developers reach for framecn to generate dynamic product walkthroughs, social
> clips, and animated video assets programmatically using React and Tailwind
> CSS.

## At a glance

| Field          | Value                                                        |
| -------------- | ------------------------------------------------------------ |
| Source         | [framecn.dev](https://framecn.dev/)                          |
| Paywall        | **Free** — 100% free and open source                         |
| Open source    | Yes — MIT ([GitHub](https://github.com/shadcn-labs/framecn)) |
| Type           | Programmatic video component library and registry            |
| Works with     | React, Editframe (`@editframe/react`), Tailwind CSS          |
| Best for       | Programmatic video, motion graphics, video exports           |
| Agent-friendly | Yes — shadcn CLI registry, copy-paste components             |

## What it is

framecn is an open-source video component library created by Aniket Pawar under
the Shadcn Labs initiative. It bridges modern web UI design with programmatic
video composition by providing reusable, animated React components built on top
of the Editframe rendering engine.

Rather than authoring video mockups manually inside desktop video suites or
writing complex Canvas/WebGL pipelines, framecn treats video scenes as standard
React component hierarchies. Developers can compose interactive software demos,
animated cursor paths, button click transitions, and lower-thirds directly using
JSX and Tailwind utility classes.

The library is organized into three primary layers:

- **Video components:** Higher-level video scenes (e.g. `cursor-flow`,
  `chat-flow`) that capture realistic software workflows and timing sequences.
- **UI primitives:** Buttons, badges, and modals equipped with state transition
  hooks that animate smoothly across fixed video frame durations.
- **Core runtime (`framecn-ui`):** Shared timeline coordination helpers, color
  systems, and transition curves installed automatically as registry
  dependencies.

Compositions can be previewed live in the browser and exported to standard MP4
video files via Editframe's local or cloud rendering infrastructure.

## Paywall and pricing

- **Free:** The framecn component registry, templates, and example scenes are
  100% free and open source under the MIT licence.
- **Paid:** None for framecn itself. Note that using Editframe's hosted cloud
  rendering service for large-scale production rendering may incur Editframe API
  costs if exceeding their free tier.
- **Sign-up required?** No for framecn components; yes if provisioning an
  Editframe cloud rendering token.
- **Licence for client work:** MIT licence allows unrestricted commercial and
  client usage.

Checked on the official website and repository on 2026-10-07.

## How to use

1. Set up a project with Editframe dependencies configured:

```bash
bun add @editframe/react
```

2. Install a framecn video scene using the shadcn CLI:

```bash
bunx --bun shadcn@latest add @framecn/cursor-flow
```

3. Wrap the component in an Editframe `Timegroup` and render your scene:

```tsx
import { Timegroup } from '@editframe/react'
import { CursorFlow } from '@/components/framecn/cursor-flow'

export function DemoScene() {
  return (
    <Timegroup duration="5s" mode="fixed">
      <CursorFlow />
    </Timegroup>
  )
}
```

## Examples

- [framecn Installation Guide](https://framecn.dev/docs/installation) — Complete
  instructions for installing video components and UI primitives.
- [framecn Concepts Documentation](https://framecn.dev/docs/concepts) — In-depth
  explanation of video timelines, state durations, and transitions.
- [framecn GitHub Repository](https://github.com/shadcn-labs/framecn) — Source
  code repository for the registry, scene builders, and shaders.

## When to use it

- Use it when programmatically generating video teasers, automated social media
  previews, release changelog clips, or personalized customer walkthroughs.
- Use it when you want your video assets to use the exact same Tailwind CSS
  design tokens and component styles as your web application.
- Skip it when you only need client-side interactive UI components for a web
  browser; use [Nexvyn UI](../component-libraries/nexvyn-ui.md) or
  [Sona UI](../component-libraries/sona-ui.md) instead.

## Agent notes

- Official documentation URL: `https://framecn.dev/docs`.
- Components are installed into `components/framecn/` via
  `npx shadcn add @framecn/<name>`.
- Shared utilities are automatically copied into `lib/framecn-ui/`.
- Designed specifically for `@editframe/react` timeline APIs; components require
  duration attributes and frame-based timing context.

## Alternatives in this repo

- [soundcn](../component-libraries/soundcn.md) — Copy-paste UI sound effects
  that pair naturally with video clips and interactive transitions.
- [Shadcn Labs](../component-libraries/shadcn-labs.md) — The parent ecosystem
  containing framecn, termcn, and other domain-specific registries.

## Sources

- [framecn Official Website](https://framecn.dev/) — checked 2026-10-07
- [framecn Documentation](https://framecn.dev/docs) — checked 2026-10-07
- [framecn GitHub Repository](https://github.com/shadcn-labs/framecn) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components)
