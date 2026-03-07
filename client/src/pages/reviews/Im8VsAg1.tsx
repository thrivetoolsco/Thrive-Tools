import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, FlaskConical, User, CheckCircle, XCircle } from "lucide-react";
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
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="card-glass rounded-2xl overflow-hidden" data-testid="img-im8-product">
            <img src={im8ProductImg} alt="IM8 Health Daily Ultimate Essentials" className="w-full h-auto object-cover" />
          </div>
          <div className="card-glass rounded-2xl overflow-hidden" data-testid="img-ag1-product">
            <img src={ag1ProductImg} alt="AG1 Athletic Greens supplement" className="w-full h-auto object-cover" />
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
          <h2 className="font-display text-2xl font-bold text-white mb-4">The Big Question</h2>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              AG1 (formerly Athletic Greens) has become one of the most marketed supplements on the planet, with celebrity endorsements from David Beckham, podcaster Tim Ferriss, and countless influencers. But does heavy marketing translate to a superior product?
            </p>
            <p>
              I've spent over 6 months testing both IM8 and AG1 side by side, tracking my energy levels, digestion, blood markers, and overall well-being. Here's the unfiltered truth.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-ingredients">
          <div className="flex items-center gap-3 mb-6">
            <FlaskConical className="w-5 h-5 text-rose-300" />
            <h2 className="font-display text-2xl font-bold text-white">Ingredient Breakdown</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="card-glass rounded-xl p-6">
              <h3 className="text-emerald-300 font-bold text-lg mb-4">IM8 Health</h3>
              <ul className="space-y-3 text-white/60 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>75+ bioavailable vitamins, minerals & trace elements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>Probiotics (15 billion CFU) & prebiotics included</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>Full electrolyte complex for hydration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>Methylated B vitamins for optimal absorption</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>Adaptogenic herbs & medicinal mushrooms</span>
                </li>
              </ul>
            </div>

            <div className="card-glass rounded-xl p-6">
              <h3 className="text-green-300 font-bold text-lg mb-4">AG1 (Athletic Greens)</h3>
              <ul className="space-y-3 text-white/60 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>75 vitamins, minerals & whole food ingredients</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>7.2 billion CFU probiotics</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-400/60 mt-0.5 flex-shrink-0" />
                  <span>No dedicated electrolyte complex</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-400/60 mt-0.5 flex-shrink-0" />
                  <span>Uses cyanocobalamin B12 (less bioavailable form)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Ashwagandha & Rhodiola adaptogen blend</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-science">
          <div className="flex items-center gap-3 mb-6">
            <FlaskConical className="w-5 h-5 text-purple-300" />
            <h2 className="font-display text-2xl font-bold text-white">What the Science Says</h2>
          </div>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              The key differentiator comes down to <strong className="text-white/90">bioavailability</strong>. A study published in the <em>Journal of the American College of Nutrition</em> (2019) found that methylated forms of B vitamins showed 3-4x higher absorption rates compared to their synthetic counterparts.
            </p>
            <p>
              IM8 uses methylcobalamin (B12) and methylfolate (B9), whereas AG1 relies on cyanocobalamin — a form that requires your liver to convert it before use. For individuals with MTHFR gene variants (roughly 40% of the population), this difference is significant.
            </p>
          </div>

          <div className="card-glass rounded-xl p-5 mt-6 border-l-4" style={{ borderLeftColor: "#9b6fa5" }}>
            <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Scientific Reference</p>
            <p className="text-white/70 text-sm leading-relaxed">
              Scaglione, F., & Panzavolta, G. (2014). "Folate, folic acid and 5-methyltetrahydrofolate are not the same thing." <em>Xenobiotica</em>, 44(5), 480–488. doi:10.3109/00498254.2013.845705
            </p>
          </div>

          <div className="card-glass rounded-xl p-5 mt-4 border-l-4" style={{ borderLeftColor: "#9b6fa5" }}>
            <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Scientific Reference</p>
            <p className="text-white/70 text-sm leading-relaxed">
              Paul, C., & Brady, D. M. (2017). "Comparative Bioavailability and Utilization of Particular Forms of B12 Supplements." <em>Integrative Medicine</em>, 16(1), 42–49. PMCID: PMC6494183
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-personal">
          <div className="flex items-center gap-3 mb-6">
            <User className="w-5 h-5 text-rose-300" />
            <h2 className="font-display text-2xl font-bold text-white">My Personal Experience</h2>
          </div>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              After 3 months on AG1, I noticed moderate improvements in energy and digestion. The taste was pleasant, and the convenience factor was high. However, I still felt I needed additional supplements to fill gaps — especially electrolytes and a stronger probiotic.
            </p>
            <p>
              Switching to IM8, the difference was noticeable within the first two weeks. My morning brain fog cleared up almost entirely, my gut felt more balanced, and I no longer needed a separate electrolyte supplement. The fact that it combines everything — multivitamin, probiotics, AND electrolytes — in one scoop was a game changer for simplifying my routine.
            </p>
            <p>
              After 6 months of daily IM8 use, my blood work showed improved B12 levels, better iron absorption markers, and significantly improved gut microbiome diversity (tested via a stool panel).
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-verdict">
          <div className="flex items-center gap-3 mb-6">
            <Star className="w-5 h-5 text-amber-300" />
            <h2 className="font-display text-2xl font-bold text-white">The Verdict</h2>
          </div>
          <div className="card-glass rounded-2xl p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="text-center p-4">
                <p className="text-emerald-300 font-bold text-lg mb-1">IM8 Health</p>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-amber-400" fill="currentColor" />)}
                </div>
                <p className="text-white/50 text-sm">Best overall value & formula</p>
              </div>
              <div className="text-center p-4">
                <p className="text-green-300 font-bold text-lg mb-1">AG1</p>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[1,2,3].map(s => <Star key={s} className="w-4 h-4 text-amber-400" fill="currentColor" />)}
                  {[4,5].map(s => <Star key={s} className="w-4 h-4 text-white/20" />)}
                </div>
                <p className="text-white/50 text-sm">Good but overpriced for what you get</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed text-center">
              AG1 isn't a bad product — it's just not the best. When you factor in price, bioavailability, and the completeness of the formula, IM8 wins by a significant margin.
            </p>
          </div>
        </section>

        <div className="text-center pt-4">
          <Button asChild size="lg" className="bg-rose-500 text-white border-0 rounded-full px-6 sm:px-8 py-4 text-sm tracking-widest uppercase font-semibold h-auto leading-relaxed">
            <a href="https://im8health.com/" target="_blank" rel="noopener noreferrer" data-testid="link-im8-shop" className="inline-flex items-center justify-center gap-2 flex-wrap">
              Try IM8 — Use Code THRIVE8 <ExternalLink className="w-4 h-4 flex-shrink-0" />
            </a>
          </Button>
        </div>
      </article>
    </PageLayout>
  );
}
