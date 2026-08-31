import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FlaskConical, Leaf, Dumbbell, Brain, BookOpen, ShieldCheck } from "lucide-react";
import { Helmet } from "react-helmet-async";

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

function AffiliateBlock({
  name,
  description,
  code,
  href,
}: {
  name: string;
  description: string;
  code?: string;
  href: string;
}) {
  return (
    <section className="rounded-2xl border border-[#c4622d]/25 bg-[#c4622d]/6 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <p className="font-bold text-black text-base mb-0.5">{name}</p>
        <p className="text-black/60 text-sm leading-relaxed">{description}</p>
        {code && (
          <p className="mt-2 text-xs font-mono font-semibold text-[#8b3a1a] bg-[#c4622d]/12 border border-[#c4622d]/25 inline-block px-2.5 py-1 rounded-md">
            Code: {code}
          </p>
        )}
      </div>
      <a href={href} target="_blank" rel="noopener noreferrer" className="shrink-0">
        <button className="inline-flex items-center gap-1.5 bg-[#c4622d] hover:bg-[#8b3a1a] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors whitespace-nowrap">
          Visit {name} <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </a>
    </section>
  );
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is urolithin A and where does it come from?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Urolithin A is a postbiotic compound produced when gut bacteria metabolize ellagitannins, polyphenols found in pomegranates, walnuts, and certain berries. It activates mitophagy, the cellular process that clears damaged mitochondria.",
      },
    },
    {
      "@type": "Question",
      name: "What is mitophagy and why does it matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mitophagy is the cellular quality-control process that identifies damaged mitochondria and breaks them down for recycling. When it declines with age, damaged mitochondria can accumulate and contribute to energetic decline and inflammation.",
      },
    },
    {
      "@type": "Question",
      name: "Is Mitopure safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mitopure has been studied in human clinical trials and has received a favorable FDA GRAS review. It is also NSF Certified for Sport and Clean Label Certified. Discuss any supplement with a qualified healthcare provider, especially if you take medication or manage a health condition.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get enough urolithin A from eating pomegranates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not reliably. Gut bacteria convert ellagitannins from pomegranates into urolithin A, but people vary substantially in their ability to make that conversion. Direct supplementation with a standardized form bypasses this variability.",
      },
    },
    {
      "@type": "Question",
      name: "How long does urolithin A take to work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Human muscle-endurance trials measured initial changes after about four weeks. Urolithin A works through mitophagy and other biological processes, so a consistent routine over months is more realistic than expecting an immediate effect.",
      },
    },
    {
      "@type": "Question",
      name: "What dose of urolithin A should I take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Human clinical trials have studied doses ranging from 500mg to 1,000mg daily, with some foundational trials using 1,000mg. Follow the product label and consult a healthcare provider before choosing a dose.",
      },
    },
    {
      "@type": "Question",
      name: "How does urolithin A compare with NMN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Urolithin A and NMN work through different mechanisms. Urolithin A activates mitophagy to clear damaged mitochondria, while NMN supports NAD+ levels and cellular energy metabolism. They are complementary mechanisms rather than interchangeable supplements.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose Mitopure over cheaper urolithin A supplements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The human clinical research discussed in this article was conducted on Mitopure specifically. When comparing products, look for transparent dosing, human clinical evidence on the exact formulation, quality testing, and appropriate regulatory documentation.",
      },
    },
  ],
};

export default function UrolithinAGuide() {
  return (
    <PageLayout
      showShare
      title="Urolithin A"
      subtitle="The Longevity Compound Your Gut Makes From Pomegranates — If You&apos;re Lucky"
      seo={{
        title: "Urolithin A: Mitophagy, Benefits, Dosing & the Best Longevity Supplement",
        description:
          "What is urolithin A? Learn how this gut-derived postbiotic activates mitophagy, why most people cannot make enough from pomegranates, and how Mitopure fits into a longevity protocol.",
        canonical: "/blog/urolithin-a-mitophagy-longevity-supplement-guide",
        ogType: "article",
        datePublished: "2026-09-02",
      }}
    >
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        <div className="flex flex-wrap gap-2 items-center">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25 text-xs font-semibold px-3 py-1 rounded-full">
            Longevity
          </Badge>
          <span className="text-black/40 text-sm">September 2, 2026</span>
        </div>

        <div className="space-y-4 text-black/70 leading-relaxed">
          <p className="text-lg">
            Here&apos;s something that doesn&apos;t get nearly enough attention in the longevity space: one of the most promising anti-aging compounds currently in clinical research isn&apos;t made in a lab. It&apos;s made in your gut — but only if you have the right bacteria to produce it.
          </p>
          <p>
            Urolithin A is a postbiotic compound produced when gut bacteria metabolize ellagitannins — polyphenols found in pomegranates, walnuts, and certain berries. In the body, it activates mitophagy, the cellular process responsible for clearing out damaged mitochondria and replacing them with healthy ones.
          </p>
          <p>
            The catch: research suggests only about 30–40% of people have gut microbiomes capable of producing urolithin A efficiently from food. The rest — the majority — convert very little regardless of how many pomegranates they eat.
          </p>
          <p>
            This is why urolithin A supplementation has become one of the most interesting areas of longevity science. The research behind it now spans 18 years, 25 human clinical trials, and more than 2,200 participants.
          </p>
        </div>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<FlaskConical className="w-6 h-6" />} title="What Urolithin A Actually Does: The Mitophagy Mechanism" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              To understand why longevity researchers are excited about urolithin A, you need to understand mitophagy — because this is the primary mechanism through which it works.
            </p>
            <p>
              Your cells contain hundreds to thousands of mitochondria — the organelles that produce ATP, the energy currency of every biological process. Mitochondria are constantly being damaged by reactive oxygen species, metabolic stress, and the ordinary wear of cellular activity.
            </p>
            <p>
              Healthy cells continuously identify damaged mitochondria, tag them for removal, and break them down through a selective autophagy process called <strong className="text-black">mitophagy</strong>. When mitophagy functions well, cells stay energetically efficient, inflammation stays low, and tissues maintain their functional capacity.
            </p>
            <p>
              When mitophagy declines — as it does with aging — damaged mitochondria accumulate. They produce less energy and more reactive oxygen species. The result is the progressive energetic decline, inflammation, and functional deterioration we recognize as biological aging.
            </p>
            <p>
              Urolithin A is currently one of the most studied food-derived activators of mitophagy. It triggers the cellular machinery responsible for identifying and clearing damaged mitochondria — stimulating the quality-control process that keeps cellular energy systems clean and functional.
            </p>
            <p>
              This places urolithin A in a unique category. It doesn&apos;t just provide antioxidant protection against ongoing damage. It activates the system responsible for removing damage that has already accumulated — a fundamentally different approach to cellular maintenance.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<BookOpen className="w-6 h-6" />} title="The Research: What 18 Years of Clinical Trials Actually Shows" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              This is where urolithin A separates itself from most longevity supplements. Timeline has spent 18 years researching the compound and has published findings in high-impact peer-reviewed journals. Its clinical research program spans more than 2,200 participants and 25 human studies.
            </p>
            <p>Here&apos;s what the major areas of research have found:</p>

            <div className="space-y-3">
              <h3 className="font-display text-xl font-bold text-black">Muscle Strength and Endurance</h3>
              <p>
                A foundational human trial published in <em>Nature Metabolism</em> found that urolithin A supplementation at 1,000mg daily improved muscle endurance in older adults, measured by the number of muscle contractions before fatigue, compared with placebo. Mitochondrial gene expression also improved, and the results held across active and sedentary participants.
              </p>
              <p>
                Participants taking 1,000mg per day showed lower exercise-induced muscle strain markers, improved perceived exertion during training, and higher levels of proteins related to mitochondrial health.
              </p>
              <p>
                For anyone concerned about age-related muscle loss — sarcopenia, one of the strongest predictors of longevity and functional independence — this is relevant data. Urolithin A addresses the mitochondrial decline underlying muscle aging, not only the surface-level symptom.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-xl font-bold text-black">Immune System Aging: The 2025 Breakthrough</h3>
              <p>
                In October 2025, Timeline published first-in-class clinical results from the MitoImmune study in <em>Nature Aging</em>. The four-week study reported improvements in immune cell function and a reduction in inflammatory markers among middle-aged adults.
              </p>
              <p>
                The study also reported increased levels of naive CD8+ T cells and mitochondrial biogenesis. This matters because immune aging — the decline in immune function and chronic low-grade inflammation known as inflammaging — is one of the important drivers of age-related disease.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-xl font-bold text-black">Brain Health: The Frontier in 2026</h3>
              <p>
                Timeline&apos;s CLARITY study examined the effects of urolithin A on brain health. The preclinical rationale is strong: mitochondrial dysfunction is a hallmark of neurodegeneration, and the brain is one of the body&apos;s most metabolically demanding organs.
              </p>
              <p>
                Neurons are particularly vulnerable to mitochondrial decline because they cannot easily replicate to replace damaged cells. If urolithin A&apos;s mitophagy activation translates to brain tissue as it does in muscle and immune cells, the implications for cognitive aging are significant. These findings remain an active research area rather than a promise of treatment.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-xl font-bold text-black">Cardiovascular Health</h3>
              <p>
                Cardiovascular data is emerging alongside muscle and immune findings. Heart muscle cells are among the most mitochondria-dense cells in the body, containing thousands of mitochondria per cell. The same mitophagy activation that benefits skeletal muscle has a clear biological relevance to cardiac muscle maintenance, with dedicated trials underway.
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<Leaf className="w-6 h-6" />} title="Why Most People Can&apos;t Get Enough Urolithin A From Food Alone" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              This is the detail that most wellness content glosses over — and it&apos;s the most important practical consideration.
            </p>
            <p>
              Urolithin A is not present in food directly. It is produced when gut bacteria convert ellagitannins — found in pomegranates, walnuts, raspberries, and strawberries — through a multi-step metabolic process involving several bacterial species.
            </p>
            <p>
              Research suggests that roughly 30–40% of people are efficient urolithin A producers, around 30% are moderate producers, and approximately 30–40% produce very little or none, regardless of diet. Your efficiency depends on the composition of your gut microbiome, which is shaped by genetics, early-life experiences, antibiotic history, diet, and lifestyle.
            </p>
            <p>
              Eating pomegranates and walnuts regularly is genuinely healthy for many other reasons — but it is not a reliable strategy for ensuring adequate urolithin A production. Because you cannot currently test your producer status easily, direct supplementation with a standardized, bioavailable form is the most predictable way to get the compound.
            </p>
            <p>This is precisely the gap that Mitopure was developed to fill.</p>
          </div>
        </section>

        <section>
          <SectionHeader icon={<ShieldCheck className="w-6 h-6" />} title="What Makes Mitopure Different From Other Urolithin A Products" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              The urolithin A supplement market has expanded rapidly as the research has gained attention. Not all products are equivalent — and the differences matter.
            </p>
            <div className="rounded-2xl border border-[#c4622d]/20 bg-[#c4622d]/5 p-5 space-y-4">
              <p><strong className="text-black">Clinical validation.</strong> The main benefits discussed in this article are backed by published human clinical trials on Mitopure. Other products may extrapolate from Timeline&apos;s research without having equivalent studies on their own formulation.</p>
              <p><strong className="text-black">Standardized purity.</strong> Mitopure is supplied as a standardized form of urolithin A, with consistent dosing intended to match the amounts used in clinical research.</p>
              <p><strong className="text-black">FDA GRAS review.</strong> Mitopure has received a favorable FDA Generally Recognized as Safe review, a regulatory milestone related to safety and manufacturing quality.</p>
              <p><strong className="text-black">NSF Certified for Sport.</strong> This third-party certification is especially relevant for competitive athletes and is also a useful quality signal for general consumers.</p>
              <p><strong className="text-black">Broad participant base.</strong> Timeline&apos;s research includes diverse ages, lifestyles, and health conditions, with women making up a substantial portion of participants.</p>
            </div>
          </div>
        </section>

        <AffiliateBlock
          name="Timeline Mitopure"
          description="The standardized urolithin A compound used in the clinical research discussed in this article."
          href="https://shop.timeline.com/EDENKAWTHARLARAKI"
        />

        <p className="text-black/50 text-sm leading-relaxed italic">
          Disclosure: I&apos;m affiliated with Timeline and receive a commission on purchases through my link. I recommend Mitopure because the research behind it is genuinely exceptional, and it is the formulation used in the clinical studies discussed here.
        </p>

        <section>
          <SectionHeader icon={<Dumbbell className="w-6 h-6" />} title="Who Urolithin A Is Most Relevant For" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>Based on the current research, urolithin A may be most relevant for:</p>
            <ul className="space-y-3">
              <li><strong className="text-black">People over 40.</strong> Mitophagy efficiency naturally declines with age, making supplemental activation increasingly relevant. Muscle endurance and immune-aging research is most pronounced in middle-aged and older adults.</li>
              <li><strong className="text-black">Athletes and active people.</strong> The muscle recovery data, reduced exercise-induced strain markers, and perceived-exertion findings make urolithin A interesting for people with significant training demands.</li>
              <li><strong className="text-black">Anyone with a history of antibiotic use.</strong> Antibiotics can disrupt bacterial communities involved in urolithin A production. Post-antibiotic dysbiosis may impair natural conversion even when the diet is rich in polyphenols.</li>
              <li><strong className="text-black">People focused on longevity protocols.</strong> Urolithin A works through a different mechanism than NMN/NAD+ supplementation, senolytics, or spermidine. It addresses mitochondrial quality control while those compounds target other aspects of cellular aging.</li>
              <li><strong className="text-black">People with poor producer status.</strong> A low-fiber diet, repeated antibiotic use, or known gut dysbiosis may reduce the body&apos;s natural conversion from food, although producer status is not yet easy to test.</li>
            </ul>
          </div>
        </section>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<Brain className="w-6 h-6" />} title="How Urolithin A Fits Into a Longevity Stack" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Urolithin A works best as part of a comprehensive longevity protocol targeting multiple biological pathways simultaneously — not as a standalone intervention.
            </p>
            <div className="space-y-3">
              <p><strong className="text-black">NMN (NAD+ precursor):</strong> NMN supports cellular energy production and DNA repair through NAD+ restoration. Urolithin A clears damaged mitochondria; NMN supports energy metabolism in the healthy ones that remain.</p>
              <p><strong className="text-black">Spermidine:</strong> Spermidine activates autophagy broadly, while urolithin A activates mitophagy specifically. Together they address more comprehensive cellular quality control.</p>
              <p><strong className="text-black">Trans-resveratrol, quercetin, and fisetin:</strong> These compounds are commonly discussed as senolytics that target senescent cells. Urolithin A complements that approach by maintaining the mitochondrial health of non-senescent cells.</p>
              <p><strong className="text-black">Creatine:</strong> Creatine supports ATP regeneration in muscle and brain. Healthier mitochondria producing more ATP can work alongside creatine&apos;s phosphocreatine buffering system.</p>
            </div>
            <p>
              IM8 Daily Ultimate Longevity combines NMN, trans-resveratrol, quercetin, fisetin, spermidine, and dihydroberberine in one formula, making it a natural companion product for anyone already using a longevity stack.
            </p>
          </div>
        </section>

        <AffiliateBlock
          name="IM8 Daily Ultimate Longevity"
          description="A multi-pathway longevity formula containing NMN, resveratrol, quercetin, fisetin, spermidine, and dihydroberberine."
          code="THRIVE10"
          href="https://im8health.com/thrive10"
        />

        <section>
          <SectionHeader icon={<FlaskConical className="w-6 h-6" />} title="Urolithin A Dosing and Practical Use" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <div className="rounded-2xl border border-[#c4622d]/20 bg-[#c4622d]/5 p-5 space-y-4">
              <p><strong className="text-black">Standard dose:</strong> 500–1,000mg daily has been studied. Foundational human trials used 1,000mg, usually as two 500mg softgels.</p>
              <p><strong className="text-black">Timing:</strong> Urolithin A does not need to be timed strategically. Daily consistency matters more than a particular time of day.</p>
              <p><strong className="text-black">With food:</strong> The softgel form is best taken with a meal containing some fat because lipid co-ingestion can improve absorption.</p>
              <p><strong className="text-black">Timeline:</strong> The muscle-endurance trials ran for four weeks before initial measurable effects. For the broader longevity picture, think in terms of months to years of consistent use rather than days.</p>
              <p><strong className="text-black">Medication considerations:</strong> No serious drug interactions are established in the information reviewed here, but consult your healthcare provider if you take immunosuppressive medication or manage a complex health condition.</p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<ShieldCheck className="w-6 h-6" />} title="Frequently Asked Questions About Urolithin A" />
          <div className="space-y-8">
            <FaqItem question="What is urolithin A and where does it come from?">
              <p>
                Urolithin A is a postbiotic compound produced when gut bacteria metabolize ellagitannins — polyphenols found in pomegranates, walnuts, and certain berries. It activates mitophagy, the cellular process that clears damaged mitochondria. Only about 30–40% of people appear to produce it efficiently from food.
              </p>
            </FaqItem>
            <FaqItem question="What is mitophagy and why does it matter?">
              <p>
                Mitophagy is the cellular quality-control process that identifies damaged mitochondria and breaks them down for recycling. When it functions well, cells maintain energetic efficiency and lower inflammation. When it declines with age, damaged mitochondria accumulate and can contribute to biological aging.
              </p>
            </FaqItem>
            <FaqItem question="Is Mitopure safe?">
              <p>
                Mitopure has been studied in human clinical trials and has received a favorable FDA GRAS review. It is also NSF Certified for Sport and Clean Label Certified. Discuss any supplement with a qualified healthcare provider, especially if you take medication or manage a health condition.
              </p>
            </FaqItem>
            <FaqItem question="Can I get enough urolithin A from eating pomegranates?">
              <p>
                Not reliably. Gut bacteria convert ellagitannins from pomegranates into urolithin A, but people vary significantly in their ability to make that conversion. Direct supplementation with a standardized form bypasses this variability.
              </p>
            </FaqItem>
            <FaqItem question="How long before I notice results?">
              <p>
                Muscle-endurance improvements in clinical trials were measurable at about four weeks. Urolithin A works through mitophagy and other biological processes, so the full range of potential longevity benefits should be considered over months of consistent use.
              </p>
            </FaqItem>
            <FaqItem question="What dose of urolithin A should I take?">
              <p>
                Human clinical trials have studied 500mg to 1,000mg daily, with some foundational trials using 1,000mg. Follow the product label and consult a healthcare provider before choosing a dose.
              </p>
            </FaqItem>
            <FaqItem question="How does urolithin A compare to NMN?">
              <p>
                They work through different mechanisms and are best understood as complementary. NMN supports NAD+ levels and energy metabolism. Urolithin A activates mitophagy to clear damaged mitochondria. NMN supports healthy mitochondria; urolithin A removes the unhealthy ones.
              </p>
            </FaqItem>
            <FaqItem question="Why choose Mitopure over cheaper urolithin A supplements?">
              <p>
                The human clinical research discussed in this article was conducted on Mitopure specifically. When comparing products, look for transparent dosing, human clinical evidence on the exact formulation, quality testing, and appropriate regulatory documentation rather than assuming all urolithin A products are interchangeable.
              </p>
            </FaqItem>
          </div>
        </section>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<BookOpen className="w-6 h-6" />} title="Research References" />
          <ul className="space-y-3 text-black/65 text-sm leading-relaxed list-disc list-outside ml-5">
            <li>Andreux PA, et al. &quot;The mitophagy activator urolithin A is safe and induces a molecular signature of improved mitochondrial and cellular health in humans.&quot; <em>Nature Metabolism</em>, 2019. <a className="text-[#c4622d] hover:underline" href="https://www.nature.com/articles/s42255-019-0073-4" target="_blank" rel="noopener noreferrer">Nature</a></li>
            <li>MitoImmune Study. &quot;Impact of Mitopure Supplementation on Immune Aging and Inflammaging.&quot; <em>Nature Aging</em>, October 2025. <a className="text-[#c4622d] hover:underline" href="https://www.timeline.com/studies" target="_blank" rel="noopener noreferrer">Timeline</a></li>
            <li>&quot;2025&apos;s Breakthrough Findings on Urolithin A.&quot; Timeline, December 2025. <a className="text-[#c4622d] hover:underline" href="https://www.timeline.com/blog/2025s-breakthrough-findings-on-urolithin-a" target="_blank" rel="noopener noreferrer">Timeline</a></li>
            <li>&quot;Mitopure Reaches Milestone: 25th Human Clinical Trial.&quot; Timeline, September 2025. <a className="text-[#c4622d] hover:underline" href="https://www.timeline.com/blog/mitopure-reaches-milestone-25th-human-clinical-trial" target="_blank" rel="noopener noreferrer">Timeline</a></li>
            <li>NCI URO-PRO Trial. &quot;Placebo-Controlled Trial of Urolithin A Supplementation in Men With Prostate Cancer.&quot; ClinicalTrials.gov, 2026. <a className="text-[#c4622d] hover:underline" href="https://clinicaltrials.gov/study/NCT06022822" target="_blank" rel="noopener noreferrer">ClinicalTrials.gov</a></li>
          </ul>
        </section>

        <p className="text-black/50 text-sm leading-relaxed italic">
          This article is for educational purposes only and does not constitute medical advice. Always consult a qualified healthcare provider before starting any new supplement protocol.
        </p>
        <p className="text-black/50 text-sm leading-relaxed italic">
          Eden Laraki is the founder of ThriveTools.co — a science-backed wellness and biohacking platform covering supplements, tonic herbs, breathwork, plant medicine, and cognitive optimization, built from 14 years of personal research and self-experimentation.
        </p>
      </div>
    </PageLayout>
  );
}