/**
 * glow-intro: hard cut to paper on a giant blurred accent glyph that
 * sharpens away while the intro line types under a glow riding the caret,
 * holds, then shrinks to a small centered mark of itself.
 */
import { ease, ramp } from "../core/motion.ts";
import { Camera, Center } from "../kit/motion.tsx";
import { GlyphGlow, Typewriter } from "../kit/text.tsx";
import { textStyle } from "../kit/theme.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface GlowIntroProps {
  line: string;
  glyph?: string;
}

export function GlowIntro(p: GlowIntroProps) {
  const { frame, f, pal } = useBeat(58);
  const bigT = ramp(frame, 0, f(18), ease.outCubic);
  const bigOut = ramp(frame, f(24), f(10), ease.inCubic);
  const g = p.glyph ?? p.line.trim().charAt(0).toUpperCase() ?? "A";
  return (
    <Stage>
      <Camera keys={{ scale: [[f(41), 1], [f(57), 0.42]] }} blur={0.6} subject={600}>
        <Center>
          <span
            style={{
              ...textStyle(760, 700, pal.accent),
              opacity: (0.16 + 0.1 * bigT) * (1 - bigOut),
              filter: `blur(${60 * (1 - bigT) + 2}px)`,
              transform: `translateY(${-40 * (1 - bigT)}px)`,
            }}
          >
            {g}
          </span>
        </Center>
        <Center>
          <div style={{ opacity: ramp(frame, f(2), f(6)) }}>
            <span style={textStyle(96, 500, pal.text)}>
              <GlyphGlow at={f(4)} dur={f(24)}>
                <Typewriter text={p.line} at={f(4)} size={96} color={pal.text} caret="while-typing" cps={20} />
              </GlyphGlow>
            </span>
          </div>
        </Center>
      </Camera>
    </Stage>
  );
}
