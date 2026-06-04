import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FlaskConical, ShieldCheck, Leaf, Zap, AlertTriangle, BookOpen } from "lucide-react";

const heroImg = "/images/microplastics-brain.jpg";

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-[#c4622d]">{icon}</span>
      <h2 className="font-display text-2xl font-bold text-black">{title}</h2>
    </div>
  );
}

function AffilLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-[#c4622d] hover:text-[#8b3a1a] transition-colors font-medium underline text-sm"
    >
      {label} <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
    </a>
  );
}

function PubLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#c4622d] hover:text-[#8b3a1a] transition-colors underline"
    >
      {label}
    </a>
  );
}

export default function MicroplasticsBrainGuide() {
  return (
    <PageLayout
      showShare
      title="Microplastics Are in Your Brain. Here's What You Can Actually Do About It."
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: "Microplastics in Your Brain: The Evidence-Based Protocol (2026) | Thrive Tools",
        description: "A 2025 Nature Medicine study found microplastics in human brain tissue — 50% more than 2016 samples. Eden Laraki breaks down what the science actually says and the evidence-based steps you can take to reduce exposure and support your body's natural clearance.",
        canonical: "/blog/microplastics-brain-protocol-2026",
        ogType: "article",
        datePublished: "2026-05-29",
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-10">

        {/* Badges */}
        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border border-[#c4622d]/25 rounded-full px-3 py-0.5 text-xs">
            Science Deep Dive
          </Badge>
          <Badge className="bg-white/5 text-black/50 border border-white/10 rounded-full px-3 py-0.5 text-xs">
            May 29, 2026
          </Badge>
        </div>

        {/* Hero image */}
        <div className="card-glass rounded-2xl overflow-hidden" data-testid="img-hero-microplastics">
          <img
            src={heroImg}
            alt="Microplastics research — brain model under magnifying glass in laboratory"
            loading="eager"
            decoding="async"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Intro */}
        <section data-testid="section-intro">
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Earlier this year I sat with this headline for a long time before writing about it.
            </p>
            <p>
              A study published in <em>Nature Medicine</em> by researchers at the University of New Mexico found that human brains contain measurable concentrations of micro and nanoplastics — predominantly polyethylene, in nanoscale shard-like fragments. The 2024 brain samples contained approximately 50% more plastic than the 2016 samples from the same study. The brains of individuals with dementia showed three to five times higher concentrations than those without.
            </p>
            <p>
              The internet, predictably, spiraled. "Microplastic influencers" appeared overnight. A clinic in the US began offering blood-cleaning procedures for $13,000. People threw out their black kitchen utensils. Detox supplement brands popped up faster than the research could validate them.
            </p>
            <p>
              I understand the panic. But panic is not a protocol.
            </p>
            <p>
              What I want to do in this article is tell you what the research actually says — including where it's strong, where it's preliminary, and where the wellness industry is already getting ahead of itself — and then give you the most evidence-grounded, practical steps for reducing your exposure and supporting your body's natural clearance mechanisms. No $13,000 blood cleanses. No overclaiming.
            </p>
            <div className="card-glass rounded-xl px-5 py-4 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
              <p className="text-black/75 text-sm font-medium">This is a real issue. It deserves a real response.</p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* What the Research Found */}
        <section data-testid="section-research">
          <SectionHeader icon={<FlaskConical className="w-5 h-5" />} title="What the Research Actually Found" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              The Nature Medicine study (Nihart et al., 2025) used pyrolysis gas chromatography–mass spectrometry — a sophisticated analytical technique — to detect micro and nanoplastics in human kidney, liver, and brain tissue from cadavers. The findings were striking in several ways:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 my-2">
              {[
                { stat: "30×", label: "Higher plastic in brain tissue than kidney or liver in some samples" },
                { stat: "50%", label: "More plastic in 2024 brain samples vs 2016 — suggesting ongoing bioaccumulation" },
                { stat: "3–5×", label: "Higher concentrations in brains of individuals with dementia vs controls" },
                { stat: "#1", label: "Polyethylene — the predominant polymer found, in nanoscale shard-like fragments" },
              ].map((item, i) => (
                <div key={i} className="card-glass rounded-xl p-5 text-center" data-testid={`stat-${i}`}>
                  <p className="font-display text-3xl font-bold text-[#c4622d] mb-1">{item.stat}</p>
                  <p className="text-black/55 text-xs leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
            <p>
              That last finding — the dementia correlation — is the one that stops people cold. And it should prompt serious attention, with the appropriate caveats.
            </p>
            <p>
              The study's authors themselves note that no causal relationship has been established. The dementia finding is a correlation. Scientists reviewing the study have emphasized that no strong direct evidence of health effects has yet been demonstrated at the observed levels. The German Federal Institute for Risk Assessment noted methodological limitations in sample preparation and detection. Multiple researchers called for independent replication with larger sample sizes.
            </p>
            <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
              <p className="text-black/70 text-sm leading-relaxed">
                <strong className="text-black/90">The honest position:</strong> Microplastics are in our brains, they are accumulating faster over time, and the possibility that chronic exposure contributes to neuroinflammation and neurodegenerative disease is biologically plausible and worth taking seriously. What we cannot say: that these concentrations are definitively causing harm at observed levels, or that any currently available intervention reverses accumulation in the brain.
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Sources */}
        <section data-testid="section-sources">
          <SectionHeader icon={<AlertTriangle className="w-5 h-5" />} title="Where Microplastics Come From" />
          <p className="text-black/70 leading-relaxed mb-5">Understanding the sources helps you prioritize where to reduce exposure. The entry points are more numerous than most people realize.</p>
          <div className="space-y-3">
            {[
              { source: "Drinking water", detail: "Both tap water and bottled water contain microplastics — and bottled water is not necessarily cleaner. Studies have found that bottled water can contain higher concentrations than tap, partly due to plastic leaching from the bottle itself, particularly under heat or UV exposure." },
              { source: "Food packaging and preparation", detail: "Heating food in plastic containers dramatically accelerates leaching. Plastic cutting boards shed microplastics during chopping. Plastic tea bags release millions of microplastic particles into your cup when steeped in hot water." },
              { source: "Ultra-processed foods", detail: "Consistently show higher microplastic contamination than whole foods — both from processing equipment and from packaging." },
              { source: "Air inhalation", detail: "A 2019 study estimated humans may inhale between 74,000 and 121,000 microplastic particles annually. Indoor air typically has higher concentrations than outdoor air due to synthetic textiles, carpeting, and dust accumulation." },
              { source: "Sea salt and shellfish", detail: "Shellfish like mussels and oysters, consumed whole including the digestive system, carry particularly high microplastic loads. Sea salt tested across multiple studies shows consistent contamination." },
              { source: "Personal care products", detail: "Including some toothpastes, exfoliants, and oral care products — identified as direct sources of microplastic ingestion through mouth contact." },
            ].map((item, i) => (
              <div key={i} className="card-glass rounded-xl p-5" data-testid={`source-${i}`}>
                <p className="font-semibold text-black/90 text-sm mb-1">{item.source}</p>
                <p className="text-black/65 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* Mechanisms */}
        <section data-testid="section-mechanisms">
          <SectionHeader icon={<FlaskConical className="w-5 h-5" />} title="What Microplastics Do in the Body" />
          <p className="text-black/70 leading-relaxed mb-5">The mechanisms by which microplastics may cause harm operate through several pathways, each with varying levels of research support.</p>
          <div className="space-y-3">
            {[
              { mechanism: "Oxidative stress", evidence: "Strong", detail: "The most consistently documented mechanism. Microplastic particles trigger reactive oxygen species production, damaging cells, mitochondria, and DNA — the same pathway implicated in cardiovascular disease, cancer, and neurodegeneration." },
              { mechanism: "Chronic inflammation", evidence: "Strong", detail: "Particles that lodge in tissue activate inflammatory responses — chronic, low-grade inflammation that underlies most modern chronic disease." },
              { mechanism: "Endocrine disruption", evidence: "Strong", detail: "Phthalates and BPA — chemical additives in plastics — are well-established endocrine disruptors affecting hormone regulation, reproductive health, thyroid function, and metabolic processes." },
              { mechanism: "Cardiovascular accumulation", evidence: "Strong", detail: "A landmark study in the New England Journal of Medicine found microplastics in carotid artery plaque samples were associated with significantly increased risk of cardiovascular events including stroke and heart attack — one of the most concerning outcome findings in the field." },
              { mechanism: "Gut microbiome disruption", evidence: "Emerging", detail: "Microplastic exposure has been shown to affect microbial diversity, gut barrier integrity, and inflammatory balance — connecting to immune function, mood regulation via the gut-brain axis, and metabolic health." },
              { mechanism: "Neurological effects", evidence: "Preliminary", detail: "The dementia correlation from the Nature Medicine study, combined with animal research showing more severe neurological effects from microplastic exposure in older animals, makes this the highest-priority area for ongoing research. It does not yet constitute proof." },
            ].map((item, i) => (
              <div key={i} className="card-glass rounded-xl p-5" data-testid={`mechanism-${i}`}>
                <div className="flex items-center gap-3 mb-1.5">
                  <p className="font-semibold text-black/90 text-sm">{item.mechanism}</p>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${item.evidence === "Strong" ? "bg-green-500/15 text-green-700" : item.evidence === "Emerging" ? "bg-amber-500/15 text-amber-700" : "bg-black/8 text-black/40"}`}>
                    {item.evidence}
                  </span>
                </div>
                <p className="text-black/65 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* What Wellness Industry Gets Wrong */}
        <section data-testid="section-wellness-warning">
          <SectionHeader icon={<AlertTriangle className="w-5 h-5" />} title="What the Wellness Industry Is Getting Wrong" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              I need to say this clearly before giving you the protocol, because the microplastics panic is already spawning exactly the kind of exploitative wellness marketing that gives this industry a bad name.
            </p>
            <div className="space-y-3">
              {[
                { claim: "$13,000 blood-cleaning (apheresis) procedures", reality: "No published evidence of efficacy for microplastic removal in healthy individuals." },
                { claim: "\"Microplastic testing panels\" from clinics", reality: "There is currently no validated method to directly measure retained plastic levels in living humans in a clinically meaningful way. These tests don't have established clinical validity." },
                { claim: "Supplements that \"remove microplastics from the brain\"", reality: "No supplement has demonstrated the ability to cross the blood-brain barrier and selectively extract plastic particles. Anyone selling that is selling fear, not science." },
              ].map((item, i) => (
                <div key={i} className="card-glass rounded-xl p-5 border-l-4 border-red-400/40" data-testid={`false-claim-${i}`}>
                  <p className="font-semibold text-black/90 text-sm mb-1">❌ &nbsp;{item.claim}</p>
                  <p className="text-black/65 text-sm leading-relaxed">{item.reality}</p>
                </div>
              ))}
            </div>
            <p>
              What we do have evidence for is more modest and more useful: reducing ongoing exposure, supporting the body's natural detoxification and elimination systems, and reducing the downstream effects of plastic exposure — oxidative stress, inflammation, and gut disruption — through well-evidenced interventions.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* The Protocol */}
        <section data-testid="section-protocol">
          <SectionHeader icon={<ShieldCheck className="w-5 h-5" />} title="The Evidence-Based Microplastics Protocol" />

          {/* Step 1 */}
          <div className="mb-8" data-testid="protocol-step-1">
            <h3 className="font-display text-xl font-bold text-black mb-4">Step 1: Reduce Exposure at the Source</h3>
            <p className="text-black/70 leading-relaxed mb-5">This is where the highest-leverage interventions are. Every unit of plastic that doesn't enter your body doesn't need to be cleared.</p>
            <div className="space-y-3">
              {[
                { action: "Filter your water with reverse osmosis", detail: "RO filtration is the gold standard — it removes the widest range of contaminants including microplastics, fluoride, heavy metals, and chemical additives that standard filters leave behind. The single most evidence-supported intervention in this guide.", link: { href: "https://www.waterdropfilter.ca/?ref=", label: "Shop Waterdrop Reverse Osmosis Filter" } },
                { action: "Stop heating food in plastic", detail: "Transfer food to glass or ceramic before microwaving. Never pour boiling water into plastic containers. Replace plastic food storage with glass.", link: null },
                { action: "Switch to loose-leaf tea", detail: "Plastic tea bags release millions of microplastic particles per cup when steeped in hot water. Loose-leaf tea in a metal or ceramic infuser eliminates this entirely.", link: null },
                { action: "Reduce ultra-processed food consumption", detail: "The more food is processed and the more it contacts plastic in production, the higher its microplastic load. Whole foods from glass or paper packaging carry dramatically less plastic.", link: null },
                { action: "Replace plastic cutting boards with wood or glass", detail: "Plastic boards shed microplastics into food during chopping — a source most people don't think about.", link: null },
                { action: "Use a HEPA vacuum regularly", detail: "Indoor dust is a significant microplastic source. HEPA filtration captures particles that standard vacuums recirculate into the air.", link: null },
                { action: "Don't leave plastic bottles in heat or sun", detail: "UV exposure and heat dramatically accelerate plastic leaching from bottle materials.", link: null },
              ].map((item, i) => (
                <div key={i} className="card-glass rounded-xl p-5" data-testid={`step1-${i}`}>
                  <p className="font-semibold text-black/90 text-sm mb-1">{item.action}</p>
                  <p className="text-black/65 text-sm leading-relaxed mb-2">{item.detail}</p>
                  {item.link && <AffilLink href={item.link.href} label={item.link.label} />}
                </div>
              ))}
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-8" data-testid="protocol-step-2">
            <h3 className="font-display text-xl font-bold text-black mb-4">Step 2: Support Your Body's Natural Elimination Pathways</h3>
            <p className="text-black/70 leading-relaxed mb-5">Your liver, gut, kidneys, lungs, and skin are your primary detoxification systems. Supporting them with evidence-based interventions is how you help the body process and eliminate what plastic exposure brings in.</p>
            <div className="space-y-3">
              {[
                {
                  action: "Sweat regularly",
                  detail: "Research shows that sweating can facilitate elimination of BPA and phthalates — plastic-associated chemical compounds — at higher concentrations than achieved through urine alone. While sweat cannot physically expel plastic particles, the endocrine-disrupting chemicals associated with them can be mobilized through thermal stress. Sauna (infrared or traditional) and vigorous exercise are the primary tools here.",
                  link: null,
                },
                {
                  action: "Support gut integrity",
                  detail: "The gut microbiome plays a central role in how the body handles plastic exposure. Microplastics disrupt microbial diversity and gut barrier function. Spore-based probiotics — which actually survive digestion and colonize the colon — combined with diverse prebiotic fiber are the evidence-based foundation here.",
                  link: { href: "https://justthrivehealth.com", label: "Shop Just Thrive Probiotics — Use discount code THRIVETOOLS" },
                },
                {
                  action: "Prioritize liver support",
                  detail: "The liver is the body's primary detoxification organ. Cruciferous vegetables (broccoli, Brussels sprouts, cauliflower) activate Nrf2 — the master cellular defense pathway that regulates detoxification enzymes. Sulfur-containing foods (garlic, onions, eggs) support glutathione production — your body's primary endogenous antioxidant and detoxifier.",
                  link: null,
                },
              ].map((item, i) => (
                <div key={i} className="card-glass rounded-xl p-5" data-testid={`step2-${i}`}>
                  <p className="font-semibold text-black/90 text-sm mb-1">{item.action}</p>
                  <p className="text-black/65 text-sm leading-relaxed mb-2">{item.detail}</p>
                  {item.link && <AffilLink href={item.link.href} label={item.link.label} />}
                </div>
              ))}
            </div>
          </div>

          {/* Step 3 */}
          <div data-testid="protocol-step-3">
            <h3 className="font-display text-xl font-bold text-black mb-4">Step 3: Counteract the Downstream Effects</h3>
            <p className="text-black/70 leading-relaxed mb-5">Even with reduced exposure and strong elimination support, some ongoing microplastic exposure is unavoidable in the modern world. This layer targets the biological mechanisms through which microplastic exposure causes harm — primarily oxidative stress and inflammation.</p>
            <div className="space-y-3">
              {[
                {
                  supplement: "Chlorella",
                  detail: "Chlorella vulgaris has been shown in research to bind to microplastics through exopolysaccharides, with PET plastic removal rates documented in laboratory settings. The evidence for direct microplastic binding in humans is preliminary — most of the binding data comes from aquatic environment research — but the mechanism is plausible and the safety profile is excellent. Cracked-cell chlorella taken on an empty stomach is the standard approach.",
                  caveat: "Preliminary human data",
                  link: { href: "https://energybits.com", label: "Shop ENERGYbits — Use discount code THRIVETOOLS-10" },
                },
                {
                  supplement: "NAC (N-Acetylcysteine)",
                  detail: "NAC is a precursor to glutathione — your body's master antioxidant that plays a central role in cellular detoxification. It directly addresses the oxidative stress mechanism through which microplastics cause cellular damage. NAC is well-studied, widely available, and has a strong safety profile.",
                  caveat: "Strong evidence for oxidative stress",
                  link: null,
                },
                {
                  supplement: "Reishi mushroom",
                  detail: "Its well-documented anti-inflammatory and liver-protective properties make it directly relevant to the two primary mechanisms of microplastic toxicity. The triterpenoids in Reishi support liver detoxification pathways and modulate the inflammatory response.",
                  caveat: "Strong evidence for inflammation",
                  link: { href: "https://hyperionherbs.com", label: "Shop Hyperion Herbs Reishi — Use discount code EDEN10" },
                },
                {
                  supplement: "High-EPA omega-3s",
                  detail: "EPA specifically drives prostaglandin metabolism and cytokine regulation — directly counteracting the chronic inflammatory response associated with microplastic exposure. AquaOmega's vegan algae softgels provide high-DHA plant-based omega-3 in triglyceride form — the most bioavailable format.",
                  caveat: "Strong evidence for inflammation",
                  link: { href: "https://aquaomega.refr.cc/default/u/thrivetoolsco?s=rp&t=cp", label: "Shop AquaOmega Vegan Omega-3" },
                },
                {
                  supplement: "Magnesium",
                  detail: "Oxidative stress depletes magnesium, and magnesium deficiency amplifies susceptibility to oxidative damage. BiOptimizers Magnesium Breakthrough uses 7 bioavailable forms to cover the full spectrum of magnesium functions — including its role as a cofactor in glutathione synthesis and antioxidant enzyme activity.",
                  caveat: "Strong evidence for oxidative stress",
                  link: { href: "https://bioptimizers.com", label: "Shop BiOptimizers Magnesium Breakthrough — Use discount code THRIVETOOLS" },
                },
                {
                  supplement: "Antioxidant-rich whole foods",
                  detail: "Berries, cruciferous vegetables, turmeric with black pepper, green tea, and dark leafy greens all contribute to the antioxidant capacity that buffers against microplastic-driven oxidative damage. This is foundational — supplements sit on top of this, not in place of it.",
                  caveat: "Strong evidence",
                  link: null,
                },
              ].map((item, i) => (
                <div key={i} className="card-glass rounded-xl p-5 mb-3" data-testid={`step3-${i}`}>
                  <div className="flex items-center gap-3 mb-1.5">
                    <p className="font-semibold text-black/90 text-sm">{item.supplement}</p>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#c4622d]/10 text-[#8b3a1a]">{item.caveat}</span>
                  </div>
                  <p className="text-black/65 text-sm leading-relaxed mb-2">{item.detail}</p>
                  {item.link && <AffilLink href={item.link.href} label={item.link.label} />}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Honest Caveats */}
        <section data-testid="section-caveats">
          <SectionHeader icon={<Zap className="w-5 h-5" />} title="The Honest Caveats" />
          <p className="text-black/70 leading-relaxed mb-5">Here is what the evidence does and doesn't support for everything above.</p>
          <div className="space-y-3">
            {[
              { item: "Water filtration with reverse osmosis", strength: "Strongest", detail: "Demonstrably removes microplastics from drinking water. The single most evidence-supported intervention in this guide." },
              { item: "Avoiding heating food in plastic", strength: "Strong", detail: "Strong evidence for reducing leaching of plastic-associated chemicals into food. The connection to microplastic particle ingestion specifically is more indirect but the overall reduction in plastic exposure is well-supported." },
              { item: "Sweating for chemical elimination", strength: "Moderate", detail: "Specifically for BPA and phthalates. The physical particle elimination route through sweat is not established." },
              { item: "Chlorella microplastic binding", strength: "Preliminary", detail: "Has laboratory evidence and a plausible mechanism but limited direct human trial data specifically for microplastic reduction. Included because the mechanism is real and the safety profile allows it." },
              { item: "NAC, Reishi, omega-3s, and magnesium", strength: "Strong (indirect)", detail: "Have strong evidence for addressing oxidative stress and inflammation — the downstream mechanisms of microplastic harm — but not for microplastic removal specifically. They belong in this protocol for what they do, not for claims they can't yet make." },
            ].map((item, i) => (
              <div key={i} className="card-glass rounded-xl p-5" data-testid={`caveat-${i}`}>
                <div className="flex items-center gap-3 mb-1">
                  <p className="font-semibold text-black/90 text-sm">{item.item}</p>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${item.strength === "Strongest" || item.strength === "Strong" ? "bg-green-500/15 text-green-700" : item.strength === "Moderate" || item.strength === "Strong (indirect)" ? "bg-amber-500/15 text-amber-700" : "bg-black/8 text-black/40"}`}>
                    {item.strength}
                  </span>
                </div>
                <p className="text-black/65 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="card-glass rounded-xl p-5 mt-4 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
            <p className="text-black/80 text-sm font-semibold leading-relaxed">
              Nothing in this article, or currently available to consumers, has demonstrated the ability to remove microplastics from brain tissue. If you see that claim anywhere, walk away.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Where This Is Going */}
        <section data-testid="section-future">
          <SectionHeader icon={<Leaf className="w-5 h-5" />} title="Where This Is Going" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              The science is moving fast. Microplastics as a measured health marker — tracked alongside cholesterol or inflammatory markers — is becoming a real possibility as detection methods mature. The Global Wellness Institute has identified microplastic exposure as a defining health challenge of our time, and institutional investment in understanding the full health picture is accelerating.
            </p>
            <p>
              What we know now is enough to act on — not with panic, but with the kind of steady, informed attention that actually moves the needle.
            </p>
            <p>
              The protocol is not complicated. Filter your water, reduce your plastic contact with food, sweat regularly, eat a diverse antioxidant-rich diet, support your gut and liver, and use targeted supplementation to buffer the oxidative and inflammatory effects of unavoidable exposure.
            </p>
            <div className="card-glass rounded-xl px-5 py-4">
              <p className="text-black/80 text-sm font-medium">That's not nothing. That's a lot, actually, if you do it consistently.</p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* FAQ */}
        <section data-testid="section-faq">
          <h2 className="font-display text-2xl font-bold text-black mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Are microplastics in everyone's brain?", a: "Based on the Nature Medicine study, microplastics appear to be present in human brain tissue broadly across the population studied — not limited to specific demographics. Plastic concentration was not significantly influenced by age, sex, race, or ethnicity, though concentrations were higher in more recent (2024) samples than older (2016) ones, suggesting ongoing accumulation." },
              { q: "Do microplastics cause dementia?", a: "No causal relationship has been established. The Nature Medicine study found higher microplastic concentrations in the brains of individuals with dementia compared to controls — a correlation that warrants serious research attention but does not prove causation. Scientists have explicitly cautioned against interpreting this as a cause-and-effect relationship based on current evidence." },
              { q: "Does bottled water contain microplastics?", a: "Yes. Multiple studies have found microplastics in bottled water, sometimes at higher concentrations than tap water. Plastic leaching from the bottle material itself, particularly under heat or UV exposure, is a contributing factor. Reverse osmosis filtered tap water in a glass or stainless steel container is the cleaner alternative." },
              { q: "Can you detox microplastics from your brain?", a: "Not with any currently available consumer intervention. No supplement or therapy has demonstrated the ability to cross the blood-brain barrier and selectively remove plastic particles. Be skeptical of any product making this claim. The most evidence-based approach is reducing ongoing exposure and supporting the body's natural processing of plastic-associated toxins." },
              { q: "Does sweating help remove microplastics?", a: "Sweating has evidence for facilitating elimination of plastic-associated chemicals like BPA and phthalates — at higher concentrations than urine in some studies. It does not physically expel plastic particles. Regular sauna use or vigorous exercise supports chemical detoxification through sweat but is not the same as microplastic removal." },
              { q: "Is reverse osmosis the best water filter for microplastics?", a: "Reverse osmosis is consistently rated as the most effective filtration method for microplastics, removing the widest range of particle sizes alongside other contaminants including fluoride and heavy metals. It is the filter type I use and recommend." },
              { q: "What foods have the most microplastics?", a: "Ultra-processed foods, shellfish (particularly those consumed whole like mussels and oysters), sea salt, beer, and foods heated or stored in plastic containers tend to have higher microplastic concentrations. Whole foods in glass or paper packaging carry significantly lower loads." },
            ].map((item, i) => (
              <div key={i} className="card-glass rounded-xl p-5 space-y-2" data-testid={`faq-${i}`}>
                <h3 className="font-semibold text-black text-base">{item.q}</h3>
                <p className="text-black/65 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* References */}
        <section data-testid="section-references">
          <SectionHeader icon={<BookOpen className="w-5 h-5" />} title="Research References" />
          <div className="card-glass rounded-xl p-5 space-y-3">
            {[
              { text: 'Nihart AJ, et al. "Bioaccumulation of microplastics in decedent human brains." ', journal: "Nature Medicine", year: "2025.", href: "https://www.nature.com/articles/s41591-024-03453-1" },
              { text: 'Marfella R, et al. "Microplastics and nanoplastics in atheromas and cardiovascular events." ', journal: "New England Journal of Medicine", year: "2024.", href: "https://pubmed.ncbi.nlm.nih.gov/38446676/" },
              { text: '"Microplastics and Nanoplastics in Health: Cellular Toxicity Mechanisms, Exposure Pathways, and Global Mitigation Strategies." ', journal: "PMC", year: "2025.", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12471361/" },
              { text: '"New scientific articles highlight potential link between microplastics in ultra-processed foods and brain health." ', journal: "EurekAlert / Brain Medicine", year: "May 2025.", href: "https://www.eurekalert.org/news-releases/1084276" },
              { text: '"The 2026 Levels Guide to Microplastics and Metabolic Health." ', journal: "Levels Health", year: "2026.", href: "https://www.levels.com/blog/levels-guide-microplastics" },
            ].map((ref, i) => (
              <p key={i} className="text-black/60 text-xs leading-relaxed" data-testid={`ref-${i}`}>
                {ref.text}<em>{ref.journal}</em>, {ref.year} <PubLink href={ref.href} label="↗" />
              </p>
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

        <p className="text-center text-black/35 text-xs italic" data-testid="text-disclaimer">
          This article is for educational purposes only and does not constitute medical advice. Always consult a qualified healthcare provider regarding your personal health situation.
        </p>

      </article>
    </PageLayout>
  );
}
