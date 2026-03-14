import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Sparkles, BookOpen, Leaf } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import edenPhoto2 from "@assets/Generate_a_new_image_so_that_the_resolution_looks__delpmaspu~4_1772975930027.png";
import edenHatPhoto from "@assets/IMG-20251218-WA0018_1773256125844.jpg";
import edenPortrait from "@assets/eden_portrait_1.jpg";

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

const pillars = [
  {
    icon: Sparkles,
    label: "Curated",
    desc: "14 years filtering the noise — only what actually moves the needle makes the list.",
  },
  {
    icon: BookOpen,
    label: "Discounted",
    desc: "Every brand is personally vetted, with exclusive codes already built in.",
  },
  {
    icon: Leaf,
    label: "Proven",
    desc: "Taoist longevity, biohacking science, and nervous system work — tested, not theorised.",
  },
];

export default function Home() {
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);
  const visibleTestimonials = showAllTestimonials ? testimonials : testimonials.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#fdf6f0] text-[#3d1a28] overflow-x-hidden">
      <Navigation />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#fdf6f0]">

        {/* Subtle grain texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        {/* Botanical SVG watermark */}
        <svg
          viewBox="0 0 700 700"
          className="absolute w-[min(110vw,720px)] h-[min(110vw,720px)] opacity-[0.055] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="350" cy="350" r="320" fill="none" stroke="#c97a8e" strokeWidth="0.7"/>
          <circle cx="350" cy="350" r="265" fill="none" stroke="#d4a867" strokeWidth="0.4"/>
          <circle cx="350" cy="350" r="210" fill="none" stroke="#c97a8e" strokeWidth="0.6"/>
          <circle cx="350" cy="350" r="155" fill="none" stroke="#d4a867" strokeWidth="0.4"/>
          <circle cx="350" cy="350" r="100" fill="none" stroke="#c97a8e" strokeWidth="0.6"/>
          {[0,60,120,180,240,300].map((deg, i) => {
            const r = (deg * Math.PI) / 180;
            return <circle key={i} cx={350+100*Math.cos(r)} cy={350+100*Math.sin(r)} r="100" fill="none" stroke="#c97a8e" strokeWidth="0.5"/>;
          })}
          {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => {
            const r = (deg * Math.PI) / 180;
            return <line key={i} x1={350+40*Math.cos(r)} y1={350+40*Math.sin(r)} x2={350+320*Math.cos(r)} y2={350+320*Math.sin(r)} stroke="#c97a8e" strokeWidth="0.3"/>;
          })}
          {[0,45,90,135,180,225,270,315].map((deg, i) => {
            const r = (deg * Math.PI) / 180;
            const lx = 350 + 240 * Math.cos(r);
            const ly = 350 + 240 * Math.sin(r);
            return (
              <g key={i} transform={`translate(${lx},${ly}) rotate(${deg+90})`}>
                <ellipse cx="0" cy="0" rx="8" ry="30" fill="none" stroke="#d4a867" strokeWidth="0.55"/>
                <line x1="0" y1="-30" x2="0" y2="30" stroke="#c97a8e" strokeWidth="0.3"/>
              </g>
            );
          })}
          <circle cx="350" cy="350" r="8" fill="none" stroke="#c97a8e" strokeWidth="0.8"/>
          <circle cx="350" cy="350" r="3" fill="#c97a8e" opacity="0.3"/>
        </svg>

        {/* Soft ambient glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(201,122,142,0.12) 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(212,168,103,0.1) 0%, transparent 70%)", filter: "blur(70px)" }}
        />

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 sm:px-10 text-center pt-36 pb-16">

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#c97a8e]/40"/>
            <p className="text-[#3d1a28]/45 text-[10px] sm:text-xs tracking-[0.35em] uppercase font-medium">
              Biohacking · Longevity · Conscious Living
            </p>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#c97a8e]/40"/>
          </div>

          {/* Portrait */}
          <div className="flex justify-center mb-10">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(201,122,142,0.25) 0%, transparent 70%)", filter: "blur(20px)", transform: "scale(1.1)" }}
              />
              <div
                className="relative rounded-full overflow-hidden"
                style={{
                  width: "clamp(180px, 40vw, 280px)",
                  height: "clamp(180px, 40vw, 280px)",
                  border: "1px solid rgba(201,122,142,0.2)",
                  boxShadow: "0 0 0 8px rgba(253,246,240,1), 0 0 0 9px rgba(201,122,142,0.12)",
                }}
              >
                <img
                  src={edenPortrait}
                  alt="Eden Laraki"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-top"
                  data-testid="img-eden-portrait"
                />
              </div>
            </div>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-[1.15] tracking-tight"
            data-testid="text-hero-headline"
          >
            <span className="text-gradient-rose italic">Still foggy? Still tired?</span>
            <br />
            <span className="text-[#3d1a28]/80 font-semibold text-2xl sm:text-3xl lg:text-4xl">
              Still spending money on supplements<br className="hidden sm:block"/> that do nothing?
            </span>
          </h1>

          {/* Thin rule */}
          <div className="flex items-center justify-center gap-4 my-7">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-[#c97a8e]/30"/>
            <svg width="12" height="12" viewBox="0 0 12 12" className="opacity-40">
              <circle cx="6" cy="6" r="5" fill="none" stroke="#c97a8e" strokeWidth="0.8"/>
              <circle cx="6" cy="6" r="2" fill="#c97a8e" opacity="0.5"/>
            </svg>
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-l from-transparent to-[#c97a8e]/30"/>
          </div>

          {/* Body copy */}
          <p
            className="text-[#3d1a28]/60 text-base sm:text-lg max-w-xl mx-auto mb-3 leading-relaxed"
            data-testid="text-hero-subheadline"
          >
            I'm Eden. 14 years deep in Taoist protocols, longevity science, and biohacking — separating
            what actually works from what just sells.
          </p>
          <p className="text-[#3d1a28]/60 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            90% of wellness is noise. The 10% that works?{" "}
            <Link href="/discount-codes" className="underline underline-offset-4 decoration-[#c97a8e]/40 hover:text-[#c97a8e] transition-colors">
              It's on this list.
            </Link>
          </p>

          {/* CTA */}
          <Link href="/discount-codes" data-testid="button-hero-discounts">
            <Button
              size="lg"
              className="btn-gradient-rose text-white border-0 rounded-full px-10 py-4 text-sm tracking-widest uppercase font-semibold h-auto"
            >
              See the full list + discounts
            </Button>
          </Link>

          {/* Scroll hint */}
          <div className="mt-16 flex flex-col items-center gap-2 opacity-30">
            <div className="w-px h-8 bg-[#3d1a28]"/>
            <ChevronDown className="w-4 h-4 text-[#3d1a28]"/>
          </div>
        </div>
      </section>

      {/* ─── THREE PILLARS ─── */}
      <section className="py-20 sm:py-28 px-6 sm:px-10" style={{ background: "#fdf6f0" }}>
        <div className="max-w-4xl mx-auto">
          <div className="section-divider mb-20"/>
          <div className="text-center mb-14">
            <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#3d1a28]/40 mb-4">The Method</p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3d1a28]/85">
              The signal in the noise
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-10 sm:gap-6">
            {pillars.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="text-center group">
                <div className="flex justify-center mb-5">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(201,122,142,0.08)", border: "1px solid rgba(201,122,142,0.2)" }}
                  >
                    <Icon className="w-5 h-5 text-[#c97a8e]" strokeWidth={1.4}/>
                  </div>
                </div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#c97a8e] mb-2 font-medium">{label}</p>
                <p className="text-[#3d1a28]/55 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="section-divider mt-20"/>
        </div>
      </section>

      {/* ─── DON'T SELL — CURATE ─── */}
      <section
        className="py-20 sm:py-28 px-6 sm:px-10"
        style={{ background: "linear-gradient(180deg, #fdf6f0 0%, #f5eaf5 60%, #fdf6f0 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
            {/* Photo */}
            <div className="flex-shrink-0 w-full lg:w-auto flex justify-center">
              <div className="relative">
                <div
                  className="absolute -inset-3 rounded-2xl opacity-20"
                  style={{ background: "radial-gradient(circle, #c97a8e 0%, transparent 70%)", filter: "blur(25px)" }}
                />
                <img
                  src={edenHatPhoto}
                  alt="Eden"
                  loading="lazy"
                  className="relative rounded-2xl object-cover object-top shadow-lg"
                  style={{
                    width: "clamp(220px, 40vw, 320px)",
                    height: "clamp(260px, 50vw, 400px)",
                    border: "1px solid rgba(201,122,142,0.15)",
                  }}
                  data-testid="img-eden-hat"
                />
              </div>
            </div>

            {/* Text */}
            <div className="text-left max-w-lg">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#c97a8e] mb-5">My promise</p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-snug text-[#3d1a28]/88">
                I don't sell supplements.<br />
                <span className="text-gradient-rose italic">I find the best ones.</span>
              </h2>
              <p className="text-[#3d1a28]/60 text-base leading-relaxed mb-4">
                Getting access to the best products shouldn't mean paying full price. This is my curated
                list of the supplements, longevity tools, and brands I personally trust — with exclusive
                discount codes built in.
              </p>
              <p className="text-[#3d1a28]/60 text-base leading-relaxed mb-8">
                No fluff. No affiliate bro science. Just the good stuff, cheaper.
              </p>
              <Link href="/discount-codes" data-testid="button-curated-discounts">
                <Button className="btn-gradient-rose text-white border-0 rounded-full px-8 text-xs tracking-widest uppercase font-semibold h-auto py-3">
                  Supplements · Longevity tech · Fashion
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RETREATS ─── */}
      <section className="py-20 sm:py-28 px-6 sm:px-10" style={{ background: "#fdf6f0" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-14 lg:gap-20">
            {/* Photo */}
            <div className="flex-shrink-0 w-full lg:w-auto flex justify-center">
              <div className="relative">
                <div
                  className="absolute -inset-3 rounded-2xl opacity-15"
                  style={{ background: "radial-gradient(circle, #9b6fa5 0%, transparent 70%)", filter: "blur(25px)" }}
                />
                <img
                  src={edenPhoto2}
                  alt="Eden - Thrive Tools"
                  loading="lazy"
                  className="relative rounded-2xl object-cover shadow-lg"
                  style={{
                    width: "clamp(220px, 40vw, 320px)",
                    height: "clamp(260px, 50vw, 400px)",
                    border: "1px solid rgba(155,111,165,0.15)",
                  }}
                  data-testid="img-eden-photo-2"
                />
              </div>
            </div>

            {/* Text */}
            <div className="text-left max-w-lg">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#c97a8e] mb-5">Go deeper</p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-snug text-[#3d1a28]/88">
                Real transformation<br />
                <span className="text-gradient-rose italic">isn't just what you take.</span>
              </h2>
              <p className="text-[#3d1a28]/60 text-base leading-relaxed mb-8">
                It's how you live. In my retreats and workshops we go deeper — nervous system reset,
                Taoist longevity practices, and cutting through the noise together, in person.
              </p>
              <Link href="/retreats-workshops/blossoming-bliss" data-testid="button-explore-retreats">
                <Button className="btn-gradient-rose text-white border-0 rounded-full px-8 text-xs tracking-widest uppercase font-semibold h-auto py-3">
                  → Explore Retreats & Workshops
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STORY CTA ─── */}
      <section
        className="py-20 px-6 sm:px-10 text-center"
        style={{ background: "linear-gradient(180deg, #fdf6f0 0%, #f5eaf5 50%, #fdf6f0 100%)" }}
      >
        <div className="section-divider mb-16"/>
        <div className="max-w-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#3d1a28]/40 mb-4">14 years in the making</p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4 text-[#3d1a28]/85">Curious about the journey?</h2>
          <p className="text-[#3d1a28]/55 text-base mb-8 leading-relaxed">
            From burnout and confusion to clarity — the full story behind Thrive Tools.
          </p>
          <Link href="/about" data-testid="link-full-story">
            <Button className="btn-gradient-rose rounded-full px-10 text-xs tracking-widest uppercase font-semibold text-white border-0 h-auto py-3">
              Read the full story
            </Button>
          </Link>
        </div>
        <div className="section-divider mt-16"/>
      </section>

      {/* ─── RESULTS — Testimonials ─── */}
      <section
        className="py-20 sm:py-28 px-6 sm:px-10 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #fdf6f0 0%, #f8eef8 40%, #f5eaf5 70%, #fdf6f0 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(201,122,142,0.07) 0%, transparent 70%)", filter: "blur(60px)" }}
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#3d1a28]/40 mb-4">Social proof</p>
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold"
              data-testid="text-results-headline"
            >
              <span className="text-gradient-rose">The Results</span>
            </h2>
            <p className="text-[#3d1a28]/50 text-base mt-3 max-w-sm mx-auto">
              Real stories from real people experiencing transformation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-8">
            {visibleTestimonials.map((t, i) => (
              <div
                key={i}
                className="card-glass rounded-xl overflow-hidden"
                data-testid={`card-testimonial-${i}`}
              >
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
                  <p className="text-[#3d1a28]/60 text-sm" data-testid={`text-testimonial-name-${i}`}>
                    {t.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {!showAllTestimonials && testimonials.length > 3 && (
            <div className="text-center mb-8">
              <Button
                variant="outline"
                onClick={() => setShowAllTestimonials(true)}
                className="rounded-full px-8 text-xs tracking-widest uppercase font-semibold border-[#3d1a28]/20 text-[#3d1a28]/70 bg-transparent"
                data-testid="button-more-testimonials"
              >
                More <ChevronDown className="ml-2 w-4 h-4" />
              </Button>
            </div>
          )}

          {showAllTestimonials && (
            <div className="text-center mb-8">
              <Button
                variant="outline"
                onClick={() => setShowAllTestimonials(false)}
                className="rounded-full px-8 text-xs tracking-widest uppercase font-semibold border-[#3d1a28]/20 text-[#3d1a28]/70 bg-transparent"
                data-testid="button-less-testimonials"
              >
                Show Less <ChevronDown className="ml-2 w-4 h-4 rotate-180" />
              </Button>
            </div>
          )}

          <div className="text-center mt-4">
            <Link href="/discount-codes" data-testid="link-results-discounts">
              <Button
                size="lg"
                className="btn-gradient-rose text-white border-0 rounded-full px-8 sm:px-12 text-xs sm:text-sm tracking-widest uppercase font-semibold whitespace-normal text-center leading-relaxed h-auto py-4"
              >
                Vetted Supplements, Longevity Tech & Fashion — 2026 Discount Codes
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
