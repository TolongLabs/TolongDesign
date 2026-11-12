// chat-send: a user bubble pops in on ink, the request types with a caret,
// a timestamp fades in beneath it, then the finished bubble rises slightly.
import { ease, ramp, typedCount } from "../core/motion.ts";
import { Caret } from "../kit/text.tsx";
import { textStyle } from "../kit/theme.tsx";
import { ChatBubble } from "../kit/ui.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface ChatSendProps {
  message: string;
  time: string;
}

export function ChatSend(p: ChatSendProps) {
  const { frame, f } = useBeat(99);
  const typeAt = f(14);
  const n = typedCount(p.message.length, frame, typeAt, 26);
  const typing = n > 0 && n < p.message.length;
  const done = n >= p.message.length;
  const pop = ramp(frame, 0, f(14), ease.outBack);
  const timeIn = ramp(frame, f(57), f(12));
  const rise = ramp(frame, f(70), f(28), ease.inOutCubic);
  return (
    <Stage>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transform: `translateY(${-rise * 90}px) scale(${0.35 + 0.65 * pop})`,
          opacity: pop,
        }}
      >
        <ChatBubble from="me" size={40} maxWidth={980}>
          <span>
            {p.message.slice(0, n)}
            {done ? null : <Caret size={40} typing={typing} />}
          </span>
        </ChatBubble>
        <div
          style={{
            ...textStyle(28, 400),
            color: "#8C8C90",
            marginTop: 18,
            opacity: timeIn,
            transform: `translateY(${(1 - timeIn) * 10}px)`,
          }}
        >
          {p.time} · Read
        </div>
      </div>
    </Stage>
  );
}
