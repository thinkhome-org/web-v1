"use client";

import { useState, useEffect } from "react";
import {
  supportsCSSVariables,
  supportsFlexbox,
  supportsCSSGrid,
  supportsBackdropFilter,
  supportsIntersectionObserver,
  supportsTransform,
  supportsTransition,
  supportsBorderRadius,
  supportsBoxShadow,
  supportsTextSelection,
  supportsScrollbarStyling,
  supportsFocusVisible,
  supportsAnimation,
  supportsGradient,
  supportsFilter,
  supportsClipPath,
  supportsMask,
  supportsResizeObserver,
  supportsMutationObserver,
  supportsPerformance,
  supportsRequestAnimationFrame,
  supportsLocalStorage,
  supportsSessionStorage,
  supportsWebGL,
  supportsWebGL2,
  supportsCanvas,
  supportsSVG,
  supportsTouch,
  supportsPointerEvents,
  supportsDeviceOrientation,
  supportsGeolocation,
  supportsNotification,
  supportsServiceWorker,
  supportsWebRTC,
  supportsWebSocket,
  supportsWebAssembly,
  supportsES6,
  supportsES2017,
  supportsES2018,
  supportsES2019,
  supportsES2020,
  supportsES2021,
  supportsES2022
} from "@/lib/polyfills";

export interface BrowserSupport {
  // CSS Features
  cssVariables: boolean;
  flexbox: boolean;
  cssGrid: boolean;
  backdropFilter: boolean;
  transform: boolean;
  transition: boolean;
  borderRadius: boolean;
  boxShadow: boolean;
  textSelection: boolean;
  scrollbarStyling: boolean;
  focusVisible: boolean;
  animation: boolean;
  gradient: boolean;
  filter: boolean;
  clipPath: boolean;
  mask: boolean;
  
  // JavaScript APIs
  intersectionObserver: boolean;
  resizeObserver: boolean;
  mutationObserver: boolean;
  performance: boolean;
  requestAnimationFrame: boolean;
  localStorage: boolean;
  sessionStorage: boolean;
  webgl: boolean;
  webgl2: boolean;
  canvas: boolean;
  svg: boolean;
  touch: boolean;
  pointerEvents: boolean;
  deviceOrientation: boolean;
  geolocation: boolean;
  notification: boolean;
  serviceWorker: boolean;
  webrtc: boolean;
  websocket: boolean;
  webassembly: boolean;
  
  // ES Features
  es6: boolean;
  es2017: boolean;
  es2018: boolean;
  es2019: boolean;
  es2020: boolean;
  es2021: boolean;
  es2022: boolean;
}

export function useBrowserSupport(): BrowserSupport {
  const [support, setSupport] = useState<BrowserSupport>({
    // CSS Features
    cssVariables: false,
    flexbox: false,
    cssGrid: false,
    backdropFilter: false,
    transform: false,
    transition: false,
    borderRadius: false,
    boxShadow: false,
    textSelection: false,
    scrollbarStyling: false,
    focusVisible: false,
    animation: false,
    gradient: false,
    filter: false,
    clipPath: false,
    mask: false,
    
    // JavaScript APIs
    intersectionObserver: false,
    resizeObserver: false,
    mutationObserver: false,
    performance: false,
    requestAnimationFrame: false,
    localStorage: false,
    sessionStorage: false,
    webgl: false,
    webgl2: false,
    canvas: false,
    svg: false,
    touch: false,
    pointerEvents: false,
    deviceOrientation: false,
    geolocation: false,
    notification: false,
    serviceWorker: false,
    webrtc: false,
    websocket: false,
    webassembly: false,
    
    // ES Features
    es6: false,
    es2017: false,
    es2018: false,
    es2019: false,
    es2020: false,
    es2021: false,
    es2022: false
  });

  useEffect(() => {
    const detectSupport = () => {
      setSupport({
        // CSS Features
        cssVariables: supportsCSSVariables(),
        flexbox: supportsFlexbox(),
        cssGrid: supportsCSSGrid(),
        backdropFilter: supportsBackdropFilter(),
        transform: supportsTransform(),
        transition: supportsTransition(),
        borderRadius: supportsBorderRadius(),
        boxShadow: supportsBoxShadow(),
        textSelection: supportsTextSelection(),
        scrollbarStyling: supportsScrollbarStyling(),
        focusVisible: supportsFocusVisible(),
        animation: supportsAnimation(),
        gradient: supportsGradient(),
        filter: supportsFilter(),
        clipPath: supportsClipPath(),
        mask: supportsMask(),
        
        // JavaScript APIs
        intersectionObserver: supportsIntersectionObserver(),
        resizeObserver: supportsResizeObserver(),
        mutationObserver: supportsMutationObserver(),
        performance: supportsPerformance(),
        requestAnimationFrame: supportsRequestAnimationFrame(),
        localStorage: supportsLocalStorage(),
        sessionStorage: supportsSessionStorage(),
        webgl: supportsWebGL(),
        webgl2: supportsWebGL2(),
        canvas: supportsCanvas(),
        svg: supportsSVG(),
        touch: supportsTouch(),
        pointerEvents: supportsPointerEvents(),
        deviceOrientation: supportsDeviceOrientation(),
        geolocation: supportsGeolocation(),
        notification: supportsNotification(),
        serviceWorker: supportsServiceWorker(),
        webrtc: supportsWebRTC(),
        websocket: supportsWebSocket(),
        webassembly: supportsWebAssembly(),
        
        // ES Features
        es6: supportsES6(),
        es2017: supportsES2017(),
        es2018: supportsES2018(),
        es2019: supportsES2019(),
        es2020: supportsES2020(),
        es2021: supportsES2021(),
        es2022: supportsES2022()
      });
    };

    detectSupport();
  }, []);

  return support;
}

export function useFeatureSupport(feature: keyof BrowserSupport): boolean {
  const support = useBrowserSupport();
  return support[feature];
}

export function useCSSSupport(): Pick<BrowserSupport, 'cssVariables' | 'flexbox' | 'cssGrid' | 'backdropFilter' | 'transform' | 'transition' | 'borderRadius' | 'boxShadow' | 'textSelection' | 'scrollbarStyling' | 'focusVisible' | 'animation' | 'gradient' | 'filter' | 'clipPath' | 'mask'> {
  const support = useBrowserSupport();
  return {
    cssVariables: support.cssVariables,
    flexbox: support.flexbox,
    cssGrid: support.cssGrid,
    backdropFilter: support.backdropFilter,
    transform: support.transform,
    transition: support.transition,
    borderRadius: support.borderRadius,
    boxShadow: support.boxShadow,
    textSelection: support.textSelection,
    scrollbarStyling: support.scrollbarStyling,
    focusVisible: support.focusVisible,
    animation: support.animation,
    gradient: support.gradient,
    filter: support.filter,
    clipPath: support.clipPath,
    mask: support.mask
  };
}

export function useAPISupport(): Pick<BrowserSupport, 'intersectionObserver' | 'resizeObserver' | 'mutationObserver' | 'performance' | 'requestAnimationFrame' | 'localStorage' | 'sessionStorage' | 'webgl' | 'webgl2' | 'canvas' | 'svg' | 'touch' | 'pointerEvents' | 'deviceOrientation' | 'geolocation' | 'notification' | 'serviceWorker' | 'webrtc' | 'websocket' | 'webassembly'> {
  const support = useBrowserSupport();
  return {
    intersectionObserver: support.intersectionObserver,
    resizeObserver: support.resizeObserver,
    mutationObserver: support.mutationObserver,
    performance: support.performance,
    requestAnimationFrame: support.requestAnimationFrame,
    localStorage: support.localStorage,
    sessionStorage: support.sessionStorage,
    webgl: support.webgl,
    webgl2: support.webgl2,
    canvas: support.canvas,
    svg: support.svg,
    touch: support.touch,
    pointerEvents: support.pointerEvents,
    deviceOrientation: support.deviceOrientation,
    geolocation: support.geolocation,
    notification: support.notification,
    serviceWorker: support.serviceWorker,
    webrtc: support.webrtc,
    websocket: support.websocket,
    webassembly: support.webassembly
  };
}

export function useESSupport(): Pick<BrowserSupport, 'es6' | 'es2017' | 'es2018' | 'es2019' | 'es2020' | 'es2021' | 'es2022'> {
  const support = useBrowserSupport();
  return {
    es6: support.es6,
    es2017: support.es2017,
    es2018: support.es2018,
    es2019: support.es2019,
    es2020: support.es2020,
    es2021: support.es2021,
    es2022: support.es2022
  };
}
