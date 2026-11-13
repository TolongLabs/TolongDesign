---
name: 'Netlify'
slug: 'netlify'
section: 'Deploy'
section_slug: 'deploy'
source_url: 'https://netlify.com/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Web platform providing continuous deployment pipelines.'
paywall: freemium
pricing_summary:
  'Free is $0 with 300 monthly usage credits; Personal is $9 per month and Pro
  starts at $20 per month.'
open_source: false
license: proprietary
category_tags: ['hosting', 'deploy-previews', 'ci-cd', 'frontend']
best_for: ['static sites', 'framework apps', 'preview deployments']
stack: ['nextjs', 'astro', 'react']
execution_mode: mcp-skill
surface: ['hosting']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Netlify

> Web platform providing continuous deployment pipelines.

> Use it to ship framework sites with reviewable deploy previews and managed
> features.

## At a glance

| Field          | Value                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------ |
| Source         | [netlify.com](https://netlify.com/)                                                                                |
| Paywall        | **freemium** — Free is $0 with 300 monthly usage credits; Personal is $9 per month and Pro starts at $20 per month |
| Open source    | No — proprietary                                                                                                   |
| Type           | Web development and deployment platform                                                                            |
| Works with     | Git repositories, Next.js, Astro, and other frameworks                                                             |
| Best for       | static sites, framework apps, preview deployments                                                                  |
| Agent-friendly | Yes — CLI, Git deployment workflow, and agent-oriented docs                                                        |

## What it is

Netlify builds and hosts websites and web applications from Git repositories. It
combines continuous deployment, deploy previews, serverless functions, edge
features, and framework adapters.

The platform works with static sites and modern full-stack frameworks. Its
templates are useful both as starting points and as concrete examples of how
Netlify features fit into a project.

Netlify is a hosted proprietary service. Its CLI and open-source adapters are
tools within the platform, not a self-hosted replacement for Netlify's build and
hosting service.

## Paywall and pricing

- The Free plan is $0 and includes 300 monthly usage credits; a project may
  pause when credits run out.
- Personal is $9 per month with 1,000 monthly credits. Pro starts at $20 per
  month with 3,000 credits; Enterprise is custom.
- Accounts are required for managed deployments. Credit consumption depends on
  platform usage, so model the team's build and traffic patterns.
- The hosted service is proprietary. Check current plan limits before using a
  free tier for a client launch.

Checked 2026-10-07. Prices can change; use the linked official page for current
terms.

## How to use

- Connect a Git provider and select the repository, build command, and publish
  directory; Netlify detects many frameworks automatically.
- For an existing site, install the CLI and use netlify init to link a local
  directory to a Netlify site.
- Use deploy previews for branch and pull-request review, then deploy the
  production branch when approved.
- Set environment variables and redirects through site settings or configuration
  files, and inspect credit usage after launch.

```bash
npm install -g netlify-cli
netlify init
netlify deploy --prod
```

## Examples

- [Next Platform Starter](https://www.netlify.com/integrations/next-platform-starter/)
  — Next.js 15 starter using Netlify platform primitives.
- [Astro Supabase Starter](https://www.netlify.com/integrations/astro-supabase-starter/)
  — Astro app example integrated with Supabase.
- [Astro Sanity Starter](https://www.netlify.com/integrations/astro-sanity-starter/)
  — Minimal Astro template for landing pages.

## When to use it

- Use it for Git-connected websites that need reliable previews, framework
  support, and managed functions or edge features.
- Skip it when a workload needs broader container control or a different runtime
  model; compare Railway, Fly.io, and Cloudflare Workers.

## Agent notes

- CLI: netlify-cli. The official docs include init for linking a site and deploy
  for previews or production.
- Netlify documentation exposes an llms.txt index and Markdown versions of
  documentation pages.
- Keep API tokens and environment secrets in Netlify settings; do not add them
  to netlify.toml or the repository.
- Review monthly usage credits as deploy volume and platform feature use grow.

## Alternatives in this repo

- [Vercel](../deploy/vercel.md) — A managed frontend platform with an especially
  direct Next.js path.
- [Cloudflare](../deploy/cloudflare.md) — Use Workers when edge runtime bindings
  are central.
- [Railway](../deploy/railway.md) — Use service-oriented hosting for APIs,
  workers, and databases.

## Sources

- [Official site](https://netlify.com/) — checked 2026-10-07
- [Pricing](https://www.netlify.com/pricing/) — checked 2026-10-07
- [Documentation](https://docs.netlify.com/) — checked 2026-10-07
- [CLI setup](https://docs.netlify.com/api-and-cli-guides/cli-guides/get-started-with-cli/)
  — checked 2026-10-07
- [Next.js guide](https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/)
  — checked 2026-10-07
- [Template catalog](https://www.netlify.com/integrations/templates/) — checked
  2026-10-07
- [Next Platform Starter](https://www.netlify.com/integrations/next-platform-starter/)
  — checked 2026-10-07
- [Astro Supabase Starter](https://www.netlify.com/integrations/astro-supabase-starter/)
  — checked 2026-10-07
- [Astro Sanity Starter](https://www.netlify.com/integrations/astro-sanity-starter/)
  — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build) — checked 2026-10-07; page
  was not readable in the research browser.
