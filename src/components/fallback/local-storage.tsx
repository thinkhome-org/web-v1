"use client";

import { ReactNode, useEffect, useState } from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";

interface LocalStorageProps {
  children: ReactNode;
  fallback?: ReactNode;
  key: string;
  initialValue: any;
  onLoad?: (value: any) => void;
}

export function LocalStorage({
  children,
  fallback = null,
  key,
  initialValue,
  onLoad
}: LocalStorageProps) {
  const [value, setValue] = useLocalStorage(key, initialValue);
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
