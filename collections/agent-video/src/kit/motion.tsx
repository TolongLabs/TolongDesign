import { useId, type CSSProperties, type ReactNode } from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { blurFor, clamp, ease, keys, ramp, type Ease } from "../core/motion.ts";

type Pts = readonly (readonly [number, number])[];

/**
 * Directional blur. CSS `blur()` is round; an SVG Gaussian with separate x
 * and y deviations smears along the motion axis only, like a camera shutter.
 */
export function Blur(props: { x?: number; y?: number; children: ReactNode; style?: CSSProperties }) {
  const id = `blur${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  const x = Math.max(0, props.x ?? 0);
  const y = Math.max(0, props.y ?? 0);
  if (x < 0.3 && y < 0.3) return <div style={props.style}>{props.children}</div>;
  return (
    <div style={{ ...props.style, filter: `url(#${id})` }}>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
        <defs>
          <filter id={id} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation={`${x} ${y}`} />
          </filter>
        </defs>
      </svg>
      {props.children}
    </div>
  );
}

export interface CameraKeys {
  x?: Pts;
  y?: Pts;
  scale?: Pts;
  rotate?: Pts;
}

/**
 * A camera over a world. Children render in world coordinates; the camera
 * moves, and fast moves blur along their axis, then land sharp.
 */
export function Camera(props: {
  keys: CameraKeys;
  ease?: Ease;
  /** Blur per px of travel per frame. 0 turns motion blur off. */
  blur?: number;
  /** Size of the subject in px, so a zoom can blur in proportion. */
  subject?: number;
  children: ReactNode;
}) {
  const frame = useCurrentFrame();
  const e = props.ease ?? ease.inOutCubic;
  const at = (f: number) => ({
    x: props.keys.x ? keys(f, props.keys.x, e) : 0,
    y: props.keys.y ? keys(f, props.keys.y, e) : 0,
    s: props.keys.scale ? keys(f, props.keys.scale, e) : 1,
    r: props.keys.rotate ? keys(f, props.keys.rotate, e) : 0,
  });
  const now = at(frame);
  const prev = at(frame - 1);
  const k = props.blur ?? 0.45;
  const zoom = Math.abs(now.s - prev.s) * (props.subject ?? 600) * 0.5;
  const bx = k ? blurFor((now.x - prev.x) * now.s, k) + blurFor(zoom, k * 0.6) : 0;
  const by = k ? blurFor((now.y - prev.y) * now.s, k) + blurFor(zoom, k * 0.6) : 0;
  return (
    <AbsoluteFill>
      <Blur x={bx} y={by} style={{ position: "absolute", inset: 0 }}>
        <AbsoluteFill
          style={{
            transform: `translate(${now.x * now.s}px, ${now.y * now.s}px) scale(${now.s}) rotate(${now.r}deg)`,
            transformOrigin: "50% 50%",
          }}
        >
          {props.children}
        </AbsoluteFill>
      </Blur>
    </AbsoluteFill>
  );
}

export type RevealFrom = "blur" | "rise" | "fall" | "scale" | "fade" | "left" | "right" | "mask";

/**
 * Enter (and optionally exit) one element. `at` is the first frame of the
 * entrance; `out` the first frame of the exit.
 */
export function Reveal(props: {
  at: number;
  dur?: number;
  from?: RevealFrom;
  out?: number;
  outDur?: number;
  to?: RevealFrom;
  distance?: number;
  children: ReactNode;
  style?: CSSProperties;
}) {
  const frame = useCurrentFrame();
  const dur = props.dur ?? 14;
  const t = ramp(frame, props.at, dur, ease.outCubic);
  const u = props.out === undefined ? 0 : ramp(frame, props.out, props.outDur ?? 10, ease.inCubic);
  const d = props.distance ?? 28;
  const look = (from: RevealFrom, p: number) => {
    // p = 1 hidden, 0 shown
    switch (from) {
      case "blur":
        return { o: 1 - p, tx: 0, ty: d * 0.35 * p, s: 1, b: 16 * p, clip: 0 };
      case "rise":
        return { o: 1 - p, tx: 0, ty: d * p, s: 1, b: 6 * p, clip: 0 };
      case "fall":
        return { o: 1 - p, tx: 0, ty: -d * p, s: 1, b: 6 * p, clip: 0 };
      case "scale":
        return { o: 1 - p, tx: 0, ty: 0, s: 1 - 0.18 * p, b: 4 * p, clip: 0 };
      case "left":
        return { o: 1 - p, tx: -d * p, ty: 0, s: 1, b: 6 * p, clip: 0 };
      case "right":
        return { o: 1 - p, tx: d * p, ty: 0, s: 1, b: 6 * p, clip: 0 };
      case "mask":
        return { o: 1, tx: 0, ty: 0, s: 1, b: 0, clip: p };
      default:
        return { o: 1 - p, tx: 0, ty: 0, s: 1, b: 0, clip: 0 };
    }
  };
  const a = look(props.from ?? "blur", 1 - t);
  const b = look(props.to ?? props.from ?? "blur", u);
  const o = clamp(a.o * b.o);
  return (
    <div
      style={{
        ...props.style,
        opacity: o,
        transform: `translate(${a.tx + b.tx}px, ${a.ty + b.ty}px) scale(${a.s * b.s})`,
        filter: a.b + b.b > 0.2 ? `blur(${a.b + b.b}px)` : undefined,
        clipPath: a.clip + b.clip > 0 ? `inset(${(a.clip + b.clip) * 100}% 0 0 0)` : undefined,
      }}
    >
      {props.children}
    </div>
  );
}

/** Centre content on the canvas. */
export function Center(props: { children: ReactNode; style?: CSSProperties }) {
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", ...props.style }}>
      {props.children}
    </AbsoluteFill>
  );
}
