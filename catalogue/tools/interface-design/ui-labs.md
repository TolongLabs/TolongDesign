---
name: UI Labs
slug: ui-labs
section: Interface Design
section_slug: interface-design
source_url: 'https://www.uilabs.dev/'
designeer_url: 'https://designeer.xyz/'
designeer_blurb: Laboratory deconstructing animated UI components.
paywall: free
pricing_summary:
  'The interactive component experiments are free to browse; no paid plan was
  published.'
open_source: false
license: unknown
category_tags: [ui, interaction, experiments, react, animation]
best_for: [component behavior study, interaction inspiration]
stack: ['react', 'tailwind', 'motion', 'radix']
execution_mode: reference
surface: ['reference']
status: active
agent_friendly: false
last_verified: 2026-10-07
---

# UI Labs

> Laboratory deconstructing animated UI components. Use its live experiments to
> study interaction behavior before designing a project-specific version.

## At a glance

| Field          | Value                                                                 |
| -------------- | --------------------------------------------------------------------- |
| Source         | [uilabs.dev](https://www.uilabs.dev/)                                 |
| Paywall        | **Free** — experiments are publicly viewable; no paid tier was found. |
| Open source    | No source license was published on the reviewed page.                 |
| Type           | Interactive UI experiment gallery.                                    |
| Works with     | Browser-based demos; listed technologies include React and Tailwind.  |
| Best for       | Inspecting animated component behavior and states.                    |
| Agent-friendly | No official package, CLI, or source API was verified.                 |

## What it is

UI Labs is a browser gallery of interactive interface experiments by Mariana
Castilho. The page lists examples such as Two-Step Popover, Action Toolbar,
Dynamic Settings, Contextual Toolbar, Calendar Widget, and an iOS-style
Parameters slider.

The site is a visual lab, not a maintained general-purpose component library.
Some experiments identify technologies such as React, Tailwind, Framer Motion,
or Radix UI. Inspect the behavior and decide what to reimplement; do not assume
that a demo is a supported dependency or licensed source package.

## Paywall and pricing

- **Free:** The public gallery and interactive demos can be browsed without a
  paid plan. No purchase flow or paid tier was published on the page reviewed.
- **Paid:** Not published.
- **Sign-up required?** No account requirement was shown for viewing the public
  experiments.
- **Licence for client work:** No explicit license for copying demo source,
  visuals, or assets was published. Treat the page as a reference unless the
  creator provides separate permission.

Pricing and access checked 2026-10-07.

## How to use

1. Open the gallery and scan the experiment names and technology tags for a
   pattern related to the project.
2. Interact with the demo using pointer, keyboard, and different viewport sizes
   where supported. Record the trigger, transition, feedback, and exit.
3. Note which parts are essential behavior and which are visual treatment. Write
   down empty, focused, active, loading, and error states if relevant.
4. Turn the observation into a short design brief with intended user, task,
   accessibility requirements, and implementation constraints.
5. Rebuild the behavior using the project's established component system; verify
   any license before copying code or assets.

## Examples

- [UI Labs experiments](https://www.uilabs.dev/) — browse the full set of
  interactive studies and compare their motion treatments.
- [Two-Step Popover](https://www.uilabs.dev/) — study a staged popover
  interaction and how one action reveals the next choice.
- [Action Toolbar](https://www.uilabs.dev/) — inspect a contextual toolbar
  pattern and its action grouping.
- [Calendar Widget](https://www.uilabs.dev/) — observe date selection and
  feedback in a compact widget.

The named experiments appear on the same gallery page; separate public routes
were not verified.

## When to use it

- Use it to gather interaction references for a menu, toolbar, popover, or other
  stateful component.
- Use a production component library when support, accessibility guarantees,
  maintenance, and a clear license matter more than a visual reference.
- Skip any treatment that adds motion without helping users understand the
  result of an action.

## Agent notes

- No npm package, CLI, MCP endpoint, or downloadable component set was verified.
- The visible technology tags can guide a reimplementation, but do not prove the
  demo's source code or dependency versions.
- Do not infer a license from the fact that a demo is publicly accessible.
- When recreating an interaction, specify keyboard behavior, focus return,
  reduced-motion behavior, and dismissal rules explicitly.

## Alternatives in this repo

- [UI Playbook](../interface-design/ui-playbook.md) — documented component
  states and implementation guidance.
- [UIWTF](../interface-design/uiwtf.md) — experimental web patterns with
  source-copy affordances on some examples.
- [Lab01](../interface-design/lab01.md) — a studio's set of visual UI
  experiments.

## Sources

- [Official UI Labs gallery](https://www.uilabs.dev/) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/) — checked 2026-10-07
