// step-result: an agent step log streams down a paper column: a typed plan
// line, icon rows arriving in order, and a result line landing with the
// finished file painted in the accent.
import { ease, ramp } from "../core/motion.ts";
import { Icon } from "../kit/icons.tsx";
import { Reveal } from "../kit/motion.tsx";
import { Typewriter } from "../kit/text.tsx";
import { textStyle } from "../kit/theme.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface StepResultProps {
  plan: string;
  steps: { icon: string; label: string }[];
  result: string;
  file: string;
}

export function StepResult(p: StepResultProps) {
  const { frame, f, pal } = useBeat(87);
  const left = 470;
  const rowAt = (i: number) => f(25) + i * f(13);
  const resultAt = f(25) + p.steps.length * f(13) + f(6);
  return (
    <Stage>
      <div style={{ position: "absolute", left, top: 210, bottom: 210, width: 2, background: pal.line }} />
      <div style={{ position: "absolute", left: left + 60, right: 200, top: 190, display: "flex", flexDirection: "column", gap: 34 }}>
        <Typewriter text={p.plan} at={f(4)} size={44} weight={400} cps={30} style={{ whiteSpace: "normal" }} />
        {p.steps.map((s, i) => (
          <Reveal key={s.label} at={rowAt(i)} from="left" dur={f(10)}>
            <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
              <Icon name={s.icon} size={40} color={pal.muted} />
              <span style={textStyle(44, 400, pal.text)}>{s.label}</span>
            </div>
          </Reveal>
        ))}
        <div style={{ opacity: ramp(frame, resultAt, f(12), ease.outCubic), transform: `translateY(${(1 - ramp(frame, resultAt, f(12), ease.outCubic)) * 24}px)` }}>
          <span style={textStyle(44, 500, pal.text)}>
            {p.result}{" "}
            <span style={{ color: pal.accent, fontWeight: 700 }}>{p.file}</span>
          </span>
        </div>
      </div>
    </Stage>
  );
}
