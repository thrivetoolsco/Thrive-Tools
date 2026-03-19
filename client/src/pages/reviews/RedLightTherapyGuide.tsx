import { useState } from "react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Copy, Check } from "lucide-react";
import redLightPanelImg from "@assets/s-l1200_1773955600250.jpg";
import mitoGlowChartImg from "@assets/MitoGLOW-Comp-Chart_Final_1773955600225.jpg";

function CopyCodeButton({ code, href, label, testId }: { code: string; href: string; label: string; testId: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="card-glass rounded-2xl p-6 sm:p-8 flex flex-col items-center gap-5 text-center" data-testid="section-affiliate-code">
      <p className="text-black/60 text-sm uppercase tracking-widest font-semibold">Discount Code</p>
      <div className="flex items-center gap-3 bg-white/60 border border-black/10 rounded-xl px-6 py-3">
        <span className="font-mono font-bold text-2xl text-[#c4622d] tracking-widest" data-testid="text-discount-code">{code}</span>
        <button
          onClick={handleCopy}
          className="ml-2 p-2 rounded-lg hover:bg-black/5 transition-colors text-black/40 hover:text-black/70"
          aria-label="Copy discount code"
          data-testid="button-copy-code"
        >
          {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      {copied && <p className="text-green-600 text-xs font-medium">Copied to clipboard.</p>}
      <Button asChild size="lg" className="btn-gradient-rose text-white border-0 rounded-full px-8 text-sm tracking-widest uppercase font-semibold h-auto py-3.5">
        <a href={href} target="_blank" rel="noopener noreferrer" data-testid={testId} className="inline-flex items-center gap-2">
          {label} <ExternalLink className="w-4 h-4" />
        </a>
      </Button>
    </div>
  );
}

function VisitButton({ href, label, testId }: { href: string; label: string; testId: string }) {
  return (
    <div className="card-glass rounded-2xl p-6 sm:p-8 flex flex-col items-center gap-5 text-center" data-testid="section-affiliate-visit">
      <Button asChild size="lg" className="btn-gradient-rose text-white border-0 rounded-full px-8 text-sm tracking-widest uppercase font-semibold h-auto py-3.5">
        <a href={href} target="_blank" rel="noopener noreferrer" data-testid={testId} className="inline-flex items-center gap-2">
          {label} <ExternalLink className="w-4 h-4" />
        </a>
      </Button>
    </div>
  );
}

export default function RedLightTherapyGuide() {
  return (
    <PageLayout
      showShare
      title="Red Light Therapy: The Science, the Benefits, and the Devices Worth Buying in 2026"
      subtitle="What photobiomodulation actually does at a cellular level, where the evidence is strong, and the three brands I personally recommend"
      backLabel="Blog"
      backHref="/blog"
      seo={{
        title: "Red Light Therapy: Science, Benefits and Best Devices",
        description: "Red light therapy is one of the most researched biohacking tools available. Here's the science, the honest limitations, and the three devices I recommend.",
        canonical: "/blog/red-light-therapy-science-benefits-devices",
        ogType: "article",
        datePublished: "2025-10-15",
      }}
    >
      <article className="space-y-12">

        <div className="card-glass rounded-2xl overflow-hidden" data-testid="img-hero-red-light">
          <img
            loading="eager"
            decoding="async"
            src={redLightPanelImg}
            alt="Woman standing beside a Mito Red Light full-body panel showing the health and wellness benefits of red light therapy"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border border-[#c4622d]/25 rounded-full px-3 py-0.5 text-xs">
            Complete Guide
          </Badge>
          <Badge className="bg-white/5 text-black/50 border border-white/10 rounded-full px-3 py-0.5 text-xs">
            Updated October 2025
          </Badge>
        </div>

        <section data-testid="section-intro">
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p className="text-pretty">
              Red light therapy has moved from clinical dermatology offices to biohacker home setups to mainstream wellness culture in the space of about a decade. With that journey comes the inevitable mix of genuine science, exaggerated claims, and a flood of devices ranging from legitimate to useless.
            </p>
            <p className="text-pretty">
              I want to give you the honest version. What photobiomodulation actually does at a cellular level. What the research genuinely supports, and where the evidence is still developing. What to look for in a device. And the three brands I personally recommend at different price points and use cases.
            </p>
          </div>
        </section>

        <section data-testid="section-what-is">
          <h2 className="text-2xl font-semibold text-black/90 mb-5">What Red Light Therapy Actually Is</h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p className="text-pretty">
              Red light therapy, also called photobiomodulation (PBM) or low-level light therapy, uses specific wavelengths of red and near-infrared light to stimulate biological processes at the cellular level. NASA originally began experimenting with red light therapy on plant growth in space and then to help heal wounds in astronauts. Other potential uses began to be investigated from there, and red light therapy is already widely medically accepted in its application in photodynamic therapy.
            </p>
            <p className="text-pretty">
              In 2015, the National Library of Medicine made photobiomodulation a Medical Subject Heading term. Since then there has been a major increase in published studies validating the science. The word for it might be new, but studies evaluating the effects of red light on biology date back to the 1960s.
            </p>
            <p className="text-pretty">
              The mechanism is specific and well understood. One key chromophore in the mitochondria is Cytochrome C Oxidase, which is very responsive to specific wavelengths of light in the red and near-infrared spectrum. When activated, it causes cells to produce more energy, allowing them to undergo self-repair and wound healing. The direct effects of photon absorption include increases in ATP, a brief burst of reactive oxygen species, an increase in nitric oxide, and modulation of calcium levels. This induces the activation of numerous intracellular signalling pathways leading to cell survival, proliferation, tissue repair, and regeneration.
            </p>
            <p className="text-pretty">
              In plain terms: red and near-infrared light penetrates the skin and is absorbed by the mitochondria, your cells' energy production system. This triggers a cascade of repair and regeneration processes that would otherwise require more time or more stress to initiate.
            </p>
            <p className="text-pretty">
              The therapeutic wavelength window is specific. Light in the spectral range from 600 to 1300 nm is useful for promoting wound healing, tissue repair, and skin rejuvenation because of the combination of high penetration depth and absorption by respiratory chain components. The two most researched and consistently effective wavelengths are 660 nm (red) and 850 nm (near-infrared), which is why virtually every quality device on the market uses at least these two.
            </p>
          </div>
        </section>

        <section data-testid="section-research">
          <h2 className="text-2xl font-semibold text-black/90 mb-5">What the Research Actually Shows</h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p className="text-pretty">
              Being honest about the evidence matters here because the claims made around red light therapy vary enormously in their evidentiary basis. Some applications have robust clinical support. Others are promising but early. Here is an honest breakdown.
            </p>
          </div>

          <div className="space-y-8 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-black/80 mb-3">Skin health and collagen. Strong evidence.</h3>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p className="text-pretty">
                  Research shows red light therapy may smooth skin and help with wrinkles. Researchers think it does this by stimulating collagen production, which helps improve skin elasticity, and by helping improve signs of sun damage. A study measured the effectiveness of a red light therapy mask after three months of use and found an improvement in skin quality including reversed visible signs of aging, with results lasting up to a month after stopping therapy.
                </p>
                <p className="text-pretty">
                  A controlled trial of 136 volunteers found that polychromatic non-thermal photobiomodulation for skin rejuvenation produced high patient satisfaction rates and can extend the spectrum of anti-aging treatment options available to patients looking for mild and pleasant light-only skin rejuvenation.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black/80 mb-3">Hair growth. Strong evidence.</h3>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p className="text-pretty">
                  Red light therapy has robust evidence for hair growth. The original discovery came when a Hungarian scientist investigating whether red light caused skin cancer in mice found instead that those receiving red light treatment sprouted more hair. Additional studies in mice and in humans bolstered evidence of red light's ability to generate hair growth.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black/80 mb-3">Cognitive function and brain health. Promising and growing.</h3>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p className="text-pretty">
                  This is the area of red light therapy research I find most exciting from a{" "}
                  <Link href="/product-reviews/biohacking-beginners-guide" className="text-[#c4622d] hover:underline font-medium">
                    biohacking
                  </Link>{" "}
                  perspective. A randomised trial found that red-light photobiomodulation at 630 nm improved cognition and neuropsychiatric symptoms in post-stroke cognitive impairment, with the mechanism involving activation of formaldehyde dehydrogenase, modulation of formaldehyde metabolism, and attenuation of oxidative stress.
                </p>
                <p className="text-pretty">
                  A 2021 research review found that in all 10 studies included, red light therapy had benefits for people with dementia. In one of the studies, five people with dementia who had regular light therapy on their heads and through their noses for 12 weeks had better memories, slept better, and were angry less often.
                </p>
                <p className="text-pretty">
                  A 2021 study exposed participants to red light therapy for six minutes daily for eight weeks and saw positive cognitive improvements with no significant adverse effects in people with mild to moderate dementia.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black/80 mb-3">Pain and inflammation. Moderate evidence.</h3>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p className="text-pretty">
                  Red light therapy may be effective in reducing pain and inflammation. A review of literature analysed how well photobiomodulation works to reduce chronic and acute pain and reported significant improvements. In many instances of chronic pain, however, the pain returned within weeks of ending therapy.
                </p>
                <p className="text-pretty">
                  An umbrella review of meta-analyses of RCTs on photobiomodulation found positive effects across multiple pain conditions including temporomandibular disorder, rheumatoid arthritis, plantar fasciitis, knee osteoarthritis, fibromyalgia, myofascial neck pain, carpal tunnel syndrome, and diabetic foot ulcers.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black/80 mb-3">Athletic recovery. Promising but developing.</h3>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p className="text-pretty">
                  The recovery and performance data is encouraging but not yet as robust as the skin and pain literature. The mechanism is sound: increased ATP production, faster cellular repair, reduced inflammatory markers. The anecdotal evidence from athletes is consistent. More large-scale RCTs are needed before definitive claims can be made. If you are also building a{" "}
                  <Link href="/product-reviews/biohacking-supplements-2026" className="text-[#c4622d] hover:underline font-medium">
                    supplement stack for performance and recovery
                  </Link>
                  , red light therapy stacks well with the compounds covered there.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black/80 mb-3">What to be honest about.</h3>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p className="text-pretty">
                  While hair regeneration and wrinkle reduction have fairly robust evidence, other applications such as improving athletic performance lack the same quality of data. The research overall is building and the direction is consistently positive. But it would be dishonest to present every claimed benefit as equally well-established.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section data-testid="section-wavelengths">
          <h2 className="text-2xl font-semibold text-black/90 mb-5">The Wavelengths That Matter</h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p className="text-pretty">
              Not all red light devices are equal, and wavelength is the most important technical specification.
            </p>
            <p className="text-pretty">
              <strong className="text-black/80">660 nm (red light).</strong> The most researched wavelength for skin-level photobiomodulation. Penetrates approximately 2 to 3 centimetres into tissue. Primary applications: skin rejuvenation, collagen stimulation, wound healing, surface inflammation.
            </p>
            <p className="text-pretty">
              <strong className="text-black/80">850 nm (near-infrared).</strong> Penetrates deeper than visible red light, reaching muscles, joints, and bone tissue. Less visible to the naked eye but biologically active. Primary applications: muscle recovery, joint pain, deep tissue inflammation, and the cognitive applications where deeper brain penetration is relevant.
            </p>
            <p className="text-pretty">
              <strong className="text-black/80">630 nm.</strong> Also used in several clinical studies, particularly for cognitive and skin applications. Present in some multi-wavelength devices.
            </p>
            <p className="text-pretty">
              <strong className="text-black/80">810 nm and 830 nm.</strong> Additional near-infrared wavelengths used in some premium devices for enhanced deep tissue penetration.
            </p>
            <p className="text-pretty">
              The devices I recommend below use combinations of these clinically validated wavelengths, not arbitrary combinations designed to look impressive on a spec sheet.
            </p>
          </div>
        </section>

        <section data-testid="section-how-to-use">
          <h2 className="text-2xl font-semibold text-black/90 mb-5">How to Use Red Light Therapy Properly</h2>
          <div className="space-y-5 text-black/70 leading-relaxed">
            <p className="text-pretty">
              <strong className="text-black/80">Distance matters.</strong> Most devices recommend 15 to 30 cm from the skin surface. Closer increases intensity but reduces coverage area. Further reduces dose. Follow the specific guidance for your device. It is not a case of more is always better.
            </p>
            <p className="text-pretty">
              <strong className="text-black/80">Session length.</strong> Photobiomodulation is not a one-time treatment. You need to use it consistently to see the best results. Researchers are still working to determine how long and how often to use red light therapy for optimal results. Most protocols use 10 to 20 minutes per area, 3 to 5 times per week. Daily use is fine for most applications. The consistency principle applies here just as it does with{" "}
              <Link href="/blog/mouth-breathing-mouth-taping" className="text-[#c4622d] hover:underline font-medium">
                breathwork and other daily practices
              </Link>
              : the benefits are cumulative.
            </p>
            <p className="text-pretty">
              <strong className="text-black/80">Timing.</strong> Morning red light exposure supports circadian rhythm and energy. Evening near-infrared can support recovery and sleep. The cognitive research used morning sessions. Experiment and track what works for you.
            </p>
            <p className="text-pretty">
              <strong className="text-black/80">Eye protection.</strong> Always use the protective eyewear that comes with your device, or close your eyes during sessions. Direct eye exposure to high-intensity LEDs is not recommended.
            </p>
            <p className="text-pretty">
              <strong className="text-black/80">Consistency above everything.</strong> Two weeks of daily use produces noticeably different outcomes than occasional sessions.
            </p>
          </div>
        </section>

        <section data-testid="section-brands">
          <h2 className="text-2xl font-semibold text-black/90 mb-2">The Three Brands I Recommend</h2>
          <p className="text-black/60 mb-8 leading-relaxed">
            I have spent considerable time researching the red light therapy market. These are the three brands that clear every quality bar I care about: wavelength accuracy, irradiance, third-party testing, build quality, and honest marketing.
          </p>

          <div className="space-y-12">

            <div className="space-y-6" data-testid="section-joovv">
              <h3 className="text-xl font-semibold text-black/85">For Full Body Panels: Joovv</h3>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p className="text-pretty">
                  Joovv is the brand that pioneered the home red light therapy panel market and set the standard that everyone else is measured against. The Joovv device series offers full-body therapy with high-power red and near-infrared lights, gaining immense praise not just for the modern sleek designs but also for the skin benefits and therapeutic use for muscle recovery and pain management.
                </p>
                <p className="text-pretty">
                  Joovv's lights come in 660 nm and 850 nm wavelengths with third-party testing and certifications. The modular design means you can start with a smaller panel and expand to full-body coverage as your practice grows, connecting panels via Bluetooth app control.
                </p>
                <p className="text-pretty">
                  What sets Joovv apart is the combination of clinical-grade build quality, comprehensive warranty, and the ecosystem of accessories and app integration that makes daily use genuinely seamless. It is the premium option in the full-panel category and priced accordingly. For anyone serious about making red light therapy a daily practice rather than an occasional experiment, the build quality justifies the investment.
                </p>
              </div>
              <CopyCodeButton
                code="THRIVETOOLS"
                href="https://joovv.com"
                label="Shop Joovv"
                testId="link-affiliate-joovv"
              />
            </div>

            <div className="space-y-6" data-testid="section-mito">
              <h3 className="text-xl font-semibold text-black/85">For Face and Targeted Treatment: Mito Red Light Face Mask</h3>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p className="text-pretty">
                  For facial applications specifically, including skin rejuvenation, collagen stimulation, anti-aging, and the growing evidence base for transcranial photobiomodulation, a dedicated face mask delivers light at the optimal distance and coverage for the face without requiring you to position yourself in front of a panel.
                </p>
                <p className="text-pretty">
                  Mito Red Light has built a loyal following with its Enhanced Spectral Energy Output technology, combining science with experience and customer feedback to deliver red light therapy devices of the highest standard across a range of products from face masks to full-body panels. The MitoGLOW mask features 1,064 high-performance LEDs, four peak wavelengths, rotatable chin and neck therapy, and built-in eye protection, making it a meaningfully more capable device than most competing masks in the same category.
                </p>
                <p className="text-pretty">
                  For anyone whose primary interest is skin health, cognitive benefit from transcranial light exposure, or facial rejuvenation specifically, this is the most practical and targeted format available.
                </p>
              </div>

              <div className="card-glass rounded-2xl overflow-hidden" data-testid="img-mito-glow-chart">
                <img
                  loading="lazy"
                  decoding="async"
                  src={mitoGlowChartImg}
                  alt="MitoGLOW face mask comparison chart showing 1,064 LEDs, four peak wavelengths, rotatable chin therapy, and built-in eye protection versus competing brands"
                  className="w-full h-auto object-cover"
                />
              </div>

              <VisitButton
                href="https://www.mitoredlight.com/EDEN27299"
                label="Shop Mito Red Light"
                testId="link-affiliate-mito"
              />
            </div>

            <div className="space-y-6" data-testid="section-redtherapy">
              <h3 className="text-xl font-semibold text-black/85">For Value Full-Panel Coverage: RedTherapy</h3>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p className="text-pretty">
                  Red Therapy Co released their flagship product at approximately half the price of the equivalent Joovv panel. Each panel is classified as an official FDA Class II Medical Device and backed by a 60-day guarantee. The panel contains both near-infrared 850 nm and red 660 nm wavelengths and comes with an app that helps ensure you get the optimal dose of red light.
                </p>
                <p className="text-pretty">
                  RedTherapy is the brand I recommend for anyone who wants serious full-panel red light therapy without the Joovv price point. FDA Class II Medical Device classification is a meaningful quality distinction. It requires verified safety and efficacy data that most consumer wellness devices don't go through the process of obtaining. The 60-day money-back guarantee reflects genuine confidence in the product.
                </p>
                <p className="text-pretty">
                  For biohackers who want to build a daily full-body practice at a more accessible price point, RedTherapy delivers clinical-grade performance at a fraction of the cost of the premium alternatives.
                </p>
              </div>
              <CopyCodeButton
                code="THRIVETOOLS"
                href="https://redtherapy.co/?rfsn=7676047.c07132&utm_source=refersion&utm_medium=affiliate&utm_campaign=7676047.c07132"
                label="Shop RedTherapy"
                testId="link-affiliate-redtherapy"
              />
            </div>

          </div>
        </section>

        <section data-testid="section-which-device">
          <h2 className="text-2xl font-semibold text-black/90 mb-5">Which Device Is Right for You?</h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p className="text-pretty">
              <strong className="text-black/80">Start with RedTherapy</strong> if you want to build a full-body red light practice at the most accessible price point with genuine FDA clearance and a risk-free trial period.
            </p>
            <p className="text-pretty">
              <strong className="text-black/80">Choose Joovv</strong> if you want the premium full-panel ecosystem with modular expansion, app control, and the brand that set the clinical standard for home devices.
            </p>
            <p className="text-pretty">
              <strong className="text-black/80">Add the Mito Red Light face mask</strong> regardless of which panel you choose. It is the most practical format for facial skin health and transcranial photobiomodulation, and it complements rather than replaces a full-body panel.
            </p>
            <p className="text-pretty">
              If you are newer to building a biohacking protocol and want to understand how red light fits into the broader picture,{" "}
              <Link href="/personalized-guidance" className="text-[#c4622d] hover:underline font-medium">
                book a personalised guidance session
              </Link>{" "}
              and I can help you prioritise the interventions that will make the most difference for your specific situation.
            </p>
          </div>
        </section>

        <section data-testid="section-safety">
          <h2 className="text-2xl font-semibold text-black/90 mb-5">Safety: What You Need to Know</h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p className="text-pretty">
              Red light therapy appears to be safe and is not associated with any side effects, at least when used short-term and as directed. This therapy is not toxic, not invasive, and not as harsh as some topical skin treatments. Unlike the cancer-causing ultraviolet UV light from the sun or tanning booths, red light therapy does not use this type of light.
            </p>
            <p className="text-pretty">
              However, if products are misused, perhaps used too often or not according to directions, there is a chance your skin or eyes could be damaged if not protected. Always follow manufacturer guidelines and use the provided protective eyewear.
            </p>
            <p className="text-pretty">
              The long-term safety profile of home red light therapy devices is still being established through ongoing research. This is not a reason to avoid it, but it is a reason to use devices from brands that conduct independent third-party safety testing and to follow manufacturer guidelines.
            </p>
          </div>
        </section>

        <section data-testid="section-related">
          <h2 className="text-2xl font-semibold text-black/90 mb-5">Related Reading</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link href="/product-reviews/biohacking-supplements-2026" className="card-glass rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-black/80 text-sm">Best Biohacking Supplements in 2026</p>
              <p className="text-black/50 text-xs mt-1">The evidence-based stack for optimisers</p>
            </Link>
            <Link href="/product-reviews/biohacking-beginners-guide" className="card-glass rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-black/80 text-sm">Biohacking for Beginners: The Complete Starter Guide</p>
              <p className="text-black/50 text-xs mt-1">Where to start, in the right order</p>
            </Link>
            <Link href="/blog/mouth-breathing-mouth-taping" className="card-glass rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-black/80 text-sm">Mouth Breathing Is Quietly Ruining Your Health</p>
              <p className="text-black/50 text-xs mt-1">The simplest daily fix for sleep and cognition</p>
            </Link>
            <Link href="/personalized-guidance" className="card-glass rounded-xl p-4 hover:shadow-md transition-shadow">
              <p className="font-medium text-black/80 text-sm">Personalised Guidance with Eden</p>
              <p className="text-black/50 text-xs mt-1">Build a protocol tailored to your goals</p>
            </Link>
          </div>
        </section>

        <section data-testid="section-sources">
          <h2 className="text-2xl font-semibold text-black/90 mb-5">Sources</h2>
          <div className="space-y-2 text-sm text-black/60 leading-relaxed">
            <p>
              PMC 2025. Evidence-based consensus on the clinical application of photobiomodulation, Journal of the American Academy of Dermatology.{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/40253006/" target="_blank" rel="noopener noreferrer" className="text-[#c4622d] hover:underline">
                pubmed.ncbi.nlm.nih.gov/40253006
              </a>
            </p>
            <p>
              Frontiers in Neurology 2025. Red-light photobiomodulation improves cognition in post-stroke cognitive impairment.{" "}
              <a href="https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2025.1634701/full" target="_blank" rel="noopener noreferrer" className="text-[#c4622d] hover:underline">
                frontiersin.org
              </a>
            </p>
            <p>
              PMC 2025. Photobiomodulation umbrella review of meta-analyses across multiple health outcomes.{" "}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12326686/" target="_blank" rel="noopener noreferrer" className="text-[#c4622d] hover:underline">
                pmc.ncbi.nlm.nih.gov/PMC12326686
              </a>
            </p>
            <p>
              PMC. Controlled trial of red and near-infrared light treatment for skin rejuvenation.{" "}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3926176/" target="_blank" rel="noopener noreferrer" className="text-[#c4622d] hover:underline">
                pmc.ncbi.nlm.nih.gov/PMC3926176
              </a>
            </p>
            <p>
              Stanford Medicine 2025. Red light therapy: What the science says.{" "}
              <a href="https://med.stanford.edu/news/insights/2025/02/red-light-therapy-skin-hair-medical-clinics.html" target="_blank" rel="noopener noreferrer" className="text-[#c4622d] hover:underline">
                med.stanford.edu
              </a>
            </p>
            <p>
              UCLA Health 2025. 5 health benefits of red light therapy.{" "}
              <a href="https://www.uclahealth.org/news/article/5-health-benefits-red-light-therapy" target="_blank" rel="noopener noreferrer" className="text-[#c4622d] hover:underline">
                uclahealth.org
              </a>
            </p>
            <p>
              WebMD. Red Light Therapy: Effectiveness, Treatment, and Risks.{" "}
              <a href="https://www.webmd.com/skin-problems-and-treatments/red-light-therapy" target="_blank" rel="noopener noreferrer" className="text-[#c4622d] hover:underline">
                webmd.com
              </a>
            </p>
          </div>
        </section>

        <section data-testid="section-disclosure" className="border-t border-black/10 pt-8">
          <div className="space-y-3 text-xs text-black/45 leading-relaxed">
            <p>
              Affiliate Disclosure: This article contains affiliate links. I may earn a commission if you purchase through these links at no additional cost to you. I only recommend products I personally use and genuinely believe in.
            </p>
            <p>
              Medical Disclaimer: This article is for informational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional before beginning any new health practice, particularly if you have existing skin conditions, are pregnant, or have photosensitivity.
            </p>
          </div>
        </section>

      </article>
    </PageLayout>
  );
}
