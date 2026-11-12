// halftone-search: one dot field, three phases. Prompt: a white bar pops up
// and types a scene description. Chip: the bar collapses into an accent pill
// with a sheen while dots ripple. Match: the field clears to one dot that
// swells into a tile, and a found card pops with a caption.
import { ease, keys, ramp, typedCount } from "../core/motion.ts";
import { Grid, Halftone, Particles } from "../kit/fields.tsx";
import { Center, Reveal } from "../kit/motion.tsx";
import { Caret } from "../kit/text.tsx";
import { textStyle } from "../kit/theme.tsx";
import { Card, IconTile, Pill } from "../kit/ui.tsx";
import { Icon } from "../kit/icons.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface HalftoneSearchProps {
  phase: "prompt" | "chip" | "match";
  query: string;
  chipLabel: string;
  comment: string;
  caption: string;
}

function PromptBar(p: { query: string }) {
  const { frame, f, pal } = useBeat(78);
  const n = typedCount(p.query.length, frame, f(22), 26);
  return (
    <Center>
      <Reveal at={0} from="scale" dur={f(16)}>
        <Card pad={44} radius={28} style={{ width: 1240 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
            <Icon name="search" size={52} color={pal.accent} />
            <span style={{ ...textStyle(46, 400, pal.text), whiteSpace: "normal", flex: 1 }}>
              {p.query.slice(0, n)}
              {n < p.query.length ? <Caret size={46} typing color={pal.accent} /> : null}
            </span>
          </div>
        </Card>
      </Reveal>
    </Center>
  );
}

function Chip(p: { chipLabel: string }) {
  const { frame, f } = useBeat(72);
  const sheen = keys(frame, [[f(21), -420], [f(33), 420]], ease.inOutCubic);
  return (
    <Center>
      <Reveal at={0} from="scale" dur={f(14)}>
        <div style={{ position: "relative", overflow: "hidden", borderRadius: 999 }}>
          <Pill label={p.chipLabel} icon="search" size={48} tone="accent" />
          <div
            style={{
              position: "absolute",
              top: -20,
              bottom: -20,
              left: sheen,
              width: 120,
              transform: "skewX(-18deg)",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)",
            }}
          />
        </div>
      </Reveal>
    </Center>
  );
}

function Match(p: { comment: string; caption: string }) {
  const { frame, f, pal } = useBeat(48);
  const veil = ramp(frame, 0, f(10), ease.outCubic);
  const dot = keys(frame, [[0, 14], [f(12), 26]], ease.outCubic);
  const tile = ramp(frame, f(6), f(8), ease.outBack);
  return (
    <>
      <div style={{ position: "absolute", inset: 0, background: pal.bg, opacity: veil * 0.88 }} />
      <Center>
        <div
          style={{
            width: 340 * tile,
            height: 220 * tile,
            borderRadius: 48 * tile,
            background: pal.accent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: tile,
            boxShadow: `0 24px 70px ${pal.accent}55`,
          }}
        >
          <span style={{ width: dot, height: dot, borderRadius: 999, background: pal.onAccent }} />
        </div>
      </Center>
      <Center>
        <div style={{ transform: "translateY(250px)" }}>
          <Reveal at={f(19)} from="scale" dur={f(9)}>
            <Card pad={36} radius={24} style={{ width: 940 }}>
              <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <IconTile icon="film" size={64} tone="accent" />
                <div style={{ ...textStyle(40, 400, pal.text), whiteSpace: "normal", flex: 1, lineHeight: 1.35 }}>{p.comment}</div>
              </div>
            </Card>
          </Reveal>
          <Reveal at={f(27)} from="blur" dur={f(8)}>
            <div style={{ ...textStyle(34, 600, pal.accent), textAlign: "center", marginTop: 20 }}>{p.caption}</div>
          </Reveal>
        </div>
      </Center>
    </>
  );
}

export function HalftoneSearch(p: HalftoneSearchProps) {
  const { f } = useBeat(p.phase === "prompt" ? 78 : p.phase === "chip" ? 72 : 48);
  return (
    <Stage>
      {p.phase === "prompt" ? <Halftone gap={26} dot={3.4} /> : null}
      {p.phase === "chip" ? (
        <>
          <Halftone gap={26} dot={3.4} waveAt={f(31)} waveDur={f(30)} tint />
          <Particles at={f(31)} dur={f(30)} count={36} size={12} seed={11} />
        </>
      ) : null}
      {p.phase === "match" ? <Halftone gap={26} dot={3.4} waveAt={0} waveDur={f(18)} tint /> : null}
      {p.phase === "prompt" ? <Grid cell={120} opacity={0.35} /> : null}
      {p.phase === "prompt" ? <PromptBar query={p.query} /> : null}
      {p.phase === "chip" ? <Chip chipLabel={p.chipLabel} /> : null}
      {p.phase === "match" ? <Match comment={p.comment} caption={p.caption} /> : null}
    </Stage>
  );
}
