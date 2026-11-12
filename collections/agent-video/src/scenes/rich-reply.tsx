// rich-reply: the thread drifts up as an agent row arrives — avatar plus a
// rich film card with thumbnail, title, meta rows and chips, unblurring line
// by line, then pills pop and the card holds.
import { ease, ramp } from "../core/motion.ts";
import { Icon } from "../kit/icons.tsx";
import { Reveal } from "../kit/motion.tsx";
import { Avatar, Card, Pill } from "../kit/ui.tsx";
import { textStyle } from "../kit/theme.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface RichReplyProps {
  replyTo: string;
  initials: string;
  title: string;
  meta: string;
  link: string;
  pills: [string, string];
}

export function RichReply(p: RichReplyProps) {
  const { frame, f, pal } = useBeat(101);
  const drift = (1 - ramp(frame, 0, f(29), ease.outCubic)) * 60;
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
          gap: 28,
          transform: `translateY(${drift}px)`,
        }}
      >
        <div style={{ width: 920, display: "flex", justifyContent: "flex-end", opacity: 0.75 }}>
          <div
            style={{
              maxWidth: 640,
              padding: "18px 28px",
              borderRadius: 28,
              background: `${pal.accent}2E`,
              border: `1px solid ${pal.accent}55`,
              ...textStyle(30, 400, pal.text),
              whiteSpace: "normal",
            }}
          >
            {p.replyTo}
          </div>
        </div>
        <Reveal at={f(4)} from="rise" dur={f(14)}>
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start", width: 920 }}>
            <Avatar initials={p.initials} size={72} />
            <Card pad={30} radius={26} style={{ flex: 1 }}>
              <div style={{ display: "flex", gap: 26 }}>
                <Reveal at={f(10)} from="left" dur={f(12)}>
                  <div
                    style={{
                      width: 220,
                      height: 168,
                      borderRadius: 16,
                      background: `linear-gradient(160deg, ${pal.accent}, ${pal.accent}B8)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "none",
                    }}
                  >
                    <Icon name="film" size={72} color={pal.onAccent} stroke={2} />
                  </div>
                </Reveal>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <Reveal at={f(29)} from="blur" dur={f(12)}>
                    <div style={{ ...textStyle(56, 600, pal.text), whiteSpace: "normal" }}>{p.title}</div>
                  </Reveal>
                  <Reveal at={f(38)} from="blur" dur={f(12)}>
                    <div style={{ ...textStyle(32, 400, pal.muted), marginTop: 8 }}>{p.meta}</div>
                  </Reveal>
                  <Reveal at={f(47)} from="blur" dur={f(12)}>
                    <div style={{ ...textStyle(30, 500, pal.accent), marginTop: 10 }}>{p.link}</div>
                  </Reveal>
                  <div style={{ display: "flex", gap: 14, marginTop: 18 }}>
                    <Reveal at={f(58)} from="scale" dur={f(10)}>
                      <Pill label={p.pills[0]} size={28} tone="soft" />
                    </Reveal>
                    <Reveal at={f(66)} from="scale" dur={f(10)}>
                      <Pill label={p.pills[1]} size={28} tone="outline" />
                    </Reveal>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Reveal>
      </div>
    </Stage>
  );
}
