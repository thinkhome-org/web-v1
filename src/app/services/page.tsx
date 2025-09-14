"use client";

import { useState } from "react";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";

interface ServiceProps {
  title: string;
  children: React.ReactNode;
}

function Service({ title, children }: ServiceProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border pb-4">
      <button
        type="button"
        className="w-full text-left flex justify-between items-center group"
        onClick={() => setOpen((o) => !o)}
      >
        <h2 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h2>
        <span className="ml-4 text-xl text-muted-foreground">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div className="mt-3 text-muted-foreground text-lg leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="">
      <div className="relative max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-extrabold mb-10 text-foreground drop-shadow-lg">
          Naše služby
        </h1>

        <div className="space-y-6 relative z-10">
          <Service title="Turn-key IT management a Vzdálená správa">
            Kompletní péče o vaše IT prostředí včetně vzdáleného dohledu a
            podpory. Minimalizujeme výpadky, řešíme i drobnosti na dálku.
          </Service>

          <Service title="Repasování PC a notebooků">
            Výkup, repas a instalace spolehlivé techniky. Ekologické řešení pro
            každou firmu.
          </Service>

          <Service title="Webové systémy">
            <p>
              Kompletní tvorba webů včetně textů, grafiky i správy. Nabízíme dvě
              varianty podle potřeb klienta:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <strong>Next.js – ADVANCED:</strong> Moderní pokročilá webová
                řešení, vysoká rychlost, bezpečnost, škálovatelnost.
              </li>
              <li>
                <strong>WordPress/BrakeDance – STANDARD:</strong> Rychlé a
                flexibilní nasazení webu, snadná editace obsahu, vhodné pro
                menší i střední projekty.
              </li>
            </ul>
          </Service>

          <Service title="Backup, emaily, privátní cloud/server">
            Pravidelné zálohování, firemní e-maily, privátní cloud nebo vlastní
            server podle vašich potřeb.
          </Service>

          <Service title="Podpora Google Workspace, Microsoft 365, ZoHo">
            Správa, nastavení i školení pro nejpoužívanější firemní platformy.
          </Service>

          <Service title="Kamerové systémy, tiskárny, sítě a WiFi (Unifi), private NAS">
            Komplexní instalace a správa firemní infrastruktury – od sítí a WiFi
            přes tiskárny a kamery až po privátní síťové úložiště (NAS).
          </Service>

          <Service title="Licenční systémy, poradenství">
            Pomůžeme s výběrem i správou všech potřebných licencí.
          </Service>

          <Service title="Školení zaměstnanců (vč. bezpečnosti)">
            Školíme v oblasti efektivity práce s IT i kybernetické bezpečnosti,
            práce s e-mailem a vnitrofiremní ochraně dat.
          </Service>

          <Service title="Bezpečnostní audit a penetrační testy">
            Prověříme bezpečnost vašeho IT, odhalíme slabá místa a připravíme
            nápravná opatření.
          </Service>

          <Service title="AI & Chatboti na míru">
            Vytváříme firemní AI řešení, postupnou automatizaci i inteligentní
            chatboty přesně dle požadavků.
          </Service>
        </div>
      </div>
      <InteractiveGridPattern className="absolute inset-0 z-0 opacity-10" />
    </main>
  );
}
