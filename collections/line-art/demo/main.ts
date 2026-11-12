// Live demo. URL flags: ?tau=0.5 start time · ?day=60 seconds per day (0 pins) · ?debug manual stepping via window.__step(s)
import { clock, domSurface, fromDOM, toSVG } from '../src/index.ts'
import { street } from './scenes.ts'

declare global {
  interface Window {
    __step?: (seconds?: number) => number
  }
}

const q = new URLSearchParams(location.search)
const card = document.querySelector<HTMLElement>('#card')!
const scene = street(domSurface(), {
  mount: card,
  tau: q.has('tau') ? Number(q.get('tau')) : 0.66,
  day: q.has('day') ? Number(q.get('day')) : 180
})
const c = clock(scene.update, { manual: q.has('debug') })
if (q.has('debug')) window.__step = c.step

const time = document.querySelector<HTMLInputElement>('#time')!
time.addEventListener('input', () => (scene.tau = Number(time.value)))
setInterval(() => {
  if (document.activeElement !== time) time.value = String(scene.tau)
}, 250)

const boil = document.querySelector<HTMLInputElement>('#boil')!
const amount = scene.ink.boil
boil.addEventListener('change', () => (scene.ink.boil = boil.checked ? amount : 0))

document.querySelector('#export')!.addEventListener('click', () => {
  const svgEl = card.querySelector('svg')!
  const file = new Blob([toSVG(fromDOM(svgEl, window), { width: 1920 })], { type: 'image/svg+xml' })
  const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(file), download: 'line-art.svg' })
  a.click()
  URL.revokeObjectURL(a.href)
})
