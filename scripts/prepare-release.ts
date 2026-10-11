import { resolve } from 'node:path'
import { buildRelease } from './release-lib'

const ROOT = resolve(import.meta.dir, '..')
const USAGE = 'Usage: bun scripts/prepare-release.ts [--out <path>]'

class UsageError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'UsageError'
  }
}

function outputDirectory(args: string[]): string {
  if (args.length === 0) return resolve(ROOT, 'release')
  if (args.length !== 2 || args[0] !== '--out' || args[1] === '' || args[1].startsWith('--')) {
    throw new UsageError(`${USAGE}\nOnly --out <path> is accepted.`)
  }
  return resolve(process.cwd(), args[1])
}

async function main(): Promise<void> {
  try {
    const result = await buildRelease(ROOT, outputDirectory(process.argv.slice(2)))
    process.stdout.write(
      [
        `Prepared TolongDesign ${result.version}`,
        `Package directory: ${result.packageDir}`,
        `Tarball: ${result.tarball}`,
        `Checksums: ${result.checksumFile}`,
        `Resources: ${result.resourceCount}`
      ].join('\n') + '\n'
    )
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    const prefix = error instanceof UsageError ? 'Usage error' : 'Release preparation failed'
    process.stderr.write(`${prefix}: ${message}\n`)
    process.exitCode = error instanceof UsageError ? 2 : 1
  }
}

if (import.meta.main) void main()
