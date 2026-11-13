---
name: Prompt Motion
slug: prompt-motion
section: Motion
section_slug: motion
source_url: 'https://prompt-motion.com/'
designeer_url: 'https://prompt-motion.com/'
designeer_blurb:
  A collection of motion videos made with Claude Opus 5.5, with the prompts and
  skills behind them.
paywall: free
pricing_summary:
  Free to browse, copy prompts and customize them; no paid plan is published.
open_source: false
license: unknown
category_tags: [motion-graphics, prompts, ai-video, claude, inspiration]
best_for: [launch videos, product promos, explainers, kinetic type]
stack: ['html', 'remotion', 'threejs']
execution_mode: reference
surface: ['reference']
status: active
agent_friendly: true
last_verified: 2026-10-11
---

# Prompt Motion

> A collection of motion videos made with Claude Opus 5.5, with the prompts and
> skills behind them.
>
> Reach for it before asking a coding agent for a motion video: see what a
> prompt produced, then copy and adapt the prompt instead of guessing.

## At a glance

| Field          | Value                                                    |
| -------------- | -------------------------------------------------------- |
| Source         | [prompt-motion.com](https://prompt-motion.com/)          |
| Paywall        | **Free** — no paid plan published                        |
| Open source    | No public repo found; licence not published              |
| Type           | Gallery of AI-made motion videos with their prompts      |
| Works with     | Claude Opus 5.5; entries use HTML, Remotion or three.js  |
| Best for       | Launch videos, product promos, explainers, kinetic type  |
| Agent-friendly | Yes — every entry has a copyable prompt or skill install |

## What it is

Prompt Motion is a gallery of motion-graphics videos made with Claude Opus 5.5.
Each entry shows the video next to the prompt that made it, or next to a
reusable Claude Code skill. Entries credit the creator and link the original
post. Entry pages also list the model, effort or iteration count, and sometimes
the render stack.

The sitemap listed 233 entry pages on 2026-10-11. The home page filters by
Prompt or Skill, sorts by Popular, and tags entries as Product UI, Phone,
Charts, Diagrams, Kinetic type, Shapes, Particles, Characters, Photos, Music and
Code. Most entries are prompts; a few are skills.

The site also has two in-house templates (a showreel prompt and a three.js
real-time template), a "Customize" tool that rewrites a prompt for your project
in the browser, an email list, and a blog that analyses the collected prompts.
The site is curated by [@p4nthera\_](https://x.com/p4nthera_).

## Paywall and pricing

- **Free:** browse every video, copy prompts and skills, use the Customize tool.
  The Customize page says "It's free, and your details stay in your browser."
- **Paid:** Not published.
- **Sign-up required?** No. An email address is only needed for the optional
  new-video newsletter.
- **Licence for client work:** Not published. The footer says "Videos and
  prompts belong to their creators, linked on each entry." Ask the original
  creator before reusing a video, and check a skill's repo licence before
  installing it in client work.

Checked on 2026-10-11.

## How to use

1. Open [prompt-motion.com](https://prompt-motion.com/), sort by **Popular**,
   and filter by tag (for example Product UI or Kinetic type).
2. Open an entry that matches your goal. Watch the video and note the model,
   effort and stack listed beside it.
3. Copy the prompt, or press **Customize** to add your purpose, format and
   colours. For a skill entry, run the install commands shown on the page in
   Claude Code.
4. Give the prompt to your coding agent. Swap the subject, brand and copy, but
   keep the structure on the first run.
5. Compare the result with the original video. Adjust shots, length and pacing,
   then run again.

## Examples

- [Claude motion designer showreel](https://prompt-motion.com/stephanlivera-df17a2)
  — the one-line showreel prompt that many other entries reuse.
- [The showreel prompt template](https://prompt-motion.com/templates/showreel) —
  the site's rewrite with direction, a beat structure, a banned-effects list and
  a deterministic HTML render setup; a good model for your own prompts.
- [Reddit marketing tool launch video](https://prompt-motion.com/anthonyriera-9b1b2a)
  — a skill entry: a Claude Code plugin that builds a launch video in Remotion
  from your real components.
- [Remotion vs HyperFrames vs plain HTML](https://prompt-motion.com/blog/remotion-vs-hyperframes)
  — how 56 collected videos were rendered, and when to pick each approach.
- [Why AI motion graphics look AI-made](https://prompt-motion.com/blog/make-ai-motion-graphics-look-less-ai)
  — prompt lines that remove glows, particle bursts and other tells.

## When to use it

- Use it when you want an agent to make a launch, promo or explainer video and
  need a proven prompt to start from.
- Use it to learn how to direct motion in a prompt: structure, timing, banned
  effects.
- Skip it when you need a motion library for UI in the product itself. Use
  [Motion](../motion/motion.md) or [GSAP](../motion/gsap.md).
- Skip it when you need the render pipeline, not the prompt. Use
  [Remotion](../video-capture/remotion.md) or
  [HyperFrames](../agents-mcp/hyperframes.md).

## Agent notes

- No API, MCP server or llms.txt (`/llms.txt` returned 404 on 2026-10-11). A
  sitemap is at `https://prompt-motion.com/sitemap.xml`.
- Entry pages are server-rendered HTML; the prompt text is readable without
  JavaScript.
- Prompts target Claude Opus 5.5. Results vary between runs; entries list
  "One-shot" or "Many rounds" under Iterations.
- Skill entries show Claude Code commands such as
  `/plugin marketplace add <owner>/<repo>`. Read the linked repo before you
  install.
- Videos belong to their creators. Do not download or commit them to this repo.

## Alternatives in this repo

- [Remotion](../video-capture/remotion.md) — the React video framework many
  entries render with.
- [HyperFrames](../agents-mcp/hyperframes.md) — another render route compared on
  the site's blog.
- [Theatre.js](../motion/theatre-js.md) — hand-authored timeline animation
  instead of prompting.

## Sources

- [Official site](https://prompt-motion.com/) — checked 2026-10-11
- [Customize](https://prompt-motion.com/customize) — checked 2026-10-11
- [Templates](https://prompt-motion.com/templates) — checked 2026-10-11
- [Blog](https://prompt-motion.com/blog) — checked 2026-10-11
- [Sitemap](https://prompt-motion.com/sitemap.xml) — checked 2026-10-11
