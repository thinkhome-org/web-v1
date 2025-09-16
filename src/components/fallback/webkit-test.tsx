"use client";

import { useWebKit } from "@/hooks/use-webkit";

export function WebKitTest() {
  const { isWebKit, isSafari, isChrome, isEdge, isMac, isIOS } = useWebKit();

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        WebKit Test
      </h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span>WebKit</span>
          <span className="flex items-center gap-2">
            {isWebKit ? "✅" : "❌"}
            {isWebKit ? "Detekován" : "Nedetekován"}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span>Safari</span>
          <span className="flex items-center gap-2">
            {isSafari ? "✅" : "❌"}
            {isSafari ? "Detekován" : "Nedetekován"}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span>Chrome</span>
          <span className="flex items-center gap-2">
            {isChrome ? "✅" : "❌"}
            {isChrome ? "Detekován" : "Nedetekován"}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span>Edge</span>
          <span className="flex items-center gap-2">
            {isEdge ? "✅" : "❌"}
            {isEdge ? "Detekován" : "Nedetekován"}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span>Mac</span>
          <span className="flex items-center gap-2">
            {isMac ? "✅" : "❌"}
            {isMac ? "Detekován" : "Nedetekován"}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span>iOS</span>
          <span className="flex items-center gap-2">
            {isIOS ? "✅" : "❌"}
            {isIOS ? "Detekován" : "Nedetekován"}
          </span>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
          WebKit Status
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {isWebKit ? (
            isSafari ? (
              isMac ? (
                "Safari na Mac - aktivní WebKit opravy"
              ) : isIOS ? (
                "Safari na iOS - aktivní WebKit opravy"
              ) : (
                "Safari na jiné platformě - aktivní WebKit opravy"
              )
            ) : (
              "WebKit prohlížeč - aktivní WebKit opravy"
            )
          ) : (
            "Ne-WebKit prohlížeč - standardní zobrazení"
          )}
        </p>
      </div>
    </div>
  );
}
