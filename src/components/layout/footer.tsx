import * as React from "react";
import Link from "next/link";

export const Footer = () => {
    return (
        <div className="flex flex-col items-center text-center py-8 space-y-4 border-t border-border">
            <div className="flex flex-row gap-6 text-sm">
                <Link 
                    href="/legal/terms-of-service" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                >
                    Všeobecné obchodní podmínky
                </Link>
                <Link 
                    href="/legal/privacy-policy" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                >
                    Ochrana soukromí
                </Link>
                <Link 
                    href="/legal/cookies" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                >
                    Zásady používání cookies
                </Link>
            </div>
            <p className="text-muted-foreground">© {new Date().getFullYear()} ThinkHome</p>
        </div>
    );
};