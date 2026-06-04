import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Copy, Check, Brain, Activity, Zap, ShieldCheck, Moon, Users } from "lucide-react";
const museSpecsImg = "/images/muse-specs.jpg";
const museWearImg = "/images/muse-headband-3.jpg";
const museAppImg = "/images/muse-app.jpg";

const SHOP_URL = "https://choosemuse.com/thrive25";
const DISCOUNT_CODE = "THRIVE25";

function CopyCodeButton() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(DISCOUNT_CODE).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="card-glass rounded-2xl p-6 sm:p-8 flex flex-col items-center gap-5 text-center" data-testid="section-muse-affiliate-code">
      <p className="text-black/60 text-sm uppercase tracking-widest font-semibold">Discount Code</p>
      <div className="flex items-center gap-3 bg-white/60 border border-black/10 rounded-xl px-6 py-3">
        <span className="font-mono font-bold text-2xl text-[#c4622d] tracking-widest" data-testid="text-muse-discount-code">{DISCOUNT_CODE}</span>
        <button
          onClick={handleCopy}
          className="ml-2 p-2 rounded-lg hover:bg-black/5 transition-colors text-black/40 hover:text-black/70"
          aria-label="Copy discount code"
          data-testid="button-copy-muse-code"
        >
          {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      {copied && <p className="text-green-600 text-xs font-medium">Copied to clipboard.</p>}
      <p className="text-black/50 text-sm">25% off your Muse headband at checkout</p>
      <Button asChild size="lg" className="btn-gradient-rose text-white border-0 rounded-full px-8 text-sm tracking-widest uppercase font-semibold h-auto py-3.5">
        <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" data-testid="button-shop-muse" className="inline-flex items-center gap-2">
          Shop Muse <ExternalLink className="w-4 h-4" />
        </a>
      </Button>
      <p className="text-black/30 text-xs">Affiliated link. I only recommend brands I genuinely use.</p>
    </div>
  );
}

function SectionIcon({ icon, color }: { icon: React.ReactNode; color: string }) {
  return (
    <div className={`w-9 h-9 rounded-full ${color} flex items-center justify-center shrink-0`}>
      {icon}
    </div>
  );
}

export default function MuseHeadbandReview() {
  return (
    <PageLayout
      showShare
      title="Muse Headband Review: The Science-Backed EEG Device That's Changing How We Meditate"
      subtitle="After 14 years in the biohacking world, this is one of the rare devices that actually earns its place."
      seo={{
        title: "Muse Headband Review: EEG Neurofeedback | Thrive Tools",
        description: "Science-backed Muse EEG headband review by Eden Laraki. 200+ peer-reviewed studies, honest real-world results, and who it's for. Use THRIVE25 for 25% off.",
        canonical: "/blog/muse-headband-review-eeg-neurofeedback",
        ogType: "article",
        datePublished: "2026-03-25",
        image: museWearImg,
        imageAlt: "Muse EEG meditation headband being worn",
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-12">

        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border border-[#c4622d]/25 rounded-full px-3 py-0.5 text-xs">
            Tech Review
          </Badge>
          <Badge className="bg-white/5 text-black/50 border border-white/10 rounded-full px-3 py-0.5 text-xs">
            Updated March 2026
          </Badge>
        </div>

        <section data-testid="section-intro">
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              After 14 years of exploring every corner of the wellness and biohacking world: breathwork, plant medicine, tonic herbs, somatic healing. I've become deeply skeptical of anything that promises to "upgrade" your mind without a solid foundation of evidence behind it.
            </p>
            <p>
              The Muse headband is one of the rare exceptions.
            </p>
            <p>
              I'm not saying that lightly. I've tried countless devices, protocols, and tools. Most are either overhyped, underdelivered, or just repackaging something ancient in expensive hardware. Muse is genuinely different, and the science behind it is worth understanding before you decide if it's right for you.
            </p>
            <p className="text-sm text-black/50">
              For related context, see my{" "}
              <a href="/product-reviews/vielight-neuro-review" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">Vielight Neuro review</a>,{" "}
              my{" "}
              <a href="/discount-codes" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">full longevity tech discount codes</a>,{" "}
              or{" "}
              <a href="/blog" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">browse all blog posts</a>{" "}
              for more science-backed guides.
            </p>
          </div>
        </section>

        <div className="card-glass rounded-2xl overflow-hidden" data-testid="img-muse-wear">
          <img
            loading="lazy"
            decoding="async"
            src={museWearImg}
            alt="Man wearing Muse EEG headband during a meditation session"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="section-divider" />

        <section data-testid="section-what-is-muse">
          <div className="flex items-center gap-3 mb-6">
            <SectionIcon icon={<Brain className="w-4 h-4 text-[#c4622d]" />} color="bg-[#c4622d]/10" />
            <h2 className="font-display text-2xl font-bold text-black">What Is the Muse Headband?</h2>
          </div>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Muse is a consumer EEG (electroencephalography) neurofeedback headband made by Canadian company InteraXon. It sits across your forehead and behind your ears, using seven sensors across four channels to measure your brain's electrical activity in real time during meditation sessions.
            </p>
            <p>
              That raw brainwave data gets converted through the Muse app into audio feedback: typically nature sounds like wind, rain, or birdsong, that respond to your mental state. When your mind is calm and focused, the sounds are peaceful. When your mind wanders, the sounds shift, nudging you gently back to presence.
            </p>
            <p>
              It's essentially a mirror for your brain, giving you real-time data on something you've never been able to see before.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="font-display text-xl font-bold text-black">The Two Main Models</h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
                <p className="font-semibold text-black mb-2" data-testid="text-muse2-title">Muse 2</p>
                <p className="text-black/60 text-sm leading-relaxed">
                  The classic meditation-focused model. Measures EEG, heart rate, breathing, and body movement. Ideal for meditation training and focus sessions.
                </p>
              </div>
              <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#8b3a1a" }}>
                <p className="font-semibold text-black mb-2" data-testid="text-muses-title">Muse S (Athena)</p>
                <p className="text-black/60 text-sm leading-relaxed">
                  A softer, sleep-optimized version designed to be worn during sleep as well. The 2025 Muse S Athena adds fNIRS, functional near-infrared spectroscopy, making it the first consumer wearable to combine both EEG and fNIRS.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="card-glass rounded-2xl overflow-hidden" data-testid="img-muse-specs">
          <img
            loading="lazy"
            decoding="async"
            src={museSpecsImg}
            alt="Muse headband lab-grade sensors: SmartSense EEG, heart rate detection, sturdy over-ear design, lightweight construction"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="section-divider" />

        <section data-testid="section-science">
          <div className="flex items-center gap-3 mb-6">
            <SectionIcon icon={<Zap className="w-4 h-4 text-[#c4622d]" />} color="bg-[#c4622d]/10" />
            <h2 className="font-display text-2xl font-bold text-black">The Science Behind Muse: What the Research Actually Says</h2>
          </div>
          <div className="space-y-4 text-black/70 leading-relaxed mb-8">
            <p>
              This is where Muse separates itself from most wellness gadgets. With over 200{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/?term=InteraXon+Muse+neurofeedback+EEG"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors"
                data-testid="link-pubmed-muse"
              >
                peer-reviewed studies using Muse devices
              </a>{" "}
              from institutions including NASA, Harvard, and the Mayo Clinic, the evidence base is real.
            </p>
          </div>

          <div className="grid gap-5">
            <div className="card-glass rounded-xl p-6" data-testid="card-science-stress">
              <div className="flex items-start gap-3 mb-3">
                <ShieldCheck className="w-5 h-5 text-[#c4622d] mt-0.5 shrink-0" />
                <p className="font-semibold text-black">Stress and Anxiety Reduction</p>
              </div>
              <p className="text-black/65 text-sm leading-relaxed">
                A randomized controlled trial on women with newly diagnosed breast cancer found that consistent Muse use improved fatigue, quality of life, and stress levels compared to controls. The researchers concluded that EEG neurofeedback devices "have the potential to be efficacious and effective tools to reduce stress."
              </p>
            </div>

            <div className="card-glass rounded-xl p-6" data-testid="card-science-longcovid">
              <div className="flex items-start gap-3 mb-3">
                <Activity className="w-5 h-5 text-[#c4622d] mt-0.5 shrink-0" />
                <p className="font-semibold text-black">Long COVID and Cognitive Recovery</p>
              </div>
              <p className="text-black/65 text-sm leading-relaxed">
                A 2024 to 2025 open-label clinical trial had 45 Long COVID patients use Muse S daily for 90 days. Participants reported improvements in sleep, fatigue, mood, cognitive function, and overall quality of life, with benefits observed even during the 90-day post-treatment observation period.
              </p>
            </div>

            <div className="card-glass rounded-xl p-6" data-testid="card-science-burnout">
              <div className="flex items-start gap-3 mb-3">
                <Users className="w-5 h-5 text-[#c4622d] mt-0.5 shrink-0" />
                <p className="font-semibold text-black">Healthcare Professional Burnout</p>
              </div>
              <p className="text-black/65 text-sm leading-relaxed">
                A pilot study using Muse S with healthcare professionals during the pandemic found sustained improvements in stress, resilience, and quality of life at both 3 and 6 months, with cognitive improvements that held long after the study ended.
              </p>
            </div>

            <div className="card-glass rounded-xl p-6" data-testid="card-science-sleep">
              <div className="flex items-start gap-3 mb-3">
                <Moon className="w-5 h-5 text-[#c4622d] mt-0.5 shrink-0" />
                <p className="font-semibold text-black">Sleep Quality</p>
              </div>
              <p className="text-black/65 text-sm leading-relaxed">
                A 2021 study led by Western University, Cambridge Brain Science, and InteraXon using Muse S sleep-support technology showed a{" "}
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=EEG+neurofeedback+sleep+quality+Pittsburgh+Sleep+Quality+Index"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors"
                  data-testid="link-pubmed-sleep"
                >
                  20% improvement in the Pittsburgh Sleep Quality Index
                </a>{" "}
                relative to controls.
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-what-it-measures">
          <div className="flex items-center gap-3 mb-6">
            <SectionIcon icon={<Activity className="w-4 h-4 text-[#c4622d]" />} color="bg-[#c4622d]/10" />
            <h2 className="font-display text-2xl font-bold text-black">What Muse Actually Measures</h2>
          </div>
          <p className="text-black/70 leading-relaxed mb-6">
            Understanding what's being tracked helps you get more out of the device.
          </p>

          <div className="space-y-3">
            {[
              {
                id: "eeg",
                label: "EEG (Electroencephalography)",
                body: "The core technology. Seven sensors detect brainwave patterns across the frontal and temporal cortices, distinguishing between active and calm brain states in real time. This is the same technology used in clinical EEG settings, miniaturized and made accessible.",
              },
              {
                id: "ppg",
                label: "PPG (Photoplethysmography)",
                body: "Tracks heart rate during sessions, giving you insight into how your nervous system is responding to your practice.",
              },
              {
                id: "accel",
                label: "Accelerometer",
                body: "Measures breathing rhythms, allowing you to pace your body for energy or relaxation.",
              },
              {
                id: "gyro",
                label: "Gyroscope",
                body: "Detects movement shifts, supporting posture and balance awareness.",
              },
              {
                id: "fnirs",
                label: "fNIRS (Muse S Athena only)",
                body: "Measures blood oxygenation in the brain, revealing how hard your mind is working to maintain focus and endurance. Genuinely cutting-edge for a consumer device.",
              },
            ].map((item) => (
              <div key={item.id} className="card-glass rounded-xl p-5 flex gap-4" data-testid={`card-sensor-${item.id}`}>
                <div className="w-2 h-2 rounded-full bg-[#c4622d] mt-2 shrink-0" />
                <div>
                  <p className="font-semibold text-black text-sm mb-1">{item.label}</p>
                  <p className="text-black/60 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="card-glass rounded-2xl overflow-hidden" data-testid="img-muse-app">
          <img
            loading="lazy"
            decoding="async"
            src={museAppImg}
            alt="Muse headband device alongside the Muse app showing Mind Session data and calm percentage score"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="section-divider" />

        <section data-testid="section-why-feedback">
          <div className="flex items-center gap-3 mb-6">
            <SectionIcon icon={<Brain className="w-4 h-4 text-[#c4622d]" />} color="bg-[#c4622d]/10" />
            <h2 className="font-display text-2xl font-bold text-black">Why Real-Time Feedback Changes Your Meditation Practice</h2>
          </div>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Here's what most people miss about why Muse works: meditation without feedback is training blind.
            </p>
            <p>
              Traditional meditation practice relies entirely on self-report. You sit, you try to focus, you think you're doing well, and you have no idea whether your brain actually entered a calm state or whether you spent 20 minutes in a low-grade loop of mental noise.
            </p>
            <p>
              Muse removes that ambiguity. When you hear the soundscape shift in response to your actual brain activity, you start to learn what calm actually feels like, not what you imagine it feels like. Over time, you build a real map of your own mental states.
            </p>
            <p>
              This is the core principle of neurofeedback: real-time data accelerates learning. Your brain gets immediate feedback on what it's doing and learns to do it better, faster.
            </p>
            <p>
              For breathwork practitioners, meditators, or anyone serious about nervous system regulation, this is a meaningful upgrade to your practice.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-who-its-for">
          <div className="flex items-center gap-3 mb-6">
            <SectionIcon icon={<Users className="w-4 h-4 text-[#c4622d]" />} color="bg-[#c4622d]/10" />
            <h2 className="font-display text-2xl font-bold text-black">Who Is Muse Best For?</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold text-black mb-3" data-testid="text-best-for-heading">You'll get the most out of Muse if you:</p>
              <div className="space-y-2">
                {[
                  "Already meditate or want a consistent practice with objective data on your progress",
                  "Are working through anxiety, stress, or burnout and want a non-pharmaceutical tool with real evidence",
                  "Are interested in sleep optimization and want detailed tracking alongside meditation support",
                  "Are a biohacker who wants brainwave data to add to your health picture",
                  "Have ADHD or focus challenges and want a training tool for attention regulation",
                  "Are a practitioner or therapist who wants to incorporate neurofeedback into client work",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start" data-testid={`text-best-for-${i}`}>
                    <span className="text-[#c4622d] font-bold text-sm mt-0.5 shrink-0">.</span>
                    <p className="text-black/65 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold text-black mb-3" data-testid="text-not-for-heading">Muse may not be the right fit if:</p>
              <div className="space-y-2">
                {[
                  "You're brand new to any form of wellness practice. Building foundational habits first will serve you better",
                  "You want a completely passive experience. Muse requires engagement and consistency to work",
                  "The investment feels out of reach right now. There are simpler starting points before adding devices",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start" data-testid={`text-not-for-${i}`}>
                    <span className="text-black/30 font-bold text-sm mt-0.5 shrink-0">.</span>
                    <p className="text-black/55 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-biohacking-framework">
          <div className="flex items-center gap-3 mb-6">
            <SectionIcon icon={<Zap className="w-4 h-4 text-[#c4622d]" />} color="bg-[#c4622d]/10" />
            <h2 className="font-display text-2xl font-bold text-black">Muse and the Biohacking Framework</h2>
          </div>
          <div className="space-y-4 text-black/70 leading-relaxed mb-6">
            <p>
              I talk a lot on ThriveTools about the principle of layering, building a solid physiological foundation before adding more sophisticated interventions. Muse fits naturally into an intermediate to advanced biohacking protocol.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                id: "foundation",
                label: "Foundation Layer: Address First",
                body: "Sleep quality, nutrition, gut health, magnesium, omega-3s, vitamin D",
                color: "border-black/15",
              },
              {
                id: "nervous-system",
                label: "Nervous System Layer: Address Next",
                body: "Breathwork practice, somatic work, stress regulation, adaptogens like Reishi and Ashwagandha",
                color: "border-[#c4622d]/30",
              },
              {
                id: "advanced",
                label: "Advanced Optimization Layer: Where Muse Lives",
                body: "Real-time neurofeedback, HRV training, photobiomodulation, targeted nootropics",
                color: "border-[#c4622d]",
              },
            ].map((layer) => (
              <div key={layer.id} className={`card-glass rounded-xl p-5 border-l-4 ${layer.color}`} data-testid={`card-layer-${layer.id}`}>
                <p className="font-semibold text-black text-sm mb-1">{layer.label}</p>
                <p className="text-black/60 text-sm">{layer.body}</p>
              </div>
            ))}
          </div>

          <p className="text-black/65 leading-relaxed mt-6 text-sm">
            If your foundation is solid and you're ready to take your meditation practice and mental performance to the next level with objective data, Muse is one of the most well-researched tools available at the consumer level.
          </p>
        </section>

        <div className="section-divider" />

        <section data-testid="section-honest-take">
          <div className="flex items-center gap-3 mb-6">
            <SectionIcon icon={<ShieldCheck className="w-4 h-4 text-[#c4622d]" />} color="bg-[#c4622d]/10" />
            <h2 className="font-display text-2xl font-bold text-black">My Honest Take After Using Muse</h2>
          </div>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              The first few sessions feel strange. Seeing your mind wander in real time via audio feedback is humbling. You realize quickly how rarely your brain actually settles into a genuinely calm state, even when you think you're meditating well.
            </p>
            <p>
              That initial humility is actually the most valuable part. It recalibrates your self-assessment and gives you an honest baseline to work from. From there, the progress is trackable, motivating, and real.
            </p>
            <p>
              The sleep tracking with Muse S is also genuinely useful, especially if you're working on sleep architecture, HRV recovery, or trying to understand how lifestyle factors affect your rest.
            </p>
            <p>
              After 14 years of wellness practice, I don't reach for devices easily. Muse earned its place.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-discount">
          <h2 className="font-display text-2xl font-bold text-black mb-4 text-center">Get Muse With My Discount Code</h2>
          <p className="text-black/60 text-center mb-6 text-sm leading-relaxed">
            I've partnered with Muse to offer a discount for the ThriveTools community. Copy the code below and use it at checkout for 25% off your headband.
          </p>
          <CopyCodeButton />
        </section>

        <div className="section-divider" />

        <section data-testid="section-faq">
          <h2 className="font-display text-2xl font-bold text-black mb-8">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                id: "proven",
                q: "Is Muse scientifically proven?",
                a: "Muse devices have been used in over 200 peer-reviewed studies from institutions including NASA, Harvard, and the Mayo Clinic. Research has shown benefits for stress reduction, sleep quality, cognitive recovery, and anxiety management.",
              },
              {
                id: "safe",
                q: "Is Muse safe?",
                a: "Yes. EEG is a passive measurement technology, it reads electrical activity but does not emit anything. It's the same technology used in clinical neurology settings.",
              },
              {
                id: "duration",
                q: "How long should I use Muse per session?",
                a: "Most studies used sessions of 5 to 10 minutes. Consistency matters more than duration. Daily practice for 10 minutes will outperform occasional 30-minute sessions.",
              },
              {
                id: "models",
                q: "What's the difference between Muse 2 and Muse S?",
                a: "Muse 2 is optimized for daytime meditation sessions. Muse S is softer, designed for sleep as well as meditation, and includes sleep tracking features. The Muse S Athena (2025) adds fNIRS sensors for more detailed cognitive monitoring.",
              },
              {
                id: "anxiety",
                q: "Can Muse help with anxiety?",
                a: "Research supports EEG neurofeedback for anxiety reduction. Muse devices have been studied specifically in anxiety contexts, with results suggesting consistent use improves stress markers and self-reported anxiety.",
              },
              {
                id: "beginner",
                q: "Do I need to meditate to use Muse?",
                a: "No prior meditation experience is required. The app guides you through sessions with real-time feedback, making it accessible for beginners while remaining valuable for experienced practitioners.",
              },
            ].map((item) => (
              <div key={item.id} className="card-glass rounded-xl p-6" data-testid={`faq-${item.id}`}>
                <h3 className="font-semibold text-black mb-2">{item.q}</h3>
                <p className="text-black/65 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-about-author">
          <p className="text-black/50 text-sm leading-relaxed italic">
            Eden Laraki is the founder of ThriveTools.co, a science-backed wellness and biohacking platform covering supplements, tonic herbs, breathwork, plant medicine, and cognitive optimization, built from 14 years of personal research and self-experimentation.
          </p>
        </section>

      </article>
    </PageLayout>
  );
}
