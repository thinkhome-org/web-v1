/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Rozšíření barev z design systému
      colors: {
        // ThinkHome primární barvy
        'th-primary': {
          50: 'rgb(var(--th-primary-50) / <alpha-value>)',
          100: 'rgb(var(--th-primary-100) / <alpha-value>)',
          200: 'rgb(var(--th-primary-200) / <alpha-value>)',
          300: 'rgb(var(--th-primary-300) / <alpha-value>)',
          400: 'rgb(var(--th-primary-400) / <alpha-value>)',
          500: 'rgb(var(--th-primary-500) / <alpha-value>)',
          600: 'rgb(var(--th-primary-600) / <alpha-value>)',
          700: 'rgb(var(--th-primary-700) / <alpha-value>)',
          800: 'rgb(var(--th-primary-800) / <alpha-value>)',
          900: 'rgb(var(--th-primary-900) / <alpha-value>)',
          950: 'rgb(var(--th-primary-950) / <alpha-value>)',
        },
        // ThinkHome akcentové barvy
        'th-accent': {
          red: 'var(--th-accent-red)',
          'red-light': 'var(--th-accent-red-light)',
          'red-dark': 'var(--th-accent-red-dark)',
          blue: 'var(--th-accent-blue)',
          'blue-light': 'var(--th-accent-blue-light)',
          'blue-dark': 'var(--th-accent-blue-dark)',
          green: 'var(--th-accent-green)',
          'green-light': 'var(--th-accent-green-light)',
          'green-dark': 'var(--th-accent-green-dark)',
          orange: 'var(--th-accent-orange)',
          'orange-light': 'var(--th-accent-orange-light)',
          'orange-dark': 'var(--th-accent-orange-dark)',
        },
        // Sémantické barvy
        'th-success': 'var(--th-success)',
        'th-warning': 'var(--th-warning)',
        'th-error': 'var(--th-error)',
        'th-info': 'var(--th-info)',
        // Pozadí
        'th-bg': {
          primary: 'var(--th-bg-primary)',
          secondary: 'var(--th-bg-secondary)',
          tertiary: 'var(--th-bg-tertiary)',
          overlay: 'var(--th-bg-overlay)',
          glass: 'var(--th-bg-glass)',
        },
        // Texty
        'th-text': {
          primary: 'var(--th-text-primary)',
          secondary: 'var(--th-text-secondary)',
          tertiary: 'var(--th-text-tertiary)',
          muted: 'var(--th-text-muted)',
          inverse: 'var(--th-text-inverse)',
        },
        // Ohraničení
        'th-border': {
          light: 'var(--th-border-light)',
          medium: 'var(--th-border-medium)',
          strong: 'var(--th-border-strong)',
          focus: 'var(--th-border-focus)',
        },
        // Zachování původních shadcn/ui barev pro kompatibilitu
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      // Rozšíření spacing z design systému
      spacing: {
        '0.5': 'var(--th-space-0-5)',
        '1.5': 'var(--th-space-1-5)',
        '2.5': 'var(--th-space-2-5)',
        '3.5': 'var(--th-space-3-5)',
      },
      // Rozšíření border radius z design systému
      borderRadius: {
        'th-sm': 'var(--th-radius-sm)',
        'th-base': 'var(--th-radius-base)',
        'th-md': 'var(--th-radius-md)',
        'th-lg': 'var(--th-radius-lg)',
        'th-xl': 'var(--th-radius-xl)',
        'th-2xl': 'var(--th-radius-2xl)',
        'th-3xl': 'var(--th-radius-3xl)',
        // Zachování původních hodnot
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // Rozšíření fontů z design systému
      fontFamily: {
        'th-sans': 'var(--th-font-sans)',
        'th-mono': 'var(--th-font-mono)',
        sans: 'var(--th-font-sans)',
        mono: 'var(--th-font-mono)',
      },
      // Rozšíření font sizes z design systému
      fontSize: {
        'th-xs': 'var(--th-text-xs)',
        'th-sm': 'var(--th-text-sm)',
        'th-base': 'var(--th-text-base)',
        'th-lg': 'var(--th-text-lg)',
        'th-xl': 'var(--th-text-xl)',
        'th-2xl': 'var(--th-text-2xl)',
        'th-3xl': 'var(--th-text-3xl)',
        'th-4xl': 'var(--th-text-4xl)',
        'th-5xl': 'var(--th-text-5xl)',
        'th-6xl': 'var(--th-text-6xl)',
      },
      // Rozšíření font weights z design systému
      fontWeight: {
        'th-light': 'var(--th-font-light)',
        'th-normal': 'var(--th-font-normal)',
        'th-medium': 'var(--th-font-medium)',
        'th-semibold': 'var(--th-font-semibold)',
        'th-bold': 'var(--th-font-bold)',
        'th-extrabold': 'var(--th-font-extrabold)',
      },
      // Rozšíření line heights z design systému
      lineHeight: {
        'th-tight': 'var(--th-leading-tight)',
        'th-snug': 'var(--th-leading-snug)',
        'th-normal': 'var(--th-leading-normal)',
        'th-relaxed': 'var(--th-leading-relaxed)',
        'th-loose': 'var(--th-leading-loose)',
      },
      // Rozšíření box shadows z design systému
      boxShadow: {
        'th-sm': 'var(--th-shadow-sm)',
        'th-base': 'var(--th-shadow-base)',
        'th-md': 'var(--th-shadow-md)',
        'th-lg': 'var(--th-shadow-lg)',
        'th-xl': 'var(--th-shadow-xl)',
        'th-2xl': 'var(--th-shadow-2xl)',
        'th-inner': 'var(--th-shadow-inner)',
      },
      // Rozšíření transitions z design systému
      transitionDuration: {
        'th-fast': '150ms',
        'th-base': '250ms',
        'th-slow': '350ms',
        'th-slower': '500ms',
      },
      // Rozšíření transition timing functions
      transitionTimingFunction: {
        'th-ease-in': 'var(--th-ease-in)',
        'th-ease-out': 'var(--th-ease-out)',
        'th-ease-in-out': 'var(--th-ease-in-out)',
      },
      // Animace z design systému
      keyframes: {
        'th-fade-in': {
          'from': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'th-slide-up': {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'th-scale-in': {
          'from': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          'to': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        'th-fade-in': 'th-fade-in 250ms cubic-bezier(0, 0, 0.2, 1)',
        'th-slide-up': 'th-slide-up 350ms cubic-bezier(0, 0, 0.2, 1)',
        'th-scale-in': 'th-scale-in 250ms cubic-bezier(0, 0, 0.2, 1)',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}