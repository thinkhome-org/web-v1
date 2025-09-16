"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect } from "react";
import { initializePolyfills } from "@/lib/polyfills";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  useEffect(() => {
    // Initialize polyfills for cross-browser compatibility
    initializePolyfills();
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}