"use client";

import { useBrowserSupport } from "@/hooks/use-browser-support";

export function BrowserCompatibilityTest() {
  const support = useBrowserSupport();

  const getStatusIcon = (supported: boolean) => supported ? "✅" : "❌";
  const getStatusText = (supported: boolean) => supported ? "Podporováno" : "Nepodporováno";

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Test kompatibility prohlížeče
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* CSS Features */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            CSS funkce
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span>CSS proměnné</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.cssVariables)}
                {getStatusText(support.cssVariables)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Flexbox</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.flexbox)}
                {getStatusText(support.flexbox)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>CSS Grid</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.cssGrid)}
                {getStatusText(support.cssGrid)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Backdrop Filter</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.backdropFilter)}
                {getStatusText(support.backdropFilter)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Transform</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.transform)}
                {getStatusText(support.transform)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Transition</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.transition)}
                {getStatusText(support.transition)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Border Radius</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.borderRadius)}
                {getStatusText(support.borderRadius)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Box Shadow</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.boxShadow)}
                {getStatusText(support.boxShadow)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Animation</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.animation)}
                {getStatusText(support.animation)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Gradient</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.gradient)}
                {getStatusText(support.gradient)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Filter</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.filter)}
                {getStatusText(support.filter)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Clip Path</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.clipPath)}
                {getStatusText(support.clipPath)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Mask</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.mask)}
                {getStatusText(support.mask)}
              </span>
            </div>
          </div>
        </div>

        {/* JavaScript APIs */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            JavaScript API
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span>Intersection Observer</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.intersectionObserver)}
                {getStatusText(support.intersectionObserver)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Resize Observer</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.resizeObserver)}
                {getStatusText(support.resizeObserver)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Mutation Observer</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.mutationObserver)}
                {getStatusText(support.mutationObserver)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Performance API</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.performance)}
                {getStatusText(support.performance)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Request Animation Frame</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.requestAnimationFrame)}
                {getStatusText(support.requestAnimationFrame)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Local Storage</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.localStorage)}
                {getStatusText(support.localStorage)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Session Storage</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.sessionStorage)}
                {getStatusText(support.sessionStorage)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>WebGL</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.webgl)}
                {getStatusText(support.webgl)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>WebGL2</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.webgl2)}
                {getStatusText(support.webgl2)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Canvas</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.canvas)}
                {getStatusText(support.canvas)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>SVG</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.svg)}
                {getStatusText(support.svg)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Touch Events</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.touch)}
                {getStatusText(support.touch)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Pointer Events</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.pointerEvents)}
                {getStatusText(support.pointerEvents)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Device Orientation</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.deviceOrientation)}
                {getStatusText(support.deviceOrientation)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Geolocation</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.geolocation)}
                {getStatusText(support.geolocation)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Notification</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.notification)}
                {getStatusText(support.notification)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Service Worker</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.serviceWorker)}
                {getStatusText(support.serviceWorker)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>WebRTC</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.webrtc)}
                {getStatusText(support.webrtc)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>WebSocket</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.websocket)}
                {getStatusText(support.websocket)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>WebAssembly</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.webassembly)}
                {getStatusText(support.webassembly)}
              </span>
            </div>
          </div>
        </div>

        {/* ES Features */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            ES funkce
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span>ES6</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.es6)}
                {getStatusText(support.es6)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>ES2017</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.es2017)}
                {getStatusText(support.es2017)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>ES2018</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.es2018)}
                {getStatusText(support.es2018)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>ES2019</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.es2019)}
                {getStatusText(support.es2019)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>ES2020</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.es2020)}
                {getStatusText(support.es2020)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>ES2021</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.es2021)}
                {getStatusText(support.es2021)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>ES2022</span>
              <span className="flex items-center gap-2">
                {getStatusIcon(support.es2022)}
                {getStatusText(support.es2022)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
          Shrnutí kompatibility
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Tento test zobrazuje podporu různých funkcí ve vašem prohlížeči. 
          Pokud je nějaká funkce nepodporována, aplikace automaticky použije fallback řešení.
        </p>
      </div>
    </div>
  );
}

