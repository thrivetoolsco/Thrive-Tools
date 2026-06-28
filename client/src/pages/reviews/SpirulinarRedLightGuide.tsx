import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Zap, FlaskConical, Droplets, Sun, AlertTriangle, Leaf } from "lucide-react";

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

function StepCard({ number, title, subtitle, children }: { number: string; title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-black/8 bg-white/60 p-6 space-y-3" data-testid={`step-card-${number}`}>
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

function PigmentCard({ name, wavelength, children }: { name: string; wavelength: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-black/8 bg-white/60 p-6">
      <div className="flex items-baseline gap-3 mb-2">
        <h3 className="font-display text-lg font-bold text-black">{name}</h3>
        <span className="text-xs font-semibold text-[#c4622d] bg-[#c4622d]/10 px-2 py-0.5 rounded-full">{wavelength}</span>
      </div>
      <p className="text-black/70 leading-relaxed">{children}</p>
    </div>
  );
}

function RiskItem({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="mt-1 w-2 h-2 rounded-full bg-[#c4622d] flex-shrink-0" />
      <div className="text-black/70 leading-relaxed">
        <span className="font-semibold text-black">{title}:</span> {children}
      </div>
    </div>
  );
}

export default function SpirulinarRedLightGuide() {
  return (
    <PageLayout
      showShare
      title="Should You Take Spirulina Before Red Light Therapy?"
      subtitle="The Science of Chlorophyll Photodynamic Action"
      seo={{
        title: "Spirulina Before Red Light Therapy: The Science of Photodynamic Action | Thrive Tools",
        description: "Spirulina's chlorophyll and phycocyanin absorb directly in the red spectrum used by PBM panels. Here is the science behind using natural photosensitizers to amplify your mitochondrial response to light — and the exact protocol to do it safely.",
        canonical: "https://thrivetools.co/blog/spirulina-red-light-therapy-photodynamic-action",
        ogType: "article",
        datePublished: "2026-06-16",
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-12">

        <div className="flex flex-wrap gap-2 items-center">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25 text-xs font-semibold px-3 py-1 rounded-full">
            Red Light Therapy
          </Badge>
          <span className="text-black/40 text-sm">June 16, 2026</span>
        </div>

        <p className="text-lg text-black/75 leading-relaxed">
          Photobiomodulation (PBM) — commonly known as red light therapy — has exploded in popularity because of its ability to stimulate mitochondrial function, accelerate recovery, and reduce systemic inflammation. But advanced biohackers are asking a deeper question: <strong>Can we use safe, natural photosensitizers to amplify the cellular response to light?</strong>
        </p>

        <p className="text-black/70 leading-relaxed">
          This brings us to the intersection of <strong>spirulina</strong> and photodynamic action. Spirulina is packed with chlorophyll and phycocyanin — two pigments that interact profoundly with specific wavelengths of light.
        </p>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<FlaskConical className="w-6 h-6" />} title="The Science of Photodynamic Action" />
          <p className="text-black/70 leading-relaxed mb-5">
            When you undergo red light therapy, photons are absorbed by <strong>cytochrome c oxidase</strong>, a key enzyme in your cell's mitochondria. This triggers a cascade that boosts adenosine triphosphate (ATP) production — the fundamental energy currency of your cells.
          </p>
          <p className="text-black/70 leading-relaxed mb-6">
            When you introduce light-sensitive plant pigments into your bloodstream prior to exposure, you add a secondary biological accelerator. The two key pigments in spirulina align remarkably well with clinical red light panel wavelengths:
          </p>
          <div className="space-y-4">
            <PigmentCard name="Chlorophyll" wavelength="660–670nm peak">
              The green pigment responsible for photosynthesis absorbs light most efficiently in the blue spectrum, but has a secondary, highly significant absorption peak in the <strong>red spectrum (around 660nm to 670nm)</strong> — precisely the wavelength used in most clinical PBM panels.
            </PigmentCard>
            <PigmentCard name="Phycocyanin" wavelength="610–650nm peak">
              The unique blue pigment found exclusively in spirulina has an absorption peak right around <strong>610nm to 650nm</strong>, perfectly aligning with the orange-red light bands emitted by high-end clinical panels.
            </PigmentCard>
          </div>
          <p className="text-black/70 leading-relaxed mt-6">
            When these pigments absorb photons inside your tissue, they enter an excited state. This interaction triggers a mild, transient burst of singlet oxygen and reactive oxygen species (ROS). Far from being harmful, this acute, localized oxidative stress acts as a <strong>hormetic stressor</strong> — a positive biological shock that forces your cells to upregulate their own master antioxidant defenses, like glutathione and superoxide dismutase.
          </p>
        </section>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<Leaf className="w-6 h-6" />} title="Sourcing the Right Spirulina" />
          <p className="text-black/70 leading-relaxed mb-5">
            To allow chlorophyll and phycocyanin to be rapidly absorbed into your bloodstream before your light session, the spirulina must be pure, organically grown, and processed without high heat — which damages these delicate light-sensitive pigments.
          </p>
          <div className="rounded-2xl border border-[#c4622d]/20 bg-[#c4622d]/5 p-6 space-y-3">
            <p className="text-sm font-semibold text-[#8b3a1a] uppercase tracking-wide">Clinical Recommendation</p>
            <p className="text-black/75 leading-relaxed">
              The most biochemically intact, premium option on the market is{" "}
              <AffilLink href="https://energybits.com/?discount=EDEN10" label="ENERGYbits" />.
              Their tablets are made from 100% pure, non-GMO, organic spirulina that is gently processed to preserve the highest possible density of active chlorophyll and phycocyanin.
            </p>
            <p className="text-black/70">
              Use the code <strong className="text-[#c4622d]">EDEN10</strong> at checkout on energybits.com to save <strong>20%</strong> on your order.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<Zap className="w-6 h-6" />} title="The Pre-Light Optimization Protocol" />
          <p className="text-black/70 leading-relaxed mb-6">
            Timing and dosing are critical to harness photodynamic action without digestive discomfort or counterproductive effects.
          </p>
          <div className="space-y-4">
            <StepCard number="1" title="Ingest the Pigment Catalyst" subtitle="45 Minutes Before Exposure">
              <p>
                Take <strong>20 to 30 tablets</strong> of ENERGYbits spirulina with a full glass of water. It takes roughly 45 minutes for the compressed tablets to break down in the stomach and for the chlorophyll and phycocyanin to enter systemic circulation.
              </p>
            </StepCard>
            <StepCard number="2" title="Hydrate Systemically" subtitle="15 Minutes Before Exposure">
              <p>
                Drink an additional <strong>8–12 ounces of water</strong> with a pinch of sea salt or electrolytes. Photodynamic action requires optimal cellular hydration to efficiently facilitate electron transport and protect surrounding tissue.
              </p>
            </StepCard>
            <StepCard number="3" title="Target the 660nm Wavelength" subtitle="The Session">
              <p>
                Stand in front of your red light panel for <strong>10 to 15 minutes</strong>. Ensure your panel has a strong, dedicated output at 660nm (red), which directly targets the secondary absorption spectrum of the circulating chlorophyll. If your panel features near-infrared (850nm), run it simultaneously — it enhances deep tissue blood flow, pushing the pigments further into the musculature.
              </p>
            </StepCard>
            <StepCard number="4" title="The Mitigation Window" subtitle="Post-Session">
              <p>
                Avoid taking massive doses of synthetic antioxidants (like isolated Vitamin C or E) for at least <strong>two hours</strong> after this protocol. You want the acute, light-induced hormetic stress to signal your body to repair itself naturally.
              </p>
            </StepCard>
          </div>
        </section>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<AlertTriangle className="w-6 h-6" />} title="Potential Risks and Nuances" />
          <p className="text-black/70 leading-relaxed mb-5">
            While this protocol is a significant win for cellular performance, there are two key variables to keep in mind.
          </p>
          <div className="rounded-2xl border border-black/8 bg-white/60 p-6 space-y-4">
            <RiskItem title="Detoxification Pathways">
              Because spirulina is a potent binder and mobilizes heavy metals, combining it with the circulatory boost of red light can occasionally trigger a mild "healing crisis" (slight headache or fatigue) in individuals with high toxic burden. Start with a half-dose (<strong>10 tablets</strong>) to test your tolerance.
            </RiskItem>
            <RiskItem title="Hyperparathyroidism or Phenylketonuria (PKU)">
              Individuals with these specific metabolic or endocrine conditions should consult a clinical practitioner before utilizing high doses of algae.
            </RiskItem>
          </div>
        </section>

        <div className="section-divider" />

        <section>
          <SectionHeader icon={<Sun className="w-6 h-6" />} title="The Bottom Line" />
          <p className="text-black/70 leading-relaxed">
            By aligning the peak absorption of nature's most efficient light-harvesting molecules with targeted medical-grade wavelengths, you transform a standard red light session into a deeply restorative, high-yield mitochondrial workout.
          </p>
          <div className="mt-6 rounded-2xl border border-[#c4622d]/20 bg-[#c4622d]/5 p-6">
            <p className="text-black/75 leading-relaxed text-sm">
              Get your photodynamic fuel from <AffilLink href="https://energybits.com/?discount=EDEN10" label="ENERGYbits" /> — use code <strong className="text-[#c4622d]">EDEN10</strong> for 20% off. Pure, organic, gently processed spirulina is the only form worth using for this protocol.
            </p>
          </div>
        </section>

      </div>
    </PageLayout>
  );
}
