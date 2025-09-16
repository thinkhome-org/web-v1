"use client";

import { useEffect, useState } from "react";
import { useFeatureSupport } from "./use-browser-support";

export function usePerformance() {
  const [performance, setPerformance] = useState<Performance | null>(null);
  const supportsPerformance = useFeatureSupport("performance");

  useEffect(() => {
    if (supportsPerformance && typeof window !== "undefined") {
      setPerformance(window.performance);
    }
  }, [supportsPerformance]);

  const mark = (name: string) => {
    if (performance && performance.mark) {
      performance.mark(name);
    }
  };

  const measure = (name: string, startMark?: string, endMark?: string) => {
    if (performance && performance.measure) {
      performance.measure(name, startMark, endMark);
    }
  };

  const getEntriesByType = (type: string) => {
    if (performance && performance.getEntriesByType) {
      return performance.getEntriesByType(type);
    }
    return [];
  };

  const getEntriesByName = (name: string) => {
    if (performance && performance.getEntriesByName) {
      return performance.getEntriesByName(name);
    }
    return [];
  };

  const clearMarks = (name?: string) => {
    if (performance && performance.clearMarks) {
      performance.clearMarks(name);
    }
  };

  const clearMeasures = (name?: string) => {
    if (performance && performance.clearMeasures) {
      performance.clearMeasures(name);
    }
  };

  const now = () => {
    if (performance && performance.now) {
      return performance.now();
    }
    return Date.now();
  };

  return {
    performance,
    mark,
    measure,
    getEntriesByType,
    getEntriesByName,
    clearMarks,
    clearMeasures,
    now
  };
}
