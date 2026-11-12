/**
 * chip-rail: a rail of dark pills scrolls sideways and brakes on the target
 * chip, which gains an accent outline, swells, and fills around a check.
 * Ends on the filled badge so the next beat (burst) can start from it.
 */
import { clamp, ease, keys, ramp } from "../core/motion.ts";
import { Icon } from "../kit/icons.tsx";
import { Blur, Center } from "../kit/motion.tsx";
import { textStyle } from "../kit/theme.tsx";
import { pressScale } from "../kit/ui.tsx";
import { mix } from "../core/tokens.ts";
import { Stage, useBeat } from "./beat.tsx";

export interface ChipRailProps {
  chips: { label: string; icon: string }[];
  /** Index of the chip the rail lands on. */
  target: number;
}

const CHIP_W = 560;
const GAP = 24;

export function ChipRail(p: ChipRailProps) {
  const { frame, f, pal } = useBeat(84);
  const centerOf = (i: number) => i * (CHIP_W + GAP);
  const xAt = (fr: number) =>
    keys(fr, [[0, -centerOf(p.chips.length) + 200], [f(36), -centerOf(p.target)]], ease.outQuart);
  const x = xAt(frame);
  const v = Math.abs(x - xAt(frame - 1));
  const arm = ramp(frame, f(40), f(10));
  const fill = ramp(frame, f(58), f(14), ease.inOutCubic);
  const shrink = fill; // the chip collapses into a round badge
  const press = pressScale(frame, f(52));
  return (
    <Stage>
      <Center>
        <Blur x={v * 0.45}>
          <div style={{ position: "relative", width: 1, height: 168 }}>
            {p.chips.map((c, i) => {
              const isT = i === p.target;
              const left = centerOf(i) + x - CHIP_W / 2;
              const w = isT ? CHIP_W - (CHIP_W - 168) * shrink : CHIP_W;
              const dim = isT ? 1 : 1 - 0.7 * fill;
              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: left + (CHIP_W - w) / 2,
                    top: 0,
                    width: w,
                    height: 168,
                    borderRadius: 999,
                    background: isT && fill > 0 ? `radial-gradient(circle at 50% 40%, ${pal.accent}, ${mix(pal.accent, "#120A0A", 0.72)})` : "#18181A",
                    border: `${isT ? 2 + arm * 2 : 1}px solid ${isT ? pal.accent : pal.line}`,
                    boxShadow: isT && arm > 0 ? `0 0 0 ${10 * arm}px ${pal.accent}22` : undefined,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 18,
                    opacity: dim,
                    transform: `scale(${isT ? press * (1 + 0.04 * arm) : 1})`,
                    ...textStyle(54, 500, pal.text),
                  }}
                >
                  {isT && fill > 0.5 ? (
                    <div style={{ width: 92, height: 92, borderRadius: 999, background: "#111", border: "4px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", transform: `scale(${clamp((fill - 0.5) * 2)})` }}>
                      <Icon name="check" size={56} color="#FFFFFF" stroke={3} />
                    </div>
                  ) : (
                    <>
                      <Icon name={c.icon} size={52} color={pal.text} />
                      <span style={{ opacity: isT ? 1 - fill * 2 : 1 }}>{c.label}</span>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </Blur>
      </Center>
    </Stage>
  );
}
