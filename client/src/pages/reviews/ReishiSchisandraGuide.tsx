import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Leaf, Zap, ShieldCheck, BookOpen, Copy, Check, FlaskConical } from "lucide-react";
import { useState } from "react";
import hyperionImg from "@assets/IMG_8925-2-min-2_1773695109201.jpg";

const SHOP_URL = "http://www.hyperionherbs.com/discount/eden10";
const DISCOUNT_CODE = "EDEN10";

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-[#c4622d]">{icon}</span>
      <h2 className="font-display text-2xl font-bold text-black">{title}</h2>
    </div>
  );
}

function OrganCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
      <p className="text-xs font-semibold uppercase tracking-wider text-[#c4622d] mb-2">{title}</p>
      <p className="text-black/70 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function TreasureCard({ name, body }: { name: string; body: string }) {
  return (
    <div className="card-glass rounded-2xl p-6 space-y-3">
      <p className="font-display text-lg font-bold text-black">{name}</p>
      <p className="text-black/65 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function CopyCodeButton() {
  const [copied, setCopied] = useState(false);
  function handleCopy() {
    navigator.clipboard.writeText(DISCOUNT_CODE).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }
  return (
    <button
      onClick={handleCopy}
      data-testid="button-copy-eden10"
      className="inline-flex items-center gap-2 font-mono font-semibold text-[#c4622d] bg-[#c4622d]/10 hover:bg-[#c4622d]/20 px-4 py-2 rounded-lg transition-colors border border-[#c4622d]/20 cursor-pointer"
    >
      <span>{DISCOUNT_CODE}</span>
      {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
      <span className="text-xs text-black/40 font-sans ml-1">{copied ? "Copied!" : "Click to copy"}</span>
    </button>
  );
}

export default function ReishiSchisandraGuide() {
  return (
    <PageLayout
      title="Reishi and Schisandra: The Only Two Plants Beneficial for Every Single Organ in Your Body"
      subtitle="The 4000 year old science behind why I take both every single day for life."
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-12">

        {/* Badges */}
        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border border-[#c4622d]/25 rounded-full px-3 py-0.5 text-xs">
            Tonic Herbs Guide
          </Badge>
          <Badge className="bg-white/5 text-black/50 border border-white/10 rounded-full px-3 py-0.5 text-xs">
            2026 Edition
          </Badge>
        </div>

        {/* Intro */}
        <section data-testid="section-intro">
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              In 14 years of researching herbs, supplements, and the entire landscape of natural medicine I have never encountered a more definitive answer to the question "what should I take every day for the rest of my life?" than the combination of Reishi and Schisandra.
            </p>
            <p>
              Not because they're trendy. Not because a podcast told me to. But because when you understand what these two plants actually do at a biological level, and why they occupy the highest tier of medicine in the oldest continuous medical tradition on Earth, the question stops being whether to take them and becomes why isn't everyone taking them.
            </p>
            <p>
              This article makes the case. Thoroughly. For the full context on tonic herbs as a category, see my{" "}
              <a href="/product-reviews/tonic-herbs-guide" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">complete tonic herbs guide</a>{" "}
              and my{" "}
              <a href="/product-reviews/biohacking-supplements-2026" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">biohacking supplements guide</a>.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Superior Herbs */}
        <section data-testid="section-superior-herbs">
          <SectionHeader icon={<Leaf className="w-5 h-5" />} title="The Concept That Changes Everything: Superior Herbs" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Most people approach supplements the way they approach medication, you take something because something is wrong and you stop when it's better. That model makes sense for pharmaceuticals. It makes no sense for tonic herbs.
            </p>
            <p>
              In Traditional Chinese Medicine, the most sophisticated herbal system ever developed, herbs are classified into three tiers. The lowest tier treats specific diseases. The middle tier tonifies and strengthens. The highest tier, called superior or heaven herbs, does something categorically different from all the rest.
            </p>
            <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#c4622d] mb-2">The superior herb definition</p>
              <p className="text-black/70 text-sm leading-relaxed">
                Superior herbs calm the spirit, tonify Wei Qi and Blood, nourish the Heart, and support all three treasures, Jing, Qi, and Shen. They can be taken daily for an unlimited period with no adverse effects, building health and vitality cumulatively over time rather than addressing symptoms reactively.
              </p>
            </div>
            <p>
              Reishi sits at the very top of this hierarchy. Schisandra is one of only fifty fundamental herbs recognised across the entire TCM pharmacopoeia, and the only plant to contain all five flavours, which in TCM theory means it benefits all five organ systems simultaneously.
            </p>
            <p>
              These aren't marketing claims. They're the conclusions of a medical tradition that has been clinically observing these plants in millions of people across thousands of years. Modern science has spent the last few decades catching up, and increasingly confirming what classical herbalists knew.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Three Treasures */}
        <section data-testid="section-three-treasures">
          <SectionHeader icon={<FlaskConical className="w-5 h-5" />} title="The Three Treasures: The Framework That Makes This Make Sense" />
          <div className="space-y-4 text-black/70 leading-relaxed mb-6">
            <p>
              To understand why Reishi and Schisandra are in a different category from every other plant, you need to understand what the three treasures are.
            </p>
          </div>
          <div className="space-y-5">
            <TreasureCard
              name="Jing"
              body="Your constitutional essence, the deep reserve of vitality you were born with. It governs your reproductive health, your rate of aging, your baseline resilience, and the depth of your physical reserves. In modern terms it maps most closely to mitochondrial health, hormonal balance, and the biological markers of aging. Jing depletes gradually through chronic stress, overwork, inadequate sleep, and the simple passage of time. It cannot be restored quickly. It can only be nourished slowly, consistently, over years."
            />
            <TreasureCard
              name="Qi"
              body="Your circulating vital energy, the functional expression of your Jing in every biological system. Immune function, digestive vitality, physical stamina, mental sharpness, and the body's capacity to adapt to external demands are all expressions of healthy Qi. Where Jing is your savings account, Qi is the cash flow that runs your daily operations."
            />
            <TreasureCard
              name="Shen"
              body="Your spirit, stored in the Heart, expressed through your emotional clarity, your capacity for genuine calm, your quality of sleep, and your ability to remain present under pressure. In modern neuroscience terms, Shen maps most closely to autonomic nervous system regulation, HRV, and the neurological markers of psychological resilience."
            />
          </div>
          <div className="mt-6 space-y-4 text-black/70 leading-relaxed">
            <p>
              Reishi is known in TCM as a three treasure herb that harmonizes Jing, Qi, and Shen simultaneously, regarded as a symbol of success, well-being, divine power, and longevity. It is the only substance in the classical literature explicitly documented to nourish all three treasures at once.
            </p>
            <p>
              Schisandra nourishes Jing through the Kidneys, Qi through the Lungs and Spleen, and Shen through the Heart. Wu Wei Zi is unique because it embodies all five flavors, sour, sweet, bitter, pungent, and salty. With these properties, Wu Wei Zi is an essential herb for emotional stability, focus, and resilience to stress.
            </p>
            <p>
              Together, Reishi and Schisandra provide the most complete three-treasures coverage of any two-herb combination in the classical materia medica. That's not an opinion. It's the consensus of the TCM tradition across 4,000 years of clinical observation.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Reishi */}
        <section data-testid="section-reishi">
          <SectionHeader icon={<ShieldCheck className="w-5 h-5" />} title="Reishi: The Mushroom of Immortality. What It Actually Does to Every Organ" />
          <div className="space-y-4 text-black/70 leading-relaxed mb-6">
            <p>
              The name Ling Zhi, Reishi's Chinese name, means herb of spiritual potency. It has been called the Mushroom of Immortality for over 2,000 years. Among cultivated mushrooms, Ganoderma lucidum is unique in that its pharmaceutical rather than nutritional value is paramount. Its specific applications and attributed health benefits include control of blood glucose levels, modulation of the immune system, hepatoprotection, bacteriostasis, and more.
            </p>
            <p>
              Reishi contains over 400 bioactive compounds including triterpenoids, polysaccharides, and proteins. These components offer a broad range of pharmacological effects including immunomodulation, anticancer, antioxidant, antidiabetic, and neuroprotective properties.
            </p>
            <p>Here is what the research shows Reishi does to each major organ system:</p>
          </div>
          <div className="space-y-4">
            <OrganCard
              title="The Heart and Cardiovascular System"
              body="The triterpenes in Reishi protect the liver, lower blood pressure and cholesterol, fight allergic responses triggered by histamine, and possess anticancer activity. Reishi also enhances bone marrow nucleated cell production as well as increases white blood cells and hemoglobin. In TCM terms, Reishi calms the spirit, augments Heart Qi, and tonifies Heart Blood, the classical description of what modern science is now confirming through cardiovascular research."
            />
            <OrganCard
              title="The Liver"
              body="Studies have shown that Reishi mushroom can help regenerate liver cells more quickly and can be beneficial to overall liver health. The hepatoprotective effect of Reishi's triterpenes is one of the most thoroughly documented aspects of its pharmacology. It is used clinically in Asia for liver disease management alongside conventional treatment."
            />
            <OrganCard
              title="The Lungs and Immune System"
              body="Conditions such as bronchitis, asthma, and other chronic respiratory conditions show significant improvement when treated with Reishi extracts. It has been shown to help the immune system respond better to histamine reactions and help deter allergic reactions. The beta-glucans in Reishi provide the anticancer effect by preventing abnormal blood vessel formation while also boosting immunity. New research also suggests that Reishi may support the gut microbiome, with researchers reporting that Reishi is an essential prebiotic for increasing bacterial flora and a health-promoting agent due to its abundant source of polysaccharides, triterpenoids, and polyphenols."
            />
            <OrganCard
              title="The Brain and Nervous System"
              body="This is the area I personally notice most profoundly after 10 years of daily Reishi use. Reishi is highly regarded for its support of the endocrine system, especially the adrenal cortex, helping to balance levels of stress hormones cortisol and adrenalin. Studies have suggested that taking Reishi regularly can help you experience reduced anxiety, find more stable long-lasting focus, and restore balance and tranquility in a natural way. The Shen nourishing effect is not sedation. It is not numbness. It is a gradual recalibration of the nervous system's default state, from reactive and wired toward calm and grounded."
            />
            <OrganCard
              title="The Kidneys and Endocrine System"
              body="The Chinese attribute Reishi with increasing virility and describe it as supporting the Kidney system, the TCM repository of Jing and the governing system for reproductive health, aging, and deep constitutional vitality. Modern research on Reishi's effects on testosterone, adrenal function, and hormonal balance is building a scientific framework around what classical herbalists documented empirically millennia ago."
            />
          </div>
          <p className="mt-6 text-black/55 text-sm leading-relaxed italic">
            I thought being perpetually on edge was just who I was before Reishi. It wasn't. It was an under-nourished nervous system that didn't have what it needed to regulate itself properly.
          </p>
        </section>

        <div className="section-divider" />

        {/* Schisandra */}
        <section data-testid="section-schisandra">
          <SectionHeader icon={<Leaf className="w-5 h-5" />} title="Schisandra: The Five Flavour Berry That Benefits Every Organ Simultaneously" />
          <div className="space-y-4 text-black/70 leading-relaxed mb-6">
            <p>
              Schisandra chinensis, known as Wu Wei Zi, meaning five-flavour fruit, is in a category of its own in the plant kingdom. No other plant contains all five flavours. No other plant simultaneously nourishes all five organ systems. This is not metaphor. It has a specific, documented biochemical basis.
            </p>
            <p>
              Based on the Five-Element theory in TCM, while the five tastes of Schisandra berry refer to its influence on the five visceral organs in the body, ancient Chinese herbalists specifically trumpeted the berry's beneficial effect on the Qi of the five visceral organs. Research from Hong Kong University of Science and Technology found, for the first time, an ability of Schisandra berry to fortify mitochondrial antioxidant status, thereby offering the body a generalised protection against noxious challenges both of internal and external origin.
            </p>
            <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#c4622d] mb-2">The mitochondrial connection</p>
              <p className="text-black/70 text-sm leading-relaxed">
                Given the indispensable role of the mitochondrion in generating cellular energy, the linking of Schisandra berry to the safeguarding of mitochondrial function provides a biochemical explanation for its Qi-invigorating action. The clinical manifestations of Yang and Qi deficiencies in TCM resemble those of chronic fatigue syndrome in Western medicine, which is pathologically associated with mitochondrial dysfunction. By virtue of their ability to enhance mitochondrial function and its regulation, Qi-invigorating tonic herbs such as Schisandra may therefore prove beneficial in the treatment of chronic fatigue syndrome with Yang deficiency.
              </p>
            </div>
            <p>Here is what Schisandra does to each of the five organ systems it is specifically documented to nourish:</p>
          </div>
          <div className="space-y-4">
            <OrganCard
              title="The Liver. The Primary Target"
              body="Schisandra berries contain lignans that help detoxify the liver, regenerate liver cells, and improve its overall function. Schisandra increases the liver's ability to make the enzyme glutathione peroxidase. This compound deactivates several types of free radicals that attack the outer membrane of liver cells. It helps to counter the damage done to the liver by chronic viral hepatitis and HIV. The schizandrol and schisandrin lignans are the primary active compounds responsible, and they are among the most potent liver-protective plant compounds ever identified."
            />
            <OrganCard
              title="The Kidneys. Jing Consolidation"
              body="The fruiting body nourishes the Kidney organ system, which governs the Jing, the body's energy savings account. In practical terms Schisandra's action on the Kidneys translates to improved adrenal resilience, better stress tolerance, stabilised reproductive hormones, and the kind of deep energy reserves that make everything else in life more sustainable."
            />
            <OrganCard
              title="The Heart. Shen Regulation"
              body="Wu Wei Zi calms the Shen, which is housed in the Heart organ system. TCM practitioners have prescribed it for centuries for occasional anxiousness and over-worrying, poor sleep, and a cloudy mind. New research in the Journal of Ethnopharmacology suggests that compounds in Wu Wei Zi possess endocannabinoid-like anti-stress effects. The research reveals that Schisandra lignans may interact with the CB2 receptor, helping to promote relaxation, mental clarity, and emotional resilience without the foggy side effects. Your body has a built-in endocannabinoid system that governs mood and stress regulation. Schisandra activates it naturally without any psychoactive effect."
            />
            <OrganCard
              title="The Lungs. Qi Consolidation"
              body="Wu Wei Zi has anti-inflammatory properties that soothe the respiratory system and reduce symptoms of chronic respiratory conditions. In TCM the Lungs govern not just respiration but the production of Wei Qi, the defensive vital force that protects the body from external pathogens. Schisandra strengthens this protective layer directly."
            />
            <OrganCard
              title="The Spleen. Digestive Vitality"
              body="Schisandra which contains all five flavours is said to benefit each part of the whole body, specifically the five yin organs in TCM: the Liver, Spleen, Lung, Heart, and Kidney. The Spleen in TCM governs digestion, nutrient absorption, and the transformation of food into usable Qi. Schisandra's action on digestive function is why it has been used for centuries to improve energy levels that are rooted in poor nutrient absorption rather than just stress or overwork. Research has confirmed the herb's potent protective and rebalancing effects on the central nervous system, endocrine, immune, respiratory, cardiovascular, and gastrointestinal systems simultaneously."
            />
          </div>
        </section>

        <div className="section-divider" />

        {/* Why Together */}
        <section data-testid="section-together">
          <SectionHeader icon={<Zap className="w-5 h-5" />} title="Why These Two Plants Together Are More Than the Sum of Their Parts" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Taken individually, Reishi and Schisandra are both extraordinary. Taken together daily they create a coverage of the three treasures and the five organ systems that is genuinely unmatched in the plant kingdom.
            </p>
            <p>
              Reishi anchors the Shen, builds Qi through the immune and cardiovascular systems, and nourishes Jing through its action on the Kidneys and endocrine system. Its primary strength is nervous system regulation and immune intelligence, the deep calm that comes from a well-nourished spirit.
            </p>
            <p>
              Schisandra consolidates Jing through the Kidneys, builds Qi through the Lungs and Spleen, regulates Shen through the Heart, protects Liver function as its most direct biochemical action, and provides mitochondrial-level protection across every cell in the body.
            </p>
            <p>
              Together they create a daily practice that covers every organ, every treasure, and every biological system simultaneously. Schisandra is considered a substitute for ginseng in the TCM tradition. It has the breadth of a premier Qi tonic combined with the depth of a Jing herb and the subtlety of a Shen nourishing plant. Combined with Reishi's unparalleled Shen and three-treasure action, this is the most complete two-herb tonic protocol available anywhere in classical or modern herbal medicine.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* For Life */}
        <section data-testid="section-for-life">
          <SectionHeader icon={<ShieldCheck className="w-5 h-5" />} title="Why You Take Them for Life. Not for a Season" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              This is the distinction most people struggle with because it runs counter to everything the supplement industry teaches us.
            </p>
            <p>
              Tonic herbs are not acute interventions. You don't take Reishi for a month to fix your sleep and then stop. You don't take Schisandra for three months to support your liver and then move on. The entire premise of the superior herb classification is daily, lifelong use that gradually and cumulatively builds the kind of deep vitality that cannot be manufactured quickly.
            </p>
            <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#c4622d] mb-2">No tolerance, indefinite use</p>
              <p className="text-black/70 text-sm leading-relaxed">
                Reishi is considered safe and non-toxic and can be taken daily. No matter how long an individual uses it, no tolerance develops. This is the defining characteristic of a true tonic herb. It is not a drug that the body adapts to and requires escalating doses of. It is food for your biological systems that becomes more effective the longer and more consistently you take it.
              </p>
            </div>
            <p>
              I've taken Reishi every single morning for over 10 years. The calm it produces now is not the same as the calm it produced in the first month. It is deeper, more stable, and more integrated into how I fundamentally function. That is what daily tonic herb practice actually looks like over time. It's not dramatic. It's cumulative. And cumulative is the most powerful thing in biology.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Quality Standard */}
        <section data-testid="section-quality">
          <SectionHeader icon={<FlaskConical className="w-5 h-5" />} title="The Quality Standard That Cannot Be Compromised" />
          <div className="space-y-4 text-black/70 leading-relaxed mb-6">
            <p>
              Understanding these herbs means nothing if the product you're taking doesn't contain what the label claims in a form your body can actually use.
            </p>
            <p>The two non-negotiables for both Reishi and Schisandra:</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="card-glass rounded-2xl p-6 space-y-3" data-testid="card-extraction">
              <p className="font-semibold text-black/90">Extraction method</p>
              <p className="text-black/60 text-sm leading-relaxed">
                Raw herb powder is almost entirely unabsorbable. The active compounds in Reishi, triterpenes and beta-glucans, require hot water and alcohol extraction respectively to be bioavailable. Schisandra's lignans require proper extraction to be present at therapeutic levels. Any product that skips this step is selling you the name of an herb without the medicine.
              </p>
            </div>
            <div className="card-glass rounded-2xl p-6 space-y-3" data-testid="card-source">
              <p className="font-semibold text-black/90">Source and origin</p>
              <p className="text-black/60 text-sm leading-relaxed">
                Di Tao, the Daoist principle of authentic geographical origin, is not mysticism. The soil composition, altitude, climate, and ecological conditions where these plants grow determine their chemical profile. Reishi grown on wood logs in its native growing conditions produces categorically higher triterpene concentrations than Reishi grown on grain in a warehouse.
              </p>
            </div>
          </div>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Hyperion Herbs is the only brand I recommend for both. Their Duanwood Reishi uses the traditional log-based cultivation method that produces the highest triterpene concentrations available commercially. Their Schisandra is properly extracted and sourced from its authentic origin.
            </p>
            <p>
              If you want the highest-quality tonic herbs the sourcing, extraction method, and purity standard matter enormously. The difference between a properly prepared tonic herb and a poorly sourced raw powder is not marginal. It is the difference between genuine daily medicine and an expensive placebo.
            </p>
          </div>
        </section>

        {/* Hyperion Herbs image */}
        <div className="card-glass rounded-2xl overflow-hidden" data-testid="img-hyperion-herbs">
          <img
            loading="lazy"
            decoding="async"
            src={hyperionImg}
            alt="Hyperion Herbs Organic Duanwood Reishi Mushroom powder bag"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="section-divider" />

        {/* How to Take */}
        <section data-testid="section-how-to">
          <SectionHeader icon={<Leaf className="w-5 h-5" />} title="How to Take Them Daily" />
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="card-glass rounded-2xl p-6 space-y-3" data-testid="card-how-reishi">
              <p className="font-semibold text-black/90">Reishi</p>
              <p className="text-black/60 text-sm leading-relaxed">
                Mix into warm water first thing in the morning on an empty stomach. This is the traditional method and it remains the most effective. The warm water extracts any remaining active compounds and the empty stomach maximises absorption. I have done this every single morning for over 10 years without exception.
              </p>
            </div>
            <div className="card-glass rounded-2xl p-6 space-y-3" data-testid="card-how-schisandra">
              <p className="font-semibold text-black/90">Schisandra</p>
              <p className="text-black/60 text-sm leading-relaxed">
                Take with warm water morning or afternoon. Schisandra has a gently stimulating Qi effect that makes it unsuitable directly before bed for some people. Morning or early afternoon is the ideal window. It can also be added to smoothies or taken with food.
              </p>
            </div>
          </div>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Both herbs are safe for indefinite daily use with no known drug interactions at standard doses for healthy adults. Anyone on pharmaceutical medications, particularly immunosuppressants or anticoagulants, should consult a healthcare professional before adding either herb.
            </p>
            <p>
              Give both herbs a genuine 90-day trial before assessing. Reishi's Shen effects typically become apparent within 2 to 4 weeks. Schisandra's full organ system benefits build over months of consistent use. The most profound changes from either herb are the ones that happen so gradually you only notice them when you reflect back on who you were before.
            </p>
            <p className="text-black/55 text-sm">
              For a complete protocol built around your biology, visit my{" "}
              <a href="/personalized-guidance" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">Personalized Guidance</a>{" "}
              page. For context on the broader biohacking stack these herbs sit within, see my{" "}
              <a href="/product-reviews/biohacking-beginners-guide" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">biohacking beginners guide</a>.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Sources */}
        <section data-testid="section-sources">
          <SectionHeader icon={<BookOpen className="w-5 h-5" />} title="Further Reading and Sources" />
          <div className="space-y-3 text-sm text-black/60 leading-relaxed">
            {[
              {
                label: "PubMed — Biochemical basis of Schisandra berry's Qi-invigorating action, Hong Kong University of Science and Technology",
                href: "https://pubmed.ncbi.nlm.nih.gov/16552829/",
              },
              {
                label: "Natural Product Research 2025 — Reishi mushroom pharmacology, a potent healer in traditional Chinese medicine",
                href: "https://www.tandfonline.com/doi/full/10.1080/14786419.2025.2511162",
              },
              {
                label: "NCBI Bookshelf — Ganoderma lucidum comprehensive monograph",
                href: "https://www.ncbi.nlm.nih.gov/books/NBK92757/",
              },
              {
                label: "White Rabbit Institute — Reishi TCM monograph",
                href: "https://www.whiterabbitinstituteofhealing.com/herbs/reishi/",
              },
              {
                label: "White Rabbit Institute — Schisandra TCM monograph",
                href: "https://www.whiterabbitinstituteofhealing.com/herbs/schisandra/",
              },
              {
                label: "American Journal of Chinese Medicine — Schisandra mitochondrial antioxidant research",
                href: "https://www.worldscientific.com/doi/abs/10.1142/S0192415X06003734",
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

        {/* CTA */}
        <section className="card-glass rounded-2xl p-6 sm:p-8 space-y-5" data-testid="section-cta">
          <p className="font-display text-xl font-bold text-black">Get Hyperion Herbs Reishi and Schisandra With My Discount Code</p>
          <div className="space-y-3 text-black/70 leading-relaxed text-sm">
            <p>
              There is no shortcut to the quality standard that makes these herbs worth taking. Hyperion Herbs is the only brand I recommend without reservation, properly extracted, Di Tao sourced, and produced without fillers, binders, or flow agents.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <CopyCodeButton />
            <Button asChild size="lg" className="btn-gradient-rose text-white border-0 rounded-full px-6 sm:px-8 py-4 text-sm tracking-widest uppercase font-semibold h-auto leading-relaxed w-full sm:w-auto">
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" data-testid="link-hyperion-shop" className="inline-flex items-center justify-center gap-2 flex-wrap">
                Shop Hyperion Herbs <ExternalLink className="w-4 h-4 flex-shrink-0" />
              </a>
            </Button>
          </div>
          <p className="text-black/35 text-xs">
            Visit{" "}
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="underline text-[#c4622d]/60 hover:text-[#8b3a1a] transition-colors">hyperionherbs.com/discount/eden10</a>
          </p>
        </section>

        <div className="space-y-3">
          <p className="text-center text-black/35 text-xs italic" data-testid="text-affiliate">
            Affiliate Disclosure: This article contains affiliate links. I may earn a commission if you purchase through these links at no additional cost to you. I only recommend products I personally use and genuinely believe in. I have taken Hyperion Herbs Reishi every single morning for over 10 years.
          </p>
          <p className="text-center text-black/35 text-xs italic" data-testid="text-disclaimer">
            Medical Disclaimer: This article is for informational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional before beginning any new supplement regimen, particularly if you are pregnant, breastfeeding, or taking prescription medication.
          </p>
        </div>

      </article>
    </PageLayout>
  );
}
