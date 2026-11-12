/**
 * phone-offer: a phone on paper shows the app library, a paywall sheet
 * rises with a checklist, two prices and a button; a cursor presses, the
 * sheet converts to a success state, and the library returns.
 */
import { clamp, ease, keys, ramp } from "../core/motion.ts";
import { AppScreen, Phone, type AppItem } from "../kit/device.tsx";
import { Icon } from "../kit/icons.tsx";
import { Center } from "../kit/motion.tsx";
import { textStyle } from "../kit/theme.tsx";
import { pressScale } from "../kit/ui.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface PhoneOfferProps {
  app: { title: string; progress: string; progressSub?: string; items: AppItem[] };
  offer: { headline: string; sub?: string; rows: string[]; prices: [string, string]; button: string; success: string };
  caption?: string;
}

const H = 860;

export function PhoneOffer(p: PhoneOfferProps) {
  const { frame, f, pal } = useBeat(138);
  const rise = ramp(frame, 0, f(14), ease.outCubic);
  const sheet = keys(frame, [[f(14), 0], [f(30), 1], [f(118), 1], [f(132), 0]], ease.inOutCubic);
  const tilt = keys(frame, [[f(70), 0], [f(84), -5], [f(104), -5], [f(118), 0]], ease.inOutCubic);
  const pressAt = f(92);
  const success = ramp(frame, f(98), f(10), ease.outCubic);
  const w = H * 0.49 - H * 0.026;
  const u = w / 100;
  return (
    <Stage>
      <Center>
        <div style={{ transform: `translateY(${(1 - rise) * 120}px) rotate(${tilt}deg)`, opacity: rise }}>
          <Phone height={H}>
            <AppScreen w={w} accent={pal.accent} {...p.app} />
            <div style={{ position: "absolute", inset: 0, background: `rgba(17,17,17,${0.25 * sheet})` }} />
            <div
              style={{
                position: "absolute",
                left: u * 3,
                right: u * 3,
                bottom: u * 3,
                transform: `translateY(${(1 - sheet) * 110}%)`,
                borderRadius: u * 6,
                background: "#FFFFFF",
                padding: u * 6,
                boxShadow: "0 -10px 40px rgba(0,0,0,0.12)",
              }}
            >
              {success < 1 ? (
                <div style={{ opacity: 1 - success }}>
                  <div style={{ width: u * 11, height: u * 11, borderRadius: u * 3, background: pal.accent, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
                    <Icon name="film" size={u * 6.5} color="#FFFFFF" stroke={2.2} />
                  </div>
                  <div style={{ ...textStyle(u * 5.4, 600, "#111"), textAlign: "center", marginTop: u * 4, whiteSpace: "normal" }}>{p.offer.headline}</div>
                  {p.offer.sub ? <div style={{ ...textStyle(u * 3.2, 400, "#8A877F"), textAlign: "center", marginTop: u * 1.5, whiteSpace: "normal" }}>{p.offer.sub}</div> : null}
                  <div style={{ marginTop: u * 4, display: "flex", flexDirection: "column", gap: u * 2.4 }}>
                    {p.offer.rows.map((r, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: u * 2.5, opacity: ramp(frame, f(24 + i * 4), f(8)) }}>
                        <span style={{ width: u * 5, height: u * 5, borderRadius: 99, background: `${pal.accent}22`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Icon name="check" size={u * 3.6} color={pal.accent} stroke={3} />
                        </span>
                        <span style={textStyle(u * 3.4, 500, "#111")}>{r}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: u * 3, marginTop: u * 5 }}>
                    {p.offer.prices.map((pr, i) => (
                      <div key={i} style={{ flex: 1, borderRadius: u * 3.5, padding: u * 3, border: `2px solid ${i === 1 ? pal.accent : "#ECEAE4"}`, background: i === 1 ? `${pal.accent}12` : "#FFF" }}>
                        <div style={textStyle(u * 3, 500, "#8A877F")}>{i === 0 ? "Yearly" : "Lifetime"}</div>
                        <div style={textStyle(u * 6, 600, i === 1 ? pal.accent : "#111")}>{pr}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: u * 5, borderRadius: 999, background: "#111", padding: u * 3.4, textAlign: "center", ...textStyle(u * 3.6, 600, "#FFF"), transform: `scale(${pressScale(frame, pressAt)})` }}>
                    {p.offer.button}
                  </div>
                </div>
              ) : null}
              {success > 0 ? (
                <div style={{ position: success < 1 ? "absolute" : "relative", inset: 0, padding: success < 1 ? u * 6 : 0, opacity: success, display: "flex", flexDirection: "column", alignItems: "center", gap: u * 4, minHeight: u * 60, justifyContent: "center" }}>
                  <div style={{ width: u * 16, height: u * 16, borderRadius: 99, background: pal.accent, display: "flex", alignItems: "center", justifyContent: "center", transform: `scale(${0.6 + 0.4 * ease.outBack(clamp(success))})` }}>
                    <Icon name="check" size={u * 9} color="#FFFFFF" stroke={3} />
                  </div>
                  <div style={{ ...textStyle(u * 5, 600, "#111"), textAlign: "center", whiteSpace: "normal" }}>{p.offer.success}</div>
                </div>
              ) : null}
            </div>
          </Phone>
        </div>
      </Center>
      {p.caption ? (
        <div style={{ position: "absolute", left: 140, top: "50%", transform: "translateY(-50%)", maxWidth: 520, ...textStyle(56, 500, pal.text), whiteSpace: "normal", opacity: ramp(frame, f(20), f(12)) }}>
          {p.caption}
        </div>
      ) : null}
    </Stage>
  );
}
