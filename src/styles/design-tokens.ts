// ========================================================================== //
//                        THINKHOME DESIGN TOKENS                            //
// ========================================================================== //

// TypeScript definice pro design tokeny pro type-safe použití v komponentách

export const designTokens = {
  // === BARVY ===
  colors: {
    primary: {
      50: 'var(--th-primary-50)',
      100: 'var(--th-primary-100)',
      200: 'var(--th-primary-200)',
      300: 'var(--th-primary-300)',
      400: 'var(--th-primary-400)',
      500: 'var(--th-primary-500)',
      600: 'var(--th-primary-600)',
      700: 'var(--th-primary-700)',
      800: 'var(--th-primary-800)',
      900: 'var(--th-primary-900)',
      950: 'var(--th-primary-950)',
    },
    accent: {
      red: 'var(--th-accent-red)',
      redLight: 'var(--th-accent-red-light)',
      redDark: 'var(--th-accent-red-dark)',
      blue: 'var(--th-accent-blue)',
      blueLight: 'var(--th-accent-blue-light)',
      blueDark: 'var(--th-accent-blue-dark)',
      green: 'var(--th-accent-green)',
      greenLight: 'var(--th-accent-green-light)',
      greenDark: 'var(--th-accent-green-dark)',
      orange: 'var(--th-accent-orange)',
      orangeLight: 'var(--th-accent-orange-light)',
      orangeDark: 'var(--th-accent-orange-dark)',
    },
    semantic: {
      success: 'var(--th-success)',
      warning: 'var(--th-warning)',
      error: 'var(--th-error)',
      info: 'var(--th-info)',
    },
    background: {
      primary: 'var(--th-bg-primary)',
      secondary: 'var(--th-bg-secondary)',
      tertiary: 'var(--th-bg-tertiary)',
      overlay: 'var(--th-bg-overlay)',
      glass: 'var(--th-bg-glass)',
    },
    text: {
      primary: 'var(--th-text-primary)',
      secondary: 'var(--th-text-secondary)',
      tertiary: 'var(--th-text-tertiary)',
      muted: 'var(--th-text-muted)',
      inverse: 'var(--th-text-inverse)',
    },
    border: {
      light: 'var(--th-border-light)',
      medium: 'var(--th-border-medium)',
      strong: 'var(--th-border-strong)',
      focus: 'var(--th-border-focus)',
    },
  },

  // === TYPOGRAFIE ===
  typography: {
    fontFamily: {
      sans: 'var(--th-font-sans)',
      mono: 'var(--th-font-mono)',
    },
    fontSize: {
      xs: 'var(--th-text-xs)',
      sm: 'var(--th-text-sm)',
      base: 'var(--th-text-base)',
      lg: 'var(--th-text-lg)',
      xl: 'var(--th-text-xl)',
      '2xl': 'var(--th-text-2xl)',
      '3xl': 'var(--th-text-3xl)',
      '4xl': 'var(--th-text-4xl)',
      '5xl': 'var(--th-text-5xl)',
      '6xl': 'var(--th-text-6xl)',
    },
    fontWeight: {
      light: 'var(--th-font-light)',
      normal: 'var(--th-font-normal)',
      medium: 'var(--th-font-medium)',
      semibold: 'var(--th-font-semibold)',
      bold: 'var(--th-font-bold)',
      extrabold: 'var(--th-font-extrabold)',
    },
    lineHeight: {
      tight: 'var(--th-leading-tight)',
      snug: 'var(--th-leading-snug)',
      normal: 'var(--th-leading-normal)',
      relaxed: 'var(--th-leading-relaxed)',
      loose: 'var(--th-leading-loose)',
    },
  },

  // === SPACING ===
  spacing: {
    0: 'var(--th-space-0)',
    px: 'var(--th-space-px)',
    0.5: 'var(--th-space-0-5)',
    1: 'var(--th-space-1)',
    1.5: 'var(--th-space-1-5)',
    2: 'var(--th-space-2)',
    2.5: 'var(--th-space-2-5)',
    3: 'var(--th-space-3)',
    3.5: 'var(--th-space-3-5)',
    4: 'var(--th-space-4)',
    5: 'var(--th-space-5)',
    6: 'var(--th-space-6)',
    7: 'var(--th-space-7)',
    8: 'var(--th-space-8)',
    9: 'var(--th-space-9)',
    10: 'var(--th-space-10)',
    11: 'var(--th-space-11)',
    12: 'var(--th-space-12)',
    14: 'var(--th-space-14)',
    16: 'var(--th-space-16)',
    20: 'var(--th-space-20)',
    24: 'var(--th-space-24)',
    28: 'var(--th-space-28)',
    32: 'var(--th-space-32)',
    36: 'var(--th-space-36)',
    40: 'var(--th-space-40)',
    44: 'var(--th-space-44)',
    48: 'var(--th-space-48)',
    52: 'var(--th-space-52)',
    56: 'var(--th-space-56)',
    60: 'var(--th-space-60)',
    64: 'var(--th-space-64)',
    72: 'var(--th-space-72)',
    80: 'var(--th-space-80)',
    96: 'var(--th-space-96)',
  },

  // === BORDER RADIUS ===
  borderRadius: {
    none: 'var(--th-radius-none)',
    sm: 'var(--th-radius-sm)',
    base: 'var(--th-radius-base)',
    md: 'var(--th-radius-md)',
    lg: 'var(--th-radius-lg)',
    xl: 'var(--th-radius-xl)',
    '2xl': 'var(--th-radius-2xl)',
    '3xl': 'var(--th-radius-3xl)',
    full: 'var(--th-radius-full)',
  },

  // === SHADOWS ===
  shadows: {
    sm: 'var(--th-shadow-sm)',
    base: 'var(--th-shadow-base)',
    md: 'var(--th-shadow-md)',
    lg: 'var(--th-shadow-lg)',
    xl: 'var(--th-shadow-xl)',
    '2xl': 'var(--th-shadow-2xl)',
    inner: 'var(--th-shadow-inner)',
  },

  // === TRANSITIONS ===
  transitions: {
    duration: {
      fast: 'var(--th-transition-fast)',
      base: 'var(--th-transition-base)',
      slow: 'var(--th-transition-slow)',
      slower: 'var(--th-transition-slower)',
    },
    timing: {
      easeIn: 'var(--th-ease-in)',
      easeOut: 'var(--th-ease-out)',
      easeInOut: 'var(--th-ease-in-out)',
    },
  },
} as const;

// === TYPE DEFINITIONS ===
export type ThemeColors = typeof designTokens.colors;
export type ThemeSpacing = typeof designTokens.spacing;
export type ThemeTypography = typeof designTokens.typography;
export type ThemeBorderRadius = typeof designTokens.borderRadius;
export type ThemeShadows = typeof designTokens.shadows;
export type ThemeTransitions = typeof designTokens.transitions;

// === UTILITY FUNCTIONS ===

/**
 * Získá CSS custom property pro barvu
 * @param colorPath - Cesta k barvě (např. 'primary.500', 'accent.red')
 * @returns CSS custom property string
 */
export function getColor(colorPath: string): string {
  const parts = colorPath.split('.');
  let current: any = designTokens.colors;
  
  for (const part of parts) {
    current = current[part];
    if (!current) {
      console.warn(`Color path '${colorPath}' not found in design tokens`);
      return 'transparent';
    }
  }
  
  return current;
}

/**
 * Získá CSS custom property pro spacing
 * @param size - Velikost spacing (např. '4', '2.5')
 * @returns CSS custom property string
 */
export function getSpacing(size: keyof typeof designTokens.spacing): string {
  return designTokens.spacing[size] || designTokens.spacing[0];
}

/**
 * Získá CSS custom property pro font size
 * @param size - Velikost fontu (např. 'base', 'lg', '2xl')
 * @returns CSS custom property string
 */
export function getFontSize(size: keyof typeof designTokens.typography.fontSize): string {
  return designTokens.typography.fontSize[size] || designTokens.typography.fontSize.base;
}

/**
 * Získá CSS custom property pro border radius
 * @param size - Velikost border radius (např. 'base', 'lg', 'xl')
 * @returns CSS custom property string
 */
export function getBorderRadius(size: keyof typeof designTokens.borderRadius): string {
  return designTokens.borderRadius[size] || designTokens.borderRadius.base;
}

/**
 * Získá CSS custom property pro shadow
 * @param size - Velikost shadow (např. 'base', 'md', 'lg')
 * @returns CSS custom property string
 */
export function getShadow(size: keyof typeof designTokens.shadows): string {
  return designTokens.shadows[size] || designTokens.shadows.base;
}

// === COMPONENT STYLE PRESETS ===

/**
 * Přednastavené styly pro tlačítka
 */
export const buttonStyles = {
  base: {
    fontFamily: designTokens.typography.fontFamily.sans,
    fontSize: designTokens.typography.fontSize.sm,
    fontWeight: designTokens.typography.fontWeight.medium,
    lineHeight: designTokens.typography.lineHeight.tight,
    borderRadius: designTokens.borderRadius.lg,
    transition: designTokens.transitions.duration.base,
    padding: `${designTokens.spacing[2.5]} ${designTokens.spacing[4]}`,
  },
  variants: {
    primary: {
      backgroundColor: designTokens.colors.text.primary,
      color: designTokens.colors.text.inverse,
      borderColor: designTokens.colors.text.primary,
    },
    secondary: {
      backgroundColor: designTokens.colors.background.secondary,
      color: designTokens.colors.text.primary,
      borderColor: designTokens.colors.border.medium,
    },
    accent: {
      backgroundColor: designTokens.colors.accent.red,
      color: designTokens.colors.text.inverse,
      borderColor: designTokens.colors.accent.red,
    },
    ghost: {
      backgroundColor: 'transparent',
      color: designTokens.colors.text.primary,
      borderColor: 'transparent',
    },
  },
  sizes: {
    sm: {
      padding: `${designTokens.spacing[1.5]} ${designTokens.spacing[3]}`,
      fontSize: designTokens.typography.fontSize.xs,
    },
    base: {
      padding: `${designTokens.spacing[2.5]} ${designTokens.spacing[4]}`,
      fontSize: designTokens.typography.fontSize.sm,
    },
    lg: {
      padding: `${designTokens.spacing[3]} ${designTokens.spacing[6]}`,
      fontSize: designTokens.typography.fontSize.base,
    },
  },
};

/**
 * Přednastavené styly pro karty
 */
export const cardStyles = {
  base: {
    backgroundColor: designTokens.colors.background.primary,
    borderColor: designTokens.colors.border.medium,
    borderRadius: designTokens.borderRadius.xl,
    boxShadow: designTokens.shadows.sm,
    transition: designTokens.transitions.duration.base,
  },
  sections: {
    header: {
      padding: designTokens.spacing[6],
      borderBottomColor: designTokens.colors.border.light,
    },
    body: {
      padding: designTokens.spacing[6],
    },
    footer: {
      padding: designTokens.spacing[6],
      borderTopColor: designTokens.colors.border.light,
    },
  },
};

/**
 * Přednastavené styly pro inputy
 */
export const inputStyles = {
  base: {
    fontFamily: designTokens.typography.fontFamily.sans,
    fontSize: designTokens.typography.fontSize.sm,
    lineHeight: designTokens.typography.lineHeight.tight,
    backgroundColor: designTokens.colors.background.primary,
    borderColor: designTokens.colors.border.medium,
    borderRadius: designTokens.borderRadius.lg,
    padding: `${designTokens.spacing[2.5]} ${designTokens.spacing[3]}`,
    transition: designTokens.transitions.duration.base,
  },
  states: {
    focus: {
      borderColor: designTokens.colors.border.focus,
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
    },
    placeholder: {
      color: designTokens.colors.text.muted,
    },
  },
};

/**
 * Přednastavené typografické styly
 */
export const typographyStyles = {
  heading1: {
    fontFamily: designTokens.typography.fontFamily.sans,
    fontSize: designTokens.typography.fontSize['4xl'],
    fontWeight: designTokens.typography.fontWeight.bold,
    lineHeight: designTokens.typography.lineHeight.tight,
    color: designTokens.colors.text.primary,
  },
  heading2: {
    fontFamily: designTokens.typography.fontFamily.sans,
    fontSize: designTokens.typography.fontSize['3xl'],
    fontWeight: designTokens.typography.fontWeight.semibold,
    lineHeight: designTokens.typography.lineHeight.tight,
    color: designTokens.colors.text.primary,
  },
  heading3: {
    fontFamily: designTokens.typography.fontFamily.sans,
    fontSize: designTokens.typography.fontSize['2xl'],
    fontWeight: designTokens.typography.fontWeight.semibold,
    lineHeight: designTokens.typography.lineHeight.snug,
    color: designTokens.colors.text.primary,
  },
  bodyLarge: {
    fontFamily: designTokens.typography.fontFamily.sans,
    fontSize: designTokens.typography.fontSize.lg,
    fontWeight: designTokens.typography.fontWeight.normal,
    lineHeight: designTokens.typography.lineHeight.relaxed,
    color: designTokens.colors.text.secondary,
  },
  body: {
    fontFamily: designTokens.typography.fontFamily.sans,
    fontSize: designTokens.typography.fontSize.base,
    fontWeight: designTokens.typography.fontWeight.normal,
    lineHeight: designTokens.typography.lineHeight.normal,
    color: designTokens.colors.text.secondary,
  },
  bodySmall: {
    fontFamily: designTokens.typography.fontFamily.sans,
    fontSize: designTokens.typography.fontSize.sm,
    fontWeight: designTokens.typography.fontWeight.normal,
    lineHeight: designTokens.typography.lineHeight.normal,
    color: designTokens.colors.text.tertiary,
  },
  caption: {
    fontFamily: designTokens.typography.fontFamily.sans,
    fontSize: designTokens.typography.fontSize.xs,
    fontWeight: designTokens.typography.fontWeight.medium,
    lineHeight: designTokens.typography.lineHeight.tight,
    color: designTokens.colors.text.muted,
  },
};

export default designTokens;