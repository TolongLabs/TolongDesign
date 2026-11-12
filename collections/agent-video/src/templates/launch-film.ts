import type { TemplateSpec } from '../core/spec.ts'

/**
 * Launch film: three words stake the claim, the agent fans the work out,
 * one tap ships it, then the offer, the proof and the mark.
 * Seven beats, 26.6 s, alternating ink and paper acts.
 */
export const launchFilm: TemplateSpec = {
  id: 'launch-film',
  title: 'Launch film',
  summary: 'Three words, parallel agents, one tap, the offer, the proof, the mark.',
  accent: 'coral',
  brand: { name: 'Acme', mark: 'lens', url: 'acme.dev' },
  width: 1920,
  height: 1080,
  fps: 30,
  beats: [
    {
      id: 'hook',
      label: 'Hook: three words',
      scene: 'word-cycle',
      frames: 114,
      act: 'ink',
      props: {
        words: [
          { word: 'planned', motif: 'pan' },
          { word: 'rendered', motif: 'ring' },
          { word: 'shipped', motif: 'box' }
        ]
      }
    },
    {
      id: 'fanout',
      label: 'Work: every scene at once',
      scene: 'fanout',
      frames: 165,
      act: 'paper',
      props: {
        headline: 'Every scene renders in parallel',
        lead: 'Agent started',
        rows: [
          { task: 'Rendering the title scene', icon: 'film' },
          { task: 'Rendering the demo scene', icon: 'phone' },
          { task: 'Rendering the logo scene', icon: 'clock' }
        ]
      }
    },
    {
      id: 'act',
      label: 'Act: render the film',
      scene: 'chip-rail',
      frames: 84,
      act: 'ink',
      cut: 'match',
      props: {
        chips: [
          { label: 'Preview', icon: 'play' },
          { label: 'Change music', icon: 'bolt' },
          { label: 'Render in 4K', icon: 'film' },
          { label: 'Share link', icon: 'link' }
        ],
        target: 2
      }
    },
    { id: 'tap', label: 'Tap: one tap', scene: 'burst', frames: 65, act: 'ink', props: { line: 'one tap' } },
    {
      id: 'offer',
      label: 'Offer: keep every scene',
      scene: 'phone-offer',
      frames: 138,
      act: 'paper',
      props: {
        app: {
          title: 'Today',
          progress: '3 of 5 rendered',
          progressSub: 'Two in the queue',
          items: [
            { title: 'Launch film', meta: '12 scenes', done: true },
            { title: 'Pricing cut', meta: '6 scenes' },
            { title: 'Demo reel', meta: '8 scenes', done: true },
            { title: 'Release notes', meta: '5 scenes' }
          ]
        },
        offer: {
          headline: 'Keep every scene',
          sub: 'Every template and scene, yours to edit',
          rows: ['Every scene and template', '4K renders', 'Captions in 9 languages'],
          prices: ['$149', '$249'],
          button: 'Get Acme Pro',
          success: "You're on Acme Pro"
        }
      }
    },
    {
      id: 'proof',
      label: 'Proof: the benchmark',
      scene: 'bench',
      frames: 120,
      act: 'ink',
      props: {
        title: 'Launch video benchmark',
        sub: '30 s film, 4K, same brief for every tool',
        rows: [
          { label: 'Acme Pro', value: 98, ours: true },
          { label: 'Timeline editor', value: 94 },
          { label: 'Template site', value: 88 },
          { label: 'Screen recorder', value: 81 },
          { label: 'Slide deck', value: 66 }
        ]
      }
    },
    {
      id: 'logo',
      label: 'Logo: start building',
      scene: 'caret-lockup',
      frames: 111,
      act: 'paper',
      props: { line: 'Ship it today' }
    }
  ]
}
