import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FaqJsonLd from "@/components/FaqJsonLd";
import { ExternalLink, Tag } from "lucide-react";
import { Link } from "wouter";
import earthrunnersImage from "@assets/earthrunners-discount-code-hero_1790058248055.jpg";
import goodTeeImage from "@assets/the-good-tee-discount-code-hero.png";
import bambooImage from "@assets/bamboo-clothes-discount-code-hero.jpg";
import earthingImage from "@assets/earthing-harmony-discount-code-hero.jpg";
import promeedImage from "@assets/promeed-discount-code-hero.jpg";
import havnImage from "@assets/havn-by-lambs-discount-code-hero.png";
import cookwareImage from "@assets/360-cookware-discount-code-hero_1790058276472.jpg";
import isunImage from "@assets/isun-skincare-discount-code-hero.jpg";
import davidsImage from "@assets/davids-discount-code-hero_1790058313367.jpg";

type BrandFaq = {
  brand: string;
  slug: string;
  title: string;
  code?: string;
  href: string;
  linkText: string;
  oneLiner: string;
  offerDesc?: string;
  image: string;
  imageAlt: string;
};

const brands: BrandFaq[] = [
  {
    brand: "EarthRunners", slug: "earthrunners-discount-code-faq", title: "EarthRunners Discount Code FAQ (2026)",
    code: "THRIVETOOLS", href: "https://earthrunners.com/?rfsn=7676227.de5b78",
    linkText: "Shop EarthRunners with code THRIVETOOLS", oneLiner: "Grounding minimalist sandal brand",
    image: earthrunnersImage, imageAlt: "EarthRunners minimalist sandals",
  },
  {
    brand: "The Good Tee", slug: "the-good-tee-discount-code-faq", title: "The Good Tee Discount Code FAQ (2026)",
    code: "thrive10", href: "https://thegoodtee.com/?ref=lzrzvhex",
    linkText: "Shop The Good Tee with code thrive10", oneLiner: "Fair-trade organic cotton basics brand",
    image: goodTeeImage, imageAlt: "The Good Tee organic cotton clothing",
  },
  {
    brand: "Bamboo Clothes", slug: "bamboo-clothes-discount-code-faq", title: "Bamboo Clothes Discount Code FAQ (2026)",
    code: "EDENKAWTHARLARAKI10", href: "https://www.bambooclothes.com/discount/eden-kawtharlaraki10",
    linkText: "Shop Bamboo Clothes with the code", oneLiner: "Bamboo-viscose underwear and apparel brand",
    image: bambooImage, imageAlt: "Bamboo Clothes apparel",
  },
  {
    brand: "Earthing Harmony", slug: "earthing-harmony-discount-code-faq", title: "Earthing Harmony Discount Code FAQ (2026)",
    code: "THRIVENOW", href: "https://earthingharmony.com/?ref=hxaqgkso",
    linkText: "Shop Earthing Harmony with code THRIVENOW", oneLiner: "Grounding mats and bed sheets brand",
    image: earthingImage, imageAlt: "Earthing Harmony grounding products",
  },
  {
    brand: "Promeed", slug: "promeed-discount-code-faq", title: "Promeed Discount FAQ (2026)",
    href: "https://www.awin1.com/cread.php?awinmid=100833&awinaffid=2421431",
    linkText: "Shop Promeed", oneLiner: "Mulberry silk bedding brand", offerDesc: "The current discount",
    image: promeedImage, imageAlt: "Promeed mulberry silk bedding",
  },
  {
    brand: "Havn by Lambs", slug: "havn-by-lambs-discount-code-faq", title: "Havn by Lambs Discount FAQ (2026)",
    href: "https://snwbl.io/lambs/EDEN50761", linkText: "Shop Havn by Lambs",
    oneLiner: "EMF-blocking apparel brand", offerDesc: "The current discount (applied automatically via the link)",
    image: havnImage, imageAlt: "Havn by Lambs EMF-blocking clothing",
  },
  {
    brand: "360 Cookware", slug: "360-cookware-discount-code-faq", title: "360 Cookware Discount Code FAQ (2026)",
    code: "THRIVETOOLS", href: "https://www.360cookware.com/THRIVETOOLS",
    linkText: "Shop 360 Cookware with code THRIVETOOLS", oneLiner: "Non-toxic stainless steel cookware brand",
    image: cookwareImage, imageAlt: "360 Cookware stainless steel cookware",
  },
  {
    brand: "ISUN Skincare", slug: "isun-skincare-discount-code-faq", title: "ISUN Skincare Discount Code FAQ (2026)",
    code: "ISUNTHRIVE", href: "https://isunskincare.com/thrivetools",
    linkText: "Shop ISUN with code ISUNTHRIVE", oneLiner: "Natural skincare brand",
    image: isunImage, imageAlt: "ISUN Skincare products",
  },
  {
    brand: "Davids", slug: "davids-discount-code-faq", title: "Davids Discount Code FAQ (2026)",
    code: "EDEN81783", href: "https://www.davids-usa.com/EDEN34969",
    linkText: "Shop Davids with code EDEN81783", oneLiner: "Natural toothpaste brand",
    image: davidsImage, imageAlt: "Davids natural toothpaste",
  },
];

function Answer({ question, children }: { question: string; children: React.ReactNode }) {
  return (
    <div className="card-glass rounded-2xl p-6">
      <h3 className="font-display font-bold text-black">{question}</h3>
      <div className="mt-2 text-black/70 leading-relaxed">{children}</div>
    </div>
  );
}

function getLifestyleFaqs(post: BrandFaq) {
  const { brand, code, linkText, offerDesc } = post;
  const faqs = code
    ? [
        {
          q: `Does ${brand} offer discount codes?`,
          a: `Yes. The current verified ${brand} code is **${code}**. Use it at checkout on the official store: [${linkText}](${post.href}).`,
        },
        {
          q: `What is the best ${brand} discount code right now?`,
          a: `**${code}** is the verified code currently listed for ${brand}.`,
        },
        {
          q: `How do I apply a ${brand} promo code?`,
          a: `1. Click the verified ${brand} link above. 2. Add products to your cart. 3. Enter **${code}** in the discount-code box at checkout. 4. Confirm the discount applied before paying.`,
        },
        {
          q: `Why isn't my ${brand} code working?`,
          a: `Check the spelling and capitalization of **${code}**, confirm your items are eligible, and make sure you're on ${brand}'s official store — not a marketplace listing.`,
        },
        {
          q: `Can I stack ${brand} discount codes?`,
          a: "Most stores accept only one discount code per order. If you have more than one, use the one that saves you the most.",
        },
      ]
    : [
        {
          q: `Does ${brand} have a discount code?`,
          a: `No code is needed. ${offerDesc} applies automatically when you shop through the verified link: [${linkText}](${post.href}).`,
        },
        {
          q: `How do I get the ${brand} discount?`,
          a: "Click the verified link above and shop as normal — the discount is attached to the link and applies at checkout. There's nothing to type.",
        },
        {
          q: `Why didn't the ${brand} discount apply?`,
          a: "Make sure you clicked through from the ThriveTools link (the discount is tied to it) and that the items in your cart are eligible.",
        },
        {
          q: `Can I combine the ${brand} link discount with a promo code?`,
          a: "Link-based discounts apply automatically, so there's no code box to fill. The link offer is the verified deal.",
        },
      ];

  faqs.push(
    {
      q: `Does ${brand} offer free shipping?`,
      a: `Shipping terms change over time — check the shipping information on ${brand}'s official site at checkout.`,
    },
    {
      q: `Does ${brand} have a money-back guarantee or returns policy?`,
      a: `Check ${brand}'s official site for their current guarantee and returns terms before you buy.`,
    },
  );
  if (!code) {
    faqs.push({
      q: "Is it safe to buy through the ThriveTools link?",
      a: `Yes. The link takes you to ${brand}'s official store. ThriveTools may earn a commission on your purchase at no extra cost to you.`,
    });
  }
  faqs.push({
    q: "Where can I find all verified ThriveTools codes?",
    a: "On the [ThriveTools discount-codes page](/discount-codes) — the source of truth, updated whenever codes change.",
  });
  return faqs;
}

function renderLifestyleText(text: string) {
  const parts: React.ReactNode[] = [];
  const tokenPattern = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let tokenIndex = 0;
  while ((match = tokenPattern.exec(text)) !== null) {
    parts.push(text.slice(lastIndex, match.index));
    const key = `faq-token-${tokenIndex++}`;
    if (match[1]) {
      parts.push(<strong key={key}>{match[1]}</strong>);
    } else if (match[3].startsWith("/")) {
      parts.push(<Link key={key} href={match[3]} className="text-[#8b3a1a] underline">{match[2]}</Link>);
    } else {
      parts.push(<a key={key} href={match[3]} target="_blank" rel="noopener noreferrer" className="text-[#8b3a1a] underline">{match[2]}</a>);
    }
    lastIndex = tokenPattern.lastIndex;
  }
  parts.push(text.slice(lastIndex));
  return parts;
}

function renderLifestyleAnswer(answer: string) {
  const steps = answer.split(/(?=\d+\. )/);
  if (steps.length > 1 && /^\d+\. /.test(steps[0])) {
    return (
      <ol className="list-decimal pl-6 space-y-1">
        {steps.map((step, index) => <li key={index}>{renderLifestyleText(step.replace(/^\d+\. /, ""))}</li>)}
      </ol>
    );
  }
  return renderLifestyleText(answer);
}

function LifestyleDiscountFaq({ post }: { post: BrandFaq }) {
  const { brand, slug, title, code, href, linkText, oneLiner, image, imageAlt } = post;
  const faqSchema = getLifestyleFaqs(post);
  return (
    <PageLayout
      showShare
      title={title}
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: `${title} | Thrive Tools`,
        description: `${oneLiner}. Direct answers about the verified ${brand} discount and how to use it.`,
        canonical: `https://thrivetools.co/blog/${slug}`,
        ogType: "article",
        datePublished: "2026-09-24",
        image,
        imageAlt,
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-8">
        <FaqJsonLd faqs={faqSchema.map(({ q, a }) => ({
          q,
          a: a.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1"),
        }))} />
        <div className="card-glass rounded-2xl overflow-hidden">
          <img loading="lazy" decoding="async" src={image} alt={imageAlt} className="w-full h-auto max-h-[480px] object-contain bg-white" />
        </div>
        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">Discount Codes</Badge>
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">FAQ</Badge>
        </div>
        <p className="text-lg leading-relaxed text-black/80">{oneLiner}. Below are the most-asked questions about the current verified {brand} discount — answered directly.</p>
        <div className="card-glass rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row gap-5 sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <Tag className="w-6 h-6 shrink-0 text-[#8b3a1a]" />
            <p className="text-lg text-black/80">
              {code ? <>Current verified code: <strong className="text-black font-bold break-all">{code}</strong></> : "No code needed — discount applies automatically via the link"}
            </p>
          </div>
          <a href={href} target="_blank" rel="noopener noreferrer" className="shrink-0 self-start sm:self-auto">
            <Button className="btn-primary rounded-full px-5">{linkText} <ExternalLink className="w-4 h-4 ml-2" /></Button>
          </a>
        </div>
        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black">{brand} Discount Code FAQ</h2>
          {faqSchema.map(({ q, a }) => (
            <Answer key={q} question={q}>{renderLifestyleAnswer(a)}</Answer>
          ))}
        </section>
        <p className="text-sm text-black/50 leading-relaxed"><strong>Affiliate disclosure:</strong> This post contains affiliate links. If you buy through them, I may earn a commission at no extra cost to you.</p>
      </article>
    </PageLayout>
  );
}

export const [
  EarthRunnersDiscountCodeFaq,
  TheGoodTeeDiscountCodeFaq,
  BambooClothesDiscountCodeFaq,
  EarthingHarmonyDiscountCodeFaq,
  PromeedDiscountCodeFaq,
  HavnByLambsDiscountCodeFaq,
  Cookware360DiscountCodeFaq,
  IsunSkincareDiscountCodeFaq,
  DavidsDiscountCodeFaq,
] = brands.map((brand) => function BrandDiscountFaq() { return <LifestyleDiscountFaq post={brand} />; });