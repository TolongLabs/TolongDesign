// Render the preview GIFs and a still SVG in media/, headless: Bun draws each
// frame on a headless surface, writes SVG, and ffmpeg (librsvg) encodes the GIF.
// No browser involved, so output is identical on every machine.
//
//   bun run line-art:previews            all previews
//   bun run line-art:previews -- street  one of: walk, dog, cast, street, still
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { headlessSurface, toSVG, type VNode } from '../src/index.ts'
import { street, study } from '../demo/scenes.ts'

const MEDIA = resolve(import.meta.dir, '../media')
type Scene = { stage: { svg: unknown }; update: (t: number, dt: number) => void }

async function gif(name: string, scene: Scene, seconds: number, fps: number, width: number, warmup = 1) {
  const dir = mkdtempSync(join(tmpdir(), `line-art-${name}-`))
  const dt = 1 / 60
  let t = 0
  const per = Math.round(60 / fps)
  for (let i = 0; i < warmup * 60; i++) scene.update((t += dt), dt)
  const frames = Math.round(seconds * fps)
  for (let f = 0; f < frames; f++) {
    for (let i = 0; i < per; i++) scene.update((t += dt), dt)
    writeFileSync(join(dir, `f${String(f).padStart(4, '0')}.svg`), toSVG(scene.stage.svg as VNode, { width }))
  }
  const out = join(MEDIA, `${name}.gif`)
  const ff = Bun.spawnSync([
    'ffmpeg',
    '-v',
    'error',
    '-y',
    '-framerate',
    String(fps),
    '-i',
    join(dir, 'f%04d.svg'),
    '-vf',
    `split[a][b];[a]palettegen=max_colors=64:stats_mode=diff[p];[b][p]paletteuse=dither=none:diff_mode=rectangle`,
    '-loop',
    '0',
    out
  ])
  rmSync(dir, { recursive: true, force: true })
  if (ff.exitCode !== 0) throw new Error(`ffmpeg failed for ${name}: ${ff.stderr.toString()}`)
  console.log(`${out}  (${frames} frames, ${(Bun.file(out).size / 1024).toFixed(0)} KB)`)
}

const jobs: Record<string, () => Promise<void>> = {
  // one walk cycle, looped twice
  walk: () => gif('walk', study(headlessSurface(), 'walk'), 2.16, 20, 540),
  dog: () => gif('dog', study(headlessSurface(), 'dog'), 2, 20, 540),
  cast: () => gif('cast', study(headlessSurface(), 'cast'), 3, 20, 900),
  // late afternoon → night in 10 s
  street: () => gif('street', street(headlessSurface(), { tau: 0.68, day: 60, seed: 5 }), 10, 10, 720, 0.5),
  still: async () => {
    const s = street(headlessSurface(), { tau: 0.5, day: 0, seed: 5, boil: 0 })
    for (let i = 0; i < 120; i++) s.update(i / 60, 1 / 60)
    const out = join(MEDIA, 'street-noon.svg')
    writeFileSync(out, toSVG(s.stage.svg as VNode, { width: 960, height: 420 }))
    console.log(`${out}  (${(Bun.file(out).size / 1024).toFixed(0)} KB)`)
  }
}

const pick = process.argv.slice(2).filter((a) => a in jobs)
for (const name of pick.length ? pick : Object.keys(jobs)) await jobs[name]()
