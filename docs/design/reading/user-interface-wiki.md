---
name: User Interface Wiki
slug: user-interface-wiki
section: Reading
section_slug: reading
source_url: 'https://userinterface.wiki/'
designeer_url: 'https://designeer.xyz/'
designeer_blurb: 'Knowledge base documenting interface guidelines and rules.'
paywall: free
pricing_summary:
  'Completely free open-source manual and AI agent skill repository on GitHub.'
open_source: true
license: unknown
category_tags:
  [knowledge-base, design-rules, agent-skills, motion, typography, open-source]
best_for:
  [
    enforcing interface craft rules in ai coding agents,
    motion design guidelines,
    micro-interactions
  ]
stack: [react, nextjs, motion]
agent_friendly: true
last_verified: 2026-10-07
---

# User Interface Wiki

> Knowledge base documenting interface guidelines and rules. TolongLabs
> developers and AI coding agents use User Interface Wiki for battle-tested
> interface engineering principles and machine-installable craft rules.

## At a glance

| Field          | Value                                                         |
| -------------- | ------------------------------------------------------------- |
| Source         | [userinterface.wiki](https://userinterface.wiki/)             |
| Paywall        | **Free** — open-source knowledge base without paid tiers      |
| Open source    | Yes — public repository on GitHub                             |
| Type           | Interface engineering knowledge base & agent skills           |
| Works with     | React, Next.js, Motion, Base UI, Cursor, Claude Code          |
| Best for       | Micro-interaction craft, motion curves, AI coding agent rules |
| Agent-friendly | Yes — provides CLI agent skill (`npx skills add ...`)         |

## What it is

User Interface Wiki is a curated, open-source living manual for interface design
and interaction engineering created by Raphael Salaja. Built with Fumadocs,
Next.js, and Base UI, the project documents nuanced frontend craft practices
ranging from motion dynamics and modern CSS pseudo-elements to sound design and
accessible interaction states.

In addition to interactive long-form technical guides, the project distills its
interface guidelines into an executable agent skill repository. These 152
structured design rules can be directly ingested by AI coding agents (such as
Cursor, Claude Code, and Codex) to enforce high standards of design execution
during frontend development.

Articles feature code snippets, live playgrounds, and audio voiceovers
transcribed via ElevenLabs, bridging the gap between theoretical visual design
and practical React/CSS component implementation.

## Paywall and pricing

- **Free:** The entire knowledge base, interactive demos, and GitHub codebase
  are completely free to read and use without requiring an account.
- **Paid:** None. There are no premium tiers, paywalled articles, or paid
  memberships.
- **Sign-up required?** No. All articles and skill configurations are publicly
  accessible.
- **Licence for client work:** The repository is public on GitHub, allowing
  developers to adopt the documented techniques, code patterns, and agent rules
  in commercial client projects.

Verified on the official User Interface Wiki website and repository on
2026-10-07.

## How to use

1. Browse motion and interaction articles on `userinterface.wiki` when
   implementing complex animations or state transitions.
2. Install the 152 interface guidelines into your AI coding assistant workspace:
   ```bash
   npx skills add raphaelsalaja/userinterface-wiki
   ```
3. Apply recommended animation curves: follow the guidance in "To Spring or Not
   To Spring" to select appropriate physics parameters for Motion components:
   ```tsx
   import { motion } from 'motion/react'

   export function DialogCard() {
     return (
       <motion.div
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0, scale: 0.95 }}
         transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
       >
         Interactive content
       </motion.div>
     )
   }
   ```
4. Audit interface transitions against documented anti-patterns before merging
   pull requests.

## Examples

- [Skill Installation Page](https://www.userinterface.wiki/skill) — Guide and
  CLI command for installing 152 machine-readable interface craft rules for AI
  agents.
- [Mastering Animate Presence](https://www.userinterface.wiki/mastering-animate-presence)
  — In-depth guide covering exit control, directional animations, and nested
  exits in Motion.
- [To Spring or Not To Spring](https://www.userinterface.wiki/to-spring-or-not-to-spring)
  — Practical decision framework comparing cubic-bezier easing curves with
  spring physics.
- [Morphing Icons](https://www.userinterface.wiki/morphing-icons) — Technique
  for animating SVG paths into new geometries instead of standard crossfades.

## When to use it

- Use it when configuring AI coding agents (Cursor, Claude Code) on new web
  projects to prevent common frontend UI mistakes.
- Use it when designing polished micro-interactions and transitions in React
  projects utilizing Motion and Tailwind CSS.
- Skip it if you need high-level cognitive psychology heuristics; use
  [Laws of UX](../reading/laws-of-ux.md) instead.
- Skip it if you need pre-built, ready-to-copy UI components; use component
  libraries instead.

## Agent notes

- Agent-friendly: Highly optimized for AI coding assistants. Exposes 152
  codified interface rules installable via
  `npx skills add raphaelsalaja/userinterface-wiki`.
- Code snippets and patterns are written for modern React 19, Motion
  (`motion/react`), and Next.js App Router.
- Recommended source of truth for motion timing (prefer spring animations with
  zero bounce for enterprise UIs, subtle spring physics for consumer apps).

## Alternatives in this repo

- [UI Skills](../reading/ui-skills.md) — Interactive exercises and tactical
  drills for mastering visual interface layout and spacing.
- [Laws of UX](../reading/laws-of-ux.md) — Cognitive psychology principles and
  heuristic laws governing user interface usability.
- [Codrops](../reading/codrops.md) — Creative frontend interaction experiments,
  WebGL demos, and web animation tutorials.

## Sources

- [Official site](https://www.userinterface.wiki/) — checked 2026-10-07
- [Skill docs](https://www.userinterface.wiki/skill) — checked 2026-10-07
- [GitHub repository](https://github.com/raphaelsalaja/userinterface-wiki) —
  checked 2026-10-07
- [Designeer listing](https://designeer.xyz/)
