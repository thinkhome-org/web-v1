# Technical Documentation - ThinkHome Web Application

## Table of Contents
1. [Technical Architecture](#1-technical-architecture)
2. [Development Environment Setup](#2-development-environment-setup)
3. [Dependencies & Integration](#3-dependencies--integration)
4. [UI Components Guidelines](#4-ui-components-guidelines)
5. [Code Organization](#5-code-organization)
6. [API Documentation](#6-api-documentation)
7. [Deployment & Configuration](#7-deployment--configuration)
8. [Performance Optimization](#8-performance-optimization)
9. [Testing Methodologies](#9-testing-methodologies)
10. [Version Control Workflow](#10-version-control-workflow)

---

## 1. Technical Architecture

### 1.1 Overview
ThinkHome web application is built using modern web technologies with a focus on performance, SEO, and user experience.

### 1.2 Core Technologies
- **Framework**: Next.js 15+ with App Router
- **Runtime**: Node.js with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui with custom extensions
- **Icons**: Tabler Icons
- **Fonts**: Geist Sans & Geist Mono
- **Theme**: next-themes for dark/light mode support

### 1.3 Architecture Patterns
- **Static Site Generation (SSG)**: Configured for export as static site
- **Component-Based Architecture**: Modular React components
- **Design System**: Consistent UI patterns with shadcn/ui
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### 1.4 Configuration Files
```typescript
// next.config.ts - Static export configuration
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://thinkhome.org' : '',
};
```

### 1.5 TypeScript Configuration
- **Target**: ES2017
- **Module Resolution**: Bundler
- **Path Mapping**: `@/*` → `./src/*`
- **Strict Mode**: Enabled
- **JSX**: Preserve (handled by Next.js)

---

## 2. Development Environment Setup

### 2.1 Prerequisites
- **Node.js**: Version 18.17+ or 20+
- **Package Manager**: Yarn (preferred) or npm
- **Git**: Latest version
- **IDE**: VS Code recommended with extensions:
  - TypeScript and JavaScript Language Features
  - Tailwind CSS IntelliSense
  - ESLint
  - Prettier

### 2.2 Installation Steps

```bash
# Clone the repository
git clone <repository-url>
cd web-v1

# Install dependencies
yarn install
# or
npm install

# Start development server
yarn dev
# or
npm run dev
```

### 2.3 Development Scripts
```json
{
  "dev": "next dev --turbopack",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

### 2.4 Environment Variables
Create `.env.local` file:
```env
NODE_ENV=development
# Add other environment variables as needed
```

### 2.5 IDE Configuration
**VS Code Settings** (`.vscode/settings.json`):
```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "tailwindCSS.experimental.classRegex": [
    ["cn\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

---

## 3. Dependencies & Integration

### 3.1 Core Dependencies

#### Production Dependencies
```json
{
  "next": "^15.1.3",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "next-themes": "^0.4.4",
  "tailwind-merge": "^2.5.5",
  "clsx": "^2.1.1",
  "@tabler/icons-react": "^3.26.0",
  "framer-motion": "^11.15.0"
}
```

#### Development Dependencies
```json
{
  "typescript": "^5.7.2",
  "@types/node": "^22.10.2",
  "@types/react": "^19.0.2",
  "@types/react-dom": "^19.0.2",
  "eslint": "^9.17.0",
  "eslint-config-next": "^15.1.3",
  "tailwindcss": "^3.4.17",
  "postcss": "^8.5.1"
}
```

### 3.2 Integration Methods

#### Tailwind CSS Integration
```javascript
// postcss.config.mjs
const config = {
  plugins: ["@tailwindcss/postcss"],
};
```

#### Component Library Integration
```json
// components.json - shadcn/ui configuration
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "iconLibrary": "@tabler/icons"
}
```

### 3.3 Utility Functions
```typescript
// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

---

## 4. UI Components Guidelines

### 4.1 Component Structure
```
src/components/
├── ui/              # Base UI components (shadcn/ui)
├── layout/          # Layout components
├── sections/        # Page sections
├── features/        # Feature-specific components
├── magicui/         # Custom animated components
└── providers.tsx    # Context providers
```

### 4.2 Component Categories

#### Base UI Components (`/ui`)
- `card.tsx` - Basic card component
- `floating-dock.tsx` - Navigation dock
- `3d-card.tsx` - Interactive 3D cards
- `feature-card.tsx` - Feature display cards
- `team-member-card.tsx` - Team member profiles
- `wobble-card.tsx` - Animated wobble cards

#### Layout Components (`/layout`)
- `hero.tsx` - Hero section
- `dock.tsx` - Floating navigation dock
- `footer.tsx` - Site footer

#### Magic UI Components (`/magicui`)
- `blur-fade.tsx` - Blur fade animations
- `interactive-grid-pattern.tsx` - Interactive backgrounds
- `interactive-hover-button.tsx` - Hover effect buttons

### 4.3 Component Usage Guidelines

#### Creating New Components
```typescript
// Component template
import { cn } from "@/lib/utils";

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export function Component({ className, children, ...props }: ComponentProps) {
  return (
    <div className={cn("base-styles", className)} {...props}>
      {children}
    </div>
  );
}
```

#### Styling Guidelines
- Use `cn()` utility for conditional classes
- Follow Tailwind CSS naming conventions
- Implement responsive design with mobile-first approach
- Use CSS variables for theme consistency

### 4.4 Theme Integration
```typescript
// Theme provider setup
export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
```

---

## 5. Code Organization

### 5.1 Project Structure
```
web-v1/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   ├── kontakt/         # Contact page
│   │   ├── legal/           # Legal pages
│   │   ├── sluzby/          # Services page
│   │   └── tym/             # Team page
│   ├── components/          # React components
│   └── lib/                 # Utility functions
├── public/                  # Static assets
├── .github/workflows/       # CI/CD workflows
└── configuration files
```

### 5.2 File Naming Conventions
- **Components**: PascalCase (`Hero.tsx`)
- **Pages**: lowercase (`page.tsx`)
- **Utilities**: camelCase (`utils.ts`)
- **Styles**: kebab-case (`globals.css`)
- **Directories**: lowercase with hyphens

### 5.3 Import Organization
```typescript
// 1. React and Next.js imports
import React from "react";
import { Metadata } from "next";

// 2. Third-party libraries
import { clsx } from "clsx";

// 3. Internal components and utilities
import { Hero } from "@/components/layout/hero";
import { cn } from "@/lib/utils";

// 4. Relative imports
import "./styles.css";
```

### 5.4 Best Practices

#### Component Design
- **Single Responsibility**: Each component has one clear purpose
- **Composition over Inheritance**: Use composition patterns
- **Props Interface**: Always define TypeScript interfaces
- **Default Props**: Use default parameters instead of defaultProps

#### Code Style
- **TypeScript**: Strict mode enabled
- **ESLint**: Configured with Next.js rules (currently relaxed for development)
- **Formatting**: Consistent indentation and spacing
- **Comments**: JSDoc for complex functions

#### Performance
- **Code Splitting**: Automatic with Next.js App Router
- **Image Optimization**: Disabled for static export
- **Bundle Analysis**: Use `next bundle-analyzer`

---

## 6. API Documentation

### 6.1 Current API Status
The current application is a static site with no backend API endpoints. All content is statically generated.

### 6.2 Future API Integration Points

#### Contact Form API
```typescript
// Future implementation
interface ContactFormData {
  name: string;
  email: string;
  message: string;
  company?: string;
}

// POST /api/contact
export async function submitContactForm(data: ContactFormData) {
  // Implementation pending
}
```

#### Newsletter Subscription
```typescript
// Future implementation
interface NewsletterData {
  email: string;
}

// POST /api/newsletter
export async function subscribeNewsletter(data: NewsletterData) {
  // Implementation pending
}
```

### 6.3 External Integrations

#### Analytics
- **Google Analytics**: To be implemented
- **Cookie Consent**: Basic implementation present

#### SEO
- **Metadata**: Configured in `layout.tsx`
- **Open Graph**: Implemented
- **Twitter Cards**: Implemented
- **Robots.txt**: To be added
- **Sitemap**: To be generated

---

## 7. Deployment & Configuration

### 7.1 Deployment Strategy
The application is configured for static site generation and deployment to GitHub Pages.

### 7.2 GitHub Actions Workflow
```yaml
# .github/workflows/nextjs.yml
name: Deploy Next.js site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Detect package manager
        # Prefers Yarn, falls back to npm
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        
      - name: Install dependencies
        
      - name: Build with Next.js
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
```

### 7.3 Build Configuration
```typescript
// next.config.ts
const nextConfig: NextConfig = {
  output: 'export',           // Static export
  trailingSlash: true,        // GitHub Pages compatibility
  images: {
    unoptimized: true         // Required for static export
  },
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? 'https://thinkhome.org' 
    : '',
};
```

### 7.4 Environment Configuration

#### Production Environment
- **Domain**: `https://thinkhome.org`
- **CDN**: GitHub Pages
- **SSL**: Automatic via GitHub Pages

#### Development Environment
- **Port**: 3000 (default)
- **Hot Reload**: Enabled with Turbopack
- **Source Maps**: Enabled

### 7.5 Performance Configuration
- **Static Generation**: All pages pre-rendered
- **Asset Optimization**: Images unoptimized for static export
- **Bundle Splitting**: Automatic code splitting
- **Caching**: Browser caching via static files

---

## 8. Performance Optimization

### 8.1 Current Optimizations

#### Next.js Optimizations
- **Turbopack**: Enabled for faster development builds
- **Static Generation**: All pages pre-rendered at build time
- **Automatic Code Splitting**: Components loaded on demand
- **Font Optimization**: Google Fonts with `next/font`

#### CSS Optimizations
- **Tailwind CSS**: Purged unused styles in production
- **CSS Variables**: Efficient theme switching
- **Critical CSS**: Inlined for above-the-fold content

### 8.2 Image Optimization
```typescript
// Current: Unoptimized for static export
images: {
  unoptimized: true
}

// Recommended for dynamic hosting:
// - Use next/image component
// - Enable image optimization
// - Implement responsive images
```

### 8.3 Bundle Optimization

#### Analysis
```bash
# Install bundle analyzer
npm install --save-dev @next/bundle-analyzer

# Analyze bundle
ANALYZE=true npm run build
```

#### Tree Shaking
- **ES Modules**: All imports use ES module syntax
- **Dynamic Imports**: Use for heavy components
- **Library Optimization**: Import only needed functions

### 8.4 Runtime Performance

#### React Optimizations
```typescript
// Use React.memo for expensive components
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* Complex rendering */}</div>;
});

// Use useMemo for expensive calculations
const memoizedValue = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);
```

#### Animation Performance
- **Framer Motion**: Hardware-accelerated animations
- **CSS Transforms**: Use transform over position changes
- **Will-change**: Applied to animated elements

### 8.5 Loading Performance

#### Metrics to Monitor
- **First Contentful Paint (FCP)**
- **Largest Contentful Paint (LCP)**
- **Cumulative Layout Shift (CLS)**
- **First Input Delay (FID)**

#### Optimization Techniques
- **Preload Critical Resources**: Fonts, critical CSS
- **Lazy Loading**: Non-critical components
- **Resource Hints**: dns-prefetch, preconnect

---

## 9. Testing Methodologies

### 9.1 Testing Strategy

#### Current Status
- **Unit Tests**: Not implemented
- **Integration Tests**: Not implemented
- **E2E Tests**: Not implemented
- **Manual Testing**: Primary method

### 9.2 Recommended Testing Stack

#### Unit Testing
```bash
# Install testing dependencies
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

```typescript
// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
```

#### Component Testing
```typescript
// Example component test
import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/layout/hero';

describe('Hero Component', () => {
  it('renders hero title', () => {
    render(<Hero />);
    expect(screen.getByText('Moderní IT bez starostí')).toBeInTheDocument();
  });
});
```

### 9.3 End-to-End Testing

#### Playwright Setup
```bash
npm install --save-dev @playwright/test
```

```typescript
// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  use: {
    baseURL: 'http://localhost:3000',
  },
  webServer: {
    command: 'npm run dev',
    port: 3000,
  },
});
```

### 9.4 Testing Guidelines

#### Test Structure
- **Unit Tests**: `src/__tests__/`
- **Integration Tests**: `src/__tests__/integration/`
- **E2E Tests**: `e2e/`
- **Test Utilities**: `src/test-utils/`

#### Best Practices
- **Test User Behavior**: Focus on user interactions
- **Accessibility Testing**: Include a11y tests
- **Visual Regression**: Consider visual testing tools
- **Performance Testing**: Monitor Core Web Vitals

---

## 10. Version Control Workflow

### 10.1 Git Strategy

#### Branching Model
- **Main Branch**: `main` - Production-ready code
- **Feature Branches**: `feature/feature-name`
- **Hotfix Branches**: `hotfix/issue-description`
- **Development Branch**: `develop` (optional)

#### Branch Naming Conventions
```bash
# Feature branches
feature/add-contact-form
feature/improve-hero-section

# Bug fixes
fix/navigation-mobile-issue
fix/typo-in-footer

# Hotfixes
hotfix/critical-security-patch
```

### 10.2 Commit Guidelines

#### Commit Message Format
```
type(scope): description

[optional body]

[optional footer]
```

#### Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes
- **refactor**: Code refactoring
- **test**: Adding tests
- **chore**: Maintenance tasks

#### Examples
```bash
feat(hero): add animated background pattern
fix(navigation): resolve mobile menu toggle issue
docs(readme): update installation instructions
style(components): apply consistent formatting
```

### 10.3 Pull Request Process

#### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Manual testing completed
- [ ] Unit tests added/updated
- [ ] E2E tests added/updated

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
```

#### Review Process
1. **Automated Checks**: CI/CD pipeline runs
2. **Code Review**: At least one reviewer
3. **Testing**: Manual and automated tests
4. **Approval**: Required before merge
5. **Merge**: Squash and merge preferred

### 10.4 Release Process

#### Versioning
- **Semantic Versioning**: MAJOR.MINOR.PATCH
- **Tags**: Git tags for releases
- **Changelog**: Maintain CHANGELOG.md

#### Release Steps
1. **Version Bump**: Update package.json
2. **Changelog**: Update CHANGELOG.md
3. **Tag**: Create git tag
4. **Deploy**: Automatic via GitHub Actions
5. **Announce**: Update stakeholders

### 10.5 Git Hooks

#### Pre-commit Hooks
```bash
# Install husky
npm install --save-dev husky

# Setup pre-commit hook
npx husky add .husky/pre-commit "npm run lint"
```

#### Recommended Hooks
- **pre-commit**: Lint and format code
- **commit-msg**: Validate commit message format
- **pre-push**: Run tests before push

---

## Appendices

### A. Troubleshooting

#### Common Issues
1. **Build Failures**: Check Node.js version compatibility
2. **Styling Issues**: Verify Tailwind CSS configuration
3. **Type Errors**: Update TypeScript definitions
4. **Deployment Issues**: Check static export configuration

### B. Resources

#### Documentation Links
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

### C. Migration Notes

#### Future Considerations
- **Database Integration**: Consider when dynamic content needed
- **API Routes**: Implement when backend functionality required
- **Authentication**: Add when user accounts needed
- **CMS Integration**: Consider headless CMS for content management

---

*Last Updated: January 2025*
*Version: 1.0.0*