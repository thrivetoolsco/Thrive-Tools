import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Brain, AlertTriangle, Moon, Sun, Leaf, Heart, FlaskConical, Activity, Calendar, Zap } from "lucide-react";

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-[#c4622d]">{icon}</span>
      <h2 className="font-display text-2xl font-bold text-black">{title}</h2>
    </div>
  );
}

function StackTip({ children }: { children: React.ReactNode }) {
  return (
    <div className="card-glass rounded-xl p-5 mt-6 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
      <p className="text-black/50 text-xs uppercase tracking-wider mb-2">Stack Tip</p>
      <p className="text-black/70 text-sm leading-relaxed">{children}</p>
    </div>
  );
}

function SupplementCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card-glass rounded-xl p-6">
      <p className="font-semibold text-black/90 text-base mb-3" style={{ background: "linear-gradient(135deg,#e8956d,#c4622d,#8b3a1a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{title}</p>
      <div className="text-black/70 text-sm leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

const layers = [
  "Layer 1: Sleep",
  "Layer 2: Light and circadian rhythm",
  "Layer 3: Nutrition and fasting",
  "Layer 4: Movement and stress",
  "Layer 5: Supplements",
  "Layer 6: Devices and advanced tools",
];

const weeks = [
  {
    label: "Week 1: Sleep and Light",
    desc: "Set a consistent sleep schedule. No screens after 9pm. Morning sunlight within 30 minutes of waking.",
  },
  {
    label: "Week 2: Nutrition",
    desc: "Remove processed sugar and alcohol. Start tracking how food affects your energy and mood. Add IM8 Essentials Pro each morning.",
  },
  {
    label: "Week 3: Fasting and Supplements",
    desc: "Try a 12-hour overnight fast. Add BiOptimizers Magnesium Breakthrough at night and AquaOmega with meals. Start Organika Creatine daily.",
  },
  {
    label: "Week 4: Stress and Breathwork",
    desc: "Add 5 to 10 minutes of breathwork daily. Add Hyperion Lion's Mane in the morning and Reishi in the evening. Start tracking HRV if you have a wearable.",
  },
];

const avoidItems = [
  { heading: "Changing too many things at once", detail: "you won't know what's working." },
  { heading: "Buying devices before fixing foundations", detail: "gadgets amplify good habits, they don't replace them." },
  { heading: "Following someone else's exact protocol", detail: "what works for a world-class athlete may not work for your biology, lifestyle, or stress levels." },
  { heading: "Expecting overnight results", detail: "energy levels typically improve within 3 to 5 days of fixing sleep and hydration; body composition changes take 4 to 6 weeks; neuroplasticity takes about 30 days of consistency." },
];

export default function BiohackingBeginnersGuide() {
  return (
    <PageLayout
      title="Biohacking for Beginners"
      subtitle="The Complete 2026 Starter Guide"
      backLabel="Product Reviews"
      backHref="/product-reviews"
    >
      <article className="space-y-12">

        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border border-[#c4622d]/25 rounded-full px-3 py-0.5 text-xs">
            Beginner's Guide
          </Badge>
          <Badge className="bg-white/5 text-black/50 border border-white/10 rounded-full px-3 py-0.5 text-xs">
            2026 Edition
          </Badge>
        </div>

        <section data-testid="section-intro">
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              You've probably seen the word everywhere. Cold plunges, red light therapy, nootropics, continuous glucose monitors, PEMF mats, NAD+ injections. And you've probably thought: <em>where on earth do I even start?</em>
            </p>
            <p>
              Here's the truth most biohacking content won't tell you: the foundations of biohacking are free. You can start by focusing on sleep, light, hydration, and movement without spending a single dollar, and those foundations will do more for your health than any gadget or supplement stack you add on top of a broken baseline.
            </p>
            <p>
              This guide is for people starting from zero. No jargon, no overwhelm, no pressure to spend thousands. Just a clear, step-by-step framework for taking control of your biology, knowing exactly when and how to layer in more advanced tools.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-what">
          <SectionHeader icon={<Brain className="w-5 h-5" />} title="What Is Biohacking, Actually?" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Biohacking is the practice of changing your chemistry and physiology through science and self-experimentation to energize and enhance the body. No longer confined to labs or experts, it's becoming more accessible to anyone willing to <em>methodically</em> and safely experiment with their own body.
            </p>
            <p>
              The key word is <em>methodically</em>. Biohackers experiment, get data, and then use that data to evolve, continuously improving inputs to upgrade outputs. That's what separates biohacking from wellness trends: it's not about following someone else's protocol. It's about running your own experiments and tracking what actually works for <em>you</em>.
            </p>
            <p>
              And you may already be doing it. If you've ever sipped a cup of coffee for more brain energy, taken a vitamin to improve your health, or exercised to increase muscle mass, you're a biohacker.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-mistake">
          <SectionHeader icon={<AlertTriangle className="w-5 h-5" />} title="The Beginner's Mistake: Starting at the Top" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Most people new to biohacking start by buying gadgets, an Oura Ring, a red light panel, a PEMF mat, or a shelf full of supplements. That's backwards.
            </p>
            <p>
              The biggest mistake beginners make is buying expensive devices while still eating ultra-processed food, sleeping 5 hours, and living with chronic stress. You're polishing the cannonball, optimizing minor variables while ignoring the major ones.
            </p>
            <p>The hierarchy matters. Fix your foundations first, then layer in tools and supplements. Here's that order:</p>
          </div>

          <div className="mt-6 space-y-2">
            {layers.map((layer, i) => (
              <div key={i} className="flex items-center gap-3 card-glass rounded-xl px-5 py-3" data-testid={`layer-item-${i}`}>
                <span className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white" style={{ background: "linear-gradient(135deg,#e8956d,#c4622d)" }}>{i + 1}</span>
                <span className="text-black/75 text-sm font-medium">{layer}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-black/70 leading-relaxed">
            Most beginners skip straight to Layer 5 or 6. The optimizers who get the best results start at Layer 1 and work their way up.
          </p>
        </section>

        <div className="section-divider" />

        <section data-testid="section-sleep">
          <SectionHeader icon={<Moon className="w-5 h-5" />} title="Layer 1: Sleep. The Most Powerful Biohack in Existence" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Sleep is the most important biohack of all. While you sleep, you cannot eat, fight, flee, or reproduce, and yet sleep has prevailed in evolution because it is simply necessary. It is the basis for all regeneration processes in the body. Without it, nothing works properly.
            </p>
            <p>Before you add anything else, get your sleep dialed in:</p>
          </div>

          <ul className="mt-4 space-y-3">
            {[
              "Set a consistent bedtime and wake time, even on weekends.",
              "Keep your bedroom cool (around 18°C / 64°F is optimal for most people).",
              "Avoid screens and artificial lighting 2 to 3 hours before bed. The light from your phone, TV, and LEDs interferes with your circadian rhythm.",
              "Aim for at least 7 to 9 hours, with 1.5 hours of deep sleep and 1.5 hours of REM.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70 leading-relaxed" data-testid={`sleep-tip-${i}`}>
                <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#c4622d]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-black/70 leading-relaxed">
            Once your sleep is consistently good, every other intervention you add, supplements, exercise, breathwork, becomes dramatically more effective.
          </p>
        </section>

        <div className="section-divider" />

        <section data-testid="section-light">
          <SectionHeader icon={<Sun className="w-5 h-5" />} title="Layer 2: Light. Your Circadian Anchor" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Your circadian rhythm governs nearly every hormonal and metabolic process in your body. The single most effective way to regulate it costs nothing: get outside within 30 minutes of waking and expose your eyes to natural morning light.
            </p>
            <p>
              Get natural daylight, especially first thing, to help with cognitive behaviour. Reduce blue light from screens and avoid caffeine in the evenings to help you wind down and sleep better.
            </p>
            <p className="font-semibold text-black/80">
              This one habit, morning light and reduced evening light, is the free foundation that makes everything else work better.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-nutrition">
          <SectionHeader icon={<Leaf className="w-5 h-5" />} title="Layer 3: Nutrition and Fasting" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              You don't need a rigid diet to start biohacking your nutrition. Instead of following generic diet plans, start by tracking what you eat and observing how different foods affect you. Take note of how you feel after meals, do you experience bloating, fatigue, or brain fog?
            </p>
            <p>
              When you're ready to go further, intermittent fasting is one of the most well-researched beginner biohacks. A simple way to start is with a 12-hour overnight fast. Once comfortable, you can extend to the popular 16:8 method, fasting for 16 hours and eating within an 8-hour window. Fasting can help regulate blood sugar levels, improve focus, and support weight management.
            </p>
            <p>
              The basics: prioritize whole foods, reduce processed sugar, stay well hydrated, and stop eating 2 to 3 hours before bed.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-movement">
          <SectionHeader icon={<Heart className="w-5 h-5" />} title="Layer 4: Movement and Stress" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Stress is one of the most underestimated disruptors of health. By reducing chronic stress, we allow the body to repair, the mind to focus, and hormones to stabilize. Even five minutes of deep breathing a day can activate the parasympathetic nervous system, the "rest and digest" mode, helping your body calm down and recharge.
            </p>
            <p>
              For movement, you don't need to optimize before you start. Walk more, lift something heavy a few times per week, and spend time in nature. Zone 2 cardio (a pace where you can hold a conversation) is the most researched form of exercise for longevity and metabolic health.
            </p>
            <p>
              For stress: breathwork is one of ThriveTools' core pillars. Explore our Breathwork page for evidence-based techniques that take less than 10 minutes a day and produce measurable improvements in HRV and cortisol.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-supplements">
          <SectionHeader icon={<FlaskConical className="w-5 h-5" />} title="Layer 5: Supplements. The Smart Beginner's Stack" />
          <div className="space-y-4 text-black/70 leading-relaxed mb-8">
            <p>
              Once your foundations are solid, supplements become genuinely powerful. The mistake most beginners make is adding 10 supplements at once. Change one variable at a time. Test for 2 to 4 weeks, measure results, then add the next intervention.
            </p>
            <p>
              Here's the beginner-friendly stack we recommend at ThriveTools, built around five of the most credible brands in the space:
            </p>
          </div>

          <div className="space-y-5">
            <SupplementCard title="Start Here: IM8 Daily Ultimate Essentials Pro">
              <p>
                Before adding individual supplements, consolidate your nutritional foundation. IM8's Daily Ultimate Essentials Pro packs 90+ clinically dosed ingredients into a single daily drink, vitamins, minerals, greens, superfoods, pre/pro/postbiotics, and CoQ10, all in bioavailable forms. It's the cleanest all-in-one on the market, NSF Certified for Sport and independently third-party tested for purity, potency, and banned substances. For beginners, one scoop in the morning replaces an entire shelf of separate supplements.
              </p>
            </SupplementCard>

            <SupplementCard title="Magnesium: BiOptimizers Magnesium Breakthrough">
              <p>
                Most people are magnesium deficient, and it silently undermines sleep, energy, and cognitive function. The challenge is that different forms of magnesium reach different tissues, so single-form products leave gaps. BiOptimizers Magnesium Breakthrough delivers 500mg across 7 bioavailable forms: chelate, glycinate, malate, citrate, orotate, sucrosomial, and taurate, providing full-spectrum magnesium support across multiple body systems. Take 2 capsules with your evening meal to support sleep quality and nervous system recovery.
              </p>
            </SupplementCard>

            <SupplementCard title="Omega-3: AquaOmega">
              <p>
                Brain health, inflammation, mood, and cardiovascular function all depend on adequate EPA and DHA. Most fish oil products are poorly concentrated or poorly absorbed. AquaOmega delivers omega-3 in its triglyceride form, the most natural and bioavailable state, free from artificial additives, contaminants, and heavy metals. It's IFOS 5-star certified and a beginner friendly daily essential that most people are chronically under-dosed in.
              </p>
            </SupplementCard>

            <SupplementCard title="Creatine: Organika">
              <p>
                Creatine isn't just for athletes. It's one of the safest, most researched cognitive and physical performance supplements in existence, and it's ideal for beginners because the evidence is overwhelming, the dosing is simple, and the cost is low. Organika's Creatine Monohydrate is made from pure creatine without fillers or additives, manufactured in a GMP-certified facility by a BC-based Canadian company with over 34 years in the industry. Take 10g daily, no loading phase, no cycling required.
              </p>
            </SupplementCard>

            <SupplementCard title="Mushrooms: Hyperion Herbs">
              <p>
                Natural nootropics such as Lion's Mane mushroom are popular for long-term brain support without overstimulation. Hyperion Herbs is the gold standard for medicinal mushroom extracts, dual-extracted fruiting bodies with no fillers, no mycelium-on-grain filler products. Start with Lion's Mane for cognitive support and Reishi in the evening for immune support, cortisol regulation, and sleep quality. Both are beginner friendly with no stimulant effect.
              </p>
            </SupplementCard>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-tracking">
          <SectionHeader icon={<Activity className="w-5 h-5" />} title="Layer 6: Tracking. If You Can't Measure It, You Can't Hack It" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              You don't need expensive equipment to start. A simple health journal, logging sleep, food, energy, and mood, can reveal patterns and help you make informed choices. For those ready to dive deeper, wearables like Oura Rings or WHOOP bands can provide actionable insights.
            </p>
            <p>At minimum, track:</p>
          </div>
          <ul className="mt-4 space-y-3">
            {[
              "Sleep duration and quality (subjective score out of 10).",
              "Morning energy level (1 to 10).",
              "One cognitive marker: focus, memory, processing speed.",
              "HRV if you have a wearable.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70 leading-relaxed" data-testid={`tracking-item-${i}`}>
                <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#c4622d]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="section-divider" />

        <section data-testid="section-plan">
          <SectionHeader icon={<Calendar className="w-5 h-5" />} title="Your 4-Week Beginner Biohacking Plan" />
          <p className="text-black/70 leading-relaxed mb-6">Rather than changing everything at once, here's a simple ramp-up:</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {weeks.map((week, i) => (
              <div key={i} className="card-glass rounded-xl p-5" data-testid={`week-card-${i}`}>
                <p className="font-semibold text-sm mb-2" style={{ background: "linear-gradient(135deg,#e8956d,#c4622d,#8b3a1a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{week.label}</p>
                <p className="text-black/65 text-sm leading-relaxed">{week.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-black/70 leading-relaxed">
            By the end of week 4, you'll have a personalized baseline and a real sense of what's working, which is the entire point of biohacking.
          </p>
        </section>

        <div className="section-divider" />

        <section data-testid="section-avoid">
          <SectionHeader icon={<AlertTriangle className="w-5 h-5" />} title="What to Avoid as a Beginner" />
          <div className="space-y-4">
            {avoidItems.map((item, i) => (
              <div key={i} className="card-glass rounded-xl p-5" data-testid={`avoid-item-${i}`}>
                <p className="font-semibold text-black/90 text-sm mb-1">{item.heading}</p>
                <p className="text-black/65 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-deeper">
          <SectionHeader icon={<Zap className="w-5 h-5" />} title="Ready to Go Deeper?" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Once you have the foundations down, the world of biohacking opens up. Breathwork protocols, PEMF therapy, red light, cold exposure, personalized bloodwork, and advanced supplement stacks. At ThriveTools, we cover all of it.
            </p>
            <p>
              If you want a personalized protocol built around your specific biology, goals, and lifestyle, explore our <a href="/personalized-guidance" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">Personalized Guidance</a> program, the fastest way to skip the trial and error phase and build a system that actually works for you.
            </p>
          </div>
        </section>

        <div className="text-center pt-4">
          <Button asChild size="lg" className="btn-gradient-rose text-white border-0 rounded-full px-6 sm:px-8 py-4 text-sm tracking-widest uppercase font-semibold h-auto leading-relaxed">
            <a href="/discount-codes" data-testid="link-discount-codes" className="inline-flex items-center justify-center gap-2 flex-wrap">
              Explore Discount Codes <ExternalLink className="w-4 h-4 flex-shrink-0" />
            </a>
          </Button>
        </div>

        <p className="text-center text-black/35 text-xs italic" data-testid="text-disclaimer">
          Medical Disclaimer: This article is for informational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional before making significant changes to your diet, lifestyle, or supplement regimen.
        </p>

      </article>
    </PageLayout>
  );
}
