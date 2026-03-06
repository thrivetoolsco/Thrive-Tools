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
- `/about` — About page (`client/src/pages/About.tsx`) — Eden Laraki bio, sections on science/soul, roots, psychonaut journey, longevity
- `/personalized-guidance` — Personalized Guidance (`client/src/pages/PersonalizedGuidance.tsx`) — 2-col layout, CTA to contact
- `/quantum-healing` — Quantum Healing (`client/src/pages/QuantumHealing.tsx`) — accordions for treatment info, rates, disclaimer
- `/breathwork` — Breathwork (`client/src/pages/Breathwork.tsx`) — intro + 6 accordion types (individual, couples, business, corporate, kids, addiction)
- `/events` — Events (`client/src/pages/Events.tsx`) — newsletter signup, future/past event cards linking to individual pages
- `/events/thrive-1` — Docu Evening: Thrive 1 (`client/src/pages/events/Thrive1.tsx`)
- `/events/thrive-2` — Docu Evening: Thrive 2 (`client/src/pages/events/Thrive2.tsx`)
- `/events/drum-circle` — Drum Circle Breathwork (`client/src/pages/events/DrumCircle.tsx`)
- `/events/cacao-ceremonies` — Cacao Ceremonies (`client/src/pages/events/CacaoCeremonies.tsx`)
- `/events/psilocybin-forest-walk` — Psilocybin Forest Walk (`client/src/pages/events/PsilocybinForestWalk.tsx`)
- `/events/ayahuasca-journey` — Ayahuasca Journey Peru (`client/src/pages/events/AyahuascaJourney.tsx`)
- `/events/indoor-gardening` — Indoor Edible Gardening (`client/src/pages/events/IndoorGardening.tsx`)
- `/events/food-forest` — Thriving Food Forest (`client/src/pages/events/FoodForest.tsx`)
- `/contact` — Contact (`client/src/pages/Contact.tsx`) — frontend-only form with toast on submit
- `/discounts-coupon-codes` — Discount codes (`client/src/pages/Discounts.tsx`) — 4 categories: Vitamins (12), Health Tech (16), Ethical Clothing (6), Travels
- `/product-reviews` — Products Reviews listing (`client/src/pages/ProductReviews.tsx`) — 3 blog post cards
- `/product-reviews/im8-vs-ag1` — IM8 vs AG1 comparison review (`client/src/pages/reviews/Im8VsAg1.tsx`)
- `/product-reviews/im8-health-review` — IM8 Health in-depth review (`client/src/pages/reviews/Im8HealthReview.tsx`)
- `/product-reviews/vielight-neuro-review` — Vielight Neuro 2026 review (`client/src/pages/reviews/VielightNeuroReview.tsx`)
- `/product-reviews/hyperion-herbs` — Hyperion Herbs tonic herbs review (`client/src/pages/reviews/HyperionHerbs.tsx`)
- `/retreats-workshops/blossoming-bliss` — Blossoming Bliss retreat (`client/src/pages/retreats/BlossomingBliss.tsx`) — 6 themes, 7-day retreat, rates
- `/retreats-workshops/spiritual-nutrition` — Spiritual Nutrition (`client/src/pages/retreats/SpiritualNutrition.tsx`) — 3-day online intensive
- `/retreats-workshops/mescaline-wisdom` — Mescaline Wisdom (`client/src/pages/retreats/MescalineWisdom.tsx`) — Wachuma ceremonies, group rates
- `/retreats-workshops/inner-silence` — Inner Silence (`client/src/pages/retreats/InnerSilence.tsx`) — silent retreat, 14-30 day stays

## Shared Components

- `client/src/components/Navigation.tsx` — Fixed nav bar with logo, nav links matching original site structure, mobile menu with dropdowns
- `client/src/components/Footer.tsx` — Logo, social links, navigation links
- `client/src/components/PageLayout.tsx` — Shared page layout with title/subtitle hero, back button, gradient backgrounds

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

Home, My Top Picks, Personalized Guidance, Quantum Healing, Breathwork, Retreats & Workshops (submenu), Events, About, Contact
