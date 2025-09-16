"use client";

import { useEffect, useState } from "react";
import { useFeatureSupport } from "./use-browser-support";

export function useSVG() {
  const [svg, setSvg] = useState<SVGSVGElement | null>(null);
  const supportsSVG = useFeatureSupport("svg");

  useEffect(() => {
    if (!supportsSVG || typeof window === "undefined") return;

    const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    setSvg(svgElement);
  }, [supportsSVG]);

  return {
    svg,
    supportsSVG
  };
}
