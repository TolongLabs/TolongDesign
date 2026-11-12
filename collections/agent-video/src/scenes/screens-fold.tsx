// Screens fold: a fan of app screens slides across paper, folds together,
// and resolves into one hero phone showing the render queue.
import { clamp, ease, keys, ramp } from "../core/motion.ts";
import { AppScreen, Phone, type AppItem } from "../kit/device.tsx";
import { Icon } from "../kit/icons.tsx";
import { Center, Reveal } from "../kit/motion.tsx";
import { textStyle } from "../kit/theme.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface ScreensFoldProps {
  title: string;
  progress: string;
  progressSub?: string;
  items: AppItem[];
  cards?: number;
}

export function ScreensFold(p: ScreensFoldProps) {
  const { frame, f, pal } = useBeat(72);
  const count = p.cards ?? 5;
  const landAt = f(40);
  const phoneT = ramp(frame, landAt, f(14), ease.outCubic);
  const cardsOut = ramp(frame, landAt - f(4), f(8), ease.inCubic);
  return (
    <Stage>
      {/* folding fan of screens */}
      {Array.from({ length: count }, (_, i) => {
        const c = i - (count - 1) / 2;
        const stagger = i * f(3);
        const t = ramp(frame, f(2) + stagger, f(34), ease.inOutCubic);
        const x = keys(t * 100, [[0, c * 430], [100, 0]], ease.inOutCubic);
        const rot = keys(t * 100, [[0, c * 12], [100, 0]], ease.inOutCubic);
        const y = keys(t * 100, [[0, Math.abs(c) * 70 + 40], [100, 0]], ease.inOutCubic);
        const alt = i % 2 === 1;
        return (
          <Center key={i}>
            <div
              style={{
                position: "absolute",
                transform: `translate(${x}px, ${y}px) rotate(${rot}deg)`,
                opacity: (1 - cardsOut) * clamp(t * 2),
                width: 300,
                height: 560,
                borderRadius: 26,
                overflow: "hidden",
                background: alt ? pal.accent : pal.card,
                border: `1px solid ${alt ? pal.accent : pal.line}`,
                boxShadow: "0 30px 70px rgba(0,0,0,0.20)",
              }}
            >
              <div style={{ padding: "22px 24px" }}>
                <div style={textStyle(26, 600, alt ? pal.onAccent : pal.text)}>{p.title}</div>
                <div style={{ ...textStyle(19, 400, alt ? `${pal.onAccent}CC` : pal.muted), marginTop: 4 }}>{p.progress}</div>
                <div style={{ marginTop: 18, borderRadius: 14, height: 10, background: alt ? "#FFFFFF44" : pal.line }}>
                  <div style={{ width: `${Math.min(96, 30 + i * 16)}%`, height: "100%", borderRadius: 14, background: alt ? "#FFFFFF" : pal.accent }} />
                </div>
                <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
                  {(p.items.slice(0, 3)).map((it, k) => (
                    <div key={k} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ width: 34, height: 34, borderRadius: 10, background: alt ? "#FFFFFF33" : `${pal.accent}22`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Icon name="film" size={18} color={alt ? "#FFFFFF" : pal.accent} />
                      </span>
                      <span style={textStyle(18, 500, alt ? pal.onAccent : pal.text)}>{it.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Center>
        );
      })}
      {/* hero phone */}
      {frame >= landAt - f(4) ? (
        <Center>
          <div style={{ transform: `translateY(${(1 - phoneT) * 200}px) scale(${0.9 + 0.1 * phoneT})`, opacity: clamp(phoneT * 1.6) }}>
            <Reveal at={landAt} dur={f(10)} from="scale">
              <Phone height={840}>
                <AppScreen w={840 * 0.49 - 840 * 0.026} accent={pal.accent} title={p.title} progress={p.progress} progressSub={p.progressSub} items={p.items} checkAt={landAt + f(8)} />
              </Phone>
            </Reveal>
          </div>
        </Center>
      ) : null}
    </Stage>
  );
}
