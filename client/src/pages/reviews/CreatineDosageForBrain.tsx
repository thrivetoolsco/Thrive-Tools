import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Brain, FlaskConical, ShieldCheck, Zap, BarChart2, User } from "lucide-react";

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-[#c4622d]">{icon}</span>
      <h2 className="font-display text-2xl font-bold text-black">{title}</h2>
    </div>
  );
}

function StudyCard({ label, text, link }: { label: string; text: string; link?: { href: string; label: string } }) {
  return (
    <div className="card-glass rounded-xl p-5" data-testid={`study-card-${label.toLowerCase().replace(/\s/g, "-")}`}>
      <p className="text-xs font-semibold uppercase tracking-widest text-[#c4622d] mb-2">{label}</p>
      <p className="text-black/70 text-sm leading-relaxed">
        {text}{" "}
        {link && (
          <a href={link.href} target="_blank" rel="noopener noreferrer" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors inline-flex items-center gap-1">
            {link.label} <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </p>
    </div>
  );
}

function DosingCard({ label, text }: { label: string; text: string }) {
  return (
    <div className="card-glass rounded-xl p-5" data-testid={`dosing-card-${label.toLowerCase().replace(/\s/g, "-").slice(0, 20)}`}>
      <p className="font-semibold text-black/90 text-sm mb-1">{label}</p>
      <p className="text-black/65 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

const organikaUrl = "https://organika.com/?rfsn=8403940.a276a1f&utm_source=refersion&utm_medium=affiliate&utm_campaign=8403940.a276a1f";

export default function CreatineDosageForBrain() {
  return (
    <PageLayout
      title="Why 5g of Creatine Isn't Enough for Your Brain: The Case for 10g"
      subtitle="2026 Edition"
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-12">

        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border border-[#c4622d]/25 rounded-full px-3 py-0.5 text-xs">
            Deep Dive
          </Badge>
          <Badge className="bg-white/5 text-black/50 border border-white/10 rounded-full px-3 py-0.5 text-xs">
            2026 Edition
          </Badge>
        </div>

        <section data-testid="section-intro">
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              If you've been taking creatine, there's a good chance you've been taking 5 grams a day. That's the standard recommendation. It's on the label. It's what most coaches say. It's what most people in the gym do. And for your muscles, it works.
            </p>
            <p>
              But here's what's becoming increasingly clear in the research: your brain is a different story.
            </p>
            <p>
              The science behind creatine and cognition has quietly exploded over the past few years, and the consensus emerging from some of the most credible voices in longevity, neuroscience, and performance research, including Dr. Rhonda Patrick, Andrew Huberman, and Dr. Darren Candow, is pointing in the same direction. Five grams saturates your muscle. To meaningfully raise creatine levels in the brain, you likely need to go higher. And the difference matters more than most people realize.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-brain">
          <SectionHeader icon={<Brain className="w-5 h-5" />} title="What Creatine Actually Does in the Brain" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Most people think of creatine as a muscle supplement. But the brain is, by any measure, the most energy-hungry organ in your body, accounting for 20% of your daily energy needs despite representing only about 2% of your body weight.
            </p>
            <p>
              The brain runs on ATP, adenosine triphosphate, the same energy currency that powers your muscles during high-intensity exercise. And creatine, specifically in its phosphocreatine form, is the fastest system your body has for regenerating ATP on demand. In the brain, creatine may improve cognitive performance by increasing cellular energy reserves and reducing oxidative stress, which is particularly important in tasks requiring high cognitive processing.
            </p>
            <p>
              The mechanisms underlying creatine's enhancement of memory likely involve several biological pathways: increasing the energy supply to brain cells in the form of phosphocreatine, enhancing neurotransmitter synthesis including acetylcholine, and acting as a neuromodulator that affects synaptic efficacy and plasticity. Both are vital for learning and memory processes.
            </p>
            <p>
              In plain terms: creatine isn't just gym fuel. It's brain fuel. The question is whether you're taking enough for it to actually reach there.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-bbb">
          <SectionHeader icon={<ShieldCheck className="w-5 h-5" />} title="The Blood-Brain Barrier Problem: Why 5g Falls Short" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Here's the core issue, and it's a physiological one. Creatine does not diffuse passively through cell membranes. Its uptake into the central nervous system is assured and limited by the creatine transporter operating near saturation and expressed in the endothelial cell layer of the blood-brain barrier, but not in the layer of astrocyte feet. CNS uptake of exogenous creatine from the periphery is marginal and takes a long time.
            </p>
            <p>
              In simpler terms: your muscles are creatine sponges. They absorb it rapidly and greedily. Your brain, protected by the blood-brain barrier, is far more selective. Since creatine does not cross the blood-brain barrier readily, it is recommended that individuals consume 10g per day to promote cognitive benefit.
            </p>
            <p>
              When you're sleep-deprived, jet-lagged, or under cognitive stress, creatine seems to come to the rescue. But the brain says "we'll make our own creatine, thanks," until you're metabolically stressed. That's when the brain starts begging for more.
            </p>
            <p>
              The practical implication: at 5g per day, your muscles get what they need and your brain receives the remainder, which, after muscular uptake, may be very little. A daily dose of 10 grams of creatine doubles brain creatine levels compared to lower doses of 2 or 4 grams. Neuroimaging studies show that this higher dose increases high-energy phosphates in the gray matter, white matter, and thalamus, areas critical for mood, memory, and cognitive performance.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-rhonda">
          <SectionHeader icon={<User className="w-5 h-5" />} title="What Dr. Rhonda Patrick Says" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Dr. Rhonda Patrick, biochemist, researcher, and one of the most rigorous science communicators working today, has been among the most vocal advocates for rethinking the standard 5g creatine recommendation when brain health is the goal.
            </p>
            <p>
              She personally takes around 10 grams daily, explaining that this dose seems ideal for maximizing muscle strength, bone health, and brain benefits, advantages that might not fully appear at lower doses. Her personal protocol, as she's shared publicly, is nuanced and situational:
            </p>
            <ul className="space-y-2 pl-4 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
              <li className="text-black/70 text-sm">5g on lighter workout days</li>
              <li className="text-black/70 text-sm">10g most days, especially when strength training</li>
              <li className="text-black/70 text-sm">20g, split into two 10g doses, when sleep-deprived, for a cognitive boost</li>
            </ul>
            <p>
              In a conversation with leading creatine researcher Dr. Darren Candow on her FoundMyFitness podcast, Patrick laid out the mechanism clearly: "It turns out that when you start to go above 5 grams and you get into more of the 10 grams range, then some of the creatine is getting into the brain, versus being all consumed by the muscle."
            </p>
            <p>
              For brain health, she recommends 10 grams per day to increase creatine levels in the brain, especially during stressful conditions like sleep deprivation, and personally uses 20 grams when sleep-deprived.
            </p>
            <p>
              You can explore her full breakdown of creatine and cognitive performance on her podcast at{" "}
              <a href="https://www.foundmyfitness.com/topics/creatine" target="_blank" rel="noopener noreferrer" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">foundmyfitness.com</a>{" "}
              — it's one of the most thorough public discussions of the topic available.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-huberman">
          <SectionHeader icon={<User className="w-5 h-5" />} title="What Andrew Huberman Says" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Andrew Huberman, neuroscientist and host of the Huberman Lab podcast, has similarly shifted his own protocol toward higher dosing after conversations with performance scientist Dr. Andy Galpin.
            </p>
            <p>
              Since talking with Dr. Andy Galpin, Huberman has increased his own intake to 10 to 15 grams daily. He finds powdered creatine monohydrate easy on his stomach, often mixing 10 to 15 grams into a protein shake or water with lemon juice.
            </p>
            <p>
              The body-weight dosing framework Huberman discusses on his podcast is practical: someone weighing between 185 to 250 lbs typically benefits from 10 grams per day, while those weighing 130 to 180 lbs might find 5 grams sufficient. This isn't arbitrary. It reflects the reality that larger individuals have more muscle mass absorbing the baseline dose before any meaningful amount reaches the brain.
            </p>
            <p>
              Dr. Andy Galpin notes it's pretty clear the brain loves creatine as fuel, needed not just for muscle contraction but also for brain cells like astrocytes to provide energy. Huberman finds it very clear that the phosphocreatine system is vitally important for the forebrain, the part responsible for planning, action, and rule-setting.
            </p>
            <p>
              For a full deep-dive on creatine dosing, timing, and cognitive protocols, Huberman's podcast episode with Dr. Andy Galpin is essential listening, available at{" "}
              <a href="https://www.hubermanlab.com" target="_blank" rel="noopener noreferrer" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">hubermanlab.com</a>.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-research">
          <SectionHeader icon={<FlaskConical className="w-5 h-5" />} title="What the Research Actually Shows" />
          <p className="text-black/70 leading-relaxed mb-6">
            The expert recommendations aren't anecdotal. They're grounded in a growing body of peer-reviewed evidence.
          </p>
          <div className="space-y-4">
            <StudyCard
              label="The 2024 Meta-Analysis"
              text="A systematic review of 16 RCTs involving 492 participants aged 20.8 to 76.4 years found that creatine supplementation showed significant positive effects on memory and attention time, as well as significantly improving processing speed, with subgroup analyses revealing greater benefit in individuals with diseases, those aged 18 to 60, and females."
            />
            <StudyCard
              label="The Alzheimer's Pilot Trial (2025)"
              text="Researchers at the University of Kansas Medical Center administered 20g of creatine per day, split into two 10g doses, to patients with Alzheimer's disease for 8 weeks. The study showed an 11% increase in brain creatine levels and researchers saw a moderate improvement in working memory and executive function. The lead researcher called the brain creatine increase 'a significant finding.'"
              link={{ href: "https://www.kumc.edu/about/news/news-archive/creatine-alzheimers-research.html", label: "Read the study" }}
            />
            <StudyCard
              label="The Sleep Deprivation Studies"
              text="During acute oxygen deprivation, creatine supplementation at 20g per day for 7 days in young healthy individuals attenuated cognitive errors during a continuous performance test compared with placebo. In addition, following a 90-minute mentally challenging task, a high dose of creatine enhanced executive function measured by a prolonged Stroop test. This maps directly to what Dr. Patrick recommends: load up on high-demand days."
            />
            <StudyCard
              label="The Dose-Response Study"
              text="Creatine supplementation overall increases brain creatine levels by 3 to 10%, but there appears to be high variability in responsiveness. Among studies involving young, healthy adults, three studies found improvements in brain creatine levels due to approximately 20g per day for 7 to 28 days, while two studies found no effect, suggesting that higher and longer dosing strategies may be needed, particularly in younger adults who may already have higher baseline brain creatine levels."
              link={{ href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10526554/", label: "Full study via PMC" }}
            />
            <StudyCard
              label="The Psychiatric Research (2025)"
              text="A scoping review spanning 2006 to 2025 found that creatine supplementation across doses of 3 to 10g per day showed statistically significant improvements in depression severity, and noted that given prior evidence from studies involving sleep and oxygen deprivation using doses around 20g per day, many reviewed psychiatric studies may have used suboptimal creatine dosing, potentially underestimating its therapeutic efficacy."
            />
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-candow">
          <SectionHeader icon={<User className="w-5 h-5" />} title="Dr. Darren Candow: The World's Leading Creatine Researcher" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              No article on creatine dosing is complete without referencing Dr. Darren Candow, Professor and Canada Research Chair at the University of Regina, arguably the world's foremost researcher on creatine across the lifespan.
            </p>
            <div className="card-glass rounded-xl p-6 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
              <p className="text-black/75 text-sm leading-relaxed italic">
                "The best studies for the brain look at 20 grams a day for at least a week. The theory here is that since the blood-brain barrier is very resistant to creatine, and the astrocytes act as a filter, it determines what gets in. At 5 grams, you'd have a small increase in brain creatine content. But if you have a really non-stressful life, the brain says no, go to the bone or we'll excrete it down the toilet. But if you're metabolically stressed, it's begging for more."
              </p>
              <p className="text-xs text-[#c4622d] font-semibold mt-3">Dr. Darren Candow, University of Regina</p>
            </div>
            <p>
              Candow personally takes around 10 grams a day for baseline, but when sleep-deprived, flying, or under heavy mental load, he goes up to 20 grams.
            </p>
            <p>
              His full conversation with Dr. Rhonda Patrick on the FoundMyFitness podcast (Episode 100) is the single best public resource on creatine science available today. Listen at{" "}
              <a href="https://www.foundmyfitness.com/episodes/darren-candow" target="_blank" rel="noopener noreferrer" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">foundmyfitness.com</a>.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-spillover">
          <SectionHeader icon={<Zap className="w-5 h-5" />} title="The Spillover Theory: Why Muscle Saturation Is the Key" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              According to Dr. Darren Candow, once muscle creatine stores are saturated, which happens at around 5 grams per day, extra creatine may "spill over" to other tissues, including the brain, bones, and immune system, where it can deliver additional health and cognitive benefits.
            </p>
            <p>
              This is the cleanest explanation for why the 10g threshold matters: it's not that 5g does nothing for your brain. It's that at 5g, your muscles consume almost all of it before the brain gets a meaningful share. Push past muscle saturation, and the surplus has somewhere new to go.
            </p>
            <p className="font-semibold text-black/80">
              The bottom line: 5 grams might be the baseline, but 10 grams could unlock the full-body potential of creatine.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-dosing">
          <SectionHeader icon={<BarChart2 className="w-5 h-5" />} title="A Practical Dosing Framework" />
          <p className="text-black/70 leading-relaxed mb-6">
            Based on the research and expert recommendations, here's a clear framework for using creatine strategically:
          </p>
          <div className="space-y-4">
            <DosingCard
              label="If your primary goal is muscle performance"
              text="3 to 5g daily remains effective and well-supported by decades of research."
            />
            <DosingCard
              label="If your primary goal is cognitive performance and brain health"
              text="Aim for 10g daily, split into two 5g doses taken with meals for best absorption and to minimize any GI discomfort."
            />
            <DosingCard
              label="On high-demand days, sleep-deprived, jet-lagged, or facing heavy cognitive load"
              text="Consider 20g for that day, split into two 10g doses. This is exactly what both Dr. Patrick and Dr. Candow do themselves."
            />
            <DosingCard
              label="If you're vegetarian or vegan"
              text="The cognitive case for higher dosing is especially strong. Dietary creatine comes almost exclusively from meat and fish. Plant-based eaters have significantly lower baseline creatine stores in both muscle and brain, making supplementation more impactful and higher doses more justified."
            />
            <DosingCard
              label="Timing"
              text="Unlike caffeine, creatine is not acute. It takes several weeks to build up in your tissues and have a noticeable effect. It's not something you take when feeling terrible for an immediate boost. Timing within the day matters less than consistency. Take it whenever you'll remember it."
            />
          </div>
          <p className="mt-6 text-sm text-black/55 leading-relaxed">
            For how creatine fits into a complete supplement stack, see our{" "}
            <a href="/product-reviews/biohacking-supplements-2026" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">full biohacking supplements guide</a>{" "}
            and our{" "}
            <a href="/product-reviews/biohacking-beginners-guide" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">biohacking beginners guide</a>.
          </p>
        </section>

        <div className="section-divider" />

        <section data-testid="section-safety">
          <SectionHeader icon={<ShieldCheck className="w-5 h-5" />} title="Safety at Higher Doses" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              A common concern when increasing from 5g to 10g is safety. The research is reassuring. Creatine has a strong safety profile, supported by consistent tolerability across studies with doses ranging from 3g to 10g per day. The primary side effect reported at higher doses is gastrointestinal discomfort, which is almost entirely resolved by splitting the dose across two meals rather than taking it all at once.
            </p>
            <p>
              The old concern about kidney damage has been thoroughly debunked in healthy individuals across multiple long-term studies. Creatine raises serum creatinine, a kidney marker, as a metabolic byproduct, but this is a false positive, not an indicator of kidney stress. Anyone with pre-existing kidney conditions should consult their physician before increasing dose.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-product">
          <h2 className="font-display text-2xl font-bold text-black mb-6">The Product I Recommend: Organika Creatine Monohydrate</h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              For clean, no-filler creatine monohydrate at a dose that actually reaches the brain, I recommend{" "}
              <a href={organikaUrl} target="_blank" rel="noopener noreferrer" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">Organika Creatine Monohydrate</a>,
              a BC-based, GMP-certified, third-party tested product with over 34 years of manufacturing integrity behind it. Pure creatine monohydrate, nothing else.
            </p>
            <p>
              At 10g per day, one bag lasts roughly 50 days. It's one of the highest-value cognitive investments you can make, and one of the most under-dosed supplements in most people's stacks.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-conclusion">
          <h2 className="font-display text-2xl font-bold text-black mb-6">The Bottom Line</h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Five grams of creatine will serve your muscles well. But if you're taking creatine for cognitive performance, brain resilience, mood support, or long-term neuroprotection, you're probably leaving most of the benefit on the table.
            </p>
            <p>
              The research is clear. The experts who have looked at this most carefully, Rhonda Patrick, Andrew Huberman, Darren Candow, have all personally moved to 10g as their daily baseline, with strategic increases to 20g on high-demand days. That's not a coincidence.
            </p>
            <p className="font-semibold text-black/80">
              Your brain uses 20% of your body's energy. It deserves more than the muscle leftovers.
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
              href={organikaUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-organika-creatine"
              className="inline-flex items-center justify-center gap-2 flex-wrap"
            >
              Use code EDEN_25 to shop Organika Creatine <ExternalLink className="w-4 h-4 flex-shrink-0" />
            </a>
          </Button>
        </div>

        <p className="text-center text-black/35 text-xs italic" data-testid="text-disclaimer">
          Medical Disclaimer: This article is for informational purposes only and does not constitute medical advice. Consult a qualified healthcare professional before changing your supplement regimen, particularly if you have kidney disease or other underlying health conditions.
        </p>

      </article>
    </PageLayout>
  );
}
