import PageLayout from "@/components/PageLayout";
import edenPortrait from "@assets/WhatsApp_Image_2026-03-06_at_7.06.40_PM_1772842644213.jpeg";
import breathworkClass from "@assets/Screenshot_20241217_123326_Instagram~2_1773108783569.jpg";

export default function About() {
  return (
    <PageLayout title="About" subtitle="Eden Laraki">
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0">
            <img loading="lazy" decoding="async"
              src={edenPortrait}
              alt="Eden Laraki"
              className="rounded-md w-[300px] h-auto border border-white/10"
              data-testid="img-eden-portrait"
            />
          </div>
          <div className="space-y-4">
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p data-testid="text-intro-1">Hey, I'm Eden.</p>
              <p data-testid="text-intro-2">
                I'm a breathwork guide, biohacker, and quantum wellness researcher obsessed with one thing: helping you reclaim your energy from a world designed to drain it.
              </p>
              <p data-testid="text-intro-3">
                My path hasn't been a straight line. It's been a deep dive into the intersection of ancient plant wisdom and cutting-edge science to figure out how we can actually thrive, not just survive.
              </p>
            </div>
          </div>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-science-soul">
          <h3 className="font-display text-2xl font-bold text-gradient-purple" data-testid="text-heading-science-soul">
            The Science & The Soul
          </h3>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              I've spent years studying under the best in the game, think Joe Dispenza and Bruce Lipton, integrating quantum wellness tech to help people navigate the heavy stuff: anxiety, burnout, depression, addiction, and PTSD. My approach isn't just about "fixing" a symptom; it's a total holistic reset. We're talking about optimizing your biology to unlock a version of yourself you haven't met yet.
            </p>
            <p>
              I've done a lot of work in the trenches of trauma and addiction recovery. Whether it's helping clients process childhood trauma or navigating the complexities of severe depression, my goal is to find the root cause. We don't just talk about it; we use practical, bio-harmonizing strategies to reclaim your power.
            </p>
          </div>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-roots-regeneration">
          <h3 className="font-display text-2xl font-bold text-gradient-purple" data-testid="text-heading-roots-regeneration">
            Roots & Regeneration
          </h3>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              Born and raised in Morocco, I grew up at the crossroads of African, Middle Eastern, and European vibes. Before I dove into wellness, I was deep in the world of urban farming. I spent years designing food forests and micro farming models from the UK to Canada, even developing strategies to reverse desertification (in Morocco).
            </p>
            <p>
              For me, the earth and the body are mirrors. I've mastered the art of creating systems that work with nature, not against it. (And yes, that definitely translates to the kitchen : I'm a massive fan of vegetarian cooking using "live" ingredients to fuel the soul).
            </p>
          </div>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-psychonaut">
          <h3 className="font-display text-2xl font-bold text-gradient-purple" data-testid="text-heading-psychonaut">
            My Journey as a Psychonaut
          </h3>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              My curiosity about plants took me way beyond the garden. I've spent months in the Peruvian jungle apprenticing with Shipibo Shamans and high in the mountains with San Pedro healers.
            </p>
            <p>
              One of the most transformative chapters of my life was traveling to the Gabonese rainforest to be initiated into the Bwiti tradition. As one of the few Western women initiated into the Sacred Wood (Iboga) lineage, I've gone to the depths of the "inward journey" to bring back real tools for healing.
            </p>
          </div>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-longevity-breath">
          <h3 className="font-display text-2xl font-bold text-gradient-purple" data-testid="text-heading-longevity-breath">
            Longevity & The Power of Breath
          </h3>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              Beyond the psychedelics, I'm deep into the world of longevity herbs (shoutout to my mentor, Taoist Jing Master Truth Calkins). I'm a huge advocate for using Reishi, Schisandra, and Taoist secrets to protect your energy and stay "ageless."
            </p>
            <p>
              But if you ask me what the ultimate "hack" is? The breath. I traveled to India to immerse myself in Pranayama and learned from incredible Yogis. The breath is the bridge between the conscious and the subconcious. Between the breathwork and my sound healing practice, I create spaces where you can finally drop the baggage and tune back into your highest frequency.
            </p>
          </div>
          <div className="mt-6">
            <img loading="lazy" decoding="async"
              src={breathworkClass}
              alt="Breathwork class"
              className="rounded-md w-full h-auto border border-white/10"
              data-testid="img-breathwork-class"
            />
          </div>
        </div>

        <div
          className="card-glass rounded-md p-6 sm:p-8 space-y-4 text-center"
          style={{ borderColor: "rgba(201, 122, 142, 0.3)" }}
          data-testid="section-ready"
        >
          <h3 className="font-display text-2xl font-bold text-gradient-rose" data-testid="text-heading-ready">
            Ready to stop playing small?
          </h3>
          <p className="text-white/70 leading-relaxed max-w-2xl mx-auto">
            If you're down to be a trailblazer and embrace a life of actual freedom, let's connect. Whether it's through plant medicine, biohacking, or the simple power of a deep breath, I'm here to help you break through your limits and finally thrive.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
