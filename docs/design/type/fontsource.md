---
name: Fontsource
slug: fontsource
section: Type
section_slug: type
source_url: 'https://fontsource.org/'
designeer_url: 'https://designeer.xyz/visuals'
designeer_blurb: Self-host open-source fonts via npm packages.
paywall: free
pricing_summary:
  'Fontsource packages are free to install; each font retains its own
  open-source license, commonly OFL but not uniformly.'
open_source: true
license: unknown
category_tags: [fonts, npm, self-hosted, open-source, typography]
best_for: [self-hosted web fonts, framework projects, controlled font delivery]
stack: [javascript, typescript, react, css]
agent_friendly: true
last_verified: 2026-10-07
---

# Fontsource

> Self-host open-source fonts via npm packages. It makes font files available as
> versioned dependencies that can be bundled with a web application.

## At a glance

| Field          | Value                                                                     |
| -------------- | ------------------------------------------------------------------------- |
| Source         | [fontsource.org](https://fontsource.org/)                                 |
| Paywall        | **Free** — packages are publicly available; check each font's license.    |
| Open source    | Yes — individual packages use open-source font licenses.                  |
| Type           | npm font package catalog and self-hosting guide.                          |
| Works with     | JavaScript and CSS projects, including React and other bundlers.          |
| Best for       | Bundling font files locally instead of relying on a third-party font CDN. |
| Agent-friendly | Yes — installable npm packages and documented import patterns.            |

## What it is

Fontsource distributes open-source typefaces as npm packages. The package
catalog provides font files and stylesheets that can be included in a project
build, so a site can serve its font assets from its own deployment.

Each family has its own package and license. Many use the SIL Open Font License,
but the license is not uniform across all families. Review the selected
package's metadata and license before using it in a client project.

## Paywall and pricing

- **Free:** Packages can be installed without a Fontsource subscription.
- **Paid:** Not published for the font package catalog.
- **Sign-up required?** No account is required to install public npm packages.
- **Licence for client work:** Open-source font licenses generally allow
  commercial use subject to their terms. Verify the specific font's license,
  especially before modifying or redistributing font files.

Access checked 2026-10-07. License varies by family.

## How to use

1. Choose a family from the catalog and inspect its available weights,
   variable/static options, character coverage, and license.
2. For a variable Open Sans package, install the package documented by
   Fontsource:

   ```bash
   bun add @fontsource-variable/open-sans
   ```

3. Import the stylesheet in the application entry point:

   ```ts
   import '@fontsource-variable/open-sans'
   ```

4. Apply the documented family name in CSS, then verify the generated font
   requests and fallback behavior in the browser network panel.
5. If using static files instead, follow the package page's weight-specific
   instructions and import only the styles the site needs.

The package name and import pattern are from Fontsource's getting-started
documentation; use the selected font's page for its exact package variant.

## Examples

- [Inter](https://fontsource.org/fonts/inter) — inspect an available family and
  its package details.
- [Roboto](https://fontsource.org/fonts/roboto) — review a broad sans-serif
  family and its available styles.
- [Roboto Serif](https://fontsource.org/fonts/roboto-serif/about) — inspect a
  serif family page and its metadata.
- [Install guide](https://fontsource.org/docs/getting-started/install) — see the
  documented package and stylesheet workflow.

## When to use it

- Use it when the project needs locally hosted font files and the selected
  family has a compatible license.
- Use it to control font versioning and avoid a runtime dependency on an
  external font host.
- Skip it if the project must use a paid proprietary typeface or if the needed
  font is unavailable in the catalog.

## Agent notes

- Package names follow the selected font's Fontsource page. Do not infer a
  package name from a family name alone.
- Variable and static packages use different naming conventions; inspect the
  official install instructions before changing dependencies.
- Check the font's license in the package rather than assuming every package is
  OFL.
- Import only needed styles and test layout shifts caused by font fallback.

## Alternatives in this repo

- [Fontshare](../type/fontshare.md) — browse families with a stated
  commercial-use allowance and per-family terms.
- [Klim](../type/klim.md) — paid foundry fonts with specific web licenses.
- [Velvetyne](../type/velvetyne.md) — experimental freely available fonts with
  per-family license terms.

## Sources

- [Official Fontsource site](https://fontsource.org/) — checked 2026-10-07
- [Install guide](https://fontsource.org/docs/getting-started/install) — checked
  2026-10-07
- [Inter](https://fontsource.org/fonts/inter) — checked 2026-10-07
- [Roboto](https://fontsource.org/fonts/roboto) — checked 2026-10-07
- [Roboto Serif](https://fontsource.org/fonts/roboto-serif/about) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/visuals) — checked 2026-10-07
