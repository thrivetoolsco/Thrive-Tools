import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Brain, Heart, FlaskConical, Zap, ShieldCheck, Copy, Check } from "lucide-react";
import { useState } from "react";
import aquaomegaFrontImg from "@assets/AO_PlantBased_DHA_240_Cdn_2_1773781347397.jpg";
import aquaomegaBackImg from "@assets/AO_Algal_DHA_Capsules_Cdn_Side1_1773781347416.webp";

const SHOP_URL = "https://aquaomega.refr.cc/default/u/thrivetoolsco?s=rp&t=cp";

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-[#c4622d]">{icon}</span>
      <h2 className="font-display text-2xl font-bold text-black">{title}</h2>
    </div>
  );
}

function SubHead({ title }: { title: string }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-wider text-[#c4622d] mb-2 mt-5">{title}</p>
  );
}

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
      <p className="text-xs font-semibold uppercase tracking-wider text-[#c4622d] mb-2">{title}</p>
      <p className="text-black/70 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function CopyLinkButton() {
  const [copied, setCopied] = useState(false);
  function handleCopy() {
    navigator.clipboard.writeText(SHOP_URL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }
  return (
    <button
      onClick={handleCopy}
      data-testid="button-copy-aquaomega-link"
      className="inline-flex items-center gap-2 font-mono text-xs text-[#c4622d] bg-[#c4622d]/10 hover:bg-[#c4622d]/20 px-4 py-2 rounded-lg transition-colors border border-[#c4622d]/20 cursor-pointer max-w-full overflow-hidden"
    >
      <span className="truncate">aquaomega.refr.cc/default/u/thrivetoolsco</span>
      {copied ? <Check className="w-4 h-4 text-green-600 flex-shrink-0" /> : <Copy className="w-4 h-4 flex-shrink-0" />}
      <span className="text-black/40 font-sans ml-1 flex-shrink-0">{copied ? "Copied!" : "Copy link"}</span>
    </button>
  );
}

export default function Omega3Guide() {
  return (
    <PageLayout showShare
      title="Omega-3: Everything You Actually Need to Know"
      subtitle="EPA, DHA, fish oil vs algae oil, and why most supplements fail. Here's the complete science and the only brand I recommend."
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-12">

        {/* Badges */}
        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border border-[#c4622d]/25 rounded-full px-3 py-0.5 text-xs">
            Supplements Guide
          </Badge>
          <Badge className="bg-white/5 text-black/50 border border-white/10 rounded-full px-3 py-0.5 text-xs">
            Product Review
          </Badge>
        </div>

        {/* Intro */}
        <section data-testid="section-intro">
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Omega-3 is one of the most researched nutrients in human health, with tens of thousands of published studies, decades of clinical trials, and consistent evidence across brain function, cardiovascular health, inflammation, mental health, and longevity. It is also one of the most poorly supplemented categories on the market, because most people are either taking the wrong form, the wrong dose, or a product that has already oxidised before they open it.
            </p>
            <p>
              This article covers everything you need to know to supplement omega-3 intelligently. What EPA and DHA actually do. What the latest 2025 research shows. The honest answer to whether algae oil is better than fish oil. What the omega-3 index is and why it's the only meaningful measure of your status. And why I recommend AquaOmega above every other brand I've looked at in this category.
            </p>
            <p className="text-sm text-black/50">
              For further supplement context, see my{" "}
              <a href="/product-reviews/biohacking-supplements-2026" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">supplements guide</a>,{" "}
              <a href="/blog/creatine-dosage-for-brain" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">creatine for brain health article</a>, and{" "}
              <a href="/blog/magnesium-deficiency-supplement-guide" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">magnesium guide</a>. Or visit my{" "}
              <a href="/personalized-guidance" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">Personalized Guidance</a> page.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Why Non-Negotiable */}
        <section data-testid="section-why">
          <SectionHeader icon={<Zap className="w-5 h-5" />} title="Why Omega-3 Is Non-Negotiable" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Omega-3 fatty acids are polyunsaturated fats you have to get from foods or supplements because your body does not make them. They are part of the support structure of every cell in your body, they give you energy, and they help keep your heart, lungs, blood vessels, and immune system working the way they should.
            </p>
            <InfoCard
              title="The ALA conversion problem"
              body="The critical distinction most people miss is between ALA, the plant-based omega-3 in flaxseed, chia, and walnuts, and the long-chain forms EPA and DHA. Humans convert less than 15% of ALA into the biologically active forms EPA and DHA. Seven intervention studies reported that ALA from nut and seed oils was not converted to DHA at all, making direct EPA and DHA supplementation from fish or algae the only reliable strategy for most people."
            />
          </div>
        </section>

        <div className="section-divider" />

        {/* EPA vs DHA */}
        <section data-testid="section-epa-dha">
          <SectionHeader icon={<Brain className="w-5 h-5" />} title="EPA vs DHA: What Each One Actually Does" />
          <div className="space-y-4 text-black/70 leading-relaxed mb-4">
            <p>These two fatty acids are often bundled together but they have distinct biological roles and the research supports different primary applications for each.</p>
          </div>

          <SubHead title="DHA. The Brain's Structural Nutrient" />
          <div className="space-y-4 text-black/70 leading-relaxed mb-4">
            <p>
              DHA is the dominant omega-3 in the brain. It impacts neurotransmitters and brain functions at every stage of life. DHA is an essential component of cellular membrane phospholipids in the brain, and researchers hypothesise that it might protect cognitive function by helping to maintain neuronal function and cell membrane integrity.
            </p>
            <p>
              DHA is the primary structural fat in the brain, making up about 30 to 40% of the polyunsaturated fatty acids in neural membranes. It is crucial for neuroplasticity, neurotransmission, and overall brain health. DHA is concentrated in the brain and the retina and accumulates most rapidly during the third trimester of pregnancy. Lower serum DHA levels are associated with more cerebral amyloidosis, the build-up of protein deposits linked to Alzheimer's disease, whereas higher DHA is correlated with preservation of brain volume.
            </p>
          </div>

          <SubHead title="EPA. The Anti-Inflammatory Powerhouse" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              EPA and DHA modulate lipid metabolism, inflammation, platelet and endothelial function, the gut-heart axis, ion channels and autonomic function via vagal tone, supporting cardiovascular health. EPA has more potent anti-inflammatory and triglyceride-lowering effects. It is the fatty acid most relevant for cardiovascular and metabolic health. For cardiovascular health, especially in patients with elevated triglycerides or chronic inflammation, high-EPA fish oil is still the gold standard.
            </p>
            <InfoCard
              title="Practical implication"
              body="If your primary concern is brain health and neuroprotection, prioritise DHA. If cardiovascular health, inflammation reduction, or triglyceride management is the goal, prioritise EPA. For general health optimisation, a well-balanced formula covering both is the most sensible approach."
            />
          </div>
        </section>

        <div className="section-divider" />

        {/* 2025 Research */}
        <section data-testid="section-research">
          <SectionHeader icon={<FlaskConical className="w-5 h-5" />} title="The Latest Research: What 2025 Science Actually Shows" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>The omega-3 research base has expanded significantly in the last two years. Here are the most important recent findings.</p>

            <SubHead title="Brain and dementia prevention" />
            <p>
              A large prospective analysis of the UK Biobank cohort involving 217,122 participants ages 40 to 64 found that higher circulating omega-3 blood levels were significantly associated with a reduced risk of early-onset dementia. Participants with the highest quintiles of total omega-3s and DHA showed notably lower incidence compared with those in the lowest quintiles over an average of 8.3 years of follow-up. This inverse relationship persisted regardless of APOE-ε4 genetic risk status, suggesting omega-3 status independently correlates with lower dementia risk.
            </p>
            <InfoCard
              title="Cognitive ageing, slowed by 2.5 years"
              body="In cognitively healthy individuals with clinical coronary artery disease, 3.36g EPA and DHA daily slowed cognitive ageing by 2.5 years. That is a measurable, clinically meaningful outcome, not a marginal statistical association."
            />

            <SubHead title="Mental health" />
            <p>
              A UK Biobank study found that higher plasma levels of omega-3 fatty acids were inversely associated with risk of passive suicidal ideation and history of self-harm. Participants with the highest DHA levels had 33% lower odds of self-harm history compared to lower quintiles. The neurobiological mechanisms, membrane fluidity, neurotransmitter regulation, and anti-inflammatory signalling, provide a credible basis for these associations.
            </p>

            <SubHead title="Athletic performance" />
            <p>
              In an exercise physiology trial, male endurance athletes given EPA-rich and DHA-rich omega-3 supplements for six weeks showed a significant increase in their omega-3 index and reductions in submaximal exercise heart rate and perceived exertion compared with placebo, suggesting cardiovascular efficiency improvements in trained individuals.
            </p>

            <SubHead title="Cardiovascular health. The honest picture" />
            <p>
              The cardiovascular research on omega-3 is more nuanced than most content acknowledges. Updated cohort data and recent meta-analyses consistently link higher intake or circulating levels of EPA and DHA to reduced risk of cardiovascular events. However, evidence from RCTs indicates that high-dose supplementation may be associated with an increase in atrial fibrillation risk, with the risk appearing dose-related.
            </p>
            <InfoCard
              title="The optimal target: omega-3 index 8 to 11%"
              body="Targeting an omega-3 index of 8 to 11%, rather than taking arbitrary high doses, is the most evidence-based approach to cardiovascular benefit while minimising AF risk. An omega-3 index in the target range is associated with lower total mortality and fewer major adverse cardiac events. Functions of organs such as the brain also benefit from an omega-3 index in the target range, while untoward effects such as bleeding or atrial fibrillation are minimised."
            />
          </div>
        </section>

        <div className="section-divider" />

        {/* Omega-3 Index */}
        <section data-testid="section-index">
          <SectionHeader icon={<Zap className="w-5 h-5" />} title="The Omega-3 Index: The Only Number That Actually Matters" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Most people supplementing omega-3 have no idea what their actual tissue levels are. This is the fundamental problem with the entire category. You cannot know whether you're taking enough, too little, or whether your supplement is even working, without measuring your omega-3 index.
            </p>
            <InfoCard
              title="What the omega-3 index measures"
              body="The omega-3 index measures EPA and DHA as a percentage of total fatty acids in red blood cell membranes, your most reliable indicator of long-term tissue omega-3 status. EPA and DHA are present in every human being at unpredictable levels even in the absence of intake, and their bioavailability is complex. Both facts need to be incorporated into clinical use of EPA and DHA."
            />
            <p>
              The target is an omega-3 index of 8% or above. Most people in Western countries sit between 4 and 6%, significantly below optimal. Getting tested before you start supplementing and retesting after 12 weeks tells you whether your supplement is actually working and whether your dose needs adjusting.
            </p>
            <p>
              Omega-3 index testing is available through private blood testing services and increasingly through GP practices. It is the single most useful investment you can make alongside an omega-3 supplement.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Fish vs Algae */}
        <section data-testid="section-fish-algae">
          <SectionHeader icon={<FlaskConical className="w-5 h-5" />} title="Fish Oil vs Algae Oil: The Honest Answer" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>This is the question I get asked most often in this category and it deserves a genuinely honest answer rather than a partisan one.</p>

            <SubHead title="Where fish and algae omega-3 come from" />
            <p>
              Fish oil is derived from fatty fish like anchovies and sardines, while algae oil comes from microalgae, the same organisms those fish eat to get their omega-3s in the first place. In the marine food chain, fish don't produce EPA and DHA. They accumulate it from the algae and plankton they consume. Algae oil goes directly to the source.
            </p>

            <SubHead title="Are they equally bioavailable?" />
            <InfoCard
              title="2025 RCT: microalgal oil is non-inferior to fish oil"
              body="A 2025 randomised double-blind placebo-controlled parallel-group clinical trial found that the bioavailability of DHA and EPA in plasma phospholipids from microalgal oil supplements are statistically non-inferior compared to fish oil supplements. The geometric mean ratio for DHA and EPA combined was 112%, indicating microalgal oil is comparable to fish oil. Multiple studies demonstrate no difference in plasma DHA or EPA levels between subjects supplementing with algae oil and those using fish oil."
            />

            <SubHead title="Where they meaningfully differ" />
            <p>
              From a composition standpoint, fish oil tends to be higher in EPA, while algae oil is typically richer in DHA. For neuroprotection, pregnancy, and overall cell membrane integrity, DHA-rich algae oil would be better suited. For cardiovascular health and inflammation, high-EPA fish oil remains the stronger option.
            </p>

            <SubHead title="The contamination advantage of algae" />
            <p>
              Algae oil is cleaner and more sustainable, grown in controlled tanks, free from ocean contaminants like mercury and PCBs, and it does not contribute to marine depletion. 48% of commercial omega-3 products tested contained less than the EPA and DHA amount declared on their label, making third-party testing certification not optional but essential when choosing any omega-3 product.
            </p>

            <SubHead title="The verdict" />
            <p>
              Neither is categorically better. Fish oil, when high quality, IFOS-certified, and delivered in triglyceride form, remains the most EPA-rich and extensively researched option. Algae oil, when properly formulated without pro-inflammatory fillers like sunflower oil, is the superior choice for vegetarians, vegans, and those specifically targeting DHA for brain health. The good news is AquaOmega offers both, and both clear the quality bar that most products on the market don't.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Formulation */}
        <section data-testid="section-formulation">
          <SectionHeader icon={<FlaskConical className="w-5 h-5" />} title="Why Formulation and Form Matter More Than Most People Know" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Not all omega-3 supplements are the same, even at equivalent EPA and DHA doses. The molecular form determines how much your body actually absorbs.
            </p>
            <InfoCard
              title="Triglyceride form vs ethyl ester"
              body="Dietary supplements can contain several different forms of omega-3s including natural triglycerides, free fatty acids, ethyl esters, and re-esterified triglycerides. Omega-3s as re-esterified triglycerides, natural triglycerides, and free fatty acids have somewhat higher bioavailability than ethyl esters. The ethyl ester form, the cheapest to manufacture, is what most low-cost fish oil products use. It produces fish burps, is more susceptible to oxidation, and has lower bioavailability than triglyceride forms."
            />
            <p>
              The triglyceride form is how omega-3 naturally occurs in fish tissue and is how your body is designed to receive and absorb it. AquaOmega is in a superior triglyceride form so that the product is more bioavailable while also less likely to cause any fish burps. This single formulation decision separates AquaOmega from the majority of fish oil products on the market.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* AquaOmega */}
        <section data-testid="section-aquaomega">
          <SectionHeader icon={<ShieldCheck className="w-5 h-5" />} title="The Brand I Recommend: AquaOmega" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              After reviewing the omega-3 supplement market thoroughly, AquaOmega is the only brand that meets every quality criterion simultaneously.
            </p>
            <InfoCard
              title="IFOS 5-star certified, every lot"
              body="AquaOmega has every single lot tested by IFOS, the International Fish Oil Standards program. With over 94% purity, this third-party tested omega-3 fish oil supplement meets the highest standards, with responsibly sourced ingredients. Proudly made in Canada."
            />
            <InfoCard
              title="Wild-caught anchovy, no fillers"
              body="AquaOmega uses only wild-caught anchovy, as farmed fish will have lower levels of omega-3s and higher toxic levels. The short lifespan of an anchovy ensures that toxins are not present as the fish have not been exposed very long at all. AquaOmega fish oils contain no fillers at all. They are strongly against the use of sunflower oil as a filler because it is pro-inflammatory. Instead they use cranberry seed oil which is a great source of omega-3s in ALA form that complements the oil."
            />
            <p>AquaOmega offers three distinct formulas to match different goals:</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  label: "High EPA",
                  desc: "For cardiovascular health, inflammation, triglyceride reduction, and metabolic support. The formula with the strongest evidence base for most biohackers and performance-focused individuals.",
                },
                {
                  label: "High DHA",
                  desc: "For brain health, neuroprotection, cognitive performance, mood, and sleep quality. Particularly relevant for anyone concerned about long-term cognitive function.",
                },
                {
                  label: "High DHA Vegan Algae Oil",
                  desc: "The highest concentrated plant-based omega-3 supplement on the market, in an easily digestible triglyceride form. For vegetarians, vegans, and those who want to avoid fish-derived products entirely.",
                },
              ].map((f) => (
                <div key={f.label} className="card-glass rounded-2xl p-5 space-y-2">
                  <p className="font-semibold text-black/90 text-sm">{f.label}</p>
                  <p className="text-black/55 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
            <p>
              The IFOS 5-star certification on every batch means every AquaOmega product is independently verified for EPA and DHA content, oxidation levels, contaminants, and heavy metals. This isn't a brand claim. It's publicly verifiable batch-by-batch at the IFOS website.
            </p>
          </div>
        </section>

        {/* Product images */}
        <div className="grid sm:grid-cols-2 gap-6" data-testid="img-aquaomega-products">
          <div className="card-glass rounded-2xl overflow-hidden flex items-center justify-center p-6 bg-white/30">
            <img
              loading="lazy"
              decoding="async"
              src={aquaomegaFrontImg}
              alt="AquaOmega Plant-Based DHA Omega-3 front label"
              className="max-h-80 w-auto object-contain"
            />
          </div>
          <div className="card-glass rounded-2xl overflow-hidden flex items-center justify-center p-6 bg-white/30">
            <img
              loading="lazy"
              decoding="async"
              src={aquaomegaBackImg}
              alt="AquaOmega Algal DHA Capsules back label"
              className="max-h-80 w-auto object-contain"
            />
          </div>
        </div>

        <div className="section-divider" />

        {/* How to Take */}
        <section data-testid="section-how-to">
          <SectionHeader icon={<Zap className="w-5 h-5" />} title="How to Take Omega-3 Properly" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  label: "Dose with food",
                  desc: "Omega-3 fatty acids are fat-soluble. Taking them with your largest meal of the day, particularly one containing dietary fat, significantly improves absorption.",
                },
                {
                  label: "Dose targets",
                  desc: "For general health, 500mg EPA and DHA daily. For secondary prevention of coronary heart disease, 1,000mg per day is recommended. For cognitive optimisation, research showing meaningful effects on brain ageing used 3 to 3.36g per day.",
                },
                {
                  label: "Measure your omega-3 index",
                  desc: "Take a baseline test before starting, then retest after 12 weeks of consistent supplementation. Adjust dose based on results rather than guessing. Target 8% or above.",
                },
                {
                  label: "Split dosing",
                  desc: "Some prefer to split doses at a 1:1 EPA:DHA ratio. Take half a dose of EPA in the morning for the energy boost and half a dose of DHA at night to help get a more restful sleep.",
                },
              ].map((item) => (
                <div key={item.label} className="card-glass rounded-2xl p-5 space-y-2">
                  <p className="font-semibold text-black/90 text-sm">{item.label}</p>
                  <p className="text-black/55 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <InfoCard
              title="Storage"
              body="Keep away from heat, light, and oxygen. AquaOmega products are shelf-stable and require no refrigeration, but avoid storing near heat sources."
            />
          </div>
        </section>

        <div className="section-divider" />

        {/* Who needs it */}
        <section data-testid="section-who-needs">
          <SectionHeader icon={<Heart className="w-5 h-5" />} title="Who Needs Omega-3 Most" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              The honest answer is that most people in Western countries are significantly under-dosed in EPA and DHA relative to what the research suggests is optimal. Certain groups are at particular risk:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "People eating little or no fatty fish — the most direct dietary source of preformed EPA and DHA.",
                "People over 40 — DHA levels in brain tissue decline with age and the relationship between omega-3 index and cognitive outcomes is strongest in older adults.",
                "Pregnant women — DHA accumulates most rapidly in fetal brain tissue during the third trimester and first two years of life.",
                "People with chronic inflammation, cardiovascular risk factors, or elevated triglycerides.",
                "Anyone with mood disorders, attention difficulties, or family history of neurodegenerative disease.",
                "Vegetarians and vegans — who have no dietary source of preformed EPA and DHA and are therefore at highest risk of deficiency.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 card-glass rounded-xl p-4" data-testid={`item-who-needs-${i}`}>
                  <span className="text-[#c4622d] mt-0.5 flex-shrink-0 text-xs">›</span>
                  <p className="text-black/65 text-xs leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* CTA */}
        <section className="card-glass rounded-2xl p-6 sm:p-8 space-y-5" data-testid="section-cta">
          <p className="font-display text-xl font-bold text-black">Get AquaOmega Using My Affiliate Link</p>
          <div className="space-y-3 text-black/70 leading-relaxed text-sm">
            <p>
              IFOS-certified, triglyceride form, wild-caught anchovy, cranberry seed oil filler, made in Canada. The only omega-3 brand that clears every quality bar at once.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2 flex-wrap">
            <CopyLinkButton />
            <Button asChild size="lg" className="btn-gradient-rose text-white border-0 rounded-full px-6 sm:px-8 py-4 text-sm tracking-widest uppercase font-semibold h-auto leading-relaxed w-full sm:w-auto">
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" data-testid="link-aquaomega-shop" className="inline-flex items-center justify-center gap-2 flex-wrap">
                Shop AquaOmega <ExternalLink className="w-4 h-4 flex-shrink-0" />
              </a>
            </Button>
          </div>
          <p className="text-black/35 text-xs">
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="underline text-[#c4622d]/60 hover:text-[#8b3a1a] transition-colors">aquaomega.refr.cc/default/u/thrivetoolsco</a>
          </p>
        </section>

        <div className="section-divider" />

        {/* Sources */}
        <section data-testid="section-sources">
          <SectionHeader icon={<BookOpen className="w-5 h-5" />} title="Further Reading and Sources" />
          <div className="space-y-3 text-sm text-black/60 leading-relaxed">
            {[
              {
                label: "PMC 2025 — Comparative Bioavailability of DHA and EPA from Microalgal and Fish Oil in Adults",
                href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12524788/",
              },
              {
                label: "PMC 2025 — EPA and DHA and Cardiovascular Health, Updated Review of Mechanisms and Clinical Outcomes",
                href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12628397/",
              },
              {
                label: "PubMed 2025 — Omega-3 fatty acids in heart disease, why accurately measured levels matter",
                href: "https://pubmed.ncbi.nlm.nih.gov/36795219/",
              },
              {
                label: "Nutritional Outlook 2025 — Latest research on omega-3s and human health",
                href: "https://www.nutritionaloutlook.com/view/what-does-the-latest-research-reveal-about-omega-3s-and-human-health-",
              },
              {
                label: "NIH Office of Dietary Supplements — Omega-3 Fatty Acids Health Professional Fact Sheet",
                href: "https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/",
              },
              {
                label: "PubMed — Omega-3 fatty acids and cognitive function",
                href: "https://pubmed.ncbi.nlm.nih.gov/36637075/",
              },
              {
                label: "GlobalRPH 2025 — Comparative Analysis of Fish Oil and Algae-Based Omega-3 Supplements",
                href: "https://globalrph.com/2025/07/comparative-analysis-of-fish-oil-and-algae-based-omega-3-supplements/",
              },
              {
                label: "IFOS Certification Program — Nutrasource",
                href: "https://certifications.nutrasource.ca/about/how-certifications-work/ifos/",
              },
            ].map((source, i) => (
              <div key={i} className="flex items-start gap-2.5" data-testid={`source-omega3-${i}`}>
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
            Medical Disclaimer: This article is for informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional before beginning any new supplement regimen, particularly if you have a cardiovascular condition, are pregnant, or are taking anticoagulant medications.
          </p>
        </div>

      </article>
    </PageLayout>
  );
}
