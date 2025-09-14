/**
 * Příklad použití centralizovaného design systému
 * Tento soubor ukazuje, jak používat design systém v komponentách
 */

import React from 'react';
import { 
  colors, 
  typography, 
  spacing, 
  borderRadius, 
  shadows,
  animations,
  getColor,
  getSpacing,
  getTypography,
  getBreakpoint,
  getTextStyle,
  getTextColor
} from './design-system';
import { 
  Title, 
  Subtitle, 
  Section, 
  Body, 
  Link, 
  Code, 
  Quote,
  Button,
  Large,
  Small
} from '@/components/ui/text';

// Příklad komponenty používající design systém
export const DesignSystemExample = () => {
  return (
    <div 
      style={{
        // Použití barev z design systému
        backgroundColor: getColor('background', 'light'),
        color: getColor('foreground', 'light'),
        padding: getSpacing(8),
        borderRadius: borderRadius.lg,
        boxShadow: shadows.lg,
        fontFamily: typography.fontFamily.sans.join(', '),
        fontSize: getTypography('lg'),
        fontWeight: getTypography('semibold'),
        transition: animations.transition.all,
      }}
    >
      <Title color="title" mode="light">
        Design System Příklad
      </Title>
      
      <Body color="secondary" mode="light" style={{ marginBottom: getSpacing(6) }}>
        Tato komponenta demonstruje použití centralizovaného design systému.
        Všechny barvy, fonty, mezery a další hodnoty pocházejí z jednoho místa.
      </Body>
      
      <div style={{
        display: 'flex',
        gap: getSpacing(4),
        flexWrap: 'wrap'
      }}>
        <button style={{
          backgroundColor: getColor('primary', 'light'),
          color: getColor('primaryForeground', 'light'),
          padding: `${getSpacing(2)} ${getSpacing(4)}`,
          borderRadius: borderRadius.md,
          border: 'none',
          cursor: 'pointer',
          transition: animations.transition.colors,
        }}>
          <Button color="body" mode="light">
            Primární tlačítko
          </Button>
        </button>
        
        <button style={{
          backgroundColor: getColor('secondary', 'light'),
          color: getColor('secondaryForeground', 'light'),
          padding: `${getSpacing(2)} ${getSpacing(4)}`,
          borderRadius: borderRadius.md,
          border: 'none',
          cursor: 'pointer',
          transition: animations.transition.colors,
        }}>
          <Button color="body" mode="light">
            Sekundární tlačítko
          </Button>
        </button>
      </div>
    </div>
  );
};

// Příklad Tailwind CSS tříd s design systémem
export const TailwindExample = () => {
  return (
    <div className="bg-background text-foreground p-8 rounded-lg shadow-lg font-sans text-lg font-semibold transition-all">
      <h2 className="text-2xl font-bold mb-4 text-primary">
        Tailwind CSS s Design System
      </h2>
      
      <p className="text-base leading-relaxed text-muted-foreground mb-6">
        Tailwind CSS třídy automaticky používají hodnoty z design systému
        definované v CSS proměnných.
      </p>
      
      <div className="flex gap-4 flex-wrap">
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors">
          Primární tlačítko
        </button>
        
        <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors">
          Sekundární tlačítko
        </button>
      </div>
    </div>
  );
};

// Příklad responsive designu s breakpointy
export const ResponsiveExample = () => {
  return (
    <div 
      style={{
        padding: getSpacing(4),
      }}
      className={`
        ${getBreakpoint('sm')} { padding: ${getSpacing(6)}; }
        ${getBreakpoint('md')} { padding: ${getSpacing(8)}; }
        ${getBreakpoint('lg')} { padding: ${getSpacing(12)}; }
      `}
    >
      <Section color="title" mode="light">
        Responsive Design s Design System
      </Section>
      
      <Body color="body" mode="light">
        Tato komponenta používá breakpointy z design systému pro responsive design.
      </Body>
    </div>
  );
};

// Příklad textových stylů
export const TypographyExample = () => {
  return (
    <div style={{ padding: getSpacing(8) }}>
      <Title color="title" mode="light">
        Typography Showcase
      </Title>
      
      <Subtitle color="subtitle" mode="light">
        Různé typy textu v design systému
      </Subtitle>
      
      <Section color="title" mode="light">
        Sekční nadpis
      </Section>
      
      <Body color="body" mode="light">
        Toto je běžný text v design systému. Obsahuje všechny potřebné styly pro konzistentní vzhled.
      </Body>
      
      <Large color="body" mode="light">
        Toto je větší text pro důležité informace.
      </Large>
      
      <Small color="secondary" mode="light">
        Malý text pro sekundární informace.
      </Small>
      
      <div style={{ marginTop: getSpacing(4) }}>
        <Link href="#" color="link" mode="light">
          Toto je odkaz s hover efektem
        </Link>
      </div>
      
      <div style={{ marginTop: getSpacing(4) }}>
        <Code color="body" mode="light">
          console.log('Hello World');
        </Code>
      </div>
      
      <Quote color="secondary" mode="light">
        "Design is not just what it looks like and feels like. Design is how it works."
      </Quote>
    </div>
  );
};
