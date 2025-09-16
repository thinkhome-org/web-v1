"use client";

import { useEffect, useRef } from "react";
import { useFeatureSupport } from "./use-browser-support";

export function useRequestAnimationFrame(callback: () => void) {
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const supportsRequestAnimationFrame = useFeatureSupport("requestAnimationFrame");

  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      callback();
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (!supportsRequestAnimationFrame) {
      // Fallback to setTimeout for older browsers
      const interval = setInterval(callback, 16); // ~60fps
      return () => clearInterval(interval);
    }

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [callback, supportsRequestAnimationFrame]);
}
