/**
 * secret-field: a sentence sits beside a code pill with an eye toggle; a
 * cursor crosses to the eye and the code masks to asterisks on the click,
 * then a hard cut to ink holds a struck-through eye.
 */
import { AbsoluteFill } from "remotion";
import { ease, ramp } from "../core/motion.ts";
import { Icon } from "../kit/icons.tsx";
import { Center, Reveal } from "../kit/motion.tsx";
import { SplitText } from "../kit/text.tsx";
import { textStyle } from "../kit/theme.tsx";
import { Cursor, Pill, pressScale } from "../kit/ui.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface SecretFieldProps {
  before: string;
  code: string;
  after: string;
  stinger: string;
}

export function SecretField(p: SecretFieldProps) {
  const { frame, f } = useBeat(148);
  const cutAt = f(128);
  const masked = frame >= f(86);
  const clickScale = pressScale(frame, f(86));
  if (frame >= cutAt) {
    const eyeT = ramp(frame, cutAt, f(10), ease.outBack);
    return (
      <AbsoluteFill style={{ background: "#080808", overflow: "hidden" }}>
        <Center>
          <div style={{ opacity: eyeT, transform: `scale(${0.7 + 0.3 * eyeT})` }}>
            <Icon name="eyeOff" size={220} color="#F5F5F2" stroke={1.6} />
          </div>
        </Center>
        <Center>
          <div style={{ transform: "translateY(220px)", opacity: ramp(frame, cutAt + f(4), f(8)) }}>
            <span style={textStyle(44, 400, "#8C8C90")}>{p.stinger}</span>
          </div>
        </Center>
      </AbsoluteFill>
    );
  }
  return (
    <Stage>
      <Center>
        <div style={{ display: "flex", alignItems: "center", gap: 30, maxWidth: 1750, transform: "translateY(-40px)" }}>
          <SplitText text={p.before} at={f(6)} size={72} mode="blur" />
          <Reveal at={f(18)} from="scale">
            <span style={{ display: "inline-block", transform: `scale(${clickScale})` }}>
              <Pill label={masked ? "••••••••••" : p.code} icon="eyeOff" size={40} tone="plain" />
            </span>
          </Reveal>
          <SplitText text={p.after} at={f(24)} size={72} mode="blur" />
        </div>
      </Center>
      <Cursor path={[[0, 300, 800], [f(40), 760, 480], [f(78), 1210, 520]]} clicks={[f(86)]} />
    </Stage>
  );
}
