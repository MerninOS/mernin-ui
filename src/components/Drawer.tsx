"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "../utils/cn";

/**
 * Mernin' Drawer
 * Slides in from the right (desktop) or bottom (mobile).
 * Built on Radix Dialog: focus trap, Esc-to-close, outside-click,
 * aria-modal — all default. Honors `prefers-reduced-motion`.
 */

const Drawer = DialogPrimitive.Root;
const DrawerTrigger = DialogPrimitive.Trigger;
const DrawerPortal = DialogPrimitive.Portal;
const DrawerClose = DialogPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-espresso/40 backdrop-blur-[1px]",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
      "data-[state=open]:duration-[220ms] data-[state=closed]:duration-[180ms]",
      "motion-reduce:animate-none",
      className
    )}
    {...props}
  />
));
DrawerOverlay.displayName = "DrawerOverlay";

export interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  side?: "right" | "bottom";
  hideClose?: boolean;
}

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DrawerContentProps
>(({ className, children, side = "right", hideClose = false, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DialogPrimitive.Content
      ref={ref}
      data-side={side}
      className={cn(
        "fixed z-50 flex flex-col bg-cream text-espresso shadow-flat-md focus:outline-none",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=open]:duration-[220ms] data-[state=closed]:duration-[180ms]",
        "data-[state=open]:ease-out data-[state=closed]:ease-in",
        side === "right" &&
          "right-0 top-0 h-full w-full max-w-md border-l-[5px] border-espresso " +
            "data-[state=open]:slide-in-from-right " +
            "data-[state=closed]:slide-out-to-right",
        side === "bottom" &&
          "bottom-0 left-0 right-0 max-h-[90vh] min-h-[75vh] rounded-t-[20px] border-t-[5px] border-espresso " +
            "data-[state=open]:slide-in-from-bottom " +
            "data-[state=closed]:slide-out-to-bottom",
        "motion-reduce:animate-none",
        className
      )}
      {...props}
    >
      {children}
      {!hideClose && (
        <DialogPrimitive.Close
          className={cn(
            "absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center",
            "rounded-full border-[3px] border-espresso bg-chalk text-espresso",
            "shadow-flat-sm transition-all duration-100",
            "hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-flat-md",
            "active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tomato focus-visible:ring-offset-2"
          )}
          aria-label="Close drawer"
        >
          <X className="h-4 w-4" strokeWidth={2.5} />
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col gap-1.5 border-b-2 border-espresso/15 px-6 pb-4 pt-6 pr-16",
      className
    )}
    {...props}
  />
));
DrawerHeader.displayName = "DrawerHeader";

const DrawerBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1 overflow-y-auto px-6 py-4", className)}
    {...props}
  />
));
DrawerBody.displayName = "DrawerBody";

const DrawerFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col gap-2 border-t-2 border-espresso/15 px-6 py-4 sm:flex-row sm:items-center sm:justify-end",
      className
    )}
    {...props}
  />
));
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "font-headline text-2xl font-bold leading-tight text-espresso",
      className
    )}
    {...props}
  />
));
DrawerTitle.displayName = "DrawerTitle";

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("font-body text-sm text-espresso/65", className)}
    {...props}
  />
));
DrawerDescription.displayName = "DrawerDescription";

export {
  Drawer,
  DrawerTrigger,
  DrawerPortal,
  DrawerClose,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
