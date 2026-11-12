/**
 * burst: the badge from the previous beat fires. The field flips, an accent
 * radial bloom fills the frame with thin rings, and a short payoff line
 * lands with small echo copies around it.
 */
import { ease, ramp } from "../core/motion.ts";
import { Icon } from "../kit/icons.tsx";
import { RadialBloom } from "../kit/fields.tsx";
import { Center } from "../kit/motion.tsx";
import { textStyle } from "../kit/theme.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface BurstProps {
  line: string;
  echoes?: number;
}

export function Burst(p: BurstProps) {
  const { frame, f, pal } = useBeat(65);
  const fire = f(7);
  const lineIn = ramp(frame, f(26), f(10), ease.outBack);
  const breathe = 1 + 0.02 * Math.sin((frame / 30) * Math.PI * 2);
  const echoSpots = [
    [-560, -250, 0.46],
    [600, 0, 0.36],
    [-420, 300, 0.28],
    [380, -330, 0.24],
  ].slice(0, p.echoes ?? 4);
  return (
    <Stage>
      {frame < fire ? (
        <Center>
          <div style={{ width: 110, height: 110, borderRadius: 999, background: "#111", border: `10px solid ${pal.accent}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="check" size={52} color="#FFFFFF" stroke={3} />
          </div>
        </Center>
      ) : (
        <div style={{ position: "absolute", inset: 0, transform: `scale(${breathe})` }}>
          <RadialBloom at={fire} dur={f(22)} rings={3} />
        </div>
      )}
      <Center>
        <span style={{ ...textStyle(150, 500, "#FFFFFF"), opacity: lineIn, transform: `scale(${0.9 + 0.1 * lineIn})` }}>{p.line}</span>
      </Center>
      {echoSpots.map(([x, y, s], i) => {
        const t = ramp(frame, f(30 + i * 4), f(10));
        return (
          <Center key={i}>
            <span style={{ ...textStyle(150 * s, 500, "#FFFFFF"), opacity: t * 0.9, transform: `translate(${x}px, ${y}px)` }}>{p.line}</span>
          </Center>
        );
      })}
    </Stage>
  );
}
