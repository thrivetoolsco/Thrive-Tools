import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Mail, ArrowRight, Calendar } from "lucide-react";

const futureEvents = [
  { id: "docu-thrive-1", title: "Docu Evening: Thrive 1", href: "/events/thrive-1" },
  { id: "docu-thrive-2", title: "Docu Evening: Thrive 2", href: "/events/thrive-2" },
  { id: "drum-circle", title: "Drum Circle Breathwork", href: "/events/drum-circle" },
  { id: "cacao-ceremonies", title: "Cacao Ceremonies", href: "/events/cacao-ceremonies" },
  { id: "psilocybin-walk", title: "Psilocybin Forest Walk", href: "/events/psilocybin-forest-walk" },
];

const pastEvents = [
  { id: "ayahuasca-peru", title: "Ayahuasca Journey Peru", href: "/events/ayahuasca-journey" },
  { id: "indoor-gardening", title: "Indoor Edible Gardening", href: "/events/indoor-gardening" },
  { id: "food-forest", title: "Thriving Food Forest", href: "/events/food-forest" },
];

export default function Events() {
  return (
    <PageLayout title="Events">
      <div className="space-y-16">
        <section className="card-glass rounded-md p-8 sm:p-10 text-center" data-testid="section-newsletter">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail className="w-5 h-5 text-[#c97a8e]" />
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black" data-testid="text-newsletter-heading">
              Subscribe to my Newsletter
            </h2>
          </div>
          <p className="text-black/60 text-base leading-relaxed mb-6 max-w-md mx-auto" data-testid="text-newsletter-subtitle">
            Want to stay in the loop? Just send me an email and I'll add you to the list. No forms, no fuss. Just real updates.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:thrivetools.co@gmail.com?subject=Newsletter Subscription"
              className="inline-flex items-center gap-2 bg-[#c97a8e] hover:bg-[#b56d7e] text-white font-semibold px-6 py-3 rounded-full transition-colors"
              data-testid="link-subscribe-email"
            >
              <Mail className="w-4 h-4 shrink-0" />
              <span>thrivetools.co@gmail.com</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </section>

        <section data-testid="section-future-events">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-5 h-5 text-[#c97a8e]" />
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-gradient-rose" data-testid="text-future-events-heading">
                Future Events
              </h2>
            </div>
            <p className="text-black/40 text-sm ml-7" data-testid="text-future-events-subtitle">(click any event to learn more)</p>
          </div>

          <div className="grid gap-4">
            {futureEvents.map((event) => (
              <Link
                key={event.id}
                href={event.href}
                className="card-glass hover-elevate rounded-md p-5 flex items-center justify-between gap-4 group transition-all duration-200"
                style={{ borderColor: "rgba(201,122,142,0.25)" }}
                data-testid={`link-event-${event.id}`}
              >
                <span className="text-black font-medium group-hover:text-[#e8a4b8] transition-colors" data-testid={`text-event-${event.id}`}>
                  {event.title}
                </span>
                <ArrowRight className="w-4 h-4 text-[#c97a8e] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </Link>
            ))}
          </div>
        </section>

        <div className="section-divider" data-testid="divider-events" />

        <section data-testid="section-past-events">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-5 h-5 text-[#9b6fa5]" />
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-gradient-purple" data-testid="text-past-events-heading">
                Past Events
              </h2>
            </div>
            <p className="text-black/40 text-sm ml-7" data-testid="text-past-events-subtitle">(click any event to learn more)</p>
          </div>

          <div className="grid gap-4">
            {pastEvents.map((event) => (
              <Link
                key={event.id}
                href={event.href}
                className="card-glass hover-elevate rounded-md p-5 flex items-center justify-between gap-4 group transition-all duration-200"
                style={{ borderColor: "rgba(155,111,165,0.25)" }}
                data-testid={`link-event-${event.id}`}
              >
                <span className="text-black/80 font-medium group-hover:text-[#c4a0d4] transition-colors" data-testid={`text-event-${event.id}`}>
                  {event.title}
                </span>
                <ArrowRight className="w-4 h-4 text-[#9b6fa5] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
