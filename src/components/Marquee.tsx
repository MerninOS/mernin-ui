import * as React from "react";
import { cn } from "../utils/cn";

/**
 * Mernin' Marquee Bar
 * Signature element. Tomato background, cream text, uppercase, constant scroll.
 * Use for announcements, alerts, fun rotating text.
 * Separator between items: ✦ or ✸ or *
 */
interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of items to scroll. Will be duplicated for seamless loop. */
  items: string[];
  /** Separator character between items. Default: " ✦ " */
  separator?: string;
  /** Animation duration in seconds. Default: 20 */
  duration?: number;
  /** Inverted: espresso background with cream text */
  inverted?: boolean;
}

export function Marquee({
  items,
  separator = " ✦ ",
  duration = 20,
  inverted = false,
  className,
  ...props
}: MarqueeProps) {
  const content = items.join(separator);
  // Duplicate for seamless loop
  const repeated = `${content}${separator}${content}${separator}`;

  return (
    <div
      className={cn(
        "overflow-hidden whitespace-nowrap",
        inverted
          ? "bg-espresso text-cream"
          : "bg-tomato text-cream",
        className
      )}
      style={{ padding: "10px 0" }}
      {...props}
    >
      <div
        className="inline-flex gap-0"
        style={{
          animation: `mernin-marquee ${duration}s linear infinite`,
          willChange: "transform",
        }}
      >
        <span
          className="text-[0.8rem] font-bold uppercase tracking-[0.12em] pr-0"
          style={{ fontFamily: "var(--font-body, system-ui, sans-serif)" }}
        >
          {repeated}
        </span>
      </div>
      <style>{`
        @keyframes mernin-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="mernin-marquee"] { animation: none; }
        }
      `}</style>
    </div>
  );
}

Marquee.displayName = "Marquee";
