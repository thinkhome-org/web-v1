"use client";

import { useState, useEffect } from "react";
import { useFeatureSupport } from "./use-browser-support";

export function useSessionStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const supportsSessionStorage = useFeatureSupport("sessionStorage");

  useEffect(() => {
    if (!supportsSessionStorage) return;
    
    try {
      const item = window.sessionStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.warn(`Error reading sessionStorage key "${key}":`, error);
    }
  }, [key, supportsSessionStorage]);

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      
      if (supportsSessionStorage) {
        window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`Error setting sessionStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
}
