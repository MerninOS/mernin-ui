import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

/**
 * Mernin' Badge
 * Pill-shaped, uppercase, thick espresso border.
 * Variants map to brand colors — never generic gray.
 */
const badgeVariants = cva(
  "inline-flex items-center rounded-full border-2 border-espresso px-3 py-0.5 text-[0.65rem] font-body font-bold uppercase tracking-[0.1em] transition-colors focus:outline-none focus:ring-2 focus:ring-tomato focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:     "bg-tomato text-cream",       // "NEW", "SALE", loud
        secondary:   "bg-cream text-espresso",     // neutral
        destructive: "bg-espresso text-cream",     // "SOLD OUT"
        outline:     "bg-transparent text-espresso",
        hot:         "bg-sun text-espresso",       // "HOT", starburst energy
        fresh:       "bg-matcha text-cream",       // "IN STOCK", "FRESH"
        sky:         "bg-sky text-espresso",       // info states
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
