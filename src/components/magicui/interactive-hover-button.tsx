import React from "react";
import { IconArrowRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { 
  borderRadius, 
  spacing, 
  typography, 
  animations 
} from "@/lib/design-system";

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
        "group relative w-auto cursor-pointer overflow-hidden border bg-background text-center",
        className,
      )}
      style={{
        borderRadius: borderRadius.full,
        padding: spacing[2],
        paddingLeft: spacing[6],
        paddingRight: spacing[6],
        fontWeight: typography.fontWeight.semibold,
      }}
      {...props}
    >
      <div 
        className="flex items-center"
        style={{ gap: spacing[2] }}
      >
        <div 
          className="bg-primary group-hover:scale-110"
          style={{
            height: spacing[2],
            width: spacing[2],
            borderRadius: borderRadius.full,
            transition: `all 400ms ${animations.easing.out}`,
          }}
        ></div>
        <span 
          className="inline-block group-hover:translate-x-12 group-hover:opacity-0"
          style={{
            transition: `all 400ms ${animations.easing.out}`,
          }}
        >
          {children}
        </span>
      </div>
      <div 
        className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center text-primary-foreground opacity-0 group-hover:-translate-x-5 group-hover:opacity-100"
        style={{
          gap: spacing[2],
          transition: `all 400ms ${animations.easing.out}`,
        }}
      >
        <span>{children}</span>
        <IconArrowRight />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
