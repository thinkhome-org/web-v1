"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { animations } from "@/lib/design-system";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
    >
      <div 
        style={{
          transition: `background-color ${animations.duration[300]} ${animations.easing.out}, color ${animations.duration[300]} ${animations.easing.out}`,
        }}
      >
        {children}
      </div>
    </ThemeProvider>
  );
}