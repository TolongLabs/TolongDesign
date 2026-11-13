import { expect, test } from 'bun:test'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { findBrokenRelativeMarkdownLinks } from './relative-markdown-links'

test('finds broken catalogue Markdown links and ignores code and external links', () => {
  const root = mkdtempSync(join(tmpdir(), 'catalogue-link-check-'))
  const catalogue = join(root, 'catalogue')
  mkdirSync(catalogue, { recursive: true })
  writeFileSync(join(catalogue, 'target.md'), '# Target\n')
  writeFileSync(
    join(catalogue, 'source.md'),
    [
      '[valid](target.md#section)',
      '[missing page](missing.md)',
      '[reference][missing-target]',
      '',
      '[missing-target]: missing-reference.md',
      '`[inline code](inline.md)`',
      '```md',
      '[fenced code](fenced.md)',
      '```',
      '[external](https://example.test/page.md)'
    ].join('\n')
  )

  try {
    expect(findBrokenRelativeMarkdownLinks(root)).toEqual([
      'catalogue/source.md: broken link missing.md',
      'catalogue/source.md: broken link missing-reference.md'
    ])
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})
