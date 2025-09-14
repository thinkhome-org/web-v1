import React from "react";
import { spacing, typography } from "@/lib/design-system";

export const Footer = () => {
    return (
        <div className="flex flex-row justify-between items-center text-center">
            <div 
              className="flex flex-row w-full text-center justify-center border-t border-border"
              style={{ gap: spacing[4] }}
            >
                <p 
                  className="text-muted-foreground"
                  style={{
                    fontSize: typography.fontSize.sm,
                  }}
                >
                  © {new Date().getFullYear()} ThinkHome
                </p>
            </div>
        </div>
    );
};