import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Tag } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import goliImage from "@assets/goli-acv-official.jpg";

const title = "Goli Discount Code (g-745207ab6b) & Brand Guide (2026)";
const code = "g-745207ab6b";
const affiliateUrl = "https://go.goli.com/g-745207ab6b";
const researchUrl = "https://www.mdpi.com/2072-6643/11/5/1023";
const researchPhrase = "a 2019 clinical trial in the journal Nutrients";

const products = [
  ["Apple Cider Vinegar Gummies", "Made with Vitamin B12. Goli calls these the world's first apple cider vinegar gummies."],
  ["Zero Sugar Apple Cider Vinegar Gummies", "Made with SNZ TriBac®, which Goli describes as a clinically studied probiotic."],
  ["Ashwagandha Gummies", "Made with KSM-66® Ashwagandha."],
  ["Dreamy Sleep Gummies", "Made with Magnesium, Lemon Balm, Vitamin D, and melatonin."],
  ["Extra-Strength Sleep Gummies", "Made with Lemon Balm, botanicals, Vitamin D, and 10mg of melatonin per serving."],
  ["Women's Complete Multi Gummies", "Goli describes them as complete with all 13 essential vitamins."],
  ["Triple Action Immune Gummies", "Blackberry/strawberry-lemonade flavor; made with Vitamins C and D and Zinc."],
  ["Supergreens Gummies", "Made with a blend of vitamins, minerals, and nutrients."],
  ["Superfruits Beauty Gummies", "Made with Bamboo Shoot Extract and Vitamins A, C, and E."],
  ["Cardio Beets Gummies", "Made with CoQ10 and Vitamin B12."],
  ["Pre+Post+ Probiotics Gummies", "Combine prebiotics, probiotics, and postbiotics."],
  ["Matcha Mind Cognitive Gummies", "Made with Cognizin®."],
  ["Recharge Energy+ Gummies", "Goli's newest in this lineup; made with Nitrosigine, Caffeine, and Vitamins C and B6."],
] as const;

const faqs = [
  {
    question: "What is the Goli discount code?",
    answer: "The Goli discount code is g-745207ab6b. Enter it at goli.com checkout for 10% off, as stated on Goli's partner dashboard.",
  },
  {
    question: "How do I use the Goli discount code?",
    answer: "Follow the Goli affiliate link on this page to goli.com. Add your chosen gummies to the cart, then enter g-745207ab6b at checkout for 10% off. This code applies on goli.com, not at retail stores.",
  },
  {
    question: "Are gummies as potent as capsules or pills?",
    answer: "In my editorial view, no: capsules, powders, and liquids generally deliver more actives per serving without the extra ingredients gummies need for taste and texture, but a gummy taken daily beats a pill left untouched. Published research is mixed: a 2019 clinical trial in the journal Nutrients found vitamin D3 gummies had higher bioavailability than tablets. Other independent lab testing has found gummies less consistent than pills at matching the amounts on their labels. This is my editorial perspective, not medical advice.",
  },
  {
    question: "Who are Goli gummies best for?",
    answer: "Goli gummies may suit people who cannot swallow pills or capsules, including kids where age-appropriate, and people who want a supplement format they will actually use. In my view, gummies are not the most potent supplement format, but consistency matters.",
  },
  {
    question: "What products does Goli sell?",
    answer: "Goli's lineup includes Apple Cider Vinegar and Zero Sugar Apple Cider Vinegar Gummies, Ashwagandha Gummies, two sleep gummies, Women's Complete Multi, Triple Action Immune, Supergreens, Superfruits Beauty, Cardio Beets, Pre+Post+ Probiotics, Matcha Mind, and Recharge Energy+ Gummies. The products have different stated ingredients; check the official product listings for the one you are considering.",
  },
  {
    question: "Does Goli offer a money-back guarantee?",
    answer: "Yes. Goli calls its offer a “try it, risk-free” 100% hassle-free refund and states: “If you're not satisfied with our product, simply contact us and we'll give you a full, 100% hassle-free refund.”",
  },
  {
    question: "Can I use the Goli discount code at Walmart or Target?",
    answer: "No. The g-745207ab6b code is for 10% off at goli.com checkout, not at Walmart, Target, or other retail stores.",
  },
  {
    question: "Where is the best place to buy Goli?",
    answer: "To use the 10% code, go to goli.com through the affiliate link on this page. Add the gummies to your cart and enter g-745207ab6b at checkout; the code does not apply at retail stores.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

function ProductLink({ children }: { children: React.ReactNode }) {
  return (
    <a href={affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="text-[#8b3a1a] underline">
      {children}
    </a>
  );
}

export default function GoliDiscountCode() {
  return (
    <PageLayout
      showShare
      title={title}
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: `${title} | Thrive Tools`,
        description: "Use Goli discount code g-745207ab6b for 10% off at goli.com. An honest guide to Goli gummies, ingredients, gummy-versus-pill research, and FAQs.",
        canonical: "https://thrivetools.co/goli-discount-code",
        ogType: "article",
        datePublished: "2026-09-28",
        image: goliImage,
        imageAlt: "Goli Nutrition Apple Cider Vinegar Gummies bottle",
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <article className="space-y-8">
        <div className="card-glass rounded-2xl overflow-hidden">
          <img loading="lazy" decoding="async" src={goliImage} alt="Goli Nutrition Apple Cider Vinegar Gummies bottle" className="w-full h-auto max-h-[480px] object-contain bg-white" />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">Discount Codes</Badge>
          <span className="text-sm text-black/50">September 28, 2026</span>
        </div>
        <p className="text-lg leading-relaxed text-black/80">
          Goli Nutrition makes vitamin-packed wellness gummies. The brand describes its line as sugar-free and offers products with ingredients ranging from apple cider vinegar and Vitamin B12 to ashwagandha, magnesium, and probiotics. This guide covers the Goli promo code, the lineup, and my take on gummy supplements.
        </p>
        <p className="text-sm text-black/60 leading-relaxed">
          ThriveTools is a Goli affiliate partner. We may earn a commission on purchases made through links on this page, at no extra cost to you.
        </p>
        <aside className="card-glass rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row gap-5 sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <Tag className="w-6 h-6 shrink-0 text-[#8b3a1a]" />
            <p className="text-lg text-black/80">
              Use code <strong className="text-black font-bold">{code}</strong> at goli.com checkout for <strong>10% off</strong>.
            </p>
          </div>
          <a href={affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="shrink-0 self-start sm:self-auto">
            <Button className="btn-primary rounded-full px-5">
              Shop Goli <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </aside>

        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">What is Goli?</h2>
          <p className="text-black/70 leading-relaxed">
            Goli® Nutrition makes wellness gummies. Its Apple Cider Vinegar Gummies carry the tagline “Taste the Apple. Not the Vinegar.®” and Goli calls them the world's first apple cider vinegar gummies. Goli states it has “over 1,000,000+ reviews from happy customers”; this is the brand's claim, not a count independently verified by ThriveTools.
          </p>
          <p className="text-black/70 leading-relaxed">
            Goli also offers a “try it, risk-free” 100% hassle-free refund. In the brand's words: “If you're not satisfied with our product, simply contact us and we'll give you a full, 100% hassle-free refund.”
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">Goli gummy lineup and stated ingredients</h2>
          <p className="text-black/70 leading-relaxed">
            These are the product names and ingredients Goli lists. Different gummies have different formulas; this is a lineup overview, not a claim about health outcomes.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {products.map(([name, detail]) => (
              <li key={name} className="card-glass rounded-xl p-4 text-black/70 leading-relaxed">
                <strong className="text-black">{name}:</strong> {detail}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">My take on gummy supplements</h2>
          <p className="text-black/70 leading-relaxed">
            In my opinion, gummies aren't the best or most potent way to take supplements. I generally find that capsules, powders, and liquids deliver more actives per serving without the extra ingredients gummies need for taste and texture. But I know plenty of people, kids included, who simply can't swallow pills. A gummy you'll actually take every day beats a capsule that sits untouched in the bottle. For those people, I consider Goli one of the better-made options in the gummy category. That's my editorial perspective, not a medical claim.
          </p>
          <p className="text-black/70 leading-relaxed">
            Published research is mixed: <a href={researchUrl} target="_blank" rel="noopener noreferrer" className="text-[#8b3a1a] underline">a 2019 clinical trial in the journal <em>Nutrients</em> found vitamin D3 gummies had higher bioavailability than tablets</a>. Separately, other independent lab testing has found gummies less consistent than pills at matching the amounts stated on their labels. Neither finding overrides my editorial take above, and neither establishes that every gummy or pill behaves the same way.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">Who are Goli gummies for?</h2>
          <p className="text-black/70 leading-relaxed">
            This format may appeal to people who cannot swallow pills or capsules, including kids where age-appropriate, or anyone who wants a convenient supplement they will actually stick with. My view remains that gummies aren't the most potent delivery format; use the ingredient lists to decide whether a particular Goli product fits your needs.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">Where Goli is sold</h2>
          <p className="text-black/70 leading-relaxed">
            Goli sells gummies on <ProductLink>goli.com</ProductLink>. The brand says it is also available at 100K+ retailers globally, including Walmart, Target, CVS, Kroger, Walgreens, and Publix. The 10% discount code in this guide works on goli.com only, not at those retail stores.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">How to use the Goli discount code</h2>
          <ol className="list-decimal pl-6 space-y-2 text-black/70 leading-relaxed">
            <li>Go to <ProductLink>goli.com using this affiliate link</ProductLink>.</li>
            <li>Add your chosen gummies to the cart.</li>
            <li>Enter <strong>{code}</strong> at checkout for <strong>10% off</strong>.</li>
          </ol>
          <p className="text-black/70 leading-relaxed">
            See our <Link href="/discount-codes" className="text-[#8b3a1a] underline">discount codes page</Link> for the Goli card and other offers.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">Goli FAQ</h2>
          {faqs.map(({ question, answer }) => {
            const parts = question === "Are gummies as potent as capsules or pills?" ? answer.split(researchPhrase) : null;
            return (
              <div key={question} className="card-glass rounded-2xl p-6">
                <h3 className="font-display font-bold text-black">{question}</h3>
                <p className="mt-2 text-black/70 leading-relaxed">
                  {parts ? <>{parts[0]}<a href={researchUrl} target="_blank" rel="noopener noreferrer" className="text-[#8b3a1a] underline">{researchPhrase}</a>{parts[1]}</> : answer}
                </p>
              </div>
            );
          })}
        </section>
      </article>
    </PageLayout>
  );
}