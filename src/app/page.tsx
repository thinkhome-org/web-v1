"use client";

import { Hero } from "@/components/layout/hero";
import { MiseCile } from "@/components/sections/mission-goals";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { CopyText } from "@/components/copy-text";
import { TeamMemberCard, type TeamMember } from "@/components/ui/team-member-card";
import { useState, useEffect } from 'react';
import { IconMail, IconPhone } from "@tabler/icons-react";
import Link from "next/link";
import MarkdownRenderer from "@/components/markdown-renderer";
import { getMarkdownContent, getMarkdownFilename } from "@/lib/markdown";

// Services component
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

// Contact ways data
const contactWays = [
  {
    icon: IconMail,
    value: "info@thinkhome.org",
  },
  {
    icon: IconPhone,
    value: "+420 910 129 289",
  },
];

// Team data parsing function
function parseCSV(csvContent: string): TeamMember[] {
  const lines = csvContent.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  
  const headerMapping: { [key: string]: string } = {
    'jmeno': 'name',
    'email': 'email',
    'role': 'role',
    'popis': 'description',
    'telefon': 'phone',
    'foto': 'photo_location',
    'tag': 'tag',
    'oddeleni': 'department'
  };
  
  return lines.slice(1).map(line => {
    const values: string[] = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim());
    
    const member: any = {};
    
    headers.forEach((header, index) => {
      const mappedHeader = headerMapping[header.toLowerCase()] || header.toLowerCase();
      member[mappedHeader] = values[index] || '';
    });
    
    return member as TeamMember;
  });
}

export default function MainPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [legalContent, setLegalContent] = useState<{
    terms: string;
    privacy: string;
    cookies: string;
  }>({ terms: '', privacy: '', cookies: '' });
  
  useEffect(() => {
    async function loadData() {
      try {
        // Load team data
        const teamResponse = await fetch('/team/source.csv');
        const csvContent = await teamResponse.text();
        const members = parseCSV(csvContent);
        setTeamMembers(members);

        // Load legal content
        try {
          const termsContent = await getMarkdownContent(getMarkdownFilename('terms-of-service'));
          const privacyContent = await getMarkdownContent(getMarkdownFilename('privacy-policy'));
          const cookiesContent = await getMarkdownContent(getMarkdownFilename('cookies'));
          
          setLegalContent({
            terms: termsContent,
            privacy: privacyContent,
            cookies: cookiesContent
          });
        } catch (error) {
          console.error('Error loading legal content:', error);
          // Set fallback content
          setLegalContent({
            terms: '# Všeobecné obchodní podmínky\n\n*Obsah se načítá...*',
            privacy: '# Ochrana soukromí\n\n*Obsah se načítá...*',
            cookies: '# Zásady používání cookies\n\n*Obsah se načítá...*'
          });
        }
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    }
    
    loadData();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="scroll-mt-20">
        <Hero />
      </section>

      {/* Mission & Goals Section */}
      <section id="mission" className="scroll-mt-20">
        <MiseCile />
      </section>

      {/* Services Section */}
      <section id="services" className="relative scroll-mt-20">
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
      </section>

      {/* Team Section */}
      <section id="team" className="relative min-h-screen flex flex-col bg-background scroll-mt-20">
        <div className="p-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Členové týmu
          </h1>
          <p className="text-muted-foreground mb-8 w-2/3 mx-auto">
            Poznejte náš tým odborníků, kteří vám pomohou s IT řešeními
          </p>

          {loading ? (
            <div className="text-foreground text-xl">Loading team data...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {teamMembers.map((member: TeamMember, index: number) => (
                <TeamMemberCard
                  key={`${member.name}-${index}`}
                  member={member}
                />
              ))}
            </div>
          )}
        </div>
        <InteractiveGridPattern className="z-0 opacity-10" />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative min-h-screen flex flex-col bg-background scroll-mt-20">
        <div className="flex-1 p-8 text-center flex flex-col items-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pl-0 sm:pl-6 lg:pl-12 text-foreground p-3">
            Kontaktujte nás
          </h1>
          <p className="text-muted-foreground pl-0 sm:pl-6 lg:pl-12 w-full sm:w-5/6 lg:w-2/3 pb-3">
            Nevíte si rady? Chcete si poztěžovat?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
            {contactWays.map((way, index) => {
              const Icon = way.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-lg bg-card/60 border border-border hover:border-muted-foreground/20 transition-all duration-300 backdrop-blur-xl z-10 hover:scale-105 transform-gpu"
                >
                  <div className="flex flex-col items-center justify-center gap-4 h-full">
                    <div className="p-3 rounded-lg bg-muted/70 group-hover:bg-muted/60 transition-colors backdrop-blur-lg">
                      <Icon className="h-6 w-6 text-foreground" />
                    </div>
                    <CopyText
                      text={way.value}
                      className="text-blue-400 text-lg text-center"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <InteractiveGridPattern className="z-0 opacity-10" />
        </div>
      </section>

      {/* Legal Section */}
      <section id="legal" className="max-w-4xl mx-auto p-8 space-y-6 scroll-mt-20">
        <h1 className="text-4xl font-bold text-foreground mb-6">
          Právní informace
        </h1>
        <p className="text-lg text-muted-foreground">
          Zde najdete všechny naše důležité právní dokumenty týkající se služeb
          ThinkHome s.r.o.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Všeobecné obchodní podmínky
            </h2>
            <div className="prose prose-invert max-w-none">
              <MarkdownRenderer content={legalContent.terms} />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Ochrana soukromí
            </h2>
            <div className="prose prose-invert max-w-none">
              <MarkdownRenderer content={legalContent.privacy} />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Zásady používání cookies
            </h2>
            <div className="prose prose-invert max-w-none">
              <MarkdownRenderer content={legalContent.cookies} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
