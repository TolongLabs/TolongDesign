// glow-swap: a line types with a glowing caret, holds bold, then
// swaps sideways with motion blur into a second line that swells
// into a giant blurred accent exit.
import { ease, keys, ramp, typedCount } from "../core/motion.ts";
import { Blur, Center } from "../kit/motion.tsx";
import { Caret, GlyphGlow } from "../kit/text.tsx";
import { TIMING } from "../core/tokens.ts";
import { textStyle } from "../kit/theme.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface GlowSwapProps {
  line: string;
  /** Word indexes of `line` painted bold. */
  bold: number[];
  line2: string;
  /** Word indexes of `line2` painted bold. */
  bold2: number[];
  /** Giant blurred exit word (last word of line2). */
  exit: string;
}

function RichLine(p: { text: string; bold: number[]; size: number; color: string }) {
  const words = p.text.split(" ");
  return (
    <span style={textStyle(p.size, 500, p.color)}>
      {words.map((w, i) => (
        <span key={i} style={{ fontWeight: p.bold.includes(i) ? 700 : 500, marginRight: i < words.length - 1 ? "0.26em" : 0 }}>
          {w}
        </span>
      ))}
    </span>
  );
}

export function GlowSwap(p: GlowSwapProps) {
  const { frame, f, pal } = useBeat(95);
  const size = 76;
  const n = typedCount(p.line.length, frame, f(2), TIMING.headlineCps);
  const done = n >= p.line.length;
  const typing = n > 0 && !done;
  // Phase edges.
  const holdRich = f(44);
  const swapAt = f(56);
  const exitAt = f(80);
  // Slide: first line drifts left and blurs out, second enters from right.
  const sw = ramp(frame, swapAt, f(10), ease.inOutCubic);
  const x1 = keys(frame, [[swapAt, 0], [swapAt + f(10), -260]], ease.inCubic);
  const x2 = keys(frame, [[swapAt, 420], [swapAt + f(10), 0]], ease.outCubic);
  const v = Math.abs(x1 - (frame > 0 ? keys(frame - 1, [[swapAt, 0], [swapAt + f(10), -260]], ease.inCubic) : x1));
  const exitT = ramp(frame, exitAt, f(10), ease.inExpo);
  const mainO = 1 - ramp(frame, exitAt, f(6), ease.inCubic);
  return (
    <Stage>
      <Center>
        <div style={{ opacity: mainO }}>
          {frame < swapAt + f(10) && frame < exitAt ? (
            <Blur x={frame >= swapAt ? v * 0.5 + sw * 10 : 0}>
              <div style={{ transform: `translateX(${frame >= swapAt ? x1 : 0}px)`, opacity: 1 - sw }}>
                {frame < holdRich ? (
                  <span style={textStyle(size, 500, pal.text)}>
                    <GlyphGlow at={f(2)} dur={f(40)}>
                      <span>{p.line.slice(0, n)}</span>
                    </GlyphGlow>
                    <Caret size={size} typing={typing} color={pal.accent} />
                  </span>
                ) : (
                  <span>
                    <RichLine text={p.line} bold={p.bold} size={size} color={pal.text} />
                    <Caret size={size} typing={false} color={pal.accent} />
                  </span>
                )}
              </div>
            </Blur>
          ) : null}
          {frame >= swapAt && frame < exitAt ? (
            <Blur x={(1 - sw) * 12}>
              <div style={{ transform: `translateX(${x2}px)`, opacity: sw }}>
                <RichLine text={p.line2} bold={p.bold2} size={size} color={pal.text} />
              </div>
            </Blur>
          ) : null}
        </div>
      </Center>
      {frame >= exitAt - f(4) ? (
        <Center>
          <div
            style={{
              ...textStyle(300 + exitT * 340, 600, pal.accent),
              opacity: 0.35 + exitT * 0.65,
              filter: `blur(${(1 - exitT) * 22 + 3}px)`,
              transform: `translateX(${exitT * 60}px)`,
              whiteSpace: "pre",
            }}
          >
            {p.exit}
          </div>
        </Center>
      ) : null}
    </Stage>
  );
}
