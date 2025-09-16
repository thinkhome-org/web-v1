"use client";

import { ReactNode } from "react";
import { CSSFeature } from "./conditional-render";

interface TransformProps {
  children: ReactNode;
  className?: string;
  fallbackClassName?: string;
}

export function Transform({ 
  children, 
  className = "transform", 
  fallbackClassName = "relative" 
}: TransformProps) {
  return (
    <CSSFeature 
      feature="transform" 
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
