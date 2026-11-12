// publish-modal: a share dialog pops over the dimmed film: title, slug on
// the domain, access rows, then the cursor crosses and presses Publish.
import { ease, ramp } from "../core/motion.ts";
import { Icon } from "../kit/icons.tsx";
import { Center, Reveal } from "../kit/motion.tsx";
import { textStyle } from "../kit/theme.tsx";
import { Avatar, Cursor, pressScale } from "../kit/ui.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface PublishModalProps {
  title: string;
  slug: string;
  domain: string;
  accessLabel: string;
  rows: { name: string; role: string; initials: string }[];
  generalLabel: string;
  generalValue: string;
  copyLink: string;
  publish: string;
}

export function PublishModal(p: PublishModalProps) {
  const { frame, f, pal } = useBeat(77);
  const pressAt = f(58);
  const press = pressScale(frame, pressAt);
  const pop = ramp(frame, f(2), f(12), ease.outBack);
  return (
    <Stage>
      <Center>
        <div style={{ width: 1180, height: 680, borderRadius: 22, background: pal.card, border: `1px solid ${pal.line}`, opacity: 0.55 }} />
      </Center>
      <div style={{ position: "absolute", inset: 0, background: "rgba(8,8,10,0.28)" }} />
      <Center>
        <div style={{ width: 640, borderRadius: 24, background: "#FFFFFF", border: "1px solid #E4E2DC", boxShadow: "0 40px 100px rgba(0,0,0,0.25)", padding: "30px 34px 30px", transform: `scale(${0.85 + 0.15 * pop})`, opacity: pop, fontFamily: "Inter, system-ui, sans-serif" }}>
          <Reveal at={f(4)} from="fade" dur={f(8)}>
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={textStyle(30, 600, "#111")}>{p.title}</span>
                <Icon name="plus" size={26} color="#8A877F" style={{ transform: "rotate(45deg)" }} />
              </div>
              <div style={{ ...textStyle(20, 400, "#8A877F"), marginTop: 4 }}>Video URL</div>
              <div style={{ marginTop: 8, display: "flex", alignItems: "center", border: "1px solid #E4E2DC", borderRadius: 12, padding: "12px 16px", gap: 8 }}>
                <span style={textStyle(22, 500, "#111")}>{p.slug}</span>
                <span style={{ ...textStyle(22, 400, "#8A877F"), flex: 1, textAlign: "right" }}>{p.domain}</span>
              </div>
              <div style={{ ...textStyle(20, 400, "#8A877F"), marginTop: 18 }}>{p.accessLabel}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 8 }}>
                {p.rows.map((r, i) => (
                  <Reveal key={r.name} at={f(14) + i * f(7)} from="rise" dur={f(8)}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <Avatar initials={r.initials} size={40} />
                      <span style={{ ...textStyle(22, 500, "#111"), flex: 1 }}>{r.name}</span>
                      <span style={textStyle(20, 400, "#8A877F")}>{r.role}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
              <div style={{ ...textStyle(20, 400, "#8A877F"), marginTop: 16 }}>{p.generalLabel}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 6 }}>
                <Icon name="link" size={24} color="#8A877F" />
                <span style={{ ...textStyle(22, 500, "#111"), flex: 1 }}>{p.generalValue}</span>
              </div>
              <div style={{ display: "flex", gap: 12, marginTop: 22 }}>
                <span style={{ ...textStyle(22, 500, "#111"), border: "1px solid #E4E2DC", borderRadius: 999, padding: "12px 26px" }}>{p.copyLink}</span>
                <span style={{ ...textStyle(22, 600, "#FFF"), background: pal.accent, borderRadius: 999, padding: "12px 40px", transform: `scale(${frame >= pressAt - f(2) ? press : 1})` }}>
                  {p.publish}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Center>
      <Cursor path={[[0, 400, 900], [f(40), 1080, 880], [77, 1080, 880]]} clicks={[pressAt]} />
    </Stage>
  );
}
