/**
 * Render previews of every template from our own code:
 *   media/<id>.sheet.png  one still per beat (mid-beat) plus peak frames, tiled
 *   media/<id>.mp4        the film at 960x540 (with --video)
 *   media/<id>.gif        the film at 480x270, 12 fps (with --gif)
 *
 * usage: bun scripts/previews.ts [--only <id>] [--video] [--gif] [--frames 10,20,...]
 */
import { bundle } from '@remotion/bundler'
import { renderMedia, renderStill, selectComposition } from '@remotion/renderer'
import { mkdirSync, rmSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { layout } from '../src/core/spec.ts'
import { TEMPLATES } from '../src/templates/index.ts'

const root = resolve(import.meta.dir, '..')
const media = join(root, 'media')
const tmp = join(root, '.previews-tmp')
const args = process.argv.slice(2)
const only = args.includes('--only') ? args[args.indexOf('--only') + 1] : null
const video = args.includes('--video')
const gif = args.includes('--gif')
const explicit = args.includes('--frames') ? args[args.indexOf('--frames') + 1].split(',').map(Number) : null

mkdirSync(media, { recursive: true })
rmSync(tmp, { recursive: true, force: true })
mkdirSync(tmp, { recursive: true })

const serveUrl = await bundle({ entryPoint: join(root, 'src/index.ts') })

for (const spec of TEMPLATES) {
  if (only && spec.id !== only) continue
  const composition = await selectComposition({ serveUrl, id: spec.id, inputProps: { spec } })
  const beats = layout(spec)
  const frames =
    explicit ?? beats.flatMap((b) => [b.start + Math.round(b.frames * 0.3), b.start + Math.round(b.frames * 0.75)])
  const files: string[] = []
  for (const [i, frame] of frames.entries()) {
    const out = join(tmp, `${spec.id}-${String(i).padStart(3, '0')}.png`)
    await renderStill({ composition, serveUrl, output: out, frame, inputProps: { spec }, scale: 0.25 })
    files.push(out)
  }
  const cols = 4
  const sheet = join(media, `${spec.id}.sheet.png`)
  const p = Bun.spawnSync([
    'ffmpeg',
    '-v',
    'error',
    '-y',
    '-pattern_type',
    'glob',
    '-i',
    join(tmp, `${spec.id}-*.png`),
    '-vf',
    `tile=${cols}x${Math.ceil(files.length / cols)}:padding=4:color=0x888888`,
    '-frames:v',
    '1',
    sheet
  ])
  if (p.exitCode !== 0) throw new Error(p.stderr.toString())
  console.log(`sheet ${sheet} (${files.length} frames: ${frames.join(',')})`)
  if (video) {
    const mp4 = join(media, `${spec.id}.mp4`)
    await renderMedia({
      composition,
      serveUrl,
      codec: 'h264',
      outputLocation: mp4,
      inputProps: { spec },
      scale: 0.5,
      crf: 26
    })
    console.log(`video ${mp4}`)
  }
  if (gif) {
    const clip = join(tmp, `${spec.id}.mp4`)
    await renderMedia({
      composition,
      serveUrl,
      codec: 'h264',
      outputLocation: clip,
      inputProps: { spec },
      scale: 0.25,
      crf: 18
    })
    const out = join(media, `${spec.id}.gif`)
    const g = Bun.spawnSync([
      'ffmpeg',
      '-v',
      'error',
      '-y',
      '-i',
      clip,
      '-vf',
      'fps=12,split[a][b];[a]palettegen=max_colors=96:stats_mode=diff[p];[b][p]paletteuse=dither=none:diff_mode=rectangle',
      '-loop',
      '0',
      out
    ])
    if (g.exitCode !== 0) throw new Error(g.stderr.toString())
    console.log(`gif ${out}`)
  }
}
rmSync(tmp, { recursive: true, force: true })
