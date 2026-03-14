import PageLayout from "@/components/PageLayout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import cactuImg from "@assets/IMG-20260307-WA0011_1772934509415.jpg";

const theShift = [
  { label: "Breaking Loops", desc: "Unpacking self limiting beliefs and old habits." },
  { label: "Healing Roots", desc: "Moving through generational patterns and emotional blocks." },
  { label: "Real Connection", desc: "Shifting out of co-dependency and back into your own power." },
];

export default function MescalineWisdom() {
  return (
    <PageLayout title="Wachuma: Heart Centered Medicine" backLabel="Home" backHref="/">
      <div className="space-y-12" data-testid="section-mescaline-wisdom">

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-intro">
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-intro">
            Wachuma (San Pedro) has been used by Indigenous cultures for centuries, and there's a reason it's stood the test of time. Often called "Heart Medicine," it's less about a "trip" and more about clearing the static so you can finally connect with your Higher Self.
          </p>
        </div>

        <div className="flex justify-center">
          <img loading="lazy" decoding="async"
            src={cactuImg}
            alt="San Pedro cactus in the mountains"
            className="rounded-md max-w-full glow-rose"
            data-testid="img-mescaline-wisdom"
          />
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-shift">
          <h3 className="font-display text-2xl font-bold text-gradient-purple" data-testid="text-shift-heading">
            The Shift
          </h3>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-shift-intro">
            In a world full of noise, this is a sacred space to get quiet and look at the patterns holding you back. We're talking about:
          </p>
          <ul className="space-y-4">
            {theShift.map((item, i) => (
              <li key={i} className="flex items-start gap-3" data-testid={`shift-item-${i}`}>
                <Check className="w-5 h-5 text-[#7a9e6e] shrink-0 mt-0.5" />
                <p className="text-black/80 leading-relaxed text-base">
                  <span className="text-black font-semibold">{item.label}:</span> {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-result">
          <h3 className="font-display text-2xl font-bold text-gradient-purple" data-testid="text-result-heading">
            The Result
          </h3>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-result">
            You'll leave feeling grounded, empowered, and ready to move through life without that constant "brake" of fear or hesitation. It's about coming home to yourself.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-rates">
          <h3 className="font-display text-2xl font-bold text-gradient-rose text-center mb-4" data-testid="text-rates-heading">
            Rates
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card-glass rounded-md p-5 text-center space-y-2" data-testid="card-rate-individual">
              <p className="text-[#7a9e6e] font-display font-semibold text-lg">Individual</p>
              <p className="text-black font-bold text-2xl" data-testid="text-price-individual">USD $255/person</p>
            </div>
            <div className="card-glass rounded-md p-5 text-center space-y-2" data-testid="card-rate-group">
              <p className="text-[#7a9e6e] font-display font-semibold text-lg">Groups of 3+</p>
              <p className="text-black font-bold text-2xl" data-testid="text-price-group">USD $180/person</p>
            </div>
          </div>
          <p className="text-black/60 text-sm text-center mt-2" data-testid="text-camping">
            Camping included with all ceremonies.
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
              Sounds Great, Let's Schedule A Date <ArrowRight className="w-4 h-4 ml-2" />
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
