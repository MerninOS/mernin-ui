import * as React from "react";
import { cn } from "../utils/cn";

/**
 * Mernin' Starburst Badge
 * The sunburst/starburst callout shape — "FULL OF FLAVOUR", "SOLD OUT!", "HOT".
 * Use sparingly for maximum impact. This is a graphic element, not a label.
 */
interface StarburstProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Text inside the starburst. Keep it short — 1-3 words. */
  label: string;
  /** Size in px. Default: 80 */
  size?: number;
  /** Background color. Default: sun (#F5C842) */
  color?: "sun" | "tomato" | "espresso" | "sky" | "matcha";
}

const colorMap = {
  sun:      { bg: "#F5C842", text: "#1C0F05" },
  tomato:   { bg: "#E8442A", text: "#F5F0D8" },
  espresso: { bg: "#1C0F05", text: "#F5F0D8" },
  sky:      { bg: "#5BC8D5", text: "#1C0F05" },
  matcha:   { bg: "#5A7A3A", text: "#F5F0D8" },
};

export function Starburst({
  label,
  size = 80,
  color = "sun",
  className,
  style,
  ...props
}: StarburstProps) {
  const { bg, text } = colorMap[color];
  const fontSize = Math.round(size * 0.09);

  return (
    <div
      className={cn("inline-flex items-center justify-center text-center", className)}
      style={{
        width: size,
        height: size,
        background: bg,
        color: text,
        fontSize: `${fontSize}rem`,
        fontWeight: 800,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        padding: size * 0.22,
        clipPath:
          "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        lineHeight: 1.1,
        fontFamily: "var(--font-body, system-ui, sans-serif)",
        ...style,
      }}
      {...props}
    >
      {label}
    </div>
  );
}

Starburst.displayName = "Starburst";
