/**
 * Application Constants
 * 
 * Centralized configuration and constants for the ThinkHome application.
 * This file contains all static values, configuration options, and metadata.
 */

// ============================================================================
// APPLICATION METADATA
// ============================================================================

export const APP_CONFIG = {
  name: 'ThinkHome',
  description: 'Moderní IT bez starostí',
  tagline: 'Zbavte se starostí o technologie a zaměřte se na své podnikání.',
  url: 'https://thinkhome.org',
  locale: 'cs_CZ',
  version: '1.0.0'
} as const;

// ============================================================================
// SEO & METADATA
// ============================================================================

export const SEO_CONFIG = {
  title: `${APP_CONFIG.name} - ${APP_CONFIG.description}`,
  description: `${APP_CONFIG.tagline} ${APP_CONFIG.name} nabízí kompletní správu firemního IT – od hardware, přes weby až po moderní bezpečnostní řešení.`,
  keywords: [
    'IT služby',
    'správa IT',
    'webové stránky',
    'bezpečnost',
    'hardware',
    'software',
    'podpora',
    'konzultace'
  ],
  openGraph: {
    type: 'website',
    siteName: APP_CONFIG.name,
    locale: APP_CONFIG.locale
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@thinkhome'
  }
} as const;

// ============================================================================
// NAVIGATION CONFIGURATION
// ============================================================================

export const NAVIGATION_ITEMS = [
  {
    id: 'home',
    label: 'Domů',
    href: '#home',
    description: 'Hlavní stránka s přehledem služeb'
  },
  {
    id: 'mission',
    label: 'O nás',
    href: '#mission',
    description: 'Naše mise a cíle'
  },
  {
    id: 'services',
    label: 'Služby',
    href: '#services',
    description: 'Kompletní přehled našich služeb'
  },
  {
    id: 'team',
    label: 'Tým',
    href: '#team',
    description: 'Seznamte se s naším týmem'
  },
  {
    id: 'contact',
    label: 'Kontakt',
    href: '#contact',
    description: 'Jak nás kontaktovat'
  }
] as const;

// ============================================================================
// CONTACT INFORMATION
// ============================================================================

export const CONTACT_INFO = {
  email: 'info@thinkhome.org',
  phone: '+420 123 456 789',
  address: 'Praha, Česká republika',
  workingHours: 'Po-Pá: 8:00-17:00',
  social: {
    linkedin: 'https://linkedin.com/company/thinkhome',
    twitter: 'https://twitter.com/thinkhome',
    facebook: 'https://facebook.com/thinkhome'
  }
} as const;

// ============================================================================
// FILE PATHS
// ============================================================================

export const FILE_PATHS = {
  team: {
    csv: '/team/source.csv',
    images: '/team/pictures/'
  },
  assets: {
    logo: {
      black: '/logo/black.svg',
      white: '/logo/white.svg',
      favicon: '/logo/favicon.ico'
    }
  },
  legal: {
    privacy: '/legal/privacy-policy',
    terms: '/legal/terms-of-service',
    cookies: '/legal/cookies'
  }
} as const;

// ============================================================================
// ANIMATION CONFIGURATION
// ============================================================================

export const ANIMATION_CONFIG = {
  duration: {
    fast: 200,
    normal: 300,
    slow: 500
  },
  easing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out'
  },
  delays: {
    stagger: 100,
    sequence: 200
  }
} as const;

// ============================================================================
// BREAKPOINTS (matching Tailwind CSS)
// ============================================================================

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const;

// ============================================================================
// VALIDATION RULES
// ============================================================================

export const VALIDATION_RULES = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Zadejte platnou emailovou adresu'
  },
  phone: {
    pattern: /^(\+420)?[0-9]{9}$/,
    message: 'Zadejte platné telefonní číslo'
  },
  required: {
    message: 'Toto pole je povinné'
  },
  minLength: (min: number) => ({
    value: min,
    message: `Minimální délka je ${min} znaků`
  }),
  maxLength: (max: number) => ({
    value: max,
    message: `Maximální délka je ${max} znaků`
  })
} as const;

// ============================================================================
// ERROR MESSAGES
// ============================================================================

export const ERROR_MESSAGES = {
  generic: 'Nastala neočekávaná chyba. Zkuste to prosím později.',
  network: 'Problém s připojením k internetu. Zkontrolujte připojení.',
  notFound: 'Požadovaný obsah nebyl nalezen.',
  unauthorized: 'Nemáte oprávnění k této akci.',
  validation: 'Zkontrolujte prosím vyplněné údaje.',
  server: 'Problém na straně serveru. Zkuste to prosím později.'
} as const;

// ============================================================================
// SUCCESS MESSAGES
// ============================================================================

export const SUCCESS_MESSAGES = {
  contactForm: 'Zpráva byla úspěšně odeslána. Brzy vás kontaktujeme.',
  dataLoaded: 'Data byla úspěšně načtena.',
  settingsSaved: 'Nastavení bylo uloženo.'
} as const;

// ============================================================================
// FEATURE FLAGS
// ============================================================================

export const FEATURE_FLAGS = {
  enableAnimations: true,
  enableAnalytics: true,
  enableCookies: true,
  enableDarkMode: true,
  enablePWA: false,
  enableOfflineMode: false
} as const;
