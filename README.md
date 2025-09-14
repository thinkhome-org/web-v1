# ThinkHome - Smart Home Solutions

A modern, responsive web application built with Next.js 15, React 19, and Tailwind CSS, showcasing smart home solutions and services.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Theme**: Automatic theme switching with next-themes
- **Interactive Components**: Custom UI components with smooth animations
- **Static Site Generation**: Optimized for performance and SEO
- **GitHub Pages Deployment**: Automated CI/CD pipeline

## 🛠️ Tech Stack

### Core Technologies
- **Framework**: Next.js 15.5.3 with Turbopack
- **Runtime**: React 19.1.1 & React DOM 19.1.1
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.x
- **Theme Management**: next-themes 0.4.6

### UI Components & Icons
- **Icons**: Tabler Icons React & Lucide React
- **Animations**: Motion (Framer Motion) 12.23.12
- **UI Library**: Custom components with shadcn/ui architecture
- **Styling Utils**: clsx, tailwind-merge, class-variance-authority

### Development Tools
- **Linting**: ESLint 9.x with Next.js config
- **PostCSS**: Tailwind CSS processing
- **Package Manager**: Yarn
- **CI/CD**: GitHub Actions for automated deployment

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── contact/           # Contact page
│   ├── legal/             # Legal pages (privacy, terms, cookies)
│   ├── services/          # Services page
│   ├── team/              # Team page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── features/          # Feature-specific components
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

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd web-v1
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start development server**
   ```bash
   yarn dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `yarn dev` - Start development server with Turbopack
- `yarn build` - Build production application
- `yarn start` - Start production server
- `yarn lint` - Run ESLint for code quality

## 🎨 Styling & Theming

### Tailwind CSS Configuration
- **CSS Variables**: Custom properties for theme colors
- **Dark Mode**: Automatic switching based on system preference
- **Responsive Design**: Mobile-first breakpoints
- **Custom Components**: Styled with Tailwind utilities

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

## 🧩 Component Architecture

### UI Components
- **3D Card**: Interactive card with 3D effects
- **Feature Card**: Service/feature showcase cards
- **Team Member Card**: Team member profiles
- **Floating Dock**: Navigation component
- **Interactive Grid**: Animated background patterns

### Layout Components
- **Hero Section**: Landing page hero with animations
- **Footer**: Site-wide footer with links
- **Dock**: Floating navigation bar

## 📱 Pages Overview

- **Home (`/`)**: Landing page with hero, services overview
- **Services (`/services`)**: Detailed service offerings
- **Team (`/team`)**: Team member profiles with CSV data loading
- **Contact (`/contact`)**: Contact information with copy-to-clipboard
- **Legal (`/legal/`)**: Privacy policy, terms, cookie policy

## 🔧 Development Guidelines

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

## 🚀 Deployment

### GitHub Pages
Automated deployment via GitHub Actions:
- **Trigger**: Push to main branch
- **Build**: Next.js static export
- **Deploy**: GitHub Pages with custom domain support

### Manual Deployment
```bash
# Build for production
yarn build

# The output will be in the 'out' directory
# Upload contents to your hosting provider
```

## 🔍 Performance Optimizations

- **Static Generation**: Pre-rendered pages for faster loading
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic bundle splitting
- **Turbopack**: Fast development builds
- **CSS Optimization**: Tailwind CSS purging

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
   # Rebuild Tailwind CSS
   yarn build
   ```

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📞 Support

For questions or support, please contact the development team.

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
