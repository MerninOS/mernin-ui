import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

/**
 * Mernin' NavTab
 * Top-bar nav pill. Inactive: transparent, lifts on hover with a flat shadow.
 * Active: espresso inversion + shadow. Use `asChild` to wrap Next/Remix Link.
 */
const navTabVariants = cva(
  "inline-flex items-center cursor-pointer rounded-[6px] px-3.5 py-2 text-[14px] font-headline font-bold tracking-[-0.01em] transition-all duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tomato focus-visible:ring-offset-2",
  {
    variants: {
      active: {
        true:
          "bg-espresso text-cream shadow-flat-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-flat-md active:translate-x-[3px] active:translate-y-[3px] active:shadow-none",
        false:
          "text-espresso bg-transparent hover:bg-cream hover:shadow-flat-sm hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

export interface NavTabProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof navTabVariants> {
  asChild?: boolean;
}

const NavTab = React.forwardRef<HTMLElement, NavTabProps>(
  ({ className, active, asChild = false, ...props }, ref) => {
    const Comp: any = asChild ? Slot : "a";
    return (
      <Comp
        ref={ref}
        className={cn(navTabVariants({ active, className }))}
        {...props}
      />
    );
  }
);
NavTab.displayName = "NavTab";

export { NavTab, navTabVariants };
