import PageLayout from "@/components/PageLayout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, User, Heart, Briefcase } from "lucide-react";
import breathworkWide from "@assets/breathwork2_1773178753100.jpeg";
import breathworkPortrait from "@assets/breathwork_1773178753092.jpeg";

export default function Breathwork() {
  return (
    <PageLayout title="Breathwork">
      <div className="space-y-12" data-testid="section-breathwork">
        <div className="flex justify-center">
          <img loading="lazy" decoding="async"
            src={breathworkWide}
            alt="Breathwork practice"
            className="rounded-md max-w-full glow-purple"
            data-testid="img-breathwork-top"
          />
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-intro">
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-intro-1">
            Your breath has been with you since day one. It's the only thing that never leaves, yet most of us hardly notice it's there.
          </p>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-intro-2">
            We spend so much time caught in the "hustle" or stuck in "fight or flight" mode without even realizing it. This 1 hour session is a chance to finally hit the brakes. Whether you're looking to heal old patterns, navigate the stress of a corporate job, or just want to feel a little more comfortable in your own skin, this space is for you.
          </p>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-intro-3">
            We'll dive into simple, powerful techniques that you can actually use in your real life; not just on a yoga mat. It's about more than just "relaxing"; it's about shedding the versions of yourself that don't fit anymore so you can show up authentically. No fluff, just you and your breath, reconnecting.
          </p>
        </div>

        <div className="flex justify-center">
          <img loading="lazy" decoding="async"
            src={breathworkPortrait}
            alt="Breathwork session"
            className="rounded-md max-w-full sm:max-w-md glow-rose"
            data-testid="img-breathwork-mid"
          />
        </div>

        <h3 className="font-display text-2xl font-bold text-gradient-purple text-center" data-testid="text-sessions-heading">
          Breathwork Sessions
        </h3>

        <div className="card-glass rounded-md p-6 sm:p-8" data-testid="section-sessions">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="just-for-you" className="border-white/10" data-testid="accordion-just-for-you">
              <AccordionTrigger className="text-black/90 text-lg font-display hover:no-underline hover:text-black" data-testid="trigger-just-for-you">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#8aaa7a]/20 text-[#8aaa7a] shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <span>Breathwork just for You</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-black/80 leading-relaxed text-base space-y-4 pt-2" data-testid="content-just-for-you">
                <p data-testid="text-just-for-you-1">
                  This is for the people ready to stop skimming the surface and actually do the work. We aren't just "practicing breathing"; we're using your breath to get under the hood, unstick those old emotional blocks, and clear out the "noise" you've been carrying around.
                </p>
                <p data-testid="text-just-for-you-2">
                  Whether you're currently in the middle of a mess, looking for a bit more clarity, or just feel like there's a better version of you waiting to show up, we'll meet you exactly where you are. No fluff, just deep healing and a chance to finally feel like yourself again.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="couples" className="border-white/10" data-testid="accordion-couples">
              <AccordionTrigger className="text-black/90 text-lg font-display hover:no-underline hover:text-black" data-testid="trigger-couples">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#8aaa7a]/20 text-[#8aaa7a] shrink-0">
                    <Heart className="w-4 h-4" />
                  </div>
                  <span>Breathwork for Couples</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-black/80 leading-relaxed text-base space-y-4 pt-2" data-testid="content-couples">
                <p data-testid="text-couples-1">
                  Relationships can get noisy. This session is about hitting the "pause" button and actually getting back in sync with each other. By simply breathing together, you'll learn to pick up on each other's vibes without needing a million words to explain it.
                </p>
                <p data-testid="text-couples-2">
                  It's a low pressure way to soften the edges of an argument, build some real trust, and feel closer than you have in a while. Less talking, more connecting.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="business" className="border-white/10 border-b-0" data-testid="accordion-business">
              <AccordionTrigger className="text-black/90 text-lg font-display hover:no-underline hover:text-black" data-testid="trigger-business">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#8aaa7a]/20 text-[#8aaa7a] shrink-0">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <span>Breathwork for Your Business</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-black/80 leading-relaxed text-base space-y-4 pt-2" data-testid="content-business">
                <p data-testid="text-business-1">
                  Chronic stress isn't just a buzzword; it's the reason your team is tired, distracted, and checked out.
                </p>
                <p data-testid="text-business-2">
                  Bringing breathwork into your work space is a simple way to actually support your people. It's about clearing the mental fog, lowering the collective heart rate, and building a culture where people show up focused because they actually feel good; not just because they have a deadline.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 text-center space-y-4" data-testid="section-globetrotter">
          <p className="text-black/70 leading-relaxed text-base">
            As a globetrotter, I am available for sessions worldwide. Whether you are in Canada, Asia, or anywhere else on the planet, we can connect and work together :)
          </p>
          <Link href="/contact">
            <Button
              className="btn-gradient-rose text-white mt-2"
              data-testid="link-schedule-cta"
            >
              Sounds Great - Let's Schedule A Date <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
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
