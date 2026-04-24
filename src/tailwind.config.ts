import type { Config } from "tailwindcss";

/**
 * Mernin' shared Tailwind config.
 * Import and spread into each app's tailwind.config.ts:
 *
 *   import { merninTailwind } from "@mernin/ui/tailwind"
 *   export default { ...merninTailwind, content: [...] }
 *
 * Or extend it:
 *   import { merninTheme } from "@mernin/ui/tailwind"
 *   export default {
 *     theme: { extend: { ...merninTheme } },
 *     content: [...]
 *   }
 */

export const merninTheme = {
  colors: {
    // Mernin' brand palette — CSS variables with hex fallback so apps can override per-palette.
    // Override at :root or [data-palette="X"] by setting --mernin-<name>.
    tomato:   "var(--mernin-tomato, #E8442A)",
    cream:    "var(--mernin-cream, #F5F0D8)",
    espresso: "var(--mernin-espresso, #1C0F05)",
    sun:      "var(--mernin-sun, #F5C842)",
    sky:      "var(--mernin-sky, #5BC8D5)",
    chalk:    "var(--mernin-chalk, #FDFAF0)",
    roast:    "var(--mernin-roast, #3B1F0A)",
    honey:    "var(--mernin-honey, #E8913A)",
    matcha:   "var(--mernin-matcha, #5A7A3A)",
    fog:      "var(--mernin-fog, #D8D0B8)",
    // shadcn/Radix CSS variable tokens (apps can override)
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",
    card: {
      DEFAULT:    "hsl(var(--card))",
      foreground: "hsl(var(--card-foreground))",
    },
    popover: {
      DEFAULT:    "hsl(var(--popover))",
      foreground: "hsl(var(--popover-foreground))",
    },
    primary: {
      DEFAULT:    "hsl(var(--primary))",
      foreground: "hsl(var(--primary-foreground))",
    },
    secondary: {
      DEFAULT:    "hsl(var(--secondary))",
      foreground: "hsl(var(--secondary-foreground))",
    },
    muted: {
      DEFAULT:    "hsl(var(--muted))",
      foreground: "hsl(var(--muted-foreground))",
    },
    accent: {
      DEFAULT:    "hsl(var(--accent))",
      foreground: "hsl(var(--accent-foreground))",
    },
    destructive: {
      DEFAULT:    "hsl(var(--destructive))",
      foreground: "hsl(var(--destructive-foreground))",
    },
    border: "hsl(var(--border))",
    input:  "hsl(var(--input))",
    ring:   "hsl(var(--ring))",
  },
  fontFamily: {
    display:  ["'Adore Cats'", "Fredoka", "cursive"],
    headline: ["'Adore Cats'", "Fredoka", "cursive"],
    body:     ["'Cal Sans'",   "system-ui", "sans-serif"],
    mono:     ["'JetBrains Mono'", "monospace"],
    sans:     ["system-ui", "sans-serif"],
  },
  boxShadow: {
    "flat-sm":     "3px 3px 0px var(--mernin-espresso, #1C0F05)",
    "flat-md":     "5px 5px 0px var(--mernin-espresso, #1C0F05)",
    "flat-lg":     "8px 8px 0px var(--mernin-espresso, #1C0F05)",
    "flat-tomato": "5px 5px 0px var(--mernin-tomato, #E8442A)",
    "flat-cream":  "5px 5px 0px var(--mernin-cream, #F5F0D8)",
  },
  borderWidth: {
    "3": "3px",
    "4": "4px",
    "5": "5px",
  },
  borderRadius: {
    sm:     "6px",
    md:     "12px",
    lg:     "20px",
    xl:     "32px",
    pill:   "9999px",
    bubble: "40px",
    DEFAULT: "var(--radius, 12px)",
  },
  keyframes: {
    "accordion-down": {
      from: { height: "0" },
      to:   { height: "var(--radix-accordion-content-height)" },
    },
    "accordion-up": {
      from: { height: "var(--radix-accordion-content-height)" },
      to:   { height: "0" },
    },
    "mernin-marquee": {
      from: { transform: "translateX(0)" },
      to:   { transform: "translateX(-50%)" },
    },
    "fade-up": {
      "0%":   { opacity: "0", transform: "translateY(16px)" },
      "100%": { opacity: "1", transform: "translateY(0)" },
    },
    "bounce-in": {
      "0%":   { transform: "scale(0.8)", opacity: "0" },
      "60%":  { transform: "scale(1.05)" },
      "100%": { transform: "scale(1)", opacity: "1" },
    },
  },
  animation: {
    "accordion-down":  "accordion-down 0.2s ease-out",
    "accordion-up":    "accordion-up 0.2s ease-out",
    "mernin-marquee":  "mernin-marquee 20s linear infinite",
    "fade-up":         "fade-up 220ms cubic-bezier(0.16, 1, 0.3, 1) both",
    "bounce-in":       "bounce-in 220ms cubic-bezier(0.34, 1.56, 0.64, 1) both",
  },
} satisfies NonNullable<NonNullable<Config["theme"]>["extend"]>;

/**
 * Full ready-to-use config. Merge your own content array:
 *
 *   export default {
 *     ...merninTailwind,
 *     content: ["./app/**\/*.{ts,tsx}", "./components/**\/*.{ts,tsx}"],
 *   }
 */
export const merninTailwind = {
  darkMode: ["class"],
  theme: {
    extend: merninTheme,
  },
  plugins: [],
} satisfies Partial<Config>;
