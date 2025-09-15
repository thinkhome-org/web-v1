'use client';


import { TeamMemberCard, type TeamMember } from "@/components/ui/team-member-card";
import { useState, useEffect } from 'react';



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
        const response = await fetch('/team/source.csv');
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
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Členové týmu
        </h1>
        <p className="text-muted-foreground mb-8 w-2/3 mx-auto">
          Poznejte náš tým odborníků, kteří vám pomohou s IT řešeními
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member: TeamMember, index: number) => (
            <TeamMemberCard
              key={`${member.name}-${index}`}
              member={member}
            />
          ))}
        </div>
      </div>


    </main>
  );
}
