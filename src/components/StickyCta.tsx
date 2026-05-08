import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

/**
 * Mernin' StickyCta
 * Pill that pins to the top of its scroll parent via position:sticky.
 *
 * IMPORTANT: position:sticky needs a scrollable ancestor that is taller
 * than the viewport for the stuck behavior to be visible. If the parent
 * section is short, this will sit at the top of the section and never
 * appear "stuck" — that's the CSS spec, not a bug.
 */
const stickyCtaVariants = cva(
  "sticky top-4 z-30 inline-flex items-center justify-between gap-3 rounded-full border-[3px] border-espresso px-5 py-3 font-body font-bold uppercase tracking-[0.1em] text-xs sm:text-sm shadow-flat-sm transition-all duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-flat-md active:translate-x-[3px] active:translate-y-[3px] active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tomato focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      tone: {
        tomato: "bg-tomato text-cream",
        sun:    "bg-sun text-espresso",
        cream:  "bg-cream text-espresso",
      },
    },
    defaultVariants: {
      tone: "tomato",
    },
  }
);

export interface StickyCtaProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof stickyCtaVariants> {
  label: React.ReactNode;
  helper?: React.ReactNode;
}

const StickyCta = React.forwardRef<HTMLButtonElement, StickyCtaProps>(
  ({ className, tone, label, helper, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={cn(stickyCtaVariants({ tone, className }))}
      {...props}
    >
      <span>{label}</span>
      {helper && (
        <span className="font-body font-normal normal-case text-xs opacity-80">
          {helper}
        </span>
      )}
    </button>
  )
);
StickyCta.displayName = "StickyCta";

export { StickyCta, stickyCtaVariants };
