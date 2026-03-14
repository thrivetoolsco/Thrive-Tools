import PageLayout from "@/components/PageLayout";
import { ArrowRight, Check } from "lucide-react";
import danceImg from "@assets/IMG-20260307-WA0018_1772935245312.jpg";

const details = [
  { label: "Energy Exchange", desc: "$80 USD" },
  { label: "Get the Invite", desc: "These events happen in different spots. Join the newsletter to catch the next location and date." },
];

export default function CacaoCeremonies() {
  return (
    <PageLayout title="Cacao Ceremonies" backLabel="Events" backHref="/events">
      <div className="space-y-12" data-testid="section-cacao-ceremonies">

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-intro">
          <p className="text-[#14b8a6] text-lg sm:text-xl font-display italic leading-relaxed" data-testid="text-subtitle">
            Cacao & Ecstatic Dance: The Heart Reset
          </p>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-opening">
            Calling all free spirits. We're getting together to drink some magic, move our bodies, and actually connect.
          </p>
        </div>

        <div className="flex justify-center">
          <img loading="lazy" decoding="async"
            src={danceImg}
            alt="Cacao Ceremony and Ecstatic Dance"
            className="rounded-md max-w-full glow-rose"
            data-testid="img-cacao-ceremony"
          />
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-cacao">
          <h3 className="font-display text-2xl font-bold text-gradient-purple" data-testid="text-cacao-heading">
            What's the deal with Cacao?
          </h3>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-cacao">
            This isn't your average grocery store cocoa. We're using raw, ceremonial grade cacao: the stuff ancient cultures literally used as currency. It's packed with magnesium and antioxidants to give you a natural energy lift, but more importantly, it's "Heart Medicine." It helps drop the walls and gets the good vibes flowing before we hit the dance floor.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-experience">
          <h3 className="font-display text-2xl font-bold text-gradient-purple" data-testid="text-experience-heading">
            The Experience
          </h3>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-experience-1">
            We'll start with a cacao ceremony to get grounded, then move straight into ecstatic dance. Think of it as a moving meditation where you can use your breath to shake off whatever isn't serving you anymore. No "moves" required, no judgment. Just you, the music, and a room full of people vibing together.
          </p>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-experience-2">
            You'll leave feeling lighter, deeply connected, and genuinely joyful. It's a beautiful way to celebrate being alive.
          </p>
          <ul className="space-y-4 pt-2">
            {details.map((item, i) => (
              <li key={i} className="flex items-start gap-3" data-testid={`detail-item-${i}`}>
                <Check className="w-5 h-5 text-[#14b8a6] shrink-0 mt-0.5" />
                <p className="text-black/80 leading-relaxed text-base">
                  <span className="text-black font-semibold">{item.label}:</span> {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 text-center space-y-4" data-testid="section-newsletter">
          <p className="text-black/70 leading-relaxed text-base">
            Want to catch the next location and date? Just send me an email and I'll add you to the list.
          </p>
          <a
            href="mailto:thrivetools.co@gmail.com?subject=Newsletter Subscription"
            className="inline-flex items-center gap-2 btn-gradient-rose text-white font-semibold px-6 py-3 rounded-full transition-colors"
            data-testid="link-subscribe-newsletter"
          >
            thrivetools.co@gmail.com <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8" data-testid="section-disclaimer">
          <p className="text-black/40 text-xs leading-relaxed italic">
            This educational material is provided under freedom of speech for your information only. It is not intended to substitute for the medical expertise and advice of your health practitioners from whom we encourage you to seek advice about treatment or care. These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
