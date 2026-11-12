/**
 * library-phone: a phone fades up showing a library screen: header, search
 * field, filter chips and a list of saved items. It holds, then whips up
 * and out with vertical blur. Shows "your library, in your pocket".
 */
import { ease, keys, ramp } from "../core/motion.ts";
import { Phone } from "../kit/device.tsx";
import { Icon, Mark } from "../kit/icons.tsx";
import { Blur, Center } from "../kit/motion.tsx";
import { textStyle } from "../kit/theme.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface LibraryPhoneProps {
  title: string;
  subtitle: string;
  search: string;
  chips: string[];
  items: { title: string; meta: string; when: string; badge: string }[];
  /** Whip up and out at the end. */
  exit?: boolean;
}

export function LibraryPhone(p: LibraryPhoneProps) {
  const { frame, f, dur, pal, brand } = useBeat(69);
  const H = 900;
  const w = H * 0.49 - H * 0.026;
  const u = w / 100;
  const inT = ramp(frame, 0, f(14), ease.outCubic);
  const yAt = (fr: number) => (p.exit ? keys(fr, [[dur - f(12), 0], [dur, -1400]], ease.inCubic) : 0);
  const y = yAt(frame);
  const v = Math.abs(y - yAt(frame - 1));
  return (
    <Stage>
      <Center>
        <Blur y={v * 0.35}>
          <div style={{ transform: `translateY(${(1 - inT) * 140 + y}px)`, opacity: Math.min(1, inT * 1.4) }}>
            <Phone height={H}>
              <div style={{ padding: `${u * 3}px ${u * 6}px` }}>
                <div style={{ display: "flex", alignItems: "center", gap: u * 3 }}>
                  <span style={{ width: u * 10, height: u * 10, borderRadius: 99, background: `${pal.accent}22`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Mark kind={brand.mark} size={u * 5.5} color={pal.accent} />
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={textStyle(u * 4.6, 600, "#111")}>{p.title}</div>
                    <div style={textStyle(u * 3, 400, "#8A877F")}>{p.subtitle}</div>
                  </div>
                  <Icon name="plus" size={u * 5} color="#111" />
                  <Icon name="bell" size={u * 5} color="#111" />
                </div>
                <div style={{ marginTop: u * 5, borderRadius: u * 3, background: "#F0EEE8", padding: `${u * 2.6}px ${u * 3}px`, display: "flex", gap: u * 2, alignItems: "center", ...textStyle(u * 3.4, 400, "#8A877F") }}>
                  <Icon name="search" size={u * 4} color="#8A877F" />
                  {p.search}
                </div>
                <div style={{ display: "flex", gap: u * 2, marginTop: u * 4, overflow: "hidden" }}>
                  {p.chips.map((c, i) => (
                    <span key={c} style={{ flex: "none", padding: `${u * 1.4}px ${u * 3}px`, borderRadius: 99, border: "1px solid #E4E2DC", background: i === 0 ? `${pal.accent}22` : "#FFF", ...textStyle(u * 3, 500, i === 0 ? pal.accent : "#111") }}>
                      {c}
                    </span>
                  ))}
                </div>
                <div style={{ marginTop: u * 4, display: "flex", flexDirection: "column", gap: u * 3.4 }}>
                  {p.items.map((it, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: u * 3, opacity: ramp(frame, f(8 + i * 4), f(8)) }}>
                      <span style={{ width: u * 9, height: u * 9, borderRadius: u * 2.4, background: `${pal.accent}1F`, display: "flex", alignItems: "center", justifyContent: "center", ...textStyle(u * 3.2, 600, pal.accent) }}>{it.badge}</span>
                      <div style={{ flex: 1 }}>
                        <div style={textStyle(u * 3.6, 600, "#111")}>{it.title}</div>
                        <div style={textStyle(u * 2.9, 400, "#8A877F")}>{it.meta}</div>
                      </div>
                      <span style={textStyle(u * 2.8, 400, "#8A877F")}>{it.when}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Phone>
          </div>
        </Blur>
      </Center>
    </Stage>
  );
}
