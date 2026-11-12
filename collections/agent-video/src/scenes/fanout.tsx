/**
 * fanout: a headline resolves, then agent rows hang off a rail one by one
 * ("Spawned subagent -> Rendering the title scene"), hold, and collapse to
 * their icons. Shows parallel work.
 */
import { clamp, ease, ramp } from "../core/motion.ts";
import { Icon } from "../kit/icons.tsx";
import { Blur, Center, Reveal } from "../kit/motion.tsx";
import { SplitText } from "../kit/text.tsx";
import { textStyle } from "../kit/theme.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface FanoutProps {
  headline: string;
  lead: string;
  rows: { task: string; icon: string }[];
  leadIcon?: string;
}

export function Fanout(p: FanoutProps) {
  const { frame, f, pal } = useBeat(165);
  const rail = ramp(frame, f(40), f(18), ease.inOutCubic);
  const collapse = ramp(frame, f(132), f(16), ease.inOutCubic);
  const headOut = ramp(frame, f(46), f(12), ease.inCubic);
  return (
    <Stage>
      <Center>
        <div style={{ position: "absolute", top: 300 - headOut * 60, opacity: 1 - headOut, filter: headOut > 0 ? `blur(${headOut * 10}px)` : undefined }}>
          <SplitText text={p.headline} at={f(2)} gap={f(5)} size={76} mode="blur" color={pal.text} />
        </div>
        <div style={{ position: "relative", width: 1240, height: 480 }}>
          <div style={{ position: "absolute", left: 0, top: 30, width: 2, height: 440 * rail, background: pal.line }} />
          {p.rows.map((r, i) => {
            const at = f(58 + i * 14);
            const y = 30 + i * 150;
            const shown = ramp(frame, at, f(12));
            const iconOnly = clamp(collapse * 1.4 - i * 0.15);
            return (
              <div key={i} style={{ position: "absolute", left: 0, top: y, display: "flex", alignItems: "center", gap: 28, opacity: shown }}>
                <div style={{ width: 56 * shown, height: 2, background: pal.line }} />
                <Reveal at={at} from="left" distance={30} dur={f(12)}>
                  <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 14, ...textStyle(40, 400, pal.muted), opacity: 1 - iconOnly }}>
                      <Icon name={p.leadIcon ?? "ghost"} size={44} color={pal.muted} />
                      {p.lead}
                    </span>
                    <Blur x={iconOnly > 0 && iconOnly < 1 ? 6 : 0}>
                      <span style={{ display: "flex", alignItems: "center", gap: 14, ...textStyle(46, 600, pal.text), transform: `translateX(${-iconOnly * 300}px)` }}>
                        <Icon name={r.icon} size={48 + iconOnly * 44} color={iconOnly > 0.5 ? pal.muted : pal.text} />
                        <span style={{ opacity: 1 - iconOnly }}>{r.task}</span>
                      </span>
                    </Blur>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </Center>
    </Stage>
  );
}
