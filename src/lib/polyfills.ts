// Polyfills for cross-platform compatibility

// CSS Custom Properties fallback
export const supportsCSSVariables = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.CSS && window.CSS.supports && window.CSS.supports('color', 'var(--test)');
};

// Flexbox fallback detection
export const supportsFlexbox = (): boolean => {
  if (typeof window === 'undefined') return false;
  const testElement = document.createElement('div');
  testElement.style.display = 'flex';
  return testElement.style.display === 'flex';
};

// CSS Grid fallback detection
export const supportsCSSGrid = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.CSS && window.CSS.supports && window.CSS.supports('display', 'grid');
};

// Backdrop filter fallback detection
export const supportsBackdropFilter = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.CSS && window.CSS.supports && window.CSS.supports('backdrop-filter', 'blur(10px)');
};

// Intersection Observer fallback
export const supportsIntersectionObserver = (): boolean => {
  if (typeof window === 'undefined') return false;
  return 'IntersectionObserver' in window;
};

// Apply fallbacks based on browser support
export const applyFallbacks = (): void => {
  if (typeof window === 'undefined') return;

  // Add fallback classes based on support
  const root = document.documentElement;
  
  if (!supportsCSSVariables()) {
    root.classList.add('no-css-variables');
  }
  
  if (!supportsFlexbox()) {
    root.classList.add('no-flexbox');
  }
  
  if (!supportsCSSGrid()) {
    root.classList.add('no-css-grid');
  }
  
  if (!supportsBackdropFilter()) {
    root.classList.add('no-backdrop-filter');
  }
  
  if (!supportsIntersectionObserver()) {
    root.classList.add('no-intersection-observer');
  }
};

// Initialize polyfills
if (typeof window !== 'undefined') {
  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyFallbacks);
  } else {
    applyFallbacks();
  }
}
