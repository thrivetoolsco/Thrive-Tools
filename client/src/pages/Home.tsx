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
    <div className="min-h-screen bg-[#f5f0e8] text-[#2d1f14] overflow-x-hidden">
      <Navigation />

      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "#f5f0e8" }}
      >
        {/* Botanical / Sacred Geometry illustration */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <svg
            viewBox="0 0 900 900"
            className="absolute w-[min(130vw,960px)] h-[min(130vw,960px)] opacity-[0.12]"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Concentric rings */}
            <circle cx="450" cy="450" r="420" fill="none" stroke="#c49280" strokeWidth="0.6"/>
            <circle cx="450" cy="450" r="380" fill="none" stroke="#c9a560" strokeWidth="0.4"/>
            <circle cx="450" cy="450" r="330" fill="none" stroke="#c49280" strokeWidth="0.8"/>
            <circle cx="450" cy="450" r="270" fill="none" stroke="#c9a560" strokeWidth="0.5"/>
            <circle cx="450" cy="450" r="210" fill="none" stroke="#c49280" strokeWidth="0.7"/>
            <circle cx="450" cy="450" r="150" fill="none" stroke="#c9a560" strokeWidth="0.5"/>
            <circle cx="450" cy="450" r="95"  fill="none" stroke="#c49280" strokeWidth="0.9"/>
            <circle cx="450" cy="450" r="45"  fill="none" stroke="#c9a560" strokeWidth="0.6"/>
            {/* Flower of Life — inner 6 petals at r=95 */}
            {[0,60,120,180,240,300].map((deg, i) => {
              const r = (deg * Math.PI) / 180;
              return <circle key={`fp${i}`} cx={450+95*Math.cos(r)} cy={450+95*Math.sin(r)} r="95" fill="none" stroke="#c49280" strokeWidth="0.65"/>;
            })}
            {/* Outer petal ring at r=210 */}
            {[30,90,150,210,270,330].map((deg, i) => {
              const r = (deg * Math.PI) / 180;
              return <circle key={`op${i}`} cx={450+210*Math.cos(r)} cy={450+210*Math.sin(r)} r="95" fill="none" stroke="#c9a560" strokeWidth="0.35"/>;
            })}
            {/* 12 radial spokes */}
            {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => {
              const r = (deg * Math.PI) / 180;
              return <line key={`sp${i}`}
                x1={450+45*Math.cos(r)} y1={450+45*Math.sin(r)}
                x2={450+420*Math.cos(r)} y2={450+420*Math.sin(r)}
                stroke="#c49280" strokeWidth="0.35"
              />;
            })}
            {/* Botanical leaves at r=305 */}
            {[0,45,90,135,180,225,270,315].map((deg, i) => {
              const r = (deg * Math.PI) / 180;
              const lx = 450 + 305 * Math.cos(r);
              const ly = 450 + 305 * Math.sin(r);
              return (
                <g key={`lf${i}`} transform={`translate(${lx},${ly}) rotate(${deg+90})`}>
                  <ellipse cx="0" cy="0" rx="9" ry="36" fill="none" stroke="#c9a560" strokeWidth="0.65"/>
                  <line x1="0" y1="-36" x2="0" y2="36" stroke="#c49280" strokeWidth="0.35"/>
                  {[-24,-12,0,12,24].map((y, j) => (
                    <line key={j} x1={-7*(1-Math.abs(y)/30)} y1={y} x2={7*(1-Math.abs(y)/30)} y2={y} stroke="#c9a560" strokeWidth="0.28"/>
                  ))}
                </g>
              );
            })}
            {/* Accent dots */}
            {[0,45,90,135,180,225,270,315].map((deg, i) => {
              const r = (deg * Math.PI) / 180;
              return <circle key={`d1${i}`} cx={450+150*Math.cos(r)} cy={450+150*Math.sin(r)} r="2.8" fill="#c49280" opacity="0.55"/>;
            })}
            {[0,60,120,180,240,300].map((deg, i) => {
              const r = (deg * Math.PI) / 180;
              return <circle key={`d2${i}`} cx={450+210*Math.cos(r)} cy={450+210*Math.sin(r)} r="2.2" fill="#c9a560" opacity="0.45"/>;
            })}
            {/* Centre bloom */}
            <circle cx="450" cy="450" r="11" fill="none" stroke="#c49280" strokeWidth="0.9"/>
            <circle cx="450" cy="450" r="5"  fill="#c49280" opacity="0.2"/>
            {[0,60,120,180,240,300].map((deg, i) => {
              const r = (deg * Math.PI) / 180;
              const bx = 450 + 19 * Math.cos(r);
              const by = 450 + 19 * Math.sin(r);
              return <ellipse key={`bl${i}`} cx={bx} cy={by} rx="7" ry="3.5"
                transform={`rotate(${deg},${bx},${by})`}
                fill="none" stroke="#c9a560" strokeWidth="0.55"/>;
            })}
          </svg>
          {/* Soft ambient glows */}
          <div className="absolute w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(196,146,128,0.15) 0%, transparent 70%)", filter: "blur(90px)" }}
          />
          <div className="absolute w-[350px] h-[350px] rounded-full"
            style={{ top: "12%", right: "8%", background: "radial-gradient(circle, rgba(201,165,96,0.1) 0%, transparent 70%)", filter: "blur(70px)" }}
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
            className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            data-testid="text-hero-headline"
          >
            <span className="text-gradient-rose">Still foggy? Still tired? </span>
            <br />
            <span className="text-[#2d1f14]/90">Still spending money on supplements that do nothing?</span>
          </h1>

          <p
            className="text-[#2d1f14]/65 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium px-2"
            data-testid="text-hero-subheadline"
          >
            I'm Eden. For 14 years I've been deep in the research — Taoist protocols, longevity science, biohacking — separating what actually works from what just sells.
            <br /><br />
            And I've learned one thing: 90% of wellness is noise. The 10% that works? <Link href="/discount-codes" className="underline underline-offset-2 hover:text-[#c49280] transition-colors">It's on this list.</Link>
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
            className="text-[#2d1f14]/65 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium px-2"
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
                className="btn-gradient-rose text-white border-0 rounded-full px-8 text-sm tracking-widest uppercase font-semibold w-full sm:w-auto"
              >
                → See the full list + discounts
              </Button>
            </Link>
          </div>

          <div className="flex justify-center mb-8">
            <div className="relative max-w-sm w-full" data-testid="img-eden-photo-2">
              <div
                className="absolute inset-0 rounded-2xl opacity-25 glow-purple"
                style={{ background: "radial-gradient(circle at 50% 50%, #b09880 0%, transparent 70%)" }}
              />
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(176,152,128,0.2)" }}
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

          <p className="text-[#2d1f14]/65 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-6 leading-relaxed font-medium px-2" data-testid="text-retreats-intro">
            Real transformation isn't just what you take. It's how you live.<br /><br />
            That's why I built spaces where the real work happens. In my retreats and workshops, we go deeper: nervous system reset, Taoist longevity practices, and cutting through the noise together, in person.
          </p>

          <div className="flex justify-center mb-8">
            <Link href="/retreats-workshops/blossoming-bliss" data-testid="button-explore-retreats">
              <Button
                size="lg"
                className="btn-gradient-rose text-white border-0 rounded-full px-8 text-sm tracking-widest uppercase font-semibold w-full sm:w-auto"
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
        style={{ background: "linear-gradient(180deg, #f5f0e8 0%, #ede8df 50%, #f5f0e8 100%)" }}
      >
        <div className="section-divider mb-12 sm:mb-16" />
        <div className="max-w-4xl mx-auto">
          <div className="mt-16 sm:mt-24 text-center">
            <p className="text-[#2d1f14]/60 text-lg font-medium mb-4">
              Curious about my 14 year journey?
            </p>
            <Link href="/about" data-testid="link-full-story">
              <Button
                className="btn-gradient-rose rounded-full px-8 text-sm tracking-widest uppercase font-semibold text-white border-0"
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
          background: "linear-gradient(135deg, #ede8df 0%, #e8e2d6 50%, #ede8df 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #c49280 0%, transparent 70%)", filter: "blur(80px)" }}
          />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              data-testid="text-results-headline"
            >
              <span className="text-gradient-rose">The Results</span>
            </h2>
            <p className="text-[#2d1f14]/55 text-base sm:text-lg max-w-xl mx-auto">
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
                  <p className="text-[#2d1f14]/70 text-sm font-medium" data-testid={`text-testimonial-name-${i}`}>
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
                className="rounded-full px-8 text-sm tracking-widest uppercase font-semibold border-[#2d1f14]/20 text-[#2d1f14]/80 bg-transparent"
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
                className="rounded-full px-8 text-sm tracking-widest uppercase font-semibold border-[#2d1f14]/20 text-[#2d1f14]/80 bg-transparent"
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
                className="btn-gradient-rose text-white border-0 rounded-full px-6 sm:px-10 text-xs sm:text-sm tracking-widest uppercase font-semibold whitespace-normal text-center leading-relaxed h-auto py-3"
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
