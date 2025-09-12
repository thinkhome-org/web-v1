'use client';

import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { IconUser } from "@tabler/icons-react";
import { useState, useEffect } from 'react';

interface TeamMember {
  name: string;
  email: string;
  role: string;
  description: string;
  phone: string;
  photo_location: string;
  tag: string;
  department: string;
}

function parseCSV(csvContent: string): TeamMember[] {
  const lines = csvContent.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  
  // Mapping Czech headers to English property names
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
    // Handle CSV parsing with quoted values containing commas
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

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadTeamData() {
      try {
        const response = await fetch('/tym/source.csv');
        const csvContent = await response.text();
        const members = parseCSV(csvContent);
        setTeamMembers(members);
      } catch (error) {
        console.error('Error loading team data:', error);
      } finally {
        setLoading(false);
      }
    }
    
    loadTeamData();
  }, []);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-foreground text-xl">Loading team data...</div>
      </div>
    );
  }
  
  return (
    <main className="relative min-h-screen flex flex-col bg-background">
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold text-neutral-300 mb-4">
          Členové týmu
        </h1>
        <p className="text-neutral-400 mb-8 w-2/3 mx-auto">
          Poznejte náš tým odborníků, kteří vám pomohou s IT řešeními
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member: TeamMember, index: number) => (
            <div
              key={`${member.name}-${index}`}
              className="group p-6 rounded-lg bg-card/80 border border-border hover:border-muted-foreground/20 transition-all duration-300 backdrop-blur-md z-10"
            >
              <div className="flex flex-col items-center gap-4 h-full">
                <div className="relative w-14 h-14 rounded-lg bg-muted/90 group-hover:bg-muted/80 transition-colors backdrop-blur-sm overflow-hidden">
                  {member.photo_location && member.photo_location !== '' ? (
                    <img 
                      src={member.photo_location.startsWith('/') ? member.photo_location : `/tym/pictures/${member.photo_location}`} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  <IconUser className={`w-8 h-8 text-foreground absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${member.photo_location && member.photo_location !== '' ? 'hidden' : ''}`} />
                </div>
                <div className="text-center flex-1">
                  <h2 className="text-xl font-bold text-foreground mb-2">
                    {member.name}
                  </h2>
                  <p className="text-blue-400 font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {member.description}
                  </p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <p>{member.email}</p>
                    <p>{member.phone}</p>
                    <p className="font-medium">{member.department}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <InteractiveGridPattern className="z-0 opacity-10" />
    </main>
  );
}
