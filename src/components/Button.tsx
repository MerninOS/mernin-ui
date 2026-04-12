import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

/**
 * Mernin' Button
 * Big, chunky, pill-shaped. Flat offset shadow.
 * Hover: translate up-left + bigger shadow (picking it up off the table).
 * Active: translate down-right + no shadow (pressing a stamp down).
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold uppercase tracking-[0.1em] ring-offset-background transition-all duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8442A] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-tomato text-cream border-[3px] border-espresso shadow-flat-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-flat-md active:translate-x-[3px] active:translate-y-[3px] active:shadow-none",
        destructive:
          "bg-tomato text-cream border-[3px] border-espresso shadow-flat-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-flat-md active:translate-x-[3px] active:translate-y-[3px] active:shadow-none",
        outline:
          "bg-transparent text-espresso border-[3px] border-espresso shadow-flat-sm hover:bg-espresso hover:text-cream hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-flat-md active:translate-x-[3px] active:translate-y-[3px] active:shadow-none",
        secondary:
          "bg-cream text-espresso border-[3px] border-espresso shadow-flat-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-flat-md active:translate-x-[3px] active:translate-y-[3px] active:shadow-none",
        sun:
          "bg-sun text-espresso border-[3px] border-espresso shadow-flat-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-flat-md active:translate-x-[3px] active:translate-y-[3px] active:shadow-none",
        ghost:
          "text-espresso hover:bg-cream hover:text-espresso active:bg-cream/80",
        link:
          "text-tomato underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm:      "h-8 px-4 text-xs",
        lg:      "h-12 px-8 text-base",
        icon:    "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
