import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, Leaf, FlaskConical, User, CheckCircle, Sparkles, Heart } from "lucide-react";

export default function HyperionHerbs() {
  return (
    <PageLayout
      title="Hyperion Herbs"
      subtitle="Experience True Potency: Why I Recommend Hyperion Herbs for Tonic Herbs"
      backLabel="Products Reviews"
      backHref="/product-reviews"
    >
      <article className="space-y-12">
        <div className="card-glass rounded-2xl overflow-hidden" data-testid="img-hero-hyperion">
          <div
            className="w-full h-48 sm:h-64"
            style={{
              background: "linear-gradient(135deg, #1a2a0d 0%, #2d3a0e 40%, #1a0824 100%)",
            }}
          >
            <div className="w-full h-full flex items-center justify-center px-6">
              <div className="text-center">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-green-500/15 border border-green-500/25 flex items-center justify-center mb-3 mx-auto">
                  <Leaf className="w-14 h-14 sm:w-16 sm:h-16 text-green-300" />
                </div>
                <p className="text-white/40 text-sm">Tonic Herbs & Medicinal Mushrooms</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Badge className="bg-green-500/15 text-green-300 border border-green-500/25 rounded-full px-3 py-0.5 text-xs">
            In-Depth Review
          </Badge>
          <Badge className="bg-white/5 text-white/50 border border-white/10 rounded-full px-3 py-0.5 text-xs">
            Updated March 2026
          </Badge>
        </div>

        <section data-testid="section-intro">
          <h2 className="font-display text-2xl font-bold text-white mb-4">Why I'm Obsessed With Hyperion Herbs</h2>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              If you're reading this, you're likely on the same wild ride I am. We're juggling careers, side hustles, relationships, that ever-shifting 'life balance' thing, and a genuine desire to actually, you know, feel good. And not just 'coffee-buzz good' but resilient, grounded, and genuinely vital.
            </p>
            <p>
              We all know the supplement aisle. It's a jungle of bright labels, impossibly smooth influencers promoting "miracle dusts," and price tags that either seem way too low to be true or absurdly high. For a long time, I was trying things—popping capsules of random mushroom blends, trying that new trendy adaptogen.
            </p>
            <p>
              And honestly? I felt... nothing. No change. I wondered if the whole wellness scene was just an expensive placebo.
            </p>
            <p>
              Then I found Hyperion Herbs. And I realized I had been doing it wrong. I hadn't been feeling anything because I wasn't taking real, potent tonic herbs. I was taking marketing fluff.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-problem">
          <div className="flex items-center gap-3 mb-6">
            <FlaskConical className="w-5 h-5 text-amber-300" />
            <h2 className="font-display text-2xl font-bold text-white">The Problem With the Modern Wellness Shelf</h2>
          </div>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              We are a generation obsessed with authenticity and optimization, yet the wellness industry often serves us watered-down compromises. The issue isn't that herbs don't work; it's that the commercial process destroys what makes them special.
            </p>
            <p>Here's the unfiltered truth:</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mt-6">
            <div className="card-glass rounded-xl p-5">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center mb-3">
                <FlaskConical className="w-4 h-4 text-amber-300" />
              </div>
              <h3 className="text-white font-bold text-sm mb-2">Extraction Matters</h3>
              <p className="text-white/50 text-xs leading-relaxed">
                Many herbs on the shelf are just pulverized raw plant material. Our bodies can't break down the cellulose walls to get the good stuff (the triterpenes, the polysaccharides). You need highly specialized extraction.
              </p>
            </div>
            <div className="card-glass rounded-xl p-5">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-3">
                <Sparkles className="w-4 h-4 text-purple-300" />
              </div>
              <h3 className="text-white font-bold text-sm mb-2">Quality Is Invisible</h3>
              <p className="text-white/50 text-xs leading-relaxed">
                You can't tell a potent Reishi from a worthless one just by looking at the bag. You need to know the sourcing, the growth medium, and the labor-intensive processing that went into it.
              </p>
            </div>
            <div className="card-glass rounded-xl p-5">
              <div className="w-10 h-10 rounded-full bg-rose-500/20 border border-rose-500/30 flex items-center justify-center mb-3">
                <Heart className="w-4 h-4 text-rose-300" />
              </div>
              <h3 className="text-white font-bold text-sm mb-2">One-Size-Fits-All Is a Lie</h3>
              <p className="text-white/50 text-xs leading-relaxed">
                The most popular "blends" are often just low doses of a dozen different things, meaning you don't get a meaningful, powerful dose of any of them.
              </p>
            </div>
          </div>

          <p className="text-white/70 leading-relaxed mt-6">
            This is why I stopped buying random bottles and why I am now a devoted advocate for Hyperion Herbs (and for IM8 Health).
          </p>
        </section>

        <div className="section-divider" />

        <section data-testid="section-hyperion">
          <div className="flex items-center gap-3 mb-6">
            <Leaf className="w-5 h-5 text-green-300" />
            <h2 className="font-display text-2xl font-bold text-white">Enter Hyperion Herbs: A Commitment to Reality</h2>
          </div>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              When I discovered Hyperion, the first thing I noticed wasn't slick branding—it was the deep, genuine expertise of the founder, Brandon Gilbert. This wasn't a wellness brand launched to capitalize on a trend; this was a passion project dedicated to purity and efficacy.
            </p>
            <p>
              They focus on singular potency, not mass blends. Hyperion sells foundational tonic herbs—like Reishi, Schisandra, Chaga, and Lion's Mane—primarily as individual, potent extracts. This means you are getting a clinical-strength dose of exactly what your body needs, rather than a tiny sprinkle in a generalized "Stress Less" mixture.
            </p>
            <p className="text-white/90 font-semibold italic">
              This is how you experience what an herb actually does.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-why-recommend">
          <div className="flex items-center gap-3 mb-6">
            <Star className="w-5 h-5 text-amber-300" />
            <h2 className="font-display text-2xl font-bold text-white">Why I Recommend Them</h2>
          </div>
          <div className="text-white/70 leading-relaxed mb-6">
            <p>
              Let's be real. Millennials have unique health stressors. We face unprecedented mental load, constant digital input, and a complex professional landscape. Tonic herbs—when potent—are uniquely suited to help us adapt. They are metabolic, nervous system, and immune system regulators.
            </p>
            <p className="mt-4">Here is why Hyperion is my go-to recommendation:</p>
          </div>

          <div className="space-y-5">
            <div className="card-glass rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-300 font-bold text-sm">1</span>
                </div>
                <h3 className="text-white font-bold text-lg">Uncompromising Purity and Sourcing</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed ml-11">
                Hyperion doesn't play around. They focus on wild-crafted and ethically harvested herbs, using pristine, high-altitude sources whenever possible. Their commitment to purity (no fillers, no sugar, just the herb and water/alcohol) is absolute. They are transparent about their lab testing.
              </p>
            </div>

            <div className="card-glass rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-purple-300 font-bold text-sm">2</span>
                </div>
                <h3 className="text-white font-bold text-lg">Specialized (Read: Actually Powerful) Extraction</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed ml-11">
                This is their secret weapon. Their Reishi isn't just ground-up powder; it's a powerful extract made from the whole fruiting body, ensuring you get both the water-soluble and alcohol-soluble compounds that define its effects. Their Schisandra is a 10:1 extract. This process preserves the "True Potency" of the herb's spectrum.
              </p>
            </div>

            <div className="card-glass rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-rose-500/20 border border-rose-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-rose-300 font-bold text-sm">3</span>
                </div>
                <h3 className="text-white font-bold text-lg">Real, Noticeable Results</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed ml-11">
                When I switched to Hyperion's Reishi (The 'Mushroom of Immortality'), the "calm-yet-focused" feeling I'd been looking for was actually there. When I started adding their Schisandra (The 'Five-Flavor Berry') to my routine, I noticed a huge difference in my physical stamina and emotional resilience during tight deadlines. I wasn't chasing a caffeine spike; I felt sustained.
              </p>
            </div>

            <div className="card-glass rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-amber-300 font-bold text-sm">4</span>
                </div>
                <h3 className="text-white font-bold text-lg">Incredible Taste Profiles (Yes, Really!)</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed ml-11">
                Their extracts are rich. The Reishi has that profound bitterness that signals its potency (triterpenes), while the Schisandra is a complex, sweet-sour-salty journey for your palate. You can tell immediately that this is not a bland, processed powder; this is the pure, raw language of the plant. It makes the ritual of taking it feel real.
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-getting-started">
          <div className="flex items-center gap-3 mb-6">
            <User className="w-5 h-5 text-rose-300" />
            <h2 className="font-display text-2xl font-bold text-white">How to Get Started</h2>
          </div>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              You don't need to do a full overhaul. I always suggest starting with one foundational herb and observing how it interacts with your system for a few weeks.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mt-6">
            <div className="card-glass rounded-xl p-6 border-l-4" style={{ borderLeftColor: "#4ade80" }}>
              <div className="flex items-center gap-2 mb-3">
                <Leaf className="w-4 h-4 text-green-300" />
                <h3 className="text-green-300 font-bold">Stress Relief, Immune Support & Deep Calm</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Try their <strong className="text-white/90">Reishi Mushroom 8:1 Extract</strong>. It's the king of calming tonics.
              </p>
            </div>
            <div className="card-glass rounded-xl p-6 border-l-4" style={{ borderLeftColor: "#c97a8e" }}>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-rose-300" />
                <h3 className="text-rose-300 font-bold">Physical Vitality, Liver Support & Cognitive Clarity</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Try their <strong className="text-white/90">Schisandra Berry 10:1 Extract</strong>. It's the perfect all-around adaptogen for our high-paced lives.
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-closing">
          <div className="card-glass rounded-2xl p-6 sm:p-8 text-center">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 text-amber-400" fill="currentColor" />)}
            </div>
            <p className="text-white font-bold text-lg mb-3">Experience the Difference</p>
            <p className="text-white/60 text-sm leading-relaxed max-w-xl mx-auto">
              We are a discerning generation. We deserve wellness that is as effective and intelligent as we strive to be. Stop settling for low-potency supplements that just clutter your cabinet. If you are serious about feeling optimal resilience and true vitality, make the investment in potency. Experience the difference of Hyperion Herbs. You won't look back.
            </p>
          </div>
        </section>

        <div className="flex justify-center pt-4">
          <Button asChild size="lg" className="bg-rose-500 text-white border-0 rounded-full px-10 py-4 text-sm tracking-widest uppercase font-semibold whitespace-normal text-center leading-relaxed h-auto">
            <a href="http://www.hyperionherbs.com/discount/eden10" target="_blank" rel="noopener noreferrer" data-testid="link-hyperion-shop">
              Try Hyperion Herbs — Use Code EDEN10 <ExternalLink className="ml-2 w-4 h-4 flex-shrink-0" />
            </a>
          </Button>
        </div>
      </article>
    </PageLayout>
  );
}
