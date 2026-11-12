// checklist: five shipped rows on black. Each spinner becomes a gold
// check before the next row starts, then the finished list holds.
import { ease, ramp } from "../core/motion.ts";
import { Center, Reveal } from "../kit/motion.tsx";
import { textStyle } from "../kit/theme.tsx";
import { CheckMark } from "../kit/ui.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface ChecklistProps {
  items: string[];
}

export function Checklist(p: ChecklistProps) {
  const { frame, f, pal } = useBeat(81);
  return (
    <Stage>
      <Center>
        <div style={{ display: "flex", flexDirection: "column", gap: 30, alignItems: "flex-start" }}>
          {p.items.map((it, i) => {
            const at = f(6) + i * f(12);
            const done = ramp(frame, at, f(9), ease.outCubic);
            const lit = frame >= at;
            return (
              <Reveal key={it} at={Math.max(0, at - f(6))} from="blur" dur={f(8)}>
                <div style={{ display: "flex", alignItems: "center", gap: 28, opacity: lit ? 1 : 0.35 }}>
                  <CheckMark size={56} done={done} />
                  <span style={textStyle(56, 500, lit ? pal.text : pal.muted)}>{it}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Center>
    </Stage>
  );
}
