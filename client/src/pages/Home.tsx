import { Link } from "wouter";
import logoImg from "@assets/image_1772756046665.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const EDEN_PHOTO_1 = "https://i0.wp.com/thrivetools.co/wp-content/uploads/2026/03/Screenshot_20260305_054256_Photos.jpg?resize=781%2C814&ssl=1";
const EDEN_PHOTO_2 = "https://i0.wp.com/thrivetools.co/wp-content/uploads/2026/03/Screenshot_20260305_061408_Photos.jpg?resize=781%2C1062&ssl=1";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0514] text-white overflow-x-hidden">
      <Navigation />

      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, #2d0e3e 0%, #1a0824 40%, #0d0514 100%)",
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20 animate-float"
            style={{ background: "radial-gradient(circle, #c97a8e 0%, transparent 70%)", filter: "blur(40px)" }}
          />
          <div
            className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-15 animate-float-delayed"
            style={{ background: "radial-gradient(circle, #9b6fa5 0%, transparent 70%)", filter: "blur(50px)" }}
          />
          <div
            className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #d4a867 0%, transparent 70%)", filter: "blur(35px)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,122,142,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,122,142,1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-16">
          <div className="mb-8 flex justify-center">
            <img
              src={logoImg}
              alt="Thrive Tools"
              className="w-full max-w-2xl h-auto object-contain animate-float"
              data-testid="img-hero-logo"
            />
          </div>

          <h1
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            data-testid="text-hero-headline"
          >
            <span className="text-gradient-rose">Your 2.0 </span>
            <br />
            <span className="text-white/90">starts here.</span>
          </h1>

          <p
            className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
            data-testid="text-hero-subheadline"
          >
            Most "wellness" is just expensive marketing in a synthetic shell.
            You're sold influencer pills that don't absorb, leaving you in a low
            energy fog while your bank account takes the hit.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a href="#about" data-testid="button-hero-learn">
              <Button
                size="lg"
                className="bg-rose-500 text-white border-0 rounded-full px-8 text-sm tracking-widest uppercase font-semibold"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <Link href="/discounts-coupon-codes" data-testid="button-hero-discounts">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 text-sm tracking-widest uppercase font-semibold border-white/20 text-white/80 bg-transparent"
              >
                Discount Codes
              </Button>
            </Link>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 transition-colors animate-bounce"
          data-testid="link-scroll-down"
        >
          <ChevronDown className="w-6 h-6" />
        </a>
      </section>

      {/* ─── ABOUT EDEN ─── */}
      <section
        id="about"
        className="relative py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(180deg, #0d0514 0%, #160920 50%, #0d0514 100%)" }}
      >
        <div className="section-divider mb-24" />
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative" data-testid="img-eden-portrait">
              <div
                className="absolute inset-0 rounded-2xl opacity-30 glow-rose"
                style={{ background: "radial-gradient(circle at 50% 50%, #c97a8e 0%, transparent 70%)" }}
              />
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(201,122,142,0.2)" }}
              >
                <img
                  src={EDEN_PHOTO_1}
                  alt="Eden - Thrive Tools founder"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div>
              <h2
                className="font-display text-3xl sm:text-4xl font-bold mb-8 leading-tight text-white"
                data-testid="text-about-headline"
              >
                <span className="text-gradient-rose">I'm Eden,</span>{" "}
                and I've spent 14 years bridging ancient Taoist wisdom with
                modern biohacking to find what actually moves the needle.
              </h2>
              <div className="space-y-5 text-white/70 text-base leading-relaxed font-medium">
                <p>
                  When your physical chemistry is optimized, the shift is
                  undeniable:
                </p>
                <ul className="space-y-3 pl-2">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
                    <span className="text-white/90 font-semibold">Brain fog vanishes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                    <span className="text-white/90 font-semibold">Mood stabilizes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                    <span className="text-white/90 font-semibold">
                      True longevity replaces the weekly burnout.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE CURATION ─── */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(180deg, #0d0514 0%, #1a0824 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <Badge
                className="bg-rose-500/15 text-rose-300 border border-rose-500/25 rounded-full px-4 py-1 text-xs tracking-widest uppercase font-medium mb-6"
                data-testid="badge-insider"
              >
                The "Insider" Curation
              </Badge>
              <div className="space-y-5 text-white/70 text-base leading-relaxed font-medium">
                <p className="text-white/90 text-lg">
                  I'm not selling you a "magic pill." I'm a curator. I've vetted
                  the specific herbs and tools that actually work! No random
                  Amazon finds, just proven chemistry shifters.
                </p>

                <div className="mt-8">
                  <Badge
                    className="bg-amber-500/15 text-amber-300 border border-amber-500/25 rounded-full px-4 py-1 text-xs tracking-widest uppercase font-medium mb-4"
                    data-testid="badge-lead"
                  >
                    The Lead
                  </Badge>
                  <p className="text-white/90 text-lg">
                    I've secured exclusive discount codes for the best products
                    on the market: high frequency essentials that rarely go on
                    sale.
                  </p>
                </div>

                <div className="mt-8">
                  <Link href="/discounts-coupon-codes" data-testid="link-curated-list">
                    <Button
                      size="lg"
                      className="bg-rose-500 text-white border-0 rounded-full px-8 text-sm tracking-widest uppercase font-semibold"
                    >
                      The Curated List With Discount Codes{" "}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Photo 2 */}
            <div className="relative" data-testid="img-eden-photo-2">
              <div
                className="absolute inset-0 rounded-2xl opacity-30 glow-purple"
                style={{ background: "radial-gradient(circle at 50% 50%, #9b6fa5 0%, transparent 70%)" }}
              />
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(155,111,165,0.2)" }}
              >
                <img
                  src={EDEN_PHOTO_2}
                  alt="Eden - Thrive Tools"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-24 text-center">
            <p className="text-white/60 text-lg font-medium mb-4">
              Curious about my 14 year journey?
            </p>
            <a href="/about" data-testid="link-full-story">
              <Button
                variant="outline"
                className="rounded-full px-8 text-sm tracking-widest uppercase font-semibold border-white/20 text-white/80 bg-transparent"
              >
                Read the full story here
              </Button>
            </a>
          </div>
        </div>
        <div className="section-divider mt-24" />
      </section>

      {/* ─── THE RESULTS (link to discount page) ─── */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1a0824 0%, #2d0e3e 50%, #1a0824 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #c97a8e 0%, transparent 70%)", filter: "blur(80px)" }}
          />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2
            className="font-display text-4xl sm:text-5xl font-bold text-white mb-6"
            data-testid="text-results-headline"
          >
            <span className="text-gradient-rose">The Results</span>
          </h2>
          <Link href="/discounts-coupon-codes" data-testid="link-results-discounts">
            <Button
              size="lg"
              className="bg-rose-500 text-white border-0 rounded-full px-10 text-sm tracking-widest uppercase font-semibold"
            >
              Best Vitamins, Supplements, Biohacking Technologies & Ethical
              Clothing Discount Codes{" "}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
