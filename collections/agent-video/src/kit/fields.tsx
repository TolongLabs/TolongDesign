/**
 * Backdrops and data shapes: hairline grid, halftone dot field, radial
 * bloom, particles, bars and drawn lines. Muted, slow, never a glow blob.
 */
import type { CSSProperties, ReactElement } from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { clamp, ease, lerp, ramp, seeded } from "../core/motion.ts";
import { mix } from "../core/tokens.ts";
import { textStyle, useTheme } from "./theme.tsx";

export function Grid(props: { cell?: number; opacity?: number; at?: number }) {
  const frame = useCurrentFrame();
  const { pal } = useTheme();
  const cell = props.cell ?? 96;
  const o = (props.opacity ?? 1) * (props.at === undefined ? 1 : ramp(frame, props.at, 20));
  return (
    <AbsoluteFill
      style={{
        opacity: o,
        backgroundImage: `linear-gradient(${pal.line} 1px, transparent 1px), linear-gradient(90deg, ${pal.line} 1px, transparent 1px)`,
        backgroundSize: `${cell}px ${cell}px`,
        backgroundPosition: "center center",
      }}
    />
  );
}

/**
 * Dot field. A wave runs out from the centre from `waveAt`, swelling dots
 * and tinting them with the accent.
 */
export function Halftone(props: { gap?: number; dot?: number; waveAt?: number; waveDur?: number; tint?: boolean; style?: CSSProperties }) {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const { pal } = useTheme();
  const gap = props.gap ?? 22;
  const base = props.dot ?? 3.2;
  const cols = Math.ceil(width / gap) + 1;
  const rows = Math.ceil(height / gap) + 1;
  const maxR = Math.hypot(width, height) / 2;
  const front = props.waveAt === undefined ? -1 : ramp(frame, props.waveAt, props.waveDur ?? 30, ease.outCubic) * maxR * 1.2;
  const circles: ReactElement[] = [];
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++) {
      const x = c * gap;
      const y = r * gap;
      const d = Math.hypot(x - width / 2, y - height / 2);
      const band = front < 0 ? 0 : clamp(1 - Math.abs(d - front) / 140);
      const rr = base * (1 + band * 0.9);
      circles.push(
        <circle key={`${r}-${c}`} cx={x} cy={y} r={rr} fill={props.tint && band > 0.05 ? pal.accent : pal.line} fillOpacity={0.55 + band * 0.45} />,
      );
    }
  return (
    <AbsoluteFill style={props.style}>
      <svg width={width} height={height}>{circles}</svg>
    </AbsoluteFill>
  );
}

/** Concentric rings and a radial gradient that open from the centre. */
export function RadialBloom(props: { at: number; dur?: number; rings?: number; color?: string }) {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const { pal } = useTheme();
  const c = props.color ?? pal.accent;
  const t = ramp(frame, props.at, props.dur ?? 26, ease.outCubic);
  const R = Math.hypot(width, height) * 0.62 * t;
  const rings = props.rings ?? 3;
  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 50% 50%, ${mix(c, "#1A1024", 0.7)} 0px, ${c} ${R * 0.45}px, ${mix(c, "#FFFFFF", 0.72)} ${R * 0.8}px, ${c} ${R}px, transparent ${R + 2}px)`,
          opacity: clamp(t * 1.4),
        }}
      />
      {Array.from({ length: rings }, (_, i) => {
        const ti = ramp(frame, props.at + i * 5, (props.dur ?? 26) + 10, ease.outCubic);
        const r = 120 + ti * (Math.max(width, height) * 0.45 + i * 140);
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: width / 2 - r,
              top: height / 2 - r,
              width: r * 2,
              height: r * 2,
              borderRadius: 999,
              border: `2px solid rgba(255,255,255,${0.75 - i * 0.18})`,
              opacity: ti > 0 ? 1 - ti * 0.4 : 0,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
}

/** Seeded dots that scatter outward from the centre (or gather when `gather`). */
export function Particles(props: { at: number; dur?: number; count?: number; seed?: number; gather?: boolean; size?: number }) {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const { pal } = useTheme();
  const rnd = seeded(props.seed ?? 7);
  const t0 = ramp(frame, props.at, props.dur ?? 30, ease.outCubic);
  const t = props.gather ? 1 - t0 : t0;
  return (
    <AbsoluteFill>
      {Array.from({ length: props.count ?? 40 }, (_, i) => {
        const a = rnd() * Math.PI * 2;
        const dist = lerp(80, Math.max(width, height) * 0.6, rnd());
        const s = (props.size ?? 8) * (0.5 + rnd());
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: width / 2 + Math.cos(a) * dist * t - s / 2,
              top: height / 2 + Math.sin(a) * dist * t - s / 2,
              width: s,
              height: s,
              borderRadius: 999,
              background: rnd() > 0.5 ? pal.accent : pal.text,
              opacity: t <= 0.01 ? 0 : 0.85 * (1 - Math.max(0, t - 0.7) / 0.3),
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
}

export interface BarRow {
  label: string;
  value: number;
  /** Shown text; defaults to the value with a % sign. */
  text?: string;
  ours?: boolean;
}

/** Horizontal benchmark bars that race in, ours on the accent. */
export function Bars(props: { rows: BarRow[]; at: number; width: number; title?: string; sub?: string; stagger?: number; size?: number }) {
  const frame = useCurrentFrame();
  const { pal } = useTheme();
  const size = props.size ?? 30;
  const max = Math.max(...props.rows.map((r) => r.value));
  return (
    <div style={{ width: props.width }}>
      {props.title ? <div style={textStyle(size * 1.05, 500, pal.text)}>{props.title}</div> : null}
      {props.sub ? <div style={{ ...textStyle(size * 0.8, 400, pal.muted), marginTop: 6 }}>{props.sub}</div> : null}
      <div style={{ marginTop: size * 1.1, display: "flex", flexDirection: "column", gap: size * 0.55 }}>
        {props.rows.map((r, i) => {
          const t = ramp(frame, props.at + i * (props.stagger ?? 5), 26, ease.outQuart);
          const w = (r.value / max) * (props.width - size * 4) * t;
          return (
            <div key={r.label} style={{ display: "flex", alignItems: "center", gap: size * 0.6 }}>
              <div style={{ position: "relative", flex: 1, height: size * 1.55 }}>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: Math.max(w, size * 6 * Math.min(1, t * 3)),
                    borderRadius: size * 0.3,
                    background: r.ours ? pal.accent : pal.card,
                    border: r.ours ? "none" : `1px solid ${pal.line}`,
                    boxShadow: r.ours ? `0 0 40px ${pal.accent}55` : undefined,
                  }}
                />
                <span style={{ position: "absolute", left: size * 0.5, top: "50%", transform: "translateY(-50%)", ...textStyle(size * 0.8, 500, r.ours ? pal.onAccent : pal.text), opacity: clamp(t * 3) }}>
                  {r.label}
                </span>
              </div>
              <span style={{ width: size * 2.6, textAlign: "right", ...textStyle(size * 0.8, 500, r.ours ? pal.accent : pal.muted), opacity: clamp(t * 2) }}>
                {r.text ?? `${Math.round(r.value * t)}%`}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** A path drawn by stroke offset over `dur` frames. */
export function LineDraw(props: { d: string; at: number; dur?: number; length: number; color?: string; width?: number; viewBox: string; style?: CSSProperties }) {
  const frame = useCurrentFrame();
  const { pal } = useTheme();
  const t = ramp(frame, props.at, props.dur ?? 20, ease.inOutCubic);
  return (
    <svg viewBox={props.viewBox} style={{ overflow: "visible", ...props.style }}>
      <path d={props.d} fill="none" stroke={props.color ?? pal.line} strokeWidth={props.width ?? 2} strokeLinecap="round" strokeDasharray={props.length} strokeDashoffset={props.length * (1 - t)} />
    </svg>
  );
}
