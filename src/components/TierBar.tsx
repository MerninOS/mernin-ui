import * as React from "react";
import { cn } from "../utils/cn";

/**
 * Mernin' TierBar
 * Tier-based progress bar — fills toward `max`, with espresso tick marks at
 * configurable thresholds. Each tick can have a label (top) and sub-label
 * (bottom) rail beneath the bar.
 *
 * Generic: any "X of Y with milestones along the way" use case. Crowdroast
 * uses it for committed-of-target lb with pricing tier unlocks; could just as
 * easily back a fundraising bar, an XP bar, etc.
 */
export interface TierBarTick {
  /** Position of the tick on the bar, in the same units as `value` and `max`. */
  position: number;
  label?: string;
  sub?: string;
}

export interface TierBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max: number;
  ticks?: TierBarTick[];
  /** Color of the fill bar. Defaults to "tomato"; "sun" works on dark surfaces. */
  variant?: "tomato" | "sun";
  /** When true, hide the label rail and render a slim 8px bar (no tick chips). */
  compact?: boolean;
}

const TierBar = React.forwardRef<HTMLDivElement, TierBarProps>(
  ({ value, max, ticks = [], variant = "tomato", compact = false, className, ...rest }, ref) => {
    const safeMax = Math.max(1, max);
    const pct = Math.min(100, (value / safeMax) * 100);
    const fillColor = variant === "sun" ? "bg-sun" : "bg-tomato";

    if (compact) {
      return (
        <div ref={ref} className={cn("w-full", className)} {...rest}>
          <div className="relative h-2 overflow-hidden rounded-full bg-fog">
            <div className={cn("h-full transition-all", fillColor)} style={{ width: `${pct}%` }} />
            {ticks.map((t) => {
              const x = (t.position / safeMax) * 100;
              if (x <= 0 || x >= 100) return null;
              return (
                <div
                  key={t.position}
                  aria-hidden
                  className="absolute top-[-2px] h-3 w-0.5 bg-espresso"
                  style={{ left: `${x}%` }}
                />
              );
            })}
          </div>
        </div>
      );
    }

    return (
      <div ref={ref} className={cn("w-full", className)} {...rest}>
        <div className="relative h-[22px] overflow-hidden rounded-full border-[3px] border-espresso bg-fog">
          <div
            className={cn("h-full transition-all duration-300 ease-out", fillColor)}
            style={{ width: `${pct}%` }}
          />
          {ticks.map((t) => {
            const x = (t.position / safeMax) * 100;
            const reached = value >= t.position;
            return (
              <div
                key={t.position}
                aria-hidden
                className={cn(
                  "absolute top-[-4px] h-[30px] w-3 rounded border-[2.5px] border-espresso",
                  reached ? "bg-espresso" : "bg-cream"
                )}
                style={{ left: `calc(${x}% - 6px)` }}
              />
            );
          })}
        </div>
        {ticks.some((t) => t.label || t.sub) && (
          <div className="relative mt-1 h-7">
            {ticks.map((t) => {
              const x = (t.position / safeMax) * 100;
              const reached = value >= t.position;
              return (
                <div
                  key={t.position}
                  className="absolute -translate-x-1/2 whitespace-nowrap text-center"
                  style={{ left: `${x}%` }}
                >
                  {t.label && (
                    <div
                      className={cn(
                        "font-body text-[10px] font-extrabold uppercase tracking-[0.1em]",
                        reached ? "text-espresso" : "text-espresso/55"
                      )}
                    >
                      {t.label}
                    </div>
                  )}
                  {t.sub && (
                    <div
                      className={cn(
                        "font-body text-[10px] font-bold",
                        reached ? "text-tomato" : "text-espresso/55"
                      )}
                    >
                      {t.sub}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
);
TierBar.displayName = "TierBar";

export { TierBar };
