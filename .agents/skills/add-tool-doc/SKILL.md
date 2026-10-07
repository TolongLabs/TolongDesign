---
name: add-tool-doc
description: Use when adding a new design tool to TolongDesign, refreshing an existing tool doc (pricing changed, site moved), or fixing a doc that fails `bun run check`.
---

# Add Or Refresh A Tool Doc

## Add

1. Append an entry to `data/catalogue.json` `tools[]`: `name`, `url`,
   `description` (one line), `section` (an existing section name),
   `section_slug`, `slug` (lowercase-hyphen, unique in the section),
   `designeer_url` (or the official URL if not on Designeer), and
   `doc` = `docs/design/<section_slug>/<slug>.md`.
2. Copy [templates/tool-doc.md](../../../templates/tool-doc.md) to the `doc`
   path and fill every section from the **official site** — pricing page,
   docs, GitHub, showcase. Never invent URLs, prices or install commands.
3. `bun run index && bun run check && bun run format`.

## Refresh

1. Re-open the source URL and pricing page.
2. Update the changed facts, `last_verified`, and the "checked" dates in
   Sources. If paywall changed, update `paywall` and `pricing_summary`.
3. `bun run index && bun run check`.

## Common check failures

| Error                         | Fix                                                           |
| ----------------------------- | ------------------------------------------------------------- |
| `frontmatter missing "x"`     | Add the key; order must match the template                    |
| `paywall "..." not in ...`    | Use exactly `free`, `freemium`, `paid` or `unknown`           |
| `missing "## Heading"`        | Restore the heading text exactly as in the template           |
| `broken link ../x/y.md`       | Link only paths that appear in `data/catalogue.json` `doc`    |
