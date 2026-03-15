import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Leaf, AlertTriangle, ShieldCheck, Activity, Calendar, Brain, Zap } from "lucide-react";

const HYPERION_URL = "http://www.hyperionherbs.com/discount/eden10";

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-[#c4622d]">{icon}</span>
      <h2 className="font-display text-2xl font-bold text-black">{title}</h2>
    </div>
  );
}

function TreasureCard({ label, subtitle, text }: { label: string; subtitle: string; text: string }) {
  return (
    <div className="card-glass rounded-xl p-5" data-testid={`treasure-${label.toLowerCase()}`}>
      <div className="flex items-center gap-3 mb-3">
        <span className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold text-white" style={{ background: "linear-gradient(135deg,#e8956d,#c4622d)" }}>{label}</span>
        <p className="font-semibold text-black/90 text-sm">{subtitle}</p>
      </div>
      <p className="text-black/65 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function HerbCard({
  number,
  name,
  subtitle,
  children,
  bestFor,
  linkLabel,
}: {
  number: number;
  name: string;
  subtitle: string;
  children: React.ReactNode;
  bestFor: string;
  linkLabel: string;
}) {
  return (
    <div className="card-glass rounded-2xl p-6 space-y-5" data-testid={`herb-card-${number}`}>
      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white mt-0.5" style={{ background: "linear-gradient(135deg,#e8956d,#c4622d)" }}>{number}</span>
        <div>
          <h3 className="font-display text-xl font-bold text-black">{name}</h3>
          <p className="text-[#c4622d] text-sm font-medium mt-0.5">{subtitle}</p>
        </div>
      </div>
      <div className="space-y-3 text-black/70 text-sm leading-relaxed">{children}</div>
      <div className="border-l-4 pl-4" style={{ borderLeftColor: "#c4622d" }}>
        <p className="text-xs font-semibold uppercase tracking-wider text-black/40 mb-1">Best for</p>
        <p className="text-black/65 text-sm italic">{bestFor}</p>
      </div>
      <Button asChild size="sm" className="btn-gradient-rose text-white border-0 rounded-full px-5 py-2.5 text-xs tracking-widest uppercase font-semibold h-auto">
        <a href={HYPERION_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
          {linkLabel} <ExternalLink className="w-3 h-3" />
        </a>
      </Button>
    </div>
  );
}

function ProtocolCard({ label, text }: { label: string; text: string }) {
  return (
    <div className="card-glass rounded-xl p-5" data-testid={`protocol-${label.toLowerCase().replace(/\s+/g, "-").slice(0, 20)}`}>
      <p className="font-semibold text-black/90 text-sm mb-1">{label}</p>
      <p className="text-black/65 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

export default function TonicHerbsGuide() {
  return (
    <PageLayout
      title="Tonic Herbs: The Ancient System of Deep Nourishment Modern Biohackers Are Rediscovering"
      subtitle="2026 Edition"
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-12">

        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border border-[#c4622d]/25 rounded-full px-3 py-0.5 text-xs">
            Complete Guide
          </Badge>
          <Badge className="bg-white/5 text-black/50 border border-white/10 rounded-full px-3 py-0.5 text-xs">
            2026 Edition
          </Badge>
        </div>

        <section data-testid="section-intro">
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              There is a category of herbs that most of the Western wellness world hasn't fully grasped yet, and it's been sitting in plain sight for over four thousand years.
            </p>
            <p>
              Not adaptogens. Not nootropics. Not superfoods. Something older and more foundational than all of those categories combined.
            </p>
            <p>
              They're called tonic herbs, and in Traditional Chinese Medicine (TCM), they occupy the highest tier of medicine possible. Not because they treat disease. But because they build something that no medicine can restore once it's gone: the deep reserves of vitality, resilience, and life force that determine not just how long you live, but how well you live every single day.
            </p>
            <p>
              Modern biohackers are increasingly reaching back to this ancient system, not out of nostalgia, but because the results are real. This guide covers what tonic herbs actually are, how they differ from the adaptogens you may already be using, the most important herbs in the system, and the one brand we trust completely for quality.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-what">
          <SectionHeader icon={<Leaf className="w-5 h-5" />} title="What Are Tonic Herbs? The Most Misunderstood Category in Wellness" />
          <div className="space-y-4 text-black/70 leading-relaxed mb-8">
            <p>
              In herbal medicine, a tonic herb is used to help restore, tone, and invigorate systems in the body, or to promote general health and well-being. Herbal tonics can be dated as far back as 4,000 years ago, as a practice thought to have originated within Traditional Chinese Medicine. The use of tonic herbs extends as far back as ancient times, embedded within TCM, which categorized tonic herbs according to Jing, Qi, and Shen, which can be translated as body, mind, and soul.
            </p>
            <p>
              That three-part framework is worth understanding, because it's the organizing principle of the entire tonic herb system:
            </p>
          </div>
          <div className="space-y-4 mb-8">
            <TreasureCard
              label="Jing"
              subtitle="Constitutional Essence"
              text="Your deep reservoir of vitality you were born with. Jing governs your reproductive health, your resilience, your rate of aging, and your baseline energy. Modern science maps closely to the adrenal system, hormones, and mitochondrial health. Jing tonics rebuild and conserve this essence."
            />
            <TreasureCard
              label="Qi"
              subtitle="Circulating Life Force"
              text="The energy that flows through every biological system. Qi governs your immune function, your digestive vitality, your physical stamina, and your body's ability to adapt to external demands. Qi tonics build functional energy and systemic resilience."
            />
            <TreasureCard
              label="Shen"
              subtitle="Spirit and Emotional Clarity"
              text="Your spirit or emotional clarity, stored in the heart. Shen governs your emotional equilibrium, your capacity for compassion and connection, the quality of your sleep, and the depth of your calm under pressure. Shen tonics nourish the nervous system and cultivate psychological regulation and emotional intelligence."
            />
          </div>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Four primary criteria define a true tonic herb: it creates and supports a state of physical, mental, and emotional well-being through the appropriate balance of Yin and Yang energy. It can be used for an unlimited period with no adverse effects. No matter how long an individual uses it, no tolerance develops. And true tonics must come from their authentic source and spiritual homeland, a principle known in Daoist herbalism as Di Tao, which makes a vital difference in potency and efficacy.
            </p>
            <p>
              That last point is not mysticism. It's terroir, the same principle that makes Bordeaux wine different from wine grown in a parking lot greenhouse. The soil, climate, altitude, and ecological conditions where a plant grows determine its chemical composition, and therefore its medicinal potency.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-vs-adaptogens">
          <SectionHeader icon={<Brain className="w-5 h-5" />} title="Tonics vs Adaptogens: A Distinction Worth Understanding" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Most people use the terms interchangeably. They're not the same thing, and the distinction matters practically.
            </p>
            <p>
              It is a common mistake to think that tonics and adaptogens are identical. While both are defined based on different criteria, some overlap exists. Qi tonics do fulfill the requirements for what Western herbalism defines as an adaptogen, but western adaptogens do not fulfill the criteria for being a tonic. The primary reason is that we often build a tolerance for Western adaptogens, usually requiring a break and rotation of herbs to prevent this issue.
            </p>
            <p>
              The concept of an herbal adaptogen was coined in 1947 by Soviet scientist Nikolai Lazarev, who was searching for substances that would improve human health and performance over the long-term without causing dependence or negative effects. Since then, herbalists have identified numerous adaptogens from herbs found all over the world.
            </p>
            <p>
              The key difference: adaptogens respond to stress. Tonics build foundation. Adaptogens are reactive; tonics are constructive. Ashwagandha, for example, is a powerful adaptogen. It helps your nervous system manage cortisol when you're stressed. But it's not traditionally considered a tonic in the Chinese system because it's situational, and most people cycle it to avoid diminishing returns.
            </p>
            <p>
              Tonic herbs create and support a state of physical, mental, and emotional well-being. They can be used for an unlimited period with no adverse effects, and no tolerance builds over time. You don't cycle He Shou Wu or Reishi the way you cycle Rhodiola. You take them daily, indefinitely, the way you eat food, because in TCM, they are essentially that: food for your deep vitality systems.
            </p>
            <p>
              The key benefit of herbs known to be tonics is that they can restore the body to homeostasis better than any medicine because they target and strengthen the whole body. One of the primary characteristics of Chinese herbal medicine is the use of tonifying herbs and herbal formulas.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-quality">
          <SectionHeader icon={<AlertTriangle className="w-5 h-5" />} title="The Quality Problem: Why Most Tonic Herbs You've Tried Didn't Work" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Before getting into the herbs themselves, this is the most important thing to understand about tonic herbs in 2026: most products on the market are functionally useless.
            </p>
            <p>
              Most of what is sold as herbal supplements is either powdered raw herbs or mycelium grown on grain, technically legal, functionally useless.
            </p>
            <p>
              The problem is threefold. First, many products use raw, unextracted herb powder, which has far lower bioavailability than a properly prepared extract. Traditional Chinese medicine never consumed raw herb powder; herbs were always decocted, extracted, and concentrated. Second, mushroom products frequently use mycelium grown on grain (rice or oats) rather than actual fruiting bodies, the part of the mushroom with therapeutic value. The mycelium product is mostly starch, not medicine. Third, Di Tao sourcing, getting herbs from their authentic geographical origin, is expensive and logistically difficult, so most brands skip it entirely.
            </p>
            <p>
              This is why most people who've tried tonic herbs report minimal effects. They weren't taking real tonic herbs. They were taking cheap facsimiles of them.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-herbs">
          <SectionHeader icon={<Activity className="w-5 h-5" />} title="The 7 Most Important Tonic Herbs and What Each One Does" />
          <div className="space-y-6">

            <HerbCard
              number={1}
              name="Reishi (Ganoderma lucidum)"
              subtitle="The Shen Tonic"
              bestFor="Stress resilience, immune modulation, sleep quality, nervous system calm, longevity. Daily use, no cycling required."
              linkLabel="Get Hyperion Herbs Duanwood Reishi"
            >
              <p>
                Reishi mushroom is the most revered herbal substance in Asia, ranking as the elite substance for the attainment of radiant health, longevity, and spiritual attainment. It has maintained its position at the top of Chinese tonic herbalism for at least 3,000 years, and its reputation is only increasing.
              </p>
              <p>
                In the TCM framework, Reishi is the supreme Shen tonic. It nourishes the spirit, calms the nervous system, and builds the kind of deep equanimity that can't be forced or faked. As a gentle tonic and adaptogen, Reishi is ideal for daily wellness support. A good deal of research on Reishi confirms its therapeutic potential in supporting the immune system and its ability to help keep the body in balance. Practitioners of Traditional Chinese Medicine have historically prescribed Reishi to balance Qi, the vital energy.
              </p>
              <p>
                Hyperion Herbs' Duanwood Reishi is one of the most time-tested nervous system tonics on Earth. Take it daily, give it 7 to 10 days, then notice how things don't bother you as much. Not because you're numb, but because your system isn't on fire anymore.
              </p>
              <p>
                The "Duanwood" designation refers to a specific wooden log-based cultivation method that produces significantly higher triterpene and beta-glucan concentrations than grain-based cultivation. It's the traditional method, and it produces a categorically different product.
              </p>
            </HerbCard>

            <HerbCard
              number={2}
              name="He Shou Wu (Polygonum multiflorum)"
              subtitle="The Jing Restorer"
              bestFor="Hair health and pigmentation, anti-aging, blood building, deep Jing restoration, longevity. Long-term daily use."
              linkLabel="Get Hyperion Herbs He Shou Wu"
            >
              <p>
                He Shou Wu is one of the most legendary herbs in all of Chinese medicine, and one of the most misunderstood in the West. The name translates to "Black-haired Mr. He," referencing a legendary figure who allegedly regained his youth and vigor through its use. He Shou Wu is widely used in China to restore black hair and other signs of youth, and is widely marketed as a general anti-aging herb.
              </p>
              <p>
                The legend is backed by increasingly interesting science. A 2015 study suggests that He Shou Wu, when administered orally, stimulates hair growth by targeting the FGF-7 gene, which encodes proteins specific to epithelial cell growth. A 2020 study showed that it elongates the anagen growth phase and abrogates the effect of androgen in cultured human hair cells. Another study showed He Shou Wu compounds induced a greater increase in proliferation of hair cells than minoxidil (Rogaine). Research also shows that it has a positive impact on delaying the onset of gray hair, and a number of studies confirm that He Shou Wu stimulates the body to produce superoxide dismutase, the most powerful natural antioxidant enzyme, which staves off the aging process.
              </p>
              <p>
                He Shou Wu's documented use in Traditional Chinese Medicine spans over 1,300 years, first appearing in written texts around 713 AD. The herb's power lies in its unique chemical composition, particularly tetrahydroxystilbene glucoside (TSG), which comprises 1 to 4% of the processed root. This compound, along with other stilbenes, anthraquinones, and phospholipids, creates He Shou Wu's distinctive hair-supporting and longevity properties.
              </p>
              <p>
                Beyond hair, He Shou Wu strengthens red blood cell membranes, increases circulation of red blood cells, and builds blood. It tonifies and nourishes the blood and organs, and is both energizing and calming, blood purifying and building, and hormone balancing.
              </p>
              <div className="card-glass rounded-lg p-4 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#c4622d] mb-1">Critical note on preparation</p>
                <p className="text-black/65 text-sm">Always use processed (prepared) He Shou Wu, known as Zhi He Shou Wu. Raw Fo-Ti can be harsh on the liver and is traditionally used only for detoxification purposes. Hyperion Herbs uses properly prepared He Shou Wu extract, which is non-negotiable for safety and efficacy.</p>
              </div>
            </HerbCard>

            <HerbCard
              number={3}
              name="Cordyceps CS-4"
              subtitle="The Qi and Jing Performance Tonic"
              bestFor="Energy, endurance, oxygen efficiency, athletic performance, libido, adrenal support. Morning use."
              linkLabel="Get Hyperion Herbs Cordyceps"
            >
              <p>
                Cordyceps is the tonic herb that crosses most naturally into modern biohacking. In TCM, it's classified as both a Jing and Qi tonic. It builds the deep energy reserves and circulating vitality simultaneously, making it uniquely relevant for physical and cognitive performance.
              </p>
              <p>
                The active compounds in Cordyceps, cordycepin and adenosine, increase the production of ATP directly, improve oxygen utilization, and support mitochondrial efficiency. Clinical research has demonstrated improvements in VO2 max, endurance capacity, and reduction in exercise-induced fatigue. Adaptogens like Cordyceps can non-specifically enhance the resistance of the human body under a wide range of external stress conditions, especially by affecting the immune-neuro-endocrine system and the hypothalamic-pituitary-adrenal axis.
              </p>
              <p>
                The quality issue is especially acute with Cordyceps. Wild Cordyceps sinensis, harvested from the Tibetan plateau at 4,000 meters altitude, is extraordinarily expensive. Most commercial Cordyceps is CS-4, a liquid-fermented strain that closely mirrors the chemical profile of wild Cordyceps without the astronomical cost. The key is that it must be liquid-fermented, not grown on grain. Hyperion Herbs uses liquid-fermented CS-4 with no rice, oats, or filler.
              </p>
            </HerbCard>

            <HerbCard
              number={4}
              name="Chaga (Inonotus obliquus)"
              subtitle="The Immune Tonic"
              bestFor="Immune resilience, antioxidant protection, inflammation, gut health. Mixes into coffee or cacao."
              linkLabel="Get Hyperion Herbs Chaga"
            >
              <p>
                Chaga is technically a fungus that grows on birch trees in Siberia, Canada, and Northern Europe, and it has among the highest antioxidant scores of any natural substance measured on the ORAC scale. In TCM terms, it's a deep immune tonic. It doesn't stimulate the immune system acutely. It trains and modulates it over time.
              </p>
              <p>
                Tonic herbs and herbal formulas commonly include medicinal mushrooms like Reishi and other plants that support a balanced immune response. Chaga sits alongside Reishi as the two most important immune tonic mushrooms, complementary rather than redundant. Chaga's primary action is antioxidant protection and immune calibration, while Reishi's is nervous system and Shen nourishment.
              </p>
              <p>
                The beta-glucan content in Chaga, particularly the betulinic acid derived from the birch bark it grows on, is its most researched active constituent, with demonstrated immune-modulating and anti-inflammatory properties. Hyperion Herbs sources their Chaga wild-harvested from Siberia as a dual-extracted, 18:1 concentrated product with 30 to 35% polysaccharide content and zero additives.
              </p>
            </HerbCard>

            <HerbCard
              number={5}
              name="Lion's Mane (Hericium erinaceus)"
              subtitle="The Shen and Brain Tonic"
              bestFor="Cognitive clarity, memory, neurogenesis support, long-term brain health, Shen nourishment. Mid-morning use."
              linkLabel="Get Hyperion Herbs Lion's Mane"
            >
              <p>
                Lion's Mane is the tonic herb most aligned with modern cognitive biohacking. It's the primary source of hericenones and erinacines, the two compound classes responsible for stimulating Nerve Growth Factor (NGF) and Brain-Derived Neurotrophic Factor (BDNF), both of which support neuronal health, neuroplasticity, and the brain's structural integrity.
              </p>
              <p>
                Traditional Chinese Medicine emphasizes tonic herbs such as Reishi, Astragalus, and He Shou Wu to nourish vitality and longevity, and Lion's Mane sits naturally alongside these as the preeminent tonic for Shen clarity and cognitive longevity. Where Reishi calms and grounds the Shen, Lion's Mane clarifies and sharpens it.
              </p>
              <p>
                Clinical research has demonstrated improvements in mild cognitive impairment in older adults, with several studies showing cognitive function continues to decline when Lion's Mane supplementation stops, suggesting the benefits are active and ongoing rather than cumulative and permanent.
              </p>
              <p>
                Both water-soluble and alcohol-soluble fractions of Lion's Mane contain distinct active compounds. A dual-extraction process is required to capture both, which is the standard Hyperion Herbs uses.
              </p>
            </HerbCard>

            <HerbCard
              number={6}
              name="Schisandra (Wu Wei Zi)"
              subtitle="The Five Flavour Adaptogenic Tonic"
              bestFor="Liver health, stress resilience, hormonal balance, anti-aging, whole-system tonification. Daily use."
              linkLabel="Get Hyperion Herbs Schisandra"
            >
              <p>
                Schisandra has been used for over 2,000 years to support the body's natural detoxification processes and is a powerful adaptogen that supports the liver, immune, and nervous systems.
              </p>
              <p>
                Schisandra is one of the most time-tested Chinese herbs for tonifying Qi and the Kidneys, the latter of which is the storage house for Jing, your energy bank account. In western herbalism, Schisandra is thought to have strong anti-aging properties and may also support blood sugar and blood pressure levels, in addition to supporting a more normal hormonal balance.
              </p>
              <p>
                Its Chinese name, Wu Wei Zi, means "five-flavour fruit," because it contains all five flavours recognized in TCM (sweet, sour, bitter, pungent, and salty). This is significant not as poetry but as pharmacology: the presence of all five flavours indicates it nourishes all five organ systems simultaneously. It's a whole-system tonic in a way that very few herbs are.
              </p>
              <p>
                Schisandra's active compounds, schisandrins and gomisins, have demonstrated hepatoprotective (liver-protective), adaptogenic, and neuroprotective effects in research. It's one of the few herbs with strong evidence for directly protecting the liver from chemical and stress-induced damage, making it particularly relevant for anyone under high toxic load or chronic stress.
              </p>
            </HerbCard>

            <HerbCard
              number={7}
              name="Astragalus (Huang Qi)"
              subtitle="The Qi and Immune Tonic"
              bestFor="Immune function, energy building, longevity, recovery, defensive Qi. Long-term daily use."
              linkLabel="Get Hyperion Herbs Astragalus"
            >
              <p>
                Astragalus is one of the most commonly used adaptogens in Chinese medicine, with similar properties to ginseng but more mild and gentle. In TCM, it's the primary Qi tonic, the herb most prescribed for building functional energy, strengthening the immune system, and protecting the body's defensive surface (what TCM calls Wei Qi, the protective vital force).
              </p>
              <p>
                Astragalus is used for Qi tonification. It builds the body's core energy and adaptive capacity. Clinically, astragalus polysaccharides (APS) are among the most researched immunomodulatory compounds in herbal medicine, with demonstrated effects on NK cell activity, T-cell proliferation, and cytokine regulation.
              </p>
              <p>
                For biohackers, one of the most intriguing areas of astragalus research involves TA-65, a compound derived from astragalus that has shown telomere-lengthening properties in small studies, putting it directly in the longevity science conversation alongside NMN and other hallmarks-of-aging interventions.
              </p>
            </HerbCard>

          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-protocol">
          <SectionHeader icon={<Zap className="w-5 h-5" />} title="The Three Treasures Framework: Building Your Tonic Protocol" />
          <div className="space-y-4 text-black/70 leading-relaxed mb-6">
            <p>
              Rather than picking herbs randomly, the most elegant approach to tonic herbalism is to build your stack around the three treasures, Jing, Qi, and Shen, ensuring you're nourishing all three dimensions simultaneously.
            </p>
            <p>
              The six vital aspects of tonic herbalism include: oneness and unity of everything, where humans, nature, organs, and mind-body function as one. Yin and Yang as opposing forces within the whole. The three treasures of Jing, Shen, and Qi. The four seasons and adapting to seasonal changes. The five elements theory. And the Chinese organ system, where all organs are integrated units based on circulation and utilization of Qi.
            </p>
            <p>A practical starting protocol for most people:</p>
          </div>
          <div className="space-y-4">
            <ProtocolCard
              label="For Jing: deep vitality and longevity"
              text="He Shou Wu daily, long-term. Cordyceps for active performance days."
            />
            <ProtocolCard
              label="For Qi: energy and immunity"
              text="Astragalus as a daily foundation. Chaga for immune depth and antioxidant protection."
            />
            <ProtocolCard
              label="For Shen: nervous system and emotional clarity"
              text="Reishi every evening. Lion's Mane mid-morning for cognitive clarity and neural health."
            />
          </div>
          <p className="mt-6 text-black/65 text-sm leading-relaxed">
            This six-herb protocol covers all three treasures, all major organ systems, and all primary biohacking goals, energy, cognition, longevity, immune function, and stress resilience. It's the closest thing to a complete tonic system available in a modern format.
          </p>
        </section>

        <div className="section-divider" />

        <section data-testid="section-hyperion">
          <SectionHeader icon={<ShieldCheck className="w-5 h-5" />} title="Why We Recommend Hyperion Herbs" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Hyperion Herbs was built by Brandon, who spent 20 years in the herbal supplement space and created the brand specifically because most products sold as herbal supplements were either powdered raw herbs or mycelium grown on grain, technically legal, functionally useless.
            </p>
            <p>
              Brandon has been personally using the herbs found in his products for more than a decade and has seen first-hand the benefits they have brought into his life. His mission is to share the information, experience, and knowledge he has accumulated with the intention to help as many people as possible.
            </p>
            <p>
              Every Hyperion Herbs product is: extracted and concentrated for maximum bioavailability, sourced from authentic Di Tao origins, free of fillers, binders, and flow agents, and formulated with the same standard Brandon would apply to herbs he gives his own family. That's not marketing language. It's the operating philosophy of someone who spent two decades being burned by bad products before building the ones he actually wanted.
            </p>
            <p>
              Their current lineup covers Calm with Reishi, Energize with Cordyceps, Clarity with Lion's Mane, Super Immunity with Chaga, Potency with Nettle Root, Power with Polyrachis Ant, and Rebuild with He Shou Wu. Each product is named for its primary function, because at Hyperion Herbs, the goal is always practical results, not mysticism.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        <section data-testid="section-how-to-start">
          <SectionHeader icon={<Calendar className="w-5 h-5" />} title="How to Start: A Beginner's Approach to Tonic Herbs" />
          <div className="space-y-4 text-black/70 leading-relaxed mb-6">
            <p>
              Tonic herbs are not like pharmaceuticals or even standard supplements. Their effects are cumulative, constitutional, and often subtle at first, building depth over weeks and months rather than producing an acute hit in an hour.
            </p>
            <p>
              Adaptogens and tonic herbs are traditionally used as daily tonics, meaning their effects often build gradually over time. Many people report noticing benefits within several weeks of consistent use, although the timeline can vary depending on the herb and the individual.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: "Start with one or two", text: "If stress and sleep are your primary concerns, start with Reishi. If energy and performance, start with Cordyceps. If cognitive clarity and long-term brain health, start with Lion's Mane. Give each herb 30 days of consistent daily use before assessing, and add others gradually." },
              { label: "Take them daily", text: "The power of tonic herbs is in daily, uninterrupted use. Missing days doesn't ruin anything, but consistency is the entire mechanism of action. These are not herbs you take when you're symptomatic. They are herbs you take the way you eat vegetables: as an ongoing investment in your biological foundation." },
              { label: "Track your baseline", text: "HRV, sleep score, energy level (1 to 10), cognitive sharpness, stress reactivity. Measure before you start and reassess at 30 and 90 days. The changes are real but often gradual. You may not notice them until you stop." },
              { label: "Quality is everything", text: "True tonics come from their authentic source and spiritual homeland, a principle known as Di Tao. Cheap herb powder from unknown sources will not produce the results described in this article. Hyperion Herbs is the standard we hold all products to, and the only brand we recommend at ThriveTools." },
            ].map((item, i) => (
              <div key={i} className="card-glass rounded-xl p-5" data-testid={`start-tip-${i}`}>
                <p className="font-semibold text-black/90 text-sm mb-1">{item.label}</p>
                <p className="text-black/65 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-black/55 text-sm leading-relaxed">
            See how tonic herbs fit into a complete stack in our{" "}
            <a href="/product-reviews/biohacking-supplements-2026" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">biohacking supplements guide</a>,
            our{" "}
            <a href="/product-reviews/biohacking-beginners-guide" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">biohacking beginners guide</a>,
            and our{" "}
            <a href="/product-reviews/breathwork-beginners-guide" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">breathwork guide</a>{" "}
            for the complementary practices that amplify your results. Or explore our{" "}
            <a href="/personalized-guidance" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">Personalized Guidance</a>{" "}
            program for a complete protocol built around your specific physiology.
          </p>
        </section>

        <div className="section-divider" />

        <section data-testid="section-cta">
          <h2 className="font-display text-2xl font-bold text-black mb-4">Get Started with Hyperion Herbs</h2>
          <p className="text-black/70 leading-relaxed mb-6">
            All products mentioned in this article are available at{" "}
            <a href={HYPERION_URL} target="_blank" rel="noopener noreferrer" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">hyperionherbs.com</a>.
            Whether you're starting with a single herb or building a full three-treasures protocol, Hyperion Herbs is the cleanest, most potent source of traditional Chinese tonic herbs available today.
          </p>
          <div className="text-center">
            <Button asChild size="lg" className="btn-gradient-rose text-white border-0 rounded-full px-6 sm:px-8 py-4 text-sm tracking-widest uppercase font-semibold h-auto leading-relaxed">
              <a href={HYPERION_URL} target="_blank" rel="noopener noreferrer" data-testid="link-hyperion-main" className="inline-flex items-center justify-center gap-2 flex-wrap">
                Use code EDEN10 to shop Hyperion Herbs <ExternalLink className="w-4 h-4 flex-shrink-0" />
              </a>
            </Button>
          </div>
        </section>

        <p className="text-center text-black/35 text-xs italic" data-testid="text-affiliate">
          Affiliate Disclosure: Some links in this article are affiliate links. If you purchase through these links, ThriveTools may earn a small commission at no additional cost to you. We only recommend products we personally use and believe in.
        </p>
        <p className="text-center text-black/35 text-xs italic" data-testid="text-disclaimer">
          Medical Disclaimer: This article is for informational purposes only and does not constitute medical advice. Tonic herbs are not intended to diagnose, treat, cure, or prevent any disease. He Shou Wu is not recommended for pregnant or breastfeeding women, those with liver conditions, or those with abnormal blood sugar. Always consult a qualified healthcare professional before beginning any new supplement regimen.
        </p>

      </article>
    </PageLayout>
  );
}
