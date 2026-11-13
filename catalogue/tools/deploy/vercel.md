---
name: 'Vercel'
slug: 'vercel'
section: 'Deploy'
section_slug: 'deploy'
source_url: 'https://vercel.com/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Cloud platform for deploying Next.js applications.'
paywall: freemium
pricing_summary:
  'Hobby is free for personal projects; Pro starts at $20 per month and
  Enterprise pricing is custom.'
open_source: false
license: proprietary
category_tags: ['hosting', 'deployment', 'ci-cd', 'frontend']
best_for: ['nextjs apps', 'preview deployments', 'frontend delivery']
stack: ['nextjs', 'react', 'nodejs']
execution_mode: mcp-skill
surface: ['hosting']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Vercel

> Cloud platform for deploying Next.js applications.

> Use it for framework-aware deployments and preview URLs on frontend projects.

## At a glance

| Field          | Value                                                                                                            |
| -------------- | ---------------------------------------------------------------------------------------------------------------- |
| Source         | [vercel.com](https://vercel.com/)                                                                                |
| Paywall        | **freemium** — Hobby is free for personal projects; Pro starts at $20 per month and Enterprise pricing is custom |
| Open source    | No — proprietary                                                                                                 |
| Type           | Frontend cloud deployment platform                                                                               |
| Works with     | Git repositories, Next.js, React, Node.js                                                                        |
| Best for       | nextjs apps, preview deployments, frontend delivery                                                              |
| Agent-friendly | Yes — CLI, deployment APIs, and agent integrations                                                               |

## What it is

Vercel builds and hosts frontend and full-stack web applications, with
particularly direct support for Next.js. Git-connected deployments create
preview URLs for changes and production deployments from selected branches.

The platform includes serverless and edge runtimes, caching, analytics, domains,
and team workflows. It is a hosted service rather than an open-source hosting
stack.

Vercel is a practical fit when a project already uses a supported frontend
framework and values low-friction previews. Plan selection matters: the free
Hobby plan is limited to personal, non-commercial use.

## Paywall and pricing

- Hobby is $0 for personal, non-commercial projects. The official fair-use terms
  exclude commercial work from Hobby.
- Pro starts at $20 per month and includes a $20 usage credit; additional usage
  may be billed.
- Enterprise pricing is custom. Account and team access are required to manage
  deployments.
- The service is proprietary. Commercial client projects need an eligible paid
  plan.

Checked 2026-10-07. Prices can change; use the linked official page for current
terms.

## How to use

- Connect the project repository in the Vercel dashboard, choose the framework
  preset, and set the production branch.
- For a local first deployment, install the official CLI, authenticate, and run
  it from the project directory.
- Use preview deployments for pull requests; promote the intended branch or
  deployment to production after review.
- Add environment variables and domains through project settings, keeping
  secrets out of the repository.

```bash
npm i -g vercel
vercel login
vercel
```

## Examples

- [Next.js App Router Playground](https://vercel.com/templates/next.js/app-directory)
  — A starter for exploring App Router features.
- [Portfolio Starter Kit](https://vercel.com/templates/next.js/portfolio-starter-kit)
  — A portfolio template built on the Next.js stack.
- [Blog Starter Kit](https://vercel.com/templates/next.js/blog-starter-kit) — A
  content-focused starting point for a Next.js blog.

## When to use it

- Use it for Next.js and other frontend projects that benefit from Git-based
  preview deployments and managed edge delivery.
- Skip it when the project needs portable infrastructure or a different
  execution model; compare Cloudflare Workers, Netlify, Railway, or Fly.io.

## Agent notes

- CLI: vercel. The command above is the official npm installation flow; the CLI
  supports login, linking, and deployment.
- Vercel also publishes agent integrations and documentation. Review permissions
  before connecting an agent to a team.
- Do not deploy commercial client work under Hobby; the official plan terms
  reserve that plan for personal, non-commercial projects.
- Configure environment variables in the project settings and avoid placing
  secrets in source or generated preview URLs.

## Alternatives in this repo

- [Netlify](../deploy/netlify.md) — Framework hosting with deploy previews and
  platform primitives.
- [Cloudflare](../deploy/cloudflare.md) — Edge runtime and network services with
  a Workers-first model.
- [Railway](../deploy/railway.md) — Deploy application services and databases
  from a service-oriented dashboard.

## Sources

- [Official site](https://vercel.com/) — checked 2026-10-07
- [Pricing](https://vercel.com/pricing) — checked 2026-10-07
- [CLI documentation](https://vercel.com/docs/cli) — checked 2026-10-07
- [Hobby plan](https://vercel.com/docs/plans/hobby) — checked 2026-10-07
- [Fair-use guidelines](https://vercel.com/docs/limits/fair-use-guidelines) —
  checked 2026-10-07
- [App Router Playground template](https://vercel.com/templates/next.js/app-directory)
  — checked 2026-10-07
- [Portfolio Starter Kit](https://vercel.com/templates/next.js/portfolio-starter-kit)
  — checked 2026-10-07
- [Blog Starter Kit](https://vercel.com/templates/next.js/blog-starter-kit) —
  checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build) — checked 2026-10-07; page
  was not readable in the research browser.
