"use client";

import { useState } from "react";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { 
  spacing, 
  typography, 
  animations 
} from "@/lib/design-system";
import { Title, Subtitle, Section, Body } from "@/components/ui/text";

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
        style={{
          transition: `color ${animations.duration[200]} ${animations.easing.out}`,
        }}
      >
        <Section 
          color="title" 
          mode="light"
          className="group-hover:text-primary"
        >
          {title}
        </Section>
        <span 
          className="text-muted-foreground"
          style={{
            marginLeft: spacing[4],
            fontSize: typography.fontSize.xl,
          }}
        >
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <Body 
          color="secondary" 
          mode="light"
          style={{ marginTop: spacing[3] }}
        >
          {children}
        </Body>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="">
      <div 
        className="relative max-w-4xl mx-auto relative z-10"
        style={{
          paddingLeft: spacing[6],
          paddingRight: spacing[6],
          paddingTop: spacing[12],
          paddingBottom: spacing[12],
        }}
      >
        <Title 
          color="title" 
          mode="light"
          className="drop-shadow-lg"
          style={{ marginBottom: spacing[10] }}
        >
          Naše služby
        </Title>

        <div 
          className="relative z-10"
          style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}
        >
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
