import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Footprints, Zap, ShieldCheck, Map, BookOpen } from "lucide-react";
import earthrunnersImg from "@assets/CS4-edited_78490e2b-f5bc-4681-acec-39ed6cbef529_1024x1024_1773628130126.jpg";

const SHOP_URL = "https://earthrunners.com/?rfsn=7676227.de5b78";

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-[#c4622d]">{icon}</span>
      <h2 className="font-display text-2xl font-bold text-black">{title}</h2>
    </div>
  );
}

export default function EarthRunnersReview() {
  return (
    <PageLayout showShare
      title="EarthRunners Review (2026): The Only Sandals I Travel, Hike and Run In"
      subtitle="My honest take after years of daily use — why one pair covers everything."
      seo={{
        title: "EarthRunners Review 2026: Grounding Sandals | Thrive Tools",
        description: "Honest EarthRunners review after years of daily use. Why they are the only pair I own, what makes them different, and who they are best for.",
        canonical: "/blog/earthrunners-review",
        ogType: "article",
        datePublished: "2025-12-17",
        image: earthrunnersImg,
        imageAlt: "EarthRunners grounding sandals",
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-12">

        <div className="card-glass rounded-2xl overflow-hidden" data-testid="img-hero-earthrunners">
          <img
            loading="lazy"
            decoding="async"
            src={earthrunnersImg}
            alt="EarthRunners grounding sandals worn on a log in nature"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border border-[#c4622d]/25 rounded-full px-3 py-0.5 text-xs">
            Honest Review
          </Badge>
          <Badge className="bg-white/5 text-black/50 border border-white/10 rounded-full px-3 py-0.5 text-xs">
            2026 Edition
          </Badge>
        </div>

        {/* Intro */}
        <section data-testid="section-intro">
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              I've owned a lot of footwear. I've gone through hiking boots, trail runners, minimalist shoes, and more pairs of sandals than I can count. Most of them are sitting in a closet somewhere or long gone. My EarthRunners are still on my feet.
            </p>
            <p>
              I travel with one pair of sandals. These are them. I jog in them. I hike in them. When it gets cold I wear them with the wool socks from the EarthRunners website and keep going. That's not a marketing line. That's just what happens when you find something that actually works.
            </p>
            <p>
              This review covers what EarthRunners actually are, why the grounding technology behind them is more interesting than it sounds, how they perform across different activities, and whether they're worth it for you.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* What Are EarthRunners */}
        <section data-testid="section-what-are">
          <SectionHeader icon={<Footprints className="w-5 h-5" />} title="What Are EarthRunners?" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              EarthRunners are minimalist sandals made out of vegan-friendly materials. They are flexible, waterproof, secure, and incredibly durable. Every single pair of Earth Runner shoes is handmade.
            </p>
            <p>
              These shoes are based on the ancient Tarahumara Native huarache sandals, with canvas footbed and performance lace additions that add comfort and functionality, with select copper grounding rivets and various thicknesses available.
            </p>
            <p>
              The Tarahumara people of northwestern Mexico's Copper Canyons are among the most renowned endurance runners in human history, known for running ultramarathon distances in simple handmade sandals. Earth Runners developed this line of minimalist grounding sandals to mimic the primal experience of being barefoot, inspired by the world-renowned Tarahumara natives. To honour that heritage, one percent of all sales are donated to the non-profit True Messages.
            </p>
            <p>
              What makes EarthRunners unique in the sandal market is the combination of two things that almost no other footwear brand does simultaneously: genuine minimalist barefoot design and active grounding technology built directly into the lacing system.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Grounding Technology */}
        <section data-testid="section-grounding">
          <SectionHeader icon={<Zap className="w-5 h-5" />} title="The Grounding Technology: What It Actually Does" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <h3 className="font-display text-xl font-bold text-black mb-2">The Earthing Research</h3>
            <p>
              I'll be upfront: when I first heard about grounding sandals I was skeptical. It sounds like wellness marketing. But I looked at the research, and the science behind earthing is considerably more substantive than I expected.
            </p>
            <p>
              EarthRunners feature a copper lace plug on the outsole and stainless steel lined lace circuit. The foot's contact with the stainless steel thread on the bottom of the lace allows for efficient electron flow between the skin and the earth via the conductive thread and copper plug circuit, effectively grounding the body via intimate connection of lace and foot, similar to that of being barefoot.
            </p>
            <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#c4622d] mb-2">The underlying mechanism</p>
              <p className="text-black/70 text-sm leading-relaxed">
                Electrically conductive contact of the human body with the surface of the Earth produces intriguing effects on physiology and health relating to inflammation, immune responses, wound healing, and prevention and treatment of chronic inflammatory and autoimmune diseases.
              </p>
            </div>
            <p>
              The research on what grounding actually does to the body is growing. Grounding appears to improve sleep, normalize the day-night cortisol rhythm, reduce pain, reduce stress, shift the autonomic nervous system from sympathetic toward parasympathetic activation, increase heart rate variability, speed wound healing, and reduce blood viscosity.
            </p>
            <p>
              Some 20 studies to date have reported intriguing evidence of wide and significant physiological improvements when the body is grounded versus non-grounded. Earthing refers to the discovery that bodily contact with the Earth's natural electric charge stabilizes the physiology at the deepest levels, reduces inflammation, pain, and stress, improves blood flow, energy, and sleep, and generates greater well-being — effects that are profound, systemic, and foundational, often developing rapidly.
            </p>
            <p>
              For biohackers specifically, earthing has shown to increase the surface charge on red blood cells, thereby reducing blood viscosity and clumping, allowing for more orderly single-file flow into the capillaries. Grounding appears to be one of the simplest and yet most profound interventions for helping reduce cardiovascular risk.
            </p>
            <div className="card-glass rounded-xl p-5">
              <p className="text-black/65 text-sm leading-relaxed">
                I want to be balanced here: the earthing research is promising but still developing. Larger scale RCTs are needed before definitive claims can be made. What I can say is that the mechanistic basis is sound, the existing studies point consistently in the same direction, and the risk of wearing grounding sandals is essentially zero. The full earthing research library is available at{" "}
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4378297/" target="_blank" rel="noopener noreferrer" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">
                  pmc.ncbi.nlm.nih.gov
                </a>{" "}
                for anyone who wants to go deeper.
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Minimalist Design */}
        <section data-testid="section-minimalist">
          <SectionHeader icon={<Footprints className="w-5 h-5" />} title="The Minimalist Design: Why It Matters for Your Feet" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Beyond the grounding technology, the minimalist design of EarthRunners is a genuine health intervention in itself. Modern shoes often provide too much stability and arch support to the point that our feet and ankles become weak from not having to work in the same way as barefoot movement. In comparison to highly supportive and cushioned hiking sandals, EarthRunners allow your feet to move more naturally and allow for more feedback to the brain and improved proprioception that benefits the entire kinetic chain.
            </p>
            <p>
              The complex neurology of the human foot makes for a sensory base capable of more than most people imagine. Feedback the foot receives from the ground contributes to proprioception, the sense of knowing where your body is in space and reacting appropriately.
            </p>
            <p>
              EarthRunners combine the barefoot benefits of a No Toe Box design and active toe spacers with the functionality of minimalist running sandals, utilizing minimalist Vibram soles and an Earth Grip footbed to offer the closest thing to truly barefoot running available.
            </p>
            <p>
              The zero-drop sole means your heel and forefoot are at the same height, the natural position your foot evolved to move in, before modern cushioned footwear elevated the heel and altered gait mechanics across the population.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Durability */}
        <section data-testid="section-durability">
          <SectionHeader icon={<ShieldCheck className="w-5 h-5" />} title="Durability: The Real Test" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              I am genuinely hard on footwear. These sandals have survived everything I've thrown at them. The durability of EarthRunners is a huge selling point. After a year and a half of aggressive wear and varied terrain, they can still look in top condition. The straps and sole remain in excellent shape even after extensive use.
            </p>
            <p>
              Adjustable sizes with replaceable straps mean that even if something eventually does wear out, you don't replace the whole sandal, just the component that needs attention. That's a design philosophy worth recognizing in a world of throwaway fast fashion footwear.
            </p>
            <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#c4622d] mb-2">Honest note on break-in</p>
              <p className="text-black/70 text-sm leading-relaxed">
                The first time you wear EarthRunners after a long period off them, you may get blisters if your skin isn't conditioned to direct strap contact. The fix is simply getting them wet a few times and giving your skin a week to adapt. It's worth pushing through — the comfort on the other side of that break-in period is excellent.
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Product Range */}
        <section data-testid="section-range">
          <SectionHeader icon={<Map className="w-5 h-5" />} title="The Product Range: Which One Is Right for You" />
          <div className="space-y-4 text-black/70 leading-relaxed mb-6">
            <p>EarthRunners offers different sole thicknesses across two main series:</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="card-glass rounded-2xl p-6 space-y-3" data-testid="series-lifestyle">
              <p className="font-semibold text-black/90">Lifestyle Series</p>
              <p className="text-black/55 text-xs uppercase tracking-wider">Thinner, more flexible sole</p>
              <p className="text-black/65 text-sm leading-relaxed">
                Best for everyday wear, light hiking, travel, and city use. Maximum ground feel and flexibility.
              </p>
            </div>
            <div className="card-glass rounded-2xl p-6 space-y-3" data-testid="series-adventure">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-black/90">Adventure Series</p>
                <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border border-[#c4622d]/25 rounded-full px-2 py-0.5 text-xs">My pick</Badge>
              </div>
              <p className="text-black/55 text-xs uppercase tracking-wider">Thicker Vibram sole</p>
              <p className="text-black/65 text-sm leading-relaxed">
                Best for aggressive hiking, trail running, and rough terrain. More protection underfoot while maintaining the minimalist and grounding principles. Gets dirty and wet without issue.
              </p>
            </div>
          </div>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              My personal recommendation for most people: start with the Adventure Series if you plan to hike or jog in them. The extra sole thickness makes the transition from conventional footwear significantly easier, and you can always move to a thinner sole once your feet have strengthened and adapted.
            </p>
            <p>
              EarthRunners also offers their wool socks for cold weather use and iON SYNC earthing plugs if you want to add grounding capability to shoes you already own, a genuinely clever product for year-round grounding without switching footwear entirely.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Who They're For */}
        <section data-testid="section-who-for">
          <SectionHeader icon={<Map className="w-5 h-5" />} title="Who EarthRunners Are Best For" />
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card-glass rounded-2xl p-6 space-y-4">
              <p className="font-semibold text-black/90 text-sm">EarthRunners are the right sandal if you:</p>
              <ul className="space-y-3 text-sm text-black/70">
                {[
                  "Are a traveller who wants one versatile pair of sandals that covers everything from airport to trail to dinner",
                  "Train outdoors and want to reconnect with natural foot mechanics and ground feedback during movement",
                  "Are interested in the grounding and earthing research and want a practical daily way to implement it without changing your lifestyle",
                  "Value durability over disposability and want footwear built to last years not seasons",
                  "Are already exploring barefoot or minimalist movement and want the most functional grounding sandal available",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white text-xs" style={{ background: "linear-gradient(135deg,#e8956d,#c4622d)" }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-glass rounded-2xl p-6 space-y-4">
              <p className="font-semibold text-black/90 text-sm">They may require patience if you:</p>
              <ul className="space-y-3 text-sm text-black/70">
                {[
                  "Are coming from heavily cushioned footwear and expect immediate comfort — the adaptation period is real and worth respecting",
                  "Have foot conditions that specifically require arch support or elevated heel — consult a specialist before switching to zero-drop footwear",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full border border-black/20 flex items-center justify-center text-black/40 text-xs">!</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 text-black/55 text-sm leading-relaxed">
            See how foot health and grounding fit into a broader wellness protocol in my{" "}
            <a href="/product-reviews/biohacking-beginners-guide" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">biohacking beginners guide</a>{" "}
            and{" "}
            <a href="/product-reviews/somatic-reset-guide" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">somatic reset guide</a>,
            or visit my{" "}
            <a href="/personalized-guidance" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">Personalized Guidance</a>{" "}
            page for a complete protocol built around your biology and goals.
          </p>
        </section>

        <div className="section-divider" />

        {/* Verdict */}
        <section data-testid="section-verdict">
          <SectionHeader icon={<ShieldCheck className="w-5 h-5" />} title="My Honest Verdict" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              EarthRunners are the most versatile, durable, and functionally interesting sandals I've found after years of looking. The minimalist design has genuinely changed how my feet feel and move. The grounding technology adds a layer of benefit that the research supports more than most people realise. And the durability means I've spent less on footwear overall, not more.
            </p>
            <p>
              The fact that I travel the world with one pair of sandals, and those sandals are EarthRunners, tells you everything you need to know about how I feel about them.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="card-glass rounded-2xl p-6 sm:p-8 text-center space-y-4" data-testid="section-cta">
          <p className="text-black/70 text-sm leading-relaxed">
            Get EarthRunners with an exclusive discount. Use discount code{" "}
            <span className="font-mono font-semibold text-[#c4622d] bg-[#c4622d]/10 px-2 py-0.5 rounded">THRIVETOOLS</span>{" "}
            at checkout.
          </p>
          <Button asChild size="lg" className="btn-gradient-rose text-white border-0 rounded-full px-6 sm:px-8 py-4 text-sm tracking-widest uppercase font-semibold h-auto leading-relaxed">
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" data-testid="link-earthrunners-shop" className="inline-flex items-center justify-center gap-2 flex-wrap">
              Shop EarthRunners <ExternalLink className="w-4 h-4 flex-shrink-0" />
            </a>
          </Button>
        </div>

        <div className="section-divider" />

        {/* Sources */}
        <section data-testid="section-sources">
          <SectionHeader icon={<BookOpen className="w-5 h-5" />} title="Further Reading and Sources" />
          <div className="space-y-3 text-sm text-black/60 leading-relaxed">
            {[
              {
                label: "PMC — Effects of grounding on inflammation and immune response",
                href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4378297/",
              },
              {
                label: "ScienceDirect — Integrative medicine strategies and earthing",
                href: "https://www.sciencedirect.com/science/article/pii/S1550830719305476",
              },
              {
                label: "PubMed — Grounding as universal anti-inflammatory therapy",
                href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10105021/",
              },
              {
                label: "Healthline — Overview of grounding research",
                href: "https://www.healthline.com/health/grounding",
              },
            ].map((source, i) => (
              <div key={i} className="flex items-start gap-2.5" data-testid={`source-${i}`}>
                <span className="text-[#c4622d] mt-0.5 flex-shrink-0">›</span>
                <a href={source.href} target="_blank" rel="noopener noreferrer" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">
                  {source.label}
                </a>
              </div>
            ))}
          </div>
        </section>

        <div className="space-y-3">
          <p className="text-center text-black/35 text-xs italic" data-testid="text-affiliate">
            Affiliate Disclosure: This article contains affiliate links. I may earn a commission if you purchase through these links at no additional cost to you. I only recommend products I personally use and genuinely believe in. EarthRunners have been part of my daily life for years and this review reflects that.
          </p>
          <p className="text-center text-black/35 text-xs italic" data-testid="text-disclaimer">
            Medical Disclaimer: This article is for informational purposes only and does not constitute medical advice. If you have existing foot conditions or injuries, consult a qualified healthcare professional before switching to minimalist or zero-drop footwear.
          </p>
        </div>

      </article>
    </PageLayout>
  );
}
