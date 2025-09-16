/**
 * Library Index
 * 
 * Centralized exports for all utility functions, constants, and helpers.
 * This file provides a single entry point for importing library functions.
 */

// ============================================================================
// UTILITIES
// ============================================================================

export { cn } from "./utils";
export { parseMarkdown } from "./markdown";

// ============================================================================
// CSV PARSING
// ============================================================================

export { 
  parseCSV, 
  mapHeaders,
  type CSVParseOptions,
  type CSVParseResult 
} from "./csv-parser";

// ============================================================================
// POLYFILLS
// ============================================================================

export {
  // Feature detection
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
  supportsES2022,
  
  // Browser detection
  isSafari,
  isWebKit,
  getSafariVersion,
  
  // Polyfill functions
  polyfillIntersectionObserver,
  polyfillResizeObserver,
  polyfillRequestAnimationFrame,
  polyfillPerformance,
  polyfillLocalStorage,
  polyfillSessionStorage,
  polyfillWebSocket,
  polyfillMutationObserver,
  polyfillNotification,
  polyfillServiceWorker,
  polyfillWebRTC,
  polyfillWebAssembly,
  polyfillSafari,
  
  // Fallback application
  applyFallbacks,
  initializePolyfills
} from "./polyfills";

// ============================================================================
// CONSTANTS
// ============================================================================

export {
  APP_CONFIG,
  SEO_CONFIG,
  NAVIGATION_ITEMS,
  CONTACT_INFO,
  FILE_PATHS,
  ANIMATION_CONFIG,
  BREAKPOINTS,
  VALIDATION_RULES,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  FEATURE_FLAGS
} from "./constants";
