// window-preview: a brief window rests on a soft wallpaper; a cursor
// crosses, presses Preview, and a dark player panel opens beside it.
import { ease, ramp } from "../core/motion.ts";
import { Icon, Mark } from "../kit/icons.tsx";
import { Window } from "../kit/device.tsx";
import { Center, Reveal } from "../kit/motion.tsx";
import { textStyle } from "../kit/theme.tsx";
import { Cursor, pressScale } from "../kit/ui.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface WindowPreviewProps {
  brief: string;
  lines: string[];
  video: string;
  videoMeta: string;
  preview: string;
  publish: string;
}

export function WindowPreview(p: WindowPreviewProps) {
  const { frame, f, pal, brand } = useBeat(71);
  const crossAt = f(38);
  const pressAt = f(54);
  const press = pressScale(frame, pressAt);
  const open = ramp(frame, pressAt + f(2), f(10), ease.outCubic);
  const shifted = -open * 260;
  return (
    <Stage>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, #EDE6F2 0%, #D9CBD8 34%, #4A4258 62%, #23232E 100%)" }} />
      <Center>
        <div style={{ display: "flex", gap: 36, alignItems: "center", transform: `translateX(${shifted}px)` }}>
          <Window width={1040} height={700} title={p.brief}>
            <div style={{ padding: "30px 36px", display: "flex", flexDirection: "column", gap: 13 }}>
              <span style={textStyle(38, 600, pal.text)}>{p.brief}</span>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Mark kind={brand.mark} size={36} color={pal.accent} />
                <span style={textStyle(24, 400, pal.muted)}>{p.brief}</span>
              </div>
              {p.lines.slice(0, 4).map((l) => (
                <span key={l} style={{ ...textStyle(24, 400, pal.muted), whiteSpace: "normal", lineHeight: 1.35 }}>{l}</span>
              ))}
              <div style={{ marginTop: 12, border: `1px solid ${pal.line}`, borderRadius: 14, padding: 18, display: "flex", alignItems: "center", gap: 18 }}>
                <span style={{ width: 96, height: 72, borderRadius: 10, background: "#1A1A1E", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Mark kind={brand.mark} size={34} color="#FFF" />
                </span>
                <div style={{ flex: 1 }}>
                  <div style={textStyle(27, 600, pal.text)}>{p.video}</div>
                  <div style={textStyle(22, 400, pal.muted)}>{p.videoMeta}</div>
                </div>
                <span style={{ ...textStyle(24, 500, pal.muted), border: `1px solid ${pal.line}`, borderRadius: 999, padding: "9px 24px" }}>{p.preview}</span>
                <span
                  style={{
                    ...textStyle(24, 600, pal.onAccent),
                    background: pal.accent,
                    borderRadius: 999,
                    padding: "9px 26px",
                    transform: `scale(${frame >= pressAt - f(2) && frame <= pressAt + f(8) ? press : 1})`,
                  }}
                >
                  {p.publish}
                </span>
              </div>
            </div>
          </Window>
          {open > 0 ? (
            <Reveal at={pressAt + f(2)} from="scale" dur={f(10)}>
              <div style={{ width: 560, height: 700, borderRadius: 18, background: "#0C0C0E", border: "1px solid #26262A", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ height: 52, display: "flex", alignItems: "center", padding: "0 22px", ...textStyle(20, 500, "#8C8C90") }}>
                  {p.video} — {p.videoMeta}
                </div>
                <div style={{ flex: 1, background: "radial-gradient(circle at 50% 42%, #3A2E22 0%, #171416 62%)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <span style={{ width: 110, height: 110, borderRadius: 999, border: "3px solid #FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", opacity: open }}>
                    <Icon name="play" size={52} color="#FFFFFF" />
                  </span>
                  <span style={{ position: "absolute", bottom: 26, ...textStyle(26, 500, "#F5F5F2") }}>{p.video}</span>
                </div>
                <div style={{ height: 64, display: "flex", alignItems: "center", gap: 18, padding: "0 26px" }}>
                  <span style={{ ...textStyle(19, 400, "#8C8C90"), flex: 1 }}>{p.videoMeta}</span>
                  <span style={{ width: 120, height: 10, borderRadius: 99, background: "#26262A" }}>
                    <span style={{ display: "block", width: `${open * 100}%`, height: "100%", borderRadius: 99, background: pal.accent }} />
                  </span>
                </div>
              </div>
            </Reveal>
          ) : null}
        </div>
      </Center>
      <Cursor path={[[0, 1560, 840], [crossAt, 1330, 660], [71, 1330, 660]]} clicks={[pressAt]} />
    </Stage>
  );
}
