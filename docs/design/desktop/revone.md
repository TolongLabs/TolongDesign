---
name: Revone
slug: revone
section: Desktop
section_slug: desktop
source_url: 'https://revone.app/'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: 'Unified revenue dashboard aggregating payment metrics.'
paywall: paid
pricing_summary:
  'One-time purchase of $19 (regular $29) for a lifetime Mac license via Polar
  with no recurring subscriptions.'
open_source: false
license: proprietary
category_tags: [revenue, macos, payments, stripe, analytics]
best_for:
  [
    multi-platform revenue monitoring,
    menu bar mrr,
    unified order tracking,
    live widgets
  ]
stack: []
execution_mode: reference
surface: ['desktop']
status: active
agent_friendly: false
last_verified: 2026-10-07
---

# Revone

> Unified revenue dashboard aggregating payment metrics. TolongLabs developers
> reach for Revone to monitor combined sales and recurring revenue across
> Stripe, Polar, Lemon Squeezy, and Paddle directly from the macOS menu bar.

## At a glance

| Field          | Value                                                          |
| -------------- | -------------------------------------------------------------- |
| Source         | [revone.app](https://revone.app/)                              |
| Paywall        | **Paid** — $19 one-time lifetime license (regular $29)         |
| Open source    | No — proprietary macOS software                                |
| Type           | Native macOS revenue aggregation and menu bar dashboard        |
| Works with     | macOS 14.0+ Sonoma, Stripe, Polar, Lemon Squeezy, Paddle       |
| Best for       | Multi-platform revenue tracking, menu bar MRR, live sales feed |
| Agent-friendly | No — GUI desktop application; uses developer API read keys     |

## What it is

Revone is a native macOS application engineered to consolidate fragmented
payment and subscription metrics into a single unified desktop command center.
Created for indie developers, software agencies, and SaaS founders, Revone
addresses the friction of constantly switching between multiple web portals to
check revenue.

The application connects securely to leading merchant processors and merchant of
record (MoR) platforms—including Stripe, Polar, Lemon Squeezy, Gumroad, Paddle,
and RevenueCat. By pulling transaction data via read-only API keys directly onto
your local Mac, Revone computes consolidated Net Revenue, Monthly Recurring
Revenue (MRR), Annual Recurring Revenue (ARR), refund rates, and active
subscriber counts.

Revone lives discreetly in the macOS menu bar, showing real-time revenue numbers
or order counts at a glance. Clicking the menu bar icon displays a polished
popover with recent customer purchases, daily sparkline graphs, and customizable
desktop widgets.

## Paywall and pricing

- **Free:** No permanent free tier; preview documentation and feature tours are
  open on the official site.
- **Paid:**
  - **Lifetime License:** $19 one-time payment (early promotional pricing;
    standard list price $29) sold via Polar checkout. Includes perpetual app
    access, unlimited connected accounts, menu bar integration, and all future
    updates.
- **Sign-up required?** No central Revone account required; licenses are managed
  via Polar customer portal.
- **Licence for client work:** Allowed for tracking commercial client projects
  and internal SaaS products on licensed developer machines.

Checked on the official website and Polar checkout on 2026-10-07.

## How to use

1. Download the Revone DMG from `https://revone.app/` and install to
   `/Applications`.

2. Launch Revone on macOS Sonoma (14.0+).

3. Connect your payment providers using read-only API keys:

- **Stripe:** Generate a restricted read-only API key in the Stripe Dashboard
  with permissions for Charges, Customers, and Subscriptions.
- **Polar:** Create a personal access token under your Polar account settings.
- **Lemon Squeezy / Paddle:** Paste your read-only API token into Revone's
  Provider settings panel.

4. Customize your menu bar display:

- Choose what displays in the menu bar: Today's Revenue, Current Month MRR, or
  total sales count.
- Enable native macOS notifications for new purchases, subscription upgrades, or
  churn alerts.

5. Inspect unified customer transactions:

- Open the main Revone window (`Cmd + 1`) to view a unified chronological feed
  of orders across all connected platforms without browser logins.

## Examples

- [Revone Homepage](https://revone.app/) — Feature walkthrough covering widgets,
  menu bar modes, and privacy architecture.
- [Revone Stripe Integration Docs](https://revone.app/docs/stripe) —
  Step-by-step guide on configuring restricted read-only Stripe API keys.
- [Revone Polar Integration Docs](https://revone.app/docs/polar) — Documentation
  on syncing Polar payments, products, and subscription tiers.

## When to use it

- Use it when you sell digital software, SaaS subscriptions, or design templates
  across multiple checkout platforms (such as Stripe + Polar or Lemon Squeezy)
  and want a single real-time revenue counter on macOS.
- Use it when you value local-first privacy: API keys and transaction caches
  remain stored on your Mac keychain and never pass through a Revone cloud
  server.
- Skip it if you need to draft and send manual client invoices; use
  [Runey](../desktop/runey.md) instead.
- Skip it if you are looking for general desktop widgets and system stats; use
  [CoolDock](../desktop/cooldock.md) instead.

## Agent notes

- Closed-source native macOS application.
- All provider API keys are stored locally in the macOS Keychain; Revone has no
  backend server collecting telemetry or transaction records.
- Coding agents cannot query Revone directly; agents needing payment data should
  query provider APIs (Stripe, Polar) directly with environment secrets.

## Alternatives in this repo

- [Runey](../desktop/runey.md) — Freelance business platform for generating
  client invoices, proposals, and tracking billable project milestones.
- [CoolDock](../desktop/cooldock.md) — Secondary desktop dock utility for macOS
  with live widgets and system resource monitoring.

## Sources

- [Official site](https://revone.app/) — checked 2026-10-07
- [Stripe setup docs](https://revone.app/docs/stripe) — checked 2026-10-07
- [Polar setup docs](https://revone.app/docs/polar) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/utilities)
