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

test('checks docs, skills and repo-root Markdown links and tolerates missing trees', () => {
  const root = mkdtempSync(join(tmpdir(), 'repo-link-check-'))
  const docs = join(root, 'docs')
  const skill = join(root, 'skills', 'example')
  mkdirSync(docs, { recursive: true })
  mkdirSync(skill, { recursive: true })
  writeFileSync(join(root, 'README.md'), '[guide](docs/guide.md)\n[absent](nope.md)\n')
  writeFileSync(join(docs, 'guide.md'), '# Guide\n')
  writeFileSync(join(docs, 'broken.md'), '[nowhere](nowhere.md)\n')
  writeFileSync(join(skill, 'SKILL.md'), '[template](../../catalogue/TEMPLATE.md)\n')

  try {
    expect(findBrokenRelativeMarkdownLinks(root)).toEqual([
      'docs/broken.md: broken link nowhere.md',
      'skills/example/SKILL.md: broken link ../../catalogue/TEMPLATE.md',
      'README.md: broken link nope.md'
    ])
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})
