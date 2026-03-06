import PageLayout from "@/components/PageLayout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function InnerSilence() {
  return (
    <PageLayout title="Inner Silence" backLabel="Home" backHref="/">
      <div className="space-y-12" data-testid="section-inner-silence">
        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-intro">
          <p className="text-[#e8a4b8] text-lg sm:text-xl font-display font-semibold leading-relaxed" data-testid="text-opening">
            This silent retreat provides a safe and supportive space for you to dive deep into your truth seeking and journey of self-discovery.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="https://i0.wp.com/thrivetools.co/wp-content/uploads/2023/03/silent_retreat.jpeg?fit=564%2C1002&ssl=1"
            alt="Inner Silence Silent Retreat"
            className="rounded-md max-w-full sm:max-w-sm glow-purple"
            data-testid="img-inner-silence"
          />
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-description">
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-description-1">
            You will be accommodated in a modest, off-grid cabin located in the heart of a forest, surrounded by the soothing sounds of nature. This serene environment provides the perfect backdrop for deep introspection and spiritual growth, away from the distractions of modern life.
          </p>
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-description-2">
            This retreat is transcendental and unique of its kind as it will provide you with all the right tools you need to release inhibiting mental, emotional and behavioral patterns and find true inner peace, freedom, joy and love.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-details">
          <h3 className="font-display text-2xl font-bold text-gradient-purple text-center" data-testid="text-details-heading">
            Retreat Details
          </h3>
          <ul className="space-y-3 ml-4" data-testid="list-details">
            <li className="text-white/70 text-base flex items-start gap-3">
              <span className="text-[#c97a8e] mt-1 shrink-0">&#8226;</span>
              During the first 2 days, you will receive personal assistance and guidance to help you settle into the silence and establish your practice
            </li>
            <li className="text-white/70 text-base flex items-start gap-3">
              <span className="text-[#c97a8e] mt-1 shrink-0">&#8226;</span>
              Access to quantum technologies designed to accelerate healing and raise your vibrational frequency
            </li>
            <li className="text-white/70 text-base flex items-start gap-3">
              <span className="text-[#c97a8e] mt-1 shrink-0">&#8226;</span>
              Tonic herbs provided to nourish and balance the 3 treasures: Jing, Qi, and Shen
            </li>
            <li className="text-white/70 text-base flex items-start gap-3">
              <span className="text-[#c97a8e] mt-1 shrink-0">&#8226;</span>
              Intermittent fasting protocol with nourishing vegan meals
            </li>
            <li className="text-white/70 text-base flex items-start gap-3">
              <span className="text-[#c97a8e] mt-1 shrink-0">&#8226;</span>
              Off-grid cabin heated with a wood stove for a grounding, rustic experience
            </li>
            <li className="text-white/70 text-base flex items-start gap-3">
              <span className="text-[#c97a8e] mt-1 shrink-0">&#8226;</span>
              A minimum of 14 days is recommended for deep transformation and lasting results
            </li>
          </ul>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-rates">
          <h3 className="font-display text-2xl font-bold text-gradient-rose text-center mb-4" data-testid="text-rates-heading">
            Rates
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="card-glass rounded-md p-5 text-center space-y-2" data-testid="card-rate-14days">
              <p className="text-[#e8a4b8] font-display font-semibold text-lg">14 Days</p>
              <p className="text-white font-bold text-2xl" data-testid="text-price-14days">USD $3,300</p>
            </div>
            <div className="card-glass rounded-md p-5 text-center space-y-2" data-testid="card-rate-21days">
              <p className="text-[#e8a4b8] font-display font-semibold text-lg">21 Days</p>
              <p className="text-white font-bold text-2xl" data-testid="text-price-21days">USD $4,100</p>
            </div>
            <div className="card-glass rounded-md p-5 text-center space-y-2" data-testid="card-rate-1month">
              <p className="text-[#e8a4b8] font-display font-semibold text-lg">1 Month</p>
              <p className="text-white font-bold text-2xl" data-testid="text-price-1month">USD $5,000</p>
            </div>
          </div>
          <p className="text-white/60 text-sm text-center mt-2" data-testid="text-deposit">
            A damage deposit of $3,000 is required and will be fully refunded upon departure.
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
              Sounds Amazing, Let's Schedule A Date <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
