"use client";

import { ReactNode, useEffect, useState } from "react";
import { useSessionStorage } from "@/hooks/use-session-storage";

interface SessionStorageProps {
  children: ReactNode;
  fallback?: ReactNode;
  key: string;
  initialValue: any;
  onLoad?: (value: any) => void;
}

export function SessionStorage({
  children,
  fallback = null,
  key,
  initialValue,
  onLoad
}: SessionStorageProps) {
  const [value, setValue] = useSessionStorage(key, initialValue);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (value !== initialValue) {
      setIsLoaded(true);
      onLoad?.(value);
    }
  }, [value, initialValue, onLoad]);

  return (
    <>
      {isLoaded ? children : fallback}
    </>
  );
}
