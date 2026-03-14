import PageLayout from "@/components/PageLayout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import silenceImg from "@assets/IMG-20260307-WA0014_1772934650614.jpg";

const toolkit = [
  { label: "The Transition", desc: "2 days of 1-on-1 guidance to help you settle into the stillness." },
  { label: "The Tech", desc: "Access to frequency tools to help shift your energy and deepen the healing." },
  { label: "The Fuel", desc: "Tonic herbs to balance your Jing, Qi, and Shen, plus an intermittent fasting protocol with clean, vegan meals." },
  { label: "The Timeline", desc: "While you can stay for less, I recommend 14 days to really let the transformation stick." },
];

export default function InnerSilence() {
  return (
    <PageLayout title="Inner Silence" backLabel="Home" backHref="/">
      <div className="space-y-12" data-testid="section-inner-silence">

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-intro">
          <p className="text-[#c94040] text-lg sm:text-xl font-display italic leading-relaxed" data-testid="text-subtitle">
            The Big Quiet: An Off-Grid Silent Retreat
          </p>
          <p className="text-black/60 font-medium text-base" data-testid="text-tagline">
            Unplug to Tune In
          </p>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-opening">
            When was the last time you actually heard yourself think? No notifications, no "hustle," just the woods and your own headspace. This is a dedicated space to drop the performance, get quiet, and finally meet yourself where you're at.
          </p>
        </div>

        <div className="flex justify-center">
          <img loading="lazy" decoding="async"
            src={silenceImg}
            alt="Inner Silence Silent Retreat"
            className="rounded-md max-w-full sm:max-w-sm glow-purple"
            data-testid="img-inner-silence"
          />
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-setup">
          <h3 className="font-display text-2xl font-bold text-gradient-purple" data-testid="text-setup-heading">
            The Setup
          </h3>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-setup">
            You'll be living in a minimalist, off grid cabin deep in the forest. It's rustic and grounding (think wood stoves and birdsong), the kind of reset your nervous system is probably screaming for.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-toolkit">
          <h3 className="font-display text-2xl font-bold text-gradient-purple" data-testid="text-toolkit-heading">
            The Toolkit
          </h3>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-toolkit-intro">
            To help you move through the mental noise, I've curated a high frequency support system:
          </p>
          <ul className="space-y-4">
            {toolkit.map((item, i) => (
              <li key={i} className="flex items-start gap-3" data-testid={`toolkit-item-${i}`}>
                <Check className="w-5 h-5 text-[#c94040] shrink-0 mt-0.5" />
                <p className="text-black/80 leading-relaxed text-base">
                  <span className="text-black font-semibold">{item.label}:</span> {item.desc}
                </p>
              </li>
            ))}
          </ul>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-toolkit-closing">
            You'll leave feeling lighter, clearer, and actually back in the driver's seat of your life.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-rates">
          <h3 className="font-display text-2xl font-bold text-gradient-rose text-center mb-4" data-testid="text-rates-heading">
            Rates
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="card-glass rounded-md p-5 text-center space-y-2" data-testid="card-rate-14days">
              <p className="text-[#c94040] font-display font-semibold text-lg">14 Days</p>
              <p className="text-black font-bold text-2xl" data-testid="text-price-14days">USD $3,300</p>
            </div>
            <div className="card-glass rounded-md p-5 text-center space-y-2" data-testid="card-rate-21days">
              <p className="text-[#c94040] font-display font-semibold text-lg">21 Days</p>
              <p className="text-black font-bold text-2xl" data-testid="text-price-21days">USD $4,100</p>
            </div>
            <div className="card-glass rounded-md p-5 text-center space-y-2" data-testid="card-rate-1month">
              <p className="text-[#c94040] font-display font-semibold text-lg">1 Month</p>
              <p className="text-black font-bold text-2xl" data-testid="text-price-1month">USD $5,000</p>
            </div>
          </div>
          <p className="text-black/60 text-sm text-center mt-2" data-testid="text-deposit">
            A damage deposit of $500 is required and will be fully refunded upon departure.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 text-center space-y-4" data-testid="section-globetrotter">
          <p className="text-black/70 leading-relaxed text-base">
            As a globetrotter, I am available to hold space worldwide. Whether you are in the US, Europe, or anywhere else on the planet, we can connect and work together.
          </p>
          <Link href="/contact">
            <Button
              className="btn-gradient-rose text-white mt-2"
              data-testid="link-schedule-cta"
            >
              Sounds Amazing, Let's Schedule A Date <ArrowRight className="w-4 h-4 ml-2" />
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
