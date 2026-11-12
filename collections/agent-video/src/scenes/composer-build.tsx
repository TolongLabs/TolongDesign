// composer-build: hard cut to paper with a faint grid. An empty composer
// fades in, its icon lands, and the title plus hint type and hold.
import { ramp } from "../core/motion.ts";
import { Grid } from "../kit/fields.tsx";
import { Center, Reveal } from "../kit/motion.tsx";
import { Typewriter } from "../kit/text.tsx";
import { Composer } from "../kit/ui.tsx";
import { Stage, useBeat } from "./beat.tsx";

export interface ComposerBuildProps {
  title: string;
  hint: string;
}

export function ComposerBuild(p: ComposerBuildProps) {
  const { frame, f } = useBeat(53);
  return (
    <Stage>
      <Grid cell={96} at={0} />
      <Center>
        <Reveal at={0} from="scale" dur={f(13)}>
          <Composer
            width={1080}
            icon="wand"
            send
            focus={ramp(frame, f(8), f(10))}
            sub={<Typewriter text={p.hint} at={f(20)} size={29} cps={30} caret="while-typing" />}
          >
            <Typewriter text={p.title} at={f(6)} size={42} weight={600} cps={26} caret="while-typing" />
          </Composer>
        </Reveal>
      </Center>
    </Stage>
  );
}
