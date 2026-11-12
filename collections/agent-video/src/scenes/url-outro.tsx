// url-outro: the mark and wordmark assemble, a two-part tagline builds
// around them, then everything clears to the domain for a long calm hold.
import { ease, ramp } from "../core/motion.ts";
import { Mark } from "../kit/icons.tsx";
import { Center } from "../kit/motion.tsx";
import { SplitText, Typewriter } from "../kit/text.tsx";
import { textStyle } from "../kit/theme.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface UrlOutroProps {
  lineA: string;
  lineB: string;
}

export function UrlOutro(p: UrlOutroProps) {
  const { frame, f, pal, brand } = useBeat(129);
  const markT = ramp(frame, f(4), f(14), ease.outBack);
  const buildAt = f(37);
  const domainAt = f(74);
  const hold = ramp(frame, domainAt + f(20), f(14));
  const gone = ramp(frame, domainAt, f(10), ease.inCubic);
  return (
    <Stage>
      {frame < domainAt + f(6) ? (
        <Center>
          <div style={{ opacity: 1 - gone, display: "flex", flexDirection: "column", alignItems: "center", gap: 30 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
              <span style={{ display: "inline-flex", transform: `scale(${markT})`, opacity: Math.min(1, markT * 1.5) }}>
                <Mark kind={brand.mark} size={92} color={pal.text} />
              </span>
              <span style={textStyle(92, 600, pal.text)}>
                <Typewriter text={brand.name} at={f(14)} size={92} weight={600} cps={10} />
              </span>
            </div>
            {frame >= buildAt ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <SplitText text={p.lineA} at={buildAt} size={72} mode="blur" gap={4} />
                <SplitText text={p.lineB} at={buildAt + f(12)} size={72} mode="blur" gap={4} />
              </div>
            ) : null}
          </div>
        </Center>
      ) : null}
      {frame >= domainAt ? (
        <Center>
          <div style={{ opacity: ramp(frame, domainAt, f(10)), transform: `scale(${0.92 + 0.08 * hold})` }}>
            <span style={textStyle(76, 500, pal.text)}>{brand.url}</span>
          </div>
        </Center>
      ) : null}
    </Stage>
  );
}
