// thread-pull: the camera keeps pulling back — the thread scrolls upward
// inside a rounding frame, the composer stays centered, and the whole
// conversation shrinks into a dark rounded vignette.
import { ease, keys, ramp } from "../core/motion.ts";
import { textStyle } from "../kit/theme.tsx";
import { ChatBubble, Composer, Pill } from "../kit/ui.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface ThreadPullProps {
  lines: { from: "me" | "agent"; text: string }[];
  pills: [string, string, string];
  hint: string;
}

export function ThreadPull(p: ThreadPullProps) {
  const { frame, f, pal } = useBeat(81);
  const scroll = keys(frame, [[0, 150], [f(35), 0]], ease.outCubic);
  const zoom = keys(frame, [[f(30), 1], [f(80), 0.68]], ease.inOutCubic);
  const round = ramp(frame, f(40), f(30));
  const dim = ramp(frame, f(50), f(30));
  return (
    <Stage>
      <div style={{ position: "absolute", inset: 0, background: "#000000", opacity: dim * 0.45 }} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `scale(${zoom})`,
        }}
      >
        <div
          style={{
            width: 1060,
            border: `1px solid ${pal.line}`,
            borderRadius: 24 + round * 90,
            background: pal.bg,
            padding: "48px 60px",
            overflow: "hidden",
            boxShadow: "0 40px 120px rgba(0,0,0,0.55)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 18, transform: `translateY(${scroll}px)` }}>
            {p.lines.map((l, i) => (
              <div key={i} style={{ alignSelf: l.from === "me" ? "flex-end" : "flex-start" }}>
                <ChatBubble from={l.from} size={38} maxWidth={760}>
                  <span style={{ ...textStyle(38, 400, l.from === "me" ? pal.onAccent : pal.text), whiteSpace: "normal" }}>{l.text}</span>
                </ChatBubble>
              </div>
            ))}
            <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 6 }}>
              {p.pills.map((pill, i) => (
                <Pill key={pill} label={pill} size={30} tone={i === 2 ? "accent" : "outline"} />
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 6 }}>
              <Composer width={820} icon="plus" size={30} placeholder={p.hint} send />
            </div>
          </div>
        </div>
      </div>
    </Stage>
  );
}
