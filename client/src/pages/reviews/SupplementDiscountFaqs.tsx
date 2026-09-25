import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Tag } from "lucide-react";
import { Link } from "wouter";
import im8Image from "@assets/im8-faq-hero.jpg";
import equipImage from "@assets/equip-foods-faq-hero.png";
import hyperionImage from "@assets/hyperion-herbs-faq-hero.jpg";
import justThriveImage from "@assets/just-thrive-faq-hero.png";
import organikaImage from "@assets/organika-faq-hero.png";
import aquaOmegaImage from "@assets/aquaomega-discount-code-hero_1790058214412.jpg";
import bioptimizersImage from "@assets/bioptimizers-faq-hero.webp";
import energybitsImage from "@assets/energybits-faq-hero.jpg";
import timelineImage from "@assets/timeline-mitopure-faq-hero.png";
import rawNoriImage from "@assets/organic-nori-seaweed-sushi-discount-code-hero.jpg";
import intentionallyBareImage from "@assets/intentionally-bare-discount-code-hero.jpg";
import koracaoImage from "@assets/koracao-discount-code-hero.jpg";
import styrianGoldImage from "@assets/styriangold-discount-code-hero.jpg";
import blessedSeedImage from "@assets/the-blessed-seed-discount-code-hero.jpg";
import pranaImage from "@assets/prana-foods-discount-code-hero.jpg";

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
    brand: "IM8", slug: "im8-discount-code-faq", title: "IM8 Discount Code FAQ (2026)",
    code: "THRIVE10", href: "https://www.im8health.com/THRIVE10", linkText: "Shop IM8 with code THRIVE10",
    oneLiner: "All-in-one daily supplement brand", image: im8Image, imageAlt: "IM8 Daily Ultimate Essentials supplement pouch",
  },
  {
    brand: "Equip Foods", slug: "equip-foods-discount-code-faq", title: "Equip Foods Discount Code FAQ (2026)",
    code: "THRIVETOOLS", href: "https://www.equipfoods.com/THRIVETOOLS", linkText: "Shop Equip Foods with code THRIVETOOLS",
    oneLiner: "Clean protein and whole-food supplement brand", image: equipImage, imageAlt: "Equip Foods Prime Protein",
  },
  {
    brand: "Hyperion Herbs", slug: "hyperion-herbs-discount-code-faq", title: "Hyperion Herbs Discount Code FAQ (2026)",
    code: "EDEN10", href: "http://www.hyperionherbs.com/discount/eden10", linkText: "Shop Hyperion Herbs with code EDEN10",
    oneLiner: "Tonic herbs and herbal extract brand", image: hyperionImage, imageAlt: "Hyperion Herbs reishi extract",
  },
  {
    brand: "Just Thrive", slug: "just-thrive-discount-code-faq", title: "Just Thrive Discount Code FAQ (2026)",
    code: "THRIVETOOLS", href: "https://justthrivehealth.com/THRIVETOOLS", linkText: "Shop Just Thrive with code THRIVETOOLS",
    oneLiner: "Spore-based probiotic and gut-health brand", image: justThriveImage, imageAlt: "Just Thrive probiotic bottle",
  },
  {
    brand: "Organika", slug: "organika-discount-code-faq", title: "Organika Discount Code FAQ (2026)",
    code: "EDEN_25", href: "https://organika.com/?rfsn=8403940.a276a1f&utm_source=refersion&utm_medium=affiliate&utm_campaign=8403940.a276a1f",
    linkText: "Shop Organika with code EDEN_25", oneLiner: "Canadian-made vitamins and wellness brand",
    image: organikaImage, imageAlt: "Organika collagen supplement",
  },
  {
    brand: "AquaOmega", slug: "aquaomega-discount-code-faq", title: "AquaOmega Discount FAQ (2026)",
    href: "https://aquaomega.refr.cc/default/u/thrivetoolsco?s=rp&t=cp",
    linkText: "Get $30 off your first AquaOmega subscription", oneLiner: "Omega-3 fish oil subscription brand",
    offerDesc: "$30 off your first subscription", image: aquaOmegaImage, imageAlt: "AquaOmega fish oil supplements",
  },
  {
    brand: "Bioptimizers", slug: "bioptimizers-discount-code-faq", title: "Bioptimizers Discount Code FAQ (2026)",
    code: "THRIVETOOLS", href: "https://bioptimizers.com/shop/products/magnesium-breakthrough",
    linkText: "Shop Bioptimizers with code THRIVETOOLS", oneLiner: "Magnesium and digestive-health formula brand",
    image: bioptimizersImage, imageAlt: "Bioptimizers Magnesium Breakthrough bottle",
  },
  {
    brand: "EnergyBits", slug: "energybits-discount-code-faq", title: "EnergyBits Discount Code FAQ (2026)",
    code: "THRIVE25", href: "https://energybits.com/discount/THRIVE25?rfsn=9026872.b2b124&utm_source=refersion&utm_medium=affiliate&utm_campaign=9026872.b2b124",
    linkText: "Shop EnergyBits with code THRIVE25", oneLiner: "Algae-based nutrition brand (spirulina and chlorella)",
    image: energybitsImage, imageAlt: "EnergyBits spirulina canister",
  },
  {
    brand: "Timeline Mitopure", slug: "timeline-mitopure-discount-code-faq", title: "Timeline Mitopure Discount FAQ (2026)",
    href: "https://shop.timeline.com/EDENKAWTHARLARAKI", linkText: "Shop Timeline Mitopure",
    oneLiner: "Urolithin A (Mitopure) longevity supplement brand", offerDesc: "The current discount",
    image: timelineImage, imageAlt: "Timeline Mitopure softgels",
  },
  {
    brand: "Raw Nori (Organic Nori)", slug: "organic-nori-discount-code-faq", title: "Organic Nori Discount FAQ (2026)",
    href: "https://rawnori.com?p=jeFAQZWBn", linkText: "Shop Raw Nori",
    oneLiner: "Raw organic nori seaweed brand", offerDesc: "The current discount",
    image: rawNoriImage, imageAlt: "Raw Nori organic seaweed sheets",
  },
  {
    brand: "Intentionally Bare", slug: "intentionally-bare-discount-code-faq", title: "Intentionally Bare Discount FAQ (2026)",
    href: "https://bit.ly/4bsgdYC", linkText: "Shop Intentionally Bare",
    oneLiner: "Supplement and wellness brand", offerDesc: "The current discount",
    image: intentionallyBareImage, imageAlt: "Intentionally Bare wellness products",
  },
  {
    brand: "Koracao", slug: "koracao-discount-code-faq", title: "Koracao Discount Code FAQ (2026)",
    code: "EDENKAWTHARLARAKI123", href: "https://koracao.com/THRIVE33", linkText: "Shop Koracao with the code",
    oneLiner: "Ceremonial-grade cacao brand", image: koracaoImage, imageAlt: "Koracao ceremonial cacao",
  },
  {
    brand: "Styrian Gold", slug: "styrian-gold-discount-code-faq", title: "Styrian Gold Discount Code FAQ (2026)",
    code: "THRIVETOOLS-10", href: "http://www.styriangold.ca/shop/?",
    linkText: "Shop Styrian Gold with code THRIVETOOLS-10", oneLiner: "Canadian Styrian pumpkin seed oil brand",
    image: styrianGoldImage, imageAlt: "Styrian Gold pumpkin seed oil",
  },
  {
    brand: "The Blessed Seed", slug: "the-blessed-seed-discount-code-faq", title: "The Blessed Seed Discount FAQ (2026)",
    href: "https://theblessedseed.de/ref/370/", linkText: "Shop The Blessed Seed",
    oneLiner: "Black seed oil brand", offerDesc: "The current discount",
    image: blessedSeedImage, imageAlt: "The Blessed Seed black seed oil",
  },
  {
    brand: "Prana Foods", slug: "prana-foods-discount-code-faq", title: "Prana Foods Discount Code FAQ (2026)",
    code: "THRIVETOOLSCO", href: "https://pranafoods.ca/thrivetoolsco",
    linkText: "Shop Prana Foods with code THRIVETOOLSCO", oneLiner: "Canadian organic pantry foods brand",
    image: pranaImage, imageAlt: "Prana Foods organic pantry products",
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

function SupplementDiscountFaq({ brand: post }: { brand: BrandFaq }) {
  const { brand, slug, title, code, href, linkText, oneLiner, offerDesc, image, imageAlt } = post;
  const link = <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#8b3a1a] underline">{linkText}</a>;
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
          {code ? (
            <>
              <Answer question={`Does ${brand} offer discount codes?`}>
                Yes. The current verified {brand} code is <strong>{code}</strong>. Use it at checkout on the official store: {link}.
              </Answer>
              <Answer question={`What is the best ${brand} discount code right now?`}>
                <strong>{code}</strong> is the verified code currently listed for {brand}.
              </Answer>
              <Answer question={`How do I apply a ${brand} promo code?`}>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Click the verified {brand} link above.</li>
                  <li>Add products to your cart.</li>
                  <li>Enter <strong>{code}</strong> in the discount-code box at checkout.</li>
                  <li>Confirm the discount applied before paying.</li>
                </ol>
              </Answer>
              <Answer question={`Why isn't my ${brand} code working?`}>
                Check the spelling and capitalization of <strong>{code}</strong>, confirm your items are eligible, and make sure you're on {brand}'s official store — not a marketplace listing.
              </Answer>
              <Answer question={`Can I stack ${brand} discount codes?`}>
                Most stores accept only one discount code per order. If you have more than one, use the one that saves you the most.
              </Answer>
            </>
          ) : (
            <>
              <Answer question={`Does ${brand} have a discount code?`}>
                No code is needed. {offerDesc} applies automatically when you shop through the verified link: {link}.
              </Answer>
              <Answer question={`How do I get the ${brand} discount?`}>
                Click the verified link above and shop as normal — the discount is attached to the link and applies at checkout. There's nothing to type.
              </Answer>
              <Answer question={`Why didn't the ${brand} discount apply?`}>
                Make sure you clicked through from the ThriveTools link (the discount is tied to it) and that the items in your cart are eligible.
              </Answer>
              <Answer question={`Can I combine the ${brand} link discount with a promo code?`}>
                Link-based discounts apply automatically, so there's no code box to fill. The link offer is the verified deal.
              </Answer>
            </>
          )}
          <Answer question={`Does ${brand} offer free shipping?`}>
            Shipping terms change over time — check the shipping information on {brand}'s official site at checkout.
          </Answer>
          <Answer question={`Does ${brand} have a money-back guarantee or returns policy?`}>
            Check {brand}'s official site for their current guarantee and returns terms before you buy.
          </Answer>
          {!code && (
            <Answer question="Is it safe to buy through the ThriveTools link?">
              Yes. The link takes you to {brand}'s official store. ThriveTools may earn a commission on your purchase at no extra cost to you.
            </Answer>
          )}
          <Answer question="Where can I find all verified ThriveTools codes?">
            On the <Link href="/discount-codes" className="text-[#8b3a1a] underline">ThriveTools discount-codes page</Link> — the source of truth, updated whenever codes change.
          </Answer>
        </section>
        <p className="text-sm text-black/50 leading-relaxed"><strong>Affiliate disclosure:</strong> This post contains affiliate links. If you buy through them, I may earn a commission at no extra cost to you.</p>
      </article>
    </PageLayout>
  );
}

export const [
  IM8DiscountCodeFaq,
  EquipFoodsDiscountCodeFaq,
  HyperionHerbsDiscountCodeFaq,
  JustThriveDiscountCodeFaq,
  OrganikaDiscountCodeFaq,
  AquaOmegaDiscountCodeFaq,
  BioptimizersDiscountCodeFaq,
  EnergyBitsDiscountCodeFaq,
  TimelineMitopureDiscountCodeFaq,
  OrganicNoriDiscountCodeFaq,
  IntentionallyBareDiscountCodeFaq,
  KoracaoDiscountCodeFaq,
  StyrianGoldDiscountCodeFaq,
  TheBlessedSeedDiscountCodeFaq,
  PranaFoodsDiscountCodeFaq,
] = brands.map((brand) => function BrandDiscountFaq() { return <SupplementDiscountFaq brand={brand} />; });