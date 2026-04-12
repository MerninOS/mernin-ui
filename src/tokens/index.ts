/**
 * Mernin' Design System Tokens
 * Single source of truth — loud, warm, bold. NOT generic SaaS.
 * "If it could pass for a Stripe or Linear clone, start over."
 */

// ─── Brand Colors ──────────────────────────────────────────────────────────────
export const colors = {
  tomato:   "#E8442A", // primary brand red — hero backgrounds, marquee bars, loud accents
  cream:    "#F5F0D8", // primary background — warm off-white, NOT pure white
  espresso: "#1C0F05", // primary text, outlines, thick borders
  sun:      "#F5C842", // yellow — starburst badges, highlights, secondary accent
  sky:      "#5BC8D5", // teal/sky — product packaging color, info states
  chalk:    "#FDFAF0", // elevated surfaces, card backgrounds
  roast:    "#3B1F0A", // dark brown — logo fill, secondary dark text
  honey:    "#E8913A", // warm orange — hover states, accent fills
  matcha:   "#5A7A3A", // success / in-stock
  fog:      "#D8D0B8", // borders, dividers, muted backgrounds
} as const;

// ─── Semantic Tokens ───────────────────────────────────────────────────────────
export const semantic = {
  bgPrimary:   colors.cream,
  bgElevated:  colors.chalk,
  bgLoud:      colors.tomato,
  bgInverse:   colors.espresso,
  textPrimary: colors.espresso,
  textMuted:   "#7A6A50",
  textInverse: colors.cream,
  accentPrimary:   colors.tomato,
  accentSecondary: colors.sun,
  borderDefault: colors.fog,
  borderBold:    colors.espresso,
} as const;

// ─── Typography ────────────────────────────────────────────────────────────────
export const typography = {
  fontDisplay:  ["'Adore Cats'", "Fredoka", "cursive"],   // hero text, big statements, bubbly
  fontHeadline: ["'Adore Cats'", "Fredoka", "cursive"],   // section headers, bold callouts
  fontBody:     ["'Cal Sans'",   "system-ui", "sans-serif"], // body copy, UI labels, nav
  fontMono:     ["'JetBrains Mono'", "monospace"],
} as const;

// ─── Shadows (flat offset only — NO blur) ──────────────────────────────────────
export const shadows = {
  flatSm:     "3px 3px 0px #1C0F05",
  flatMd:     "5px 5px 0px #1C0F05",
  flatLg:     "8px 8px 0px #1C0F05",
  flatTomato: "5px 5px 0px #E8442A",
  flatCream:  "5px 5px 0px #F5F0D8",
} as const;

// ─── Border Widths ─────────────────────────────────────────────────────────────
export const borderWidths = {
  default: "2px",
  bold:    "3px",
  chunky:  "4px",
  comic:   "5px", // product cards, hero elements
} as const;

// ─── Border Radii ──────────────────────────────────────────────────────────────
export const radii = {
  sm:     "6px",
  md:     "12px",
  lg:     "20px",
  xl:     "32px",
  pill:   "9999px",
  bubble: "40px", // the chunky bubbly card corners
} as const;

// ─── Spacing ───────────────────────────────────────────────────────────────────
export const spacing = {
  1:  "0.25rem",
  2:  "0.5rem",
  3:  "0.75rem",
  4:  "1rem",
  6:  "1.5rem",
  8:  "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  containerMax: "1280px",
} as const;

// ─── Motion ────────────────────────────────────────────────────────────────────
// Snappy and physical — NOT silky/smooth
export const motion = {
  easeBounce: "cubic-bezier(0.34, 1.56, 0.64, 1)", // overshoot = life
  easeSnap:   "cubic-bezier(0.16, 1, 0.3, 1)",
  durationFast: "120ms",
  durationBase: "220ms",
  durationSlow: "380ms",
} as const;
