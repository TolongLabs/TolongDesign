---
name: 'Fly.io'
slug: 'fly-io'
section: 'Deploy'
section_slug: 'deploy'
source_url: 'https://fly.io/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Runs Docker containers close to users.'
paywall: paid
pricing_summary:
  'Fly.io bills by resource usage and has no ongoing free tier; its trial is
  limited to 2 VM hours or 7 days.'
open_source: false
license: proprietary
category_tags: ['hosting', 'containers', 'regions', 'deployment']
best_for: ['dockerized apps', 'runtime control', 'multi-region workloads']
stack: ['docker', 'nodejs', 'go']
agent_friendly: true
last_verified: 2026-10-07
---

# Fly.io

> Runs Docker containers close to users.

> Use it when containers need regional placement and more runtime control.

## At a glance

| Field          | Value                                                                                                                |
| -------------- | -------------------------------------------------------------------------------------------------------------------- |
| Source         | [fly.io](https://fly.io/)                                                                                            |
| Paywall        | **paid** — Fly.io bills by resource usage and has no ongoing free tier; its trial is limited to 2 VM hours or 7 days |
| Open source    | No — proprietary                                                                                                     |
| Type           | Regional container hosting platform                                                                                  |
| Works with     | Docker images, Linux services, Fly Machines                                                                          |
| Best for       | dockerized apps, runtime control, multi-region workloads                                                             |
| Agent-friendly | Yes — flyctl command-line deployment workflow                                                                        |

## What it is

Fly.io runs application workloads in regional machines close to users.
Developers deploy containers and can choose regions, machine sizes, networking,
and attached services.

It gives more control over runtime and placement than a frontend-specific host,
while still managing machine orchestration and deployment. That flexibility
means operators need to understand resource sizing and service topology.

Fly.io is a metered paid platform. The trial is short and limited; applications
must move to paid usage to keep running after it ends.

## Paywall and pricing

- Fly.io has no ongoing free tier. Pricing is based on machine and service
  resource use, with rates varying by region and resource.
- The free trial is limited to 2 VM hours or 7 days, whichever comes first.
  Applications stop at the end of the trial until billing is configured.
- A payment method is required for continued production use after the trial.
  Review current resource and network charges in the pricing page.
- The platform is proprietary, though flyctl is open-source command-line
  software.

Checked 2026-10-07. Prices can change; use the linked official page for current
terms.

## How to use

- Install flyctl using the official installer or a supported package manager,
  then authenticate with Fly.io.
- Run fly launch from the app directory to detect or configure a deployment,
  then review the generated configuration.
- Run fly deploy to build and release the app. Add regions, volumes, secrets,
  and health checks based on the service design.
- Use the official guides for databases and framework-specific workflows;
  inspect resource billing as workloads scale.

```bash
curl -L https://fly.io/install.sh | sh
fly auth signup
fly launch
fly deploy
```

## Examples

- [Django getting started](https://fly.io/docs/django/getting-started/) — A
  framework-specific application deployment path.
- [Web app with PostgreSQL](https://fly.io/web-app-with-postgres/) — A combined
  app and database walkthrough.
- [Python guide](https://fly.io/python/) — A Python service deployment example.

## When to use it

- Use it for containerized apps that need regional placement, persistent
  services, or more control over the runtime.
- Skip it for a static frontend or a project that needs a generous always-free
  production tier; compare Netlify or Vercel.

## Agent notes

- CLI: flyctl. The install script is the official macOS/Linux path; review it
  before running in a controlled build environment.
- fly launch and fly deploy are the core app workflow. Confirm region, machine
  sizing, health checks, and secrets before production.
- The trial is time- and usage-limited, not a permanent free plan.
- Include service resources, data transfer, IP addresses, and persistent volumes
  in cost estimates.

## Alternatives in this repo

- [Railway](../deploy/railway.md) — A simpler service-oriented deployment flow
  for apps and databases.
- [Cloudflare](../deploy/cloudflare.md) — An edge runtime for workloads
  compatible with Workers.
- [Vercel](../deploy/vercel.md) — Frontend-focused deployments and pull-request
  previews.

## Sources

- [Official site](https://fly.io/) — checked 2026-10-07
- [Pricing](https://fly.io/docs/about/pricing/) — checked 2026-10-07
- [Free trial](https://fly.io/docs/about/free-trial/) — checked 2026-10-07
- [Launch guide](https://fly.io/docs/getting-started/launch/) — checked
  2026-10-07
- [Django guide](https://fly.io/docs/django/getting-started/) — checked
  2026-10-07
- [PostgreSQL app guide](https://fly.io/web-app-with-postgres/) — checked
  2026-10-07
- [Python guide](https://fly.io/python/) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build) — checked 2026-10-07; page
  was not readable in the research browser.
