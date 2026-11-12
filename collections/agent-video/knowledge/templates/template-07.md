---
slug: template-07
title: Ask snapcn
tier: pro-template
size: 1920x1080 at 30 fps
length: 1124 frames (37.47 s), 13 beats
palette: light #F8F8F4, dark #080808, accent #3E968E
---

# Ask snapcn

> A chat-first product story: ask for a film in a message, watch it plan and
> render, edit it from a phone, and close on the app icon.

## Story

Problem: shipping a launch video tonight takes too long. Product: ask snapcn in
chat and it plans, renders, and revises the film. Proof: the film card, the
phone edit, and the found scene. Ask: open the app and send a message.

The film opens on a type hook, moves into a dark chat thread where the request
lands and the film card answers, crosses to a light input restatement, runs
three proof beats (features, phone edit, scene search), returns a spoken plan
card, and closes back in the dark thread with reactions before pulling back to
the app icon.

## Beat sheet

| #   | Beat                       | Component       | Frames | Start | Act           | What happens                                                             | Cut out                |
| --- | -------------------------- | --------------- | ------ | ----- | ------------- | ------------------------------------------------------------------------ | ---------------------- |
| 1   | Hook — a faster way        | Echo Cycle      | 87     | 0     | light         | Echoing type resolves to the promise line, then a giant letter sweeps in | `whip`, `act flip`     |
| 2   | Ask — the message          | Bubble Send     | 99     | 87    | dark          | The request types itself into a teal bubble with a timestamp             | `match cut`            |
| 3   | Reply — the film card      | Rich Reply      | 101    | 186   | dark          | The thread scrolls and an agent card answers with the film               | `hard cut`, `act flip` |
| 4   | Input — ask snapcn         | Input Build     | 53     | 287   | light         | The ask restates itself in a composer field                              | `hard cut`, `act flip` |
| 5   | Features — plan and render | Feature Dive    | 77     | 340   | dark to light | Two feature cards land, then a blurred pan finds the Plan card macro     | `match cut`            |
| 6   | Change — from your phone   | Phone Ask       | 123    | 417   | light         | A phone app renders while a typed edit lands from the composer           | `match cut`            |
| 7   | Search — describe a scene  | Halftone Prompt | 78     | 540   | light         | A prompt bar types a scene description over a dot field                  | `match cut`            |
| 8   | Chip — it searches         | Halftone Chip   | 72     | 618   | light         | The bar collapses into a search pill with a sheen sweep                  | `match cut`            |
| 9   | Match — it finds it        | Halftone Match  | 48     | 690   | light         | Dots clear to one card: the found scene                                  | `match cut`            |
| 10  | Answer — the plan          | Glow Reply      | 78     | 738   | light         | A glowing card speaks the finished plan                                  | `hard cut`, `act flip` |
| 11  | Done — it is up            | React Bubble    | 145    | 816   | dark          | The thread confirms delivery, reacts, and takes a revision               | `match cut`            |
| 12  | Thread — the conversation  | Thread Pull     | 81     | 961   | dark          | The camera pulls back up the thread to the composer                      | `match cut`            |
| 13  | App — the icon             | Composer Icon   | 82     | 1042  | dark          | The composer shrinks into the app icon and holds                         | final hold             |

## Beats

### 1. Hook — a faster way (Echo Cycle, 87 f)

- **Shows:** Teal type on paper reads "a faster way", then "to make videos." The
  word "videos." stacks into an echoing column and turns lavender on the last
  word. A giant yellow letter fills the frame as the exit.
- **Timeline:** +0–30 hold on the first line (observed); +30–62 echo column
  builds downward (observed); +62–75 last word shifts to lavender (observed);
  +75–86 lateral push into the giant letter with blur (inferred).
- **Techniques:** `SplitText` echo column of "videos." over about 30 frames
  (observed); `TextSwap` from "a faster way" to "to make videos." near +37
  (inferred); `Camera` lateral push into the macro letter (inferred);
  `MotionBlur` on the exit sweep (observed).
- **Copy slots:** "a faster way", "to make videos."
- **Rebuild:** 1. Set the paper act with teal type. 2. Stack the echo column
  word by word. 3. Recolor the last word. 4. Push into the macro letter with
  blur.

### 2. Ask — the message (Bubble Send, 99 f)

- **Shows:** A small teal pill grows into a chat bubble on black. The request
  "Can we ship the launch video tonight?" types itself with a caret. A timestamp
  "10:12 AM" with a read check fades in. The beat holds on the finished bubble.
- **Timeline:** +0–14 bubble scales from pill to full width (observed); +14–57
  message types at a fixed rate with caret (observed); +57–71 timestamp fades in
  (observed); +71–98 hold on the finished bubble (observed).
- **Techniques:** `ChatBubble` user bubble with scale-pop enter (observed);
  `Typewriter` request text with a `Caret` (observed); `Reveal` fade for the
  timestamp row (observed).
- **Copy slots:** "Can we ship the launch video tonight?", "10:12 AM"
- **Rebuild:** 1. Open on black with the pill. 2. Pop the bubble to full
  width. 3. Type the message with a caret. 4. Fade in the timestamp and hold.

### 3. Reply — the film card (Rich Reply, 101 f)

- **Shows:** The request bubble sits at the top and the view drifts up as an
  agent row arrives: an "SC" avatar and a dark card for "Launch Film" with a
  thumbnail, the line "Tonight · 30s · 4K", the link "snapcn.dev/templates", and
  two pills "Template 12" and "12 scenes". Card text unblurs line by line.
- **Timeline:** +0–29 avatar and card frame slide in while the thread drifts up
  (observed); +29–58 title and meta lines unblur in sequence (observed); +58–80
  pills pop in (observed); +80–100 hold on the full card (observed).
- **Techniques:** `ChatBubble` agent row with avatar (observed); `Card` rich
  reply with thumbnail and meta lines (observed); `Pill` "Template 12" and "12
  scenes" (observed); `Reveal` blur-in per line (observed); `Camera` slow upward
  drift of the thread (inferred).
- **Copy slots:** "Launch Film", "Tonight · 30s · 4K", "snapcn.dev/templates",
  "Template 12", "12 scenes"
- **Rebuild:** 1. Continue the thread from the previous bubble. 2. Slide in the
  agent card. 3. Unblur its lines in order. 4. Pop the pills and hold.

### 4. Input — ask snapcn (Input Build, 53 f)

- **Shows:** Hard cut to paper with a faint grid. A rounded composer with a wand
  icon types "Ask snapcn" and the placeholder line "Plan videos, pick scenes,
  write the props." The beat is short and mostly holds.
- **Timeline:** +0–15 composer fades in with caret (observed); +15–38 title and
  placeholder type in (observed); +38–52 hold (observed).
- **Techniques:** `Composer` with icon and two text lines (observed);
  `Typewriter` with a `Caret` (observed); `Grid` faint backdrop (observed).
- **Copy slots:** "Ask snapcn", "Plan videos, pick scenes, write the props."
- **Rebuild:** 1. Cut to the paper grid. 2. Fade in the composer. 3. Type both
  lines. 4. Hold.

### 5. Features — plan and render (Feature Dive, 77 f)

- **Shows:** The composer stretches into a dark gradient pill, then two dark
  feature cards land: "Plan — Turn a brief into a shot list fast" and "Render —
  Export a 4K film in seconds". A fast blurred pan to the right ends on a light
  macro of the Plan card.
- **Timeline:** +0–22 pill stretches wide on dark (observed); +22–44 two feature
  cards land in stagger (observed); +44–55 horizontal pan with heavy blur
  (observed); +55–76 light macro of the Plan card holds (observed).
- **Techniques:** `Pill` stretched composer restatement (observed); `Card` two
  feature cards with icons (observed); `Camera` lateral travel with `MotionBlur`
  (observed); `Stage` act flip from dark to light on the cut at +51 (observed).
- **Copy slots:** "Ask snapcn", "Plan videos, pick scenes, write the props.",
  "Plan", "Turn a brief into a shot list fast", "Render", "Export a 4K film in
  seconds"
- **Rebuild:** 1. Stretch the pill on dark. 2. Land both cards with stagger. 3.
  Whip-pan right with blur. 4. Land the light macro and hold.

### 6. Change — from your phone (Phone Ask, 123 f)

- **Shows:** A phone on paper shows a "Today" render queue at "3 of 5 rendered".
  A bottom composer types "Add 'Made with snapcn' under the title", a cursor
  arrow crosses, the message sends, and the queue keeps rendering behind it.
- **Timeline:** +0–35 phone and queue settle in frame (observed); +35–88 edit
  line types in the composer (observed); +88–105 cursor crosses and the message
  sends (observed); +105–122 hold on the rendering queue (observed).
- **Techniques:** `DeviceFrame` phone with `AppScreen` queue, calendar, and
  cards (observed); `Composer` bottom edit field with `Typewriter` (observed);
  `Cursor` scripted crossing with send (observed).
- **Copy slots:** "Today", "3 of 5 rendered", "Add 'Made with snapcn' under the
  title", "Launch Film", "Pricing Cut", "Demo Reel", "Release Notes"
- **Rebuild:** 1. Frame the phone with the queue visible. 2. Type the edit in
  the lower composer. 3. Fly the cursor and send. 4. Hold the rendering state.

### 7. Search — describe a scene (Halftone Prompt, 78 f)

- **Shows:** A pale halftone dot field fills the frame. A white prompt bar pops
  up center and types "Find a pricing scene that feels calm, with a slow push."
  The beat holds on the finished bar.
- **Timeline:** +0–22 bar scales up from a dot (observed); +22–67 description
  types across the bar (observed); +67–77 hold (observed).
- **Techniques:** `Halftone` static dot field (observed); `Card` white prompt
  bar with scale-pop enter (observed); `Typewriter` description line (observed).
- **Copy slots:** "Find a pricing scene that feels calm, with a slow push."
- **Rebuild:** 1. Lay the dot field. 2. Pop the bar from center. 3. Type the
  description. 4. Hold.

### 8. Chip — it searches (Halftone Chip, 72 f)

- **Shows:** The prompt bar shrinks into a teal pill reading "Search Every
  Scene". A diagonal sheen crosses the pill. The surrounding dots ripple outward
  and scatter toward the edges.
- **Timeline:** +0–21 bar collapses into the pill (observed); +21–31 sheen
  crosses left to right (observed); +31–71 dots ripple and scatter while the
  pill holds (observed).
- **Techniques:** `Pill` teal search chip (observed); `GlyphGlow` diagonal sheen
  pass (observed); `Halftone` ripple with `Particles` scatter at the edges
  (observed).
- **Copy slots:** "Search Every Scene"
- **Rebuild:** 1. Collapse the bar into the pill. 2. Run the sheen across it. 3.
  Ripple and scatter the dots. 4. Hold the pill center.

### 9. Match — it finds it (Halftone Match, 48 f)

- **Shows:** The dot field clears until one teal dot stays. It swells into a
  rounded tile, then a white comment card pops in: "Need a calm pricing scene
  with a slow camera push. Which one should we use?" The caption "Scene Found"
  sits below.
- **Timeline:** +0–20 field clears to a single dot (observed); +20–27 dot swells
  into a tile (observed); +27–40 comment card pops in (observed); +40–47 hold on
  card and caption (observed).
- **Techniques:** `Halftone` field clear (observed); `Reveal` dot-to-tile
  scale-pop (observed); `Card` comment card with handle row (observed).
- **Copy slots:** "Need a calm pricing scene with a slow camera push. Which one
  should we use?", "Scene Found"
- **Rebuild:** 1. Clear the field to one dot. 2. Swell the dot into a tile. 3.
  Pop the comment card. 4. Hold with the caption.

### 10. Answer — the plan (Glow Reply, 78 f)

- **Shows:** A white reply card on a soft teal glow types the plan: "Your launch
  film is ready in 6 scenes. It opens on the prompt and closes on your logo,
  with the install line..." The phrase "in 6 scenes" sets in bold teal. The card
  blurs out at the end.
- **Timeline:** +0–28 card fades in with glow (observed); +28–56 plan types with
  the key phrase emphasized (observed); +56–67 hold on the full text (observed);
  +67–77 blur-out exit (observed).
- **Techniques:** `Card` reply with `RadialBloom` teal halo (observed);
  `Typewriter` plan text with emphasized phrase (observed); `Reveal` blur-out
  exit (observed).
- **Copy slots:** "Your launch film is ready in 6 scenes. It opens on the prompt
  and closes on your logo, with the install line..."
- **Rebuild:** 1. Bloom the halo and card. 2. Type the plan with emphasis. 3.
  Hold for reading. 4. Blur out.

### 11. Done — it is up (React Bubble, 145 f)

- **Shows:** Back on black: the agent confirms "Done! 4K is up." with a
  timestamp, a fire reaction lands, the user asks "Music swap at 0:12, want the
  calmer one?", the agent answers "Perfect! Shipping it now!", and suggestion
  pills plus a composer close the beat.
- **Timeline:** +0–41 confirmation bubble types in with timestamp (observed);
  +41–83 emoji reaction bar slides up and the fire lands (observed); +83–104
  revision question and answer appear (observed); +104–144 pills and composer
  settle, then the view starts pulling back (observed).
- **Techniques:** `ChatBubble` threaded exchange with timestamps and reactions
  (observed); `Pill` suggestion row "Preview", "Swap music", "Render the 4K
  film" (observed); `Composer` "Send a message..." field (observed); `Camera`
  slow pull-back at the end (observed).
- **Copy slots:** "Done! 4K is up.", "10:14 AM", "Music swap at 0:12, want the
  calmer one?", "Perfect! Shipping it now!", "Preview", "Swap music", "Render
  the 4K film", "Send a message..."
- **Rebuild:** 1. Type the confirmation. 2. Slide up reactions and land the
  fire. 3. Play the revision exchange. 4. Settle pills and begin the pull-back.

### 12. Thread — the conversation (Thread Pull, 81 f)

- **Shows:** The pull-back continues: the thread scrolls upward inside a
  rounding frame, the composer stays centered, and the whole conversation
  shrinks into a dark rounded vignette.
- **Timeline:** +0–35 thread scrolls up through the frame (observed); +35–58
  composer centers as surroundings darken (observed); +58–80 pull-back into the
  vignette (observed).
- **Techniques:** `Camera` continuous pull-back with rounding frame (observed);
  `ChatBubble` scrolling thread (observed); `Composer` centered anchor
  (observed).
- **Copy slots:** "Done! 4K is up.", "Music swap at 0:12, want the calmer one?",
  "Perfect! Shipping it now!", "Send a message..."
- **Rebuild:** 1. Keep the thread scrolling. 2. Center the composer. 3. Round
  and darken the frame edges.

### 13. App — the icon (Composer Icon, 82 f)

- **Shows:** The composer collapses to a pill, then to a small dark tile with a
  camera glyph. The tile grows into the teal app icon over expanding concentric
  rings and holds to the end.
- **Timeline:** +0–23 composer collapses to a pill (observed); +23–35 pill
  shrinks to the glyph tile (observed); +35–59 tile grows into the app icon
  (observed); +59–81 hold on the icon with rings (observed).
- **Techniques:** `Composer` collapsing field (observed); `IconTile` scale-pop
  into the app icon (observed); `RadialBloom` concentric rings (observed).
- **Copy slots:** "Send a message..."
- **Rebuild:** 1. Collapse the composer in two steps. 2. Pop the tile into the
  icon. 3. Expand the rings. 4. Hold.

## Rhythm

Light and dark swap on nearly every hard cut: light hook, dark chat pair, light
input, dark-to-light features, a long light run (phone through plan, frames
417–815), then a dark close. Measured cuts fall at 87, 287, 340, 391, and 816;
everything between is continuous, so the middle of the film plays as one flowing
scroll. Holds land in beats 2, 3, 4, 6, 9, 10, 11, and 13. Energy spikes at each
exit: the hook sweep (4.26), the message send (7.18), the card answer (7.68),
and the feature whip (9.77, the film peak). The pull-back beats stay soft under
3.7.

## Rebuild the whole film

1. Cut the light hook with the echo column and whip exit.
2. Build the dark chat pair as one continuous thread: message, then film card.
3. Restate the ask in the light composer, then run the feature whip into the
   Plan macro.
4. Stage the phone edit with a live cursor and send.
5. Play the halftone search run: prompt bar, chip with sheen, dot clear, found
   card, glowing plan.
6. Return to the dark thread for delivery, reactions, and the revision exchange.
7. Pull back through the thread into the vignette, collapse to the icon, and
   hold.

| Slot           | Default                                                                     | Where           |
| -------------- | --------------------------------------------------------------------------- | --------------- |
| Request line   | Can we ship the launch video tonight?                                       | Beat 2 bubble   |
| Film title     | Launch Film                                                                 | Beat 3 card     |
| Film meta      | Tonight · 30s · 4K                                                          | Beat 3 card     |
| Film link      | snapcn.dev/templates                                                        | Beat 3 card     |
| Template pills | Template 12 / 12 scenes                                                     | Beat 3 card     |
| Input title    | Ask snapcn                                                                  | Beats 4–5       |
| Input hint     | Plan videos, pick scenes, write the props.                                  | Beats 4–5       |
| Feature one    | Plan / Turn a brief into a shot list fast                                   | Beat 5 card     |
| Feature two    | Render / Export a 4K film in seconds                                        | Beat 5 card     |
| Queue state    | 3 of 5 rendered                                                             | Beat 6 phone    |
| Edit line      | Add 'Made with snapcn' under the title                                      | Beat 6 composer |
| Search line    | Find a pricing scene that feels calm, with a slow push.                     | Beat 7 bar      |
| Chip label     | Search Every Scene                                                          | Beat 8 pill     |
| Comment        | Need a calm pricing scene with a slow camera push. Which one should we use? | Beat 9 card     |
| Plan text      | Your launch film is ready in 6 scenes...                                    | Beat 10 card    |
| Delivery line  | Done! 4K is up.                                                             | Beat 11 bubble  |
| Revision line  | Music swap at 0:12, want the calmer one?                                    | Beat 11 bubble  |
| Confirm line   | Perfect! Shipping it now!                                                   | Beat 11 bubble  |
