import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Brain, FlaskConical, Activity, User, BarChart2, Zap, ShieldCheck } from "lucide-react";

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
  evidence,
  description,
  howTo,
  idealFor,
}: {
  number: number;
  name: string;
  bestFor: string;
  time: string;
  evidence: string;
  description: string;
  howTo: string;
  idealFor: string;
}) {
  return (
    <div className="card-glass rounded-2xl p-6 space-y-5" data-testid={`technique-card-${number}`}>
      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: "linear-gradient(135deg,#e8956d,#c4622d)" }}>{number}</span>
        <div>
          <h3 className="font-display text-xl font-bold text-black">{name}</h3>
          <div className="mt-2 space-y-1 text-xs text-black/55">
            <p><span className="font-semibold text-black/70">Best for:</span> {bestFor}</p>
            <p><span className="font-semibold text-black/70">Time required:</span> {time}</p>
            <p><span className="font-semibold text-black/70">Evidence level:</span> {evidence}</p>
          </div>
        </div>
      </div>
      <p className="text-black/70 text-sm leading-relaxed">{description}</p>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-black/40 mb-2">How to practice</p>
        <p className="text-black/70 text-sm leading-relaxed">{howTo}</p>
      </div>
      <div className="border-l-4 pl-4" style={{ borderLeftColor: "#c4622d" }}>
        <p className="text-xs font-semibold uppercase tracking-wider text-black/40 mb-1">Ideal for</p>
        <p className="text-black/65 text-sm leading-relaxed italic">{idealFor}</p>
      </div>
    </div>
  );
}

const mechanisms = [
  {
    title: "Vagal tone activation",
    text: "The vagus nerve is the longest cranial nerve in your body, connecting your brain to your heart, lungs, gut, and immune system. Techniques like diaphragmatic breathing, the physiological sigh, and humming breath all activate the vagus nerve, the nerve that controls your heart rate, digestion, and your ability to relax. When your nervous system perceives safety through cues like gentle touch, soft voices, or deep breathing, the ventral vagus activates and genuine healing becomes possible.",
  },
  {
    title: "Interoception",
    text: "Interoception, awareness of internal bodily sensations, is central to how therapies like mindfulness and Somatic Experiencing reduce symptoms. Somatic methods help clients shift out of hyperarousal or freeze states and restore a sense of safety, thereby strengthening ventral vagal function. Noticing what's happening inside your body, without judgment, is itself a regulating act.",
  },
  {
    title: "Completing the stress cycle",
    text: "Somatic experiencing works by helping you complete what was interrupted. A stress response that never fully resolved leaves residual activation in the nervous system, tension, vigilance, emotional charge. Somatic resets help that activation move through to completion, rather than staying stuck in the body.",
  },
];

const techniques = [
  {
    number: 1,
    name: "Somatic Breathwork",
    bestFor: "Immediate nervous system regulation, anxiety, chronic stress, daily practice",
    time: "5 to 20 minutes",
    evidence: "Strong. Multiple RCTs.",
    description: "Somatic breathwork is more than just a set of breathing exercises. It's a gateway to profound inner peace and bodily harmony. Rooted in the principles of somatic experiencing, it emphasizes conscious breathing to regulate the autonomic nervous system, helping individuals transition from a state of fight-or-flight to one of rest and digest. What makes somatic breathwork distinct from standard breathwork is its emphasis on body sensation. Rather than mechanically following a breathing pattern, you're tracking what arises in your body: where do you feel the breath? Where is there tension or resistance? Somatic breathwork influences the central nervous system, promoting relaxation and reducing stress, which in turn can enhance the brain's neuroplasticity. It increases lung capacity by encouraging full expansion of the lungs, brings more oxygen to the blood supporting better energy levels, and activates the parasympathetic nervous system, the rest and digest response, counteracting stress-induced fight-or-flight activation.",
    howTo: "Begin with 5 minutes of slow diaphragmatic breathing. As you breathe, scan your body for areas of tension or activation. Don't try to fix anything, simply notice. Let the breath move toward areas of tightness naturally. Gradually extend the exhale longer than the inhale to shift into parasympathetic dominance.",
    idealFor: "Daily nervous system maintenance, anxiety management, pre-sleep wind-down, and as a gateway into deeper somatic work.",
  },
  {
    number: 2,
    name: "Pendulation",
    bestFor: "Trauma processing, emotional flooding, acute overwhelm",
    time: "10 to 30 minutes (ideally with a practitioner initially)",
    evidence: "Moderate. Strong clinical evidence, developing RCT base.",
    description: "Pendulation is one of the core techniques of Somatic Experiencing, developed by Dr. Peter Levine over four decades of clinical practice. It involves moving your attention back and forth between a calm, resourced sensation and an activated or distressed one, like a pendulum swinging between comfort and discomfort. The logic is elegant: by repeatedly returning to a felt sense of safety, you teach your nervous system that activation doesn't mean danger, and that calm is always accessible. Over time, this expands your window of tolerance, the range of emotional intensity you can experience without dysregulating. A 2017 study published in the Journal of Traumatic Stress found that Somatic Experiencing was associated with significant reductions in PTSD symptoms. A broader analysis found significant decreases in somatization and anxiety symptoms and substantial increases in physical and relational wellbeing.",
    howTo: "Bring to mind a resource, a place, person, memory, or sensation that feels genuinely safe and pleasant. Feel it in your body. Notice where that safety lives physically. Then gently bring attention to a mild area of stress or activation. Stay with it briefly. Then return your attention to your resource. Repeat the oscillation slowly and without forcing. Never push into overwhelm. Titration (small doses) is the key.",
    idealFor: "Anyone working with stored trauma, emotional reactivity, or a chronically activated nervous system. Best learned initially with a trained Somatic Experiencing practitioner before practicing independently.",
  },
  {
    number: 3,
    name: "Pandiculation",
    bestFor: "Chronic muscle tension, sensorimotor amnesia, physical pain, postural reset",
    time: "5 to 15 minutes",
    evidence: "Moderate. Strong theoretical and clinical basis, growing research.",
    description: "Most people try to release chronic muscle tension by stretching. Pandiculation works differently, and according to somatic neuroscience, far more effectively. Pandiculation is an instinctive stretch-and-yawn seen in animals and is the core somatic technique for releasing tension and restoring healthy muscle function. Unlike passive stretching, it's an active, conscious process involving three phases: conscious muscle contraction, slow controlled release, and then complete conscious relaxation. This process resets the gamma motor neuron system, which regulates muscle tone, often disrupted by what somatic pioneer Thomas Hanna called sensorimotor amnesia. Sensorimotor amnesia is the process by which chronically contracted muscles lose their ability to fully relax. Passive stretching works on the muscle tissue but doesn't address the neurological pattern. Pandiculation resets the pattern at the source.",
    howTo: "Choose a chronically tight area, commonly the lower back, neck, or shoulders. Slowly and deliberately contract those muscles further (counterintuitive but key). Hold for 3 to 5 seconds, feeling the contraction fully. Then release as slowly as possible, taking 5 to 10 seconds to fully let go. Rest and feel the difference. Repeat 3 times. The slow release is where the nervous system reset happens.",
    idealFor: "Chronic pain, postural tension, desk workers, athletes carrying accumulated physical stress, and anyone who has found that stretching doesn't hold.",
  },
  {
    number: 4,
    name: "Somatic Shaking (Neurogenic Tremoring / TRE)",
    bestFor: "Discharging stored stress and trauma, releasing deep muscular tension",
    time: "15 to 30 minutes",
    evidence: "Emerging. Promising clinical outcomes, limited large-scale RCTs.",
    description: "Simply shaking out your body activates the somatic nervous system in ways that signal safety. This isn't metaphorical, it's based on a well-observed biological mechanism. After a threatening experience, animals in the wild shake vigorously, discharging the residual activation of the stress response before returning to calm. Humans have largely suppressed this instinct, and somatic shaking practices like TRE (Tension and Trauma Releasing Exercises, developed by Dr. David Berceli) are designed to reactivate it. The tremors produced in TRE are neurogenic, generated by the nervous system itself, not by deliberate muscular effort. They occur in the psoas muscle, the deep hip flexor that contracts during freeze and flight responses, and propagate through the body, releasing deep layers of chronic tension that are otherwise inaccessible to conscious effort.",
    howTo: "Begin with a short series of leg exercises (wall sits, calf raises, standing stretches) to mildly fatigue the leg muscles. Then lie on your back with knees bent and feet flat, allowing the knees to fall inward toward each other. If the nervous system responds, the legs will begin to shake involuntarily. Allow the shaking without controlling it for 5 to 15 minutes, then rest flat for 5 minutes. Start with one session per week and build gradually.",
    idealFor: "People carrying long-term stored stress or trauma, anyone who feels physically wound tight, and those who respond better to physical rather than verbal processing. First-timers should ideally learn from a certified TRE provider.",
  },
  {
    number: 5,
    name: "Grounding Techniques",
    bestFor: "Acute dissociation, panic, overwhelm, anxiety spikes",
    time: "2 to 10 minutes",
    evidence: "Strong. Extensively validated across trauma and anxiety literature.",
    description: "Grounding exercises are a cornerstone of somatic work. Pressing your feet into the earth, noticing the temperature of water, engaging your senses deliberately, these pull you out of anxious thoughts and anchor you in the present moment where you are actually safe. Grounding works by redirecting neural resources from the threat-detecting amygdala toward present-moment sensory processing. When your brain is fully occupied with what you can see, hear, feel, smell, and taste right now, it has less bandwidth for catastrophizing about the past or future. Arm and leg squeeze exercises are grounding techniques that increase physical awareness, activating the body's proprioceptive sense and promoting nervous system regulation.",
    howTo: "Name 5 things you can see right now. 4 things you can physically feel (feet on the floor, air on skin, fabric on hands). 3 things you can hear. 2 things you can smell. 1 thing you can taste. Move slowly and deliberately through each sense. For deeper grounding, add physical contact: press your feet firmly into the floor and feel the full weight of your body being supported.",
    idealFor: "Anyone experiencing acute anxiety, panic, dissociation, or emotional flooding. This is the most accessible technique on this list, it requires no training, no equipment, and works in under two minutes.",
  },
  {
    number: 6,
    name: "Somatic Movement (Authentic Movement / Intuitive Movement)",
    bestFor: "Emotional processing, creativity blocks, disconnection from body",
    time: "10 to 30 minutes",
    evidence: "Moderate. Strong theoretical basis and clinical support.",
    description: "Somatic movements refer to gentle, natural ways of moving your body that help let your body know it's safe to regulate your nervous system and promote healthy levels of cortisol throughout the body. Unlike exercise, which is goal-directed, somatic movement is exploratory. You follow what the body wants to do, not what the mind thinks it should do. This might mean swaying, stretching in unusual directions, curling and uncurling, rolling, slow walking, or spontaneous dance. The practice cultivates interoceptive awareness, your ability to notice and respond to internal signals, which is one of the most powerful long-term regulators of nervous system health. Neurologically, somatic movement engages sensory-motor feedback loops, ultimately rewiring neural pathways and creating new, healthier movement possibilities.",
    howTo: "Find a private space. Set a timer for 10 minutes. Close your eyes and begin by simply feeling your feet on the ground. Then follow any impulse to move, no choreography, no goal, no performance. If your shoulders want to roll, let them. If you feel drawn to the floor, go there. The instruction is simply: let the body lead. Afterwards, sit quietly and notice what shifted.",
    idealFor: "Creative professionals, people who feel disconnected from their bodies, those processing grief or loss, and anyone who finds stillness-based practices difficult to sustain.",
  },
  {
    number: 7,
    name: "Cold Water Exposure (Somatic Shock Reset)",
    bestFor: "Acute nervous system reset, stress resilience training, mood elevation",
    time: "2 to 5 minutes",
    evidence: "Strong for physiological effects; growing for psychological outcomes.",
    description: "Cold exposure is one of the most physiologically potent somatic resets available. The shock of cold water, whether a cold shower, cold plunge, or outdoor swim, triggers a massive sympathetic activation followed by a rapid parasympathetic recovery. Done consistently, this trains the nervous system to activate and return to calm more efficiently, building what researchers call stress inoculation. Consistent somatic practice supports the development of new neural pathways that enhance emotional regulation and resilience. The key somatic element is breath control during the cold exposure. Maintaining slow, deliberate breathing while the body screams to hyperventilate is a direct training of vagal tone and autonomic control, one that transfers to every stressful situation you encounter outside the water.",
    howTo: "Begin with 30 seconds of cold water at the end of your regular shower. Focus entirely on keeping your breath slow and controlled. Build gradually to 2 to 3 minutes over several weeks. Once comfortable, try ending with 30 seconds of warmth to complete the cycle. Cold plunge (10 to 15°C / 50 to 59°F) for 2 to 4 minutes is the more advanced version, producing stronger neurochemical effects including norepinephrine release.",
    idealFor: "Biohackers and performance optimizers, those seeking mood and energy benefits, and anyone wanting to build genuine stress resilience rather than just manage symptoms.",
  },
];

const tableRows = [
  { technique: "Somatic Breathwork", bestFor: "Daily regulation, anxiety", time: "5 to 20 min", solo: "Yes", intensity: "Low to Medium" },
  { technique: "Pendulation", bestFor: "Trauma, emotional flooding", time: "10 to 30 min", solo: "With practice", intensity: "Medium" },
  { technique: "Pandiculation", bestFor: "Muscle tension, pain", time: "5 to 15 min", solo: "Yes", intensity: "Low" },
  { technique: "Somatic Shaking (TRE)", bestFor: "Stored stress, deep tension", time: "15 to 30 min", solo: "With training", intensity: "Medium" },
  { technique: "Grounding", bestFor: "Panic, dissociation, acute stress", time: "2 to 10 min", solo: "Yes", intensity: "Low" },
  { technique: "Somatic Movement", bestFor: "Disconnection, emotional processing", time: "10 to 30 min", solo: "Yes", intensity: "Low to Medium" },
  { technique: "Cold Exposure", bestFor: "Resilience, mood, energy", time: "2 to 5 min", solo: "Yes", intensity: "High" },
];

const chooseItems = [
  {
    condition: "Dealing with acute stress or anxiety right now",
    rec: "Start with grounding or somatic breathwork. Both work in minutes and require no prior experience.",
  },
  {
    condition: "Carrying chronic tension or physical pain",
    rec: "Prioritize pandiculation and somatic movement, which address the neurological roots of muscular holding patterns.",
  },
  {
    condition: "Sensing stored trauma or deep emotional activation",
    rec: "Pendulation and TRE are the most powerful tools, but ideally explored first with a trained practitioner.",
  },
  {
    condition: "Wanting to build long-term nervous system resilience",
    rec: "Add cold exposure and coherent breathing to your daily routine and track your HRV over time.",
  },
];

export default function SomaticResetGuide() {
  return (
    <PageLayout
      title="Best Somatic Reset Techniques in 2026"
      subtitle="A Science-Backed Comparison Guide"
      backLabel="Product Reviews"
      backHref="/product-reviews"
    >
      <article className="space-y-12">

        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border border-[#c4622d]/25 rounded-full px-3 py-0.5 text-xs">
            Comparison Guide
          </Badge>
          <Badge className="bg-white/5 text-black/50 border border-white/10 rounded-full px-3 py-0.5 text-xs">
            2026 Edition
          </Badge>
        </div>

        <section data-testid="section-intro">
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Your nervous system doesn't speak in words. It speaks in tension, fatigue, shallow breathing, a clenched jaw, a tight chest, a vague sense that something is wrong even when nothing specific has happened. If you've ever tried to think your way out of anxiety and found that it didn't work. There's a reason for that.
            </p>
            <p>
              Emerging research confirms that working with the body directly can restore nervous system regulation faster than cognitive approaches alone. Simple techniques like intentional breathing, grounding, and gentle movement can help discharge the trapped stress energy that keeps you stuck. When your nervous system feels safe again, everything shifts. Your thinking clears, your energy returns, and you start making empowered moves instead of reactive ones.
            </p>
            <p>
              That's the premise of somatic reset, and in 2026, it has moved decisively from the fringes of alternative therapy into mainstream neuroscience and clinical practice. The global somatic therapy market is estimated at around $4 billion USD in 2025 and projected to reach $12.4 billion USD by 2032. This isn't wellness trend chasing. The body-based healing field is growing because the results are real and the mechanisms are now well understood.
            </p>
            <p>
              This guide compares the most effective somatic reset techniques available today, what each one does, the science behind it, who it's best for, and how to choose the right approach for where you are right now.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-what">
          <SectionHeader icon={<Brain className="w-5 h-5" />} title="What Is a Somatic Reset?" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              The word somatic comes from the Greek <em>soma</em>, meaning body. Somatic healing therapies fall within the spectrum of mind-body therapies, specifically those that work with a bottom-up approach, acknowledging the living experience of being embodied as the basis of how we relate to and live in the world.
            </p>
            <p>
              A somatic reset is any deliberate, body-based practice that interrupts a dysregulated nervous system state, fight-or-flight, freeze, shutdown, and guides it back toward what researchers call the ventral vagal state: calm, connected, present, and capable of clear thought.
            </p>
            <p>
              Somatic therapy works by engaging a bottom-up process from the nervous system to the subconscious brain. The Polyvagal Theory, as proposed by Stephen Porges, describes how our autonomic nervous system has evolved layered responses, social engagement and safety, sympathetic mobilization, and dorsal vagal shutdown, and how trauma and chronic stress disrupt or bias these responses.
            </p>
            <p>
              The key insight is this: trauma is stored in the nervous system and can be resolved by integrating non-verbal, physiological impulses into the therapeutic process. You cannot think your way out of a physiological state. You have to move through it, literally.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-science">
          <SectionHeader icon={<FlaskConical className="w-5 h-5" />} title="The Science: What's Actually Happening During a Somatic Reset" />
          <p className="text-black/70 leading-relaxed mb-6">Before comparing techniques, it helps to understand the three mechanisms most somatic resets work through:</p>
          <div className="space-y-4">
            {mechanisms.map((m, i) => (
              <div key={i} className="card-glass rounded-xl p-5" data-testid={`mechanism-${i}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white" style={{ background: "linear-gradient(135deg,#e8956d,#c4622d)" }}>{i + 1}</span>
                  <p className="font-semibold text-black/90 text-sm">{m.title}</p>
                </div>
                <p className="text-black/65 text-sm leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-black/70 leading-relaxed text-sm">
            Research measuring heart rate variability, a key marker of nervous system regulation, shows that somatic work actually produces measurable physiological changes in real time. During somatic sessions, HRV data reveals fluctuations corresponding to emotional and physiological shifts, visible evidence that the nervous system is processing and rebalancing.
          </p>
        </section>

        <div className="section-divider" />

        <section data-testid="section-techniques">
          <SectionHeader icon={<Activity className="w-5 h-5" />} title="The 7 Best Somatic Reset Techniques Compared" />
          <div className="space-y-6">
            {techniques.map((t) => (
              <TechniqueCard key={t.number} {...t} />
            ))}
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-table">
          <h2 className="font-display text-2xl font-bold text-black mb-6">Technique Comparison at a Glance</h2>
          <div className="overflow-x-auto rounded-xl card-glass">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-black/10">
                  {["Technique", "Best For", "Time Needed", "Can Do Solo?", "Intensity"].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-black/50 font-semibold uppercase tracking-wider text-xs whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-black/[0.02]" : ""} data-testid={`table-row-${i}`}>
                    <td className="px-4 py-3 text-[#c4622d] font-medium whitespace-nowrap">{row.technique}</td>
                    <td className="px-4 py-3 text-black/70">{row.bestFor}</td>
                    <td className="px-4 py-3 text-black/70 whitespace-nowrap">{row.time}</td>
                    <td className="px-4 py-3 text-black/70">{row.solo}</td>
                    <td className="px-4 py-3 text-black/70">{row.intensity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-choose">
          <SectionHeader icon={<User className="w-5 h-5" />} title="How to Choose the Right Technique for You" />
          <p className="text-black/70 leading-relaxed mb-6">
            The most successful individuals often use multiple somatic tools, creating a personalized toolkit that addresses their unique needs and challenges, combining somatic practices, breathwork, community support, and professional guidance all working together. As a starting framework:
          </p>
          <div className="space-y-4">
            {chooseItems.map((item, i) => (
              <div key={i} className="card-glass rounded-xl p-5" data-testid={`choose-item-${i}`}>
                <p className="font-semibold text-black/90 text-sm mb-1">{item.condition}</p>
                <p className="text-black/65 text-sm leading-relaxed">{item.rec}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-black/70 leading-relaxed text-sm">
            Somatic therapy works best as a collaborative process. If you're unsure, consider asking a provider how they integrate somatic techniques and whether they can tailor the approach to your specific needs.
          </p>
        </section>

        <div className="section-divider" />

        <section data-testid="section-track">
          <SectionHeader icon={<BarChart2 className="w-5 h-5" />} title="Track Your Progress" />
          <p className="text-black/70 leading-relaxed">
            To track the effectiveness of your somatic practice, monitor both subjective measures, daily mood ratings, stress levels, sleep quality, and objective measures like heart rate variability, resting heart rate, and sleep metrics. Behavioral indicators matter too: reduced reactivity to stress, improved emotional regulation, and better decision-making are signs your nervous system is genuinely recalibrating.
          </p>
        </section>

        <div className="section-divider" />

        <section data-testid="section-deeper">
          <SectionHeader icon={<Zap className="w-5 h-5" />} title="Go Deeper with ThriveTools" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Somatic resets work best when they're part of a broader protocol, one that includes breathwork, movement, nutrition, and personalized support. At ThriveTools, our <a href="/personalized-guidance" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">Personalized Guidance</a> program integrates somatic practices with the full spectrum of biohacking tools, tailored to your unique nervous system, lifestyle, and goals.
            </p>
            <p className="font-semibold text-black/80">
              You don't have to figure this out alone. Your nervous system already knows how to heal. It just needs the right conditions.
            </p>
          </div>
        </section>

        <div className="text-center pt-4">
          <Button asChild size="lg" className="btn-gradient-rose text-white border-0 rounded-full px-6 sm:px-8 py-4 text-sm tracking-widest uppercase font-semibold h-auto leading-relaxed">
            <a href="/somatic-reset" data-testid="link-somatic-reset" className="inline-flex items-center justify-center gap-2 flex-wrap">
              Explore Somatic Reset Sessions <ExternalLink className="w-4 h-4 flex-shrink-0" />
            </a>
          </Button>
        </div>

        <p className="text-center text-black/35 text-xs italic" data-testid="text-disclaimer">
          Medical Disclaimer: This article is for informational purposes only and does not constitute medical advice. Somatic reset techniques, particularly TRE and pendulation, can surface strong emotional responses. If you have a history of trauma, PTSD, or a diagnosed mental health condition, please consult a qualified healthcare professional or trained somatic therapist before beginning these practices.
        </p>

      </article>
    </PageLayout>
  );
}
