import { describe, expect, test } from 'bun:test'
import { normalizeStack, validatePeople } from './catalogue-schema'

// These inputs must remain ordinary strings, not properties inherited by the alias table.
describe('schema boundary regressions', () => {
  test('unknown stack names cannot resolve inherited object properties', () => {
    expect(normalizeStack('constructor')).toBe('constructor')
    expect(normalizeStack('__proto__')).toBe('__proto__')
    expect(normalizeStack('toString')).toBe('tostring')
  })

  test('creator evidence must be a mapping even when there are no claimed tools', () => {
    const person = { name: 'Example', url: 'https://example.test/', description: 'Example', sameAs: [] }
    for (const invalid of ['not-a-map', [], null, 7]) {
      expect(validatePeople([{ ...person, created_tools_evidence: invalid }], []).length).toBeGreaterThan(0)
    }
    expect(validatePeople([{ ...person, created_tools_evidence: {} }], [])).toEqual([])
  })
})
