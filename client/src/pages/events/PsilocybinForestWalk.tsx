import PageLayout from "@/components/PageLayout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function PsilocybinForestWalk() {
  return (
    <PageLayout title="Psilocybin Forest Walk" backLabel="Events" backHref="/events">
      <div className="space-y-10" data-testid="section-psilocybin-forest-walk">
        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-intro">
          <p className="text-[#e8a4b8] text-lg sm:text-xl font-display italic leading-relaxed" data-testid="text-opening">
            Gentle, mindful and consciousness expansion time in nature that'll release you from anything that is keeping you from being free or feeling alive.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="https://i0.wp.com/thrivetools.co/wp-content/uploads/2023/06/walk.webp?fit=1000%2C750&ssl=1"
            alt="Psilocybin Forest Walk"
            className="rounded-md max-w-full glow-rose"
            data-testid="img-forest-walk"
          />
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-journey">
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-journey">
            This journey is an opportunity to help you slow down, connect to your senses, notice your surroundings and reconnect to yourself and your environment.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-adventure">
          <p className="text-white font-bold leading-relaxed text-base" data-testid="text-adventure">
            You will experience a beautiful adventure in consciousness that'll reveal how everything is interconnected and interrelated.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-experience">
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-experience">
            This beautiful experience will help you align with your natural state of being as the psilocybin mushrooms play their magic to open your neural pathways to creative and new ways of thinking.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-study">
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-study">
            A 2021 study published in JAMA Psychiatry found that psilocybin therapy was effective in reducing symptoms of depression in 24 participants with treatment-resistant depression. The participants received two doses of psilocybin, along with psychotherapy, and showed significant improvements in depressive symptoms, anxiety, and anhedonia (loss of pleasure or interest in activities).
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-holding-space">
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-holding-space">
            I will hold space for you as we walk into the forest to enlighten our brains and free our minds.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-integration">
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-integration">
            Following the journey, I will equip you with practical tools to integrate your experience and create long lasting opportunities for inner peace and personal growth.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 text-center space-y-4" data-testid="section-rates">
          <p className="text-white font-bold text-xl" data-testid="text-time">
            From 11 am - 6 pm
          </p>
          <p className="text-white font-bold text-2xl" data-testid="text-rate-individual">
            USD $220/ person
          </p>
          <p className="text-white font-bold text-xl" data-testid="text-rate-group">
            USD $160/ person for groups of 3 or more
          </p>
          <p className="text-white font-bold text-lg" data-testid="text-snacks">
            Snacks included
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 text-center" data-testid="section-cta">
          <Link href="/contact">
            <Button
              variant="default"
              className="rounded-full text-base px-8"
              data-testid="link-schedule"
            >
              Sounds great, let's schedule a date
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
