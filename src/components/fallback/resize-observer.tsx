"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { useResizeObserver } from "@/hooks/use-resize-observer";

interface ResizeObserverProps {
  children: ReactNode;
  fallback?: ReactNode;
  onResize?: (size: { width: number; height: number }) => void;
}

export function ResizeObserver({
  children,
  fallback = null,
  onResize
}: ResizeObserverProps) {
  const { elementRef, size } = useResizeObserver();

  useEffect(() => {
    onResize?.(size);
  }, [size, onResize]);

  return (
    <div ref={elementRef}>
      {size.width > 0 && size.height > 0 ? children : fallback}
    </div>
  );
}
