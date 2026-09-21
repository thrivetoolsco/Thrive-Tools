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
    q: "Does the Earthrunners discount code expire?",
    a: "Brands can change or retire codes at any time, so no code works forever. I re-check the codes on my discount codes page regularly. If THRIVETOOLS ever stops working, I update it there first.",
  },
  {
    q: "Where do I enter the Earthrunners discount code?",
    a: "Add your products to the cart on earthrunners.com, go to checkout, and look for the discount-code box. Type THRIVETOOLS exactly as shown (all caps, no spaces) and apply it before you pay.",
  },
  {
    q: "Can I stack discount codes on Earthrunners?",
    a: "In almost all cases, no. Earthrunners checkout accepts one discount code per order, like most brands. If you have more than one code, use whichever saves you the most on that order.",
  },
];


// Hero image pending upload: earthrunners-discount-code-hero.jpg

export default function EarthRunnersDiscountCode() {
  return (
    <PageLayout
      showShare
      title="Earthrunners Discount Code 2026"
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: "Earthrunners Discount Code 2026 | Thrive Tools",
        description:
          "Looking for an Earthrunners discount code? Use code THRIVETOOLS at checkout on earthrunners.com. Verified for 2026.",
        canonical: "https://thrivetools.co/blog/earthrunners-discount-code",
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


        <div className="card-glass rounded-2xl p-6 md:p-8" data-testid="answer-earthrunners-discount-code">
          <p className="text-lg leading-relaxed text-black/80">
            <strong className="font-semibold text-black">The short answer:</strong> use the code{" "}
            <strong className="font-semibold text-black">THRIVETOOLS</strong> in the discount-code box at checkout on
            earthrunners.com to save on your order.
          </p>
        </div>


        <section>
          <SectionHeader
            eyebrow="The code"
            title="Earthrunners discount code"
            description="Use the link below and the code applies automatically, or enter it manually at checkout."
          />
          <div className="card-glass rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5" data-testid="code-earthrunners-discount-code">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-[#c4622d]/10 text-[#8b3a1a] flex items-center justify-center shrink-0">
                <Tag className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-black/50">Discount code</p>
                <p className="font-display text-2xl font-bold tracking-wide text-black">THRIVETOOLS</p>
              </div>
            </div>
            <a href="https://earthrunners.com/?rfsn=7676227.de5b78" target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary rounded-full px-6" data-testid="button-earthrunners-shop">
                Shop Earthrunners <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </section>


        <section>
          <SectionHeader
            eyebrow="How to use it"
            title="How to apply the code at checkout"
            description="It takes less than a minute."
          />
          <ol className="space-y-4">
            {[
              "Add the Earthrunners products you want to your cart on earthrunners.com.",
              "Go to checkout and find the discount-code (promo code) box.",
              "Type THRIVETOOLS exactly as shown, all caps with no spaces, and click apply.",
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
              <div key={i} className="card-glass rounded-2xl p-6" data-testid={`faq-earthrunners-${i}`}>
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
              data-testid="link-earthrunners-all-codes"
            >
              <p className="font-display font-bold text-black">All discount codes</p>
              <p className="text-black/60 text-sm mt-1 leading-relaxed">
                Browse every verified code I track, in one place.
              </p>
            </Link>
            <Link
              href="/blog/supplement-discount-codes-faq"
              className="card-glass rounded-2xl p-6 block hover:shadow-lg transition-shadow"
              data-testid="link-earthrunners-discount-faq"
            >
              <p className="font-display font-bold text-black">Supplement Discount Codes FAQ (2026)</p>
              <p className="text-black/60 text-sm mt-1 leading-relaxed">
                Every supplement discount code question, answered.
              </p>
            </Link>
          </div>
        </section>


        <div className="card-glass rounded-2xl p-6 md:p-8" data-testid="cta-earthrunners-discount-code">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-display text-xl font-bold text-black">Ready to save on Earthrunners?</p>
              <p className="text-black/60 mt-1">
                Enter <strong className="font-semibold text-black">THRIVETOOLS</strong> in the discount-code box at checkout.
              </p>
            </div>
            <a href="https://earthrunners.com/?rfsn=7676227.de5b78" target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary rounded-full px-6" data-testid="button-earthrunners-discount-code">
                Shop Earthrunners <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>


        <div className="flex items-start gap-4 card-glass rounded-2xl p-6" data-testid="bio-earthrunners-discount-code">
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


        <p className="text-sm text-black/50 leading-relaxed" data-testid="disclosure-earthrunners-discount-code">
          <strong className="font-semibold text-black/70">Affiliate disclosure:</strong> This post contains affiliate links. If you buy through them, I may earn a commission at no extra cost to you.
        </p>
      </article>
    </PageLayout>
  );
}
