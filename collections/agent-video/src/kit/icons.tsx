/**
 * Stroke icons on a 24 px grid, drawn for this kit. Keep them simple: at
 * video size they read as shapes, not detail.
 */
import type { CSSProperties } from "react";

const PATHS: Record<string, string> = {
  film: "M4 5h16v14H4zM8 5v14M16 5v14M4 9h4M4 15h4M16 9h4M16 15h4",
  diamond: "M12 3l9 9-9 9-9-9z",
  layers: "M6 8h12v12H6zM9 4h11v11",
  check: "M5 12.5l4.5 4.5L19 7.5",
  play: "M8 5.5v13l11-6.5z",
  send: "M4 12l16-8-6 16-3-7z",
  plus: "M12 5v14M5 12h14",
  mic: "M12 4a3 3 0 013 3v5a3 3 0 01-6 0V7a3 3 0 013-3zM6 11a6 6 0 0012 0M12 17v3",
  smile: "M12 3a9 9 0 110 18 9 9 0 010-18zM8.5 14a4.5 4.5 0 007 0M9 9.5h.01M15 9.5h.01",
  search: "M10.5 4a6.5 6.5 0 110 13 6.5 6.5 0 010-13zM15.5 15.5L20 20",
  link: "M10 14l4-4M8.5 16.5l-1 1a3.5 3.5 0 01-5-5l3-3a3.5 3.5 0 015 0M15.5 7.5l1-1a3.5 3.5 0 015 5l-3 3a3.5 3.5 0 01-5 0",
  eyeOff: "M3 3l18 18M10.6 6.1A9.8 9.8 0 0112 6c5 0 9 6 9 6a15 15 0 01-2.6 3.2M6.2 6.9A15 15 0 003 12s4 6 9 6a9.4 9.4 0 004.2-1M9.9 9.9a3 3 0 004.2 4.2",
  folder: "M3 6h6l2 2h10v11H3z",
  terminal: "M4 5h16v14H4zM7.5 9.5l3 2.5-3 2.5M12.5 15h4",
  code: "M9 7l-5 5 5 5M15 7l5 5-5 5",
  calendar: "M4 6h16v14H4zM4 10h16M8 3v5M16 3v5",
  chart: "M5 19V11M10 19V5M15 19v-8M20 19v-4",
  clock: "M12 3a9 9 0 110 18 9 9 0 010-18zM12 7v5l3 2",
  bolt: "M13 3L5 13h6l-1 8 8-10h-6z",
  spark: "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6",
  ghost: "M6 20V11a6 6 0 0112 0v9l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5zM10 11h.01M14 11h.01",
  bell: "M6 16V11a6 6 0 0112 0v5l1.5 2h-15zM10 20a2 2 0 004 0",
  grid: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  text: "M5 6h14M12 6v13M8.5 19h7",
  wand: "M4 20L15 9M14 4v2M19 9h2M17.5 5.5l1.5-1.5M18 11l1 1M12 6l1-1",
  bug: "M8 9h8v6a4 4 0 01-8 0zM9 9V7a3 3 0 016 0v2M4 13h4M16 13h4M5 8l3 2M19 8l-3 2M5 19l3-2M19 19l-3-2",
  list: "M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01",
  phone: "M8 3h8a1 1 0 011 1v16a1 1 0 01-1 1H8a1 1 0 01-1-1V4a1 1 0 011-1zM11 18h2",
  upload: "M12 16V5M7.5 9.5L12 5l4.5 4.5M5 19h14",
  star: "M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.3-4.1 5.9-.8z",
  trash: "M5 7h14M9 7V4h6v3M7 7l1 13h8l1-13",
  cursor: "M5 3l13 7-6 1.5L9.5 18z",
  arrow: "M5 12h14M13 6l6 6-6 6",
};

export type IconName = keyof typeof PATHS;

export function Icon(props: {
  name: string;
  size: number;
  color: string;
  stroke?: number;
  style?: CSSProperties;
}) {
  const d = PATHS[props.name] ?? PATHS.spark;
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 24 24" style={props.style} aria-hidden>
      <path
        d={d}
        fill="none"
        stroke={props.color}
        strokeWidth={props.stroke ?? 1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Brand marks drawn by the kit. Replace with your own SVG path in production. */
export function Mark(props: { kind: "lens" | "spark" | "stack" | "loop"; size: number; color: string }) {
  const s = props.size;
  const c = props.color;
  switch (props.kind) {
    case "spark":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" fill={c} />
        </svg>
      );
    case "stack":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" aria-hidden>
          <rect x="3" y="3" width="13" height="13" rx="3" fill={c} opacity="0.45" />
          <rect x="8" y="8" width="13" height="13" rx="3" fill={c} />
        </svg>
      );
    case "loop":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" aria-hidden>
          <path d="M12 4a8 8 0 108 8" fill="none" stroke={c} strokeWidth="3.4" strokeLinecap="round" />
          <circle cx="20" cy="5" r="2.6" fill={c} />
        </svg>
      );
    default:
      // lens: a camera body with a lens notch
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" aria-hidden>
          <rect x="2" y="6" width="14" height="12" rx="3" fill="none" stroke={c} strokeWidth="2.6" />
          <path d="M17 10l5-3v10l-5-3z" fill={c} />
        </svg>
      );
  }
}
