import PageLayout from "@/components/PageLayout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Zap, Brain, Sun, Disc, ArrowRight, Check } from "lucide-react";

const treatments = [
  {
    num: 1,
    title: "Cranio-Electro Stimulation (CES)",
    description: "A non-invasive brain stimulation that applies a small pulsed electric current across the head. It stimulates the production of endorphins, serotonin, and norepinephrine, promoting a deep state of relaxation and mental clarity.",
    icon: Brain,
  },
  {
    num: 2,
    title: "Audio-Visual Entrainment (AVE)",
    description: "Uses light and sound pulses at specific frequencies to gently guide the brain into various brain wave patterns. This technology synchronizes brainwave activity, enhancing relaxation, focus, and cognitive function.",
    icon: Zap,
  },
  {
    num: 3,
    title: "The Photon Genie",
    description: "An advanced energy therapy device that emits energy properties resembling the vital properties of living cells. It supports detoxification, lymphatic drainage, and cellular regeneration through harmonic energy transmission.",
    icon: Sun,
  },
  {
    num: 4,
    title: "Purple Harmony Plates",
    description: "Inspired by the work of Nikola Tesla, these aluminum plates are anodized and infused with a specific vibrational frequency. They help to harmonize and balance the body's energy field, promoting a state of deep peace and alignment.",
    icon: Disc,
  },
];

const benefits = [
  "Relieve stress",
  "Alleviate physical pain",
  "Reduce anxiety",
  "Gain mental clarity",
  "Release stagnant thoughts",
  "Feel more grounded",
  "Reconnect with creativity",
  "Control addiction",
  "Explore altered states",
  "Reach meditation depths",
  "Enhance athletic performance",
];

export default function QuantumHealing() {
  return (
    <PageLayout
      title="Quantum Healing"
      subtitle="Step into wide-spectrum healing and empowerment with this unique 1hr15min treatment which combines Breathwork with Electro Therapy."
    >
      <div className="space-y-12" data-testid="section-quantum-healing">
        <div className="card-glass rounded-md p-6 sm:p-8" data-testid="section-accordions">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="breathwork" className="border-white/10" data-testid="accordion-breathwork">
              <AccordionTrigger className="text-white/90 text-lg font-display hover:no-underline hover:text-white" data-testid="trigger-breathwork">
                What's Breathwork?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 leading-relaxed text-base" data-testid="content-breathwork">
                It's the practice of consciously controlling the rate and depth of the breath to positively influence our mental, emotional or physical state and therefore achieve a therapeutic effect.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="electro-therapy" className="border-white/10" data-testid="accordion-electro-therapy">
              <AccordionTrigger className="text-white/90 text-lg font-display hover:no-underline hover:text-white" data-testid="trigger-electro-therapy">
                What's Electro Therapy?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 leading-relaxed text-base" data-testid="content-electro-therapy">
                Electro-therapy employs the use of electricity and energy to treat various physical ailments and diseases. Many medical professionals have discovered that electro-therapy provides an efficient substitute for drug therapies. Electro-medicine has a remarkable and unprecedented track record of being both safe and effective.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="how-electro" className="border-white/10" data-testid="accordion-how-electro">
              <AccordionTrigger className="text-white/90 text-lg font-display hover:no-underline hover:text-white" data-testid="trigger-how-electro">
                How Does Electro Therapy Work?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 leading-relaxed text-base space-y-4" data-testid="content-how-electro">
                <p>Simply put, the human body naturally produces electricity which is used to combat any health problems : the electrical impulses in our body are responsible for bodily functions and healing. Electro- therapy aims to mimic these electrical impulses using harmonic frequencies, wave energy, and energetic frequencies to stimulate the body and create a perfect health equilibrium.</p>
                <p>Additionally, the brain is powered by electricity, and its complex networks of electrical signals and electromagnetic fields can be revitalized through harmonic electrical stimulation, leading to positive effects on mental health and effectiveness leading to a sense of peace and harmony.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="one-of-a-kind" className="border-white/10" data-testid="accordion-one-of-a-kind">
              <AccordionTrigger className="text-white/90 text-lg font-display hover:no-underline hover:text-white" data-testid="trigger-one-of-a-kind">
                How is this treatment One-of-a-Kind?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 leading-relaxed text-base" data-testid="content-one-of-a-kind">
                <div className="space-y-4">
                  <p>To begin our session, we will enjoy a cup of Gynostemma Tea infused with Reishi and Schisandra. This Elixir has the ability to gently penetrate all of your organs, aiding in the process of harmonizing your body, mind, and spirit. During this time, I will share some of my most profound secrets for nourishing your three treasures and take your biohacking to the next level.</p>
                  <p>Following this, I will guide you through a 15-minute breathing exercise that will accelerate your relaxation process for an extended period of time. We will then move into using some of the most advanced healing technologies available today, in a gentle and gradual transition.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {treatments.map((t) => (
                      <div
                        key={t.num}
                        className="card-glass rounded-md p-5 space-y-3"
                        data-testid={`card-treatment-${t.num}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#c97a8e]/20 text-[#e8a4b8] shrink-0">
                            <t.icon className="w-4 h-4" />
                          </div>
                          <h4 className="font-display text-sm font-bold text-white/90">
                            {t.num}) {t.title}
                          </h4>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed">{t.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="experience" className="border-white/10" data-testid="accordion-experience">
              <AccordionTrigger className="text-white/90 text-lg font-display hover:no-underline hover:text-white" data-testid="trigger-experience">
                What you will experience during this treatment?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 leading-relaxed text-base space-y-4" data-testid="content-experience">
                <p>During the treatment, you may experience a gentle dissociation from your everyday mental chatter, allowing you to enter a deep state of relaxation and inner stillness. This state facilitates profound regeneration at the cellular level.</p>
                <p>The combination of breathwork and electro therapy works synergistically to stabilize the limbic system, which governs our emotional responses and stress reactions. This stabilization promotes the natural production of key neurotransmitters that are essential for mood regulation, mental clarity, and overall well-being.</p>
                <p>After the treatment many people feel less stressed, more peaceful, more energetic and creative typically experiencing better sleep as well.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="benefits" className="border-white/10 border-b-0" data-testid="accordion-benefits">
              <AccordionTrigger className="text-white/90 text-lg font-display hover:no-underline hover:text-white" data-testid="trigger-benefits">
                Who can benefit from this quantum frequency healing?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 leading-relaxed text-base" data-testid="content-benefits">
                <ul className="space-y-2">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3" data-testid={`benefit-item-${i}`}>
                      <Check className="w-4 h-4 text-[#c97a8e] shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 text-center space-y-2" data-testid="section-practical-tools">
          <p className="text-white/80 leading-relaxed text-base">
            You will leave with practical tools as well as insights and inspirations you can apply to your business and/or to your personal life anytime. Comfortable clothing is recommended.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-rates">
          <h3 className="font-display text-2xl font-bold text-gradient-purple text-center" data-testid="text-rates-heading">
            Rates
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="card-glass rounded-md p-5 text-center space-y-2" data-testid="rate-1">
              <p className="text-2xl font-bold text-gradient-rose">$133</p>
              <p className="text-white/60 text-sm">USD for 1 hr 15 min</p>
            </div>
            <div className="card-glass rounded-md p-5 text-center space-y-2" data-testid="rate-2">
              <p className="text-2xl font-bold text-gradient-rose">$233</p>
              <p className="text-white/60 text-sm">USD for 2 hours</p>
            </div>
            <div className="card-glass rounded-md p-5 text-center space-y-2 relative" data-testid="rate-3">
              <p className="text-2xl font-bold text-gradient-rose">$1066</p>
              <p className="text-white/60 text-sm">USD if you book for 10 sessions</p>
            </div>
          </div>
          <p className="text-center text-white/70 italic text-sm" data-testid="text-ten-sessions">
            You will not be the same person after your 10th session, it will change your life!
          </p>
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
