---
name: add-tool-doc
description:
  Use when adding a new design tool to TolongDesign, refreshing an existing tool
  doc (pricing changed, site moved), or fixing a doc that fails `bun run check`.
metadata:
  audience: maintainer
---

# Add Or Refresh A Tool Doc

## Add

1. Choose an existing section and a unique lowercase-hyphen slug. The path
   `catalogue/tools/<section_slug>/<slug>.md` sets the tool identity. Use the
   display name for that section from `src/core/sections.ts`.
2. Copy [catalogue/TEMPLATE.md](../../catalogue/TEMPLATE.md) to that path and
   fill every section from the **official site** — pricing page, docs, GitHub,
   showcase. Never invent URLs, prices or install commands. "How to use" and
   "Agent notes" must let an agent produce what the tool advertises: for apps,
   run the core workflow yourself (a headless browser for web apps) and document
   the steps, inputs and exports that worked.
3. Copy `designeer_url` and `designeer_blurb` from the Designeer listing. For a
   tool without a listing, use its official URL and a concise description
   supported by the official source.
4. Run `bun run index && bun run check`.

## Refresh

1. Re-open the source URL and pricing page.
2. Update the changed facts, `last_verified`, and the "checked" dates in
   Sources. If paywall changed, update `paywall` and `pricing_summary`.
3. `bun run index && bun run check`.

## Common check failures

| Error                      | Fix                                                 |
| -------------------------- | --------------------------------------------------- |
| `frontmatter missing "x"`  | Add the key; order must match the template          |
| `paywall "..." not in ...` | Use exactly `free`, `freemium`, `paid` or `unknown` |
| `missing "## Heading"`     | Restore the heading text exactly as in the template |
| `broken link ../x/y.md`    | Link only docs that exist under `catalogue/tools/`  |
