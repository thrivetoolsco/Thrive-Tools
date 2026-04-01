import { useState } from "react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Copy, Check } from "lucide-react";

function CopyCodeButton({ code, href }: { code: string; href: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="card-glass rounded-2xl p-6 sm:p-8 flex flex-col items-center gap-5 text-center" data-testid="section-affiliate-code">
      <p className="text-black/60 text-sm uppercase tracking-widest font-semibold">Discount Code</p>
      <div className="flex items-center gap-2 bg-white/60 border border-black/10 rounded-xl px-4 py-3 w-full max-w-full overflow-hidden">
        <span className="font-mono font-bold text-base sm:text-xl text-[#c4622d] tracking-wide break-all flex-1 text-center" data-testid="text-discount-code">{code}</span>
        <button
          onClick={handleCopy}
          className="flex-shrink-0 p-2 rounded-lg hover:bg-black/5 transition-colors text-black/40 hover:text-black/70"
          aria-label="Copy discount code"
          data-testid="button-copy-code"
        >
          {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      {copied && <p className="text-green-600 text-xs font-medium">Copied to clipboard.</p>}
      <Button asChild size="lg" className="btn-gradient-rose text-white border-0 rounded-full px-8 text-sm tracking-widest uppercase font-semibold h-auto py-3.5">
        <a href={href} target="_blank" rel="noopener noreferrer" data-testid="link-affiliate-koracao" className="inline-flex items-center gap-2">
          Shop Koracao Ceremonial Cacao <ExternalLink className="w-4 h-4" />
        </a>
      </Button>
    </div>
  );
}

export default function CeremonialCacaoGuide() {
  return (
    <PageLayout
      showShare
      title="Ceremonial Cacao Benefits: The Ancient Plant Medicine Backed by Modern Science"
      subtitle="Theobromine, anandamide, magnesium, and over 300 bioactive compounds. Here is what the science says about the most underrated plant medicine in the wellness world."
      backLabel="Blog"
      backHref="/blog"
      seo={{
        title: "Ceremonial Cacao Benefits: Science-Backed Guide",
        description: "Ceremonial cacao is backed by science. Discover its bioactive compounds, evidence-based benefits, and how to use it for energy, mood, and heart health.",
        canonical: "/blog/ceremonial-cacao-benefits-science-review",
        ogType: "article",
        datePublished: "2026-04-08",
      }}
    >
      <article className="space-y-12">

        <div className="card-glass rounded-2xl overflow-hidden" data-testid="img-hero-cacao">
          <img
            loading="eager"
            decoding="async"
            src="/cacao-koracao-bag.jpg"
            alt="Indigenous farmer holding a Koracao ceremonial cacao superfood bag sourced from Peru and Colombia"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border border-[#c4622d]/25 rounded-full px-3 py-0.5 text-xs">
            Plant Medicine
          </Badge>
          <Badge className="bg-white/5 text-black/50 border border-white/10 rounded-full px-3 py-0.5 text-xs">
            Updated April 2026
          </Badge>
        </div>

        <section data-testid="section-intro">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#3d1a28] font-display mb-6">
            Ceremonial Cacao Benefits: The Ancient Plant Medicine Backed by Modern Science
          </h1>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              There's a reason the ancient Mayans called it <em>Theobroma cacao</em>, literally "food of the gods."
            </p>
            <p>
              For thousands of years across Mesoamerica, cacao wasn't a dessert ingredient. It was a sacred plant medicine used in ritual, ceremony, and healing. It was consumed intentionally, in whole-bean form, with reverence for what it does to the body, the heart, and the mind.
            </p>
            <p>
              Fast forward to today and cacao ceremonies are showing up everywhere: from yoga retreats and breathwork circles to biohacking communities and morning wellness rituals. And the science is finally catching up to what indigenous cultures have known for millennia.
            </p>
            <p>
              This isn't about chocolate bars. Ceremonial cacao is a different thing entirely, and understanding why requires looking at both the biochemistry and the tradition.
            </p>
          </div>
        </section>

        <section data-testid="section-what-is">
          <h2 className="text-2xl font-bold text-[#3d1a28] font-display mb-4">What Is Ceremonial Cacao?</h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Ceremonial cacao is whole-bean cacao paste made from minimally processed, heirloom <em>criollo</em> beans with nothing removed and nothing added. It retains the natural cacao butter, the full spectrum of active compounds, and the nutritional integrity of the original bean.
            </p>
            <p>This is fundamentally different from what most people consume:</p>
            <ul className="space-y-3 pl-4">
              <li>
                <strong className="text-[#3d1a28]">Cacao powder</strong> has the fat removed through pressing, which strips out the cacao butter needed to carry fat-soluble compounds to the brain. Many of the mood-enhancing and neurologically active compounds require fat for proper absorption.
              </li>
              <li>
                <strong className="text-[#3d1a28]">Commercial cocoa</strong> undergoes Dutch processing, treated with alkali to reduce bitterness and extend shelf life. This process destroys up to 77% of the flavanols (the primary antioxidant compounds), rendering most commercial chocolate nutritionally hollow compared to the original bean.
              </li>
              <li>
                <strong className="text-[#3d1a28]">Dark chocolate</strong> (even high-percentage) contains added ingredients, has been heated at high temperatures, and rarely matches ceremonial-grade cacao for active compound concentration.
              </li>
            </ul>
            <p>
              Ceremonial cacao is the whole, minimally processed paste. It tastes intensely bitter, earthy, and complex: nothing like the sweetened chocolate most of us grew up with. And the effects are immediately noticeable once you understand what you're actually consuming.
            </p>
          </div>
        </section>

        <section data-testid="section-compounds">
          <h2 className="text-2xl font-bold text-[#3d1a28] font-display mb-6">The Bioactive Compounds in Ceremonial Cacao</h2>

          <div className="space-y-8">

            <div data-testid="section-theobromine">
              <h3 className="text-xl font-bold text-[#3d1a28] font-display mb-3">Theobromine: The Heart Medicine</h3>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>
                  The primary active compound in cacao is theobromine, a methylxanthine alkaloid named for the <em>Theobroma</em> genus. This is what gives cacao its distinctive energy profile, and why it's so different from coffee.
                </p>
                <p>
                  Theobromine is a gentle stimulant and vasodilator. Rather than acting primarily on the central nervous system like caffeine, it acts on the cardiovascular system: dilating blood vessels, improving circulation, and increasing blood flow to both the heart and the brain.
                </p>
                <p>
                  The practical difference: caffeine peaks in the bloodstream 30 to 40 minutes after consumption with a half-life of 2.5 to 5 hours. Theobromine peaks 2 to 3 hours after consumption with a half-life of 7 to 12 hours. The energy from cacao is longer, steadier, and gentler. No spike. No crash. No cortisol elevation.
                </p>
                <p>
                  Research published in{" "}
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4335269/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors"
                    data-testid="link-pubmed-theobromine"
                  >
                    PMC (López-Torres et al.)
                  </a>{" "}
                  has confirmed that theobromine, rather than flavanols, is the primary driver of HDL cholesterol increases observed in cocoa consumption.
                </p>
              </div>
            </div>

            <div data-testid="section-anandamide">
              <h3 className="text-xl font-bold text-[#3d1a28] font-display mb-3">Anandamide: The Bliss Molecule</h3>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>
                  Anandamide takes its name from the Sanskrit word <em>ananda</em>, meaning bliss. It's an endocannabinoid produced naturally by the brain, the same system that THC interacts with, and it's responsible for feelings of joy, openness, and euphoria.
                </p>
                <p>
                  Cacao is one of the only foods that contains anandamide directly. But more significantly, cacao contains compounds (N-linoleoylethanolamide and N-oleoylethanolamide) that inhibit the enzyme (FAAH) responsible for breaking anandamide down.
                </p>
                <p>
                  The result: cacao doesn't just deliver a small amount of anandamide. It actively protects your brain's own endocannabinoid system from being depleted too quickly. The anandamide you naturally produce stays circulating longer. This is why people describe cacao ceremonies as producing a sense of sustained warmth, openness, and emotional availability, without any psychoactive alteration of consciousness.
                </p>
              </div>
            </div>

            <div data-testid="section-pea">
              <h3 className="text-xl font-bold text-[#3d1a28] font-display mb-3">Phenylethylamine (PEA): The Love Drug</h3>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>
                  Phenylethylamine is a natural compound your brain produces during states of excitement, attraction, and deep focus. It stimulates the release of dopamine and norepinephrine, mimicking what happens neurochemically during the early stages of falling in love, which is why it's been nicknamed the love drug.
                </p>
                <p>
                  Cacao contains some of the highest concentrations of PEA found in any food. The subjective experience: heightened emotional openness, increased motivation, a sense of connection, maps directly onto its neurochemistry.
                </p>
              </div>
            </div>

            <div data-testid="section-magnesium">
              <h3 className="text-xl font-bold text-[#3d1a28] font-display mb-3">Magnesium: The Missing Mineral</h3>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>
                  Ceremonial cacao is one of the highest dietary sources of magnesium available anywhere. A single ceremonial dose (approximately 30 to 50g) provides a meaningful contribution toward daily magnesium needs.
                </p>
                <p>
                  This matters because magnesium deficiency is extraordinarily common, estimated to affect the majority of people in Western countries, and is directly implicated in anxiety, muscle tension, poor sleep, and impaired cognitive function. Magnesium modulates GABA receptors (the nervous system's primary calm-down mechanism) and is required for hundreds of enzymatic reactions in the body.
                </p>
                <p>
                  The combination of theobromine and magnesium in cacao creates a uniquely grounding energy: alert without tension, focused without anxiety. For more on the science of magnesium, see the{" "}
                  <Link href="/blog/magnesium-deficiency-supplement-guide" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">
                    magnesium deficiency and supplementation guide
                  </Link>.
                </p>
              </div>
            </div>

            <div data-testid="section-additional-compounds">
              <h3 className="text-xl font-bold text-[#3d1a28] font-display mb-3">Additional Compounds Worth Knowing</h3>
              <div className="space-y-3 text-black/70 leading-relaxed">
                <p><strong className="text-[#3d1a28]">Flavanols (epicatechin and catechin).</strong> Potent antioxidants that support cardiovascular health, improve nitric oxide production, and reduce arterial stiffness.</p>
                <p><strong className="text-[#3d1a28]">L-Tryptophan.</strong> A serotonin precursor. The body converts tryptophan to serotonin, supporting mood regulation, contentment, and healthy sleep architecture.</p>
                <p><strong className="text-[#3d1a28]">Iron.</strong> Cacao provides approximately 3.5mg of iron per 30g serving, making it one of the richest plant-based iron sources available.</p>
                <p><strong className="text-[#3d1a28]">Zinc, Copper, Chromium, Manganese.</strong> A mineral profile that supports immune function, blood sugar regulation, antioxidant enzyme activity, and mitochondrial health.</p>
                <p><strong className="text-[#3d1a28]">Sulfur.</strong> Often overlooked, cacao's sulfur content supports liver detoxification pathways, skin health, and connective tissue integrity.</p>
              </div>
            </div>

          </div>
        </section>

        <div className="card-glass rounded-2xl overflow-hidden" data-testid="img-cacao-drink">
          <img
            loading="lazy"
            decoding="async"
            src="/cacao-drink-pour.jpg"
            alt="Ceremonial cacao drink being poured into a ceramic mug, showing the rich dark chocolate texture"
            className="w-full h-auto object-cover"
          />
        </div>

        <section data-testid="section-benefits">
          <h2 className="text-2xl font-bold text-[#3d1a28] font-display mb-6">Evidence-Based Benefits of Ceremonial Cacao</h2>

          <div className="space-y-8">

            <div data-testid="section-cardiovascular">
              <h3 className="text-xl font-bold text-[#3d1a28] font-display mb-3">Cardiovascular Health</h3>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>
                  This is where the science is most robust. The flavanols and theobromine in cacao work synergistically on the cardiovascular system through multiple mechanisms. Nitric oxide production is enhanced by cacao flavanols, causing vasodilation: the relaxation and widening of blood vessels. This reduces arterial stiffness, lowers blood pressure, and improves blood flow to all tissues including the brain.
                </p>
                <p>
                  Clinical trials have shown that cacao consumption can decrease LDL cholesterol and apoB levels while increasing HDL function. A randomized trial confirmed blood pressure reduction and improved insulin sensitivity in glucose-intolerant individuals after dark chocolate consumption.
                </p>
                <p>
                  The cardiovascular effects are one reason cacao has been used ceremonially as a heart medicine: its effects on the physical heart are as measurable as its effects on the emotional one.
                </p>
              </div>
            </div>

            <div data-testid="section-cognitive">
              <h3 className="text-xl font-bold text-[#3d1a28] font-display mb-3">Cognitive Function and Brain Health</h3>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>
                  The enhanced cerebral blood flow from theobromine and flavanols directly benefits cognitive performance. Research suggests improvements in memory consolidation and retrieval, processing speed and executive function, sustained attention and focus, and mental clarity without the overstimulation associated with caffeine.
                </p>
                <p>
                  Theobromine's upregulation of BDNF (brain-derived neurotrophic factor) is particularly significant for anyone interested in neuroplasticity and long-term brain health. Research published in{" "}
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6521120/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors"
                    data-testid="link-pubmed-bdnf"
                  >
                    Nutrients (Islam et al., 2019)
                  </a>{" "}
                  showed theobromine improves working memory by activating the CaMKII/CREB/BDNF pathway, supporting the growth and survival of neurons implicated in learning, memory, and mood regulation.
                </p>
              </div>
            </div>

            <div data-testid="section-mood">
              <h3 className="text-xl font-bold text-[#3d1a28] font-display mb-3">Mood, Anxiety, and Emotional Wellbeing</h3>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>
                  The mood-enhancing effects of ceremonial cacao are mediated through multiple simultaneous pathways, which is what makes them so distinctive and reliable. Dopamine and serotonin are both elevated through PEA stimulation and tryptophan conversion respectively. Anandamide is protected and prolonged through FAAH inhibition. Cortisol is modulated through theobromine's interaction with adenosine receptors, reducing the physiological stress response. Magnesium supports GABA function, contributing to the sense of calm alertness.
                </p>
                <p>
                  The net result is a neurochemical state that many describe as similar to meditation: relaxed, open, present, and emotionally available, without sedation or impaired clarity. This is why cacao has become central to breathwork circles, ecstatic dance, integration work after plant medicine ceremonies, and any practice requiring emotional presence.
                </p>
              </div>
            </div>

            <div data-testid="section-gut">
              <h3 className="text-xl font-bold text-[#3d1a28] font-display mb-3">Gut Health and Microbiome Support</h3>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>
                  Research published in MDPI (2024) identified cacao as having meaningful prebiotic properties, stimulating the growth of beneficial gut flora including <em>Lactobacillus</em> and <em>Bifidobacterium</em> species. A healthy gut microbiome is directly linked to mood regulation through the gut-brain axis, creating a reinforcing loop: cacao supports gut health, which supports mood, which is also directly supported by cacao's active compounds.
                </p>
              </div>
            </div>

            <div data-testid="section-antioxidant">
              <h3 className="text-xl font-bold text-[#3d1a28] font-display mb-3">Antioxidant Protection and Longevity</h3>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>
                  Ceremonial cacao has an ORAC (Oxygen Radical Absorbance Capacity) score of approximately 95,000 per 100g. For context, blueberries score around 4,000 and regular cocoa powder around 20,000. A single ceremonial dose of 50g provides antioxidant capacity equivalent to roughly ten times the minimum recommended daily intake.
                </p>
                <p>
                  These antioxidants, primarily flavanols working synergistically with magnesium and other minerals, combat the oxidative stress that drives biological aging, chronic inflammation, and cellular damage. For anyone serious about longevity, cacao's antioxidant profile is genuinely remarkable.
                </p>
              </div>
            </div>

          </div>
        </section>

        <section data-testid="section-vs-coffee">
          <h2 className="text-2xl font-bold text-[#3d1a28] font-display mb-4">Ceremonial Cacao vs. Coffee: A Biohacker's Comparison</h2>
          <p className="text-black/70 leading-relaxed mb-6">
            I've spent years optimizing my morning ritual and this comparison matters for anyone using stimulants intentionally.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card-glass rounded-2xl p-6">
              <h3 className="font-bold text-[#3d1a28] mb-3">Caffeine (Coffee)</h3>
              <ul className="space-y-2 text-black/70 text-sm leading-relaxed">
                <li>Peaks in bloodstream in 30 to 40 minutes</li>
                <li>Half-life of 2.5 to 5 hours</li>
                <li>Elevates cortisol (stress hormone)</li>
                <li>Can cause jitteriness, anxiety, and adrenal fatigue with chronic use</li>
                <li>Disrupts sleep if consumed after midday</li>
                <li>Addictive with withdrawal symptoms</li>
              </ul>
            </div>
            <div className="card-glass rounded-2xl p-6 border border-[#c4622d]/20">
              <h3 className="font-bold text-[#3d1a28] mb-3">Theobromine (Ceremonial Cacao)</h3>
              <ul className="space-y-2 text-black/70 text-sm leading-relaxed">
                <li>Peaks in bloodstream in 2 to 3 hours</li>
                <li>Half-life of 7 to 12 hours</li>
                <li>Reduces cortisol through adenosine receptor modulation</li>
                <li>Produces sustained, calm energy without jitteriness</li>
                <li>Gentle tapering without crash</li>
                <li>No significant dependence or withdrawal</li>
              </ul>
            </div>
          </div>
          <p className="text-black/70 leading-relaxed mt-6">
            For nervous system health, adrenal regulation, and sustainable energy, cacao wins. The tradeoff is that it doesn't produce the sharp, immediate cognitive spike that caffeine does. It's a different relationship with stimulation entirely.
          </p>
        </section>

        <section data-testid="section-spiritual">
          <h2 className="text-2xl font-bold text-[#3d1a28] font-display mb-4">Ceremonial Cacao as Spiritual Practice</h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Beyond the biochemistry, there's something that's harder to quantify but impossible to ignore if you've experienced it.
            </p>
            <p>
              The state that ceremonial cacao produces, the combination of open heart, calm alertness, and emotional availability, creates ideal conditions for meditation, intention-setting, creative work, and connection. These are the same neurological conditions that contemplative traditions have been trying to cultivate through practice for thousands of years.
            </p>
            <p>
              The ancient Mayans and Aztecs weren't wrong. They identified something real. The fact that we can now explain it in terms of anandamide and theobromine and BDNF doesn't diminish the experience: it validates it.
            </p>
            <p>
              Cacao ceremonies are being incorporated into therapeutic settings, integration work, and wellness retreats globally because the neurochemical state it creates is genuinely useful for introspective and relational work. It opens the heart without closing the mind. If you're exploring plant medicine practices more broadly, the{" "}
              <Link href="/blog/cordyceps-cs4-vs-wild-cordyceps-sinensis" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">
                guide to tonic mushrooms
              </Link>{" "}
              pairs well with cacao as a daily stack.
            </p>
          </div>
        </section>

        <section data-testid="section-quality">
          <h2 className="text-2xl font-bold text-[#3d1a28] font-display mb-4">Ceremonial Cacao vs. Regular Cacao Powder: Why Quality Is Everything</h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>Not all cacao is ceremonial grade. The differences are significant.</p>
            <p>
              <strong className="text-[#3d1a28]">Bean variety matters.</strong> Criollo and heirloom varieties contain higher concentrations of active compounds than the bulk Forastero beans used in most commercial chocolate. Koracao sources exclusively from heirloom criollo beans, hand-selected from indigenous farming communities in Peru and Colombia.
            </p>
            <p>
              <strong className="text-[#3d1a28]">Processing determines potency.</strong> High-temperature processing destroys the active compounds. Koracao's cacao is minimally processed, slightly toasted or sun-dried, never Dutch-processed, preserving the full nutritional and psychoactive profile of the original bean.
            </p>
            <p>
              <strong className="text-[#3d1a28]">Whole-bean paste retains the fat.</strong> The cacao butter isn't separated out. This is essential: the fat-soluble compounds including anandamide, theobromine, and the flavanols require the natural fat matrix for optimal absorption and delivery to the brain.
            </p>
            <p>
              <strong className="text-[#3d1a28]">Sourcing integrity matters for active compound concentration.</strong> Soil health, fermentation process, and post-harvest handling all affect the final concentration of active compounds. Koracao works directly with indigenous communities using regenerative farming practices, not only for ethical reasons but because it produces genuinely superior cacao.
            </p>
          </div>
        </section>

        <div className="card-glass rounded-2xl overflow-hidden" data-testid="img-cacao-product">
          <img
            loading="lazy"
            decoding="async"
            src="/cacao-koracao-product.jpg"
            alt="Koracao premium ceremonial cacao bag with raw cacao chunks in front, showing the whole-bean paste product"
            className="w-full h-auto object-cover"
          />
        </div>

        <section data-testid="section-sourcing">
          <h2 className="text-2xl font-bold text-[#3d1a28] font-display mb-4">Where I Source My Ceremonial Cacao</h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              After trying many brands, Koracao is what I come back to consistently. The sourcing from Peruvian and Colombian indigenous communities, the heirloom criollo beans, the minimal processing, and the ORAC score of 95,000: it delivers what ceremonial cacao is supposed to deliver.
            </p>
            <p>
              The taste is a reliable indicator of quality: intensely bitter, complex, deeply chocolatey with earthy undertones. That bitterness signals the theobromine and flavanol content is intact. A weak or sweet-tasting ceremonial cacao is telling you something has been lost.
            </p>
            <p className="text-sm text-black/50 italic">
              Disclosure: I'm affiliated with Koracao and receive a commission on purchases through my link. I recommend them because the quality is genuinely exceptional. I've been incorporating ceremonial cacao into my practice for years and this is what I use.
            </p>
          </div>
        </section>

        <section data-testid="section-preparation">
          <h2 className="text-2xl font-bold text-[#3d1a28] font-display mb-6">How to Prepare Ceremonial Cacao</h2>

          <div className="space-y-8">

            <div data-testid="section-basic-prep">
              <h3 className="text-xl font-bold text-[#3d1a28] font-display mb-3">Basic Ceremonial Preparation</h3>
              <div className="card-glass rounded-2xl p-6 space-y-4 text-black/70 leading-relaxed">
                <div>
                  <p className="font-semibold text-[#3d1a28] mb-2">Ingredients:</p>
                  <ul className="space-y-1 pl-4 text-sm">
                    <li>30 to 50g Koracao ceremonial cacao (30g for lighter effect, 50g for full ceremonial dose)</li>
                    <li>200 to 250ml hot water (not boiling, around 70°C)</li>
                    <li>Optional: pinch of cayenne, cinnamon, or cardamom</li>
                    <li>Optional: small amount of honey or coconut sugar</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-[#3d1a28] mb-2">Method:</p>
                  <ol className="space-y-1 pl-4 text-sm list-decimal">
                    <li>Chop or grate the cacao disc into smaller pieces</li>
                    <li>Pour hot water over the cacao and let it melt for a minute</li>
                    <li>Whisk or blend vigorously until fully emulsified</li>
                    <li>Add spices and sweetener if desired</li>
                    <li>Drink mindfully, ideally in a quiet space with intention</li>
                  </ol>
                </div>
                <p className="text-sm">
                  The blending step is important. Unlike coffee or tea, the fat needs to emulsify with the water for the compounds to be properly bioavailable. A proper ceremonial cacao drink should be creamy, almost frothy, and deeply aromatic.
                </p>
              </div>
            </div>

            <div data-testid="section-morning-ritual">
              <h3 className="text-xl font-bold text-[#3d1a28] font-display mb-3">Morning Ritual Integration</h3>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>
                  Many people find ceremonial cacao most powerful as a morning ritual replacement for or alongside coffee. The sustained energy supports morning practices like meditation, breathwork, journaling, and creative work without the nervous system overstimulation that can interfere with inward-focused states.
                </p>
              </div>
            </div>

            <div data-testid="section-ceremony-prep">
              <h3 className="text-xl font-bold text-[#3d1a28] font-display mb-3">Cacao Ceremony Preparation</h3>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>
                  For a full ceremonial context, breathwork circles, ecstatic dance, integration work, or solo ceremony, the full 50g dose is traditional. Set an intention before consuming. Create space and time to sit with the experience. The heart-opening and emotional availability effects typically build over 30 to 60 minutes and last 3 to 5 hours.
                </p>
              </div>
            </div>

          </div>
        </section>

        <section data-testid="section-dosing">
          <h2 className="text-2xl font-bold text-[#3d1a28] font-display mb-4">Dosing Guidelines and Considerations</h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p><strong className="text-[#3d1a28]">Microdose (10 to 20g):</strong> Gentle mood lift, mild energy, suitable for daily use or adding to smoothies and recipes.</p>
            <p><strong className="text-[#3d1a28]">Daily ritual dose (25 to 35g):</strong> Noticeable energy, focus, and mood support. Ideal for morning practice or creative work.</p>
            <p><strong className="text-[#3d1a28]">Ceremonial dose (40 to 50g):</strong> Full heart-opening effect, significant mood and emotional impact. Best used intentionally with time and space.</p>
            <div className="card-glass rounded-2xl p-5 mt-4 space-y-3 text-sm">
              <p className="font-semibold text-[#3d1a28]">Important cautions:</p>
              <p>Theobromine has a 7 to 12 hour half-life. Avoid consuming after early afternoon if you're sensitive to stimulants or have difficulty sleeping.</p>
              <p>If you take SSRI or MAOI antidepressants, consult your healthcare provider before using ceremonial cacao. The tyramine and serotonin precursors in cacao can interact with these medications.</p>
              <p>Some people experience migraines from high doses, likely related to increased cerebral blood flow. Start with a smaller dose to assess your response.</p>
              <p>Cacao is not a substitute for medical care and is not intended to treat, diagnose, or prevent any condition.</p>
            </div>
          </div>
        </section>

        <section data-testid="section-faq">
          <h2 className="text-2xl font-bold text-[#3d1a28] font-display mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 text-black/70 leading-relaxed">
            <div>
              <p className="font-semibold text-[#3d1a28] mb-2">Will ceremonial cacao make me feel high?</p>
              <p>No. Ceremonial cacao is not psychedelic or psychoactive. You will not experience altered perception or hallucinations. What you will experience is a natural, grounded state of calm alertness, open-heartedness, and sustained energy, mediated through your own neurochemistry.</p>
            </div>
            <div>
              <p className="font-semibold text-[#3d1a28] mb-2">What's the difference between ceremonial cacao and raw cacao powder?</p>
              <p>Ceremonial cacao is whole-bean paste with the cacao butter intact. Raw cacao powder has had the fat removed and is often more processed. The fat is essential for bioavailability of the active compounds. Ceremonial cacao is significantly more potent and nutritionally complete.</p>
            </div>
            <div>
              <p className="font-semibold text-[#3d1a28] mb-2">Can I use ceremonial cacao daily?</p>
              <p>Yes. At moderate doses (25 to 35g), daily ceremonial cacao is well-tolerated and has been a daily practice in many traditional cultures. Monitor your sleep and adjust timing accordingly given theobromine's long half-life.</p>
            </div>
            <div>
              <p className="font-semibold text-[#3d1a28] mb-2">Why does quality vary so much between brands?</p>
              <p>Bean variety, farming practices, fermentation, drying method, processing temperature, and storage all affect the final concentration of active compounds. Cheap commercial cacao typically uses bulk Forastero beans that are Dutch-processed, a method that destroys most of the flavanols and active compounds. Ceremonial-grade cacao from reputable sources like Koracao costs more because the quality is genuinely different.</p>
            </div>
          </div>
        </section>

        <section data-testid="section-references">
          <h2 className="text-2xl font-bold text-[#3d1a28] font-display mb-4">Research References</h2>
          <div className="space-y-2 text-black/60 text-sm leading-relaxed">
            <p>López-Torres, M. et al. "The relevance of theobromine for the beneficial effects of cocoa consumption." <em>Frontiers in Pharmacology</em>.{" "}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4335269/" target="_blank" rel="noopener noreferrer" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors" data-testid="link-ref-theobromine">PMC4335269</a>
            </p>
            <p>Islam R. et al. "Theobromine Improves Working Memory by Activating the CaMKII/CREB/BDNF Pathway in Rats." <em>Nutrients</em>, 2019.{" "}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6521120/" target="_blank" rel="noopener noreferrer" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors" data-testid="link-ref-bdnf">PMC6521120</a>
            </p>
            <p>Fraga, C.G. et al. "Cocoa flavanols: Effects on vascular nitric oxide and blood pressure." <em>Journal of Clinical Biochemistry and Nutrition</em>, 2011.</p>
          </div>
        </section>

        <p className="text-black/50 text-sm leading-relaxed">
          If you're building a complete wellness stack, the{" "}
          <Link href="/discount-codes" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">
            full discount codes page
          </Link>{" "}
          has exclusive codes for all of Eden's recommended brands.
        </p>

        <CopyCodeButton
          code="EDENKAWTHARLARAKI123"
          href="https://koracao.com/THRIVE33"
        />

      </article>
    </PageLayout>
  );
}
