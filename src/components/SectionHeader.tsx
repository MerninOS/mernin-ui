import * as React from "react";
import { cn } from "../utils/cn";

/**
 * Mernin' SectionHeader
 * The standard content-block opener: eyebrow chip + display-font title +
 * optional count + optional side note, with a 2.5px espresso bottom border.
 *
 * Generic across products: any section needing a strong, branded header.
 */
export type SectionHeaderAccent = "tomato" | "sky" | "fog" | "honey" | "matcha" | "sun";

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow: string;
  title: string;
  count?: number;
  accent?: SectionHeaderAccent;
  /** Right-side note (text or node). Useful for lightweight summaries like "$5,200 live". */
  note?: React.ReactNode;
  /** Optional right-side action slot — buttons, links, filter pills. */
  actions?: React.ReactNode;
}

const accentStyles: Record<SectionHeaderAccent, string> = {
  tomato: "bg-tomato text-cream",
  sky:    "bg-sky text-espresso",
  fog:    "bg-fog text-espresso",
  honey:  "bg-honey text-espresso",
  matcha: "bg-matcha text-cream",
  sun:    "bg-sun text-espresso",
};

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ eyebrow, title, count, accent = "tomato", note, actions, className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-end justify-between gap-4 border-b-[2.5px] border-espresso pb-2.5",
          className
        )}
        {...rest}
      >
        <div className="flex items-baseline gap-3.5">
          <span
            className={cn(
              "rounded-md border-2 border-espresso px-2.5 py-[3px] font-body text-[10px] font-extrabold uppercase tracking-[0.18em]",
              accentStyles[accent]
            )}
          >
            {eyebrow.toUpperCase()}
          </span>
          <h2 className="m-0 font-display text-[36px] leading-none text-espresso">{title}</h2>
          {typeof count === "number" && (
            <span className="font-display text-2xl leading-none text-espresso/55">{count}</span>
          )}
        </div>
        <div className="flex items-end gap-3">
          {note && (
            <span className="font-body text-xs font-bold lowercase tracking-tight text-espresso/55">
              {note}
            </span>
          )}
          {actions}
        </div>
      </div>
    );
  }
);
SectionHeader.displayName = "SectionHeader";

export { SectionHeader };
