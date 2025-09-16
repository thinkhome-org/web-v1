"use client";

import { useEffect, useState } from "react";
import { useFeatureSupport } from "./use-browser-support";

export function useWebGL() {
  const [webgl, setWebgl] = useState<WebGLRenderingContext | null>(null);
  const [webgl2, setWebgl2] = useState<WebGL2RenderingContext | null>(null);
  const supportsWebGL = useFeatureSupport("webgl");
  const supportsWebGL2 = useFeatureSupport("webgl2");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const canvas = document.createElement("canvas");
    
    if (supportsWebGL2) {
      const gl2 = canvas.getContext("webgl2");
      if (gl2) {
        setWebgl2(gl2);
      }
    }
    
    if (supportsWebGL) {
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (gl) {
        setWebgl(gl as WebGLRenderingContext);
      }
    }
  }, [supportsWebGL, supportsWebGL2]);

  return {
    webgl,
    webgl2,
    supportsWebGL,
    supportsWebGL2
  };
}
