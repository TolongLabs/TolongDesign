---
name: Tracwell
slug: tracwell
section: Development
section_slug: development
source_url: 'https://tracwell.app/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Focused analytics tracking visitors and conversions.'
paywall: paid
pricing_summary:
  '7-day free trial; paid subscriptions start at $9/month ($90/year) for 300K
  monthly events across 5 sites.'
open_source: false
license: proprietary
category_tags:
  [analytics, conversion-tracking, attribution, revenue-metrics, cookieless]
best_for: [funnel tracking, revenue attribution, conversion analysis]
stack: ['javascript']
execution_mode: snippet
surface: ['development']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Tracwell

> Focused analytics tracking visitors and conversions. TolongLabs developers use
> Tracwell to connect marketing traffic directly to signups and revenue, map
> customer conversion journeys, and query metrics via API and MCP.

## At a glance

| Field          | Value                                                      |
| -------------- | ---------------------------------------------------------- |
| Source         | [tracwell.app](https://tracwell.app/)                      |
| Paywall        | **Paid** — 7-day free trial; plans start at $9/month       |
| Open source    | No — proprietary cloud analytics platform                  |
| Type           | Web analytics and conversion attribution platform          |
| Works with     | JavaScript, HTML, Next.js, Stripe, modern web frameworks   |
| Best for       | Funnel tracking, revenue attribution, conversion analysis  |
| Agent-friendly | Yes — script embed, REST API, native MCP access for agents |

## What it is

Tracwell is an analytics platform created specifically for founders, indie
hackers, and lean product teams. While standard analytics tools focus
exclusively on vanity metrics like raw pageviews and session counts, Tracwell
bridges the gap between marketing acquisition and bottom-line revenue: showing
exactly which pages, referrers, and campaigns generate signups and paying
customers.

Tracwell provides an integrated view of visitor activity: realtime traffic
streams, individual visitor journeys, step-by-step conversion funnels, custom
event triggers, and direct revenue attribution. Pageviews are captured
automatically with a lightweight, cookieless JavaScript snippet that respects
GDPR compliance without demanding cookie banners.

A distinguishing feature of Tracwell is its agent-first architecture. In
addition to a responsive web dashboard, Tracwell provides programmatic REST APIs
and native Model Context Protocol (MCP) support. This allows AI assistants and
coding agents to query traffic anomalies, conversion bottlenecks, and top
acquisition channels directly during routine development and reporting tasks.

## Paywall and pricing

- **Free Trial:** 7-day free trial on all event tiers. No credit card required
  to start; collection pauses after the trial unless a payment method is added.
- **Paid:** Simple capacity tiers based on pooled monthly event volume
  (pageviews, custom events, and revenue calls):
  - **300K events/mo:** $9/month ($90/year billed annually, 2 months free).
    Includes 5 websites, 1 seat, and 1 year of data history.
  - **1M events/mo:** $15/month ($150/year). 5 websites, 1 seat, 1 year history.
  - **2M events/mo:** $29/month ($290/year). 20 websites, 10 seats, 2 years
    history.
  - **5M events/mo:** $49/month ($490/year). 20 websites, 10 seats, 2 years
    history.
  - **10M events/mo:** $79/month ($790/year). 50 websites, 30 seats, 4 years
    history.
  - **20M events/mo:** $149/month ($1490/year). 50 websites, 30 seats, 4 years
    history.
- **Sign-up required?** Yes, requires a Tracwell account.
- **Licence for client work:** Proprietary SaaS platform. Permitted for tracking
  commercial and client websites. Data Processing Agreement (DPA) included.

Verified on the official Tracwell pricing documentation on 2026-10-07.

## How to use

1. Create a site in the Tracwell dashboard and obtain your site tracking ID.
2. Embed the lightweight tracking snippet in your HTML:

```html
<script
  src="https://tracwell.app/tracwell.js"
  data-site="YOUR_SITE_ID"
  defer
></script>
```

3. Track custom conversion events (e.g. signup completed):

```javascript
// Trigger a custom event on successful registration
window.tracwell?.track('signup_completed', {
  plan: 'pro_trial',
  source: 'landing_hero'
})
```

4. Send verified revenue transactions from your backend (e.g. Stripe webhook):

```typescript
// Backend server handler
await fetch('https://tracwell.app/api/v1/revenue', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.TRACWELL_API_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    site: 'my-saas',
    visitor_id: customerVisitorId,
    amount: 99.0,
    currency: 'USD',
    event: 'subscription_started'
  })
})
```

## Examples

- [Tracwell Demo](https://tracwell.app/demo) — Public interactive demonstration
  exploring live visitors, acquisition reports, and conversion funnels.
- [Tracwell Pricing](https://tracwell.app/pricing) — Detailed breakdown of event
  allowances, retention limits, and annual billing rates.
- [Tracwell Features](https://tracwell.app/) — Technical documentation covering
  cookieless tracking, GDPR compliance, and MCP integration.

## When to use it

- Use it on commercial SaaS websites, digital products, and client storefronts
  where understanding the financial ROI of specific traffic channels is
  essential.
- Use it when you need automated conversion funnels and goal attribution without
  configuring heavy enterprise platforms like Mixpanel or Amplitude.
- Skip it if you need a free, open-source, self-hosted web analytics platform;
  use [Umami](../development/umami.md).
- Skip it when you are tracking backend application exceptions and system logs;
  use [evlog](../development/evlog.md).

## Agent notes

- Official site: `https://tracwell.app/`.
- Agent-ready: provides native MCP access so AI coding assistants can query
  visitor drop-off points and conversion metrics directly.
- Events are pooled across all websites in an account.
- The tracking script is tiny and non-blocking (`defer`). Ensure client code
  guards with `window.tracwell?.track(...)` to prevent runtime exceptions.

## Alternatives in this repo

- [Umami](../development/umami.md) — Open-source, cookieless website analytics
  platform with free self-hosting options.
- [evlog](../development/evlog.md) — Structured logging and wide-event framework
  for backend request tracing.

## Sources

- [Official site](https://tracwell.app/) — checked 2026-10-07
- [Pricing page](https://tracwell.app/pricing) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build)
