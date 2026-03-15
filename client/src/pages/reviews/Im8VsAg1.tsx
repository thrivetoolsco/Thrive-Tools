import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import im8ProductImg from "@assets/image_1772841246898.png";
import ag1ProductImg from "@assets/image_1772841256231.png";

const tableRows = [
  { label: "Ingredients", im8: "90+ clinically dosed", ag1: "83 broad-spectrum" },
  { label: "Dosing transparency", im8: "Full label disclosure", ag1: "Proprietary blends used" },
  { label: "Certification", im8: "NSF Certified for Sport", ag1: "NSF Certified for Sport" },
  { label: "Key extras", im8: "CoQ10, MSM, electrolytes, joint support", ag1: "Digestive enzymes, adaptogens" },
  { label: "Taste", im8: "Acai/mixed berry, stevia-free", ag1: "Pineapple-vanilla (mixed reviews)" },
  { label: "Price", im8: "~$89/month subscription", ag1: "~$79/month subscription" },
  { label: "Best for", im8: "Performance, longevity, biohackers", ag1: "General wellness, daily foundation" },
];

export default function Im8VsAg1() {
  return (
    <PageLayout
      title="IM8 vs AG1 (2026): An Honest, Science-Based Comparison"
      subtitle="No sponsored bias. Just the facts."
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-12">

        {/* Product images */}
        <div className="relative flex flex-col sm:flex-row items-center gap-5">
          <div className="card-glass rounded-2xl overflow-hidden flex-1" data-testid="img-im8-product">
            <img loading="lazy" decoding="async" src={im8ProductImg} alt="IM8 Health Daily Ultimate Essentials" className="w-full h-auto object-cover" />
          </div>
          <div className="flex-shrink-0 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-black/5 border border-black/15 text-black font-bold text-lg">
            vs.
          </div>
          <div className="card-glass rounded-2xl overflow-hidden flex-1" data-testid="img-ag1-product">
            <img loading="lazy" decoding="async" src={ag1ProductImg} alt="AG1 Athletic Greens supplement" className="w-full h-auto object-cover" />
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Badge className="bg-amber-500/15 text-amber-700 border border-amber-500/25 rounded-full px-3 py-0.5 text-xs">
            Comparison
          </Badge>
          <Badge className="bg-white/5 text-black/50 border border-white/10 rounded-full px-3 py-0.5 text-xs">
            Updated 2026
          </Badge>
        </div>

        {/* Intro */}
        <section data-testid="section-intro">
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              AG1 by Athletic Greens has been the default answer to "what greens powder should I take?" for nearly a decade. It's trusted, well-marketed, and genuinely popular. Lewis Hamilton takes it, Andrew Huberman talks about it, and millions of people drink it every morning.
            </p>
            <p>
              Then IM8 arrived. Backed by David Beckham, co-developed with scientists from Mayo Clinic, Yale, Cedars-Sinai, and a former NASA Chief Scientist, and positioned not as a greens powder but as a longevity and performance supplement. The claims are bolder, the ingredient list is longer, and the price is comparable.
            </p>
            <p>
              So which one is actually worth your money in 2026?
            </p>
            <p>
              This comparison cuts through the marketing on both sides. We look at what's in each formula, how the dosing philosophy differs, what the quality certifications actually mean, and who each product is genuinely best suited for.
            </p>
            <div className="card-glass rounded-xl px-5 py-4 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
              <p className="text-black/65 text-sm italic">Neither brand sponsors this article. Both products have been independently evaluated.</p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Quick Verdict Table */}
        <section data-testid="section-verdict-table">
          <h2 className="font-display text-2xl font-bold text-black mb-6">Quick Verdict</h2>
          <div className="overflow-x-auto rounded-2xl card-glass">
            <table className="w-full text-sm" data-testid="table-comparison">
              <thead>
                <tr className="border-b border-black/10">
                  <th className="text-left px-4 py-3 text-black/40 font-medium text-xs uppercase tracking-wider w-1/3"></th>
                  <th className="text-left px-4 py-3 text-[#c4622d] font-semibold text-xs uppercase tracking-wider">IM8 Daily Ultimate Essentials Pro</th>
                  <th className="text-left px-4 py-3 text-black/60 font-semibold text-xs uppercase tracking-wider">AG1 Next Gen</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={i} className={i < tableRows.length - 1 ? "border-b border-black/8" : ""}>
                    <td className="px-4 py-3 font-semibold text-black/70 text-xs">{row.label}</td>
                    <td className="px-4 py-3 text-black/70">{row.im8}</td>
                    <td className="px-4 py-3 text-black/55">{row.ag1}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="section-divider" />

        {/* What They Actually Are */}
        <section data-testid="section-what-they-are">
          <h2 className="font-display text-2xl font-bold text-black mb-4">What They Actually Are</h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              These two products are often compared as if they're the same thing. They are in the same aisle, but they are not the same kind of product. IM8 leans "all in one plus extras," covering hydration, joint support, and heart support. AG1 leans "daily foundation," combining vitamins, minerals, superfoods, adaptogens, and gut support.
            </p>
            <p>
              If AG1 is about nutritional coverage, IM8 is about nutritional efficiency. AG1 is built for wide coverage, combining vitamins, minerals, greens, probiotics, enzymes, and plant extracts into one daily scoop. IM8 is built for focus — the formula includes fewer ingredients, but each one has a clear role tied to energy, recovery, and performance.
            </p>
            <p>
              Understanding that distinction is the key to deciding which one belongs in your stack.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Ingredients */}
        <section data-testid="section-ingredients">
          <h2 className="font-display text-2xl font-bold text-black mb-6">Ingredients and Dosing: Where They Really Diverge</h2>

          <div className="space-y-6">
            <div className="card-glass rounded-2xl p-6 space-y-3" data-testid="section-ag1-ingredients">
              <h3 className="font-display text-xl font-bold text-black">AG1 Next Gen</h3>
              <div className="space-y-3 text-black/70 leading-relaxed text-sm">
                <p>
                  AG1's Next Gen formula contains 83 ingredients, including new synthetic vitamins and minerals such as boron, molybdenum, and choline, plus new probiotic strains and a higher quantity of probiotics compared to the original formula.
                </p>
                <p>
                  The breadth is impressive. AG1 covers vitamins, minerals, greens, adaptogens, digestive enzymes, and probiotics in a single scoop, making it a genuinely comprehensive nutritional safety net. The issue for biohackers and performance-focused users is dosing philosophy.
                </p>
                <p>
                  AG1 uses proprietary blends, so you can't see exact dosages for many ingredients. It also relies on some synthetic vitamins rather than the most bioavailable forms. When you can't see the dose, you can't assess whether a therapeutic amount is present — and with dozens of ingredients in a single scoop, the math often doesn't add up to meaningful doses of everything listed.
                </p>
                <p>
                  Independent testing by ConsumerLab in 2025 flagged AG1 for heavy metal content, including lead, arsenic, and cadmium, at levels some experts say should be avoided. This is worth noting, particularly for daily use. Heavy metals concentrate in plant material, and greens powders are among the supplement categories most susceptible to contamination if testing standards aren't rigorous.
                </p>
              </div>
            </div>

            <div className="card-glass rounded-2xl p-6 space-y-3" data-testid="section-im8-ingredients">
              <h3 className="font-display text-xl font-bold text-black">IM8 Daily Ultimate Essentials Pro</h3>
              <div className="space-y-3 text-black/70 leading-relaxed text-sm">
                <p>
                  IM8 Daily Ultimate Essentials Pro packs 90+ clinically dosed ingredients into a single daily drink, developed in collaboration with world-class scientists through a rigorous, evidence-based formulation process.
                </p>
                <p>
                  Where IM8 meaningfully differs is dose transparency and targeted clinical levels. AG1 keeps a broadly "cover your bases" posture. IM8 leans into the nutrients most people under-consume and moves them to impact levels: Vitamin C at 900mg versus AG1's 500mg, Vitamin A at 900mcg versus AG1's 550mcg, and critically, 150mcg iodine and 70mcg selenium for thyroid support — nutrients AG1 doesn't include at meaningful levels.
                </p>
                <p>
                  IM8 also includes 100mg of CoQ10 for mitochondrial and heart health, and 1,000mg of MSM for joint and muscle recovery — therapeutic doses of compounds that AG1 doesn't include at all. For anyone training hard, recovering from physical stress, or thinking about long-term cardiovascular health, these additions represent a genuine functional difference rather than label dressing.
                </p>
                <p>
                  IM8 also includes an advanced electrolyte blend of sodium, potassium, and magnesium providing balanced hydration without added sugars, which means it partially replaces a separate electrolyte supplement, adding further value per serving.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Quality */}
        <section data-testid="section-quality">
          <h2 className="font-display text-2xl font-bold text-black mb-4">Quality and Certification</h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Both products clear the most important quality bar: both IM8 and AG1 hold NSF Certified for Sport status — the gold standard for supplement testing, verifying that what's on the label is in the product and that no banned substances are present. This matters enormously, and the fact that both brands hold this certification puts them ahead of the vast majority of greens powders on the market.
            </p>
            <p>
              IM8 is independently third-party tested for purity, potency, and banned substances. AG1 states it is manufactured in a TGA-registered facility in New Zealand with full batch manufacturing records and traceability.
            </p>
            <p>
              The differentiation at the ingredient level is bioavailability. IM8 utilizes Quatrefolic, a highly bioavailable form of folate that bypasses the common MTHFR gene mutation issues that affect a significant portion of the population. The IM8 vs AG1 debate often comes down to who is using the most modern, bio-active forms of each nutrient to ensure the highest absorption rates.
            </p>
            <p>
              Both IM8 and AG1 use bioactive forms like methylcobalamin for B12 and 5-MTHF for folate, the versions your body actually recognizes and uses. That's table stakes in 2026. Where IM8 goes further is in extending that bioavailability-first philosophy across more of its nutrient profile.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Scientific Team */}
        <section data-testid="section-science-team">
          <h2 className="font-display text-2xl font-bold text-black mb-4">The Scientific Team Behind IM8</h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              One of IM8's most credible differentiators is who built it. IM8 was developed in collaboration with a world-renowned Scientific Advisory team from Mayo Clinic, Yale, Cedars-Sinai, and the former NASA Chief Scientist, backed by rigorous science and testing.
            </p>
            <div className="card-glass rounded-xl px-5 py-4 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
              <p className="text-black/70 text-sm italic leading-relaxed">
                "As a Mayo Clinic physician, I know nutrition is rooted in science. Access to quality supplements helps close the gaps in our diets."
              </p>
              <p className="text-black/45 text-xs mt-2">Dr. Dawn M., IM8 Clinical Advisor</p>
            </div>
            <p>
              The breadth and caliber of scientific oversight behind IM8's formulation is genuinely unusual for the supplements industry, where most products are built by marketing teams with a contract manufacturer.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Taste */}
        <section data-testid="section-taste">
          <h2 className="font-display text-2xl font-bold text-black mb-4">Taste and Daily Experience</h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              This matters more than most people admit. A supplement you can't stand taking consistently is a supplement that doesn't work.
            </p>
            <p>
              IM8 uses a single acai and mixed-berry profile with hints of cocoa, light, smooth, and easy to mix, helped by a stevia-free sweetener system using Reb M from fermented sugarcane that avoids the common bitter finish of many greens powders.
            </p>
            <p>
              AG1 started with its familiar sweet pineapple-vanilla base and as of mid-2025 offers Tropical, Citrus, and Berry variants. Unfiltered reviews on Reddit and consumer forums include "strong stevia aftertaste," "medicinal," and "bitter" more often than not, particularly with the new Next Gen formula.
            </p>
            <p>
              If you value broader flavor choice, AG1 has the edge. If you prefer stevia-free sweetness, IM8 is the cleaner fit.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Price */}
        <section data-testid="section-price">
          <h2 className="font-display text-2xl font-bold text-black mb-4">Price and Value</h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              AG1 commonly lists at $79 for a subscription pouch of 30 servings. IM8 Daily Ultimate Essentials commonly lists from $89 on subscription pricing.
            </p>
            <p>
              The $10 monthly difference is almost irrelevant when you factor in what each replaces. IM8's inclusion of CoQ10, MSM, electrolytes, and full-spectrum gut support means most users can eliminate several standalone supplements from their stack, a net saving that more than covers the price premium. AG1 is a strong nutritional foundation but you'll likely need to add more on top to match IM8's coverage.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Heavy metals */}
        <section data-testid="section-heavy-metals">
          <h2 className="font-display text-2xl font-bold text-black mb-4">Heavy Metal Safety: The AG1 Concern Worth Addressing</h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              This deserves its own section because it's a legitimate concern for daily users. Independent testing by ConsumerLab in 2025 flagged AG1 for heavy metal content, including lead, arsenic, and cadmium, at levels some experts say should be avoided for daily consumption.
            </p>
            <p>
              Greens powders concentrate plant material, and with it, whatever was in the soil those plants grew in. This is why contaminant testing matters as much as ingredient quality. Both brands hold NSF certification, but the ConsumerLab findings on AG1 are worth factoring into your decision, especially for long-term daily use.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Who Should Choose */}
        <section data-testid="section-who-chooses">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card-glass rounded-2xl p-6 space-y-4" data-testid="section-im8-choose">
              <h2 className="font-display text-xl font-bold text-black">Who Should Choose IM8</h2>
              <ul className="space-y-3 text-sm text-black/70">
                {[
                  "A biohacker, optimizer, or performance-focused individual who wants clinical doses, not just coverage",
                  "Already taking multiple supplements and want to consolidate into one high-quality product",
                  "Concerned about stevia or prefer a genuinely pleasant-tasting daily drink",
                  "Focused on longevity, cellular health, and targeting the biological markers of aging",
                  "An athlete who needs joint support, cardiovascular support, and recovery-focused ingredients alongside daily nutrition",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: "linear-gradient(135deg,#e8956d,#c4622d)" }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-glass rounded-2xl p-6 space-y-4" data-testid="section-ag1-choose">
              <h2 className="font-display text-xl font-bold text-black">Who Should Choose AG1</h2>
              <ul className="space-y-3 text-sm text-black/70">
                {[
                  "New to greens powders and want a well-established, broadly trusted product to start with",
                  "Prioritizing gut health and probiotics as your primary goal",
                  "Prefer flavor variety and enjoy the established pineapple-vanilla taste profile",
                  "Looking for the lowest entry point into the all-in-one supplement category",
                  "Already satisfied with your results after years of use",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-black/40 text-xs font-bold border border-black/20">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Bottom Line */}
        <section data-testid="section-bottom-line">
          <h2 className="font-display text-2xl font-bold text-black mb-4">The Bottom Line</h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              AG1 built the all-in-one greens powder category and deserves its reputation as a credible daily foundation. For the average person looking for broad nutritional insurance, it does the job well.
            </p>
            <p>
              But in 2026, the bar has moved. Foundational wellness was the goal of the last decade. 2026 is the year of cellular longevity. Switching from a basic greens powder to a comprehensive longevity stack means moving beyond just filling nutrient gaps to actively targeting the biological markers of aging.
            </p>
            <p>
              IM8 works best if your priority is energy, recovery, and performance optimization. For biohackers, optimizers, and anyone serious about long-term health rather than just nutritional coverage, IM8 is the more complete, more transparent, and more forward-thinking product.
            </p>
            <p>
              At ThriveTools, we feature IM8 as our recommended all-in-one foundation for exactly that reason. Explore our full{" "}
              <a href="/product-reviews/biohacking-supplements-2026" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">biohacking supplement guide</a>{" "}
              to see how it fits into a complete performance stack, or visit our{" "}
              <a href="/personalized-guidance" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">Personalized Guidance</a>{" "}
              page if you want a protocol built specifically around your biology and goals.
            </p>
          </div>
        </section>

        {/* CTA button */}
        <div className="text-center pt-4">
          <Button asChild size="lg" className="btn-gradient-rose text-white border-0 rounded-full px-6 sm:px-8 py-4 text-sm tracking-widest uppercase font-semibold h-auto leading-relaxed">
            <a href="https://im8health.com/" target="_blank" rel="noopener noreferrer" data-testid="link-im8-shop" className="inline-flex items-center justify-center gap-2 flex-wrap">
              Try IM8 — Use Code THRIVE10 <ExternalLink className="w-4 h-4 flex-shrink-0" />
            </a>
          </Button>
        </div>

        <div className="space-y-3">
          <p className="text-center text-black/35 text-xs italic" data-testid="text-affiliate">
            Disclosure: This article contains affiliate links. ThriveTools may earn a commission if you purchase through these links at no additional cost to you. Our editorial position is independent — we feature products we genuinely recommend based on quality, science, and personal use.
          </p>
          <p className="text-center text-black/35 text-xs italic" data-testid="text-disclaimer">
            This article is for informational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional before beginning any new supplement regimen.
          </p>
        </div>

      </article>
    </PageLayout>
  );
}
