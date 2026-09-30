import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ExternalLink, Tag, User } from "lucide-react";
import { Link } from "wouter";
import FaqJsonLd from "@/components/FaqJsonLd";

export type DiscountFaq = { q: string; a: string };

export type DiscountCodeArticleProps = {
  brand: string;
  slug: string;
  heroImg: string;
  imageAlt: string;
  description: string;
  href: string;
  code?: string;
  shortAnswer: string;
  steps: string[];
  tips: string[];
  faqs: DiscountFaq[];
  includeFaqSchema?: boolean;
};

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

export default function DiscountCodeArticle({
  brand,
  slug,
  heroImg,
  imageAlt,
  description,
  href,
  code,
  shortAnswer,
  steps,
  tips,
  faqs,
  includeFaqSchema = false,
}: DiscountCodeArticleProps) {
  const linkOnly = !code;

  return (
    <PageLayout
      showShare
      title={`${brand} Discount Code 2026`}
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: `${brand} Discount Code 2026 | Thrive Tools`,
        description,
        canonical: `https://thrivetools.co/blog/${slug}`,
        ogType: "article",
        datePublished: "2026-09-22",
        image: heroImg,
        imageAlt,
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      {includeFaqSchema && <FaqJsonLd faqs={faqs} />}
      <article className="space-y-10">
        <div className="card-glass rounded-2xl overflow-hidden" data-testid={`img-hero-${slug}`}>
          <img loading="lazy" decoding="async" src={heroImg} alt={imageAlt} className="w-full h-auto object-cover" />
        </div>

        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">Discount Codes</Badge>
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">Verified 2026</Badge>
        </div>

        <div className="card-glass rounded-2xl p-6 md:p-8" data-testid={`answer-${slug}`}>
          <p className="text-lg leading-relaxed text-black/80">
            <strong className="font-semibold text-black">The short answer:</strong> {shortAnswer}
          </p>
        </div>

        <section>
          <SectionHeader
            eyebrow={linkOnly ? "The offer" : "The code"}
            title={`${brand} discount ${linkOnly ? "link" : "code"}`}
            description={linkOnly ? "Use the verified link below to activate the offer." : "Use the link below and enter the code at checkout."}
          />
          <div className="card-glass rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5" data-testid={`code-${slug}`}>
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-[#c4622d]/10 text-[#8b3a1a] flex items-center justify-center shrink-0">
                <Tag className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-black/50">{linkOnly ? "Discount offer" : "Discount code"}</p>
                <p className="font-display text-2xl font-bold tracking-wide text-black">{code || "Follow the verified link"}</p>
              </div>
            </div>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary rounded-full px-6" data-testid={`button-${slug}-shop`}>
                Shop {brand} <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </section>

        <section>
          <SectionHeader eyebrow="How to use it" title={linkOnly ? "How to activate the offer" : "How to apply the code at checkout"} description="It takes less than a minute." />
          <ol className="space-y-4">
            {steps.map((step, i) => (
              <li key={step} className="card-glass rounded-2xl p-5 flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-[#c4622d]/10 text-[#8b3a1a] flex items-center justify-center font-display font-bold shrink-0">{i + 1}</span>
                <p className="text-black/70 leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <SectionHeader eyebrow="Good to know" title="Tips for using this discount" />
          <ul className="space-y-3">
            {tips.map((tip) => (
              <li key={tip} className="flex items-start gap-3 text-black/70 leading-relaxed">
                <Check className="w-5 h-5 text-[#8b3a1a] shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="card-glass rounded-2xl p-6" data-testid={`faq-${slug}-${i}`}>
                <p className="font-display font-bold text-black">{faq.q}</p>
                <p className="text-black/60 mt-2 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader eyebrow="Keep exploring" title="Continue reading" />
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/discount-codes" className="card-glass rounded-2xl p-6 block hover:shadow-lg transition-shadow">
              <p className="font-display font-bold text-black">All discount codes</p>
              <p className="text-black/60 text-sm mt-1 leading-relaxed">Browse every verified offer I track.</p>
            </Link>
            <Link href="/blog/wellness-discount-codes-questions-answered" className="card-glass rounded-2xl p-6 block hover:shadow-lg transition-shadow">
              <p className="font-display font-bold text-black">Discount code questions</p>
              <p className="text-black/60 text-sm mt-1 leading-relaxed">Learn how codes and link-only deals work.</p>
            </Link>
          </div>
        </section>

        <div className="card-glass rounded-2xl p-6 md:p-8" data-testid={`cta-${slug}`}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-display text-xl font-bold text-black">Ready to save on {brand}?</p>
              <p className="text-black/60 mt-1">{linkOnly ? "Follow the verified link to activate the offer." : `Enter ${code} in the discount-code box at checkout.`}</p>
            </div>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary rounded-full px-6">
                Shop {brand} <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4 card-glass rounded-2xl p-6" data-testid={`bio-${slug}`}>
          <span className="w-12 h-12 rounded-full bg-[#c4622d]/10 text-[#8b3a1a] flex items-center justify-center shrink-0"><User className="w-6 h-6" /></span>
          <div>
            <p className="font-display font-bold text-black">Eden Laraki</p>
            <p className="text-black/60 mt-1 text-sm">Eden runs ThriveTools.co, where she tests wellness products and keeps a verified list of discount codes for the brands she actually uses.</p>
          </div>
        </div>

        <p className="text-sm text-black/50 leading-relaxed" data-testid={`disclosure-${slug}`}>
          <strong className="font-semibold text-black/70">Affiliate disclosure:</strong> This post contains affiliate links. If you buy through them, I may earn a commission at no extra cost to you.
        </p>
      </article>
    </PageLayout>
  );
}