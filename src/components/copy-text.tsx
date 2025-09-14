"use client";
import { useState } from "react";

interface CopyTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export function CopyText({ text, className, style }: CopyTextProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      // Try modern clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers or non-secure contexts
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      // Still show feedback even if copy failed
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <span
      role="button"
      tabIndex={0}
      onClick={handleCopy}
      onKeyDown={(e) => e.key === "Enter" && handleCopy()}
      className={`cursor-pointer hover:underline ${className}`}
      style={style}
      title={copied ? "Zkopírováno!" : "Klikněte pro zkopírování"}
    >
      {copied ? "Zkopírováno!" : text}
    </span>
  );
}
