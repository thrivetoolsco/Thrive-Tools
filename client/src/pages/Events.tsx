import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, Calendar, Sparkles } from "lucide-react";

const futureEvents = [
  { id: "docu-thrive-1", title: "Docu Evening: Thrive 1" },
  { id: "docu-thrive-2", title: "Docu Evening: Thrive 2" },
  { id: "drum-circle", title: "Drum Circle Breathwork" },
  { id: "cacao-ceremonies", title: "Cacao Ceremonies" },
  { id: "psilocybin-walk", title: "Psilocybin Forest Walk" },
];

const pastEvents = [
  { id: "ayahuasca-peru", title: "Ayahuasca Journey Peru" },
  { id: "indoor-gardening", title: "Indoor Edible Gardening" },
  { id: "food-forest", title: "Thriving Food Forest" },
];

export default function Events() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <PageLayout title="Events">
      <div className="space-y-16">
        <section className="card-glass rounded-md p-8 sm:p-10 text-center" data-testid="section-newsletter">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail className="w-5 h-5 text-[#c97a8e]" />
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white" data-testid="text-newsletter-heading">
              Subscribe to my Newsletter
            </h2>
          </div>
          <p className="text-white/50 text-sm mb-6" data-testid="text-newsletter-subtitle">No Spam, I promise</p>

          {subscribed ? (
            <div className="flex items-center justify-center gap-2 text-[#c97a8e]" data-testid="text-subscribe-confirmation">
              <Sparkles className="w-5 h-5" />
              <span className="font-medium">Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus-visible:ring-[#c97a8e]/50"
                data-testid="input-email"
              />
              <Button
                type="submit"
                className="bg-[#c97a8e] text-white border-[#c97a8e] shrink-0"
                data-testid="button-subscribe"
              >
                Subscribe <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </form>
          )}
        </section>

        <section data-testid="section-future-events">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-5 h-5 text-[#c97a8e]" />
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-gradient-rose" data-testid="text-future-events-heading">
                Future Events
              </h2>
            </div>
            <p className="text-white/40 text-sm ml-7" data-testid="text-future-events-subtitle">(click any event to learn more)</p>
          </div>

          <div className="grid gap-4">
            {futureEvents.map((event) => (
              <a
                key={event.id}
                href="#"
                className="card-glass hover-elevate rounded-md p-5 flex items-center justify-between gap-4 group transition-all duration-200 border-[rgba(201,122,142,0.25)]"
                style={{ borderColor: "rgba(201,122,142,0.25)" }}
                data-testid={`link-event-${event.id}`}
              >
                <span className="text-white font-medium group-hover:text-[#e8a4b8] transition-colors" data-testid={`text-event-${event.id}`}>
                  {event.title}
                </span>
                <ArrowRight className="w-4 h-4 text-[#c97a8e] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </a>
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
            <p className="text-white/40 text-sm ml-7" data-testid="text-past-events-subtitle">(click any event to learn more)</p>
          </div>

          <div className="grid gap-4">
            {pastEvents.map((event) => (
              <a
                key={event.id}
                href="#"
                className="card-glass hover-elevate rounded-md p-5 flex items-center justify-between gap-4 group transition-all duration-200"
                style={{ borderColor: "rgba(155,111,165,0.25)" }}
                data-testid={`link-event-${event.id}`}
              >
                <span className="text-white/80 font-medium group-hover:text-[#c4a0d4] transition-colors" data-testid={`text-event-${event.id}`}>
                  {event.title}
                </span>
                <ArrowRight className="w-4 h-4 text-[#9b6fa5] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </a>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
