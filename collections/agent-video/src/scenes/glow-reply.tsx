// glow-reply: a white reply card blurs in over a soft accent halo, the plan
// streams in with its key phrase set bold in the accent, holds, then blurs
// out on the cut.
import { ease, ramp, typedCount } from "../core/motion.ts";
import { Center } from "../kit/motion.tsx";
import { Caret } from "../kit/text.tsx";
import { textStyle } from "../kit/theme.tsx";
import { Card } from "../kit/ui.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface GlowReplyProps {
  lead: string;
  emphasis: string;
  rest: string;
}

export function GlowReply(p: GlowReplyProps) {
  const { frame, f, pal } = useBeat(78);
  const full = `${p.lead}${p.emphasis}${p.rest}`;
  const n = typedCount(full.length, frame, f(26), 95);
  const aEnd = p.lead.length;
  const eEnd = aEnd + p.emphasis.length;
  const show = (from: number, to: number) => full.slice(from, to).slice(0, Math.max(0, n - from));
  const enter = ramp(frame, 0, f(18), ease.outCubic);
  const exit = ramp(frame, f(66), f(10), ease.inCubic);
  return (
    <Stage>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 46%, ${pal.accent}38 0px, ${pal.accent}14 360px, transparent 680px)`,
        }}
      />
      <Center>
        <div style={{ opacity: enter * (1 - exit), filter: `blur(${(1 - enter) * 14 + exit * 16}px)`, transform: `translateY(${(1 - enter) * 40 - exit * 30}px)` }}>
          <Card glow pad={64} radius={30} style={{ width: 1300 }}>
            <div style={{ ...textStyle(52, 400, pal.text), whiteSpace: "normal", lineHeight: 1.4 }}>
              {show(0, aEnd)}
              <span style={{ fontWeight: 700, color: pal.accent }}>{show(aEnd, eEnd)}</span>
              {show(eEnd, full.length)}
              {n < full.length ? <Caret size={52} typing color={pal.accent} /> : null}
            </div>
          </Card>
        </div>
      </Center>
    </Stage>
  );
}
