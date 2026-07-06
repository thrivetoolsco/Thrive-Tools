import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Sun, Brain, Zap, Leaf, Coffee, BookOpen, Clock } from "lucide-react";

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

function StepCard({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4" data-testid={`step-${number}`}>
      <div className="flex items-center gap-4">
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#c4622d]/15 text-[#c4622d] flex items-center justify-center font-display font-bold text-lg">
          {number}
        </span>
        <h3 className="font-display text-xl font-bold text-black">{title}</h3>
      </div>
      <div className="space-y-4 text-black/70 leading-relaxed pl-14">
        {children}
      </div>
    </section>
  );
}

export default function MorningRoutineGuide() {
  return (
    <PageLayout
      showShare
      title="The Morning Routine That Actually Regulates Your Nervous System (Backed by Science)"
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: "Morning Routine for Nervous System Regulation: The Science-Backed Protocol (2026) | Thrive Tools",
        description: "Most morning routines are productivity cosplay. This one is built on how your nervous system actually works — circadian light, adenosine, cortisol rhythm, adaptogens, and ceremonial cacao. The 8-step sequence that sets the biological architecture for your entire day.",
        canonical: "/blog/morning-routine-nervous-system-2026",
        ogType: "article",
        datePublished: "2026-06-12",
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-10">

        {/* Badges */}
        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border border-[#c4622d]/25 rounded-full px-3 py-0.5 text-xs">
            Nervous System
          </Badge>
          <Badge className="bg-white/5 text-black/50 border border-white/10 rounded-full px-3 py-0.5 text-xs">
            June 12, 2026
          </Badge>
        </div>

        {/* Intro */}
        <section data-testid="section-intro">
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Most morning routine content is productivity cosplay.
            </p>
            <p>
              Wake up at 5am. Cold plunge. Journal. Meditate. Workout. Green juice. Read. Gratitude. All before 7am — or you're doing it wrong.
            </p>
            <p>
              The problem isn't discipline. The problem is that most of these routines are built around aesthetics and hustle culture mythology rather than any coherent understanding of what the nervous system actually needs in the first 90 minutes of the day.
            </p>
            <p>
              What your nervous system needs in the morning is not a performance. It's a sequence of biological inputs — delivered in roughly the right order — that set your hormonal rhythm, anchor your circadian clock, prime your neurotransmitter production, and transition your body from sleep physiology to waking physiology without triggering an unnecessary stress response.
            </p>
            <div className="card-glass rounded-xl px-5 py-4 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
              <p className="text-black/80 text-sm font-medium">When you get this right, the rest of the day follows. Energy is stable. Focus is accessible. Anxiety is lower. Sleep that night is better. Everything compounds.</p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Why the Morning Window */}
        <section data-testid="section-why-morning">
          <SectionHeader icon={<Sun className="w-5 h-5" />} title="Why the Morning Window Matters More Than Any Other Time of Day" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Your first 90 minutes of wakefulness are the most hormonally active period of the entire day.
            </p>
            <p>
              Within this window, your body is determining the architecture of your entire circadian day — calibrating cortisol rhythm, setting dopamine tone, establishing the serotonin production that will later convert to melatonin for that night's sleep, and transitioning your autonomic nervous system from parasympathetic dominance (sleep) to the balanced sympathetic activation you need to function.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 my-2">
              {[
                { input: "A stress response at 7am", effect: "Cascading hormonal consequences that last until afternoon" },
                { input: "5 min of morning light", effect: "Sets your circadian clock for the next 24 hours" },
                { input: "Food or fasting choice", effect: "Affects blood glucose, cortisol, and insulin sensitivity all day" },
              ].map((item, i) => (
                <div key={i} className="card-glass rounded-xl p-4" data-testid={`window-impact-${i}`}>
                  <p className="font-semibold text-[#c4622d] text-xs uppercase tracking-wide mb-1">Input</p>
                  <p className="font-semibold text-black/90 text-sm mb-2">{item.input}</p>
                  <p className="text-black/55 text-xs leading-relaxed">{item.effect}</p>
                </div>
              ))}
            </div>
            <p>
              The morning isn't just the start of the day. It's the biological template for the day.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* The 8 Steps */}
        <section data-testid="section-protocol">
          <SectionHeader icon={<Zap className="w-5 h-5" />} title="The 8-Step Protocol" />
          <div className="space-y-8">

            <StepCard number="1" title="Light Before Screens (First 5 Minutes)">
              <p>
                This is the single highest-leverage action in any morning routine, and it costs nothing.
              </p>
              <p>
                Your retinas contain specialized photoreceptors called intrinsically photosensitive retinal ganglion cells (ipRGCs), which contain a pigment called melanopsin. These cells are specifically tuned to detect the short-wavelength blue light that predominates in the morning sky. When morning light hits these cells, they send direct signals to the suprachiasmatic nucleus (SCN) — the master circadian clock in the hypothalamus — synchronizing your internal 24-hour clock.
              </p>
              <p>
                Morning sunlight initiates serotonin production. The serotonin produced this morning is the direct precursor to the melatonin you'll need tonight. <strong className="text-black/85">Your sleep quality tonight is partly determined by the light you get today.</strong> Morning light also triggers a small hormetic cortisol pulse that actually lowers stress levels for the rest of the day, and boosts dopamine, contributing to heightened alertness and motivation.
              </p>
              <div className="card-glass rounded-xl p-4 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
                <p className="font-semibold text-black/85 text-sm mb-1">The protocol</p>
                <p className="text-black/65 text-sm leading-relaxed">Go outside within 30 minutes of waking. No sunglasses. No glass windows — glass filters the wavelengths needed. 5–10 minutes on a sunny day, 15–20 minutes on an overcast day. You don't need to stare at the sky — just be outside with your eyes open. Phone on airplane mode until this is done.</p>
              </div>
            </StepCard>

            <StepCard number="2" title="Hydration Before Stimulants">
              <p>
                You've been fasting for 7–9 hours. Your blood volume is mildly contracted, your cells are in relative dehydration, and your kidneys have been concentrating urine all night. Mild dehydration activates a stress response — the body perceives fluid deficit as a threat and responds with mild sympathetic activation — exactly what you don't want as the first input into a system you're trying to calibrate toward calm alertness.
              </p>
              <p>
                500ml–1 litre of water first thing reverses overnight fluid deficit, supports kidney function, jumpstarts gut motility, and helps clear the adenosine metabolites that contribute to morning grogginess. A pinch of quality sea salt and a squeeze of lemon provides trace electrolytes that support rapid cellular hydration — sodium facilitates intestinal absorption.
              </p>
              <div className="card-glass rounded-xl p-5" data-testid="product-im8">
                <p className="font-semibold text-black/90 text-sm mb-1">IM8 Daily Ultimate Essentials PRO</p>
                <p className="text-black/65 text-sm leading-relaxed mb-2">Mixed into morning water, it handles electrolytes, B-vitamins, adaptogen complex, and spore-based probiotic simultaneously — making hydration and supplementation one step. The bioactive methylcobalamin B12 and P5P B6 hit a depleted overnight system particularly well first thing.</p>
                <AffilLink href="https://www.im8health.com/THRIVE10" label="Shop IM8 Daily Ultimate Essentials PRO — Use discount code THRIVE10" />
              </div>
            </StepCard>

            <StepCard number="3" title="Delay Caffeine 90–120 Minutes">
              <p>
                This is the intervention that most people resist the most and that makes the most consistent difference to afternoon energy and evening cortisol levels.
              </p>
              <p>
                Adenosine is a sleep pressure molecule that accumulates in the brain throughout the day. When you wake up, adenosine levels are low — but not zero. Over the first 90 minutes of waking, they continue clearing. Caffeine works by <em>blocking</em> adenosine receptors, not eliminating adenosine. When you drink coffee immediately upon waking, you block receptors before the clearance process completes. The result: when caffeine wears off 4–6 hours later, the uncleared adenosine floods back in. <strong className="text-black/85">This is the 2pm crash.</strong>
              </p>
              <p>
                Waiting 90–120 minutes allows adenosine to clear naturally, means caffeine blocks receptors that are actually active, produces a longer and more stable energy effect, and significantly reduces afternoon crashes. Secondary benefit: cortisol peaks naturally in the first 60–90 minutes of waking — caffeine on top of peak cortisol amplifies the spike unnecessarily and can push the HPA axis into dysregulation over time.
              </p>
            </StepCard>

            <StepCard number="4" title="The Ceremonial Morning Drink">
              <p>
                While the caffeine waits: ceremonial cacao.
              </p>
              <p>
                Theobromine — the primary active compound in cacao — is a gentle cardiovascular stimulant and vasodilator with a half-life of 7–12 hours. It produces calm, sustained energy without the cortisol spike of caffeine, without jitteriness, and without a crash. It enhances cerebral blood flow through nitric oxide production, directly supporting the focus and cognitive clarity you want for morning work.
              </p>
              <p>
                Anandamide — the endocannabinoid present in cacao — produces the open, present, emotionally available state that makes morning meditation, journaling, or creative work land differently. Not sedating. Not stimulating. Just present. Magnesium from cacao supports GABA receptor function — the nervous system's calm-down pathway — contributing to the grounded quality that distinguishes cacao energy from coffee energy.
              </p>
              <div className="card-glass rounded-xl p-5" data-testid="product-koracao">
                <p className="font-semibold text-black/90 text-sm mb-1">Koracao Ceremonial Cacao</p>
                <p className="text-black/65 text-sm leading-relaxed mb-2">Heirloom criollo beans from Peruvian and Colombian indigenous communities — fruiting body only, minimally processed, ORAC 95,000. The difference between ceremonial grade and standard cacao powder is immediately noticeable in both effect and taste.</p>
                <AffilLink href="https://koracao.com/THRIVE33" label="Shop Koracao Ceremonial Cacao — Use discount code EDENKAWTHARLARAKI123" />
              </div>
            </StepCard>

            <StepCard number="5" title="Movement That Activates Rather Than Depletes">
              <p>
                The question is not whether to move — it's what kind of movement the nervous system actually benefits from at this time of day.
              </p>
              <p>
                High-intensity training first thing before food significantly elevates cortisol. For people already in HPA dysregulation, morning HIIT on an empty stomach is genuinely counterproductive — you're adding a significant stress input to a system already struggling to regulate its stress response.
              </p>
              <div className="space-y-3">
                {[
                  { label: "Activation movement (recommended)", detail: "10 minutes of walking, yoga, mobility work, or ecstatic free movement. Increases body temperature (a natural circadian signal), enhances blood flow to the brain, releases BDNF, and supports parasympathetic-to-sympathetic transition gently." },
                  { label: "High-intensity training (save for later)", detail: "Best between 10am and 6pm for most people — when cortisol has naturally declined, when body temperature is higher (supporting performance and reducing injury risk), and when the cortisol response doesn't disrupt evening wind-down." },
                ].map((item, i) => (
                  <div key={i} className="card-glass rounded-xl p-4" data-testid={`movement-${i}`}>
                    <p className="font-semibold text-black/90 text-sm mb-1">{item.label}</p>
                    <p className="text-black/65 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </StepCard>

            <StepCard number="6" title="The Tonic Herb Protocol">
              <p>
                This is the layer most morning routines don't include and that has made the most cumulative difference to my nervous system regulation over 14 years.
              </p>
              <p>
                Adaptogenic tonic herbs work through mechanisms that accumulate over time. They don't produce an acute noticeable effect the way caffeine does — they gradually shift the baseline of how your nervous system responds to stress, how your HPA axis calibrates its outputs, and how resilient you are to inputs that would otherwise dysregulate you.
              </p>
              <div className="space-y-3">
                {[
                  { herb: "Reishi", caveat: "Foundation adaptogen", detail: "I've taken Reishi every single day for over 10 years. The cumulative shift in nervous system baseline calm is the most significant thing I can attribute to any single intervention. Triterpenoids in Reishi modulate the HPA axis feedback loop, support liver detoxification, and produce a gradual deepening of parasympathetic capacity." },
                  { herb: "Cordyceps", caveat: "Morning energy", detail: "Morning energy without adrenal stimulation. Cordyceps supports mitochondrial ATP production and oxygen utilization at the cellular level — it's not a stimulant, it's metabolic fuel. Particularly useful in the first hour of the day when cellular energy production is ramping up from overnight repair mode." },
                  { herb: "Lion's Mane", caveat: "Cognitive clarity", detail: "NGF and BDNF stimulation through hericenones and erinacines supports the neuroplasticity and sharp cognitive function you want for focused morning work. Most noticeable as mental clarity and ease of cognitive access rather than stimulation." },
                  { herb: "Schisandra", caveat: "Stress resilience", detail: "Adaptogenic flavolignans build the capacity to sustain energy and calm simultaneously — the state most conducive to productive, non-reactive morning work." },
                ].map((item, i) => (
                  <div key={i} className="card-glass rounded-xl p-5" data-testid={`herb-${i}`}>
                    <div className="flex items-center gap-3 mb-1.5">
                      <p className="font-semibold text-black/90 text-sm">{item.herb}</p>
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#c4622d]/10 text-[#8b3a1a]">{item.caveat}</span>
                    </div>
                    <p className="text-black/65 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
              <p className="text-black/55 text-xs italic">For all tonic herbs: fruiting body only, dual-extracted. The difference between properly extracted Reishi and mycelium-on-grain products is not marginal — it's whether the active compounds are present at all.</p>
              <AffilLink href="https://hyperionherbs.com" label="Shop Hyperion Herbs — Use discount code EDEN10" />
            </StepCard>

            <StepCard number="7" title="Magnesium — The Overnight Deficit You're Not Addressing">
              <p>
                Most people don't know that magnesium depletes significantly during sleep — specifically during REM sleep and through urinary excretion overnight. Waking up in a mild magnesium deficit is common and contributes to morning anxiety, muscle tension, and cognitive fog that gets mistakenly attributed to poor sleep.
              </p>
              <p>
                Magnesium directly modulates GABA receptors. Adequate magnesium supports the parasympathetic nervous system's ability to activate calm — exactly what you need to transition cleanly from the stress-adjacent state of early waking into functional calm alertness.
              </p>
              <div className="space-y-3">
                <div className="card-glass rounded-xl p-5" data-testid="product-bioptimizers">
                  <p className="font-semibold text-black/90 text-sm mb-1">BiOptimizers Magnesium Breakthrough</p>
                  <p className="text-black/65 text-sm leading-relaxed mb-2">7 forms for full-spectrum absorption. The glycinate component supports GABA function and calm. The threonate crosses the blood-brain barrier. The malate supports morning energy production through the Krebs cycle.</p>
                  <AffilLink href="https://bioptimizers.com" label="Shop BiOptimizers Magnesium Breakthrough — Use discount code THRIVETOOLS" />
                </div>
                <div className="card-glass rounded-xl p-5" data-testid="product-organika">
                  <p className="font-semibold text-black/90 text-sm mb-1">Organika 8-in-1 Magnesium <span className="text-[10px] font-normal text-black/40 ml-1">(Canadian readers)</span></p>
                  <p className="text-black/65 text-sm leading-relaxed mb-2">Same multi-form spectrum, ships domestically within Canada.</p>
                  <AffilLink href="https://organika.com/products/8-in-1-magnesium?_pos=1&_psq=magn&_ss=e&_v=1.0" label="Shop Organika 8-in-1 Magnesium — Use discount code EDEN_25" />
                </div>
              </div>
            </StepCard>

            <StepCard number="8" title="Intentional Practice Before Input">
              <p>
                This is the element most people skip, and its absence is the most common reason morning routines fail to produce nervous system regulation benefits.
              </p>
              <p>
                Every morning that starts with news, social media, messages, or the to-do list is a morning where you've handed your nervous system's first inputs to external sources whose incentive structures are directly opposed to your calm. Social media algorithms are optimized for arousal — outrage, anxiety, comparison, FOMO. The nervous system doesn't distinguish between digital stress and physical stress. The cortisol and sympathetic activation you get from scrolling a stressful feed at 7am is physiologically similar to a minor threat response. Starting every day with this input conditions your nervous system toward baseline hypervigilance over time.
              </p>
              <p>
                The alternative: 10–20 minutes of intentional inward practice before the first external input. Meditation, breathwork, journaling, prayer, or simply sitting quietly with your morning drink. The content matters less than the direction — inward, not outward.
              </p>
              <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
                <p className="font-semibold text-black/85 text-sm mb-1.5">The physiological sigh</p>
                <p className="text-black/65 text-sm leading-relaxed">A double inhale through the nose followed by a long, complete exhale activates the parasympathetic nervous system within seconds by deflating overinflated alveoli and triggering the vagal response. Three rounds can shift a mildly activated nervous system into a calm, grounded state within 60 seconds. The fastest nervous system regulation tool available, anywhere, free.</p>
              </div>
              <div className="card-glass rounded-xl p-5" data-testid="product-oxygen-advantage">
                <p className="font-semibold text-black/90 text-sm mb-1">Oxygen Advantage</p>
                <p className="text-black/65 text-sm leading-relaxed mb-2">For a structured breathwork curriculum — the most evidence-based online courses available, built around Patrick McKeown's nasal breathing method.</p>
                <AffilLink href="https://oxygenadvantage.com" label="Shop Oxygen Advantage — Use discount code THRIVETOOLS" />
              </div>
            </StepCard>

          </div>
        </section>

        <div className="section-divider" />

        {/* Full Sequence */}
        <section data-testid="section-sequence">
          <SectionHeader icon={<Clock className="w-5 h-5" />} title="The Full Sequence" />
          <p className="text-black/70 leading-relaxed mb-5">Here's the complete protocol in order, with realistic timing:</p>
          <div className="space-y-2">
            {[
              { time: "0–5 min", action: "Get outside. No phone. Natural light in eyes. Bare feet on ground if possible." },
              { time: "5–20 min", action: "500ml water with electrolytes or IM8. Begin tonic herb preparation." },
              { time: "20–40 min", action: "Intentional movement — walk, yoga, mobility, ecstatic free movement. Low intensity." },
              { time: "40–60 min", action: "Ceremonial cacao or tonic herb drink. Journaling, meditation, or breathwork. Phone still on airplane mode." },
              { time: "60–90 min", action: "First focused work block. Deepest cognitive work of the day. Tonic herbs and cacao fully active." },
              { time: "90–120 min", action: "Caffeine if desired. Adenosine fully cleared. Cortisol peak naturally subsiding." },
              { time: "Ongoing", action: "Magnesium (best taken at night before bed for the overnight depletion protocol, but morning works too)." },
            ].map((item, i) => (
              <div key={i} className="card-glass rounded-xl p-4 flex gap-4 items-start" data-testid={`sequence-${i}`}>
                <span className="flex-shrink-0 text-[#c4622d] font-bold font-display text-sm w-20">{item.time}</span>
                <p className="text-black/70 text-sm leading-relaxed">{item.action}</p>
              </div>
            ))}
          </div>
          <div className="card-glass rounded-xl px-5 py-4 mt-4">
            <p className="text-black/75 text-sm font-medium">Total investment: 60–90 minutes. Non-negotiable time that sets the biological architecture for everything that follows.</p>
          </div>
        </section>

        <div className="section-divider" />

        {/* What to Drop */}
        <section data-testid="section-drop">
          <SectionHeader icon={<Brain className="w-5 h-5" />} title="What to Drop From Your Current Morning Routine" />
          <div className="space-y-3">
            {[
              { habit: "Immediate phone check", why: "Even 5 minutes of news or social media before your system has settled costs you physiologically for hours. The highest-cost habit in terms of nervous system dysregulation." },
              { habit: "Coffee immediately upon waking", why: "The adenosine-blocking mechanism means you're robbing from afternoon energy to pay for morning stimulation. The math doesn't work long-term." },
              { habit: "Skipping water", why: "You've been fasting for 8 hours. Your cells need fluid before they need coffee." },
              { habit: "Intense exercise before adequate food if you're HPA-dysregulated", why: "For people already running on cortisol overdraft, morning HIIT accelerates the debt. Walk first. Save the intensity for when your body has resources to fund it." },
              { habit: "A routine so elaborate it creates its own pressure", why: "If your morning routine stresses you out, it's not regulating your nervous system — it's adding to the load. A simple, consistent sequence of 4–5 things done daily beats an ambitious 12-step protocol done twice a week." },
            ].map((item, i) => (
              <div key={i} className="card-glass rounded-xl p-5 border-l-4 border-red-400/40" data-testid={`drop-${i}`}>
                <p className="font-semibold text-black/90 text-sm mb-1">❌ &nbsp;{item.habit}</p>
                <p className="text-black/65 text-sm leading-relaxed">{item.why}</p>
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
              { q: "How long before I notice a difference?", a: "Morning light and hydration produce noticeable effects within days — most people report meaningfully better afternoon energy within a week of delaying caffeine and getting morning light. Tonic herbs take 4–6 weeks for noticeable nervous system baseline shifts. The full compounding effect of a consistent morning protocol takes 60–90 days to fully manifest." },
              { q: "Do I need to wake up early for this to work?", a: "No. The protocol works at whatever time you wake up — the key variable is getting light soon after waking, regardless of the clock time. Consistency of wake time matters more than earliness. A consistent 8am wake time with the full protocol outperforms a chaotic 5am wake time every time." },
              { q: "What if I don't have time for all of this?", a: "The non-negotiables if you only have 15 minutes: outside for morning light (5 min), glass of water, delay coffee, no phone until you've done the first two. That's the minimum viable version that still delivers most of the benefit." },
              { q: "Can I do breathwork instead of meditation?", a: "Yes — and for many people it works better. Breathwork produces more immediate, measurable physiological changes than seated meditation for most beginners. The physiological sigh (double inhale, long exhale) is the fastest tool available for acute nervous system regulation. Even 2–3 minutes has meaningful effect." },
              { q: "Is ceremonial cacao a replacement for coffee?", a: "Not a direct replacement — theobromine and caffeine produce different energy profiles. Cacao gives calm alertness; coffee gives sharper, shorter stimulation. Many people find cacao ideal for the pre-caffeine window and then take coffee later. Some switch entirely. It depends on what you're optimizing for." },
              { q: "What's the most important thing to add if I'm currently doing nothing?", a: "Morning light. Every day, outside, within 30 minutes of waking, no sunglasses. It costs nothing and the downstream effects — better sleep, more stable energy, improved mood — are among the most consistently reported changes people notice when they start." },
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
              { text: 'Stalder T, et al. "The Cortisol Awakening Response: Regulation and Functional Significance." ', journal: "Endocrine Reviews", year: "2025.", href: "https://academic.oup.com/edrv/article/46/1/43/7739741" },
              { text: 'Huberman Lab. "Using Light for Health." ', journal: "Huberman Lab", year: "2024.", href: "https://www.hubermanlab.com/newsletter/using-light-for-health" },
              { text: 'Klaas S, et al. "Awakening not associated with an increased rate of cortisol secretion." ', journal: "Proceedings of the Royal Society B", year: "2025.", href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11732391/" },
              { text: '"Circadian Rhythms and Modifiable Lifestyle Factors." ', journal: "Institute for Functional Medicine", year: "2024.", href: "https://www.ifm.org/articles/circadian-rhythms-and-modifiable-lifestyle-factors" },
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
