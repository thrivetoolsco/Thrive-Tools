import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Brain, Wind, Calendar, ShieldCheck, Zap, Activity } from "lucide-react";

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-[#c4622d]">{icon}</span>
      <h2 className="font-display text-2xl font-bold text-black">{title}</h2>
    </div>
  );
}

function TechniqueCard({
  number,
  name,
  bestFor,
  time,
  steps,
  notice,
}: {
  number: number;
  name: string;
  bestFor: string;
  time: string;
  steps: string[];
  notice: string;
}) {
  return (
    <div className="card-glass rounded-2xl p-6 space-y-5" data-testid={`technique-card-${number}`}>
      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: "linear-gradient(135deg,#e8956d,#c4622d)" }}>{number}</span>
        <div>
          <h3 className="font-display text-xl font-bold text-black">{name}</h3>
          <div className="flex flex-wrap gap-4 mt-2 text-xs text-black/50">
            <span><span className="font-semibold text-black/70">Best for:</span> {bestFor}</span>
            <span><span className="font-semibold text-black/70">Time:</span> {time}</span>
          </div>
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-black/40 mb-3">How to do it</p>
        <ul className="space-y-2">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-black/70 text-sm leading-relaxed">
              <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#c4622d]" />
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-l-4 pl-4" style={{ borderLeftColor: "#c4622d" }}>
        <p className="text-xs font-semibold uppercase tracking-wider text-black/40 mb-1">What you'll notice</p>
        <p className="text-black/65 text-sm leading-relaxed italic">{notice}</p>
      </div>
    </div>
  );
}

const researchAreas = [
  {
    label: "Stress and anxiety",
    text: "A 1979 study from The Journal of Personality and Social Psychology proved that controlled breathing exercises could be used as an effective coping strategy in stressful situations. A more recent 2016 study introduced a diaphragmatic breathing program to participants with anxiety, who demonstrated a reduction in anxiety scores after practicing the technique daily.",
  },
  {
    label: "Mood",
    text: "A randomized controlled trial comparing three breathwork techniques against mindfulness meditation over one month found that breathwork, especially exhale-focused cyclic sighing, produced greater improvement in mood and reduction in respiratory rate compared with mindfulness meditation.",
  },
  {
    label: "Cognition",
    text: "Breathing techniques such as coherent breathing improve communication between the right and left hemispheres of the brain and increase oxygen levels. A 2025 study showed how breathing impacts brain structures like the amygdala and hippocampus, both associated with focus and memory, demonstrating that breathing patterns can directly influence cognitive function.",
  },
  {
    label: "Blood pressure and heart health",
    text: "Slow, deep breathing exercises activate the parasympathetic nervous system, which decreases heart rate and dilates blood vessels, helping to reduce blood pressure as the body moves into a state of relaxation.",
  },
  {
    label: "Sleep",
    text: "Breathwork calms the nervous system and promotes the relaxation needed to release melatonin, the sleep-inducing hormone, making evening breathwork one of the most direct non-pharmacological tools for improving sleep quality.",
  },
  {
    label: "Pain management",
    text: "A 2012 study published in the National Library of Medicine found that participants with chronic pain syndromes who practiced relaxing breathing techniques saw an increased ability to process pain, along with reduced stress levels and a decrease in negative emotions.",
  },
];

const techniques = [
  {
    number: 1,
    name: "Diaphragmatic Breathing (Belly Breathing)",
    bestFor: "Anxiety, stress, building a foundation",
    time: "5 to 10 minutes",
    steps: [
      "Lie on your back with knees bent, or sit comfortably upright.",
      "Place one hand on your chest, one on your belly.",
      "Inhale slowly through your nose for 4 to 5 seconds. Your belly should rise, your chest should stay relatively still.",
      "Exhale slowly through your nose or mouth for 4 to 5 seconds. Feel your belly fall.",
      "Beginners should try this lying on their back with knees bent and hands over the belly to better feel each breath expand the stomach.",
      "Repeat for 5 to 10 minutes.",
    ],
    notice: "A rapid sense of calm, reduced heart rate, and a drop in mental chatter within just a few minutes.",
  },
  {
    number: 2,
    name: "Box Breathing (4-4-4-4)",
    bestFor: "Focus, pre-performance, stress recovery",
    time: "4 to 5 minutes",
    steps: [
      "Inhale through your nose for 4 counts.",
      "Hold your breath for 4 counts.",
      "Exhale through your mouth for 4 counts.",
      "Hold empty for 4 counts.",
      "That's one box. Repeat 4 to 6 times.",
    ],
    notice: "Rapid mental clarity and a grounded, present feeling. Particularly effective before high-stakes situations like presentations, difficult conversations, or workouts.",
  },
  {
    number: 3,
    name: "Cyclic Sighing (Physiological Sigh)",
    bestFor: "Immediate stress relief, mood improvement",
    time: "1 to 5 minutes",
    steps: [
      "Take a full inhale through your nose.",
      "At the top of the inhale, take a second, shorter sniff to fully expand the lungs.",
      "Release everything in one long, slow exhale through the mouth. Make the exhale as long as possible.",
      "That's one cycle. Repeat 5 to 10 times.",
    ],
    notice: "An almost immediate drop in heart rate and a release of physical tension. Most people feel noticeably calmer within 2 to 3 cycles.",
  },
  {
    number: 4,
    name: "4-7-8 Breathing",
    bestFor: "Sleep, winding down, anxiety",
    time: "4 minutes",
    steps: [
      "Exhale completely through your mouth with a whooshing sound.",
      "Close your mouth and inhale through your nose for 4 counts.",
      "Hold your breath for 7 counts.",
      "Exhale completely through your mouth for 8 counts.",
      "Repeat 4 cycles to start; build to 8 over time.",
    ],
    notice: "Deep physical relaxation and drowsiness. This one is particularly effective as part of a pre-sleep wind-down routine. Breathwork calms the nervous system and promotes the relaxation needed to release melatonin, making 4-7-8 one of the most practical tools for falling asleep faster.",
  },
  {
    number: 5,
    name: "Coherent Breathing (5-5 Breathing)",
    bestFor: "HRV improvement, daily resilience, long-term practice",
    time: "10 to 20 minutes",
    steps: [
      "Breathe in slowly and gently through the nose for five to six seconds.",
      "Breathe out slowly through the nose for five to six seconds.",
      "Each breath should feel like a continuous cycle with no pauses.",
      "Continue for 10 to 20 minutes.",
    ],
    notice: "Coherent breathing doesn't produce the immediate dramatic effect of cyclic sighing or 4-7-8. Its power is cumulative. Practitioners who do 10 to 20 minutes daily report measurable improvements in HRV, resting heart rate, and stress resilience within 4 to 6 weeks.",
  },
];

const weeks = [
  {
    label: "Week 1",
    desc: "Diaphragmatic breathing only. 5 minutes every morning. Focus on feeling the belly rise and fall. This rewires your default breathing pattern at the foundation level.",
  },
  {
    label: "Week 2",
    desc: "Add box breathing. Use it once per day when you feel stressed or before a demanding task. Notice how quickly it resets your mental state.",
  },
  {
    label: "Week 3",
    desc: "Add cyclic sighing. 5 cycles any time stress spikes during the day. This is your emergency brake. Also try 4-7-8 for 4 cycles before bed.",
  },
  {
    label: "Week 4",
    desc: "Begin coherent breathing. 10 minutes in the morning as a standalone practice. Track your resting HRV if you have a wearable and watch what happens over the following weeks.",
  },
];

const safetyItems = [
  "If you feel dizzy or uncomfortable while doing breathwork, stop and return to normal breathing. Breathing should never be forced or strained, the aim is to remove layers of stress, not create more.",
  "Never practice intense breathwork while driving or in water.",
  "Pregnant women, and people with cardiovascular conditions, epilepsy, or severe anxiety disorders should consult a healthcare professional before beginning any advanced breathwork practice.",
  "Start with slow, gentle techniques (diaphragmatic, box, coherent) before progressing to more intense practices like Wim Hof or holotropic breathwork.",
];

export default function BreathworkBeginnersGuide() {
  return (
    <PageLayout
      title="Breathwork for Beginners"
      subtitle="The Complete Science-Backed Guide (2026)"
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
              You already do it 20,000 times a day without thinking. But what happens when you start thinking about it, deliberately, intentionally, with purpose?
            </p>
            <p>
              That's breathwork. And the science behind what conscious breathing can do to your brain, nervous system, stress hormones, sleep quality, and cognitive performance is genuinely surprising.
            </p>
            <div className="card-glass rounded-xl p-5 border-l-4 my-6" style={{ borderLeftColor: "#c4622d" }}>
              <p className="text-black/70 text-sm leading-relaxed italic">
                "Breathwork is one of the simplest and most profoundly effective tools we have for calming the nervous system and boosting physical and mental resilience. And yet, precisely because it's so accessible, its power is often underestimated."
              </p>
              <p className="text-black/40 text-xs mt-2 not-italic">Guy Fincham, founder of the breathwork lab at Brighton & Sussex Medical School</p>
            </div>
            <p>
              This guide is for complete beginners. No experience required, no equipment needed, no expensive courses. Just a clear explanation of what breathwork is, why it works, and five techniques you can start using today, most of which take five minutes or less.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-what">
          <SectionHeader icon={<Wind className="w-5 h-5" />} title="What Is Breathwork?" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Breathwork is an umbrella term for any practice that involves deliberately controlling your breathing pattern for a specific purpose, calming your nervous system, boosting energy, improving focus, processing emotions, or enhancing physical performance.
            </p>
            <p>
              Breathing exercises have been practiced since ancient times, traced back to Buddhism, Hinduism, Taoism, and Shamanism. Breathwork was reintroduced to the modern world in the 1960s when Holotropic Breathwork and Rebirthing Breathwork were first developed, and since then many more techniques have been created and adapted for the present day.
            </p>
            <p>
              What's changed recently is the science. Breathwork has become one of the fastest-growing trends in the wellness industry, with breathing studios popping up in cities all over the world and breathwork researchers making increasingly bold claims, backed by increasingly solid data.
            </p>
            <p>
              The core mechanism is simple: many of us become shallow breathers over time, which causes us to enter fight-or-flight mode more easily. Breathwork helps correct our breathing and take fuller breaths, which signal to the body that we're safe. Most techniques are slow to help us relax, but there are also rapid breathing exercises that can be beneficial too.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-science">
          <SectionHeader icon={<Brain className="w-5 h-5" />} title="Why Breathwork Works: The Science" />
          <div className="space-y-4 text-black/70 leading-relaxed mb-8">
            <p>
              Here's what makes breathwork genuinely remarkable as a health tool, it gives you direct, real-time access to your autonomic nervous system. That's the system that controls heart rate, digestion, stress hormones, immune function, and dozens of other processes you normally have no conscious control over. Your breath is the bridge.
            </p>
            <p>
              Controlled breathwork practices have emerged as powerful tools for stress management and well-being. Our understanding of the effects of breathing on the brain and body allows us to design specific science-supported breath practices to improve stress tolerance and sleep, enhance energy, focus, and creativity, and regulate emotional and cognitive states.
            </p>
            <p>The research is compelling across multiple areas:</p>
          </div>

          <div className="space-y-4">
            {researchAreas.map((area, i) => (
              <div key={i} className="card-glass rounded-xl p-5" data-testid={`research-area-${i}`}>
                <p className="font-semibold text-black/90 text-sm mb-2">{area.label}</p>
                <p className="text-black/65 text-sm leading-relaxed">{area.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-black/70 leading-relaxed">
            The bottom line: conscious breathing comes with a host of immediate and long-term benefits including improved heart health, reduced anxiety, boosted mood, improved cognitive function, and better sleep quality. And it costs nothing.
          </p>
        </section>

        <div className="section-divider" />

        <section data-testid="section-techniques">
          <SectionHeader icon={<Activity className="w-5 h-5" />} title="5 Breathwork Techniques for Beginners" />
          <p className="text-black/70 leading-relaxed mb-8">
            These five techniques are ordered from simplest to slightly more advanced. Start with the first two and add others over time.
          </p>
          <div className="space-y-6">
            {techniques.map((t) => (
              <TechniqueCard key={t.number} {...t} />
            ))}
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-plan">
          <SectionHeader icon={<Calendar className="w-5 h-5" />} title="How to Start: A Simple 4-Week Plan" />
          <div className="space-y-4 text-black/70 leading-relaxed mb-6">
            <p>
              The most common beginner mistake is trying a technique once, not feeling an immediate life-changing effect, and giving up. Like any practice, the benefits of breathwork emerge with consistent effort. Set aside dedicated time each day for breathwork exercises, even if it's just a few minutes. Over time, you'll notice cumulative positive effects on your wellbeing.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {weeks.map((week, i) => (
              <div key={i} className="card-glass rounded-xl p-5" data-testid={`week-card-${i}`}>
                <p className="font-semibold text-sm mb-2" style={{ background: "linear-gradient(135deg,#e8956d,#c4622d,#8b3a1a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{week.label}</p>
                <p className="text-black/65 text-sm leading-relaxed">{week.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-black/70 leading-relaxed">
            By the end of week 4, you'll have a full toolkit that covers morning activation, acute stress response, focus recovery, and pre-sleep wind-down.
          </p>
        </section>

        <div className="section-divider" />

        <section data-testid="section-safety">
          <SectionHeader icon={<ShieldCheck className="w-5 h-5" />} title="Safety: What Beginners Need to Know" />
          <p className="text-black/70 leading-relaxed mb-4">Breathwork is safe for the vast majority of people, but a few guidelines apply:</p>
          <ul className="space-y-3">
            {safetyItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70 leading-relaxed" data-testid={`safety-item-${i}`}>
                <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#c4622d]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="section-divider" />

        <section data-testid="section-beyond">
          <SectionHeader icon={<Zap className="w-5 h-5" />} title="Beyond the Basics" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Once you've built a consistent breathwork foundation, there's a much deeper world to explore, from Wim Hof Method and holotropic breathwork to pranayama and breath-based performance protocols. At ThriveTools, breathwork is one of our core pillars, and our <a href="/personalized-guidance" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">Personalized Guidance</a> program can help you build a breathwork and biohacking protocol tailored specifically to your physiology, goals, and lifestyle.
            </p>
            <p className="font-semibold text-black/80">
              You've already taken the hardest step. You're here, and you're curious. The rest is just practice.
            </p>
          </div>
        </section>

        <div className="text-center pt-4">
          <Button asChild size="lg" className="btn-gradient-rose text-white border-0 rounded-full px-6 sm:px-8 py-4 text-sm tracking-widest uppercase font-semibold h-auto leading-relaxed">
            <a href="/breathwork" data-testid="link-breathwork" className="inline-flex items-center justify-center gap-2 flex-wrap">
              Explore Breathwork Sessions <ExternalLink className="w-4 h-4 flex-shrink-0" />
            </a>
          </Button>
        </div>

        <p className="text-center text-black/35 text-xs italic" data-testid="text-disclaimer">
          Medical Disclaimer: This article is for informational purposes only and does not constitute medical advice. If you have any underlying health conditions, consult a qualified healthcare professional before beginning a breathwork practice.
        </p>

      </article>
    </PageLayout>
  );
}
