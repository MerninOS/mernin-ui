import * as React from "react";
import { cn } from "../utils/cn";

/**
 * Mernin' Stepper
 * Horizontal pill chain showing progress through a multi-step flow.
 * Completed steps render in matcha with a check; the active step in tomato
 * with a flat shadow; future steps in fog with reduced opacity.
 *
 * Generic: works for any sequenced flow (commitment lifecycle, sample
 * request, claim resolution, onboarding). Step ordering is taken from the
 * `steps` prop; the `currentKey` selects which one is active.
 */
export interface StepperStep {
  key: string;
  label: string;
}

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: StepperStep[];
  currentKey: string;
  dense?: boolean;
}

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  ({ steps, currentKey, dense = false, className, ...rest }, ref) => {
    const currentIdx = steps.findIndex((s) => s.key === currentKey);
    const padPill = dense ? "px-3.5 py-[5px]" : "px-5 py-2";
    const fontPill = dense ? "text-[10.5px]" : "text-[12px]";
    const connectorWidth = dense ? "w-3" : "w-4";
    const wrapperGap = dense ? "gap-x-2.5 gap-y-2" : "gap-x-3 gap-y-2.5";

    return (
      <div
        ref={ref}
        className={cn("flex flex-wrap items-center", wrapperGap, className)}
        {...rest}
      >
        {steps.map((step, i) => {
          const done = currentIdx > -1 && i < currentIdx;
          const active = i === currentIdx;
          const future = !done && !active;

          return (
            <React.Fragment key={step.key}>
              <div
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border-[2.5px] border-espresso font-body font-extrabold uppercase tracking-[0.08em]",
                  padPill,
                  fontPill,
                  done && "bg-matcha text-cream",
                  active && "bg-tomato text-cream shadow-[2px_2px_0_var(--mernin-espresso,#1C0F05)]",
                  future && "bg-fog text-espresso/60 opacity-60"
                )}
              >
                <span
                  className={cn(
                    "flex h-3.5 w-3.5 items-center justify-center rounded-full bg-cream text-espresso text-[9px] font-black"
                  )}
                  aria-hidden
                >
                  {done ? "✓" : i + 1}
                </span>
                <span>{step.label}</span>
              </div>
              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  className={cn(
                    "h-[3px]",
                    connectorWidth,
                    i < currentIdx ? "bg-espresso" : "bg-fog"
                  )}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  }
);
Stepper.displayName = "Stepper";

export { Stepper };
