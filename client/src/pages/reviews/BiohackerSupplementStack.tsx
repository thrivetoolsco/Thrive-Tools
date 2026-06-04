import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Leaf, Zap, Brain, ShieldCheck, FlaskConical, User } from "lucide-react";

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-[#c4622d]">{icon}</span>
      <h2 className="font-display text-2xl font-bold text-black">{title}</h2>
    </div>
  );
}

function SubHead({ title }: { title: string }) {
  return <h3 className="font-display text-xl font-bold text-black mb-3 mt-6">{title}</h3>;
}

function AffilLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-[#c4622d] hover:text-[#8b3a1a] transition-colors font-medium underline text-sm"
      data-testid={`link-${label.toLowerCase().replace(/\s+/g, "-").slice(0, 40)}`}
    >
      {label} <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
    </a>
  );
}

export default function BiohackerSupplementStack() {
  return (
    <PageLayout
      showShare
      title="The Biohacker's Supplement Stack: What I Actually Take and Why (2026)"
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: "The Biohacker's Supplement Stack: What I Actually Take (2026) | Thrive Tools",
        description: "After 14 years of testing supplements, Eden Laraki shares the exact stack she takes — layered by foundation, system support, longevity, and advanced tools. With the science behind each choice.",
        canonical: "/blog/biohacker-supplement-stack-2026",
        ogType: "article",
        datePublished: "2026-05-21",
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-10">

        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border border-[#c4622d]/25 rounded-full px-3 py-0.5 text-xs">
            Full Stack Guide
          </Badge>
          <Badge className="bg-white/5 text-black/50 border border-white/10 rounded-full px-3 py-0.5 text-xs">
            May 21, 2026
          </Badge>
        </div>

        {/* Intro */}
        <section data-testid="section-intro">
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              After 14 years of testing supplements, tracking results, and reading more PubMed studies than I care to admit — I've landed on a stack that I actually believe in. Not one built around hype cycles or whatever's trending on wellness TikTok, but one grounded in mechanism, evidence, and how things feel in real life.
            </p>
            <p>
              This is what I take, why I take it, what I've dropped, and what the research says going into 2026.
            </p>
            <p>
              It's longer than most supplement guides because I'm not going to give you a listicle without explaining the reasoning. Understanding <em>why</em> something works is the only way to make intelligent decisions about your own stack.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Framework */}
        <section data-testid="section-framework">
          <SectionHeader icon={<Brain className="w-5 h-5" />} title="How to Think About a Supplement Stack Before Buying Anything" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Most people build their supplement protocol backwards — they read about something interesting and add it to the pile. After a while they're taking 12 things, spending a fortune, and genuinely unsure what's working.
            </p>
            <p>The layered approach makes more sense:</p>
          </div>
          <div className="space-y-3 mt-5">
            {[
              { layer: "Layer 1 — Foundation", desc: "Address the highest-prevalence deficiencies first. Magnesium, vitamin D, omega-3s, and a quality B-complex cover the gaps that most people have and that affect everything else downstream." },
              { layer: "Layer 2 — System support", desc: "Once the foundation is solid, add targeted support for gut health, energy, inflammation, and cognitive function. Probiotics, CoQ10, adaptogens, creatine." },
              { layer: "Layer 3 — Longevity and optimization", desc: "NAD+ precursors, senolytic compounds, advanced mitochondrial support. These work best when layers 1 and 2 are already in place." },
              { layer: "Layer 4 — Advanced interventions", desc: "Peptides, photobiomodulation, hydrogen water, neurofeedback. These are the performance edge — meaningful, but they won't compensate for a broken foundation." },
            ].map((item, i) => (
              <div key={i} className="card-glass rounded-xl p-5" data-testid={`layer-card-${i}`}>
                <p className="font-semibold text-black/90 text-sm mb-1">{item.layer}</p>
                <p className="text-black/65 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-black/70 leading-relaxed text-sm">
            The mistake most people make is jumping to layer 4 before layer 1 is solid. Fix the foundation first. Everything else lands harder when you do.
          </p>
        </section>

        <div className="section-divider" />

        {/* Layer 1 */}
        <section data-testid="section-layer1">
          <SectionHeader icon={<Leaf className="w-5 h-5" />} title="Layer 1: The Foundation Stack" />

          <SubHead title="Magnesium" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Magnesium deficiency affects an estimated 75% of people in Western countries. It's required for over 300 enzymatic reactions in the body — energy metabolism, protein synthesis, nervous system function, sleep regulation, blood pressure, and more.
            </p>
            <p>
              The form matters enormously. Magnesium oxide — the form in most cheap supplements — has roughly 4% bioavailability. It's essentially useless for anything except as a laxative.
            </p>
            <div className="space-y-3 mt-2">
              {[
                { form: "Magnesium glycinate", desc: "Best all-around form. Well-absorbed, calming due to the glycine component, no GI issues. This is my daily baseline. Take at night — the glycine content supports sleep architecture meaningfully." },
                { form: "Magnesium L-threonate", desc: "The only form clinically demonstrated to cross the blood-brain barrier. MIT research shows it increases synaptic density and improves cognitive function. Stack it with glycinate rather than replacing it." },
                { form: "Magnesium malate", desc: "Best for energy and muscle function. Malate is involved in the Krebs cycle (cellular energy production). Good option if fatigue is your primary complaint." },
              ].map((item, i) => (
                <div key={i} className="card-glass rounded-xl p-4">
                  <p className="font-semibold text-black/90 text-sm mb-1">{item.form}</p>
                  <p className="text-black/65 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p>
              <strong className="text-black/90">BiOptimizers Magnesium Breakthrough</strong> uses 7 forms of magnesium in one formula — glycinate, malate, taurate, threonate, orotate, sucrosomial, and citrate — each targeting different systems. It's the most comprehensive magnesium supplement I've come across and what I use personally.
            </p>
            <p><AffilLink href="https://bioptimizers.com" label="Shop BiOptimizers Magnesium Breakthrough — Use discount code THRIVETOOLS" /></p>
            <p className="text-xs text-black/40">Dose: 300–400mg elemental magnesium daily. Most people benefit from splitting morning and evening doses.</p>
          </div>

          <SubHead title="Omega-3 Fatty Acids (EPA + DHA)" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Omega-3 deficiency is one of the most widespread nutrient gaps in the developed world and one of the most consequential. Low omega-3 levels correlate with increased cardiovascular disease risk, elevated inflammation, poor cognitive function, and faster biological aging.
            </p>
            <p>
              <strong className="text-black/90">EPA</strong> is the primary anti-inflammatory fatty acid — it drives prostaglandin metabolism and cytokine regulation. For mood, depression, and systemic inflammation, EPA is the key variable. <strong className="text-black/90">DHA</strong> is the structural component — it makes up roughly 40% of the polyunsaturated fatty acids in the brain and 60% in the retina.
            </p>
            <p>
              Most omega-3 supplements are fish oil in ethyl ester form — a synthetic form that has roughly 25–30% lower absorption than the naturally occurring triglyceride form.
            </p>
            <p>
              <strong className="text-black/90">AquaOmega</strong> is what I use for plant-based omega-3. Their vegan algae softgels are exceptionally high in DHA — algae is where fish get their omega-3s, so you're going to the source directly. Triglyceride form, IFOS certified at 94% purity, and no heavy metal concerns from the marine supply chain.
            </p>
            <p><AffilLink href="https://aquaomega.refr.cc/default/u/thrivetoolsco?s=rp&t=cp" label="Shop AquaOmega Vegan Omega-3" /></p>
            <p className="text-xs text-black/40">Dose: 1–3g EPA+DHA daily. Aim for a 2:1 EPA:DHA ratio for anti-inflammatory goals; higher DHA ratios for cognitive support.</p>
          </div>

          <SubHead title="Vitamin D3 + K2" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Vitamin D deficiency affects an estimated 40% of adults in Western countries, rising to over 80% in populations with limited sun exposure. Vitamin D functions as a hormone, influencing gene expression, immune regulation, bone metabolism, mood, and cardiovascular health.
            </p>
            <p>
              The K2 pairing matters. Vitamin D3 increases calcium absorption; K2 (specifically MK-7 form) directs that calcium to bones and teeth rather than soft tissues and arterial walls. Taking high-dose D3 without K2 over time carries real cardiovascular risk. Always take them together.
            </p>
            <p className="text-xs text-black/40">Dose: 2,000–5,000 IU D3 daily depending on blood levels. Test your 25(OH)D and target 50–70 ng/mL. 100–200mcg MK-7 K2 alongside.</p>
          </div>

          <SubHead title="B-Complex in Bioactive Forms" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              The standard B vitamins in most supplements — folic acid and cyanocobalamin — require enzymatic conversion to their active forms. People with MTHFR gene variants (40–60% of the population) convert these inefficiently, meaning much of what they take is unavailable.
            </p>
            <p>
              What you want: methylcobalamin (B12), methylfolate or Quatrefolic (B9), and P5P (pyridoxal-5-phosphate) for B6 — the active, ready-to-use forms that bypass the conversion step.
            </p>
            <p>
              This is one of the reasons I moved to <strong className="text-black/90">IM8 Daily Ultimate Essentials PRO</strong> as my daily foundation. The PRO formula uses methylcobalamin at 200mcg, P5P for B6, and Quatrefolic for folate — alongside 90+ other ingredients including CoQ10, spore-based probiotics, electrolytes, MSM, amino acids, saffron extract, and a complete greens complex. No proprietary blends. Full label transparency.
            </p>
            <p><AffilLink href="https://im8health.com/thrive10" label="Shop IM8 Daily Ultimate Essentials PRO — Use discount code THRIVE10" /></p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Layer 2 */}
        <section data-testid="section-layer2">
          <SectionHeader icon={<Zap className="w-5 h-5" />} title="Layer 2: System Support" />

          <SubHead title="Creatine Monohydrate" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Creatine has more peer-reviewed research behind it than almost any other supplement in existence — and most people still think of it as just a gym supplement.
            </p>
            <p>
              The cognitive data alone makes it worth taking regardless of whether you train. A 2023 double-blind trial in sleep-deprived subjects found that 5g creatine improved working memory accuracy compared to placebo. A 2022 umbrella review of 53 randomized controlled trials confirmed approximately 7% improvements in strength measures. Research in older adults consistently shows meaningful preservation of both muscle mass and cognitive function.
            </p>
            <p>
              <strong className="text-black/90">Form:</strong> Creatine monohydrate only. Creatine HCL, buffered creatine, and similar forms offer no demonstrated advantage and cost more. Monohydrate has the research, the safety record, and the price.
            </p>
            <p><AffilLink href="https://organika.com/?rfsn=8403940.a276a1f" label="Shop Organika Creatine — Use discount code EDEN_25" /></p>
            <p className="text-xs text-black/40">Dose: 5g daily for muscle performance. 10g daily if your primary goal is brain health — emerging research supports the higher dose for neurological benefits specifically.</p>
          </div>

          <SubHead title="Gut Health Protocol" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              The problem with most probiotic supplements is survival. Standard Lactobacillus and Bifidobacterium strains are fragile — they're largely destroyed by stomach acid before reaching the colon. This is why many people report "not feeling anything" from probiotics.
            </p>
            <p>
              <strong className="text-black/90">Spore-based probiotics</strong> are different. Bacillus strains produce an endospore — a protective shell that survives stomach acid, heat, and antibiotics, reaching the colon intact and actually colonizing.
            </p>
            <p>
              <strong className="text-black/90">Just Thrive</strong> is the standalone probiotic I recommend. Specifically formulated around spore-based strains with published clinical research on survival rates and gut colonization.
            </p>
            <p><AffilLink href="https://justthrivehealth.com" label="Shop Just Thrive — Use discount code THRIVETOOLS" /></p>
          </div>

          <SubHead title="CoQ10" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Coenzyme Q10 is essential for mitochondrial function — a key component of the electron transport chain that produces ATP in every cell. CoQ10 production declines with age, and statin drugs deplete it significantly.
            </p>
            <p>
              At 100mg or above, CoQ10 has consistent clinical support for cardiovascular function and cellular energy production. Below that, you're in token territory. Ubiquinol is the reduced, active form and is better absorbed than ubiquinone — particularly relevant for older adults.
            </p>
            <p>
              CoQ10 is one of the reasons I value IM8's formula — 100mg is a clinically meaningful dose, and most all-in-one products either skip it or include 10–20mg.
            </p>
            <p><AffilLink href="https://im8health.com/thrive10" label="Shop IM8 Daily Ultimate Essentials PRO — Use discount code THRIVE10" /></p>
          </div>

          <SubHead title="Adaptogens: The Tonic Herb Protocol" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              I've been working with tonic herbs for over a decade — trained in Daoist herbalism with Truth Calkins. These plants are the backbone of my daily protocol.
            </p>
            <div className="space-y-3 mt-2">
              {[
                { herb: "Reishi (Ganoderma lucidum)", desc: "I've taken reishi every day for over 10 years. The research supports immunomodulation, cortisol regulation, liver support, and anti-inflammatory activity through triterpenoids. The tonic herb I'd recommend first for anyone dealing with chronic stress." },
                { herb: "Lion's Mane (Hericium erinaceus)", desc: "Contains hericenones and erinacines that stimulate NGF and BDNF production — both critical for neuroplasticity, memory, and mood. Human trials show improvements in mild cognitive impairment. The most clinically researched mushroom for brain health." },
                { herb: "Cordyceps (CS-4 strain)", desc: "Mitochondrial support and oxygen utilization. Research demonstrates improvements in VO2 max, endurance, and ATP production. Particularly relevant for fatigue or training adaptation." },
                { herb: "Schisandra (Schisandra chinensis)", desc: "Adaptogen par excellence for adrenal support and stress resilience. Liver protective, cortisol modulating, and uniquely supportive of both energy and calm simultaneously." },
                { herb: "Astragalus", desc: "Immune modulation and telomere support. TA-65, the most researched telomerase activator in human trials, is derived from astragalus. Daily use over time is associated with meaningful immune and longevity markers." },
              ].map((item, i) => (
                <div key={i} className="card-glass rounded-xl p-4" data-testid={`herb-card-${i}`}>
                  <p className="font-semibold text-black/90 text-sm mb-1">{item.herb}</p>
                  <p className="text-black/65 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-2">
              <strong className="text-black/90">For all mushrooms and tonic herbs — quality is everything.</strong> Most products use mycelium grown on grain, which is mostly starch with minimal active compounds. You want fruiting body only, dual-extracted (both water and alcohol extraction to capture the full compound spectrum).
            </p>
            <p>
              <strong className="text-black/90">Hyperion Herbs</strong> is my go-to. Reishi at 2% triterpenes and 12% polysaccharides, fruiting body only, dual-extracted.
            </p>
            <p><AffilLink href="https://hyperionherbs.com" label="Shop Hyperion Herbs — Use discount code EDEN10" /></p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Layer 3 */}
        <section data-testid="section-layer3">
          <SectionHeader icon={<FlaskConical className="w-5 h-5" />} title="Layer 3: Longevity Protocols" />

          <SubHead title="NAD+ Precursors (NMN / NR)" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              NAD+ levels decline approximately 50% between ages 20 and 50 — a decline directly associated with the cellular hallmarks of aging. NMN and NR are both direct precursors to NAD+ with human trial data showing they increase circulating NAD+ levels meaningfully.
            </p>
            <p>
              <strong className="text-black/90">IM8 Daily Ultimate Longevity</strong> contains 300mg pharmaceutical-grade NMN alongside 10mg PQQ in its NMN NAD+ Energy Booster complex. It also includes a triple senolytic complex (trans-resveratrol 250mg, quercetin 250mg, fisetin 100mg), dihydroberberine, spermidine for autophagy activation, and glycine and taurine at clinical doses. The most complete longevity formula I've found.
            </p>
            <p><AffilLink href="https://im8health.com/thrive10" label="Shop IM8 Daily Ultimate Longevity — Use discount code THRIVE10" /></p>
            <p className="text-xs text-black/40">Standalone NMN dose: 500–1000mg daily, taken in the morning. Sublingual delivery may improve absorption.</p>
          </div>

          <SubHead title="Berberine" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Berberine activates AMPK — the cellular energy sensor that responds to caloric restriction — and is one of the most extensively studied compounds for metabolic health. Human trials show meaningful reductions in fasting blood glucose, HbA1c, and LDL cholesterol. It's also anti-inflammatory, antimicrobial, and supports gut microbiome diversity.
            </p>
            <p className="card-glass rounded-xl p-4 text-sm">
              <strong className="text-black/90">Note:</strong> Berberine has real drug interactions, particularly with blood thinners and diabetes medications. Don't take it alongside those without consulting your doctor.
            </p>
            <p className="text-xs text-black/40">Dose: 500mg standard berberine 2–3x daily with meals, or 100mg dihydroberberine (equivalent effect at lower dose). Cycle it — 8–12 weeks on, 4 weeks off.</p>
          </div>

          <SubHead title="Urolithin A" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Urolithin A is the most potent known activator of mitophagy — the cellular process that clears damaged mitochondria and replaces them with healthy ones. This is one of the core mechanisms of cellular aging.
            </p>
            <p>
              Only about 40% of people have gut microbiomes that produce urolithin A efficiently from food (pomegranates, walnuts). For everyone else, supplementation is the practical path. Human trials show improvements in muscle strength, endurance, and mitochondrial function in older adults.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Layer 4 */}
        <section data-testid="section-layer4">
          <SectionHeader icon={<ShieldCheck className="w-5 h-5" />} title="Layer 4: Advanced Tools" />

          <SubHead title="Hydrogen Water" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Molecular hydrogen (H₂) is a selective antioxidant that specifically neutralizes the most cytotoxic reactive oxygen species — particularly hydroxyl radicals — while leaving beneficial oxidative processes intact. Its small size allows it to cross the blood-brain barrier and mitochondrial membrane, something most antioxidants cannot do. Over 100 clinical studies support benefits for oxidative stress reduction, metabolic health, athletic recovery, and cognitive function.
            </p>
            <p><strong className="text-black/90">Piurify</strong> uses SPE/PEM technology for clean, high-concentration H₂ output.</p>
            <p><AffilLink href="https://www.piurify.com/?sca_ref=4509873.CyVUQonn5r" label="Shop Piurify Water Hydrogenator — Use discount code THRIVE10" /></p>
          </div>

          <SubHead title="Red Light Therapy (Photobiomodulation)" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Red and near-infrared light (630–850nm range) penetrates tissue and stimulates cytochrome c oxidase in the mitochondrial membrane — directly enhancing cellular energy production and accelerating tissue repair. The research base is substantial: wound healing, inflammation reduction, skin collagen synthesis, muscle recovery, cognitive function, and sleep quality all have clinical trial support.
            </p>
            <div className="space-y-2">
              <p><AffilLink href="https://joovv.com" label="Shop Joovv — Use discount code THRIVETOOLS" /></p>
              <p><AffilLink href="https://mitopro.com" label="Shop Mito Red Light (facial masks)" /></p>
              <p><AffilLink href="https://redtherapy.com" label="Shop RedTherapy — Use discount code THRIVETOOLS" /></p>
            </div>
          </div>

          <SubHead title="Transcranial Photobiomodulation (Vielight Neuro)" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Applying near-infrared light directly to the brain through transcranial and intranasal devices. Published clinical trials cover concussion recovery, cognitive decline, Alzheimer's, and deepened meditation states. Vielight Neuro is the only brand with published peer-reviewed clinical research in this category.
            </p>
            <p><AffilLink href="https://vielight.com" label="Shop Vielight Neuro — Use discount code THRIVETOOLS" /></p>
          </div>

          <SubHead title="Ceremonial Cacao as Daily Plant Medicine" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Theobromine, anandamide (and its FAAH inhibitors), PEA, magnesium, flavanols, and L-tryptophan make ceremonial cacao one of the most multifaceted mood and cognitive tools available without a prescription. Longer-lasting than caffeine, non-cortisol-spiking, and heart-opening in a way that's hard to quantify but consistently reported.
            </p>
            <p>
              The ORAC score of 95,000 per 100g makes it one of the most antioxidant-dense foods on the planet. <strong className="text-black/90">Koracao</strong> sources heirloom criollo beans from Peruvian and Colombian indigenous communities.
            </p>
            <p><AffilLink href="https://koracao.com/THRIVE33" label="Shop Koracao Ceremonial Cacao — Use discount code EDENKAWTHARLARAKI123" /></p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Summary */}
        <section data-testid="section-summary">
          <SectionHeader icon={<Leaf className="w-5 h-5" />} title="The Stack in Summary" />
          <div className="space-y-4">
            {[
              { label: "Daily non-negotiables", items: ["IM8 Daily Ultimate Essentials PRO (foundation)", "BiOptimizers Magnesium Breakthrough (evening)", "AquaOmega omega-3 (DHA-forward)", "Tonic herb protocol — Reishi, Lion's Mane, Cordyceps, Schisandra, Astragalus", "Creatine 5–10g", "Ceremonial cacao ritual"] },
              { label: "Gut health", items: ["Just Thrive spore-based probiotics", "Diverse prebiotic fiber from whole food sources"] },
              { label: "Longevity layer (cycled)", items: ["IM8 Daily Ultimate Longevity (NMN 300mg, senolytics, dihydroberberine, spermidine)", "Additional standalone NMN 500–1000mg if desired", "Berberine (cycled 8–12 weeks on/off)", "Urolithin A"] },
              { label: "Advanced tools", items: ["Red light therapy (Joovv panels)", "Hydrogen water (Piurify)", "Vielight Neuro for meditation and cognitive support"] },
            ].map((group, i) => (
              <div key={i} className="card-glass rounded-xl p-5" data-testid={`summary-group-${i}`}>
                <p className="font-semibold text-black/90 text-sm mb-2">{group.label}</p>
                <ul className="space-y-1.5">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-black/65">
                      <span className="mt-1 flex-shrink-0 w-3.5 h-3.5 rounded-full flex items-center justify-center text-white text-[10px]" style={{ background: "linear-gradient(135deg,#e8956d,#c4622d)" }}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* What I Don't Take */}
        <section data-testid="section-dont-take">
          <SectionHeader icon={<User className="w-5 h-5" />} title="What I Don't Take (And Why)" />
          <div className="space-y-3">
            {[
              { label: "Melatonin daily", reason: "Exogenous melatonin suppresses your body's own production over time. Reserve it for jet lag at low doses (0.5mg). Not a daily supplement." },
              { label: "Collagen", reason: "Overmarketed for the biohacking audience. The peptides are largely broken down in digestion before reaching target tissues. Marine collagen from a clean source is fine as food; I don't prioritize it as a supplement." },
              { label: "Most proprietary blend products", reason: "If I can't verify what's in it and at what dose, I don't take it." },
              { label: "More than I need", reason: "The goal isn't the most impressive supplement stack. It's the minimum effective protocol that covers real gaps. Everything else is noise." },
            ].map((item, i) => (
              <div key={i} className="card-glass rounded-xl p-5" data-testid={`dont-take-${i}`}>
                <p className="font-semibold text-black/90 text-sm mb-1">{item.label}</p>
                <p className="text-black/65 text-sm leading-relaxed">{item.reason}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* FAQ */}
        <section data-testid="section-faq">
          <h2 className="font-display text-2xl font-bold text-black mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What supplements should I start with as a beginner?", a: "Start with layer 1: magnesium glycinate, vitamin D3 + K2, omega-3s in triglyceride form, and a B-complex in bioactive forms (or an all-in-one like IM8 that covers all of these). Get a basic blood panel to confirm deficiencies before going further." },
              { q: "Is it safe to take all of these together?", a: "Most foundational supplements have excellent safety profiles and no significant interactions. The exceptions are berberine (drug interactions), high-dose vitamin D without K2, and anything serotonergic. Always consult your doctor if you're on medications." },
              { q: "How long before I feel a difference?", a: "Magnesium: 1–2 weeks for sleep and anxiety. Omega-3s: 4–8 weeks for inflammation markers. Tonic herbs: 4–6 weeks for noticeable adaptation effects. Creatine: 1–2 weeks for energy, longer for full saturation. NMN and longevity compounds: these are long-game plays — months to years." },
              { q: "Do I need all of this?", a: "No. Start with layer 1, stay consistent for 90 days, and assess. Most people get 80% of the benefit from the foundation supplements alone. The longevity and advanced layers are for people who already have the basics dialed in." },
              { q: "How do I know if a supplement is working?", a: "Track biomarkers before and after — not just how you feel. Blood work every 6 months minimum. Sleep tracking, HRV data, and cognitive benchmarks give you objective data to work with. Subjective experience matters but it's unreliable on its own." },
              { q: "What is the best creatine dose for brain health?", a: "Emerging research supports 10g daily for neurological and cognitive benefits specifically — higher than the standard 5g muscle performance dose. If cognitive function is your primary goal, the higher dose is worth considering. Creatine monohydrate at either dose is safe and well-tolerated." },
            ].map((item, i) => (
              <div key={i} className="card-glass rounded-xl p-5 space-y-2" data-testid={`faq-${i}`}>
                <h3 className="font-semibold text-black text-base">{item.q}</h3>
                <p className="text-black/65 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Author bio */}
        <div className="card-glass rounded-2xl p-6 space-y-2 text-center">
          <p className="text-black/60 text-sm leading-relaxed italic">
            Eden Laraki is the founder of ThriveTools.co — a science-backed wellness and biohacking platform covering supplements, tonic herbs, breathwork, plant medicine, and cognitive optimization, built from 14 years of personal research and self-experimentation.
          </p>
          <a href="https://thrivetools.co" target="_blank" rel="noopener noreferrer" className="text-[#c4622d] hover:text-[#8b3a1a] transition-colors text-sm font-medium underline">
            → Explore ThriveTools.co
          </a>
        </div>

        <p className="text-center text-black/35 text-xs italic" data-testid="text-disclosure">
          Disclosure: This post contains affiliate links to brands I personally use and recommend. I receive a commission if you purchase through my links. My recommendations are based on genuine belief in the products — I only partner with brands whose formulations I've researched and trust.
        </p>

      </article>
    </PageLayout>
  );
}
