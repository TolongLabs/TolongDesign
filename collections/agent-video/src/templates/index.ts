import type { TemplateSpec } from '../core/spec.ts'
import { launchFilm } from './launch-film.ts'
import { whySwitch } from './why-switch.ts'
import { appLaunch } from './app-launch.ts'
import { whatsNew } from './whats-new.ts'
import { askAgent } from './ask-agent.ts'

/** Every template, in gallery order. Pure data. */
export const TEMPLATES: TemplateSpec[] = [launchFilm, askAgent, whatsNew, appLaunch, whySwitch]
