"use client";

import { useSafariFixes } from "@/hooks/use-safari-fixes";

export function SafariTest() {
  const { isSafari, safariVersion, needsFixes, totalIssues } = useSafariFixes();

  if (!isSafari) {
    return (
      <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-200">
          ✅ Ne-Safari prohlížeč
        </h2>
        <p className="text-green-700 dark:text-green-300">
          Používáte ne-Safari prohlížeč. Všechny funkce by měly fungovat normálně.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
      <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-200">
        🍎 Safari Test
      </h2>
      
      <div className="mb-4">
        <p className="text-blue-700 dark:text-blue-300">
          <strong>Verze Safari:</strong> {safariVersion || 'Neznámá'}
        </p>
        <p className="text-blue-700 dark:text-blue-300">
          <strong>Celkové problémy:</strong> {totalIssues}
        </p>
      </div>
      
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200">
          Detekované problémy:
        </h3>
        
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className={`p-2 rounded ${needsFixes.flexbox ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200' : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'}`}>
            {needsFixes.flexbox ? '❌' : '✅'} Flexbox
          </div>
          
          <div className={`p-2 rounded ${needsFixes.grid ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200' : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'}`}>
            {needsFixes.grid ? '❌' : '✅'} CSS Grid
          </div>
          
          <div className={`p-2 rounded ${needsFixes.backdropFilter ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200' : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'}`}>
            {needsFixes.backdropFilter ? '❌' : '✅'} Backdrop Filter
          </div>
          
          <div className={`p-2 rounded ${needsFixes.transform ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200' : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'}`}>
            {needsFixes.transform ? '❌' : '✅'} Transform
          </div>
          
          <div className={`p-2 rounded ${needsFixes.transition ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200' : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'}`}>
            {needsFixes.transition ? '❌' : '✅'} Transition
          </div>
          
          <div className={`p-2 rounded ${needsFixes.borderRadius ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200' : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'}`}>
            {needsFixes.borderRadius ? '❌' : '✅'} Border Radius
          </div>
          
          <div className={`p-2 rounded ${needsFixes.boxShadow ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200' : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'}`}>
            {needsFixes.boxShadow ? '❌' : '✅'} Box Shadow
          </div>
          
          <div className={`p-2 rounded ${needsFixes.textSelection ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200' : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'}`}>
            {needsFixes.textSelection ? '❌' : '✅'} Text Selection
          </div>
          
          <div className={`p-2 rounded ${needsFixes.scrollbar ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200' : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'}`}>
            {needsFixes.scrollbar ? '❌' : '✅'} Scrollbar
          </div>
          
          <div className={`p-2 rounded ${needsFixes.focusVisible ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200' : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'}`}>
            {needsFixes.focusVisible ? '❌' : '✅'} Focus Visible
          </div>
          
          <div className={`p-2 rounded ${needsFixes.animation ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200' : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'}`}>
            {needsFixes.animation ? '❌' : '✅'} Animation
          </div>
          
          <div className={`p-2 rounded ${needsFixes.gradient ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200' : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'}`}>
            {needsFixes.gradient ? '❌' : '✅'} Gradient
          </div>
          
          <div className={`p-2 rounded ${needsFixes.filter ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200' : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'}`}>
            {needsFixes.filter ? '❌' : '✅'} Filter
          </div>
          
          <div className={`p-2 rounded ${needsFixes.clipPath ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200' : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'}`}>
            {needsFixes.clipPath ? '❌' : '✅'} Clip Path
          </div>
          
          <div className={`p-2 rounded ${needsFixes.mask ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200' : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'}`}>
            {needsFixes.mask ? '❌' : '✅'} Mask
          </div>
          
          <div className={`p-2 rounded ${needsFixes.sticky ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200' : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'}`}>
            {needsFixes.sticky ? '❌' : '✅'} Sticky
          </div>
        </div>
      </div>
      
      {totalIssues > 0 && (
        <div className="mt-4 p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded border border-yellow-300 dark:border-yellow-700">
          <p className="text-yellow-800 dark:text-yellow-200 text-sm">
            <strong>Poznámka:</strong> Detekováno {totalIssues} problémů v Safari. 
            Aplikace automaticky aplikuje polyfilly a opravy pro lepší kompatibilitu.
          </p>
        </div>
      )}
    </div>
  );
}
