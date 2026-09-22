import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Tag, Check, User } from "lucide-react";
import { Link } from "wouter";
import heroImg from "@assets/mito-red-light-discount-code-hero.jpg";

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

const faqs = [
  {
    q: "Does a Mito Red Light discount code exist?",
    a: "Mito Red Light does not use a typed discount code for this offer. The verified affiliate link applies a 10% discount automatically, so there is no code to copy or enter at checkout.",
  },
  {
    q: "How do I use the Mito Red Light discount?",
    a: "Open Mito Red Light through the verified affiliate link on this page, choose the products you want, and proceed to checkout. The 10% discount should appear automatically before you complete your purchase.",
  },
  {
    q: "Can the Mito Red Light discount stack with another promotion?",
    a: "Usually not. Most checkouts accept one promotion per order, and an automatically applied affiliate discount may replace or be replaced by another offer. Compare the totals and use the option that saves you the most.",
  },
  {
    q: "Why is the Mito Red Light discount link-only?",
    a: "The affiliate link identifies the verified offer and attaches the 10% discount to your shopping session. Because the link performs that step automatically, Mito Red Light does not require a typed coupon code.",
  },
  {
    q: "Where can I find a verified Mito Red Light discount?",
    a: "Use the verified affiliate link on this page or check the ThriveTools.co discount codes page. I review the listed links regularly and update them if an offer changes or stops working.",
  },
];

export default function MitoRedLightDiscountCodeFaq() {
  return (
    <PageLayout
      showShare
      title="Mito Red Light Discount Code FAQ (2026)"
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: "Mito Red Light Discount Code FAQ (2026) | Thrive Tools",
        description:
          "Does Mito Red Light have a discount code? Get answers about the verified 10% link-only discount, checkout instructions, stacking, and where to find current offers.",
        canonical: "https://thrivetools.co/blog/mito-red-light-discount-code-faq",
        ogType: "article",
        datePublished: "2026-09-22",
        image: heroImg,
        imageAlt: "Mito Red Light therapy device",
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-10">
        <div className="card-glass rounded-2xl overflow-hidden" data-testid="img-hero-mito-red-light-discount-faq">
          <img
            loading="lazy"
            decoding="async"
            src={heroImg}
            alt="Mito Red Light therapy device"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">Discount Codes</Badge>
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">FAQ</Badge>
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">Verified 2026</Badge>
        </div>

        <div className="card-glass rounded-2xl p-6 md:p-8" data-testid="answer-mito-red-light-discount-faq">
          <p className="text-lg leading-relaxed text-black/80">
            <strong className="font-semibold text-black">The short answer:</strong> Mito Red Light does not
            use a typed discount code. The 10% discount applies automatically when you shop through the
            verified affiliate link — no code to enter at checkout.
          </p>
        </div>

        <section>
          <SectionHeader
            eyebrow="The offer"
            title="Mito Red Light 10% discount"
            description="Use the verified link and the discount applies automatically."
          />
          <div
            className="card-glass rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
            data-testid="code-mito-red-light-discount-faq"
          >
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-[#c4622d]/10 text-[#8b3a1a] flex items-center justify-center shrink-0">
                <Tag className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-black/50">Discount</p>
                <p className="font-display text-2xl font-bold tracking-wide text-black">10% off — no code needed</p>
              </div>
            </div>
            <a href="https://www.mitoredlight.com/EDEN27299" target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary rounded-full px-6" data-testid="button-mito-red-light-faq-shop">
                Shop Mito Red Light <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="How to use it"
            title="How to get the automatic discount"
            description="The link handles the discount for you."
          />
          <ol className="space-y-4">
            {[
              "Click the Shop Mito Red Light button on this page.",
              "Choose the Mito Red Light products you want and add them to your cart.",
              "Continue to checkout without entering a coupon code.",
              "Confirm that the 10% discount appears before you complete your purchase.",
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
          <SectionHeader eyebrow="Good to know" title="Tips for the link-only offer" />
          <ul className="space-y-3">
            {[
              "Start your shopping session from the verified affiliate link.",
              "Do not enter a separate code; the 10% discount should apply automatically.",
              "If the discount is missing, reopen the link and check your cart again.",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70 leading-relaxed">
                <Check className="w-5 h-5 text-[#8b3a1a] shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionHeader eyebrow="FAQ" title="Mito Red Light discount questions answered" />
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="card-glass rounded-2xl p-6" data-testid={`faq-mito-red-light-discount-${i}`}>
                <p className="font-display font-bold text-black">{f.q}</p>
                <p className="text-black/60 mt-2 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader eyebrow="Keep exploring" title="Continue reading" />
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/discount-codes"
              className="card-glass rounded-2xl p-6 block hover:shadow-lg transition-shadow"
              data-testid="link-mito-red-light-faq-all-codes"
            >
              <p className="font-display font-bold text-black">All discount codes</p>
              <p className="text-black/60 text-sm mt-1 leading-relaxed">
                Browse every verified discount and affiliate offer I track.
              </p>
            </Link>
            <Link
              href="/blog/mito-red-light-discount-code"
              className="card-glass rounded-2xl p-6 block hover:shadow-lg transition-shadow"
              data-testid="link-mito-red-light-faq-deal-page"
            >
              <p className="font-display font-bold text-black">Mito Red Light discount page</p>
              <p className="text-black/60 text-sm mt-1 leading-relaxed">
                See the current offer and step-by-step checkout instructions.
              </p>
            </Link>
          </div>
        </section>

        <div className="card-glass rounded-2xl p-6 md:p-8" data-testid="cta-mito-red-light-discount-faq">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-display text-xl font-bold text-black">Ready to save 10% on Mito Red Light?</p>
              <p className="text-black/60 mt-1">
                Use the verified link and the discount applies automatically — no code required.
              </p>
            </div>
            <a href="https://www.mitoredlight.com/EDEN27299" target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary rounded-full px-6" data-testid="button-mito-red-light-discount-faq">
                Shop Mito Red Light <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>

        <div
          className="flex items-start gap-4 card-glass rounded-2xl p-6"
          data-testid="bio-mito-red-light-discount-faq"
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
          data-testid="disclosure-mito-red-light-discount-faq"
        >
          <strong className="font-semibold text-black/70">Affiliate disclosure:</strong> This post contains
          affiliate links. If you buy through them, I may earn a commission at no extra cost to you.
        </p>
      </article>
    </PageLayout>
  );
}