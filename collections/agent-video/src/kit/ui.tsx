/**
 * Product-UI surfaces drawn from tokens: pills, tiles, cards, bubbles, the
 * composer, a checklist row, and a scripted cursor. Hairlines, not shadows.
 */
import type { CSSProperties, ReactNode } from "react";
import { useCurrentFrame } from "remotion";
import { clamp, ease, keys } from "../core/motion.ts";
import { Icon } from "./icons.tsx";
import { mix } from "../core/tokens.ts";
import { FONT, textStyle, useTheme } from "./theme.tsx";

export function Pill(props: {
  label: ReactNode;
  icon?: string;
  size?: number;
  tone?: "plain" | "accent" | "soft" | "outline";
  style?: CSSProperties;
}) {
  const { pal, act } = useTheme();
  const size = props.size ?? 30;
  const tone = props.tone ?? "plain";
  const bg =
    tone === "accent" ? pal.accent : tone === "soft" ? `${pal.accent}22` : tone === "outline" ? "transparent" : act === "ink" ? "#1D1D20" : pal.card;
  const fg = tone === "accent" ? pal.onAccent : tone === "soft" ? pal.accent : pal.text;
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: size * 0.4,
        padding: `${size * 0.42}px ${size * 0.75}px`,
        borderRadius: 999,
        background: bg,
        border: `1px solid ${tone === "accent" ? pal.accent : pal.line}`,
        ...textStyle(size, 500, fg),
        ...props.style,
      }}
    >
      {props.icon ? <Icon name={props.icon} size={size * 0.95} color={fg} /> : null}
      {props.label}
    </div>
  );
}

export function IconTile(props: { icon: string; size: number; tone?: "card" | "accent" | "glass"; style?: CSSProperties }) {
  const { pal, act } = useTheme();
  const tone = props.tone ?? "card";
  const bg =
    tone === "accent"
      ? `linear-gradient(160deg, ${pal.accent}, ${pal.accent}CC)`
      : tone === "glass"
        ? act === "ink" ? "linear-gradient(160deg, #2A2A2E, #141416)" : "linear-gradient(160deg, #FFFFFF, #EFEDE7)"
        : act === "ink" ? "#1C1C1F" : pal.card;
  return (
    <div
      style={{
        width: props.size,
        height: props.size,
        borderRadius: props.size * 0.24,
        background: bg,
        border: `1px solid ${tone === "accent" ? "transparent" : pal.line}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: act === "ink" ? "0 10px 30px rgba(0,0,0,0.45)" : "0 8px 24px rgba(17,17,17,0.08)",
        ...props.style,
      }}
    >
      <Icon name={props.icon} size={props.size * 0.46} color={tone === "accent" ? pal.onAccent : pal.text} stroke={2} />
    </div>
  );
}

export function Card(props: { children: ReactNode; pad?: number; radius?: number; style?: CSSProperties; glow?: boolean }) {
  const { pal, act } = useTheme();
  return (
    <div
      style={{
        background: pal.card,
        border: `1px solid ${pal.line}`,
        borderRadius: props.radius ?? 22,
        padding: props.pad ?? 28,
        boxShadow: props.glow
          ? `0 30px 80px ${pal.accent}33`
          : act === "ink"
            ? "0 24px 60px rgba(0,0,0,0.5)"
            : "0 1px 2px rgba(17,17,17,0.04), 0 18px 48px rgba(17,17,17,0.07)",
        fontFamily: FONT,
        color: pal.text,
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
}

export function Avatar(props: { initials: string; size: number }) {
  const { pal } = useTheme();
  return (
    <div
      style={{
        width: props.size,
        height: props.size,
        borderRadius: 999,
        background: pal.accent,
        border: `${props.size * 0.06}px solid ${pal.bg}`,
        boxShadow: `0 0 0 ${props.size * 0.03}px ${pal.accent}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...textStyle(props.size * 0.36, 600, pal.onAccent),
        flex: "none",
      }}
    >
      {props.initials}
    </div>
  );
}

/** A chat bubble. `from: "me"` sits right in the accent; agent bubbles sit left on a card. */
export function ChatBubble(props: {
  children: ReactNode;
  from: "me" | "agent";
  time?: string;
  size?: number;
  maxWidth?: number;
  reaction?: string;
  style?: CSSProperties;
}) {
  const { pal } = useTheme();
  const size = props.size ?? 34;
  const me = props.from === "me";
  return (
    <div
      style={{
        position: "relative",
        maxWidth: props.maxWidth ?? 760,
        padding: `${size * 0.55}px ${size * 0.75}px`,
        borderRadius: size * 0.9,
        background: me ? `linear-gradient(180deg, ${pal.accent}, ${pal.accent}D9)` : pal.card,
        border: me ? "none" : `1px solid ${pal.line}`,
        boxShadow: me ? `0 18px 50px ${pal.accent}40` : undefined,
        ...textStyle(size, 400, me ? pal.onAccent : pal.text),
        whiteSpace: "normal",
        ...props.style,
      }}
    >
      {props.children}
      {props.time ? (
        <div style={{ ...textStyle(size * 0.62, 400, me ? `${pal.onAccent}B3` : pal.muted), textAlign: "right", marginTop: size * 0.2 }}>
          {props.time}
        </div>
      ) : null}
      {props.reaction ? (
        <div
          style={{
            position: "absolute",
            left: size * 0.3,
            bottom: -size * 0.55,
            fontSize: size * 0.7,
            padding: `${size * 0.08}px ${size * 0.22}px`,
            borderRadius: 999,
            background: pal.card,
            border: `1px solid ${pal.line}`,
          }}
        >
          {props.reaction}
        </div>
      ) : null}
    </div>
  );
}

/** Prompt field: leading icon, text (or placeholder), trailing send. */
export function Composer(props: {
  width: number;
  children?: ReactNode;
  placeholder?: string;
  icon?: string;
  sub?: ReactNode;
  size?: number;
  send?: boolean;
  focus?: number;
  style?: CSSProperties;
}) {
  const { pal, act } = useTheme();
  const size = props.size ?? 28;
  const focus = props.focus ?? 0;
  return (
    <div
      style={{
        width: props.width,
        display: "flex",
        alignItems: "center",
        gap: size * 0.6,
        padding: `${size * 0.6}px ${size * 0.7}px`,
        borderRadius: size * 0.75,
        background: act === "ink" ? "#121214" : pal.card,
        border: `1px solid ${focus > 0 ? mixHex(pal.line, pal.accent, focus) : pal.line}`,
        boxShadow: act === "ink" ? "0 20px 60px rgba(0,0,0,0.5)" : "0 1px 2px rgba(17,17,17,0.04), 0 14px 40px rgba(17,17,17,0.06)",
        ...props.style,
      }}
    >
      {props.icon ? <Icon name={props.icon} size={size * 1.05} color={pal.accent} /> : null}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ ...textStyle(size, 500, props.children ? pal.text : pal.muted), overflow: "hidden" }}>
          {props.children ?? props.placeholder}
        </div>
        {props.sub ? <div style={{ ...textStyle(size * 0.72, 400, pal.muted), marginTop: size * 0.2 }}>{props.sub}</div> : null}
      </div>
      {props.send ? (
        <div style={{ width: size * 1.5, height: size * 1.5, borderRadius: 999, background: pal.accent, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name="arrow" size={size * 0.9} color={pal.onAccent} stroke={2.2} />
        </div>
      ) : null}
    </div>
  );
}

/** Spinner that becomes a check when `done` (0..1) completes. */
export function CheckMark(props: { size: number; done: number; color?: string }) {
  const frame = useCurrentFrame();
  const { pal } = useTheme();
  const c = props.color ?? pal.accent;
  const s = props.size;
  if (props.done <= 0) {
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" style={{ transform: `rotate(${frame * 12}deg)` }}>
        <circle cx="12" cy="12" r="9" fill="none" stroke={pal.line} strokeWidth="2" />
        <path d="M12 3a9 9 0 019 9" fill="none" stroke={c} strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }
  const t = clamp(props.done);
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" style={{ transform: `scale(${0.8 + 0.2 * ease.outBack(t)})` }}>
      <circle cx="12" cy="12" r="9.5" fill="none" stroke={c} strokeWidth="2" />
      <path d="M7.5 12.4l3 3 6-6.5" fill="none" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="16" strokeDashoffset={16 * (1 - t)} />
    </svg>
  );
}

/**
 * A scripted pointer. Path points are [frame, x, y]; `clicks` are frames
 * where it presses (dip and ripple).
 */
export function Cursor(props: { path: [number, number, number][]; clicks?: number[]; size?: number; hand?: boolean }) {
  const frame = useCurrentFrame();
  const { act } = useTheme();
  const size = props.size ?? 44;
  const x = keys(frame, props.path.map(([f, px]) => [f, px] as const), ease.inOutCubic);
  const y = keys(frame, props.path.map(([f, , py]) => [f, py] as const), ease.inOutCubic);
  const click = (props.clicks ?? []).map((c) => frame - c).find((d) => d >= 0 && d < 14);
  const dip = click === undefined ? 1 : 1 - 0.14 * Math.sin((click / 14) * Math.PI);
  const fill = act === "ink" ? "#FFFFFF" : "#111111";
  const edge = act === "ink" ? "#111111" : "#FFFFFF";
  return (
    <div style={{ position: "absolute", left: x, top: y, width: 0, height: 0, zIndex: 50 }}>
      {click !== undefined ? (
        <div
          style={{
            position: "absolute",
            left: -size * 0.9,
            top: -size * 0.9,
            width: size * 1.8,
            height: size * 1.8,
            borderRadius: 999,
            border: `2px solid ${fill}`,
            opacity: 0.5 * (1 - click / 14),
            transform: `scale(${0.4 + (click / 14) * 0.9})`,
          }}
        />
      ) : null}
      <svg width={size} height={size} viewBox="0 0 24 24" style={{ transform: `scale(${dip})`, transformOrigin: "0 0", filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.25))" }}>
        {props.hand ? (
          <path d="M9 11V4.5a1.5 1.5 0 013 0V10m0-1.5a1.5 1.5 0 013 0V10m0-.5a1.5 1.5 0 013 0V14a7 7 0 01-7 7h-.5a6 6 0 01-4.6-2.2L4 15.5a1.6 1.6 0 012.4-2.1L9 15" fill={fill} stroke={edge} strokeWidth="1.2" strokeLinejoin="round" />
        ) : (
          <path d="M4 2.5l15 8.2-6.6 1.6L9 19z" fill={fill} stroke={edge} strokeWidth="1.3" strokeLinejoin="round" />
        )}
      </svg>
    </div>
  );
}

/** Scale dip for a pressed control: 1 -> 0.94 -> 1 over 10 frames. */
export function pressScale(frame: number, at: number): number {
  const t = frame - at;
  if (t < 0 || t > 10) return 1;
  return 1 - 0.06 * Math.sin((t / 10) * Math.PI);
}

/** Linear mix of two #RRGGBB colours. */
export const mixHex = mix;

