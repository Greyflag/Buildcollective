# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a Next.js 15 landing page for "The Build Collective" - a community platform designed to attract and recruit potential startup founders. The site showcases various startup projects and encourages visitors to join as co-founders. Built with React 19, TypeScript, and Tailwind CSS using the App Router architecture.

## Commands

### Development
```bash
npm run dev      # Start development server on localhost:3000
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Common Development Tasks
```bash
# Install dependencies
npm install

# Add new shadcn/ui components
npx shadcn@latest add [component-name]
```

## Architecture

### Directory Structure
- `/app` - Next.js App Router pages and layouts
  - `/` - Landing page with hero sections and startup showcases
  - `/about` - About The Build Collective and its mission
  - `/connect` - Contact form for potential founders to reach out
  - `/portfolio/[slug]` - Individual startup project pages
  - `layout.tsx` - Root layout with ThemeProvider
  - `globals.css` - Global styles and Tailwind imports
  
- `/components` - React components
  - Business components: hero sections, startup showcases, founder testimonials, CTAs
  - `/ui` - shadcn/ui components (50+ pre-built components)
  
- `/lib` - Utility functions including `cn()` for className merging
- `/hooks` - Custom React hooks
- `/public` - Static assets, startup logos, and project images

### Key Technologies
- **Next.js 15.2.4** with App Router
- **React 19** with TypeScript
- **Tailwind CSS** with custom configuration
- **shadcn/ui** components (configured via components.json)
- **Framer Motion** for engaging animations
- **Three.js** for 3D visualizations (particle effects)
- **React Hook Form** + **Zod** for founder application forms

### Important Configuration
- TypeScript errors and ESLint warnings are ignored during builds (see next.config.ts)
- Dark mode is the default theme (startup/tech aesthetic)
- Custom features include particle backgrounds and custom cursor effects for engagement

### Component Pattern
When creating new components:
1. Use TypeScript with proper type definitions
2. Follow the existing shadcn/ui patterns for consistency
3. Place business components in `/components`
4. Use the `cn()` utility from `/lib/utils` for className merging
5. Focus on conversion-oriented design patterns

### Styling
- Tailwind CSS for styling
- CSS variables defined in globals.css for theming
- Use existing color variables (e.g., `bg-background`, `text-foreground`)
- Responsive design with Tailwind breakpoints
- Dark theme optimized for tech/startup audience
- **IMPORTANT: Never use emojis in any code, content, or comments**
- **Reference `/app/style-guide/page.tsx` for all UI component patterns and design tokens**

### Content Considerations
- Content should focus on startup opportunities and founder benefits
- Showcase successful projects and potential
- Clear CTAs for joining the community
- Professional yet approachable tone

## Notes
- No testing framework is currently configured
- The project uses npm (package-lock.json exists)
- Recent refactoring replaced "Josiah" with "Jon Wentel" throughout the codebase
- Primary goal: Convert visitors into community members/potential co-founders