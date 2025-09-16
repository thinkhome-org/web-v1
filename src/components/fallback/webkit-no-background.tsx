"use client";

import { ReactNode } from "react";
import { WebKitFallback } from "./webkit-fallback";

interface WebKitNoBackgroundProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function WebKitNoBackground({ 
  children, 
  fallback = null 
}: WebKitNoBackgroundProps) {
  return (
    <WebKitFallback
      fallback={fallback}
    >
      <div className="webkit-no-bg webkit-no-pattern webkit-no-grid webkit-no-backdrop webkit-no-shadow">
        {children}
      </div>
    </WebKitFallback>
  );
}
