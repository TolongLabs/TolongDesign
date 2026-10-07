---
name: UI Playbook
slug: ui-playbook
section: Interface Design
section_slug: interface-design
source_url: 'https://uiplaybook.dev/'
designeer_url: 'https://designeer.xyz/'
designeer_blurb: Guide to common UI component states.
paywall: free
pricing_summary:
  'The component guides are free to browse; no paid plan was published.'
open_source: false
license: unknown
category_tags: [ui, accessibility, components, interaction, guides]
best_for: [component state checklists, frontend implementation guidance]
stack: [html, react]
agent_friendly: false
last_verified: 2026-10-07
---

# UI Playbook

> Guide to common UI component states. Use it as a practical checklist when
> specifying or implementing familiar controls.

## At a glance

| Field          | Value                                                                            |
| -------------- | -------------------------------------------------------------------------------- |
| Source         | [uiplaybook.dev](https://uiplaybook.dev/)                                        |
| Paywall        | **Free** — public component guides; no paid tier found.                          |
| Open source    | No source license was published for the site.                                    |
| Type           | Component-state reference and implementation guide.                              |
| Works with     | Framework-agnostic guidance with examples from web UI libraries.                 |
| Best for       | Checking component states, accessibility, and interaction details.               |
| Agent-friendly | No package or direct agent endpoint was verified; pages are readable references. |

## What it is

UI Playbook is a small guide to common interface components and their states.
The homepage lists ten documented components and provides search. Individual
guides cover component behavior and implementation details rather than providing
one installable component library.

The guidance is useful during design and code review because it prompts teams to
consider more than the default appearance. Check each pattern against the
project's accessibility needs and actual browser support before adopting it.

## Paywall and pricing

- **Free:** The listed component guides are publicly available.
- **Paid:** Not published.
- **Sign-up required?** No account was needed to read the reviewed guides.
- **Licence for client work:** The guides are reference material. A separate
  license for copying site text or example code was not published.

Access checked 2026-10-07.

## How to use

1. Search the guide index for the component in the design or implementation
   task.
2. Read the component's guidance and turn relevant states into acceptance
   criteria: default, hover, focus, disabled, loading, error, or selected.
3. Check the implementation advice against the project's browser and
   accessibility requirements. Prefer native HTML semantics where appropriate.
4. Add missing states to the design file and implement them in the project's
   existing component system.
5. Test keyboard operation, screen-reader naming, focus visibility, and
   responsive behavior instead of treating the guide as an automated audit.

## Examples

- [Tooltip guide](https://uiplaybook.dev/play/tooltip) — covers timing,
  positioning, and the disabled-trigger limitation.
- [Button guide](https://uiplaybook.dev/play/button) — recommends semantic
  buttons, focus visibility, and states such as loading and disabled.
- [Select guide](https://uiplaybook.dev/play/select) — compare a custom select
  pattern with the needs of the product.
- [Notification guide](https://uiplaybook.dev/play/notification) — inspect
  guidance for user feedback messages.

## When to use it

- Use it when specifying a component and you want to identify important states
  before implementation.
- Use it during a review to ask whether keyboard and focus behavior match the
  design.
- Skip it as the sole source for a complex widget; consult the chosen library's
  current documentation and accessibility guidance too.

## Agent notes

- There is no npm package or install command associated with the guide.
- A coding agent can use the public pages as reference if supplied with the
  relevant component URL.
- Do not copy a custom widget blindly. Prefer native controls when they meet the
  need and preserve visible focus states.
- The Tooltip guide notes that disabled elements may not receive pointer events;
  plan a separate accessible explanation if a tooltip is required.

## Alternatives in this repo

- [UI Labs](../interface-design/ui-labs.md) — live interaction experiments for
  studying component behavior.
- [UIWTF](../interface-design/uiwtf.md) — experimental pattern demos.
- [Figma](../interface-design/figma.md) — design and prototype the states before
  implementing them.

## Sources

- [Official site](https://uiplaybook.dev/) — checked 2026-10-07
- [Tooltip guide](https://uiplaybook.dev/play/tooltip) — checked 2026-10-07
- [Button guide](https://uiplaybook.dev/play/button) — checked 2026-10-07
- [Select guide](https://uiplaybook.dev/play/select) — checked 2026-10-07
- [Notification guide](https://uiplaybook.dev/play/notification) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/) — checked 2026-10-07
