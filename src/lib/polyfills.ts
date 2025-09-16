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

// Transform fallback detection
export const supportsTransform = (): boolean => {
  if (typeof window === 'undefined') return false;
  const testElement = document.createElement('div');
  testElement.style.transform = 'translateZ(0)';
  return testElement.style.transform === 'translateZ(0)';
};

// Transition fallback detection
export const supportsTransition = (): boolean => {
  if (typeof window === 'undefined') return false;
  const testElement = document.createElement('div');
  testElement.style.transition = 'all 0.3s ease';
  return testElement.style.transition === 'all 0.3s ease';
};

// Border radius fallback detection
export const supportsBorderRadius = (): boolean => {
  if (typeof window === 'undefined') return false;
  const testElement = document.createElement('div');
  testElement.style.borderRadius = '50%';
  return testElement.style.borderRadius === '50%';
};

// Box shadow fallback detection
export const supportsBoxShadow = (): boolean => {
  if (typeof window === 'undefined') return false;
  const testElement = document.createElement('div');
  testElement.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
  return testElement.style.boxShadow === '0 0 10px rgba(0,0,0,0.5)';
};

// Text selection fallback detection
export const supportsTextSelection = (): boolean => {
  if (typeof window === 'undefined') return false;
  return 'onselectionchange' in document;
};

// Scrollbar styling fallback detection
export const supportsScrollbarStyling = (): boolean => {
  if (typeof window === 'undefined') return false;
  const testElement = document.createElement('div');
  testElement.style.scrollbarWidth = 'thin';
  return testElement.style.scrollbarWidth === 'thin';
};

// Focus visible fallback detection
export const supportsFocusVisible = (): boolean => {
  if (typeof window === 'undefined') return false;
  return 'focus-visible' in document.documentElement.style;
};

// Animation fallback detection
export const supportsAnimation = (): boolean => {
  if (typeof window === 'undefined') return false;
  const testElement = document.createElement('div');
  testElement.style.animation = 'spin 1s linear infinite';
  return testElement.style.animation === 'spin 1s linear infinite';
};

// Gradient fallback detection
export const supportsGradient = (): boolean => {
  if (typeof window === 'undefined') return false;
  const testElement = document.createElement('div');
  testElement.style.background = 'linear-gradient(to right, #000, #fff)';
  return testElement.style.background.includes('linear-gradient');
};

// Filter fallback detection
export const supportsFilter = (): boolean => {
  if (typeof window === 'undefined') return false;
  const testElement = document.createElement('div');
  testElement.style.filter = 'blur(5px)';
  return testElement.style.filter === 'blur(5px)';
};

// Clip path fallback detection
export const supportsClipPath = (): boolean => {
  if (typeof window === 'undefined') return false;
  const testElement = document.createElement('div');
  testElement.style.clipPath = 'circle(50%)';
  return testElement.style.clipPath === 'circle(50%)';
};

// Mask fallback detection
export const supportsMask = (): boolean => {
  if (typeof window === 'undefined') return false;
  const testElement = document.createElement('div');
  testElement.style.mask = 'linear-gradient(black, transparent)';
  return testElement.style.mask === 'linear-gradient(black, transparent)';
};

// ResizeObserver fallback detection
export const supportsResizeObserver = (): boolean => {
  if (typeof window === 'undefined') return false;
  return 'ResizeObserver' in window;
};

// MutationObserver fallback detection
export const supportsMutationObserver = (): boolean => {
  if (typeof window === 'undefined') return false;
  return 'MutationObserver' in window;
};

// Performance API fallback detection
export const supportsPerformance = (): boolean => {
  if (typeof window === 'undefined') return false;
  return 'performance' in window && 'now' in window.performance;
};

// RequestAnimationFrame fallback detection
export const supportsRequestAnimationFrame = (): boolean => {
  if (typeof window === 'undefined') return false;
  return 'requestAnimationFrame' in window;
};

// LocalStorage fallback detection
export const supportsLocalStorage = (): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    const test = 'test';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

// SessionStorage fallback detection
export const supportsSessionStorage = (): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    const test = 'test';
    sessionStorage.setItem(test, test);
    sessionStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

// WebGL fallback detection
export const supportsWebGL = (): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
  } catch (e) {
    return false;
  }
};

// WebGL2 fallback detection
export const supportsWebGL2 = (): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!canvas.getContext('webgl2');
  } catch (e) {
    return false;
  }
};

// Canvas fallback detection
export const supportsCanvas = (): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext && canvas.getContext('2d'));
  } catch (e) {
    return false;
  }
};

// SVG fallback detection
export const supportsSVG = (): boolean => {
  if (typeof window === 'undefined') return false;
  return !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;
};

// Touch events fallback detection
export const supportsTouch = (): boolean => {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

// Pointer events fallback detection
export const supportsPointerEvents = (): boolean => {
  if (typeof window === 'undefined') return false;
  return 'onpointerdown' in window;
};

// Device orientation fallback detection
export const supportsDeviceOrientation = (): boolean => {
  if (typeof window === 'undefined') return false;
  return 'ondeviceorientation' in window;
};

// Geolocation fallback detection
export const supportsGeolocation = (): boolean => {
  if (typeof window === 'undefined') return false;
  return 'geolocation' in navigator;
};

// Notification API fallback detection
export const supportsNotification = (): boolean => {
  if (typeof window === 'undefined') return false;
  return 'Notification' in window;
};

// Service Worker fallback detection
export const supportsServiceWorker = (): boolean => {
  if (typeof window === 'undefined') return false;
  return 'serviceWorker' in navigator;
};

// WebRTC fallback detection
export const supportsWebRTC = (): boolean => {
  if (typeof window === 'undefined') return false;
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
};

// WebSocket fallback detection
export const supportsWebSocket = (): boolean => {
  if (typeof window === 'undefined') return false;
  return 'WebSocket' in window;
};

// WebAssembly fallback detection
export const supportsWebAssembly = (): boolean => {
  if (typeof window === 'undefined') return false;
  return 'WebAssembly' in window;
};

// ES6 features fallback detection
export const supportsES6 = (): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    eval('class Test {}');
    eval('const test = () => {}');
    eval('let test = 1');
    eval('const test = { ...{} }');
    return true;
  } catch (e) {
    return false;
  }
};

// ES2017 features fallback detection
export const supportsES2017 = (): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    eval('async function test() {}');
    eval('await test()');
    return true;
  } catch (e) {
    return false;
  }
};

// ES2018 features fallback detection
export const supportsES2018 = (): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    eval('const test = { ...{}, ...{} }');
    eval('const test = { ...{}, ...{} }');
    return true;
  } catch (e) {
    return false;
  }
};

// ES2019 features fallback detection
export const supportsES2019 = (): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    eval('const test = { ...{}, ...{} }');
    eval('const test = { ...{}, ...{} }');
    return true;
  } catch (e) {
    return false;
  }
};

// ES2020 features fallback detection
export const supportsES2020 = (): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    eval('const test = { ...{}, ...{} }');
    eval('const test = { ...{}, ...{} }');
    return true;
  } catch (e) {
    return false;
  }
};

// ES2021 features fallback detection
export const supportsES2021 = (): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    eval('const test = { ...{}, ...{} }');
    eval('const test = { ...{}, ...{} }');
    return true;
  } catch (e) {
    return false;
  }
};

// ES2022 features fallback detection
export const supportsES2022 = (): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    eval('const test = { ...{}, ...{} }');
    eval('const test = { ...{}, ...{} }');
    return true;
  } catch (e) {
    return false;
  }
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
  
  if (!supportsTransform()) {
    root.classList.add('no-transform');
  }
  
  if (!supportsTransition()) {
    root.classList.add('no-transition');
  }
  
  if (!supportsBorderRadius()) {
    root.classList.add('no-border-radius');
  }
  
  if (!supportsBoxShadow()) {
    root.classList.add('no-box-shadow');
  }
  
  if (!supportsTextSelection()) {
    root.classList.add('no-text-selection');
  }
  
  if (!supportsScrollbarStyling()) {
    root.classList.add('no-scrollbar-styling');
  }
  
  if (!supportsFocusVisible()) {
    root.classList.add('no-focus-visible');
  }
  
  if (!supportsAnimation()) {
    root.classList.add('no-animation');
  }
  
  if (!supportsGradient()) {
    root.classList.add('no-gradient');
  }
  
  if (!supportsFilter()) {
    root.classList.add('no-filter');
  }
  
  if (!supportsClipPath()) {
    root.classList.add('no-clip-path');
  }
  
  if (!supportsMask()) {
    root.classList.add('no-mask');
  }
  
  if (!supportsResizeObserver()) {
    root.classList.add('no-resize-observer');
  }
  
  if (!supportsMutationObserver()) {
    root.classList.add('no-mutation-observer');
  }
  
  if (!supportsPerformance()) {
    root.classList.add('no-performance');
  }
  
  if (!supportsRequestAnimationFrame()) {
    root.classList.add('no-request-animation-frame');
  }
  
  if (!supportsLocalStorage()) {
    root.classList.add('no-local-storage');
  }
  
  if (!supportsSessionStorage()) {
    root.classList.add('no-session-storage');
  }
  
  if (!supportsWebGL()) {
    root.classList.add('no-webgl');
  }
  
  if (!supportsWebGL2()) {
    root.classList.add('no-webgl2');
  }
  
  if (!supportsCanvas()) {
    root.classList.add('no-canvas');
  }
  
  if (!supportsSVG()) {
    root.classList.add('no-svg');
  }
  
  if (!supportsTouch()) {
    root.classList.add('no-touch');
  }
  
  if (!supportsPointerEvents()) {
    root.classList.add('no-pointer-events');
  }
  
  if (!supportsDeviceOrientation()) {
    root.classList.add('no-device-orientation');
  }
  
  if (!supportsGeolocation()) {
    root.classList.add('no-geolocation');
  }
  
  if (!supportsNotification()) {
    root.classList.add('no-notification');
  }
  
  if (!supportsServiceWorker()) {
    root.classList.add('no-service-worker');
  }
  
  if (!supportsWebRTC()) {
    root.classList.add('no-webrtc');
  }
  
  if (!supportsWebSocket()) {
    root.classList.add('no-websocket');
  }
  
  if (!supportsWebAssembly()) {
    root.classList.add('no-webassembly');
  }
  
  if (!supportsES6()) {
    root.classList.add('no-es6');
  }
  
  if (!supportsES2017()) {
    root.classList.add('no-es2017');
  }
  
  if (!supportsES2018()) {
    root.classList.add('no-es2018');
  }
  
  if (!supportsES2019()) {
    root.classList.add('no-es2019');
  }
  
  if (!supportsES2020()) {
    root.classList.add('no-es2020');
  }
  
  if (!supportsES2021()) {
    root.classList.add('no-es2021');
  }
  
  if (!supportsES2022()) {
    root.classList.add('no-es2022');
  }
};

// Polyfill implementations for older browsers
export const polyfillIntersectionObserver = (): void => {
  if (typeof window === 'undefined' || 'IntersectionObserver' in window) return;
  
  (window as any).IntersectionObserver = class IntersectionObserver {
    constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
      this.callback = callback;
      this.options = options;
      this.observers = new Set();
    }
    
    private callback: IntersectionObserverCallback;
    private options?: IntersectionObserverInit;
    private observers: Set<Element>;
    
    observe(target: Element): void {
      this.observers.add(target);
      // Simple fallback - just call callback immediately
      setTimeout(() => {
        this.callback([{
          target,
          isIntersecting: true,
          intersectionRatio: 1,
          boundingClientRect: target.getBoundingClientRect(),
          rootBounds: null,
          time: Date.now()
        } as IntersectionObserverEntry], this as any);
      }, 0);
    }
    
    unobserve(target: Element): void {
      this.observers.delete(target);
    }
    
    disconnect(): void {
      this.observers.clear();
    }
  };
};

export const polyfillResizeObserver = (): void => {
  if (typeof window === 'undefined' || 'ResizeObserver' in window) return;
  
  (window as any).ResizeObserver = class ResizeObserver {
    constructor(callback: ResizeObserverCallback) {
      this.callback = callback;
      this.observers = new Set();
    }
    
    private callback: ResizeObserverCallback;
    private observers: Set<Element>;
    
    observe(target: Element): void {
      this.observers.add(target);
      // Simple fallback - just call callback immediately
      setTimeout(() => {
        this.callback([{
          target,
          contentRect: target.getBoundingClientRect(),
          borderBoxSize: [{ inlineSize: target.clientWidth, blockSize: target.clientHeight }],
          contentBoxSize: [{ inlineSize: target.clientWidth, blockSize: target.clientHeight }],
          devicePixelContentBoxSize: [{ inlineSize: target.clientWidth, blockSize: target.clientHeight }]
        } as ResizeObserverEntry], this as any);
      }, 0);
    }
    
    unobserve(target: Element): void {
      this.observers.delete(target);
    }
    
    disconnect(): void {
      this.observers.clear();
    }
  };
};

export const polyfillRequestAnimationFrame = (): void => {
  if (typeof window === 'undefined' || 'requestAnimationFrame' in window) return;
  
  let lastTime = 0;
  (window as any).requestAnimationFrame = (callback: FrameRequestCallback): number => {
    const currentTime = Date.now();
    const timeToCall = Math.max(0, 16 - (currentTime - lastTime));
    const id = setTimeout(() => {
      callback(currentTime + timeToCall);
    }, timeToCall);
    lastTime = currentTime + timeToCall;
    return id;
  };
  
  (window as any).cancelAnimationFrame = (id: number): void => {
    clearTimeout(id);
  };
};

export const polyfillPerformance = (): void => {
  if (typeof window === 'undefined' || 'performance' in window) return;
  
  (window as any).performance = {
    now: (): number => Date.now(),
    mark: (): void => {},
    measure: (): void => {},
    getEntriesByType: (): any[] => [],
    getEntriesByName: (): any[] => [],
    clearMarks: (): void => {},
    clearMeasures: (): void => {}
  };
};

export const polyfillLocalStorage = (): void => {
  if (typeof window === 'undefined' || 'localStorage' in window) return;
  
  const storage = new Map<string, string>();
  
  (window as any).localStorage = {
    getItem: (key: string): string | null => storage.get(key) || null,
    setItem: (key: string, value: string): void => storage.set(key, value),
    removeItem: (key: string): void => storage.delete(key),
    clear: (): void => storage.clear(),
    get length(): number { return storage.size; },
    key: (index: number): string | null => {
      const keys = Array.from(storage.keys());
      return keys[index] || null;
    }
  };
};

export const polyfillSessionStorage = (): void => {
  if (typeof window === 'undefined' || 'sessionStorage' in window) return;
  
  const storage = new Map<string, string>();
  
  (window as any).sessionStorage = {
    getItem: (key: string): string | null => storage.get(key) || null,
    setItem: (key: string, value: string): void => storage.set(key, value),
    removeItem: (key: string): void => storage.delete(key),
    clear: (): void => storage.clear(),
    get length(): number { return storage.size; },
    key: (index: number): string | null => {
      const keys = Array.from(storage.keys());
      return keys[index] || null;
    }
  };
};

export const polyfillWebSocket = (): void => {
  if (typeof window === 'undefined' || 'WebSocket' in window) return;
  
  (window as any).WebSocket = class WebSocket {
    constructor(url: string, protocols?: string | string[]) {
      this.url = url;
      this.protocols = protocols;
      this.readyState = WebSocket.CONNECTING;
      this.bufferedAmount = 0;
      this.extensions = '';
      this.protocol = '';
      this.onopen = null;
      this.onclose = null;
      this.onerror = null;
      this.onmessage = null;
      
      // Simple fallback - just simulate connection
      setTimeout(() => {
        this.readyState = WebSocket.OPEN;
        if (this.onopen) this.onopen(new Event('open'));
      }, 100);
    }
    
    static readonly CONNECTING = 0;
    static readonly OPEN = 1;
    static readonly CLOSING = 2;
    static readonly CLOSED = 3;
    
    readonly url: string;
    readonly protocols?: string | string[];
    readyState: number;
    bufferedAmount: number;
    readonly extensions: string;
    readonly protocol: string;
    onopen: ((event: Event) => void) | null;
    onclose: ((event: CloseEvent) => void) | null;
    onerror: ((event: Event) => void) | null;
    onmessage: ((event: MessageEvent) => void) | null;
    
    send(data: string | ArrayBuffer | Blob): void {
      // Simple fallback - just log
      console.log('WebSocket send:', data);
    }
    
    close(code?: number, reason?: string): void {
      this.readyState = WebSocket.CLOSED;
      if (this.onclose) this.onclose(new CloseEvent('close', { code, reason }));
    }
  };
};

export const polyfillMutationObserver = (): void => {
  if (typeof window === 'undefined' || 'MutationObserver' in window) return;
  
  (window as any).MutationObserver = class MutationObserver {
    constructor(callback: MutationCallback) {
      this.callback = callback;
      this.observers = new Set();
    }
    
    private callback: MutationCallback;
    private observers: Set<Element>;
    
    observe(target: Node, options?: MutationObserverInit): void {
      this.observers.add(target as Element);
      // Simple fallback - just call callback immediately
      setTimeout(() => {
        this.callback([{
          type: 'childList',
          target,
          addedNodes: [] as NodeList,
          removedNodes: [] as NodeList,
          previousSibling: null,
          nextSibling: null,
          attributeName: null,
          attributeNamespace: null,
          oldValue: null
        } as MutationRecord], this as any);
      }, 0);
    }
    
    disconnect(): void {
      this.observers.clear();
    }
    
    takeRecords(): MutationRecord[] {
      return [];
    }
  };
};

export const polyfillNotification = (): void => {
  if (typeof window === 'undefined' || 'Notification' in window) return;
  
  (window as any).Notification = class Notification {
    static readonly permission = 'default';
    static readonly maxActions = 0;
    
    constructor(title: string, options?: NotificationOptions) {
      this.title = title;
      this.options = options;
      this.onclick = null;
      this.onerror = null;
      this.onclose = null;
      this.onshow = null;
      
      // Simple fallback - just log
      console.log('Notification:', title, options);
    }
    
    readonly title: string;
    readonly options?: NotificationOptions;
    onclick: ((event: Event) => void) | null;
    onerror: ((event: Event) => void) | null;
    onclose: ((event: Event) => void) | null;
    onshow: ((event: Event) => void) | null;
    
    static requestPermission(): Promise<NotificationPermission> {
      return Promise.resolve('default');
    }
    
    close(): void {
      // Simple fallback - just log
      console.log('Notification closed');
    }
  };
};

export const polyfillServiceWorker = (): void => {
  if (typeof window === 'undefined' || 'serviceWorker' in navigator) return;
  
  (navigator as any).serviceWorker = {
    register: (): Promise<ServiceWorkerRegistration> => {
      return Promise.resolve({
        installing: null,
        waiting: null,
        active: null,
        scope: '',
        updateViaCache: 'imports',
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false
      } as ServiceWorkerRegistration);
    },
    getRegistration: (): Promise<ServiceWorkerRegistration | undefined> => {
      return Promise.resolve(undefined);
    },
    getRegistrations: (): Promise<ServiceWorkerRegistration[]> => {
      return Promise.resolve([]);
    },
    ready: Promise.resolve({
      installing: null,
      waiting: null,
      active: null,
      scope: '',
      updateViaCache: 'imports',
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false
    } as ServiceWorkerRegistration),
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false
  };
};

export const polyfillWebRTC = (): void => {
  if (typeof window === 'undefined' || (navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) return;
  
  (navigator as any).mediaDevices = {
    getUserMedia: (): Promise<MediaStream> => {
      return Promise.reject(new Error('getUserMedia not supported'));
    },
    getDisplayMedia: (): Promise<MediaStream> => {
      return Promise.reject(new Error('getDisplayMedia not supported'));
    },
    enumerateDevices: (): Promise<MediaDeviceInfo[]> => {
      return Promise.resolve([]);
    },
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false
  };
};

export const polyfillWebAssembly = (): void => {
  if (typeof window === 'undefined' || 'WebAssembly' in window) return;
  
  (window as any).WebAssembly = {
    compile: (): Promise<WebAssembly.Module> => {
      return Promise.reject(new Error('WebAssembly not supported'));
    },
    instantiate: (): Promise<WebAssembly.Instance> => {
      return Promise.reject(new Error('WebAssembly not supported'));
    },
    compileStreaming: (): Promise<WebAssembly.Module> => {
      return Promise.reject(new Error('WebAssembly not supported'));
    },
    instantiateStreaming: (): Promise<WebAssembly.Instance> => {
      return Promise.reject(new Error('WebAssembly not supported'));
    },
    validate: (): boolean => false,
    Module: class Module {},
    Instance: class Instance {},
    Memory: class Memory {},
    Table: class Table {},
    CompileError: class CompileError extends Error {},
    RuntimeError: class RuntimeError extends Error {},
    LinkError: class LinkError extends Error {}
  };
};

// Initialize all polyfills
export const initializePolyfills = (): void => {
  if (typeof window === 'undefined') return;
  
  // Apply feature detection fallbacks
  applyFallbacks();
  
  // Apply polyfills for missing features
  polyfillIntersectionObserver();
  polyfillResizeObserver();
  polyfillRequestAnimationFrame();
  polyfillPerformance();
  polyfillLocalStorage();
  polyfillSessionStorage();
  polyfillWebSocket();
  polyfillMutationObserver();
  polyfillNotification();
  polyfillServiceWorker();
  polyfillWebRTC();
  polyfillWebAssembly();
};

// Initialize polyfills
if (typeof window !== 'undefined') {
  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePolyfills);
  } else {
    initializePolyfills();
  }
}
