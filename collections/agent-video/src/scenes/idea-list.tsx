// Idea list: a backlog of video ideas types line by line with a year label,
// then the whole stack scrolls up under one camera and whips out with blur.
import { ease, keys } from "../core/motion.ts";
import { Blur, Camera, Center } from "../kit/motion.tsx";
import { Typewriter } from "../kit/text.tsx";
import { MONO, textStyle } from "../kit/theme.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface IdeaListProps {
  year: string;
  lines: string[];
}

export function IdeaList(p: IdeaListProps) {
  const { frame, f, pal } = useBeat(189);
  const n = p.lines.length;
  const rowH = 148;
  const total = n * rowH;
  const over = Math.max(0, total - 640);
  const yAt = (fr: number) => keys(fr, [[0, 120], [f(60), 120], [f(150), 360 - over], [f(176), 360 - over], [f(188), 360 - over - 1200]], ease.inOutCubic);
  const y = yAt(frame);
  const v = Math.abs(y - yAt(frame - 1));
  return (
    <Stage>
      <Camera keys={{ y: [[0, yAt(0)], [f(60), yAt(f(60))], [f(150), yAt(f(150))], [f(188), yAt(f(188))]] }}>
        <Blur y={v * 0.5}>
          <Center>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, width: 1500 }}>
              {p.lines.map((line, i) => {
                const at = f(4 + i * 7);
                return (
                  <div key={i} style={{ height: rowH, display: "flex", alignItems: "baseline", gap: 36, borderBottom: `1px solid ${pal.line}`, opacity: frame >= at ? 1 : 0.0 }}>
                    <span style={{ ...textStyle(30, 500, pal.muted), fontFamily: MONO, letterSpacing: 0, flex: "none", width: 90 }}>{p.year}</span>
                    <span style={{ ...textStyle(54, 500, pal.text), whiteSpace: "normal", lineHeight: 1.15 }}>
                      <Typewriter text={line} at={at} size={54} weight={500} color={pal.text} cps={34} />
                    </span>
                  </div>
                );
              })}
            </div>
          </Center>
        </Blur>
      </Camera>
    </Stage>
  );
}
