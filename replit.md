# Karir.AI - AI Career Platform

## Overview

Karir.AI is a React-based web application that helps Indonesian young talents prepare for the AI era by providing career roadmaps, skill forecasting, CV optimization, and interview coaching. The platform aims to address the challenge of 7.28 million unemployed individuals in Indonesia by offering AI-powered career guidance and future-proof skill development.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible and customizable interface components
- **Styling**: Tailwind CSS with custom design tokens for a future-focused design system
- **Routing**: React Router DOM for client-side navigation and multi-page application structure
- **State Management**: React Query (TanStack Query) for server state management and caching

### Authentication & User Management
- **Authentication Provider**: Supabase Auth with support for email/password and OAuth providers (Google, GitHub, Twitter)
- **Session Management**: React Context API with custom useAuth hook for global authentication state
- **Protected Routes**: Authentication-based route protection and user session persistence

### UI/UX Design System
- **Color Palette**: Future-focused design with AI-era technology blues, growth greens, and innovation purples
- **Typography**: Clean, modern typography optimized for readability
- **Components**: Comprehensive UI component library including forms, dialogs, cards, navigation, and data visualization
- **Responsive Design**: Mobile-first approach with responsive breakpoints and adaptive layouts
- **Animations**: CSS animations and transitions for enhanced user experience

### Data Management
- **Assessment System**: Structured assessment questions with weighted scoring for career path recommendations
- **Job Database**: Comprehensive database of current and future job categories with AI replacement risk analysis
- **Skill Forecasting**: Dynamic skill mapping with learning roadmaps and difficulty assessments
- **Roadmap Generation**: Personalized learning paths with phases, prerequisites, and learning materials

### Page Structure
- **Landing Pages**: Hero section, features overview, pricing, and success stories
- **Feature Pages**: Dedicated pages for each core feature (skill forecasting, CV builder, interview coach, etc.)
- **Assessment Flow**: Dynamic skill blueprint generation based on user responses
- **Authentication**: Unified auth page with sign-in/sign-up tabs and social login options

### Development Configuration
- **TypeScript**: Configured with relaxed strict mode for rapid development while maintaining type safety
- **ESLint**: Code quality enforcement with React-specific rules and hooks validation
- **Path Aliases**: Simplified imports using @ alias for src directory organization

## External Dependencies

### Core Dependencies
- **@supabase/supabase-js**: Backend-as-a-Service for authentication, database, and real-time features
- **@tanstack/react-query**: Server state management, caching, and data synchronization
- **@hookform/resolvers**: Form validation with schema resolvers integration
- **react-router-dom**: Client-side routing and navigation management

### UI Component Libraries
- **@radix-ui/react-***: Comprehensive set of accessible, unstyled UI primitives for building the design system
- **lucide-react**: Modern icon library with consistent styling and extensive icon coverage
- **cmdk**: Command palette and search functionality for enhanced user interaction

### Styling & Design
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **class-variance-authority**: Type-safe component variants for consistent design patterns
- **clsx**: Utility for constructing className strings conditionally

### Development Tools
- **vite**: Fast build tool and development server with hot module replacement
- **@vitejs/plugin-react-swc**: React plugin with SWC for faster compilation
- **lovable-tagger**: Development-mode component tagging for debugging and development assistance

### Form & Input Management
- **react-hook-form**: Performant form library with minimal re-renders
- **input-otp**: Specialized OTP input component for authentication flows
- **react-day-picker**: Date picker component for scheduling and calendar features

### Carousel & Media
- **embla-carousel-react**: Touch-friendly carousel component for showcasing content
- **next-themes**: Theme management for dark/light mode switching

### Utility Libraries
- **date-fns**: Modern date utility library for date manipulation and formatting
- **tailwind-merge**: Utility for merging Tailwind CSS classes intelligently