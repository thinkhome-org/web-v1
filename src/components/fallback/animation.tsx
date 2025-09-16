"use client";

import { ReactNode } from "react";
import { CSSFeature } from "./conditional-render";

interface AnimationProps {
  children: ReactNode;
  className?: string;
  fallbackClassName?: string;
}

export function Animation({ 
  children, 
  className = "animate-spin", 
  fallbackClassName = "" 
}: AnimationProps) {
  return (
    <CSSFeature 
      feature="animation" 
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
