/**
 * kinetic-line: the workhorse text beat. One or more lines arrive (typed,
 * word by word, or blurred in), either replacing each other in one slot or
 * stacking. Accent words take the film's accent. An optional dive ends the
 * beat: one big word flies in sideways with motion blur and lands huge,
 * outlined or filled.
 */
import { clamp, ease, keys, ramp } from "../core/motion.ts";
import { Blur, Center } from "../kit/motion.tsx";
import { OutlineType, SplitText, Typewriter } from "../kit/text.tsx";
import { textStyle } from "../kit/theme.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface KineticLine {
  text: string;
  /** Reference frame (of 90) when the line starts. */
  at: number;
  mode?: "type" | "words" | "blur";
  /** Words (exact match) painted in the accent. */
  accent?: string[];
  size?: number;
  weight?: number;
  muted?: boolean;
}

export interface KineticLineProps {
  lines: KineticLine[];
  stack?: boolean;
  align?: "center" | "left";
  dive?: { word: string; at: number; style?: "outline" | "fill" | "gradient"; size?: number };
}

export function KineticLineScene(p: KineticLineProps) {
  const { frame, f, width, pal } = useBeat(90);
  const diveAt = p.dive ? f(p.dive.at) : Infinity;
  const diveT = p.dive ? ramp(frame, diveAt, f(12), ease.outCubic) : 0;
  const textOut = p.dive ? ramp(frame, diveAt - f(2), f(6), ease.inCubic) : 0;

  const renderLine = (l: KineticLine, i: number) => {
    const size = l.size ?? 76;
    const color = l.muted ? pal.muted : pal.text;
    const accentIdx = l.text.split(" ").flatMap((w, k) => (l.accent?.some((a) => w.replace(/[.,!?]/g, "") === a) ? [k] : []));
    if ((l.mode ?? "words") === "type")
      return <Typewriter key={i} text={l.text} at={f(l.at)} size={size} weight={l.weight ?? 500} color={color} caret="while-typing" cps={22} />;
    return <SplitText key={i} text={l.text} at={f(l.at)} size={size} weight={l.weight ?? 500} color={color} mode={l.mode === "blur" ? "blur" : "rise"} gap={3} accent={accentIdx} />;
  };

  let body;
  if (p.stack) {
    body = (
      <div style={{ display: "flex", flexDirection: "column", gap: 18, alignItems: p.align === "left" ? "flex-start" : "center" }}>
        {p.lines.map(renderLine)}
      </div>
    );
  } else {
    let idx = 0;
    p.lines.forEach((l, k) => {
      if (frame >= f(l.at)) idx = k;
    });
    const cur = p.lines[idx];
    const next = p.lines[idx + 1];
    const leave = next ? ramp(frame, f(next.at) - f(6), f(6), ease.inCubic) : 0;
    body = (
      <div style={{ opacity: 1 - leave, filter: leave > 0 ? `blur(${leave * 12}px)` : undefined, transform: `translateY(${-leave * 20}px)` }}>
        {renderLine(cur, idx)}
      </div>
    );
  }

  const dive = p.dive;
  const dsize = dive?.size ?? 300;
  const dx = (fr: number) => keys(fr, [[diveAt, width * 0.55], [diveAt + f(12), 0]], ease.outCubic);
  const v = dive ? Math.abs(dx(frame) - dx(frame - 1)) : 0;
  return (
    <Stage>
      <Center style={{ justifyContent: "center", alignItems: p.align === "left" ? "flex-start" : "center", paddingLeft: p.align === "left" ? 180 : 0 }}>
        <div style={{ opacity: 1 - textOut, transform: `scale(${1 + textOut * 0.3})` }}>{body}</div>
      </Center>
      {dive && frame >= diveAt ? (
        <Center>
          <Blur x={v * 0.5}>
            <div style={{ transform: `translateX(${dx(frame)}px) scale(${0.8 + 0.2 * diveT})`, opacity: clamp(diveT * 3) }}>
              {dive.style === "fill" ? (
                <span style={textStyle(dsize, 600, pal.text)}>{dive.word}</span>
              ) : (
                <OutlineType text={dive.word} size={dsize} dashed fill={dive.style === "gradient" ? 1 : 0.0} color={dive.style === "gradient" ? pal.accent : pal.text} gradient={dive.style === "gradient" ? [pal.accent, pal.text] : undefined} />
              )}
            </div>
          </Blur>
        </Center>
      ) : null}
    </Stage>
  );
}
