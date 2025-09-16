"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface IntersectionObserverProps {
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  onIntersect?: (isIntersecting: boolean) => void;
}

export function IntersectionObserver({
  children,
  fallback = null,
  threshold,
  root,
  rootMargin,
  onIntersect
}: IntersectionObserverProps) {
  const { elementRef, isIntersecting, hasIntersected } = useIntersectionObserver({
    threshold,
    root,
    rootMargin
  });

  useEffect(() => {
    onIntersect?.(isIntersecting);
  }, [isIntersecting, onIntersect]);

  return (
    <div ref={elementRef}>
      {hasIntersected ? children : fallback}
    </div>
  );
}
