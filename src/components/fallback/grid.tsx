"use client";

import { ReactNode } from "react";
import { CSSFeature } from "./conditional-render";

interface GridProps {
  children: ReactNode;
  className?: string;
  fallbackClassName?: string;
}

export function Grid({ 
  children, 
  className = "grid", 
  fallbackClassName = "block" 
}: GridProps) {
  return (
    <CSSFeature 
      feature="cssGrid" 
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
