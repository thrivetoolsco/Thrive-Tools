import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Zap, ShieldCheck, BookOpen, Copy, Check, FlaskConical, Leaf, Brain, Heart } from "lucide-react";
import { useState } from "react";
import magBreakthroughImg from "@assets/1_bottle_of_Magnesium_Breakthrough_60caps_1773696417119.jpeg";

const SHOP_URL = "https://bioptimizers.com/shop/products/magnesium-breakthrough";
const DISCOUNT_CODE = "THRIVETOOLS";

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-[#c4622d]">{icon}</span>
      <h2 className="font-display text-2xl font-bold text-black">{title}</h2>
    </div>
  );
}

function OrganCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
      <p className="text-xs font-semibold uppercase tracking-wider text-[#c4622d] mb-2">{title}</p>
      <p className="text-black/70 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function FormCard({ name, body }: { name: string; body: string }) {
  return (
    <div className="card-glass rounded-2xl p-5 space-y-2">
      <p className="font-semibold text-black/90 text-sm">{name}</p>
      <p className="text-black/60 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function WhoCard({ group, body }: { group: string; body: string }) {
  return (
    <div className="card-glass rounded-xl p-4 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
      <p className="font-semibold text-black/85 text-sm mb-1">{group}</p>
      <p className="text-black/60 text-xs leading-relaxed">{body}</p>
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

export default function MagnesiumGuide() {
  return (
    <PageLayout showShare
      title="Magnesium: The Most Important Mineral You're Almost Certainly Deficient In"
      subtitle="Over 31% of the global population is magnesium deficient, and most people supplementing are still deficient because they're taking the wrong forms. Here's the complete science and the only magnesium supplement I personally recommend."
      seo={{
        title: "Magnesium Deficiency Guide: Types & Dosing | Thrive Tools",
        description: "Over 31% of people are magnesium deficient, and most take the wrong forms. The complete science: types, bioavailability, dosing, and the brand I recommend.",
        canonical: "/blog/magnesium-deficiency-supplement-guide",
        ogType: "article",
        datePublished: "2025-11-05",
      }}
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
            2026 Edition
          </Badge>
        </div>

        {/* Intro */}
        <section data-testid="section-intro">
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              There is one supplement I recommend to virtually everyone regardless of age, health status, training level, or existing supplement stack. Not creatine. Not omega-3. Not any tonic herb.
            </p>
            <p className="font-semibold text-black/85 text-lg">Magnesium.</p>
            <p>
              Not because it's trendy. Because the data on how widespread magnesium deficiency is, and how many health problems it silently drives, is more alarming than almost anything else in nutritional science. And because the vast majority of people who think they're supplementing magnesium adequately are still deficient because they're taking the wrong forms at the wrong doses.
            </p>
            <p>
              This article covers the full picture: why deficiency is so widespread, what it actually does to your health when left unaddressed, the critical difference between magnesium forms, and the only magnesium supplement I recommend after years of researching this category. For broader supplement context, see my{" "}
              <a href="/product-reviews/biohacking-supplements-2026" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">biohacking supplements guide</a>{" "}
              and my{" "}
              <a href="/product-reviews/biohacking-beginners-guide" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">beginners biohacking guide</a>.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Scale of Problem */}
        <section data-testid="section-scale">
          <SectionHeader icon={<FlaskConical className="w-5 h-5" />} title="The Scale of the Problem Nobody Is Talking About" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Magnesium is an essential mineral required for energy metabolism, glucose regulation, cardiovascular function, bone integrity, and neural activity. Despite its vital physiological roles, dietary magnesium deficiency remains a widespread and underrecognized global public health concern, with an estimated 2.4 billion people, or roughly 31% of the global population, failing to meet recommended magnesium intake levels.
            </p>
            <p>
              In the United States specifically, it is estimated that more than 40% of Americans do not consume enough magnesium in their diet.
            </p>
            <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#c4622d] mb-2">Let that land for a moment</p>
              <p className="text-black/70 text-sm leading-relaxed">
                Nearly half of all Americans are chronically under-supplying their body with a mineral involved in over 600 enzymatic reactions. This isn't a fringe deficiency. It's a public health crisis that barely gets mentioned.
              </p>
            </div>
            <p>
              This deficiency reflects multiple converging factors including modern dietary patterns low in whole grains and vegetables, soil nutrient depletion from intensive agriculture, food processing losses, aged populations, chronic diseases, and socioeconomic disparities.
            </p>
            <p>
              The soil depletion issue is worth understanding specifically. These foods could be high in magnesium if they're grown in soil that contains it. However, due to modern agricultural practices, most soils are low in magnesium. This means that even people eating a genuinely healthy diet rich in vegetables, nuts, and whole grains are receiving significantly less magnesium from those foods than the same foods would have provided 50 years ago. You cannot eat your way out of this problem through food alone in the current agricultural environment.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* What It Does */}
        <section data-testid="section-effects">
          <SectionHeader icon={<Brain className="w-5 h-5" />} title="What Magnesium Deficiency Actually Does to Your Health" />
          <div className="space-y-4 text-black/70 leading-relaxed mb-6">
            <p>
              Low magnesium status is associated with hypertension, type 2 diabetes, osteoporosis, migraines, depression, and chronic inflammation, whereas sufficient intake supports cardiometabolic resilience, skeletal strength, neurological stability, and healthy aging.
            </p>
            <p>Here is what the research shows happens to each major body system when magnesium is chronically insufficient:</p>
          </div>
          <div className="space-y-4">
            <OrganCard
              title="The Nervous System and Mental Health"
              body="Magnesium may be important for neurological health support. In humans, a low-magnesium diet is associated with higher risk of mental health issues and unhealthy stress responses. You need magnesium to support a healthy and balanced stress response. Stress and sleep deprivation may result in lower red blood cell magnesium levels, therefore being deficient can create a vicious cycle. Magnesium deficiency promotes excessive activation of the sympathetic nervous system through multiple mechanisms, by antagonizing calcium, it weakens the inhibitory effect on catecholamine release from the adrenal medulla and sympathetic nerve endings, leading to increased secretion of norepinephrine and epinephrine. In practical terms: if you feel wired, anxious, reactive to stress, or unable to wind down at the end of the day, magnesium deficiency is one of the first things worth investigating. The nervous system literally cannot regulate itself properly without adequate magnesium."
            />
            <OrganCard
              title="The Brain and Cognitive Function"
              body="A 2024 study published in the Journal of Neurorestoratology found an association between low magnesium levels and a higher risk of dementia, suggesting the mineral may play a role in cognitive aging. Magnesium is important for the production of serotonin, the happy hormone. Supplementing with a full spectrum magnesium product may help support cognitive function, mood balance, muscle recovery, and metabolism."
            />
            <OrganCard
              title="The Cardiovascular System"
              body="Research has found that magnesium plays an important role in heart health. A 2018 review reports that magnesium deficiency can increase a person's risk of cardiovascular problems. Magnesium deficiency is common in people with congestive heart failure and can worsen their clinical outcomes. People who receive magnesium soon after a heart attack have a lower risk of mortality. Doctors sometimes use magnesium during treatment for congestive heart failure to reduce the risk of arrhythmia, or abnormal heart rhythm. Studies have shown that when plasma magnesium concentrations are maintained at or above 0.85 mmol/L, the risk ratios for elevated metabolic syndrome and blood pressure indicators are significantly lower."
            />
            <OrganCard
              title="Sleep"
              body="Magnesium is the most overlooked sleep supplement in existence. It activates GABA receptors, your brain's primary inhibitory neurotransmitter and the mechanism through which your nervous system transitions from active to restful states. Without adequate magnesium, this transition is impaired. You can't sleep deeply because your nervous system doesn't have what it needs to power down properly. Magnesium chelate, glycinate, citrate, and malate can promote relaxation and sleep. Magnesium does different things than melatonin. Melatonin is a nighttime hormone that tells your body it is time to sleep, whereas magnesium helps promote a relaxation response as you wind down to sleep. Taking high-dose melatonin more than what your body produces can override your body's own circadian response, whereas taking magnesium provides nutritional insurance to prevent deficiency, which will improve all aspects of health."
            />
            <OrganCard
              title="Bone Health"
              body="The reason you may see magnesium included in a bone health vitamin is because the mineral plays an important role in converting vitamin D into its active form. Enzymes that produce and break down vitamin D require magnesium. Magnesium also helps the liver and kidneys metabolise vitamin D. A deficiency of magnesium may reduce the body's ability to use vitamin D even if vitamin D supplements are taken, which may in turn negatively affect the absorption of calcium. If you're taking vitamin D and calcium for bone health but not magnesium, you may be getting minimal benefit from either, and potentially increasing cardiovascular risk through calcium deposition in blood vessels."
            />
            <OrganCard
              title="Longevity"
              body="According to 2025 research, magnesium intake may be closely tied to lifespan potential. When researchers applied a magnesium depletion score tool across 48 studies, a troubling pattern emerged: people who weren't getting enough magnesium over time faced higher risks of chronic disease, poor health outcomes, and early death. The review also highlights that low magnesium levels are consistently associated with chronic low-grade inflammation, a process thought to drive many age-related diseases and increase the risk of early mortality."
            />
          </div>
        </section>

        <div className="section-divider" />

        {/* Form Problem */}
        <section data-testid="section-forms">
          <SectionHeader icon={<FlaskConical className="w-5 h-5" />} title="The Form Problem: Why Most Magnesium Supplements Fail" />
          <div className="space-y-4 text-black/70 leading-relaxed mb-6">
            <p>
              Here is the issue that most people supplementing magnesium don't know about and that the supplement industry has very little incentive to explain clearly.
            </p>
            <p>
              Magnesium exists in many different chemical forms, and each form has a different absorption rate, a different affinity for different tissues, and a different therapeutic profile. When you take a single-form magnesium supplement, which is what most products on the market are, you are delivering magnesium to some tissues and organs effectively while leaving others under-supplied.
            </p>
            <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#c4622d] mb-2">The single-form problem</p>
              <p className="text-black/70 text-sm leading-relaxed">
                Even people who supplement tend to take types that are poorly absorbed, or they only take two types of magnesium at most. Each type benefits different tissues and organ systems. If you're only taking one or two forms, you're most likely still deficient.
              </p>
            </div>
            <p>Here is what each major form specifically does:</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <FormCard
              name="Magnesium Glycinate"
              body="The most bioavailable form for nervous system and sleep support. Crosses the blood-brain barrier effectively. The gold standard for anxiety, stress, and sleep quality."
            />
            <FormCard
              name="Magnesium Malate"
              body="Found naturally in tart fruits. Believed to be particularly bioavailable and the most effective form for muscle recovery, energy production at the cellular level, and chronic pain. Malic acid plays a direct role in the Krebs cycle, the mitochondrial energy production process."
            />
            <FormCard
              name="Magnesium Citrate"
              body="Well absorbed, commonly researched. Helps fight obesity and has proven to help with arterial stiffness found in overweight people. Generally gentle on digestion."
            />
            <FormCard
              name="Magnesium Taurate"
              body="Combines magnesium with taurine, making it specifically beneficial for cardiovascular function, blood pressure regulation, and heart rhythm stability."
            />
            <FormCard
              name="Magnesium Orotate"
              body="The form with the strongest evidence for heart health specifically. Used in clinical settings for cardiovascular support."
            />
            <FormCard
              name="Magnesium Chelate"
              body="Essential for building muscles, their recovery, and overall muscular condition. The chelated form is bound to amino acids, enhancing intestinal absorption significantly over inorganic forms."
            />
            <FormCard
              name="Magnesium Aspartate"
              body="Helps maintain the acid-alkali balance in the body and supports healthy cardiac rhythms."
            />
          </div>
          <p className="mt-6 text-black/70 leading-relaxed">
            The conclusion from this is straightforward: a single-form magnesium supplement leaves most of your body under-served. You need the full spectrum of forms to comprehensively address deficiency across every tissue and organ system that requires magnesium.
          </p>
        </section>

        <div className="section-divider" />

        {/* Hard to detect */}
        <section data-testid="section-detection">
          <SectionHeader icon={<Zap className="w-5 h-5" />} title="Why Magnesium Deficiency Is So Hard to Detect" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              One of the reasons this deficiency goes unaddressed for so long is that standard blood tests are a poor indicator of true magnesium status. Approximately 1% of total body magnesium is located in blood compartments, while the majority is stored in bone and soft tissues, which substantially limits the diagnostic accuracy of serum-based indicators.
            </p>
            <p>
              This means your blood test can come back normal while your muscles, brain, heart, and bones are significantly depleted. The body maintains serum magnesium within a narrow range by drawing from tissue stores, so by the time low magnesium shows up in a blood test, you've been significantly deficient at the tissue level for a long time.
            </p>
            <p>
              The recently developed magnesium depletion score is a promising tool for identifying individuals at risk of magnesium deficiency based on five criteria, and a higher score denotes a greater degree of deficiency. It is noninvasive, cost-effective, and integrates multiple risk factors offering a holistic assessment that may better reflect long-term magnesium status compared to serum levels alone.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* BiOptimizers */}
        <section data-testid="section-bioptimizers">
          <SectionHeader icon={<ShieldCheck className="w-5 h-5" />} title="The Product I Recommend: BiOptimizers Magnesium Breakthrough" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Given everything above, the widespread deficiency, the tissue-specific nature of different forms, and the limitation of single-form products, the product that solves this problem most completely is BiOptimizers Magnesium Breakthrough.
            </p>
            <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#c4622d] mb-2">The only full-spectrum option</p>
              <p className="text-black/70 text-sm leading-relaxed">
                BiOptimizers Magnesium Breakthrough is the only supplement on the market that offers the full spectrum of all seven types of magnesium, specially formulated to help support bone and cardiovascular health and maintain healthy magnesium levels. The seven forms included are magnesium chelate, glycinate, malate, citrate, orotate, taurate, and aspartate, each addressing different tissues and organ systems simultaneously.
              </p>
            </div>
            <p>
              Each capsule contains 250mg of elemental magnesium. Many customers take more than 2 capsules initially to correct long-term deficiencies and optimise their body's magnesium levels.
            </p>
            <p>
              What sets Magnesium Breakthrough further apart from other multi-form magnesium products is the addition of carefully selected cofactors. Vitamin B6 enhances the mood and stress resilience benefits of magnesium. The humic and fulvic acid blend has chelating properties that enhance the solubility and uptake of magnesium, increasing the amount available to various tissues. Manganese citrate functions as a cofactor for many biological processes and helps balance the magnesium, with clinical evidence suggesting a manganese imbalance can lead to suboptimal sleep.
            </p>
            <p>
              Across online retail platforms and the BiOptimizers website, Magnesium Breakthrough consistently earns average ratings above 4.5 stars with most reviews mentioning noticeable improvements in sleep quality, stress response, muscle recovery, and cognitive performance. Users report sleeping better than they ever have, calmed nervous system problems, reduced leg cramps, improved digestion and elimination, reduced anxiety, and feeling more energised throughout the day, with multiple reviewers specifically noting they noticed a difference where other magnesium supplements had produced nothing.
            </p>
            <p>
              BiOptimizers is free from artificial ingredients and from preservatives, mercury, lead, and fluoride. The powder version is available for those who prefer a drink format, mixing into water in the evening is one of the most effective ways to support sleep quality and nervous system recovery overnight.
            </p>
          </div>
        </section>

        {/* BiOptimizers image */}
        <div className="card-glass rounded-2xl overflow-hidden flex items-center justify-center p-6" data-testid="img-bioptimizers">
          <img
            loading="lazy"
            decoding="async"
            src={magBreakthroughImg}
            alt="BiOptimizers Magnesium Breakthrough bottle"
            className="max-h-96 w-auto object-contain"
          />
        </div>

        <div className="section-divider" />

        {/* How to Take */}
        <section data-testid="section-how-to">
          <SectionHeader icon={<Leaf className="w-5 h-5" />} title="How to Take Magnesium Breakthrough" />
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="card-glass rounded-2xl p-5 space-y-2" data-testid="card-sleep">
              <p className="font-semibold text-black/90 text-sm">For sleep and nervous system recovery</p>
              <p className="text-black/60 text-xs leading-relaxed">Take 2 capsules on an empty stomach 1 to 2 hours before bed. This is the most commonly reported protocol for sleep improvement and the timing that produces the most consistent results.</p>
            </div>
            <div className="card-glass rounded-2xl p-5 space-y-2" data-testid="card-stress">
              <p className="font-semibold text-black/90 text-sm">For general health and stress management</p>
              <p className="text-black/60 text-xs leading-relaxed">Take 2 capsules with your evening meal if taking on an empty stomach causes any digestive discomfort.</p>
            </div>
            <div className="card-glass rounded-2xl p-5 space-y-2" data-testid="card-deficiency">
              <p className="font-semibold text-black/90 text-sm">For correcting long-term deficiency</p>
              <p className="text-black/60 text-xs leading-relaxed">For maximum relaxation, cognitive, and physical performance, some people experience more benefits when they gradually step their doses up, broken into a few doses throughout the day. Always increase gradually and listen to your body.</p>
            </div>
          </div>
          <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#c4622d] mb-2">Consistency matters above everything</p>
            <p className="text-black/70 text-sm leading-relaxed">
              Magnesium deficiency that has accumulated over years takes consistent daily supplementation over weeks to meaningfully address. Most people notice sleep and nervous system changes within 1 to 2 weeks. The deeper metabolic, cardiovascular, and bone health benefits build over months of consistent use.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Who Needs It */}
        <section data-testid="section-who">
          <SectionHeader icon={<Heart className="w-5 h-5" />} title="Who Needs Magnesium Breakthrough Most" />
          <div className="space-y-3 text-black/70 leading-relaxed mb-6">
            <p>
              The honest answer is most people. But certain groups are at significantly elevated risk of deficiency and will likely notice the most dramatic response:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <WhoCard
              group="People under chronic stress"
              body="Stress burns through magnesium faster than almost any other physiological demand."
            />
            <WhoCard
              group="Anyone training hard physically"
              body="Muscle contraction, energy production, and recovery all draw heavily on magnesium stores."
            />
            <WhoCard
              group="People with poor sleep quality"
              body="The nervous system regulation magnesium provides is fundamental to sleep architecture."
            />
            <WhoCard
              group="Anyone taking vitamin D or calcium without magnesium"
              body="You may be getting minimal benefit from either without it."
            />
            <WhoCard
              group="People over 40"
              body="Absorption efficiency decreases with age while demand remains constant."
            />
            <WhoCard
              group="People drinking coffee daily"
              body="Caffeine increases urinary magnesium excretion."
            />
            <WhoCard
              group="Vegetarians and vegans"
              body="Plant-based magnesium often comes with antinutrients that bind magnesium and reduce absorption."
            />
          </div>
          <p className="mt-6 text-black/55 text-sm">
            For a protocol built around your individual biology, visit my{" "}
            <a href="/personalized-guidance" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">Personalized Guidance</a>{" "}
            page. For the broader supplement context this fits within, see my{" "}
            <a href="/product-reviews/biohacking-supplements-2026" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">supplements guide</a>.
          </p>
        </section>

        <div className="section-divider" />

        {/* CTA */}
        <section className="card-glass rounded-2xl p-6 sm:p-8 space-y-5" data-testid="section-cta">
          <p className="font-display text-xl font-bold text-black">Get BiOptimizers Magnesium Breakthrough With My Discount Code</p>
          <div className="space-y-3 text-black/70 leading-relaxed text-sm">
            <p>
              Magnesium is the supplement I recommend before almost anything else, and Magnesium Breakthrough is the only product I trust to actually address deficiency comprehensively rather than partially. Seven bioavailable forms, clinically validated cofactors, free from artificial ingredients and heavy metals, and a 365-day money-back guarantee. There is no more complete magnesium supplement available anywhere.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <CopyCodeButton />
            <Button asChild size="lg" className="btn-gradient-rose text-white border-0 rounded-full px-6 sm:px-8 py-4 text-sm tracking-widest uppercase font-semibold h-auto leading-relaxed w-full sm:w-auto">
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" data-testid="link-bioptimizers-shop" className="inline-flex items-center justify-center gap-2 flex-wrap">
                Shop Magnesium Breakthrough <ExternalLink className="w-4 h-4 flex-shrink-0" />
              </a>
            </Button>
          </div>
          <p className="text-black/35 text-xs">
            Visit{" "}
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="underline text-[#c4622d]/60 hover:text-[#8b3a1a] transition-colors">bioptimizers.com/magnesium-breakthrough</a>
          </p>
        </section>

        <div className="section-divider" />

        {/* Sources */}
        <section data-testid="section-sources">
          <SectionHeader icon={<BookOpen className="w-5 h-5" />} title="Further Reading and Sources" />
          <div className="space-y-3 text-sm text-black/60 leading-relaxed">
            {[
              {
                label: "PMC 2025 — Magnesium: Health Effects, Deficiency Burden and Future Public Health Directions",
                href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12655508/",
              },
              {
                label: "PubMed 2025 — Global Dietary Magnesium Deficiency: Prevalence, Underlying Causes, Health Consequences",
                href: "https://pubmed.ncbi.nlm.nih.gov/41504160/",
              },
              {
                label: "PMC 2025 — Magnesium Depletion Score as an Indicator of Health Risk",
                href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12566843/",
              },
              {
                label: "Harvard T.H. Chan School of Public Health — The Nutrition Source: Magnesium",
                href: "https://nutritionsource.hsph.harvard.edu/magnesium/",
              },
              {
                label: "NIH Office of Dietary Supplements — Magnesium Fact Sheet for Health Professionals",
                href: "https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/",
              },
              {
                label: "PMC — Hypomagnesemia: multifaceted health impacts and associations with blood pressure and metabolic syndrome",
                href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12168336/",
              },
            ].map((source, i) => (
              <div key={i} className="flex items-start gap-2.5" data-testid={`source-mag-${i}`}>
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
            Medical Disclaimer: This article is for informational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional before beginning any new supplement regimen, particularly if you have kidney disease, are pregnant, or are taking prescription medications.
          </p>
        </div>

      </article>
    </PageLayout>
  );
}
