/**
 * caret-lockup: a closing line types with a caret, deletes back to empty,
 * the mark draws, the wordmark types beside it, the caret goes, and the
 * lockup holds. The brand comes from the template.
 */
import { ease, ramp } from "../core/motion.ts";
import { Mark } from "../kit/icons.tsx";
import { Center } from "../kit/motion.tsx";
import { Caret } from "../kit/text.tsx";
import { textStyle } from "../kit/theme.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface CaretLockupProps {
  line: string;
  size?: number;
}

/** Characters visible for a type-then-delete line. */
function typeDelete(len: number, frame: number, typeEnd: number, holdEnd: number, delEnd: number): number {
  if (frame <= typeEnd) return Math.floor((frame / typeEnd) * len);
  if (frame <= holdEnd) return len;
  if (frame <= delEnd) return Math.ceil(len * (1 - (frame - holdEnd) / (delEnd - holdEnd)));
  return 0;
}

export function CaretLockup(p: CaretLockupProps) {
  const { frame, f, pal, brand } = useBeat(111);
  const size = p.size ?? 96;
  const shown = typeDelete(p.line.length, frame, f(16), f(24), f(32));
  const markT = ramp(frame, f(34), f(12), ease.outBack);
  const nameStart = f(48);
  const nameN = Math.max(0, Math.min(brand.name.length, Math.floor((frame - nameStart) / Math.max(1, f(5)))));
  const caretGone = frame > f(96);
  const inLockup = frame >= f(32);
  return (
    <Stage>
      <Center>
        <div style={{ display: "flex", alignItems: "center", gap: size * 0.3 }}>
          {inLockup ? (
            <span style={{ display: "inline-flex", transform: `scale(${markT})`, opacity: Math.min(1, markT) }}>
              <Mark kind={brand.mark} size={size * 1.05} color={pal.text} />
            </span>
          ) : null}
          <span style={textStyle(size, inLockup ? 600 : 500, pal.text)}>
            {inLockup ? brand.name.slice(0, nameN) : p.line.slice(0, shown)}
            <Caret size={size} typing={!caretGone && (frame < f(32) || nameN < brand.name.length)} visible={!caretGone} />
          </span>
        </div>
      </Center>
    </Stage>
  );
}
