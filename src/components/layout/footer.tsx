import React from "react";
import { spacing, typography } from "@/lib/design-system";
import { Small } from "@/components/ui/text";

export const Footer = () => {
    return (
        <div className="flex flex-row justify-between items-center text-center">
            <div 
              className="flex flex-row w-full text-center justify-center border-t border-border"
              style={{ gap: spacing[4] }}
            >
                <Small color="secondary" mode="light">
                  © {new Date().getFullYear()} ThinkHome
                </Small>
            </div>
        </div>
    );
};