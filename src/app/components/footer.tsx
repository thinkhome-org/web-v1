import React from "react";

export const Footer = () => {
    return (
        <div className="flex flex-row justify-between items-center text-center">
            <div className="flex flex-row gap-4 w-full text-center justify-center border-t border-border">
                <p className="text-muted-foreground">© {new Date().getFullYear()} ThinkHome</p>
            </div>
        </div>
    );
};