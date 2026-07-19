import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Brain, Shield, Zap, Leaf, HelpCircle, FlaskConical, Activity, AlertCircle } from "lucide-react";

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-[#c4622d]">{icon}</span>
      <h2 className="font-display text-2xl font-bold text-black">{title}</h2>
    </div>
  );
}

function FaqItem({ question, children }: { question: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <h3 className="font-display text-lg font-bold text-black">{question}</h3>
      <div className="text-black/70 leading-relaxed">{children}</div>
    </div>
  );
}

function MechanismCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-black/8 bg-white/60 p-5 space-y-2">
      <p className="font-semibold text-black">{title}</p>
      <p className="text-black/70 leading-relaxed text-sm">{children}</p>
    </div>
  );
}

function BulletPoint({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="mt-1.5 w-2 h-2 rounded-full bg-[#c4622d] flex-shrink-0" />
      <p className="text-black/70 leading-relaxed">{children}</p>
    </div>
  );
}

function AffilBlock({
  eyebrow,
  name,
  description,
  code,
  href,
  buttonLabel,
  noCode,
}: {
  eyebrow: string;
  name: string;
  description: string;
  code?: string;
  href: string;
  buttonLabel: string;
  noCode?: boolean;
}) {
  return (
    <div className="rounded-2xl border-2 border-[#c4622d] bg-gradient-to-br from-[#c4622d]/10 to-[#c4622d]/5 p-6 sm:p-8 space-y-4">
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#c4622d]">{eyebrow}</p>
        <h3 className="font-display text-xl font-bold text-black">{name}</h3>
        <p className="text-black/65 text-sm leading-relaxed">{description}</p>
      </div>
      {!noCode && code && (
        <div className="flex items-center gap-3">
          <span className="text-sm text-black/50 font-medium">Discount code:</span>
          <span
            className="font-mono font-black text-2xl text-[#c4622d] bg-white border-2 border-[#c4622d] px-4 py-1.5 rounded-xl tracking-widest shadow-sm select-all"
            data-testid={`discount-code-${name.toLowerCase().replace(/\s/g, "-")}`}
          >
            {code}
          </span>
        </div>
      )}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        data-testid={`link-${name.toLowerCase().replace(/\s/g, "-")}-cta`}
        className="inline-flex items-center gap-2 bg-[#c4622d] hover:bg-[#8b3a1a] text-white font-bold px-8 py-3.5 rounded-full transition-colors text-base shadow-lg shadow-[#c4622d]/25"
      >
        {buttonLabel} <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
}

export default function GutBrainProbioticsGuide() {
  return (
    <PageLayout
      showShare
      title="The Gut-Brain Connection"
      subtitle="How Spore-Based Probiotics Are Changing the Way We Treat Anxiety and Depression"
      seo={{
        title: "The Gut-Brain Connection: Spore-Based Probiotics for Anxiety & Depression | Thrive Tools",
        description: "The gut and brain are in constant bidirectional conversation. Here's how the gut-brain axis works, what the clinical research shows about probiotics for mental health, and why the type of probiotic you take determines whether any of it applies to you at all.",
        canonical: "https://thrivetools.co/blog/gut-brain-connection-spore-probiotics-guide",
        ogType: "article",
        datePublished: "2026-07-06",
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-12">

        <div className="flex flex-wrap gap-2 items-center">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25 text-xs font-semibold px-3 py-1 rounded-full">
            Gut Health
          </Badge>
          <span className="text-black/40 text-sm">July 6, 2026</span>
        </div>

        <p className="text-lg text-black/75 leading-relaxed">
          For most of medical history, the brain and the gut were treated as separate systems. The brain was where mood, cognition, and mental health lived. The gut was where digestion happened. The idea that the two were in constant, bidirectional conversation — and that the state of your gut microbiome could meaningfully influence your anxiety levels, your depression, your stress response, and your emotional resilience — would have seemed fringe even 20 years ago.
        </p>
        <p className="text-black/70 leading-relaxed">
          It doesn't seem fringe anymore. The gut-brain axis is now one of the most actively researched areas in neuroscience and psychiatry. The mechanisms connecting gut microbiota to brain function have been mapped in enough detail that researchers are now using the term "psychobiotics" — probiotics and prebiotics that produce measurable effects on mental health — with clinical seriousness.
        </p>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<Activity className="w-6 h-6" />} title="What the Gut-Brain Axis Actually Is" />
          <div className="space-y-5 text-black/70 leading-relaxed">
            <p>
              The gut-brain axis is a bidirectional communication network connecting the gastrointestinal tract and the central nervous system. It's not a metaphor — it's a specific set of anatomical and biochemical channels through which the gut and brain continuously exchange information.
            </p>
            <div className="space-y-3">
              <MechanismCard title="The vagus nerve">
                The primary highway of gut-brain communication. Running from the brainstem directly to the gut, the vagus nerve carries signals in both directions — but approximately 80–90% of vagal signaling travels upward, from gut to brain. Your gut is, in a very literal sense, constantly sending information to your brain about its state.
              </MechanismCard>
              <MechanismCard title="The enteric nervous system — the 'second brain'">
                A complex network of over 500 million neurons lining the gastrointestinal tract, operating largely autonomously and communicating upward through the vagus nerve.
              </MechanismCard>
              <MechanismCard title="Neurotransmitter production">
                Approximately 90–95% of the body's serotonin is produced in the gut, not the brain. Roughly 50% of dopamine is produced in the gut. GABA — the primary inhibitory neurotransmitter responsible for calm and anxiety reduction — is significantly influenced by gut bacterial activity. The gut doesn't just respond to your mood through digestion. It actively participates in creating it.
              </MechanismCard>
              <MechanismCard title="The immune pathway">
                Dysbiosis of the gut microbiota alters microbial-derived metabolites, leading to increased intestinal permeability and translocation of microbial-associated molecular patterns — triggering peripheral immune activation (elevated IL-1β, IL-6, TNF-α) and microglial priming in the central nervous system. A disrupted gut microbiome drives systemic inflammation that crosses into the brain.
              </MechanismCard>
              <MechanismCard title="Short-chain fatty acids (SCFAs)">
                Produced when gut bacteria ferment dietary fiber, SCFAs cross the blood-brain barrier and directly influence brain function, neuroplasticity, and neuroinflammation. Butyrate — the most studied SCFA — supports the gut barrier, reduces systemic inflammation, and has direct neuroprotective effects in the central nervous system.
              </MechanismCard>
              <MechanismCard title="The HPA axis connection">
                Psychobiotics exhibit positive effects on the intestinal barrier, immune response, cortisol levels, and the hypothalamic-pituitary-adrenal axis. The gut microbiome modulates the stress response system — dysbiosis dysregulates cortisol output and amplifies the physiological stress response. A healthy microbiome actively dampens HPA axis reactivity.
              </MechanismCard>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<AlertCircle className="w-6 h-6" />} title="What Gut Dysbiosis Does to Your Mental Health" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Dysbiosis — the disruption of healthy gut microbiome balance — doesn't just cause digestive symptoms. It produces a cascade of effects that reach directly into brain function and mental health.
            </p>
            <div className="space-y-2.5">
              <BulletPoint>Reduced SCFA production means less butyrate reaching the brain — less neuroprotection and more neuroinflammation.</BulletPoint>
              <BulletPoint>Impaired gut barrier function (leaky gut) allows bacterial lipopolysaccharides into the bloodstream, driving systemic inflammation that crosses into the central nervous system.</BulletPoint>
              <BulletPoint>Disrupted neurotransmitter production means less gut-derived serotonin and GABA — directly affecting mood regulation.</BulletPoint>
              <BulletPoint>Dysregulated HPA axis output means higher baseline cortisol and greater stress reactivity.</BulletPoint>
            </div>
            <p>
              Emerging evidence highlights the connection between microbiota alterations and neurological and psychiatric disorders, including depression. The immune system plays a significant role in stress-related psychopathologies via the intricate microbiome-neuronal-immune axis.
            </p>
            <div className="rounded-2xl border border-[#c4622d]/20 bg-[#c4622d]/5 p-5">
              <p>For a significant subset of people experiencing anxiety and depression, the gut is not just correlated with their mental health — <strong>it's a primary driver of it</strong>. And for these people, treating only the brain while ignoring the gut is addressing the symptom without the cause.</p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<FlaskConical className="w-6 h-6" />} title="The Research: Probiotics for Anxiety and Depression" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <div className="rounded-2xl border border-black/10 bg-white/60 p-5 space-y-3">
              <p className="font-semibold text-black text-sm uppercase tracking-wide">Key clinical findings</p>
              <BulletPoint>A meta-analysis involving <strong>1,401 participants</strong> found that probiotic supplementation significantly alleviated depressive symptoms and provided a moderate anxiolytic effect.</BulletPoint>
              <BulletPoint>Clinical studies indicate that combinations of probiotic strains can exert beneficial effects on stress, anxiety, and broader psychopathological outcomes in healthy populations, as assessed using validated psychological scales.</BulletPoint>
              <BulletPoint>Studies suggest that probiotics may serve as an adjunct therapy for depression, especially in <strong>treatment-resistant cases</strong>.</BulletPoint>
            </div>
            <p>
              Probiotics don't necessarily need to completely restructure your microbiome to affect your mood. They can produce meaningful mental health effects through functional changes — immune modulation, neurotransmitter precursor availability, cortisol regulation — even before large compositional shifts occur.
            </p>
            <p>
              For people who haven't responded adequately to conventional antidepressants, gut-targeted interventions represent a genuinely different approach operating through mechanisms that SSRIs don't touch.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<AlertCircle className="w-6 h-6" />} title="Why Most Probiotics Don't Deliver These Benefits" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              The studies producing meaningful mental health outcomes use probiotics that actually reach the gut in sufficient quantities to modulate the microbiome, produce metabolites, and interact with the immune system. This requires survival through the stomach's acidic environment — a challenge that most commercial probiotic strains fundamentally fail.
            </p>
            <p>
              Standard Lactobacillus and Bifidobacterium strains — in almost every probiotic product on the market — are fragile organisms. Stomach acid at pH 1.5–3.5 kills the vast majority of these strains before they reach the colon where they need to work. Studies have shown that <strong>less than 1% of standard probiotic strains survive transit through the stomach intact</strong>. You're essentially taking a supplement filled with bacteria that arrive at their destination dead.
            </p>
            <p className="italic text-black/60">
              This is why most people feel nothing from standard probiotics. It's not that the gut-brain connection isn't real. It's that the vehicle for delivering beneficial bacteria to the gut is broken.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<Shield className="w-6 h-6" />} title="What Makes Spore-Based Probiotics Different" />
          <div className="space-y-5 text-black/70 leading-relaxed">
            <p>
              Spore-forming bacteria — primarily Bacillus strains — solve the survival problem through a fundamentally different biological mechanism. When environmental conditions become hostile, they produce an endospore — a dormant, protective structure encased in multiple protein layers that is essentially impervious to the conditions that destroy standard probiotic strains. Stomach acid, bile salts, heat, antibiotics — the endospore survives all of them.
            </p>
            <p>
              Once through the stomach and into the more hospitable environment of the small and large intestine, the endospore germinates into an active, metabolically functional bacterium that can colonize, produce metabolites, modulate immune function, and interact with the existing microbiome.
            </p>
            <div className="rounded-2xl border border-black/8 bg-white/60 p-5 text-center">
              <p className="text-4xl font-black text-[#c4622d] mb-1">~100%</p>
              <p className="font-semibold text-black">survival rate through stomach transit</p>
              <p className="text-sm text-black/50 mt-1">vs. &lt;1% for standard Lactobacillus strains</p>
            </div>
            <div className="space-y-3">
              <MechanismCard title="Bacillus subtilis (HU58 / DE111)">
                Documented effects on microbiome diversity, gut barrier function, and immune modulation. Produces nattokinase, vitamin K2, and antimicrobial peptides that selectively inhibit pathogenic bacteria. An exceptional producer of butyrate — the SCFA with the most direct neuroprotective effects.
              </MechanismCard>
              <MechanismCard title="Bacillus indicus HU36">
                Produces carotenoids directly in the gut — fat-soluble antioxidants that are absorbed from the gut into systemic circulation, providing antioxidant support that standard probiotics can't deliver.
              </MechanismCard>
              <MechanismCard title="Bacillus coagulans">
                Produces L+ lactic acid in the gut with documented effects on both gastrointestinal symptoms and inflammatory markers — the same inflammatory pathways that link gut dysbiosis to neuroinflammation and depression.
              </MechanismCard>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<Leaf className="w-6 h-6" />} title="The Complete Gut Protocol: Beyond Probiotics" />
          <div className="rounded-2xl border border-black/8 bg-white/60 p-6 space-y-4">
            <BulletPoint><span className="font-semibold text-black">Prebiotics</span> — feed the bacteria that are already there. Diverse prebiotic fiber drives microbiome diversity in ways no probiotic supplement can replicate on its own.</BulletPoint>
            <BulletPoint><span className="font-semibold text-black">Postbiotics</span> — the beneficial metabolites produced by bacteria, increasingly recognized as having direct health effects independent of the live bacteria that produce them.</BulletPoint>
            <BulletPoint><span className="font-semibold text-black">Digestive enzymes</span> — support the breakdown of food into forms gut bacteria can ferment, improving SCFA production and reducing undigested food that feeds pathogenic species.</BulletPoint>
            <BulletPoint><span className="font-semibold text-black">Omega-3 EPA</span> — directly addresses the neuroinflammatory component. EPA modulates the same inflammatory cytokines (IL-1β, IL-6, TNF-α) that gut dysbiosis elevates — attacking the brain inflammation pathway from a different angle than probiotics.</BulletPoint>
            <BulletPoint><span className="font-semibold text-black">Magnesium</span> — required for over 300 enzymatic reactions including many involved in neurotransmitter synthesis and GABA receptor function. The gut-brain connection doesn't operate in a nutrient vacuum.</BulletPoint>
          </div>
        </section>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<Zap className="w-6 h-6" />} title="What Eden Uses and Recommends" />
          <div className="space-y-5">

            <AffilBlock
              eyebrow="Eden's #1 Pick — Standalone Spore Probiotic"
              name="Just Thrive Spore-Based Probiotics"
              description="Built specifically around spore-based Bacillus strains — Bacillus subtilis HU58 and Bacillus indicus HU36 — with published clinical research on survival rates and gut colonization. This is the category that the research on probiotics for mental health is actually talking about, not the standard Lactobacillus products that dominate pharmacy shelves."
              code="THRIVETOOLS"
              href="https://partners.justthrivehealth.com/THRIVETOOLS"
              buttonLabel="Shop Just Thrive Spore-Based Probiotics"
            />

            <AffilBlock
              eyebrow="Full-Stack Daily Foundation"
              name="IM8 Daily Ultimate Essentials PRO"
              description="Includes spore-based probiotics (Bacillus subtilis DE111 and Bacillus coagulans BC99) alongside prebiotics, postbiotics at 25mg, and digestive enzymes — the full four-layer gut system in one morning drink. If you're already consolidating your supplement stack, IM8 covers the gut protocol alongside 90+ other ingredients without adding another separate product."
              code="THRIVE10"
              href="https://www.im8health.com/THRIVE10"
              buttonLabel="Shop IM8 Daily Ultimate Essentials PRO"
            />

            <div className="rounded-2xl border border-black/10 bg-white/60 p-6 sm:p-8 space-y-4">
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#c4622d]">Neuroinflammation Support</p>
                <h3 className="font-display text-xl font-bold text-black">AquaOmega Vegan Omega-3</h3>
                <p className="text-black/65 text-sm leading-relaxed">High-DHA algae-sourced omega-3 in triglyceride form — IFOS certified and the cleanest plant-based option available. Addresses the neuroinflammatory component of the gut-brain connection directly.</p>
              </div>
              <a
                href="https://aquaomega.refr.cc/default/u/thrivetoolsco?s=rp&t=cp"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-aquaomega-cta"
                className="inline-flex items-center gap-2 border-2 border-[#c4622d] text-[#c4622d] hover:bg-[#c4622d] hover:text-white font-bold px-8 py-3.5 rounded-full transition-colors text-base"
              >
                Shop AquaOmega Vegan Omega-3 <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-black/35 px-1">
              Disclosure: I'm affiliated with Just Thrive, IM8, and AquaOmega and receive a commission on purchases through my links. I recommend these products because the formulations hold up to scrutiny — not the other way around.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<Activity className="w-6 h-6" />} title="How Long Does It Take?" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              The gut-brain connection operates on a different timescale than a stimulant or a painkiller. You're not taking something that produces immediate neurochemical effects — you're supporting the restoration and maintenance of a biological system.
            </p>
            <p>
              Most research showing meaningful mental health outcomes uses <strong>4–8 weeks of consistent daily supplementation</strong> as the minimum. Some studies run 12 weeks. The improvements — reduced anxiety scores, improved mood, lower cortisol — build gradually as the microbiome shifts, gut barrier integrity improves, neurotransmitter precursor availability increases, and neuroinflammation decreases.
            </p>
            <p className="italic text-black/60">
              Consistency over months, not weeks, is what produces the outcomes the research documents.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<Brain className="w-6 h-6" />} title="Who This Is Most Relevant For" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <BulletPoint><span className="font-semibold text-black">Anxiety or depression that hasn't fully responded to conventional treatment.</span> The mechanisms are different enough from SSRIs and anxiolytics that gut-targeted interventions can work where pharmaceutical approaches haven't.</BulletPoint>
            <BulletPoint><span className="font-semibold text-black">History of antibiotic use.</span> Antibiotics are indiscriminate — they kill beneficial gut bacteria alongside pathogens. Post-antibiotic gut dysbiosis is one of the most common precipitants of mood disruption, and it's rarely addressed in conventional care.</BulletPoint>
            <BulletPoint><span className="font-semibold text-black">Gut symptoms alongside mood symptoms.</span> IBS, bloating, irregular digestion, and chronic gut discomfort frequently co-occur with anxiety and depression — not coincidentally. They share underlying mechanisms.</BulletPoint>
            <BulletPoint><span className="font-semibold text-black">Chronic stress or HPA axis dysregulation.</span> Chronic stress disrupts the gut microbiome; gut dysbiosis amplifies the stress response. This cycle needs to be interrupted from both directions.</BulletPoint>
            <BulletPoint><span className="font-semibold text-black">Taking SSRIs or other antidepressants.</span> Given that 90–95% of serotonin is produced in the gut, optimizing gut function is directly relevant to how effectively serotonin-targeting medications work.</BulletPoint>
          </div>
        </section>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<AlertCircle className="w-6 h-6" />} title="The Honest Limitations" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              The gut-brain connection is real and the research is compelling — but intellectual honesty requires acknowledging what the evidence does and doesn't support.
            </p>
            <BulletPoint>The probiotic-mental health research is heterogeneous — different strains, different doses, different populations. The overall signal is positive but the specifics of which strains produce which effects in which people are still being worked out.</BulletPoint>
            <BulletPoint>Probiotics are not a replacement for professional mental health treatment. For people with moderate-to-severe depression or anxiety disorders, gut health intervention should be adjunctive to — not instead of — appropriate clinical care.</BulletPoint>
            <BulletPoint>The research is strongest for anxiety and milder depression. For severe or complex mental health conditions, this is one piece of a broader picture.</BulletPoint>
          </div>
        </section>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<HelpCircle className="w-6 h-6" />} title="Frequently Asked Questions" />
          <div className="space-y-7">
            <FaqItem question="Can probiotics actually help with anxiety and depression?">
              A meta-analysis involving 1,401 participants found that probiotic supplementation significantly alleviated depressive symptoms and provided a moderate anxiolytic effect. The research is promising and mechanistically well-supported — but probiotics are best understood as adjunctive support rather than standalone treatment for clinical conditions.
            </FaqItem>
            <FaqItem question="Why do standard probiotics not work for mental health?">
              Because they don't survive the journey to the gut in sufficient quantities. Less than 1% of standard Lactobacillus and Bifidobacterium strains survive stomach acid transit. Without live bacteria reaching the colon, there's no microbiome modulation, no metabolite production, and no meaningful mental health effect.
            </FaqItem>
            <FaqItem question="What makes spore-based probiotics better?">
              Spore-forming bacteria produce an endospore that survives stomach acid, bile salts, and heat — arriving in the colon intact and active. Survival rates approaching 100% versus less than 1% for standard strains. This is the difference between an intervention that actually reaches its target and one that doesn't.
            </FaqItem>
            <FaqItem question="How long before probiotics affect mood?">
              Most clinical trials showing meaningful mood effects run 4–8 weeks minimum. Gut microbiome changes that affect neurotransmitter production, inflammation, and HPA axis function take time to develop. Consistency over months matters more than any single dose.
            </FaqItem>
            <FaqItem question="Is the gut-brain connection real science?">
              Yes. The gut-brain axis is a well-characterized system encompassing bidirectional communication involving neural, immune, endocrine, and metabolic pathways. It's now one of the most active research areas in neuroscience and psychiatry, with multiple dedicated journals and thousands of published studies.
            </FaqItem>
            <FaqItem question="Should I take probiotics instead of antidepressants?">
              No — this is not an either/or decision. Studies suggest that probiotics may serve as adjunct therapy for depression, especially in treatment-resistant cases. Gut health optimization works alongside conventional treatment, not instead of it. Always consult your healthcare provider about any changes to your mental health treatment.
            </FaqItem>
            <FaqItem question="What else supports the gut-brain connection beyond probiotics?">
              Diverse prebiotic fiber from whole plant foods, omega-3 EPA for neuroinflammation, magnesium for neurotransmitter synthesis and GABA function, reducing ultra-processed foods, adequate sleep (which directly affects microbiome composition), and stress regulation practices that reduce cortisol's damaging effect on gut barrier integrity.
            </FaqItem>
          </div>
        </section>

        <div className="section-divider" />

        <section>
          <h2 className="font-display text-lg font-bold text-black mb-4">Research References</h2>
          <div className="space-y-2 text-sm text-black/50">
            <p>Ferrari S, et al. "The influence of the gut-brain axis on anxiety and depression." <em>Journal of Traditional and Complementary Medicine</em>, 2024.</p>
            <p>"Probiotics' Effects in the Treatment of Anxiety and Depression." <em>PMC</em>, 2024.</p>
            <p>"Gut microbiota as a novel target for treating anxiety and depression." <em>Frontiers in Microbiology</em>, 2025.</p>
            <p>"Psychobiotics in mental health: insights from human clinical trials via the gut-brain axis." <em>Frontiers in Microbiology</em>, 2026.</p>
            <p>"The role of probiotics in modulation of the gut-brain axis." <em>Frontiers in Pharmacology</em>, 2025.</p>
          </div>
        </section>

        <p className="text-xs text-black/35 border-t border-black/8 pt-6">
          This article is for educational and informational purposes only. It does not constitute medical advice and is not a substitute for professional mental health treatment. If you are experiencing anxiety, depression, or any mental health condition, please consult a qualified healthcare provider.
        </p>

      </div>
    </PageLayout>
  );
}
