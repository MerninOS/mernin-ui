import * as React from "react";
import { cn } from "../utils/cn";

/**
 * Mernin' StatCard
 * One colored stat card: tiny uppercase label, big display-font value, small
 * sub-label. Use a row of these to compose any "portfolio strip" / KPI deck.
 *
 * Generic: pick the variant that matches the metric's tone (tomato = active,
 * sky = informational, matcha = positive, espresso = inverted/total, cream =
 * neutral).
 */
export type StatCardVariant = "tomato" | "sky" | "matcha" | "espresso" | "cream" | "sun" | "honey";

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: React.ReactNode;
  sub?: React.ReactNode;
  variant?: StatCardVariant;
}

const variantStyles: Record<StatCardVariant, string> = {
  tomato:   "bg-tomato text-cream",
  sky:      "bg-sky text-espresso",
  matcha:   "bg-matcha text-cream",
  espresso: "bg-espresso text-cream",
  cream:    "bg-cream text-espresso",
  sun:      "bg-sun text-espresso",
  honey:    "bg-honey text-espresso",
};

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ label, value, sub, variant = "cream", className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-[16px] border-4 border-espresso p-4 shadow-flat-md",
          variantStyles[variant],
          className
        )}
        {...rest}
      >
        <div className="font-body text-[10.5px] font-extrabold uppercase tracking-[0.14em] opacity-80">
          {label}
        </div>
        <div className="mt-1.5 font-display text-[38px] leading-none tracking-tight">{value}</div>
        {sub && (
          <div className="mt-1.5 font-body text-[11px] font-bold lowercase opacity-90">{sub}</div>
        )}
      </div>
    );
  }
);
StatCard.displayName = "StatCard";

export { StatCard };
