# Thrive Tools Website

A redesigned landing page for ThriveTools.co — a wellness supplement brand. The site features a premium dark cosmic aesthetic with rose-gold accents matching the brand logo.

## Overview

A single-page marketing/landing website for Thrive Tools wellness products. No backend API needed — all frontend with static content.

## Architecture

- **Frontend**: React + TypeScript + Vite
- **Routing**: Wouter
- **Styling**: Tailwind CSS + Shadcn UI components
- **Fonts**: Montserrat (sans), Playfair Display (display/serif)
- **Icons**: Lucide React + React Icons (for social media)

## Pages

- `/` — Full landing page (`client/src/pages/Home.tsx`)

## Design System

### Colors (Dark Cosmic Theme)
- Background: Deep purple-black `#0d0514`
- Primary accent: Rose `#c97a8e` / `rose-500`
- Secondary accent: Purple `#9b6fa5`
- Gold accent: `#d4a867`

### CSS Custom Properties (index.css)
- `--primary`: Rose 330° 55% 65% (dark mode)
- `--background`: Deep purple 280° 35% 6% (dark mode)
- Custom utility classes: `.text-gradient-rose`, `.text-gradient-purple`, `.card-glass`, `.glow-rose`, `.animate-float`

## Sections

1. **Navigation** — Fixed header with logo, nav links, cart icon
2. **Hero** — Full-screen cosmic background with logo, headline, CTAs
3. **About/Founder** — Problem statement + founder photo + stats
4. **Why Different** — 4 differentiating features grid
5. **Products** — 4 product cards (Neural Flow, Vital Restore, Heart Resonance, Immune Shield)
6. **Testimonials** — 4 customer reviews
7. **How It Works** — 3-step process
8. **Newsletter CTA** — Email subscribe with confirmation state
9. **Footer** — Logo, nav links, social media icons

## Assets

- `@assets/image_1772756046665.png` — Main Thrive Tools logo (used in hero + footer)
- `@assets/IMG_6279_1772756331583.jpeg` — Founder/brand photo (used in About section)

## User Preferences

- Deep purple dark theme matching the logo's cosmic aesthetic
- Rose gold + purple accent palette
- Premium wellness brand feel (not clinical/medical)
- Playfair Display for headlines (brand typography)
