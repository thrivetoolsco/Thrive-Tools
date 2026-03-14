import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, FlaskConical, User, Leaf, Heart, Zap } from "lucide-react";
import im8ProductImg from "@assets/image_1772841246898.png";
import im8ClinicalImg from "@assets/image_1772841266580.png";

export default function Im8HealthReview() {
  return (
    <PageLayout
      title="IM8 Health"
      subtitle="Longevity Science or Just Marketing?"
      backLabel="Products Reviews"
      backHref="/product-reviews"
    >
      <article className="space-y-12">
        <div className="card-glass rounded-2xl overflow-hidden" data-testid="img-hero-im8">
          <img loading="lazy" decoding="async" src={im8ProductImg} alt="IM8 Health Daily Ultimate Essentials" className="w-full h-auto object-cover" />
        </div>

        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c9a020]/15 text-[#c41230] border border-[#c9a020]/25 rounded-full px-3 py-0.5 text-xs">
            In-Depth Review
          </Badge>
          <Badge className="bg-white/5 text-black/50 border border-white/10 rounded-full px-3 py-0.5 text-xs">
            Updated March 2026
          </Badge>
        </div>

        <section data-testid="section-intro">
          <h2 className="font-display text-2xl font-bold text-black mb-4">What Is IM8?</h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              IM8 Health positions itself as the ultimate all-in-one supplement: a single scoop that replaces your multivitamin, probiotics, and electrolytes. Bold claim. In a market flooded with overpromising products and underdosed formulas, I wanted to dig into whether IM8 is the real deal or just another well-packaged marketing story.
            </p>
            <p>
              After 1 year of daily use, extensive research into their ingredient sourcing, and two rounds of blood work, here's my honest assessment.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-formula">
          <div className="flex items-center gap-3 mb-6">
            <FlaskConical className="w-5 h-5 text-emerald-300" />
            <h2 className="font-display text-2xl font-bold text-black">The Formula Deep Dive</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            <div className="card-glass rounded-xl p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-3">
                <Leaf className="w-5 h-5 text-emerald-300" />
              </div>
              <h3 className="text-black font-bold mb-2">75+ Nutrients</h3>
              <p className="text-black/50 text-xs leading-relaxed">Vitamins, minerals, trace elements sourced from whole food extracts</p>
            </div>
            <div className="card-glass rounded-xl p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mx-auto mb-3">
                <Heart className="w-5 h-5 text-[#d4a030]" />
              </div>
              <h3 className="text-black font-bold mb-2">15B CFU Probiotics</h3>
              <p className="text-black/50 text-xs leading-relaxed">Multi-strain probiotic blend with prebiotic fiber for gut health</p>
            </div>
            <div className="card-glass rounded-xl p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center mx-auto mb-3">
                <Zap className="w-5 h-5 text-amber-300" />
              </div>
              <h3 className="text-black font-bold mb-2">Full Electrolytes</h3>
              <p className="text-black/50 text-xs leading-relaxed">Sodium, potassium, magnesium for optimal hydration & nerve function</p>
            </div>
          </div>

          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              What impressed me most is their use of <strong className="text-black/90">methylated B vitamins</strong>. IM8 uses methylcobalamin (B12) and L-5-MTHF (folate) instead of the cheaper synthetic forms that many competitors use. This matters because roughly 40% of people carry MTHFR gene variants that impair their ability to convert synthetic folic acid.
            </p>
            <p>
              Their mineral forms are equally thoughtful — magnesium bisglycinate instead of magnesium oxide (which has notoriously poor absorption), and zinc picolinate instead of zinc gluconate.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-science">
          <div className="flex items-center gap-3 mb-6">
            <FlaskConical className="w-5 h-5 text-[#d4a030]" />
            <h2 className="font-display text-2xl font-bold text-black">The Science Behind It</h2>
          </div>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              The longevity claims center around several well-researched mechanisms. Their adaptogenic blend includes Ashwagandha (KSM-66 extract), which has robust clinical evidence for reducing cortisol and improving stress resilience.
            </p>
            <p>
              A randomized, double-blind, placebo-controlled study by Chandrasekhar et al. demonstrated that KSM-66 Ashwagandha reduced serum cortisol levels by an average of 30.5% over 60 days, with subjects reporting significant improvements in stress, anxiety, and sleep quality.
            </p>
          </div>

          <div className="card-glass rounded-2xl overflow-hidden mt-8" data-testid="img-im8-clinical">
            <img loading="lazy" decoding="async" src={im8ClinicalImg} alt="IM8 Health clinically proven third-party tested results" className="w-full h-auto object-cover" />
          </div>

          <div className="card-glass rounded-xl p-5 mt-6 border-l-4" style={{ borderLeftColor: "#c9a020" }}>
            <p className="text-black/50 text-xs uppercase tracking-wider mb-2">Scientific Reference</p>
            <p className="text-black/70 text-sm leading-relaxed">
              Chandrasekhar, K., Kapoor, J., & Anishetty, S. (2012). "A prospective, randomized double-blind, placebo-controlled study of safety and efficacy of a high-concentration full-spectrum extract of Ashwagandha root." <em>Indian Journal of Psychological Medicine</em>, 34(3), 255–262. doi:10.4103/0253-7176.106022
            </p>
          </div>

          <div className="card-glass rounded-xl p-5 mt-4 border-l-4" style={{ borderLeftColor: "#c9a020" }}>
            <p className="text-black/50 text-xs uppercase tracking-wider mb-2">Scientific Reference</p>
            <p className="text-black/70 text-sm leading-relaxed">
              Rao, A. V., & Rao, L. G. (2007). "Carotenoids and human health." <em>Pharmacological Research</em>, 55(3), 207–216. doi:10.1016/j.phrs.2007.01.012
            </p>
          </div>

          <div className="card-glass rounded-xl p-5 mt-4 border-l-4" style={{ borderLeftColor: "#c9a020" }}>
            <p className="text-black/50 text-xs uppercase tracking-wider mb-2">Scientific Reference</p>
            <p className="text-black/70 text-sm leading-relaxed">
              Firenzuoli, F., & Gori, L. (2007). "Herbal Medicine Today: Clinical and Research Issues." <em>Evidence-Based Complementary and Alternative Medicine</em>, 4(S1), 37–40. doi:10.1093/ecam/nem096
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-personal">
          <div className="flex items-center gap-3 mb-6">
            <User className="w-5 h-5 text-[#c41230]" />
            <h2 className="font-display text-2xl font-bold text-black">My Personal Experience</h2>
          </div>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              I started taking IM8 in early 2025 and haven't stopped. The first thing I noticed was a significant improvement in my morning energy — I no longer needed coffee to feel alert. Within two weeks, my digestion stabilized noticeably, which I attribute to the probiotic and prebiotic complex.
            </p>
            <p>
              By month three, my blood work told a compelling story: B12 levels rose from 380 pg/mL to 620 pg/mL, vitamin D went from borderline (28 ng/mL) to optimal (52 ng/mL), and my inflammatory markers (hs-CRP) dropped from 1.8 to 0.6 mg/L.
            </p>
            <p>
              The electrolyte component was an unexpected bonus. As someone who practices breathwork daily and sweats through intense sessions, having balanced electrolytes without needing a separate supplement simplified my routine significantly.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-verdict">
          <div className="flex items-center gap-3 mb-6">
            <Star className="w-5 h-5 text-amber-300" />
            <h2 className="font-display text-2xl font-bold text-black">Final Verdict</h2>
          </div>
          <div className="card-glass rounded-2xl p-6 sm:p-8 text-center">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 text-amber-400" fill="currentColor" />)}
            </div>
            <p className="text-black font-bold text-lg mb-3">The Real Deal</p>
            <p className="text-black/60 text-sm leading-relaxed max-w-xl mx-auto">
              IM8 isn't just marketing — it's genuinely one of the most complete and well-formulated all-in-one supplements I've encountered in 14 years of biohacking. The science backs their ingredient choices, and my personal results speak for themselves. This is what I recommend to every single one of my clients as their foundational supplement.
            </p>
          </div>
        </section>

        <div className="text-center pt-4">
          <Button asChild size="lg" className="btn-gradient-rose text-white border-0 rounded-full px-6 sm:px-8 py-4 text-sm tracking-widest uppercase font-semibold h-auto leading-relaxed">
            <a href="https://im8health.com/" target="_blank" rel="noopener noreferrer" data-testid="link-im8-shop" className="inline-flex items-center justify-center gap-2 flex-wrap">
              Get IM8 — Use Code THRIVE10 <ExternalLink className="w-4 h-4 flex-shrink-0" />
            </a>
          </Button>
        </div>
      </article>
    </PageLayout>
  );
}
