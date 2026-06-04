import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ShieldCheck, FlaskConical, Zap, BookOpen, Copy, Check } from "lucide-react";
import { useState } from "react";
import justThriveImg from "@assets/7194vlaACsL._AC_UF1000,1000_QL80__1773693377923.jpg";

const SHOP_URL = "https://justthrivehealth.com/THRIVETOOLS";
const DISCOUNT_CODE = "THRIVETOOLS";

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-[#c4622d]">{icon}</span>
      <h2 className="font-display text-2xl font-bold text-black">{title}</h2>
    </div>
  );
}

function ResearchCard({ label, text }: { label: string; text: string }) {
  return (
    <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
      <p className="text-xs font-semibold uppercase tracking-wider text-[#c4622d] mb-2">{label}</p>
      <p className="text-black/70 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function CopyCodeButton() {
  const [copied, setCopied] = useState(false);
  function handleCopy() {
    navigator.clipboard.writeText(DISCOUNT_CODE).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }
  return (
    <button
      onClick={handleCopy}
      data-testid="button-copy-thrivetools"
      className="inline-flex items-center gap-2 font-mono font-semibold text-[#c4622d] bg-[#c4622d]/10 hover:bg-[#c4622d]/20 px-4 py-2 rounded-lg transition-colors border border-[#c4622d]/20 cursor-pointer"
    >
      <span>{DISCOUNT_CODE}</span>
      {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
      <span className="text-xs text-black/40 font-sans ml-1">{copied ? "Copied!" : "Click to copy"}</span>
    </button>
  );
}

export default function JustThriveProbiotic() {
  return (
    <PageLayout showShare
      title="Why Most Probiotics Never Reach Your Gut. The Two Strains That Always Do"
      subtitle="The survivability problem the probiotic industry quietly ignores, and the science behind the only strains that solve it."
      seo={{
        title: "Spore Probiotics That Survive to Your Gut | Thrive Tools",
        description: "Most probiotics die before reaching your gut. Why spore-forming strains like Bacillus subtilis and B. coagulans are the only ones that consistently work.",
        canonical: "/blog/bacillus-subtilis-bacillus-coagulans-probiotic-guide",
        ogType: "article",
        datePublished: "2026-02-11",
        image: justThriveImg,
        imageAlt: "Just Thrive spore-based probiotic supplement",
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-12">

        {/* Badges */}
        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border border-[#c4622d]/25 rounded-full px-3 py-0.5 text-xs">
            Science Deep Dive
          </Badge>
          <Badge className="bg-white/5 text-black/50 border border-white/10 rounded-full px-3 py-0.5 text-xs">
            2026 Edition
          </Badge>
        </div>

        {/* Intro */}
        <section data-testid="section-intro">
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              I've recommended a lot of supplements over 14 years in this space. I've also changed my mind about a lot of them as the research evolved. Probiotics are the category where my thinking shifted most dramatically, and the shift came down to understanding one fundamental problem that the entire industry quietly ignores.
            </p>
            <p>
              Most probiotics are dead before they reach your gut.
            </p>
            <p>
              Not ineffective. Not partially active. Dead. And a dead probiotic is nothing more than an expensive capsule of inert powder that your body passes without benefit.
            </p>
            <p>
              This article explains exactly why that happens, what makes certain strains categorically different, and why Bacillus subtilis and Bacillus coagulans are the two strains I now build every probiotic recommendation around. For broader context on gut health as part of a complete protocol, see my{" "}
              <a href="/product-reviews/biohacking-supplements-2026" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">biohacking supplements guide</a>,{" "}
              <a href="/product-reviews/biohacking-beginners-guide" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">biohacking beginners guide</a>, and my{" "}
              <a href="/product-reviews/im8-health-review" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">IM8 Health review</a>.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Problem with conventional probiotics */}
        <section data-testid="section-problem">
          <SectionHeader icon={<FlaskConical className="w-5 h-5" />} title="The Problem With Every Probiotic You've Probably Tried" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              The most common probiotics on the market, the ones in supermarkets, pharmacies, and most health food stores, are Lactobacillus and Bifidobacterium based. These strains have genuine research behind them and real health benefits in the right context. The problem is getting them to the right context.
            </p>
            <p>
              Lactobacillus and Bifidobacterium have been used since long for the competitive exclusion of pathogens from the gut. However, their limitations include sensitivity to gastric acid, temperature, slow growth, and specific stability conditions, leading to a search for novel probiotics that are stable through their shelf life as well as during gastrointestinal transit.
            </p>
            <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#c4622d] mb-2">The stomach acid barrier</p>
              <p className="text-black/70 text-sm leading-relaxed">
                Gastric pH ranges between near-neutral immediately after a meal and pH 1 to 2.5 in a fasted state, roughly the acidity of battery acid. With gastric pH presenting a significant barrier for most probiotics, the stomach is where the majority of conventional probiotic supplements are destroyed before they ever reach the intestine where they're needed.
              </p>
            </div>
            <p>
              The result is that most people taking Lactobacillus-based probiotics are experiencing, at best, minimal benefit, and have no way of knowing it because nobody on the label is telling them their bacteria are dying in their stomach.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Spore-forming probiotics */}
        <section data-testid="section-spore">
          <SectionHeader icon={<ShieldCheck className="w-5 h-5" />} title="What Makes Spore-Forming Probiotics Categorically Different" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <h3 className="font-display text-xl font-bold text-black mb-2">Why Bacillus Species Outperform Lactobacillus</h3>
            <p>
              Bacillus bacteria have strong scientific data which substantiates the validity of their use as preferred probiotics. In recent times, there has been significant progress in scientific evaluation and studies on probiotic Bacillus subtilis, revealing possible mechanisms of action including antimicrobial effect by synthesis of antimicrobial substances, antidiarrheal effect, immunostimulatory effect, competitive exclusion of pathogens, prevention of intestinal inflammation, and normalization of intestinal flora.
            </p>
            <p>
              The key is in how Bacillus species exist in nature. Unlike Lactobacillus strains which are vegetative cells, essentially naked bacteria exposed to whatever environment they encounter, Bacillus strains form endospores. These spores are among the most resilient biological structures in nature, capable of surviving conditions that would destroy virtually any other living organism.
            </p>
            <p>
              Due to their ability to form stable spores, Bacilli can withstand food processing and storage conditions better than Lactobacillus or Bifidobacterium, making Bacillus a suitable probiotic. The spore-forming ability of Bacillus enhances its resistance to thermal treatment, allowing it to survive cooking processes and endure harsh processing conditions such as heat, pH changes, salt, and desiccation that are often detrimental to vegetative cells.
            </p>
            <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#c4622d] mb-2">Clinically confirmed transit survival</p>
              <p className="text-black/70 text-sm leading-relaxed">
                Three hours following ingestion of Bacillus subtilis DE111, spores began to appear in the ileum effluent, demonstrating that orally ingested B. subtilis spores are able to remain viable during transit through the stomach and germinate in the small intestine of humans within 3 hours of ingestion. That is a fundamentally different mechanism from any Lactobacillus product you've ever taken.
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Bacillus Subtilis */}
        <section data-testid="section-subtilis">
          <SectionHeader icon={<Zap className="w-5 h-5" />} title="Bacillus Subtilis: The Immune System's Probiotic" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Bacillus subtilis is one of the most extensively studied probiotic bacteria in existence, and its profile goes far beyond basic gut health.
            </p>
            <div className="space-y-4">
              <ResearchCard
                label="Antimicrobial production"
                text="B. subtilis is the most productive Bacillus species, devoting 4 to 5 percent of its genome to antibiotic synthesis and producing 66 antibiotics. Antimicrobial agents synthesized and secreted by B. subtilis are a natural part of the human antimicrobial defense system, meaning the possibility of developing pathogen resistance or unwanted side effects is significantly reduced."
              />
              <ResearchCard
                label="Immune stimulation and microbiome support"
                text="Bacillus subtilis HU58 is an extremely potent immune stimulator. It has the function of germinating in the small intestines to some degree and this offers the effect of broad spectrum immune stimulation. It has also been shown to increase the growth of natural good bacteria."
              />
              <ResearchCard
                label="Nattokinase production and cardiovascular benefit"
                text="Bacillus subtilis HU58 produces a very healthy compound called Nattokinase in the digestive tract. Nattokinase is a key compound found in the Japanese food Natto and has been shown to support healthy blood pressure, healthy cholesterol levels, and healthy circulation. The cardiovascular benefits of Nattokinase production are one of the most underappreciated secondary effects of this strain, most people taking B. subtilis HU58 for gut health are unknowingly also supporting their cardiovascular system simultaneously."
              />
              <ResearchCard
                label="Clinical trial outcome"
                text="A randomized double-blind placebo-controlled clinical trial of 76 healthy adults found that daily supplementation with Bacillus subtilis BS50 for 6 weeks significantly improved the composite score for bloating, burping, and flatulence compared to placebo, with the odds of improvement approximately 3.2 times higher with B. subtilis supplementation."
              />
            </div>
            <p>
              B. subtilis is certified as generally recognized as safe by the Food and Drug Administration and features in the European Food Safety Authority qualified presumption of safety list, the highest safety designations available for a probiotic strain.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Bacillus Coagulans */}
        <section data-testid="section-coagulans">
          <SectionHeader icon={<Zap className="w-5 h-5" />} title="Bacillus Coagulans: The Digestive System's Most Versatile Ally" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Where B. subtilis earns its place primarily through immune modulation and antimicrobial production, Bacillus coagulans has built one of the most comprehensive digestive health evidence bases of any probiotic strain.
            </p>
            <div className="space-y-4">
              <ResearchCard
                label="Digestive versatility"
                text="Several beneficial effects of B. coagulans have been reported. It can promote intestinal digestion, as B. coagulans strains produce various enzymes that facilitate excretion and digestion. It can regulate host symbiotic microbiota and inhibit the growth of pathogenic bacteria. And due to its ability to normalize both the quantitative parameters of the immune system and immune cells' functional activity, B. coagulans can significantly benefit the host immune system."
              />
              <ResearchCard
                label="Clinical digestive outcomes"
                text="In a human trial, 90 days of supplementing with Bacillus coagulans resulted in significant reductions in not only diarrhea but bloating, vomiting, abdominal pain, and unusual stool frequency."
              />
              <ResearchCard
                label="IBS and IBD evidence"
                text="Probiotic treatment with B. coagulans GBI-30, 6086 resulted in quality of life improvement and reduction of gastrointestinal symptoms in a clinical trial of patients with post-prandial gas-related symptoms. Another clinical trial reported a reduction of daily bowel movements in patients with IBD who were treated with B. coagulans GBI-30, 6086."
              />
              <ResearchCard
                label="Metabolic health, 2025"
                text="A 2025 randomized double-blind placebo-controlled study found that Bacillus coagulans BC99 supplementation significantly changed the gut microbiota diversity, with the probiotic group showing beneficial shifts in microbial composition alongside improvements in body weight and lipid profiles in overweight and obese individuals."
              />
            </div>
            <p>
              What makes B. coagulans unique among Bacillus species is that it also produces lactic acid like Lactobacillus strains, giving it a dual mechanism of action. It combines the spore survival advantage of Bacillus with the lactic acid producing microbiome-balancing effects of the most commonly researched probiotic strains.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Combined strains */}
        <section data-testid="section-combined">
          <SectionHeader icon={<FlaskConical className="w-5 h-5" />} title="What Happens When You Combine Both Strains" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              The research on B. subtilis HU58 and B. coagulans SC208 together, the exact combination in Just Thrive, is particularly compelling.
            </p>
            <div className="space-y-4">
              <ResearchCard
                label="Intestinal permeability, 30 days"
                text="A study assessing the effects of a probiotic formulation containing Bacillus coagulans SC208 and Bacillus subtilis HU58 found that when patients with dietary endotoxemia took a probiotic supplement containing these spore-forming species for 30 days, they experienced a significant reduction in intestinal permeability as evidenced by significant reductions in endotoxins, triglycerides, and proinflammatory cytokines."
              />
              <ResearchCard
                label="Synergistic effect confirmed"
                text="A placebo-controlled trial specifically testing Bacillus subtilis HU58 and Bacillus coagulans SC208 in combination found statistically significant improvement in stool consistency, abdominal pain, bloating, and flatulence, with the combination producing better outcomes than B. coagulans SC208 alone, confirming that the two strains work synergistically rather than redundantly."
              />
              <ResearchCard
                label="Gut barrier function"
                text="The combination produced a reduction in TNFa and improvement in gut barrier function, suggesting these strains work through complementary mechanisms that make them more effective together than either would be individually."
              />
            </div>
            <p>
              Intestinal permeability, commonly called leaky gut, is the condition where the tight junctions between intestinal cells break down, allowing partially digested food particles and bacterial toxins to enter the bloodstream and trigger systemic inflammation. It underlies a significant proportion of the chronic inflammatory conditions affecting modern populations. The fact that these two strains together produced measurable reductions in intestinal permeability within 30 days is clinically significant.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Why people fail */}
        <section data-testid="section-why-fail">
          <SectionHeader icon={<ShieldCheck className="w-5 h-5" />} title="Why Most People Have Failed With Probiotics Before" />
          <div className="space-y-4 text-black/70 leading-relaxed mb-6">
            <p>If you've tried probiotics and noticed nothing, there are three likely explanations:</p>
          </div>
          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "The strains were dead before they reached your gut",
                body: "This is the most common reason and the one the industry least wants to discuss. Conventional Lactobacillus and Bifidobacterium products have survivability rates that are often catastrophically low by the time they pass through stomach acid. Spore-based probiotics are more challenging and expensive to manufacture which is why many companies have opted for lacto or bifido-based probiotics, these strains can be beneficial but in many cases don't survive the trip to the gut, rendering them ineffective.",
              },
              {
                num: "02",
                title: "The strain count was misleading",
                body: "More strains and higher CFU counts are marketing metrics, not quality metrics. Most probiotic products on the market have focused on adding more strains and higher cell counts to help boost their marketing message, yet there is no scientific evidence that having dozens of strains at very high cell counts have any benefit. Four clinically validated strains that arrive alive outperform 30 strains that don't survive the stomach.",
              },
              {
                num: "03",
                title: "You weren't consistent long enough",
                body: "Gut microbiome changes take time. The most meaningful research on spore-based probiotics shows significant effects at 30 to 90 days of consistent daily use, not one week.",
              },
            ].map((item) => (
              <div key={item.num} className="card-glass rounded-2xl p-6 flex gap-5" data-testid={`card-reason-${item.num}`}>
                <span className="font-display text-3xl font-bold text-[#c4622d]/20 leading-none flex-shrink-0 mt-1">{item.num}</span>
                <div className="space-y-2">
                  <p className="font-semibold text-black/90 text-sm">{item.title}</p>
                  <p className="text-black/60 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* Just Thrive */}
        <section data-testid="section-just-thrive">
          <SectionHeader icon={<ShieldCheck className="w-5 h-5" />} title="The Product I Recommend: Just Thrive Probiotic" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Just Thrive is the only probiotic I recommend in my ThriveTools protocol and the reason is straightforward: it's the only 100% spore-based probiotic that combines the specific strains I've outlined above in a single capsule, with clinical research on the exact product rather than just the individual strains.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Digestive health",
                  body: "Four probiotic strains including Bacillus subtilis HU58 and Bacillus coagulans, aiding digestion, supporting gut flora balance, and assisting in protection against harmful microorganisms.",
                },
                {
                  title: "Antioxidant delivery",
                  body: "Enhances antioxidant absorption through the unique proprietary strain Bacillus indicus HU36, which delivers antioxidants directly to the digestive system, maximising absorption.",
                },
                {
                  title: "Microbiome balance",
                  body: "The blend of spore-forming probiotics encourages a balanced gut microbiome positively impacting digestion, bowel movements, and overall gut function.",
                },
                {
                  title: "All-natural, allergen-free",
                  body: "Made with natural ingredients and free of common allergens including soy, dairy, and gluten.",
                },
              ].map((item, i) => (
                <div key={i} className="card-glass rounded-xl p-5 space-y-2" data-testid={`card-benefit-${i}`}>
                  <p className="font-semibold text-black/90 text-sm">{item.title}</p>
                  <p className="text-black/60 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <p>
              The Bacillus indicus HU36 strain that sets Just Thrive apart from other spore-based probiotics is worth highlighting separately. Bacillus indicus HU36 produces a distinct yellow-orange pigmentation due to the synthesis of carotenoids which are gastric stable, bio-accessible, and significantly more bioavailable than carotenoids from other sources. In practical terms Just Thrive turns your gut into a carotenoid and antioxidant production facility, a function that no other probiotic on the market replicates.
            </p>
            <p>
              A clinical study showed that Just Thrive Probiotic addressed leaky gut in participants within just 30 days.
            </p>
            <p>
              Take one capsule daily at the start of your largest meal. Spore-based probiotics do not require refrigeration, are not light sensitive, and have the ability to thrive when the conditions suit them. This makes Just Thrive genuinely travel-friendly in a way that refrigerated probiotics simply are not.
            </p>
          </div>
        </section>

        {/* Product image */}
        <div className="card-glass rounded-2xl overflow-hidden" data-testid="img-just-thrive">
          <img
            loading="lazy"
            decoding="async"
            src={justThriveImg}
            alt="Just Thrive Probiotic and Antioxidant supplement facts label"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="section-divider" />

        {/* How to get the most */}
        <section data-testid="section-how-to">
          <SectionHeader icon={<Zap className="w-5 h-5" />} title="How to Get the Most From Spore-Based Probiotics" />
          <div className="space-y-4">
            {[
              {
                title: "Take it with food",
                body: "The largest meal of the day is ideal. Food buffers stomach acid slightly and gives the spores the most hospitable transit conditions possible.",
              },
              {
                title: "Be consistent for 90 days",
                body: "The 30-day mark is where most people notice digestive changes. The 60 to 90-day mark is where immune and systemic benefits typically become apparent. Don't judge this category on two weeks.",
              },
              {
                title: "Support it with prebiotic fibre",
                body: "Spore-based probiotics reconstitute the gut environment. Giving the beneficial bacteria something to eat accelerates the process. Think cooked and cooled rice or potatoes, green bananas, chicory root, and fibrous vegetables.",
              },
              {
                title: "Avoid antibiotics concurrently if possible",
                body: "If you must take antibiotics, continuing Just Thrive alongside them is actually one of its strongest use cases. The spore-based strains are uniquely resistant to antibiotic damage in a way conventional probiotics are not. The combination of B. coagulans SC208 and B. subtilis HU58 reduced the effects of antibiotic-induced gut microbiome dysbiosis, a finding with significant practical implications for anyone who has recently completed a course of antibiotics.",
              },
            ].map((item, i) => (
              <div key={i} className="card-glass rounded-2xl p-6 flex gap-5" data-testid={`card-tip-${i}`}>
                <span className="font-display text-3xl font-bold text-[#c4622d]/20 leading-none flex-shrink-0 mt-1">0{i + 1}</span>
                <div className="space-y-2">
                  <p className="font-semibold text-black/90 text-sm">{item.title}</p>
                  <p className="text-black/60 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* Verdict + CTA */}
        <section data-testid="section-verdict" className="card-glass rounded-2xl p-6 sm:p-8 space-y-5">
          <p className="font-display text-xl font-bold text-black">Get Just Thrive With My Discount Code</p>
          <div className="space-y-3 text-black/70 leading-relaxed text-sm">
            <p>
              If you've tried conventional probiotics and noticed nothing, this is why. The strains matter, the survivability matters, and the clinical evidence behind the specific combination matters.
            </p>
            <p>
              Just Thrive is the product I recommend to everyone who asks me about probiotics. One capsule daily with your largest meal. Give it 90 days and track your digestion, immunity, and energy. The research is compelling. The personal experience across 14 years of recommending it to people is even more so.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <CopyCodeButton />
            <Button asChild size="lg" className="btn-gradient-rose text-white border-0 rounded-full px-6 sm:px-8 py-4 text-sm tracking-widest uppercase font-semibold h-auto leading-relaxed w-full sm:w-auto">
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" data-testid="link-just-thrive-shop" className="inline-flex items-center justify-center gap-2 flex-wrap">
                Shop Just Thrive <ExternalLink className="w-4 h-4 flex-shrink-0" />
              </a>
            </Button>
          </div>
          <p className="text-black/35 text-xs">
            Visit{" "}
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="underline text-[#c4622d]/60 hover:text-[#8b3a1a] transition-colors">justthrivehealth.com/THRIVETOOLS</a>
          </p>
        </section>

        <div className="section-divider" />

        {/* Sources */}
        <section data-testid="section-sources">
          <SectionHeader icon={<BookOpen className="w-5 h-5" />} title="Further Reading and Sources" />
          <div className="space-y-3 text-sm text-black/60 leading-relaxed">
            {[
              {
                label: "PMC — Bacillus subtilis HU58 and Bacillus coagulans SC208 in antibiotic-induced dysbiosis",
                href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7409217/",
              },
              {
                label: "Biomedical Journal of Scientific Research — HU58 and SC208 combination trial in antibiotic-associated diarrhoea",
                href: "https://biomedres.us/fulltexts/BJSTR.MS.ID.004839.php",
              },
              {
                label: "Frontiers in Nutrition 2025 — Bacillus coagulans BC99 and gut microbiota in obesity",
                href: "https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2025.1542145/full",
              },
              {
                label: "ScienceDirect — Probiotic characteristics of Bacillus coagulans",
                href: "https://www.sciencedirect.com/science/article/pii/S1756464619305675",
              },
              {
                label: "Journal of Current Research in Scientific Medicine — Novel insight on probiotic Bacillus subtilis",
                href: "https://journals.lww.com/jcsm/fulltext/2016/02020/novel_insight_on_probiotic_bacillus_subtilis_.2.aspx",
              },
              {
                label: "PMC — Combined effects of B. subtilis and B. coagulans on intestinal microflora",
                href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6711872/",
              },
            ].map((source, i) => (
              <div key={i} className="flex items-start gap-2.5" data-testid={`source-${i}`}>
                <span className="text-[#c4622d] mt-0.5 flex-shrink-0">›</span>
                <a href={source.href} target="_blank" rel="noopener noreferrer" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">
                  {source.label}
                </a>
              </div>
            ))}
          </div>
        </section>

        <div className="space-y-3">
          <p className="text-center text-black/35 text-xs italic" data-testid="text-affiliate">
            Affiliate Disclosure: This article contains affiliate links. I may earn a commission if you purchase through these links at no additional cost to you. I only recommend products I personally use and genuinely believe in.
          </p>
          <p className="text-center text-black/35 text-xs italic" data-testid="text-disclaimer">
            Medical Disclaimer: This article is for informational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional before beginning any new supplement regimen, particularly if you have existing digestive conditions or are taking medication.
          </p>
        </div>

      </article>
    </PageLayout>
  );
}
