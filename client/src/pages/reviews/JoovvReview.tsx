import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import joovvDeviceImg from "@assets/image_1772900161167.png";
import joovvBenefitsImg from "@assets/image_1772900170720.png";

export default function JoovvReview() {
  return (
    <PageLayout
      title="Is Joovv Worth It?"
      subtitle="A Deep Dive into the Benefits and Results (2026 Edition)"
      backLabel="Products Reviews"
      backHref="/product-reviews"
    >
      <article className="space-y-12">
        <div className="card-glass rounded-2xl overflow-hidden" data-testid="img-hero-joovv">
          <img loading="lazy" decoding="async" src={joovvDeviceImg} alt="Joovv red light therapy panel" className="w-full h-auto object-cover" />
        </div>

        <div className="flex flex-wrap gap-3">
          <Badge className="bg-red-500/15 text-red-300 border border-red-500/25 rounded-full px-3 py-0.5 text-xs" data-testid="badge-review-type">
            In-Depth Review
          </Badge>
          <Badge className="bg-white/5 text-black/50 border border-white/10 rounded-full px-3 py-0.5 text-xs">
            Updated 2026
          </Badge>
        </div>

        <section data-testid="section-intro">
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              You've seen the glowing red panels. You've heard the biohacking "bros" and skincare gurus alike obsessing over them. But with a price tag that ranges from $549 for a portable Go 2.0 to several thousand for a full body Solo 3.0 or Elite setup, the question is screaming to be asked:
            </p>
            <p className="text-black/90 font-semibold text-lg">
              Is this actually worth your hard earned coin, or is it just a very expensive mood light?
            </p>
            <p>
              I've spent the last few months standing naked in front of a red light (for science!), and here is the unfiltered truth about whether Joovv lives up to the 2026 hype.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-tldr">
          <h2 className="font-display text-2xl font-bold text-black mb-4" data-testid="text-tldr-heading">The "Too Long; Didn't Read"</h2>
          <div className="card-glass rounded-2xl p-6 sm:p-8">
            <p className="text-black/70 leading-relaxed">
              If you're just here for the verdict: <span className="text-black/90 font-semibold">Yes, but it depends on your "Why."</span> If you want a "set it and forget it" tool for skin longevity, muscle recovery, and fixing your wrecked circadian rhythm, Joovv is the gold standard for a reason. But if you're expecting a miracle after one 10 minute session? You're going to be disappointed. This is a consistency game.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-benefits">
          <h2 className="font-display text-2xl font-bold text-black mb-4" data-testid="text-benefits-heading">The Benefits: What's Actually Happening?</h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              We aren't just standing in the dark with a red bulb. Joovv uses medical grade LEDs to blast your cells with specific wavelengths: 660nm (Red) and 850nm (Near-Infrared). In 2026 lingo, we call this "charging your cellular batteries."
            </p>
          </div>
          <div className="card-glass rounded-2xl overflow-hidden mt-6" data-testid="img-joovv-benefits">
            <img loading="lazy" decoding="async" src={joovvBenefitsImg} alt="Joovv benefits of light therapy infographic" className="w-full h-auto object-cover" />
          </div>
        </section>

        <section data-testid="section-glass-skin">
          <h3 className="font-display text-xl font-bold text-black mb-4" data-testid="text-glass-skin-heading">1. The "Glass Skin" Factor</h3>
          <div className="card-glass rounded-xl p-5">
            <p className="text-black/70 text-sm leading-relaxed">
              If your "Beauty Meets Wellness" Pinterest board is full of red light masks, listen up. While masks are cute, Joovv's irradiance (the power of the light) is on another level. I noticed a visible "plumpness" in my skin texture and a legit decrease in redness after about 3 weeks of daily use. It's basically like a natural, needle free filler for your collagen.
            </p>
          </div>
        </section>

        <section data-testid="section-recovery">
          <h3 className="font-display text-xl font-bold text-black mb-4" data-testid="text-recovery-heading">2. Recovery for the "Weekend Warrior"</h3>
          <div className="card-glass rounded-xl p-5">
            <p className="text-black/70 text-sm leading-relaxed">
              Whether you're hitting Pilates or training for a marathon, the Recovery+ mode on the Generation 3.0 devices is a vibe. It uses pulsed NIR light to get deep into the muscle tissue. I've noticed significantly less DOMS (delayed onset muscle soreness) when I Joovv within an hour of a workout.
            </p>
          </div>
        </section>

        <section data-testid="section-circadian">
          <h3 className="font-display text-xl font-bold text-black mb-4" data-testid="text-circadian-heading">3. Circadian Rhythm Hack</h3>
          <div className="card-glass rounded-xl p-5">
            <p className="text-black/70 text-sm leading-relaxed">
              This is the sleeper hit (pun intended). In an era of "Neurowellness," we're finally realizing blue light is the enemy. Joovv's Ambient Mode gives off a soft, sunset like glow that doesn't mess with your melatonin. It's become my favorite "wind down" ritual before bed.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-reality-check">
          <h2 className="font-display text-2xl font-bold text-black mb-4" data-testid="text-reality-heading">The Reality Check: The Joovv "Tax"</h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Let's address the elephant in the room: <span className="text-black/90 font-semibold">The Price.</span>
            </p>
            <p>
              You can find $100 red light panels on Amazon. Why pay for Joovv?
            </p>
            <div className="card-glass rounded-xl p-5">
              <ul className="space-y-4 text-black/70 text-sm">
                <li>
                  <span className="text-black/90 font-semibold">The "Safety First" Energy:</span> Joovv panels are medical grade and safety certified. Cheap panels often have "flicker" issues or inconsistent wavelengths that can actually stress your eyes.
                </li>
                <li>
                  <span className="text-black/90 font-semibold">Modular Design:</span> You can start with a Mini 3.0 and literally "lego piece" your way up to a full-body wall as your budget grows.
                </li>
                <li>
                  <span className="text-black/90 font-semibold">The App Integration:</span> Tracking your sessions and setting "Wake up" alarms via the app makes it feel like a seamless part of a smart home, not just a clunky lamp.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-worth-it">
          <h2 className="font-display text-2xl font-bold text-black mb-4" data-testid="text-worth-heading">Is It Worth It?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#4ade80" }}>
              <h3 className="text-emerald-300 font-bold mb-2">Buy it if:</h3>
              <p className="text-black/70 text-sm leading-relaxed">
                You are tired of "surface level" beauty treatments and want a foundational tool for longevity. If you already spend money on monthly facials or sports massages, a Joovv Solo pays for itself in a year.
              </p>
            </div>
            <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#f87171" }}>
              <h3 className="text-red-300 font-bold mb-2">Skip it if:</h3>
              <p className="text-black/70 text-sm leading-relaxed">
                You're in a "Gentle Biohacking" phase and aren't ready to commit to 10 minutes a day. If it's just going to sit in your closet gathering dust, that's an expensive paperweight.
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-verdict">
          <h2 className="font-display text-2xl font-bold text-black mb-4" data-testid="text-verdict-heading">The 2026 Verdict</h2>
          <div className="card-glass rounded-2xl p-6 sm:p-8">
            <p className="text-black/70 leading-relaxed">
              In a world of "over optimization," Joovv feels like one of the few tools that actually supports the body's natural functions rather than trying to force them. It's not a magic wand, but it's a powerhouse for anyone playing the long game with their health.
            </p>
          </div>
        </section>

        <div className="text-center pt-4">
          <Button asChild size="lg" className="bg-rose-500 text-white border-0 rounded-full px-6 sm:px-8 py-4 text-sm tracking-widest uppercase font-semibold h-auto leading-relaxed">
            <a href="https://joovv.com/" target="_blank" rel="noopener noreferrer" data-testid="link-joovv-shop" className="inline-flex items-center justify-center gap-2 flex-wrap">
              Get Joovv — Use Code THRIVETOOLS <ExternalLink className="w-4 h-4 flex-shrink-0" />
            </a>
          </Button>
        </div>
      </article>
    </PageLayout>
  );
}
