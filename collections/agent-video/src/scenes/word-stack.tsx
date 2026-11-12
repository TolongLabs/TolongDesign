// Word stack: a headline builds line by line. In "mark" mode a brand mark
// leads the first line and a pale nav panel slides in at the left edge; in
// "icons" mode each line gets its own icon tile. One file, props switch it.
import { ease, ramp } from "../core/motion.ts";
import { Mark } from "../kit/icons.tsx";
import { Center, Reveal } from "../kit/motion.tsx";
import { SplitText } from "../kit/text.tsx";
import { textStyle } from "../kit/theme.tsx";
import { IconTile } from "../kit/ui.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface WordStackRow {
  text: string;
  icon?: string;
}

export interface WordStackProps {
  lead: string;
  rows: WordStackRow[];
  /** "mark": mark + headline + side panel. "icons": lead word + icon rows. */
  variant?: "mark" | "icons";
  size?: number;
}

export function WordStack(p: WordStackProps) {
  const { frame, f, pal, brand } = useBeat(62);
  const variant = p.variant ?? "mark";
  const size = p.size ?? (variant === "mark" ? 92 : 96);
  const panelT = variant === "mark" ? ramp(frame, f(27), f(16), ease.outCubic) : 0;
  return (
    <Stage>
      {/* ghosted app sidebar sliding in at the left edge (mark mode) */}
      {variant === "mark" ? (
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 90,
            bottom: 90,
            width: 300,
            transform: `translateX(${-320 * (1 - panelT)}px)`,
            opacity: panelT,
            background: pal.card,
            borderRight: `1px solid ${pal.line}`,
            borderTop: `1px solid ${pal.line}`,
            borderBottom: `1px solid ${pal.line}`,
            borderRadius: "0 24px 24px 0",
            padding: "36px 30px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <Mark kind={brand.mark} size={40} color={pal.accent} />
            <span style={textStyle(26, 600, pal.text)}>{brand.name}</span>
          </div>
          <div style={{ marginTop: 34, display: "flex", flexDirection: "column", gap: 22 }}>
            {["Projects", "Templates", "Exports"].map((s, i) => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 14, opacity: 0.45 + (i === 0 ? 0.55 : 0) }}>
                <span style={{ width: 34, height: 34, borderRadius: 10, background: i === 0 ? `${pal.accent}26` : "transparent", border: `1px solid ${pal.line}` }} />
                <span style={textStyle(24, i === 0 ? 600 : 400, i === 0 ? pal.text : pal.muted)}>{s}</span>
              </div>
            ))}
          </div>
          <div style={{ position: "absolute", bottom: 36, left: 30, right: 30, borderRadius: 14, background: pal.accent, padding: "14px 18px", ...textStyle(22, 600, pal.onAccent) }}>
            New film
          </div>
        </div>
      ) : null}
      <Center style={{ paddingLeft: variant === "mark" ? 200 : 0 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: size * 0.28, alignItems: "flex-start" }}>
          <div style={{ display: "flex", alignItems: "center", gap: size * 0.3 }}>
            {variant === "mark" ? (
              <Reveal at={f(2)} dur={f(10)} from="rise">
                <Mark kind={brand.mark} size={size * 0.95} color={pal.accent} />
              </Reveal>
            ) : null}
            <SplitText text={p.lead} at={f(4)} size={size} weight={600} mode="rise" />
          </div>
          {p.rows.map((r, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: size * 0.32 }}>
              {r.icon ? (
                <Reveal at={f(20 + i * 8)} dur={f(10)} from="rise">
                  <IconTile icon={r.icon} size={size * 0.92} tone={variant === "icons" && i === 2 ? "accent" : "card"} />
                </Reveal>
              ) : null}
              <SplitText text={r.text} at={f(variant === "mark" ? 10 + i * 7 : 20 + i * 8)} size={variant === "mark" ? size : size * 0.72} weight={variant === "mark" ? 600 : 500} mode="rise" color={variant === "icons" ? pal.text : undefined} />
            </div>
          ))}
        </div>
      </Center>
    </Stage>
  );
}
