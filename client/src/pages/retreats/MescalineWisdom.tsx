import PageLayout from "@/components/PageLayout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const bulletItems = [
  "Self-limiting beliefs",
  "Emotional and mental blocks",
  "Unhealthy habits and addictions",
  "Damaging patterns",
  "Generational patterns",
  "Co-dependent relationships",
];

export default function MescalineWisdom() {
  return (
    <PageLayout title="Mescaline Wisdom" subtitle="Wachuma (San Pedro Mescaline Cactus)" backLabel="Home" backHref="/">
      <div className="space-y-12" data-testid="section-mescaline-wisdom">
        <div className="flex justify-center">
          <img
            src="https://i0.wp.com/thrivetools.co/wp-content/uploads/2023/03/mescaline_wisdom3.jpeg?fit=564%2C423&ssl=1"
            alt="Mescaline Wisdom - Wachuma San Pedro Cactus"
            className="rounded-md max-w-full sm:max-w-lg glow-rose"
            data-testid="img-mescaline-wisdom"
          />
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-description">
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-description-1">
            For centuries, Indigenous communities worldwide have utilized plant medicines like Wachuma (San Pedro) as a healing tool. These sacred plants have been integral to spiritual ceremonies, offering profound insights and deep healing for both individuals and communities.
          </p>
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-description-2">
            In contemporary times, the use of this mescaline cactus has become less taboo as more people recognize its potential for personal growth, emotional healing, and spiritual awakening. Scientific research is beginning to validate what Indigenous cultures have known for millennia.
          </p>
          <p className="text-[#e8a4b8] text-lg font-display font-semibold leading-relaxed" data-testid="text-heart-medicine">
            Wachuma is considered a "Heart medicine" that promotes a profound sense of connectedness and works towards elevating consciousness.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-solutions">
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-solutions-intro">
            During the ceremony you'll tap into your inner wisdom and will start finding personalized solutions for any:
          </p>
          <ul className="space-y-3 ml-4" data-testid="list-solutions">
            {bulletItems.map((item, i) => (
              <li key={i} className="text-white/70 text-base flex items-start gap-3" data-testid={`list-item-${i}`}>
                <span className="text-[#c97a8e] mt-1 shrink-0">&#8226;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-closing">
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-closing-1">
            It's a great opportunity to deepen many levels of your spiritual understanding and connect with the wisdom that resides within you. The ceremony creates a sacred space for transformation and self-realization.
          </p>
          <p className="text-[#e8a4b8] font-display font-semibold leading-relaxed text-lg" data-testid="text-closing-2">
            This experience will leave you feeling empowered, ready to embrace life without fear, hesitation, or resistance.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-rates">
          <h3 className="font-display text-2xl font-bold text-gradient-rose text-center mb-4" data-testid="text-rates-heading">
            Rates
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card-glass rounded-md p-5 text-center space-y-2" data-testid="card-rate-individual">
              <p className="text-[#e8a4b8] font-display font-semibold text-lg">Individual</p>
              <p className="text-white font-bold text-2xl" data-testid="text-price-individual">USD $255/person</p>
            </div>
            <div className="card-glass rounded-md p-5 text-center space-y-2" data-testid="card-rate-group">
              <p className="text-[#e8a4b8] font-display font-semibold text-lg">Groups of 3+</p>
              <p className="text-white font-bold text-2xl" data-testid="text-price-group">USD $180/person</p>
            </div>
          </div>
          <p className="text-white/60 text-sm text-center mt-2" data-testid="text-camping">
            Camping included with all ceremonies.
          </p>
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
              Sounds Great, Let's Schedule A Date <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
