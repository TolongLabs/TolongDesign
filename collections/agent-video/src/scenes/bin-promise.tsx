/**
 * bin-promise: three tool tiles arc in over a promise line, then drop into
 * a bin that shrinks to a small case while the handoff word lands in accent.
 */
import { ease, keys, ramp } from "../core/motion.ts";
import { IconTile } from "../kit/ui.tsx";
import { Blur, Center } from "../kit/motion.tsx";
import { SplitText } from "../kit/text.tsx";
import { textStyle } from "../kit/theme.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface BinPromiseProps {
  line: string;
  handoff: string;
  tiles: [string, string, string];
}

const SPREAD = [-280, 0, 280];

export function BinPromise(p: BinPromiseProps) {
  const { frame, f, pal } = useBeat(72);
  const dropY = (fr: number) => keys(fr, [[0, -340], [f(20), 0], [f(34), -170], [f(50), 210]], ease.inOutCubic);
  const v = Math.abs(dropY(frame) - dropY(frame - 1));
  const binT = ramp(frame, f(50), f(14), ease.inOutCubic);
  const tilesGone = 1 - ramp(frame, f(52), f(10));
  const binScale = 1 - binT * 0.45;
  return (
    <Stage>
      <Center>
        <div style={{ transform: "translateY(-150px)" }}>
          <SplitText text={p.line} at={f(6)} size={84} mode="blur" />
        </div>
      </Center>
      <Center>
        <Blur y={v * 0.5}>
          <div style={{ position: "relative", width: 900, height: 300, opacity: tilesGone }}>
            {p.tiles.map((t, i) => {
              const spread = SPREAD[i];
              const x = keys(frame, [[0, spread * 1.4], [f(34), spread], [f(50), 0]], ease.inOutCubic);
              const inT = ramp(frame, f(2 + i * 4), f(10));
              return (
                <div
                  key={t}
                  style={{
                    position: "absolute",
                    left: 450 - 75 + x,
                    top: 75 + dropY(frame) - inT * 0,
                    opacity: inT,
                    transform: `rotate(${(spread / 280) * 10 * (1 - ramp(frame, f(34), f(16)))}deg)`,
                  }}
                >
                  <IconTile icon={t} size={150} tone="glass" />
                </div>
              );
            })}
          </div>
        </Blur>
      </Center>
      <Center>
        <div
          style={{
            transform: `translateY(300px) scale(${binScale})`,
            width: 460 * binScale + 200 * (1 - binScale),
            height: 170,
            borderRadius: 40,
            border: `3px solid ${pal.line}`,
            background: "#151517",
            opacity: ramp(frame, f(8), f(10)),
          }}
        >
          <div style={{ position: "absolute", left: 24, right: 24, top: 22, height: 10, borderRadius: 99, background: pal.line, opacity: 0.7 }} />
        </div>
      </Center>
      <Center>
        <div style={{ transform: "translateY(440px)", opacity: ramp(frame, f(54), f(8)) }}>
          <span style={textStyle(72, 600, pal.accent)}>{p.handoff}</span>
        </div>
      </Center>
    </Stage>
  );
}
