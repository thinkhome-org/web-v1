"use client";

import { ReactNode } from "react";
import { useFeatureSupport } from "@/hooks/use-browser-support";

interface ConditionalRenderProps {
  children: ReactNode;
  fallback?: ReactNode;
  feature: keyof ReturnType<typeof useFeatureSupport>;
  invert?: boolean;
}

export function ConditionalRender({ 
  children, 
  fallback = null, 
  feature, 
  invert = false 
}: ConditionalRenderProps) {
  const isSupported = useFeatureSupport(feature);
  const shouldRender = invert ? !isSupported : isSupported;
  
  return shouldRender ? <>{children}</> : <>{fallback}</>;
}

interface CSSFeatureProps {
  children: ReactNode;
  fallback?: ReactNode;
  feature: 'cssVariables' | 'flexbox' | 'cssGrid' | 'backdropFilter' | 'transform' | 'transition' | 'borderRadius' | 'boxShadow' | 'textSelection' | 'scrollbarStyling' | 'focusVisible' | 'animation' | 'gradient' | 'filter' | 'clipPath' | 'mask';
  invert?: boolean;
}

export function CSSFeature({ 
  children, 
  fallback = null, 
  feature, 
  invert = false 
}: CSSFeatureProps) {
  return (
    <ConditionalRender 
      feature={feature} 
      fallback={fallback} 
      invert={invert}
    >
      {children}
    </ConditionalRender>
  );
}

interface APIFeatureProps {
  children: ReactNode;
  fallback?: ReactNode;
  feature: 'intersectionObserver' | 'resizeObserver' | 'mutationObserver' | 'performance' | 'requestAnimationFrame' | 'localStorage' | 'sessionStorage' | 'webgl' | 'webgl2' | 'canvas' | 'svg' | 'touch' | 'pointerEvents' | 'deviceOrientation' | 'geolocation' | 'notification' | 'serviceWorker' | 'webrtc' | 'websocket' | 'webassembly';
  invert?: boolean;
}

export function APIFeature({ 
  children, 
  fallback = null, 
  feature, 
  invert = false 
}: APIFeatureProps) {
  return (
    <ConditionalRender 
      feature={feature} 
      fallback={fallback} 
      invert={invert}
    >
      {children}
    </ConditionalRender>
  );
}

interface ESFeatureProps {
  children: ReactNode;
  fallback?: ReactNode;
  feature: 'es6' | 'es2017' | 'es2018' | 'es2019' | 'es2020' | 'es2021' | 'es2022';
  invert?: boolean;
}

export function ESFeature({ 
  children, 
  fallback = null, 
  feature, 
  invert = false 
}: ESFeatureProps) {
  return (
    <ConditionalRender 
      feature={feature} 
      fallback={fallback} 
      invert={invert}
    >
      {children}
    </ConditionalRender>
  );
}
