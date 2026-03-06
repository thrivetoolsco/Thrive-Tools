import PageLayout from "@/components/PageLayout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function PersonalizedGuidance() {
  return (
    <PageLayout title="Personalized Guidance">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6" data-testid="section-guidance-text">
          <p className="text-xl sm:text-2xl font-display text-white/70 leading-relaxed" data-testid="text-guidance-intro">
            Personalized workshops, retreats and products recommendations that perfectly suit your needs.
          </p>

          <p className="text-white/70 leading-relaxed" data-testid="text-guidance-burnout">
            Whether you're navigating burnout, struggling with 3:00 AM insomnia, or just trying to feel human again, I'm here to help you cut through the noise.
          </p>

          <p className="text-white/70 leading-relaxed" data-testid="text-guidance-toolkit">
            I've curated a toolkit of high-quality supplements, tech-backed wellness gear, and body care that actually works. No 'miracle cures': just practical, science backed tools like transformational breathwork and quantum healing to help you recalibrate your nervous system.
          </p>

          <p className="text-white/70 leading-relaxed" data-testid="text-guidance-hustle">
            You don't need to 'hustle' your way to happiness. You just need the right resources to help you feel centered, energized, and, dare we say, actually excited for the day.
          </p>

          <p className="text-white/90 font-display text-lg font-semibold" data-testid="text-guidance-ready">
            Ready to feel better and upgrade your 'Human-ing'?
          </p>

          <p className="text-white/70 leading-relaxed" data-testid="text-guidance-click">
            Click{" "}
            <Link href="/contact" className="text-rose-400 underline font-semibold" data-testid="link-here-contact">
              HERE
            </Link>{" "}
            for a consultation with me, and I'll provide you with targeted recommendations that will help you make the right choice for your unique situation.
          </p>

          <div className="pt-4">
            <Link href="/contact">
              <Button
                className="bg-rose-500 border-rose-500 text-white"
                data-testid="button-consultation-cta"
              >
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>

        <div className="card-glass rounded-md glow-rose p-3" data-testid="container-guidance-image">
          <img
            src="https://i0.wp.com/thrivetools.co/wp-content/uploads/2023/07/PerGuid.webp?fit=506%2C800&ssl=1"
            alt="Personalized Guidance"
            className="rounded-md w-full h-auto"
            data-testid="img-personalized-guidance"
          />
        </div>
      </div>
    </PageLayout>
  );
}
