import { Composition, Folder } from "remotion";
import { totalFrames, type TemplateSpec } from "./core/spec.ts";
import { TemplateFilm } from "./render/Template.tsx";
import { TEMPLATES } from "./templates/index.ts";

const Film = (props: { spec: TemplateSpec }) => <TemplateFilm spec={props.spec} />;

export function Root() {
  return (
    <Folder name="templates">
      {TEMPLATES.map((spec) => (
        <Composition
          key={spec.id}
          id={spec.id}
          component={Film}
          durationInFrames={totalFrames(spec)}
          fps={spec.fps}
          width={spec.width}
          height={spec.height}
          defaultProps={{ spec }}
        />
      ))}
    </Folder>
  );
}
