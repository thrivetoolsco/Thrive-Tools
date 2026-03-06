import { useState } from "react";
import logoImg from "@assets/image_1772756046665.png";
import founderImg from "@assets/IMG_6279_1772756331583.jpeg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  Menu,
  X,
  Star,
  ArrowRight,
  Zap,
  Brain,
  Heart,
  Shield,
  Sparkles,
  ChevronDown,
  Mail,
  Instagram,
} from "lucide-react";
import { SiTiktok, SiPinterest } from "react-icons/si";

const products = [
  {
    id: 1,
    name: "Neural Flow",
    category: "Cognitive",
    tagline: "Sharpen focus. Unlock clarity.",
    description:
      "A precision-crafted nootropic blend using bioavailable compounds that cross the blood-brain barrier. No jitter, no crash — just sustained mental clarity.",
    price: "$64",
    badge: "Best Seller",
    badgeColor: "bg-rose-400/20 text-rose-300 border-rose-400/30",
    icon: Brain,
    gradient: "from-purple-900/40 to-rose-900/20",
    features: ["Lion's Mane Mushroom", "Alpha-GPC", "Bacopa Monnieri", "L-Theanine"],
  },
  {
    id: 2,
    name: "Vital Restore",
    category: "Recovery",
    tagline: "Rebuild while you sleep.",
    description:
      "Your body does its best work overnight. Vital Restore amplifies that window with adaptogens, amino acids, and minerals your cells are starving for.",
    price: "$58",
    badge: "New",
    badgeColor: "bg-amber-400/20 text-amber-300 border-amber-400/30",
    icon: Zap,
    gradient: "from-amber-900/30 to-purple-900/30",
    features: ["Ashwagandha KSM-66", "Magnesium Glycinate", "NMN", "Zinc Bisglycinate"],
  },
  {
    id: 3,
    name: "Heart Resonance",
    category: "Cardio + Mood",
    tagline: "Balance from the inside out.",
    description:
      "Cardiovascular health and emotional regulation are deeply linked. Heart Resonance targets both with compounds shown to reduce cortisol and support heart coherence.",
    price: "$52",
    badge: "Popular",
    badgeColor: "bg-pink-400/20 text-pink-300 border-pink-400/30",
    icon: Heart,
    gradient: "from-pink-900/30 to-purple-900/30",
    features: ["CoQ10 (Ubiquinol)", "Hawthorn Berry", "Rhodiola Rosea", "Magnesium Taurate"],
  },
  {
    id: 4,
    name: "Immune Shield",
    category: "Immunity",
    tagline: "Your defense, upgraded.",
    description:
      "A fortress for your immune system. No cheap echinacea blends — just the compounds with the strongest evidence base, dosed to actually work.",
    price: "$48",
    badge: null,
    badgeColor: "",
    icon: Shield,
    gradient: "from-indigo-900/30 to-purple-900/40",
    features: ["Vitamin D3 + K2", "Quercetin + Bromelain", "Beta-Glucan", "Selenium"],
  },
];

const testimonials = [
  {
    name: "Mariana L.",
    handle: "@marianaheals",
    text: "I've tried probably 30 supplements over the past decade. Thrive Tools is the first brand that made me feel genuinely different in under two weeks. My focus, sleep, mood — all elevated.",
    stars: 5,
    product: "Neural Flow",
  },
  {
    name: "Devon K.",
    handle: "@devonkwellness",
    text: "Finally — a wellness brand that doesn't insult my intelligence. The ingredient transparency alone earned my trust. The results sealed it.",
    stars: 5,
    product: "Vital Restore",
  },
  {
    name: "Sofia R.",
    handle: "@sofiathrive",
    text: "I was skeptical but desperate. My energy was non-existent post-burnout. Within three weeks of using Vital Restore, I felt like myself again. Genuinely emotional about it.",
    stars: 5,
    product: "Vital Restore",
  },
  {
    name: "James A.",
    handle: "@jamesoptimize",
    text: "Heart Resonance lowered my resting heart rate by 8 BPM over 6 weeks. My cardiologist asked what I changed. The answer was Thrive Tools.",
    stars: 5,
    product: "Heart Resonance",
  },
];

const whyDifferent = [
  {
    icon: Shield,
    title: "No Synthetic Fillers",
    desc: "Every capsule contains only what's on the label. No magnesium stearate, no titanium dioxide, no cheap flow agents.",
  },
  {
    icon: Sparkles,
    title: "Bioavailable Forms Only",
    desc: "We use the most absorbable form of each compound — not the cheapest. If your body can't use it, why take it?",
  },
  {
    icon: Brain,
    title: "Evidence-Based Formulas",
    desc: "Every ingredient is selected based on peer-reviewed research — not trends, not influencer deals, not marketing budgets.",
  },
  {
    icon: Zap,
    title: "Therapeutic Doses",
    desc: "We dose to the levels used in clinical studies. Proprietary blends that hide under-dosed ingredients are not something we do.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const handleAddToCart = () => {
    setCartCount((c) => c + 1);
  };

  return (
    <div className="min-h-screen bg-[#0d0514] text-white overflow-x-hidden">

      {/* ─── NAVIGATION ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5" style={{ background: "rgba(13,5,20,0.92)", backdropFilter: "blur(16px)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            <button
              data-testid="button-cart"
              className="relative flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <a href="#" className="flex-shrink-0" data-testid="link-logo">
              <img
                src={logoImg}
                alt="Thrive Tools"
                className="h-10 w-auto object-contain"
              />
            </a>

            <div className="hidden md:flex items-center gap-6">
              <a href="#products" data-testid="link-nav-products" className="text-sm text-white/70 hover:text-white transition-colors tracking-wide uppercase font-medium">Shop</a>
              <a href="#about" data-testid="link-nav-about" className="text-sm text-white/70 hover:text-white transition-colors tracking-wide uppercase font-medium">About</a>
              <a href="#why" data-testid="link-nav-why" className="text-sm text-white/70 hover:text-white transition-colors tracking-wide uppercase font-medium">Why Us</a>
              <a href="#subscribe" data-testid="link-nav-subscribe">
                <Button size="sm" className="bg-rose-500/90 text-white border-0 rounded-full px-5 text-xs tracking-widest uppercase font-semibold">
                  Get Started
                </Button>
              </a>
            </div>

            <button
              data-testid="button-mobile-menu"
              className="md:hidden text-white/70 hover:text-white transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/5 py-4 px-6" style={{ background: "rgba(13,5,20,0.98)" }}>
            <div className="flex flex-col gap-4">
              <a href="#products" className="text-white/70 hover:text-white text-sm uppercase tracking-wide font-medium" onClick={() => setMenuOpen(false)}>Shop</a>
              <a href="#about" className="text-white/70 hover:text-white text-sm uppercase tracking-wide font-medium" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#why" className="text-white/70 hover:text-white text-sm uppercase tracking-wide font-medium" onClick={() => setMenuOpen(false)}>Why Us</a>
              <a href="#subscribe" className="text-white/70 hover:text-white text-sm uppercase tracking-wide font-medium" onClick={() => setMenuOpen(false)}>Subscribe</a>
            </div>
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, #2d0e3e 0%, #1a0824 40%, #0d0514 100%)",
        }}
      >
        {/* Cosmic orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20 animate-float" style={{ background: "radial-gradient(circle, #c97a8e 0%, transparent 70%)", filter: "blur(40px)" }} />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-15 animate-float-delayed" style={{ background: "radial-gradient(circle, #9b6fa5 0%, transparent 70%)", filter: "blur(50px)" }} />
          <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #d4a867 0%, transparent 70%)", filter: "blur(35px)" }} />
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(rgba(201,122,142,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,122,142,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-16">
          {/* Logo hero */}
          <div className="mb-8 flex justify-center">
            <img
              src={logoImg}
              alt="Thrive Tools"
              className="w-full max-w-2xl h-auto object-contain animate-float"
              data-testid="img-hero-logo"
            />
          </div>

          <div className="mb-6">
            <Badge className="bg-rose-500/15 text-rose-300 border border-rose-500/25 rounded-full px-4 py-1 text-xs tracking-widest uppercase font-medium" data-testid="badge-tagline">
              Real Wellness. No Shortcuts.
            </Badge>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight" data-testid="text-hero-headline">
            <span className="text-gradient-rose">Your 2.0 </span>
            <br />
            <span className="text-white/90">Starts Here.</span>
          </h1>

          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light" data-testid="text-hero-subheadline">
            Most "wellness" is expensive marketing in a synthetic shell. We built the tools that actually move the needle — bioavailable, evidence-based, and formulated for the long game.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a href="#products" data-testid="button-hero-shop">
              <Button size="lg" className="bg-rose-500 text-white border-0 rounded-full px-8 text-sm tracking-widest uppercase font-semibold">
                Shop the Collection <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <a href="#about" data-testid="button-hero-learn">
              <Button size="lg" variant="outline" className="rounded-full px-8 text-sm tracking-widest uppercase font-semibold border-white/20 text-white/80 bg-transparent">
                Our Story
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/40">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              <span>No Synthetic Fillers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>Clinical Doses</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Third-Party Tested</span>
            </div>
          </div>
        </div>

        <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 transition-colors animate-bounce" data-testid="link-scroll-down">
          <ChevronDown className="w-6 h-6" />
        </a>
      </section>

      {/* ─── ABOUT / FOUNDER ─── */}
      <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(180deg, #0d0514 0%, #160920 50%, #0d0514 100%)" }}>
        <div className="section-divider mb-24" />
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1" data-testid="img-founder">
              <div className="absolute inset-0 rounded-2xl opacity-30 glow-rose" style={{ background: "radial-gradient(circle at 50% 50%, #c97a8e 0%, transparent 70%)" }} />
              <div className="relative rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(201,122,142,0.2)" }}>
                <img
                  src={founderImg}
                  alt="Thrive Tools Founder"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 60%, rgba(13,5,20,0.8) 100%)" }} />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="card-glass rounded-xl p-4">
                    <p className="text-rose-300 text-sm font-semibold tracking-wide">Founded by</p>
                    <p className="text-white text-lg font-bold">A former burnout survivor</p>
                    <p className="text-white/50 text-xs mt-1">who built the tools she wished existed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <Badge className="bg-purple-500/15 text-purple-300 border border-purple-500/25 rounded-full px-4 py-1 text-xs tracking-widest uppercase font-medium mb-6" data-testid="badge-section-about">
                Our Story
              </Badge>
              <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 leading-tight text-white" data-testid="text-about-headline">
                Tired of being sold{" "}
                <span className="text-gradient-rose">expensive fog.</span>
              </h2>
              <div className="space-y-4 text-white/60 text-base leading-relaxed">
                <p>
                  Most "wellness" is expensive marketing in a synthetic shell. You're sold influencer pills that don't absorb, leaving you in a low-energy fog while your bank account takes the hit.
                </p>
                <p>
                  We know because we lived it. Years spent throwing money at supplements that made bold promises and delivered nothing but empty capsules and disappointment.
                </p>
                <p className="text-white/80 font-medium">
                  So we went back to the research. We studied the bioavailability data, the clinical trials, the dose-response curves. We threw out everything that didn't have solid evidence and rebuilt from zero.
                </p>
                <p>
                  Thrive Tools exists because you deserve to actually feel the difference. Not on day 30. Not if you take 8 capsules a day. <em className="text-rose-300 not-italic font-semibold">Real results, real doses, real ingredients.</em>
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4">
                {[
                  { num: "100%", label: "Bioavailable Forms" },
                  { num: "0", label: "Synthetic Fillers" },
                  { num: "3rd", label: "Party Tested" },
                ].map((stat) => (
                  <div key={stat.label} className="card-glass rounded-xl p-4 text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s/g, "-")}`}>
                    <div className="text-2xl font-bold text-rose-300 font-display">{stat.num}</div>
                    <div className="text-white/40 text-xs mt-1 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="section-divider mt-24" />
      </section>

      {/* ─── WHY DIFFERENT ─── */}
      <section id="why" className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(180deg, #0d0514 0%, #1a0824 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-rose-500/15 text-rose-300 border border-rose-500/25 rounded-full px-4 py-1 text-xs tracking-widest uppercase font-medium mb-6" data-testid="badge-section-why">
              The Difference
            </Badge>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4" data-testid="text-why-headline">
              Why Thrive Tools is{" "}
              <span className="text-gradient-purple">different</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              The supplement industry profits from your confusion. We're built on the opposite principle.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyDifferent.map((item, i) => (
              <div
                key={i}
                className="card-glass rounded-2xl p-6 hover-elevate transition-all duration-300 group"
                data-testid={`card-why-${i}`}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                  style={{ background: "linear-gradient(135deg, rgba(201,122,142,0.2) 0%, rgba(155,111,165,0.2) 100%)", border: "1px solid rgba(201,122,142,0.2)" }}>
                  <item.icon className="w-5 h-5 text-rose-300" />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS ─── */}
      <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #1a0824 0%, #0d0514 100%)" }}>
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px section-divider" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #c97a8e 0%, transparent 70%)", filter: "blur(60px)" }} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-amber-500/15 text-amber-300 border border-amber-500/25 rounded-full px-4 py-1 text-xs tracking-widest uppercase font-medium mb-6" data-testid="badge-section-products">
              The Collection
            </Badge>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4" data-testid="text-products-headline">
              Tools built for{" "}
              <span className="text-gradient-rose">human thriving</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Four formulas. Each one targeting a core pillar of your biology. All of them actually work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${product.gradient} hover-elevate transition-all duration-300 group`}
                style={{ border: "1px solid rgba(201,122,142,0.12)" }}
                data-testid={`card-product-${product.id}`}
              >
                <div className="p-7">
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                        style={{ background: "rgba(201,122,142,0.15)", border: "1px solid rgba(201,122,142,0.2)" }}>
                        <product.icon className="w-5 h-5 text-rose-300" />
                      </div>
                      <div>
                        <p className="text-white/40 text-xs uppercase tracking-widest font-medium">{product.category}</p>
                        <h3 className="text-white font-bold text-xl font-display">{product.name}</h3>
                      </div>
                    </div>
                    {product.badge && (
                      <Badge className={`${product.badgeColor} border rounded-full text-xs px-3 py-0.5 font-medium`}>
                        {product.badge}
                      </Badge>
                    )}
                  </div>

                  <p className="text-rose-300/80 text-sm font-medium mb-3 italic">{product.tagline}</p>
                  <p className="text-white/55 text-sm leading-relaxed mb-5">{product.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((f) => (
                      <span key={f} className="text-xs text-white/50 px-3 py-1 rounded-full"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-white font-display">{product.price}</span>
                      <span className="text-white/30 text-sm ml-1">/ 60 caps</span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-rose-500/20 text-rose-200 border border-rose-500/30 rounded-full px-5 text-xs tracking-wide uppercase font-semibold"
                      onClick={handleAddToCart}
                      data-testid={`button-add-to-cart-${product.id}`}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-white/30 text-sm">Free shipping on orders over $75 &nbsp;·&nbsp; 30-day satisfaction guarantee &nbsp;·&nbsp; Subscribe & Save 15%</p>
          </div>
        </div>
        <div className="section-divider mt-24" />
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(180deg, #0d0514 0%, #160920 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-500/15 text-purple-300 border border-purple-500/25 rounded-full px-4 py-1 text-xs tracking-widest uppercase font-medium mb-6" data-testid="badge-section-testimonials">
              Real Results
            </Badge>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4" data-testid="text-testimonials-headline">
              People are{" "}
              <span className="text-gradient-rose">actually feeling it</span>
            </h2>
            <p className="text-white/50 text-lg max-w-lg mx-auto">
              No paid reviews. No incentivized posts. Just real customers sharing real outcomes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="card-glass rounded-2xl p-6 flex flex-col gap-4 hover-elevate transition-all duration-300"
                data-testid={`card-testimonial-${i}`}
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <Star key={si} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed flex-1">"{t.text}"</p>
                <div className="pt-2 border-t border-white/5">
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <div className="flex items-center justify-between mt-0.5">
                    <p className="text-white/30 text-xs">{t.handle}</p>
                    <Badge className="bg-rose-500/10 text-rose-400 border-rose-500/20 text-[10px] px-2 py-0 rounded-full">
                      {t.product}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #160920 0%, #0d0514 100%)" }}>
        <div className="section-divider mb-24" />
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-rose-500/15 text-rose-300 border border-rose-500/25 rounded-full px-4 py-1 text-xs tracking-widest uppercase font-medium mb-6" data-testid="badge-section-how">
            The Process
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6" data-testid="text-how-headline">
            Your upgrade is{" "}
            <span className="text-gradient-purple">simple</span>
          </h2>

          <div className="grid sm:grid-cols-3 gap-8 mt-12">
            {[
              { step: "01", title: "Identify your priority", desc: "Focus, recovery, heart health, or immunity — pick the pillar you need most right now." },
              { step: "02", title: "Take daily, consistently", desc: "Stack your Thrive Tools with morning or evening routines. These work cumulatively — not as one-time magic." },
              { step: "03", title: "Feel the shift", desc: "Most customers notice measurable changes within 2–3 weeks. Not placebo. Not caffeine. Actual cellular adaptation." },
            ].map((item, i) => (
              <div key={i} className="text-center" data-testid={`card-step-${i}`}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 font-display text-xl font-bold text-rose-300"
                  style={{ background: "linear-gradient(135deg, rgba(201,122,142,0.15) 0%, rgba(155,111,165,0.15) 100%)", border: "1px solid rgba(201,122,142,0.25)" }}>
                  {item.step}
                </div>
                <h3 className="text-white font-bold text-base mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="section-divider mt-24" />
      </section>

      {/* ─── NEWSLETTER / CTA ─── */}
      <section
        id="subscribe"
        className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a0824 0%, #2d0e3e 50%, #1a0824 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #c97a8e 0%, transparent 70%)", filter: "blur(80px)" }} />
        </div>

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "linear-gradient(135deg, rgba(201,122,142,0.25) 0%, rgba(155,111,165,0.25) 100%)", border: "1px solid rgba(201,122,142,0.3)" }}>
            <Sparkles className="w-7 h-7 text-rose-300" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4" data-testid="text-cta-headline">
            Join the{" "}
            <span className="text-gradient-rose">Thrive community</span>
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Get early access to new formulas, exclusive member discounts, and the real-deal wellness research we actually trust.
          </p>

          {subscribed ? (
            <div className="card-glass rounded-2xl p-8" data-testid="text-subscribed-confirmation">
              <div className="text-2xl font-display font-bold text-rose-300 mb-2">You're in.</div>
              <p className="text-white/60">Welcome to your 2.0. Check your inbox for a special gift.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-wrap sm:flex-nowrap gap-3 max-w-md mx-auto" data-testid="form-subscribe">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                data-testid="input-email-subscribe"
                className="flex-1 bg-white/5 border-white/15 text-white placeholder:text-white/30 rounded-full focus:border-rose-400/50 focus:ring-rose-400/20"
              />
              <Button
                type="submit"
                data-testid="button-subscribe-submit"
                className="bg-rose-500 text-white border-0 rounded-full px-6 text-sm tracking-wide font-semibold whitespace-nowrap"
              >
                <Mail className="w-4 h-4 mr-2" /> Subscribe
              </Button>
            </form>
          )}

          <p className="text-white/25 text-xs mt-5">No spam. Unsubscribe any time. We only send things worth reading.</p>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#0a0310", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <img src={logoImg} alt="Thrive Tools" className="h-12 w-auto object-contain mb-4" />
              <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                Evidence-based wellness tools for people who are serious about upgrading their biology. No gimmicks. No fillers. Just results.
              </p>
              <div className="flex items-center gap-3 mt-5">
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" data-testid="link-social-tiktok"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <SiTiktok className="w-4 h-4 text-white/50 hover:text-white transition-colors" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" data-testid="link-social-instagram"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <Instagram className="w-4 h-4 text-white/50 hover:text-white transition-colors" />
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" data-testid="link-social-pinterest"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <SiPinterest className="w-4 h-4 text-white/50 hover:text-white transition-colors" />
                </a>
                <a href="mailto:hello@thrivetools.co" data-testid="link-social-email"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <Mail className="w-4 h-4 text-white/50 hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">Shop</h4>
              <ul className="space-y-3 text-sm text-white/35">
                {["Neural Flow", "Vital Restore", "Heart Resonance", "Immune Shield", "Bundles"].map((item) => (
                  <li key={item}>
                    <a href="#products" className="hover:text-rose-300 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">Learn</h4>
              <ul className="space-y-3 text-sm text-white/35">
                {["Our Story", "The Science", "Ingredient Index", "FAQ", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#about" className="hover:text-rose-300 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-white/25 text-xs">
            <span>© 2026 Thrive Tools. All rights reserved.</span>
            <div className="flex flex-wrap gap-5">
              <a href="#" className="hover:text-white/50 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white/50 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white/50 transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
