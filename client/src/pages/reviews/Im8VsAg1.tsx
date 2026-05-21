import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import im8ProductImg from "@assets/image_1772841246898.png";
import ag1ProductImg from "@assets/image_1772841256231.png";

export default function Im8VsAg1() {
  return (
    <PageLayout showShare
      title="IM8 vs AG1 (2026): An Honest, Science-Based Comparison"
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: "IM8 vs AG1 2026: Honest Science-Based Comparison | Thrive Tools",
        description: "IM8 vs AG1 — an honest, science-based comparison of ingredients, bioavailability, transparency, probiotics, and value. Which all-in-one supplement is right for you?",
        canonical: "/product-reviews/im8-vs-ag1",
        ogType: "article",
        datePublished: "2026-01-28",
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-10">

        {/* Product images */}
        <div className="relative flex flex-col sm:flex-row items-center gap-5">
          <div className="card-glass rounded-2xl overflow-hidden flex-1" data-testid="img-im8-product">
            <img loading="lazy" decoding="async" src={im8ProductImg} alt="IM8 Health Daily Ultimate Essentials PRO" className="w-full h-auto object-cover" />
          </div>
          <div className="flex-shrink-0 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-black/5 border border-black/15 text-black font-bold text-lg">
            vs.
          </div>
          <div className="card-glass rounded-2xl overflow-hidden flex-1" data-testid="img-ag1-product">
            <img loading="lazy" decoding="async" src={ag1ProductImg} alt="AG1 Athletic Greens supplement" className="w-full h-auto object-cover" />
          </div>
        </div>

        {/* Intro */}
        <section data-testid="section-intro">
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              I've been in the wellness and biohacking space for 14 years. I've tried more all-in-one supplements than I can count, and most of them have been disappointing in one way or another — either the ingredients are underdosed, the forms are cheap, or the marketing far outpaces what the product actually does.
            </p>
            <p>
              AG1 and IM8 are the two most talked-about products in this category right now. They're both premium-priced, both positioned as comprehensive daily foundations, and both have serious marketing machines behind them. But they're genuinely different products targeting different things — and understanding that difference matters before you spend $80–100 a month on either one.
            </p>
            <p>
              I'm affiliated with IM8, so I'll be upfront about that. But I'm also going to be honest about what AG1 does well, because it earns some of its reputation. You deserve a real comparison, not a hit piece.
            </p>
            <p>Here's what I actually think.</p>
          </div>
        </section>

        <div className="section-divider" />

        {/* What Each Product Is Trying to Be */}
        <section data-testid="section-philosophy">
          <h2 className="font-display text-2xl font-bold text-black mb-4">What Each Product Is Trying to Be</h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>Before getting into ingredients, it helps to understand the underlying philosophy of each product.</p>
            <p>
              <strong className="text-black">AG1</strong> launched in 2010 as a greens powder first. Its identity is rooted in whole-food-sourced plant nutrition — spirulina, chlorella, wheatgrass, adaptogens, enzymes, and probiotics. It's designed as a nutritional foundation, filling gaps from an imperfect diet. The core promise is: drink this instead of trying to eat perfectly every day.
            </p>
            <p>
              <strong className="text-black">IM8</strong> launched later with a different brief: replace your entire supplement stack — not just your greens — in one drink. The formulation was engineered by a scientific advisory board from Mayo Clinic, NASA, Yale, and Cedars-Sinai with the explicit goal of covering 9 organ systems in a single serving. The most recent version, Daily Ultimate Essentials PRO (February 2026), adds saffron extract, upgrades to P5P (active B6), dramatically increases B12 to 200mcg methylcobalamin, and increases Vitamin D3, K2, magnesium, and MSM dosages — all at the same price.
            </p>
            <p>These are different products with different ambitions. That shapes everything that follows.</p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Ingredient Comparison */}
        <section data-testid="section-ingredients">
          <h2 className="font-display text-2xl font-bold text-black mb-6">Ingredient Comparison: What's Actually in Each Formula</h2>

          <div className="space-y-8">

            <div data-testid="section-vitamins-minerals">
              <h3 className="font-display text-xl font-bold text-black mb-3">Vitamins and Minerals</h3>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>This is where the gap between the two products is most stark.</p>
                <p>
                  AG1 has historically been criticized for using cheap, poorly absorbed forms of key nutrients. The formula contains folic acid rather than methylfolate, cyanocobalamin rather than methylcobalamin B12, and relatively low doses of several critical minerals. The AG1 Next Gen update in early 2025 addressed some of these concerns but the proprietary blend structure still makes it impossible to verify exact dosages of many ingredients.
                </p>
                <p>
                  IM8 PRO uses bioactive forms throughout: methylcobalamin B12 at 200mcg (a 733% increase over the previous version), P5P (pyridoxal-5-phosphate, the active form of B6), methylfolate, D3+K2 in meaningful doses, and magnesium bisglycinate — one of the most bioavailable forms available. Every ingredient and dosage is fully disclosed on the label with no proprietary blends.
                </p>
                <p>
                  For anyone with MTHFR gene variants — which affect roughly 40–60% of the population and impair the ability to convert folic acid and cyanocobalamin into usable forms — this distinction matters enormously. If you can't convert folic acid to methylfolate, the folate in your supplement is largely useless to you.
                </p>
              </div>
            </div>

            <div data-testid="section-probiotics">
              <h3 className="font-display text-xl font-bold text-black mb-3">The Probiotic Story</h3>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>
                  AG1 contains 7.2 billion CFU of <em>Lactobacillus acidophilus</em> — a single strain of standard Lactobacillus. It's a transient probiotic, meaning it passes through rather than colonizing, and like most Lactobacillus strains it's vulnerable to stomach acid degradation before reaching the colon.
                </p>
                <p>
                  IM8 uses spore-based probiotics — Bacillus subtilis DE111 and Bacillus coagulans BC99 — alongside prebiotics, postbiotics, and digestive enzymes. Spore-forming strains produce a protective endospore that survives stomach acid and actually reaches the colon intact. This is a fundamentally different mechanism and the research on survival rates is not close. IM8 also includes postbiotics (beneficial metabolites produced by bacteria) and digestive enzymes — making it a full gut protocol rather than just a probiotic add-on.
                </p>
                <p>For anyone serious about gut health, the spore-based approach is the meaningful difference here.</p>
              </div>
            </div>

            <div data-testid="section-greens">
              <h3 className="font-display text-xl font-bold text-black mb-3">Greens and Superfoods</h3>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>
                  This is genuinely AG1's strongest category. The Raw Superfood Complex includes spirulina, chlorella, wheatgrass juice powder, barley leaf, and a substantial list of whole-food-sourced plants. The emphasis on fermented ingredients and enzyme-active compounds reflects real nutritional philosophy.
                </p>
                <p>
                  IM8 includes a greens and superfoods complex as well — beet root, spinach, carrot, blueberry, pomegranate, acai, green tea extract, and more — but this isn't the product's primary identity. If your main goal is maximizing whole-food plant nutrition and greens density, AG1 has the edge here.
                </p>
              </div>
            </div>

            <div className="card-glass rounded-2xl p-6 space-y-4" data-testid="section-im8-extras">
              <h3 className="font-display text-xl font-bold text-black">What IM8 Has That AG1 Doesn't</h3>
              <p className="text-black/70 text-sm leading-relaxed">This is the category that most directly justifies IM8's positioning as a full supplement stack replacement:</p>
              <ul className="space-y-3 text-sm text-black/70">
                {[
                  { label: "CoQ10 at 100mg", detail: "A clinically meaningful dose for mitochondrial function, cardiovascular health, and cellular energy production. AG1 contains no CoQ10." },
                  { label: "MSM at 1,000mg", detail: "A meaningful dose for joint health, connective tissue, and inflammation. Not present in AG1." },
                  { label: "Saffron extract at 30mg (PRO version)", detail: "Added specifically for cognitive support and mood. A compound with genuinely interesting clinical research behind it. Not in AG1." },
                  { label: "Full electrolyte complex", detail: "Potassium citrate, magnesium glycinate, calcium citrate. AG1 is notably low in electrolytes." },
                  { label: "Essential amino acids", detail: "L-glutamine, L-isoleucine, L-leucine, L-lysine, L-taurine, L-valine, L-proline, L-citrulline. AG1 doesn't include amino acids." },
                  { label: "Alpha lipoic acid", detail: "A potent antioxidant involved in glucose metabolism and mitochondrial health. Not in AG1." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: "linear-gradient(135deg,#e8956d,#c4622d)" }}>✓</span>
                    <span><strong className="text-black">{item.label}</strong> — {item.detail}</span>
                  </li>
                ))}
              </ul>
              <p className="text-black/70 text-sm leading-relaxed">
                The practical implication: if you're currently taking CoQ10, an electrolyte supplement, MSM for joints, amino acids, or alpha lipoic acid separately — IM8 consolidates all of that. AG1 doesn't.
              </p>
            </div>

          </div>
        </section>

        <div className="section-divider" />

        {/* Transparency */}
        <section data-testid="section-transparency">
          <h2 className="font-display text-2xl font-bold text-black mb-4">Transparency: Proprietary Blends vs Full Disclosure</h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>This matters more than most people realize.</p>
            <p>
              AG1's formula is divided into proprietary blends — the Raw Superfood Complex, Nutrient Dense Extracts &amp; Herbs blend, Digestive Enzyme &amp; Super Mushroom Complex, and Probiotic blend. This means you know what ingredients are in each blend but not in what amounts. You cannot verify whether the adaptogen doses are therapeutic or token inclusions.
            </p>
            <p>
              IM8 discloses every ingredient and every dosage. No proprietary blends, no hidden amounts. This is a meaningful philosophical difference — you can actually evaluate what you're buying rather than trusting the label on faith.
            </p>
            <p>
              For anyone who takes their supplementation seriously enough to research what they're taking, full label transparency is a baseline expectation. IM8 meets it. AG1 doesn't.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Scientific Advisory Boards */}
        <section data-testid="section-advisory">
          <h2 className="font-display text-2xl font-bold text-black mb-4">Scientific Advisory Boards</h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>Both products have impressive names attached.</p>
            <p>
              AG1's Scientific Advisory Board includes Dr. Andrew Huberman and Dr. Peter Attia — two of the most prominent science communicators in the health space. Their involvement has been central to AG1's credibility and marketing.
            </p>
            <p>
              IM8's Scientific Advisory Board includes researchers and clinicians from Mayo Clinic, NASA, Cedars-Sinai, Yale University, and the University of Connecticut. The Chief Medical Officer, Dr. Dawn Mussallem, is a Mayo Clinic integrative oncologist and was named Chief Medical Officer of Fountain Life, which was designated Longevity Clinic of the Year 2025.
            </p>
            <p>
              The distinction is between scientific communicators (AG1) and active research clinicians who designed the formula (IM8). Both are legitimate forms of credibility. But if the question is who actually developed the formulation, IM8's advisory board has direct clinical practice expertise in the specific areas the product targets.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Certifications */}
        <section data-testid="section-certifications">
          <h2 className="font-display text-2xl font-bold text-black mb-4">Third-Party Testing and Certifications</h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              AG1 is NSF Certified for Sport — one of the most rigorous independent certifications available, particularly relevant for athletes. This certification tests for banned substances and verifies manufacturing quality. It's a genuine differentiator and a meaningful trust signal.
            </p>
            <p>
              IM8 third-party tests every ingredient and dosage and is NSF Certified, but does not currently hold the NSF Certified for Sport designation specifically. For competitive athletes subject to drug testing, this matters. For the general population, the practical difference is minimal.
            </p>
            <p>Both products are vegan, gluten-free, and non-GMO.</p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Price */}
        <section data-testid="section-price">
          <h2 className="font-display text-2xl font-bold text-black mb-4">Price Comparison</h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>AG1 costs $99 for a 30-day supply or $79 per month on subscription.</p>
            <p>
              IM8 Daily Ultimate Essentials PRO is priced comparably on subscription, with the added context that the PRO upgrade — which significantly increased dosages and added saffron extract — came at no price increase.
            </p>
            <p>
              The cost-per-supplement-replaced calculation matters here. IM8 is designed to replace up to 16 separate supplements including CoQ10, a probiotic, electrolytes, MSM, amino acids, and more. AG1 replaces a multivitamin, greens powder, and a basic probiotic. If you're already running a comprehensive supplement stack, IM8's consolidation math is more compelling.
            </p>
            <div className="card-glass rounded-xl px-5 py-4 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
              <p className="text-black/70 font-semibold">Use code THRIVE10 for a discount on IM8.</p>
              <a href="https://im8health.com/thrive10" target="_blank" rel="noopener noreferrer" className="text-[#c4622d] hover:text-[#8b3a1a] transition-colors text-sm font-medium underline" data-testid="link-im8-price-section">
                👉 Shop IM8 here
              </a>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Who Should Choose Which */}
        <section data-testid="section-who-chooses">
          <h2 className="font-display text-2xl font-bold text-black mb-6">Who Should Choose Which</h2>
          <p className="text-black/70 leading-relaxed mb-6">This is the honest answer, not the one designed to push you toward my affiliate link.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card-glass rounded-2xl p-6 space-y-4" data-testid="section-ag1-choose">
              <h3 className="font-display text-xl font-bold text-black">AG1 makes more sense if:</h3>
              <ul className="space-y-3 text-sm text-black/70">
                {[
                  "Your primary goal is whole-food plant nutrition and greens density",
                  "You're a competitive athlete who specifically needs NSF Certified for Sport",
                  "You want a simpler, more established product with a longer track record",
                  "You don't currently take other supplements and just want a reliable baseline",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-black/40 text-xs font-bold border border-black/20">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-glass rounded-2xl p-6 space-y-4" data-testid="section-im8-choose">
              <h3 className="font-display text-xl font-bold text-black">IM8 makes more sense if:</h3>
              <ul className="space-y-3 text-sm text-black/70">
                {[
                  "You're trying to consolidate a broader supplement stack — especially if you currently take CoQ10, a probiotic, electrolytes, or amino acids separately",
                  "You have an MTHFR variant or know you don't absorb folic acid/cyanocobalamin well",
                  "You want full label transparency with no proprietary blends",
                  "Gut health is a priority and you want a complete pre/pro/postbiotic protocol rather than a single probiotic strain",
                  "You're interested in cognitive support (the saffron extract in the PRO version is specifically added for this)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: "linear-gradient(135deg,#e8956d,#c4622d)" }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Honest Verdict */}
        <section data-testid="section-verdict">
          <h2 className="font-display text-2xl font-bold text-black mb-4">The Honest Verdict</h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Neither product is a scam. Both have real formulations, real certifications, and real science behind them. The "AG1 is just expensive marketing" take that circulates online undersells what it actually delivers. And the "IM8 is just celebrity-funded hype" take ignores that the formulation was genuinely engineered by serious scientists and has meaningful upgrades over both AG1 and the original IM8.
            </p>
            <p>The real question is what you're trying to accomplish.</p>
            <p>
              If you want a greens-forward nutritional foundation from a brand with a 15-year track record and NSF Sport certification — AG1 is a legitimate choice.
            </p>
            <p>
              If you want to replace a comprehensive supplement stack with a single daily drink, prioritize bioactive ingredient forms, and want full dosage transparency — IM8 PRO is the stronger formula for that goal.
            </p>
            <p>
              I use IM8. Not because I'm affiliated with them — I became affiliated because I already believed in it. The bioactive forms, the spore-based probiotic protocol, the CoQ10 at a real dose, and the full label transparency are what won me over. The PRO upgrade made an already solid product significantly better.
            </p>
            <div className="card-glass rounded-xl px-5 py-4 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
              <p className="text-black/70 font-semibold">Use code THRIVE10 for a discount on IM8 Daily Ultimate Essentials PRO.</p>
              <a href="https://im8health.com/thrive10" target="_blank" rel="noopener noreferrer" className="text-[#c4622d] hover:text-[#8b3a1a] transition-colors text-sm font-medium underline" data-testid="link-im8-verdict-section">
                👉 Shop IM8 here
              </a>
            </div>
            <p className="text-black/50 text-sm italic">
              Disclosure: I'm affiliated with IM8 and receive a commission on purchases through my link. I've done my best to represent AG1 fairly in this comparison — I'd rather you make the right choice for your needs than make a purchase that isn't right for you.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* FAQ */}
        <section data-testid="section-faq">
          <h2 className="font-display text-2xl font-bold text-black mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Is IM8 better than AG1?",
                a: "It depends on your goals. IM8 has a more comprehensive formula with bioactive ingredient forms, full label transparency, a complete gut protocol, CoQ10, and amino acids. AG1 has stronger greens density, a longer track record, and NSF Certified for Sport status. IM8 is the better choice for replacing a full supplement stack; AG1 is the better choice if greens and plant nutrition are your primary focus.",
              },
              {
                q: "Does AG1 use proprietary blends?",
                a: "Yes. AG1 discloses ingredients but not individual dosages within each blend, making it impossible to verify therapeutic doses for specific compounds.",
              },
              {
                q: "Does IM8 disclose all dosages?",
                a: "Yes. IM8 has no proprietary blends — every ingredient and dosage is fully disclosed on the label.",
              },
              {
                q: "What is IM8 PRO?",
                a: "IM8 Daily Ultimate Essentials PRO is the updated formula launched February 2026. Key upgrades include 200mcg methylcobalamin B12 (733% increase), P5P active B6, 30mg saffron extract for cognitive support, and increased doses of Vitamin D3, K2, magnesium, and MSM — all at the same price as the previous version.",
              },
              {
                q: "Can I take IM8 or AG1 instead of all my other supplements?",
                a: "IM8 is specifically engineered to replace up to 16 separate supplements. Whether it replaces all of yours depends on your specific stack — but for most people taking a standard foundational protocol, it covers the bases. You may still want to add targeted supplements like omega-3s, additional magnesium, or specific adaptogens depending on your individual needs.",
              },
              {
                q: "Which is better for gut health — AG1 or IM8?",
                a: "IM8 has the stronger gut protocol. Spore-based probiotics (Bacillus subtilis DE111 and Bacillus coagulans BC99) plus prebiotics, postbiotics, and digestive enzymes represent a more complete and clinically meaningful approach than AG1's single Lactobacillus strain. Spore-based strains survive stomach acid and colonize the colon — standard Lactobacillus strains largely don't.",
              },
              {
                q: "What does AG1 Next Gen change?",
                a: "AG1 Next Gen launched in early 2025 and added new ingredients, reformulated some ratios, and introduced a Tropical flavor option. The core proprietary blend structure remains, so individual dosages are still undisclosed.",
              },
            ].map((item, i) => (
              <div key={i} className="card-glass rounded-xl p-5 space-y-2" data-testid={`faq-item-${i}`}>
                <h3 className="font-semibold text-black text-base">{item.q}</h3>
                <p className="text-black/65 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA button */}
        <div className="text-center pt-4">
          <Button asChild size="lg" className="btn-gradient-rose text-white border-0 rounded-full px-6 sm:px-8 py-4 text-sm tracking-widest uppercase font-semibold h-auto leading-relaxed">
            <a href="https://im8health.com/thrive10" target="_blank" rel="noopener noreferrer" data-testid="link-im8-shop" className="inline-flex items-center justify-center gap-2 flex-wrap">
              Try IM8 — Use Code THRIVE10 <ExternalLink className="w-4 h-4 flex-shrink-0" />
            </a>
          </Button>
        </div>

        {/* Author bio */}
        <div className="card-glass rounded-2xl p-6 space-y-2 text-center">
          <p className="text-black/60 text-sm leading-relaxed italic">
            Eden Laraki is the founder of ThriveTools.co — a science-backed wellness and biohacking platform covering supplements, tonic herbs, breathwork, plant medicine, and cognitive optimization, built from 14 years of personal research and self-experimentation.
          </p>
          <a href="https://thrivetools.co" target="_blank" rel="noopener noreferrer" className="text-[#c4622d] hover:text-[#8b3a1a] transition-colors text-sm font-medium underline" data-testid="link-thrivetools">
            → Explore ThriveTools.co
          </a>
        </div>

        <p className="text-center text-black/35 text-xs italic" data-testid="text-disclaimer">
          This article is for informational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional before beginning any new supplement regimen.
        </p>

      </article>
    </PageLayout>
  );
}
