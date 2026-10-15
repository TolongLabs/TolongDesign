---
name: Uiuno
slug: uiuno
section: Component Libraries
section_slug: component-libraries
source_url: https://uiuno.com/
designeer_url: https://designeer.xyz/components
designeer_blurb: 'AI workspace for organizing shadcn components.'
paywall: unknown
pricing_summary:
  "Public component pages are accessible, but the workspace's complete pricing
  and access terms could not be confirmed."
open_source: false
license: unknown
category_tags: [shadcn, react, ai-workspace, community]
best_for: [discovering, forking, and organizing shadcn components]
stack: ['react', 'tailwind', 'shadcn']
execution_mode: browser-app
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Uiuno

> AI workspace for organizing shadcn components. Use it to browse and fork
> component examples, then bring selected source into a project.

## At a glance

| Field          | Value                                                        |
| -------------- | ------------------------------------------------------------ |
| Source         | [uiuno.com](https://uiuno.com/)                              |
| Paywall        | **Unknown** — pricing and account gates were not clear       |
| Open source    | The workspace is not published as an open-source project     |
| Licence        | Check each component; the workspace has no confirmed licence |
| Type           | shadcn component workspace and community catalogue           |
| Works with     | React, Tailwind CSS, shadcn/ui                               |
| Best for       | Discovering, previewing, and forking UI examples             |
| Agent-friendly | Yes — component source can be copied into an app             |

## What it is

Uiuno is a browser workspace for browsing, previewing, editing, and installing
shadcn components. On 2026-10-07, a headless browser rendered the root editor
with file, editor, preview, explore, and generate views, plus an Animated
Testimonials example and its source. Public Dither component pages show a Guest
view, a Free label, install controls, and item-level metadata; the entries
checked identify MIT as their license.

The `/pricing` route returned HTTP 404. Public item pages are accessible without
signing in, but that does not establish the workspace's full pricing or feature
gates. A component's license applies to that item, not to the entire Uiuno
service or every contribution.

## Paywall and pricing

- **Free:** Public components are marked Free and their pages can be viewed as a
  Guest.
- **Paid:** No plan or price is published; `/pricing` returned HTTP 404 on
  2026-10-07.
- **Sign-up required?** No account was needed to view public pages. Forking,
  editing, and other workspace actions may have separate requirements.
- **Licence for client work:** inspect each component's licence and author terms
  before copying it.
- **Checked:** 2026-10-07.

## How to use

1. Browse components through the root editor or the public
   [component explorer](https://uiuno.com/explore/components).
2. Open a component page and inspect its preview, source, install controls, and
   metadata.
3. Use the page's Install or copy-command control in the project, then adapt the
   code to the app's conventions.
4. Verify the specific item's license, dependencies, accessibility, and
   responsive behavior before using it in client work.

## Examples

- [Dither Avatar](https://uiuno.com/dither/dither-avatar) — public component
  page with preview and MIT metadata.
- [Dither Identicon](https://uiuno.com/dither/dither-identicon) — deterministic
  dither avatar component with code and MIT metadata.
- [PixelGrid Shader](https://uiuno.com/dither/pixel-grid-shader) — WebGL/shader
  component page with MIT metadata.
- [Animated Testimonials](https://uiuno.com/) — component shown in the root
  editor with its React example source.

## When to use it

- Use it to discover or compare community shadcn implementations.
- Use it when a coding agent needs a visible source example to adapt.
- Skip it when a project needs one consistent, verified licence across a whole
  library; consider [Ruru UI](../component-libraries/ruru-ui.md).

## Agent notes

The public pages expose component source and install controls for coding agents.
No universal CLI, MCP endpoint, or `llms.txt` was found. The pricing route
returned HTTP 404; check each item's license rather than inferring terms from
the workspace.

## Alternatives in this repo

- [Ruru UI](../component-libraries/ruru-ui.md) — an MIT-licensed React component
  library with a direct CLI.
- [Great UI](../component-libraries/great-ui.md) — documented copy-paste
  components with item-level licence notes.

## Sources

- [Official workspace](https://uiuno.com/) — checked 2026-10-07
- [Component explorer](https://uiuno.com/explore/components) — checked
  2026-10-07
- [Dither Identicon](https://uiuno.com/dither/dither-identicon) — checked
- [Dither Avatar](https://uiuno.com/dither/dither-avatar) — checked 2026-10-07
- [PixelGrid Shader](https://uiuno.com/dither/pixel-grid-shader) — checked
  2026-10-07
- [Pricing path](https://uiuno.com/pricing) — HTTP 404; checked 2026-10-07
  2026-10-07
- [Uiuno search result](https://uiuno.com/) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
