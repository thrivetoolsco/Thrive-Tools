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

const deals = [
  {
    brand: "Joovv",
    code: "THRIVETOOLS",
    note: "Enter the code at checkout on joovv.com.",
    href: "https://joovv.com",
  },
  {
    brand: "Mito Red Light",
    code: "No code needed",
    note: "Discount auto-applies via the link.",
    href: "https://mitoredlight.com/EDEN27299",
  },
  {
    brand: "RedTherapy.co",
    code: "THRIVETOOLS",
    note: "Enter the code at checkout on redtherapy.co.",
    href: "https://redtherapy.co/?rfsn=7676047.c07132&utm_source=refersion&utm_medium=affiliate&utm_campaign=7676047.c07132",
  },
  {
    brand: "VieLight",
    code: "THRIVETOOLS",
    note: "Enter the code at checkout on vielight.com/devices/.",
    href: "https://vielight.com/devices/",
  },
];

const faqs = [
  {
    q: "How do I use a red light therapy discount code?",
    a: "Add a device to your cart on the brand's site, go to checkout, and enter the code in the discount-code box before you pay. For Mito Red Light there is no code: shop via the link and the discount applies automatically.",
  },
  {
    q: "Can I stack red light therapy discount codes?",
    a: "In almost all cases, no. Device checkouts accept one discount code per order. Use whichever code saves you the most.",
  },
  {
    q: "Do the codes work on sale items?",
    a: "That depends on the brand and the promotion. If a code does not apply to a sale item, it is usually a brand exclusion. Try it on full-priced devices, or check the brand's terms at checkout.",
  },
];

export default function RedLightTherapyDiscountCodes() {
  return (
    <PageLayout
      showShare
      title="Best Red Light Therapy Discount Codes 2026"
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: "Best Red Light Therapy Discount Codes 2026 | Thrive Tools",
        description:
          "The best red light therapy discount codes for 2026: Joovv, Mito Red Light, RedTherapy.co, and VieLight. Verified codes and automatic discounts.",
        canonical: "https://thrivetools.co/blog/red-light-therapy-discount-codes",
        ogType: "article",
        datePublished: "2026-09-20",
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-10">
        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">Discount Codes</Badge>
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">Verified 2026</Badge>
        </div>

        <div className="card-glass rounded-2xl p-6 md:p-8" data-testid="answer-red-light-therapy-discount-codes">
          <p className="text-lg leading-relaxed text-black/80">
            <strong className="font-semibold text-black">The short answer:</strong> use code{" "}
            <strong className="font-semibold text-black">THRIVETOOLS</strong> at checkout for Joovv,
            RedTherapy.co, and VieLight. Mito Red Light needs no code; the discount auto-applies via the
            link.
          </p>
        </div>

        <section>
          <SectionHeader
            eyebrow="The deals"
            title="Red light therapy discount codes"
            description="Every verified deal in one table. Codes go in the discount-code box at checkout."
          />
          <div className="space-y-3">
            {deals.map((deal, i) => (
              <div
                key={i}
                className="card-glass rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                data-testid={`deal-red-light-${i}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-[#c4622d]/10 text-[#8b3a1a] flex items-center justify-center shrink-0">
                    <Tag className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="font-display font-bold text-black">{deal.brand}</p>
                    <p className="text-black/60 text-sm">{deal.note}</p>
                    <p className="font-mono font-bold text-[#8b3a1a] text-sm mt-1">Code: {deal.code}</p>
                  </div>
                </div>
                <a href={deal.href} target="_blank" rel="noopener noreferrer" className="shrink-0">
                  <Button className="btn-primary rounded-full px-5" data-testid={`button-red-light-${i}`}>
                    Shop {deal.brand} <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="How to use them"
            title="How to apply the codes at checkout"
          />
          <ol className="space-y-4">
            {[
              "Pick your device and add it to the cart on the brand's website.",
              "Go to checkout and find the discount-code (promo code) box.",
              "Type the code exactly as shown, all caps with no spaces, and click apply.",
              "For Mito Red Light, skip the code: shop via the link above so the discount auto-applies.",
              "Confirm the savings show on your order total before you pay.",
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
              <div key={i} className="card-glass rounded-2xl p-6" data-testid={`faq-red-light-${i}`}>
                <p className="font-display font-bold text-black">{f.q}</p>
                <p className="text-black/60 mt-2 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="Device guides"
            title="Continue reading"
            description="Device details live in the guides below; this page stays focused on the deals."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/blog/joovv-vs-mito-red-light-vs-redtherapy-comparison"
              className="card-glass rounded-2xl p-6 block hover:shadow-lg transition-shadow"
              data-testid="link-red-light-comparison"
            >
              <p className="font-display font-bold text-black">Joovv vs Mito Red Light vs RedTherapy</p>
              <p className="text-black/60 text-sm mt-1 leading-relaxed">
                How the three panel brands compare on specs and value.
              </p>
            </Link>
            <Link
              href="/blog/red-light-therapy-science-benefits-devices"
              className="card-glass rounded-2xl p-6 block hover:shadow-lg transition-shadow"
              data-testid="link-red-light-science"
            >
              <p className="font-display font-bold text-black">Red light therapy science guide</p>
              <p className="text-black/60 text-sm mt-1 leading-relaxed">
                Benefits, wavelengths, and how to choose a device.
              </p>
            </Link>
            <Link
              href="/product-reviews/vielight-neuro-review"
              className="card-glass rounded-2xl p-6 block hover:shadow-lg transition-shadow"
              data-testid="link-red-light-vielight"
            >
              <p className="font-display font-bold text-black">Vielight Neuro review</p>
              <p className="text-black/60 text-sm mt-1 leading-relaxed">
                My review of the Vielight brain device.
              </p>
            </Link>
            <Link
              href="/discount-codes"
              className="card-glass rounded-2xl p-6 block hover:shadow-lg transition-shadow"
              data-testid="link-red-light-all-codes"
            >
              <p className="font-display font-bold text-black">All discount codes</p>
              <p className="text-black/60 text-sm mt-1 leading-relaxed">
                Browse every verified code I track, in one place.
              </p>
            </Link>
          </div>
        </section>

        <section>
          <SectionHeader eyebrow="Good to know" title="Tips for using the codes" />
          <ul className="space-y-3">
            {[
              "Codes are usually case-sensitive: THRIVETOOLS must be all caps.",
              "Only one discount code can be used per order.",
              "If a code does not apply, double-check for typos or extra spaces.",
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
          data-testid="bio-red-light-therapy-discount-codes"
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
          data-testid="disclosure-red-light-therapy-discount-codes"
        >
          <strong className="font-semibold text-black/70">Affiliate disclosure:</strong> This post contains
          affiliate links. If you buy through them, I may earn a commission at no extra cost to you.
        </p>
      </article>
    </PageLayout>
  );
}
