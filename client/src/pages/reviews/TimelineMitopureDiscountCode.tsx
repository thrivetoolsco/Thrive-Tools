import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Zap, Check, User } from "lucide-react";
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
    q: "Is there a Timeline MitoPure discount code I need to enter?",
    a: "No. There is no code to enter. Shop through the link on this page (shop.timeline.com/THRIVE33) and the discount applies automatically at checkout.",
  },
  {
    q: "How do I make sure the Timeline discount applies?",
    a: "Click the Shop Timeline button on this page so you arrive via the discount link, then check out normally. You should see the savings reflected on your order before you pay. If you navigated away, come back and click the link again.",
  },
  {
    q: "Can I stack the Timeline discount with another code?",
    a: "In almost all cases, no. The automatic discount applies to your order on its own, and checkout accepts one discount per order. Use whichever offer saves you the most.",
  },
];

export default function TimelineMitopureDiscountCode() {
  return (
    <PageLayout
      showShare
      title="Timeline MitoPure Discount Code 2026"
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: "Timeline MitoPure Discount Code 2026 | Thrive Tools",
        description:
          "Looking for a Timeline MitoPure discount code? There is no code to enter. Shop via the discount link and the savings apply automatically. Verified for 2026.",
        canonical: "https://thrivetools.co/blog/timeline-mitopure-discount-code",
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

        <div className="card-glass rounded-2xl p-6 md:p-8" data-testid="answer-timeline-mitopure-discount-code">
          <p className="text-lg leading-relaxed text-black/80">
            <strong className="font-semibold text-black">The short answer:</strong> there is no code to
            enter. Shop Timeline through the discount link on this page and the savings apply
            automatically at checkout.
          </p>
        </div>

        <section>
          <SectionHeader
            eyebrow="The deal"
            title="Timeline MitoPure discount"
            description="No code needed. Click below and the discount is applied for you."
          />
          <div
            className="card-glass rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
            data-testid="code-timeline-mitopure-discount-code"
          >
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-[#c4622d]/10 text-[#8b3a1a] flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-black/50">Discount type</p>
                <p className="font-display text-2xl font-bold tracking-wide text-black">
                  Auto-applied, no code
                </p>
              </div>
            </div>
            <a
              href="https://shop.timeline.com/THRIVE33"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="btn-primary rounded-full px-6" data-testid="button-timeline-shop">
                Shop Timeline <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="How it works"
            title="How the automatic discount works"
            description="Since there is no code to enter, the link does the work."
          />
          <ol className="space-y-4">
            {[
              "Click the Shop Timeline button on this page to open the store with the discount link.",
              "Add the MitoPure products you want to your cart.",
              "Go to checkout. There is no code box to fill in.",
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
          <SectionHeader eyebrow="Good to know" title="Tips for the automatic discount" />
          <ul className="space-y-3">
            {[
              "You must arrive via the discount link for the savings to apply.",
              "If you browsed away, come back and click the link again before checking out.",
              "The discount applies on its own; checkout accepts one discount per order.",
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
              <div key={i} className="card-glass rounded-2xl p-6" data-testid={`faq-timeline-${i}`}>
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
              data-testid="link-timeline-all-codes"
            >
              <p className="font-display font-bold text-black">All discount codes</p>
              <p className="text-black/60 text-sm mt-1 leading-relaxed">
                Browse every verified code I track, in one place.
              </p>
            </Link>
            <Link
              href="/blog/urolithin-a-mitophagy-longevity-supplement-guide"
              className="card-glass rounded-2xl p-6 block hover:shadow-lg transition-shadow"
              data-testid="link-timeline-urolithin"
            >
              <p className="font-display font-bold text-black">Urolithin A guide</p>
              <p className="text-black/60 text-sm mt-1 leading-relaxed">
                The science behind MitoPure: mitophagy, mitochondria, and longevity.
              </p>
            </Link>
          </div>
        </section>

        <div
          className="card-glass rounded-2xl p-6 md:p-8"
          data-testid="cta-timeline-mitopure-discount-code"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-display text-xl font-bold text-black">Ready to save on Timeline MitoPure?</p>
              <p className="text-black/60 mt-1">
                No code to enter. Shop via the link and the discount applies automatically.
              </p>
            </div>
            <a
              href="https://shop.timeline.com/THRIVE33"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="btn-primary rounded-full px-6"
                data-testid="button-timeline-discount-code"
              >
                Shop Timeline <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>

        <div
          className="flex items-start gap-4 card-glass rounded-2xl p-6"
          data-testid="bio-timeline-mitopure-discount-code"
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
          data-testid="disclosure-timeline-mitopure-discount-code"
        >
          <strong className="font-semibold text-black/70">Affiliate disclosure:</strong> This post contains
          affiliate links. If you buy through them, I may earn a commission at no extra cost to you.
        </p>
      </article>
    </PageLayout>
  );
}
