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

const faqs = [
  {
    q: "How do I use the Equip Foods discount code?",
    a: "Shop through the link on this page, or enter THRIVETOOLS in the discount-code box at checkout on equipfoods.com. The code must be applied before you pay.",
  },
  {
    q: "Does the Equip Foods code work on subscriptions?",
    a: "Discount codes generally apply to one-time orders. Subscription discounts are usually handled separately by the brand at checkout. If a code does not apply to your subscription, try it on a one-time order instead.",
  },
  {
    q: "Can I combine the Equip Foods code with other offers?",
    a: "In almost all cases, no. Equip Foods checkout accepts one discount code per order, like most supplement brands. Use whichever code saves you the most.",
  },
  {
    q: "What if the code does not work?",
    a: "First check for typos: the code is THRIVETOOLS, all caps, no spaces. If it still does not apply, the brand may have changed or retired it. I keep the verified codes updated on my discount codes page.",
  },
];

export default function EquipFoodsDiscountCode() {
  return (
    <PageLayout
      showShare
      title="Equip Foods Discount Code 2026"
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: "Equip Foods Discount Code 2026 | Thrive Tools",
        description:
          "Looking for an Equip Foods discount code? Use code THRIVETOOLS at checkout on equipfoods.com. Verified for 2026.",
        canonical: "https://thrivetools.co/blog/equip-foods-discount-code",
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

        <div className="card-glass rounded-2xl p-6 md:p-8" data-testid="answer-equip-foods-discount-code">
          <p className="text-lg leading-relaxed text-black/80">
            <strong className="font-semibold text-black">The short answer:</strong> use the code{" "}
            <strong className="font-semibold text-black">THRIVETOOLS</strong> at checkout on equipfoods.com
            to save on your order.
          </p>
        </div>

        <section>
          <SectionHeader
            eyebrow="The code"
            title="Equip Foods discount code"
            description="Use the link below and the code applies automatically, or enter it manually at checkout."
          />
          <div
            className="card-glass rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
            data-testid="code-equip-foods-discount-code"
          >
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-[#c4622d]/10 text-[#8b3a1a] flex items-center justify-center shrink-0">
                <Tag className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-black/50">Discount code</p>
                <p className="font-display text-2xl font-bold tracking-wide text-black">THRIVETOOLS</p>
              </div>
            </div>
            <a
              href="https://www.equipfoods.com/THRIVETOOLS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="btn-primary rounded-full px-6" data-testid="button-equip-foods-shop">
                Shop Equip Foods <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="How to use it"
            title="How to apply the code at checkout"
            description="Two ways to make sure the discount applies."
          />
          <ol className="space-y-4">
            {[
              "Easiest: click the Shop Equip Foods button above. The link carries the code (equipfoods.com/THRIVETOOLS).",
              "Or shop equipfoods.com directly, add products to your cart, and go to checkout.",
              "Find the discount-code box and type THRIVETOOLS, all caps with no spaces.",
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
          <SectionHeader eyebrow="Good to know" title="Tips for using the code" />
          <ul className="space-y-3">
            {[
              "Codes are usually case-sensitive: THRIVETOOLS must be all caps.",
              "Only one discount code can be used per order.",
              "If the code does not apply, double-check for typos or extra spaces.",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70 leading-relaxed">
                <Check className="w-5 h-5 text-[#8b3a1a] shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="card-glass rounded-2xl p-6" data-testid={`faq-equip-foods-${i}`}>
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
              data-testid="link-equip-foods-all-codes"
            >
              <p className="font-display font-bold text-black">All discount codes</p>
              <p className="text-black/60 text-sm mt-1 leading-relaxed">
                Browse every verified code I track, in one place.
              </p>
            </Link>
            <Link
              href="/blog/best-clean-protein-powder-2026-equip-prime-protein"
              className="card-glass rounded-2xl p-6 block hover:shadow-lg transition-shadow"
              data-testid="link-equip-foods-protein-guide"
            >
              <p className="font-display font-bold text-black">Clean protein powder guide</p>
              <p className="text-black/60 text-sm mt-1 leading-relaxed">
                What to look for in a clean protein powder.
              </p>
            </Link>
          </div>
        </section>

        <div
          className="card-glass rounded-2xl p-6 md:p-8"
          data-testid="cta-equip-foods-discount-code"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-display text-xl font-bold text-black">Ready to save on Equip Foods?</p>
              <p className="text-black/60 mt-1">
                Use <strong className="font-semibold text-black">THRIVETOOLS</strong> at checkout on
                equipfoods.com.
              </p>
            </div>
            <a
              href="https://www.equipfoods.com/THRIVETOOLS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="btn-primary rounded-full px-6"
                data-testid="button-equip-foods-discount-code"
              >
                Shop Equip Foods <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>

        <div
          className="flex items-start gap-4 card-glass rounded-2xl p-6"
          data-testid="bio-equip-foods-discount-code"
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
          data-testid="disclosure-equip-foods-discount-code"
        >
          <strong className="font-semibold text-black/70">Affiliate disclosure:</strong> This post contains
          affiliate links. If you buy through them, I may earn a commission at no extra cost to you.
        </p>
      </article>
    </PageLayout>
  );
}
