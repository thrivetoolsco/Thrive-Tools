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
    q: "Do I need a discount code for AquaOmega?",
    a: "No. The $30 off your first subscription applies automatically when you shop via the link on this page. There is no code to enter at checkout.",
  },
  {
    q: "How do I get the $30 off my first AquaOmega subscription?",
    a: "Click the Shop AquaOmega button above, which opens the AquaOmega store with the referral link. Add your products, start your subscription, and the $30 off is applied to your first subscription order automatically.",
  },
  {
    q: "Does the AquaOmega offer expire?",
    a: "Brands can change or retire offers at any time. I re-check the offers on my discount codes page regularly. If this one ever stops working, I update it there first.",
  },
];


// Hero image pending upload: aquaomega-discount-code-hero.jpg

export default function AquaOmegaDiscountCode() {
  return (
    <PageLayout
      showShare
      title="AquaOmega Discount Code 2026"
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: "AquaOmega Discount Code 2026 | Thrive Tools",
        description:
          "Looking for an AquaOmega discount code? No code needed \u2014 follow the link to get $30 off your first subscription. Verified for 2026.",
        canonical: "https://thrivetools.co/blog/aquaomega-discount-code",
        ogType: "article",
        datePublished: "2026-09-21",
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-10">
        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">Discount Codes</Badge>
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">Verified 2026</Badge>
        </div>


        <div className="card-glass rounded-2xl p-6 md:p-8" data-testid="answer-aquaomega-discount-code">
          <p className="text-lg leading-relaxed text-black/80">
            <strong className="font-semibold text-black">The short answer:</strong> you do not need a code{" "}
            <strong className="font-semibold text-black">\u2014 follow the link below to get $30 off your first AquaOmega subscription.</strong>{" "}
            The discount applies automatically.
          </p>
        </div>


        <section>
          <SectionHeader
            eyebrow="The code"
            title="AquaOmega discount code"
            description="No code to enter. Shop via the link below and the $30 off applies automatically."
          />
          <div className="card-glass rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5" data-testid="code-aquaomega-discount-code">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-[#c4622d]/10 text-[#8b3a1a] flex items-center justify-center shrink-0">
                <Tag className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-black/50">Discount</p>
                <p className="font-display text-2xl font-bold tracking-wide text-black">$30 off first subscription</p>
              </div>
            </div>
            <a href="https://aquaomega.refr.cc/default/u/thrivetoolsco?s=rp&t=cp" target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary rounded-full px-6" data-testid="button-aquaomega-shop">
                Shop AquaOmega <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </section>


        <section>
          <SectionHeader
            eyebrow="How to use it"
            title="How to get the discount"
            description="It takes less than a minute."
          />
          <ol className="space-y-4">
            {[
              "Click the Shop AquaOmega button above to open the AquaOmega store with the discount link.",
              "Choose the omega-3 products you want and add them to your cart.",
              "Start your subscription \u2014 the $30 off your first subscription applies automatically via the link.",
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
          <SectionHeader eyebrow="Good to know" title="Tips for using the discount" />
          <ul className="space-y-3">
            {[
              "No code to remember \u2014 the $30 off applies automatically when you use the link above.",
              "The offer is for your first subscription order.",
              "If the discount does not show, make sure you started from the link on this page.",
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
              <div key={i} className="card-glass rounded-2xl p-6" data-testid={`faq-aquaomega-${i}`}>
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
              data-testid="link-aquaomega-all-codes"
            >
              <p className="font-display font-bold text-black">All discount codes</p>
              <p className="text-black/60 text-sm mt-1 leading-relaxed">
                Browse every verified code I track, in one place.
              </p>
            </Link>
            <Link
              href="/blog/supplement-discount-codes-faq"
              className="card-glass rounded-2xl p-6 block hover:shadow-lg transition-shadow"
              data-testid="link-aquaomega-discount-faq"
            >
              <p className="font-display font-bold text-black">Supplement Discount Codes FAQ (2026)</p>
              <p className="text-black/60 text-sm mt-1 leading-relaxed">
                Every supplement discount code question, answered.
              </p>
            </Link>
          </div>
        </section>


        <div className="card-glass rounded-2xl p-6 md:p-8" data-testid="cta-aquaomega-discount-code">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-display text-xl font-bold text-black">Ready to save on AquaOmega?</p>
              <p className="text-black/60 mt-1">
                Follow the link to get <strong className="font-semibold text-black">$30 off</strong> your first subscription \u2014 no code needed.
              </p>
            </div>
            <a href="https://aquaomega.refr.cc/default/u/thrivetoolsco?s=rp&t=cp" target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary rounded-full px-6" data-testid="button-aquaomega-discount-code">
                Shop AquaOmega <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>


        <div className="flex items-start gap-4 card-glass rounded-2xl p-6" data-testid="bio-aquaomega-discount-code">
          <span className="w-12 h-12 rounded-full bg-[#c4622d]/10 text-[#8b3a1a] flex items-center justify-center shrink-0">
            <User className="w-6 h-6" />
          </span>
          <div>
            <p className="font-display font-bold text-black">Eden Laraki</p>
            <p className="text-black/60 mt-1 text-sm">
              Eden runs ThriveTools.co, where she tests wellness products and keeps a verified list of discount codes for the brands she actually uses.
            </p>
          </div>
        </div>


        <p className="text-sm text-black/50 leading-relaxed" data-testid="disclosure-aquaomega-discount-code">
          <strong className="font-semibold text-black/70">Affiliate disclosure:</strong> This post contains affiliate links. If you buy through them, I may earn a commission at no extra cost to you.
        </p>
      </article>
    </PageLayout>
  );
}
