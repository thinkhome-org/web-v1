"use client";

import { ReactNode, useEffect, useState } from "react";
import { useServiceWorker } from "@/hooks/use-service-worker";

interface ServiceWorkerProps {
  children: ReactNode;
  fallback?: ReactNode;
  scriptURL: string;
  options?: RegistrationOptions;
  onRegister?: (registration: ServiceWorkerRegistration) => void;
  onError?: (error: Error) => void;
}

export function ServiceWorker({
  children,
  fallback = null,
  scriptURL,
  options,
  onRegister,
  onError
}: ServiceWorkerProps) {
  const { registration, error, register, supportsServiceWorker } = useServiceWorker();
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    if (registration) {
      setIsRegistered(true);
      onRegister?.(registration);
    }
  }, [registration, onRegister]);

  useEffect(() => {
    if (error) {
      onError?.(error);
    }
  }, [error, onError]);

  const handleRegister = async () => {
    if (supportsServiceWorker) {
      await register(scriptURL, options);
    }
  };

  return (
    <>
      {supportsServiceWorker && isRegistered ? (
        children
      ) : (
        <div>
          {fallback}
          <button onClick={handleRegister}>Register Service Worker</button>
        </div>
      )}
    </>
  );
}
