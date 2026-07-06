import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Zap, Shield, RefreshCw, AlertTriangle, FlaskConical, Tag } from "lucide-react";

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

function MoleculeCard({
  number,
  name,
  subtitle,
  benchmark,
  avoid,
  goal,
  children,
}: {
  number: string;
  name: string;
  subtitle: string;
  benchmark: string;
  avoid?: string;
  goal: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-black/8 bg-white/60 p-6 space-y-4" data-testid={`molecule-card-${number}`}>
      <div className="flex items-center gap-3">
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#c4622d]/15 text-[#c4622d] flex items-center justify-center font-display font-bold text-lg">
          {number}
        </span>
        <div>
          <h3 className="font-display text-xl font-bold text-black">{name}</h3>
          <p className="text-sm text-black/50">{subtitle}</p>
        </div>
      </div>
      <p className="text-black/70 leading-relaxed">{children}</p>
      <div className="space-y-2 pt-1">
        <div className="flex gap-2.5">
          <span className="mt-1 w-2 h-2 rounded-full bg-[#c4622d] flex-shrink-0" />
          <p className="text-sm text-black/70 leading-relaxed"><span className="font-semibold text-black">Purity benchmark:</span> {benchmark}</p>
        </div>
        {avoid && (
          <div className="flex gap-2.5">
            <span className="mt-1 w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
            <p className="text-sm text-black/70 leading-relaxed"><span className="font-semibold text-black">What to avoid:</span> {avoid}</p>
          </div>
        )}
        <div className="flex gap-2.5">
          <span className="mt-1 w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
          <p className="text-sm text-black/70 leading-relaxed"><span className="font-semibold text-black">Clinical goal:</span> {goal}</p>
        </div>
      </div>
    </div>
  );
}

const im8Table = [
  {
    complex: "NAD+ Energy Booster",
    ingredients: "NMN (300mg) + PQQ (10mg)",
    function: "Restores mitochondrial energy and drives DNA repair.",
  },
  {
    complex: "Cellular Protection",
    ingredients: "Trans-Resveratrol (250mg) + Quercetin (250mg) + Fisetin (100mg)",
    function: 'A senolytic complex designed to help eliminate aging "zombie cells."',
  },
  {
    complex: "Cellular Renewal",
    ingredients: "Spermidine (3mg)",
    function: "Triggers deep autophagy and cellular housekeeping.",
  },
  {
    complex: "Cellular Foundation",
    ingredients: "L-Glycine (3g) + Taurine (2g)",
    function: "Amino acid support for systemic antioxidant production.",
  },
  {
    complex: "Metabolic Activation",
    ingredients: "Dihydroberberine (100mg) + Astaxanthin (6mg)",
    function: "Enhances metabolic efficiency with 5× better absorption than standard berberine.",
  },
];

export default function LongevityMoleculesGuide() {
  return (
    <PageLayout
      showShare
      title="The Consumer Guide to Longevity Molecules"
      subtitle="Purity Benchmarks for NMN, Resveratrol, and Spermidine"
      seo={{
        title: "Longevity Molecules Guide: NMN, Resveratrol & Spermidine Purity Benchmarks | Thrive Tools",
        description: "The longevity supplement market is flooded with under-dosed, white-labeled powders. Here are the exact purity benchmarks, active forms, and clinical dose targets for NMN, Trans-Resveratrol, and Spermidine so you can audit your own stack.",
        canonical: "https://thrivetools.co/blog/longevity-molecules-nmn-resveratrol-spermidine-guide",
        ogType: "article",
        datePublished: "2026-06-28",
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-12">

        <div className="flex flex-wrap gap-2 items-center">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25 text-xs font-semibold px-3 py-1 rounded-full">
            Longevity
          </Badge>
          <span className="text-black/40 text-sm">June 28, 2026</span>
        </div>

        <p className="text-lg text-black/75 leading-relaxed">
          The market for longevity supplements is experiencing a massive gold rush. Turn on any health podcast or scroll through social media and you will hear the same core trio of cellular compounds repeated like a mantra: NMN, Resveratrol, and Spermidine.
        </p>

        <p className="text-black/70 leading-relaxed">
          But here is the dark truth of the wellness industry: <strong>the market is flooded with white-labeled, low-quality, and under-dosed powders.</strong> Because consumer demand moves infinitely faster than regulatory bodies, buyers are left to figure out what is a clinically backed dose and what is just clever marketing.
        </p>

        <p className="text-black/70 leading-relaxed">
          This guide breaks down the actual purity benchmarks, active forms, and clinical targets for the big three longevity molecules so you can audit your own stack.
        </p>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<FlaskConical className="w-6 h-6" />} title="The Big Three Longevity Molecules" />
          <div className="space-y-5">
            <MoleculeCard
              number="1"
              name="NMN"
              subtitle="Nicotinamide Mononucleotide"
              benchmark="99% pure, stabilized crystallized NMN. Standard NMN degrades quickly when exposed to heat and ambient light — cheap powders often lose potency before leaving the warehouse."
              avoid="Any company that fails to provide a transparent, batch-specific Certificate of Analysis (CoA) confirming third-party purity and heavy metal testing."
              goal="300mg daily of highly bioavailable NMN — widely considered the sweet spot for noticeable changes in cellular energy baseline."
            >
              NMN is a direct precursor to NAD+, a critical coenzyme found in every cell of your body that declines drastically as we age. NAD+ is essential for mitochondrial function — the batteries of your cells — and DNA repair.
            </MoleculeCard>

            <MoleculeCard
              number="2"
              name="Trans-Resveratrol"
              subtitle="Active sirtuin activator"
              benchmark='Look specifically for "Trans-Resveratrol" on the ingredient label. The cheaper alternative, cis-resveratrol, is biologically inactive and does nothing for your sirtuin pathways.'
              goal="250mg daily of pure Trans-Resveratrol, always paired with an NAD+ booster. Sirtuins require NAD+ to function — taking Resveratrol without NMN is like pressing the accelerator with an empty tank."
            >
              Resveratrol is a polyphenol famous for activating sirtuins (specifically SIRT1), which act like the cellular mechanics of the body — regulating metabolic health and defending against oxidative stress.
            </MoleculeCard>

            <MoleculeCard
              number="3"
              name="Spermidine"
              subtitle="Autophagy activator"
              benchmark='Avoid low-quality synthetic versions or highly unstandardized wheat germ extracts. The label must clearly state the exact standardized milligram yield of active spermidine — not just "wheat germ extract."'
              goal='3mg of standardized spermidine daily — the dose clinical studies highlight as optimal to efficiently trigger the cellular "cleanup" process.'
            >
              Spermidine is a naturally occurring polyamine that targets one of the most vital hallmarks of aging: autophagy. Think of autophagy as your cells' internal recycling system — it actively clears away damaged proteins and dysfunctional "zombie cells" so healthy tissue can thrive.
            </MoleculeCard>
          </div>
        </section>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<AlertTriangle className="w-6 h-6" />} title='The Reality of "Stack Fatigue"' />
          <p className="text-black/70 leading-relaxed">
            If you try to source high-purity, third-party tested versions of NMN, Trans-Resveratrol, and Spermidine individually, you quickly run into a practical roadblock. You end up managing a countertop of plastic bottles, tracking conflicting daily timelines, and spending a small fortune on singular ingredients.
          </p>
          <p className="text-black/70 leading-relaxed mt-4">
            Because of this friction, the landscape is shifting away from messy, isolated pill stacks toward consolidated, clinical-grade formulations.
          </p>
        </section>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<Zap className="w-6 h-6" />} title="Sourcing an All-in-One Solution: IM8 Health" />
          <p className="text-black/70 leading-relaxed mb-6">
            If you want to skip the headache of buying individual ingredients and verifying a dozen different CoAs, the{" "}
            <AffilLink href="https://www.im8health.com/THRIVE10" label="IM8 Daily Ultimate Longevity Drink" />{" "}
            is worth a look. Co-founded by David Beckham and engineered alongside clinical experts from the Mayo Clinic and NASA, IM8 consolidated the exact benchmarks outlined above into a single daily drink via a 5-Complex System:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-black/8">
            <table className="w-full text-sm" data-testid="table-im8-complexes">
              <thead>
                <tr className="bg-[#c4622d]/8 border-b border-black/8">
                  <th className="text-left px-4 py-3 font-semibold text-black">Longevity Complex</th>
                  <th className="text-left px-4 py-3 font-semibold text-black">Key Active Ingredients</th>
                  <th className="text-left px-4 py-3 font-semibold text-black">Primary Cellular Function</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/6">
                {im8Table.map((row) => (
                  <tr key={row.complex} className="bg-white/60 hover:bg-[#c4622d]/3 transition-colors">
                    <td className="px-4 py-3 font-medium text-black align-top">{row.complex}</td>
                    <td className="px-4 py-3 text-black/70 align-top">{row.ingredients}</td>
                    <td className="px-4 py-3 text-black/70 align-top">{row.function}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-black/70 leading-relaxed mt-5">
            The main reason this formula stands out in a crowded market is quality control: everything inside it is strictly third-party tested and <strong>NSF Certified for Sport</strong>, meaning what is written on the label is exactly what is going into your body — no cheap filler or unverified white labels.
          </p>
        </section>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<Shield className="w-6 h-6" />} title="Final Thoughts" />
          <p className="text-black/70 leading-relaxed">
            Whether you choose to build your own longevity stack molecule-by-molecule or streamline it with an all-in-one system, the rule remains the same: <strong>always demand third-party purity verification.</strong> Don't pay premium prices for unstandardized ingredients.
          </p>
        </section>

        <div className="rounded-2xl border-2 border-[#c4622d]/30 bg-[#c4622d]/5 p-7 space-y-4" data-testid="section-discount-cta">
          <div className="flex items-center gap-2">
            <Tag className="w-5 h-5 text-[#c4622d]" />
            <p className="text-sm font-semibold text-[#8b3a1a] uppercase tracking-wide">Exclusive Discount</p>
          </div>
          <p className="text-black/80 leading-relaxed">
            Try the consolidated approach with the IM8 Daily Ultimate Longevity Drink. Use our affiliate code to get <strong>10% off</strong> your order.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-black/50">Code:</span>
              <span className="font-mono font-bold text-xl text-[#c4622d] bg-white/80 border border-[#c4622d]/20 px-4 py-1.5 rounded-lg tracking-widest" data-testid="text-discount-code">
                THRIVE10
              </span>
            </div>
            <a
              href="https://www.im8health.com/THRIVE10"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-im8-cta"
              className="inline-flex items-center gap-2 bg-[#c4622d] hover:bg-[#8b3a1a] text-white font-semibold px-6 py-2.5 rounded-full transition-colors text-sm"
            >
              Shop IM8 Health <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <p className="text-xs text-black/40">
            Code applies at checkout on www.im8health.com/THRIVE10. Clean up your supplement clutter and hit your daily purity benchmarks.
          </p>
        </div>

      </div>
    </PageLayout>
  );
}
