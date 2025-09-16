"use client";

import { Hero } from "@/components/layout/hero";
import { MiseCile } from "@/components/sections/mission-goals";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { CopyText } from "@/components/copy-text";
import { TeamMemberCard, type TeamMember } from "@/components/ui/team-member-card";
import { ContactForm } from "@/components/ui/contact-form";
import { ServiceCard, servicesData } from "@/components/ui/service-card";
import { useState, useEffect } from 'react';
import { IconMail, IconPhone, IconMapPin, IconClock, IconUsers, IconArrowRight } from "@tabler/icons-react";


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
  
  useEffect(() => {
    async function loadData() {
      try {
        // Load team data
        const teamResponse = await fetch('/team/source.csv');
        const csvContent = await teamResponse.text();
        const members = parseCSV(csvContent);
        setTeamMembers(members);
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
      <section id="services" className="relative scroll-mt-20 py-20 webkit-no-bg">
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 text-foreground drop-shadow-lg">
              Naše služby
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Kompletní IT řešení pro vaši firmu. Od správy infrastruktury až po moderní webové aplikace.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                className="h-full webkit-no-bg"
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium">
              <span>Potřebujete konzultaci?</span>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-1 hover:gap-2 transition-all duration-200 hover:text-primary/80"
              >
                Kontaktujte nás
                <IconArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <InteractiveGridPattern className="absolute inset-0 z-0 opacity-10 webkit-no-grid" />
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
      <section id="contact" className="relative min-h-screen bg-background scroll-mt-20">
        <div className="container mx-auto px-4 py-12 lg:py-20">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Kontaktujte nás
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Máte dotaz nebo potřebujete konzultaci? Rádi vám pomůžeme s vašimi IT potřebami. 
              Jsme tu pro vás každý pracovní den.
            </p>
          </div>

          {/* Why Choose Us */}
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
              email: "info@thinkhome.org",
              phone: "+420 910 129 289",
              address: "Praha, Česká republika"
            }}
          />
        </div>
        <InteractiveGridPattern className="z-0 opacity-10" />
      </section>

    </>
  );
}
