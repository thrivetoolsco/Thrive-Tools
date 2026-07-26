import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Shield,
  Zap,
  Leaf,
  HelpCircle,
  FlaskConical,
  Activity,
  AlertCircle,
  Clock,
  XCircle,
} from "lucide-react";

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

function TimelineBlock({
  period,
  children,
}: {
  period: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-[#c4622d] flex-shrink-0 mt-1" />
        <div className="w-px flex-1 bg-[#c4622d]/20 mt-1" />
      </div>
      <div className="pb-6 space-y-1">
        <p className="font-bold text-black text-sm">{period}</p>
        <p className="text-black/70 text-sm leading-relaxed">{children}</p>
      </div>
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
        <div className="flex items-center gap-3 flex-wrap">
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

export default function RebuildGutAfterAntibioticsGuide() {
  return (
    <PageLayout
      showShare
      title="How to Rebuild Your Gut After Antibiotics"
      subtitle="And Why Standard Probiotics Won't Cut It"
      seo={{
        title: "How to Rebuild Your Gut After Antibiotics (The Science-Backed Protocol) | Thrive Tools",
        description:
          "Antibiotics wipe out 25–50% of your gut bacteria. Standard probiotics almost never survive to help. Here's the evidence-based 6-layer protocol for genuine microbiome recovery — including why spore-based probiotics are categorically different.",
        canonical: "https://thrivetools.co/blog/rebuild-gut-after-antibiotics-spore-probiotics-guide",
        ogType: "article",
        datePublished: "2026-07-26",
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-12">

        {/* Badge + date */}
        <div className="flex flex-wrap gap-2 items-center">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25 text-xs font-semibold px-3 py-1 rounded-full">
            Gut Health
          </Badge>
          <span className="text-black/40 text-sm">July 26, 2026</span>
        </div>

        {/* Intro */}
        <p className="text-lg text-black/75 leading-relaxed">
          If you've ever finished a course of antibiotics and felt like something was off — digestion not quite right, energy lower than usual, mood subtly different, immune system feeling fragile — you weren't imagining it.
        </p>
        <div className="space-y-4 text-black/70 leading-relaxed">
          <p>
            Antibiotics are one of the most important medical discoveries in human history. They save lives. When you genuinely need them, take them. But they are also, by design, indiscriminate. They can't distinguish between the pathogenic bacteria causing your infection and the hundreds of beneficial species that form the ecological foundation of your gut microbiome. They kill both.
          </p>
          <p>
            What's left behind is a disrupted, depleted microbiome — and the downstream effects extend far beyond digestion. Mood, immunity, cognitive function, skin health, hormonal balance, and metabolic regulation are all connected to the gut in ways now well-documented in research. When the gut ecosystem is disrupted, all of these systems feel it.
          </p>
          <p>
            The good news is that the gut can recover. The bad news is that it takes longer than most people realize, the standard advice is insufficient, and the most commonly recommended intervention — a standard probiotic — often does almost nothing.
          </p>
        </div>

        <div className="section-divider" />

        {/* What antibiotics actually do */}
        <section>
          <SectionHeader icon={<AlertCircle className="w-6 h-6" />} title="What Antibiotics Actually Do to Your Gut" />
          <div className="space-y-5 text-black/70 leading-relaxed">
            <p>
              Antibiotics work by targeting bacterial structures or processes — cell wall synthesis, protein production, DNA replication — that either kill bacteria outright or prevent them from reproducing. The problem is that these targets exist in beneficial gut bacteria too, not just pathogens. The collateral damage is significant and well-documented:
            </p>
            <div className="space-y-3">
              <MechanismCard title="Dramatic reduction in microbial diversity">
                A single course of broad-spectrum antibiotics can reduce the number of gut bacterial species by 25–50% within days.
              </MechanismCard>
              <MechanismCard title="Depletion of keystone species">
                Certain bacteria play disproportionately important roles in gut ecosystem stability — producing butyrate, maintaining the gut barrier, regulating immune function. These species are often the most antibiotic-sensitive, along with Bifidobacterium and other butyrate-producing strains.
              </MechanismCard>
              <MechanismCard title="Pathogenic blooms">
                When competitive pressure from beneficial species is removed, opportunistic bacteria — particularly <em>Clostridioides difficile</em>, Enterococcus species, and Candida — can proliferate rapidly in the ecological vacuum. Antibiotic use is the primary risk factor for <em>C. diff</em> infection.
              </MechanismCard>
              <MechanismCard title="Gut barrier disruption (leaky gut)">
                Butyrate — produced by beneficial Firmicutes — is the main fuel source for colonocytes lining the gut wall. When butyrate-producing species are depleted, gut barrier integrity degrades, allowing bacterial components into the bloodstream and driving systemic inflammation.
              </MechanismCard>
              <MechanismCard title="Gut-brain axis disruption">
                The gut produces approximately 90–95% of the body's serotonin and significant amounts of GABA and dopamine precursors. Antibiotic-induced dysbiosis disrupts this neurotransmitter production. The mood changes, brain fog, and anxiety many experience after antibiotics have a direct neurochemical basis.
              </MechanismCard>
              <MechanismCard title="Antibiotic resistance gene proliferation">
                Bacteria that survive antibiotic treatment are more resistant by definition, and this resistance can be passed between bacterial species through horizontal gene transfer — complicating recovery.
              </MechanismCard>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* How long recovery takes */}
        <section>
          <SectionHeader icon={<Clock className="w-6 h-6" />} title="How Long Does Recovery Actually Take?" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              This is where most people are significantly underinformed — and where the gap between what doctors typically say and what the research shows is largest. The common advice is: "take a probiotic while you're on antibiotics and for a week afterward." The research tells a different story.
            </p>
            <div className="rounded-2xl border border-[#c4622d]/20 bg-[#c4622d]/5 p-5 space-y-3">
              <BulletPoint>
                Research suggests that for many people, the microbiome <strong>almost</strong> returns to its pre-treatment state within about six months — but some species that were present in all subjects before treatment remained undetectable in most subjects after 180 days.
              </BulletPoint>
              <BulletPoint>
                For older adults, the picture is more concerning: in older mice, microbiota did not fully recover during 6 months of follow-up after a single 10-day antibiotic regimen — 75% of extinct genera never returned.
              </BulletPoint>
              <BulletPoint>
                For people who've had multiple courses: multiple or broad-spectrum courses require 3–6 months for recovery due to greater disruption. Repeated or long-term use may mean some bacterial species never fully recover.
              </BulletPoint>
              <BulletPoint>
                For a significant portion of individuals, full restoration may take <strong>up to a year</strong> or, in some cases, may never fully happen without active intervention.
              </BulletPoint>
            </div>
            <p className="italic text-black/55 text-sm">
              The takeaway: a one-week probiotic protocol addresses approximately one week of a six-month to one-year recovery process. The scale of the intervention needs to match the scale of the disruption.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Why standard probiotics don't cut it */}
        <section>
          <SectionHeader icon={<XCircle className="w-6 h-6" />} title="Why Standard Probiotics Don't Cut It" />
          <div className="space-y-5 text-black/70 leading-relaxed">
            <p>
              This is the most important thing to understand about post-antibiotic gut recovery — and the place where most people waste money on interventions that don't work.
            </p>
            <div className="rounded-2xl border border-black/8 bg-white/60 p-5 space-y-4">
              <div>
                <p className="font-semibold text-black mb-1">Problem 1: They don't survive the journey.</p>
                <p className="text-sm">Standard Lactobacillus and Bifidobacterium strains evolved to live in the gut — not to survive the journey there. Stomach acid at pH 1.5–3.5, combined with bile salts in the small intestine, kills the vast majority of standard strains before they reach the colon. Studies have documented <strong>less than 1% survival rates</strong> for many commonly used Lactobacillus strains through gastric transit. You're taking an expensive placebo.</p>
              </div>
              <div>
                <p className="font-semibold text-black mb-1">Problem 2: They're transient, not colonizing.</p>
                <p className="text-sm">Even standard probiotic strains that do survive transit are largely transient — they pass through without establishing permanent residence. Research consistently shows that Lactobacillus supplementation raises detectable levels in stool samples during supplementation but returns to baseline shortly after stopping. For post-antibiotic recovery you need bacteria that colonize — not tourists passing through.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Spore-based probiotics */}
        <section>
          <SectionHeader icon={<Shield className="w-6 h-6" />} title="What Spore-Based Probiotics Do Differently" />
          <div className="space-y-5 text-black/70 leading-relaxed">
            <p>
              Spore-forming bacteria — primarily Bacillus strains — solve both problems through a mechanism that makes them categorically different from standard probiotic strains. When environmental conditions are hostile, Bacillus species form an endospore — a dormant structure encased in multiple protein layers that is effectively impervious to stomach acid, bile salts, heat, and antibiotics. Once through the stomach and into the colon's more favorable environment, the endospore germinates into a fully functional, metabolically active bacterium.
            </p>

            <div className="rounded-2xl border border-black/8 bg-white/60 p-5 text-center">
              <p className="text-4xl font-black text-[#c4622d] mb-1">~100%</p>
              <p className="font-semibold text-black">survival rate through stomach transit</p>
              <p className="text-sm text-black/50 mt-1">vs. &lt;1% for standard Lactobacillus strains</p>
            </div>

            <p>In the post-antibiotic context specifically, spore-based strains provide additional critical benefits:</p>
            <div className="space-y-3">
              <MechanismCard title="Competitive exclusion of opportunists">
                Bacillus subtilis produces a range of antimicrobial peptides — lipopeptides like iturin and surfactin — that selectively inhibit pathogenic and opportunistic bacteria. After antibiotics create an ecological vacuum, Bacillus strains actively compete against <em>C. diff</em>, Candida, and other opportunists.
              </MechanismCard>
              <MechanismCard title="Immune modulation">
                Spore-based strains interact powerfully with gut-associated immune tissue — stimulating secretory IgA production, regulating cytokine balance, and supporting the immune surveillance that antibiotic disruption impairs.
              </MechanismCard>
              <MechanismCard title="Butyrate production support">
                Bacillus subtilis ferments dietary fiber and contributes to butyrate production — directly supporting the gut barrier integrity that antibiotic disruption degrades.
              </MechanismCard>
              <MechanismCard title="True colonization">
                Unlike transient Lactobacillus strains, certain Bacillus strains establish genuine residence in the gut environment, providing sustained benefit beyond the supplementation period.
              </MechanismCard>
              <MechanismCard title="Microbiome diversity stimulation">
                Spore-based probiotic supplementation doesn't just add new species — it creates conditions that support the re-establishment of native beneficial species. It's ecosystem restoration, not just bacterial addition.
              </MechanismCard>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* The complete protocol */}
        <section>
          <SectionHeader icon={<FlaskConical className="w-6 h-6" />} title="The Complete Post-Antibiotic Recovery Protocol" />
          <p className="text-black/70 leading-relaxed mb-6">
            Recovery from antibiotics isn't a single supplement decision — it's a multi-layered approach that addresses the gut ecosystem from multiple angles simultaneously.
          </p>

          {/* Layer 1: Spore probiotics — primary affil */}
          <div className="space-y-4 mb-8">
            <h3 className="font-display text-lg font-bold text-black">
              Layer 1: Spore-Based Probiotics — Start Immediately
            </h3>
            <p className="text-black/70 leading-relaxed text-sm">
              Unlike standard probiotics, spore-based strains can be taken alongside antibiotics — the endospore is not destroyed by the antibiotic course. Starting immediately rather than waiting until the course is finished gives you a head start on gut restoration. Continue for a minimum of 3–6 months after the antibiotic course ends. Given that recovery research shows 6 months to a year for full restoration, a one-week protocol is wholly inadequate.
            </p>

            <AffilBlock
              eyebrow="Eden's #1 Pick for Post-Antibiotic Recovery"
              name="Just Thrive Spore-Based Probiotics"
              description="Built specifically around clinically researched spore-based Bacillus strains — Bacillus subtilis HU58 and Bacillus indicus HU36 — with published data on survival rates, colonization, and immune modulation. This is exactly the category the research supports for meaningful gut microbiome intervention after antibiotics."
              code="THRIVETOOLS"
              href="https://partners.justthrivehealth.com/THRIVETOOLS"
              buttonLabel="Shop Just Thrive Spore-Based Probiotics"
            />
          </div>

          {/* Layer 2: Prebiotic fiber */}
          <div className="space-y-3 mb-8">
            <h3 className="font-display text-lg font-bold text-black">
              Layer 2: Prebiotic Fiber — Feed What's Left
            </h3>
            <p className="text-black/70 leading-relaxed text-sm">
              Probiotics add beneficial species. Prebiotics feed the species that are already there — including the recovering native populations that survived the antibiotic course. Diversity of prebiotic fiber sources drives diversity of gut bacteria. Eating 30+ different plant foods weekly provides the diverse fermentable substrate that rebuilds the broadest range of beneficial species.
            </p>
            <div className="rounded-xl border border-black/8 bg-white/60 p-5 space-y-2">
              <BulletPoint>Jerusalem artichokes, chicory root, dandelion greens — among the highest inulin and FOS content</BulletPoint>
              <BulletPoint>Green bananas and cooked-then-cooled potatoes — resistant starch that feeds butyrate-producing species specifically</BulletPoint>
              <BulletPoint>Leeks, garlic, onions — contain multiple prebiotic compounds</BulletPoint>
              <BulletPoint>Legumes — broad prebiotic fiber profile alongside protein</BulletPoint>
              <BulletPoint>Diverse vegetables and fruits — aim for variety over any single "superfood"</BulletPoint>
            </div>
          </div>

          {/* Layer 3: Fermented foods */}
          <div className="space-y-3 mb-8">
            <h3 className="font-display text-lg font-bold text-black">
              Layer 3: Fermented Foods — Reintroduce Native Species
            </h3>
            <p className="text-black/70 leading-relaxed text-sm">
              Fermented foods introduce live organisms that have co-evolved with human gut environments — sometimes species that commercial probiotic products don't contain. Start with small amounts and increase gradually; introducing fermented foods too aggressively into a disrupted post-antibiotic gut can cause significant gas and bloating.
            </p>
            <div className="rounded-xl border border-black/8 bg-white/60 p-5 space-y-2">
              <BulletPoint>Kefir (dairy or water-based) — contains dozens of bacterial and yeast species</BulletPoint>
              <BulletPoint>Sauerkraut and kimchi (unpasteurized) — Lactobacillus species plus beneficial metabolites</BulletPoint>
              <BulletPoint>Miso and tempeh — fermented soy with significant probiotic content</BulletPoint>
              <BulletPoint>Natto — extraordinarily rich in spermidine and Bacillus subtilis var. natto</BulletPoint>
              <BulletPoint>Natural live yogurt — lower diversity than kefir but widely accessible</BulletPoint>
            </div>
          </div>

          {/* Layer 4: Gut barrier support */}
          <div className="space-y-4 mb-8">
            <h3 className="font-display text-lg font-bold text-black">
              Layer 4: Gut Barrier Support
            </h3>
            <p className="text-black/70 leading-relaxed text-sm">
              The butyrate-producing species that maintain gut barrier integrity are among the most antibiotic-sensitive. Until they recover, supporting the gut barrier through other means is important. L-glutamine (5g daily) is the primary fuel source for enterocytes and supports tight junction integrity directly. Zinc carnosine (75mg daily) has specific evidence for gut barrier support and mucosal healing. Colostrum provides immunoglobulins, growth factors, and lactoferrin that support gut barrier restoration simultaneously.
            </p>

            <AffilBlock
              eyebrow="Full-Stack Daily Foundation"
              name="IM8 Daily Ultimate Essentials PRO"
              description="Includes L-glutamine as part of its amino acid complex alongside spore-based probiotics (Bacillus subtilis DE111 and Bacillus coagulans BC99), prebiotics, postbiotics, and digestive enzymes — covering multiple layers of the gut recovery protocol in one morning drink."
              code="THRIVE10"
              href="https://www.im8health.com/THRIVE10"
              buttonLabel="Shop IM8 Daily Ultimate Essentials PRO"
            />
          </div>

          {/* Layer 5: Anti-inflammatory */}
          <div className="space-y-4 mb-8">
            <h3 className="font-display text-lg font-bold text-black">
              Layer 5: Anti-Inflammatory Support
            </h3>
            <p className="text-black/70 leading-relaxed text-sm">
              Antibiotic-induced dysbiosis drives systemic inflammation through increased gut permeability and immune activation. Addressing this inflammatory component accelerates recovery and reduces downstream effects on mood, energy, and immune function.
            </p>
            <div className="space-y-4">
              <div className="rounded-2xl border border-black/10 bg-white/60 p-6 sm:p-8 space-y-4">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#c4622d]">Anti-Inflammatory Omega-3</p>
                  <h3 className="font-display text-xl font-bold text-black">AquaOmega Vegan Omega-3</h3>
                  <p className="text-black/65 text-sm leading-relaxed">
                    High-EPA omega-3 at 2–3g daily is one of the most evidence-supported anti-inflammatory interventions available. EPA directly modulates the inflammatory cytokines elevated by gut dysbiosis. AquaOmega's algae-sourced formula is IFOS certified and in triglyceride form for superior absorption.
                  </p>
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

              <div className="rounded-2xl border border-black/10 bg-white/60 p-6 sm:p-8 space-y-4">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#c4622d]">Immunomodulatory Tonic</p>
                  <h3 className="font-display text-xl font-bold text-black">Hyperion Herbs Reishi</h3>
                  <p className="text-black/65 text-sm leading-relaxed">
                    Reishi mushroom — the immunomodulatory and anti-inflammatory tonic I've taken daily for over a decade — supports the immune recalibration that follows antibiotic disruption. Reishi doesn't stimulate or suppress immune function indiscriminately; it helps regulate it toward appropriate balance. Use code <span className="font-mono font-black text-[#c4622d] bg-white border-2 border-[#c4622d] px-2 py-0.5 rounded-lg tracking-widest select-all">EDEN10</span> for a discount.
                  </p>
                </div>
                <a
                  href="https://hyperionherbs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-hyperion-herbs-cta"
                  className="inline-flex items-center gap-2 border-2 border-[#c4622d] text-[#c4622d] hover:bg-[#c4622d] hover:text-white font-bold px-8 py-3.5 rounded-full transition-colors text-base"
                >
                  Shop Hyperion Herbs Reishi <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Layer 6: What to avoid */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-black">
              Layer 6: What to Avoid During Recovery
            </h3>
            <div className="rounded-xl border border-black/8 bg-white/60 p-5 space-y-3">
              <BulletPoint><span className="font-semibold text-black">Ultra-processed foods</span> — feed opportunistic bacteria that bloom after antibiotics, particularly refined sugar and simple carbohydrates that Candida and pathogenic Enterococcus thrive on. Minimize aggressively.</BulletPoint>
              <BulletPoint><span className="font-semibold text-black">Alcohol</span> — has direct antimicrobial effects on gut bacteria and impairs gut barrier integrity. Even moderate consumption during active recovery slows microbiome restoration.</BulletPoint>
              <BulletPoint><span className="font-semibold text-black">Chronic stress</span> — elevates cortisol, which directly impairs gut barrier function and microbiome diversity. Stress management during recovery isn't optional — it's mechanistically important.</BulletPoint>
              <BulletPoint><span className="font-semibold text-black">Artificial sweeteners</span> — particularly saccharin and sucralose have documented negative effects on gut microbiome composition. Eliminate during active recovery.</BulletPoint>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* The timeline */}
        <section>
          <SectionHeader icon={<Activity className="w-6 h-6" />} title="The Timeline: What to Expect" />
          <div className="space-y-1">
            <TimelineBlock period="Days 1–14 (during and immediately after antibiotics)">
              Start spore-based probiotics immediately — they survive alongside antibiotics. Begin increasing dietary fiber and fermented foods gradually. Expect some digestive discomfort as the ecosystem is disrupted.
            </TimelineBlock>
            <TimelineBlock period="Weeks 2–6">
              The acute disruption phase. Bloating, irregular digestion, and energy fluctuations are common as the microbiome attempts to restabilize. This is when opportunistic species most aggressively attempt to fill the ecological vacuum. Consistent spore-based probiotic use and diverse fiber intake are most critical here.
            </TimelineBlock>
            <TimelineBlock period="Months 1–3">
              Gradual improvement in digestive symptoms. Short-term antibiotic use sees the gut beginning to repopulate beneficial bacteria within 2–6 weeks. Mood, energy, and immune function typically begin stabilizing. Continue the full protocol.
            </TimelineBlock>
            <TimelineBlock period="Months 3–6">
              Research suggests the microbiome almost returns to pre-treatment state within about six months. Most people notice meaningful restoration of digestive function, mood stability, and immune resilience by this point.
            </TimelineBlock>
            <TimelineBlock period="6–12 months">
              Full diversity restoration for most people. Some species may still be re-establishing at 6 months — continued dietary diversity and spore-based probiotic supplementation supports completion of recovery.
            </TimelineBlock>
          </div>
        </section>

        <div className="section-divider" />

        {/* Timing probiotics with antibiotics */}
        <section>
          <SectionHeader icon={<Zap className="w-6 h-6" />} title="A Note on Timing Probiotics With Antibiotics" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              With standard Lactobacillus probiotics, this question is largely moot — they'll be killed by the antibiotics anyway if taken simultaneously. The conventional advice to space them 2 hours apart from antibiotics is designed to minimize this, but the survival rates are still poor.
            </p>
            <p>
              With spore-based probiotics, the endospore survives antibiotic exposure. Taking spore-based probiotics <strong>during the antibiotic course</strong> is both safe and beneficial — you're beginning to establish competitive colonization before the opportunistic bloom phase even begins. This is a meaningful advantage over waiting until after the course ends.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* FAQ */}
        <section>
          <SectionHeader icon={<HelpCircle className="w-6 h-6" />} title="Frequently Asked Questions" />
          <div className="space-y-7">
            <FaqItem question="How long should I take probiotics after antibiotics?">
              The research on microbiome recovery timelines suggests 6 months to a year for full restoration. A one-week protocol is dramatically insufficient. Aim for a minimum of 3–6 months of consistent daily spore-based probiotic supplementation, with ongoing dietary support.
            </FaqItem>
            <FaqItem question="Can I take probiotics at the same time as antibiotics?">
              Spore-based probiotics yes — the endospore survives antibiotic exposure. Standard Lactobacillus probiotics have very poor survival when taken alongside antibiotics. If using standard strains, space 2 hours from antibiotic doses — though survival rates remain poor regardless.
            </FaqItem>
            <FaqItem question="Why do I feel depressed or anxious after antibiotics?">
              Antibiotic-induced gut dysbiosis disrupts the production of serotonin, GABA, and other neurotransmitter precursors in the gut. It also increases systemic inflammation through gut barrier disruption, which produces neuroinflammation. These are physiological effects, not psychological ones. Gut restoration addresses them directly.
            </FaqItem>
            <FaqItem question="Will eating yogurt help after antibiotics?">
              Yogurt provides some Lactobacillus strains and is better than nothing. But the survival rate of yogurt cultures through stomach acid is poor, and the diversity of species is limited compared to fermented foods like kefir, sauerkraut, or kimchi. Yogurt is a useful addition but not sufficient as the primary intervention.
            </FaqItem>
            <FaqItem question="Do I need a probiotic if I eat a lot of fermented foods?">
              Fermented foods provide beneficial bacteria and are an important part of recovery. But the bacterial concentrations in fermented foods are lower than therapeutic probiotic doses, and neither kefir nor sauerkraut contains the spore-forming Bacillus strains with the highest documented survival rates. Fermented foods and spore-based probiotics work best in combination.
            </FaqItem>
            <FaqItem question="Why did my doctor only tell me to take a standard probiotic for a week?">
              Standard clinical guidance on post-antibiotic probiotic use lags significantly behind the research. The evidence for both the duration of recovery needed and the superiority of spore-based strains is relatively recent. Many clinicians are working from older recommendations that haven't been updated to reflect current research.
            </FaqItem>
            <FaqItem question="Is my gut permanently damaged after multiple antibiotic courses?">
              Not permanently, but recovery is harder and takes longer. For a significant portion of individuals, full restoration may take up to a year or, in some cases, may never fully happen without active intervention. It's a longer project, not an impossible one.
            </FaqItem>
          </div>
        </section>

        <div className="section-divider" />

        {/* References */}
        <section>
          <h2 className="font-display text-lg font-bold text-black mb-4">Research References</h2>
          <div className="space-y-2 text-sm text-black/50">
            <p>Palleja A, et al. "Recovery of gut microbiota of healthy adults following antibiotic exposure." <em>Nature Microbiology</em>, 2018.</p>
            <p>Taguer M, et al. "Spatial recovery of the murine gut microbiota after antibiotics perturbation." <em>mBio</em>, 2024.</p>
            <p>Daisley BA, et al. "Dynamics of Gut Microbiota Recovery after Antibiotic Exposure in Young and Old Mice." <em>PMC</em>, 2021.</p>
            <p>Karimianghadim R, et al. "Prolonged effect of antibiotic therapy on the gut microbiota composition, functionality, and antibiotic resistance genes' profiles." <em>PMC</em>, 2025.</p>
            <p>"How Long to Restore Gut Microbiome After Antibiotics?" <em>Blue Horizon Blood Tests</em>, 2025.</p>
          </div>
        </section>

        <p className="text-xs text-black/35 border-t border-black/8 pt-6">
          This article is for educational purposes only and does not constitute medical advice. Always consult your healthcare provider before making changes to your supplement protocol, particularly during or after a course of antibiotics.
        </p>

      </div>
    </PageLayout>
  );
}
