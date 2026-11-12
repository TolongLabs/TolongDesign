// error-stack: "Plus," holds beside a card that types the fix headline,
// then a question and prompt field settle while reported-issue chips
// stack above them in sequence.
import { ease, ramp } from "../core/motion.ts";
import { Card, Composer, Pill } from "../kit/ui.tsx";
import { Reveal } from "../kit/motion.tsx";
import { Typewriter } from "../kit/text.tsx";
import { textStyle } from "../kit/theme.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface ErrorStackProps {
  lead: string;
  card: string;
  question: string;
  placeholder: string;
  bugs: string[];
}

export function ErrorStack(p: ErrorStackProps) {
  const { frame, f, pal } = useBeat(157);
  const settle = f(45);
  const stackAt = f(90);
  const leadT = ramp(frame, 0, f(14), ease.outCubic);
  return (
    <Stage>
      {frame < settle + f(30) ? (
        <div
          style={{
            position: "absolute",
            top: 150,
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: 40,
            opacity: 1 - ramp(frame, settle + f(14), f(16), ease.inCubic),
            transform: `translateY(${-ramp(frame, settle + f(14), f(16), ease.inCubic) * 60}px)`,
          }}
        >
          <span style={{ ...textStyle(88, 600, pal.text), opacity: leadT, paddingTop: 18 }}>{p.lead}</span>
          <Card pad={44} radius={26} style={{ width: 900 }}>
            <Typewriter text={p.card} at={f(8)} size={64} weight={500} cps={20} caret="while-typing" />
          </Card>
        </div>
      ) : null}
      {frame >= settle ? (
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", paddingBottom: 130, gap: 26 }}>
          <Reveal at={settle} from="blur" dur={f(12)}>
            <span style={textStyle(40, 400, pal.muted)}>{p.question}</span>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
            {p.bugs.map((b, i) => (
              <Reveal key={b} at={stackAt + i * f(11)} from="rise" dur={f(10)}>
                <Pill label={b} size={38} />
              </Reveal>
            ))}
          </div>
          <Reveal at={settle + f(10)} from="rise" dur={f(12)}>
            <Composer width={880} size={32} placeholder={p.placeholder} icon="spark" />
          </Reveal>
        </div>
      ) : null}
    </Stage>
  );
}
