import PageLayout from "@/components/PageLayout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, User, Heart, Briefcase, Users, Baby, Shield } from "lucide-react";

const accordionSections = [
  {
    value: "just-for-you",
    title: "Breathwork Just for You",
    icon: User,
    content: "This is a transformative experience for those prepared to delve deep into self-discovery and healing. Through personalized breathwork techniques, we address underlying traumas and emotional blockages that may be holding you back. The versatility and profound impact of this practice can benefit you at any stage of your life journey, whether you're seeking clarity, healing, or personal growth.",
  },
  {
    value: "couples",
    title: "Breathwork for Couples",
    icon: Heart,
    content: "Breathwork brings incredible benefits to couples looking to deepen their connection. By learning to synchronize breathing patterns together, partners can develop greater awareness of each other's emotional states and needs. This shared practice helps couples communicate more effectively, resolve conflicts with greater compassion, and build a stronger foundation of intimacy and trust.",
  },
  {
    value: "business",
    title: "Breathwork for Your Business",
    icon: Briefcase,
    content: "Breathwork is a cost-effective resource that can transform your workplace culture. The effects of chronic stress on employees are well-documented — decreased productivity, higher turnover, and increased healthcare costs. By investing in the well-being of employees through breathwork sessions, businesses can create a more resilient, focused, and engaged workforce that drives better results.",
  },
  {
    value: "corporate-events",
    title: "Breathwork for Corporate Events",
    icon: Users,
    content: "Incorporate breathwork into your corporate events for powerful team building experiences. These sessions boost morale, enhance creativity, and foster deeper connections among team members. Whether it's a retreat, conference, or regular team gathering, breathwork provides a unique and memorable experience that leaves participants feeling energized, aligned, and ready to collaborate at their highest level.",
  },
  {
    value: "kids",
    title: "Breathwork for Kids",
    icon: Baby,
    content: "Breathwork can help children manage stress, develop emotional regulation skills, and build self-awareness from an early age. In today's fast-paced world, children face increasing pressures at school and in their social lives. Teaching them breathing techniques gives them practical tools they can use throughout their lives to stay calm, focused, and emotionally balanced.",
  },
  {
    value: "addiction-recovery",
    title: "Breathwork for Addiction Recovery",
    icon: Shield,
    content: "Breathwork is a powerful tool for those on the path of addiction recovery. It provides effective techniques for managing cravings, processing difficult emotions, and finding inner calm without the need for substances. By reconnecting with the breath, individuals in recovery can access a natural source of peace and stability that supports their journey toward lasting sobriety and wholeness.",
  },
];

export default function Breathwork() {
  return (
    <PageLayout title="Breathwork">
      <div className="space-y-12" data-testid="section-breathwork">
        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-intro">
          <p className="text-[#e8a4b8] text-lg sm:text-xl font-display font-semibold leading-relaxed" data-testid="text-opening">
            Discover why individuals and groups from diverse backgrounds, including children, couples, corporates, and those struggling with addiction, are experiencing positive outcomes from this one-hour breathwork session.
          </p>

          <div className="flex justify-center">
            <img
              src="https://i0.wp.com/thrivetools.co/wp-content/uploads/2023/03/breathwork.jpeg?fit=564%2C642&ssl=1"
              alt="Breathwork session"
              className="rounded-md max-w-full sm:max-w-md glow-rose"
              data-testid="img-breathwork-top"
            />
          </div>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-description">
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-description-1">
            This customizable session caters to both individuals and groups, offering a diverse range of breathwork techniques tailored to the specific intentions of each participant. You will be guided through a set of practices that can be incorporated into your daily routine, resulting in enhanced relationships, heightened mental clarity, and a profound sense of purpose and direction in life.
          </p>
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-description-2">
            Breath is the one constant in our lives. No matter what happens, it's always there for us. While we may lose other things like our wealth or friends, our breath remains a constant companion. This is why developing an intimate relationship with your breath can be so powerful and transformative.
          </p>
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-description-3">
            As peace and clarity naturally manifest during this breathwork session, past wounds are healed and patterns that are no longer serving start to shed. As a result, you can gain a deeper sense of self-acceptance, as well as acceptance of your personal history and the larger fabric of life.
          </p>
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-description-4">
            Incorrect breathing patterns can trigger the 'fight or flight' response in your body, which can create a persistent state of stress. However, by correcting these patterns, you can break this cycle and help your mind and body find greater calm and balance. Fortunately, interrupting this cycle is possible.
          </p>
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-description-5">
            This session offers a path to stepping into your personal power, utilizing your breath to gain mastery over your thoughts and emotions, and cultivating greater harmony and peace in your life. By learning how to integrate breathing exercises into your daily routine, you can unlock your full human potential and embark on the journey of the hero, taking charge of your life and becoming the author of your own story. Through this process, you'll discover how to show up authentically and confidently in any situation, tapping into your unique greatness and purpose.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="https://i0.wp.com/thrivetools.co/wp-content/uploads/2023/05/breathwork2.webp?fit=1400%2C910&ssl=1"
            alt="Breathwork practice"
            className="rounded-md max-w-full glow-purple"
            data-testid="img-breathwork-bottom"
          />
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8" data-testid="section-accordions">
          <h3 className="font-display text-2xl font-bold text-gradient-purple text-center mb-6" data-testid="text-sessions-heading">
            Breathwork Sessions
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {accordionSections.map((section, index) => (
              <AccordionItem
                key={section.value}
                value={section.value}
                className={`border-white/10 ${index === accordionSections.length - 1 ? "border-b-0" : ""}`}
                data-testid={`accordion-${section.value}`}
              >
                <AccordionTrigger
                  className="text-white/90 text-lg font-display hover:no-underline hover:text-white"
                  data-testid={`trigger-${section.value}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#c97a8e]/20 text-[#e8a4b8] shrink-0">
                      <section.icon className="w-4 h-4" />
                    </div>
                    {section.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent
                  className="text-white/70 leading-relaxed text-base"
                  data-testid={`content-${section.value}`}
                >
                  {section.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 text-center space-y-4" data-testid="section-globetrotter">
          <p className="text-white/70 leading-relaxed text-base">
            As a globetrotter, I am available for sessions worldwide. Whether you are in the US, Europe, or anywhere else on the planet, we can connect and work together.
          </p>
          <Link href="/contact">
            <Button
              className="bg-[#c97a8e] border-[#c97a8e] text-white mt-2"
              data-testid="link-schedule-cta"
            >
              Sounds Great - Let's Schedule A Date <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8" data-testid="section-disclaimer">
          <p className="text-white/40 text-xs leading-relaxed italic">
            This educational material is provided under freedom of speech for your information only. It is not intended to substitute for the medical expertise and advice of your health practitioners from whom we encourage you to seek advice about treatment or care. These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
