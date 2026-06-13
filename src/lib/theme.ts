import type { CSSProperties } from "react";
import type { PaletteKey, FontSetKey } from "@/content/config";

type CSSVarMap = Record<string, string>;

// Palettes supply Marigold's own token names, so the whole site recolours with
// zero component edits. All four are light palettes (the design uses --cream-card
// as both a light card surface AND light text on the dark --bg-deep contact band,
// so a fully dark palette would break contrast). Each has its own dark band hue.
const PALETTES: Record<PaletteKey, CSSVarMap> = {
  "marigold-green": {
    "--bg": "#fbf2dc",
    "--bg-soft": "#f7e9c5",
    "--bg-deep": "#1f3a2b",
    "--ink": "#2a2018",
    "--ink-soft": "#5a4836",
    "--accent": "#e89c2b",
    "--accent-deep": "#c7711a",
    "--secondary": "#c2452d",
    "--cream-card": "#fffaee",
    "--line": "rgba(42,32,24,.14)",
  },
  "sage-forest": {
    "--bg": "#eef1e6",
    "--bg-soft": "#e1e8d2",
    "--bg-deep": "#233528",
    "--ink": "#232a22",
    "--ink-soft": "#515a47",
    "--accent": "#7d9a4e",
    "--accent-deep": "#57762f",
    "--secondary": "#b5482f",
    "--cream-card": "#f9fbf3",
    "--line": "rgba(35,42,34,.14)",
  },
  "midnight-gold": {
    "--bg": "#f6efe0",
    "--bg-soft": "#ece1c8",
    "--bg-deep": "#161a18",
    "--ink": "#221f1a",
    "--ink-soft": "#5a5040",
    "--accent": "#d9a531",
    "--accent-deep": "#a9781f",
    "--secondary": "#c2452d",
    "--cream-card": "#fffbf0",
    "--line": "rgba(34,31,26,.14)",
  },
  "linen-rose": {
    "--bg": "#f6ece8",
    "--bg-soft": "#efdcd6",
    "--bg-deep": "#3a2230",
    "--ink": "#2b2024",
    "--ink-soft": "#6a5158",
    "--accent": "#cf6b54",
    "--accent-deep": "#a8472f",
    "--secondary": "#b03a4e",
    "--cream-card": "#fff8f4",
    "--line": "rgba(43,32,36,.14)",
  },
};

// Font sets map Marigold's --font-display / --font-script / --font-body to the
// next/font CSS variables loaded in layout.tsx. The decorative script stays
// Caveat across all sets (it's part of the brand and always loaded).
const FONT_SETS: Record<FontSetKey, CSSVarMap> = {
  "fraunces-dmsans": {
    "--font-display": "var(--font-fraunces), Georgia, serif",
    "--font-script": "var(--font-caveat), cursive",
    "--font-body": "var(--font-dmsans), system-ui, sans-serif",
  },
  "playfair-figtree": {
    "--font-display": "var(--font-playfair), Georgia, serif",
    "--font-script": "var(--font-caveat), cursive",
    "--font-body": "var(--font-figtree), system-ui, sans-serif",
  },
  "newsreader-hanken": {
    "--font-display": "var(--font-newsreader), Georgia, serif",
    "--font-script": "var(--font-caveat), cursive",
    "--font-body": "var(--font-hanken), system-ui, sans-serif",
  },
  "cormorant-nunito": {
    "--font-display": "var(--font-cormorant), Georgia, serif",
    "--font-script": "var(--font-caveat), cursive",
    "--font-body": "var(--font-nunito), system-ui, sans-serif",
  },
};

export function getThemeVars(palette: PaletteKey, fontSet: FontSetKey): CSSProperties {
  return { ...PALETTES[palette], ...FONT_SETS[fontSet] } as CSSProperties;
}

export const PALETTE_OPTIONS: { key: PaletteKey; label: string }[] = [
  { key: "marigold-green", label: "Marigold — cream, gold & forest (default)" },
  { key: "sage-forest", label: "Sage & Forest" },
  { key: "midnight-gold", label: "Midnight & Gold" },
  { key: "linen-rose", label: "Linen & Rose" },
];

export const FONT_SET_OPTIONS: { key: FontSetKey; label: string }[] = [
  { key: "fraunces-dmsans", label: "Fraunces + DM Sans (default)" },
  { key: "playfair-figtree", label: "Playfair Display + Figtree" },
  { key: "newsreader-hanken", label: "Newsreader + Hanken Grotesk" },
  { key: "cormorant-nunito", label: "Cormorant Garamond + Nunito" },
];
