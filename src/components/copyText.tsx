"use client";
import { useState } from "react";

interface CopyTextProps {
  text: string;
  className?: string;
}

export function CopyText({ text, className }: CopyTextProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <span
      role="button"
      tabIndex={0}
      onClick={handleCopy}
      onKeyDown={(e) => e.key === "Enter" && handleCopy()}
      className={`cursor-pointer hover:underline ${className}`}
      title={copied ? "Zkopírováno!" : "Klikněte pro zkopírování"}
    >
      {copied ? "Zkopírováno!" : text}
    </span>
  );
}
