import PageLayout from "@/components/PageLayout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Film, Mail } from "lucide-react";

export default function Thrive1() {
  return (
    <PageLayout title="Docu Evening: Thrive 1" backLabel="Events" backHref="/events">
      <div className="space-y-12" data-testid="section-thrive1">
        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-intro">
          <p className="text-[#e8a4b8] text-lg sm:text-xl font-display italic leading-relaxed" data-testid="text-invitation">
            I have the honour to invite you to our upcoming Docu Evening.
          </p>
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-screening">
            The incredibly inspiring documentary{" "}
            <span className="text-[#e8a4b8] font-semibold">THRIVE 1: what on earth will it take</span>, will be screened.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-description">
          <div className="flex items-center gap-2 mb-2">
            <Film className="w-5 h-5 text-[#c97a8e]" />
            <h2 className="font-display text-2xl font-bold text-gradient-rose" data-testid="text-about-heading">
              About the Documentary
            </h2>
          </div>
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-description">
            THRIVE is an unconventional documentary that lifts the veil on what's REALLY going on in our world by following the money upstream -- uncovering the global consolidation of power in nearly every aspect of our lives. Weaving together breakthroughs in science, consciousness and activism, THRIVE offers real solutions, empowering us with unprecedented and bold strategies for reclaiming our lives and our future.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-details">
          <h3 className="font-display text-2xl font-bold text-gradient-purple text-center" data-testid="text-details-heading">
            Event Details
          </h3>
          <div className="flex flex-col items-center gap-3">
            <p className="text-white/80 leading-relaxed text-base" data-testid="text-cost">
              <span className="text-[#e8a4b8] font-semibold">Cost:</span> Free
            </p>
            <p className="text-white/80 leading-relaxed text-base flex items-center gap-2" data-testid="text-duration">
              <Clock className="w-4 h-4 text-[#c97a8e]" />
              <span><span className="text-[#e8a4b8] font-semibold">Duration :</span> 2 h 15 m</span>
            </p>
          </div>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-registration">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Mail className="w-5 h-5 text-[#c97a8e]" />
            <h3 className="font-display text-2xl font-bold text-gradient-rose" data-testid="text-registration-heading">
              Registration
            </h3>
          </div>
          <p className="text-white/80 leading-relaxed text-base text-center" data-testid="text-registration">
            Registration required{" "}
            <a
              href="mailto:thrivetools.co@gmail.com"
              className="text-[#e8a4b8] underline underline-offset-4 decoration-[#c97a8e]/40"
              data-testid="link-email-registration"
            >
              thrivetools.co@gmail.com
            </a>
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 text-center space-y-4" data-testid="section-newsletter">
          <p className="text-white/70 leading-relaxed text-base" data-testid="text-newsletter">
            Stay updated on the dates and locations of each event by subscribing to my newsletter.
          </p>
          <Link href="/events">
            <Button
              className="bg-[#c97a8e] border-[#c97a8e] text-white mt-2"
              data-testid="link-events-subscribe"
            >
              Subscribe to Newsletter <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
