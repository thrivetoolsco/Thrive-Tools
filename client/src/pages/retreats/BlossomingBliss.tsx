import PageLayout from "@/components/PageLayout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const themes = [
  {
    number: 1,
    title: "Nutrition",
    description:
      "The food we consume has a direct impact on our emotions and mental clarity. A 2021 study confirmed the strong connection between diet and emotional well-being.",
    bullets: [
      "Finding pleasure and nourishment in every meal",
      "Understanding the three treasures: Jing, Qi, and Shen",
      "Intermittent fasting and its benefits for body and spirit",
    ],
  },
  {
    number: 2,
    title: "Gardening",
    description:
      "Customized gardening workshops designed to reconnect you with the earth and its healing energies.",
    bullets: [
      "Indoor and outdoor gardening techniques",
      "Electroculture and its role in enhancing plant growth",
      "Growing your own medicinal herbs and superfoods",
    ],
  },
  {
    number: 3,
    title: "Spiritual",
    description:
      "Cultivating a positive attitude and deepening your spiritual connection through ancient and modern practices.",
    bullets: [
      "Harnessing your breath as your superpower",
      "Reconnecting to the Divine source within",
      "Daily spiritual practices for inner peace",
    ],
  },
  {
    number: 4,
    title: "Exercise",
    description:
      "Movement charges your energy bodies and strengthens your biofield, making EMFs and radiation have less effect on your well-being.",
    bullets: [
      "Consistent daily movement practice",
      "Exercises that charge and protect your energy bodies",
      "Understanding how movement mitigates EMF and radiation effects",
    ],
  },
  {
    number: 5,
    title: "Technologies",
    description:
      "Healing technologies that raise your frequency and support your body's natural healing abilities.",
    bullets: [
      "Enemas, grounding, and EMF protection",
      "Frequency machines and electro therapy",
      "Magnetic therapy and tachyon energy",
    ],
  },
  {
    number: 6,
    title: "Sleep",
    description:
      "The importance of sleep for brain health cannot be overstated. A 2019 JAMA study highlighted how proper sleep clears toxins from the brain and supports cognitive function.",
    bullets: [
      "Optimizing sleep for brain health and longevity",
      "Lucid dreaming techniques and their spiritual significance",
      "Yoga Nidra: the art of conscious sleep",
    ],
  },
];

export default function BlossomingBliss() {
  return (
    <PageLayout title="Blossoming Bliss Transformation" backLabel="Home" backHref="/">
      <div className="space-y-12" data-testid="section-blossoming-bliss">
        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-intro">
          <p className="text-[#e8a4b8] text-lg sm:text-xl font-display italic leading-relaxed" data-testid="text-opening">
            The aim of this retreat is to equip you with practical tools that will assist you in thriving in a state of harmony and bliss. It is the most comprehensive program I offer, a remarkable spiritual intensive that will elevate your inner self and rejuvenate your spirit.
          </p>
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-themes-intro">
            During this retreat, you will be empowered with holistic tools that revolve around six themes:
          </p>
        </div>

        <div className="grid gap-6" data-testid="section-themes">
          {themes.map((theme) => (
            <div
              key={theme.number}
              className="card-glass rounded-md p-6 sm:p-8 space-y-4"
              data-testid={`card-theme-${theme.number}`}
            >
              <h3 className="font-display text-xl font-bold text-gradient-rose" data-testid={`text-theme-title-${theme.number}`}>
                <span className="text-[#c97a8e] mr-2">{theme.number}.</span>
                {theme.title}
              </h3>
              <p className="text-white/80 leading-relaxed text-base" data-testid={`text-theme-desc-${theme.number}`}>
                {theme.description}
              </p>
              <ul className="space-y-2 ml-4" data-testid={`list-theme-${theme.number}`}>
                {theme.bullets.map((bullet, i) => (
                  <li key={i} className="text-white/70 text-sm flex items-start gap-2">
                    <span className="text-[#c97a8e] mt-1 shrink-0">&#8226;</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-closing">
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-closing">
            We'll share experiences that are beyond ordinary and you'll discover ways to live your truth and gain a blissful life right now wherever you are. This retreat is a journey of self-discovery and transformation that will leave you feeling renewed, empowered, and deeply connected to your authentic self.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="https://i0.wp.com/thrivetools.co/wp-content/uploads/2023/06/Blossoming_Bliss_1.webp?fit=1000%2C667&ssl=1"
            alt="Blossoming Bliss Retreat"
            className="rounded-md max-w-full glow-rose"
            data-testid="img-blossoming-bliss"
          />
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-details">
          <h3 className="font-display text-2xl font-bold text-gradient-purple text-center" data-testid="text-details-heading">
            Retreat Details
          </h3>
          <p className="text-white/80 leading-relaxed text-base text-center" data-testid="text-duration">
            <span className="text-[#e8a4b8] font-semibold">Duration:</span> 7 days
          </p>
          <p className="text-white/70 leading-relaxed text-base text-center italic" data-testid="text-customizable">
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
              <p className="text-white/70 text-sm">4 hours daily for 7 days</p>
              <p className="text-white font-bold text-2xl" data-testid="text-price-zoom">USD $1,540</p>
            </div>
            <div className="card-glass rounded-md p-5 text-center space-y-2" data-testid="card-rate-inperson">
              <p className="text-[#e8a4b8] font-display font-semibold text-lg">In Person</p>
              <p className="text-white/70 text-sm">Accommodation included</p>
              <p className="text-white font-bold text-2xl" data-testid="text-price-inperson">USD $3,300</p>
            </div>
          </div>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 text-center space-y-4" data-testid="section-globetrotter">
          <p className="text-white/70 leading-relaxed text-base">
            As a globetrotter, I am available for sessions worldwide. Whether you are in the US, Europe, or anywhere else on the planet, we can connect and work together.
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
          <p className="text-white/40 text-xs leading-relaxed italic">
            This educational material is provided under freedom of speech for your information only. It is not intended to substitute for the medical expertise and advice of your health practitioners from whom we encourage you to seek advice about treatment or care. These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
