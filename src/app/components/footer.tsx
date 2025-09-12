import React from "react";

export const Footer = () => {
    return (
        <div className="flex flex-row justify-between items-center text-center">
            <div className="flex flex-row gap-4 w-full text-center justify-center border-t border-neutral-800">
                <p className="text-neutral-400">© {new Date().getFullYear()} ThinkHome</p>
            </div>
        </div>
    );
};