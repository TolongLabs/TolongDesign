/**
 * bench: a header sets the test, then bars grow top to bottom with values;
 * ours leads on the accent. Holds on the finished ranking.
 */
import { Bars, type BarRow } from "../kit/fields.tsx";
import { Center, Reveal } from "../kit/motion.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface BenchProps {
  title: string;
  sub?: string;
  rows: BarRow[];
}

export function Bench(p: BenchProps) {
  const { f } = useBeat(120);
  return (
    <Stage>
      <Center>
        <Reveal at={0} from="blur" dur={f(14)}>
          <Bars rows={p.rows} title={p.title} sub={p.sub} at={f(16)} stagger={f(7)} width={1520} size={44} />
        </Reveal>
      </Center>
    </Stage>
  );
}
