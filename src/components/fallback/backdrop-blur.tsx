"use client";

import { ReactNode } from "react";
import { CSSFeature } from "./conditional-render";

interface BackdropBlurProps {
  children: ReactNode;
  className?: string;
  fallbackClassName?: string;
}

export function BackdropBlur({ 
  children, 
  className = "backdrop-blur-md", 
  fallbackClassName = "bg-white/90 dark:bg-black/90" 
}: BackdropBlurProps) {
  return (
    <CSSFeature 
      feature="backdropFilter" 
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
