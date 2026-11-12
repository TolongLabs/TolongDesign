import type { ReactNode } from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { useTheme } from "../kit/theme.tsx";

/**
 * Beat clock. Scenes are designed at a reference length `ref`; `f(n)` maps a
 * reference frame to this beat's frames, so a beat can run longer or shorter
 * than its design without retuning.
 */
export function useBeat(ref: number) {
  const frame = useCurrentFrame();
  const { durationInFrames: dur, width, height } = useVideoConfig();
  const k = dur / ref;
  return { frame, dur, width, height, f: (n: number) => Math.round(n * k), ...useTheme() };
}

/** Full-frame background of the current act. */
export function Stage(props: { children?: ReactNode; bg?: string }) {
  const { pal } = useTheme();
  return <AbsoluteFill style={{ background: props.bg ?? pal.bg, overflow: "hidden" }}>{props.children}</AbsoluteFill>;
}
