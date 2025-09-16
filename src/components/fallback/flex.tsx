"use client";

import { ReactNode } from "react";
import { CSSFeature } from "./conditional-render";

interface FlexProps {
  children: ReactNode;
  className?: string;
  fallbackClassName?: string;
}

export function Flex({ 
  children, 
  className = "flex", 
  fallbackClassName = "block" 
}: FlexProps) {
  return (
    <CSSFeature 
      feature="flexbox" 
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
