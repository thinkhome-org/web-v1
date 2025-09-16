"use client";

import { ReactNode } from "react";
import { useWebKit } from "@/hooks/use-webkit";

interface WebKitFallbackProps {
  children: ReactNode;
  fallback?: ReactNode;
  invert?: boolean;
}

export function WebKitFallback({ 
  children, 
  fallback = null, 
  invert = false 
}: WebKitFallbackProps) {
  const { isWebKit } = useWebKit();
  const shouldRender = invert ? !isWebKit : isWebKit;
  
  return shouldRender ? <>{children}</> : <>{fallback}</>;
}

interface SafariFallbackProps {
  children: ReactNode;
  fallback?: ReactNode;
  invert?: boolean;
}

export function SafariFallback({ 
  children, 
  fallback = null, 
  invert = false 
}: SafariFallbackProps) {
  const { isSafari } = useWebKit();
  const shouldRender = invert ? !isSafari : isSafari;
  
  return shouldRender ? <>{children}</> : <>{fallback}</>;
}

interface MacFallbackProps {
  children: ReactNode;
  fallback?: ReactNode;
  invert?: boolean;
}

export function MacFallback({ 
  children, 
  fallback = null, 
  invert = false 
}: MacFallbackProps) {
  const { isMac } = useWebKit();
  const shouldRender = invert ? !isMac : isMac;
  
  return shouldRender ? <>{children}</> : <>{fallback}</>;
}

interface IOSFallbackProps {
  children: ReactNode;
  fallback?: ReactNode;
  invert?: boolean;
}

export function IOSFallback({ 
  children, 
  fallback = null, 
  invert = false 
}: IOSFallbackProps) {
  const { isIOS } = useWebKit();
  const shouldRender = invert ? !isIOS : isIOS;
  
  return shouldRender ? <>{children}</> : <>{fallback}</>;
}
