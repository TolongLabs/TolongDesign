---
name: design.dev
slug: design-dev
section: Interface Design
section_slug: interface-design
source_url: 'https://design.dev/'
designeer_url: 'https://designeer.xyz/'
designeer_blurb: AI-assisted design token and system editor.
paywall: free
pricing_summary:
  'The public design utilities and prompt resources reviewed are free to use; no
  paid plan was published.'
open_source: false
license: proprietary
category_tags: [design-systems, tokens, ai, css, prompts]
best_for: [design-token drafts, design documentation, agent prompts]
stack: ['css']
execution_mode: browser-app
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# design.dev

> AI-assisted design token and system editor. The current site offers generators
> and resources for turning visual choices into reusable inputs.

## At a glance

| Field          | Value                                                                       |
| -------------- | --------------------------------------------------------------------------- |
| Source         | [design.dev](https://design.dev/)                                           |
| Paywall        | **Free** — the reviewed generators are publicly available.                  |
| Open source    | No software license was published for the hosted tools.                     |
| Type           | Design-system utilities, AI resources, and prompt library.                  |
| Works with     | Browser tools; exports include design-system and CSS artifacts.             |
| Best for       | Drafting tokens, design documentation, and structured prompts.              |
| Agent-friendly | Yes — generated design references and prompts can be copied into a project. |

## What it is

design.dev is a collection of design and AI resources. The current site includes
a DESIGN.md generator, design-token generator, prompts, and CSS utilities. The
generator pages let a user start from a visual or written direction and produce
a reusable design artifact.

This is broader than a dedicated design-token editor. Treat generated tokens and
system documentation as drafts: map them to the project's existing naming
conventions, test contrast, and decide how they will stay synchronized with the
implementation.

## Paywall and pricing

- **Free:** The reviewed generators and prompt pages are publicly accessible.
- **Paid:** Not published on the pages reviewed.
- **Sign-up required?** The generator pages describe browser-side tools; no
  sign-in requirement was shown for using the reviewed utilities.
- **Licence for client work:** No software license for the hosted tools was
  found. The site describes generated outputs as usable artifacts, but check the
  terms and any external model or asset constraints before reuse.

Access checked 2026-10-07.

## How to use

1. Choose the DESIGN.md or token generator that matches the project's output
   need.
2. Provide the brand and interface context: audience, product type, visual
   references, and any existing colors or typography.
3. Inspect the generated values for consistency and contrast. Remove tokens that
   do not map to actual component or layout decisions.
4. Export or copy the result into the project and adapt the names to its
   conventions. Keep the design document and CSS variables aligned.
5. The site also points to `npx @google/design.md lint DESIGN.md` for linting
   DESIGN.md files; verify that tool's current usage before running it.

## Examples

- [DESIGN.md Generator](https://design.dev/ai/design-md-generator/) — create
  design-system documentation and related CSS artifacts.
- [Design Tokens Generator](https://design.dev/ai/design-tokens-generator/) —
  draft a token set for colors, typography, and related design choices.
- [Realtime data chart prompt](https://design.dev/ai/prompts/realtime-data-chart/)
  — inspect a prompt resource for a data-heavy interface.
- [design.dev homepage](https://design.dev/) — browse the broader set of design
  and development resources.

## When to use it

- Use it to get a structured first draft of a design system or a prompt for a
  specific UI problem.
- Use it when the team can review and reconcile generated output with its
  existing code tokens.
- Skip it if a mature design system already has a reliable source of truth and
  generation would create a parallel token vocabulary.

## Agent notes

- The generator pages are usable directly in a browser; no official MCP server
  or package for the generators was verified.
- Generated files and prompts can be supplied as context to a coding agent.
- Treat token output as provisional. Agents should check naming collisions,
  contrast, units, and framework conventions before editing project files.
- If using the referenced linter, inspect its official instructions and confirm
  its package identity before execution.

## Alternatives in this repo

- [Figma](../interface-design/figma.md) — collaborative visual design source
  with variables and developer handoff.
- [Penpot](../interface-design/penpot.md) — open-source design workspace with
  components and shared libraries.
- [UI Playbook](../interface-design/ui-playbook.md) — component-state guidance
  to complement a token set.

## Sources

- [Official site](https://design.dev/) — checked 2026-10-07
- [DESIGN.md Generator](https://design.dev/ai/design-md-generator/) — checked
  2026-10-07
- [Design Tokens Generator](https://design.dev/ai/design-tokens-generator/) —
  checked 2026-10-07
- [Realtime data chart prompt](https://design.dev/ai/prompts/realtime-data-chart/)
  — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/) — checked 2026-10-07
