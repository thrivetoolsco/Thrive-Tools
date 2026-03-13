import PageLayout from "@/components/PageLayout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import blossomingImg from "@assets/Blossoming_Bliss_1_1773178753084.jpeg";

const pillars = [
  {
    number: 1,
    title: "Mindful Fuel",
    description:
      "Moving past \"diet culture.\" We'll talk about how food actually affects your mood, the art of intermittent fasting, and the ancient \"Three Treasures\" of energy.",
  },
  {
    number: 2,
    title: "Getting Your Hands Dirty",
    description:
      "Connecting with the earth isn't just a hobby. It's healing. We'll cover indoor/outdoor gardening, growing your own superfoods, and even the \"electroculture\" of plants.",
  },
  {
    number: 3,
    title: "The Spiritual Core",
    description:
      "No fluff, just real practices. Learn to use your breath as a superpower and find a daily rhythm that keeps you centered.",
  },
  {
    number: 4,
    title: "Movement as Protection",
    description:
      "We move to charge our energy, not just to \"workout.\" We'll explore how daily movement helps shield your system from the digital exhaustion of EMFs and radiation.",
  },
  {
    number: 5,
    title: "Longevity technologies",
    description:
      "Meet the high-tech side of healing. From grounding and EMF protection to electro-therapy and magnetic tools, we use modern tech to raise your vibration.",
  },
  {
    number: 6,
    title: "The Art of Sleep",
    description:
      "Sleep is the ultimate brain-detox. We'll dive into optimizing your rest, the magic of Lucid Dreaming, and Yoga Nidra (the best \"nap\" of your life).",
  },
];

export default function BlossomingBliss() {
  return (
    <PageLayout title="Blossoming Bliss Transformation" backLabel="Home" backHref="/">
      <div className="space-y-12" data-testid="section-blossoming-bliss">
        <div className="flex justify-center">
          <img loading="lazy" decoding="async"
            src={blossomingImg}
            alt="Blossoming Bliss Retreat"
            className="rounded-md max-w-full glow-rose"
            data-testid="img-blossoming-bliss"
          />
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-intro">
          <p className="text-[#e8a4b8] text-lg sm:text-xl font-display italic leading-relaxed" data-testid="text-subtitle">
            Blossoming Bliss: The Full-System Reset
          </p>
          <p className="text-black/60 font-medium text-base" data-testid="text-tagline">
            A Deep Dive into Living Well
          </p>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-opening">
            This isn't just a getaway; it's a toolkit for a life that doesn't feel like a constant uphill battle. I've pulled together the most effective practices I know into one intensive experience designed to get you back in sync with yourself.
          </p>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-pillars-intro">
            We're stripping back the noise and focusing on six pillars to help you feel human again:
          </p>
        </div>

        <div className="grid gap-6" data-testid="section-pillars">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="card-glass rounded-md p-6 sm:p-8 space-y-3"
              data-testid={`card-pillar-${pillar.number}`}
            >
              <h3 className="font-display text-xl font-bold text-gradient-rose" data-testid={`text-pillar-title-${pillar.number}`}>
                <span className="text-[#c97a8e] mr-2">{pillar.number}.</span>
                {pillar.title}
              </h3>
              <p className="text-black/80 leading-relaxed text-base" data-testid={`text-pillar-desc-${pillar.number}`}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-closing">
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-closing">
            You'll leave with more than just good memories. You'll have a roadmap to stay blissful and grounded, no matter how chaotic the "real world" gets.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4 text-center" data-testid="section-details">
          <h3 className="font-display text-2xl font-bold text-gradient-purple" data-testid="text-details-heading">
            Retreat Details
          </h3>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-duration">
            <span className="text-[#e8a4b8] font-semibold">Duration:</span> 7 days
          </p>
          <p className="text-black/70 leading-relaxed text-base italic" data-testid="text-customizable">
            All workshops & Retreats are customizable and are designed to meet your individual needs.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-rates">
          <h3 className="font-display text-2xl font-bold text-gradient-rose text-center mb-4" data-testid="text-rates-heading">
            Rates
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card-glass rounded-md p-5 text-center space-y-2" data-testid="card-rate-zoom">
              <p className="text-[#e8a4b8] font-display font-semibold text-lg">Zoom</p>
              <p className="text-black/70 text-sm">4 hours daily for 7 days</p>
              <p className="text-black font-bold text-2xl" data-testid="text-price-zoom">USD $1,540</p>
            </div>
            <div className="card-glass rounded-md p-5 text-center space-y-2" data-testid="card-rate-inperson">
              <p className="text-[#e8a4b8] font-display font-semibold text-lg">In Person</p>
              <p className="text-black/70 text-sm">Accommodation included</p>
              <p className="text-black font-bold text-2xl" data-testid="text-price-inperson">USD $3,300</p>
            </div>
          </div>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 text-center space-y-4" data-testid="section-globetrotter">
          <p className="text-black/70 leading-relaxed text-base">
            As a globetrotter, I am available for sessions worldwide. Whether you are in Canada, Asia, or anywhere in between, we can connect and work together :)
          </p>
          <Link href="/contact">
            <Button
              className="bg-[#c97a8e] border-[#c97a8e] text-white mt-2"
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
