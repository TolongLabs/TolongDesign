/**
 * source-line: a claim sentence builds word by word, then two labelled
 * chips pop in beneath it (the brand mark chip and the repo chip) and the
 * full card holds.
 */
import { Center, Reveal } from "../kit/motion.tsx";
import { SplitText } from "../kit/text.tsx";
import { Mark } from "../kit/icons.tsx";
import { Icon } from "../kit/icons.tsx";
import { textStyle } from "../kit/theme.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface SourceLineProps {
  line: string;
  brandChip: string;
  repoChip: string;
}

export function SourceLine(p: SourceLineProps) {
  const { frame, f, pal, brand } = useBeat(73);
  void frame;
  return (
    <Stage>
      <Center>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 56, transform: "translateY(-40px)" }}>
          <div style={{ maxWidth: 1500, textAlign: "center" }}>
            <SplitText text={p.line} at={f(4)} size={76} mode="blur" gap={4} />
          </div>
          <div style={{ display: "flex", gap: 28 }}>
            <Reveal at={f(31)} from="scale">
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 18,
                  padding: "20px 40px",
                  borderRadius: 999,
                  background: pal.accent,
                  border: `1px solid ${pal.accent}`,
                  ...textStyle(40, 600, pal.onAccent),
                }}
              >
                <Mark kind={brand.mark} size={44} color={pal.onAccent} />
                {p.brandChip}
              </span>
            </Reveal>
            <Reveal at={f(37)} from="scale">
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 18,
                  padding: "20px 40px",
                  borderRadius: 999,
                  background: pal.card,
                  border: `1px solid ${pal.line}`,
                  ...textStyle(40, 500, pal.text),
                }}
              >
                <Icon name="folder" size={44} color={pal.text} />
                {p.repoChip}
              </span>
            </Reveal>
          </div>
        </div>
      </Center>
    </Stage>
  );
}
