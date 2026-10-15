import { UsageError } from './design-lib'

export type ParsedFlags = {
  positionals: string[]
  values: Map<string, string | true>
}

export function parseFlags(args: string[], booleanNames: string[], valueNames: string[]): ParsedFlags {
  const booleans = new Set(booleanNames)
  const valuesAllowed = new Set(valueNames)
  const positionals: string[] = []
  const values = new Map<string, string | true>()

  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index]
    if (!argument.startsWith('-')) {
      positionals.push(argument)
      continue
    }
    if (!argument.startsWith('--')) throw new UsageError(`unknown flag: ${argument}`)

    const equals = argument.indexOf('=')
    const flag = equals === -1 ? argument.slice(2) : argument.slice(2, equals)
    const inlineValue = equals === -1 ? undefined : argument.slice(equals + 1)
    if (!booleans.has(flag) && !valuesAllowed.has(flag)) throw new UsageError(`unknown flag: --${flag}`)
    if (values.has(flag)) throw new UsageError(`--${flag} was provided more than once`)

    if (booleans.has(flag)) {
      if (inlineValue !== undefined) throw new UsageError(`--${flag} does not take a value`)
      values.set(flag, true)
      continue
    }

    let value = inlineValue
    if (value === undefined) {
      const next = args[index + 1]
      if (next === undefined || next.startsWith('-')) throw new UsageError(`--${flag} requires a value`)
      value = next
      index += 1
    }
    if (value.trim() === '') throw new UsageError(`--${flag} requires a non-empty value`)
    values.set(flag, value)
  }

  return { positionals, values }
}

export function readValue(flags: ParsedFlags, name: string): string | undefined {
  const value = flags.values.get(name)
  return typeof value === 'string' ? value : undefined
}

export function hasFlag(flags: ParsedFlags, name: string): boolean {
  return flags.values.get(name) === true
}
