/**
 * Centralizovaný design systém pro ThinkHome
 * Obsahuje všechny designové tokeny: barvy, fonty, mezery, velikosti, animace atd.
 */

// ============================================================================
// BARVY - Color Palette
// ============================================================================

export const colors = {
  // Základní barvy
  background: {
    light: '#ffffff',
    dark: '#0a0a0a',
  },
  foreground: {
    light: '#262626',
    dark: '#fafafa',
  },
  
  // Textové barvy pro různé typy obsahu
  text: {
    // Hlavní nadpisy
    title: {
      light: '#171717',
      dark: '#fafafa',
    },
    // Podnadpisy
    subtitle: {
      light: '#404040',
      dark: '#d4d4d8',
    },
    // Běžný text
    body: {
      light: '#262626',
      dark: '#fafafa',
    },
    // Sekundární text
    secondary: {
      light: '#737373',
      dark: '#a3a3a3',
    },
    // Odkazy
    link: {
      light: '#2563eb', // blue-600
      dark: '#60a5fa', // blue-400
    },
    // Hover stavy odkazů
    linkHover: {
      light: '#1d4ed8', // blue-700
      dark: '#93c5fd', // blue-300
    },
    // Důležité/akcentní text
    accent: {
      light: '#dc2626', // red-600
      dark: '#f87171', // red-400
    },
    // Úspěšné stavy
    success: {
      light: '#16a34a', // green-600
      dark: '#4ade80', // green-400
    },
    // Varování
    warning: {
      light: '#d97706', // amber-600
      dark: '#fbbf24', // amber-400
    },
    // Informace
    info: {
      light: '#0891b2', // cyan-600
      dark: '#22d3ee', // cyan-400
    },
  },
  
  // Primární barvy
  primary: {
    light: '#171717',
    dark: '#e5e5e5',
  },
  primaryForeground: {
    light: '#fafafa',
    dark: '#171717',
  },
  
  // Sekundární barvy
  secondary: {
    light: '#f5f5f5',
    dark: '#262626',
  },
  secondaryForeground: {
    light: '#171717',
    dark: '#fafafa',
  },
  
  // Muted barvy
  muted: {
    light: '#f5f5f5',
    dark: '#262626',
  },
  mutedForeground: {
    light: '#737373',
    dark: '#a3a3a3',
  },
  
  // Accent barvy
  accent: {
    light: '#f5f5f5',
    dark: '#262626',
  },
  accentForeground: {
    light: '#171717',
    dark: '#fafafa',
  },
  
  // Destruktivní barvy
  destructive: {
    light: '#dc2626',
    dark: '#ef4444',
  },
  
  // Border a input barvy
  border: {
    light: '#e5e5e5',
    dark: 'rgba(255, 255, 255, 0.1)',
  },
  input: {
    light: '#e5e5e5',
    dark: 'rgba(255, 255, 255, 0.15)',
  },
  ring: {
    light: '#a3a3a3',
    dark: '#737373',
  },
  
  // Card barvy
  card: {
    light: '#ffffff',
    dark: '#171717',
  },
  cardForeground: {
    light: '#262626',
    dark: '#fafafa',
  },
  
  // Popover barvy
  popover: {
    light: '#ffffff',
    dark: '#171717',
  },
  popoverForeground: {
    light: '#262626',
    dark: '#fafafa',
  },
  
  // Sidebar barvy
  sidebar: {
    light: '#fafafa',
    dark: '#171717',
  },
  sidebarForeground: {
    light: '#262626',
    dark: '#fafafa',
  },
  sidebarPrimary: {
    light: '#171717',
    dark: '#8b5cf6',
  },
  sidebarPrimaryForeground: {
    light: '#fafafa',
    dark: '#fafafa',
  },
  sidebarAccent: {
    light: '#f5f5f5',
    dark: '#262626',
  },
  sidebarAccentForeground: {
    light: '#171717',
    dark: '#fafafa',
  },
  sidebarBorder: {
    light: '#e5e5e5',
    dark: 'rgba(255, 255, 255, 0.1)',
  },
  sidebarRing: {
    light: '#a3a3a3',
    dark: '#737373',
  },
  
  // Chart barvy
  chart: {
    1: {
      light: '#f59e0b',
      dark: '#8b5cf6',
    },
    2: {
      light: '#06b6d4',
      dark: '#06b6d4',
    },
    3: {
      light: '#3b82f6',
      dark: '#f97316',
    },
    4: {
      light: '#10b981',
      dark: '#ec4899',
    },
    5: {
      light: '#f97316',
      dark: '#f59e0b',
    },
  },
} as const;

// ============================================================================
// TYPOGRAFIE - Typography
// ============================================================================

export const typography = {
  // Font families
  fontFamily: {
    sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
    mono: ['var(--font-geist-mono)', 'Consolas', 'monospace'],
  },
  
  // Font sizes
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
  },
  
  // Font weights
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  
  // Line heights
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  
  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  
  // Specifické typografické styly pro různé typy obsahu
  styles: {
    // Hlavní nadpisy (H1)
    title: {
      fontSize: '3rem', // 48px
      fontWeight: '800', // extrabold
      lineHeight: '1.1',
      letterSpacing: '-0.025em',
    },
    // Podnadpisy (H2)
    subtitle: {
      fontSize: '2.25rem', // 36px
      fontWeight: '700', // bold
      lineHeight: '1.2',
      letterSpacing: '-0.025em',
    },
    // Sekční nadpisy (H3)
    section: {
      fontSize: '1.875rem', // 30px
      fontWeight: '600', // semibold
      lineHeight: '1.3',
      letterSpacing: '0em',
    },
    // Podsekční nadpisy (H4)
    subsection: {
      fontSize: '1.5rem', // 24px
      fontWeight: '600', // semibold
      lineHeight: '1.4',
      letterSpacing: '0em',
    },
    // Malé nadpisy (H5, H6)
    heading: {
      fontSize: '1.25rem', // 20px
      fontWeight: '600', // semibold
      lineHeight: '1.4',
      letterSpacing: '0em',
    },
    // Běžný text
    body: {
      fontSize: '1rem', // 16px
      fontWeight: '400', // normal
      lineHeight: '1.6',
      letterSpacing: '0em',
    },
    // Velký text
    large: {
      fontSize: '1.125rem', // 18px
      fontWeight: '400', // normal
      lineHeight: '1.6',
      letterSpacing: '0em',
    },
    // Malý text
    small: {
      fontSize: '0.875rem', // 14px
      fontWeight: '400', // normal
      lineHeight: '1.5',
      letterSpacing: '0em',
    },
    // Velmi malý text
    tiny: {
      fontSize: '0.75rem', // 12px
      fontWeight: '400', // normal
      lineHeight: '1.4',
      letterSpacing: '0.025em',
    },
    // Odkazy
    link: {
      fontSize: '1rem', // 16px
      fontWeight: '500', // medium
      lineHeight: '1.5',
      letterSpacing: '0em',
      textDecoration: 'underline',
    },
    // Tlačítka
    button: {
      fontSize: '0.875rem', // 14px
      fontWeight: '600', // semibold
      lineHeight: '1.4',
      letterSpacing: '0.025em',
    },
    // Kódy
    code: {
      fontSize: '0.875rem', // 14px
      fontWeight: '400', // normal
      lineHeight: '1.5',
      letterSpacing: '0em',
      fontFamily: 'var(--font-geist-mono), Consolas, monospace',
    },
    // Citace
    quote: {
      fontSize: '1.125rem', // 18px
      fontWeight: '400', // normal
      lineHeight: '1.6',
      letterSpacing: '0em',
      fontStyle: 'italic',
    },
  },
} as const;

// ============================================================================
// MEZERY - Spacing
// ============================================================================

export const spacing = {
  // Base spacing scale (4px grid)
  0: '0px',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  7: '1.75rem',   // 28px
  8: '2rem',      // 32px
  9: '2.25rem',   // 36px
  10: '2.5rem',   // 40px
  11: '2.75rem',  // 44px
  12: '3rem',     // 48px
  14: '3.5rem',   // 56px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  28: '7rem',     // 112px
  32: '8rem',     // 128px
  36: '9rem',     // 144px
  40: '10rem',    // 160px
  44: '11rem',    // 176px
  48: '12rem',    // 192px
  52: '13rem',    // 208px
  56: '14rem',    // 224px
  60: '15rem',    // 240px
  64: '16rem',    // 256px
  72: '18rem',    // 288px
  80: '20rem',    // 320px
  96: '24rem',    // 384px
} as const;

// ============================================================================
// VELIKOSTI - Sizing
// ============================================================================

export const sizing = {
  // Width a height
  auto: 'auto',
  full: '100%',
  screen: '100vh',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
  
  // Specifické velikosti
  xs: '20rem',    // 320px
  sm: '24rem',    // 384px
  md: '28rem',    // 448px
  lg: '32rem',    // 512px
  xl: '36rem',    // 576px
  '2xl': '42rem', // 672px
  '3xl': '48rem', // 768px
  '4xl': '56rem', // 896px
  '5xl': '64rem', // 1024px
  '6xl': '72rem', // 1152px
  '7xl': '80rem', // 1280px
} as const;

// ============================================================================
// BREAKPOINTY - Breakpoints
// ============================================================================

export const breakpoints = {
  xs: '475px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ============================================================================
// BORDER RADIUS - Border Radius
// ============================================================================

export const borderRadius = {
  none: '0px',
  sm: '0.125rem',   // 2px
  base: '0.25rem',  // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',
} as const;

// ============================================================================
// SHADOW - Box Shadow
// ============================================================================

export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
} as const;

// ============================================================================
// ANIMACE - Animations & Transitions
// ============================================================================

export const animations = {
  // Duration
  duration: {
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms',
  },
  
  // Easing
  easing: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  // Common transitions
  transition: {
    all: 'all 0.3s ease',
    colors: 'color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
    opacity: 'opacity 0.3s ease',
    transform: 'transform 0.3s ease',
  },
} as const;

// ============================================================================
// Z-INDEX - Z-Index Scale
// ============================================================================

export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const;

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Vrací barvu pro aktuální mód (light/dark)
 */
export function getColor(colorKey: keyof typeof colors, mode: 'light' | 'dark' = 'light') {
  const color = colors[colorKey];
  if (typeof color === 'object' && 'light' in color && 'dark' in color) {
    return color[mode];
  }
  if (typeof color === 'object' && '1' in color) {
    // Chart colors
    return color as any;
  }
  if (typeof color === 'object' && 'title' in color) {
    // Text colors
    return color as any;
  }
  return color as string;
}

/**
 * Vrací CSS custom property pro barvu
 */
export function getColorVar(colorKey: keyof typeof colors) {
  return `var(--${colorKey.replace(/([A-Z])/g, '-$1').toLowerCase()})`;
}

/**
 * Vrací breakpoint media query
 */
export function getBreakpoint(breakpoint: keyof typeof breakpoints) {
  return `@media (min-width: ${breakpoints[breakpoint]})`;
}

/**
 * Vrací spacing hodnotu
 */
export function getSpacing(size: keyof typeof spacing) {
  return spacing[size];
}

/**
 * Vrací typografii hodnotu
 */
export function getTypography(property: keyof typeof typography.fontSize | keyof typeof typography.fontWeight) {
  if (property in typography.fontSize) {
    return typography.fontSize[property as keyof typeof typography.fontSize];
  }
  if (property in typography.fontWeight) {
    return typography.fontWeight[property as keyof typeof typography.fontWeight];
  }
  return '';
}

/**
 * Vrací textovou barvu pro aktuální mód
 */
export function getTextColor(colorKey: keyof typeof colors.text, mode: 'light' | 'dark' = 'light') {
  return colors.text[colorKey][mode];
}

/**
 * Vrací kompletní textový styl
 */
export function getTextStyle(styleKey: keyof typeof typography.styles, colorKey?: keyof typeof colors.text, mode: 'light' | 'dark' = 'light') {
  const style = typography.styles[styleKey];
  const color = colorKey ? colors.text[colorKey][mode] : undefined;
  
  return {
    ...style,
    ...(color && { color }),
  };
}

/**
 * Vrací CSS custom property pro textovou barvu
 */
export function getTextColorVar(colorKey: keyof typeof colors.text) {
  return `var(--text-${colorKey})`;
}

// ============================================================================
// EXPORT TYPES
// ============================================================================

export type ColorKey = keyof typeof colors;
export type TextColorKey = keyof typeof colors.text;
export type SpacingKey = keyof typeof spacing;
export type SizingKey = keyof typeof sizing;
export type BreakpointKey = keyof typeof breakpoints;
export type BorderRadiusKey = keyof typeof borderRadius;
export type ShadowKey = keyof typeof shadows;
export type AnimationDurationKey = keyof typeof animations.duration;
export type AnimationEasingKey = keyof typeof animations.easing;
export type ZIndexKey = keyof typeof zIndex;
export type TextStyleKey = keyof typeof typography.styles;
