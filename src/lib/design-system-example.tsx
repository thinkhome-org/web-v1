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
  getBreakpoint
} from './design-system';

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
      <h2 style={{ 
        fontSize: getTypography('2xl'),
        fontWeight: getTypography('bold'),
        marginBottom: getSpacing(4),
        color: getColor('primary', 'light')
      }}>
        Design System Příklad
      </h2>
      
      <p style={{
        fontSize: getTypography('base'),
        lineHeight: typography.lineHeight.relaxed,
        color: getColor('mutedForeground', 'light'),
        marginBottom: getSpacing(6)
      }}>
        Tato komponenta demonstruje použití centralizovaného design systému.
        Všechny barvy, fonty, mezery a další hodnoty pocházejí z jednoho místa.
      </p>
      
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
          fontSize: getTypography('sm'),
          fontWeight: getTypography('medium'),
          cursor: 'pointer',
          transition: animations.transition.colors,
        }}>
          Primární tlačítko
        </button>
        
        <button style={{
          backgroundColor: getColor('secondary', 'light'),
          color: getColor('secondaryForeground', 'light'),
          padding: `${getSpacing(2)} ${getSpacing(4)}`,
          borderRadius: borderRadius.md,
          border: 'none',
          fontSize: getTypography('sm'),
          fontWeight: getTypography('medium'),
          cursor: 'pointer',
          transition: animations.transition.colors,
        }}>
          Sekundární tlačítko
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
        fontSize: getTypography('base'),
      }}
      className={`
        ${getBreakpoint('sm')} { padding: ${getSpacing(6)}; }
        ${getBreakpoint('md')} { padding: ${getSpacing(8)}; }
        ${getBreakpoint('lg')} { padding: ${getSpacing(12)}; }
      `}
    >
      <h3 style={{ fontSize: getTypography('xl') }}>
        Responsive Design s Design System
      </h3>
      
      <p>
        Tato komponenta používá breakpointy z design systému pro responsive design.
      </p>
    </div>
  );
};
