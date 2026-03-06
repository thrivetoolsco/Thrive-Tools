import PageLayout from "@/components/PageLayout";
import { Clock, DollarSign, Mail, Film } from "lucide-react";

export default function Thrive2() {
  return (
    <PageLayout
      title="Docu Evening: Thrive 2"
      backLabel="Events"
      backHref="/events"
    >
      <div className="space-y-8">
        <div className="card-glass rounded-md p-6 sm:p-8" data-testid="card-invitation">
          <p className="text-white/80 text-lg leading-relaxed" data-testid="text-invitation">
            It is our privilege to extend an invitation to you for our forthcoming Docu Evening, scheduled to take place at 5:33 pm on September 9th, 2023.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8" data-testid="card-description">
          <div className="flex items-center gap-3 mb-4">
            <Film className="w-5 h-5 text-[#c97a8e]" />
            <h2 className="text-xl font-display font-semibold text-gradient-rose" data-testid="text-screening-title">
              About the Screening
            </h2>
          </div>
          <p className="text-white/70 leading-relaxed" data-testid="text-description">
            We'll screen the amazing THRIVE II: This is What it Takes brings viewers behind the scenes with the people and innovations that have the power to transform life for everyone. Follow a journey across the globe investigating the most promising solutions in energy, health, consciousness, and non-coercive self-organizing while unpacking the underlying science, principles, and strategies that make them possible. THRIVE II reveals compelling evidence that illustrates a new paradigm of science that Einstein was seeking, unveiling for the layperson an emerging coherent theory of the "Unified Field" and all that it implies. Inspiring trans-political, grass roots, and decentralized solutions, THRIVE II offers practical tools for reclaiming authority over our lives. From new sources of energy to breakthrough health cures, THRIVE II provides the insights and resources needed for viewers to take next steps in accessing and supporting the solutions that can truly create a world that works for everyone.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8" data-testid="card-details">
          <h2 className="text-xl font-display font-semibold text-gradient-purple mb-6" data-testid="text-details-title">
            Event Details
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3" data-testid="detail-registration">
              <Mail className="w-5 h-5 text-[#9b6fa5]" />
              <span className="text-white/70">
                Registration required{" "}
                <a
                  href="mailto:thrivetools.co@gmail.com"
                  className="text-[#e8a4b8] underline underline-offset-2"
                  data-testid="link-email"
                >
                  thrivetools.co@gmail.com
                </a>
              </span>
            </div>
            <div className="flex items-center gap-3" data-testid="detail-cost">
              <DollarSign className="w-5 h-5 text-[#9b6fa5]" />
              <span className="text-white/70">Cost: Free</span>
            </div>
            <div className="flex items-center gap-3" data-testid="detail-duration">
              <Clock className="w-5 h-5 text-[#9b6fa5]" />
              <span className="text-white/70">Duration : 2 h 30 m</span>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
