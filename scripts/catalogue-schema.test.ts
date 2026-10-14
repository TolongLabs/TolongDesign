import { describe, expect, test } from 'bun:test'
import {
  EXECUTION_MODES,
  STATUSES,
  SURFACES,
  STACKS,
  normalizeStack,
  validatePeople,
  validateResourceMeta
} from './catalogue-schema'

describe('catalogue schema vocabulary and constants', () => {
  test('defines required execution modes', () => {
    expect(EXECUTION_MODES).toEqual(['registry', 'package', 'snippet', 'mcp-skill', 'browser-app', 'reference'])
  })

  test('defines required surfaces', () => {
    expect(SURFACES).toEqual([
      'web-ui',
      'web-3d',
      'cli-tui',
      'email',
      'pdf',
      'video',
      'og-image',
      'audio',
      'comics',
      'desktop',
      'print',
      'reference',
      'web-asset',
      'development',
      'hosting',
      'mobile-ui'
    ])
  })

  test('defines required statuses', () => {
    expect(STATUSES).toEqual(['active', 'degraded', 'unreachable'])
  })

  test('STACKS contains canonical stacks and no old aliases', () => {
    expect(STACKS).toContain('radix')
    expect(STACKS).toContain('motion')
    expect(STACKS).toContain('nodejs')
    expect(STACKS).toContain('cloudflare-workers')
    expect(STACKS).toContain('postgresql')
    expect(STACKS).toContain('browser')

    expect(STACKS).not.toContain('framer-motion')
    expect(STACKS).not.toContain('radix-ui')
    expect(STACKS).not.toContain('node')
    expect(STACKS).not.toContain('workers')
    expect(STACKS).not.toContain('postgres')
    expect(STACKS).not.toContain('web')
  })

  test('normalizeStack maps aliases to canonical values and trims/lowercases', () => {
    expect(normalizeStack('framer-motion')).toBe('motion')
    expect(normalizeStack('radix-ui')).toBe('radix')
    expect(normalizeStack('node')).toBe('nodejs')
    expect(normalizeStack('workers')).toBe('cloudflare-workers')
    expect(normalizeStack('postgres')).toBe('postgresql')
    expect(normalizeStack('web')).toBe('browser')

    expect(normalizeStack('  Framer-Motion  ')).toBe('motion')
    expect(normalizeStack('ReAcT')).toBe('react')
    expect(normalizeStack('tailwind')).toBe('tailwind')
  })
})

describe('validateResourceMeta', () => {
  const baseValidMeta = {
    execution_mode: 'package',
    surface: ['web-ui'],
    status: 'active',
    stack: ['react', 'tailwind']
  }

  test('passes for valid metadata', () => {
    const errors = validateResourceMeta(baseValidMeta, 'docs/design/test.md')
    expect(errors).toEqual([])
  })

  test('fails for missing required metadata keys', () => {
    const errors = validateResourceMeta({}, 'docs/design/test.md')
    expect(errors.some((e) => e.includes('missing required "execution_mode"'))).toBe(true)
    expect(errors.some((e) => e.includes('missing required "surface"'))).toBe(true)
    expect(errors.some((e) => e.includes('missing required "status"'))).toBe(true)
  })

  test('fails for invalid execution mode', () => {
    const errors = validateResourceMeta({ ...baseValidMeta, execution_mode: 'invalid-mode' }, 'docs/design/test.md')
    expect(errors.some((e) => e.includes('invalid execution_mode "invalid-mode"'))).toBe(true)
  })

  test('fails for non-string execution mode', () => {
    const errors = validateResourceMeta({ ...baseValidMeta, execution_mode: 123 }, 'docs/design/test.md')
    expect(errors.some((e) => e.includes('execution_mode must be a string'))).toBe(true)
  })

  test('fails for invalid status', () => {
    const errors = validateResourceMeta({ ...baseValidMeta, status: 'offline' }, 'docs/design/test.md')
    expect(errors.some((e) => e.includes('invalid status "offline"'))).toBe(true)
  })

  test('fails for empty or non-array surface', () => {
    const emptyErrors = validateResourceMeta({ ...baseValidMeta, surface: [] }, 'docs/design/test.md')
    expect(emptyErrors.some((e) => e.includes('"surface" must be a non-empty list'))).toBe(true)

    const nonArrayErrors = validateResourceMeta({ ...baseValidMeta, surface: 'web-ui' }, 'docs/design/test.md')
    expect(nonArrayErrors.some((e) => e.includes('"surface" must be a non-empty list'))).toBe(true)
  })

  test('fails for non-string or invalid surface members', () => {
    const nonStringErrors = validateResourceMeta({ ...baseValidMeta, surface: [123] }, 'docs/design/test.md')
    expect(nonStringErrors.some((e) => e.includes('"surface" elements must be strings'))).toBe(true)

    const invalidErrors = validateResourceMeta(
      { ...baseValidMeta, surface: ['unknown-surface'] },
      'docs/design/test.md'
    )
    expect(invalidErrors.some((e) => e.includes('invalid surface "unknown-surface"'))).toBe(true)
  })

  test('fails for duplicate surface values', () => {
    const errors = validateResourceMeta({ ...baseValidMeta, surface: ['web-ui', 'web-ui'] }, 'docs/design/test.md')
    expect(errors.some((e) => e.includes('duplicate surface "web-ui"'))).toBe(true)
  })

  test('fails for duplicate stack values', () => {
    const errors = validateResourceMeta({ ...baseValidMeta, stack: ['react', 'react'] }, 'docs/design/test.md')
    expect(errors.some((e) => e.includes('duplicate stack "react"'))).toBe(true)
  })

  test('fails for unknown stack', () => {
    const errors = validateResourceMeta({ ...baseValidMeta, stack: ['invented-stack-name'] }, 'docs/design/test.md')
    expect(errors.some((e) => e.includes('unknown stack "invented-stack-name"'))).toBe(true)
  })

  test('fails for non-array stack', () => {
    const errors = validateResourceMeta({ ...baseValidMeta, stack: 'react' }, 'docs/design/test.md')
    expect(errors.some((e) => e.includes('"stack" must be a list'))).toBe(true)
  })

  test('fails for non-string elements in stack', () => {
    const errors = validateResourceMeta({ ...baseValidMeta, stack: [123] }, 'docs/design/test.md')
    expect(errors.some((e) => e.includes('"stack" elements must be strings'))).toBe(true)
  })

  test('fails for duplicate category_tags or best_for', () => {
    const tagErrors = validateResourceMeta(
      { ...baseValidMeta, category_tags: ['icons', 'icons'] },
      'docs/design/test.md'
    )
    expect(tagErrors.some((e) => e.includes('duplicate category_tag "icons"'))).toBe(true)

    const bestErrors = validateResourceMeta(
      { ...baseValidMeta, best_for: ['dashboards', 'dashboards'] },
      'docs/design/test.md'
    )
    expect(bestErrors.some((e) => e.includes('duplicate best_for "dashboards"'))).toBe(true)
  })

  test('fails for non-string category_tags or best_for', () => {
    const tagErrors = validateResourceMeta({ ...baseValidMeta, category_tags: [123] }, 'docs/design/test.md')
    expect(tagErrors.some((e) => e.includes('"category_tags" elements must be strings'))).toBe(true)

    const bestErrors = validateResourceMeta({ ...baseValidMeta, best_for: [456] }, 'docs/design/test.md')
    expect(bestErrors.some((e) => e.includes('"best_for" elements must be strings'))).toBe(true)
  })

  test('fails for old alias in stack (maintenance validation requires canonical spelling)', () => {
    const aliases = ['framer-motion', 'radix-ui', 'node', 'workers', 'postgres', 'web']
    for (const alias of aliases) {
      const errors = validateResourceMeta({ ...baseValidMeta, stack: [alias] }, 'docs/design/test.md')
      expect(
        errors.some(
          (e) =>
            e.includes(`stack "${alias}" is an alias`) ||
            e.includes(`unknown stack "${alias}"`) ||
            e.includes(`canonical`)
        )
      ).toBe(true)
    }
  })
})

describe('validatePeople', () => {
  const tools = [
    { section_slug: 'component-libraries', slug: 'sonner' },
    { section_slug: 'icons', slug: 'lucide' }
  ]

  const validPeople = [
    {
      name: 'Emil Kowalski',
      url: 'https://emilkowal.ski/',
      description: 'Creator of Sonner, Vaul, and animations.',
      sameAs: ['https://x.com/emilkowalski_'],
      created_tools: ['component-libraries/sonner'],
      created_tools_evidence: {
        'component-libraries/sonner': {
          source_url: 'https://sonner.emilkowal.ski/',
          checked: '2026-10-15',
          quote: 'Created by Emil Kowalski.'
        }
      }
    },
    {
      name: 'Rauno Freiberg',
      url: 'https://rauno.me/',
      description: 'Author of Interaction Guidelines at Vercel.',
      sameAs: []
    }
  ]

  test('passes for valid people fixture', () => {
    const errors = validatePeople(validPeople, tools)
    expect(errors).toEqual([])
  })

  test('fails for non-array people', () => {
    const errors = validatePeople('not-an-array', tools)
    expect(errors.some((e) => e.includes('must be an array'))).toBe(true)
  })

  test('fails for broken/unknown creator tool ID', () => {
    const people = [
      {
        ...validPeople[0],
        created_tools: ['component-libraries/unknown-tool'],
        created_tools_evidence: {
          'component-libraries/unknown-tool': {
            source_url: 'https://example.com',
            checked: '2026-10-15',
            quote: 'Made this.'
          }
        }
      }
    ]
    const errors = validatePeople(people, tools)
    expect(errors.some((e) => e.includes('unknown created tool ID "component-libraries/unknown-tool"'))).toBe(true)
  })

  test('fails for duplicate created tool IDs', () => {
    const people = [
      {
        ...validPeople[0],
        created_tools: ['component-libraries/sonner', 'component-libraries/sonner'],
        created_tools_evidence: {
          'component-libraries/sonner': {
            source_url: 'https://sonner.emilkowal.ski/',
            checked: '2026-10-15',
            quote: 'Created by Emil.'
          }
        }
      }
    ]
    const errors = validatePeople(people, tools)
    expect(errors.some((e) => e.includes('duplicate created tool ID "component-libraries/sonner"'))).toBe(true)
  })

  test('fails for missing evidence for created tool', () => {
    const people = [
      {
        ...validPeople[0],
        created_tools: ['component-libraries/sonner'],
        created_tools_evidence: {}
      }
    ]
    const errors = validatePeople(people, tools)
    expect(errors.some((e) => e.includes('missing evidence for created tool "component-libraries/sonner"'))).toBe(true)
  })

  test('fails for mismatched evidence key not in created_tools', () => {
    const people = [
      {
        ...validPeople[0],
        created_tools: ['component-libraries/sonner'],
        created_tools_evidence: {
          'component-libraries/sonner': {
            source_url: 'https://sonner.emilkowal.ski/',
            checked: '2026-10-15',
            quote: 'Created by Emil.'
          },
          'icons/lucide': {
            source_url: 'https://lucide.dev',
            checked: '2026-10-15',
            quote: 'Lucide'
          }
        }
      }
    ]
    const errors = validatePeople(people, tools)
    expect(errors.some((e) => e.includes('evidence key "icons/lucide" not in "created_tools"'))).toBe(true)
  })

  test('fails for invalid URL in person or evidence', () => {
    const badPersonUrl = [
      {
        ...validPeople[0],
        url: 'not-a-valid-url'
      }
    ]
    const errors1 = validatePeople(badPersonUrl, tools)
    expect(errors1.some((e) => e.includes('invalid "url" "not-a-valid-url"'))).toBe(true)

    const badEvidenceUrl = [
      {
        ...validPeople[0],
        created_tools_evidence: {
          'component-libraries/sonner': {
            source_url: 'bad-url',
            checked: '2026-10-15',
            quote: 'Created by Emil.'
          }
        }
      }
    ]
    const errors2 = validatePeople(badEvidenceUrl, tools)
    expect(errors2.some((e) => e.includes('invalid evidence source_url "bad-url"'))).toBe(true)
  })

  test('fails for invalid date in evidence checked field', () => {
    const badDate = [
      {
        ...validPeople[0],
        created_tools_evidence: {
          'component-libraries/sonner': {
            source_url: 'https://sonner.emilkowal.ski/',
            checked: '2026-13-45',
            quote: 'Created by Emil.'
          }
        }
      }
    ]
    const errors = validatePeople(badDate, tools)
    expect(errors.some((e) => e.includes('invalid evidence checked date "2026-13-45"'))).toBe(true)

    const nonLeapDate = [
      {
        ...validPeople[0],
        created_tools_evidence: {
          'component-libraries/sonner': {
            source_url: 'https://sonner.emilkowal.ski/',
            checked: '2026-02-29',
            quote: 'Created by Emil.'
          }
        }
      }
    ]
    const errorsLeap = validatePeople(nonLeapDate, tools)
    expect(errorsLeap.some((e) => e.includes('invalid evidence checked date "2026-02-29"'))).toBe(true)
  })

  test('fails for missing or empty evidence quote', () => {
    const emptyQuote = [
      {
        ...validPeople[0],
        created_tools_evidence: {
          'component-libraries/sonner': {
            source_url: 'https://sonner.emilkowal.ski/',
            checked: '2026-10-15',
            quote: '   '
          }
        }
      }
    ]
    const errors = validatePeople(emptyQuote, tools)
    expect(errors.some((e) => e.includes('missing or empty evidence quote'))).toBe(true)
  })

  test('fails for person with missing or empty name', () => {
    const badName = [
      {
        url: 'https://example.com',
        description: 'Test person'
      }
    ]
    const errors = validatePeople(badName, tools)
    expect(errors.some((e) => e.includes('missing or invalid "name"'))).toBe(true)
  })

  test('fails for person with non-string description', () => {
    const badDesc = [
      {
        name: 'Person',
        url: 'https://example.com',
        description: 123
      }
    ]
    const errors = validatePeople(badDesc, tools)
    expect(errors.some((e) => e.includes('"description" must be a string'))).toBe(true)
  })

  test('fails for person with invalid sameAs', () => {
    const nonArraySameAs = [
      {
        ...validPeople[1],
        sameAs: 'https://x.com/raunofreiberg'
      }
    ]
    const errors1 = validatePeople(nonArraySameAs, tools)
    expect(errors1.some((e) => e.includes('"sameAs" must be an array'))).toBe(true)

    const badSameAsUrl = [
      {
        ...validPeople[1],
        sameAs: ['not-a-valid-url']
      }
    ]
    const errors2 = validatePeople(badSameAsUrl, tools)
    expect(errors2.some((e) => e.includes('invalid sameAs URL "not-a-valid-url"'))).toBe(true)
  })

  test('fails for non-array or non-string created_tools', () => {
    const nonArrayTools = [
      {
        ...validPeople[0],
        created_tools: 'component-libraries/sonner'
      }
    ]
    const errors1 = validatePeople(nonArrayTools, tools)
    expect(errors1.some((e) => e.includes('"created_tools" must be an array'))).toBe(true)

    const nonStringTools = [
      {
        ...validPeople[0],
        created_tools: [123],
        created_tools_evidence: {}
      }
    ]
    const errors2 = validatePeople(nonStringTools, tools)
    expect(errors2.some((e) => e.includes('"created_tools" elements must be strings'))).toBe(true)
  })

  test('fails when created_tools_evidence is provided without created_tools', () => {
    const evidenceWithoutTools = [
      {
        name: 'Rauno Freiberg',
        url: 'https://rauno.me/',
        description: 'Author.',
        sameAs: [],
        created_tools_evidence: {
          'component-libraries/sonner': {
            source_url: 'https://sonner.dev',
            checked: '2026-10-15',
            quote: 'Sonner'
          }
        }
      }
    ]
    const errors = validatePeople(evidenceWithoutTools, tools)
    expect(errors.some((e) => e.includes('evidence key "component-libraries/sonner" not in "created_tools"'))).toBe(
      true
    )
  })
})
