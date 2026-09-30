import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Tag } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";

const affiliateUrl = "https://therasage.com/discount/THRIVETOOLS?rfsn=9353405.0f95ac3&utm_source=refersion&utm_medium=affiliate&utm_campaign=9353405.0f95ac3";
const code = "THRIVETOOLS";
const title = "Therasage Discount Code 2026: Save with THRIVETOOLS";

const faqs = [
  {
    question: "Does Therasage offer discount codes?",
    answer: "Yes. The current verified Therasage code is THRIVETOOLS. Use it at checkout on the official store.",
  },
  {
    question: "What is the best Therasage discount code right now?",
    answer: "THRIVETOOLS — it's the verified code I keep current. I check it monthly; if it ever changes, my discount codes page updates first.",
  },
  {
    question: "What products does Therasage sell?",
    answer: "Portable infrared saunas, PEMF and infrared mats, light-powered oral care products, and vegan skin brushes.",
  },
  {
    question: "How do I use the THRIVETOOLS code?",
    answer: "Add products to your cart on the official Therasage store, enter THRIVETOOLS at checkout, and the discount applies before payment. Full steps are in the How to use section above.",
  },
  {
    question: "Is the Therasage discount code still valid?",
    answer: "Yes — I verify every code monthly. The current verified code is THRIVETOOLS, listed at the top of this post and on my discount codes page.",
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

function ShopLink({ children }: { children: React.ReactNode }) {
  return (
    <a href={affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="text-[#8b3a1a] underline underline-offset-2 hover:text-[#c4622d]">
      {children}
    </a>
  );
}

export default function TherasageDiscountCode() {
  return (
    <PageLayout
      showShare
      title="Therasage Discount Code (2026)"
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title,
        noSuffix: true,
        description: "Therasage discount code THRIVETOOLS for the official store. Explore portable sauna options, PEMF mat formats, infrared mats and more.",
        canonical: "/blog/therasage-discount-code",
        ogType: "article",
        datePublished: "2026-09-30",
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <Helmet><script type="application/ld+json">{JSON.stringify(faqSchema)}</script></Helmet>
      <article className="space-y-8">
        <div className="flex flex-wrap items-center gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">Discount Codes</Badge>
          <span className="text-sm text-black/50">September 2026</span>
        </div>

        <p className="text-lg leading-relaxed text-black/80">
          I run ThriveTools.co, a science-backed wellness and biohacking platform built from 14 years of personal research. Therasage is one of the more interesting brands I've partnered with lately — they make portable saunas, PEMF and infrared mats, light-powered oral care, and vegan skin brushes. Below is everything about the current verified Therasage discount — answered directly.
        </p>
        <p className="text-sm text-black/60 leading-relaxed">
          ThriveTools is a Therasage affiliate partner. We may earn a commission on purchases made through links on this page, at no extra cost to you.
        </p>
        <aside className="card-glass rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row gap-5 sm:items-center sm:justify-between">
          <p className="text-lg text-black/80 flex items-center gap-3"><Tag className="w-6 h-6 shrink-0 text-[#8b3a1a]" /><span>Current verified code: <strong>{code}</strong> — use it at checkout on the official Therasage store.</span></p>
          <a href={affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#c4622d] px-5 py-3 text-sm font-semibold text-white hover:bg-[#8b3a1a]">
            Shop Therasage with code {code} <ExternalLink className="w-4 h-4" />
          </a>
        </aside>

        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">What Therasage sells</h2>
          <p className="text-black/70 leading-relaxed">Four categories, one brand:</p>
          <ul className="list-disc pl-6 space-y-2 text-black/70 leading-relaxed">
            <li><strong>Portable saunas</strong> — infrared sauna experiences without a dedicated sauna room. The appeal is obvious: full sauna sessions at home, then it packs away.</li>
            <li><strong>PEMF and infrared mats</strong> — mats combining pulsed electromagnetic field therapy with infrared heat. Lay-down recovery rather than sit-in sessions.</li>
            <li><strong>Light-powered oral care</strong> — light technology applied to oral care products. The most unusual category on this list.</li>
            <li><strong>Vegan skin brushes</strong> — body brushes made without animal products, for the dry-brushing crowd.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">Why I partnered with them</h2>
          <p className="text-black/70 leading-relaxed">
            I'm selective about brand partnerships — I only work with brands I can recommend authentically. Therasage covers the recovery-tech space (sauna, PEMF, infrared) that my audience asks about constantly, and the portable format solves the biggest objection to home sauna ownership: space.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">How to use the Therasage discount code</h2>
          <ol className="list-decimal pl-6 space-y-2 text-black/70 leading-relaxed">
            <li>Go to the official Therasage store via my link: <ShopLink>Shop Therasage</ShopLink>.</li>
            <li>Add your products to cart — portable sauna, mat, or both.</li>
            <li>Enter code <strong>{code}</strong> at checkout.</li>
            <li>The discount applies before payment.</li>
          </ol>
          <p className="text-black/70 leading-relaxed">
            If the code ever doesn't work, check my <Link href="/discount-codes" className="text-[#8b3a1a] underline">discount codes page</Link> — I verify every code monthly and update it there first.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">Therasage vs the alternatives</h2>
          <p className="text-black/70 leading-relaxed">
            If you're deciding between Therasage's portable sauna and a traditional sauna setup, the tradeoff is space and cost versus the dedicated-room experience. Portable wins on practicality; a built-in unit wins on experience. For most people starting out, portable is the right first step.
          </p>
          <p className="text-black/70 leading-relaxed">
            For the broader recovery-tech picture — cold plunge, wearables, red light — see my <Link href="/blog/best-recovery-tech-2026" className="text-[#8b3a1a] underline">Best Recovery Tech 2026</Link> comparison.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">Therasage Discount Code FAQ</h2>
          {faqs.map(({ question, answer }, index) => (
            <div key={question} className="card-glass rounded-2xl p-6">
              <h3 className="font-display font-bold text-black">{question}</h3>
              <p className="mt-2 text-black/70 leading-relaxed">
                {answer}
                {index === 0 && <> <ShopLink>Shop Therasage with code {code}</ShopLink>.</>}
              </p>
            </div>
          ))}
        </section>
      </article>
    </PageLayout>
  );
}