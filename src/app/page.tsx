import { IconMail, IconPhone } from "@tabler/icons-react";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { CopyText } from "@/components/copyText";
import { Hero } from "@/app/components/hero";
import { MiseCile } from "@/app/components/mise_cile";
export default function mainPage() {
  return (
    <>
      <Hero></Hero>
      <div className="w-full bg-black text-white py-16 px-4 sm:px-8 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Naše služby
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Kompletní IT řešení pro váš business
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">IT Správa</h3>
              <p className="text-gray-400">Kompletní správa vaší IT infrastruktury</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Webové stránky</h3>
              <p className="text-gray-400">Moderní a responzivní webové řešení</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Bezpečnost</h3>
              <p className="text-gray-400">Ochrana vašich dat a systémů</p>
            </div>
          </div>
        </div>
      </div>
      <MiseCile></MiseCile>
    </>
  );
}
``
