import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import im8ProductImg from "@assets/image_1772841246898.png";
import ag1ProductImg from "@assets/image_1772841256231.png";

export default function Im8VsAg1() {
  return (
    <PageLayout
      title="IM8 vs AG1"
      subtitle="Is David Beckham's Multivitamin Actually Better?"
      backLabel="Products Reviews"
      backHref="/product-reviews"
    >
      <article className="space-y-12">
        <div className="relative flex flex-col sm:flex-row items-center gap-5">
          <div className="card-glass rounded-2xl overflow-hidden flex-1" data-testid="img-im8-product">
            <img loading="lazy" decoding="async" src={im8ProductImg} alt="IM8 Health Daily Ultimate Essentials" className="w-full h-auto object-cover" />
          </div>
          <div className="flex-shrink-0 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white font-bold text-lg">
            vs.
          </div>
          <div className="card-glass rounded-2xl overflow-hidden flex-1" data-testid="img-ag1-product">
            <img loading="lazy" decoding="async" src={ag1ProductImg} alt="AG1 Athletic Greens supplement" className="w-full h-auto object-cover" />
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Badge className="bg-amber-500/15 text-amber-300 border border-amber-500/25 rounded-full px-3 py-0.5 text-xs">
            Comparison
          </Badge>
          <Badge className="bg-white/5 text-white/50 border border-white/10 rounded-full px-3 py-0.5 text-xs">
            Updated March 2026
          </Badge>
        </div>

        <section data-testid="section-intro">
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              David Beckham has entered the chat with IM8, and honestly? It's giving "foundational nutrition" a much needed upgrade.
            </p>
            <p>
              If you're wondering if it's just another celebrity cash grab, here's why IM8 is actually moving the needle.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-gut-health">
          <h2 className="font-display text-2xl font-bold text-white mb-4" data-testid="text-gut-health-heading">1. The Gut Health "Holy Trinity"</h2>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              While AG1 has the standard prebiotics and probiotics, IM8 goes for the triple threat: Prebiotics, Probiotics, AND Postbiotics.
            </p>
            <div className="card-glass rounded-xl p-5 mt-2">
              <h3 className="text-white/90 font-semibold mb-2">The Probiotics:</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                IM8 uses 10 billion CFUs of clinically studied strains like Bacillus coagulans and Bacillus subtilis. These are "shelf stable," meaning they actually survive the trip to your gut rather than dying on your kitchen counter.
              </p>
            </div>
            <div className="card-glass rounded-xl p-5">
              <h3 className="text-white/90 font-semibold mb-2">The Postbiotic Advantage:</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                This is the game changer. Postbiotics (like FloraSMART®️) provide the beneficial compounds a healthy microbiome produces directly to your system. It's like skipping the line for better digestion and immediate gut barrier support.
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-stacks">
          <h2 className="font-display text-2xl font-bold text-white mb-4" data-testid="text-stacks-heading">2. Built-in "Stacks" (Save Your Money)</h2>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              Most of us end up buying extra supplements to "stack" on top of a greens powder. IM8 basically looked at our Amazon carts and said, "I'll do it myself."
            </p>
            <div className="card-glass rounded-xl p-5">
              <ul className="space-y-4 text-white/70 text-sm">
                <li>
                  <span className="text-white/90 font-semibold">Joints & Muscles:</span> It includes 1,000mg of MSM for joint comfort; something AG1 completely lacks.
                </li>
                <li>
                  <span className="text-white/90 font-semibold">Heart & Energy:</span> You get 100mg of CoQ10 (compared to AG1's 60mg) for better cellular energy and heart health.
                </li>
                <li>
                  <span className="text-white/90 font-semibold">Hydration:</span> It actually has a dedicated electrolyte complex. No more buying separate hydration packets for your post workout (or post wine) recovery.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-transparency">
          <h2 className="font-display text-2xl font-bold text-white mb-4" data-testid="text-transparency-heading">3. Radical Transparency</h2>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              AG1 is famous for its "proprietary blends," which is code for "we won't tell you exactly how much of each ingredient is in here." IM8 is way more label forward. You can actually see the clinical dosages of the heavy hitters, so you know you're getting enough to actually make a difference, not just "fairy dusted" amounts for marketing.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-verdict">
          <h2 className="font-display text-2xl font-bold text-white mb-4" data-testid="text-verdict-heading">The Verdict</h2>
          <div className="card-glass rounded-2xl p-6 sm:p-8">
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                AG1 is the OG, but IM8 is like the v2.0 we actually need. It simplifies the "supplement graveyard" in your cabinet by folding in joint support, hydration, and a superior gut health system into one scoop. Plus, if it's good enough for Beckham to stay that fit at 50, it's probably good enough for our afternoon slumps.
              </p>
              <p className="text-white/90 font-semibold">
                Ready to simplify your morning?
              </p>
            </div>
          </div>
        </section>

        <div className="text-center pt-4">
          <Button asChild size="lg" className="bg-rose-500 text-white border-0 rounded-full px-6 sm:px-8 py-4 text-sm tracking-widest uppercase font-semibold h-auto leading-relaxed">
            <a href="https://im8health.com/" target="_blank" rel="noopener noreferrer" data-testid="link-im8-shop" className="inline-flex items-center justify-center gap-2 flex-wrap">
              Try IM8 — Use Code THRIVE10 <ExternalLink className="w-4 h-4 flex-shrink-0" />
            </a>
          </Button>
        </div>
      </article>
    </PageLayout>
  );
}
