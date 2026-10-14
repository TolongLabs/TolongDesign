# Work order: write TolongDesign tool docs

You are writing reference docs for **TolongDesign**, the private design starting
point for TolongLabs developers and their coding agents. Every doc covers one
tool/resource, usually one listed on Designeer (https://designeer.xyz). Readers
are developers, designers and AI coding agents choosing what to use on a
website, product UI, 3D scene, comic or other design work, so the docs must be
accurate, concrete and scannable. An agent reading a doc must be able to produce
what the tool advertises.

## Your assignment

Your batch is listed in `BATCH_FILE` (path given at the bottom). It is a JSON
array; each entry has `name`, `url` (the official source URL), `description`
(Designeer's one-liner), `section`, `section_slug`, `slug`, `designeer_url`, and
`doc` (the repo-relative path you must write).

Write **exactly one Markdown file per entry, at the entry's `doc` path inside
the repository root `REPO_ROOT`, and nothing else.** Do not create, edit or
delete any other file. Do not run `git`. Do not install packages. Create the
section directory if it is missing.

## Research — required for every entry

1. Open the official `url` and read it. Then open its pricing page, docs/getting
   started page, GitHub repo (if any) and showcase/examples page as needed. Use
   web search when the site is a JS app that will not render, or when pricing is
   not on the homepage.
2. Determine the **paywall** from the official site, never from memory alone:
   - `free` — everything is free to use (includes open-source libraries, free
     blogs/books online, free galleries without a paid tier).
   - `freemium` — usable free tier plus a paid tier / pro plan / paid assets.
   - `paid` — nothing meaningful without paying (trial-only counts as paid).
   - `unknown` — only if you genuinely cannot determine it; explain why in the
     Paywall section.
3. Collect at least three concrete example links (showcase entries, demo pages,
   component pages, templates, articles, chapters). Every URL you write must be
   one you saw on the site or in search results. **Never invent URLs, prices,
   counts, package names or install commands.** If unsure, leave it out or say
   "not published".
4. If a site is down, parked, or has changed product, say so plainly in "What it
   is" and set `paywall: unknown` unless pricing is still determinable.

## Output format — follow `TEMPLATE_FILE` exactly

Read the template at `TEMPLATE_FILE` and mirror it: same YAML frontmatter keys
in the same order, same H2 headings in the same order:

`## At a glance`, `## What it is`, `## Paywall and pricing`, `## How to use`,
`## Examples`, `## When to use it`, `## Agent notes`,
`## Alternatives in this repo`, `## Sources`.

Frontmatter rules:

- `name`, `slug`, `section`, `section_slug`, `source_url`, `designeer_url`,
  `designeer_blurb` — copy from the batch entry verbatim (`source_url` = `url`,
  `designeer_blurb` = `description`). Quote any value containing `:` or `#`.
- `paywall` — one of `free | freemium | paid | unknown`.
- `pricing_summary` — one sentence, quoted, with real prices if published.
- `open_source` — `true` / `false`; `license` — SPDX id, `proprietary`, or
  `unknown`.
- `category_tags`, `best_for`, `stack` — short lowercase YAML flow lists
  (`[react, tailwind]`). `stack` is `[]` when not code.
- `agent_friendly` — `true` if a coding agent can use it directly (copy-paste
  code, CLI, npm package, MCP server, llms.txt, public API); else `false`.
- `last_verified: 2026-10-07`.

Body rules:

- H1 is the tool name. Then the blockquote one-liner.
- "How to use" must be specific to this tool. For code libraries include the
  real install command (prefer `bun add` / `bunx` equivalents of npm commands)
  and a minimal snippet from the official docs. For galleries: how to browse,
  filter and turn findings into a design brief for a TolongLabs project. For
  apps: the core workflow you ran yourself, inputs, export formats and how an
  agent drives it.
- "Alternatives in this repo": link 1–3 sibling tools using relative paths of
  the form `../<section_slug>/<slug>.md`. Pick siblings from the full catalogue
  at `CATALOGUE_FILE` (its `tools[].doc` field gives every valid path; strip the
  leading `docs/design/` and prefix `../`). Only link paths that exist in the
  catalogue.
- "Sources": every page you actually used, each with "checked 2026-10-07", plus
  the Designeer listing.
- Plain, precise English. No marketing fluff, no emoji. Wrap prose at ~80
  columns. Length: 80–200 lines per doc.
- Never mention local machine paths in the docs.

## Finish

When all files are written, print a short report: one line per entry with
`slug | paywall | lines`, then any entries you could not verify and why.

---
