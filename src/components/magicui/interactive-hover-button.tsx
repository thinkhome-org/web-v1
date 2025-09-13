import React from "react";
import { IconArrowRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-2 px-6 text-center font-semibold",
        // Safari-specific fixes
        "transform-gpu will-change-transform",
        className,
      )}
      style={{
        // Safari-specific CSS properties
        WebkitTransform: 'translateZ(0)',
        WebkitBackfaceVisibility: 'hidden',
        WebkitPerspective: '1000px',
      }}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div 
          className="h-2 w-2 rounded-full bg-primary transition-all duration-400 group-hover:scale-[100.8]"
          style={{
            // Safari-specific transition
            WebkitTransition: 'all 400ms ease-in-out',
            WebkitTransform: 'translateZ(0)',
          }}
        ></div>
        <span 
          className="inline-block transition-all duration-400 group-hover:translate-x-12 group-hover:opacity-0"
          style={{
            // Safari-specific transition and transform
            WebkitTransition: 'all 400ms ease-in-out',
            WebkitTransform: 'translateZ(0)',
          }}
        >
          {children}
        </span>
      </div>
      <div 
        className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-400 group-hover:-translate-x-5 group-hover:opacity-100"
        style={{
          // Safari-specific positioning and transitions
          WebkitTransition: 'all 400ms ease-in-out',
          WebkitTransform: 'translateZ(0) translateX(3rem)',
          transform: 'translateZ(0) translateX(3rem)',
        }}
      >
        <span>{children}</span>
        <IconArrowRight />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
