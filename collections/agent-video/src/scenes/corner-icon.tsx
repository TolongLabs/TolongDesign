// Corner icon: the app icon lights on black. A row of dark app tiles fades
// up inside a giant rounded device frame; one tile warms to the accent,
// throws a halftone dot burst, and holds lit into the cut.
import { ease, ramp, seeded } from "../core/motion.ts";
import { Halftone } from "../kit/fields.tsx";
import { Mark } from "../kit/icons.tsx";
import { Center, Reveal } from "../kit/motion.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface CornerIconProps {
  tiles?: number;
  hero?: number;
}

export function CornerIcon(p: CornerIconProps) {
  const { frame, f, pal, brand } = useBeat(104);
  const count = p.tiles ?? 5;
  const hero = p.hero ?? 2;
  const rnd = seeded(11);
  const glyphs = ["film", "grid", "play", "clock", "wand"];
  const lightT = ramp(frame, f(55), f(20), ease.outCubic);
  const frameIn = ramp(frame, 0, f(24), ease.outCubic);
  const S = 148;
  return (
    <Stage>
      {/* giant rounded device-corner frame sweeping in */}
      <div
        style={{
          position: "absolute",
          inset: 56,
          borderRadius: 150,
          border: `3px solid ${pal.line}`,
          opacity: 0.35 + 0.65 * frameIn,
          transform: `scale(${1.06 - 0.06 * frameIn})`,
        }}
      />
      <Halftone gap={26} dot={3.4} waveAt={f(58)} waveDur={f(30)} tint />
      <Center>
        <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
          {Array.from({ length: count }, (_, i) => {
            const isHero = i === hero;
            return (
              <Reveal key={i} at={f(6 + i * 7)} dur={f(14)} from="blur">
                <div
                  style={{
                    position: "relative",
                    width: S,
                    height: S,
                    borderRadius: S * 0.28,
                    background: isHero ? pal.accent : "#17171A",
                    border: `1px solid ${isHero ? pal.accent : pal.line}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: isHero ? `scale(${1 + 0.1 * lightT})` : undefined,
                    boxShadow: isHero && lightT > 0 ? `0 0 ${90 * lightT}px ${pal.accent}66` : "0 20px 50px rgba(0,0,0,0.5)",
                    opacity: isHero ? 0.35 + 0.65 * Math.max(lightT, ramp(frame, f(6 + i * 7), f(10))) : undefined,
                  }}
                >
                  <Mark kind={brand.mark} size={S * 0.44} color={isHero ? pal.onAccent : "#3A3A3F"} />
                  {/* dotted halo ring blooming on the lit tile */}
                  {isHero ? (
                    <div
                      style={{
                        position: "absolute",
                        inset: -26 * lightT - 8,
                        borderRadius: S * 0.34,
                        border: `2px dashed ${pal.accent}`,
                        opacity: lightT * 0.8,
                      }}
                    />
                  ) : null}
                  {/* faint glyph etch on dark tiles */}
                  {!isHero ? (
                    <span style={{ position: "absolute", bottom: 14, fontSize: 20, color: "#2C2C31", fontFamily: "monospace" }}>
                      {String(Math.floor(rnd() * 90 + 10))}
                    </span>
                  ) : null}
                  <span style={{ display: "none" }}>{glyphs[i % glyphs.length]}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Center>
    </Stage>
  );
}
