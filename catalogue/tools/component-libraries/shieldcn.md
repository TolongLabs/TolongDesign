---
name: 'shieldcn'
slug: shieldcn
section: 'Component Libraries'
section_slug: component-libraries
source_url: 'https://shieldcn.dev/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'README badges styled with shadcn aesthetics.'
paywall: free
pricing_summary:
  'All public badges and image endpoints are free; the official site has no paid
  tier.'
open_source: true
license: 'MIT'
category_tags: [badges, svg, readme, github]
best_for: [project documentation, repository status]
stack: []
execution_mode: browser-app
surface: ['web-asset']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# shieldcn

> README badges styled with shadcn aesthetics. Yes — stable URLs, API reference,
> and agent skill.

## At a glance

| Field          | Value                                                                                          |
| -------------- | ---------------------------------------------------------------------------------------------- |
| Source         | [shieldcn.dev](https://shieldcn.dev/)                                                          |
| Paywall        | **Free** — All public badges and image endpoints are free; the official site has no paid tier. |
| Open source    | Yes — MIT ([project source](https://github.com/jal-co/shieldcn)).                              |
| Type           | Hosted badge and repository image endpoint                                                     |
| Works with     | Markdown, README files, and HTTP image URLs                                                    |
| Best for       | project documentation, repository status                                                       |
| Agent-friendly | Yes — Yes — stable URLs, API reference, and agent skill                                        |

## What it is

shieldcn serves badges, charts, headers, and repository statistics as SVG, PNG,
or JSON endpoints. Developers add the resulting image URL to Markdown or another
page without installing a frontend package.

The public docs include GitHub stars, licence, npm version, and other badge
routes, plus an API reference and a skill for agents that need to create or
update README badges.

The sponsor page states that all features are free and there is no paid tier.
The public repository is MIT-licensed.

## Paywall and pricing

- **Free:** Public badge and image endpoints are available at no charge.
- **Paid:** The official sponsor page says there is no paid tier.
- **Sign-up required?** No account or API key is shown as necessary for
  documented image URLs.
- **Licence for client work:** MIT for the service repository; generated badges
  link to public source data.

Pricing and access were checked on 2026-10-07.

## How to use

1. Choose a badge endpoint from the docs, then substitute the repository or
   package identifier where the route requires one.

2. Add the resulting URL as an image in a README or documentation page.

3. Use the showcase and API reference to choose richer chart, header, or stats
   endpoints.

4. Keep important status information in text as well when it needs to be
   searchable or accessible without images.

Minimal documented usage or configuration example:

```markdown
![React npm version](https://shieldcn.dev/npm/react.svg)
```

## Examples

- [GitHub stars badge](https://shieldcn.dev/github/stars/vercel/next.js.svg) — A
  generated repository stars badge.
- [GitHub licence badge](https://shieldcn.dev/github/license/vercel/next.js.svg)
  — A generated licence badge for a repository.
- [React npm badge](https://shieldcn.dev/npm/react.svg) — A package version
  badge for a README.
- [Showcase](https://shieldcn.dev/showcase) — Examples of the available README
  visuals.

## When to use it

- Use it when project documentation needs a consistent badge or small
  repository-status visual without a badge package.
- Skip it when the visual carries critical information that must remain
  available as text, or when private repository data should not be exposed.

## Agent notes

- Docs: https://shieldcn.dev/docs. The service can be used through ordinary
  public image URLs.
- The project provides an agent skill and a machine-readable API reference.
- Do not embed private values in public URLs; use endpoints only with data
  suitable for public documentation.
- All public service features are described as free on the sponsor page.

## Alternatives in this repo

- [shadcn/ui](../component-libraries/shadcn-ui.md) — A source library for
  in-product interface components.
- [Component Gallery](../component-libraries/component-gallery.md) — Visual
  discovery rather than README badge hosting.
- [Tailark](../component-libraries/tailark.md) — A registry for page sections
  and marketing layouts.

## Sources

- [shieldcn home](https://shieldcn.dev/) — checked 2026-10-07
- [Documentation](https://shieldcn.dev/docs) — checked 2026-10-07
- [GitHub badges](https://shieldcn.dev/docs/badges/github) — checked 2026-10-07
- [API reference](https://shieldcn.dev/docs/api-reference) — checked 2026-10-07
- [Skill guide](https://shieldcn.dev/docs/skill) — checked 2026-10-07
- [Showcase](https://shieldcn.dev/showcase) — checked 2026-10-07
- [Sponsor and pricing statement](https://shieldcn.dev/sponsor) — checked
  2026-10-07
- [GitHub repository](https://github.com/jal-co/shieldcn) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
