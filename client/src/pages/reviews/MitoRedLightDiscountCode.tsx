import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Tag, Check, User } from "lucide-react";
import { Link } from "wouter";
// Hero image pending upload

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
    q: "Do I need a discount code for Mito Red Light?",
    a: "No. The discount applies automatically when you shop via the link on this page. There is no code to enter at checkout.",
  },
  {
    q: "How do I get the Mito Red Light discount?",
    a: "Click the Shop Mito Red Light button on this page, add products to your cart on mitoredlight.com, and check out. The discount applies automatically.",
  },
  {
    q: "Does the Mito Red Light discount expire?",
    a: "Brands can change or pause discounts at any time. I re-check the link on my discount codes page regularly. If it ever stops working, I update it there first.",
  },
];

const steps = [
  "Click the Shop Mito Red Light button on this page to open mitoredlight.com with the discount applied.",
  "Add the Mito Red Light products you want to your cart.",
  "Go to checkout \u2014 the discount applies automatically. There is no code to enter.",
  "Complete your purchase and enjoy the savings.",
];

const tips = [
  "No code to remember \u2014 just make sure you start from the link on this page.",
  "If the discount does not appear, empty your cart and click the link again.",
  "I re-check this link regularly to make sure the discount still applies.",
];

export default function MitoRedLightDiscountCode() {
  return (
    <PageLayout
      showShare
      title="Mito Red Light Discount Code 2026"
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: "Mito Red Light Discount Code 2026 | Thrive Tools",
        description:
          "Looking for a Mito Red Light discount code? No code needed \u2014 follow the link to get the discount automatically. Verified for 2026.",
        canonical: "https://thrivetools.co/blog/mito-red-light-discount-code",
        ogType: "article",
        datePublished: "2026-09-22",
        // Hero image pending upload
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-10">
        <div className="card-glass rounded-2xl overflow-hidden" data-testid="img-hero-mito-red-light-discount">
          {/* Hero image pending upload */}
        </div>

        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">Discount Codes</Badge>
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">Verified 2026</Badge>
        </div>

        <div className="card-glass rounded-2xl p-6 md:p-8" data-testid="answer-mito-red-light-discount-code">
          <p className="text-lg leading-relaxed text-black/80">
            <strong className="font-semibold text-black">The short answer:</strong> no code needed \u2014 the discount applies automatically when you shop Mito Red Light via the link on this page.
          </p>
        </div>

        <section>
          <SectionHeader eyebrow="The discount" title="Mito Red Light discount" description="Follow the link below \u2014 your discount applies automatically at checkout. No code to remember." />
          <div className="card-glass rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5" data-testid="code-mito-red-light-discount-code">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-[#c4622d]/10 text-[#8b3a1a] flex items-center justify-center shrink-0">
                <Tag className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-black/50">Discount</p>
                <p className="font-display text-2xl font-bold tracking-wide text-black">No code needed</p>
              </div>
            </div>
            <a href="https://www.mitoredlight.com/EDEN27299" target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary rounded-full px-6" data-testid="button-mito-red-light-shop">
                Shop Mito Red Light <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </section>

        <section>
          <SectionHeader eyebrow="How to use it" title="How to get the discount" description="It takes less than a minute." />
          <ol className="space-y-4">
            {steps.map((step, i) => (
              <li key={i} className="card-glass rounded-2xl p-5 flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-[#c4622d]/10 text-[#8b3a1a] flex items-center justify-center font-display font-bold shrink-0">{i + 1}</span>
                <p className="text-black/70 leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <SectionHeader eyebrow="Good to know" title="Tips for using the discount" />
          <ul className="space-y-3">
            {tips.map((tip, i) => (
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
              <div key={i} className="card-glass rounded-2xl p-6" data-testid={`faq-mito-red-light-${i}`}>
                <p className="font-display font-bold text-black">{f.q}</p>
                <p className="text-black/60 mt-2 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader eyebrow="Keep exploring" title="Continue reading" />
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/discount-codes" className="card-glass rounded-2xl p-6 block hover:shadow-lg transition-shadow" data-testid="link-mito-red-light-all-codes">
              <p className="font-display font-bold text-black">All discount codes</p>
              <p className="text-black/60 text-sm mt-1 leading-relaxed">Browse every verified code I track, in one place.</p>
            </Link>
            <Link href="/blog/redtherapy-discount-code" className="card-glass rounded-2xl p-6 block hover:shadow-lg transition-shadow" data-testid="link-mito-red-light-redtherapy">
              <p className="font-display font-bold text-black">RedTherapy</p>
              <p className="text-black/60 text-sm mt-1 leading-relaxed">My RedTherapy discount code post.</p>
            </Link>
          </div>
        </section>

        <section>
          <div className="card-glass rounded-2xl p-6 md:p-8" data-testid="cta-mito-red-light-discount-code">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-display text-xl font-bold text-black">Ready to save on Mito Red Light?</p>
                <p className="text-black/60 mt-1">Follow the link \u2014 the discount applies automatically at checkout.</p>
              </div>
              <a href="https://www.mitoredlight.com/EDEN27299" target="_blank" rel="noopener noreferrer">
                <Button className="btn-primary rounded-full px-6" data-testid="button-mito-red-light-discount-code">
                  Shop Mito Red Light <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </article>
    </PageLayout>
  );
}
