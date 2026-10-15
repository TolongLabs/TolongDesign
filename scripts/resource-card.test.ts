import { describe, expect, test } from 'bun:test'
import { renderResourceCard, type CardInput } from './resource-card'

const resource = (over: Partial<CardInput> = {}): CardInput => ({
  id: 'icons/lucide',
  name: 'Lucide',
  doc: 'docs/design/icons/lucide.md',
  source_url: 'https://lucide.dev/',
  meta: { execution_mode: 'package', best_for: ['icon sets for React interfaces'], paywall: 'free' },
  ...over
})

describe('renderResourceCard', () => {
  test('renders every required field', () => {
    const card = renderResourceCard(resource({ meta: { ...resource().meta, install: 'bun add lucide-react' } }))
    expect(card).toBe(
      [
        'name: Lucide',
        'id: icons/lucide',
        'mode: package',
        'install: bun add lucide-react',
        'best for: icon sets for React interfaces',
        'doc: docs/design/icons/lucide.md'
      ].join('\n')
    )
  })

  test('keeps a card within the character budget', () => {
    expect(renderResourceCard(resource()).length).toBeLessThanOrEqual(320)
  })

  test('falls back to the source URL when there is no install command', () => {
    const card = renderResourceCard(resource({ meta: { execution_mode: 'reference', best_for: ['visual research'] } }))
    expect(card).toContain('source: https://lucide.dev/')
    expect(card).not.toContain('install:')
  })

  test('preserves a short command whole', () => {
    const card = renderResourceCard(resource({ meta: { execution_mode: 'package', install: 'bun add lucide-react' } }))
    expect(card).toContain('install: bun add lucide-react')
  })

  test('points a long command at the doc instead of clipping it', () => {
    const command = `bunx --package ${'x'.repeat(300)} --yes install-everything --flag`
    const card = renderResourceCard(resource({ meta: { execution_mode: 'package', install: command } }))
    expect(card).not.toContain('install-everything')
    expect(card).toContain('install: see docs/design/icons/lucide.md')
    expect(card.length).toBeLessThanOrEqual(320)
    expect(card.trimEnd().endsWith('doc: docs/design/icons/lucide.md')).toBe(true)
  })

  test('never inlines a multiline command as a fragment', () => {
    const command = 'brew install --cask figma\nfigma --export ./out'
    const card = renderResourceCard(resource({ meta: { execution_mode: 'registry', install: command } }))
    expect(card).not.toContain('brew install --cask figma')
    expect(card).toContain('install: see docs/design/icons/lucide.md')
    expect(card.split('\n')).toHaveLength(6)
  })

  test('bounds long names, ids, modes, commands and doc paths', () => {
    const card = renderResourceCard(
      resource({
        id: `section/${'i'.repeat(400)}`,
        name: `N${'a'.repeat(400)}me`,
        doc: `docs/design/section/${'d'.repeat(400)}.md`,
        meta: {
          execution_mode: `m${'o'.repeat(400)}`,
          install: `bun add ${'p'.repeat(400)}`,
          best_for: [`b${'e'.repeat(400)}st`]
        }
      })
    )
    expect(card.length).toBeLessThanOrEqual(320)
    expect(card.split('\n')).toHaveLength(6)
    expect(card).toContain('mode: unknown')
  })

  test('renders missing values without inventing facts', () => {
    const card = renderResourceCard(resource({ source_url: null, meta: {} }))
    expect(card).toBe(
      [
        'name: Lucide',
        'id: icons/lucide',
        'mode: unknown',
        'source: not published',
        'best for: not published',
        'doc: docs/design/icons/lucide.md'
      ].join('\n')
    )
  })

  test('accepts malformed metadata without throwing', () => {
    const card = renderResourceCard(
      resource({ source_url: null, meta: { execution_mode: 7, install: 42, best_for: 'not-a-list', stack: null } })
    )
    expect(card).toContain('mode: unknown')
    expect(card).toContain('source: not published')
    expect(card).toContain('best for: not published')
  })

  test('collapses whitespace and control characters inside rendered values', () => {
    const card = renderResourceCard(
      resource({ name: 'Multi\tline\nname', meta: { execution_mode: 'package', best_for: ['line one\nline two'] } })
    )
    expect(card).toContain('name: Multi line name')
    expect(card).toContain('best for: line one line two')
    expect(card.split('\n')).toHaveLength(6)
  })

  test('uses only the first best_for value and does not derive permission from the mode', () => {
    const card = renderResourceCard(
      resource({ meta: { execution_mode: 'reference', best_for: ['icons', 'illustrations'] } })
    )
    expect(card).toContain('best for: icons')
    expect(card).not.toContain('illustrations')
    expect(card).not.toContain('agent')
    expect(card).not.toContain('open source')
  })
})
