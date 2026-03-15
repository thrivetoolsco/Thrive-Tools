import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Wind, AlertTriangle, User, Zap, ShieldCheck, Calendar, Activity, Brain } from "lucide-react";

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-[#c4622d]">{icon}</span>
      <h2 className="font-display text-2xl font-bold text-black">{title}</h2>
    </div>
  );
}

function SubSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3" data-testid={`subsection-${label.toLowerCase().replace(/\s+/g, "-")}`}>
      <p className="font-semibold text-black/90 text-base">{label}</p>
      {children}
    </div>
  );
}

function NightCard({ label, text }: { label: string; text: string }) {
  return (
    <div className="card-glass rounded-xl p-5" data-testid={`night-card-${label.toLowerCase().replace(/\s+/g, "-")}`}>
      <p className="text-xs font-semibold uppercase tracking-widest text-[#c4622d] mb-2">{label}</p>
      <p className="text-black/70 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

const organikaUrl = "https://oxygenadvantage.com";

export default function MouthBreathingGuide() {
  return (
    <PageLayout
      title="Mouth Breathing Is Quietly Ruining Your Health, And Most People Have No Idea They're Doing It"
      subtitle="2026 Edition"
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-12">

        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border border-[#c4622d]/25 rounded-full px-3 py-0.5 text-xs">
            Health Guide
          </Badge>
          <Badge className="bg-white/5 text-black/50 border border-white/10 rounded-full px-3 py-0.5 text-xs">
            2026 Edition
          </Badge>
        </div>

        <section data-testid="section-intro">
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              You breathe roughly 20,000 times a day. And if even a fraction of those breaths are coming through your mouth instead of your nose, the cumulative damage to your sleep, cognition, immune system, dental health, and even your facial structure is real, and it compounds silently over years.
            </p>
            <p>
              The hardest part about mouth breathing is that most people don't know they're doing it, especially at night. You go to sleep, your jaw falls open somewhere around 2am, and from that point on you're breathing the wrong way for the rest of the night, drying out your airways, disrupting your CO2 balance, suppressing nitric oxide production, and triggering a low-grade stress response that keeps your nervous system from fully recovering.
            </p>
            <p>
              This article covers what's actually happening when you mouth breathe, why the science on nasal breathing is so compelling, what experts like Andrew Huberman and Patrick McKeown say about it, and the single simplest intervention available: mouth taping.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-nose">
          <SectionHeader icon={<Wind className="w-5 h-5" />} title="Your Nose Is a Precision Instrument. Your Mouth Is a Backup." />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              The nose was engineered for breathing. The mouth was not. That distinction matters more than most people realize.
            </p>
            <p>
              The nasal passages warm incoming air, which is healthier for the lungs. Nitric oxide is produced in the nasal passages, causing smooth muscle relaxation and improving blood vessel dilation to efficiently remove waste, deliver nutrients, and help relieve sinus congestion. The increased resistance of nasal breathing also allows for maximum lung inflation with each breath, increasing oxygen delivery to the body. When you breathe through your mouth, you bypass all of this. Unfiltered, unwarmed, unhumidified air goes straight to your lungs, and you miss out on the nitric oxide entirely.
            </p>
            <p>
              That nitric oxide isn't a minor detail. Studies have shown that nasal breathing can increase nitric oxide levels by up to six times compared to mouth breathing. This is why nasal breathing is linked to better heart health, improved focus, and a lower risk of neurodegenerative diseases like Alzheimer's.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-effects">
          <SectionHeader icon={<AlertTriangle className="w-5 h-5" />} title="What Chronic Mouth Breathing Actually Does to Your Body" />
          <p className="text-black/70 leading-relaxed mb-8">
            The effects of habitual mouth breathing extend far beyond a dry throat in the morning. The research paints a surprisingly comprehensive picture of systemic damage.
          </p>
          <div className="space-y-8">
            <SubSection label="Sleep and the nervous system">
              <p className="text-black/70 text-sm leading-relaxed">
                Mouth breathing decreases oxygen efficiency, forcing the body into a state of low-grade stress throughout the night. It triggers the sympathetic nervous system, the fight-or-flight response, keeping stress hormones elevated and preventing full-body relaxation. Chronic stress from poor breathing leads to higher cortisol levels, increased anxiety, and long-term adrenal fatigue.
              </p>
              <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
                <p className="text-black/75 text-sm leading-relaxed italic">
                  "Mouth breathing during sleep is not just undesirable; it is actually dangerous, as it is associated with sleep apnea, which puts people at risk for numerous cardiovascular issues, impaired craniofacial development in kids, and effects on aesthetics, tooth and gut health in adults, and more."
                </p>
                <p className="text-xs text-[#c4622d] font-semibold mt-3">Dr. Andrew Huberman, Stanford University</p>
              </div>
            </SubSection>

            <SubSection label="Cognitive function">
              <p className="text-black/70 text-sm leading-relaxed">
                Research using fMRI shows that various brain regions related to working memory and normal breathing are adequately induced in nasal breathing conditions, but not in oral breathing conditions. In other words, switching to mouth breathing measurably impairs your brain's ability to process, store, and retrieve information. The brain actually functions better when inhaling through the nose. You can increase memory retrieval and cognitive function, block out signal-to-noise, and detect novel stimuli. This isn't a marginal effect. It shows up in brain imaging.
              </p>
            </SubSection>

            <SubSection label="CO2 balance and the overbreathing problem">
              <p className="text-black/70 text-sm leading-relaxed">
                This is the mechanism most people miss entirely. Most people overbreathe, averaging 15 to 18 breaths per minute rather than the optimal 12. Overbreathing causes excessive exhalation, reducing carbon dioxide levels, a state called hypocapnia, and decreasing oxygen delivery to the brain and other tissues. When the brain does not receive adequate oxygen, it becomes hyper-excitable, causing difficulty focusing and anxiety.
              </p>
              <p className="text-black/70 text-sm leading-relaxed">
                Mouth breathing makes overbreathing far more likely because there's no natural resistance. Air flows in and out too easily, too fast, and too shallowly. The nose creates resistance that naturally slows and deepens breathing, restoring the CO2 balance your body needs to function optimally. Patrick McKeown, founder of the Oxygen Advantage, describes the mechanism clearly: nasal breathing better regulates the amount of carbon dioxide in your blood, directly affecting blood pH, relaxation of blood vessels, and the release of oxygen to tissues via the Bohr effect, a principle that mouth breathing actively undermines.
              </p>
            </SubSection>

            <SubSection label="Dental and facial structure">
              <p className="text-black/70 text-sm leading-relaxed">
                Mouth breathing significantly impacts orofacial development, contributing to malocclusion, narrow palates, and altered facial growth. Research shows that chronic mouth breathing leads to increased facial height, an adenoid facial type, and a retrognathic mandible. These aren't just aesthetic concerns. They reduce airway space, which makes mouth breathing more likely, creating a self-reinforcing cycle. Research has also found significantly higher levels of cavity-causing bacteria and plaque in mouth-breathing individuals, and mouth breathing results in alterations of saliva-mediated defense and a reduced self-cleaning effect, leading to accelerated accumulation of plaque and a higher risk of gum disease.
              </p>
            </SubSection>

            <SubSection label="Immune function">
              <p className="text-black/70 text-sm leading-relaxed">
                The nasal cavity produces nitric oxide, which has potent antimicrobial properties. It can help kill bacteria, viruses, and other pathogens, reducing the risk of infections. The nasal passages also contain fine hairs and mucus membranes that trap dust, allergens, and microbes, preventing them from entering the lungs. This filtration system is completely bypassed when breathing through the mouth.
              </p>
            </SubSection>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-huberman">
          <SectionHeader icon={<User className="w-5 h-5" />} title="What Andrew Huberman Says" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Dr. Andrew Huberman, Stanford neuroscientist and host of the Huberman Lab podcast, has been one of the most influential voices bringing the science of nasal breathing to mainstream audiences.
            </p>
            <p>
              His recommended treatment options for mouth breathing and sleep apnea include sleeping with medical tape closing the mouth to force nasal breathing until trained, and practicing nasal breathing during exercise to transfer the skill into sleep.
            </p>
            <p>
              Huberman emphasizes that nasal breathing stimulates the vagus nerve, a key regulator of heart rate and autonomic balance, promoting a state of calmness, relaxation, and reduced stress, directly counteracting the sympathetic nervous system's fight-or-flight response that mouth breathing triggers. On cognition specifically, the act of nose breathing has been shown to enhance mental clarity and focus. The increased oxygenation from nasal breathing supports brain function and cognition, improving memory, attention span, and information processing abilities.
            </p>
            <p>
              His full episode on breathing, "How to Breathe Correctly for Optimal Health, Mood, Learning and Performance," is one of the most comprehensive publicly available resources on the topic, available at{" "}
              <a href="https://www.hubermanlab.com/episode/how-to-breathe-correctly-for-optimal-health-mood-learning-and-performance" target="_blank" rel="noopener noreferrer" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">hubermanlab.com</a>.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-mckeown">
          <SectionHeader icon={<User className="w-5 h-5" />} title="What Patrick McKeown Says" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              If Huberman brought the science to the mainstream, Patrick McKeown built the system for fixing it. McKeown is the founder of the Oxygen Advantage, author of <em>The Oxygen Advantage</em> and <em>The Breathing Cure</em>, and the world's leading practitioner of the Buteyko breathing method applied to modern performance and health.
            </p>
            <p>
              McKeown's own story is instructive. He was a chronic mouth breather growing up, fast breathing, chest breathing, always in sympathetic drive, which impacted his sleep, his concentration, and his ability to cope with everyday stress. When he discovered nasal breathing and mouth taping, his asthma symptoms reduced by approximately 50% in the first week. The second morning after taping his mouth closed at night, he described it as the best sleep he'd had in 15 years.
            </p>
            <p>
              McKeown explains that chronic mouth breathing leads to over-breathing, which lowers carbon dioxide levels and restricts oxygen delivery to tissues. Mouth taping prevents this, allowing for optimal respiratory function and better overall health. He helped put mouth taping firmly on the biohacking map, particularly among athletes, where endurance runners, cyclists, and MMA fighters use it to boost nasal breathing and oxygen efficiency because in performance, every breath is bandwidth.
            </p>
            <p>
              McKeown's full body of work is available at{" "}
              <a href="https://oxygenadvantage.com" target="_blank" rel="noopener noreferrer" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">oxygenadvantage.com</a>,
              one of the most comprehensive breathing education resources available anywhere.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-nestor">
          <SectionHeader icon={<User className="w-5 h-5" />} title="James Nestor's 10-Day Experiment" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Journalist and science writer James Nestor, author of <em>Breath: The New Science of a Lost Art</em>, conducted one of the most striking experiments in recent breathing science. He deliberately mouth-breathed for 10 consecutive days under medical supervision, with researchers measuring the physiological outcomes.
            </p>
            <p>
              The results were stark: higher blood pressure, dramatically poor sleep, and persistent brain fog, all from simply switching to mouth breathing for 10 days. When he switched back to nasal breathing, the damage reversed almost immediately.
            </p>
            <p>
              Nestor's book is one of the most readable deep-dives into the history and science of breathing and comes highly recommended alongside McKeown's work for anyone serious about understanding what their breathing is doing to their health.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-solution">
          <SectionHeader icon={<Zap className="w-5 h-5" />} title="The Solution: Mouth Taping" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              The simplest, most direct intervention for nighttime mouth breathing is also the most counterintuitive: tape your mouth shut while you sleep.
            </p>
            <p>
              Mouth taping encourages nasal breathing, which helps create a more stable and efficient breathing pattern throughout the night, enhancing oxygenation and cutting down on common sleep disruptors like snoring and mild sleep apnea. The clinical evidence is building. A 2022 study found that in mild obstructive sleep apnea patients, one week of mouth taping produced a 65% reduction in symptoms, with the apnea/hypopnea index dropping from 8.3 to 4.7 events per hour and a 47% improvement in snoring index. A broader scoping review confirmed that mouth taping is a non-invasive, effective way to promote nasal breathing, especially during sleep, with little or no discomfort and the ability to retrain breathing habits over time.
            </p>
            <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#c4622d] mb-2">Important caution</p>
              <p className="text-black/70 text-sm leading-relaxed">
                Mouth taping is not appropriate for everyone. It is not recommended for anyone with nasal congestion, diagnosed sleep apnea without medical supervision, significant respiratory issues, anxiety disorders, or anyone who hasn't first confirmed they can breathe freely through their nose. If you're unsure, consult your doctor before starting.
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-myotape">
          <SectionHeader icon={<ShieldCheck className="w-5 h-5" />} title="Why MyoTape From Oxygen Advantage Is the Product I Recommend" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Not all mouth tape is created equal, and for beginners especially, the product design matters enormously.
            </p>
            <p>
              MyoTape was created by Patrick McKeown and is specifically designed to promote nasal breathing safely, made from soft cotton with a gentle hypoallergenic adhesive that allows for emergency mouth opening and is safe for all skin types, including sensitive skin.
            </p>
            <p>
              The key design difference between MyoTape and standard tape, or cheap alternatives, is that it encircles the lips rather than sealing directly across them. This means if you need to cough, speak, or open your mouth in an emergency, you can. It was specifically developed to keep the lips closed at night safely, even if the person needs to cough, talk, or be sick. That distinction makes it far safer and far more comfortable than improvised alternatives.
            </p>
            <p>
              It reduces snoring by encouraging proper breathing patterns, is expert-created and based on scientifically proven research on sleep and respiratory health, and is available for adults, children, those with sensitive skin, and those with facial hair.
            </p>
            <p className="font-semibold text-black/80">
              Get MyoTape from Oxygen Advantage with discount code THRIVETOOLS at{" "}
              <a href="https://oxygenadvantage.com" target="_blank" rel="noopener noreferrer" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">oxygenadvantage.com</a>.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-protocol">
          <SectionHeader icon={<Calendar className="w-5 h-5" />} title="How to Start: A 7-Night Protocol" />
          <div className="space-y-4">
            <NightCard
              label="Nights 1 to 2"
              text="Before reaching for tape, simply practice nasal breathing consciously during the day for 10 to 15 minutes. Notice whether your nose is clear and whether nasal breathing feels natural and unforced. Do not attempt mouth taping if nasal breathing is difficult or congested."
            />
            <NightCard
              label="Night 3"
              text="Apply MyoTape lightly before sleep. Start with the gentlest application. The goal is a gentle reminder, not a seal. If you feel anxiety about having your mouth closed, practice during the day first while watching TV or reading."
            />
            <NightCard
              label="Nights 4 to 7"
              text="Build consistency. Track your sleep quality, morning energy, and whether you wake with a dry mouth, a clear sign of mouth breathing. Most people notice improved sleep depth and less morning grogginess within the first week."
            />
            <NightCard
              label="Week 2 onwards"
              text="The goal is to retrain your default. With consistent use, mouth taping trains your body to breathe through the nose automatically even without the tape, making it a tool for long-term retraining of breathing patterns, not a permanent dependency."
            />
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-daytime">
          <SectionHeader icon={<Activity className="w-5 h-5" />} title="Daytime Mouth Breathing: The Overlooked Half of the Problem" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Most of the conversation about mouth breathing focuses on sleep, but many people are habitual mouth breathers during the day too, often without noticing.
            </p>
            <p>
              Signs you may be a daytime mouth breather: frequent throat clearing, a tendency to sigh regularly, nasal congestion that feels chronic, a dry or sticky mouth in the afternoon, or difficulty breathing through your nose during light exercise.
            </p>
            <p>
              To reduce overbreathing during non-exercise activities, practice taking small pauses between breaths and defaulting to nasal breathing, as opposed to mouth breathing, because the resistance of nasal breathing naturally slows and regulates the breathing rate. McKeown's Oxygen Advantage program offers a full framework for retraining daytime breathing patterns, including the BOLT score (Body Oxygen Level Test), a simple self-assessment that measures your functional CO2 tolerance and tells you exactly where your breathing baseline sits. Available at{" "}
              <a href="https://oxygenadvantage.com" target="_blank" rel="noopener noreferrer" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">oxygenadvantage.com</a>.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-bigger-picture">
          <SectionHeader icon={<Brain className="w-5 h-5" />} title="The Bigger Picture: Breathing as a Foundation" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              At ThriveTools, we see breathing as the single most foundational health lever available, before supplements, before devices, before any other optimization. Research shows that regular practice of nasal breathing leads to reduced circulating stress hormones such as cortisol and adrenaline, improved heart rate variability as a marker of stress resilience, and better cognitive performance without sacrificing alertness.
            </p>
            <p>
              You can have the best supplement stack, the best sleep environment, and the most optimized recovery protocol, but if you're mouth breathing through the night, you're undermining all of it. Fix the breath first. Everything else becomes more effective.
            </p>
            <p>
              Explore our{" "}
              <a href="/product-reviews/breathwork-beginners-guide" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">Breathwork Guide</a>{" "}
              for the techniques to train your nasal breathing during the day, our{" "}
              <a href="/product-reviews/somatic-reset-guide" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">Somatic Reset Guide</a>{" "}
              for nervous system recovery, our{" "}
              <a href="/product-reviews/biohacking-beginners-guide" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">Biohacking Beginners Guide</a>{" "}
              for how this fits into a complete protocol, and our{" "}
              <a href="/personalized-guidance" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">Personalized Guidance</a>{" "}
              program if you want a full breathing and biohacking protocol built around your specific physiology.
            </p>
          </div>
        </section>

        <div className="text-center pt-4">
          <Button
            asChild
            size="lg"
            className="btn-gradient-rose text-white border-0 rounded-full px-6 sm:px-8 py-4 text-sm tracking-widest uppercase font-semibold h-auto leading-relaxed"
          >
            <a
              href="https://oxygenadvantage.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-myotape"
              className="inline-flex items-center justify-center gap-2 flex-wrap"
            >
              Use code THRIVETOOLS to shop MyoTape <ExternalLink className="w-4 h-4 flex-shrink-0" />
            </a>
          </Button>
        </div>

        <p className="text-center text-black/35 text-xs italic" data-testid="text-disclaimer">
          Medical Disclaimer: This article is for informational purposes only and does not constitute medical advice. Mouth taping is not appropriate for everyone. Do not attempt mouth taping if you have nasal congestion, obstructive sleep apnea, respiratory conditions, or significant anxiety without first consulting a qualified healthcare professional. Always use tape specifically designed for mouth taping and never improvise with household tape.
        </p>

      </article>
    </PageLayout>
  );
}
