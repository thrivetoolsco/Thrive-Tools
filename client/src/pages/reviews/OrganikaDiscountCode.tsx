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
    q: "Does the Organika discount code expire?",
    a: "Brands can change or retire codes at any time, so no code works forever. I re-check the codes on my discount codes page regularly. If EDEN_25 ever stops working, I update it there first.",
  },
  {
    q: "Where do I enter the Organika discount code?",
    a: "Add your products to the cart on organika.com, go to checkout, and look for the discount-code box. Type EDEN_25 exactly as shown (all caps with the underscore, no spaces) and apply it before you pay.",
  },
  {
    q: "Can I stack discount codes on Organika?",
    a: "In almost all cases, no. Organika checkout accepts one discount code per order, like most supplement brands. If you have more than one code, use whichever saves you the most on that order.",
  },
];


export default function OrganikaDiscountCode() {
  return (
    <PageLayout
      showShare
      title="Organika Discount Code 2026"
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: "Organika Discount Code 2026 | Thrive Tools",
        description:
          "Looking for an Organika discount code? Use code EDEN_25 at checkout on organika.com. Verified for 2026.",
        canonical: "https://thrivetools.co/blog/organika-discount-code",
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

        <div className="card-glass rounded-2xl p-6 md:p-8" data-testid="answer-organika-discount-code">
          <p className="text-lg leading-relaxed text-black/80">
            <strong className="font-semibold text-black">The short answer:</strong> use the code{" "}
            <strong className="font-semibold text-black">EDEN_25</strong> in the discount-code box at checkout on
            organika.com to save on your order.
          </p>
        </div>

        <section>
          <SectionHeader
            eyebrow="The code"
            title="Organika discount code"
            description="Copy the code below, then head to organika.com to use it."
          />
          <div className="card-glass rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5" data-testid="code-organika-discount-code">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-[#c4622d]/10 text-[#8b3a1a] flex items-center justify-center shrink-0">
                <Tag className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-black/50">Discount code</p>
                <p className="font-display text-2xl font-bold tracking-wide text-black">EDEN_25</p>
              </div>
            </div>
            <a href="https://organika.com/?rfsn=8403940.a276a1f&utm_source=refersion&utm_medium=affiliate&utm_campaign=8403940.a276a1f" target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary rounded-full px-6" data-testid="button-organika-shop">
                Shop Organika <ExternalLink className="w-4 h-4 ml-2" />
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
              "Add the Organika products you want to your cart on organika.com.",
              "Go to checkout and find the discount-code (promo code) box.",
              "Type EDEN_25 exactly as shown, all caps with the underscore and no spaces, and click apply.",
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
              "Codes are usually case-sensitive: EDEN_25 must be all caps, underscore included.",
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
              <div key={i} className="card-glass rounded-2xl p-6" data-testid={`faq-organika-${i}`}>
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
              data-testid="link-organika-all-codes"
            >
              <p className="font-display font-bold text-black">All discount codes</p>
              <p className="text-black/60 text-sm mt-1 leading-relaxed">
                Browse every verified code I track, in one place.
              </p>
            </Link>
            <Link
              href="/blog/best-supplements-energy-gut-health-longevity-2026"
              className="card-glass rounded-2xl p-6 block hover:shadow-lg transition-shadow"
              data-testid="link-organika-best-supplements"
            >
              <p className="font-display font-bold text-black">Best Supplements for Energy, Gut Health & Longevity</p>
              <p className="text-black/60 text-sm mt-1 leading-relaxed">
                The supplements worth your money for energy, gut health, and longevity.
              </p>
            </Link>
          </div>
        </section>

        <div className="card-glass rounded-2xl p-6 md:p-8" data-testid="cta-organika-discount-code">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-display text-xl font-bold text-black">Ready to save on Organika?</p>
              <p className="text-black/60 mt-1">
                Enter <strong className="font-semibold text-black">EDEN_25</strong> in the discount-code box at checkout.
              </p>
            </div>
            <a href="https://organika.com/?rfsn=8403940.a276a1f&utm_source=refersion&utm_medium=affiliate&utm_campaign=8403940.a276a1f" target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary rounded-full px-6" data-testid="button-organika-discount-code">
                Shop Organika <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4 card-glass rounded-2xl p-6" data-testid="bio-organika-discount-code">
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

        <p className="text-sm text-black/50 leading-relaxed" data-testid="disclosure-organika-discount-code">
          <strong className="font-semibold text-black/70">Affiliate disclosure:</strong> This post contains affiliate links. If you buy through them, I may earn a commission at no extra cost to you.
        </p>
      </article>
    </PageLayout>
  );
}
