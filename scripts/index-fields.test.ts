import { describe, expect, test } from 'bun:test'
import { extractInstall, renderPeopleRows } from './index-fields'
import type { CatalogueTool, Person } from './lib'

const doc = (howToUse: string) =>
  `---\nname: Example\n---\n\n# Example\n\n## What it is\n\nA thing.\n\n## How to use\n\n${howToUse}\n\n## Examples\n\n- [One](https://example.com)\n`

describe('extractInstall', () => {
  test('returns null when there is no H2 at all', () => {
    expect(extractInstall('Just a paragraph.\n\n```bash\nbun add x\n```\n')).toBeNull()
  })

  test('returns null when How to use has no shell fence', () => {
    const markdown = doc('Copy this markup:\n\n```html\n<div>Hi</div>\n```')
    expect(extractInstall(markdown)).toBeNull()
  })

  test('returns the first bash fence inside How to use', () => {
    const markdown = doc(
      'Install it:\n\n```bash\nbun add lucide-react\n```\n\nThen import it.\n\n```tsx\n<Icon />\n```'
    )
    expect(extractInstall(markdown)).toBe('bun add lucide-react')
  })

  test('accepts sh and shell fences and skips earlier non-shell fences', () => {
    const sh = doc('```html\n<p>no</p>\n```\n\n```sh\nbrew install --cask figma\n```')
    expect(extractInstall(sh)).toBe('brew install --cask figma')
    const shell = doc('```json\n{}\n```\n\n```shell\nnpx shadcn@latest init\n```')
    expect(extractInstall(shell)).toBe('npx shadcn@latest init')
  })

  test('does not leak a fence from the next H2 section', () => {
    const markdown =
      doc('Read the docs, then browse the gallery.') + '\n## Examples\n\n```bash\nbun add not-an-install\n```\n'
    expect(extractInstall(markdown)).toBeNull()
  })

  test('handles CRLF line endings', () => {
    const markdown =
      '## How to use\r\n\r\n1. Install it:\r\n\r\n```bash\r\nbun add framer-motion\r\n```\r\n\r\n## Examples\r\n'
    expect(extractInstall(markdown)).toBe('bun add framer-motion')
  })

  test('handles fence longer than three backticks', () => {
    const markdown = doc('Install:\n\n````bash\nbun add three\n````\n\n`````sh\nbun add five\n`````')
    expect(extractInstall(markdown)).toBe('bun add three')
  })

  test('handles backticks nested inside the code block', () => {
    const markdown = doc('Install and verify:\n\n```bash\nbun add x && echo "`x --version`"\n```')
    expect(extractInstall(markdown)).toBe('bun add x && echo "`x --version`"')
  })

  test('keeps a literal multiline command intact', () => {
    const markdown = doc(
      'Install the registry, then add components:\n\n```bash\npnpm dlx @jessin/nexui@latest init\npnpm dlx @jessin/nexui@latest add button card badge\n```'
    )
    expect(extractInstall(markdown)).toBe(
      'pnpm dlx @jessin/nexui@latest init\npnpm dlx @jessin/nexui@latest add button card badge'
    )
  })

  test('accepts info strings with extra words after the language', () => {
    const markdown = doc('```bash title="install"\nbun add y\n```')
    expect(extractInstall(markdown)).toBe('bun add y')
  })

  test('is case-insensitive about the language but not the heading text', () => {
    expect(extractInstall(doc('```BASH\nbun add y\n```'))).toBe('bun add y')
    expect(extractInstall(doc('```bash\nbun add y\n```').replace('## How to use', '## How To Use'))).toBe('bun add y')
    expect(extractInstall('## How-to-use\n\n```bash\nbun add y\n```')).toBeNull()
  })

  test('ignores an empty shell block and keeps searching', () => {
    const markdown = doc('```bash\n```\n\n```bash\nbun add real\n```')
    expect(extractInstall(markdown)).toBe('bun add real')
  })

  test('does not treat an unclosed fence as an install', () => {
    const markdown = doc('```bash\nbun add truncated\n')
    expect(extractInstall(markdown)).toBeNull()
  })

  test('does not read a How to use heading below a deeper heading level', () => {
    const markdown = '### How to use\n\n```bash\nbun add nested\n```\n'
    expect(extractInstall(markdown)).toBeNull()
  })
})

const tools: CatalogueTool[] = [
  {
    name: 'Sonner',
    url: 'https://sonner.emilkowal.ski/',
    description: 'Toasts',
    section: 'Utilities',
    section_slug: 'utilities',
    slug: 'sonner',
    designeer_url: 'https://designeer.xyz/utilities',
    doc: 'docs/design/utilities/sonner.md'
  },
  {
    name: 'Vaul',
    url: 'https://vaul.emilkowal.ski/',
    description: 'Drawers',
    section: 'Component Libraries',
    section_slug: 'component-libraries',
    slug: 'vaul',
    designeer_url: 'https://designeer.xyz/components',
    doc: 'docs/design/component-libraries/vaul.md'
  }
]

const person = (over: Partial<Person> = {}): Person => ({
  name: 'Emil Kowalski',
  url: 'https://emilkowal.ski/',
  description: 'Creator of Sonner, Vaul, and animations.',
  sameAs: ['https://github.com/emilkowalski'],
  ...over
})

/** Split a table row on unescaped pipes, so an escaped `\|` inside a cell does not count. */
const columns = (row: string) =>
  row
    .split(/(?<!\\)\|/)
    .slice(1, -1)
    .map((column) => column.trim())

describe('renderPeopleRows', () => {
  test('links a known created tool to its relative doc and credit source', () => {
    const [row] = renderPeopleRows(
      [
        person({
          created_tools: ['utilities/sonner', 'component-libraries/vaul'],
          created_tools_evidence: {
            'utilities/sonner': {
              source_url: 'https://github.com/emilkowalski/sonner',
              checked: '2026-10-15',
              quote: 'Sonner is built and maintained by Emil Kowalski.'
            },
            'component-libraries/vaul': {
              source_url: 'https://vaul.emilkowal.ski/#credits',
              checked: '2026-10-15',
              quote: 'Vaul — a drawer component for React.'
            }
          }
        })
      ],
      tools
    )
    expect(row).toContain('[Sonner](./utilities/sonner.md)')
    expect(row).toContain('[Vaul](./component-libraries/vaul.md)')
    expect(row).toContain('[github.com](https://github.com/emilkowalski/sonner)')
    expect(columns(row)).toHaveLength(5)
  })

  test('renders no creator assertion when created_tools is missing', () => {
    const [row] = renderPeopleRows([person()], tools)
    expect(row).not.toContain('.md')
    expect(row).not.toContain('creator')
    expect(row).toContain('| — |')
  })

  test('drops unknown created tool IDs instead of guessing a doc path', () => {
    const [row] = renderPeopleRows([person({ created_tools: ['utilities/not-registered'] })], tools)
    expect(row).not.toContain('not-registered')
    expect(row).not.toContain('.md')
  })

  test('links a created tool even when its evidence entry is missing', () => {
    const [row] = renderPeopleRows([person({ created_tools: ['utilities/sonner'] })], tools)
    expect(columns(row)[4]).toBe('[Sonner](./utilities/sonner.md)')
  })

  test('never turns a hostile credit URL into a link', () => {
    const [row] = renderPeopleRows(
      [
        person({
          created_tools: ['utilities/sonner'],
          created_tools_evidence: {
            'utilities/sonner': { source_url: 'javascript:alert(1)', checked: '2026-10-15', quote: 'x' }
          }
        })
      ],
      tools
    )
    expect(row).toContain('[Sonner](./utilities/sonner.md)')
    expect(row).not.toContain('javascript:')
    expect(row).not.toContain('alert(1)')
  })

  test('escapes table-breaking and markup characters in person text', () => {
    const [row] = renderPeopleRows(
      [person({ name: 'Pipe | Amp <script>', description: 'Line one\nline two `code`' })],
      tools
    )
    expect(row).toContain('Pipe \\| Amp &lt;script&gt;')
    expect(row).toContain('Line one line two')
    expect(row).not.toContain('<script>')
    expect(row).not.toContain('\n')
    expect(columns(row)).toHaveLength(5)
  })

  test('renders one row per person, in input order', () => {
    const rows = renderPeopleRows([person({ name: 'A' }), person({ name: 'B', url: 'https://b.example/' })], tools)
    expect(rows).toHaveLength(2)
    expect(rows[0]).toContain('| A |')
    expect(rows[1]).toContain('| B |')
  })
})
