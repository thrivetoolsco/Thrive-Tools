import { Link } from "wouter";
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
              className="rounded-md w-[300px] h-auto border border-black/10"
              data-testid="img-eden-portrait"
            />
          </div>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p data-testid="text-intro-1" className="text-black font-semibold text-lg">I'm Eden.</p>
            <p data-testid="text-intro-2">
              Born in Morocco, raised at the crossroads of African, Middle Eastern, and European worlds. I've never fit neatly into one box. That restlessness took me everywhere: designing food forests across the UK and Canada, apprenticing with Shipibo shamans in the Peruvian jungle, being initiated into the Bwiti tradition in Gabon as one of the few Western women to enter the Sacred Wood (Iboga) lineage, studying Pranayama with yogis in India, and learning longevity herbs under Taoist Jing Master Truth Calkins.
            </p>
            <p data-testid="text-intro-3">
              14 years. A lot of rabbit holes. One obsession: figuring out how humans can actually thrive.
            </p>
          </div>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-what-i-found">
          <h3 className="font-display text-2xl font-bold text-gradient-purple" data-testid="text-heading-what-i-found">
            What I found
          </h3>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Most wellness stops at the symptom. I kept going, into the body, the nervous system, the earth, the breath.
            </p>
            <p>
              I've worked in the trenches of trauma, burnout, addiction, and depression. Not with talk therapy alone, but with bio-harmonizing protocols that actually shift your chemistry: breathwork, plant medicine, longevity herbs, quantum wellness tech, and the kind of ancient knowledge that doesn't make it onto wellness TikTok.
            </p>
            <p>
              The through line across all of it? The earth and the body follow the same rules. Work with nature, not against it. And everything changes.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <img loading="lazy" decoding="async"
            src={breathworkClass}
            alt="Breathwork class"
            className="rounded-md w-full h-auto border border-black/10"
            data-testid="img-breathwork-class"
          />
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-what-i-do">
          <h3 className="font-display text-2xl font-bold text-gradient-purple" data-testid="text-heading-what-i-do">
            What I do
          </h3>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              I'm a breathwork guide, biohacker, and plant medicine facilitator. I help people who are done surviving and ready to thrive, cutting through the noise to find what actually moves the needle for energy, mood, and longevity.
            </p>
            <p>
              The curated discount list on this site is part of that. The supplements, tools, and brands I recommend here are the same ones I use and trust. Nothing random. Nothing I haven't tested.
            </p>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Link href="/discount-codes">
              <button
                data-testid="button-curated-list"
                className="inline-flex items-center px-6 py-3 rounded-md bg-violet-400 hover:bg-violet-500 border border-violet-400 text-white font-medium transition-colors duration-200"
              >
                → See the curated list
              </button>
            </Link>
            <Link href="/events">
              <button
                data-testid="button-retreats-workshops"
                className="inline-flex items-center px-6 py-3 rounded-md bg-violet-400 hover:bg-violet-500 border border-violet-400 text-white font-medium transition-colors duration-200"
              >
                → See the retreats & workshops
              </button>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
