# Thrive Tools Website

Redesigned landing page for ThriveTools.co — a wellness and biohacking brand by Eden. Dark cosmic aesthetic with rose-gold accents matching the brand logo.

## Architecture

- **Frontend**: React + TypeScript + Vite
- **Routing**: Wouter
- **Styling**: Tailwind CSS + Shadcn UI components
- **Fonts**: Montserrat (sans), Playfair Display (display/serif)
- **Icons**: Lucide React + React Icons (for social media)

## Pages

- `/` — Home page (`client/src/pages/Home.tsx`) — exact text from thrivetools.co
- `/discounts-coupon-codes` — Discount codes page (`client/src/pages/Discounts.tsx`) — cards for 3 categories: Vitamins & Supplements (12), Health Tech (16), Ethical Clothing (6)

## Shared Components

- `client/src/components/Navigation.tsx` — Fixed nav bar with logo, nav links matching original site structure, mobile menu with dropdowns
- `client/src/components/Footer.tsx` — Logo, social links, navigation links

## Design System

### Colors (Dark Cosmic Theme)
- Background: Deep purple-black `#0d0514`
- Primary accent: Rose `#c97a8e` / `rose-500`
- Secondary accent: Purple `#9b6fa5`
- Gold accent: `#d4a867`

### CSS Custom Utilities (index.css)
- `.text-gradient-rose`, `.text-gradient-purple` — gradient text
- `.card-glass` — glassmorphism card styling
- `.glow-rose`, `.glow-purple` — glow effects
- `.animate-float`, `.animate-float-delayed` — floating animations
- `.section-divider` — gradient horizontal rule
- `.shimmer` — shimmer animation

## Assets

- `@assets/image_1772756046665.png` — Main Thrive Tools logo (header + hero + footer)
- Eden's photos referenced via original thrivetools.co URLs

## Navigation Structure (matches original site)

Home, Personalized Guidance, Quantum Healing, Breathwork, Retreats & Workshops (submenu), Events, Store > My Top Picks, About, Contact
