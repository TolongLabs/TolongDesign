---
name: Playwright
slug: playwright
section: Development
section_slug: development
source_url: 'https://playwright.dev/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Reliable browser automation and end-to-end testing.'
paywall: free
pricing_summary: 'Completely free and open source under the Apache-2.0 licence.'
open_source: true
license: Apache-2.0
category_tags: [testing, e2e, browser-automation, chromium, webkit]
best_for: [end-to-end testing, visual regression, automated browser workflows]
stack: ['typescript', 'javascript', 'nodejs', 'python']
execution_mode: package
surface: ['development']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Playwright

> Reliable browser automation and end-to-end testing. TolongLabs developers use
> Playwright to build resilient, cross-browser regression suites, capture visual
> diffs, and automate complex user journeys with auto-waiting assertions.

## At a glance

| Field          | Value                                                                |
| -------------- | -------------------------------------------------------------------- |
| Source         | [playwright.dev](https://playwright.dev/)                            |
| Paywall        | **Free** — 100% free and open source under Apache-2.0                |
| Open source    | Yes — Apache-2.0 ([GitHub](https://github.com/microsoft/playwright)) |
| Type           | End-to-end browser testing and automation framework                  |
| Works with     | Chromium, Firefox, WebKit, TypeScript, Node.js, Python               |
| Best for       | End-to-end testing, visual regression, automated browser QA          |
| Agent-friendly | Yes — CLI runner, codegen tool, trace viewer, JSON reporters         |

## What it is

Playwright is an open-source browser automation and end-to-end testing library
built and maintained by Microsoft. It delivers fast, reliable, and headless
automation across all modern rendering engines, including Chromium (Google
Chrome, Microsoft Edge), WebKit (Apple Safari), and Firefox.

The hallmark feature of Playwright is its built-in auto-waiting mechanism.
Playwright waits for elements to be actionable (visible, stable, enabled, and
ready to receive pointer events) before performing interactions like clicks or
keystrokes. This completely eliminates artificial timeout hacks and flaky test
failures commonly found in legacy testing frameworks.

Playwright also offers full multi-page, multi-tab, and multi-user context
support, allowing tests to simulate isolated incognito browser sessions in
parallel within the same worker process. Its debugging toolchain includes
Playwright Inspector, interactive UI mode, and the Playwright Trace Viewer,
which records DOM snapshots, console logs, network waterfalls, and screencasts
for post-mortem analysis.

## Paywall and pricing

- **Free:** The complete Playwright framework, test runner, browser binaries,
  Trace Viewer, and CLI tools are 100% free and open source.
- **Paid:** None. No commercial licenses or usage fees.
- **Sign-up required?** No.
- **Licence for client work:** Apache License 2.0. Unrestricted for commercial
  and proprietary testing suites.

Verified on the official Playwright documentation and GitHub repository on
2026-10-07.

## How to use

1. Initialize Playwright in an existing project:

```bash
bun create playwright
```

2. Configure `playwright.config.ts`:

```typescript
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    }
  ]
})
```

3. Write an end-to-end test specification (`e2e/auth.spec.ts`):

```typescript
import { test, expect } from '@playwright/test'

test('user signs in and navigates to dashboard', async ({ page }) => {
  await page.goto('/login')
  await page.getByLabel('Email address').fill('developer@tolonglabs.com')
  await page.getByLabel('Password').fill('secretpassword')
  await page.getByRole('button', { name: 'Sign in' }).click()

  await expect(page).toHaveURL('/dashboard')
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Overview'
  )
})
```

4. Run tests and inspect traces:

```bash
# Run all tests headlessly
bunx playwright test

# Run tests in interactive UI mode
bunx playwright test --ui

# Record user interactions into test code
bunx playwright codegen http://localhost:3000
```

## Examples

- [Playwright Getting Started](https://playwright.dev/docs/intro) — Official
  quickstart tutorial covering test configuration, locators, and assertions.
- [Playwright Locators Guide](https://playwright.dev/docs/locators) —
  Recommended practices for resilient accessibility-based element selection.
- [Playwright Trace Viewer](https://playwright.dev/docs/trace-viewer) — Visual
  debugging tool documentation for analyzing failed CI test runs.

## When to use it

- Use it on all production client web applications to establish automated smoke
  tests, checkout flow verifications, and cross-browser regression suites.
- Use it to run accessibility audits, visual regression screenshot comparisons,
  and PDF/screenshot export generation.
- Skip it when you want AI agents to write and evaluate tests from natural
  language instructions via MCP; use [Alumnium](../development/alumnium.md).

## Agent notes

- Official documentation: `https://playwright.dev/`.
- Coding agents can run tests with `--reporter=json` to parse structured test
  results directly from stdout.
- Prefer user-facing locators (`getByRole`, `getByText`, `getByLabel`) over CSS
  selectors to keep test suites resilient against refactoring.
- Ensure browser dependencies are installed in CI or containerized environments
  using `bunx playwright install --with-deps`.

## Alternatives in this repo

- [Alumnium](../development/alumnium.md) — Natural-language end-to-end testing
  framework controlled directly by coding agents via Model Context Protocol.

## Sources

- [Official site](https://playwright.dev/) — checked 2026-10-07
- [Documentation](https://playwright.dev/docs/intro) — checked 2026-10-07
- [GitHub repository](https://github.com/microsoft/playwright) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/build)
