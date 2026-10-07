---
name: pdfcn
slug: pdfcn
section: Component Libraries
section_slug: component-libraries
source_url: https://pdfcn.dev/
designeer_url: https://designeer.xyz/components
designeer_blurb: 'PDF components for React, built on Takumi and Forme.'
paywall: free
pricing_summary: 'Free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [pdf, takumi, forme, react, shadcn]
best_for: [invoices, reports, document generation]
stack: [react, takumi, forme]
agent_friendly: true
last_verified: 2026-10-07
---

# pdfcn

> PDF components for React, built on Takumi and Forme. TolongLabs developers
> reach for pdfcn to generate structured, beautifully designed PDF documents,
> invoices, and reports using declarative React components and the shadcn
> distribution model.

## At a glance

| Field          | Value                                                      |
| -------------- | ---------------------------------------------------------- |
| Source         | [pdfcn.dev](https://pdfcn.dev/)                            |
| Paywall        | **Free** — 100% free and open source                       |
| Open source    | Yes — MIT ([GitHub](https://github.com/shadcn-labs/pdfcn)) |
| Type           | PDF component library and registry                         |
| Works with     | React, Takumi (`takumi-pdf`), Forme (`@formepdf/react`)    |
| Best for       | Invoices, reports, document generation                     |
| Agent-friendly | Yes — shadcn CLI registry, copy-paste components           |

## What it is

pdfcn is an open-source React component library and registry created by Aniket
Pawar under the Shadcn Labs umbrella. It brings the modular, copy-paste workflow
of shadcn/ui to programmatic PDF authoring, allowing developers to construct
pixel-precise, paginated printable documents with React components.

Generating consistent PDFs in web applications typically requires either
antiquated server-side headless browsers or low-level canvas APIs. pdfcn solves
this by providing high-level UI components built on two modern React PDF
engines:

- **Takumi:** A lightweight, high-performance PDF renderer designed for React.
- **Forme (`@formepdf/react`):** A modern, type-safe React PDF generation
  framework.

The library offers typography primitives, tables, dividers, page numbers, and
header/footer layouts. In addition to basic primitives, pdfcn provides complete
document blocks—including minimal invoices, itemized receipts, financial
reports, and certificate layouts—along with unified theme presets
(`theme-minimal`, `theme-modern`) managed via `PdfcnThemeProvider`.

## Paywall and pricing

- **Free:** The complete collection of PDF components, blocks, themes, and
  templates is 100% free and open source.
- **Paid:** None.
- **Sign-up required?** No.
- **Licence for client work:** Released under the MIT licence. Completely
  permissible for commercial document generation, billing engines, and client
  deliverables.

Checked on the official website and repository on 2026-10-07.

## How to use

1. Install the chosen PDF engine in your project (e.g. Takumi):

```bash
bun add takumi-pdf
```

2. Add a PDF component or block using the shadcn CLI:

```bash
bunx --bun shadcn@latest add @pdfcn/takumi/invoice-minimal
```

For Forme-based rendering, target the `forme` namespace:

```bash
bunx --bun shadcn@latest add @pdfcn/forme/invoice-minimal
```

3. Import and render the component within your document template:

```tsx
import { Document, Page } from '@/components/pdf/pdf-primitives'
import { PdfcnThemeProvider } from '@/components/pdf/theme-provider'
import { Text } from '@/components/pdf/text'

export function InvoiceDocument() {
  return (
    <Document>
      <Page size="A4">
        <PdfcnThemeProvider>
          <Text variant="xl" weight="bold">
            Tax Invoice
          </Text>
          <Text variant="sm" color="muted">
            Invoice #TL-2026-0819
          </Text>
        </PdfcnThemeProvider>
      </Page>
    </Document>
  )
}
```

## Examples

- [pdfcn Installation Guide](https://pdfcn.dev/docs/installation) — Complete
  instructions for configuring Takumi and Forme renderers.
- [pdfcn Component Documentation](https://pdfcn.dev/docs/components) — Overview
  of text variants, page wrappers, and table layouts.
- [pdfcn GitHub Repository](https://github.com/shadcn-labs/pdfcn) — Source code
  repository for the PDF registry and theme presets.

## When to use it

- Use it when generating customer invoices, account statements, certificates, or
  exportable data summaries in a React application.
- Use it when you want your PDF layouts to mirror the design conventions and
  token architecture of your shadcn web application.
- Skip it when crafting responsive email newsletters or transactional emails;
  use [emailcn](../component-libraries/emailcn.md) instead.

## Agent notes

- Official documentation URL: `https://pdfcn.dev/docs`.
- Install commands use namespaced registry identifiers:
  `npx shadcn add @pdfcn/takumi/<item>` or `@pdfcn/forme/<item>`.
- Generates print-ready vector typography and CSS-like styling compatible with
  page break constraints.
- Installed components copy into `components/pdf/` with minimal external runtime
  dependencies.

## Alternatives in this repo

- [emailcn](../component-libraries/emailcn.md) — Sibling library in Shadcn Labs
  tailored for responsive transactional emails.
- [Shadcn Labs](../component-libraries/shadcn-labs.md) — The parent ecosystem
  containing pdfcn, framecn, and other domain-specific registries.

## Sources

- [pdfcn Official Website](https://pdfcn.dev/) — checked 2026-10-07
- [pdfcn Documentation](https://pdfcn.dev/docs) — checked 2026-10-07
- [pdfcn GitHub Repository](https://github.com/shadcn-labs/pdfcn) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components)
