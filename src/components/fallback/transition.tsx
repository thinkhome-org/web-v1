"use client";

import { ReactNode } from "react";
import { CSSFeature } from "./conditional-render";

interface TransitionProps {
  children: ReactNode;
  className?: string;
  fallbackClassName?: string;
}

export function Transition({ 
  children, 
  className = "transition-all", 
  fallbackClassName = "" 
}: TransitionProps) {
  return (
    <CSSFeature 
      feature="transition" 
      fallback={
        <div className={fallbackClassName}>
          {children}
        </div>
      }
    >
      <div className={className}>
        {children}
      </div>
    </CSSFeature>
  );
}
