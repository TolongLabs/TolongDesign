---
slug: template-02
title: Weekly changelog
tier: pro-template
size: 1920x1080 at 30 fps
length: 744 frames (24.8 s), 11 beats
palette: light #F4F4F4, dark #080808, accent none
---

# Weekly changelog

> A dark changelog film that types the request, builds the release, and closes
> on the weekly promise.

## Story

Problem: the week shipped but nobody saw it. Product: a component kit that turns
each release into video. Proof: the version number, the build bar, the code
edit, and the leaderboard on screen. Ask: install the component and check the
changelog. The film blooms the mark, states what shipped, names version 2.4,
types the request, builds it, edits the code, logs the fix, ranks the releases,
and closes on the launch question.

## Beat sheet

| #   | Beat                       | Component       | Frames | Start | Act          | What happens                                                  | Cut out   |
| --- | -------------------------- | --------------- | ------ | ----- | ------------ | ------------------------------------------------------------- | --------- |
| 1   | Open — the mark blooms     | Bloom Mark      | 52     | 0     | dark         | Spark grows into the camera mark on a dark radial stage       | match cut |
| 2   | Headline — what shipped    | Dark Caption    | 62     | 52    | dark → light | Small line builds, then a giant line pushes in and washes out | whip      |
| 3   | Version — the release      | Direction Type  | 41     | 114   | dark         | Giant version line over a code editor                         | hard cut  |
| 4   | Ask — the change request   | Split Type      | 45     | 155   | dark         | Version card holds, composer slides in and types the request  | match cut |
| 5   | Ship — it builds           | Send Generate   | 57     | 200   | dark         | Cursor clicks send, panel becomes a shipping progress bar     | match cut |
| 6   | Code — the diff            | Glass Editor    | 108    | 257   | dark         | Editor and chat reply stream the title fix                    | match cut |
| 7   | Record — on the log        | Sight Type      | 67     | 365   | dark         | Giant line types with a block caret                           | match cut |
| 8   | Fastest — the top releases | Performer Table | 69     | 432   | dark         | Leaderboard rises under the fastest-releases line             | match cut |
| 9   | Faster — shipped weekly    | Word Window     | 60     | 501   | dark         | Install line shrinks into a card between two words            | hard cut  |
| 10  | Weekly — ships every week  | Word Drum       | 117    | 561   | light → dark | Word wheel cycles and lands on the weekly line                | match cut |
| 11  | Close — see the changelog  | Create Today    | 66     | 678   | dark         | Closing question builds with the changelog link               | end       |

## Beats

### 1. Open — the mark blooms (Bloom Mark, 52 f)

- **Shows:** A dark radial stage holds nearly black. A small spark appears at
  centre and grows into the camera mark. The mark scales up large, then the
  frame blurs sideways into the headline. (observed)
- **Timeline:** f0–22 spark grows into the mark (observed); f22–37 mark scales
  up toward the lens (observed); f37–51 frame streaks sideways out (observed)
- **Techniques:**
  - `Stage`: dark radial ink field (observed)
  - `RadialBloom`: centre glow spreading behind the mark (inferred)
  - `MotionBlur`: sideways streak on the exit (observed)
- **Copy slots:** none (observed)
- **Rebuild:** 1. Open on the dark radial stage. 2. Grow the spark into the
  mark. 3. Push the mark large. 4. Streak out sideways.

### 2. Headline — what shipped (Dark Caption, 62 f)

- **Shows:** The small line "Here's what" builds in the dark. Then the giant
  line "shipped this week" shoves in from the right with blur. It settles, and
  the frame washes to light at the end. (observed)
- **Timeline:** f0–27 small line builds and holds (observed); f27–44 giant line
  enters blurred and settles (observed); f44–61 giant line holds, then washes
  toward white (observed)
- **Techniques:**
  - `Reveal`: blur-in entry of the giant line (observed)
  - `Camera`: fast lateral push behind the entry (inferred)
  - `Stage`: dark field washing to light on the exit (observed)
- **Copy slots:** "Here's what", "shipped this week" (observed)
- **Rebuild:** 1. Build the small line centred. 2. Shove the giant line in from
  the right with blur. 3. Settle it full frame. 4. Wash out to light.

### 3. Version — the release (Direction Type, 41 f)

- **Shows:** The giant line "in version 2.4" holds over a dark code editor. The
  editor shows a launch-video file and an install command. The type stays sharp
  while the editor sits below it. (observed)
- **Timeline:** f0–12 version line lands over the editor (observed); f12–40 line
  and editor hold together (observed); f40 exit toward the request card
  (inferred)
- **Techniques:**
  - `Reveal`: giant line landing in place (observed)
  - `AppScreen`: code editor with file tree and terminal line (observed)
- **Copy slots:** "in version 2.4", "launch-video.tsx", "npx shadcn add
  @snapcn/text-reveal" (observed)
- **Rebuild:** 1. Hard-cut in on the dark editor. 2. Land the giant line above
  it. 3. Hold both steady. 4. Slide toward the request card.

### 4. Ask — the change request (Split Type, 45 f)

- **Shows:** A dark card reading "v2.4 Changelog" slides aside. A glass composer
  enters and types "Add dark mode to the dashboard". The send and model controls
  fade in under the field. (observed)
- **Timeline:** f0–13 version card holds, composer starts in (observed); f13–32
  request types with the caret (observed); f32–44 composer rests with controls
  visible (observed)
- **Techniques:**
  - `Composer`: glass prompt field with placeholder, model chip, and send button
    (observed)
  - `Typewriter`: request typing with a caret (observed)
  - `Card`: version card sliding aside (observed)
- **Copy slots:** "v2.4", "Changelog", "Add dark mode to the dashboard",
  "Remotion" (observed)
- **Rebuild:** 1. Hold the version card. 2. Slide the composer in. 3. Type the
  request with a caret. 4. Fade the controls up.

### 5. Ship — it builds (Send Generate, 57 f)

- **Shows:** The filled composer holds. A cursor rises to the send button and
  clicks it. The panel collapses into a small card reading "Shipping v2.4..."
  while a progress bar fills from 50% to 88%. (observed)
- **Timeline:** f0–16 composer holds (observed); f16–33 cursor arrives and
  clicks send (observed); f33–56 panel becomes the progress card and the bar
  fills (observed)
- **Techniques:**
  - `Cursor`: scripted pointer rising to the send button (observed)
  - `Press`: send button press into the shipping card (observed)
  - `Card`: shipping card with label and progress bar (observed)
- **Copy slots:** "Add dark mode to the dashboard", "Shipping v2.4...", "50%",
  "88%" (observed)
- **Rebuild:** 1. Hold the filled composer. 2. Walk the cursor to send. 3. Press
  and collapse the panel. 4. Fill the progress bar.

### 6. Code — the diff (Glass Editor, 108 f)

- **Shows:** A full editor fills the frame with the launch-video source. A chat
  panel answers "Done: the title is bigger." and streams a code reply naming the
  text change. The view pans across files and code. (observed)
- **Timeline:** f0–31 editor establishes with file tree and code (observed);
  f31–62 chat panel streams the completion reply (observed); f62–107 code reply
  types with the new text props (observed)
- **Techniques:**
  - `AppScreen`: editor with file tree, code pane, and chat panel (observed)
  - `ChatBubble`: chat reply arriving with completion text (observed)
  - `Typewriter`: code reply typing character by character (inferred)
- **Copy slots:** "Make the title bigger", "Done: the title is bigger.", "Back
  to Preview", "Code", "Edit", "Chat", "Visit docs" (observed)
- **Rebuild:** 1. Lay out the full editor. 2. Stream the chat completion. 3.
  Type the code reply. 4. Pan slowly across the panes.

### 7. Record — on the log (Sight Type, 67 f)

- **Shows:** A block caret blinks on black. The giant line "Every fix, on
  record" types out beside it. The camera rides the line as it grows past frame
  width. The caret drops at the end. (observed)
- **Timeline:** f0–19 caret blinks, first words type (observed); f19–48 line
  types across the frame (observed); f48–66 full line holds, caret leaves
  (observed)
- **Techniques:**
  - `Typewriter`: giant line typing left to right (observed)
  - `Caret`: block caret riding the typing edge (observed)
  - `Camera`: lateral ride following the line (inferred)
- **Copy slots:** "Every fix, on record" (observed)
- **Rebuild:** 1. Blink the block caret. 2. Type the line at a fixed rate. 3.
  Track the camera with the edge. 4. Hold the finished line.

### 8. Fastest — the top releases (Performer Table, 69 f)

- **Shows:** The italic line "Of your fastest releases" sharpens in over a dark
  leaderboard. A wide table of names and numbers rises and settles below it. The
  table holds while the camera drifts. (observed)
- **Timeline:** f0–20 headline sharpens, table rises (observed); f20–49 table
  settles into place (observed); f49–68 headline and table hold (observed)
- **Techniques:**
  - `Reveal`: headline sharpening from blur (observed)
  - `AppScreen`: leaderboard table with rows and figures (observed)
  - `Camera`: slow drift over the table (inferred)
- **Copy slots:** "Of your fastest releases", "Opportunities created", "Pipeline
  created", "Philip Walker", "Bookings", "Close rate" (observed)
- **Rebuild:** 1. Blur the headline in. 2. Rise the leaderboard under it. 3.
  Settle the table flat. 4. Drift and hold.

### 9. Faster — shipped weekly (Word Window, 60 f)

- **Shows:** The line "Launch videos, built from components." stands over an
  install pill. The whole panel shrinks into a small card. The words "Faster"
  and "shipped" land either side of the card. (observed)
- **Timeline:** f0–26 full panel holds with install pill (observed); f26–43
  panel shrinks into the small card (observed); f43–59 side words and card hold
  (observed)
- **Techniques:**
  - `Reveal`: panel shrinking into a card (observed)
  - `Card`: small preview card between two words (observed)
  - `TextSwap`: side words landing around the card (inferred)
- **Copy slots:** "Launch videos,", "built from components.", "npx shadcn add
  @snapcn/word-window", "Faster", "shipped" (observed)
- **Rebuild:** 1. Build the full statement panel. 2. Hold the install pill. 3.
  Shrink the panel to card size. 4. Land the side words.

### 10. Weekly — ships every week (Word Drum, 117 f)

- **Shows:** The film flips to light, then back to dark. A word wheel cycles
  candidates beside the fixed word "Every". Ghost rows blur above and below. The
  wheel lands on "week" and the line "Every week" holds. (observed)
- **Timeline:** f0–17 act flips light then dark, wheel starts (observed); f17–66
  wheel spins with one mid hold (observed); f66–116 wheel lands on "week" and
  holds (observed)
- **Techniques:**
  - `WordDrum`: vertical wheel of words cycling through the slot (observed)
  - `MotionBlur`: vertical smear on the fast wheel (inferred)
  - `Stage`: act flip from light into dark ink (observed)
- **Copy slots:** "Every day", "Every fix", "Every PR", "Every merge", "Every
  week", "Every release" (observed)
- **Rebuild:** 1. Hard-cut with the light-to-dark flip. 2. Spin the word wheel
  fast. 3. Hold once mid-spin. 4. Land on "week" and hold.

### 11. Close — see the changelog (Create Today, 66 f)

- **Shows:** A thin light streak crosses the dark. The question "What will you
  launch today?" builds word by word with "launch" accented. The link
  "snapcn.dev/changelog" sits below and the frame holds. (observed)
- **Timeline:** f0–19 streak passes, first words build (observed); f19–28 full
  question lands (observed); f28–65 question and link hold (observed)
- **Techniques:**
  - `Stage`: dark field with a horizontal light streak (observed)
  - `SplitText`: question building word by word (observed)
  - `Highlight`: accent colour on the word "launch" (observed)
- **Copy slots:** "What will you launch today?", "launch",
  "snapcn.dev/changelog" (observed)
- **Rebuild:** 1. Sweep the light streak across. 2. Build the question word by
  word. 3. Accent the word "launch". 4. Set the link and hold.

## Rhythm

The film stays dark except for two flips: the headline washes to light at the
end of beat 2, and the word drum opens light before dropping back to dark. Two
hard cuts fire at frame 114 into the version beat and at frame 561 into the word
drum; other joints play as match cuts or whip exits. Holds cluster in the build
beats: the composer holds before send, the progress card holds mid-fill, and the
closing question holds its last 37 frames. Energy spikes at the headline wash,
runs steady through the editor and record beats, and falls to near still for the
close.

## Rebuild the whole film

1. Open on dark ink and bloom the mark.
2. Build the headline, wash to light, hard-cut to the version line.
3. Slide the composer in, type the request, click send, fill the shipping bar.
4. Stream the editor and chat reply, then type the giant record line.
5. Raise the leaderboard, shrink the install panel into its card.
6. Flip through the word drum and land on the weekly line.
7. Build the closing question with the changelog link and hold.

| Slot     | Where    | Default copy                                       |
| -------- | -------- | -------------------------------------------------- |
| Headline | Beat 2   | Here's what shipped this week                      |
| Version  | Beat 3   | in version 2.4                                     |
| Request  | Beat 4–5 | Add dark mode to the dashboard                     |
| Shipping | Beat 5   | Shipping v2.4...                                   |
| Chat     | Beat 6   | Make the title bigger / Done: the title is bigger. |
| Record   | Beat 7   | Every fix, on record                               |
| Ranking  | Beat 8   | Of your fastest releases                           |
| Install  | Beat 9   | npx shadcn add @snapcn/word-window                 |
| Weekly   | Beat 10  | Every week                                         |
| Closing  | Beat 11  | What will you launch today? / snapcn.dev/changelog |
