import PageLayout from "@/components/PageLayout";
import { Clock, Mail, Check } from "lucide-react";
import thriveImg from "@assets/IMG-20260307-WA0016_1772935064209.jpg";

const topics = [
  { label: "The New Science", desc: "Unpacking the \"Unified Field\" (the stuff Einstein was looking for) in a way that actually makes sense." },
  { label: "Real Solutions", desc: "From decentralized energy to health cures that actually work." },
  { label: "Taking Back Control", desc: "Practical tools to reclaim our own authority and support a world that works for everyone." },
];

export default function Thrive2() {
  return (
    <PageLayout
      title="Docu Evening: Thrive 2"
      subtitle="Thursday Night Docs: Let's Talk Solutions — Weekly at 6:30 PM"
      backLabel="Events"
      backHref="/events"
    >
      <div className="space-y-12" data-testid="section-thrive2">

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-intro">
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-intro">
            I'm stoked to invite you to our weekly Docu Evenings. We're diving into <span className="text-[#14b8a6] font-semibold">THRIVE II: This is What it Takes</span>, and honestly, it's the shift in perspective we all kind of need right now.
          </p>
        </div>

        <div className="flex justify-center">
          <img loading="lazy" decoding="async"
            src={thriveImg}
            alt="Thrive II: This is What it Takes"
            className="rounded-md max-w-full sm:max-w-sm glow-rose"
            data-testid="img-thrive2"
          />
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-vibe">
          <h3 className="font-display text-2xl font-bold text-gradient-purple" data-testid="text-vibe-heading">
            The Vibe
          </h3>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-vibe">
            If the first film was about "what's going on," this one is about what we can actually do about it. It's a global journey looking at the legit breakthroughs in energy, health, and consciousness that the mainstream usually misses.
          </p>
          <p className="text-black/70 font-medium" data-testid="text-vibe-talking">We're talking:</p>
          <ul className="space-y-4">
            {topics.map((item, i) => (
              <li key={i} className="flex items-start gap-3" data-testid={`topic-item-${i}`}>
                <Check className="w-5 h-5 text-[#14b8a6] shrink-0 mt-0.5" />
                <p className="text-black/80 leading-relaxed text-base">
                  <span className="text-black font-semibold">{item.label}:</span> {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-5" data-testid="section-essentials">
          <h3 className="font-display text-2xl font-bold text-gradient-purple text-center" data-testid="text-essentials-heading">
            The Essentials
          </h3>
          <div className="flex flex-col items-center gap-4">
            <p className="text-black/80 leading-relaxed text-base" data-testid="text-cost">
              <span className="text-[#14b8a6] font-semibold">Cost:</span> Free <span className="text-black/50 text-sm">(It's about the community and the conversation).</span>
            </p>
            <p className="text-black/80 leading-relaxed text-base flex items-center gap-2" data-testid="text-duration">
              <Clock className="w-4 h-4 text-[#14b8a6]" />
              <span><span className="text-[#14b8a6] font-semibold">Duration:</span> 2h 30m of mind-bending info.</span>
            </p>
            <p className="text-black/80 leading-relaxed text-base flex items-center gap-2" data-testid="text-registration">
              <Mail className="w-4 h-4 text-[#14b8a6]" />
              <span>
                <span className="text-[#14b8a6] font-semibold">How to Join:</span> Shoot a quick email to{" "}
                <a
                  href="mailto:thrivetools.co@gmail.com"
                  className="text-[#14b8a6] underline underline-offset-4 decoration-[#14b8a6]/40"
                  data-testid="link-email"
                >
                  thrivetools.co@gmail.com
                </a>{" "}
                to grab your spot.
              </span>
            </p>
          </div>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 text-center" data-testid="section-closing">
          <p className="text-[#14b8a6] font-display text-lg italic" data-testid="text-closing">
            Come with an open mind. See you Thursday!
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
