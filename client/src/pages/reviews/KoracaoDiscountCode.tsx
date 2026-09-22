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
    q: "Does the Koracao discount code expire?",
    a: "Brands can change or retire codes at any time, so no code works forever. I re-check the codes on my discount codes page regularly. If EDENKAWTHARLARAKI123 ever stops working, I update it there first.",
  },
  {
    q: "Where do I enter the Koracao discount code?",
    a: "Add your products to the cart on koracao.com, go to checkout, and look for the discount-code box. Type EDENKAWTHARLARAKI123 exactly as shown (all caps, no spaces) and apply it before you pay.",
  },
  {
    q: "Can I stack discount codes on Koracao?",
    a: "In almost all cases, no. Koracao checkout accepts one discount code per order, like most brands. If you have more than one code, use whichever saves you the most on that order.",
  },
];

const steps = [
  "Add the Koracao products you want to your cart on koracao.com.",
  "Go to checkout and find the discount-code (promo code) box.",
  "Type EDENKAWTHARLARAKI123 exactly as shown, all caps with no spaces, and click apply.",
  "Complete your purchase and enjoy the savings.",
];

const tips = [
  "Type the code exactly \u2014 EDENKAWTHARLARAKI123 in all caps with no spaces.",
  "Make sure you are shopping on koracao.com and not a reseller site.",
  "I re-check this code regularly to make sure it still works.",
];

export default function KoracaoDiscountCode() {
  return (
    <PageLayout
      showShare
      title="Koracao Discount Code 2026"
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: "Koracao Discount Code 2026 | Thrive Tools",
        description:
          "Looking for a Koracao discount code? Use code EDENKAWTHARLARAKI123 at checkout on koracao.com. Verified for 2026.",
        canonical: "https://thrivetools.co/blog/koracao-discount-code",
        ogType: "article",
        datePublished: "2026-09-22",
        // Hero image pending upload
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-10">
        <div className="card-glass rounded-2xl overflow-hidden" data-testid="img-hero-koracao-discount">
          {/* Hero image pending upload */}
        </div>

        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">Discount Codes</Badge>
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">Verified 2026</Badge>
        </div>

        <div className="card-glass rounded-2xl p-6 md:p-8" data-testid="answer-koracao-discount-code">
          <p className="text-lg leading-relaxed text-black/80">
            <strong className="font-semibold text-black">The short answer:</strong> use the code{" "}
            <strong className="font-semibold text-black">EDENKAWTHARLARAKI123</strong> in the discount-code box at checkout on koracao.com to save on your order.
          </p>
        </div>

        <section>
          <SectionHeader eyebrow="The code" title="Koracao discount code" description="Use the link below and enter the code at checkout." />
          <div className="card-glass rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5" data-testid="code-koracao-discount-code">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-[#c4622d]/10 text-[#8b3a1a] flex items-center justify-center shrink-0">
                <Tag className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-black/50">Discount code</p>
                <p className="font-display text-2xl font-bold tracking-wide text-black">EDENKAWTHARLARAKI123</p>
              </div>
            </div>
            <a href="https://koracao.com/THRIVE33" target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary rounded-full px-6" data-testid="button-koracao-shop">
                Shop Koracao <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </section>

        <section>
          <SectionHeader eyebrow="How to use it" title="How to apply the code at checkout" description="It takes less than a minute." />
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
          <SectionHeader eyebrow="Good to know" title="Tips for using the code" />
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
              <div key={i} className="card-glass rounded-2xl p-6" data-testid={`faq-koracao-${i}`}>
                <p className="font-display font-bold text-black">{f.q}</p>
                <p className="text-black/60 mt-2 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader eyebrow="Keep exploring" title="Continue reading" />
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/discount-codes" className="card-glass rounded-2xl p-6 block hover:shadow-lg transition-shadow" data-testid="link-koracao-all-codes">
              <p className="font-display font-bold text-black">All discount codes</p>
              <p className="text-black/60 text-sm mt-1 leading-relaxed">Browse every verified code I track, in one place.</p>
            </Link>
            <Link href="/blog/ceremonial-cacao-guide" className="card-glass rounded-2xl p-6 block hover:shadow-lg transition-shadow" data-testid="link-koracao-cacao-guide">
              <p className="font-display font-bold text-black">Ceremonial cacao guide</p>
              <p className="text-black/60 text-sm mt-1 leading-relaxed">My guide to ceremonial cacao.</p>
            </Link>
          </div>
        </section>

        <section>
          <div className="card-glass rounded-2xl p-6 md:p-8" data-testid="cta-koracao-discount-code">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-display text-xl font-bold text-black">Ready to save on Koracao?</p>
                <p className="text-black/60 mt-1">Enter <strong className="font-semibold text-black">EDENKAWTHARLARAKI123</strong> in the discount-code box at checkout.</p>
              </div>
              <a href="https://koracao.com/THRIVE33" target="_blank" rel="noopener noreferrer">
                <Button className="btn-primary rounded-full px-6" data-testid="button-koracao-discount-code">
                  Shop Koracao <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </article>
    </PageLayout>
  );
}
