import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-start p-8 text-center bg-background relative">
      {/* Page heading */}
      <h1 className="text-5xl font-extrabold mb-10 text-white drop-shadow-lg">
        Naše služby
      </h1>
      <div className="max-w-4xl w-full text-left space-y-10">
        {/* Service group */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-200 mb-3">
            Turn-key IT management a Vzdálená správa
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Kompletní péče o vaše IT prostředí včetně vzdáleného dohledu a
            podpory. Minimalizujeme výpadky, řešíme i drobnosti na dálku.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-200 mb-3">
            Repasování PC a notebooků
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Výkup, repas a instalace spolehlivé techniky. Ekologické řešení pro
            každou firmu.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-200 mb-3">
            Webové systémy
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-2">
            Kompletní tvorba webů včetně textů, grafiky i správy. Nabízíme dvě
            varianty podle potřeb klienta:
          </p>
          <ul className="list-disc list-inside text-gray-300 text-lg space-y-1">
            <li>
              <strong>Next.js – ADVANCED:</strong> Moderní pokročilá webová
              řešení, vysoká rychlost, bezpečnost, škálovatelnost.
            </li>
            <li>
              <strong>WordPress/BrakeDance – STANDARD:</strong> Rychlé a
              flexibilní nasazení webu, snadná editace obsahu, vhodné pro menší
              i střední projekty.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-200 mb-3">
            Backup, emaily, privátní cloud/server
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Pravidelné zálohování, firemní e-maily, privátní cloud nebo vlastní
            server podle vašich potřeb.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-200 mb-3">
            Podpora Google Workspace, Microsoft 365, ZoHo
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Správa, nastavení i školení pro nejpoužívanější firemní platformy.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-200 mb-3">
            Kamerové systémy, tiskárny, sítě a WiFi (Unifi), private NAS
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Komplexní instalace a správa firemní infrastruktury – od sítí a WiFi
            přes tiskárny a kamery až po privátní síťové úložiště (NAS).
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-200 mb-3">
            Licenční systémy, poradenství
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Pomůžeme s výběrem i správou všech potřebných licencí.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-200 mb-3">
            Školení zaměstnanců (vč. bezpečnosti)
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Školíme v oblasti efektivity práce s IT i kybernetické bezpečnosti,
            práce s e-mailem a vnitrofiremní ochraně dat.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-200 mb-3">
            Bezpečnostní audit a penetrační testy
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Prověříme bezpečnost vašeho IT, odhalíme slabá místa a připravíme
            nápravná opatření.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-200 mb-3">
            AI & Chatboti na míru
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Vytváříme firemní AI řešení, postupnou automatizaci i inteligentní
            chatboty přesně dle požadavků.
          </p>
        </div>
      </div>
      <InteractiveGridPattern className="absolute inset-0 z-0 opacity-10" />
    </main>
  );
}
