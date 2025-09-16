"use client";

import { useEffect, useState } from "react";
import { useFeatureSupport } from "./use-browser-support";

export function useCanvas() {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const supportsCanvas = useFeatureSupport("canvas");

  useEffect(() => {
    if (!supportsCanvas || typeof window === "undefined") return;

    const canvasElement = document.createElement("canvas");
    const ctx = canvasElement.getContext("2d");
    
    if (ctx) {
      setCanvas(canvasElement);
      setContext(ctx);
    }
  }, [supportsCanvas]);

  return {
    canvas,
    context,
    supportsCanvas
  };
}
