import PageLayout from "@/components/PageLayout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function SpiritualNutrition() {
  return (
    <PageLayout title="Spiritual Nutrition" backLabel="Home" backHref="/">
      <div className="space-y-12" data-testid="section-spiritual-nutrition">
        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-intro">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-gradient-rose leading-relaxed" data-testid="text-heading">
            A powerful 3 days online intensive that goes deep into a NUTRITIONAL APPROACH TO HEALING & FREEING YOUR THOUGHTS, EMOTIONS & BEHAVIORS
          </h2>
        </div>

        <div className="flex justify-center">
          <img
            src="https://i0.wp.com/thrivetools.co/wp-content/uploads/2023/03/spiritual-healing.jpeg?fit=564%2C564&ssl=1"
            alt="Spiritual Nutrition"
            className="rounded-md max-w-full sm:max-w-md glow-rose"
            data-testid="img-spiritual-nutrition"
          />
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-description">
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-description-1">
            This online workshop is designed for individuals who aspire to adopt a lifestyle that nurtures their physical, mental, and spiritual well-being while also contributing positively to the planet and all its inhabitants.
          </p>
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-description-2">
            As we purify and lighten our bodies, we enhance our connection to our higher selves, facilitating an easier and quicker ascension process. Quieting the mind allows for transcendence into a state of nothingness, paving the way for the mind to act as a conduit for light.
          </p>
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-description-3">
            This online workshop is designed to provide numerous practical tools and guidelines to help you align your body with your spiritual purpose and intention in life.
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
              Sounds Great - Let's Schedule A Date <ArrowRight className="w-4 h-4 ml-2" />
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
