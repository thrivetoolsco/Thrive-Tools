import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FlaskConical, User, ShieldCheck, Brain, AlertTriangle } from "lucide-react";

export default function RhondaPatrickMultivitamin() {
  return (
    <PageLayout
      title={"Why Your \u201cHealthy\u201d Diet Probably Has Gaps"}
      subtitle="And What To Do About It"
      backLabel="Products Reviews"
      backHref="/product-reviews"
    >
      <article className="space-y-12">

        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border border-[#c4622d]/25 rounded-full px-3 py-0.5 text-xs">
            Science-Backed
          </Badge>
          <Badge className="bg-white/5 text-black/50 border border-white/10 rounded-full px-3 py-0.5 text-xs">
            Updated March 2026
          </Badge>
        </div>

        <section data-testid="section-intro">
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Let's be honest. You're not eating perfectly every day. Nobody is. And even on the days you do? The soil your vegetables grew in is nutritionally depleted, you're spending most of your life indoors, and your stress levels are burning through your body's nutrient reserves faster than a smoothie bowl can replace them.
            </p>
            <p>
              This is exactly why <strong className="text-black/90">Dr. Rhonda Patrick takes a multivitamin every single day.</strong> And when someone like her does something, it's worth paying attention.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-who">
          <div className="flex items-center gap-3 mb-6">
            <User className="w-5 h-5 text-[#c4622d]" />
            <h2 className="font-display text-2xl font-bold text-black">Who Is Dr. Rhonda Patrick?</h2>
          </div>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Dr. Rhonda Patrick holds a Ph.D. in biomedical science from the University of Tennessee and completed her research training at the prestigious Children's Hospital Oakland Research Institute under Dr. Bruce Ames, one of the most cited scientists in the world. She has published peer-reviewed research on aging, cancer, metabolism, and micronutrient insufficiency, and her podcast <em>FoundMyFitness</em> has become one of the most trusted science-based health resources on the internet, with millions of followers globally.
            </p>
            <p>
              She is not a wellness influencer selling a lifestyle. She is a working scientist who reads primary research, publishes her own, and communicates what the evidence actually says. When Dr. Patrick recommends something, it comes with receipts.
            </p>
            <p className="font-semibold text-black/80">
              And she recommends a daily multivitamin.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-triage">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-5 h-5 text-[#c4622d]" />
            <h2 className="font-display text-2xl font-bold text-black">Your Body Is Making Sacrifices You Don't Know About</h2>
          </div>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>Here's the part that should genuinely concern you.</p>
            <p>
              Dr. Patrick's mentor, biochemist Dr. Bruce Ames, developed something called the <strong className="text-black/90">"Triage Theory"</strong>, one of the most important ideas in modern nutrition that most people have never heard of.
            </p>
            <p>
              The concept is this: when your body is low on a nutrient, it rations it. It keeps the lights on for the functions you need to survive <em>right now</em>, and quietly deprioritizes things like DNA repair, cellular maintenance, and protecting your arteries. You feel totally fine. Meanwhile, damage is slowly accumulating at the cellular level, the kind that shows up 20 or 30 years later as the diseases we call "aging."
            </p>
          </div>

          <div className="card-glass rounded-xl p-5 mt-6 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
            <p className="text-black/50 text-xs uppercase tracking-wider mb-2">Key Insight</p>
            <p className="text-black/70 text-sm leading-relaxed italic">
              "You won't feel a magnesium deficiency today. You might feel it at 60."
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-gaps">
          <div className="flex items-center gap-3 mb-6">
            <FlaskConical className="w-5 h-5 text-[#c4622d]" />
            <h2 className="font-display text-2xl font-bold text-black">The Gaps Are More Common Than You Think</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            <div className="card-glass rounded-xl p-5 text-center" data-testid="stat-vitamin-d">
              <p className="text-3xl font-bold text-gradient-rose mb-2">70%</p>
              <p className="text-black/60 text-sm leading-relaxed">of Americans don't get enough Vitamin D, a nutrient that directly regulates over 1,000 of your genes</p>
            </div>
            <div className="card-glass rounded-xl p-5 text-center" data-testid="stat-magnesium">
              <p className="text-3xl font-bold text-gradient-rose mb-2">&gt;50%</p>
              <p className="text-black/60 text-sm leading-relaxed">of adults fall short on magnesium, needed for energy production, sleep, and DNA repair</p>
            </div>
            <div className="card-glass rounded-xl p-5 text-center" data-testid="stat-nutrients">
              <p className="text-3xl font-bold text-gradient-rose mb-2">B, Zn, I</p>
              <p className="text-black/60 text-sm leading-relaxed">B vitamins, zinc, iodine, and selenium are all chronically under-consumed, even by people who eat well</p>
            </div>
          </div>

          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Dr. Patrick describes a daily multivitamin as <strong className="text-black/90">"great insurance."</strong> Not a substitute for a good diet. An upgrade on top of one, filling the gaps that are nearly impossible to consistently close through food alone in the modern world.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-cosmos">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-5 h-5 text-[#c4622d]" />
            <h2 className="font-display text-2xl font-bold text-black">There's Also Real Clinical Evidence Now</h2>
          </div>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              The COSMOS trials, a major clinical study series, found that adults taking a daily multivitamin showed measurably better memory and cognitive function than those on a placebo. The researchers estimated it effectively <strong className="text-black/90">slowed brain aging by around two years.</strong>
            </p>
            <p>
              Two years. From a daily supplement. If a drug did that, everyone would be talking about it.
            </p>
          </div>

          <div className="card-glass rounded-xl p-5 mt-6 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
            <p className="text-black/50 text-xs uppercase tracking-wider mb-2">Scientific Reference</p>
            <p className="text-black/70 text-sm leading-relaxed">
              Yeung, L. K., et al. (2023). "Multivitamin Supplementation Improves Memory in Older Adults: A Randomized Clinical Trial." <em>The American Journal of Clinical Nutrition</em>. COSMOS-Mind Study. doi:10.1093/ajcn/nqad278
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-form">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-5 h-5 text-[#c4622d]" />
            <h2 className="font-display text-2xl font-bold text-black">Form Matters More Than Most People Realize</h2>
          </div>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Not all multivitamins work the same. Most cheap ones use nutrient forms your body can barely absorb. Magnesium oxide, cyanocobalamin, folic acid instead of its active methylated form. You're essentially paying for something that passes through you.
            </p>
            <p>
              Dr. Patrick is firm on this point: look for <strong className="text-black/90">methylated B vitamins, chelated minerals, and active-form nutrients.</strong> That's the difference between a supplement that works and one that just makes expensive urine.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-pick">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-5 h-5 text-amber-500" />
            <h2 className="font-display text-2xl font-bold text-black">My Pick: IM8 Health</h2>
          </div>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              If you're going to do this, do it properly. <strong className="text-black/90">IM8 Health</strong> is the multivitamin I recommend without hesitation. Built with 75+ science-backed ingredients, in bioavailable forms, at doses that actually reflect what the research supports, it checks every box that researchers like Dr. Patrick and Dr. Ames have outlined. Comprehensive coverage, proper bioavailability, no cheap fillers.
            </p>
            <p className="font-semibold text-[#c4622d]">Use code THRIVE10 for 10% off your first order.</p>
          </div>
        </section>

        <div className="text-center pt-4">
          <Button asChild size="lg" className="btn-gradient-rose text-white border-0 rounded-full px-6 sm:px-8 py-4 text-sm tracking-widest uppercase font-semibold h-auto leading-relaxed">
            <a href="https://im8health.com" target="_blank" rel="noopener noreferrer" data-testid="link-im8-shop" className="inline-flex items-center justify-center gap-2 flex-wrap">
              Shop IM8 Health. Use Code THRIVE10 <ExternalLink className="w-4 h-4 flex-shrink-0" />
            </a>
          </Button>
        </div>

        <p className="text-center text-black/35 text-xs italic" data-testid="text-disclaimer">
          *Not medical advice. Talk to your doctor before starting any new supplement.*
        </p>

      </article>
    </PageLayout>
  );
}
