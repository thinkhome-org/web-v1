# ThinkHome - Smart Home Solutions

A modern, responsive web application built with Next.js 15, React 19, and Tailwind CSS, showcasing smart home solutions and services.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Yarn (recommended) or npm
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd web-v1

# Install dependencies
yarn install

# Start development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `yarn dev` - Start development server with Turbopack
- `yarn build` - Build production application
- `yarn start` - Start production server
- `yarn lint` - Run ESLint for code quality

## 🛠️ Tech Stack

### Core Technologies
- **Framework**: Next.js 15.5.3 with Turbopack
- **Runtime**: React 19.1.1 & React DOM 19.1.1
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.x
- **Theme Management**: next-themes 0.4.6

### UI & Animations
- **Icons**: Tabler Icons React & Lucide React
- **Animations**: Framer Motion 12.23.12
- **UI Components**: Custom components with shadcn/ui architecture
- **Styling Utils**: clsx, tailwind-merge, class-variance-authority

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── contact/           # Contact page
│   ├── kontakt/           # Contact page (Czech)
│   ├── legal/             # Legal pages (privacy, terms, cookies)
│   ├── services/          # Services page
│   ├── team/              # Team page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── layout/            # Layout components (header, footer, hero)
│   ├── magicui/           # Custom UI effects
│   ├── sections/          # Page sections
│   ├── ui/                # Base UI components
│   ├── cookie-banner.tsx  # Cookie consent banner
│   ├── copy-text.tsx      # Copy-to-clipboard component
│   └── providers.tsx      # Context providers
└── lib/                   # Utility functions
    ├── polyfills.ts       # Browser compatibility
    └── utils.ts           # Helper functions
```

## 🎨 Features

- **Modern Design**: Responsive, mobile-first design with Tailwind CSS
- **Dark/Light Theme**: Automatic theme switching with system preference detection
- **Interactive Components**: 3D cards, animated backgrounds, and smooth transitions
- **Static Site Generation**: Optimized for performance and SEO
- **TypeScript**: Full type safety throughout the application
- **Accessibility**: Built with accessibility best practices
- **GitHub Pages Deployment**: Automated CI/CD pipeline

## 📱 Pages

- **Home (`/`)**: Landing page with hero section and services overview
- **Services (`/services`)**: Detailed service offerings
- **Team (`/team`)**: Team member profiles with dynamic data loading
- **Contact (`/contact` & `/kontakt`)**: Contact information with copy-to-clipboard functionality
- **Legal (`/legal/`)**: Privacy policy, terms of service, and cookie policy

## 🚀 Deployment

### GitHub Pages (Automatic)
The application automatically deploys to GitHub Pages when changes are pushed to the main branch.

### Manual Deployment
```bash
# Build for production
yarn build

# The output will be in the 'out' directory
# Upload contents to your hosting provider
```

## 🔧 Development

### Code Style
- **TypeScript**: Strict type checking enabled
- **ESLint**: Next.js recommended configuration
- **File Naming**: kebab-case for components and pages
- **Import Organization**: Absolute imports with `@/` alias

### Component Guidelines
```typescript
// Component structure example
interface ComponentProps {
  title: string;
  className?: string;
}

export function Component({ title, className }: ComponentProps) {
  return (
    <div className={cn("base-styles", className)}>
      {title}
    </div>
  );
}
```

### Theme System
```typescript
// Automatic theme detection
<ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange
>
```

## 🔍 Performance

- **Static Generation**: Pre-rendered pages for faster loading
- **Code Splitting**: Automatic bundle splitting with Next.js
- **Turbopack**: Fast development builds
- **CSS Optimization**: Tailwind CSS purging for smaller bundles
- **Image Optimization**: Configured for static export

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   # Clear cache and reinstall
   rm -rf .next node_modules yarn.lock
   yarn install
   yarn build
   ```

2. **TypeScript Errors**
   ```bash
   # Check TypeScript configuration
   yarn tsc --noEmit
   ```

3. **Styling Issues**
   ```bash
   # Rebuild with fresh cache
   rm -rf .next
   yarn build
   ```

## 🤝 Contributing

1. Create a feature branch from `main`
2. Make your changes with proper TypeScript types
3. Test thoroughly (run `yarn build` and `yarn lint`)
4. Submit a pull request with a clear description

### Commit Message Format
```
type(scope): description

# Examples:
feat(hero): add animated background pattern
fix(navigation): resolve mobile menu toggle issue
docs(readme): update installation instructions
```

## 📄 License

This project is private and proprietary.

## 📞 Support

For questions or support, please contact the development team.

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
