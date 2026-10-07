---
name: Umami
slug: umami
section: Development
section_slug: development
source_url: 'https://umami.is/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Privacy-focused web analytics without cookie banners.'
paywall: freemium
pricing_summary:
  'Free self-hosting or Cloud Hobby tier (up to 100k events/mo); Cloud Pro
  starts at $20/month.'
open_source: true
license: MIT
category_tags: [analytics, privacy, gdpr, self-hosted, web-traffic]
best_for:
  [privacy-friendly analytics, client traffic reporting, cookieless metrics]
stack: [react, nextjs, nodejs, postgresql]
agent_friendly: true
last_verified: 2026-10-07
---

# Umami

> Privacy-focused web analytics without cookie banners. TolongLabs developers
> use Umami to equip client websites and web applications with lightweight,
> GDPR-compliant traffic metrics and custom event tracking without intrusive
> tracking scripts.

## At a glance

| Field          | Value                                                         |
| -------------- | ------------------------------------------------------------- |
| Source         | [umami.is](https://umami.is/)                                 |
| Paywall        | **Freemium** — free self-hosting or Cloud Hobby; Pro $20/mo   |
| Open source    | Yes — MIT ([GitHub](https://github.com/umami-software/umami)) |
| Type           | Privacy-focused web analytics platform (self-hosted & cloud)  |
| Works with     | Any website, HTML script tags, Next.js, React, Node.js        |
| Best for       | Privacy-friendly analytics, client traffic reporting, GDPR    |
| Agent-friendly | Yes — single-line script embed, public REST API, Docker image |

## What it is

Umami is an open-source, privacy-preserving web analytics platform designed as a
clean, user-friendly alternative to Google Analytics. Built with Next.js, React,
and Prisma, Umami collects essential website usage metrics without tracking
personal identifiable information (PII) or storing cookies across user devices.

Because Umami operates without browser cookies, websites deploying it comply
fully with GDPR, CCPA, and PECR regulations without displaying annoying consent
banners. The tracking script weighs under 2 KB, ensuring zero impact on page
load speeds or Core Web Vitals scores.

Umami delivers a clean, intuitive dashboard displaying pageviews, unique
visitors, referrers, top pages, geographical regions, device types, and
operating systems. It also supports custom event tracking, allowing developers
to measure specific user interactions such as button clicks, newsletter signups,
or download triggers.

## Paywall and pricing

- **Self-Hosted (Free):** 100% free and open source forever. Maintainers can
  deploy Umami to their own infrastructure (Vercel, Railway, Docker, or bare
  metal) with PostgreSQL or MySQL at no software cost.
- **Umami Cloud Hobby (Free):** $0/month. Hosted cloud service supporting up to
  10,000 to 100,000 monthly events, unlimited websites, and 1 year of data
  retention.
- **Umami Cloud Pro:** Starts at $20/month. Scales based on monthly event volume
  (starting at 100k events/mo), includes higher team seat limits, longer data
  retention, priority support, and custom domain tracking endpoints.
- **Enterprise:** Custom contract. Tailored for high-volume enterprise traffic
  with custom SLA guarantees and dedicated database instances.
- **Sign-up required?** No for self-hosting. Yes for Umami Cloud.
- **Licence for client work:** MIT License. Permitted for commercial and client
  deployments without restrictions.

Verified on the official Umami pricing page and GitHub repository on 2026-10-07.

## How to use

1. Obtain a tracking snippet from your Umami dashboard: Register an account on
   Umami Cloud or spin up a self-hosted instance, add a website, and copy your
   unique `website-id`.
2. Embed the tracker in your HTML `<head>`:

```html
<script
  defer
  src="https://cloud.umami.is/script.js"
  data-website-id="YOUR-UMAMI-WEBSITE-ID"
></script>
```

3. Integrate into a Next.js App Router project:

```tsx
// app/layout.tsx
import Script from 'next/script'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

4. Track custom button events declaratively or programmatically:

```tsx
// Declarative HTML tracking attribute
;<button
  data-umami-event="signup-button-clicked"
  data-umami-event-plan="pro"
  className="btn-primary"
>
  Start Free Trial
</button>

// Programmatic JavaScript tracking
if (window.umami) {
  window.umami.track('purchase-completed', { value: 49.99, currency: 'USD' })
}
```

## Examples

- [Umami Cloud Platform](https://umami.is/) — Managed analytics cloud with
  instant setup and team sharing.
- [Umami Documentation](https://umami.is/docs) — Setup guides covering script
  configuration, custom event properties, and API integration.
- [GitHub Repository](https://github.com/umami-software/umami) — Source code,
  Docker Compose templates, and self-hosting guides.

## When to use it

- Use it on all public client marketing sites, blogs, and SaaS landing pages
  where high-level traffic numbers and conversion events are required without
  cookie popups.
- Use it when client data governance mandates complete self-hosted ownership of
  analytics data in a private PostgreSQL database.
- Skip it when you need deep, funnels-and-revenue attribution with granular
  visitor journey maps; consider [Tracwell](../development/tracwell.md).
- Skip it for structured backend server error tracing; use
  [evlog](../development/evlog.md).

## Agent notes

- Official documentation: `https://umami.is/docs`.
- The tracker script sets a global `window.umami` object. Ensure TypeScript
  definitions extend `Window` with
  `umami?: { track: (name: string, data?: object) => void }` to avoid
  compilation errors.
- Self-hostable via a standard Docker container
  (`ghcr.io/umami-software/umami:postgresql-latest`).

## Alternatives in this repo

- [Tracwell](../development/tracwell.md) — Conversion- and revenue-focused
  analytics tracking visitor journeys and goal funnels.
- [evlog](../development/evlog.md) — Structured logging framework for capturing
  backend error events and request context.

## Sources

- [Official site](https://umami.is/) — checked 2026-10-07
- [Umami Pricing](https://umami.is/pricing) — checked 2026-10-07
- [Documentation](https://umami.is/docs) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build)
