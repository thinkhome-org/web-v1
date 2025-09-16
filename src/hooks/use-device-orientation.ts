"use client";

import { useEffect, useState } from "react";
import { useFeatureSupport } from "./use-browser-support";

export function useDeviceOrientation() {
  const [orientation, setOrientation] = useState<DeviceOrientationEvent | null>(null);
  const [alpha, setAlpha] = useState<number | null>(null);
  const [beta, setBeta] = useState<number | null>(null);
  const [gamma, setGamma] = useState<number | null>(null);
  const supportsDeviceOrientation = useFeatureSupport("deviceOrientation");

  useEffect(() => {
    if (!supportsDeviceOrientation || typeof window === "undefined") return;

    const handleOrientationChange = (e: DeviceOrientationEvent) => {
      setOrientation(e);
      setAlpha(e.alpha);
      setBeta(e.beta);
      setGamma(e.gamma);
    };

    window.addEventListener("deviceorientation", handleOrientationChange);

    return () => {
      window.removeEventListener("deviceorientation", handleOrientationChange);
    };
  }, [supportsDeviceOrientation]);

  return {
    orientation,
    alpha,
    beta,
    gamma,
    supportsDeviceOrientation
  };
}
