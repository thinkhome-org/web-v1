"use client";

import { useEffect, useRef, useState } from "react";
import { useFeatureSupport } from "./use-browser-support";

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<Element | null>(null);
  const supportsIntersectionObserver = useFeatureSupport("intersectionObserver");

  useEffect(() => {
    if (!supportsIntersectionObserver || !elementRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      options
    );

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [supportsIntersectionObserver, options, hasIntersected]);

  return {
    elementRef,
    isIntersecting,
    hasIntersected
  };
}
