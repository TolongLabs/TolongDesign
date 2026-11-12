/**
 * live-link: the mark pops in beside a message line with the live link
 * under it; a hand cursor travels down to the link, presses it, and the
 * clicked link holds.
 */
import { ease, ramp } from "../core/motion.ts";
import { Mark } from "../kit/icons.tsx";
import { Center, Reveal } from "../kit/motion.tsx";
import { SplitText } from "../kit/text.tsx";
import { textStyle } from "../kit/theme.tsx";
import { Cursor, pressScale } from "../kit/ui.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface LiveLinkProps {
  message: string;
  link: string;
}

export function LiveLink(p: LiveLinkProps) {
  const { frame, f, pal, brand } = useBeat(68);
  const markT = ramp(frame, 0, f(12), ease.outBack);
  const clickAt = f(56);
  const pressed = pressScale(frame, clickAt);
  const linkT = ramp(frame, f(12), f(12));
  return (
    <Stage>
      <Center>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 40, transform: "translateY(-60px)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            <span style={{ display: "inline-flex", transform: `scale(${markT})`, opacity: markT }}>
              <Mark kind={brand.mark} size={88} color={pal.text} />
            </span>
            <SplitText text={p.message} at={f(4)} size={68} mode="blur" />
          </div>
          <Reveal at={f(12)} from="rise">
            <span
              style={{
                ...textStyle(56, 500, pal.accent),
                textDecoration: "underline",
                textUnderlineOffset: 12,
                textDecorationThickness: 3,
                transform: `scale(${pressed})`,
                display: "inline-block",
                opacity: linkT,
              }}
            >
              {p.link}
            </span>
          </Reveal>
        </div>
      </Center>
      <Cursor path={[[0, 1560, 860], [f(28), 1050, 640], [f(50), 960, 600]]} clicks={[clickAt]} hand />
    </Stage>
  );
}
