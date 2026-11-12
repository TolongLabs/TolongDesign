// Lockup reveal: the mark lands alone over faint construction hairlines,
// then the wordmark slides out from behind it letter by letter and holds.
import { ease, ramp } from "../core/motion.ts";
import { Grid } from "../kit/fields.tsx";
import { Mark } from "../kit/icons.tsx";
import { Center, Reveal } from "../kit/motion.tsx";
import { textStyle } from "../kit/theme.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface LockupRevealProps {
  size?: number;
}

export function LockupReveal(_p: LockupRevealProps) {
  const { frame, f, pal, brand } = useBeat(76);
  const size = _p.size ?? 120;
  const markT = ramp(frame, f(2), f(12), ease.outBack);
  const name = brand.name;
  return (
    <Stage>
      <Grid cell={96} opacity={0.55} />
      {/* construction hairlines riding the lockup edges */}
      <div style={{ position: "absolute", left: 240, right: 240, top: "50%", height: 1, background: pal.line, opacity: ramp(frame, 0, f(12)) * 0.9 }} />
      <div style={{ position: "absolute", left: "50%", top: 200, bottom: 200, width: 1, background: pal.line, opacity: ramp(frame, 0, f(12)) * 0.7 }} />
      <Center>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ display: "inline-flex", transform: `scale(${Math.max(0.01, markT)})`, opacity: Math.min(1, markT * 1.5), zIndex: 2 }}>
            <Mark kind={brand.mark} size={size} color={pal.accent} />
          </span>
          <span style={{ display: "inline-flex", overflow: "hidden", marginLeft: size * 0.28 }}>
            {name.split("").map((ch, i) => (
              <Reveal key={i} at={f(15 + i * 4)} dur={f(10)} from="right" distance={size * 0.35}>
                <span style={textStyle(size, 600, pal.text)}>{ch}</span>
              </Reveal>
            ))}
          </span>
        </div>
      </Center>
    </Stage>
  );
}
