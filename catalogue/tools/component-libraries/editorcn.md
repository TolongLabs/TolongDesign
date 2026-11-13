---
name: editorcn
slug: editorcn
section: Component Libraries
section_slug: component-libraries
source_url: https://editorcn.vercel.app/
designeer_url: https://designeer.xyz/components
designeer_blurb: 'Rich text editor components for React, built on Tiptap.'
paywall: free
pricing_summary: 'Free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [editor, tiptap, rich-text, shadcn, react]
best_for: [cms editors, note taking, comments and composers]
stack: ['react', 'tiptap', 'tailwind', 'shadcn']
execution_mode: registry
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# editorcn

> Rich text editor components for React, built on Tiptap. TolongLabs developers
> reach for editorcn to integrate modern rich text editing—from classic toolbars
> to Notion-style slash commands—directly into React applications using
> shadcn/ui.

## At a glance

| Field          | Value                                                          |
| -------------- | -------------------------------------------------------------- |
| Source         | [editorcn.vercel.app](https://editorcn.vercel.app/)            |
| Paywall        | **Free** — 100% free and open source                           |
| Open source    | Yes — MIT ([GitHub](https://github.com/shadcn-labs/editorcn))  |
| Type           | Rich text editor component library and registry                |
| Works with     | React 18/19, Tiptap v2/v3, Tailwind CSS v4, shadcn/ui          |
| Best for       | CMS editors, note taking, comments and composers               |
| Agent-friendly | Yes — shadcn CLI registry, copy-paste components, npm packages |

## What it is

editorcn (also hosted as rtecn) is an open-source rich text editor component
system created by Abdullah Mukadam under the Shadcn Labs umbrella. It bridges
the robust headless editing capabilities of Tiptap with the styling and theming
patterns of shadcn/ui.

The library offers two distinct editing experiences:

- **`@editorcn/editor` (Toolbar-style):** A classic rich text editor featuring
  sticky toolbars, floating bubble menus, alignment options, link managers, and
  over 20 modular control buttons.
- **`@editorcn/block-editor` (Block-style):** A modern, Notion-like canvas
  featuring draggable block handles and a slash command menu (`/`) for inserting
  headings, callouts, and lists inline.

In addition to editing surfaces, editorcn provides a Static Renderer package for
efficiently displaying saved editor content in read-only contexts like blog
posts, comments, or chat histories without mounting the full ProseMirror editing
engine. Components adapt automatically to shadcn theme tokens, fonts, and dark
mode configurations.

## Paywall and pricing

- **Free:** Both editor styles, extension packages, static renderers, and
  documentation are 100% free and open source.
- **Paid:** None.
- **Sign-up required?** No.
- **Licence for client work:** Released under the MIT licence. Completely
  permissible for commercial SaaS platforms, client CMS tools, and internal
  wikis.

Checked on the official website and repository on 2026-10-07.

## How to use

1. Add the editorcn registry to your `components.json` or install directly via
   the shadcn CLI:

```bash
bunx --bun shadcn@latest add @editorcn/editor
```

For the block-style Notion editor, install the block editor:

```bash
bunx --bun shadcn@latest add @editorcn/block-editor
```

2. Ensure peer dependencies for Tiptap are present:

```bash
bun add @tiptap/react @tiptap/pm @tiptap/starter-kit
```

3. Import and render the editor within a React client component:

```tsx
'use client'

import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { RichTextEditor } from '@/components/editor'
import '@/components/editor/style.css'

export function DocumentEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Start drafting your content here...</p>'
  })

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar sticky>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
          <RichTextEditor.H2 />
          <RichTextEditor.BulletList />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>
      <RichTextEditor.Content />
      <RichTextEditor.Footer showWordCount />
    </RichTextEditor>
  )
}
```

## Examples

- [editorcn Installation Guide](https://editorcn.vercel.app/docs/getting-started)
  — Overview of toolbar vs block editor setup.
- [Toolbar Editor Documentation](https://editorcn.vercel.app/docs/editor) —
  Detailed API reference for buttons, bubble menus, and controls.
- [editorcn GitHub Repository](https://github.com/shadcn-labs/editorcn) — Source
  code monorepo containing packages, extensions, and documentation.

## When to use it

- Use it when your application needs rich text authoring—such as blog editors,
  markdown composers, support ticketing desks, or rich comment threads.
- Use it when you want your rich text editor to match your application's shadcn
  UI tokens and Tailwind CSS styling seamlessly.
- Skip it when your project only requires terminal-based command inputs or
  simple plain text inputs; consider standard inputs or
  [termcn](../component-libraries/termcn.md) instead.

## Agent notes

- Official documentation URL: `https://editorcn.vercel.app/docs`.
- Primary mirror: `https://www.rtecn.space/`.
- Components are available either as copy-paste registry source code or via
  published npm packages (`@editorcn/editor`, `@editorcn/block-editor`).
- Requires `@tiptap/*` peer dependencies (`@tiptap/react`, `@tiptap/pm`,
  `@tiptap/starter-kit`) installed in the consumer project.

## Alternatives in this repo

- [startercn](../component-libraries/startercn.md) — Base template for
  publishing custom shadcn-compatible registries.
- [Shadcn Labs](../component-libraries/shadcn-labs.md) — The parent ecosystem
  containing editorcn, termcn, and other specialized registries.

## Sources

- [editorcn Official Website](https://editorcn.vercel.app/) — checked 2026-10-07
- [editorcn Documentation](https://editorcn.vercel.app/docs) — checked
  2026-10-07
- [editorcn GitHub Repository](https://github.com/shadcn-labs/editorcn) —
  checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components)
