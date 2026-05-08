import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

/**
 * Mernin' BannerCta
 * Full-width section banner. Eyebrow + title (display font) + optional body
 * + a CTA slot. Tone variants paint background + text; the espresso border
 * and flat offset shadow are always on.
 *
 * Use this for the kind of marketing-block insertion that sits between
 * content sections — alternating tomato / sun / cream as the page scrolls.
 */
const bannerCtaVariants = cva(
  "w-full border-[4px] border-espresso shadow-flat-md px-6 py-10 sm:px-12 sm:py-14 flex flex-col gap-4 sm:gap-6",
  {
    variants: {
      tone: {
        tomato: "bg-tomato text-cream",
        sun:    "bg-sun text-espresso",
        cream:  "bg-cream text-espresso",
      },
      align: {
        start:  "items-start text-left",
        center: "items-center text-center",
      },
    },
    defaultVariants: {
      tone: "tomato",
      align: "start",
    },
  }
);

export interface BannerCtaProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "title">,
    VariantProps<typeof bannerCtaVariants> {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  body?: React.ReactNode;
  cta: React.ReactNode;
}

const BannerCta = React.forwardRef<HTMLElement, BannerCtaProps>(
  ({ className, tone, align, eyebrow, title, body, cta, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(bannerCtaVariants({ tone, align, className }))}
      {...props}
    >
      {eyebrow && (
        <span className="font-body font-bold uppercase tracking-[0.12em] text-xs sm:text-sm">
          {eyebrow}
        </span>
      )}
      <h2 className="font-headline text-3xl sm:text-5xl leading-tight">
        {title}
      </h2>
      {body && (
        <p className="font-body text-base sm:text-lg max-w-2xl">{body}</p>
      )}
      <div className="mt-2">{cta}</div>
    </section>
  )
);
BannerCta.displayName = "BannerCta";

export { BannerCta, bannerCtaVariants };
