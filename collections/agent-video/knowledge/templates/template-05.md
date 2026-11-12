---
slug: template-05
title: Product tour
tier: pro-template
size: 1920x1080 at 30 fps
length: 933 frames (31.1 s), 11 beats
palette: light #F8F8F4, dark #000000, accent none
---

# Product tour

> A bright end-to-end walkthrough: ask the product to build a tour, watch it
> work, get the email, publish it.

## Story

A maker wonders what would happen if their product tour built itself; the
workspace builds it, the film lands in the inbox, one press publishes it, so
ship this tour and plan the next one. The film stays on paper the whole way
except for a final fade to black on the lockup. It runs 933 frames (31.1 s)
across 11 beats with no listed hard cuts, so each beat hands off cleanly to the
next state.

## Beat sheet

| #   | Beat                       | Component      | Frames | Start | Act              | What happens                                           | Cut out  |
| --- | -------------------------- | -------------- | ------ | ----- | ---------------- | ------------------------------------------------------ | -------- |
| 1   | Hook — what if             | Spark Question | 170    | 0     | light            | Phrases land one at a time over sparkles and rings     | hard cut |
| 2   | App — the workspace        | App Rise       | 57     | 170   | light            | Workspace rises, cursor picks a builder, list scrolls  | hard cut |
| 3   | Generate — the whole tour  | Type Dive      | 69     | 227   | light            | Line shrinks as the camera dives through its own words | hard cut |
| 4   | Working — generating       | Status Spinner | 125    | 296   | light            | Mark spins while status lines complete one by one      | hard cut |
| 5   | Inbox — where it lands     | Mail Compose   | 95     | 421   | light            | Mail client pulls back, tilts in 3D, settles front-on  | hard cut |
| 6   | Arrives — into the inbox   | Caption Dive   | 44     | 516   | light            | Caption lands, camera dives into the inbox window      | hard cut |
| 7   | Draft — the result         | Email Draft    | 67     | 560   | light            | Result card swings in, cursor rides to the open button | hard cut |
| 8   | Approve — one press        | Approve Press  | 50     | 627   | light            | Hand cursor walks in and presses the publish button    | hard cut |
| 9   | Done — status to published | Status Morph   | 108    | 677   | light            | Approval pill collapses into a checked published card  | hard cut |
| 10  | Plan — the next one        | Easy Plan      | 40     | 785   | light            | Closing line lands word by word with accent hits       | hard cut |
| 11  | Close — the lockup         | Mark Fade      | 108    | 825   | light, then dark | Wordmark assembles, then the field fades to black      | act flip |

## Beats

### 1. Hook — what if (Spark Question, 170 f)

- **Shows:** Paper holds empty for almost a second. The phrases "What if your",
  "product tour", "could build", "itself" and "overnight?" land one at a time,
  each huge, while small four-point sparkles cross the frame. The last phrase
  sits over a soft circle whose rings drift outward.
- **Timeline:** empty paper hold f0–24 (observed); phrase 1 lands ~f24–49
  (observed); hard swap to phrase 2 with blur settle ~f49–73 (inferred); phrases
  3–4 ~f73–146 with still hold f96–108 (observed); closing phrase with rings
  f146–169 (observed).
- **Techniques:** `Stage` paper field throughout; `Camera` slow pull-back across
  the beat (inferred); `SplitText` words blur up into place one at a time
  (inferred); `Particles` small sparkles darting past (observed); `RadialBloom`
  faint concentric rings behind the close (observed); `custom: hard phrase swap`
  cut to the next phrase with no blend (observed).
- **Copy slots:** "What if your", "product tour", "could build", "itself",
  "overnight?"
- **Rebuild:**
  - Hold paper empty for ~24 f.
  - Land each phrase huge with a word-by-word blur-up and a slow camera
    pull-back.
  - Cut hard between phrases, never blend.
  - Dart 2–4 sparkles across each phrase.
  - Close on the question over two slow expanding rings.

### 2. App — the workspace (App Rise, 57 f)

- **Shows:** The snapcn workspace rises into frame: sidebar with BENCHMARKS,
  CAPACITY BUILDER, TERRITORY, PERFORMANCE, ALERTS, INTEGRATIONS beside an agent
  chat asking for a spreadsheet upload. A cursor clicks CAPACITY BUILDER, then
  the view scrolls down to an Integrations list with HRIS and ATS connected.
- **Timeline:** workspace rise and settle f0–16 (observed); cursor travel and
  click ~f16–24 (observed); scroll down the integrations list f33–56 (observed).
- **Techniques:** `Camera` push-in settling onto the workspace (inferred);
  `Card` app window building around the chat (observed); `Cursor` scripted walk
  with a click on the builder row (observed); `AppScreen` sidebar plus chat plus
  integrations list (observed).
- **Copy slots:** "snapcn", "BENCHMARKS", "CAPACITY BUILDER", "TERRITORY",
  "Upload your spreadsheet", "Start by uploading your .csv in format", "HRIS",
  "ATS", "Connected"
- **Rebuild:**
  - Rise the workspace card from below and settle it.
  - Walk the cursor to the builder row and click.
  - Scroll the pane down to reveal the integrations list.
  - Keep the camera easing out into a readable hold.

### 3. Generate — the whole tour (Type Dive, 69 f)

- **Shows:** "What if it could" fills the frame, then shrinks small as the
  camera dives forward through the line itself. The words "build the whole tour"
  join one at a time in a dusty blue while giant blurred letterforms rush past
  the lens, and the frame washes to white.
- **Timeline:** big line holds f0–10 (observed); shrink-back f10–30 (inferred);
  accent words join f30–56 with still hold f42–56 (observed); dive through type
  into white f56–68 (observed).
- **Techniques:** `Camera` dive forward through the text with size-for-distance
  growth (inferred); `MotionBlur` directional blur at peak dive speed
  (inferred); `TextSwap` accent words joining the line one at a time (observed);
  `Stage` wash to white on exit (observed).
- **Copy slots:** "What if it could", "build the whole tour"
- **Rebuild:**
  - Hold the big line, then shrink it toward center.
  - Append the tail words one at a time in the accent color.
  - Drive the camera through the line with blur at peak speed.
  - Wash the field to white as the type leaves.

### 4. Working — generating (Status Spinner, 125 f)

- **Shows:** A black video-camera mark fills the frame, shrinks to a small
  spinner, and status lines complete beside it one at a time: "Generating ramp
  times...", "Configuring quotas...", "Setting up territories...", "Calculating
  magic...". Each finished line sets in ink while the next one arrives pale.
- **Timeline:** mark shrink f0–18 (observed); lines arrive one per ~18 f f18–107
  (observed); all-lines hold with spinning mark f107–124 (observed).
- **Techniques:** `IconTile` camera mark scaling down into a spinner (observed);
  `StepLog` status lines arriving in sequence beside a rail (observed);
  `TextSwap` each line resolving from pale to ink as it completes (inferred).
- **Copy slots:** "Final AI review...", "Generating ramp times...", "Configuring
  quotas...", "Setting up territories...", "Calculating magic..."
- **Rebuild:**
  - Start the mark huge and shrink it into a spinner.
  - Reveal one status line at a time on a fixed cadence.
  - Resolve each line from pale to ink when its step completes.
  - Hold the full list briefly before the handoff.

### 5. Inbox — where it lands (Mail Compose, 95 f)

- **Shows:** A blue "New mail" pill sits in extreme close-up, soft and blurred.
  The camera pulls back to reveal a mail client with Inbox, Send, Discard and
  Attach actions, "To: team@snapcn.dev", and a "launch-video.mp4" attachment.
  The whole window tilts in 3D mid-move, then settles square to the lens.
- **Timeline:** blurred button close-up f0–14 (observed); pull-back reveal
  f14–41 with energy spike (observed); 3D tilt sweep f54–81 with still hold
  f66–81 (observed); front-on settle f81–94 (observed).
- **Techniques:** `Camera` pull-back plus 3D tilt resolving front-on (inferred);
  `MotionBlur` blur proportional to pull-back velocity (inferred); `Pill`
  compose button sharpening as the camera lands (observed); `AppScreen` mail
  client with inbox list and compose pane (observed).
- **Copy slots:** "New mail", "Send", "Discard", "Attach", "Inbox", "To:
  team@snapcn.dev", "launch-video.mp4", "4.2 MB"
- **Rebuild:**
  - Open tight on the blurred compose button.
  - Pull back to reveal the full client, blurred at speed and sharp at rest.
  - Sweep a 3D tilt through the middle of the move.
  - Settle front-on and hold for readability.

### 6. Arrives — into the inbox (Caption Dive, 44 f)

- **Shows:** The line "straight to your inbox" sits over the mail window,
  "inbox" in dusty blue. The caption holds while the window rests, then the
  camera dives down into the inbox and the frame washes out.
- **Timeline:** caption plus window hold f0–27 with still hold f11–27
  (observed); dive into the window f27–43 with the beat's energy peak
  (observed).
- **Techniques:** `Camera` dive into the inbox pane with blur at peak speed
  (inferred); `SplitText` caption words arriving with the last word accented
  (observed); `Stage` wash out on exit (observed).
- **Copy slots:** "straight to your inbox"
- **Rebuild:**
  - Land the caption over the resting window.
  - Hold long enough to read the line.
  - Dive the camera into the inbox with motion blur.
  - Wash out as the window fills the frame.

### 7. Draft — the result (Email Draft, 67 f)

- **Shows:** The result card swings into view: a checkmark, "Your tour is
  ready", and a message card reading "Hi Sam, Your launch video has finished
  rendering and is ready to be reviewed in the studio" with a small scene table
  and an "Open the render" button. A hand cursor glides to the button.
- **Timeline:** card swing-in f0–19 (observed); message and table resolve f19–48
  (observed); cursor ride to the button f48–66 (observed).
- **Techniques:** `Card` result card swinging in with perspective (observed);
  `Checklist` check resolving to "Your tour is ready" (observed); `Cursor` hand
  pointer riding onto the call to action (observed); `Pill` "Open the render"
  button (observed).
- **Copy slots:** "Hi Sam,", "Your launch video has finished rendering and is
  ready to be reviewed in the studio.", "product-tour.mp4", "Product tour", "1/2
  · 1080p", "Open the render", "Your tour is ready"
- **Rebuild:**
  - Swing the result card in with perspective.
  - Resolve the check, greeting, and scene table in order.
  - Glide the hand cursor onto the button.
  - Hold on the resting card.

### 8. Approve — one press (Approve Press, 50 f)

- **Shows:** A tilted approval card carries a blue "Publish tour" pill. A hand
  cursor walks in from the left, lands on the button, and presses it with a
  visible dip.
- **Timeline:** card drift f0–14 (observed); cursor walk-in f7–29 (observed);
  press dip and state change f29–49 (observed).
- **Techniques:** `Cursor` hand pointer on a curved approach path (observed);
  `Press` button scale dip on contact (inferred); `Pill` publish button
  darkening under press (observed).
- **Copy slots:** "Publish tour"
- **Rebuild:**
  - Drift the tilted card gently under the cursor.
  - Walk the hand pointer in on a curve and stop dead on the button.
  - Dip the button scale on contact, then darken it.
  - Flow straight into the status beat with no gap.

### 9. Done — status to published (Status Morph, 108 f)

- **Shows:** A "Tour approved" pill rests, then collapses inward into a small
  lozenge that becomes an outlined circle with a check. "Tour published" lands
  under it with a small "Share link" chip, and a card rises around the cluster.
- **Timeline:** approved pill hold f0–24 with still hold f9–24 (observed);
  collapse to lozenge f31–46 (observed); check circle with still hold f39–61
  (observed); "Tour published" plus card rise f62–107 (observed).
- **Techniques:** `Pill` approval pill collapsing inward at full speed
  (observed); `Checklist` check drawing inside the circle (observed); `Card`
  published card rising around the cluster (observed); `TextSwap` status line
  swapping approved to published (observed).
- **Copy slots:** "Tour approved", "Tour published", "Share link"
- **Rebuild:**
  - Hold the approved pill so the state reads.
  - Collapse it inward fast into the check circle.
  - Land the published line and share chip.
  - Rise the card around the cluster and hold.

### 10. Plan — the next one (Easy Plan, 40 f)

- **Shows:** The line "Ship the tour and plan the next one" sets word by word on
  paper, each new word arriving in dusty blue and cooling to ink, with a hold on
  the finished line.
- **Timeline:** words arrive f0–18 (observed); full-line hold f18–31 (observed);
  settle f31–39 (observed).
- **Techniques:** `SplitText` word-by-word arrival with accent cooling to ink
  (observed); `Stage` plain paper with no camera move (observed).
- **Copy slots:** "Ship the tour and plan the next one"
- **Rebuild:**
  - Set one word at a time at a fixed rate.
  - Arrive each word hot in the accent, cool it to ink.
  - Hold the finished line before the lockup beat.

### 11. Close — the lockup (Mark Fade, 108 f)

- **Shows:** The black video-camera mark sits alone on paper, shrinks slightly
  as "snapcn" assembles beside it letter by letter, and the lockup holds. Then
  the field sinks through grey to near-black while the lockup stays put.
- **Timeline:** mark alone f0–13 with still hold f5–13 (observed); wordmark
  assembly f15–46 with still hold f37–61 (observed); lockup hold f61–104
  (observed); field fade to black from f105 with the act flip (observed).
- **Techniques:** `Lockup` mark plus wordmark assembling (observed); `Stage`
  paper field sinking to near-black, light to dark (observed); `Typewriter`
  wordmark letters fading in without a caret (inferred).
- **Copy slots:** "snapcn"
- **Rebuild:**
  - Hold the mark alone on paper.
  - Assemble the wordmark letter by letter beside it.
  - Hold the lockup long and still.
  - Fade the field to black under the resting lockup.

## Rhythm

The whole film plays on paper with no hard cuts listed and no act changes until
the last beat, so momentum comes from motion energy rather than editing. Energy
peaks in the hook (2.53) and the app rise (3.26), dips through the type dive and
spinner middle, spikes twice in the mail beat (4.85, 3.38) and the caption dive
(6.99), then drains away: the plan beat barely moves and the lockup sits near
still until the closing fade (5.01). Holds land at the end of most beats —
phrases, the tilt settle, the dive wind-up, the published card — so each state
reads before the next arrives. The single act flip at the end of the lockup
(light to dark three frames before the end) closes the film.

## Rebuild the whole film

1. Cut the 11 beats back to back on paper with clean handoffs and no transition
   effects.
2. Open with the phrase hook over sparkles and rings, then rise the workspace.
3. Dive through the type line into the spinner status sequence.
4. Pull back into the mail client, tilt through 3D, dive into the inbox.
5. Swing in the result card, walk the cursor to open, press publish.
6. Morph the approval pill into the published check card.
7. Land the closing line word by word, assemble the lockup, fade to black.

| Slot            | Use                                                    |
| --------------- | ------------------------------------------------------ |
| Hook phrases    | Five short phrases ending in a question                |
| Workspace rows  | Sidebar sections and the builder row the cursor picks  |
| Status lines    | Four to five generation steps that complete in order   |
| Recipient       | The inbox address on the compose pane                  |
| Attachment      | File name and size shown in the draft                  |
| Result card     | Greeting name, message, scene table, open button label |
| Publish button  | Button label the cursor presses                        |
| Published state | Approval label, published label, share chip label      |
| Closing line    | One sentence bridging this tour and the next           |
| Lockup          | Mark plus wordmark                                     |
