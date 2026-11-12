/**
 * Device frames without OS chrome, and a mock app screen to put in them.
 * Content is the product's: pass real labels.
 */
import type { CSSProperties, ReactNode } from "react";
import { useCurrentFrame } from "remotion";
import { ramp } from "../core/motion.ts";
import { Icon } from "./icons.tsx";
import { FONT, textStyle, useTheme } from "./theme.tsx";

/** Phone body at a given height; the screen is a light app surface. */
export function Phone(props: { height: number; children?: ReactNode; style?: CSSProperties }) {
  const h = props.height;
  const w = h * 0.49;
  return (
    <div
      style={{
        width: w,
        height: h,
        borderRadius: h * 0.085,
        background: "#0B0B0C",
        padding: h * 0.013,
        boxShadow: "0 0 0 2px #2B2B2E inset, 0 40px 90px rgba(0,0,0,0.28)",
        flex: "none",
        ...props.style,
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: h * 0.072, overflow: "hidden", background: "#FBFAF7" }}>
        <div style={{ position: "absolute", top: h * 0.018, left: "50%", width: w * 0.3, height: h * 0.034, marginLeft: -w * 0.15, borderRadius: 999, background: "#0B0B0C", zIndex: 5 }} />
        <div style={{ display: "flex", justifyContent: "space-between", padding: `${h * 0.022}px ${w * 0.09}px 0`, ...textStyle(h * 0.022, 600, "#111111") }}>
          <span>9:41</span>
          <span style={{ letterSpacing: 2 }}>▪▪▪</span>
        </div>
        <div style={{ position: "absolute", inset: `${h * 0.065}px 0 0 0` }}>{props.children}</div>
      </div>
    </div>
  );
}

/** App window: a soft title bar and a body. No traffic lights, no URL bar. */
export function Window(props: { width: number; height: number; title?: string; children?: ReactNode; style?: CSSProperties }) {
  const { pal } = useTheme();
  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        borderRadius: 18,
        overflow: "hidden",
        background: pal.card,
        border: `1px solid ${pal.line}`,
        boxShadow: "0 40px 100px rgba(0,0,0,0.22)",
        display: "flex",
        flexDirection: "column",
        fontFamily: FONT,
        ...props.style,
      }}
    >
      <div style={{ height: 46, borderBottom: `1px solid ${pal.line}`, display: "flex", alignItems: "center", padding: "0 20px", ...textStyle(18, 500, pal.muted) }}>
        {props.title}
      </div>
      <div style={{ flex: 1, position: "relative" }}>{props.children}</div>
    </div>
  );
}

export interface AppItem {
  title: string;
  meta: string;
  done?: boolean;
}

/**
 * A light mock app screen: a header, an accent progress card, a week strip,
 * a grid of items and a tab bar. Sized to its container's width `w`.
 */
export function AppScreen(props: {
  w: number;
  accent: string;
  title: string;
  progress: string;
  progressSub?: string;
  items: AppItem[];
  /** Frame when items start checking themselves off. */
  checkAt?: number;
}) {
  const frame = useCurrentFrame();
  const u = props.w / 100;
  const ink = "#111111";
  const muted = "#8A877F";
  return (
    <div style={{ padding: `${u * 4}px ${u * 6}px`, fontFamily: FONT, color: ink }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={textStyle(u * 7, 600, ink)}>{props.title}</span>
        <span style={{ width: u * 6, height: u * 6, borderRadius: 99, background: ink }} />
      </div>
      <div style={{ marginTop: u * 4, borderRadius: u * 4, background: props.accent, padding: u * 4, display: "flex", gap: u * 3, alignItems: "center" }}>
        <svg width={u * 10} height={u * 10} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" fill="none" stroke="#FFFFFF55" strokeWidth="3" />
          <path d="M12 3a9 9 0 017.8 13.5" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <div>
          <div style={textStyle(u * 4.2, 600, "#FFFFFF")}>{props.progress}</div>
          {props.progressSub ? <div style={{ ...textStyle(u * 3, 400, "#FFFFFFCC"), whiteSpace: "normal" }}>{props.progressSub}</div> : null}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: u * 4 }}>
        {[24, 25, 26, 27, 28, 29, 30].map((d, i) => (
          <span key={d} style={{ ...textStyle(u * 3.2, 500, i === 4 ? "#FFFFFF" : muted), width: u * 9, height: u * 9, borderRadius: u * 3, background: i === 4 ? ink : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {d}
          </span>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: u * 3, marginTop: u * 4 }}>
        {props.items.map((it, i) => {
          const done = it.done || (props.checkAt !== undefined && ramp(frame, props.checkAt + i * 6, 6) >= 1);
          return (
            <div key={i} style={{ borderRadius: u * 3.5, background: "#FFFFFF", border: "1px solid #ECEAE4", padding: u * 3, minHeight: u * 22 }}>
              <div style={{ width: u * 7, height: u * 7, borderRadius: u * 2, background: done ? props.accent : "#F1EFEA", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name={done ? "check" : "film"} size={u * 4.5} color={done ? "#FFFFFF" : muted} stroke={2.4} />
              </div>
              <div style={{ ...textStyle(u * 3.4, 600, ink), marginTop: u * 3 }}>{it.title}</div>
              <div style={{ ...textStyle(u * 2.8, 400, muted), marginTop: u * 1 }}>{it.meta}</div>
            </div>
          );
        })}
      </div>
      <div style={{ position: "absolute", left: u * 6, right: u * 6, bottom: u * 5, height: u * 13, borderRadius: 999, background: ink, display: "flex", alignItems: "center", justifyContent: "space-around" }}>
        {["calendar", "film", "grid", "smile"].map((n) => (
          <Icon key={n} name={n} size={u * 5} color="#FFFFFFCC" />
        ))}
        <span style={{ width: u * 9, height: u * 9, borderRadius: 99, background: props.accent, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name="plus" size={u * 5} color="#FFFFFF" stroke={2.4} />
        </span>
      </div>
    </div>
  );
}
