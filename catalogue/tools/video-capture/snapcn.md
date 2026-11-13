---
name: snapcn
slug: snapcn
section: Video & Capture
section_slug: video-capture
source_url: 'https://snapcn.dev/'
designeer_url: 'https://snapcn.dev/'
designeer_blurb:
  'shadcn registry of Remotion components for product demo videos, with paid
  launch-film templates.'
paywall: freemium
pricing_summary:
  '61 MIT components free. Pro $179/year, Lifetime $279 one-time, Commercial
  $499 one-time for five seats and client work (USD list prices; checkout
  localises by billing country). Pro adds 81 components, 10 template films and
  the MCP server.'
open_source: true
license: MIT (free components); proprietary (Pro components and templates)
category_tags:
  [
    remotion,
    shadcn-registry,
    product-demo-video,
    launch-video,
    video-templates,
    motion-graphics,
    agent-skills,
    mcp
  ]
best_for:
  [
    launch films,
    product demo videos,
    changelog videos,
    ai chat and agent ui shots,
    kinetic typography
  ]
stack: [react, remotion, shadcn, typescript]
execution_mode: registry
surface: [video]
status: active
agent_friendly: true
last_verified: 2026-11-12
---

# snapcn

> A shadcn registry of Remotion components for product demo videos. A TolongLabs
> developer reaches for it to get launch-film shots (AI chat streams, typed
> prompts, device frames, lockups) as source code they own, or to study how
> polished agent-style launch films are put together.

## At a glance

| Field          | Value                                                                      |
| -------------- | -------------------------------------------------------------------------- |
| Source         | [snapcn.dev](https://snapcn.dev/)                                          |
| Paywall        | **Freemium**: 61 MIT components free; Pro from $179/year                   |
| Open source    | Free tier only: MIT ([GitHub](https://github.com/shadcn-labs/snapcn))      |
| Type           | shadcn registry of Remotion scenes, plus paid template films               |
| Works with     | Remotion 4, React 19, the shadcn CLI, Claude Code, Cursor, Gemini CLI      |
| Best for       | Launch films, demo videos, changelog clips, agent and chat UI shots        |
| Agent-friendly | Yes: agent skills, `llms.txt`, `llms-components.txt`, `.md` pages, Pro MCP |

## What it is

snapcn is a Shadcn Labs project by Sri Nath. Each component is a Remotion scene
or primitive (a text reveal, a streaming AI answer, a phone frame, a logo sting,
a whole scene) that the shadcn CLI copies into your project. The site lists 61
free MIT components and 81 Pro components, and sells 10 template films: complete
20 to 38 second launch, changelog, pitch and tour videos made of Pro components,
cut to exact frames.

Its strength is taste written down. The repo ships a motion direction
(`MOTION.md`), a motion-quality skill with measured fixes for text judder, and
workflow skills for launch videos, product demos, kinetic typography, logo
animation and explainers. Components take `theme` and `mode` props so the video
uses the product's own design tokens.

Templates and Pro components are not in the public repo: a build step keeps them
in a private folder, and the registry serves them only with a Pro key.
TolongLabs' teardown of all 10 templates, 61 free and 82 Pro components is the
[agent video collection](./tolong-agent-video.md).

## Paywall and pricing

- **Free:** the 61 MIT components, the browser video editor with unlimited 720p
  exports (with a small snapcn mark), and 7 agent skills.
- **Pro:** $179 per year: all Pro components, all template films, the snapcn MCP
  server, one-click agent plugins, 1080p exports without a mark.
- **Lifetime:** $279 once: everything in Pro, including later components and
  templates.
- **Commercial:** $499 once: Lifetime plus a licence for client and company
  work, for you and four teammates.
- Prices are USD list prices from the official repo's plan config; the pricing
  page quotes local prices by billing country (for example about RM 759 per year
  for Pro in Malaysia). All sales are final. One Pro component, Manifesto, is
  free for a confirmed email address.
- **Sign-up required?** No for free components; yes for Pro (an account and a
  key in `components.json`).
- **Licence for client work:** free components are MIT. Pro and Lifetime cover
  your own work; client and company work needs Commercial, per the
  [licence page](https://snapcn.dev/docs/getting-started/license). Remotion
  itself needs a company licence for companies of four or more people (see
  [Remotion](./remotion.md)).

Checked on 2026-11-12.

## How to use

1. Have a Remotion project (`npx create-video@latest`) with a `components.json`
   and the `@/` alias set in both `tsconfig.json` and `remotion.config.ts`
   (Remotion's bundler ignores tsconfig paths). The
   [installation page](https://snapcn.dev/docs/getting-started/installation) has
   both files.

2. Add a component. `@snapcn` is in the shadcn registry directory, so no
   registry entry is needed:

```bash
npx shadcn@latest add @snapcn/text-reveal
```

3. Use it in a composition at its natural length:

```tsx
import { Composition } from 'remotion'
import { TextReveal } from '@/components/snap-cn/text-reveal'

export const RemotionRoot = () => (
  <Composition
    id="Intro"
    component={TextReveal}
    durationInFrames={60}
    fps={30}
    width={1920}
    height={1080}
    defaultProps={{ text: 'Ship it.' }}
  />
)
```

4. For a whole video, give your agent the workflow skill and a brief:

```bash
npx skills add snapcndev/snapcn --skill snapcn --yes
npx skills add snapcndev/snapcn --skill remotion-launch-video
```

5. Render: `npx remotion render <entry> <composition-id> out/video.mp4`.

Pro components and templates install with the same `shadcn add` command once
`components.json` sends your key (shown on the account page).

## Examples

- [Templates](https://snapcn.dev/docs/templates): the 10 paid films with their
  beat lists and full previews; the best single page to see the house style.
- [Components gallery](https://snapcn.dev/docs/components): every free and Pro
  component with a scrubbable preview.
- [Answer Stream](https://snapcn.dev/docs/ai-input/answer-stream): a streaming
  AI answer, the shot most agent product videos need.
- [Agent skill](https://snapcn.dev/docs/getting-started/agent-skill): how the
  skills teach an agent the catalogue and frame budgets.

## When to use it

- Use it when a product needs a launch film or demo video in Remotion and you
  want hand-tuned shots instead of hand-animating every beat.
- Use the free components and the teardowns when you need the look without Pro:
  [TolongLabs agent video](./tolong-agent-video.md) rebuilds the November
  template films in our own code.
- Skip it for screen recordings with auto zoom
  ([Screen Studio](./screen-studio.md)) or when you want a code-free editor.

## Agent notes

- Catalogue for agents: `https://snapcn.dev/llms.txt`,
  `https://snapcn.dev/llms-components.txt`, and any page with `.md` appended.
- Never invent a component name: `@snapcn/<name>` resolves only for listed
  names. Budget each sequence to the component's natural frame count.
- Scenes are laid out for 1280x720 at 30 fps; upscale with `--scale=1.5` for
  1080p.
- `var(--token)` colours do not survive a Remotion render; pass concrete colours
  through `theme`.
- The Pro MCP server: `claude mcp add snapcn -- npx -y @snapcn/mcp@latest` with
  `SNAPCN_API_KEY` set. Needs a Pro key.
- Unpaid installs of a Pro name return 402 or a watermarked preview that only
  plays the demo film.

## Alternatives in this repo

- [Remocn](./remocn.md): free MIT Remotion components with WebGL shaders; no
  paid tier.
- [TolongLabs agent video](./tolong-agent-video.md): our own kit and teardowns,
  built from snapcn's public evidence.
- [Remotion](./remotion.md): the framework underneath both.

## Sources

- [Official site](https://snapcn.dev/): checked 2026-11-12
- [Pricing](https://snapcn.dev/docs/pricing): checked 2026-11-12
- [GitHub repository](https://github.com/shadcn-labs/snapcn): checked 2026-11-12
- [Licence](https://snapcn.dev/docs/getting-started/license): checked 2026-11-12
- [Announcement of five new templates on X](https://x.com/i/status/2120151082840227946):
  checked 2026-11-12
