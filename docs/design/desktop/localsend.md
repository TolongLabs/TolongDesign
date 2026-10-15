---
name: LocalSend
slug: localsend
section: Desktop
section_slug: desktop
source_url: 'https://localsend.org/'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: 'Share files securely across local Wi-Fi networks.'
paywall: free
pricing_summary:
  'Completely free and open source under the Apache-2.0 licence with no
  subscriptions or accounts.'
open_source: true
license: Apache-2.0
category_tags:
  [file-sharing, local-network, open-source, cross-platform, utilities]
best_for:
  [
    local file transfers,
    mobile testing,
    offline asset sharing,
    air-gapped environments
  ]
stack: ['flutter', 'dart']
execution_mode: reference
surface: ['desktop']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# LocalSend

> Share files securely across local Wi-Fi networks. TolongLabs developers reach
> for LocalSend to transfer design mockups, mobile test builds, and large media
> assets between macOS, Linux, Windows, iOS, and Android without cloud
> intermediaries.

## At a glance

| Field          | Value                                                               |
| -------------- | ------------------------------------------------------------------- |
| Source         | [localsend.org](https://localsend.org/)                             |
| Paywall        | **Free** — 100% free and open source                                |
| Open source    | Yes — Apache-2.0 ([GitHub](https://github.com/localsend/localsend)) |
| Type           | Cross-platform local network file transfer application              |
| Works with     | macOS, Windows, Linux, Android, iOS                                 |
| Best for       | Local file transfers, mobile test builds, offline development       |
| Agent-friendly | Yes — documented REST protocol, open CLI clients, HTTPS API         |

## What it is

LocalSend is an open-source, cross-platform file and message sharing utility
that serves as a universal alternative to Apple AirDrop and Android Quick Share.
Built with Flutter and Dart, it operates entirely over local area networks
(LANs) without requiring internet access, cloud servers, or third-party relay
brokers.

Devices discover one another on the same Wi-Fi or Ethernet subnet using
multicast DNS (mDNS). Communication is secured end-to-end via HTTPS with
self-signed TLS certificates generated on the fly. Because data packets travel
directly between devices on the local router, transfer speeds saturate local
network hardware capabilities without being throttled by broadband upload
limits.

For cross-platform web and mobile development, LocalSend solves the perennial
headache of getting APKs, screenshots, test videos, or font binaries from a
Linux or Mac development workstation onto an Android or iOS testing phone
without logging into cloud storage or setting up Bluetooth pairings.

## Paywall and pricing

- **Free:** Completely free. All capabilities—including unlimited file sizes,
  batch folder transfers, clipboard sharing, and local network discovery—are
  free with no limits or advertisements.
- **Paid:** None. There are no paid tiers, pro features, or in-app purchases.
- **Sign-up required?** No. No account creation, phone number, or email address
  is needed.
- **Licence for client work:** Distributed under the Apache License 2.0.
  Permitted for commercial and client workflows across corporate networks.

Checked on the official repository and site documentation on 2026-10-07.

## How to use

1. Install LocalSend on your developer machine:

On macOS via Homebrew:

```bash
brew install --cask localsend
```

On Linux via Flathub or package manager:

```bash
flatpak install flathub org.localsend.localsend_app
```

On Windows via Winget:

```bash
winget install LocalSend.LocalSend
```

2. Install the companion client on testing mobile devices via the Apple App
   Store or Google Play Store, or install the LocalSend CLI on headless servers.

3. Ensure devices are connected to the same Wi-Fi network or local subnet. Open
   LocalSend; devices discover each other automatically with generated
   human-friendly aliases (e.g. `Sweet Carrot`, `Brave Potato`).

4. Send assets to mobile or desktop targets:

- Click **Send**, select files, folders, or copied clipboard text.
- Select the target device alias.
- Accept the transfer prompt on the recipient device.

5. Script automated transfers via the documented LocalSend HTTP protocol: The
   LocalSend daemon runs a lightweight HTTP server on port 53317:

```bash
curl -X POST https://<target-ip>:53317/api/localsend/v2/prepare-upload \
  -k -H "Content-Type: application/json" \
  -d '{"info":{"alias":"AgentRunner","version":"2.0","deviceModel":"Mac","deviceType":"desktop"},"files":{"file-1":{"id":"file-1","fileName":"build.tar.gz","size":1048576,"fileType":"application/gzip"}}}'
```

## Examples

- [LocalSend Official Website](https://localsend.org/) — Download links for
  macOS, Windows, Linux, iOS, Android, and F-Droid.
- [LocalSend GitHub Repository](https://github.com/localsend/localsend) —
  Upstream Flutter codebase with over 93,000 GitHub stars.
- [LocalSend Protocol Specification](https://github.com/localsend/protocol) —
  Official REST API and discovery specification for building custom clients.

## When to use it

- Use it when transferring build artifacts, screen recordings, mockups, or large
  video files between disparate platforms (Mac to Android, PC to iPhone) on the
  same local network.
- Use it in air-gapped or confidential client environments where sending data
  through external third-party cloud servers is strictly prohibited.
- Skip it if you need persistent clipboard history search and hotkey pasting on
  a single Mac; use [Supaste](../desktop/supaste.md) instead.
- Skip it when transferring files over the public internet between remote team
  members; use secure cloud storage or S3 buckets.

## Agent notes

- Official protocol specification: `https://github.com/localsend/protocol`.
- Default discovery port: UDP 53317 (multicast DNS).
- Default HTTP transfer port: TCP 53317 (HTTPS with self-signed certificate).
- Coding agents can integrate with local devices by sending REST requests to
  recipient endpoints or utilizing community CLI wrappers like `localsend-cli`.

## Alternatives in this repo

- [Supaste](../desktop/supaste.md) — Mac clipboard manager with visual clip
  history and local asset shelf.
- [Canario](../desktop/canario.md) — Rio-based terminal that allows quick
  dragging of images directly out of terminal panes.

## Sources

- [Official site](https://localsend.org/) — checked 2026-10-07
- [GitHub repository](https://github.com/localsend/localsend) — checked
  2026-10-07
- [LocalSend Protocol Documentation](https://github.com/localsend/protocol) —
  checked 2026-10-07
- [Designeer listing](https://designeer.xyz/utilities)
