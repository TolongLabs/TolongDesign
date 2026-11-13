---
name: Ghostty
slug: ghostty
section: Desktop
section_slug: desktop
source_url: 'https://ghostty.org/'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: Fast GPU-accelerated terminal emulator for developers.
paywall: free
pricing_summary:
  'Ghostty is a free, MIT-licensed terminal emulator with no paid tier.'
open_source: true
license: MIT
category_tags: [terminal, developer-tools, themes, configuration]
best_for: [terminal workflows, shell-based development, configurable themes]
stack: []
execution_mode: reference
surface: ['cli-tui', 'desktop']
status: active
agent_friendly: false
last_verified: 2026-10-07
---

# Ghostty

> Fast GPU-accelerated terminal emulator for developers. It combines a native
> desktop interface with a configurable terminal and a large built-in theme set.

## At a glance

| Field          | Value                                                                           |
| -------------- | ------------------------------------------------------------------------------- |
| Source         | [ghostty.org](https://ghostty.org/)                                             |
| Paywall        | **Free** — open-source application with no paid tier                            |
| Open source    | Yes — [MIT on GitHub](https://github.com/ghostty-org/ghostty/blob/main/LICENSE) |
| Type           | Cross-platform terminal emulator                                                |
| Works with     | macOS and Linux; package availability depends on distribution                   |
| Best for       | Developer terminal sessions and custom terminal configuration                   |
| Agent-friendly | No — terminal application, not a coding-agent integration                       |

## What it is

Ghostty is a terminal emulator with GPU acceleration and platform-native user
interfaces. It is available for macOS and Linux, though the project officially
distributes prebuilt binaries only for macOS; Linux packages are generally
maintained by distributions or community packagers.

The application works with sensible defaults and does not require a config file
to get started. Developers can customize themes, keybindings, fonts, and other
settings through a text configuration file. The official documentation lists
hundreds of built-in color themes.

Ghostty's application source is MIT-licensed. The project notes that its
application icons are not included under that licence, so do not reuse the
branding or icon artwork as though it were MIT-licensed.

## Paywall and pricing

- **Free:** The application and source are available without a subscription.
- **Paid:** No paid tier or subscription price is published.
- **Sign-up required?** No account is needed to install or run the application.
- **Licence for client work:** The application source is MIT-licensed. The
  Ghostty name and artwork are separate branding; icons are not covered by the
  application licence.

Checked 2026-10-07 against the official documentation and repository licence.

## How to use

1. Install Ghostty using the official instructions for the operating system. The
   project supplies a macOS binary; for Linux, use the package source
   recommended by the distribution or the documented build process.
2. Launch the application and use it with the shell and command-line tools
   already configured for the project.
3. Start with the default settings. If you want a different palette, edit the
   `config.ghostty` file and add a theme:

   ```ini
   theme = Catppuccin Frappe
   ```

4. Run `ghostty +list-themes` to browse the built-in theme names. Reload the
   configuration with the platform shortcut documented in the config guide.
5. Review community configuration files before importing them; configuration and
   theme files can set more than colors.

## Examples

- [Installation guide](https://ghostty.org/docs/install/binary) — compare
  official macOS downloads with Linux package options.
- [Color theme guide](https://ghostty.org/docs/features/theme) — select a
  built-in theme or define theme files.
- [Configuration guide](https://ghostty.org/docs/config) — configure the
  terminal with the documented `key = value` syntax.
- [Features overview](https://ghostty.org/docs/features) — browse the documented
  terminal capabilities.
- [Release notes](https://ghostty.org/docs/install/release-notes) — review
  published versions and changes.

## When to use it

- Use it when a developer wants a configurable terminal with native desktop
  integration and GPU-accelerated rendering.
- Use the theme documentation when matching terminal colors to a project
  workspace or personal setup.
- Skip it when a task requires a browser terminal embedded in a product or an
  agent-callable interface; Ghostty is a local desktop application.

## Agent notes

- Official docs: [ghostty.org/docs](https://ghostty.org/docs).
- Install instructions vary by platform. The official project provides prebuilt
  macOS binaries; Linux package sources are not all maintained by the Ghostty
  project.
- Configuration file: `config.ghostty` or `config` in the documented Ghostty
  configuration directory.
- `ghostty +list-themes` prints built-in themes;
  `ghostty +show-config --default --docs` prints the documented default
  configuration.
- The Ghostty source is MIT, but application icons and project branding are not
  licensed under that grant.

## Alternatives in this repo

- [Raycast](../desktop/raycast.md) — use for a keyboard-driven launcher and
  extension workflow rather than terminal sessions.
- [Warp](../desktop/warp.md) — compare another developer-focused terminal with
  an integrated command interface.
- [Shiori](../utilities/shiori.md) — use for agent-accessible research links
  rather than a local terminal.

## Sources

- [Official Ghostty site](https://ghostty.org/) — checked 2026-10-07
- [Ghostty documentation](https://ghostty.org/docs) — checked 2026-10-07
- [Binary and package installation](https://ghostty.org/docs/install/binary) —
  checked 2026-10-07
- [Configuration guide](https://ghostty.org/docs/config) — checked 2026-10-07
- [Theme documentation](https://ghostty.org/docs/features/theme) — checked
  2026-10-07
- [Features overview](https://ghostty.org/docs/features) — checked 2026-10-07
- [Ghostty GitHub repository](https://github.com/ghostty-org/ghostty) — checked
  2026-10-07
- [MIT licence](https://github.com/ghostty-org/ghostty/blob/main/LICENSE) —
  checked 2026-10-07
- [Designeer listing](https://designeer.xyz/utilities) — checked 2026-10-07
