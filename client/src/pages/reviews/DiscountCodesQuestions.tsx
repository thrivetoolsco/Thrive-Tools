import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import heroImage from "@assets/earthrunners-discount-code-hero_1790058248055.jpg";

function Question({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card-glass rounded-2xl p-6">
      <h3 className="font-display font-bold text-black">{title}</h3>
      <p className="mt-2 text-black/70 leading-relaxed">{children}</p>
    </div>
  );
}

export default function DiscountCodesQuestions() {
  const discountLink = <Link href="/discount-codes" className="text-[#8b3a1a] underline">discount-codes page</Link>;
  return (
    <PageLayout
      showShare
      title="ThriveTools Discount Codes: Questions, Answered (2026)"
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: "ThriveTools Discount Codes: Questions, Answered (2026) | Thrive Tools",
        description: "Direct answers to common questions about verified ThriveTools discount codes, link-only offers, checkout, and the brands covered.",
        canonical: "https://thrivetools.co/blog/discount-codes-questions",
        ogType: "article",
        datePublished: "2026-09-24",
        image: heroImage,
        imageAlt: "EarthRunners minimalist sandals lifestyle photo",
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-8">
        <div className="card-glass rounded-2xl overflow-hidden">
          <img loading="lazy" decoding="async" src={heroImage} alt="EarthRunners minimalist sandals lifestyle photo" className="w-full h-auto max-h-[480px] object-cover" />
        </div>
        <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">Discount Codes</Badge>
        <p className="text-lg leading-relaxed text-black/80">Every question below is answered directly — this is the complete guide to how ThriveTools discount codes work.</p>
        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black">Discount Codes Q&amp;A</h2>
          <Question title="How do ThriveTools discount codes work?">
            ThriveTools partners with wellness brands to offer verified discount codes and link-based deals. Click a brand&apos;s link on the {discountLink}, and either enter the code at checkout or — for link-only offers — let the discount apply automatically.
          </Question>
          <Question title="Are ThriveTools codes verified?">
            Yes. Every code and link on the {discountLink} is checked against the live page before it is published, and the list is updated whenever codes change.
          </Question>
          <Question title={'What does "link-only" mean?'}>
            It means there is no code to type. The discount is embedded in the link itself — click through to the brand&apos;s official store and the savings apply automatically at checkout.
          </Question>
          <Question title="How do I use a discount code at checkout?">
            Click the brand&apos;s verified link, add products to your cart, find the discount-code box at checkout, and type the code exactly as shown. Confirm the discount appears before you pay.
          </Question>
          <Question title="What should I do if a code doesn't work?">
            First check the spelling and capitalization. Then confirm your items are eligible and that you&apos;re on the brand&apos;s official store, not a marketplace listing. If it still fails, the code may have changed — check the {discountLink} for the current one.
          </Question>
          <Question title="Can I stack discount codes?">
            Most stores accept only one discount code per order. If you have more than one code for a brand, use the one that saves you the most.
          </Question>
          <Question title="Do codes work on sale items?">
            It varies by brand. Try the code at checkout — if an exclusion applies, the store will tell you before you pay.
          </Question>
          <Question title="Which categories does ThriveTools cover?">
            Vitamins and supplements, longevity technology, ethical clothing, non-toxic cookware, and clean beauty — 40 brands in total, all listed on the {discountLink}.
          </Question>
          <Question title="Which supplement brands have discount codes?">
            Fifteen, including IM8, Equip Foods, Bioptimizers, Just Thrive, Organika, and EnergyBits. See the full ranked list in <Link href="/blog/best-supplement-discount-codes" className="text-[#8b3a1a] underline">Best Supplement Discount Codes 2026</Link>.
          </Question>
          <Question title="Which ethical clothing brands have discount codes?">
            Six, including EarthRunners, The Good Tee, Bamboo Clothes, and Earthing Harmony. See the full list in <Link href="/blog/best-ethical-clothing-discount-codes" className="text-[#8b3a1a] underline">Best Ethical Clothing Discount Codes 2026</Link>.
          </Question>
          <Question title="Do you have water filter discount codes?">
            Yes — WaterDrop is currently covered with a verified code. More water filter brands are being added as partnerships are confirmed.
          </Question>
          <Question title="Why do some brands only have a link and no code?">
            Some affiliate partnerships are structured as tracked links rather than codes. The discount works the same way — it just applies automatically instead of requiring you to type anything.
          </Question>
          <Question title="Does ThriveTools earn money from these links?">
            Yes — this is stated openly. ThriveTools may earn a commission when you shop through the links, at no extra cost to you. That&apos;s what keeps the code list free and updated.
          </Question>
          <Question title="How often are codes updated?">
            Whenever a brand changes a code or deal, the {discountLink} is updated to match. If a code you tried has stopped working, check there for the current one.
          </Question>
          <Question title="How do I stay updated on new codes?">
            Bookmark the {discountLink} — every new brand partnership and code lands there first.
          </Question>
        </section>
      </article>
    </PageLayout>
  );
}