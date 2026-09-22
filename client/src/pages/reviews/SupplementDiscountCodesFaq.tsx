import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Tag, Check, User } from "lucide-react";
import { Link } from "wouter";

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-[#8b3a1a] mb-2">{eyebrow}</p>
      <h2 className="font-display text-2xl font-bold text-black">{title}</h2>
      {description && <p className="text-black/60 mt-2 leading-relaxed">{description}</p>}
    </div>
  );
}

const verifiedCodes = [
  { brand: "IM8", code: "THRIVE10", note: "Enter at checkout on im8health.com." },
  { brand: "Equip Foods", code: "THRIVETOOLS", note: "Enter at checkout on equipfoods.com." },
  { brand: "Bioptimizers", code: "THRIVETOOLS", note: "Enter in the discount-code box on bioptimizers.com." },
  { brand: "Just Thrive", code: "THRIVETOOLS", note: "Enter at checkout on the Just Thrive site." },
  { brand: "EnergyBits", code: "THRIVE25", note: "Enter at checkout on the EnergyBits site." },
  { brand: "Organika", code: "EDEN_25", note: "Enter at checkout on the Organika site." },
  { brand: "Hyperion Herbs", code: "EDEN10", note: "Enter at checkout on the Hyperion Herbs site." },
  {
    brand: "Timeline MitoPure",
    code: "No code needed",
    note: "Discount auto-applies when you shop via the link.",
  },
  {
    brand: "AquaOmega",
    code: "$30 off first subscription",
    note: "Auto-applied to your first subscription order.",
  },
];

const faqs = [
  {
    q: "Where can I find verified supplement discount codes?",
    a: "Right here. I keep a verified list of discount codes for the supplement brands I actually use at thrivetools.co/discount-codes, and I update it monthly. Every code on that page has been checked to work.",
  },
  {
    q: "How do I use a discount code at checkout?",
    a: "Add products to your cart, go to checkout, and look for the discount-code or promo-code box. Type the code exactly as shown (usually all caps, no spaces), click apply, and confirm the discount appears on your order total before you pay.",
  },
  {
    q: "Why didn't my discount code work?",
    a: "The most common reasons: a typo (codes are case-sensitive), the brand excluded certain products, or you tried to use more than one code on a single order. Most checkouts accept only one code per order. If a code from my list stops working, I update the discount codes page.",
  },
  {
    q: "Do supplement discount codes stack?",
    a: "In almost all cases, no. Supplement checkouts accept one discount code per order. If you have more than one code for a brand, use whichever saves you the most on that order.",
  },
];

export default function SupplementDiscountCodesFaq() {
  return (
    <PageLayout
      showShare
      title="Supplement Discount Codes FAQ (2026)"
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: "Supplement Discount Codes FAQ (2026) | Thrive Tools",
        description:
          "Every supplement discount code question, answered. Where to find verified codes, how to use them at checkout, why a code did not work, and whether codes stack.",
        canonical: "https://thrivetools.co/blog/supplement-discount-codes-faq",
        ogType: "article",
        datePublished: "2026-09-20",
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-10">
        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">Discount Codes</Badge>
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">FAQ Hub</Badge>
        </div>

        <div className="card-glass rounded-2xl p-6 md:p-8" data-testid="answer-supplement-discount-codes-faq">
          <p className="text-lg leading-relaxed text-black/80">
            <strong className="font-semibold text-black">The short answer:</strong> find verified supplement
            discount codes at{" "}
            <Link href="/discount-codes" className="text-[#8b3a1a] underline font-semibold">
              thrivetools.co/discount-codes
            </Link>
            , updated monthly. Enter a code in the discount-code box at checkout, one code per order.
          </p>
        </div>

        <section>
          <SectionHeader
            eyebrow="Verified codes"
            title="The verified codes I track"
            description="Every code below is checked regularly. See the full list on the discount codes page."
          />
          <div className="space-y-3">
            {verifiedCodes.map((item, i) => (
              <div
                key={i}
                className="card-glass rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                data-testid={`code-supplement-faq-${i}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-[#c4622d]/10 text-[#8b3a1a] flex items-center justify-center shrink-0">
                    <Tag className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="font-display font-bold text-black">
                      {item.brand === "Timeline MitoPure" ? (
                        <a
                          href="https://shop.timeline.com/THRIVE33"
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                        >
                          {item.brand}
                        </a>
                      ) : (
                        item.brand
                      )}
                    </p>
                    <p className="text-black/60 text-sm">{item.note}</p>
                  </div>
                </div>
                <p className="font-mono font-bold text-[#8b3a1a] bg-[#c4622d]/10 border border-[#c4622d]/25 rounded-md px-3 py-1.5 text-sm whitespace-nowrap self-start sm:self-auto">
                  {item.code}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/discount-codes">
              <Button className="btn-primary rounded-full px-6" data-testid="button-supplement-faq-all-codes">
                See all discount codes <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="How to use them"
            title="How to use a discount code at checkout"
          />
          <ol className="space-y-4">
            {[
              "Add the products you want to your cart on the brand's website.",
              "Go to checkout and find the discount-code (promo code) box.",
              "Type the code exactly as shown, all caps with no spaces, and click apply.",
              "Confirm the discount shows on your order total before you pay.",
            ].map((step, i) => (
              <li key={i} className="card-glass rounded-2xl p-5 flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-[#c4622d]/10 text-[#8b3a1a] flex items-center justify-center font-display font-bold shrink-0">
                  {i + 1}
                </span>
                <p className="text-black/70 leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="card-glass rounded-2xl p-6" data-testid={`faq-supplement-codes-${i}`}>
                <p className="font-display font-bold text-black">{f.q}</p>
                <p className="text-black/60 mt-2 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="Brand deal pages"
            title="Discount codes by brand"
            description="Dedicated deal pages with how-to steps for each brand."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/blog/im8-discount-code"
              className="card-glass rounded-2xl p-6 block hover:shadow-lg transition-shadow"
              data-testid="link-faq-im8"
            >
              <p className="font-display font-bold text-black">IM8 discount code</p>
              <p className="text-black/60 text-sm mt-1 leading-relaxed">
                Code THRIVE10, plus how to apply it.
              </p>
            </Link>
            <Link
              href="/blog/equip-foods-discount-code"
              className="card-glass rounded-2xl p-6 block hover:shadow-lg transition-shadow"
              data-testid="link-faq-equip"
            >
              <p className="font-display font-bold text-black">Equip Foods discount code</p>
              <p className="text-black/60 text-sm mt-1 leading-relaxed">
                Code THRIVETOOLS, plus how to apply it.
              </p>
            </Link>
            <Link
              href="/blog/bioptimizers-discount-code"
              className="card-glass rounded-2xl p-6 block hover:shadow-lg transition-shadow"
              data-testid="link-faq-bioptimizers"
            >
              <p className="font-display font-bold text-black">Bioptimizers discount code</p>
              <p className="text-black/60 text-sm mt-1 leading-relaxed">
                Code THRIVETOOLS, plus how to apply it.
              </p>
            </Link>
            <a
              href="https://shop.timeline.com/THRIVE33"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="card-glass rounded-2xl p-6 block hover:shadow-lg transition-shadow"
              data-testid="link-faq-timeline"
            >
              <p className="font-display font-bold text-black">Timeline MitoPure discount</p>
              <p className="text-black/60 text-sm mt-1 leading-relaxed">
                No code needed; the discount auto-applies.
              </p>
            </a>
          </div>
        </section>

        <section>
          <SectionHeader eyebrow="Good to know" title="Why a code might not work" />
          <ul className="space-y-3">
            {[
              "Typos: codes are case-sensitive, so copy them exactly.",
              "Brand exclusions: some products, like subscriptions, may be excluded.",
              "One code per order: you cannot combine two codes on a single checkout.",
              "Expired or retired: brands change codes; my discount codes page is updated monthly.",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70 leading-relaxed">
                <Check className="w-5 h-5 text-[#8b3a1a] shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        <div
          className="flex items-start gap-4 card-glass rounded-2xl p-6"
          data-testid="bio-supplement-discount-codes-faq"
        >
          <span className="w-12 h-12 rounded-full bg-[#c4622d]/10 text-[#8b3a1a] flex items-center justify-center shrink-0">
            <User className="w-6 h-6" />
          </span>
          <div>
            <p className="font-display font-bold text-black">Eden Laraki</p>
            <p className="text-black/60 mt-1 text-sm">
              Eden runs ThriveTools.co, where she tests wellness products and keeps a verified list of
              discount codes for the brands she actually uses.
            </p>
          </div>
        </div>

        <p
          className="text-sm text-black/50 leading-relaxed"
          data-testid="disclosure-supplement-discount-codes-faq"
        >
          <strong className="font-semibold text-black/70">Affiliate disclosure:</strong> This post contains
          affiliate links. If you buy through them, I may earn a commission at no extra cost to you.
        </p>
      </article>
    </PageLayout>
  );
}
