/**
 * phone-screen: a phone with the app on screen. Optional captions either
 * side ("Change anything." / "Just ask."), an optional request typed into a
 * composer over the bottom of the screen, items checking off, and an entry
 * (rise or tilt in) and exit (drop).
 */
import { ease, keys, ramp } from "../core/motion.ts";
import { AppScreen, Phone, type AppItem } from "../kit/device.tsx";
import { Center } from "../kit/motion.tsx";
import { SplitText, Typewriter } from "../kit/text.tsx";
import { Composer } from "../kit/ui.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface PhoneScreenProps {
  app: { title: string; progress: string; progressSub?: string; items: AppItem[] };
  captions?: { left?: string; right?: string; at?: number };
  request?: { text: string; at: number };
  checkAt?: number;
  enter?: "rise" | "tilt" | "none";
  exit?: "drop" | "none";
  height?: number;
}

export function PhoneScreen(p: PhoneScreenProps) {
  const { frame, f, dur, pal } = useBeat(120);
  const H = p.height ?? 880;
  const enter = p.enter ?? "rise";
  const inT = enter === "none" ? 1 : ramp(frame, 0, f(16), ease.outCubic);
  const outT = p.exit === "drop" ? ramp(frame, dur - f(14), f(14), ease.inCubic) : 0;
  const rot = enter === "tilt" ? keys(frame, [[0, -14], [f(18), 0]], ease.outCubic) : 0;
  const w = H * 0.49 - H * 0.026;
  const capAt = f(p.captions?.at ?? 20);
  return (
    <Stage>
      {p.captions?.left ? (
        <div style={{ position: "absolute", right: "50%", top: "50%", marginRight: w / 2 + 70, transform: "translateY(-50%)" }}>
          <SplitText text={p.captions.left} at={capAt} size={60} mode="blur" />
        </div>
      ) : null}
      {p.captions?.right ? (
        <div style={{ position: "absolute", left: "50%", top: "50%", marginLeft: w / 2 + 70, transform: "translateY(-50%)" }}>
          <SplitText text={p.captions.right} at={capAt + f(16)} size={60} mode="blur" />
        </div>
      ) : null}
      <Center>
        <div
          style={{
            transform: `translateY(${(1 - inT) * 160 + outT * 900}px) rotate(${rot}deg)`,
            opacity: enter === "none" ? 1 : Math.min(1, inT * 1.5),
          }}
        >
          <Phone height={H}>
            <AppScreen w={w} accent={pal.accent} {...p.app} checkAt={p.checkAt === undefined ? undefined : f(p.checkAt)} />
            {p.request ? (
              <div style={{ position: "absolute", left: w * 0.05, right: w * 0.05, bottom: w * 0.2, opacity: ramp(frame, f(p.request.at) - f(6), f(6)) }}>
                <Composer width={w * 0.9} size={w * 0.042} send icon="plus">
                  <Typewriter text={p.request.text} at={f(p.request.at)} size={w * 0.042} cps={24} caret="while-typing" color="#111111" />
                </Composer>
              </div>
            ) : null}
          </Phone>
        </div>
      </Center>
    </Stage>
  );
}
