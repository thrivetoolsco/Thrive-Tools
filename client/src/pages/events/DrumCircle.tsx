import PageLayout from "@/components/PageLayout";
import { Check } from "lucide-react";
import drumImg from "@assets/A_woman_with_brown_curly_hair__playing_shamanic_dr_delpmaspu_1772935716507.png";

const details = [
  { label: "Cost", desc: "Totally free. Everyone is welcome." },
  { label: "What to Bring", desc: "If you've got a drum, bring it! If you can grab some firewood on your way, even better." },
  { label: "Weather Check", desc: "If it rains, we'll just push the date and catch the next clear night in August." },
];

export default function DrumCircle() {
  return (
    <PageLayout title="Drum Circle Breathwork" backLabel="Events" backHref="/events">
      <div className="space-y-12" data-testid="section-drum-circle">

        <div className="flex justify-center">
          <img loading="lazy" decoding="async"
            src={drumImg}
            alt="Drum Circle Breathwork"
            className="rounded-md max-w-full glow-rose"
            data-testid="img-drum-circle"
          />
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-intro">
          <p className="text-[#8aaa7a] text-lg font-display italic leading-relaxed" data-testid="text-opening">
            Every full moon this summer, we're heading to the bonfire to celebrate just being alive.
          </p>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-description">
            This isn't your typical breathwork session. We're pairing deep breathwork with the raw energy of live drumming to help you get out of your head and into a flow state. It's a space to shake off the stagnant vibes, clear out any heavy energy you've been carrying, and just... breathe.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-vibe">
          <h3 className="font-display text-2xl font-bold text-gradient-purple" data-testid="text-vibe-heading">
            The Vibe
          </h3>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-vibe">
            Expect some chanting, some "Aum-ing," and a lot of genuine connection. It's about finding that sense of wholeness within yourself while vibing with the people around you.
          </p>
          <ul className="space-y-4">
            {details.map((item, i) => (
              <li key={i} className="flex items-start gap-3" data-testid={`detail-item-${i}`}>
                <Check className="w-5 h-5 text-[#8aaa7a] shrink-0 mt-0.5" />
                <p className="text-black/80 leading-relaxed text-base">
                  <span className="text-black font-semibold">{item.label}:</span> {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 text-center" data-testid="section-closing">
          <p className="text-[#8aaa7a] font-display text-lg italic" data-testid="text-closing">
            Come as you are. Let's make some noise and clear some space.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
