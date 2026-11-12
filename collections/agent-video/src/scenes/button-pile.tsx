/**
 * button-pile: a complaint line sets over a dark toolbar, a cursor clicks a
 * tool, keyframe pills multiply into a staggered pile under a slow push-in,
 * then the pile blurs out and one word holds.
 */
import { ease, ramp, seeded } from "../core/motion.ts";
import { Blur, Camera, Center } from "../kit/motion.tsx";
import { SplitText } from "../kit/text.tsx";
import { textStyle } from "../kit/theme.tsx";
import { Card, Cursor, IconTile, Pill, pressScale } from "../kit/ui.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface ButtonPileProps {
  line: string;
  tools: [string, string, string];
  target: number;
  pill: string;
  hold: string;
}

const PILE: { dx: number; dy: number; at: number; s: number }[] = [
  { dx: -260, dy: -40, at: 34, s: 1 },
  { dx: -120, dy: -110, at: 40, s: 1 },
  { dx: 30, dy: -60, at: 46, s: 1 },
  { dx: 170, dy: -120, at: 52, s: 0.96 },
  { dx: -200, dy: 60, at: 57, s: 0.94 },
  { dx: -50, dy: 40, at: 62, s: 1 },
  { dx: 110, dy: 70, at: 67, s: 0.92 },
  { dx: 240, dy: 10, at: 72, s: 0.9 },
  { dx: -90, dy: 140, at: 77, s: 0.88 },
  { dx: 90, dy: 150, at: 81, s: 0.86 },
];

export function ButtonPile(p: ButtonPileProps) {
  const { frame, f, pal } = useBeat(112);
  const rnd = seeded(11);
  const jitters = PILE.map(() => (rnd() - 0.5) * 14);
  const outT = ramp(frame, f(88), f(12), ease.inCubic);
  const holdT = ramp(frame, f(90), f(10));
  const toolScale = pressScale(frame, f(36));
  return (
    <Stage>
      <Camera keys={{ scale: [[0, 1], [f(80), 1.14]], y: [[0, 0], [f(80), 30]] }} subject={700}>
        <Center>
          <div style={{ transform: "translateY(-330px)" }}>
            <SplitText text={p.line} at={f(4)} size={76} mode="blur" />
          </div>
        </Center>
        <Center>
          <div style={{ transform: "translateY(-110px)", opacity: ramp(frame, f(10), f(12)) * (1 - outT) }}>
            <Card pad={26}>
              <div style={{ display: "flex", gap: 22, alignItems: "center" }}>
                {p.tools.map((t, i) => (
                  <div key={t} style={{ transform: i === p.target ? `scale(${toolScale})` : undefined }}>
                    <IconTile icon={t} size={104} tone={i === p.target ? "accent" : "card"} />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Center>
        <Center>
          <Blur y={outT * 30}>
            <div style={{ position: "relative", width: 1000, height: 420, transform: "translateY(200px)", opacity: 1 - outT }}>
              {PILE.map((s, i) => {
                const t = ramp(frame, f(s.at), f(10), ease.outBack);
                if (t <= 0) return null;
                return (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      left: 500 + s.dx,
                      top: 170 + s.dy + jitters[i],
                      transform: `translate(-50%,-50%) scale(${s.s * (0.7 + 0.3 * t)}) rotate(${(i % 2 === 0 ? -1 : 1) * (i * 3.7) % 9}deg)`,
                      opacity: t * (1 - i * 0.045),
                      filter: i > 5 ? "blur(1.5px)" : undefined,
                    }}
                  >
                    <Pill label={p.pill} icon="plus" size={30} />
                  </div>
                );
              })}
            </div>
          </Blur>
        </Center>
      </Camera>
      <Cursor path={[[0, 320, 760], [f(30), 830, 430], [f(52), 960, 620], [f(72), 1100, 640], [f(86), 960, 540]]} clicks={[f(36), f(48), f(58), f(68), f(78)]} />
      {holdT > 0 ? (
        <Center>
          <div style={{ opacity: holdT, transform: `scale(${0.92 + 0.08 * holdT})`, filter: holdT < 1 ? `blur(${(1 - holdT) * 14}px)` : undefined }}>
            <span style={textStyle(120, 500, pal.text)}>{p.hold}</span>
          </div>
        </Center>
      ) : null}
    </Stage>
  );
}
