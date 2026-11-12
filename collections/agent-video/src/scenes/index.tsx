import type { ComponentType } from "react";
import { Bench } from "./bench.tsx";
import { Burst } from "./burst.tsx";
import { CaretLockup } from "./caret-lockup.tsx";
import { ChipRail } from "./chip-rail.tsx";
import { Fanout } from "./fanout.tsx";
import { KineticLineScene } from "./kinetic-line.tsx";
import { LibraryPhone } from "./library-phone.tsx";
import { ChatSend } from "./chat-send.tsx";
import { ComposerBuild } from "./composer-build.tsx";
import { ComposerIcon } from "./composer-icon.tsx";
import { FeatureDive } from "./feature-dive.tsx";
import { GlowReply } from "./glow-reply.tsx";
import { HalftoneSearch } from "./halftone-search.tsx";
import { ReactBubble } from "./react-bubble.tsx";
import { RichReply } from "./rich-reply.tsx";
import { ThreadPull } from "./thread-pull.tsx";
import { Checklist } from "./checklist.tsx";
import { ErrorStack } from "./error-stack.tsx";
import { GlowSwap } from "./glow-swap.tsx";
import { PhoneTabs } from "./phone-tabs.tsx";
import { PublishModal } from "./publish-modal.tsx";
import { SearchMorph } from "./search-morph.tsx";
import { StepResult } from "./step-result.tsx";
import { UrlOutro } from "./url-outro.tsx";
import { WindowPreview } from "./window-preview.tsx";
import { CornerIcon } from "./corner-icon.tsx";
import { IdeaList } from "./idea-list.tsx";
import { LockupReveal } from "./lockup-reveal.tsx";
import { ScreensFold } from "./screens-fold.tsx";
import { WordStack } from "./word-stack.tsx";
import { BinPromise } from "./bin-promise.tsx";
import { ButtonPile } from "./button-pile.tsx";
import { ClaimDrum } from "./claim-drum.tsx";
import { GlowIntro } from "./glow-intro.tsx";
import { InlineCycle } from "./inline-cycle.tsx";
import { LiveLink } from "./live-link.tsx";
import { SecretField } from "./secret-field.tsx";
import { SideLockup } from "./side-lockup.tsx";
import { SourceLine } from "./source-line.tsx";
import type { SceneKind } from "./kinds.ts";
import { PhoneOffer } from "./phone-offer.tsx";
import { PhoneScreen } from "./phone-screen.tsx";
import { WordCycle } from "./word-cycle.tsx";

// Props are checked per template by the scene's own interface; the registry
// is keyed by kind only.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SCENES: Record<SceneKind, ComponentType<any>> = {
  "word-cycle": WordCycle,
  fanout: Fanout,
  "chip-rail": ChipRail,
  burst: Burst,
  "phone-offer": PhoneOffer,
  bench: Bench,
  "caret-lockup": CaretLockup,
  "kinetic-line": KineticLineScene,
  "phone-screen": PhoneScreen,
  "library-phone": LibraryPhone,
  "chat-send": ChatSend,
  "composer-build": ComposerBuild,
  "composer-icon": ComposerIcon,
  "feature-dive": FeatureDive,
  "glow-reply": GlowReply,
  "halftone-search": HalftoneSearch,
  "react-bubble": ReactBubble,
  "rich-reply": RichReply,
  "thread-pull": ThreadPull,
  "glow-swap": GlowSwap,
  "search-morph": SearchMorph,
  "error-stack": ErrorStack,
  "phone-tabs": PhoneTabs,
  checklist: Checklist,
  "step-result": StepResult,
  "window-preview": WindowPreview,
  "publish-modal": PublishModal,
  "url-outro": UrlOutro,
  "corner-icon": CornerIcon,
  "idea-list": IdeaList,
  "lockup-reveal": LockupReveal,
  "screens-fold": ScreensFold,
  "word-stack": WordStack,
  "bin-promise": BinPromise,
  "button-pile": ButtonPile,
  "claim-drum": ClaimDrum,
  "glow-intro": GlowIntro,
  "inline-cycle": InlineCycle,
  "live-link": LiveLink,
  "secret-field": SecretField,
  "side-lockup": SideLockup,
  "source-line": SourceLine,
};
