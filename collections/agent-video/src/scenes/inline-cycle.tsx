/**
 * inline-cycle: a sentence sets around an inline icon slot; the slot cycles
 * through tool glyphs (terminal, code, film) and lands on an accent check
 * badge while the finished sentence holds.
 */
import { ease, ramp } from "../core/motion.ts";
import { Icon } from "../kit/icons.tsx";
import { Center, Reveal } from "../kit/motion.tsx";
import { SplitText } from "../kit/text.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface InlineCycleProps {
  before: string;
  after: string;
  icons: string[];
}

export function InlineCycle(p: InlineCycleProps) {
  const { frame, f, pal } = useBeat(51);
  const cycleStart = f(15);
  const cycleLen = f(29);
  const k = Math.min(p.icons.length - 1, Math.max(0, Math.floor(((frame - cycleStart) / Math.max(1, cycleLen)) * p.icons.length)));
  const landed = frame >= cycleStart + cycleLen;
  const slotT = ramp(frame, f(10), f(8), ease.outBack);
  return (
    <Stage>
      <Center>
        <Reveal at={0} from="rise">
          <div style={{ display: "flex", alignItems: "center", gap: 30, maxWidth: 1700 }}>
            <SplitText text={p.before} at={f(2)} size={68} mode="blur" />
            <span
              style={{
                flex: "none",
                width: 108,
                height: 108,
                borderRadius: 999,
                background: landed ? pal.accent : pal.card,
                border: `2px solid ${landed ? pal.accent : pal.line}`,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                transform: `scale(${0.6 + 0.4 * slotT})`,
                opacity: slotT,
              }}
            >
              <Icon name={landed ? "check" : p.icons[k]} size={56} color={landed ? pal.onAccent : pal.text} stroke={2.2} />
            </span>
            <SplitText text={p.after} at={f(6)} size={68} mode="blur" />
          </div>
        </Reveal>
      </Center>
    </Stage>
  );
}
