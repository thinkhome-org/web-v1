"use client";

import { useState, useEffect } from "react";
import { isSafari, getSafariVersion } from "@/lib/polyfills";

export function useSafariFixes() {
  const [isSafariBrowser, setIsSafariBrowser] = useState(false);
  const [safariVersion, setSafariVersion] = useState(0);
  const [needsFixes, setNeedsFixes] = useState({
    flexbox: false,
    grid: false,
    backdropFilter: false,
    transform: false,
    transition: false,
    borderRadius: false,
    boxShadow: false,
    textSelection: false,
    scrollbar: false,
    focusVisible: false,
    animation: false,
    gradient: false,
    filter: false,
    clipPath: false,
    mask: false,
    sticky: false
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const safari = isSafari();
    const version = getSafariVersion();
    
    setIsSafariBrowser(safari);
    setSafariVersion(version);

    if (safari) {
      // Test for various Safari issues
      const testElement = document.createElement('div');
      
      // Test flexbox
      testElement.style.display = 'flex';
      const flexboxSupported = testElement.style.display === 'flex';
      
      // Test CSS Grid
      const gridSupported = window.CSS && window.CSS.supports && window.CSS.supports('display', 'grid');
      
      // Test backdrop-filter
      const backdropFilterSupported = window.CSS && window.CSS.supports && window.CSS.supports('backdrop-filter', 'blur(10px)');
      
      // Test transform
      testElement.style.transform = 'translateZ(0)';
      const transformSupported = testElement.style.transform === 'translateZ(0)';
      
      // Test transition
      testElement.style.transition = 'all 0.3s ease';
      const transitionSupported = testElement.style.transition === 'all 0.3s ease';
      
      // Test border-radius
      testElement.style.borderRadius = '0.25rem';
      const borderRadiusSupported = testElement.style.borderRadius === '0.25rem';
      
      // Test box-shadow
      testElement.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
      const boxShadowSupported = testElement.style.boxShadow === '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
      
      // Test text selection
      testElement.style.userSelect = 'none';
      const textSelectionSupported = testElement.style.userSelect === 'none';
      
      // Test scrollbar styling
      const scrollbarSupported = 'scrollbarWidth' in document.documentElement.style;
      
      // Test focus-visible
      const focusVisibleSupported = window.CSS && window.CSS.supports && window.CSS.supports('selector(:focus-visible)');
      
      // Test animation
      const animationSupported = 'animation' in testElement.style;
      
      // Test gradient
      testElement.style.background = 'linear-gradient(to right, red, blue)';
      const gradientSupported = testElement.style.background.includes('linear-gradient');
      
      // Test filter
      testElement.style.filter = 'blur(4px)';
      const filterSupported = testElement.style.filter === 'blur(4px)';
      
      // Test clip-path
      testElement.style.clipPath = 'circle(50%)';
      const clipPathSupported = testElement.style.clipPath === 'circle(50%)';
      
      // Test mask
      testElement.style.mask = 'linear-gradient(black, transparent)';
      const maskSupported = testElement.style.mask === 'linear-gradient(black, transparent)';
      
      // Test sticky positioning
      testElement.style.position = 'sticky';
      const stickySupported = testElement.style.position === 'sticky';

      setNeedsFixes({
        flexbox: !flexboxSupported,
        grid: !gridSupported,
        backdropFilter: !backdropFilterSupported,
        transform: !transformSupported,
        transition: !transitionSupported,
        borderRadius: !borderRadiusSupported,
        boxShadow: !boxShadowSupported,
        textSelection: !textSelectionSupported,
        scrollbar: !scrollbarSupported,
        focusVisible: !focusVisibleSupported,
        animation: !animationSupported,
        gradient: !gradientSupported,
        filter: !filterSupported,
        clipPath: !clipPathSupported,
        mask: !maskSupported,
        sticky: !stickySupported
      });
    }
  }, []);

  return {
    isSafari: isSafariBrowser,
    safariVersion,
    needsFixes,
    totalIssues: Object.values(needsFixes).filter(Boolean).length
  };
}
