import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, FlaskConical, User, ShieldCheck, Leaf, Zap } from "lucide-react";
import im8ProductImg from "@assets/image_1772841246898.png";
import im8ClinicalImg from "@assets/image_1772841266580.png";

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-[#c4622d]">{icon}</span>
      <h2 className="font-display text-2xl font-bold text-black">{title}</h2>
    </div>
  );
}

const ratingRows = [
  { label: "Ingredient quality", stars: 5 },
  { label: "Dosing transparency", stars: 5 },
  { label: "Taste and mixability", stars: 5 },
  { label: "Value for money", stars: 4 },
  { label: "Third-party certification", stars: 5 },
  { label: "Real-world results", stars: 4 },
];

function Stars({ count }: { count: number }) {
  return (
    <span className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} className={`w-4 h-4 ${s <= count ? "text-amber-400" : "text-black/15"}`} fill={s <= count ? "currentColor" : "none"} />
      ))}
    </span>
  );
}

export default function Im8HealthReview() {
  return (
    <PageLayout showShare
      title="IM8 Health Review (2026): Is It Actually Worth It?"
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: "IM8 Health Review (2026): Is It Actually Worth It? | Thrive Tools",
        description: "Honest, science-based IM8 review. Ingredients, bioactive forms, gut protocol, CoQ10, saffron extract, certifications, and real-world results. Use discount code THRIVE10 for a discount.",
        canonical: "/product-reviews/im8-health-review",
        ogType: "article",
        datePublished: "2026-01-21",
        image: im8ProductImg,
        imageAlt: "IM8 Health complete daily nutrition supplement",
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-10">

        <div className="card-glass rounded-2xl overflow-hidden" data-testid="img-hero-im8">
          <img loading="lazy" decoding="async" src={im8ProductImg} alt="IM8 Health Daily Ultimate Essentials PRO" className="w-full h-auto object-cover" />
        </div>

        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border border-[#c4622d]/25 rounded-full px-3 py-0.5 text-xs">
            In-Depth Review
          </Badge>
          <Badge className="bg-white/5 text-black/50 border border-white/10 rounded-full px-3 py-0.5 text-xs">
            Updated 2026
          </Badge>
        </div>

        {/* Intro */}
        <section data-testid="section-intro">
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              I want to give you the kind of review I wish existed when I first heard about IM8 — one that goes past the marketing, actually digs into the formula, and tells you when it's worth it and when it isn't.
            </p>
            <p>
              I'm affiliated with IM8, so I'll say that upfront. But I've been in the wellness and biohacking space for 14 years. I don't recommend things I don't believe in, and I've turned down partnerships with brands I couldn't stand behind. The reason I partnered with IM8 is because when I pulled apart the formula, it held up. This review is my honest attempt to show you why — and where the legitimate criticisms land too.
            </p>
            <p>Let's get into it.</p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Ratings */}
        <section data-testid="section-ratings">
          <div className="card-glass rounded-2xl p-6">
            <h2 className="font-display text-xl font-bold text-black mb-4">Quick Ratings</h2>
            <div className="space-y-3">
              {ratingRows.map((row, i) => (
                <div key={i} className="flex items-center justify-between text-sm" data-testid={`rating-row-${i}`}>
                  <span className="text-black/70">{row.label}</span>
                  <Stars count={row.stars} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* What Is IM8 */}
        <section data-testid="section-what-is-im8">
          <SectionHeader icon={<Leaf className="w-5 h-5" />} title="What Is IM8?" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              IM8 is an all-in-one daily supplement powder engineered to replace up to 16 separate supplements in a single morning drink. The flagship product, Daily Ultimate Essentials, was co-founded by David Beckham and developed in collaboration with a scientific advisory board drawn from Mayo Clinic, NASA, Cedars-Sinai, Yale University, and the University of Connecticut.
            </p>
            <p>
              In February 2026, IM8 launched the Daily Ultimate Essentials PRO — a significantly upgraded version of the original formula with higher dosages, bioactive ingredient forms, and a new cognitive support ingredient. Existing subscribers were automatically upgraded at no extra cost and the price didn't change.
            </p>
            <p>
              Over 10,000 five-star reviews, more than 670,000 customer purchases, and over 20 million servings served since launch. That's not nothing — but popularity isn't the same as quality, so let's look at what's actually in it.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Scientific Advisory Board */}
        <section data-testid="section-science-board">
          <SectionHeader icon={<FlaskConical className="w-5 h-5" />} title="The Scientific Advisory Board" />
          <div className="space-y-5 text-black/70 leading-relaxed">
            <p>
              Most supplements are built by marketing teams working backwards from a trend. IM8 is built differently. The scientific advisory board includes researchers and clinicians from Mayo Clinic, NASA, Cedars-Sinai, Yale University, and the University of Connecticut — people with specific expertise in the areas the formula targets.
            </p>
            <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#c4622d] mb-1">Dr. Dawn Mussallem — Mayo Clinic / CMO, Fountain Life (Longevity Clinic of the Year 2025)</p>
              <p className="text-black/70 text-sm italic leading-relaxed">
                "By upgrading to bioactive forms like P5P and significantly increasing key dosages like B12, MSM and Vitamin D, we are delivering a level of cellular support that is rarely seen in a single product."
              </p>
            </div>
            <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#c4622d] mb-1">Dr. James L. Green — Former Chief Scientist of NASA (42 years of service)</p>
              <p className="text-black/70 text-sm italic leading-relaxed">
                "After decades at NASA studying the effects of space on the human body, I saw an opportunity with IM8 to apply that knowledge here on Earth. I joined because I'm passionate about using cutting-edge science to enhance daily well-being and longevity for everyone."
              </p>
            </div>
            <p>
              The distinction between scientific communicators (who endorse products) and active research clinicians who designed the formula is meaningful. IM8's advisory board falls clearly in the second category.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* What's In It */}
        <section data-testid="section-ingredients">
          <SectionHeader icon={<Zap className="w-5 h-5" />} title="What's in IM8 Daily Ultimate Essentials PRO?" />
          <p className="text-black/70 leading-relaxed mb-6">This is where most reviews go shallow. Here are the key systems the formula targets and what's actually there.</p>

          <div className="space-y-6">

            <div data-testid="section-vitamins">
              <h3 className="font-display text-xl font-bold text-black mb-3">Vitamins and Minerals — The Foundation</h3>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>
                  The PRO formula uses P5P (pyridoxal-5-phosphate) for B6, methylcobalamin for B12, and Quatrefolic for folate — all bioactive forms at clinical doses. Vitamin D3 is dosed at 1,200 IU paired with 40mcg of K2.
                </p>
                <p>
                  Why does this matter? A large portion of the population has reduced ability to convert synthetic vitamin forms into usable ones. People with MTHFR gene variants — roughly 40–60% of the population — convert folic acid to methylfolate poorly or not at all. If your supplement uses the synthetic versions, you may be absorbing far less than the label suggests.
                </p>
                <p>
                  The most notable upgrade in the PRO version is B12, which increased from 24mcg to 200mcg and switched to methylcobalamin — a 733% increase in potency. That's not a cosmetic update.
                </p>
              </div>
            </div>

            <div data-testid="section-gut">
              <h3 className="font-display text-xl font-bold text-black mb-3">Gut Health — A Four-Layer System</h3>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>
                  IM8 uses a 4-layer gut health system: 3g prebiotics, 10 billion CFU from 2 spore-forming strains, FloraSMART postbiotics at 25mg, plus digestive enzymes.
                </p>
                <p>
                  The spore-based probiotic strains (Bacillus subtilis DE111 and Bacillus coagulans BC99) are what separate IM8's gut protocol from most competitors. Standard Lactobacillus strains are fragile — largely destroyed by stomach acid before reaching the colon. Spore-forming bacteria produce a protective endospore that survives digestion and colonizes the gut. The inclusion of postbiotics and digestive enzymes makes this a complete gut protocol, not just a probiotic add-on.
                </p>
              </div>
            </div>

            <div data-testid="section-coq10-msm">
              <h3 className="font-display text-xl font-bold text-black mb-3">Cardiovascular, Mitochondrial, and Joint Support</h3>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>
                  CoQ10 is dosed at 100mg — a clinically meaningful amount for cardiovascular support and cellular energy production. Most all-in-one supplements either skip CoQ10 entirely or include token amounts of 10–20mg. 100mg is what appears in the research on energy metabolism and heart health.
                </p>
                <p>
                  MSM (methylsulfonylmethane) is dosed at 1,000mg — enough to support joint health, connective tissue integrity, and post-exercise recovery. Neither CoQ10 nor MSM at these doses appears in AG1 or most competing all-in-ones.
                </p>
              </div>
            </div>

            <div data-testid="section-saffron">
              <h3 className="font-display text-xl font-bold text-black mb-3">Cognitive Support — The PRO Addition</h3>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>
                  The genuinely new addition in the PRO formula is 30mg of Saffron Extract, added specifically to support cognitive function and mood balance. Saffron at 30mg has a growing body of human research behind it — particularly for mood regulation, with several trials showing effects comparable to low-dose SSRIs in mild-to-moderate depression. It's an unconventional but genuinely interesting addition.
                </p>
              </div>
            </div>

            <div data-testid="section-greens-aminos">
              <h3 className="font-display text-xl font-bold text-black mb-3">Greens, Superfoods, Electrolytes, and Amino Acids</h3>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>
                  The Raw Superfoods, Greens, Fruits &amp; Herbs Complex covers beet root, spinach, carrot, blueberry, pomegranate, acai, green tea extract, elderberry, turmeric, ginger, dandelion, ginkgo biloba, grape seed extract, sea moss, and more. AstaPure astaxanthin is included as a potent carotenoid antioxidant with research supporting skin health, eye health, and inflammation reduction.
                </p>
                <p>
                  The electrolyte complex includes potassium citrate, magnesium bisglycinate, calcium citrate, and calcium phosphate. The amino acid complex adds L-glutamine, L-leucine, L-isoleucine, L-valine, L-lysine, L-taurine, L-proline, and L-citrulline — supporting muscle recovery, gut lining integrity, and circulation.
                </p>
              </div>
            </div>

          </div>
        </section>

        <div className="section-divider" />

        {/* Clinical Trial */}
        <section data-testid="section-clinical-trial">
          <SectionHeader icon={<FlaskConical className="w-5 h-5" />} title="The Clinical Trial" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Unlike most supplement brands that rely solely on ingredient-level studies, IM8 commissioned its own product-level clinical trial — a 12-week randomized, controlled study conducted by the San Francisco Research Institute.
            </p>
          </div>
          <div className="card-glass rounded-2xl overflow-hidden my-6" data-testid="img-im8-clinical">
            <img loading="lazy" decoding="async" src={im8ClinicalImg} alt="IM8 Health clinically proven third-party tested results" className="w-full h-auto object-cover" />
          </div>
          <div className="grid sm:grid-cols-4 gap-4">
            {[
              { pct: "95%", label: "reported more energy" },
              { pct: "85%", label: "better digestion" },
              { pct: "80%", label: "better sleep" },
              { pct: "75%", label: "sharper focus" },
            ].map((item, i) => (
              <div key={i} className="card-glass rounded-xl p-5 text-center" data-testid={`stat-card-${i}`}>
                <p className="font-display text-3xl font-bold text-[#c4622d] mb-1">{item.pct}</p>
                <p className="text-black/55 text-xs leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-black/45 text-xs leading-relaxed">
            Subjective self-report outcomes from a 12-week controlled trial — considerably stronger evidence than cherry-picked testimonials.
          </p>
        </section>

        <div className="section-divider" />

        {/* What's Genuinely Good */}
        <section data-testid="section-strengths">
          <SectionHeader icon={<ShieldCheck className="w-5 h-5" />} title="What's Genuinely Good About IM8" />
          <div className="space-y-4">
            {[
              { label: "Full label transparency", text: "No proprietary blends, no hidden dosages — every ingredient and its amount is disclosed. You can actually verify what you're taking." },
              { label: "Bioactive forms throughout", text: "Methylcobalamin, P5P, Quatrefolic, and magnesium bisglycinate — the difference between a supplement that works for people with impaired conversion pathways and one that doesn't." },
              { label: "A real gut protocol", text: "Spore-based probiotics plus prebiotics, postbiotics, and digestive enzymes is the most complete gut health approach I've seen in an all-in-one format." },
              { label: "CoQ10 at a therapeutic dose", text: "100mg is what the research uses. Most competitors skip it entirely or include token amounts of 10–20mg." },
              { label: "NSF Certified with published CoA", text: "The Eurofins Certificate of Analysis is published on their site. Third-party verification that what's on the label is in the product." },
              { label: "The PRO upgrade came free", text: "Existing subscribers were automatically upgraded to the PRO formula at no extra cost, with the same price maintained. Unusual in this industry." },
            ].map((item, i) => (
              <div key={i} className="card-glass rounded-xl p-5" data-testid={`strength-${i}`}>
                <p className="font-semibold text-black/90 text-sm mb-1">{item.label}</p>
                <p className="text-black/65 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* Honest Criticisms */}
        <section data-testid="section-criticisms">
          <SectionHeader icon={<FlaskConical className="w-5 h-5" />} title="The Honest Criticisms" />
          <p className="text-black/70 leading-relaxed mb-5">No review worth reading skips this part.</p>
          <div className="space-y-4">
            {[
              { label: "Some secondary ingredients are in supporting rather than therapeutic doses", text: "The adaptogen and digestive enzyme inclusions may be below fully therapeutic levels. The core vitamins, minerals, CoQ10, MSM, and probiotic doses are solid — but some of the secondary inclusions are more 'supporting cast' than starring roles." },
              { label: "The celebrity co-founder angle is real marketing", text: "David Beckham is a co-founder and his name and face are front and center. It's fair to wonder how much of the premium goes toward brand-building versus formulation quality. My read: the scientific advisory board's involvement is genuine and the formula reflects it — but the marketing machine is also real." },
              { label: "It's not cheap", text: "At roughly $2.61 per serving on the quarterly plan, it's a premium product. The cost-per-supplement-replaced math works in its favour if you're already running a comprehensive stack — but if you just want a basic multivitamin, you can find solid options for less." },
              { label: "Not NSF Certified for Sport specifically", text: "IM8 is NSF Certified but doesn't currently hold the NSF Certified for Sport designation specifically relevant for competitive athletes subject to drug testing. For the general population this doesn't matter — but worth knowing." },
            ].map((item, i) => (
              <div key={i} className="card-glass rounded-xl p-5" data-testid={`criticism-${i}`}>
                <p className="font-semibold text-black/90 text-sm mb-1">{item.label}</p>
                <p className="text-black/65 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* Personal Experience */}
        <section data-testid="section-personal">
          <SectionHeader icon={<User className="w-5 h-5" />} title="My Personal Experience" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              I'm going to keep this short because I think people over-index on subjective experience and under-index on formulation quality. But here's what I noticed.
            </p>
            <p>
              The taste is genuinely good. Acai berry is the original — earthy, slightly tart, not sweet. The new Lemon + Orange and Mango + Passionfruit flavors add variety without compromising the formula.
            </p>
            <p>
              Energy is the first thing most people notice. Not a sharp stimulant spike — more like a sustained underlying energy that makes a difference by mid-morning. I attribute most of this to the B-complex in bioactive forms hitting properly, plus the CoQ10 and electrolytes.
            </p>
            <p>
              Gut function improved within the first week for me. Less bloating, more regularity. The spore-based probiotic protocol tends to work faster than standard Lactobacillus blends in my experience.
            </p>
            <p>
              The saffron addition in the PRO formula is subtle but real over time — I notice it most in mood stability, particularly in the late afternoon when energy can dip.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Who Is It For */}
        <section data-testid="section-who-for">
          <SectionHeader icon={<User className="w-5 h-5" />} title="Who IM8 Is Actually For" />
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card-glass rounded-2xl p-6 space-y-3" data-testid="section-im8-right-for">
              <p className="font-semibold text-black/90 text-sm">IM8 makes the most sense if you:</p>
              <ul className="space-y-2.5 text-sm text-black/70">
                {[
                  "Are currently taking 5+ separate supplements and want to simplify without sacrificing quality",
                  "Have an MTHFR variant or know you don't absorb synthetic vitamin forms well",
                  "Want a comprehensive gut protocol — spore-based probiotics, prebiotics, postbiotics, and enzymes — in one product",
                  "Are serious enough about health to care what's actually on the label",
                  "Want CoQ10, MSM, and amino acids included without adding more bottles to your shelf",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white text-xs" style={{ background: "linear-gradient(135deg,#e8956d,#c4622d)" }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-glass rounded-2xl p-6 space-y-3" data-testid="section-im8-not-for">
              <p className="font-semibold text-black/90 text-sm">IM8 is probably not the right fit if you:</p>
              <ul className="space-y-2.5 text-sm text-black/70">
                {[
                  "Are a competitive athlete who specifically needs NSF Certified for Sport",
                  "Just want a basic multivitamin at a lower price point — there are solid options for less",
                  "Have specific therapeutic needs (high-dose omega-3s, therapeutic magnesium, targeted adaptogens at clinical doses) that require dedicated supplementation anyway",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-black/40 text-xs border border-black/20 rounded-full">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Longevity Formula */}
        <section data-testid="section-longevity">
          <SectionHeader icon={<Leaf className="w-5 h-5" />} title="The Full IM8 Product Range" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>IM8 now offers two core products:</p>
            <div className="card-glass rounded-xl p-5 space-y-2">
              <p className="font-semibold text-black/90">Daily Ultimate Essentials PRO</p>
              <p className="text-sm leading-relaxed">The all-in-one daily foundation covered throughout this review. The right starting point for most people.</p>
            </div>
            <div className="card-glass rounded-xl p-5 space-y-3">
              <p className="font-semibold text-black/90">Daily Ultimate Longevity</p>
              <p className="text-sm leading-relaxed">Launched October 2025, targeting the 12 Hallmarks of Aging with a 5-complex system including NMN/NAD+ (nicotinamide mononucleotide, PQQ), cellular protection activators (trans-resveratrol, quercetin, fisetin), and a metabolic AMPK/SIRT1 activator (dihydroberberine, astaxanthin). The combination of both products is marketed as the Beckham Stack.</p>
              <ul className="space-y-2 text-sm text-black/65">
                {[
                  "NMN NAD+ Energy Booster — nicotinamide mononucleotide and pyrroloquinoline quinone",
                  "Cellular Foundation Builder — glycine and taurine",
                  "Cellular Protection Activator — trans-resveratrol, quercetin, and fisetin",
                  "Metabolic AMPK/SIRT1 Activator — dihydroberberine and astaxanthin",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white text-xs" style={{ background: "linear-gradient(135deg,#e8956d,#c4622d)" }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p>
              For most people, starting with Daily Ultimate Essentials PRO is the right call. The Longevity formula is for those already running a solid foundation who want to layer in dedicated anti-aging support.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Price */}
        <section data-testid="section-pricing">
          <SectionHeader icon={<Zap className="w-5 h-5" />} title="Price and How to Get It" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              IM8 Daily Ultimate Essentials PRO is available directly at im8health.com. The quarterly subscription plan works out to approximately $2.61 per serving — the most cost-effective option if you commit to a three-month trial.
            </p>
            <p>
              The cost-per-supplement-replaced math is worth doing honestly. IM8 is designed to replace up to 16 separate supplements — multivitamin, B-complex, vitamin D, greens powder, probiotic, prebiotic, CoQ10, MSM, electrolytes, amino acids, and more. If you're already running a comprehensive stack, consolidating into IM8 tends to be cheaper and better formulated than the sum of its parts.
            </p>
            <div className="card-glass rounded-xl px-5 py-4 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
              <p className="text-black/70 font-semibold">Use discount code THRIVE10 for a discount at checkout.</p>
              <a href="https://im8health.com/thrive10" target="_blank" rel="noopener noreferrer" className="text-[#c4622d] hover:text-[#8b3a1a] transition-colors text-sm font-medium underline" data-testid="link-im8-price-section">
                👉 Shop IM8 Daily Ultimate Essentials PRO here
              </a>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* FAQ */}
        <section data-testid="section-faq">
          <h2 className="font-display text-2xl font-bold text-black mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              {
                q: "What makes IM8 PRO different from the original formula?",
                a: "The PRO formula delivers up to 733% greater potency across 11 key nutrients. The most notable changes are B12 increasing from 24mcg to 200mcg switching to methylcobalamin, the addition of 30mg saffron extract for cognitive support, and upgrades to bioactive B6 as P5P. Vitamin D3, K2, magnesium, and MSM dosages were also increased — all at the same price.",
              },
              {
                q: "Is IM8 third-party tested?",
                a: "Yes. Every ingredient and dosage is third-party tested by independent labs. IM8 is NSF Certified and publishes its Eurofins Certificate of Analysis on their website.",
              },
              {
                q: "Can IM8 replace all my supplements?",
                a: "It's designed to replace up to 16 separate supplements — multivitamin, B-complex, vitamin D, greens powder, probiotic, prebiotic, CoQ10, MSM, electrolytes, amino acids, and more. Whether it replaces everything in your specific stack depends on your protocol. Most people will still want dedicated omega-3s and possibly additional magnesium or targeted adaptogens.",
              },
              {
                q: "How long does it take to feel a difference?",
                a: "Most people notice energy and digestion improvements within the first week. Mood and cognitive effects from the saffron extract tend to build over 2–4 weeks of consistent use.",
              },
              {
                q: "Is IM8 suitable for vegans?",
                a: "Yes. IM8 is vegan, gluten-free, non-GMO, and free from artificial flavors, sweeteners, and added sugar.",
              },
              {
                q: "What flavors does IM8 come in?",
                a: "The PRO range includes Acai + Mixed Berries (the original), Lemon + Orange, and Mango + Passionfruit — both new flavors added alongside the PRO launch in February 2026.",
              },
              {
                q: "Does IM8 have any proprietary blends?",
                a: "No. Every ingredient and its dosage is fully disclosed on the label. No hidden amounts, no proprietary blends.",
              },
              {
                q: "Who is on IM8's scientific advisory board?",
                a: "The advisory board includes researchers and clinicians from Mayo Clinic, NASA (James Green, Former Chief Scientist), Yale University, Cedars-Sinai (Director of the Human Microbiome Research Institute), and the University of Connecticut. Dr. Dawn Mussallem serves as a founding scientific advisor and is CMO of Fountain Life, designated Longevity Clinic of the Year 2025.",
              },
            ].map((item, i) => (
              <div key={i} className="card-glass rounded-xl p-5 space-y-2" data-testid={`faq-item-${i}`}>
                <h3 className="font-semibold text-black text-base">{item.q}</h3>
                <p className="text-black/65 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA button */}
        <div className="text-center pt-4">
          <Button asChild size="lg" className="btn-gradient-rose text-white border-0 rounded-full px-6 sm:px-8 py-4 text-sm tracking-widest uppercase font-semibold h-auto leading-relaxed">
            <a href="https://im8health.com/thrive10" target="_blank" rel="noopener noreferrer" data-testid="link-im8-shop" className="inline-flex items-center justify-center gap-2 flex-wrap">
              Try IM8 — Use Code THRIVE10 <ExternalLink className="w-4 h-4 flex-shrink-0" />
            </a>
          </Button>
        </div>

        {/* Author bio */}
        <div className="card-glass rounded-2xl p-6 space-y-2 text-center">
          <p className="text-black/60 text-sm leading-relaxed italic">
            Eden Laraki is the founder of ThriveTools.co — a science-backed wellness and biohacking platform covering supplements, tonic herbs, breathwork, plant medicine, and cognitive optimization, built from 14 years of personal research and self-experimentation.
          </p>
          <a href="https://thrivetools.co" target="_blank" rel="noopener noreferrer" className="text-[#c4622d] hover:text-[#8b3a1a] transition-colors text-sm font-medium underline" data-testid="link-thrivetools">
            → Explore ThriveTools.co
          </a>
        </div>

        <p className="text-center text-black/35 text-xs italic" data-testid="text-disclaimer">
          Disclosure: I'm affiliated with IM8 and receive a commission on purchases through my link. I only recommend products I've researched thoroughly and believe in — this review reflects my honest assessment of the formula. This article is for informational purposes only and does not constitute medical advice.
        </p>

      </article>
    </PageLayout>
  );
}
