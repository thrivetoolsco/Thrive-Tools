import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, AlertTriangle, RefreshCw, Shield, Leaf, FlaskConical, Calendar } from "lucide-react";

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-[#c4622d]">{icon}</span>
      <h2 className="font-display text-2xl font-bold text-black">{title}</h2>
    </div>
  );
}

function AffilLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-[#c4622d] hover:text-[#8b3a1a] transition-colors font-medium underline text-sm"
    >
      {label} <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
    </a>
  );
}

function CycleCard({ number, title, subtitle, children }: { number: string; title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-black/8 bg-white/60 p-6 space-y-3" data-testid={`cycle-card-${number}`}>
      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#c4622d]/15 text-[#c4622d] flex items-center justify-center font-display font-bold text-lg">
          {number}
        </span>
        <div>
          <h3 className="font-display text-xl font-bold text-black">{title}</h3>
          <p className="text-sm text-black/50 font-medium uppercase tracking-wide">{subtitle}</p>
        </div>
      </div>
      <div className="text-black/70 leading-relaxed pl-14 space-y-2">
        {children}
      </div>
    </div>
  );
}

function SupportItem({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="mt-1 w-2 h-2 rounded-full bg-[#c4622d] flex-shrink-0" />
      <div className="text-black/70 leading-relaxed">
        <span className="font-semibold text-black">{title}:</span> {children}
      </div>
    </div>
  );
}

export default function HeShouWuAshwagandhaGuide() {
  return (
    <PageLayout
      showShare
      title="How to Cycle He Shou Wu and Ashwagandha Without Liver Fatigue"
      subtitle="A Clinical Stack Guide"
      seo={{
        title: "How to Cycle He Shou Wu and Ashwagandha Without Liver Fatigue | Thrive Tools",
        description: "He Shou Wu and Ashwagandha are two of the most powerful adaptogens — but both hit the liver's CYP450 pathways. Here is the clinical cycling protocol that maximizes their synergistic benefits without hepatic slowdown.",
        canonical: "https://thrivetools.co/blog/he-shou-wu-ashwagandha-cycling-guide",
        ogType: "article",
        datePublished: "2026-06-16",
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-12">

        <div className="flex flex-wrap gap-2 items-center">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25 text-xs font-semibold px-3 py-1 rounded-full">
            Adaptogen Stack
          </Badge>
          <span className="text-black/40 text-sm">June 16, 2026</span>
        </div>

        <p className="text-lg text-black/75 leading-relaxed">
          Combining powerful adaptogens and tonic herbs is the cornerstone of advanced biohacking. When it comes to revitalizing the nervous system, balancing the endocrine system, and supporting longevity pathways, stacking <strong>He Shou Wu (Fo-Ti)</strong> with <strong>Ashwagandha</strong> is incredibly potent.
        </p>

        <p className="text-black/70 leading-relaxed">
          However, because both herbs are heavy-hitting compounds metabolized heavily by the liver, stacking them blindly can lead to hepatic slowdown, dulling your results or causing unwanted fatigue. To maximize the benefits of this stack while keeping your liver functioning optimally, you must understand the biochemical pathways at play and follow a structured cycling protocol.
        </p>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<Leaf className="w-6 h-6" />} title="The Synergistic Mechanics: Why Stack Them?" />
          <p className="text-black/70 leading-relaxed mb-6">
            Before diving into liver safety, it's crucial to understand why this specific combination is so highly regarded by clinical herbalists and biohackers alike.
          </p>
          <div className="space-y-5">
            <div className="rounded-2xl border border-black/8 bg-white/60 p-6">
              <h3 className="font-display text-lg font-bold text-black mb-2">
                He Shou Wu <span className="text-black/40 font-normal text-base">(<em>Reynoutria multiflora</em>)</span>
              </h3>
              <p className="text-black/70 leading-relaxed">
                Renowned in Traditional Chinese Medicine (TCM) as a premier <em>Yin</em> Jing tonic. It stimulates mitochondrial biogenesis, acts as a potent antioxidant, supports hair follicle health, and promotes deep, foundational energy.
              </p>
            </div>
            <div className="rounded-2xl border border-black/8 bg-white/60 p-6">
              <h3 className="font-display text-lg font-bold text-black mb-2">
                Ashwagandha <span className="text-black/40 font-normal text-base">(<em>Withania somnifera</em>)</span>
              </h3>
              <p className="text-black/70 leading-relaxed">
                A foundational Ayurvedic <em>Rasayana</em> (rejuvenating herb) that modulates the hypothalamic-pituitary-adrenal (HPA) axis, dramatically lowers cortisol, and boosts thyroid and testosterone pathways.
              </p>
            </div>
          </div>
          <p className="text-black/70 leading-relaxed mt-6">
            When stacked correctly, He Shou Wu prevents the potential "lethargy" or emotional flattening some users experience on long-term Ashwagandha, while Ashwagandha smooths out the intense, deep-moving energy of He Shou Wu.
          </p>
        </section>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<FlaskConical className="w-6 h-6" />} title="The Core Problem: Cytochrome P450 and Liver Burden" />
          <p className="text-black/70 leading-relaxed mb-4">
            The issue isn't that these herbs are inherently toxic — it's a matter of <strong>metabolic traffic</strong>.
          </p>
          <p className="text-black/70 leading-relaxed mb-4">
            Both He Shou Wu and Ashwagandha are metabolized by the liver's <strong>Cytochrome P450 (CYP450) enzyme pathways</strong> — specifically the CYP3A4 and CYP2D6 enzymes. When you ingest high therapeutic doses of both herbs simultaneously every day, you create a "bottleneck" in the liver.
          </p>
          <p className="text-black/70 leading-relaxed">
            Furthermore, He Shou Wu contains anthraquinones. In raw, unprocessed forms, these can place significant strain on hepatocytes (liver cells). While properly prepared (traditional black bean stewed) He Shou Wu reduces this risk dramatically, a continuous, uncycled daily intake can still lead to a temporary slowdown in phase II liver detoxification, manifesting as sluggishness, brain fog, or mild digestive stagnation.
          </p>
        </section>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<AlertTriangle className="w-6 h-6" />} title="Quality is Non-Negotiable: Sourcing Your He Shou Wu" />
          <p className="text-black/70 leading-relaxed mb-5">
            You should <strong>never</strong> buy cheap, raw, or poorly extracted Fo-Ti. Raw He Shou Wu is a laxative and carries a high risk of liver stress. It <em>must</em> be traditionally prepared to transform the chemical structure into a nourishing tonic.
          </p>
          <div className="rounded-2xl border border-[#c4622d]/20 bg-[#c4622d]/5 p-6 space-y-3">
            <p className="text-sm font-semibold text-[#8b3a1a] uppercase tracking-wide">Clinical Recommendation</p>
            <p className="text-black/75 leading-relaxed">
              For an authentic, properly prepared, and rigorously tested source, use{" "}
              <AffilLink href="https://hyperionherbs.com/?ref=eden10" label="Hyperion Herbs" />.
              Their 10:1 extract is traditionally processed with black soybean broth to eliminate harsh anthraquinones while concentrating the active, longevity-promoting compounds.
            </p>
            <p className="text-black/70">
              Use code <strong className="text-[#c4622d]">EDEN10</strong> at checkout to get <strong>10% off</strong> your order.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<Calendar className="w-6 h-6" />} title="The Clinical Cycling Protocol" />
          <p className="text-black/70 leading-relaxed mb-6">
            To prevent enzyme saturation and completely avoid liver fatigue, you must utilize a structured <strong>pulsing and cycling schedule</strong>. This ensures your liver pathways have time to clear, preventing receptor downregulation and keeping the herbs highly effective.
          </p>
          <div className="space-y-4">
            <CycleCard number="1" title="The 5-Day On, 2-Day Off Pulse" subtitle="Weekly Routine">
              <p>
                Take your stacked doses of He Shou Wu and Ashwagandha from Monday through Friday. Completely stop both herbs on Saturday and Sunday. This 48-hour break allows the liver's CYP450 enzymes to clear completely and reset their baseline activity.
              </p>
            </CycleCard>
            <CycleCard number="2" title="The 4-Week Reset" subtitle="Monthly Routine">
              <p>
                Run the weekly pulse for 4 consecutive weeks. After the fourth week, initiate a <strong>7-day complete washout period</strong> where you ingest zero adaptogens. Use this week to evaluate your baseline energy and sleep quality.
              </p>
            </CycleCard>
            <CycleCard number="3" title="The 3-Month Macro Cycle" subtitle="Quarterly Routine">
              <p>
                After 3 full months of this protocol (3 cycles of 4 weeks on, 1 week off), take a full <strong>30-day break from Ashwagandha entirely</strong>. You may continue taking a maintenance dose of He Shou Wu alone during this month, as Ashwagandha is typically the compound that requires a deeper receptor reset.
              </p>
            </CycleCard>
          </div>
        </section>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<Shield className="w-6 h-6" />} title="Strategic Liver Support Allies" />
          <p className="text-black/70 leading-relaxed mb-6">
            While cycling is your primary defense against hepatic fatigue, adding targeted, non-competitive liver support nutrients can enhance phase I and phase II clearance during your "on" days.
          </p>
          <div className="rounded-2xl border border-black/8 bg-white/60 p-6 space-y-4">
            <SupportItem title="TUDCA or Milk Thistle (Silymarin)">
              Protects hepatocytes and promotes healthy bile flow, preventing the stagnation that can occur when processing heavy herbal extracts.
            </SupportItem>
            <SupportItem title="NAC (N-Acetyl Cysteine)">
              Boosts internal glutathione production — the liver's master antioxidant — ensuring any metabolic byproducts are efficiently neutralized.
            </SupportItem>
            <SupportItem title="Morning Warm Lemon Water">
              A simple bitter stimulus that kickstarts bile production 30 minutes before you ingest your adaptogen stack.
            </SupportItem>
          </div>
        </section>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<RefreshCw className="w-6 h-6" />} title="The Bottom Line" />
          <p className="text-black/70 leading-relaxed">
            By treating these potent tonics with the clinical respect they deserve — sourcing meticulously prepared extracts and forcing regular metabolic breaks — you can reap the profound cognitive, hormonal, and longevity benefits of this powerhouse stack without ever compromising your liver health.
          </p>
          <div className="mt-6 rounded-2xl border border-[#c4622d]/20 bg-[#c4622d]/5 p-6">
            <p className="text-black/75 leading-relaxed text-sm">
              Source your He Shou Wu from <AffilLink href="https://hyperionherbs.com/?ref=eden10" label="Hyperion Herbs" /> — use code <strong className="text-[#c4622d]">EDEN10</strong> for 10% off. Their traditionally prepared 10:1 extract is the benchmark for quality in this category.
            </p>
          </div>
        </section>

      </div>
    </PageLayout>
  );
}
