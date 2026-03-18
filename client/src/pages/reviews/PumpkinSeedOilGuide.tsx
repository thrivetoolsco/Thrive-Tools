import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Leaf, Zap, ShieldCheck, BookOpen, Copy, Check, FlaskConical, Brain, Heart } from "lucide-react";
import { useState } from "react";
import styriangoldImg from "@assets/Pumpkin_Seed_Oil_Visual_1773775817351.jpg";

const SHOP_URL = "http://www.styriangold.ca/shop/";
const DISCOUNT_CODE = "THRIVETOOLS-10";

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-[#c4622d]">{icon}</span>
      <h2 className="font-display text-2xl font-bold text-black">{title}</h2>
    </div>
  );
}

function SubHead({ title }: { title: string }) {
  return (
    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#c4622d] mb-2 mt-5">{title}</h3>
  );
}

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="card-glass rounded-xl p-5 border-l-4" style={{ borderLeftColor: "#c4622d" }}>
      <p className="text-xs font-semibold uppercase tracking-wider text-[#c4622d] mb-2">{title}</p>
      <p className="text-black/70 text-sm leading-relaxed">{body}</p>
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
      data-testid="button-copy-thrivetools10"
      className="inline-flex items-center gap-2 font-mono font-semibold text-[#c4622d] bg-[#c4622d]/10 hover:bg-[#c4622d]/20 px-4 py-2 rounded-lg transition-colors border border-[#c4622d]/20 cursor-pointer"
    >
      <span>{DISCOUNT_CODE}</span>
      {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
      <span className="text-xs text-black/40 font-sans ml-1">{copied ? "Copied!" : "Click to copy"}</span>
    </button>
  );
}

export default function PumpkinSeedOilGuide() {
  return (
    <PageLayout showShare
      title="Why Pumpkin Seed Oil Belongs in Every Serious Supplement Stack"
      subtitle="Pumpkin seed oil delivers brain-protective tryptophan, therapeutic zinc, prostate-specific phytosterols, and deep Kidney Jing nourishment, all in one daily oil. Here's the science and the only brand I recommend."
      seo={{
        title: "Pumpkin Seed Oil: Complete Supplement Guide | Thrive Tools",
        description: "Pumpkin seed oil: tryptophan, zinc, phytosterols, and Kidney Jing nourishment in one daily oil. The science, benefits, and the only brand I recommend.",
        canonical: "/blog/pumpkin-seed-oil-supplement-stack-benefits",
        ogType: "article",
        datePublished: "2026-03-04",
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-12">

        {/* Badges */}
        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border border-[#c4622d]/25 rounded-full px-3 py-0.5 text-xs">
            Supplements Guide
          </Badge>
          <Badge className="bg-white/5 text-black/50 border border-white/10 rounded-full px-3 py-0.5 text-xs">
            Product Review
          </Badge>
        </div>

        {/* Intro */}
        <section data-testid="section-intro">
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Most people building a serious supplement stack think about the usual suspects, creatine, omega-3, magnesium, probiotics, tonic herbs. Very few think about pumpkin seed oil. That's a significant gap, because when you look at the research on what this oil actually does, and how many biological systems it supports simultaneously, it earns a place alongside everything else in the stack on its own merits.
            </p>
            <p>
              This isn't about trend-chasing. Pumpkin seeds have been used medicinally in Native American, Aztec, Chinese, and European folk medicine for centuries. Modern science has spent the last two decades methodically confirming the mechanisms. What you end up with is one of the most nutrient-dense, multi-system oils available, with peer-reviewed evidence for brain health, prostate function, immune support, zinc delivery, and what Traditional Chinese Medicine classifies as deep Kidney Jing nourishment.
            </p>
            <p>
              For the full tonic herb and TCM context, see my{" "}
              <a href="/product-reviews/tonic-herbs-guide" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">tonic herbs guide</a>{" "}
              and the{" "}
              <a href="/blog/reishi-schisandra-daily-tonic-herbs" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">Reishi and Schisandra article</a>.
              For broader supplement context, see my{" "}
              <a href="/product-reviews/biohacking-supplements-2026" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">supplements guide</a>.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Nutritional Profile */}
        <section data-testid="section-nutrition">
          <SectionHeader icon={<FlaskConical className="w-5 h-5" />} title="The Nutritional Profile That Makes This Oil Different" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Pumpkin seed oil contains a remarkable range of bioactive compounds including antioxidants, vitamins A, B1, B2, B3, B6, choline, C, E and K, minerals including calcium, copper, iodine, iron, manganese, magnesium, phosphorous, selenium and zinc, amino acids including tryptophan, omega-3 and omega-6 fatty acids, and phytosterols.
            </p>
            <p>
              That breadth is unusual for a single food oil. But what makes pumpkin seed oil genuinely special isn't just the range of nutrients. It's how those specific compounds interact with the biological systems that matter most for long-term health. Each major benefit below has a specific mechanism rooted in this profile.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Brain */}
        <section data-testid="section-brain">
          <SectionHeader icon={<Brain className="w-5 h-5" />} title="The Brain: Tryptophan, Dopamine, and Neuroprotection" />
          <div className="space-y-4 text-black/70 leading-relaxed mb-4">
            <p>
              The cognitive and mental health research on pumpkin seed oil works through multiple simultaneous mechanisms rather than a single pathway, which is what distinguishes it from most brain supplements.
            </p>
          </div>

          <SubHead title="Tryptophan and serotonin" />
          <div className="space-y-4 text-black/70 leading-relaxed mb-4">
            <p>
              Pumpkin seeds rank in the top 5 foods with the highest conversion of tryptophan into serotonin. In most cases less than 10 percent of the tryptophan we consume is converted into serotonin. Pumpkin seeds are exceptional in this regard.
            </p>
            <p>
              People who consumed tryptophan above 10mg per kilogram of body weight per day from tryptophan-containing foods including pumpkin seeds showed a statistically significant positive effect on depression, irritability, and anxiety. Tryptophan is also a precursor to melatonin, making pumpkin seed oil particularly relevant for sleep quality, especially as melatonin production decreases naturally with age.
            </p>
          </div>

          <SubHead title="Dopamine and cognitive protection" />
          <div className="space-y-4 text-black/70 leading-relaxed mb-4">
            <p>
              Pumpkin seed extract showed maximum antidepressant effects comparable to imipramine, attributed to increased concentration of noradrenaline and dopamine in the brain. Research also revealed that pumpkin seed extract is a cholinesterase inhibitor, producing a neuroprotective effect since the hydrolysis of acetylcholine by cholinesterase has been linked with cognition impairment. Increased activity of brain AChE causes fast hydrolysis of acetylcholine and increases the risk for the progression of dementia.
            </p>
            <p>
              In practical terms: pumpkin seed oil actively protects the neurotransmitter systems responsible for memory, focus, and mood while simultaneously providing the building blocks to produce them.
            </p>
          </div>

          <SubHead title="Oxidative stress and hippocampal protection" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <InfoCard
              title="Hippocampal protection"
              body="Pumpkin seed oil alleviates depressive symptoms by reducing oxidative stress and neuroinflammation in the hippocampus, the brain region most critical for memory formation and emotional regulation. PSO and zinc together attenuated chronic mild stress by improving the antioxidant milieu and anti-inflammatory status of the cerebral cortex."
            />
            <p>
              The high antioxidant content of pumpkin seeds aids in preventing oxidative damage to brain cells. Oxidative stress has often been associated with diseases such as Alzheimer's and Parkinson's. The zinc found in pumpkin seeds is essential for neuron signalling, which is crucial in preventing cognitive disorders.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Zinc */}
        <section data-testid="section-zinc">
          <SectionHeader icon={<Zap className="w-5 h-5" />} title="Zinc: The Master Mineral Delivered in Its Most Bioavailable Form" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Zinc deserves its own section because its role in human health is so wide-ranging and its deficiency so common that it functions as a separate argument for pumpkin seed oil on its own.
            </p>
            <p>
              Zinc is a vital mineral that plays a critical role in testosterone production, prostate health, and maintaining a strong immune system. The recommended dietary allowance for adult men is about 9.5 to 11mg per day. The essential trace mineral zinc in pumpkin seeds acts as a powerful antioxidant, attributed to its ability to neutralise free radical generation or directly bind the iron or copper binding sites of lipids, proteins, and DNA molecules.
            </p>
            <InfoCard
              title="Superior delivery over supplements"
              body="What makes pumpkin seed oil a superior zinc source over most standalone zinc supplements is delivery context. The mineral arrives in its natural food matrix alongside the fats, vitamins, and cofactors that facilitate absorption, the way your biology was designed to receive it. A synthetic zinc capsule taken in isolation cannot replicate this."
            />
          </div>
        </section>

        <div className="section-divider" />

        {/* Prostate */}
        <section data-testid="section-prostate">
          <SectionHeader icon={<ShieldCheck className="w-5 h-5" />} title="The Prostate: The Most Clinically Robust Application" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              The research on pumpkin seed oil and prostate health is among the most clinically robust in the natural medicine literature. This is not emerging or preliminary science.
            </p>
            <p>
              Pumpkin seed oil is rich in zinc, phytosterols, and essential fatty acids which are believed to reduce inflammation and support hormonal balance in the prostate. Zinc plays a critical role in maintaining healthy testosterone levels, while phytosterols may inhibit the conversion of testosterone to dihydrotestosterone (DHT), a hormone linked to prostate enlargement. Studies suggest that pumpkin seed oil may also improve urinary flow and reduce nighttime urination.
            </p>
            <InfoCard
              title="Zinc depletion and prostate tissue"
              body="A normal prostate has the highest zinc levels of any tissue in the body. A 2011 study showed that malignant prostate tissue and prostate tissue from men with BPH had significantly less zinc than normal prostate tissue, while also finding an increase in urinary zinc excretion. This suggests that zinc depletion is not merely associated with prostate dysfunction. It may be mechanistically involved in it."
            />
            <InfoCard
              title="Clinical trial: 2,000+ patients, 12 weeks"
              body="In a clinical trial, effects of pumpkin seed oil from Cucurbita pepo were evaluated in over 2,000 men suffering from benign prostate hypertrophy. Oral administration of 500 to 1,000mg per day for 12 weeks decreased the International Prostate Symptom Score by 41.4% and more than 96% of patients had no undesired side effects."
            />
            <p>
              Pumpkin seed oil can help prevent the multiplication of overstimulated prostate cells by levelling hormones. Phytosterol, a protective compound in pumpkin seeds, may be responsible for reducing prostate enlargement.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Immune */}
        <section data-testid="section-immune">
          <SectionHeader icon={<ShieldCheck className="w-5 h-5" />} title="The Immune System: A Multi-Layer Defence" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              With their high content of zinc and vitamin E, pumpkin seeds are excellent immunity-boosting foods. Zinc is critical for the development and function of immune cells, while vitamin E is a powerful antioxidant that supports the immune system.
            </p>
            <p>
              Pumpkin seed oil immune system support comes from its nutrient profile, zinc, vitamin E, and antioxidants all help keep the immune system strong. The carotenoids and polyphenols act as a network of antioxidants that collectively protect against cellular damage from environmental stressors.
            </p>
            <p>
              The antimicrobial properties of pumpkin seed oil are also well documented. Research has demonstrated activity against Candida albicans, Staphylococcus aureus, and several other common pathogens, making it relevant not just for immune stimulation but for the microbial balance that underlies long-term immune health.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Jing */}
        <section data-testid="section-jing">
          <SectionHeader icon={<Leaf className="w-5 h-5" />} title="Jing: The TCM Framework That Explains Why Seeds Are So Potent" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              For anyone familiar with Traditional Chinese Medicine, the potency of pumpkin seed oil makes complete sense within the Jing framework. For those who aren't, this section is worth understanding.
            </p>
            <p>
              Jing is the Chinese word for essence, specifically kidney essence. Along with Qi and Shen, it is considered one of the Three Treasures of Traditional Chinese Medicine. Jing can be summarised in two parts: prenatal Jing which is acquired at conception from the parents, and postnatal Jing which is acquired after birth through food, water, and environmental conditions.
            </p>
            <InfoCard
              title="Seeds as Jing-building foods"
              body="In TCM, the kidneys are viewed as the Root of Life, housing the essence that determines our constitutional strength. Kidney Jing determines an individual's vitality and resistance to disease as well as longevity. Stress, overwork, emotions, and toxins can deplete Jing-essence. Seeds are powerful for building Jing-essence and supporting the kidneys. Just as the kidneys are the root of life, seeds contain the essence of life."
            />
            <p>
              Of all seeds, pumpkin seeds are the highest in zinc and have an affinity with the kidneys and spleen. In Chinese medicine theory, the kidneys store Jing-essence. Acquired Jing-essence can be obtained from food and can greatly enhance overall constitutional health.
            </p>
            <p>
              The modern science and the ancient framework converge on the same conclusion. Pumpkin seed oil is extraordinarily zinc-dense, delivers essential fatty acids and amino acids that directly support the kidney-adrenal-reproductive axis, and provides the antioxidant protection that prevents Jing leakage through chronic inflammation. Whether you frame it in TCM terms or biochemical ones, the oil is doing the same thing, nourishing the deep reserve systems that govern longevity, hormonal health, and constitutional resilience.
            </p>
            <p className="text-black/55 text-sm italic leading-relaxed">
              When Asian health care focuses its attention on the Kidney, it is a priori focusing on maintaining, increasing and regulating Jing. All of the Yin organs become more stable when they have an abundance of Jing stored within their tissues. An inflammation causes a leak of energy and resources from the body. Even a small chronic inflammation is a silent Jing leak. Seeds are among the most powerful foods for building acquired Jing and stopping this leakage.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Quality */}
        <section data-testid="section-quality">
          <SectionHeader icon={<FlaskConical className="w-5 h-5" />} title="Why Quality Matters More Than Almost Any Other Supplement" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              This is the part most pumpkin seed oil content skips entirely, and it's where most products fail.
            </p>
            <p>
              Pumpkin seed oil is extraordinarily sensitive to heat and oxidation. The active compounds that drive every benefit described above, the tryptophan, the phytosterols, the fat-soluble vitamins, the delicate omega fatty acids, are destroyed or significantly degraded by high-heat processing, exposure to light, and oxygen contact during manufacturing.
            </p>
            <InfoCard
              title="Cold pressed vs heat processed"
              body="Cold pressed pumpkin seed oil retains its full nutritional profile including heat-sensitive vitamins, antioxidants, and fatty acids that would be destroyed by high-heat extraction methods. The distinctive dark green to reddish-brown colour of authentic Styrian pumpkin seed oil indicates the presence of intact chlorophyll and carotenoids, a visual indicator of quality that heat-processed oils cannot replicate."
            />
            <p>
              The Styrian pumpkin, Cucurbita pepo var. styriaca, is the specific variety with the most documented nutritional and medicinal research behind it. It originates from the Styria region of Austria and Slovenia where it has been cold-pressed for over 300 years. Authentic Styrian pumpkin seed oil has a protected geographical indication in Europe, similar to champagne. The terroir and traditional processing method are inseparable from the quality of the final product.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Styrian Gold */}
        <section data-testid="section-styrian-gold">
          <SectionHeader icon={<Heart className="w-5 h-5" />} title="The Brand I Recommend: Styrian Gold" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Styrian Gold is a Canadian producer of authentic cold-pressed Styrian pumpkin seed oil, the only brand I recommend for this specific application. Their oil is cold-pressed from hull-less Styrian pumpkin seeds grown without pesticides, preserving the complete nutritional profile including the heat-sensitive tryptophan, phytosterols, chlorophyll, and carotenoids that make pumpkin seed oil therapeutically significant.
            </p>
            <p>
              The dark green colour of Styrian Gold oil is the visual confirmation of intact chlorophyll, something you will not see in heat-processed alternatives. It has a rich, nutty flavour that works beautifully as a finishing oil on salads, roasted vegetables, yogurt, or taken directly by the tablespoon.
            </p>
            <p>
              One important note on cooking: pumpkin seed oil has a low smoke point and should never be used for high-heat cooking. Use it as a finishing oil or take it directly to preserve all active compounds.
            </p>
          </div>
        </section>

        {/* Styrian Gold image */}
        <div className="card-glass rounded-2xl overflow-hidden flex items-center justify-center p-6 bg-yellow-50/30" data-testid="img-styrian-gold">
          <img
            loading="lazy"
            decoding="async"
            src={styriangoldImg}
            alt="Styrian Gold Pumpkin Seed Oil bottle with pumpkins and seeds"
            className="max-h-96 w-auto object-contain"
          />
        </div>

        <div className="section-divider" />

        {/* How to Take */}
        <section data-testid="section-how-to">
          <SectionHeader icon={<Leaf className="w-5 h-5" />} title="How to Take It Daily" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card-glass rounded-2xl p-5 space-y-2">
                <p className="font-semibold text-black/90 text-sm">For broad daily nutrition</p>
                <p className="text-black/60 text-xs leading-relaxed">One to two tablespoons daily is the standard therapeutic range. Take it directly, drizzle over food, or blend into a smoothie. The tablespoon dose delivers the full spectrum of cognitive, immune, and Jing-nourishing benefits.</p>
              </div>
              <div className="card-glass rounded-2xl p-5 space-y-2">
                <p className="font-semibold text-black/90 text-sm">For prostate-specific benefits</p>
                <p className="text-black/60 text-xs leading-relaxed">The clinical trials used 500 to 1,000mg daily, approximately one teaspoon. This is the dose range used in research showing a 41.4% reduction in prostate symptom scores.</p>
              </div>
            </div>
            <InfoCard
              title="Storage note"
              body="Does not require refrigeration but should be stored away from direct light and heat to prevent oxidative degradation. Never use for high-heat cooking. It is a finishing oil only."
            />
            <p className="text-black/55 text-sm">
              For a protocol built around your individual biology, visit my{" "}
              <a href="/personalized-guidance" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">Personalized Guidance</a>{" "}
              page.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* CTA */}
        <section className="card-glass rounded-2xl p-6 sm:p-8 space-y-5" data-testid="section-cta">
          <p className="font-display text-xl font-bold text-black">Get Styrian Gold Pumpkin Seed Oil With My Discount Code</p>
          <div className="space-y-3 text-black/70 leading-relaxed text-sm">
            <p>
              Styrian Gold is the only brand I recommend for this application. Cold-pressed, authentic Styrian origin, grown without pesticides, and with the dark green colour that confirms intact chlorophyll and full nutritional potency.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <CopyCodeButton />
            <Button asChild size="lg" className="btn-gradient-rose text-white border-0 rounded-full px-6 sm:px-8 py-4 text-sm tracking-widest uppercase font-semibold h-auto leading-relaxed w-full sm:w-auto">
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" data-testid="link-styrian-gold-shop" className="inline-flex items-center justify-center gap-2 flex-wrap">
                Shop Styrian Gold <ExternalLink className="w-4 h-4 flex-shrink-0" />
              </a>
            </Button>
          </div>
          <p className="text-black/35 text-xs">
            Visit{" "}
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="underline text-[#c4622d]/60 hover:text-[#8b3a1a] transition-colors">styriangold.ca/shop</a>
          </p>
        </section>

        <div className="section-divider" />

        {/* Sources */}
        <section data-testid="section-sources">
          <SectionHeader icon={<BookOpen className="w-5 h-5" />} title="Further Reading and Sources" />
          <div className="space-y-3 text-sm text-black/60 leading-relaxed">
            {[
              {
                label: "PMC — Pumpkin seed oil and prostate health, clinical trial data",
                href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4032845/",
              },
              {
                label: "PubMed — Pumpkin seed extract antidepressant and neuroprotective effects",
                href: "https://pubmed.ncbi.nlm.nih.gov/26904166/",
              },
              {
                label: "PMC — Pumpkin seed oil and zinc in oxidative stress and hippocampal protection",
                href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9003382/",
              },
              {
                label: "Acupuncture Today — Replenishing and restoring Jing",
                href: "https://acupuncturetoday.com/article/32900-replenishing-and-restoring-jing",
              },
              {
                label: "Acupuncture Boulder — Strengthening the Kidneys with seeds and Jing-building foods",
                href: "https://acuboulder.com/blog/strengthening-kidneys-warm-breakfast-healthy-snack/",
              },
              {
                label: "PMC — TCM Kidneys Govern Bones and Kidney Jing Essence",
                href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5030442/",
              },
              {
                label: "Wikipedia — Jing in Traditional Chinese Medicine",
                href: "https://en.wikipedia.org/wiki/Jing_(Chinese_medicine)",
              },
            ].map((source, i) => (
              <div key={i} className="flex items-start gap-2.5" data-testid={`source-pso-${i}`}>
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
            Affiliate Disclosure: This article contains affiliate links. I may earn a commission if you purchase through these links at no additional cost to you. I only recommend products I personally use and genuinely believe in.
          </p>
          <p className="text-center text-black/35 text-xs italic" data-testid="text-disclaimer">
            Medical Disclaimer: This article is for informational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional before beginning any new supplement regimen.
          </p>
        </div>

      </article>
    </PageLayout>
  );
}
