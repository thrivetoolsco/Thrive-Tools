import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import edenPhoto2 from "@assets/Generate_a_new_image_so_that_the_resolution_looks__delpmaspu~4_1772975930027.png";
import edenPhoto1 from "@assets/eden_portrait_1.jpg";
import edenHatPhoto from "@assets/IMG-20251218-WA0018_1773256125844.jpg";

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
            <span className="text-gradient-rose">Still foggy? Still tired? </span>
            <br />
            <span className="text-white/90">Still spending money on supplements that do nothing?</span>
          </h1>

          <p
            className="text-white/60 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium px-2"
            data-testid="text-hero-subheadline"
          >
            I'm Eden. For 14 years I've been deep in the research — Taoist protocols, longevity science, biohacking — separating what actually works from what just sells.
            <br /><br />
            And I've learned one thing: 90% of wellness is noise. The 10% that works? <Link href="/discount-codes" className="underline underline-offset-2 hover:text-white transition-colors">It's on this list.</Link>
          </p>

          <div className="flex justify-center mb-10">
            <img
              src={edenHatPhoto}
              alt="Eden"
              loading="eager"
              fetchPriority="high"
              className="w-64 h-64 sm:w-72 sm:h-72 object-cover object-top rounded-full shadow-lg"
              data-testid="img-eden-hat"
            />
          </div>

          <p
            className="text-white/60 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium px-2"
          >
            I don't sell supplements. I find the best ones and get you a discount on them. Getting access to the best products shouldn't mean paying full price for them.
            <br /><br />
            This is my curated list of the supplements, longevity tools, and brands I personally trust, with exclusive discount codes built in. No fluff. No affiliate bro science. Just the good stuff, cheaper.
            <br /><br />
            Supplements. Vitamins. Longevity tech. Conscious fashion. All vetted. All discounted.
          </p>

          <div className="flex justify-center mb-8">
            <Link href="/discount-codes" data-testid="button-hero-discounts">
              <Button
                size="lg"
                className="bg-rose-500 text-white border-0 rounded-full px-8 text-sm tracking-widest uppercase font-semibold w-full sm:w-auto"
              >
                → See the full list + discounts
              </Button>
            </Link>
          </div>

          <div className="flex justify-center mb-8">
            <div className="relative max-w-sm w-full" data-testid="img-eden-photo-2">
              <div
                className="absolute inset-0 rounded-2xl opacity-25 glow-purple"
                style={{ background: "radial-gradient(circle at 50% 50%, #9b6fa5 0%, transparent 70%)" }}
              />
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(155,111,165,0.2)" }}
              >
                <img
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  src={edenPhoto2}
                  alt="Eden - Thrive Tools"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <p className="text-white/60 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-6 leading-relaxed font-medium px-2" data-testid="text-retreats-intro">
            Real transformation isn't just what you take. It's how you live.<br /><br />
            That's why I built spaces where the real work happens. In my retreats and workshops, we go deeper: nervous system reset, Taoist longevity practices, and cutting through the noise together, in person.
          </p>

          <div className="flex justify-center mb-8">
            <Link href="/retreats-workshops/blossoming-bliss" data-testid="button-explore-retreats">
              <Button
                size="lg"
                className="bg-rose-500 text-white border-0 rounded-full px-8 text-sm tracking-widest uppercase font-semibold w-full sm:w-auto"
              >
                → Explore Retreats & Workshops
              </Button>
            </Link>
          </div>
        </div>

      </section>

      {/* ─── PHOTOS ─── */}
      <section
        id="about"
        className="relative py-12 sm:py-20 px-6 sm:px-8 lg:px-8"
        style={{ background: "linear-gradient(180deg, #0d0514 0%, #160920 50%, #0d0514 100%)" }}
      >
        <div className="section-divider mb-12 sm:mb-16" />
        <div className="max-w-4xl mx-auto">
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
