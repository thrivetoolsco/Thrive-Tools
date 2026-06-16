import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FlaskConical, ShieldCheck, Heart, Leaf, Brain, Zap, Sun } from "lucide-react";

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

function BenefitCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
      <p className="text-xs font-semibold uppercase tracking-wider text-[#c4622d] mb-2">{title}</p>
      <p className="text-black/70 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function CompoundCard({ name, body }: { name: string; body: string }) {
  return (
    <div className="card-glass rounded-2xl p-5 space-y-2">
      <p className="font-semibold text-black/90 text-sm">{name}</p>
      <p className="text-black/60 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="space-y-2">
      <p className="font-semibold text-black/85">{q}</p>
      <p className="text-black/65 leading-relaxed text-sm">{a}</p>
    </div>
  );
}

export default function BlackSeedOilGuide() {
  return (
    <PageLayout
      showShare
      title="Black Seed Oil Benefits: What 2,000 Years of Use and Modern Science Both Agree On"
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: "Black Seed Oil Benefits: Science, Thymoquinone & How to Use It | Thrive Tools",
        description: "Black seed oil (Nigella sativa) has 1,000+ published studies behind it. Here is the honest breakdown of the thymoquinone mechanism, evidence-based benefits, and how to choose quality oil.",
        canonical: "/blog/black-seed-oil-benefits-nigella-sativa-guide",
        ogType: "article",
        datePublished: "2026-06-13",
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-10">

        {/* Badges */}
        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border border-[#c4622d]/25 rounded-full px-3 py-0.5 text-xs">
            Science Deep Dive
          </Badge>
          <Badge className="bg-white/5 text-black/50 border border-white/10 rounded-full px-3 py-0.5 text-xs">
            June 13, 2026
          </Badge>
          <Badge className="bg-white/5 text-black/50 border border-white/10 rounded-full px-3 py-0.5 text-xs">
            Supplements Guide
          </Badge>
        </div>

        {/* Opening */}
        <section data-testid="section-intro">
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p className="italic text-black/60 border-l-4 border-[#c4622d]/30 pl-4">
              "Use the black seed, for indeed it is a cure for every disease except death." — Islamic hadith attributed to the Prophet Muhammad ﷺ
            </p>
            <p>
              That's a bold claim. And in the context of most wellness marketing, you'd be right to be skeptical of it. But black seed —{" "}
              <em>Nigella sativa</em> — is genuinely one of the most researched medicinal plants in existence, with over 1,000 published studies
              exploring its properties. It's been used continuously in traditional medicine across the Middle East, South Asia, and North Africa
              for over 2,000 years. And the modern science, while not quite vindicating the hadith literally, reveals a compound with an
              unusually broad and well-documented range of biological activity.
            </p>
            <p>
              The active compound at the center of most of this research is thymoquinone (TQ) — a bioactive monoterpene that influences
              inflammation, immune signaling, oxidative stress, metabolic function, and more. Understanding what thymoquinone does
              mechanistically is the key to understanding why black seed oil keeps showing up across so many seemingly unrelated health conditions.
            </p>
            <p className="font-semibold text-black/85">This is the honest version of what the research shows.</p>
          </div>
        </section>

        <div className="section-divider" />

        {/* What is black seed oil */}
        <section data-testid="section-what-is">
          <SectionHeader icon={<Leaf className="w-5 h-5" />} title="What Is Black Seed Oil?" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Black seed oil is cold-pressed from the seeds of <em>Nigella sativa</em>, a flowering plant native to Western Asia and the
              Mediterranean. It's known by many names across cultures — black cumin, black caraway, kalonji (Hindi/Urdu),
              habbat-as-sawda (Arabic, meaning "the blessed seed"), schwarzkümmel (German), and cörek otu (Turkish).
            </p>
            <p>The seeds contain a complex profile of bioactive compounds:</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mt-5">
            <CompoundCard
              name="Thymoquinone (TQ)"
              body="The primary active compound. Potent antioxidant, anti-inflammatory, antimicrobial, and increasingly studied for anti-tumor properties. TQ is responsible for most of the documented health effects."
            />
            <CompoundCard
              name="Thymohydroquinone (THQ) and Dithymoquinone"
              body="Additional quinones with complementary antioxidant and antimicrobial activity that work synergistically with TQ."
            />
            <CompoundCard
              name="Omega Fatty Acids"
              body="Including linoleic acid (omega-6) and oleic acid (omega-9), which contribute to cardiovascular and skin health."
            />
            <CompoundCard
              name="Carvacrol and Thymol"
              body="Volatile compounds with antimicrobial and anti-inflammatory properties also found in oregano and thyme."
            />
            <CompoundCard
              name="Alkaloids (Nigellicine, Nigellidine)"
              body="Additional bioactive compounds with immunomodulatory properties."
            />
          </div>
          <div className="mt-5 card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#c4622d] mb-2">Quality varies enormously</p>
            <p className="text-black/70 text-sm leading-relaxed">
              The quality and potency of black seed oil varies significantly with the thymoquinone content — which depends on seed origin,
              growing conditions, and extraction method. Cold-pressed, undiluted oil from high-quality seeds is what you want. The volatile oil
              content (which carries the thymoquinone) ranges from under 0.5% in low-quality oils to over 3% in premium products.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* The Mechanism */}
        <section data-testid="section-mechanism">
          <SectionHeader icon={<FlaskConical className="w-5 h-5" />} title="The Mechanism: Why Thymoquinone Affects So Many Systems" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              The breadth of black seed oil's documented effects often makes people skeptical — if something claims to help with allergies,
              blood sugar, immunity, skin, and gut health simultaneously, it starts to sound like snake oil.
            </p>
            <p>
              But there's a coherent mechanism underlying all of it: thymoquinone is a master regulator of the{" "}
              <strong className="text-black/85">NF-κB pathway</strong> — the central molecular switch that controls the inflammatory response
              in the body.
            </p>
            <p>
              NF-κB activation drives the production of pro-inflammatory cytokines (TNF-α, IL-1β, IL-6) and mediators involved in virtually
              every chronic disease. Thymoquinone inhibits NF-κB activation, reduces the downstream inflammatory cascade, and simultaneously
              increases antioxidant enzyme activity — including superoxide dismutase (SOD) and catalase.
            </p>
            <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#c4622d] mb-2">Why this breadth makes sense</p>
              <p className="text-black/70 text-sm leading-relaxed">
                Because chronic inflammation and oxidative stress are the common denominator underlying cardiovascular disease, metabolic
                syndrome, allergic conditions, autoimmunity, and more — a compound that effectively addresses both mechanisms will show up
                across a surprisingly wide range of conditions. This is the same reason omega-3s and magnesium appear in research across so
                many health areas. It's not that they cure everything — it's that they address root-level processes that drive many things.
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Evidence-Based Benefits */}
        <section data-testid="section-benefits">
          <SectionHeader icon={<ShieldCheck className="w-5 h-5" />} title="Evidence-Based Benefits of Black Seed Oil" />

          {/* Allergies */}
          <div className="space-y-4 mb-8" data-testid="benefit-allergies">
            <h3 className="font-display text-xl font-bold text-black">Allergies and Respiratory Health</h3>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                This is where some of the most compelling clinical data sits — and the area that makes black seed oil particularly relevant
                for anyone dealing with seasonal allergies, hay fever, or asthma.
              </p>
              <p>
                Thymoquinone acts as a natural antihistamine — it inhibits histamine release from mast cells and stabilizes them against
                degranulation (the process that triggers the allergic cascade). It also reduces serum IgE, the antibody that mediates
                allergic reactions, and lowers eosinophil counts — white blood cells directly involved in allergic inflammation.
              </p>
              <BenefitCard
                title="RCT on seasonal allergies"
                body="In one randomized controlled trial, the black seed oil group showed lower serum IgE and eosinophils, and far fewer severe symptoms by the end — only 3% of the black seed oil group versus 66% of the placebo group had severe symptoms after 15 days."
              />
              <BenefitCard
                title="Hay fever"
                body="Topical use of black seed oil reduced allergy symptoms in 92% of people with hay fever in one small study."
              />
              <BenefitCard
                title="Asthma meta-analysis (2020)"
                body="A 2020 meta-analysis of randomized controlled trials with 187 asthma patients found that black cumin seed oil at various dosages improved multiple asthma parameters. A 2019 study showed that 500mg twice daily for four weeks improved Asthma Control Test scores."
              />
            </div>
          </div>

          {/* Immune */}
          <div className="space-y-4 mb-8" data-testid="benefit-immune">
            <h3 className="font-display text-xl font-bold text-black">Immune Function and Immunomodulation</h3>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                Black seed oil is an <strong className="text-black/85">immunomodulator</strong> — it doesn't simply suppress or stimulate the
                immune system but helps regulate it toward appropriate function. This distinction matters enormously for people with autoimmune
                conditions or chronic infections where immune dysregulation is the underlying problem.
              </p>
              <p>
                Thymoquinone enhances innate immune function — increasing natural killer cell activity and macrophage function — while
                simultaneously reducing the excessive inflammatory signaling that drives autoimmune tissue damage. The immunomodulatory
                properties of <em>Nigella sativa</em> prompt the body to target aberrant cells and may augment the effectiveness of
                conventional treatments.
              </p>
              <p>
                For people dealing with chronic infections, frequent illness, or post-viral immune dysregulation — the immunomodulatory
                profile of black seed oil is particularly interesting. It supports immune competence without the immune overstimulation that
                can worsen inflammatory conditions.
              </p>
            </div>
          </div>

          {/* Metabolic */}
          <div className="space-y-4 mb-8" data-testid="benefit-metabolic">
            <h3 className="font-display text-xl font-bold text-black">Metabolic Health: Blood Sugar, Cholesterol, and Weight</h3>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <BenefitCard
                title="2024 RCT review — metabolic syndrome"
                body="A review of eight randomized controlled trials published in 2024 found that most studies showed black seed significantly improved lipid profiles, lowered blood pressure, and improved blood sugar control, concluding that black seed can be recommended as supportive therapy for metabolic syndrome."
              />
              <p>
                The mechanisms are well-characterized: thymoquinone improves insulin sensitivity, reduces glucose production in the liver
                through AMPK activation, and directly supports pancreatic beta-cell function. It also inhibits adipogenesis — the formation
                of new fat cells — through AMPK and MAPK pathway modulation.
              </p>
              <BenefitCard
                title="Lipid modulation"
                body="Clinical trials have demonstrated that regular consumption of black cumin seed at doses of 500mg to 2g per day over a few weeks results in favorable cholesterol modulation, lowering total cholesterol, LDL, and triglycerides while increasing HDL cholesterol."
              />
            </div>
          </div>

          {/* Gut */}
          <div className="space-y-4 mb-8" data-testid="benefit-gut">
            <h3 className="font-display text-xl font-bold text-black">Gut Health and Digestive Function</h3>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                Black seed oil has a long history of traditional use for gastrointestinal complaints that is increasingly supported by modern
                research. In historical medical practices, <em>Nigella sativa</em> found extensive application in addressing gastrointestinal
                issues like indigestion, bloating, loose stools, and inflammatory bowel conditions.
              </p>
              <p>
                Thymoquinone's anti-inflammatory action directly addresses gut wall inflammation — relevant for conditions ranging from
                irritable bowel syndrome to Crohn's and ulcerative colitis. Its antimicrobial properties help modulate gut pathogen
                populations without the broad-spectrum damage of antibiotics. And its antioxidant activity protects the gut epithelium from
                oxidative damage.
              </p>
              <p>
                For people with gut dysbiosis, leaky gut, or post-antibiotic gut disruption — black seed oil works synergistically alongside{" "}
                <a href="/blog/bacillus-subtilis-bacillus-coagulans-probiotic-guide" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">
                  spore-based probiotics
                </a>{" "}
                and prebiotic fiber rather than replacing them.
              </p>
            </div>
          </div>

          {/* Cardiovascular */}
          <div className="space-y-4 mb-8" data-testid="benefit-cardio">
            <h3 className="font-display text-xl font-bold text-black">Cardiovascular Protection</h3>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                The cardiovascular benefits of black seed oil operate through multiple pathways: lipid profile improvement, blood pressure
                reduction, antioxidant protection of arterial walls, and anti-inflammatory action that reduces the inflammatory component of
                atherosclerosis.
              </p>
              <BenefitCard
                title="Oxidative stress and inflammation"
                body="Thymoquinone appears to reduce the level of oxidative stress — an imbalance of free radicals and antioxidants in the body — and is also anti-inflammatory, both of which are core drivers of cardiovascular disease progression."
              />
            </div>
          </div>

          {/* Skin */}
          <div className="space-y-4 mb-8" data-testid="benefit-skin">
            <h3 className="font-display text-xl font-bold text-black">Skin and Hair Health</h3>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                Topical black seed oil has documented benefits for multiple skin conditions through its antimicrobial, anti-inflammatory,
                and fatty acid profile:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <BenefitCard
                  title="Acne"
                  body="Thymoquinone's antimicrobial action against Propionibacterium acnes combined with its anti-inflammatory effects addresses both the bacterial and inflammatory components of acne simultaneously."
                />
                <BenefitCard
                  title="Eczema and psoriasis"
                  body="Anti-inflammatory and barrier-supporting properties help reduce flare frequency and severity. Several studies have shown topical black seed oil comparable to pharmaceutical alternatives for mild-to-moderate eczema."
                />
                <BenefitCard
                  title="Skin aging"
                  body="Thymoquinone's antioxidant activity and linoleic acid content support collagen synthesis and protect against photooxidative damage."
                />
                <BenefitCard
                  title="Hair health"
                  body="Antimicrobial properties address scalp conditions including dandruff and fungal overgrowth, while the fatty acid profile nourishes hair follicles."
                />
              </div>
            </div>
          </div>

          {/* Kidney */}
          <div className="space-y-4" data-testid="benefit-kidney">
            <h3 className="font-display text-xl font-bold text-black">Kidney Protection</h3>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <BenefitCard
                title="2021 research"
                body="Research from 2021 suggests that black seed oil can have a protective effect on the kidneys, with thymoquinone reducing the level of oxidative stress as one of the key mechanisms. A 2019 study also showed that black seed oil may be helpful in reducing the size of kidney stones and eliminating kidney stones from the body."
              />
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Traditional medicine connection */}
        <section data-testid="section-tradition">
          <SectionHeader icon={<Sun className="w-5 h-5" />} title="The Thymoquinone and Traditional Medicine Connection" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              I want to take a moment to appreciate something here that the clinical research sometimes obscures.
            </p>
            <p>
              Black seed has been used continuously for over 2,000 years across Islamic, Ayurvedic, and traditional Chinese medicine systems.
              The Arabic name — <em>habbat-as-sawda</em> — translates literally to "the blessed seed." This isn't a recently rediscovered
              superfood or a marketing invention. It's a medicine that survived and spread across multiple cultures and millennia precisely
              because people who used it observed consistent effects.
            </p>
            <p>
              The modern research isn't validating tradition so much as providing the molecular language to describe what practitioners already
              knew. Thymoquinone, NF-κB, IgE — these are the explanatory frameworks we now have for effects that were being documented and
              transmitted long before anyone knew what a cytokine was.
            </p>
            <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
              <p className="text-black/70 text-sm leading-relaxed">
                For me, this kind of convergence — where centuries of traditional medicine and modern clinical research point in the same
                direction — carries more weight than either alone. Black seed oil earns its place in a serious wellness protocol not despite
                its ancient history but partly because of it.
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* How to choose and use */}
        <section data-testid="section-how-to">
          <SectionHeader icon={<Brain className="w-5 h-5" />} title="How to Choose and Use Black Seed Oil" />

          <h3 className="font-display text-xl font-bold text-black mb-4">What to Look For</h3>
          <div className="space-y-3 mb-8">
            <BenefitCard
              title="Cold-pressed, undiluted"
              body="Heat and chemical extraction degrades thymoquinone. Cold-pressed is the only acceptable method for therapeutic-grade oil."
            />
            <BenefitCard
              title="Volatile oil content"
              body="This determines thymoquinone concentration. Higher volatile oil percentage means more potent oil. The Blessed Seed is the only company that supplies four different strengths of oil based on thymoquinone content, ranging from mild (1.2% volatile oil) to Extra Strong — the most potent formulation, particularly effective for respiratory and immune applications."
            />
            <BenefitCard
              title="Seed origin"
              body="Ethiopian and Egyptian seeds are consistently rated among the highest quality for thymoquinone content. Turkish and Indian seeds also produce quality oil but with variable potency."
            />
            <BenefitCard
              title="Third-party testing"
              body="Look for verified thymoquinone content, not just marketing claims."
            />
          </div>

          <h3 className="font-display text-xl font-bold text-black mb-4">Dosing Guidelines</h3>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { label: "General health maintenance", dose: "1 tsp (5ml) daily" },
              { label: "Therapeutic use", dose: "1–3 tsp daily, split across meals" },
              { label: "Capsule equivalent", dose: "500–1,000mg per dose, 1–3× daily" },
            ].map((d) => (
              <div key={d.label} className="card-glass rounded-xl p-4 text-center">
                <p className="text-[#c4622d] font-bold text-lg mb-1">{d.dose}</p>
                <p className="text-black/55 text-xs">{d.label}</p>
              </div>
            ))}
          </div>
          <p className="text-black/60 text-sm leading-relaxed mb-8">
            Most studies showing significant benefits use doses of 500mg–2g of black seed oil daily for 4–12 weeks. Effects accumulate with
            consistent use — don't assess after a week.
          </p>

          <h3 className="font-display text-xl font-bold text-black mb-4">Timing and Practical Use</h3>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Black seed oil has a distinctive, pungent flavour — slightly bitter, with a warming spice character. It gets easier to take
              with consistent use, but for those sensitive to the taste:
            </p>
            <ul className="space-y-2 list-none pl-0">
              {[
                "Take on a spoonful of honey or mix with honey",
                "Add to a smoothie or warm drink",
                "Take in capsule form to bypass the taste entirely",
                "Mix into salad dressings or drizzle on food after cooking (don't cook with it — heat degrades thymoquinone)",
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-2 text-sm">
                  <span className="text-[#c4622d] mt-0.5 flex-shrink-0">→</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
            <p>
              The oil can also be applied topically for skin and hair — massage directly into the scalp for hair health, apply as a spot
              treatment for acne, or use as a carrier for skin conditions.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Where to source */}
        <section data-testid="section-source">
          <SectionHeader icon={<Zap className="w-5 h-5" />} title="Where I Source My Black Seed Oil" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              After researching the market thoroughly, <strong className="text-black/85">The Blessed Seed</strong> is the brand I recommend.
              They've been specialising exclusively in black seed oil for over two decades — it's their only product, which means quality is
              not an afterthought. They source from premium seeds, cold-press everything, offer four strength levels based on thymoquinone
              content, and provide full transparency about volatile oil percentages.
            </p>
            <p>
              The Extra Strong formulation is particularly relevant for immune, respiratory, and allergy applications. The Mild formulation
              is the entry point for people new to black seed oil or sensitive to strong flavours.
            </p>
            <div className="card-glass rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-black/85 mb-1">The Blessed Seed Black Seed Oil</p>
                <p className="text-black/55 text-sm">Four strengths · Cold-pressed · Full thymoquinone transparency</p>
              </div>
              <AffilLink href="https://theblessedseed.de/ref/370/" label="Shop The Blessed Seed →" />
            </div>
            <p className="text-black/40 text-xs italic">
              Disclosure: I'm affiliated with The Blessed Seed and receive a commission on purchases through my link. I recommend them
              because the quality and specialisation is genuinely exceptional.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* How it fits in a broader stack */}
        <section data-testid="section-stack">
          <SectionHeader icon={<Heart className="w-5 h-5" />} title="How Black Seed Oil Fits Into a Broader Wellness Stack" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>Black seed oil doesn't replace foundational health practices — it amplifies them.</p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-black/85 mb-3">Pairs well with:</p>
                <ul className="space-y-2">
                  {[
                    { label: "Omega-3s", note: "complementary anti-inflammatory mechanisms", href: "/blog/omega-3-complete-guide-epa-dha-fish-oil-vs-algae" },
                    { label: "Spore-based probiotics", note: "gut health support from different angles", href: "/blog/bacillus-subtilis-bacillus-coagulans-probiotic-guide" },
                    { label: "Reishi mushroom", note: "overlapping immunomodulatory effects", href: "/blog/reishi-schisandra-daily-tonic-herbs" },
                    { label: "Magnesium", note: "both address inflammation and nervous system function", href: "/blog/magnesium-deficiency-supplement-guide" },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-2 text-sm">
                      <span className="text-[#c4622d] mt-0.5 flex-shrink-0">→</span>
                      <span>
                        <a href={item.href} className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">{item.label}</a>
                        {" "}— {item.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-black/85 mb-3">Particularly relevant for:</p>
                <ul className="space-y-2">
                  {[
                    "Seasonal allergy sufferers looking for natural antihistamine support",
                    "People with asthma or respiratory conditions",
                    "Anyone managing metabolic syndrome, blood sugar dysregulation, or cardiovascular risk",
                    "People with chronic immune challenges or recurrent infections",
                    "Gut health recovery, especially post-antibiotic",
                    "Anyone interested in skin health from the inside out",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="text-[#c4622d] mt-0.5 flex-shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* FAQ */}
        <section data-testid="section-faq">
          <SectionHeader icon={<FlaskConical className="w-5 h-5" />} title="Frequently Asked Questions" />
          <div className="space-y-6">
            <FaqItem
              q="What is thymoquinone and why does it matter?"
              a="Thymoquinone (TQ) is the primary active compound in black seed oil — a monoterpene that inhibits the NF-κB inflammatory pathway, acts as a potent antioxidant, inhibits histamine release, and modulates immune function. It's the compound responsible for most of black seed oil's documented health effects."
            />
            <FaqItem
              q="How long does it take for black seed oil to work?"
              a="Most studies showing significant results use 4–12 weeks of consistent daily supplementation. For allergy symptoms, some people notice effects within 2–4 weeks. For metabolic and cardiovascular benefits, 8–12 weeks is a more realistic timeframe. Consistency matters more than dose size."
            />
            <FaqItem
              q="Is black seed oil safe to take daily?"
              a="No clinical trials to date have reported severe adverse effects in humans, and the FDA lists Nigella sativa as Generally Recognized as Safe (GRAS). At standard doses of 1–3 teaspoons daily, it is well-tolerated by most people. Rare mild side effects include GI sensitivity, particularly on an empty stomach."
            />
            <FaqItem
              q="Can black seed oil interact with medications?"
              a="Yes — thymoquinone can potentiate the effects of blood-thinning medications, diabetes drugs, and blood pressure medications. If you're on any of these, consult your healthcare provider before adding black seed oil. Use with caution alongside immunosuppressive drugs."
            />
            <FaqItem
              q="What's the difference between black seed oil strengths?"
              a="The strength refers to the volatile oil content, which determines thymoquinone concentration. Mild (1.2% volatile oil) is best for taste-sensitive people or daily general use. Strong and Extra Strong have higher thymoquinone concentrations and are best suited for respiratory, immune, and allergy applications where therapeutic potency matters most."
            />
            <FaqItem
              q="Can I cook with black seed oil?"
              a="No — heat degrades thymoquinone and destroys the active compounds. Use it raw, drizzled on finished food, in smoothies, or taken directly. Black seeds (whole) can be used in cooking; the oil should not be heated."
            />
            <FaqItem
              q="Is black seed oil the same as black cumin oil?"
              a="Yes — black seed, black cumin, black caraway, and kalonji all refer to Nigella sativa seeds. The oil pressed from these seeds is the same product regardless of which name the brand uses."
            />
          </div>
        </section>

        <div className="section-divider" />

        {/* References */}
        <section data-testid="section-references">
          <h2 className="font-display text-xl font-bold text-black mb-5">Research References</h2>
          <ul className="space-y-3 text-sm text-black/55">
            {[
              {
                text: "Razmpoosh E, et al. \"A crossover randomized controlled trial examining the effects of black seed supplementation on IL-1β, IL-6 and leptin.\" BMC Complementary Medicine and Therapies, 2024.",
                href: "https://link.springer.com/article/10.1186/s12906-023-04226-y",
              },
              {
                text: "\"Functional, Nutraceutical, and Pharmacological Properties of Black Seed.\" Food Science & Nutrition, 2025.",
                href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12365395/",
              },
              {
                text: "\"Systematic review of randomized controlled trials in uses of Nigella sativa in metabolic syndrome.\" West African Journal of Medicine, 2024.",
                href: undefined,
              },
              {
                text: "Ahmad A, et al. \"A review on therapeutic potential of Nigella sativa.\" Asian Pacific Journal of Tropical Biomedicine, 2013.",
                href: "https://pubmed.ncbi.nlm.nih.gov/23620848/",
              },
              {
                text: "Cleveland Clinic. \"Black Seed Oil Benefits for Your Health.\"",
                href: "https://health.clevelandclinic.org/black-seed-oil",
              },
            ].map((ref) => (
              <li key={ref.text} className="flex items-start gap-2">
                <span className="text-[#c4622d] mt-1 flex-shrink-0">–</span>
                <span>
                  {ref.href ? (
                    <a href={ref.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#c4622d] transition-colors underline">
                      {ref.text}
                    </a>
                  ) : ref.text}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Disclaimer */}
        <p className="text-black/35 text-xs leading-relaxed border-t border-black/10 pt-6">
          This article is for educational purposes only and does not constitute medical advice. Always consult a qualified healthcare
          provider before adding new supplements, particularly if you are on medications.
        </p>

      </article>
    </PageLayout>
  );
}
