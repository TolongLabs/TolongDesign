import { describe, expect, test } from 'bun:test'
import { rankDocuments } from './search-lib'
import { loadResources } from './design-lib'
import { join } from 'node:path'

describe('ranker contract regressions', () => {
  test('an exact real resource name ranks before name extensions', () => {
    const documents = loadResources(join(import.meta.dir, '..')).map((resource) => ({
      ...resource,
      body: resource.markdown
    }))
    expect(rankDocuments(documents, 'lucide')[0].document.id).toBe('icons/lucide')
  })

  test('recursive YAML metadata does not overflow the search scorer', () => {
    const loop: unknown[] = []
    loop.push(loop, 'icons')
    expect(
      rankDocuments([{ id: 'icons/example', name: 'Example', meta: { category_tags: loop }, body: '' }], 'icons')[0]
        .document.id
    ).toBe('icons/example')
  })
})
