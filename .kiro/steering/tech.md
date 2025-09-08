# Technology Stack

## Core Framework
- **Next.js 15** with App Router and Turbopack
- **React 19** with TypeScript
- **TypeScript 5** for type safety

## Styling & UI
- **Tailwind CSS 4** for utility-first styling
- **shadcn/ui** components (New York style variant)
- **next-themes** for dark/light mode support
- **Framer Motion** (via `motion` package) for animations
- **Lucide React** and **Tabler Icons** for iconography

## Development Tools
- **ESLint** with Next.js configuration
- **pnpm** as package manager
- **Turbopack** for fast builds and development

## Key Libraries
- `clsx` and `tailwind-merge` for conditional styling
- `class-variance-authority` for component variants
- `tw-animate-css` for additional animations

## Common Commands

```bash
# Development
pnpm dev              # Start dev server with Turbopack
pnpm build            # Build for production with Turbopack
pnpm start            # Start production server
pnpm lint             # Run ESLint

# Package management
pnpm install          # Install dependencies
pnpm add <package>    # Add new dependency
```

## Path Aliases
- `@/*` maps to `./src/*` for clean imports