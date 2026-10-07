---
name: emailcn
slug: emailcn
section: Component Libraries
section_slug: component-libraries
source_url: https://emailcn.run/
designeer_url: https://designeer.xyz/components
designeer_blurb:
  'Responsive email components for React Email, MJML, and JSX Email.'
paywall: free
pricing_summary: 'Free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [email, react-email, mjml, jsx-email, shadcn]
best_for: [transactional emails, onboarding emails, newsletter templates]
stack: [react, react-email, mjml]
agent_friendly: true
last_verified: 2026-10-07
---

# emailcn

> Responsive email components for React Email, MJML, and JSX Email. TolongLabs
> developers reach for emailcn to rapidly author bulletproof transactional and
> marketing email templates using modern React email frameworks and the shadcn
> distribution pattern.

## At a glance

| Field          | Value                                                         |
| -------------- | ------------------------------------------------------------- |
| Source         | [emailcn.run](https://emailcn.run/)                           |
| Paywall        | **Free** — 100% free and open source                          |
| Open source    | Yes — MIT ([GitHub](https://github.com/shadcn-labs/emailcn))  |
| Type           | Email component library and registry                          |
| Works with     | React Email, MJML React (`@faire/mjml-react`), JSX Email      |
| Best for       | Transactional emails, onboarding emails, newsletter templates |
| Agent-friendly | Yes — shadcn CLI registry, copy-paste email components        |

## What it is

emailcn is an open-source email template and component registry created by
Aniket Pawar as part of the Shadcn Labs collection. It applies the shadcn/ui
philosophy to email development, providing ready-to-use, responsive HTML email
components that live directly in your project.

Email rendering is notoriously fragmented across client platforms (Outlook,
Gmail, Apple Mail). emailcn solves this by supporting three major modern React
email engines:

- **React Email (`react-email`):** The standard modern email toolchain by
  Resend.
- **MJML React (`@faire/mjml-react`):** React bindings for MJML's abstraction
  over legacy email client tables.
- **JSX Email (`jsx-email`):** A lightweight, fast JSX-to-HTML email compiler.

The registry includes foundational section components (headers, hero banners,
call-to-action buttons, footers, invoice itemization tables) as well as complete
pre-composed templates for user onboarding, password resets, payment receipts,
and account alerts. Every component installs with sensible fallback typography
and unified theme tokens.

## Paywall and pricing

- **Free:** The entire registry of email blocks, components, themes, and
  templates is 100% free and open source.
- **Paid:** None.
- **Sign-up required?** No.
- **Licence for client work:** Released under the MIT licence. Unrestricted use
  for client projects and commercial SaaS platforms.

Checked on the official website and repository on 2026-10-07.

## How to use

1. Ensure your project has your chosen email framework installed (e.g. React
   Email):

```bash
bun add react-email @react-email/components
```

2. Add an email component or block using the shadcn CLI:

```bash
bunx --bun shadcn@latest add @emailcn/react-email/block-onboarding-default
```

3. Import and render the component within an email template:

```tsx
import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Tailwind
} from '@react-email/components'
import { OnboardingDefault } from '@/components/email/onboarding-default'

export default function WelcomeEmail() {
  return (
    <Html>
      <Head />
      <Preview>Welcome to TolongLabs</Preview>
      <Tailwind>
        <Body className="bg-slate-50 font-sans">
          <Container className="mx-auto max-w-xl p-6">
            <OnboardingDefault _firstName="Alex" _productName="TolongDesign" />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
```

## Examples

- [emailcn Installation Guide](https://emailcn.run/docs/installation) — Complete
  instructions for configuring React Email, MJML, and JSX Email registries.
- [emailcn Registry Reference](https://emailcn.run/docs/registry) —
  Documentation on namespacing components across different email frameworks.
- [emailcn GitHub Repository](https://github.com/shadcn-labs/emailcn) — Upstream
  repository with full component source code and template examples.

## When to use it

- Use it when designing transactional emails (sign-up welcomes, magic links,
  billing notifications) and you want reusable, battle-tested layouts.
- Use it when you already use React Email or MJML and want shadcn-style CLI
  installation rather than copy-pasting raw HTML tables.
- Skip it when generating downloadable PDFs or paginated documents; use
  [pdfcn](../component-libraries/pdfcn.md) instead.

## Agent notes

- Official documentation URL: `https://emailcn.run/docs`.
- CLI syntax: `npx shadcn add @emailcn/<framework>/<component>`. Valid framework
  paths include `react-email`, `mjml-react`, and `jsx-email`.
- Installed components export composable `*Section` sub-components along with
  full block defaults.
- Generates inline-compatible styles and verified email-safe HTML tables.

## Alternatives in this repo

- [pdfcn](../component-libraries/pdfcn.md) — Sibling library in Shadcn Labs
  focused on generating paginated PDF documents and invoices in React.
- [Shadcn Labs](../component-libraries/shadcn-labs.md) — The parent ecosystem
  containing emailcn, termcn, and other domain-specific registries.

## Sources

- [emailcn Official Website](https://emailcn.run/) — checked 2026-10-07
- [emailcn Documentation](https://emailcn.run/docs) — checked 2026-10-07
- [emailcn GitHub Repository](https://github.com/shadcn-labs/emailcn) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components)
