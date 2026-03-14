import PageLayout from "@/components/PageLayout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function PersonalizedGuidance() {
  return (
    <PageLayout title="Personalized Guidance">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6" data-testid="section-guidance-text">
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-guidance-intro">
            Between burnout, 3:00 AM ceiling staring, and the general chaos of life, just "feeling human" can feel like a full time job. I'm here to help you cut through the wellness noise and get straight to the stuff that actually makes a difference.
          </p>

          <p className="text-black/80 leading-relaxed text-base" data-testid="text-guidance-toolkit">
            I've spent years testing and curating a toolkit of high quality supplements, tech-backed gear, and body care that I actually trust. You won't find any "miracle cures" here. Just practical, science backed resources like breathwork and longevity tools designed to help your nervous system finally calm down.
          </p>

          <p className="text-black/80 leading-relaxed text-base" data-testid="text-guidance-hustle">
            You don't need to work harder to be happy. You just need the right resources to help you feel centered, energized, and dare I say, actually stoked for the day.
          </p>

          <p className="text-[#c4622d] font-display text-lg font-semibold" data-testid="text-guidance-ready">
            Ready to upgrade your human experience?
          </p>

          <p className="text-black/80 leading-relaxed text-base" data-testid="text-guidance-cta">
            If you're looking for a more personalized approach, let's chat. I'll help you navigate the options and find the specific tools that fit your life right now.
          </p>

          <div className="pt-2">
            <Link href="/contact">
              <Button
                className="btn-gradient-rose text-white"
                data-testid="button-consultation-cta"
              >
                Book a Consultation <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
