import type { CSSProperties, ReactNode } from "react";
import { useCurrentFrame } from "remotion";
import { caretOn, clamp, countAt, ease, ramp, typedCount } from "../core/motion.ts";
import { TIMING } from "../core/tokens.ts";
import { Blur } from "./motion.tsx";
import { MONO, textStyle, useTheme } from "./theme.tsx";

export function Caret(props: { size: number; color?: string; typing?: boolean; visible?: boolean }) {
  const frame = useCurrentFrame();
  const { pal } = useTheme();
  const on = props.visible !== false && caretOn(frame, TIMING.caretPeriod, props.typing ?? false);
  return (
    <span
      style={{
        display: "inline-block",
        width: Math.max(2, props.size * 0.055),
        height: props.size * 0.95,
        marginLeft: props.size * 0.04,
        verticalAlign: "-0.12em",
        background: props.color ?? pal.text,
        opacity: on ? 1 : 0,
      }}
    />
  );
}

/** Text typed at a fixed rate, with a caret. Seek-safe. */
export function Typewriter(props: {
  text: string;
  at: number;
  size: number;
  cps?: number;
  weight?: number;
  color?: string;
  caret?: boolean | "while-typing";
  mono?: boolean;
  style?: CSSProperties;
}) {
  const frame = useCurrentFrame();
  const { pal } = useTheme();
  const n = typedCount(props.text.length, frame, props.at, props.cps ?? TIMING.headlineCps);
  const typing = n > 0 && n < props.text.length;
  const showCaret = props.caret === true || (props.caret === "while-typing" && frame >= props.at && n < props.text.length);
  return (
    <span
      style={{
        ...textStyle(props.size, props.weight ?? 500, props.color ?? pal.text),
        ...(props.mono ? { fontFamily: MONO, letterSpacing: 0 } : null),
        ...props.style,
      }}
    >
      {props.text.slice(0, n)}
      {showCaret ? <Caret size={props.size} typing={typing} color={props.color} /> : null}
    </span>
  );
}

/**
 * Words enter one after another. `accent` lists word indexes painted in the
 * accent colour.
 */
export function SplitText(props: {
  text: string;
  at: number;
  size: number;
  gap?: number;
  dur?: number;
  mode?: "rise" | "blur" | "fade";
  weight?: number;
  color?: string;
  accent?: number[];
  out?: number;
  style?: CSSProperties;
}) {
  const frame = useCurrentFrame();
  const { pal } = useTheme();
  const words = props.text.split(" ");
  const gap = props.gap ?? 4;
  const dur = props.dur ?? 12;
  const mode = props.mode ?? "blur";
  const fade = props.out === undefined ? 1 : 1 - ramp(frame, props.out, 10, ease.inCubic);
  return (
    <span style={{ ...textStyle(props.size, props.weight ?? 500), ...props.style, opacity: fade }}>
      {words.map((w, i) => {
        const t = ramp(frame, props.at + i * gap, dur, ease.outCubic);
        const p = 1 - t;
        const color = props.accent?.includes(i) ? pal.accent : props.color ?? pal.text;
        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              color,
              opacity: t,
              transform: mode === "rise" ? `translateY(${p * 0.45 * props.size}px)` : mode === "blur" ? `translateY(${p * 0.15 * props.size}px)` : undefined,
              filter: mode !== "fade" && p > 0.01 ? `blur(${p * (mode === "blur" ? 14 : 5)}px)` : undefined,
              marginRight: i < words.length - 1 ? "0.26em" : 0,
            }}
          >
            {w}
          </span>
        );
      })}
    </span>
  );
}

/**
 * One slot, several lines over time. Each change is a blur-cross: the old
 * line drifts up and softens while the new one settles in.
 */
export function TextSwap(props: {
  items: { text: ReactNode; at: number }[];
  size: number;
  weight?: number;
  dur?: number;
  color?: string;
}) {
  const frame = useCurrentFrame();
  const { pal } = useTheme();
  const dur = props.dur ?? 10;
  return (
    <span style={{ position: "relative", display: "inline-grid" }}>
      {props.items.map((it, i) => {
        const next = props.items[i + 1];
        const tin = i === 0 && it.at <= 0 ? 1 : ramp(frame, it.at, dur);
        const tout = next ? ramp(frame, next.at, dur, ease.inCubic) : 0;
        const o = tin * (1 - tout);
        if (o <= 0.001) return <span key={i} style={{ gridArea: "1 / 1", opacity: 0 }} />;
        const y = (1 - tin) * 0.35 * props.size - tout * 0.35 * props.size;
        return (
          <span
            key={i}
            style={{
              ...textStyle(props.size, props.weight ?? 500, props.color ?? pal.text),
              gridArea: "1 / 1",
              opacity: o,
              transform: `translateY(${y}px)`,
              filter: o < 0.99 ? `blur(${(1 - o) * 10}px)` : undefined,
              textAlign: "center",
            }}
          >
            {it.text}
          </span>
        );
      })}
    </span>
  );
}

/**
 * A vertical drum of words. The current word sits in the slot; neighbours
 * fade above and below. The roll blurs vertically while it moves.
 */
export function WordDrum(props: {
  words: ReactNode[];
  at: number;
  step: number;
  size: number;
  roll?: number;
  weight?: number;
  color?: string;
  neighbours?: boolean;
}) {
  const frame = useCurrentFrame();
  const { pal } = useTheme();
  const roll = props.roll ?? 9;
  const idxAt = (f: number) => {
    const local = f - props.at;
    if (local < 0) return 0;
    const k = Math.floor(local / props.step);
    const within = local - k * props.step;
    const p = ramp(within, props.step - roll, roll, ease.inOutCubic);
    return Math.min(props.words.length - 1, k + p);
  };
  const pos = idxAt(frame);
  const v = Math.abs(pos - idxAt(frame - 1)) * props.size * 1.2;
  const lineH = props.size * 1.2;
  return (
    <span style={{ position: "relative", display: "inline-block", height: lineH, minWidth: props.size * 2, verticalAlign: "bottom" }}>
      <Blur y={v * 0.35}>
        {props.words.map((w, i) => {
          const off = i - pos;
          if (Math.abs(off) > 2.2) return null;
          const o = props.neighbours === false ? clamp(1 - Math.abs(off) * 1.6) : clamp(1 - Math.abs(off) * 0.72);
          return (
            <span
              key={i}
              style={{
                ...textStyle(props.size, props.weight ?? 500, props.color ?? pal.text),
                position: "absolute",
                left: 0,
                top: off * lineH,
                opacity: Math.abs(off) < 0.5 ? 1 : o * 0.35,
              }}
            >
              {w}
            </span>
          );
        })}
      </Blur>
    </span>
  );
}

export function CountUp(props: {
  from: number;
  to: number;
  at: number;
  dur: number;
  size: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  weight?: number;
  color?: string;
}) {
  const frame = useCurrentFrame();
  const v = countAt(frame, props.at, props.dur, props.from, props.to, props.decimals ?? 0);
  return (
    <span style={{ ...textStyle(props.size, props.weight ?? 600, props.color), fontVariantNumeric: "tabular-nums" }}>
      {props.prefix}
      {v.toFixed(props.decimals ?? 0)}
      {props.suffix}
    </span>
  );
}

/** Outlined glyphs (dashed by default) that can fill in. */
export function OutlineType(props: {
  text: string;
  size: number;
  fill?: number;
  dashed?: boolean;
  color?: string;
  gradient?: [string, string];
}) {
  const { pal } = useTheme();
  const c = props.color ?? pal.text;
  const id = `og${props.text.replace(/[^a-z]/gi, "")}`;
  const w = props.text.length * props.size * 0.62;
  const h = props.size * 1.25;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ overflow: "visible" }}>
      {props.gradient ? (
        <defs>
          <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor={props.gradient[0]} />
            <stop offset="1" stopColor={props.gradient[1]} />
          </linearGradient>
        </defs>
      ) : null}
      <text
        x={w / 2}
        y={props.size}
        textAnchor="middle"
        style={{ ...textStyle(props.size, 500), whiteSpace: "pre" }}
        fill={props.gradient ? `url(#${id})` : c}
        fillOpacity={props.fill ?? 0}
        stroke={c}
        strokeWidth={Math.max(1.5, props.size * 0.012)}
        strokeDasharray={props.dashed === false ? undefined : `${props.size * 0.035} ${props.size * 0.03}`}
      >
        {props.text}
      </text>
    </svg>
  );
}

/** A soft accent sheen passing across a word, left to right. */
export function GlyphGlow(props: { children: ReactNode; at: number; dur?: number; color?: string }) {
  const frame = useCurrentFrame();
  const { pal } = useTheme();
  const t = ramp(frame, props.at, props.dur ?? 24, ease.inOutCubic);
  const c = props.color ?? pal.accent;
  return (
    <span
      style={{
        backgroundImage: `linear-gradient(100deg, currentColor 0%, currentColor ${t * 100 - 18}%, ${c} ${t * 100}%, currentColor ${t * 100 + 18}%, currentColor 100%)`,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {props.children}
    </span>
  );
}

/** Marker sweep behind a word. */
export function Highlight(props: { children: ReactNode; at: number; dur?: number; color?: string }) {
  const frame = useCurrentFrame();
  const { pal } = useTheme();
  const t = ramp(frame, props.at, props.dur ?? 12, ease.outCubic);
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span
        style={{
          position: "absolute",
          left: "-0.08em",
          right: "-0.08em",
          top: "0.12em",
          bottom: "0.04em",
          background: props.color ?? pal.accent,
          opacity: 0.22,
          transformOrigin: "0 50%",
          transform: `scaleX(${t})`,
          borderRadius: "0.12em",
        }}
      />
      <span style={{ position: "relative" }}>{props.children}</span>
    </span>
  );
}
