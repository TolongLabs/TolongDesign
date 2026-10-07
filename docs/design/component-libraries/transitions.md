---
name: 'Transitions'
slug: transitions
section: 'Component Libraries'
section_slug: component-libraries
source_url: 'https://transitions.dev/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Curated CSS transition recipes and easings.'
paywall: freemium
pricing_summary:
  'The free core is MIT; Pro is $9 per month or $149 lifetime, and Business is
  $59 per month for five seats.'
open_source: true
license: 'MIT'
category_tags: [css, motion, transitions, react]
best_for: [interface motion, micro-interactions]
stack: [css, react, typescript]
agent_friendly: true
last_verified: 2026-10-07
---

# Transitions

> Curated CSS transition recipes and easings. Yes — CLI, coding-agent skill, and
> motion review agent.

## At a glance

| Field          | Value                                                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Source         | [transitions.dev](https://transitions.dev/)                                                                              |
| Paywall        | **Freemium** — The free core is MIT; Pro is $9 per month or $149 lifetime, and Business is $59 per month for five seats. |
| Open source    | Yes — MIT ([project source](https://transitions.dev/pro.html)).                                                          |
| Type           | Curated motion recipe library, skill, and agent                                                                          |
| Works with     | CSS, React, and TypeScript across common web stacks                                                                      |
| Best for       | interface motion, micro-interactions                                                                                     |
| Agent-friendly | Yes — Yes — CLI, coding-agent skill, and motion review agent                                                             |

## What it is

Transitions is a curated library of UI motion recipes that can be copied as CSS
or React snippets. The current site also offers a coding-agent skill and a local
agent that audits and fixes motion.

The free library covers core transitions and exposes snippets without an
account. Pro adds a larger library with React and TypeScript variants; Business
adds a hosted agent, pull-request fixes, and team licensing.

The pricing page lists 43+ transitions. Free core transitions are MIT-licensed;
commercial use for the Pro library is covered by the paid plan.

## Paywall and pricing

- **Free:** Core transitions, a free skill, and free agent motion scans. The
  free agent includes 10 hosted polish fixes per month for personal use.
- **Paid:** Pro is $9/month or $149 lifetime for one seat. Business is $59/month
  for five seats, plus $9/month for each extra seat.
- **Sign-up required?** Free copy and skill work without payment. Pro recipes
  require account confirmation.
- **Licence for client work:** The free core is MIT. Pro includes commercial use
  for unlimited projects; Business covers the team.

Pricing and access were checked on 2026-10-07.

## How to use

1. Open a transition page and inspect its live preview plus CSS or React
   variant.

2. Copy the snippet directly, or install the free recipe set into the project
   with the CLI.

3. For coding-agent use, install the free skill and ask for a named recipe. Pro
   recipes require a Pro plan.

4. Run the local agent to scan for abrupt or broad transitions; review each
   proposed diff before applying it.

Official setup or install command:

```bash
npx transitions-dev add --free
```

Minimal CSS from the Tabs Sliding recipe:

```css
.t-tabs-pill {
  transition:
    transform var(--tabs-dur) var(--tabs-ease),
    width var(--tabs-dur) var(--tabs-ease);
}

@media (prefers-reduced-motion: reduce) {
  .t-tabs-pill,
  .t-tab {
    transition: none !important;
  }
}
```

## Examples

- [Tabs Sliding](https://transitions.dev/detail.html?t=tabs-sliding) — A sliding
  active-tab indicator with React implementation.
- [Tooltip Open/Close](https://transitions.dev/detail.html?t=tooltip-open-close)
  — A tooltip transition with CSS and self-contained React code.
- [Thinking States](https://transitions.dev/detail.html?t=thinking-states) — A
  rotating status line with reduced-motion rules.
- [Pro plans](https://transitions.dev/pro.html) — Current free, Pro, and
  Business features and prices.

## When to use it

- Use it when a product needs consistent transition timing and easing, or an
  agent should audit motion in an existing codebase.
- Skip it when the interaction needs a custom animation system or a full
  designed component rather than a transition recipe; compare
  [Motion Primitives](../component-libraries/motion-primitives.md).

## Agent notes

- The free skill is installable with npx skills add
  Jakubantalik/transitions.dev.
- The CLI has free and Pro modes; a Pro login is needed for paid recipes.
- The local agent command is npx transitions-agent; scans can run without
  sending source code off the machine.
- Respect reduced motion and keep recipe tokens consistent across the site.

## Alternatives in this repo

- [Motion Primitives](../component-libraries/motion-primitives.md) — React
  components built around motion.
- [Animate UI](../component-libraries/animate-ui.md) — Animated UI components
  and patterns.
- [Fancy Components](../component-libraries/fancy-components.md) — A collection
  of polished component effects.

## Sources

- [Transitions home](https://transitions.dev/) — checked 2026-10-07
- [Introduction and CLI docs](https://transitions.dev/detail.html?doc=introduction)
  — checked 2026-10-07
- [Tabs Sliding](https://transitions.dev/detail.html?t=tabs-sliding) — checked
  2026-10-07
- [Tooltip Open/Close](https://transitions.dev/detail.html?t=tooltip-open-close)
  — checked 2026-10-07
- [Pro pricing](https://transitions.dev/pro.html) — checked 2026-10-07
- [Skill page](https://transitions.dev/skill.html) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
