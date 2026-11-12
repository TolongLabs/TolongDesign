// feature-dive: a composer restates itself as a dark pill, two feature cards
// land in stagger, then a blurred lateral pan ends on a light macro of the
// first card, which holds to the cut.
import { ease, keys, ramp } from "../core/motion.ts";
import { palette } from "../core/tokens.ts";
import { Blur, Camera } from "../kit/motion.tsx";
import { SplitText } from "../kit/text.tsx";
import { textStyle } from "../kit/theme.tsx";
import { Card, IconTile, Pill } from "../kit/ui.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface FeatureDiveProps {
  pill: string;
  hint: string;
  features: [{ title: string; desc: string; icon: string }, { title: string; desc: string; icon: string }];
}

export function FeatureDive(p: FeatureDiveProps) {
  const { frame, f, accent } = useBeat(77);
  const light = palette("paper", accent);
  const flip = frame >= f(51);
  const stretch = ramp(frame, 0, f(22), ease.outCubic);
  const v = (fr: number) => Math.abs(keys(fr, [[f(44), 0], [f(55), -1320]], ease.inOutCubic) - keys(fr - 1, [[f(44), 0], [f(55), -1320]], ease.inOutCubic));
  return (
    <Stage bg={flip ? light.bg : undefined}>
      <Camera keys={{ x: [[0, 0], [f(44), 0], [f(55), -1320]] }} blur={0.5} subject={700}>
        <div style={{ position: "absolute", left: 0, top: 0, width: 1920 + 1320, height: 1080 }}>
          <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 1080, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 44 }}>
            <Blur x={v(frame) * 0.4}>
              <div style={{ transform: `scaleX(${0.45 + 0.55 * stretch})`, opacity: 0.4 + 0.6 * stretch }}>
                <Pill label={p.pill} icon="wand" size={34} tone="outline" />
              </div>
            </Blur>
            <div style={{ display: "flex", gap: 32 }}>
              {p.features.map((feat, i) => (
                <div key={feat.title} style={{ transform: `translateY(${(1 - ramp(frame, f(22 + i * 9), f(14), ease.outCubic)) * 90}px)`, opacity: ramp(frame, f(22 + i * 9), f(14)) }}>
                  <Card pad={36} radius={24} style={{ width: 520 }}>
                    <IconTile icon={feat.icon} size={72} tone="accent" />
                    <div style={{ ...textStyle(52, 600), marginTop: 22 }}>{feat.title}</div>
                    <div style={{ ...textStyle(36, 400), whiteSpace: "normal", marginTop: 10, lineHeight: 1.3 }}>{feat.desc}</div>
                  </Card>
                </div>
              ))}
            </div>
            <div style={{ ...textStyle(30, 400), opacity: 0.55 }}>{p.hint}</div>
          </div>
          <div style={{ position: "absolute", left: 1320, top: 0, width: 1920, height: 1080, background: light.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 1240, borderRadius: 40, background: light.card, border: `1px solid ${light.line}`, padding: "84px 96px", boxShadow: "0 30px 90px rgba(17,17,17,0.12)" }}>
              <IconTile icon={p.features[0].icon} size={120} tone="accent" />
              <div style={{ ...textStyle(150, 600, light.text), marginTop: 30 }}>{p.features[0].title}</div>
              <div style={{ ...textStyle(64, 400, light.muted), whiteSpace: "normal", marginTop: 18, lineHeight: 1.3 }}>{p.features[0].desc}</div>
              <div style={{ marginTop: 40 }}>
                <SplitText text="From brief to shot list" at={f(58)} size={44} mode="blur" color={light.accent} />
              </div>
            </div>
          </div>
        </div>
      </Camera>
    </Stage>
  );
}
