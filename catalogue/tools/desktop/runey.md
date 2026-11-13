---
name: Runey
slug: runey
section: Desktop
section_slug: desktop
source_url: 'https://runey.app/'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: 'Invoicing and client tracking app for freelancers.'
paywall: freemium
pricing_summary:
  'Free tier to start; paid subscription plans range from $9 to $39/month for
  unlimited invoicing, proposals, and CRM tracking.'
open_source: false
license: proprietary
category_tags: [invoicing, freelance, client-tracking, payments, business]
best_for:
  [
    client billing,
    project milestone tracking,
    freelance expense management,
    proposals
  ]
stack: []
execution_mode: browser-app
surface: ['pdf']
status: active
agent_friendly: false
last_verified: 2026-10-07
---

# Runey

> Invoicing and client tracking app for freelancers. TolongLabs developers reach
> for Runey to generate branded client invoices, track project milestones, and
> manage freelance billing without heavy enterprise accounting overhead.

## At a glance

| Field          | Value                                                         |
| -------------- | ------------------------------------------------------------- |
| Source         | [runey.app](https://runey.app/)                               |
| Paywall        | **Freemium** — free tier available; paid plans $9 to $39/mo   |
| Open source    | No — proprietary web application                              |
| Type           | Web-based freelancer management and invoicing platform        |
| Works with     | Modern web browsers, Stripe Connect, desktop browsers         |
| Best for       | Freelance invoices, client tracking, project expenses, quotes |
| Agent-friendly | No — web SaaS application; manual dashboard access            |

## What it is

Runey is an all-in-one web-based business management application designed for
freelance developers, designers, and boutique digital agencies. Rather than
stitching together separate tools for CRM, time tracking, expense logs, and
invoice generation, Runey consolidates the entire client lifecycle into a clean,
modern interface.

With Runey, developers can draft client proposals, convert approved estimates
into binding contracts, track billable project milestones across interactive
Kanban and calendar views, and dispatch customized invoices with Stripe Connect
payment links.

The application emphasizes clean typography and design sensibility, letting
independent creators generate professional PDF invoices styled with custom fonts
(such as Satoshi, Clash Display, or General Sans) and brand palettes. It tracks
expenses with receipt attachments and provides high-level revenue analytics to
give freelancers visibility into their monthly recurring revenue (MRR) and tax
obligations.

## Paywall and pricing

- **Free:** Free tier available to create an account, track initial clients, and
  generate starter invoices without entering credit card details.
- **Paid:** Monthly and annual subscription tiers ranging from $9 to $39/month
  depending on invoice volume, custom domain branding, client portal access, and
  team seats. Annual billing cycles offer promotional discounts up to 50%.
- **Sign-up required?** Yes, account registration is required to save client
  records and issue invoices.
- **Licence for client work:** Allowed for commercial client billing and agency
  operations.

Checked on the official application documentation and registration flow on
2026-10-07.

## How to use

1. Navigate to `https://runey.app/` and register for a free account.

2. Configure your studio profile:

- Upload your studio logo and set brand primary colors.
- Select preferred typographic pairings for invoice headers.
- Connect your Stripe account via Stripe Connect to accept credit card and bank
  transfer payments.

3. Add clients and projects:

- Create client records with business tax IDs, billing addresses, and contact
  emails.
- Set up a project workspace with deliverable milestones and hourly or fixed
  rates.

4. Generate and send an invoice:

- Click **New Invoice**, select your client and associated project.
- Add line items (e.g. "Frontend Implementation — Next.js 15 Landing Page", 40
  hrs at agreed rate).
- Add tax rates and payment terms (e.g. Net 14).
- Export a pixel-perfect PDF or email a live Stripe payment link directly to the
  client.

5. Monitor cash flow:

- Track paid, outstanding, and overdue invoice statuses from the central
  dashboard.

## Examples

- [Runey Homepage](https://runey.app/) — Overview of invoicing, project
  tracking, and proposal workflows.
- [Runey Invoice Generator](https://runey.app/) — Preview of customizable
  invoice templates featuring modern typography and brand themes.
- [Runey Client CRM](https://runey.app/) — Contact management, project history,
  and payment status tracking.

## When to use it

- Use it when operating as an independent contractor or boutique studio and you
  need to issue professional, beautifully typeset invoices with integrated card
  processing.
- Use it to manage project deadlines, client communications, and expenses in one
  lightweight portal.
- Skip it if you only need a native Mac menu bar widget to monitor revenue stats
  from existing Stripe or Polar accounts; use [Revone](../desktop/revone.md)
  instead.
- Skip it if you need enterprise double-entry accounting with complex payroll;
  use dedicated accounting platforms like QuickBooks or Xero.

## Agent notes

- Closed-source web application.
- Coding agents cannot programmatically issue invoices without
  reverse-engineering authenticated API sessions.
- Suitable for human agency operators managing commercial freelance contracts.

## Alternatives in this repo

- [Revone](../desktop/revone.md) — Native macOS revenue tracking app aggregating
  metrics from Stripe, Polar, Lemon Squeezy, and Paddle.
- [Supaste](../desktop/supaste.md) — Mac clipboard manager for saving reusable
  contract templates and billing details locally.

## Sources

- [Official site](https://runey.app/) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/utilities)
