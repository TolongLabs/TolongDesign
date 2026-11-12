// search-morph: a small search bar holds with an I-beam, the camera dives
// through it into a giant headline with an accent word, pans down with blur,
// then three icon tiles stagger in.
import { ease, keys, ramp } from "../core/motion.ts";
import { Blur, Camera, Center, Reveal } from "../kit/motion.tsx";
import { textStyle } from "../kit/theme.tsx";
import { IconTile, Pill } from "../kit/ui.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface SearchMorphProps {
  placeholder: string;
  chipA: string;
  chipB: string;
  headlineA: string;
  headlineB: string;
  tiles: { icon: string }[];
}

export function SearchMorph(p: SearchMorphProps) {
  const { frame, f, pal } = useBeat(109);
  const diveAt = f(31);
  const headAt = f(44);
  const tilesAt = f(78);
  const headT = ramp(frame, headAt, f(12), ease.outCubic);
  // Headline pans down across the middle of the beat.
  const panY = keys(frame, [[f(47), -90], [f(66), 60], [f(80), 160]], ease.inOutCubic);
  const panV = Math.abs(panY - keys(frame - 1, [[f(47), -90], [f(66), 60], [f(80), 160]], ease.inOutCubic));
  const tilesOut = ramp(frame, f(78), f(8));
  return (
    <Stage>
      {frame < headAt ? (
        <Camera
          keys={{ scale: [[0, 1], [diveAt, 1], [headAt, 5.5]] }}
          blur={0.5}
          subject={900}
        >
          <Center>
            <div
              style={{
                width: 900,
                borderRadius: 999,
                background: "#121214",
                border: `1px solid ${pal.line}`,
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "22px 22px 22px 34px",
              }}
            >
              <span style={{ ...textStyle(30, 400, pal.muted), flex: 1 }}>{p.placeholder}</span>
              <span style={{ width: 3, height: 44, background: pal.text, opacity: frame % 30 < 15 ? 1 : 0 }} />
              <Pill label={p.chipA} size={24} />
              <Pill label={p.chipB} size={24} tone="soft" />
            </div>
          </Center>
        </Camera>
      ) : null}
      {frame >= headAt && frame < tilesAt + f(8) ? (
        <Center>
          <Blur y={panV * 0.5}>
            <div style={{ transform: `translateY(${panY}px)`, opacity: (1 - tilesOut) * Math.min(1, headT * 2) * (1 - ramp(frame, tilesAt - f(4), f(8))) }}>
              <span style={textStyle(120, 500, pal.text)}>
                {p.headlineA}{" "}
                <span style={{ color: pal.accent }}>{p.headlineB}</span>
              </span>
            </div>
          </Blur>
        </Center>
      ) : null}
      {frame >= tilesAt ? (
        <Center>
          <div style={{ display: "flex", gap: 56 }}>
            {p.tiles.map((t, i) => (
              <Reveal key={t.icon} at={tilesAt + i * f(7)} from="scale" dur={f(12)}>
                <IconTile icon={t.icon} size={230} />
              </Reveal>
            ))}
          </div>
        </Center>
      ) : null}
      {frame >= tilesAt ? (
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 120, display: "flex", justifyContent: "center", gap: 14 }}>
          {p.tiles.map((t, i) => (
            <span key={t.icon} style={{ width: 14, height: 14, borderRadius: 99, background: i === 0 ? pal.accent : pal.line, opacity: ramp(frame, tilesAt + i * f(7), f(6)) }} />
          ))}
        </div>
      ) : null}
    </Stage>
  );
}
