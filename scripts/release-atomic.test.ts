import { afterAll, expect, test } from 'bun:test'
import { createHash } from 'node:crypto'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { buildRelease } from './release-lib'

const root = join(import.meta.dir, '..')
const out = mkdtempSync(join(tmpdir(), 'td-release-race-'))
afterAll(() => rmSync(out, { recursive: true, force: true }))

test('a concurrent release attempt cannot delete or replace the winning archive', async () => {
  const results = await Promise.allSettled([buildRelease(root, out), buildRelease(root, out)])
  const successes = results.filter((result) => result.status === 'fulfilled')
  expect(successes).toHaveLength(1)
  expect(results.filter((result) => result.status === 'rejected')).toHaveLength(1)
  const winner = successes[0] as PromiseFulfilledResult<Awaited<ReturnType<typeof buildRelease>>>
  expect(existsSync(winner.value.tarball)).toBe(true)
  expect(existsSync(winner.value.checksumFile)).toBe(true)
  const hash = createHash('sha256').update(readFileSync(winner.value.tarball)).digest('hex')
  expect(readFileSync(winner.value.checksumFile, 'utf8')).toBe(`${hash}  tolong-design-0.1.0.tgz\n`)
}, 30000)
