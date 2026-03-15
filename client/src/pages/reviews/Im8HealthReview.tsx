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
    <PageLayout
      title="IM8 Health Review (2026): Is It Worth It?"
      subtitle="My honest, unsponsored take — ingredients, clinical evidence, taste, price, and real-world results."
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-12">

        <div className="card-glass rounded-2xl overflow-hidden" data-testid="img-hero-im8">
          <img loading="lazy" decoding="async" src={im8ProductImg} alt="IM8 Health Daily Ultimate Essentials" className="w-full h-auto object-cover" />
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
              When a supplement is co-founded by David Beckham, developed with scientists from Mayo Clinic, NASA, Yale, and Cedars-Sinai, and claims to replace 16 separate daily supplements in a single morning drink, the skepticism is warranted.
            </p>
            <p>
              That's exactly the mindset I brought to this review. I've spent time with IM8 Daily Ultimate Essentials Pro, digging into its ingredients, its clinical trial, its certifications, and what it actually feels like to take it daily. This is not a sponsored review. No brand relationship influences what you're about to read.
            </p>
            <p>
              My short take: IM8 is one of the most genuinely impressive all-in-one supplements on the market in 2026, but it's not for everyone, it's not cheap, and there are a few things worth knowing before you buy. Here's the full picture.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* What Is IM8 */}
        <section data-testid="section-what-is-im8">
          <SectionHeader icon={<Leaf className="w-5 h-5" />} title="What Is IM8 Health?" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Launched in January 2025 by former Manchester United player David Beckham and Prenetics, a leading biotechnology company, IM8 describes itself as "the pinnacle of core nutrition."
            </p>
            <p>
              The origin story is worth knowing because it's unusually authentic for the supplements world. The brand originated from Beckham's desire to streamline his own routine. Before IM8, he was reportedly taking over a dozen different supplements daily, many of which didn't taste great. That's where Daily Essentials comes in.
            </p>
            <p>
              The scientists affiliated with Mayo Clinic, NASA, Yale University, Cedars-Sinai Medical Center, the University of Florida, and the University of Connecticut first engineered an all-in-one powder with 92 ingredients to replace 16 separate daily supplements. The PRO version, the current flagship, represents the second major iteration of that formula, upgraded with more bioactive nutrient forms, higher clinical doses, and a new cognitive support ingredient.
            </p>
            <p>
              IM8 currently offers two products: Daily Ultimate Essentials Pro (the daily nutritional foundation) and Daily Ultimate Longevity (the anti-aging and hallmarks-of-aging supplement). This review focuses primarily on Essentials Pro, with a section on Longevity for those considering the full stack.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Scientific Advisory Board */}
        <section data-testid="section-science-board">
          <SectionHeader icon={<FlaskConical className="w-5 h-5" />} title="The Scientific Advisory Board: Why It Matters" />
          <div className="space-y-5 text-black/70 leading-relaxed">
            <p>
              Most supplements are built by marketing teams working backwards from a trend. IM8 is built differently, and the scientific advisory board is the clearest evidence of that. IM8 was co-developed with a world-class scientific advisory team from Mayo Clinic, NASA, Cedars-Sinai, and Yale, each collaborating to develop a formula at the cutting edge of nutritional science.
            </p>
            <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#c4622d] mb-1">Dr. Dawn Mussallem — Chief Medical Officer, Fountain Life / Mayo Clinic</p>
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
              This caliber of scientific oversight is genuinely rare in the supplement industry. It doesn't guarantee the product works, but it does mean the formulation decisions are being made by people whose reputations are staked on the science being sound.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* What's In It */}
        <section data-testid="section-ingredients">
          <SectionHeader icon={<Zap className="w-5 h-5" />} title="What's Actually in It" />
          <div className="space-y-4 text-black/70 leading-relaxed mb-6">
            <p>
              IM8 Daily Ultimate Essentials is a science-backed, all-in-one supplement designed to simplify daily nutrition with 92 nutrient-rich ingredients, including essential vitamins, minerals, superfoods, and clinically studied doses of CoQ10 and MSM, supporting hydration, digestion, energy metabolism, immune function, and overall wellbeing including key nutrients for hair, skin, nails, joints, muscles, and heart health.
            </p>
          </div>
          <div className="space-y-5">
            {[
              {
                label: "Bioactive vitamins — not the cheap versions",
                text: "Vitamin B12 is included as Methylcobalamin, a highly effective, biologically active form that is readily absorbed and utilized by the body, enhancing energy production and reducing fatigue. This is meaningfully better than cyanocobalamin, the cheap synthetic form most multivitamins use. The PRO formula upgrades include 733% more B12 at 200mcg Methylcobalamin, a new 30mg Saffron Extract for focus, bioactive Vitamin B6 as P5P instead of HCl, increased Vitamin D3, K2, Magnesium, and MSM, plus 300% more of the CRT8 Complex, all at the same price.",
              },
              {
                label: "Gut health — prebiotics, probiotics, and postbiotics together",
                text: "IM8 provides a comprehensive approach to gut health by including prebiotics, probiotics, and postbiotics working together synergistically. Prebiotics act as food for beneficial gut bacteria, probiotics are live beneficial bacteria that support a healthy microbiome, and postbiotics are the beneficial compounds produced by probiotics. The formula delivers 10 billion CFUs of two clinically studied probiotic strains, Bacillus coagulans BC99 and Bacillus subtilis DE111, which work synergistically to support gut balance, digestion, and immune function. Both strains are heat-stable, meaning they survive the manufacturing process and reach the gut intact.",
              },
              {
                label: "CoQ10 and MSM — what most greens powders skip",
                text: "These two ingredients are what put IM8 in a different category for me personally. IM8 includes clinically studied doses of CoQ10 for mitochondrial and heart health and MSM for joint and muscle support. Neither appears at meaningful doses in AG1 or most competing all-in-ones. For anyone training hard or thinking about long-term cardiovascular health, these additions represent real functional value.",
              },
              {
                label: "Saffron extract — the standout PRO addition",
                text: "The 30mg Saffron Extract in the PRO formula is one of its most interesting upgrades. Saffron has growing clinical evidence for supporting mood, focus, and cognitive clarity, with several RCTs showing effects comparable to low-dose antidepressants for mild mood disturbances. It's a thoughtful, evidence-backed addition that gives Essentials Pro a genuine brain health dimension the original formula lacked.",
              },
              {
                label: "Superfoods, greens, and antioxidants",
                text: "IM8 contains a broad spectrum of antioxidants that work together in a network to protect cells from oxidative stress, alongside a 4,100mg Raw Superfoods, Greens, Fruits and Herbs Complex containing prebiotic fiber from Guar Fiber and Agave Inulin.",
              },
            ].map((item, i) => (
              <div key={i} className="card-glass rounded-xl p-5" data-testid={`ingredient-card-${i}`}>
                <p className="font-semibold text-black/90 text-sm mb-2 capitalize">{item.label}</p>
                <p className="text-black/65 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* Clinical Trial */}
        <section data-testid="section-clinical-trial">
          <SectionHeader icon={<FlaskConical className="w-5 h-5" />} title="The Clinical Trial" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Unlike most supplement brands that rely solely on ingredient-level studies, IM8 commissioned its own product-level clinical trial. Results are based on a 12-week randomized, controlled, clinical trial conducted by the San Francisco Research Institute, giving it a level of evidence most competitors simply don't have.
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
            Subjective self-report outcomes from a 12-week controlled trial — worth noting the methodology, but considerably stronger than cherry-picked testimonials.
          </p>
        </section>

        <div className="section-divider" />

        {/* Longevity Formula */}
        <section data-testid="section-longevity">
          <SectionHeader icon={<Leaf className="w-5 h-5" />} title="The Daily Ultimate Longevity Formula" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              For anyone serious about aging optimization, IM8's second product goes significantly further. Daily Ultimate Longevity is formulated to support all 12 hallmarks of aging with a revolutionary 1,100% increase in active ingredient capacity over capsules, featuring a breakthrough 5-Complex System with therapeutic doses of premium longevity compounds.
            </p>
            <div className="card-glass rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-black/40 mb-3">The 5-Complex System</p>
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
              I personally take both every morning — Essentials Pro as my nutritional foundation and Longevity for cellular aging protection. If you're serious about biohacking your long-term health, the combination of both is the most complete protocol IM8 offers.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Personal Experience */}
        <section data-testid="section-personal">
          <SectionHeader icon={<User className="w-5 h-5" />} title="What I Actually Noticed Taking It" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Within about two weeks of consistent daily use, I stopped feeling like I needed a second coffee. Not because I quit caffeine, I still enjoy it, but because the underlying energy was just steadier and more reliable throughout the day. Digestion improved noticeably within the first week, which I attribute to the prebiotic and probiotic complex doing its job.
            </p>
            <p>
              The cognitive clarity from the Saffron Extract and B-vitamin complex is subtle but real. It's more of a consistent sharpness than an acute nootropic hit. Think less fog rather than more spark.
            </p>
            <p>
              The honest caveat: if you take it inconsistently, you won't notice much. The benefits build over 2 to 4 weeks of daily use. I treat it the same way I treat sleep — non-negotiable, every morning, no excuses.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Taste */}
        <section data-testid="section-taste">
          <SectionHeader icon={<Zap className="w-5 h-5" />} title="Taste and Mixability" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              This matters enormously and it's where IM8 genuinely surprised me. Most greens powders taste like you're drinking a lawn. IM8 doesn't.
            </p>
            <p>
              The acai and mixed berry flavor uses a stevia-free sweetener system from Reb M derived from fermented sugarcane, avoiding the bitter aftertaste that puts many people off greens powders. It mixes easily in cold water with just a shaker, no blender needed, and the finish is clean, slightly sweet, and genuinely pleasant. It's now available in three flavors: Acai + Mixed Berries, Lemon + Orange, and Mango + Passion Fruit.
            </p>
            <p>
              After trying all three, Acai + Mixed Berries remains my personal daily go-to.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Quality */}
        <section data-testid="section-quality">
          <SectionHeader icon={<ShieldCheck className="w-5 h-5" />} title="Quality and Certifications" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              IM8 is rigorously verified by independent third-party labs to ensure accuracy and transparency. Every ingredient and dosage matches what's listed on the label. IM8 is also Non-GMO, vegan, allergen-free, gluten-free, and contains no artificial flavors, sweeteners, or added sugar.
            </p>
            <p>
              The NSF Certified for Sport certification is the gold standard in supplement quality verification, testing for over 270 substances banned by WADA and major sports bodies. Very few all-in-one supplements hold this certification. IM8 does, and for me that's non-negotiable when choosing a daily supplement I'm taking every single day.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Pricing */}
        <section data-testid="section-pricing">
          <SectionHeader icon={<Leaf className="w-5 h-5" />} title="Pricing and Value" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              IM8 Daily Ultimate Essentials Pro is approximately $89/month on subscription. That's premium pricing, but the value calculation changes completely when you think about what it replaces.
            </p>
            <p>
              The average health-conscious consumer spends hundreds of dollars monthly on multiple supplements, each addressing only one aspect of health. IM8 Daily Ultimate Essentials consolidates 16 common supplements into one comprehensive formula, saving money, time, and the hassle of managing multiple products.
            </p>
            <p>
              Before IM8, I was spending on a separate multivitamin, probiotic, greens powder, CoQ10, and B-complex. When I added that up honestly, IM8 was actually cheaper, and better formulated than everything it replaced.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Limitations */}
        <section data-testid="section-limitations">
          <SectionHeader icon={<FlaskConical className="w-5 h-5" />} title="Honest Limitations" />
          <div className="space-y-4">
            {[
              {
                label: "High vitamin doses for some",
                text: "IM8 contains high quantities of some vitamins and minerals, including 900mg of Vitamin C at 1,000% Daily Value. For most healthy adults this is fine, but check for overlap if you're already eating a nutrient-rich diet or taking other supplements.",
              },
              {
                label: "Omega-3 is not covered",
                text: "I still take AquaOmega separately. IM8 doesn't cover EPA and DHA at therapeutic doses, so a quality fish oil remains a necessary addition.",
              },
              {
                label: "Creatine is not included",
                text: "For cognitive performance and physical output, a separate creatine monohydrate like Organika is still needed alongside IM8.",
              },
              {
                label: "Price",
                text: "It's a real monthly commitment. It's worth it for the right person, but it's not the entry-level option.",
              },
            ].map((item, i) => (
              <div key={i} className="card-glass rounded-xl p-5" data-testid={`limitation-${i}`}>
                <p className="font-semibold text-black/90 text-sm mb-1">{item.label}</p>
                <p className="text-black/65 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* Who Is It For */}
        <section data-testid="section-who-for">
          <SectionHeader icon={<User className="w-5 h-5" />} title="Who Is IM8 Best For?" />
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card-glass rounded-2xl p-6 space-y-3">
              <p className="font-semibold text-black/90 text-sm">It's right for you if you:</p>
              <ul className="space-y-2.5 text-sm text-black/70">
                {[
                  "Want clinical doses and bioactive nutrient forms rather than basic nutritional coverage",
                  "Are currently managing five or more daily supplements and want to consolidate without sacrificing quality",
                  "Train hard and need joint support, cardiovascular support, and recovery compounds alongside daily nutrition",
                  "Care about long-term cellular health and want a daily non-negotiable health ritual",
                  "Have tried greens powders before and hated the taste",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white text-xs" style={{ background: "linear-gradient(135deg,#e8956d,#c4622d)" }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-glass rounded-2xl p-6 space-y-3">
              <p className="font-semibold text-black/90 text-sm">It may not be right for you if you:</p>
              <ul className="space-y-2.5 text-sm text-black/70">
                {[
                  "Are on a tight budget looking for a basic nutritional safety net",
                  "Are a complete beginner who hasn't yet nailed the lifestyle fundamentals",
                  "Have specific medical conditions affecting vitamin or mineral tolerance — always check with your doctor first",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full border border-black/20 flex items-center justify-center text-black/40 text-xs">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Verdict */}
        <section data-testid="section-verdict">
          <SectionHeader icon={<Star className="w-5 h-5" />} title="My Verdict" />
          <div className="space-y-4 text-black/70 leading-relaxed mb-6">
            <p>
              IM8 Daily Ultimate Essentials Pro is the best all-in-one supplement I've personally used. The scientific team behind it is exceptional, the NSF certification is real, the bioactive nutrient forms are correct, the clinical trial is legitimate, and, crucially, it actually tastes good.
            </p>
            <p>
              It works best as the nutritional foundation of a broader optimization protocol, not a standalone fix for a broken lifestyle. But for anyone serious about their health and ready to invest in a daily foundation they can trust completely, this is the benchmark everything else is measured against.
            </p>
            <p>
              It's the all-in-one product I recommend above everything else in its category at ThriveTools. See how it fits into a complete biohacking stack in my{" "}
              <a href="/product-reviews/biohacking-supplements-2026" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">full supplement guide</a>,
              compare it directly to AG1 in my{" "}
              <a href="/product-reviews/im8-vs-ag1" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">IM8 vs AG1 breakdown</a>,
              or visit my{" "}
              <a href="/personalized-guidance" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">Personalized Guidance</a>{" "}
              page if you want a full protocol built around your specific biology and goals.
            </p>
          </div>

          <div className="card-glass rounded-2xl p-6 space-y-4" data-testid="table-rating">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex gap-0.5">
                {[1,2,3,4].map(s => <Star key={s} className="w-5 h-5 text-amber-400" fill="currentColor" />)}
                <Star className="w-5 h-5 text-amber-400" style={{ clipPath: "inset(0 30% 0 0)" }} fill="currentColor" />
              </div>
              <span className="text-black/70 font-semibold text-sm">My Rating: 4.7 / 5</span>
            </div>
            <div className="divide-y divide-black/8">
              {ratingRows.map((row, i) => (
                <div key={i} className="flex items-center justify-between py-3" data-testid={`rating-row-${i}`}>
                  <span className="text-black/70 text-sm">{row.label}</span>
                  <Stars count={row.stars} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA button */}
        <div className="text-center pt-4">
          <Button asChild size="lg" className="btn-gradient-rose text-white border-0 rounded-full px-6 sm:px-8 py-4 text-sm tracking-widest uppercase font-semibold h-auto leading-relaxed">
            <a href="https://im8health.com/" target="_blank" rel="noopener noreferrer" data-testid="link-im8-shop" className="inline-flex items-center justify-center gap-2 flex-wrap">
              Get IM8 — Use Code THRIVE10 <ExternalLink className="w-4 h-4 flex-shrink-0" />
            </a>
          </Button>
        </div>

        <div className="space-y-3">
          <p className="text-center text-black/35 text-xs italic" data-testid="text-affiliate">
            Disclosure: This article may contain affiliate links. I may earn a commission if you purchase through these links at no additional cost to you. My editorial position is fully independent — I only feature products I personally use and genuinely believe in.
          </p>
          <p className="text-center text-black/35 text-xs italic" data-testid="text-disclaimer">
            Medical Disclaimer: This article is for informational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional before beginning any new supplement regimen.
          </p>
        </div>

      </article>
    </PageLayout>
  );
}
