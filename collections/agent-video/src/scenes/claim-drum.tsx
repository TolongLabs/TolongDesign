/**
 * claim-drum: the dark claim beat in two modes. "words" builds a stacked
 * claim with an inline chip, swaps to the brand line, then shortens to the
 * tail for the handoff. "icon" pins the tail while capability words drum
 * through one slot over a ghost list, then clears to one big icon.
 */
import { ease, ramp } from "../core/motion.ts";
import { Mark } from "../kit/icons.tsx";
import { Center, Reveal } from "../kit/motion.tsx";
import { SplitText, WordDrum } from "../kit/text.tsx";
import { textStyle } from "../kit/theme.tsx";
import { IconTile, Pill } from "../kit/ui.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface ClaimDrumProps {
  mode: "words" | "icon";
  lead: string;
  chip: string;
  afterChip: string;
  brandLine: string;
  tail: string;
  words: string[];
  icons: string[];
  finalIcon: string;
  finalLabel: string;
}

export function ClaimDrum(p: ClaimDrumProps) {
  const { frame, f } = useBeat(178);
  if (p.mode === "icon") return <IconMode p={p} frame={frame} f={f} />;
  return <WordsMode p={p} frame={frame} f={f} />;
}

function WordsMode(props: { p: ClaimDrumProps; frame: number; f: (n: number) => number }) {
  const { p, frame, f } = props;
  const { pal, brand } = useBeat(178);
  const bIn = ramp(frame, f(62), f(12));
  const bOut = ramp(frame, f(126), f(12), ease.inCubic);
  const cIn = ramp(frame, f(139), f(12));
  const aOut = frame >= f(60) ? ramp(frame, f(60), f(10), ease.inCubic) : 0;
  return (
    <Stage>
      <Center>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 30, opacity: 1 - aOut, filter: aOut > 0 ? `blur(${aOut * 14}px)` : undefined, transform: `translateY(${-aOut * 30}px)` }}>
          <SplitText text={p.lead} at={f(4)} size={84} mode="blur" />
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            <Reveal at={f(16)} from="scale">
              <Pill label={p.chip} icon="film" size={44} tone="soft" />
            </Reveal>
            <SplitText text={p.afterChip} at={f(22)} size={84} mode="blur" />
          </div>
        </div>
      </Center>
      {bIn > 0 && cIn < 1 ? (
        <Center>
          <div style={{ display: "flex", alignItems: "center", gap: 30, opacity: bIn * (1 - bOut), filter: bOut > 0 ? `blur(${bOut * 14}px)` : bIn < 1 ? `blur(${(1 - bIn) * 12}px)` : undefined, transform: `translateY(${(1 - bIn) * 40 - bOut * 30}px)` }}>
            <span style={{ transform: `scale(${0.9 + 0.1 * bIn})`, display: "inline-flex" }}>
              <Mark kind={brand.mark} size={96} color={pal.text} />
            </span>
            <span style={textStyle(92, 600, pal.text)}>{p.brandLine}</span>
          </div>
        </Center>
      ) : null}
      {cIn > 0 ? (
        <Center>
          <div style={{ opacity: cIn, transform: `translateY(${(1 - cIn) * 40}px)`, filter: cIn < 1 ? `blur(${(1 - cIn) * 12}px)` : undefined }}>
            <span style={textStyle(120, 600, pal.text)}>{p.tail}</span>
          </div>
        </Center>
      ) : null}
    </Stage>
  );
}

function IconMode(props: { p: ClaimDrumProps; frame: number; f: (n: number) => number }) {
  const { p, frame, f } = props;
  const { pal } = useBeat(178);
  const clearT = ramp(frame, f(58), f(10), ease.inCubic);
  const markT = ramp(frame, f(62), f(14), ease.outBack);
  const step = Math.max(4, Math.round(f(56) / Math.max(1, p.words.length)));
  const items = p.words.map((w, i) => (
    <span key={w} style={{ display: "inline-flex", alignItems: "center", gap: 24 }}>
      <IconTile icon={p.icons[i] ?? "spark"} size={104} tone="card" />
      <span style={textStyle(96, 500, pal.text)}>{w}</span>
    </span>
  ));
  return (
    <Stage>
      <Center>
        <div style={{ position: "absolute", display: "flex", flexDirection: "column", gap: 6, opacity: 0.22 * (1 - clearT), transform: "translate(420px,-40px)" }}>
          {p.words.slice(0, 6).map((w) => (
            <span key={w} style={textStyle(34, 400, pal.muted)}>
              {w}
            </span>
          ))}
        </div>
      </Center>
      <Center>
        <div style={{ display: "flex", alignItems: "center", gap: 44, opacity: 1 - clearT, filter: clearT > 0 ? `blur(${clearT * 16}px)` : undefined, transform: "translateX(-120px)" }}>
          <span style={textStyle(88, 600, pal.text)}>{p.tail}</span>
          <WordDrum words={items} at={f(4)} step={step} size={96} neighbours={false} />
        </div>
      </Center>
      {markT > 0 ? (
        <Center>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 34, opacity: markT, transform: `scale(${0.8 + 0.2 * markT})`, filter: markT < 1 ? `blur(${(1 - markT) * 10}px)` : undefined }}>
            <IconTile icon={p.finalIcon} size={300} tone="accent" />
            <span style={textStyle(72, 500, pal.text)}>{p.finalLabel}</span>
          </div>
        </Center>
      ) : null}
    </Stage>
  );
}
