import PageLayout from "@/components/PageLayout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import forestWalkImg from "@assets/walk_1773178753116.jpeg";

const included = [
  { label: "The Integration", desc: "You won't just be left hanging. We'll wrap up with some practical tools to help you take that inner peace back into your daily life." },
  { label: "Fuel", desc: "I've got the snacks covered." },
  { label: "The Schedule", desc: "11 am – 6 pm." },
];

export default function PsilocybinForestWalk() {
  return (
    <PageLayout title="Psilocybin Forest Walk" backLabel="Events" backHref="/events">
      <div className="space-y-12" data-testid="section-psilocybin-forest-walk">

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-intro">
          <p className="text-[#c41230] text-lg sm:text-xl font-display italic leading-relaxed" data-testid="text-duration">
            7 Hours of Nature & Neural Re-wiring
          </p>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-opening">
            We all need a break from the noise. This is a day to slow down, leave the "hustle" behind, and actually reconnect with the world around you. We're heading into the forest for a mindful journey designed to open up those creative neural pathways and help you feel like you again.
          </p>
        </div>

        <div className="flex justify-center">
          <img loading="lazy" decoding="async"
            src={forestWalkImg}
            alt="Psilocybin Forest Walk"
            className="rounded-md max-w-full glow-rose"
            data-testid="img-forest-walk"
          />
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-flow">
          <h3 className="font-display text-2xl font-bold text-gradient-purple" data-testid="text-flow-heading">
            The Flow
          </h3>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-flow-1">
            Think of this as a gentle adventure in consciousness. As the mushrooms do their thing, the forest starts to look a bit different. You'll start to see how everything is connected and maybe find some new ways of thinking that weren't accessible behind a screen.
          </p>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-flow-2">
            Whether you're dealing with a heavy headspace or just want to feel more "alive," I'll be there to hold space and keep the vibes grounded while we walk.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-included">
          <h3 className="font-display text-2xl font-bold text-gradient-purple" data-testid="text-included-heading">
            What's Included
          </h3>
          <ul className="space-y-4">
            {included.map((item, i) => (
              <li key={i} className="flex items-start gap-3" data-testid={`included-item-${i}`}>
                <Check className="w-5 h-5 text-[#c41230] shrink-0 mt-0.5" />
                <p className="text-black/80 leading-relaxed text-base">
                  <span className="text-black font-semibold">{item.label}:</span> {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-rates">
          <h3 className="font-display text-2xl font-bold text-gradient-rose text-center mb-4" data-testid="text-rates-heading">
            Energy Exchange
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card-glass rounded-md p-5 text-center space-y-2" data-testid="card-rate-solo">
              <p className="text-[#c41230] font-display font-semibold text-lg">Solo Journey</p>
              <p className="text-black font-bold text-2xl" data-testid="text-price-solo">USD $320</p>
            </div>
            <div className="card-glass rounded-md p-5 text-center space-y-2" data-testid="card-rate-group">
              <p className="text-[#c41230] font-display font-semibold text-lg">Group Rate (3+ people)</p>
              <p className="text-black font-bold text-2xl" data-testid="text-price-group">USD $260 / person</p>
            </div>
          </div>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 text-center space-y-4" data-testid="section-cta">
          <p className="text-black/70 leading-relaxed text-base" data-testid="text-cta">
            Ready to clear your mental fog and uplift your vibes?
          </p>
          <Link href="/contact">
            <Button
              className="btn-gradient-rose text-white mt-2"
              data-testid="link-schedule"
            >
              Sounds great, let's schedule a date <ArrowRight className="w-4 h-4 ml-2" />
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
