import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, FlaskConical, User, Brain, Lightbulb, Activity } from "lucide-react";

export default function VielightNeuroReview() {
  return (
    <PageLayout
      title="Vielight Neuro Review 2026"
      subtitle="Can Photobiomodulation Reverse Brain Aging?"
      backLabel="Products Reviews"
      backHref="/product-reviews"
    >
      <article className="space-y-12">
        <div className="card-glass rounded-2xl overflow-hidden" data-testid="img-hero-vielight">
          <div
            className="w-full h-48 sm:h-64"
            style={{
              background: "linear-gradient(135deg, #1a0824 0%, #0d1a3a 50%, #2d0e3e 100%)",
            }}
          >
            <div className="w-full h-full flex items-center justify-center px-6">
              <div className="text-center">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center mb-3 mx-auto relative">
                  <Brain className="w-14 h-14 sm:w-16 sm:h-16 text-indigo-300" />
                  <div className="absolute inset-0 rounded-full animate-pulse" style={{ background: "radial-gradient(circle, rgba(129,140,248,0.15) 0%, transparent 70%)" }} />
                </div>
                <p className="text-white/40 text-sm">Transcranial Photobiomodulation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Badge className="bg-purple-500/15 text-purple-300 border border-purple-500/25 rounded-full px-3 py-0.5 text-xs">
            Tech Review
          </Badge>
          <Badge className="bg-white/5 text-white/50 border border-white/10 rounded-full px-3 py-0.5 text-xs">
            Updated March 2026
          </Badge>
        </div>

        <section data-testid="section-intro">
          <h2 className="font-display text-2xl font-bold text-white mb-4">What Is the Vielight Neuro?</h2>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              The Vielight Neuro is a transcranial photobiomodulation (PBM) device that uses near-infrared light (810nm wavelength) to stimulate brain cells. It comes in two variants: the <strong className="text-white/90">Neuro Alpha</strong> (10Hz pulsing for meditation and relaxation) and the <strong className="text-white/90">Neuro Gamma</strong> (40Hz pulsing for cognitive performance and focus).
            </p>
            <p>
              Photobiomodulation isn't fringe science — it's been the subject of over 5,000 peer-reviewed studies. The question is whether Vielight's specific implementation delivers meaningful results for brain health and cognitive enhancement.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-how-it-works">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-5 h-5 text-amber-300" />
            <h2 className="font-display text-2xl font-bold text-white">How It Works</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            <div className="card-glass rounded-xl p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-red-500/15 border border-red-500/25 flex items-center justify-center mx-auto mb-3">
                <span className="text-red-300 font-bold text-lg">810nm</span>
              </div>
              <h3 className="text-white font-bold text-sm mb-2">Near-Infrared Light</h3>
              <p className="text-white/50 text-xs leading-relaxed">Penetrates skull bone to reach cortical brain tissue up to 3cm deep</p>
            </div>
            <div className="card-glass rounded-xl p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center mx-auto mb-3">
                <Activity className="w-5 h-5 text-indigo-300" />
              </div>
              <h3 className="text-white font-bold text-sm mb-2">Mitochondrial Boost</h3>
              <p className="text-white/50 text-xs leading-relaxed">Stimulates cytochrome c oxidase to increase ATP production in neurons</p>
            </div>
            <div className="card-glass rounded-xl p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center mx-auto mb-3">
                <Brain className="w-5 h-5 text-emerald-300" />
              </div>
              <h3 className="text-white font-bold text-sm mb-2">Neural Regeneration</h3>
              <p className="text-white/50 text-xs leading-relaxed">Promotes neuroplasticity, reduces neuroinflammation & oxidative stress</p>
            </div>
          </div>

          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              The device consists of a headset with LED clusters positioned over key brain regions (prefrontal cortex, parietal nodes, and an intranasal applicator that reaches the ventral brain). Each session lasts 20 minutes. The 810nm wavelength was specifically chosen because it has the deepest tissue penetration and optimal absorption by cytochrome c oxidase — the key enzyme in mitochondrial energy production.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-clinical">
          <div className="flex items-center gap-3 mb-6">
            <FlaskConical className="w-5 h-5 text-purple-300" />
            <h2 className="font-display text-2xl font-bold text-white">Clinical Evidence</h2>
          </div>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              The most compelling evidence comes from Alzheimer's research. A randomized controlled trial by Lim et al. (2021) using the Vielight Neuro Gamma on patients with mild to moderate Alzheimer's showed statistically significant improvements in cognitive function (measured by ADAS-cog scores) after 12 weeks of treatment.
            </p>
            <p>
              Separate research from Harvard Medical School demonstrated that transcranial PBM at 810nm increased cerebral blood flow, enhanced default mode network connectivity, and improved executive function in healthy adults — suggesting benefits extend well beyond treating disease.
            </p>
            <p>
              A 2020 study in <em>Photobiomodulation, Photomedicine, and Laser Surgery</em> found that 40Hz gamma-frequency PBM (the exact frequency used in the Vielight Neuro Gamma) enhanced gamma brainwave oscillations — a neural signature associated with peak cognitive performance, heightened awareness, and memory consolidation.
            </p>
          </div>

          <div className="card-glass rounded-xl p-5 mt-6 border-l-4" style={{ borderLeftColor: "#818cf8" }}>
            <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Scientific Reference</p>
            <p className="text-white/70 text-sm leading-relaxed">
              Lim, L., et al. (2021). "Adjusting for baseline cognitive function in an Alzheimer's disease randomized controlled trial of transcranial photobiomodulation." <em>Journal of Alzheimer's Disease</em>, 83(4), 1549–1555. doi:10.3233/JAD-210386
            </p>
          </div>

          <div className="card-glass rounded-xl p-5 mt-4 border-l-4" style={{ borderLeftColor: "#818cf8" }}>
            <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Scientific Reference</p>
            <p className="text-white/70 text-sm leading-relaxed">
              Hamblin, M. R. (2016). "Shining light on the head: Photobiomodulation for brain disorders." <em>BBA Clinical</em>, 6, 113–124. doi:10.1016/j.bbacli.2016.09.002
            </p>
          </div>

          <div className="card-glass rounded-xl p-5 mt-4 border-l-4" style={{ borderLeftColor: "#c97a8e" }}>
            <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Scientific Reference</p>
            <p className="text-white/70 text-sm leading-relaxed">
              Saltmarche, A. E., et al. (2017). "Significant Improvement in Cognition in Patients with Dementia: Case Series." <em>Photomedicine and Laser Surgery</em>, 35(8), 432–441. doi:10.1089/pho.2016.4227
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-personal">
          <div className="flex items-center gap-3 mb-6">
            <User className="w-5 h-5 text-rose-300" />
            <h2 className="font-display text-2xl font-bold text-white">My 6-Month Experience</h2>
          </div>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              I've been using both the Neuro Alpha and Neuro Gamma for over 6 months, alternating between them based on my goals for the day. Here's what I've observed:
            </p>

            <div className="card-glass rounded-xl p-5 my-6">
              <h3 className="text-indigo-300 font-bold mb-3">Neuro Alpha (10Hz — Relaxation & Meditation)</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Using this before meditation sessions has been transformative. I drop into deep states of stillness noticeably faster — typically within 5-8 minutes instead of 15-20. My clients who use it during breathwork sessions report similar experiences. The meditative depth feels qualitatively different: more spacious, more vivid, and more emotionally accessible.
              </p>
            </div>

            <div className="card-glass rounded-xl p-5 my-6">
              <h3 className="text-purple-300 font-bold mb-3">Neuro Gamma (40Hz — Focus & Cognition)</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                I use this in the morning before deep work sessions. The cognitive clarity is remarkable — I describe it as the mental equivalent of putting on prescription glasses for the first time. Complex ideas connect faster, writing flows more naturally, and I can sustain focused attention for longer periods without fatigue.
              </p>
            </div>

            <p>
              One observation that surprised me: my sleep quality improved dramatically. I track sleep with an Oura Ring, and my deep sleep percentage increased from an average of 15% to 22% over the first 3 months. REM sleep also improved. I attribute this to the neuroprotective and anti-inflammatory effects reducing low-grade neuroinflammation that was likely disrupting my sleep architecture.
            </p>
            <p>
              Is it a significant investment? Yes. But for anyone serious about cognitive longevity, brain performance, or supporting recovery from concussions and traumatic brain injuries, I consider it one of the most impactful biohacking tools I own.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-verdict">
          <div className="flex items-center gap-3 mb-6">
            <Star className="w-5 h-5 text-amber-300" />
            <h2 className="font-display text-2xl font-bold text-white">Final Verdict</h2>
          </div>
          <div className="card-glass rounded-2xl p-6 sm:p-8 text-center">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 text-amber-400" fill="currentColor" />)}
            </div>
            <p className="text-white font-bold text-lg mb-3">A Genuine Breakthrough in Brain Health</p>
            <p className="text-white/60 text-sm leading-relaxed max-w-xl mx-auto">
              The Vielight Neuro is backed by real clinical research, not just influencer hype. It's one of the few consumer devices that can actually deliver light energy deep enough to reach brain tissue. Whether you're optimizing peak performance or looking to support long-term cognitive health, this device has earned its place in my daily protocol.
            </p>
          </div>
        </section>

        <div className="text-center pt-4">
          <Button asChild size="lg" className="bg-rose-500 text-white border-0 rounded-full px-8 text-sm tracking-widest uppercase font-semibold">
            <a href="https://www.vielight.com/devices/" target="_blank" rel="noopener noreferrer" data-testid="link-vielight-shop">
              Get Vielight — Use Code THRIVETOOLS <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </article>
    </PageLayout>
  );
}
