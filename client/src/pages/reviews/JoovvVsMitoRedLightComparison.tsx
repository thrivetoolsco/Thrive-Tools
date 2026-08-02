import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Zap, Layers, Target, DollarSign, ShieldCheck, HelpCircle } from "lucide-react";

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
  brand,
  tagline,
  code,
  codeLabel,
  url,
  reviewHref,
}: {
  brand: string;
  tagline: string;
  code?: string;
  codeLabel?: string;
  url: string;
  reviewHref?: string;
}) {
  return (
    <div className="rounded-2xl border border-[#c4622d]/25 bg-[#c4622d]/6 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <p className="font-bold text-black text-base mb-0.5">{brand}</p>
        <p className="text-black/60 text-sm leading-relaxed">{tagline}</p>
        {code && (
          <p className="mt-2 text-xs font-mono font-semibold text-[#8b3a1a] bg-[#c4622d]/12 border border-[#c4622d]/25 inline-block px-2.5 py-1 rounded-md">
            {codeLabel ? codeLabel : `Code: ${code}`}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2 sm:items-end shrink-0">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button className="inline-flex items-center gap-1.5 bg-[#c4622d] hover:bg-[#8b3a1a] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors whitespace-nowrap">
            Visit {brand} <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </a>
        {reviewHref && (
          <a href={reviewHref} className="text-xs text-[#c4622d] hover:underline text-center">
            Read full review →
          </a>
        )}
      </div>
    </div>
  );
}

export default function JoovvVsMitoRedLightComparison() {
  return (
    <PageLayout
      showShare
      title="Joovv vs Mito Red Light vs RedTherapy"
      subtitle="Which Red Light Panel Actually Fits You — An Honest, Spec-Based Breakdown"
      seo={{
        title: "Joovv vs Mito Red Light vs RedTherapy: Which Red Light Panel to Buy (2026) | Thrive Tools",
        description: "An honest, spec-based comparison of Joovv, Mito Red Light, and RedTherapy — which red light therapy device to buy depends on your goal, not the brand name. Full breakdown with pricing, certifications, and our discount codes.",
        canonical: "https://thrivetools.co/blog/joovv-vs-mito-red-light-vs-redtherapy-comparison",
        ogType: "article",
        datePublished: "2026-08-02",
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-12">

        {/* Badge + Date */}
        <div className="flex flex-wrap gap-2 items-center">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25 text-xs font-semibold px-3 py-1 rounded-full">
            Comparison Guide
          </Badge>
          <span className="text-black/40 text-sm">August 2, 2026</span>
        </div>

        {/* Intro */}
        <div className="space-y-4 text-black/70 leading-relaxed">
          <p className="text-lg">
            I get some version of this question almost weekly: <em>"Which red light do I buy?"</em> For a while my answer was just "Joovv — it's the gold standard," which is technically true, but it's also the answer that ignores that most people asking me aren't trying to build a home clinic. They're trying to fix one specific thing: their skin, their joints, their sleep, their recovery.
          </p>
          <p>
            Red light therapy (photobiomodulation) is one of the few biohacking tools with a genuinely robust research base. Over 5,000 peer-reviewed studies have examined the effects of 660nm and 850nm wavelengths on cellular energy production, inflammation, skin repair, wound healing, and neurological function. The mechanism is real: specific wavelengths of light are absorbed by cytochrome c oxidase in the mitochondria, increasing ATP production and triggering downstream signalling cascades that reduce oxidative stress and accelerate tissue repair.
          </p>
          <p>
            The question is never really <em>whether</em> red light works. It's which device delivers the light efficiently, from the right distance, at the right irradiance, for the right application — and at a price that makes sense for what you're actually trying to accomplish.
          </p>
          <p>
            Here's the honest breakdown of the three I personally recommend, based on what each one is genuinely built for.
          </p>
        </div>

        <div className="section-divider" />

        {/* Comparison Table */}
        <section>
          <SectionHeader icon={<Layers className="w-6 h-6" />} title="Side-by-Side Comparison" />
          <div className="overflow-x-auto rounded-2xl border border-black/8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#c4622d]/8 border-b border-black/8">
                  <th className="text-left px-4 py-3 font-bold text-black/80 w-36"></th>
                  <th className="text-left px-4 py-3 font-bold text-black/80">Joovv</th>
                  <th className="text-left px-4 py-3 font-bold text-black/80">Mito Red Light</th>
                  <th className="text-left px-4 py-3 font-bold text-black/80">RedTherapy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/6">
                <tr className="hover:bg-black/2 transition-colors">
                  <td className="px-4 py-3 font-semibold text-black/70">Built for</td>
                  <td className="px-4 py-3 text-black/65">Full-body, modular, clinic-grade</td>
                  <td className="px-4 py-3 text-black/65">Targeted — face, neck, skin</td>
                  <td className="px-4 py-3 text-black/65">Full-body, budget-conscious power</td>
                </tr>
                <tr className="hover:bg-black/2 transition-colors">
                  <td className="px-4 py-3 font-semibold text-black/70">Wavelengths</td>
                  <td className="px-4 py-3 text-black/65">660nm + 850nm</td>
                  <td className="px-4 py-3 text-black/65">Varies by device — up to 6 wavelengths</td>
                  <td className="px-4 py-3 text-black/65">660nm + 850nm, pulsed format</td>
                </tr>
                <tr className="hover:bg-black/2 transition-colors">
                  <td className="px-4 py-3 font-semibold text-black/70">Entry price</td>
                  <td className="px-4 py-3 text-black/65">$549 (Go 2.0 handheld)</td>
                  <td className="px-4 py-3 text-black/65">$329 (MitoCLEAR mask)</td>
                  <td className="px-4 py-3 text-black/65">$675 (RedRush 400 Pulse)</td>
                </tr>
                <tr className="hover:bg-black/2 transition-colors">
                  <td className="px-4 py-3 font-semibold text-black/70">Full-body price</td>
                  <td className="px-4 py-3 text-black/65">$1,699–$11,099</td>
                  <td className="px-4 py-3 text-black/65">Panels from $1,299</td>
                  <td className="px-4 py-3 text-black/65">$675–$2,490</td>
                </tr>
                <tr className="hover:bg-black/2 transition-colors">
                  <td className="px-4 py-3 font-semibold text-black/70">Certification</td>
                  <td className="px-4 py-3 text-black/65">FDA-cleared general wellness + IEC medical electrical safety</td>
                  <td className="px-4 py-3 text-black/65">FDA Class II cleared, IEC 60601</td>
                  <td className="px-4 py-3 text-black/65">General wellness device, not FDA-cleared</td>
                </tr>
                <tr className="hover:bg-black/2 transition-colors">
                  <td className="px-4 py-3 font-semibold text-black/70">Best for</td>
                  <td className="px-4 py-3 text-black/65">The most clinically documented option — if budget isn't the constraint</td>
                  <td className="px-4 py-3 text-black/65">Skin-specific goals: acne, fine lines, tone, texture</td>
                  <td className="px-4 py-3 text-black/65">Real full-body power without flagship pricing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="section-divider" />

        {/* Joovv */}
        <section>
          <SectionHeader icon={<ShieldCheck className="w-6 h-6" />} title="Joovv — The Benchmark" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Joovv is still the name that shows up most frequently in published photobiomodulation research, and that matters if you care about the evidence behind what you're buying rather than just the light itself. The company has been in the space longer than most, has invested heavily in third-party certification, and is the reference point most researchers use when they're designing RLT studies in home-use settings.
            </p>
            <p>
              What separates Joovv mechanically is its modular system. You can start with a single Solo 3.0 panel and physically connect additional panels over time rather than replacing the entire setup. For anyone who takes this seriously long-term, that's a meaningful difference — it removes the lock-in problem that comes with most competitors' proprietary form factors.
            </p>
            <div className="rounded-2xl border border-[#c4622d]/20 bg-[#c4622d]/5 p-5 space-y-3">
              <p className="font-semibold text-black">Joovv specs worth knowing:</p>
              <ul className="space-y-2 text-sm text-black/65">
                <li className="flex gap-2"><span className="text-[#c4622d] font-bold mt-0.5">—</span><span><strong className="text-black">Wavelengths:</strong> 660nm (red) and 850nm (near-infrared) — the two most studied wavelengths in PBM research.</span></li>
                <li className="flex gap-2"><span className="text-[#c4622d] font-bold mt-0.5">—</span><span><strong className="text-black">Irradiance:</strong> Up to 100 mW/cm² at recommended treatment distance. High enough for meaningful dose delivery in standard sessions.</span></li>
                <li className="flex gap-2"><span className="text-[#c4622d] font-bold mt-0.5">—</span><span><strong className="text-black">Modular:</strong> Solo, Duo, Quad, and Hex configurations — panels physically link together.</span></li>
                <li className="flex gap-2"><span className="text-[#c4622d] font-bold mt-0.5">—</span><span><strong className="text-black">Certification:</strong> FDA-cleared general wellness device + independently certified to IEC 60601-1 medical electrical safety standard. This is the ceiling most competitors haven't reached.</span></li>
              </ul>
            </div>
            <p>
              The catch is the price. A genuinely useful full-body setup runs $1,699–$3,295+ for most people, and flagship configurations go significantly higher. You're paying a premium for the brand, the certification, and the modular system — not necessarily for irradiance you can't access elsewhere for considerably less. If you want the most-studied option and the price doesn't limit you, this is still where I'd point you. If it does, read the next two sections.
            </p>
            <p>
              Joovv also offers the Go 2.0 — a handheld/targeted device at $549 — which is worth knowing if you want the brand quality for a specific area rather than full-body coverage.
            </p>
          </div>

          <div className="mt-6">
            <AffiliateBlock
              brand="Joovv"
              tagline="Clinical grade red light therapy from handheld devices to full body panels. The most trusted name in photobiomodulation."
              code="THRIVETOOLS"
              url="https://joovv.com"
              reviewHref="/product-reviews/joovv-review"
            />
          </div>
        </section>

        <div className="section-divider" />

        {/* Mito Red Light */}
        <section>
          <SectionHeader icon={<Target className="w-6 h-6" />} title="Mito Red Light — The Skin Specialist" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              This is the category Joovv doesn't seriously compete in. Mito's mask line — specifically the MitoGLOW and MitoCLEAR — is FDA Class II cleared and purpose-built for facial photobiomodulation: acne, fine lines, tone, texture, post-inflammatory hyperpigmentation. The mask format matters here because it provides consistent LED-to-skin proximity, which is one of the most important variables in whether skin applications actually work. Distance degradation is real — irradiance drops roughly by the inverse square of distance, so a mask maintaining 2–5mm from the skin delivers a fundamentally different dose than a panel across the room.
            </p>
            <p>
              The MitoCLEAR uses 630nm, 660nm, and 830nm wavelengths — the 630nm addition specifically targeting the shallower skin layers where acne bacteria (P. acnes) live and where surface collagen synthesis happens. The MitoGLOW adds additional wavelengths targeting deeper dermal layers for anti-aging applications. These are not interchangeable products, and choosing between them depends on your primary concern.
            </p>
            <div className="rounded-2xl border border-[#c4622d]/20 bg-[#c4622d]/5 p-5 space-y-3">
              <p className="font-semibold text-black">When to choose Mito over a panel:</p>
              <ul className="space-y-2 text-sm text-black/65">
                <li className="flex gap-2"><span className="text-[#c4622d] font-bold mt-0.5">—</span><span>Your primary goal is skin: acne, aging, redness, or texture.</span></li>
                <li className="flex gap-2"><span className="text-[#c4622d] font-bold mt-0.5">—</span><span>You want a purpose-built device rather than adapting a panel for facial use.</span></li>
                <li className="flex gap-2"><span className="text-[#c4622d] font-bold mt-0.5">—</span><span>Budget is a real consideration — the mask entry point ($329) is significantly lower than any serious panel.</span></li>
                <li className="flex gap-2"><span className="text-[#c4622d] font-bold mt-0.5">—</span><span>You want FDA Class II clearance specifically for dermatological applications.</span></li>
              </ul>
            </div>
            <p>
              Mito also manufactures full panels — the MitoPRO series — for anyone whose goals expand beyond skin. It's not a category dead-end. But the mask line is their most differentiated product and what I'd start with if skin is the primary driver.
            </p>
            <p>
              The honest context: if your actual goal is "I want my skin to look better," a $329–$499 mask that's purpose-built for facial photobiomodulation is a smarter purchase than a $1,700 full-body panel you'll mostly aim at your face anyway. This is a calibration problem, not a quality problem.
            </p>
          </div>

          <div className="mt-6">
            <AffiliateBlock
              brand="Mito Red Light"
              tagline="Medical grade red light masks for targeted facial recovery, skin health and cellular repair. FDA Class II cleared."
              codeLabel="Follow This Link"
              url="https://www.mitoredlight.com/EDEN27299"
            />
          </div>
        </section>

        <div className="section-divider" />

        {/* RedTherapy */}
        <section>
          <SectionHeader icon={<DollarSign className="w-6 h-6" />} title="RedTherapy — The Value Full-Body Play" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              RedTherapy (RedRush line) is the recommendation I make most consistently to people who want real, whole-body red light without committing to Joovv pricing. The entry point — the RedRush 400 Pulse — delivers 660nm and 850nm in a pulsed format for under $700, which is less than a third of Joovv's cheapest full-body panel. For anyone prioritising recovery, circulation, inflammation reduction, and sleep quality through full-body exposure, that irradiance-to-price ratio is genuinely hard to argue with.
            </p>
            <p>
              The pulsed format is worth understanding specifically. Pulsed near-infrared penetrates tissue differently from continuous wave, and some research suggests pulsed light may have advantages for deeper musculoskeletal and neurological targets. The evidence is not settled, but it's the direction serious researchers are currently exploring.
            </p>
            <div className="rounded-2xl border border-[#c4622d]/20 bg-[#c4622d]/5 p-5 space-y-3">
              <p className="font-semibold text-black">What you're trading off:</p>
              <ul className="space-y-2 text-sm text-black/65">
                <li className="flex gap-2"><span className="text-[#c4622d] font-bold mt-0.5">—</span><span><strong className="text-black">No FDA clearance or independent certification.</strong> RedTherapy panels are general wellness devices — the manufacturer's stated irradiance figures are not independently verified by a third party.</span></li>
                <li className="flex gap-2"><span className="text-[#c4622d] font-bold mt-0.5">—</span><span><strong className="text-black">No modular expansion system.</strong> You buy the panel that fits your goal now; growing the setup means buying additional separate units.</span></li>
                <li className="flex gap-2"><span className="text-[#c4622d] font-bold mt-0.5">—</span><span><strong className="text-black">Fewer wavelengths.</strong> Just 660nm + 850nm — no extended spectrum options like some premium lines offer.</span></li>
              </ul>
            </div>
            <p>
              For most people using red light for general recovery, joint support, circulation, and sleep quality improvement — rather than treating a diagnosed medical condition — those trade-offs are reasonable. You're trusting the manufacturer's numbers more than a third party's verification. That's a different risk profile, not an automatically worse outcome.
            </p>
          </div>

          <div className="mt-6">
            <AffiliateBlock
              brand="RedTherapy"
              tagline="Full body red light panels built for serious photobiomodulation practice. Powerful, reliable and competitively priced."
              code="THRIVETOOLS"
              url="https://redtherapy.co/?rfsn=7676047.c07132&utm_source=refersion&utm_medium=affiliate&utm_campaign=7676047.c07132"
            />
          </div>
        </section>

        <div className="section-divider" />

        {/* Decision Framework */}
        <section>
          <SectionHeader icon={<Zap className="w-6 h-6" />} title="Which One Do You Actually Buy" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              The practical decision tree is simple once you're clear on your primary goal:
            </p>

            <div className="space-y-4 mt-2">
              <div className="rounded-xl border border-black/10 bg-black/2 p-5">
                <p className="font-bold text-black mb-1">Recovery, inflammation, general full-body use — and price is not the constraint</p>
                <p className="text-sm">→ <strong>Joovv.</strong> The certification, the clinical pedigree, and the modular future-proofing justify the price if you're building a long-term protocol and want the most defensible option in terms of evidence and safety standards.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-black/2 p-5">
                <p className="font-bold text-black mb-1">Your main goal is your face — acne, fine lines, aging, redness</p>
                <p className="text-sm">→ <strong>Mito Red Light's mask line.</strong> Don't overspend on a full panel for a facial goal. The mask format delivers better skin-specific dosing at a fraction of the price, and it's specifically cleared for dermatological applications.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-black/2 p-5">
                <p className="font-bold text-black mb-1">You want real full-body coverage and irradiance without flagship pricing</p>
                <p className="text-sm">→ <strong>RedTherapy.</strong> The same core wavelengths, pulsed delivery, genuine full-body coverage starting under $700. For recovery, joint health, sleep, and systemic circulation — a strong practical choice.</p>
              </div>
            </div>

            <p className="mt-4">
              None of these are wrong choices. The wrong choice is buying the most expensive one because it's the most famous name when what you actually need is a $329 mask — or buying a mask when what you actually need is full-body panel coverage for joint recovery and sleep. Match the device to the goal, not the brand to the status signal.
            </p>

            <div className="rounded-2xl border border-black/10 bg-black/3 p-5">
              <p className="font-semibold text-black mb-2">A note on session duration and protocol:</p>
              <p className="text-sm">
                Red light therapy is a dose-response intervention — too little and you don't get the effect, too much and you can inhibit the response (biphasic dose response). Most well-studied protocols run 10–20 minutes per area at 6–12 inches for panels, or 10–15 minutes per session for masks. Consistency matters more than heroic sessions: daily or near-daily exposure at a reasonable dose outperforms infrequent high-dose sessions in the literature.
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* FAQ */}
        <section>
          <SectionHeader icon={<HelpCircle className="w-6 h-6" />} title="Common Questions" />
          <div className="space-y-8">
            <FaqItem question="Is red light therapy actually evidence-based or is it wellness hype?">
              <p>
                The core mechanism — photobiomodulation of cytochrome c oxidase — is real, well-characterised, and reproduced across thousands of studies. The clinical evidence for specific applications (wound healing, skin rejuvenation, musculoskeletal pain, and certain neurological applications) is strong and continues to grow. It's not hype. What is overstated is the range of conditions some brands claim it treats — stick to applications with genuine RCT-level evidence: skin, recovery, inflammation, and sleep quality.
              </p>
            </FaqItem>
            <FaqItem question="Do I need both 660nm and 850nm, or is one enough?">
              <p>
                Both matter — they work on different tissue depths. 660nm (visible red) penetrates primarily skin and superficial tissue — ideal for skin health, surface wound healing, and hair follicle stimulation. 850nm (near-infrared, invisible to the eye) penetrates deeper — reaching muscles, joints, bones, and in some contexts the brain through the skull. For general health and recovery, devices that include both wavelengths are more versatile than single-wavelength options.
              </p>
            </FaqItem>
            <FaqItem question="How close should I be to the panel?">
              <p>
                Irradiance drops with distance — the inverse square law applies. Most panel manufacturers provide irradiance charts at different distances; the "recommended treatment distance" is where the panel is calibrated to deliver its advertised dose. For Joovv and RedTherapy full-body panels, this is typically 6–12 inches. For Mito masks, distance is controlled by the mask format. Follow the specific manufacturer's guidance rather than generic advice.
              </p>
            </FaqItem>
            <FaqItem question="Is there any risk of eye damage?">
              <p>
                Near-infrared at 850nm is invisible, which is why devices typically include protective goggles. You will not feel it hitting your eyes, but it can cause damage. Always use the included eye protection, especially with full-body panels where the emitters are at head height. For facial masks, follow the manufacturer's specific eye safety guidance for that device.
              </p>
            </FaqItem>
            <FaqItem question="How long before I see results?">
              <p>
                Skin results (acne, texture, tone) typically show changes in 4–8 weeks of consistent daily use. Recovery and inflammation benefits are often felt faster — sometimes within the first week of regular sessions. Sleep quality improvements, if they occur, tend to present within 2–4 weeks. Red light is not an overnight intervention; it requires accumulated dose over time, which is why daily consistency matters more than session length.
              </p>
            </FaqItem>
            <FaqItem question="Can I use red light therapy every day?">
              <p>
                Yes, and daily use is generally the recommendation for most applications. The research supports daily sessions at appropriate dose levels. The caveat is the biphasic dose response — there is a dose ceiling above which additional light can inhibit rather than stimulate the effect. More time and higher irradiance is not always better; stick to evidence-based protocols rather than doubling session length in pursuit of faster results.
              </p>
            </FaqItem>
          </div>
        </section>

        <div className="section-divider" />

        {/* All three affiliate blocks */}
        <section className="space-y-4">
          <h2 className="font-display text-xl font-bold text-black">All Three — Discount Codes</h2>
          <AffiliateBlock
            brand="Joovv"
            tagline="The gold standard in full-body red light therapy. Modular, FDA-cleared, independently certified."
            code="THRIVETOOLS"
            url="https://joovv.com"
            reviewHref="/product-reviews/joovv-review"
          />
          <AffiliateBlock
            brand="Mito Red Light"
            tagline="FDA Class II cleared masks for skin-specific photobiomodulation. The smart choice if your goal is your face."
            codeLabel="Follow This Link"
            url="https://www.mitoredlight.com/EDEN27299"
          />
          <AffiliateBlock
            brand="RedTherapy"
            tagline="Full-body panels with legitimate irradiance, pulsed delivery, and a price that doesn't require a second mortgage."
            code="THRIVETOOLS"
            url="https://redtherapy.co/?rfsn=7676047.c07132&utm_source=refersion&utm_medium=affiliate&utm_campaign=7676047.c07132"
          />
        </section>

      </div>
    </PageLayout>
  );
}
