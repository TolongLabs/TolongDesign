import type { ReactNode } from "react";
import { AbsoluteFill, Series, useCurrentFrame, useVideoConfig } from "remotion";
import { whip } from "../core/motion.ts";
import type { Beat, TemplateSpec } from "../core/spec.ts";
import { TIMING } from "../core/tokens.ts";
import { Blur } from "../kit/motion.tsx";
import { ThemeProvider } from "../kit/theme.tsx";
import { SCENES } from "../scenes/index.tsx";
import type { SceneKind } from "../scenes/kinds.ts";

/** A whip exit: the last frames slide out sideways with growing blur. */
function WhipOut(props: { children: ReactNode }) {
  const frame = useCurrentFrame();
  const { durationInFrames, width } = useVideoConfig();
  const t = whip(frame, durationInFrames, TIMING.whip);
  if (t <= 0) return <>{props.children}</>;
  return (
    <AbsoluteFill style={{ transform: `translateX(${-t * width * 0.5}px)` }}>
      <Blur x={t * 60} style={{ position: "absolute", inset: 0 }}>
        {props.children}
      </Blur>
    </AbsoluteFill>
  );
}

export function BeatView(props: { beat: Beat; spec: TemplateSpec }) {
  const Scene = SCENES[props.beat.scene as SceneKind];
  if (!Scene) throw new Error(`unknown scene "${props.beat.scene}" in beat ${props.beat.id}`);
  const body = <Scene {...props.beat.props} />;
  return (
    <ThemeProvider act={props.beat.act} accent={props.spec.accent} brand={props.spec.brand}>
      {props.beat.cut === "whip" ? <WhipOut>{body}</WhipOut> : body}
    </ThemeProvider>
  );
}

/** A template film: beats back to back, hard cuts on the frame. */
export function TemplateFilm(props: { spec: TemplateSpec }) {
  return (
    <AbsoluteFill style={{ background: "#000" }}>
      <Series>
        {props.spec.beats.map((b) => (
          <Series.Sequence key={b.id} durationInFrames={b.frames} name={`${b.id} (${b.scene})`}>
            <BeatView beat={b} spec={props.spec} />
          </Series.Sequence>
        ))}
      </Series>
    </AbsoluteFill>
  );
}
