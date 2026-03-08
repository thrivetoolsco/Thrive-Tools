import { useState } from "react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import edenPhoto2 from "@assets/Generate_a_new_image_so_that_the_resolution_looks__delpmaspu~4_1772975930027.png";

const EDEN_PHOTO_1 = "https://i0.wp.com/thrivetools.co/wp-content/uploads/2026/03/Screenshot_20260305_054256_Photos.jpg?resize=781%2C814&ssl=1";

const testimonials = [
  { name: "Client Testimonial 1", videoId: "QNrE8TVVCf8", isShort: true },
  { name: "Client Testimonial 2", videoId: "oblIRSW-OBg", isShort: false },
  { name: "Client Testimonial 3", videoId: "eAesjZov7Z0", isShort: false },
  { name: "Client Testimonial 4", videoId: "Fss2GYJhntw", isShort: true },
  { name: "Client Testimonial 5", videoId: "8JD_u6FIfT0", isShort: true },
  { name: "Client Testimonial 6", videoId: "5WK4qLmuAwo", isShort: false },
  { name: "Client Testimonial 7", videoId: "b6JuP2Ugic8", isShort: true },
  { name: "Client Testimonial 8", videoId: "Hob0-l_GuWw", isShort: false },
  { name: "Client Testimonial 9", videoId: "a3IFCYF_s0I", isShort: false },
  { name: "Client Testimonial 10", videoId: "1zm4mHf3rTQ", isShort: false },
  { name: "Client Testimonial 11", videoId: "Oq5NAOKyPvE", isShort: true },
  { name: "Client Testimonial 12", videoId: "_Bcm7k87rns", isShort: false },
  { name: "Client Testimonial 13", videoId: "iCt-MqPUv24", isShort: false },
];

export default function Home() {
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);
  const visibleTestimonials = showAllTestimonials ? testimonials : testimonials.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0d0514] text-white overflow-x-hidden">
      <Navigation />

      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "#0d0514" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              top: "10%",
              left: "15%",
              background: "radial-gradient(circle, rgba(201,122,142,0.35) 0%, rgba(201,122,142,0.08) 40%, transparent 70%)",
              filter: "blur(60px)",
              animation: "hero-drift 20s ease-in-out infinite, hero-pulse 8s ease-in-out infinite",
            }}
          />
          <div
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              bottom: "5%",
              right: "10%",
              background: "radial-gradient(circle, rgba(155,111,165,0.3) 0%, rgba(155,111,165,0.06) 40%, transparent 70%)",
              filter: "blur(55px)",
              animation: "hero-drift-reverse 25s ease-in-out infinite, hero-pulse 10s ease-in-out 2s infinite",
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full"
            style={{
              top: "40%",
              right: "25%",
              background: "radial-gradient(circle, rgba(212,168,103,0.2) 0%, transparent 60%)",
              filter: "blur(50px)",
              animation: "hero-drift 18s ease-in-out 3s infinite, hero-pulse 12s ease-in-out 4s infinite",
            }}
          />
          <div
            className="absolute w-[350px] h-[350px] rounded-full"
            style={{
              top: "60%",
              left: "5%",
              background: "radial-gradient(circle, rgba(100,140,200,0.15) 0%, transparent 60%)",
              filter: "blur(45px)",
              animation: "hero-drift-reverse 22s ease-in-out 5s infinite",
            }}
          />
          <div
            className="absolute w-[800px] h-[800px]"
            style={{
              top: "50%",
              left: "50%",
              marginTop: "-400px",
              marginLeft: "-400px",
              background: "conic-gradient(from 0deg, transparent 0%, rgba(201,122,142,0.04) 25%, transparent 50%, rgba(155,111,165,0.04) 75%, transparent 100%)",
              animation: "hero-rotate 60s linear infinite",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(201,122,142,0.8) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 70% 50% at 50% 45%, transparent 0%, #0d0514 100%)",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 text-center pt-32 pb-8">
          <div className="mb-8 flex justify-center">
            <div className="w-full max-w-3xl shadow-2xl shadow-black/40" data-testid="video-hero">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-auto"
                src="/hero-video.mp4"
              />
            </div>
          </div>

          <h1
            className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            data-testid="text-hero-headline"
          >
            <span className="text-gradient-rose">Your 2.0 </span>
            <br />
            <span className="text-white/90">starts here.</span>
          </h1>

          <p
            className="text-white/60 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium px-2"
            data-testid="text-hero-subheadline"
          >
            Most "wellness" is just expensive marketing in a synthetic shell.
            You're being sold bio-unavailable influencer pills that leave you in
            a brain fog while your bank account takes the hit.
            <br /><br />
            I'm here for the evidence based protocols that finally clear the
            fog and raise the frequency.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href="#about" data-testid="button-hero-learn">
              <Button
                size="lg"
                className="bg-rose-500 text-white border-0 rounded-full px-8 text-sm tracking-widest uppercase font-semibold w-full sm:w-auto"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <Link href="/discount-codes" data-testid="button-hero-discounts">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 text-sm tracking-widest uppercase font-semibold border-white/20 text-white/80 bg-transparent w-full sm:w-auto"
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
        className="relative py-16 sm:py-24 px-6 sm:px-8 lg:px-8"
        style={{ background: "linear-gradient(180deg, #0d0514 0%, #160920 50%, #0d0514 100%)" }}
      >
        <div className="section-divider mb-16 sm:mb-24" />
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Photo */}
            <div className="relative max-w-sm mx-auto lg:max-w-none" data-testid="img-eden-portrait">
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
            <div className="text-center lg:text-left">
              <h2
                className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 leading-snug text-white"
                data-testid="text-about-headline"
              >
                <span className="text-gradient-rose">I'm Eden,</span>{" "}
                and I've spent 14 years bridging ancient Taoist wisdom with
                modern longevity science to identify the specific protocols that actually move the needle for your healthspan.
              </h2>
              <div className="space-y-5 text-white/70 text-base leading-relaxed font-medium">
                <p>
                  When your physical chemistry is optimized, the shift is
                  undeniable:
                </p>
                <ul className="space-y-3 pl-2 text-left mx-auto lg:mx-0 max-w-xs sm:max-w-none">
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
        className="py-16 sm:py-24 px-6 sm:px-8 lg:px-8"
        style={{ background: "linear-gradient(180deg, #0d0514 0%, #1a0824 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text */}
            <div className="text-center lg:text-left order-2 lg:order-1">
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
                  Amazon finds, proven alchemical upgrades for your biology.
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
                  <Link href="/discount-codes" data-testid="link-curated-list">
                    <Button
                      size="lg"
                      className="bg-rose-500 text-white border-0 rounded-full px-8 text-sm tracking-widest uppercase font-semibold whitespace-normal h-auto py-3"
                    >
                      The Curated List With Discount Codes{" "}
                      <ArrowRight className="ml-2 w-4 h-4 flex-shrink-0" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Photo 2 */}
            <div className="relative order-1 lg:order-2 max-w-sm mx-auto lg:max-w-none" data-testid="img-eden-photo-2">
              <div
                className="absolute inset-0 rounded-2xl opacity-30 glow-purple"
                style={{ background: "radial-gradient(circle at 50% 50%, #9b6fa5 0%, transparent 70%)" }}
              />
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(155,111,165,0.2)" }}
              >
                <img
                  src={edenPhoto2}
                  alt="Eden - Thrive Tools"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 sm:mt-24 text-center">
            <p className="text-white/60 text-lg font-medium mb-4">
              Curious about my 14 year journey?
            </p>
            <Link href="/about" data-testid="link-full-story">
              <Button
                variant="outline"
                className="rounded-full px-8 text-sm tracking-widest uppercase font-semibold border-white/20 text-white/80 bg-transparent"
              >
                Read the full story here
              </Button>
            </Link>
          </div>
        </div>
        <div className="section-divider mt-16 sm:mt-24" />
      </section>

      {/* ─── THE RESULTS — Testimonial Videos ─── */}
      <section
        className="py-16 sm:py-24 px-6 sm:px-8 lg:px-8 relative overflow-hidden"
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
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
              data-testid="text-results-headline"
            >
              <span className="text-gradient-rose">The Results</span>
            </h2>
            <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto">
              Real stories from real people experiencing transformation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-6">
            {visibleTestimonials.map((t, i) => (
              <div
                key={i}
                className="card-glass rounded-xl overflow-hidden"
                data-testid={`card-testimonial-${i}`}
              >
                <div className={`relative w-full ${t.isShort ? 'aspect-[9/16] max-h-[400px]' : 'aspect-video'}`}>
                  <iframe
                    src={`https://www.youtube.com/embed/${t.videoId}`}
                    title={t.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                    data-testid={`video-testimonial-${i}`}
                  />
                </div>
                <div className="p-4">
                  <p className="text-white/70 text-sm font-medium" data-testid={`text-testimonial-name-${i}`}>
                    {t.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {!showAllTestimonials && testimonials.length > 3 && (
            <div className="text-center mb-10">
              <Button
                variant="outline"
                onClick={() => setShowAllTestimonials(true)}
                className="rounded-full px-8 text-sm tracking-widest uppercase font-semibold border-white/20 text-white/80 bg-transparent"
                data-testid="button-more-testimonials"
              >
                More <ChevronDown className="ml-2 w-4 h-4" />
              </Button>
            </div>
          )}

          {showAllTestimonials && (
            <div className="text-center mb-10">
              <Button
                variant="outline"
                onClick={() => setShowAllTestimonials(false)}
                className="rounded-full px-8 text-sm tracking-widest uppercase font-semibold border-white/20 text-white/80 bg-transparent"
                data-testid="button-less-testimonials"
              >
                Show Less <ChevronDown className="ml-2 w-4 h-4 rotate-180" />
              </Button>
            </div>
          )}

          <div className="text-center">
            <Link href="/discount-codes" data-testid="link-results-discounts">
              <Button
                size="lg"
                className="bg-rose-500 text-white border-0 rounded-full px-6 sm:px-10 text-xs sm:text-sm tracking-widest uppercase font-semibold whitespace-normal text-center leading-relaxed h-auto py-3"
              >
                Vetted Biohacking Tech, Supplements & Conscious Fashion Discount Codes (2026)
                <ArrowRight className="ml-2 w-4 h-4 flex-shrink-0" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
