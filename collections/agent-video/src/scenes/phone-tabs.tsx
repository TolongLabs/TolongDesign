// phone-tabs: one phone drifts across a paper backdrop through four tabs:
// a progress home, a stats screen with vertical bars and a trend line,
// a library list, and a team panel.
import { ease, keys, ramp } from "../core/motion.ts";
import { Phone } from "../kit/device.tsx";
import { Icon } from "../kit/icons.tsx";
import { Blur, Center, Reveal } from "../kit/motion.tsx";
import { Avatar } from "../kit/ui.tsx";
import { LineDraw } from "../kit/fields.tsx";
import { FONT, textStyle } from "../kit/theme.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface PhoneTabsProps {
  tabs: [string, string, string, string];
  homeTitle: string;
  homeProgress: string;
  homeSub: string;
  homeItems: { title: string; meta: string }[];
  statsTitle: string;
  statsValue: string;
  statsSub: string;
  bars: number[];
  libTitle: string;
  libSub: string;
  libItems: { title: string; meta: string }[];
  teamTitle: string;
  teamSub: string;
  members: { name: string; meta: string; initials: string }[];
}

function TabBar(p: { tabs: string[]; active: number; accent: string; u: number }) {
  const icons = ["calendar", "chart", "grid", "smile"];
  return (
    <div style={{ position: "absolute", left: p.u * 6, right: p.u * 6, bottom: p.u * 5, height: p.u * 13, borderRadius: 999, background: "#111", display: "flex", alignItems: "center", justifyContent: "space-around" }}>
      {icons.map((n, i) => (
        <span key={n} style={{ width: p.u * 9, height: p.u * 9, borderRadius: 99, background: i === p.active ? p.accent : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name={n} size={p.u * 5} color={i === p.active ? "#FFFFFF" : "#FFFFFFCC"} />
        </span>
      ))}
    </div>
  );
}

export function PhoneTabs(p: PhoneTabsProps) {
  const { frame, f, dur, pal } = useBeat(168);
  const H = 860;
  const w = H * 0.49 - H * 0.026;
  const u = w / 100;
  // Lateral travel: enter from the left, drift, settle for the last tab.
  const xAt = (fr: number) =>
    keys(fr, [[0, -760], [f(20), 0], [f(60), -60], [f(110), 60], [f(150), 0]], ease.inOutCubic);
  const x = xAt(frame);
  const v = Math.abs(x - xAt(frame - 1));
  const tab = frame < f(48) ? 0 : frame < f(96) ? 1 : frame < f(144) ? 2 : 3;
  const slide = (at: number) => {
    const t = ramp(frame, at, f(10), ease.outCubic);
    return { transform: `translateX(${(1 - t) * 120}px)`, opacity: t };
  };
  return (
    <Stage>
      <Center>
        <Blur x={v * 0.4}>
          <div style={{ transform: `translateX(${x}px)` }}>
            <Phone height={H}>
              {tab === 0 ? (
                <div key="home" style={{ padding: `${u * 4}px ${u * 6}px`, fontFamily: FONT, ...slide(f(4)) }}>
                  <div style={textStyle(u * 7, 600, "#111")}>{p.homeTitle}</div>
                  <div style={{ marginTop: u * 4, borderRadius: u * 4, background: pal.accent, padding: u * 4, display: "flex", gap: u * 3, alignItems: "center" }}>
                    <svg width={u * 10} height={u * 10} viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" fill="none" stroke="#FFFFFF55" strokeWidth="3" />
                      <path d="M12 3a9 9 0 017.8 13.5" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    <div>
                      <div style={textStyle(u * 4.2, 600, "#FFF")}>{p.homeProgress}</div>
                      <div style={{ ...textStyle(u * 3, 400, "#FFFFFFCC"), whiteSpace: "normal" }}>{p.homeSub}</div>
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: u * 3, marginTop: u * 4 }}>
                    {p.homeItems.map((it) => (
                      <div key={it.title} style={{ borderRadius: u * 3.5, background: "#FFF", border: "1px solid #ECEAE4", padding: u * 3, minHeight: u * 20 }}>
                        <div style={{ width: u * 7, height: u * 7, borderRadius: u * 2, background: pal.accent, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Icon name="check" size={u * 4.5} color="#FFF" stroke={2.4} />
                        </div>
                        <div style={{ ...textStyle(u * 3.4, 600, "#111"), marginTop: u * 3 }}>{it.title}</div>
                        <div style={{ ...textStyle(u * 2.8, 400, "#8A877F"), marginTop: u * 1 }}>{it.meta}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
              {tab === 1 ? (
                <div key="stats" style={{ padding: `${u * 4}px ${u * 6}px`, fontFamily: FONT, ...slide(f(48)) }}>
                  <div style={textStyle(u * 7, 600, "#111")}>{p.statsTitle}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: u * 2, marginTop: u * 2 }}>
                    <span style={textStyle(u * 9, 600, "#111")}>{p.statsValue}</span>
                    <span style={textStyle(u * 3, 400, "#8A877F")}>{p.statsSub}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: u * 2.4, height: u * 34, marginTop: u * 4 }}>
                    {p.bars.map((b, i) => (
                      <div
                        key={i}
                        style={{
                          flex: 1,
                          height: `${Math.max(8, b * ramp(frame, f(52) + i * f(3), f(12), ease.outCubic))}%`,
                          borderRadius: u * 1.6,
                          background: i === p.bars.length - 2 ? pal.accent : "#D9D5CE",
                        }}
                      />
                    ))}
                  </div>
                  <div style={{ marginTop: u * 3 }}>
                    <LineDraw d="M0 40 C 30 36, 50 30, 70 28 S 120 18, 170 8" viewBox="0 0 170 48" at={f(60)} dur={f(24)} length={220} color={pal.accent} width={3} style={{ width: "100%", height: u * 16 }} />
                  </div>
                </div>
              ) : null}
              {tab === 2 ? (
                <div key="lib" style={{ padding: `${u * 4}px ${u * 6}px`, fontFamily: FONT, ...slide(f(96)) }}>
                  <div style={textStyle(u * 7, 600, "#111")}>{p.libTitle}</div>
                  <div style={{ ...textStyle(u * 3, 400, "#8A877F"), marginTop: u * 1 }}>{p.libSub}</div>
                  <div style={{ marginTop: u * 4, display: "flex", flexDirection: "column", gap: u * 3 }}>
                    {p.libItems.map((it, i) => (
                      <Reveal key={it.title} at={f(100) + i * f(5)} from="rise" dur={f(8)}>
                        <div style={{ display: "flex", alignItems: "center", gap: u * 3, background: "#FFF", border: "1px solid #ECEAE4", borderRadius: u * 3, padding: `${u * 2.4}px ${u * 3}px` }}>
                          <span style={{ width: u * 9, height: u * 9, borderRadius: u * 2.4, background: `${pal.accent}1F`, display: "flex", alignItems: "center", justifyContent: "center", ...textStyle(u * 3.2, 600, pal.accent) }}>
                            {it.title.slice(0, 1)}
                          </span>
                          <div style={{ flex: 1 }}>
                            <div style={textStyle(u * 3.4, 600, "#111")}>{it.title}</div>
                            <div style={textStyle(u * 2.8, 400, "#8A877F")}>{it.meta}</div>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              ) : null}
              {tab === 3 ? (
                <div key="team" style={{ padding: `${u * 4}px ${u * 6}px`, fontFamily: FONT, ...slide(f(144)) }}>
                  <div style={textStyle(u * 7, 600, "#111")}>{p.teamTitle}</div>
                  <div style={{ ...textStyle(u * 3, 400, "#8A877F"), marginTop: u * 1 }}>{p.teamSub}</div>
                  <div style={{ marginTop: u * 4, borderRadius: u * 4, background: pal.accent, padding: u * 4 }}>
                    <div style={textStyle(u * 6, 600, "#FFF")}>{p.members.length * 4}</div>
                    <div style={{ ...textStyle(u * 3, 400, "#FFFFFFCC"), whiteSpace: "normal" }}>{p.teamSub}</div>
                  </div>
                  <div style={{ marginTop: u * 4, display: "flex", flexDirection: "column", gap: u * 3 }}>
                    {p.members.map((m, i) => (
                      <Reveal key={m.name} at={f(146) + i * f(4)} from="rise" dur={f(8)}>
                        <div style={{ display: "flex", alignItems: "center", gap: u * 3 }}>
                          <Avatar initials={m.initials} size={u * 9} />
                          <div style={{ flex: 1 }}>
                            <div style={textStyle(u * 3.4, 600, "#111")}>{m.name}</div>
                            <div style={textStyle(u * 2.8, 400, "#8A877F")}>{m.meta}</div>
                          </div>
                          <Icon name="check" size={u * 4.5} color={pal.accent} stroke={2.4} />
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              ) : null}
              <TabBar tabs={[...p.tabs]} active={tab} accent={pal.accent} u={u} />
            </Phone>
          </div>
        </Blur>
      </Center>
      {frame < dur - f(6) ? (
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 64, display: "flex", justifyContent: "center", gap: 12 }}>
          {[0, 1, 2, 3].map((i) => (
            <span key={i} style={{ width: i === tab ? 34 : 12, height: 12, borderRadius: 99, background: i === tab ? pal.accent : pal.line, transition: "none" }} />
          ))}
        </div>
      ) : null}
    </Stage>
  );
}
