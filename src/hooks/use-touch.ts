"use client";

import { useEffect, useState } from "react";
import { useFeatureSupport } from "./use-browser-support";

export function useTouch() {
  const [touches, setTouches] = useState<TouchList | null>(null);
  const [touchCount, setTouchCount] = useState(0);
  const supportsTouch = useFeatureSupport("touch");

  useEffect(() => {
    if (!supportsTouch || typeof window === "undefined") return;

    const handleTouchStart = (e: TouchEvent) => {
      setTouches(e.touches);
      setTouchCount(e.touches.length);
    };

    const handleTouchMove = (e: TouchEvent) => {
      setTouches(e.touches);
      setTouchCount(e.touches.length);
    };

    const handleTouchEnd = (e: TouchEvent) => {
      setTouches(e.touches);
      setTouchCount(e.touches.length);
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [supportsTouch]);

  return {
    touches,
    touchCount,
    supportsTouch
  };
}
