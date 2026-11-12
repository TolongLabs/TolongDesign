import type { TemplateSpec } from '../core/spec.ts'

/**
 * Why switch: old tools promise a video in a day and bury you in keyframes;
 * Acme starts from scratch or a repo, keeps code private, shares a link.
 * Eleven beats, 32.5 s, dark complaint into paper product.
 */
export const whySwitch: TemplateSpec = {
  id: 'why-switch',
  title: 'Why switch',
  summary:
    'Old tools promised a day and buried you in keyframes; this one starts from scratch or a repo, keeps code private, shares a link.',
  accent: 'leaf',
  brand: { name: 'Acme', mark: 'lens', url: 'acme.dev' },
  width: 1920,
  height: 1080,
  fps: 30,
  beats: [
    {
      id: 'promise',
      label: 'Promise: a video in a day',
      scene: 'bin-promise',
      frames: 72,
      act: 'ink',
      props: {
        line: 'They promised a launch video in a day',
        handoff: 'Instead,',
        tiles: ['film', 'clock', 'wand']
      }
    },
    {
      id: 'busywork',
      label: 'Busywork: buried in keyframes',
      scene: 'button-pile',
      frames: 112,
      act: 'ink',
      props: {
        line: 'instead, they bury you in',
        tools: ['film', 'wand', 'clock'],
        target: 1,
        pill: 'Add keyframe +',
        hold: 'keyframes...'
      }
    },
    {
      id: 'intro',
      label: 'Intro: this is the product',
      scene: 'glow-intro',
      frames: 58,
      act: 'paper',
      props: { line: 'This is Acme.', glyph: 'A' }
    },
    {
      id: 'sources',
      label: 'Sources: scratch or a repo',
      scene: 'source-line',
      frames: 73,
      act: 'paper',
      props: {
        line: 'Cut launch videos from scratch or your own repo',
        brandChip: 'Acme',
        repoChip: 'Your repo'
      }
    },
    {
      id: 'claim',
      label: 'Claim: anything a timeline does',
      scene: 'claim-drum',
      frames: 178,
      act: 'ink',
      props: {
        mode: 'words',
        lead: 'Anything you can shape in a',
        chip: 'timeline',
        afterChip: 'timeline',
        brandLine: 'Acme renders it for you',
        tail: 'Acme can do',
        words: ['titles', 'backgrounds', 'captions', 'charts'],
        icons: ['text', 'layers', 'mic', 'chart'],
        finalIcon: 'chart',
        finalLabel: 'charts'
      }
    },
    {
      id: 'more',
      label: 'More: it can do',
      scene: 'claim-drum',
      frames: 102,
      act: 'ink',
      props: {
        mode: 'icon',
        lead: 'Anything you can shape in a',
        chip: 'timeline',
        afterChip: 'timeline',
        brandLine: 'Acme renders it for you',
        tail: 'Acme can do',
        words: ['titles', 'backgrounds', 'captions', 'transitions', 'demos', 'lower thirds', 'logos', 'charts'],
        icons: ['text', 'layers', 'mic', 'film', 'play', 'list', 'star', 'chart'],
        finalIcon: 'chart',
        finalLabel: 'charts'
      }
    },
    {
      id: 'app',
      label: 'App: your library',
      scene: 'library-phone',
      frames: 69,
      act: 'paper',
      props: {
        title: 'Your scenes',
        subtitle: 'Acme library · 32 saved',
        search: 'Search scenes or ask Acme...',
        chips: ['All', 'Intros', 'Demos', 'Outros'],
        items: [
          { title: 'Title Reveal', meta: 'Added to your repo', when: '2m', badge: 'Tx' },
          { title: 'Caption Pop', meta: 'Added to your repo', when: '9m', badge: 'Cp' },
          { title: 'Logo Swell', meta: 'Render ready', when: '1h', badge: 'Lg' }
        ]
      }
    },
    {
      id: 'trust',
      label: 'Trust: your code stays yours',
      scene: 'secret-field',
      frames: 148,
      act: 'paper',
      props: {
        before: 'Acme reads',
        code: 'your_source_code',
        after: 'and forgets it',
        stinger: 'never leaves your machine'
      }
    },
    {
      id: 'link',
      label: 'Link: the live video',
      scene: 'live-link',
      frames: 68,
      act: 'paper',
      props: {
        message: 'Here is the launch video:',
        link: 'launch-video.acme.dev'
      }
    },
    {
      id: 'sent',
      label: 'Sent: added to your repo',
      scene: 'inline-cycle',
      frames: 51,
      act: 'paper',
      props: {
        before: 'Added to your repo',
        after: 'in seconds.',
        icons: ['terminal', 'code', 'film']
      }
    },
    {
      id: 'logo',
      label: 'Logo: the lockup',
      scene: 'side-lockup',
      frames: 45,
      act: 'paper',
      props: { tagline: 'Video components' }
    }
  ]
}
