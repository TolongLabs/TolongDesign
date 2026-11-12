// composer-icon: the composer collapses to a pill, then to a small dark
// tile with a glyph, then blooms into the glossy app icon over expanding
// rings and holds to the end.
import { ease, keys, ramp } from "../core/motion.ts";
import { Mark } from "../kit/icons.tsx";
import { RadialBloom } from "../kit/fields.tsx";
import { Center } from "../kit/motion.tsx";
import { textStyle } from "../kit/theme.tsx";
import { Icon } from "../kit/icons.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface ComposerIconProps {
  hint: string;
}

export function ComposerIcon(p: ComposerIconProps) {
  const { frame, f, pal, brand } = useBeat(82);
  const w = keys(frame, [[0, 1080], [f(23), 520], [f(35), 180], [f(59), 300]], ease.inOutCubic);
  const h = keys(frame, [[0, 116], [f(23), 108], [f(35), 180], [f(59), 300]], ease.inOutCubic);
  const composerOut = ramp(frame, f(10), f(13), ease.inCubic);
  const tileIn = ramp(frame, f(23), f(10));
  const iconIn = ramp(frame, f(35), f(20), ease.outBack);
  const glyph = keys(frame, [[f(23), 56], [f(59), 132]], ease.outCubic);
  return (
    <Stage>
      <RadialBloom at={f(35)} dur={f(24)} rings={4} />
      <Center>
        <div style={{ position: "relative", width: w, height: h }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: h / 2,
              background: pal.card,
              border: `1px solid ${pal.line}`,
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              opacity: 1 - composerOut,
              display: "flex",
              alignItems: "center",
              gap: 20,
              padding: "0 34px",
              overflow: "hidden",
            }}
          >
            <Icon name="plus" size={44} color={pal.accent} />
            <span style={{ ...textStyle(38, 400, pal.muted), flex: 1 }}>{p.hint}</span>
            <span style={{ width: 56, height: 56, borderRadius: 999, background: pal.accent }} />
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: Math.min(h / 2, 64 + iconIn * 40),
              background: `linear-gradient(160deg, #26262A, #101012)`,
              border: `1px solid ${pal.line}`,
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              opacity: tileIn * (1 - iconIn),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Mark kind={brand.mark} size={glyph} color="#FFFFFF" />
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 72,
              background: `linear-gradient(160deg, ${pal.accent}, ${pal.accent}CC)`,
              boxShadow: `0 30px 90px ${pal.accent}66`,
              opacity: iconIn,
              transform: `scale(${0.6 + 0.4 * iconIn})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Mark kind={brand.mark} size={glyph} color={pal.onAccent} />
          </div>
        </div>
      </Center>
    </Stage>
  );
}
