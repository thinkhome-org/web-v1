# Design System - ThinkHome

Centralizovaný design systém pro správu všech designových hodnot v projektu.

## 📁 Umístění

```
src/lib/design-system.ts
```

## 🎨 Obsah

### Barvy (Colors)
- **Základní barvy**: `background`, `foreground`
- **Textové barvy**: `text.title`, `text.subtitle`, `text.body`, `text.secondary`, `text.link`, `text.linkHover`, `text.accent`, `text.success`, `text.warning`, `text.info`
- **Primární barvy**: `primary`, `primaryForeground`
- **Sekundární barvy**: `secondary`, `secondaryForeground`
- **Muted barvy**: `muted`, `mutedForeground`
- **Accent barvy**: `accent`, `accentForeground`
- **Destruktivní barvy**: `destructive`
- **Border & Input barvy**: `border`, `input`, `ring`
- **Card barvy**: `card`, `cardForeground`
- **Popover barvy**: `popover`, `popoverForeground`
- **Sidebar barvy**: `sidebar`, `sidebarForeground`, `sidebarPrimary`, atd.
- **Chart barvy**: `chart-1` až `chart-5`

Každá barva má varianty pro světlý (`light`) a tmavý (`dark`) mód.

### Typografie (Typography)
- **Font families**: `fontFamily.sans`, `fontFamily.mono`
- **Font sizes**: `fontSize.xs` až `fontSize.6xl`
- **Font weights**: `fontWeight.thin` až `fontWeight.black`
- **Line heights**: `lineHeight.none` až `lineHeight.loose`
- **Letter spacing**: `letterSpacing.tighter` až `letterSpacing.widest`
- **Textové styly**: `styles.title`, `styles.subtitle`, `styles.section`, `styles.subsection`, `styles.heading`, `styles.body`, `styles.large`, `styles.small`, `styles.tiny`, `styles.link`, `styles.button`, `styles.code`, `styles.quote`

### Mezery (Spacing)
- **Spacing scale**: `spacing.0` až `spacing.96` (4px grid)
- **Velikosti**: `sizing.auto`, `sizing.full`, `sizing.screen`, atd.

### Breakpointy (Breakpoints)
- **Breakpoints**: `breakpoints.xs` až `breakpoints.2xl`
- **Responsive design**: Automatické media queries

### Border Radius
- **Radius hodnoty**: `borderRadius.none` až `borderRadius.full`

### Stíny (Shadows)
- **Shadow hodnoty**: `shadows.none` až `shadows.2xl`
- **Speciální stíny**: `shadows.inner`

### Animace (Animations)
- **Duration**: `animations.duration.75` až `animations.duration.1000`
- **Easing**: `animations.easing.linear`, `animations.easing.in`, atd.
- **Transitions**: `animations.transition.all`, `animations.transition.colors`, atd.

### Z-Index
- **Z-Index scale**: `zIndex.hide` až `zIndex.tooltip`

## 🚀 Použití

### 1. Import design systému

```typescript
import { 
  colors, 
  typography, 
  spacing, 
  getColor, 
  getSpacing, 
  getTypography 
} from '@/lib/design-system';
```

### 2. Použití v inline stylech

```typescript
const MyComponent = () => {
  return (
    <div style={{
      backgroundColor: getColor('background', 'light'),
      color: getColor('foreground', 'light'),
      padding: getSpacing(8),
      fontSize: getTypography('lg'),
      borderRadius: borderRadius.lg,
    }}>
      Obsah komponenty
    </div>
  );
};
```

### 3. Použití s Tailwind CSS

```tsx
const MyComponent = () => {
  return (
    <div className="bg-background text-foreground p-8 text-lg rounded-lg">
      Obsah komponenty
    </div>
  );
};
```

### 4. Responsive design

```typescript
import { getBreakpoint } from '@/lib/design-system';

const ResponsiveComponent = () => {
  return (
    <div 
      className={`
        p-4
        ${getBreakpoint('sm')} { p-6; }
        ${getBreakpoint('md')} { p-8; }
        ${getBreakpoint('lg')} { p-12; }
      `}
    >
      Responsive obsah
    </div>
  );
};
```

## 🛠️ Utility funkce

### `getColor(colorKey, mode)`
Vrací barvu pro aktuální mód (light/dark).

```typescript
const primaryColor = getColor('primary', 'light'); // #171717
const primaryColorDark = getColor('primary', 'dark'); // #e5e5e5
```

### `getColorVar(colorKey)`
Vrací CSS custom property pro barvu.

```typescript
const primaryVar = getColorVar('primary'); // var(--primary)
```

### `getBreakpoint(breakpoint)`
Vrací breakpoint media query.

```typescript
const smBreakpoint = getBreakpoint('sm'); // @media (min-width: 640px)
```

### `getSpacing(size)`
Vrací spacing hodnotu.

```typescript
const padding = getSpacing(8); // 2rem
```

### `getTypography(property)`
Vrací typografii hodnotu.

```typescript
const fontSize = getTypography('lg'); // 1.125rem
const fontWeight = getTypography('bold'); // 700
```

### `getTextColor(colorKey, mode)`
Vrací textovou barvu pro aktuální mód.

```typescript
const titleColor = getTextColor('title', 'light'); // #171717
const linkColor = getTextColor('link', 'dark'); // #60a5fa
```

### `getTextStyle(styleKey, colorKey?, mode)`
Vrací kompletní textový styl.

```typescript
const titleStyle = getTextStyle('title', 'title', 'light');
// { fontSize: '3rem', fontWeight: '800', lineHeight: '1.1', color: '#171717', ... }
```

## 🎯 Výhody

1. **Centralizace**: Všechny designové hodnoty na jednom místě
2. **Konzistence**: Jednotný vzhled napříč celou aplikací
3. **Údržba**: Snadná změna hodnot v celé aplikaci
4. **TypeScript**: Plná type safety pro všechny hodnoty
5. **Flexibilita**: Podpora pro light/dark módy
6. **Responsive**: Integrované breakpointy
7. **Utility funkce**: Snadné použití v komponentách

## 📝 Příklad komponenty

```typescript
import React from 'react';
import { 
  colors, 
  typography, 
  spacing, 
  borderRadius, 
  getColor, 
  getSpacing, 
  getTypography 
} from '@/lib/design-system';

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  ...props 
}) => {
  const baseStyles = {
    padding: `${getSpacing(2)} ${getSpacing(4)}`,
    borderRadius: borderRadius.md,
    fontSize: getTypography('sm'),
    fontWeight: getTypography('medium'),
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const variantStyles = {
    primary: {
      backgroundColor: getColor('primary', 'light'),
      color: getColor('primaryForeground', 'light'),
    },
    secondary: {
      backgroundColor: getColor('secondary', 'light'),
      color: getColor('secondaryForeground', 'light'),
    },
  };

  return (
    <button
      style={{
        ...baseStyles,
        ...variantStyles[variant],
      }}
      {...props}
    >
      {children}
    </button>
  );
};
```

## 📝 Příklad textových komponent

```typescript
import React from 'react';
import { 
  Title, 
  Subtitle, 
  Section, 
  Body, 
  Link, 
  Code, 
  Quote 
} from '@/components/ui/text';

export const Article = () => {
  return (
    <article>
      <Title color="title" mode="light">
        Hlavní nadpis článku
      </Title>
      
      <Subtitle color="subtitle" mode="light">
        Podnadpis s popisem
      </Subtitle>
      
      <Body color="body" mode="light">
        Toto je běžný text článku. Používá konzistentní typografii z design systému.
      </Body>
      
      <Section color="title" mode="light">
        Sekce článku
      </Section>
      
      <Body color="body" mode="light">
        Další obsah s <Link href="#" color="link" mode="light">odkazem</Link> a 
        <Code color="body" mode="light">kódem</Code>.
      </Body>
      
      <Quote color="secondary" mode="light">
        "Inspirativní citát z článku."
      </Quote>
    </article>
  );
};
```

## 🔄 Aktualizace

Při změně hodnot v design systému se automaticky aktualizují:
- CSS proměnné v `globals.css`
- Tailwind CSS třídy
- Všechny komponenty používající design systém

## 📚 Související soubory

- `src/lib/design-system.ts` - Hlavní design systém
- `src/lib/design-system-example.tsx` - Příklady použití
- `src/app/globals.css` - CSS proměnné
- `components.json` - Shadcn/ui konfigurace
