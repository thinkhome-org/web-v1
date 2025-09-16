"use client";

import { useEffect, useRef, useState } from "react";
import { useFeatureSupport } from "./use-browser-support";

interface UseResizeObserverOptions {
  box?: ResizeObserverBoxOptions;
}

export function useResizeObserver(options: UseResizeObserverOptions = {}) {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const elementRef = useRef<Element | null>(null);
  const supportsResizeObserver = useFeatureSupport("resizeObserver");

  useEffect(() => {
    if (!supportsResizeObserver || !elementRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setSize({ width, height });
      }
    });

    observer.observe(elementRef.current, options);

    return () => {
      observer.disconnect();
    };
  }, [supportsResizeObserver, options]);

  return {
    elementRef,
    size
  };
}
