"use client";

// ============================================================================
// IMPORTS
// ============================================================================

import { Hero } from "@/components/layout/hero";
import { MiseCile } from "@/components/sections/mission-goals";
import { CopyText } from "@/components/copy-text";
import { TeamMemberCard } from "@/components/ui/team-member-card";
import { ContactForm } from "@/components/ui/contact-form";
import { ServiceCard, servicesData } from "@/components/ui/service-card";
import { useTeamData } from "@/hooks/use-team-data";
import { NAVIGATION_ITEMS, CONTACT_INFO } from "@/lib/constants";
import { IconMail, IconPhone, IconMapPin, IconClock, IconUsers, IconArrowRight } from "@tabler/icons-react";

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

/**
 * MainPage - Hlavní stránka aplikace ThinkHome
 * 
 * Obsahuje všechny hlavní sekce:
 * - Hero sekce s hlavním sdělením
 * - Mise a cíle společnosti
 * - Přehled služeb
 * - Tým zaměstnanců
 * - Kontaktní formulář
 * 
 * @returns JSX element hlavní stránky
 */
export default function MainPage() {
  // Načítání dat týmu pomocí custom hooku
  const { teamMembers, loading: teamLoading, error: teamError } = useTeamData();

  return (
    <>
      {/* ========================================================================
          HERO SECTION - Hlavní sekce s úvodním sdělením
          ======================================================================== */}
      <section id={NAVIGATION_ITEMS[0].id} className="scroll-mt-20">
        <Hero />
      </section>

      {/* ========================================================================
          MISSION & GOALS SECTION - Mise a cíle společnosti
          ======================================================================== */}
      <section id={NAVIGATION_ITEMS[1].id} className="scroll-mt-20">
        <MiseCile />
      </section>

      {/* ========================================================================
          SERVICES SECTION - Přehled služeb
          ======================================================================== */}
      <section id={NAVIGATION_ITEMS[2].id} className="relative scroll-mt-20 py-20">
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 text-foreground">
              {NAVIGATION_ITEMS[2].label}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Kompletní IT řešení pro vaši firmu. Od správy infrastruktury až po moderní webové aplikace.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={`service-${index}`}
                title={service.title}
                description={service.description}
                icon={service.icon}
                className="h-full"
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-primary font-medium">
              <span>Potřebujete konzultaci?</span>
              <a 
                href={`#${NAVIGATION_ITEMS[4].id}`}
                className="inline-flex items-center gap-1 hover:gap-2 transition-all duration-200 hover:text-primary/80"
                aria-label={NAVIGATION_ITEMS[4].description}
              >
                {NAVIGATION_ITEMS[4].label}
                <IconArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          TEAM SECTION - Tým zaměstnanců
          ======================================================================== */}
      <section id={NAVIGATION_ITEMS[3].id} className="relative min-h-screen flex flex-col bg-background scroll-mt-20">
        <div className="p-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {NAVIGATION_ITEMS[3].label}
          </h1>
          <p className="text-muted-foreground mb-8 w-2/3 mx-auto">
            Poznejte náš tým odborníků, kteří vám pomohou s IT řešeními
          </p>

          {/* Team Loading State */}
          {teamLoading ? (
            <div className="text-foreground text-xl">Načítání týmu...</div>
          ) : teamError ? (
            <div className="text-red-500 text-xl">Chyba při načítání týmu: {teamError}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <TeamMemberCard
                  key={`team-member-${member.name}-${index}`}
                  member={member}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================
          CONTACT SECTION - Kontaktní formulář a informace
          ======================================================================== */}
      <section id={NAVIGATION_ITEMS[4].id} className="relative min-h-screen bg-background scroll-mt-20">
        <div className="container mx-auto px-4 py-12 lg:py-20">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {NAVIGATION_ITEMS[4].label}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Máte dotaz nebo potřebujete konzultaci? Rádi vám pomůžeme s vašimi IT potřebami. 
              Jsme tu pro vás každý pracovní den.
            </p>
          </div>

          {/* Why Choose Us - Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 lg:mb-16">
            <div className="text-center p-6 rounded-lg bg-card/50 border border-border hover:border-primary/20 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <IconClock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Rychlá odpověď</h3>
              <p className="text-sm text-muted-foreground">
                Odpovídáme do 24 hodin, často i dříve
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-card/50 border border-border hover:border-primary/20 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <IconUsers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Osobní přístup</h3>
              <p className="text-sm text-muted-foreground">
                Každý klient má svého dedikovaného specialistu
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-card/50 border border-border hover:border-primary/20 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <IconMapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Lokální podpora</h3>
              <p className="text-sm text-muted-foreground">
                Působíme v celé České republice
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm 
            contactInfo={{
              email: CONTACT_INFO.email,
              phone: CONTACT_INFO.phone,
              address: CONTACT_INFO.address
            }}
          />
        </div>
      </section>

      {/* ========================================================================
          COPY TEXT COMPONENT - Komponenta pro kopírování textu
          ======================================================================== */}
      <CopyText text="ThinkHome - Moderní IT bez starostí" />
    </>
  );
}
