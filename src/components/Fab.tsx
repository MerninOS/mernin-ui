import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

/**
 * Mernin' Fab
 * Floating action button anchored to a viewport corner via position:fixed,
 * so it stays put through scroll. Brand pill with thick espresso border and
 * a flat offset shadow that lifts on hover and presses on active.
 *
 * NOTE: This primitive does NOT make any viewport-size decisions. Consumers
 * that want a "desktop-only FAB" should conditionally render it based on
 * their own breakpoint hook so the element is genuinely absent from the
 * DOM on smaller viewports (instead of just hidden via CSS).
 */
const fabVariants = cva(
  "fixed z-50 inline-flex items-center gap-2 rounded-full border-[3px] border-espresso font-body font-bold uppercase tracking-[0.1em] shadow-flat-md transition-all duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-flat-lg active:translate-x-[3px] active:translate-y-[3px] active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tomato focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      tone: {
        tomato: "bg-tomato text-cream",
        sun:    "bg-sun text-espresso",
        cream:  "bg-cream text-espresso",
      },
      corner: {
        "bottom-left":  "bottom-6 left-6",
        "bottom-right": "bottom-6 right-6",
      },
      size: {
        default: "h-12 px-5 text-sm",
        lg:      "h-14 px-7 text-base",
      },
    },
    defaultVariants: {
      tone: "tomato",
      corner: "bottom-right",
      size: "default",
    },
  }
);

export interface FabProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof fabVariants> {
  icon?: React.ReactNode;
  label: string;
}

const Fab = React.forwardRef<HTMLButtonElement, FabProps>(
  ({ className, tone, corner, size, icon, label, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      aria-label={label}
      className={cn(fabVariants({ tone, corner, size, className }))}
      {...props}
    >
      {icon}
      <span>{label}</span>
    </button>
  )
);
Fab.displayName = "Fab";

export { Fab, fabVariants };
