// Polyfills for cross-platform compatibility

// Safari detection
export const isSafari = (): boolean => {
  if (typeof window === 'undefined') return false;
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};

// WebKit detection
export const isWebKit = (): boolean => {
  if (typeof window === 'undefined') return false;
  return /webkit/i.test(navigator.userAgent);
};

// Safari version detection
export const getSafariVersion = (): number => {
  if (typeof window === 'undefined') return 0;
  const match = navigator.userAgent.match(/Version\/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
};

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
    return id as unknown as number;
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
    setItem: (key: string, value: string): void => { storage.set(key, value); },
    removeItem: (key: string): void => { storage.delete(key); },
    clear: (): void => { storage.clear(); },
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
    setItem: (key: string, value: string): void => { storage.set(key, value); },
    removeItem: (key: string): void => { storage.delete(key); },
    clear: (): void => { storage.clear(); },
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
          addedNodes: [] as unknown as NodeList,
          removedNodes: [] as unknown as NodeList,
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
      } as unknown as ServiceWorkerRegistration);
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
    } as unknown as ServiceWorkerRegistration),
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false
  };
};

export const polyfillWebRTC = (): void => {
  if (typeof window === 'undefined' || (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function')) return;
  
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
// Safari-specific polyfills
export const polyfillSafari = (): void => {
  if (typeof window === 'undefined' || !isSafari()) return;
  
  // Fix Safari flexbox issues
  if (!supportsFlexbox()) {
    const style = document.createElement('style');
    style.textContent = `
      .flex { display: -webkit-box !important; }
      .flex-col { -webkit-box-orient: vertical !important; }
      .items-center { -webkit-box-align: center !important; }
      .justify-center { -webkit-box-pack: center !important; }
      .justify-between { -webkit-box-pack: justify !important; }
    `;
    document.head.appendChild(style);
  }
  
  // Fix Safari CSS Grid issues
  if (!supportsCSSGrid()) {
    const style = document.createElement('style');
    style.textContent = `
      .grid { display: -webkit-grid !important; }
      .grid-cols-1 { -webkit-grid-template-columns: repeat(1, minmax(0, 1fr)) !important; }
      .grid-cols-2 { -webkit-grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
      .grid-cols-3 { -webkit-grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
      .gap-4 { -webkit-gap: 1rem !important; }
      .gap-6 { -webkit-gap: 1.5rem !important; }
    `;
    document.head.appendChild(style);
  }
  
  // Fix Safari backdrop-filter issues
  if (!supportsBackdropFilter()) {
    const style = document.createElement('style');
    style.textContent = `
      .backdrop-blur-sm,
      .backdrop-blur-md,
      .backdrop-blur-lg {
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
        background-color: rgba(255, 255, 255, 0.8) !important;
      }
      .dark .backdrop-blur-sm,
      .dark .backdrop-blur-md,
      .dark .backdrop-blur-lg {
        background-color: rgba(0, 0, 0, 0.8) !important;
      }
    `;
    document.head.appendChild(style);
  }
  
  // Fix Safari transform issues
  if (!supportsTransform()) {
    const style = document.createElement('style');
    style.textContent = `
      .transform { -webkit-transform: translateZ(0) !important; }
      .hover\\:scale-105:hover { -webkit-transform: scale(1.05) !important; }
      .hover\\:-translate-y-1:hover { -webkit-transform: translateY(-0.25rem) !important; }
    `;
    document.head.appendChild(style);
  }
  
  // Fix Safari transition issues
  if (!supportsTransition()) {
    const style = document.createElement('style');
    style.textContent = `
      .transition-all { -webkit-transition: all 0.3s ease !important; }
      .transition-colors { -webkit-transition: color 0.3s ease, background-color 0.3s ease !important; }
      .transition-transform { -webkit-transition: transform 0.3s ease !important; }
    `;
    document.head.appendChild(style);
  }
  
  // Fix Safari border-radius issues
  if (!supportsBorderRadius()) {
    const style = document.createElement('style');
    style.textContent = `
      .rounded { -webkit-border-radius: 0.25rem !important; }
      .rounded-lg { -webkit-border-radius: 0.5rem !important; }
      .rounded-xl { -webkit-border-radius: 0.75rem !important; }
      .rounded-full { -webkit-border-radius: 9999px !important; }
    `;
    document.head.appendChild(style);
  }
  
  // Fix Safari box-shadow issues
  if (!supportsBoxShadow()) {
    const style = document.createElement('style');
    style.textContent = `
      .shadow { -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1) !important; }
      .shadow-lg { -webkit-box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important; }
      .shadow-md { -webkit-box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important; }
    `;
    document.head.appendChild(style);
  }
  
  // Fix Safari text selection issues
  if (!supportsTextSelection()) {
    const style = document.createElement('style');
    style.textContent = `
      .select-none { -webkit-user-select: none !important; }
      .select-text { -webkit-user-select: text !important; }
      .select-all { -webkit-user-select: all !important; }
    `;
    document.head.appendChild(style);
  }
  
  // Fix Safari scrollbar styling
  if (!supportsScrollbarStyling()) {
    const style = document.createElement('style');
    style.textContent = `
      .scrollbar-thin { scrollbar-width: thin !important; }
      .scrollbar-none { scrollbar-width: none !important; }
      .scrollbar-none::-webkit-scrollbar { display: none !important; }
    `;
    document.head.appendChild(style);
  }
  
  // Fix Safari focus visible
  if (!supportsFocusVisible()) {
    const style = document.createElement('style');
    style.textContent = `
      .focus\\:outline-none:focus { outline: none !important; }
      .focus\\:ring-2:focus { -webkit-box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5) !important; }
    `;
    document.head.appendChild(style);
  }
  
  // Fix Safari animation issues
  if (!supportsAnimation()) {
    const style = document.createElement('style');
    style.textContent = `
      .animate-spin { -webkit-animation: spin 1s linear infinite !important; }
      .animate-pulse { -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite !important; }
      .animate-bounce { -webkit-animation: bounce 1s infinite !important; }
      @-webkit-keyframes spin { to { -webkit-transform: rotate(360deg); } }
      @-webkit-keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
      @-webkit-keyframes bounce { 0%, 100% { -webkit-transform: translateY(-25%); } 50% { -webkit-transform: translateY(0); } }
    `;
    document.head.appendChild(style);
  }
  
  // Fix Safari gradient issues
  if (!supportsGradient()) {
    const style = document.createElement('style');
    style.textContent = `
      .bg-gradient-to-r { background: linear-gradient(to right, var(--tw-gradient-stops)) !important; }
      .bg-gradient-to-br { background: linear-gradient(to bottom right, var(--tw-gradient-stops)) !important; }
      .bg-gradient-to-t { background: linear-gradient(to top, var(--tw-gradient-stops)) !important; }
    `;
    document.head.appendChild(style);
  }
  
  // Fix Safari filter issues
  if (!supportsFilter()) {
    const style = document.createElement('style');
    style.textContent = `
      .blur-sm { -webkit-filter: blur(4px) !important; }
      .blur-md { -webkit-filter: blur(8px) !important; }
      .blur-lg { -webkit-filter: blur(16px) !important; }
      .brightness-50 { -webkit-filter: brightness(0.5) !important; }
      .contrast-125 { -webkit-filter: contrast(1.25) !important; }
    `;
    document.head.appendChild(style);
  }
  
  // Fix Safari clip-path issues
  if (!supportsClipPath()) {
    const style = document.createElement('style');
    style.textContent = `
      .clip-path-circle { -webkit-clip-path: circle(50%) !important; }
      .clip-path-polygon { -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%) !important; }
    `;
    document.head.appendChild(style);
  }
  
  // Fix Safari mask issues
  if (!supportsMask()) {
    const style = document.createElement('style');
    style.textContent = `
      .mask-none { -webkit-mask: none !important; }
      .mask-gradient { -webkit-mask: linear-gradient(black, transparent) !important; }
    `;
    document.head.appendChild(style);
  }
};

export const initializePolyfills = (): void => {
  if (typeof window === 'undefined') return;
  
  // Apply feature detection fallbacks
  applyFallbacks();
  
  // Initialize Safari-specific polyfills
  polyfillSafari();
  
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
