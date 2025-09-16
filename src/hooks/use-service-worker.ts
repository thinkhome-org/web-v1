"use client";

import { useEffect, useState } from "react";
import { useFeatureSupport } from "./use-browser-support";

export function useServiceWorker() {
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const supportsServiceWorker = useFeatureSupport("serviceWorker");

  const register = async (scriptURL: string, options?: RegistrationOptions) => {
    if (!supportsServiceWorker || typeof navigator === "undefined" || !("serviceWorker" in navigator)) {
      setError(new Error("Service Worker not supported"));
      return null;
    }

    setLoading(true);
    setError(null);

    try {
      const reg = await navigator.serviceWorker.register(scriptURL, options);
      setRegistration(reg);
      setLoading(false);
      return reg;
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Service Worker registration failed");
      setError(error);
      setLoading(false);
      return null;
    }
  };

  const unregister = async () => {
    if (!registration) return false;

    try {
      const result = await registration.unregister();
      setRegistration(null);
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Service Worker unregistration failed");
      setError(error);
      return false;
    }
  };

  const update = async () => {
    if (!registration) return false;

    try {
      await registration.update();
      return true;
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Service Worker update failed");
      setError(error);
      return false;
    }
  };

  useEffect(() => {
    if (supportsServiceWorker && typeof navigator !== "undefined" && "serviceWorker" in navigator) {
      const checkRegistration = async () => {
        try {
          const reg = await navigator.serviceWorker.getRegistration();
          if (reg) {
            setRegistration(reg);
          }
        } catch (err) {
          console.warn("Error checking service worker registration:", err);
        }
      };

      checkRegistration();
    }
  }, [supportsServiceWorker]);

  return {
    registration,
    error,
    loading,
    supportsServiceWorker,
    register,
    unregister,
    update
  };
}
