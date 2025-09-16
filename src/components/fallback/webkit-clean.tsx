"use client";

import { ReactNode } from "react";
import { WebKitFallback } from "./webkit-fallback";

interface WebKitCleanProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function WebKitClean({ 
  children, 
  fallback = null 
}: WebKitCleanProps) {
  return (
    <WebKitFallback
      fallback={fallback}
    >
      <div className="webkit-no-bg webkit-no-pattern webkit-no-grid webkit-no-backdrop webkit-no-shadow webkit-no-border webkit-no-outline webkit-no-focus webkit-no-selection">
        {children}
      </div>
    </WebKitFallback>
  );
}
