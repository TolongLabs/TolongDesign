---
name: Wakamai Fondue
slug: wakamai-fondue
section: Type
section_slug: type
source_url: 'https://wakamaifondue.com/'
designeer_url: 'https://designeer.xyz/visuals'
designeer_blurb: Tool inspecting font files and features.
paywall: free
pricing_summary:
  'The browser-based font inspection tool is free; its engine is Apache-2.0, and
  the separate CLI repository is archived.'
open_source: true
license: Apache-2.0
category_tags: [fonts, typography, variable-fonts, open-type, inspection]
best_for: [font feature inspection, variable axis review, specimen diagnostics]
stack: []
agent_friendly: false
last_verified: 2026-10-07
---

# Wakamai Fondue

> Tool inspecting font files and features. Drop a font into the browser tool to
> see its OpenType features and variable-font capabilities.

## At a glance

| Field          | Value                                                               |
| -------------- | ------------------------------------------------------------------- |
| Source         | [wakamaifondue.com](https://wakamaifondue.com/)                     |
| Paywall        | **Free** — browser font inspection is publicly available.           |
| Open source    | Yes — the Fondue engine repository is Apache-2.0.                   |
| Type           | Font file inspector and feature visualization tool.                 |
| Works with     | Browser upload of local font files; separate CLI repository exists. |
| Best for       | Checking OpenType features, axes, and character coverage.           |
| Agent-friendly | No — the main tool is an interactive browser upload workflow.       |

## What it is

Wakamai Fondue is a web tool for inspecting a font file. Uploading a font
reveals its available features, axes, and metadata, helping a designer or
developer understand what a typeface can do before implementing it.

The Fondue engine is open source under Apache-2.0. The separate CLI repository
was archived on 2026-05-06, so treat that command-line project as archived
software rather than a currently maintained integration. The browser tool is the
straightforward way to use the current public service.

## Paywall and pricing

- **Free:** The browser inspector can be used without a paid plan.
- **Paid:** Not published.
- **Sign-up required?** No account was shown for the browser upload workflow.
- **Licence for client work:** The inspector's Apache-2.0 engine license does
  not grant rights to the font you upload. Follow the font's own license.

Access checked 2026-10-07.

## How to use

1. Obtain a font file that you are permitted to inspect and upload.
2. Open Wakamai Fondue and drop the font file into the upload area.
3. Review the resulting feature list, variable axes, naming data, and character
   coverage. Note which features are actually present in the file.
4. Use the findings to choose CSS settings or explain the font's capabilities to
   a designer. Test those settings in the real browser and target content.
5. Keep uploaded client font files private and follow any restrictions in the
   font license. Do not assume the inspector changes the license.

## Examples

- [Fondue inspector](https://wakamaifondue.com/) — the page includes a sample
  titled “NaN Success Titling” and accepts a local font file.
- [Inter specimen](https://fontsource.org/fonts/inter) — a font family page that
  can guide selection of a file to inspect in Fondue.
- [Roboto specimen](https://fontsource.org/fonts/roboto) — another family page
  whose package files can be inspected locally.
- [Roboto Serif specimen](https://fontsource.org/fonts/roboto-serif/about) —
  inspect a serif family file to compare its metadata and features.

The font specimen links are example inputs to Fondue, not saved Fondue reports.

## When to use it

- Use it when choosing between font files or checking whether a variable font
  exposes the axes and OpenType features expected by the design.
- Use it before building CSS that depends on alternate glyphs, ligatures, or a
  particular axis.
- Skip it when a specimen and package metadata already answer the question or
  when a font cannot be uploaded under its license.

## Agent notes

- The browser tool does not expose a verified public API or MCP endpoint.
- The official engine repository is Apache-2.0; the separate CLI repository is
  archived and should not be assumed maintained.
- No install command is documented here because the browser app is the active
  user-facing workflow and the CLI is archived.
- Treat uploaded font files as potentially licensed or confidential assets. Do
  not upload a client file unless the project permits it.

## Alternatives in this repo

- [Fontsource](../type/fontsource.md) — inspect font catalog entries and install
  open-source fonts through npm packages.
- [Fontshare](../type/fontshare.md) — find free-to-use families and inspect
  their specimens.
- [Utopia](../type/utopia.md) — generate fluid type scales rather than inspect
  font file internals.

## Sources

- [Wakamai Fondue](https://wakamaifondue.com/) — checked 2026-10-07
- [Wakamai Fondue GitHub organization](https://github.com/Wakamai-Fondue) —
  checked 2026-10-07
- [Fondue engine repository](https://github.com/Wakamai-Fondue/wakamai-fondue-engine)
  — checked 2026-10-07
- [Fondue CLI repository](https://github.com/Wakamai-Fondue/wakamai-fondue-cli)
  — checked 2026-10-07
- [Inter specimen](https://fontsource.org/fonts/inter) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals) — checked 2026-10-07
