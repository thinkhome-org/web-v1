"use client";

import { useEffect, useState } from "react";
import { useFeatureSupport } from "./use-browser-support";

export function useGeolocation() {
  const [position, setPosition] = useState<GeolocationPosition | null>(null);
  const [error, setError] = useState<GeolocationPositionError | null>(null);
  const [loading, setLoading] = useState(false);
  const supportsGeolocation = useFeatureSupport("geolocation");

  const getCurrentPosition = (options?: PositionOptions) => {
    if (!supportsGeolocation || typeof navigator === "undefined") return;

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition(pos);
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      },
      options
    );
  };

  const watchPosition = (options?: PositionOptions) => {
    if (!supportsGeolocation || typeof navigator === "undefined") return;

    setLoading(true);
    setError(null);

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        setPosition(pos);
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      },
      options
    );

    return watchId;
  };

  const clearWatch = (watchId: number) => {
    if (supportsGeolocation && typeof navigator !== "undefined") {
      navigator.geolocation.clearWatch(watchId);
    }
  };

  return {
    position,
    error,
    loading,
    supportsGeolocation,
    getCurrentPosition,
    watchPosition,
    clearWatch
  };
}
