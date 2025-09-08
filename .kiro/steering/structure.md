# Project Structure

## Root Directory
- `src/` - Main source code
- `public/` - Static assets (SVG icons, images)
- `.kiro/` - Kiro configuration and steering files
- Configuration files: `next.config.ts`, `tsconfig.json`, `components.json`

## Source Organization (`src/`)

### App Directory (`src/app/`)
- **App Router structure** (Next.js 15)
- `layout.tsx` - Root layout with theme provider and global components
- `page.tsx` - Home page composition
- `globals.css` - Global styles and Tailwind configuration
- `components/` - Page-specific components (dock, hero, footer, etc.)

### Shared Components (`src/components/`)
- `ui/` - shadcn/ui base components (cards, buttons, etc.)
- `magicui/` - Custom animated UI components (blur-fade, interactive patterns)
- `theme-provider.tsx` - Theme context provider

### Utilities (`src/lib/`)
- `utils.ts` - Utility functions (likely cn() for class merging)

## Component Architecture

### Naming Conventions
- Page components: PascalCase (e.g., `Hero`, `Footer`)
- UI components: kebab-case files, PascalCase exports
- Demo components: suffixed with "Demo" (e.g., `FloatingDockDemo`)

### Component Organization
- **Page-level components** in `src/app/components/`
- **Reusable UI components** in `src/components/ui/`
- **Custom animated components** in `src/components/magicui/`

### Layout Pattern
- Global layout includes theme provider and floating dock
- Page content wrapped in animation components (`BlurFade`)
- Modular component composition in main pages