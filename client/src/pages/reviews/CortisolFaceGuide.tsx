import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Brain, AlertTriangle, ShieldCheck, Zap, BookOpen, Heart } from "lucide-react";

const heroImgFallback = "/images/cortisol-face-guide.jpg";

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

export default function CortisolFaceGuide() {
  return (
    <PageLayout
      showShare
      title="Cortisol Face Is a Real Thing — But Not for the Reasons TikTok Says"
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: "Cortisol Face & HPA Axis Dysregulation: The Evidence-Based Guide (2026) | Thrive Tools",
        description: "Cortisol dysregulation goes far deeper than a puffy face. Eden Laraki breaks down what the HPA axis actually does, what chronic cortisol dysregulation does to your body, and the evidence-based protocol — circadian reset, adaptogens, magnesium, blood sugar — that actually works.",
        canonical: "/blog/cortisol-face-hpa-axis-guide-2026",
        ogType: "article",
        datePublished: "2026-06-04",
        image: "/images/cortisol-face-guide.webp",
        imageAlt: "Cortisol face and HPA axis dysregulation — evidence-based guide",
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-10">

        {/* Badges */}
        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border border-[#c4622d]/25 rounded-full px-3 py-0.5 text-xs">
            Hormones & Stress
          </Badge>
          <Badge className="bg-white/5 text-black/50 border border-white/10 rounded-full px-3 py-0.5 text-xs">
            June 4, 2026
          </Badge>
        </div>

        {/* Hero image */}
        <div className="card-glass rounded-2xl overflow-hidden" data-testid="img-hero-cortisol">
          <picture>
            <source
              srcSet="/images/cortisol-face-guide-600.webp 600w, /images/cortisol-face-guide.webp 1200w"
              sizes="(max-width: 640px) 600px, 1200px"
              type="image/webp"
            />
            <img
              src={heroImgFallback}
              alt="Woman walking barefoot in misty forest at golden hour — stress recovery and HPA axis reset"
              loading="eager"
              decoding="async"
              width={1200}
              height={670}
              className="w-full h-auto object-cover"
            />
          </picture>
        </div>

        {/* Intro */}
        <section data-testid="section-intro">
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              If you've been on social media at any point in the last few months, you've seen the cortisol face content. Influencers pointing at their puffy cheeks, their jawline, their under-eye bags — "you're not ugly, you just have cortisol face" — followed inevitably by a link to a supplement, a coaching package, or a 47-step morning routine.
            </p>
            <p>
              I understand why this content resonates. Chronic stress is real, cortisol dysregulation is real, and the physical and mental symptoms it produces are genuinely debilitating. But the way cortisol is being discussed online right now is mostly wrong — and wrong in a way that leads people toward solutions that don't address the actual problem.
            </p>
            <div className="card-glass rounded-xl px-5 py-4 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
              <p className="text-black/75 text-sm font-medium">So let me give you the version that actually holds up.</p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* What Cortisol Is */}
        <section data-testid="section-what-is-cortisol">
          <SectionHeader icon={<Brain className="w-5 h-5" />} title="What Cortisol Actually Is" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Cortisol is a glucocorticoid hormone produced by the adrenal glands in response to signals from the hypothalamic-pituitary-adrenal (HPA) axis. Its primary function is maintaining blood glucose levels by mobilizing energy stores — it breaks down muscle protein and fat to release glucose when your body needs fuel under stress.
            </p>
            <p>
              Beyond that, cortisol regulates immune function, modulates inflammation, influences sleep-wake cycles, affects memory consolidation, and plays a central role in cardiovascular function and blood pressure regulation.
            </p>
            <p>
              Cortisol is not inherently the villain it's been made out to be online. You need it. Without it, you'd have Addison's disease — a serious autoimmune condition where the adrenal glands fail to produce enough cortisol, leading to profound fatigue, low blood pressure, and potentially life-threatening adrenal crisis.
            </p>
            <div className="card-glass rounded-xl px-5 py-4 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
              <p className="text-black/75 text-sm font-medium">The problem isn't cortisol. The problem is chronic cortisol dysregulation — a state where the normal rhythmic pattern of cortisol production gets disrupted, and the HPA axis loses its ability to self-regulate appropriately.</p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* The Rhythm */}
        <section data-testid="section-cortisol-rhythm">
          <SectionHeader icon={<Zap className="w-5 h-5" />} title="The Cortisol Rhythm: What's Supposed to Happen" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Cortisol follows a circadian pattern in a healthy system. It should peak within 30–45 minutes of waking — a phenomenon called the <strong className="text-black/85">cortisol awakening response (CAR)</strong> — reaching its highest levels of the day in the morning to support alertness, focus, and metabolic activation. It then gradually declines throughout the day, reaching its lowest point around midnight to allow for deep sleep and cellular repair.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 my-2">
              {[
                { time: "Morning", state: "Peak", detail: "High cortisol drives alertness, focus, and metabolic activation" },
                { time: "Afternoon", state: "Gradual decline", detail: "Sustained energy, steady cognitive function" },
                { time: "Night", state: "Near zero", detail: "Low cortisol allows melatonin, deep sleep, cellular repair" },
              ].map((item, i) => (
                <div key={i} className="card-glass rounded-xl p-4 text-center" data-testid={`rhythm-${i}`}>
                  <p className="text-[#c4622d] font-bold text-sm mb-0.5">{item.time}</p>
                  <p className="font-semibold text-black/90 text-xs mb-1">{item.state}</p>
                  <p className="text-black/55 text-xs leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
            <p>
              When this rhythm gets disrupted — through chronic stress, poor sleep, over-training, caloric restriction, or sustained psychological pressure — people experience what's often called HPA axis dysregulation: cortisol too high at the wrong times (often evening and night), too low at the right times (often morning), or dysregulated in complex patterns that produce a range of symptoms genuinely difficult to untangle.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* What It Does to the Body */}
        <section data-testid="section-body-effects">
          <SectionHeader icon={<AlertTriangle className="w-5 h-5" />} title="What Chronic Cortisol Dysregulation Actually Does to the Body" />
          <p className="text-black/70 leading-relaxed mb-5">This is where the TikTok framing falls apart — not because cortisol doesn't affect the body, but because the effects go so far beyond puffiness that focusing on facial appearance trivializes what's actually happening.</p>
          <div className="space-y-3">
            {[
              { system: "Body composition & metabolism", severity: "High", detail: "Chronically elevated cortisol promotes fat storage specifically in the abdominal area and face — it increases appetite, drives glucose into fat storage, and directly promotes visceral fat accumulation. The \"moon face\" from true hypercortisolism (Cushing's syndrome) is real, but requires clinically significant sustained elevation." },
              { system: "Blood sugar dysregulation", severity: "High", detail: "Cortisol raises blood glucose by stimulating gluconeogenesis and reducing insulin sensitivity. Chronically elevated cortisol is a direct driver of insulin resistance and is associated with significantly increased risk of type 2 diabetes." },
              { system: "Sleep destruction", severity: "High", detail: "Elevated cortisol at night is one of the most common and underappreciated drivers of sleep problems. Cortisol and melatonin are on opposite ends of a seesaw — when cortisol is high, melatonin is suppressed. Waking between 2–4am is a classic cortisol-related pattern." },
              { system: "Immune suppression", severity: "High", detail: "Chronic elevation depletes immune function over time, leaving people more susceptible to infection, slower to heal, and prone to inflammatory flares when cortisol eventually drops." },
              { system: "Brain structure & cognitive function", severity: "High", detail: "Chronic stress and elevated cortisol literally shrink the hippocampus — the brain region central to memory consolidation and emotional regulation. It also contributes to neuroinflammation and is a recognized risk factor for depression and anxiety disorders." },
              { system: "Muscle wasting", severity: "Medium", detail: "Cortisol is catabolic — it breaks down muscle tissue to release amino acids for glucose production. Chronically elevated cortisol is incompatible with maintaining or building muscle mass, regardless of how well you train or eat." },
              { system: "Thyroid disruption", severity: "Medium", detail: "Cortisol inhibits the conversion of T4 to active T3 thyroid hormone, effectively slowing metabolic rate and contributing to fatigue, weight gain, and hypothyroid-adjacent symptoms." },
              { system: "Skin", severity: "Medium", detail: "Chronically elevated cortisol degrades collagen, impairs the skin barrier, drives acne (through androgen stimulation), and accelerates skin aging. This is where the \"cortisol face\" content has a kernel of truth — but it's not addressable with topical products." },
            ].map((item, i) => (
              <div key={i} className="card-glass rounded-xl p-5" data-testid={`effect-${i}`}>
                <div className="flex items-center gap-3 mb-1.5">
                  <p className="font-semibold text-black/90 text-sm">{item.system}</p>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${item.severity === "High" ? "bg-red-500/12 text-red-700" : "bg-amber-500/12 text-amber-700"}`}>
                    {item.severity} impact
                  </span>
                </div>
                <p className="text-black/65 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* HPA Axis */}
        <section data-testid="section-hpa-axis">
          <SectionHeader icon={<Brain className="w-5 h-5" />} title="The HPA Axis and Why It Gets Dysregulated" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              The HPA axis is a feedback loop. Under normal function, elevated cortisol signals back to the hypothalamus and pituitary to reduce CRH and ACTH production respectively, bringing cortisol back down. The system self-regulates.
            </p>
            <p>
              Chronic stress overrides this feedback loop. Sustained activation — from psychological stress, poor sleep, over-training, inflammatory diet, blood sugar dysregulation, or trauma — keeps cortisol production elevated despite the feedback signals. Over time, receptor sensitivity can downregulate, and the axis can develop what researchers describe as dysregulation: either chronically high, chronically low (in burnout states), or showing abnormal diurnal patterns.
            </p>
            <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
              <p className="font-semibold text-black/85 text-sm mb-2">Why women are disproportionately affected</p>
              <p className="text-black/65 text-sm leading-relaxed">Estrogen increases the number of corticotropin-releasing factor (CRF) receptors in the brain — meaning the same external stressor produces a stronger cortisol signal in women than men. This is one significant reason anxiety disorders are diagnosed at roughly twice the rate in women, and why cortisol dysregulation symptoms pattern differently across sexes.</p>
            </div>
            <p>
              The HPA axis is also acutely sensitive to sleep disruption. Even one night of poor sleep measurably elevates cortisol the following day. For people in sustained sleep debt, this becomes a self-reinforcing cycle: elevated cortisol disrupts sleep, disrupted sleep elevates cortisol.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* The Protocol */}
        <section data-testid="section-protocol">
          <SectionHeader icon={<ShieldCheck className="w-5 h-5" />} title="What Actually Works: The Evidence-Based Protocol" />
          <p className="text-black/70 leading-relaxed mb-6">Here's where most cortisol content fails completely. The solutions offered are either too vague ("reduce stress") or too specific without explaining the mechanism ("take ashwagandha"). Let me give you the framework that the research actually supports.</p>

          {/* Step 1 */}
          <div className="mb-8" data-testid="protocol-step-1">
            <h3 className="font-display text-xl font-bold text-black mb-4">1. Fix the Circadian Foundation First</h3>
            <p className="text-black/70 leading-relaxed mb-5">Cortisol is a circadian hormone. Before any supplement or intervention can meaningfully help, the daily light-dark cycle needs to be respected.</p>
            <div className="space-y-3">
              {[
                { action: "Morning light exposure within 30 minutes of waking", detail: "Natural light — especially outdoor light — triggers appropriate cortisol elevation at the right time, calibrates your circadian clock, and downstream improves sleep quality. Even 5 minutes of outdoor morning light exposure shifts the entire day's hormonal rhythm. This is the single most evidence-based intervention for setting your cortisol awakening response.", link: null },
                { action: "Consistent sleep and wake times", detail: "The cortisol rhythm is entrained to your circadian clock — inconsistent sleep timing directly disrupts it. Sleeping and waking within a 30-minute window daily is more impactful than almost any supplement.", link: null },
                { action: "Eliminate screen light in the evening", detail: "Blue-light exposure suppresses melatonin and — because cortisol and melatonin are reciprocally regulated — effectively elevates cortisol at exactly the wrong time. Blue-light blocking glasses, dim warm lighting after sunset, and screen-free time before bed directly address this.", link: null },
              ].map((item, i) => (
                <div key={i} className="card-glass rounded-xl p-5" data-testid={`step1-item-${i}`}>
                  <p className="font-semibold text-black/90 text-sm mb-1">{item.action}</p>
                  <p className="text-black/65 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-8" data-testid="protocol-step-2">
            <h3 className="font-display text-xl font-bold text-black mb-4">2. Adaptogens — But Understand What They Actually Do</h3>
            <p className="text-black/70 leading-relaxed mb-5">Adaptogenic herbs are among the most evidence-backed natural interventions for HPA axis support, but they work through specific mechanisms that most content doesn't explain.</p>
            <div className="space-y-3">
              {[
                {
                  herb: "Ashwagandha (KSM-66)",
                  caveat: "Most clinically researched",
                  detail: "Multiple randomized controlled trials show KSM-66 standardized extract at 300–600mg daily produces meaningful reductions in serum cortisol, perceived stress, and anxiety — with effects building over 4–8 weeks. The mechanism involves modulation of the HPA axis feedback loop through GABA receptor activity and reduction in ACTH levels.",
                  link: null,
                },
                {
                  herb: "Reishi mushroom (Ganoderma lucidum)",
                  caveat: "Foundational adaptogen",
                  detail: "I've taken Reishi daily for over 10 years. Its triterpenoids modulate the stress response through adrenal support and cortisol regulation, with additional liver-protective and immunomodulatory properties that compound over time. Effects are slower and more subtle than ashwagandha but, in my experience, deeper and more sustained.",
                  link: { href: "https://hyperionherbs.com", label: "Shop Hyperion Herbs — Use discount code EDEN10" },
                },
                {
                  herb: "Schisandra (Schisandra chinensis)",
                  caveat: "Adrenal support",
                  detail: "Specifically supports adrenal function and stress resilience through its adaptogenic flavolignans. Schisandra's dual action — supporting both energy and calm simultaneously — addresses the paradoxical state many people in HPA dysregulation experience: exhausted but wired, fatigued but unable to sleep.",
                  link: { href: "https://hyperionherbs.com", label: "Shop Hyperion Herbs — Use discount code EDEN10" },
                },
                {
                  herb: "Rhodiola rosea",
                  caveat: "Physical stress & over-training",
                  detail: "Has strong evidence for reducing cortisol's catabolic effects on the body, particularly in the context of physical stress and over-training. Its active compound rosavins influence the stress-response system at multiple points. Particularly useful for athletes or anyone whose cortisol dysregulation has a significant physical stress component.",
                  link: null,
                },
              ].map((item, i) => (
                <div key={i} className="card-glass rounded-xl p-5" data-testid={`adaptogen-${i}`}>
                  <div className="flex items-center gap-3 mb-1.5">
                    <p className="font-semibold text-black/90 text-sm">{item.herb}</p>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#c4622d]/10 text-[#8b3a1a]">{item.caveat}</span>
                  </div>
                  <p className="text-black/65 text-sm leading-relaxed mb-2">{item.detail}</p>
                  {item.link && <AffilLink href={item.link.href} label={item.link.label} />}
                </div>
              ))}
            </div>
            <p className="text-black/55 text-xs mt-3 italic">For all mushrooms and tonic herbs: fruiting body only, dual-extracted — not mycelium on grain. The difference in active compound concentration is significant.</p>
          </div>

          {/* Step 3 */}
          <div className="mb-8" data-testid="protocol-step-3">
            <h3 className="font-display text-xl font-bold text-black mb-4">3. Magnesium: The Most Underestimated Cortisol Tool</h3>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                Magnesium and cortisol have a bidirectional relationship that's criminally underappreciated in the cortisol conversation.
              </p>
              <p>
                Cortisol depletes magnesium — every cortisol response expends magnesium reserves. And magnesium deficiency amplifies the HPA axis response to stress, producing higher cortisol output for the same stressor. The cycle sustains itself: stress depletes magnesium, low magnesium makes you more reactive to stress, which depletes more magnesium.
              </p>
              <p>
                Magnesium directly modulates GABA receptors — the nervous system's primary inhibitory pathway. Adequate magnesium supports the parasympathetic response (rest and digest), reduces hyperactivation of the HPA axis, and improves sleep quality through multiple mechanisms including regulation of melatonin synthesis.
              </p>
              <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
                <p className="font-semibold text-black/85 text-sm mb-1.5">Form matters enormously</p>
                <p className="text-black/65 text-sm leading-relaxed">Magnesium oxide has roughly 4% bioavailability and is essentially useless for this purpose. Magnesium glycinate absorbs well and the glycine component provides additional calming effects. Magnesium L-threonate is the only form demonstrated to cross the blood-brain barrier — directly relevant for the neurological and cognitive aspects of cortisol dysregulation.</p>
              </div>
              <div className="space-y-3">
                <div className="card-glass rounded-xl p-5" data-testid="magnesium-bioptimizers">
                  <p className="font-semibold text-black/90 text-sm mb-1">BiOptimizers Magnesium Breakthrough</p>
                  <p className="text-black/65 text-sm leading-relaxed mb-2">Uses 7 forms of magnesium — glycinate, threonate, malate, taurate, orotate, sucrosomial, and citrate — to cover the full spectrum. For someone dealing with HPA dysregulation, this matters because different forms target different systems.</p>
                  <AffilLink href="https://bioptimizers.com" label="Shop BiOptimizers Magnesium Breakthrough — Use discount code THRIVETOOLS" />
                </div>
                <div className="card-glass rounded-xl p-5" data-testid="magnesium-organika">
                  <p className="font-semibold text-black/90 text-sm mb-1">Organika 8-in-1 Magnesium <span className="text-[10px] font-normal text-black/40 ml-1">(Canadian readers)</span></p>
                  <p className="text-black/65 text-sm leading-relaxed mb-2">Eight forms of magnesium in one formula at a more accessible price point, ships domestically within Canada. Use discount code EDEN_25.</p>
                  <AffilLink href="https://organika.com/products/8-in-1-magnesium?_pos=1&_psq=magn&_ss=e&_v=1.0" label="Shop Organika 8-in-1 Magnesium — Use discount code EDEN_25" />
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="mb-8" data-testid="protocol-step-4">
            <h3 className="font-display text-xl font-bold text-black mb-4">4. Blood Sugar Regulation</h3>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                This is the connection most cortisol content completely misses. Cortisol and blood sugar are deeply intertwined. Cortisol raises blood glucose; hypoglycemic episodes (blood sugar crashes) trigger cortisol release.
              </p>
              <p>
                Eating regular, balanced meals with adequate protein and complex carbohydrates supports stable blood glucose, which reduces unnecessary cortisol activation throughout the day. Skipping breakfast or extending intermittent fasting past the point where blood sugar drops can produce a cortisol spike that sets a dysregulated tone for the entire day.
              </p>
              <div className="card-glass rounded-xl p-5" data-testid="blood-sugar-im8">
                <p className="font-semibold text-black/90 text-sm mb-1">IM8 Daily Ultimate Essentials PRO</p>
                <p className="text-black/65 text-sm leading-relaxed mb-2">Includes chromium alongside its adaptogen complex — chromium supports insulin sensitivity and blood glucose regulation, with downstream benefits for cortisol rhythm normalization. One of the less-discussed but meaningful inclusions in the formula.</p>
                <AffilLink href="https://im8health.com/thrive10" label="Shop IM8 Daily Ultimate Essentials PRO — Use discount code THRIVE10" />
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="mb-8" data-testid="protocol-step-5">
            <h3 className="font-display text-xl font-bold text-black mb-4">5. Exercise: The Right Kind at the Right Time</h3>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                Exercise is a cortisol stressor — which is not a reason to avoid it, but a reason to be strategic.
              </p>
              <div className="space-y-3">
                {[
                  { point: "Time intense training to morning or early afternoon", detail: "High-intensity training in the evening elevates cortisol at exactly the wrong time in the diurnal rhythm and directly competes with melatonin production. Shifting to morning or early afternoon aligns the cortisol response with the natural cortisol peak." },
                  { point: "Reduce intensity during HPA burnout states", detail: "For people in an overtrained or HPA-burned-out state, sustained high-intensity exercise compounds the problem. Transitioning to lower-intensity movement — walking, yoga, swimming — for 4–6 weeks while adaptogens and sleep work to restore HPA sensitivity is often more restorative than pushing through." },
                  { point: "Prioritize Zone 2 aerobic exercise", detail: "Conversational pace, sustained for 30–60 minutes. Zone 2 builds parasympathetic capacity, improves HRV, and over time reduces the baseline cortisol response to psychological stressors." },
                ].map((item, i) => (
                  <div key={i} className="card-glass rounded-xl p-5" data-testid={`exercise-${i}`}>
                    <p className="font-semibold text-black/90 text-sm mb-1">{item.point}</p>
                    <p className="text-black/65 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div data-testid="protocol-step-6">
            <h3 className="font-display text-xl font-bold text-black mb-4">6. Targeted Nutritional Support</h3>
            <div className="space-y-3">
              {[
                {
                  nutrient: "Omega-3 EPA",
                  caveat: "Direct cortisol evidence",
                  detail: "A study in Biological Psychiatry found EPA supplementation reduced cortisol reactivity to mental stressors. The anti-inflammatory mechanism of EPA also directly addresses the neuroinflammation that cortisol dysregulation drives.",
                  link: { href: "https://aquaomega.refr.cc/default/u/thrivetoolsco?s=rp&t=cp", label: "Shop AquaOmega Vegan Omega-3" },
                },
                {
                  nutrient: "Phosphatidylserine",
                  caveat: "Strong RCT evidence",
                  detail: "A phospholipid with some of the strongest direct evidence for blunting cortisol response to exercise stress. Several studies show it reduces post-exercise cortisol elevation and improves the cortisol:testosterone ratio. Dose: 400–800mg daily.",
                  link: null,
                },
                {
                  nutrient: "Vitamin C",
                  caveat: "Adrenal support",
                  detail: "The adrenal glands contain one of the highest concentrations of vitamin C in the body, and cortisol production depletes it. Adequate vitamin C supports adrenal function and has shown modest cortisol-lowering effects in stressed populations.",
                  link: null,
                },
                {
                  nutrient: "L-theanine",
                  caveat: "Acute stress",
                  detail: "Supports alpha brain wave production, enhances GABA activity, and reduces cortisol response to acute stress without causing sedation. 200mg is one of the most useful supplements for acute stress management — particularly useful before high-stress situations.",
                  link: null,
                },
              ].map((item, i) => (
                <div key={i} className="card-glass rounded-xl p-5" data-testid={`nutrient-${i}`}>
                  <div className="flex items-center gap-3 mb-1.5">
                    <p className="font-semibold text-black/90 text-sm">{item.nutrient}</p>
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

        {/* What Doesn't Work */}
        <section data-testid="section-doesnt-work">
          <SectionHeader icon={<AlertTriangle className="w-5 h-5" />} title="What Doesn't Work (That's Being Sold Everywhere Right Now)" />
          <div className="space-y-3">
            {[
              { claim: "Topical \"cortisol-blocking\" skincare", reality: "There is no clinical evidence that topical products can modulate systemic cortisol or reverse hormonal fat redistribution. The skin doesn't have a mechanism to modulate circulating cortisol levels." },
              { claim: "Cortisol saliva strips sold without clinical context", reality: "Cortisol varies enormously throughout the day and is highly context-dependent. A single saliva sample without reference to time of collection, sleep state, and recent stressors is nearly uninterpretable. Clinical assessment involves multiple samples at specific time points." },
              { claim: "Short-term adaptogens as quick fixes", reality: "Ashwagandha and other adaptogens work through mechanisms that require consistent use over weeks to months. Anyone selling a \"7-day cortisol reset\" is misrepresenting how these compounds work." },
              { claim: "Over-supplementing while ignoring sleep, light, and blood sugar", reality: "No supplement protocol can overcome the HPA dysregulation produced by chronic sleep deprivation, no morning light exposure, and chaotic blood glucose. The foundation always comes first." },
            ].map((item, i) => (
              <div key={i} className="card-glass rounded-xl p-5 border-l-4 border-red-400/40" data-testid={`false-claim-${i}`}>
                <p className="font-semibold text-black/90 text-sm mb-1">❌ &nbsp;{item.claim}</p>
                <p className="text-black/65 text-sm leading-relaxed">{item.reality}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* When to See a Doctor */}
        <section data-testid="section-doctor">
          <SectionHeader icon={<Heart className="w-5 h-5" />} title="When to See a Doctor" />
          <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
            <p className="text-black/70 text-sm leading-relaxed mb-3">
              Everything in this article applies to the functional cortisol dysregulation that's increasingly common in chronically stressed modern adults. It does not apply to clinical hypercortisolism (Cushing's syndrome) or hypocortisolism (Addison's disease), which are serious medical conditions requiring medical diagnosis and treatment.
            </p>
            <p className="text-black/70 text-sm leading-relaxed">
              <strong className="text-black/85">See your doctor if you experience:</strong> significant unexplained weight gain concentrated in the face and abdomen with thin arms and legs; purple stretch marks; muscle weakness; easy bruising; profound fatigue unresponsive to rest; or blood pressure that's risen without dietary explanation.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Bottom Line */}
        <section data-testid="section-bottom-line">
          <SectionHeader icon={<Zap className="w-5 h-5" />} title="The Bottom Line" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Cortisol dysregulation is a real, measurable, physiologically significant condition that affects a large and growing proportion of the chronically stressed modern population. The TikTok framing of "cortisol face" isn't wrong to point toward cortisol as a driver of physical symptoms — it's wrong about the mechanism, wrong about the solutions, and wrong about the severity of what's actually happening in the body when cortisol goes off the rails.
            </p>
            <p>
              The real picture is more serious and more addressable than social media suggests.
            </p>
            <div className="card-glass rounded-xl px-5 py-4">
              <p className="text-black/80 text-sm font-medium leading-relaxed">
                Fix the circadian foundation. Address the sleep. Support the adrenals with quality adaptogens consistently over time. Restore magnesium. Stabilize blood glucose. Move appropriately. Be patient — HPA axis regulation doesn't restore in a week.
              </p>
            </div>
            <p>
              The symptoms that brought you to searching "cortisol face" are real. The solutions are less glamorous than a supplement hack and more powerful than any 30-second video suggests.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* FAQ */}
        <section data-testid="section-faq">
          <h2 className="font-display text-2xl font-bold text-black mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Is cortisol face a real medical condition?", a: "Not as a formal diagnosis. True \"moon face\" — fat deposition in the cheeks from chronically elevated cortisol — is a symptom of Cushing's syndrome, a clinical condition requiring medical treatment. Everyday stress doesn't elevate cortisol enough or for long enough to cause significant fat redistribution in the face. The social media version conflates everyday puffiness with a clinical hormonal disorder." },
              { q: "What are the symptoms of cortisol dysregulation?", a: "Fatigue (especially morning fatigue despite adequate sleep), difficulty falling or staying asleep, waking at 2–4am with a racing heart, brain fog and poor memory, afternoon energy crashes, difficulty losing abdominal weight, anxiety and emotional reactivity, frequent illness, sugar and carbohydrate cravings, and reduced exercise tolerance are the most common patterns." },
              { q: "What's the best supplement for cortisol?", a: "Ashwagandha KSM-66 at 300–600mg daily has the most direct clinical evidence for reducing serum cortisol and perceived stress. Magnesium glycinate or a multi-form magnesium supplement addresses the depletion cycle. Reishi, Schisandra, and Rhodiola provide broader adaptogenic support to the HPA axis over time." },
              { q: "Does caffeine raise cortisol?", a: "Yes. Caffeine stimulates the adrenal glands to produce cortisol and adrenaline. Consumed before cortisol has naturally peaked in the morning, it can dysregulate the cortisol awakening response. Many biohackers delay caffeine until 90–120 minutes after waking to allow the natural cortisol peak to complete first." },
              { q: "Does cold exposure help with cortisol?", a: "Cold exposure acutely elevates cortisol and adrenaline as a stress response. Over time and with consistent practice, research suggests cold exposure training improves HPA axis regulation and stress resilience — the body's response to cold becomes more controlled. It's a hormetic stressor: challenging in the short term, adaptive over time. Start with contrast showers rather than cold plunges if you're already in an overtrained or depleted state." },
              { q: "How long does it take to balance cortisol naturally?", a: "With consistent attention to sleep, circadian rhythm, and adaptogenic support, most people notice meaningful improvements in energy, sleep quality, and stress reactivity within 4–8 weeks. Full HPA axis regulation restoration for people in significant dysregulation can take 3–6 months of consistent intervention. This is not a quick fix — it's a restoration process." },
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
              { text: 'Chandrasekhar K, et al. "A prospective, randomized double-blind, placebo-controlled study of safety and efficacy of a high-concentration full-spectrum extract of Ashwagandha root in reducing stress and anxiety in adults." ', journal: "Indian Journal of Psychological Medicine", year: "2012.", href: "https://pubmed.ncbi.nlm.nih.gov/23439798/" },
              { text: 'Wurtman R, et al. "Effect of oral phosphatidylserine on cortisol and ACTH responses to physical stress." ', journal: "Endocrinology", year: "1991.", href: null },
              { text: 'Barbosa RP, et al. "Omega-3 fatty acids and stress cortisol response." ', journal: "Biological Psychiatry", year: "2010.", href: null },
              { text: '"Cortisol and anxiety symptoms in women: hormonal guide." ', journal: "Health Highroad", year: "2026.", href: null },
            ].map((ref, i) => (
              <p key={i} className="text-black/60 text-xs leading-relaxed" data-testid={`ref-${i}`}>
                {ref.text}<em>{ref.journal}</em>, {ref.year}{ref.href && <> <PubLink href={ref.href} label="↗" /></>}
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
          This article is for educational purposes only. It is not intended to diagnose, treat, or replace professional medical advice. If you suspect a clinical cortisol disorder, please consult a qualified healthcare provider.
        </p>

      </article>
    </PageLayout>
  );
}
