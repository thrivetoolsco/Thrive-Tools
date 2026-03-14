import PageLayout from "@/components/PageLayout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import img1 from "@assets/IMG-20260307-WA0004_1772934376636.jpg";
import img2 from "@assets/IMG-20260307-WA0006_1772934376688.jpg";
import img3 from "@assets/IMG-20260307-WA0005_1772934376698.jpg";
import img4 from "@assets/IMG-20260307-WA0009_1772934376712.jpg";
import img5 from "@assets/IMG-20260307-WA0007_1772934376724.jpg";

const pillars = [
  { label: "Mind-Body Alignment", desc: "Stop fighting your energy and start fueling your purpose." },
  { label: "Practical Tools", desc: "No fluff. Just real world guidelines for a high vibe lifestyle." },
  { label: "Global Impact", desc: "Eat and live in a way that actually feels good for the planet, too." },
];

export default function SpiritualNutrition() {
  return (
    <PageLayout title="Spiritual Nutrition" backLabel="Home" backHref="/">
      <div className="space-y-12" data-testid="section-spiritual-nutrition">

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-intro">
          <p className="text-[#8aaa7a] text-lg sm:text-xl font-display italic leading-relaxed" data-testid="text-subtitle">
            Spiritual Nutrition: The 3 Day Digital Intensive
          </p>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-opening">
            We all know how hard it is to feel "aligned" when your body feels heavy or your brain is foggy. This isn't a typical diet or a restrictive detox. It's a 3 day deep dive into how what you consume physically, directly affects how you think, feel, and show up.
          </p>
        </div>

        <div className="flex justify-center">
          <img loading="lazy" decoding="async"
            src={img1}
            alt="Spiritual Nutrition"
            className="rounded-md max-w-full sm:max-w-md glow-rose"
            data-testid="img-spiritual-1"
          />
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-lowdown">
          <h3 className="font-display text-2xl font-bold text-gradient-purple" data-testid="text-lowdown-heading">
            The Lowdown
          </h3>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-lowdown-intro">
            We're looking at nutrition as a tool for mental and emotional freedom. By lightening the load on your system, we're clearing the path to that "quiet mind" state where everything just clicks.
          </p>
          <ul className="space-y-4">
            {pillars.map((pillar, i) => (
              <li key={i} className="flex items-start gap-3" data-testid={`pillar-item-${i}`}>
                <Check className="w-5 h-5 text-[#8aaa7a] shrink-0 mt-0.5" />
                <p className="text-black/80 leading-relaxed text-base">
                  <span className="text-black font-semibold">{pillar.label}:</span> {pillar.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4" data-testid="section-food-images">
          <img loading="lazy" decoding="async"
            src={img2}
            alt="Spiritual nutrition food"
            className="rounded-md w-full object-cover glow-rose"
            data-testid="img-spiritual-2"
          />
          <img loading="lazy" decoding="async"
            src={img3}
            alt="Spiritual nutrition food"
            className="rounded-md w-full object-cover glow-purple"
            data-testid="img-spiritual-3"
          />
          <img loading="lazy" decoding="async"
            src={img4}
            alt="Spiritual nutrition food"
            className="rounded-md w-full object-cover glow-purple"
            data-testid="img-spiritual-4"
          />
          <img loading="lazy" decoding="async"
            src={img5}
            alt="Spiritual nutrition food"
            className="rounded-md w-full object-cover glow-rose"
            data-testid="img-spiritual-5"
          />
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-join">
          <h3 className="font-display text-2xl font-bold text-gradient-purple" data-testid="text-join-heading">
            Join from Anywhere
          </h3>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-join-desc">
            I'm currently wandering the globe, but this intensive is 100% online. Whether you're hanging in Canada, South America, or anywhere else on the map, we can jump in and do the work together.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-investment">
          <h3 className="font-display text-2xl font-bold text-gradient-rose text-center" data-testid="text-investment-heading">
            Investment
          </h3>
          <div className="card-glass rounded-md p-6 text-center space-y-3" data-testid="card-rate-zoom">
            <p className="text-[#8aaa7a] font-display font-semibold text-lg">3 days online Zoom workshop</p>
            <p className="text-black/70 text-sm">From 10 am – 1 pm</p>
            <p className="text-black font-bold text-3xl" data-testid="text-price">USD $396</p>
          </div>
          <p className="text-center text-black/50 text-xs italic" data-testid="text-customizable">
            * All workshops & Retreats are customizable and are designed to meet your individual needs.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 text-center space-y-4" data-testid="section-cta">
          <Link href="/contact">
            <Button
              className="btn-gradient-rose text-white mt-2"
              data-testid="link-schedule-cta"
            >
              I Deserve This, Let's Schedule A Date <ArrowRight className="w-4 h-4 ml-2" />
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
