---
name: RegExr
slug: regexr
section: Utilities
section_slug: utilities
source_url: https://regexr.com/
designeer_url: https://designeer.xyz/utilities
designeer_blurb: Interactive sandbox for testing regular expressions.
paywall: free
pricing_summary: 'Completely free and open source under the GPL-3.0 licence.'
open_source: true
license: GPL-3.0
category_tags: [regex, testing, developer-tools, parsing, utilities]
best_for:
  [regular expressions, regex debugging, pattern testing, syntax reference]
stack: ['javascript', 'regex']
execution_mode: browser-app
surface: ['development']
status: active
agent_friendly: false
last_verified: 2026-10-07
---

# RegExr

> Interactive sandbox for testing regular expressions. TolongLabs developers
> reach for RegExr to build, test, and document complex string matching patterns
> with real-time visual syntax breakdown and match highlighting.

## At a glance

| Field          | Value                                                        |
| -------------- | ------------------------------------------------------------ |
| Source         | [regexr.com](https://regexr.com/)                            |
| Paywall        | **Free** — 100% free and open source                         |
| Open source    | Yes — GPL-3.0 ([GitHub](https://github.com/gskinner/regexr)) |
| Type           | Regular expression sandbox and reference tool                |
| Works with     | JavaScript RegExp, PCRE / PHP, Web browsers                  |
| Best for       | Regex debugging, pattern testing, syntax reference           |
| Agent-friendly | No — Interactive browser testing tool                        |

## What it is

RegExr is an established, interactive web application created by Grant Skinner
and the team at gskinner for learning, constructing, and testing regular
expressions. Available on the web for over a decade, it remains one of the most
reliable developer sandboxes for testing regex patterns against sample data.

As developers input regular expressions and test strings, RegExr updates results
in real time. It features a color-coded syntax highlighter that breaks down
individual tokens—capturing groups, character classes, lookaheads, anchors, and
quantifiers—and provides contextual explanations upon hovering. It supports both
JavaScript RegExp engine behavior and PCRE (Perl Compatible Regular Expressions)
/ PHP syntax.

Beyond simple validation, RegExr includes a searchable community pattern library
for common tasks (e.g. validating email addresses, URLs, semantic version tags,
hex colors), integrated substitution tools, and an interactive cheat sheet.

## Paywall and pricing

- **Free:** The complete regular expression editor, engine switchers, cheat
  sheets, and community pattern browsing are completely free.
- **Paid:** None. There are no paid subscriptions or pro accounts.
- **Sign-up required?** No. Creating an account is optional only if you want to
  save and publish custom patterns to the community directory.
- **Licence for client work:** RegExr itself is open-source under GPL-3.0.
  Patterns designed and tested with RegExr can be used freely in proprietary and
  client codebases.

Verified on the official GitHub repository and website on 2026-10-07.

## How to use

1. Open [regexr.com](https://regexr.com/) in your browser.
2. Select your target regex engine (JavaScript or PCRE) in the top bar.
3. Enter your regular expression in the Expression input area with appropriate
   flags (e.g., `g`, `m`, `i`).
4. Paste edge cases and realistic test strings into the Text area.
5. Inspect highlighted matches, capture group numbers, and hover over syntax
   tokens to review explanations.
6. Switch to the "Replace" tool tab if testing string substitution logic:

```typescript
// Sample implementation in TypeScript using the tested pattern
const slugifyPattern = /[^a-z0-9]+/gi

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(slugifyPattern, '-')
    .replace(/^-+|-+$/g, '')
}
```

## Examples

- [RegExr Sandbox](https://regexr.com/) — Interactive editor with live match
  display and token breakdown.
- [GitHub Repository](https://github.com/gskinner/regexr) — Source code, issue
  tracker, and project history maintained by gskinner.
- [gskinner Studio](https://gskinner.com/) — Official portfolio and background
  from the creators of RegExr.

## When to use it

- Use it when developing non-trivial string parsers, route matchers, or form
  input validators.
- Use it to debug subtle regex differences between JavaScript and PCRE engines.
- Skip it for routine simple string operations where built-in string methods
  (`startsWith`, `includes`, `split`) are faster and more readable.
- Skip it if you need data transformation between language types; use
  [Transform](../utilities/transform.md) instead.

## Agent notes

- Official application: `https://regexr.com/`.
- Permalinks can be shared with encoded patterns via URL format:
  `https://regexr.com/<id>`.
- While AI coding agents can write regular expressions directly, RegExr is an
  invaluable interactive verification sandbox when collaborating with human
  engineers on tricky edge cases.

## Alternatives in this repo

- [Transform](../utilities/transform.md) — Polyglot converter for transforming
  JSON, schemas, and types between languages.
- [SVGOMG](../utilities/svgomg.md) — Browser GUI for optimizing SVG vector
  markup.
- [Ray.so](../utilities/ray-so.md) — Visual code presentation tool for syntax
  highlighting and documentation graphics.

## Sources

- [Official site](https://regexr.com/) — checked 2026-10-07
- [GitHub repository](https://github.com/gskinner/regexr) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/utilities)
