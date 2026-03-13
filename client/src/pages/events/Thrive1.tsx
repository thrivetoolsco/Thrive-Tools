import PageLayout from "@/components/PageLayout";
import { ArrowRight, Clock, Mail } from "lucide-react";
import thriveImg from "@assets/IMG-20260307-WA0015_1772934779859.jpg";

export default function Thrive1() {
  return (
    <PageLayout title="Docu Evening: Thrive 1" backLabel="Events" backHref="/events">
      <div className="space-y-12" data-testid="section-thrive1">

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-intro">
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-intro">
            I'm stoked to invite you to a screening of <span className="text-[#e8a4b8] font-semibold">THRIVE 1: What on Earth Will It Take?</span> If you've ever felt like the "mainstream" story is missing a few chapters, this one's for you. It's an unconventional deep dive that follows the money to show how power is consolidated globally. But it doesn't just leave you hanging with the problems. It weaves together breakthroughs in science and consciousness to offer actual strategies for reclaiming our future.
          </p>
        </div>

        <div className="flex justify-center">
          <img loading="lazy" decoding="async"
            src={thriveImg}
            alt="Thrive 1: What on Earth Will It Take?"
            className="rounded-md max-w-full sm:max-w-sm glow-rose"
            data-testid="img-thrive1"
          />
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-why">
          <h3 className="font-display text-2xl font-bold text-gradient-purple" data-testid="text-why-heading">
            Why I'm Hosting This
          </h3>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-why-1">
            I've spent a lot of time digging into what it actually takes to thrive, not just survive the daily grind. This documentary was a massive "aha" moment for me. It connects the dots between global systems and our personal health in a way that's actually empowering instead of just overwhelming.
          </p>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-why-2">
            I wanted to create a space where we can watch this together, skip the small talk, and have some real conversations about where we're headed. Hope to see you there.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-details">
          <h3 className="font-display text-2xl font-bold text-gradient-purple text-center" data-testid="text-details-heading">
            Event Details
          </h3>
          <div className="flex flex-col items-center gap-3">
            <p className="text-black/80 leading-relaxed text-base" data-testid="text-cost">
              <span className="text-[#e8a4b8] font-semibold">Cost:</span> Free <span className="text-black/50 text-sm">(This is about community and awareness).</span>
            </p>
            <p className="text-black/80 leading-relaxed text-base flex items-center gap-2" data-testid="text-duration">
              <Clock className="w-4 h-4 text-[#c97a8e]" />
              <span><span className="text-[#e8a4b8] font-semibold">Duration:</span> 2h 15m of mind expanding info.</span>
            </p>
          </div>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-registration">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Mail className="w-5 h-5 text-[#c97a8e]" />
            <h3 className="font-display text-2xl font-bold text-gradient-rose" data-testid="text-registration-heading">
              Grab Your Spot
            </h3>
          </div>
          <p className="text-black/80 leading-relaxed text-base text-center" data-testid="text-registration">
            Registration is required. Just shoot a quick email to{" "}
            <a
              href="mailto:thrivetools.co@gmail.com"
              className="text-[#e8a4b8] underline underline-offset-4 decoration-[#c97a8e]/40"
              data-testid="link-email-registration"
            >
              thrivetools.co@gmail.com
            </a>{" "}
            to let me know you're coming.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 text-center space-y-4" data-testid="section-newsletter">
          <p className="text-black/70 leading-relaxed text-base" data-testid="text-newsletter">
            Want to stay in the loop on future dates and locations? Just send me an email and I'll add you to the list.
          </p>
          <a
            href="mailto:thrivetools.co@gmail.com?subject=Newsletter Subscription"
            className="inline-flex items-center gap-2 bg-violet-400 hover:bg-violet-500 text-white font-semibold px-6 py-3 rounded-full transition-colors mt-2"
            data-testid="link-events-subscribe"
          >
            thrivetools.co@gmail.com <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
