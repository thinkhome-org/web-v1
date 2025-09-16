"use client";

import React, { useEffect, useState } from "react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 z-50">
      <div className="bg-background border border-border shadow-lg rounded-xl p-4 md:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 max-w-3xl mx-auto">
        <p className="text-sm text-muted-foreground">
          Tento web používá soubory cookie, aby vám zajistil co nejlepší
          zážitek. Podrobnosti najdete v{" "}
          <a href="/legal/cookies" className="text-primary hover:underline">
            zásadách používání souborů cookie
          </a>
          .
        </p>
        <button
          onClick={handleAccept}
          className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm font-medium hover:bg-primary/90"
          aria-label="Souhlasit s používáním cookies"
        >
          Souhlasím
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
