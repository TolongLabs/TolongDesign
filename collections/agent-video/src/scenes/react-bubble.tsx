// react-bubble: the delivery confirmation types in on ink, a reaction bar
// slides up and the pick lands, a revision question and answer play, then
// suggestion pills and a composer settle as the view starts pulling back.
import { ease, ramp, typedCount } from "../core/motion.ts";
import { Caret } from "../kit/text.tsx";
import { textStyle } from "../kit/theme.tsx";
import { ChatBubble, Composer, Pill } from "../kit/ui.tsx";
import { Reveal } from "../kit/motion.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface ReactBubbleProps {
  delivery: string;
  time: string;
  options: [string, string, string];
  picked: number;
  question: string;
  answer: string;
  pills: [string, string, string];
  hint: string;
}

export function ReactBubble(p: ReactBubbleProps) {
  const { frame, f, pal } = useBeat(145);
  const n = typedCount(p.delivery.length, frame, f(4), 24);
  const doneTyping = n >= p.delivery.length;
  const pull = ramp(frame, f(120), f(25), ease.inOutCubic);
  const popPick = ramp(frame, f(62), f(10), ease.outBack);
  return (
    <Stage>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `scale(${1 - pull * 0.08}) translateY(${-pull * 60}px)`,
        }}
      >
        <div style={{ width: 1060, display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ alignSelf: "flex-start" }}>
            <Reveal at={0} from="rise" dur={f(12)}>
              <ChatBubble from="agent" size={40} maxWidth={840} time={doneTyping ? p.time : undefined}>
                <span>
                  {p.delivery.slice(0, n)}
                  {doneTyping ? null : <Caret size={40} typing />}
                </span>
              </ChatBubble>
            </Reveal>
          </div>
          <Reveal at={f(41)} from="rise" dur={f(12)}>
            <div
              style={{
                alignSelf: "flex-start",
                display: "flex",
                gap: 10,
                background: pal.card,
                border: `1px solid ${pal.line}`,
                borderRadius: 999,
                padding: "10px 18px",
              }}
            >
              {p.options.map((emoji, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 44,
                    lineHeight: 1,
                    transform: i === p.picked ? `scale(${0.4 + 0.6 * popPick})` : undefined,
                    opacity: i === p.picked ? popPick : 0.45,
                    border: i === p.picked ? `2px solid ${pal.accent}` : "2px solid transparent",
                    borderRadius: 999,
                    padding: 4,
                  }}
                >
                  {emoji}
                </span>
              ))}
            </div>
          </Reveal>
          <div style={{ alignSelf: "flex-end" }}>
            <Reveal at={f(83)} from="rise" dur={f(10)}>
              <ChatBubble from="me" size={38} maxWidth={840}>
                <span style={{ ...textStyle(38, 400, pal.onAccent), whiteSpace: "normal" }}>{p.question}</span>
              </ChatBubble>
            </Reveal>
          </div>
          <div style={{ alignSelf: "flex-start" }}>
            <Reveal at={f(93)} from="rise" dur={f(10)}>
              <ChatBubble from="agent" size={38} maxWidth={700}>
                <span style={{ ...textStyle(38, 400, pal.text), whiteSpace: "normal" }}>{p.answer}</span>
              </ChatBubble>
            </Reveal>
          </div>
          <Reveal at={f(104)} from="blur" dur={f(12)}>
            <div style={{ display: "flex", gap: 12 }}>
              {p.pills.map((pill, i) => (
                <Pill key={pill} label={pill} size={30} tone={i === 2 ? "accent" : "outline"} />
              ))}
            </div>
          </Reveal>
          <Reveal at={f(114)} from="rise" dur={f(12)}>
            <Composer width={1060} icon="plus" size={30} placeholder={p.hint} send />
          </Reveal>
        </div>
      </div>
    </Stage>
  );
}
