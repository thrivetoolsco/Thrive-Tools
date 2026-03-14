import PageLayout from "@/components/PageLayout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const benefits = [
  "Crushing anxiety & stress",
  "Deepening your meditation (without the struggle)",
  "Physical recovery & pain relief",
  "Getting your spark back",
];

const techStack = [
  "Vielight Photobiomodulation device",
  "Photon Genie",
];

export default function QuantumHealing() {
  return (
    <PageLayout
      title="Somatic Reset"
      subtitle="The High Vibe Nervous System Reset: Breathwork + Electro-Therapy"
    >
      <div className="space-y-12" data-testid="section-quantum-healing">

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-intro">
          <p className="text-[#14b8a6] font-semibold text-lg" data-testid="text-tagline">
            1hr 15min of Pure Cellular Bliss
          </p>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-intro">
            Ready to upgrade your system? This isn't your average relaxation session. We're combining ancient breathwork with cutting-edge Longevity tech to help you drop the mental noise and recalibrate your entire body. It's biohacking meets deep soul work.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-experience">
          <h3 className="font-display text-2xl font-bold text-gradient-purple" data-testid="text-experience-heading">
            The Experience
          </h3>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-experience-intro">
            We start with a cup of Gynostemma &amp; Reishi elixir: a literal "immortality tea" to prep your organs, while we talk on how to protect your energy. Then, we dive in:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3" data-testid="experience-item-1">
              <Check className="w-5 h-5 text-[#14b8a6] shrink-0 mt-0.5" />
              <p className="text-black/80 leading-relaxed text-base">
                <span className="text-black font-semibold">15 Min Precision Breathwork:</span> To shut off the "fight or flight" and get you centered.
              </p>
            </li>
            <li className="flex items-start gap-3" data-testid="experience-item-2">
              <Check className="w-5 h-5 text-[#14b8a6] shrink-0 mt-0.5" />
              <p className="text-black/80 leading-relaxed text-base">
                <span className="text-black font-semibold">The Tech Stack:</span> We use non-invasive tools like the Vielight Photobiomodulation device, and the Photon Genie. Think of it as a wireless charger for your cells, stimulating serotonin and clearing out the "junk" in your lymphatic system.
              </p>
            </li>
            <li className="flex items-start gap-3" data-testid="experience-item-3">
              <Check className="w-5 h-5 text-[#14b8a6] shrink-0 mt-0.5" />
              <p className="text-black/80 leading-relaxed text-base">
                <span className="text-black font-semibold">The Tesla Touch:</span> We use Purple Harmony Plates to get your energy field back in alignment.
              </p>
            </li>
          </ul>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-why">
          <h3 className="font-display text-2xl font-bold text-gradient-purple" data-testid="text-why-heading">
            Why do it?
          </h3>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-why-intro">
            If you're feeling burnt out, foggy, or just "off," this is the circuit breaker you need. Most people leave feeling lighter, insanely creative, and finally able to get a decent night's sleep. It's perfect for:
          </p>
          <ul className="space-y-3">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-center gap-3" data-testid={`benefit-item-${i}`}>
                <Check className="w-4 h-4 text-[#14b8a6] shrink-0" />
                <span className="text-black/80">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-rates">
          <h3 className="font-display text-2xl font-bold text-gradient-purple text-center" data-testid="text-rates-heading">
            Investment
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="card-glass rounded-md p-5 text-center space-y-2" data-testid="rate-1">
              <p className="text-2xl font-bold text-gradient-rose">$155 CAD</p>
              <p className="text-black/60 text-sm font-medium">Single Session</p>
              <p className="text-black/40 text-xs">75 min</p>
            </div>
            <div className="card-glass rounded-md p-5 text-center space-y-2" data-testid="rate-2">
              <p className="text-2xl font-bold text-gradient-rose">$250 CAD</p>
              <p className="text-black/60 text-sm font-medium">Deep Dive</p>
              <p className="text-black/40 text-xs">2 hrs</p>
            </div>
            <div className="card-glass rounded-md p-5 text-center space-y-2" data-testid="rate-3">
              <p className="text-2xl font-bold text-gradient-rose">$1080 CAD</p>
              <p className="text-black/60 text-sm font-medium">The Transformation</p>
              <p className="text-black/40 text-xs">10 sessions</p>
            </div>
          </div>
          <p className="text-center text-black/70 italic text-sm" data-testid="text-ten-sessions">
            You won't be the same person by the end of this, promise.
          </p>
          <p className="text-center text-black/60 text-sm" data-testid="text-wear-comfy">
            Wear something comfy.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 text-center space-y-4" data-testid="section-globetrotter">
          <p className="text-black/70 leading-relaxed text-base">
            As a globetrotter, I am available for sessions worldwide. Whether you are in Canada, Asia, or anywhere in between, we can connect and work together :)
          </p>
          <Link href="/contact">
            <Button
              className="btn-gradient-rose text-white mt-2"
              data-testid="link-schedule-cta"
            >
              Sounds Great - Let's Schedule A Date <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8" data-testid="section-disclaimer">
          <p className="text-black/40 text-xs leading-relaxed italic">
            This educational material is provided under freedom of speech for your information only. It is not intended to substitute for the medical expertise and advice of your health practitioners from whom we encourage you to seek advice about treatment or care. These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
