import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import edenPhoto2 from "@assets/Generate_a_new_image_so_that_the_resolution_looks__delpmaspu~4_1772975930027.png";
import edenHatPhoto from "@assets/Screenshot_20241217_123326_Instagram~2_1773457901515.jpg";
import edenPortrait from "@assets/IMG-20251218-WA0018_1773456075795.jpg";

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
    <div className="min-h-screen bg-[#fff0f0] text-[#3d1a28] overflow-x-hidden">
      <Navigation />

      {/* ═══════════════════════════════════════════
          HERO — portrait-first editorial split
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#fff0f0]">

        {/* Botanical mandala watermark */}
        <svg
          viewBox="0 0 800 800"
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            width: "clamp(500px, 80vw, 900px)",
            height: "clamp(500px, 80vw, 900px)",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0.045,
          }}
        >
          <circle cx="400" cy="400" r="370" fill="none" stroke="#c4622d" strokeWidth="0.8"/>
          <circle cx="400" cy="400" r="300" fill="none" stroke="#d4a867" strokeWidth="0.5"/>
          <circle cx="400" cy="400" r="230" fill="none" stroke="#c4622d" strokeWidth="0.7"/>
          <circle cx="400" cy="400" r="160" fill="none" stroke="#d4a867" strokeWidth="0.5"/>
          <circle cx="400" cy="400" r="90"  fill="none" stroke="#c4622d" strokeWidth="0.7"/>
          {[0,60,120,180,240,300].map((deg, i) => {
            const rd = (deg * Math.PI) / 180;
            return <circle key={i} cx={400 + 90 * Math.cos(rd)} cy={400 + 90 * Math.sin(rd)} r={90} fill="none" stroke="#c4622d" strokeWidth="0.45"/>;
          })}
          {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => {
            const rd = (deg * Math.PI) / 180;
            return <line key={i} x1={400 + 35 * Math.cos(rd)} y1={400 + 35 * Math.sin(rd)} x2={400 + 370 * Math.cos(rd)} y2={400 + 370 * Math.sin(rd)} stroke="#c4622d" strokeWidth="0.35"/>;
          })}
          {[0,45,90,135,180,225,270,315].map((deg, i) => {
            const rd = (deg * Math.PI) / 180;
            const lx = 400 + 280 * Math.cos(rd);
            const ly = 400 + 280 * Math.sin(rd);
            return (
              <g key={i} transform={`translate(${lx},${ly}) rotate(${deg + 90})`}>
                <ellipse cx="0" cy="0" rx="7" ry="28" fill="none" stroke="#d4a867" strokeWidth="0.6"/>
                <line x1="0" y1="-28" x2="0" y2="28" stroke="#c4622d" strokeWidth="0.3"/>
              </g>
            );
          })}
          <circle cx="400" cy="400" r="10" fill="none" stroke="#c4622d" strokeWidth="0.8"/>
          <circle cx="400" cy="400" r="4"  fill="#c4622d" opacity="0.4"/>
        </svg>

        {/* Very soft ambient glow blobs */}
        <div className="absolute pointer-events-none" style={{ top: "15%", left: "8%", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,64,64,0.14) 0%, transparent 70%)", filter: "blur(80px)" }}/>
        <div className="absolute pointer-events-none" style={{ bottom: "10%", right: "8%", width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,168,103,0.1) 0%, transparent 70%)", filter: "blur(70px)" }}/>

        {/* ── MOBILE layout (stacked, shown below lg) ── */}
        <div className="relative z-10 w-full px-6 sm:px-10 pt-32 pb-16 flex flex-col items-center text-center lg:hidden">
          {/* Portrait circle */}
          <div className="relative mb-10">
            <div style={{ position: "absolute", inset: -12, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,64,64,0.2) 0%, transparent 70%)", filter: "blur(18px)" }}/>
            <div
              style={{
                width: "clamp(200px, 55vw, 280px)",
                height: "clamp(200px, 55vw, 280px)",
                borderRadius: "50%",
                overflow: "hidden",
                border: "1px solid rgba(201,64,64,0.22)",
                boxShadow: "0 0 0 8px rgba(255,240,240,1), 0 0 0 9px rgba(201,64,64,0.1)",
                position: "relative",
              }}
            >
              <img src={edenPortrait} alt="Eden" loading="eager" fetchPriority="high"
                className="w-full h-full object-cover object-top" data-testid="img-eden-portrait-mobile"/>
            </div>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-6 leading-tight" data-testid="text-hero-headline">
            <span className="text-gradient-rose">Still foggy? Still tired? </span>
            <br/>
            <span className="text-[#3d1a28]/85">Still spending money on supplements that do nothing?</span>
          </h1>

          <div className="flex items-center gap-3 mb-7 opacity-60">
            <div className="h-px w-10 bg-[#c4622d]"/>
            <svg width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="4" fill="none" stroke="#c4622d" strokeWidth="0.8"/><circle cx="5" cy="5" r="1.5" fill="#c4622d"/></svg>
            <div className="h-px w-10 bg-[#c4622d]"/>
          </div>

          <p className="text-[#3d1a28]/62 text-base sm:text-lg max-w-xl leading-relaxed mb-4" data-testid="text-hero-subheadline">
            I'm Eden. For 14 years I've been deep in the research — Taoist protocols, longevity science, biohacking — separating what actually works from what just sells.
            <br/><br/>
            And I've learned one thing: 90% of wellness is noise. The 10% that works? <Link href="/discount-codes" className="underline underline-offset-2 hover:text-[#c4622d] transition-colors">It's on this list.</Link>
          </p>
        </div>

        {/* ── DESKTOP layout (split, shown at lg+) ── */}
        <div className="relative z-10 hidden lg:grid lg:grid-cols-2 w-full max-w-7xl mx-auto px-16 xl:px-24 gap-16 items-center min-h-screen pt-28">
          {/* LEFT — portrait */}
          <div className="flex justify-center items-center">
            <div className="relative">
              <div style={{ position: "absolute", inset: -20, borderRadius: "28px", background: "radial-gradient(circle, rgba(201,64,64,0.18) 0%, transparent 70%)", filter: "blur(30px)" }}/>
              <div
                style={{
                  width: 380,
                  height: 500,
                  borderRadius: 24,
                  overflow: "hidden",
                  border: "1px solid rgba(201,64,64,0.18)",
                  boxShadow: "0 24px 60px rgba(61,26,40,0.1), 0 0 0 10px rgba(255,240,240,1), 0 0 0 11px rgba(201,64,64,0.08)",
                  position: "relative",
                }}
              >
                <img src={edenPortrait} alt="Eden" loading="eager" fetchPriority="high"
                  className="w-full h-full object-cover object-top" data-testid="img-eden-portrait-desktop"/>
              </div>
              {/* Small ornament below photo */}
              <div className="flex justify-center mt-6 gap-2 opacity-40">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#c4622d] self-center"/>
                <svg width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="4" fill="none" stroke="#c4622d" strokeWidth="0.8"/><circle cx="5" cy="5" r="1.5" fill="#c4622d"/></svg>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c4622d] self-center"/>
              </div>
            </div>
          </div>

          {/* RIGHT — headline + first paragraph */}
          <div className="flex flex-col justify-center py-16">
            <h1 className="font-display text-4xl xl:text-5xl font-bold mb-8 leading-[1.15]" data-testid="text-hero-headline-desktop">
              <span className="text-gradient-rose">Still foggy?<br/>Still tired? </span>
              <br/>
              <span className="text-[#3d1a28]/80 text-3xl xl:text-4xl">Still spending money on supplements that do nothing?</span>
            </h1>

            {/* Thin ornamental divider */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c4622d]/50"/>
              <svg width="12" height="12" viewBox="0 0 12 12">
                <circle cx="6" cy="6" r="5" fill="none" stroke="#c4622d" strokeWidth="0.8"/>
                <circle cx="6" cy="6" r="2" fill="#c4622d" opacity="0.5"/>
              </svg>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c4622d]/50"/>
            </div>

            <p className="text-[#3d1a28]/60 text-lg leading-relaxed max-w-lg" data-testid="text-hero-subheadline-desktop">
              I'm Eden. For 14 years I've been deep in the research — Taoist protocols, longevity science, biohacking — separating what actually works from what just sells.
              <br/><br/>
              And I've learned one thing: 90% of wellness is noise. The 10% that works? <Link href="/discount-codes" className="underline underline-offset-2 hover:text-[#c4622d] transition-colors">It's on this list.</Link>
            </p>

            {/* Scroll hint */}
            <div className="flex items-center gap-3 mt-12 opacity-25">
              <div className="w-px h-10 bg-[#3d1a28]"/>
              <ChevronDown className="w-4 h-4 text-[#3d1a28]"/>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SPLIT 1 — Hat photo + "I don't sell" copy
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #fff0f0 0%, #ffe8e8 50%, #fff0f0 100%)" }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28 lg:py-32">

          {/* Thin top divider */}
          <div className="flex items-center gap-6 mb-20 opacity-30">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c4622d] to-transparent"/>
            <svg width="16" height="16" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="6.5" fill="none" stroke="#c4622d" strokeWidth="0.8"/>
              <circle cx="8" cy="8" r="2.5" fill="#c4622d" opacity="0.5"/>
            </svg>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c4622d] to-transparent"/>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
            {/* Photo */}
            <div className="flex-shrink-0 w-full lg:w-auto flex justify-center">
              <div className="relative">
                <div style={{ position: "absolute", inset: -16, borderRadius: "20px", background: "radial-gradient(circle, rgba(201,64,64,0.16) 0%, transparent 70%)", filter: "blur(22px)" }}/>
                <img
                  src={edenHatPhoto}
                  alt="Eden"
                  loading="lazy"
                  data-testid="img-eden-hat"
                  className="relative object-cover object-top"
                  style={{
                    width: "clamp(240px, 38vw, 340px)",
                    height: "clamp(290px, 46vw, 420px)",
                    borderRadius: 18,
                    border: "1px solid rgba(201,64,64,0.15)",
                    boxShadow: "0 20px 50px rgba(61,26,40,0.09)",
                  }}
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 max-w-lg text-left">
              <p className="text-[#3d1a28]/62 text-base sm:text-lg leading-relaxed mb-5">
                I don't sell supplements. I find the best ones and get you a discount on them. Getting access to the best products shouldn't mean paying full price for them.
              </p>
              <p className="text-[#3d1a28]/62 text-base sm:text-lg leading-relaxed mb-5">
                This is my curated list of the supplements, longevity tools, and brands I personally trust, with exclusive discount codes built in. No fluff. No affiliate bro science. Just the good stuff, cheaper.
              </p>
              <p className="text-[#3d1a28]/62 text-base sm:text-lg leading-relaxed mb-10">
                Supplements. Vitamins. Longevity tech. Conscious fashion. All vetted. All discounted.
              </p>
              <Link href="/discount-codes" data-testid="button-hero-discounts">
                <Button size="lg" className="btn-gradient-rose text-white border-0 rounded-full px-8 text-sm tracking-widest uppercase font-semibold h-auto py-3.5">
                  → See the full list + discounts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SPLIT 2 — Retreats text + edenPhoto2
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: "#fff0f0" }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28 lg:py-32">

          <div className="flex flex-col lg:flex-row-reverse items-center gap-14 lg:gap-20">
            {/* Photo */}
            <div className="flex-shrink-0 w-full lg:w-auto flex justify-center">
              <div className="relative" data-testid="img-eden-photo-2">
                <div style={{ position: "absolute", inset: -16, borderRadius: "20px", background: "radial-gradient(circle, rgba(155,111,165,0.15) 0%, transparent 70%)", filter: "blur(22px)" }}/>
                <img
                  src={edenPhoto2}
                  alt="Eden - Thrive Tools"
                  loading="lazy"
                  className="relative object-cover"
                  style={{
                    width: "clamp(240px, 38vw, 340px)",
                    height: "clamp(290px, 46vw, 420px)",
                    borderRadius: 18,
                    border: "1px solid rgba(155,111,165,0.15)",
                    boxShadow: "0 20px 50px rgba(61,26,40,0.09)",
                  }}
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 max-w-lg text-left">
              <p className="text-[#3d1a28]/62 text-base sm:text-lg leading-relaxed mb-10" data-testid="text-retreats-intro">
                Real transformation isn't just what you take. It's how you live.
                <br/><br/>
                That's why I built spaces where the real work happens. In my retreats and workshops, we go deeper: nervous system reset, Taoist longevity practices, and cutting through the noise together, in person.
              </p>
              <Link href="/retreats-workshops/blossoming-bliss" data-testid="button-explore-retreats">
                <Button size="lg" className="btn-gradient-rose text-white border-0 rounded-full px-8 text-sm tracking-widest uppercase font-semibold h-auto py-3.5">
                  → Explore Retreats & Workshops
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STORY CTA
      ═══════════════════════════════════════════ */}
      <section id="about" className="relative py-20 sm:py-28 px-6 sm:px-10 text-center" style={{ background: "linear-gradient(180deg, #fff0f0 0%, #ffe8e8 50%, #fff0f0 100%)" }}>
        <div className="flex items-center gap-6 mb-14 opacity-25 max-w-2xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c4622d] to-transparent"/>
          <svg width="14" height="14" viewBox="0 0 14 14"><circle cx="7" cy="7" r="6" fill="none" stroke="#c4622d" strokeWidth="0.8"/><circle cx="7" cy="7" r="2.2" fill="#c4622d" opacity="0.5"/></svg>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c4622d] to-transparent"/>
        </div>

        <div className="max-w-xl mx-auto">
          <p className="text-[#3d1a28]/60 text-lg font-medium mb-6">
            Curious about my 14 year journey?
          </p>
          <Link href="/about" data-testid="link-full-story">
            <Button className="btn-gradient-rose rounded-full px-10 text-sm tracking-widest uppercase font-semibold text-white border-0 h-auto py-3.5">
              Read the full story here
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-6 mt-14 opacity-25 max-w-2xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c4622d] to-transparent"/>
          <svg width="14" height="14" viewBox="0 0 14 14"><circle cx="7" cy="7" r="6" fill="none" stroke="#c4622d" strokeWidth="0.8"/><circle cx="7" cy="7" r="2.2" fill="#c4622d" opacity="0.5"/></svg>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c4622d] to-transparent"/>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE RESULTS — Testimonials
      ═══════════════════════════════════════════ */}
      <section
        className="py-20 sm:py-28 px-6 sm:px-10 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #ffe8e8 0%, #f0e4f5 50%, #ffe8e8 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,64,64,0.07) 0%, transparent 70%)", filter: "blur(70px)" }}/>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-results-headline">
              <span className="text-gradient-rose">The Results</span>
            </h2>
            <p className="text-[#3d1a28]/55 text-base sm:text-lg max-w-xl mx-auto">
              Real stories from real people experiencing transformation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-8">
            {visibleTestimonials.map((t, i) => (
              <div key={i} className="card-glass rounded-xl overflow-hidden" data-testid={`card-testimonial-${i}`}>
                <div className={`relative w-full ${t.isShort ? "aspect-[9/16] max-h-[400px]" : "aspect-video"}`}>
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
                  <p className="text-[#3d1a28]/70 text-sm font-medium" data-testid={`text-testimonial-name-${i}`}>{t.name}</p>
                </div>
              </div>
            ))}
          </div>

          {!showAllTestimonials && testimonials.length > 3 && (
            <div className="text-center mb-10">
              <Button variant="outline" onClick={() => setShowAllTestimonials(true)}
                className="rounded-full px-8 text-sm tracking-widest uppercase font-semibold border-[#3d1a28]/20 text-[#3d1a28]/80 bg-transparent"
                data-testid="button-more-testimonials">
                More <ChevronDown className="ml-2 w-4 h-4" />
              </Button>
            </div>
          )}

          {showAllTestimonials && (
            <div className="text-center mb-10">
              <Button variant="outline" onClick={() => setShowAllTestimonials(false)}
                className="rounded-full px-8 text-sm tracking-widest uppercase font-semibold border-[#3d1a28]/20 text-[#3d1a28]/80 bg-transparent"
                data-testid="button-less-testimonials">
                Show Less <ChevronDown className="ml-2 w-4 h-4 rotate-180" />
              </Button>
            </div>
          )}

          <div className="text-center">
            <Link href="/discount-codes" data-testid="link-results-discounts">
              <Button size="lg" className="btn-gradient-rose text-white border-0 rounded-full px-6 sm:px-10 text-xs sm:text-sm tracking-widest uppercase font-semibold whitespace-normal text-center leading-relaxed h-auto py-3">
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
