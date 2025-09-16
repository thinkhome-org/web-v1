"use client";

import { useState, useEffect } from "react";

export function useWebKit() {
  const [isWebKit, setIsWebKit] = useState(false);
  const [isSafari, setIsSafari] = useState(false);
  const [isChrome, setIsChrome] = useState(false);
  const [isEdge, setIsEdge] = useState(false);
  const [isMac, setIsMac] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const userAgent = navigator.userAgent;
    const platform = navigator.platform;

    // Detect WebKit
    const webkitDetected = /webkit/i.test(userAgent);
    setIsWebKit(webkitDetected);

    // Detect Safari
    const safariDetected = /safari/i.test(userAgent) && !/chrome/i.test(userAgent);
    setIsSafari(safariDetected);

    // Detect Chrome
    const chromeDetected = /chrome/i.test(userAgent) && !/edge/i.test(userAgent);
    setIsChrome(chromeDetected);

    // Detect Edge
    const edgeDetected = /edge/i.test(userAgent);
    setIsEdge(edgeDetected);

    // Detect Mac
    const macDetected = /mac/i.test(platform);
    setIsMac(macDetected);

    // Detect iOS
    const iosDetected = /iphone|ipad|ipod/i.test(userAgent);
    setIsIOS(iosDetected);
  }, []);

  return {
    isWebKit,
    isSafari,
    isChrome,
    isEdge,
    isMac,
    isIOS
  };
}
