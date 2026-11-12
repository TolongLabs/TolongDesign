/**
 * word-cycle: big single words swap with hard cuts, each with its own motif
 * on a dark grid: a pan, a ring that outgrows the frame, drifting particles,
 * an outline that gets boxed. A hook beat.
 */
import { clamp, ease, keys, ramp } from "../core/motion.ts";
import { Grid, Particles } from "../kit/fields.tsx";
import { Blur, Center } from "../kit/motion.tsx";
import { OutlineType } from "../kit/text.tsx";
import { textStyle } from "../kit/theme.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface WordCycleProps {
  words: { word: string; motif?: "pan" | "ring" | "particles" | "box" }[];
  size?: number;
}

export function WordCycle(p: WordCycleProps) {
  const { frame, dur, width, pal } = useBeat(114);
  const size = p.size ?? 210;
  const n = p.words.length;
  const slot = dur / n;
  const i = Math.min(n - 1, Math.floor(frame / slot));
  const local = frame - i * slot;
  const { word, motif = i === 0 ? "pan" : i === n - 1 ? "box" : "ring" } = p.words[i];

  // pan: the word slides through the frame left to right, smeared at speed
  const panX = motif === "pan" ? keys(local, [[0, width * 0.32], [slot * 0.45, 0], [slot, -width * 0.08]], ease.outCubic) : 0;
  const panV = motif === "pan" ? Math.abs(panX - keys(local - 1, [[0, width * 0.32], [slot * 0.45, 0], [slot, -width * 0.08]], ease.outCubic)) : 0;
  const ring = motif === "ring" ? ramp(local, 0, slot, ease.inCubic) : 0;
  const outline = motif === "box" ? ramp(local, slot * 0.45, slot * 0.25) : 0;
  const box = motif === "box" ? ramp(local, slot * 0.7, slot * 0.25, ease.inOutCubic) : 0;
  const pushIn = motif === "ring" ? 1 + 0.06 * ramp(local, 0, slot, ease.outCubic) : 1;

  return (
    <Stage>
      <Grid cell={150} opacity={motif === "ring" ? 0.25 : 0.7} />
      {motif === "ring" ? (
        <Center>
          <div
            style={{
              width: 420 + ring * 1900,
              height: 420 + ring * 1900,
              borderRadius: 999,
              border: `2px solid ${pal.text}`,
              opacity: 0.85,
            }}
          />
        </Center>
      ) : null}
      {motif === "particles" || motif === "box" ? <Particles at={i * slot - 4} dur={slot * 1.4} count={26} size={14} seed={i + 3} /> : null}
      <Center>
        <Blur x={panV * 0.5}>
          <div style={{ transform: `translateX(${panX}px) scale(${pushIn})`, position: "relative" }}>
            {outline > 0.5 ? (
              <OutlineType text={word} size={size} dashed={false} fill={1 - outline} color={pal.text} />
            ) : (
              <span style={{ ...textStyle(size, 400, pal.text), opacity: motif === "box" ? 1 - clamp(outline * 1.6) * 0.5 : 1 }}>{word}</span>
            )}
          </div>
        </Blur>
      </Center>
      {box > 0 ? (
        <Center>
          <div
            style={{
              width: 640,
              height: 380,
              border: `2px solid ${pal.text}`,
              clipPath: `inset(0 ${(1 - box) * 100}% ${(1 - box) * 100}% 0)`,
            }}
          />
        </Center>
      ) : null}
    </Stage>
  );
}
