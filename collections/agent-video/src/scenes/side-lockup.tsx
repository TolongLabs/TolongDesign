/**
 * side-lockup: the closing card. The tagline sits left, the mark plus
 * wordmark sits right, side by side; the pair fades up, holds still, and
 * softens out on the last frames.
 */
import { ease, ramp } from "../core/motion.ts";
import { Mark } from "../kit/icons.tsx";
import { Center } from "../kit/motion.tsx";
import { textStyle } from "../kit/theme.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface SideLockupProps {
  tagline: string;
}

export function SideLockup(p: SideLockupProps) {
  const { frame, f, dur, pal, brand } = useBeat(45);
  const inT = ramp(frame, 0, f(13), ease.outCubic);
  const outT = ramp(frame, dur - f(7), f(7), ease.inCubic);
  return (
    <Stage>
      <Center>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 72,
            opacity: inT * (1 - outT * 0.9),
            transform: `translateY(${(1 - inT) * 24}px)`,
            filter: inT < 1 ? `blur(${(1 - inT) * 10}px)` : undefined,
          }}
        >
          <span style={textStyle(60, 500, pal.text)}>{p.tagline}</span>
          <span style={{ width: 2, height: 96, background: pal.line }} />
          <span style={{ display: "inline-flex", alignItems: "center", gap: 26 }}>
            <Mark kind={brand.mark} size={96} color={pal.text} />
            <span style={textStyle(84, 600, pal.text)}>{brand.name}</span>
          </span>
        </div>
      </Center>
    </Stage>
  );
}
