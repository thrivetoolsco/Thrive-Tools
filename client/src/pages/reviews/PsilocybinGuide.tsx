import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import mushroomHero from "@assets/Cansford-Labs-Launches-Test-for-Active-Ingredient-in-Magic-Mus_1775654986372.jpg";
import mushroomMolecule from "@assets/YNews_1203286347_1775654986395.jpg";

export default function PsilocybinGuide() {
  return (
    <PageLayout
      showShare
      title="Psilocybin: The Science, the Research, and What's Actually Happening in 2025"
      subtitle="Johns Hopkins, Imperial College, NYU, the FDA's Breakthrough Therapy Designation, and clinical trials across four continents. Here is what the research actually shows."
      backLabel="Blog"
      backHref="/blog"
      seo={{
        title: "Psilocybin Science and Research in 2025 | Thrive Tools",
        description: "Clinical research on psilocybin: brain science, depression trials, microdosing, and the legal landscape. Evidence-based guide by Eden Laraki at Thrive Tools.",
        canonical: "/blog/psilocybin-science-research-2025",
        ogType: "article",
        datePublished: "2025-10-01",
      }}
    >
      <article className="space-y-12">

        <div className="card-glass rounded-2xl overflow-hidden" data-testid="img-hero-psilocybin">
          <img
            loading="eager"
            src={mushroomHero}
            alt="Dried psilocybin mushrooms, the subject of major clinical research programmes at Johns Hopkins and Imperial College London"
            className="w-full object-cover max-h-[420px]"
            width={1600}
            height={900}
          />
        </div>

        <div className="flex flex-wrap gap-2 items-center" data-testid="section-badges">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25 border rounded-full px-3 py-0.5 text-xs tracking-widest uppercase font-medium">Plant Medicine</Badge>
          <Badge className="bg-[#3d1a28]/08 text-[#3d1a28]/60 border-[#3d1a28]/15 border rounded-full px-3 py-0.5 text-xs tracking-widest uppercase font-medium">October 1, 2025</Badge>
          <Badge className="bg-[#3d1a28]/08 text-[#3d1a28]/60 border-[#3d1a28]/15 border rounded-full px-3 py-0.5 text-xs tracking-widest uppercase font-medium">By Eden Laraki</Badge>
        </div>

        <div className="prose-section space-y-5">
          <p className="text-[#3d1a28]/70 text-base sm:text-lg leading-relaxed">
            Something unprecedented is happening in mental health research.
          </p>
          <p className="text-[#3d1a28]/70 text-base sm:text-lg leading-relaxed">
            After decades of prohibition that effectively froze psychedelic science in place, psilocybin, the active compound in what are commonly called magic mushrooms, has become one of the most intensely studied substances in psychiatry. Johns Hopkins, Imperial College London, NYU, UCSF, and dozens of other institutions are running clinical trials. The FDA has granted psilocybin Breakthrough Therapy Designation for treatment-resistant depression. Germany, Switzerland, Australia, Canada, and the Czech Republic have established or are actively developing medical access pathways. Oregon and Colorado have legalized supervised therapeutic use.
          </p>
          <p className="text-[#3d1a28]/70 text-base sm:text-lg leading-relaxed">
            This is not fringe science anymore. It is one of the most significant shifts in mental health medicine in decades.
          </p>
          <p className="text-[#3d1a28]/70 text-base sm:text-lg leading-relaxed">
            This article covers what the research actually shows, how psilocybin works in the brain, what microdosing is and what we know about it, the current legal landscape, and what to understand if you are considering it, for yourself or someone you love.
          </p>
          <div className="card-glass rounded-xl p-5 border-l-4 border-[#c4622d]/40">
            <p className="text-[#3d1a28]/60 text-sm leading-relaxed italic">
              <strong className="text-[#3d1a28]/80">Important legal note:</strong> This article is for educational purposes only. Psilocybin is a Schedule I controlled substance under US federal law and is illegal in many countries and states. Nothing in this article constitutes medical or legal advice. Always consult your healthcare provider and verify the laws in your jurisdiction before making any decisions.
            </p>
          </div>
        </div>

        <section className="space-y-5" data-testid="section-what-is-psilocybin">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#3d1a28]">What Is Psilocybin?</h2>
          <p className="text-[#3d1a28]/70 text-base leading-relaxed">
            Psilocybin is a naturally occurring psychedelic compound found in over 200 species of mushrooms, most commonly in the genus <em>Psilocybe</em>. Indigenous cultures across Mesoamerica, particularly the Mazatec people of Oaxaca, have used these mushrooms in healing ceremonies and spiritual practice for thousands of years.
          </p>
          <p className="text-[#3d1a28]/70 text-base leading-relaxed">
            Once ingested, psilocybin is rapidly converted by the body into psilocin, the active metabolite that crosses the blood-brain barrier and produces its effects. Psilocin primarily binds to 5-HT2A serotonin receptors in the brain, triggering a cascade of changes in neural activity, connectivity, and neuroplasticity.
          </p>
          <p className="text-[#3d1a28]/70 text-base leading-relaxed">
            The experience typically lasts 4 to 6 hours. At therapeutic doses used in clinical settings, typically 25mg of synthetic psilocybin or 2 to 4g of dried mushrooms, it produces profound alterations in perception, cognition, and emotional processing that have been described by participants as among the most meaningful experiences of their lives.
          </p>
        </section>

        <section className="space-y-6" data-testid="section-brain-science">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#3d1a28]">How Psilocybin Works in the Brain</h2>

          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold text-[#3d1a28]">The Default Mode Network and Ego Dissolution</h3>
            <p className="text-[#3d1a28]/70 text-base leading-relaxed">
              One of the most consistent findings from neuroimaging research is psilocybin's effect on the default mode network (DMN): a collection of brain regions that becomes active during self-referential thinking, mind-wandering, rumination, and our sense of continuous self-narrative.
            </p>
            <p className="text-[#3d1a28]/70 text-base leading-relaxed">
              The DMN is chronically overactive in depression, anxiety, OCD, addiction, and PTSD. It is the neural basis of the "stuck" feeling: the inability to break out of entrenched patterns of thinking, believing, and feeling.
            </p>
            <p className="text-[#3d1a28]/70 text-base leading-relaxed">
              Psilocybin temporarily suppresses DMN activity. Brain imaging studies consistently show dramatic reductions in DMN connectivity during the psilocybin experience, a phenomenon subjectively experienced as ego dissolution, a loosening of rigid self-identity, or what participants often describe as a sense of unity and dissolution of boundaries.
            </p>
            <p className="text-[#3d1a28]/70 text-base leading-relaxed">
              This disruption appears to create a window of increased neural flexibility: a state researchers describe as a "reset," where entrenched patterns can be examined, processed, and potentially restructured.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold text-[#3d1a28]">Neuroplasticity: Growing New Neural Connections</h3>
            <p className="text-[#3d1a28]/70 text-base leading-relaxed">
              Perhaps the most significant neuroscientific finding from recent psilocybin research is its effect on neuroplasticity: the brain's capacity to form new synaptic connections and reorganize neural networks.
            </p>
            <p className="text-[#3d1a28]/70 text-base leading-relaxed">
              Research published in <em>Molecular Psychiatry</em> demonstrated that psilocybin promotes dendritic growth, the physical growth of new synaptic connections in cortical neurons. This structural change persists well beyond the duration of the acute experience.
            </p>
            <p className="text-[#3d1a28]/70 text-base leading-relaxed">
              In plain terms: psilocybin does not just temporarily alter brain function. It appears to physically promote the growth of new neural architecture. This is particularly significant in depression, which is associated with synaptic loss and reduced neuroplasticity in key regions including the prefrontal cortex.
            </p>
            <p className="text-[#3d1a28]/70 text-base leading-relaxed">
              Newer research has complicated the picture in an interesting way. Scientists originally assumed psilocybin's neuroplasticity effects were driven entirely by direct 5-HT2A receptor activation on the receiving neuron. It turns out that neurons lacking those receptors can still undergo lasting synaptic strengthening, as long as the neurons sending signals to them have the receptors. This suggests psilocybin's rewiring effects may be even more widespread in the brain than initially understood.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold text-[#3d1a28]">BDNF and the Fertilizer for Neural Growth</h3>
            <p className="text-[#3d1a28]/70 text-base leading-relaxed">
              Psilocybin upregulates BDNF, brain-derived neurotrophic factor, sometimes described as "fertilizer for the brain." BDNF supports the survival, growth, and differentiation of neurons and is directly implicated in learning, memory, and mood regulation.
            </p>
            <p className="text-[#3d1a28]/70 text-base leading-relaxed">
              Low BDNF is consistently observed in depression, PTSD, chronic stress, and neurodegenerative conditions. Antidepressants increase BDNF, but slowly, typically over weeks. Psilocybin's BDNF upregulation appears to occur much more rapidly, which may partially explain the speed of its antidepressant effects. This mechanism is also central to why supplements like{" "}
              <Link href="/product-reviews/hyperion-herbs" className="text-[#c4622d] hover:underline font-medium">Lion's Mane from Hyperion Herbs</Link>
              {" "}are being studied alongside psilocybin in the Stamets Stack protocol.
            </p>
          </div>
        </section>

        <div className="card-glass rounded-2xl overflow-hidden" data-testid="img-molecule-psilocybin">
          <img
            loading="lazy"
            src={mushroomMolecule}
            alt="Psilocybin molecular structure diagram alongside growing psilocybe mushrooms, illustrating the compound that has earned FDA Breakthrough Therapy Designation"
            className="w-full object-cover max-h-[420px]"
            width={1260}
            height={840}
          />
        </div>

        <section className="space-y-6" data-testid="section-clinical-research">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#3d1a28]">The Clinical Research: What the Science Actually Shows</h2>

          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold text-[#3d1a28]">Depression and Treatment-Resistant Depression</h3>
            <p className="text-[#3d1a28]/70 text-base leading-relaxed">
              This is where the evidence is strongest and most developed. A landmark study from Imperial College London published in the <em>New England Journal of Medicine</em> was the first large randomized controlled trial comparing psilocybin to an active comparator (escitalopram, a common antidepressant) for major depressive disorder.{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/33852780/" target="_blank" rel="noopener noreferrer" className="text-[#c4622d] hover:underline font-medium inline-flex items-center gap-1">
                Psilocybin produced comparable antidepressant effects to the SSRI over six weeks <ExternalLink className="w-3 h-3" />
              </a>
              , with a faster onset and a different qualitative response profile.
            </p>
            <p className="text-[#3d1a28]/70 text-base leading-relaxed">
              For treatment-resistant depression (TRD), patients who have failed two or more antidepressant treatments, results across multiple trials have been particularly striking. A review covering 388 participants across five clinical trials found consistent evidence of rapid and substantial antidepressant effects, with response rates far exceeding what conventional treatments achieve in this population.
            </p>
            <p className="text-[#3d1a28]/70 text-base leading-relaxed">
              A 2025 meta-analysis reviewing clinical trials registered up to July 2024 concluded that "current evidence supports the short-term efficacy and safety of psychedelic-assisted therapy for selected psychiatric disorders, particularly depression."{" "}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10801413/" target="_blank" rel="noopener noreferrer" className="text-[#c4622d] hover:underline font-medium inline-flex items-center gap-1">
                The FDA has granted Breakthrough Therapy Designation to deuterated psilocybin for MDD <ExternalLink className="w-3 h-3" />
              </a>
              , recognizing its potential to address unmet patient needs.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold text-[#3d1a28]">PTSD</h3>
            <p className="text-[#3d1a28]/70 text-base leading-relaxed">
              Psilocybin is now being studied as a treatment for post-traumatic stress disorder, building on the profound early results from MDMA-assisted therapy research. A qualitative study nested within a Phase 2 clinical trial, published in <em>eClinicalMedicine</em> in 2025, explored participant experiences of psilocybin treatment for PTSD. Participants consistently reported direct and indirect engagement with trauma material during the psilocybin experience, expanded access to self, and notable differences from standard PTSD treatments, including accessing emotional and somatic material that had been inaccessible in talk therapy.
            </p>
            <p className="text-[#3d1a28]/70 text-base leading-relaxed">
              Johns Hopkins is currently running studies on psilocybin for PTSD alongside investigations into opioid addiction, Alzheimer's disease, anorexia nervosa, and alcohol use disorder. The breadth of conditions under investigation reflects the foundational nature of psilocybin's mechanisms: it appears to address root-level patterns of neural rigidity rather than targeting specific symptom clusters. This is similar to what we see with{" "}
              <Link href="/product-reviews/breathwork-beginners-guide" className="text-[#c4622d] hover:underline font-medium">structured breathwork protocols</Link>
              , which also work at the level of nervous system regulation rather than symptom suppression.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold text-[#3d1a28]">Anxiety, End-of-Life Distress, and Addiction</h3>
            <p className="text-[#3d1a28]/70 text-base leading-relaxed">
              Some of the earliest rigorous psilocybin research examined its effects on cancer-related existential anxiety. Multiple studies found that a single session of psilocybin-assisted therapy produced dramatic and lasting reductions in anxiety and depression in cancer patients facing end-of-life: effects that persisted at 6-month follow-up in most participants.
            </p>
            <p className="text-[#3d1a28]/70 text-base leading-relaxed">
              Preliminary research from Johns Hopkins found that a controlled psilocybin protocol helped a significant number of long-term smokers achieve cessation after multiple prior failed attempts, producing abstinence rates at 12 months that far exceeded what conventional cessation methods achieve. Research into alcohol use disorder, opioid addiction, and other substance dependencies is ongoing, with early results suggesting that psilocybin's ability to disrupt entrenched patterns and facilitate perspective shifts may be particularly valuable in addiction contexts.
            </p>
          </div>
        </section>

        <section className="space-y-6" data-testid="section-microdosing">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#3d1a28]">Microdosing Psilocybin: What It Is and What We Know</h2>
          <p className="text-[#3d1a28]/70 text-base leading-relaxed">
            Microdosing refers to taking sub-perceptual doses of psilocybin, typically 0.1 to 0.3 grams of dried mushrooms, roughly one-tenth of a standard psychedelic dose, on a regular schedule without producing hallucinations or altered perception.
          </p>
          <p className="text-[#3d1a28]/70 text-base leading-relaxed">
            The most common protocols include the Fadiman Protocol (one day on, two days off), the Stamets Stack (four days on, three days off, often combined with Lion's Mane mushroom and niacin for synergistic neuroplasticity effects), and various others adapted for individual goals.
          </p>

          <div className="card-glass rounded-2xl p-6 sm:p-8 space-y-5" data-testid="section-microdosing-evidence">
            <h3 className="font-display text-xl font-bold text-[#3d1a28]">What the Research Shows on Microdosing</h3>
            <p className="text-[#3d1a28]/70 text-base leading-relaxed">
              Microdosing research is genuinely less developed than full-dose research. The challenges are significant: blinding is difficult, placebo effects are substantial, and self-selection bias is a real issue in observational studies. With those caveats clearly stated, here is what the evidence currently suggests.
            </p>
            <ul className="space-y-4 text-[#3d1a28]/70 text-base leading-relaxed">
              <li className="flex flex-col gap-1">
                <span className="text-[#c4622d] font-bold">Mood and well-being:</span>
                <span>Survey and observational data consistently report improved mood, reduced anxiety, and greater emotional stability in people who microdose. Several small trials have found mood improvements beyond placebo.</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[#c4622d] font-bold">Cognitive function:</span>
                <span>Microdoses showed a trend toward creative enhancement, particularly on tasks measuring divergent thinking, generating multiple solutions to open-ended problems.</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[#c4622d] font-bold">Default mode network:</span>
                <span>Early evidence suggests sub-hallucinogenic doses reduce DMN activity subtly rather than dramatically: the same mechanism that drives full-dose antidepressant effects, expressed at a much lower amplitude. This may partly explain the mood and rumination benefits reported by microdosers.</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[#c4622d] font-bold">The Stamets Stack:</span>
                <span>The combination of psilocybin microdose, Lion's Mane mushroom (which independently stimulates NGF and BDNF), and niacin (which acts as a peripheral vasodilator potentially enhancing compound delivery) has gained significant attention for synergistic neuroplasticity support. Human trial data on the stack specifically is limited but growing.</span>
              </li>
            </ul>
            <p className="text-[#3d1a28]/70 text-base leading-relaxed">
              The honest summary: microdosing appears genuinely promising for mood, creativity, and cognitive flexibility, but the science is younger and less robust than the full-dose therapeutic research. It should be approached with appropriate humility about what we know and do not know.
            </p>
          </div>
        </section>

        <section className="space-y-5" data-testid="section-integration">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#3d1a28]">Integration: Why the Experience Alone Is Not Enough</h2>
          <p className="text-[#3d1a28]/70 text-base leading-relaxed">
            One of the most important aspects of psilocybin therapy is the role of integration. The psilocybin experience itself creates what researchers describe as a window of neuroplasticity: a period of enhanced neural flexibility during and after the session where the brain is more open to forming new patterns. But neuroplasticity requires something to wire toward.
          </p>
          <p className="text-[#3d1a28]/70 text-base leading-relaxed">
            Integration is the work: the therapy sessions, journaling, somatic practices, conversations, and deliberate reflection that translate the insights and emotional openings from the psilocybin experience into lasting behavioral and psychological change. Without integration, insights tend to fade as the neuroplasticity window closes. The research consistently shows that the quality of preparation and integration work is strongly associated with therapeutic outcomes.
          </p>
          <p className="text-[#3d1a28]/70 text-base leading-relaxed">
            In clinical settings, the standard protocol involves preparation sessions before dosing (psychoeducation, intention-setting, building the therapeutic relationship), a supervised dosing session lasting approximately 8 hours, and multiple integration sessions afterward. The compound is not the therapy. The compound creates conditions for the therapy. What you do before and after matters enormously.
          </p>
          <p className="text-[#3d1a28]/70 text-base leading-relaxed">
            This is why we emphasize foundational practices alongside any psychedelic exploration. Tools like{" "}
            <Link href="/blog/tonic-herbs-guide" className="text-[#c4622d] hover:underline font-medium">tonic herbs for nervous system support</Link>
            {" "}and structured breathwork create the regulated, resilient system that integration practices require.
          </p>
        </section>

        <section className="space-y-5" data-testid="section-legal">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#3d1a28]">The Legal Landscape in 2025</h2>
          <p className="text-[#3d1a28]/70 text-base leading-relaxed">
            The global legal landscape for psilocybin is shifting rapidly, but remains genuinely complex.
          </p>

          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold text-[#3d1a28]">United States</h3>
            <p className="text-[#3d1a28]/70 text-base leading-relaxed">
              Psilocybin remains a Schedule I controlled substance under federal US law. However, significant state and local reform is underway. Legal for supervised therapeutic use: Oregon (since 2023, licensed service centers), Colorado (phased regulatory framework, healing centers operational), New Mexico (Medical Psilocybin Act signed April 2025), Washington (limited university-based therapy pilot). Decriminalized in Denver, Oakland, Santa Cruz, Seattle, Washington DC, and numerous other cities.
            </p>
            <p className="text-[#3d1a28]/70 text-base leading-relaxed">
              Critically: decriminalization is not legalization. Crossing jurisdictional lines with psilocybin, including between decriminalized cities, remains a federal offense. The legal reform happening at the state level does not remove federal risk.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold text-[#3d1a28]">International</h3>
            <p className="text-[#3d1a28]/70 text-base leading-relaxed">
              Legal or medically accessible: Australia (TGA approved psilocybin for therapeutic use, 2023), Canada (Health Canada exemptions for therapeutic use), Netherlands (psilocybin truffles technically legal), Brazil (not federally scheduled), Jamaica (no psilocybin-specific legislation), Peru and Bolivia (traditional use protected), Czech Republic (Medical Psilocybin Act signed 2025), Germany (Compassionate Use Program approved 2025), Switzerland (limited access program ongoing).
            </p>
            <p className="text-[#3d1a28]/70 text-base leading-relaxed">
              Over 36 psychedelic-related bills were introduced across US states in 2025 alone, signaling an acceleration of policy change that is expected to continue.
            </p>
          </div>
        </section>

        <section className="space-y-5" data-testid="section-risks">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#3d1a28]">Risks and Contraindications</h2>
          <p className="text-[#3d1a28]/70 text-base leading-relaxed">
            Psilocybin has a strong safety profile relative to most pharmaceuticals and other psychoactive substances. It is not physically addictive, not toxic at therapeutic doses, and has no established lethal dose in humans. Across hundreds of clinical trials involving thousands of participants, serious adverse events have been rare. That said, real risks exist and should be understood clearly.
          </p>
          <ul className="space-y-4 text-[#3d1a28]/70 text-base leading-relaxed">
            <li className="flex flex-col gap-1">
              <span className="text-[#c4622d] font-bold">Psychological distress:</span>
              <span>Full-dose experiences can be intensely challenging. Panic reactions, paranoia, and acute distress can occur. These require a supportive set and setting to navigate safely.</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-[#c4622d] font-bold">Medication interactions:</span>
              <span>Psilocybin should not be combined with SSRIs, MAOIs, lithium, or other serotonergic medications without medical supervision. Serotonin syndrome is a serious concern. People on SSRIs often experience significantly blunted psilocybin effects due to receptor downregulation.</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-[#c4622d] font-bold">Personal history contraindications:</span>
              <span>Anyone with a personal or family history of psychosis, schizophrenia, or bipolar disorder with psychotic features should approach psilocybin with extreme caution. These conditions are typically exclusion criteria in clinical trials for good reason.</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-[#c4622d] font-bold">Cardiovascular:</span>
              <span>Psilocybin produces temporary increases in heart rate and blood pressure. Anyone with cardiovascular conditions should consult their physician.</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-[#c4622d] font-bold">Set and setting:</span>
              <span>The environment, mindset, and support structure around a psilocybin experience profoundly shape its outcome. Unsupported use outside appropriate contexts carries higher risk of challenging experiences without the integration support needed to process them.</span>
            </li>
          </ul>
        </section>

        <section className="space-y-5" data-testid="section-biohacking-context">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#3d1a28]">Psilocybin in the Context of Plant Medicine and Biohacking</h2>
          <p className="text-[#3d1a28]/70 text-base leading-relaxed">
            For those in the wellness and biohacking space, psilocybin sits at a fascinating intersection: simultaneously the most ancient and the most cutting-edge tool for working with the mind. The Mazatec tradition, which preserved the ceremonial use of psilocybin mushrooms through decades of prohibition, understood something that clinical researchers are now quantifying: that these mushrooms, used with intention, preparation, and integration, offer access to psychological material and states that are otherwise extremely difficult to reach.
          </p>
          <p className="text-[#3d1a28]/70 text-base leading-relaxed">
            The biohacking framing, neuroplasticity, BDNF, default mode network modulation, synaptic growth, is essentially a mechanistic description of what traditional healers called spiritual medicine. The same phenomenon, described in different languages.
          </p>
          <p className="text-[#3d1a28]/70 text-base leading-relaxed">
            For people who have worked with breathwork, somatic practices, tonic herbs, and other tools for nervous system regulation and psychological growth, psilocybin represents a potential accelerant for that work. The neuroplasticity window it creates can make subsequent integration practices unusually potent. This is why the field of psychedelic integration has developed so rapidly alongside the clinical research. The medicine creates conditions. The integration determines outcomes.
          </p>
        </section>

        <section className="space-y-5" data-testid="section-what-to-know">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#3d1a28]">What to Know Before Considering Psilocybin</h2>
          <p className="text-[#3d1a28]/70 text-base leading-relaxed">
            If you are considering psilocybin, whether in a legal therapeutic context, a retreat setting in a permissive jurisdiction, or any other context, here is what the research and clinical experience collectively suggest matters most.
          </p>
          <ul className="space-y-4 text-[#3d1a28]/70 text-base leading-relaxed">
            <li className="flex flex-col gap-1">
              <span className="text-[#c4622d] font-bold">Work with professionals where possible.</span>
              <span>The therapeutic outcomes in clinical trials are significantly associated with the quality of preparation and integration support. Trained guides, therapists, or facilitators provide something that makes a real difference.</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-[#c4622d] font-bold">Address foundational health first.</span>
              <span>Sleep, nutrition, gut health, nervous system regulation, and existing somatic practices all influence how psilocybin is received and integrated. A depleted, dysregulated system does not create ideal conditions.</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-[#c4622d] font-bold">Know your contraindications.</span>
              <span>If you have a personal or family history of psychosis or are on serotonergic medications, this is genuinely important, not a formality. These are the conditions where psilocybin carries real risk.</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-[#c4622d] font-bold">Intention and integration are as important as the experience itself.</span>
              <span>What do you want to understand or heal? What will you do with what arises? Having answers to these questions before going in, and a clear plan for the weeks afterward, matters more than most people realize.</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-[#c4622d] font-bold">Verify the legal status where you are.</span>
              <span>Accessing psilocybin legally through Oregon or Colorado service centers, therapeutic programs in approved countries, or properly conducted clinical trials is meaningfully different from illegal self-administration in terms of both safety and legal risk.</span>
            </li>
          </ul>
        </section>

        <section className="space-y-6" data-testid="section-faq">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#3d1a28]">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              {
                q: "Is psilocybin the same as magic mushrooms?",
                a: "Psilocybin is the active compound in what are commonly called magic mushrooms. The mushrooms themselves are not the scheduled substance federally: psilocybin is. However, mushrooms containing psilocybin are treated as equivalent to the compound in most legal contexts.",
              },
              {
                q: "How long does a psilocybin experience last?",
                a: "The acute effects of psilocybin typically last 4 to 6 hours. The neuroplasticity window, enhanced neural flexibility, persists for days to weeks after the experience. Therapeutic benefits in clinical trials have been measured at 1, 3, 6, and 12 months post-session.",
              },
              {
                q: "Can psilocybin be combined with other supplements or medicines?",
                a: "Psilocybin should not be combined with SSRIs, MAOIs, lithium, or other serotonergic medications without medical supervision. The Stamets Stack specifically combines psilocybin microdoses with Lion's Mane mushroom and niacin for neuroplasticity purposes. This combination is increasingly studied but has limited formal clinical data.",
              },
              {
                q: "What is the Stamets Stack?",
                a: "A protocol developed by mycologist Paul Stamets combining psilocybin microdoses, Lion's Mane mushroom (for NGF stimulation), and niacin (as a peripheral vasodilator and flush agent). The stack is used for neuroplasticity and cognitive enhancement. Currently under research but not yet validated in controlled trials.",
              },
              {
                q: "Is psilocybin addictive?",
                a: "No. Psilocybin does not produce physical dependence. Rapid tolerance develops with repeated use, making daily use self-limiting. Research consistently shows it has low addiction potential. Paradoxically, it is being actively studied as a treatment for addiction.",
              },
              {
                q: "What is the difference between a therapeutic dose and a microdose?",
                a: "Therapeutic doses used in clinical trials are typically 25mg synthetic psilocybin or 2 to 4g dried mushrooms. Microdoses are typically 0.1 to 0.3g dried mushrooms, roughly one-tenth of a standard dose, intended to be sub-perceptual with no hallucinogenic effects.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="card-glass rounded-xl p-5 space-y-2">
                <h3 className="font-semibold text-[#3d1a28] text-base">{q}</h3>
                <p className="text-[#3d1a28]/65 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4" data-testid="section-references">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#3d1a28]">Research References</h2>
          <div className="card-glass rounded-2xl p-6 space-y-3">
            {[
              {
                text: "Carhart-Harris R, et al. Trial of Psilocybin versus Escitalopram for Depression. New England Journal of Medicine, 2021.",
                href: "https://pubmed.ncbi.nlm.nih.gov/33852780/",
              },
              {
                text: "The development of psilocybin therapy for treatment-resistant depression: an update. BJPsych Bulletin, 2024.",
                href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10801413/",
              },
              {
                text: "Novel psychedelic interventions for PTSD and their promise for precision medicine. PMC, 2025.",
                href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12681608/",
              },
              {
                text: "Current perspectives on psychedelic treatments in Europe. PMC, 2026.",
                href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12670272/",
              },
              {
                text: "Johns Hopkins Center for Psychedelic and Consciousness Research.",
                href: "https://www.hopkinsmedicine.org/psychiatry/research/psychedelics-research",
              },
            ].map(({ text, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-[#3d1a28]/60 hover:text-[#c4622d] text-sm leading-relaxed transition-colors group"
              >
                <ExternalLink className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#c4622d]/50 group-hover:text-[#c4622d]" />
                <span>{text}</span>
              </a>
            ))}
          </div>
        </section>

        <div className="card-glass rounded-xl p-5 border-l-4 border-[#c4622d]/40" data-testid="section-disclaimer">
          <p className="text-[#3d1a28]/55 text-sm leading-relaxed italic">
            This article is for educational purposes only. Psilocybin is a Schedule I controlled substance under US federal law. Nothing in this article constitutes medical, legal, or therapeutic advice. Always consult qualified healthcare professionals and verify applicable laws before making any decisions.
          </p>
        </div>

      </article>
    </PageLayout>
  );
}
