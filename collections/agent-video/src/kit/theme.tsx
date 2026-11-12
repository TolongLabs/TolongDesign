import { createContext, useContext, type ReactNode } from "react";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { loadFont as loadMono } from "@remotion/google-fonts/JetBrainsMono";
import type { Brand } from "../core/spec.ts";
import { palette, TYPE, type AccentName, type Act, type Palette } from "../core/tokens.ts";

// Fonts load from Google Fonts at render time. Nothing is committed.
const inter = loadInter("normal", { weights: ["400", "500", "600", "700"], subsets: ["latin"] });
const mono = loadMono("normal", { weights: ["400", "500"], subsets: ["latin"] });
export const FONT = `${inter.fontFamily}, ${TYPE.family}, system-ui, sans-serif`;
export const MONO = `${mono.fontFamily}, ${TYPE.mono}, ui-monospace, monospace`;

export interface Theme {
  act: Act;
  accent: AccentName | string;
  pal: Palette;
  brand: Brand;
}

const DEFAULT_BRAND: Brand = { name: "Acme", mark: "lens", url: "acme.dev" };

const Ctx = createContext<Theme>({
  act: "paper",
  accent: "teal",
  pal: palette("paper", "teal"),
  brand: DEFAULT_BRAND,
});

export function ThemeProvider(props: {
  act: Act;
  accent: AccentName | string;
  brand?: Brand;
  children: ReactNode;
}) {
  const value: Theme = {
    act: props.act,
    accent: props.accent,
    pal: palette(props.act, props.accent),
    brand: props.brand ?? DEFAULT_BRAND,
  };
  return <Ctx.Provider value={value}>{props.children}</Ctx.Provider>;
}

export const useTheme = (): Theme => useContext(Ctx);

/** Text style shared by every headline: tight tracking, stable glyphs. */
export function textStyle(size: number, weight = 500, color?: string) {
  return {
    fontFamily: FONT,
    fontSize: size,
    fontWeight: weight,
    letterSpacing: `${size >= 48 ? TYPE.tracking : -0.01}em`,
    lineHeight: 1.12,
    color,
    // Hinting re-snaps stems every frame on scaled text; this keeps shapes steady.
    textRendering: "geometricPrecision" as const,
    fontFeatureSettings: '"cv11", "ss01"',
    whiteSpace: "pre" as const,
  };
}
