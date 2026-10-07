import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Tag, User } from "lucide-react";
import { Link } from "wouter";
import supplementHero from "@assets/best-supplement-discount-codes-hero.jpg";
import clothingHero from "@assets/earthrunners-discount-code-hero_1790058248055.jpg";

type Deal = {
  brand: string;
  code?: string;
  label?: string;
  description: string;
  href: string;
  cta: string;
};

type Roundup = {
  title: string;
  slug: string;
  image: string;
  imageAlt: string;
  introduction: string;
  deals: Deal[];
  howTitle: string;
  steps: string[];
  faqTitle: string;
  faqs: { q: string; a: string }[];
};

const supplements: Roundup = {
  title: "Best Supplement Discount Codes 2026 (15 Verified)",
  slug: "best-supplement-discount-codes",
  image: supplementHero,
  imageAlt: "IM8 daily supplement from the IM8 website",
  introduction: 'These are the 15 verified supplement discount codes currently live on ThriveTools — every code below is checked against our discount-codes page. If a brand shows "link-only", there is no code to type: shop through the link and the discount applies automatically.',
  deals: [
    { brand: "IM8", code: "THRIVE10", description: "All-in-one daily supplement. Use code THRIVE10 at checkout on im8health.com.", href: "https://www.im8health.com/THRIVE10", cta: "Shop IM8 with code THRIVE10" },
    { brand: "Equip Foods", code: "THRIVETOOLS", description: "Clean protein and whole-food supplements. Use code THRIVETOOLS at checkout on equipfoods.com.", href: "https://www.equipfoods.com/THRIVETOOLS", cta: "Shop Equip Foods with code THRIVETOOLS" },
    { brand: "Hyperion Herbs", code: "EDEN10", description: "Tonic herbs and herbal extracts. Use code EDEN10 in the discount-code box at hyperionherbs.com.", href: "http://www.hyperionherbs.com/discount/eden10", cta: "Shop Hyperion Herbs with code EDEN10" },
    { brand: "Just Thrive", code: "THRIVETOOLS", description: "Spore-based probiotics and gut-health formulas. Use code THRIVETOOLS at justthrivehealth.com.", href: "https://justthrivehealth.com/THRIVETOOLS", cta: "Shop Just Thrive with code THRIVETOOLS" },
    { brand: "Organika", code: "EDEN_25", description: "Canadian-made vitamins and wellness products. Use code EDEN_25 at organika.com.", href: "https://organika.com/?rfsn=8403940.a276a1f&utm_source=refersion&utm_medium=affiliate&utm_campaign=8403940.a276a1f", cta: "Shop Organika with code EDEN_25" },
    { brand: "AquaOmega", label: "link-only ($30 off first subscription)", description: "Omega-3 fish oil subscriptions. No code needed — follow the link for $30 off your first subscription.", href: "https://aquaomega.refr.cc/default/u/thrivetoolsco?s=rp&t=cp", cta: "Get $30 off AquaOmega" },
    { brand: "Bioptimizers", code: "THRIVETOOLS", description: "Magnesium and digestive-health formulas. Use code THRIVETOOLS at bioptimizers.com.", href: "https://bioptimizers.com/shop/products/magnesium-breakthrough", cta: "Shop Bioptimizers with code THRIVETOOLS" },
    { brand: "EnergyBits", code: "THRIVE25", description: "Algae-based nutrition (spirulina and chlorella). Use code THRIVE25 at energybits.com.", href: "https://energybits.com/discount/THRIVE25?rfsn=9026872.b2b124&utm_source=refersion&utm_medium=affiliate&utm_campaign=9026872.b2b124", cta: "Shop EnergyBits with code THRIVE25" },
    { brand: "Timeline Mitopure", description: "Urolithin A (Mitopure) longevity supplements. No code needed — shop via the discount link and savings apply automatically.", href: "https://shop.timeline.com/EDENKAWTHARLARAKI", cta: "Shop Timeline Mitopure" },
    { brand: "Raw Nori (Organic Nori Seaweed Sushi)", description: "Raw organic nori seaweed. No code needed — use the link for the current offer.", href: "https://rawnori.com?p=jeFAQZWBn", cta: "Shop Raw Nori" },
    { brand: "Intentionally Bare", description: "Shop through the verified link for the current ThriveTools offer — no code to enter.", href: "https://bit.ly/4bsgdYC", cta: "Shop Intentionally Bare" },
    { brand: "Koracao Ceremonial Cacao", code: "EDENKAWTHARLARAKI123", description: "Ceremonial-grade cacao. Use code EDENKAWTHARLARAKI123 at koracao.com.", href: "https://koracao.com/THRIVE33", cta: "Shop Koracao with the code" },
    { brand: "Styrian Gold", code: "THRIVETOOLS-10", description: "Styrian pumpkin seed oil (Canadian). Use code THRIVETOOLS-10 at styriangold.ca.", href: "http://www.styriangold.ca/shop/?", cta: "Shop Styrian Gold with code THRIVETOOLS-10" },
    { brand: "The Blessed Seed", description: "Black seed oil. No code needed — shop through the referral link.", href: "https://theblessedseed.de/ref/370/", cta: "Shop The Blessed Seed" },
    { brand: "Prana Foods", code: "THRIVETOOLSCO", description: "Organic pantry foods (Canadian). Use code THRIVETOOLSCO at pranafoods.ca.", href: "https://pranafoods.ca/thrivetoolsco", cta: "Shop Prana Foods with code THRIVETOOLSCO" },
  ],
  howTitle: "How to use these supplement discount codes",
  steps: [
    "Click the brand link above to open the store.",
    "Add products to your cart.",
    "At checkout, find the discount-code box and type the code exactly as shown (codes are case-sensitive on some stores).",
    "For link-only offers, skip the code — the discount is already attached to the link.",
  ],
  faqTitle: "Supplement discount codes FAQ",
  faqs: [
    { q: "Do these codes expire?", a: "Codes change over time. This list is kept in sync with the ThriveTools discount-codes page, which is the source of truth." },
    { q: "Why didn't my code work?", a: "Check the spelling and case, make sure the items are eligible, and confirm you are on the brand's official store (not a marketplace listing)." },
    { q: 'What does "link-only" mean?', a: "The discount is embedded in the link itself — click through and it applies automatically at checkout. There is no code to type." },
    { q: "Which supplement discount is the best right now?", a: "It depends on what you are buying — scan the list above for the brand you want. All 15 are verified live." },
  ],
};

const clothing: Roundup = {
  title: "Best Ethical Clothing Discount Codes 2026 (6 Verified)",
  slug: "best-ethical-clothing-discount-codes",
  image: clothingHero,
  imageAlt: "EarthRunners minimalist sandals lifestyle image",
  introduction: 'These are the 6 verified ethical and sustainable clothing discount codes currently live on ThriveTools — every code below is checked against our discount-codes page. If a brand shows "link-only", there is no code to type: shop through the link and the discount applies automatically.',
  deals: [
    { brand: "EarthRunners", code: "10THRIVETOOLS", description: "Grounding minimalist sandals for running, hiking, and travel. Use code 10THRIVETOOLS at earthrunners.com.", href: "https://earthrunners.com/?rfsn=7676227.de5b78", cta: "Shop EarthRunners with code 10THRIVETOOLS" },
    { brand: "The Good Tee", code: "thrive10", description: "Fair Trade Certified, B Corp organic cotton basics made in India (Canadian company). Use code thrive10 at thegoodtee.com.", href: "https://thegoodtee.com/?ref=lzrzvhex", cta: "Shop The Good Tee with code thrive10" },
    { brand: "Bamboo Clothes", code: "EDENKAWTHARLARAKI10", description: "Bamboo-viscose underwear and everyday apparel. Use code EDENKAWTHARLARAKI10 at bambooclothes.com.", href: "https://www.bambooclothes.com/discount/eden-kawtharlaraki10", cta: "Shop Bamboo Clothes with the code" },
    { brand: "Earthing Harmony", code: "THRIVENOW", description: "Grounding mats and conductive bed sheets for indoor earthing. Use code THRIVENOW at earthingharmony.com.", href: "https://earthingharmony.com/?ref=hxaqgkso", cta: "Shop Earthing Harmony with code THRIVENOW" },
    { brand: "Promeed", description: "100% mulberry silk bedding (pillowcases, sheets, accessories). No code needed — shop through the link and the discount applies automatically.", href: "https://www.awin1.com/cread.php?awinmid=100833&awinaffid=2421431", cta: "Shop Promeed" },
    { brand: "Havn by Lambs", description: "EMF-blocking apparel woven with silver fibers. No code needed — shop through the link and the discount applies automatically.", href: "https://snwbl.io/lambs/EDEN50761", cta: "Shop Havn by Lambs" },
  ],
  howTitle: "How to use these ethical clothing discount codes",
  steps: [
    "Click the brand link above to open the store.",
    "Add items to your cart.",
    "At checkout, enter the code exactly as shown in the discount-code box.",
    "For link-only offers, the discount is already attached to the link — just check out.",
  ],
  faqTitle: "Ethical clothing discount codes FAQ",
  faqs: [
    { q: 'What makes these brands "ethical"?', a: "They are selected for fair-trade certification, sustainable materials (organic cotton, bamboo viscose, mulberry silk), or transparent supply chains." },
    { q: "Do these codes work on sale items?", a: "It varies by brand. Try the code at checkout — if an exclusion applies, the store will say so before you pay." },
    { q: 'What does "link-only" mean?', a: "The discount is embedded in the link itself — click through and it applies automatically at checkout. There is no code to type." },
    { q: "Where can I find all your verified codes?", a: "On the ThriveTools discount-codes page — updated whenever codes change." },
  ],
};

function DiscountRoundup({ post }: { post: Roundup }) {
  return (
    <PageLayout
      showShare
      title={post.title}
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: `${post.title} | Thrive Tools`,
        description: post.introduction,
        canonical: `https://thrivetools.co/blog/${post.slug}`,
        ogType: "article",
        datePublished: "2026-09-24",
        image: post.image,
        imageAlt: post.imageAlt,
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-10">
        <div className="card-glass rounded-2xl overflow-hidden">
          <img loading="lazy" decoding="async" src={post.image} alt={post.imageAlt} className="w-full h-auto object-cover" />
        </div>
        <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">Discount Codes</Badge>
        <div className="card-glass rounded-2xl p-6 md:p-8 text-lg leading-relaxed text-black/80">
          {post.introduction.split("discount-codes page")[0]}
          <Link href="/discount-codes" className="text-[#8b3a1a] underline">discount-codes page</Link>
          {post.introduction.split("discount-codes page")[1]}
        </div>
        {post.deals.map((deal, i) => (
          <section key={deal.brand} className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-black">{i + 1}. {deal.brand} — {deal.code ? `code: ${deal.code}` : deal.label ?? "link-only"}</h2>
            <p className="text-black/70 leading-relaxed">{deal.description}</p>
            <div className="card-glass rounded-2xl p-5 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
              <div className="flex items-center gap-3 min-w-0">
                <Tag className="w-5 h-5 shrink-0 text-[#8b3a1a]" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-black/50">{deal.code ? "Discount code" : "Link-only — discount applies automatically"}</p>
                  <p className="font-display font-bold text-xl text-black break-all">{deal.code ?? (deal.label === "link-only ($30 off first subscription)" ? "$30 off first subscription — no code" : "No code needed")}</p>
                </div>
              </div>
              <a href={deal.href} target="_blank" rel="noopener noreferrer" className="shrink-0 self-start sm:self-auto">
                <Button className="btn-primary rounded-full px-5">{deal.cta} <ExternalLink className="w-4 h-4 ml-2" /></Button>
              </a>
            </div>
          </section>
        ))}
        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black">{post.howTitle}</h2>
          <ol className="space-y-3">
            {post.steps.map((step, i) => (
              <li key={step} className="card-glass rounded-2xl p-5 flex gap-4 text-black/70 leading-relaxed">
                <span className="font-display font-bold text-[#8b3a1a]">{i + 1}.</span>{step}
              </li>
            ))}
          </ol>
        </section>
        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black">{post.faqTitle}</h2>
          {post.faqs.map(({ q, a }) => (
            <div key={q} className="card-glass rounded-2xl p-6">
              <p className="font-display font-bold text-black">{q}</p>
              <p className="mt-2 text-black/70 leading-relaxed">{a}</p>
            </div>
          ))}
        </section>
        <div className="card-glass rounded-2xl p-6 flex gap-4">
          <User className="w-7 h-7 text-[#8b3a1a] shrink-0" />
          <div><p className="font-display font-bold text-black">Eden Laraki</p><p className="text-black/60 mt-1 text-sm">Eden runs ThriveTools.co, sharing wellness product research and discount codes.</p></div>
        </div>
        <p className="text-sm text-black/50 leading-relaxed"><strong>Affiliate disclosure:</strong> This post contains affiliate links. If you buy through them, I may earn a commission at no extra cost to you.</p>
      </article>
    </PageLayout>
  );
}

export function BestSupplementDiscountCodes() {
  return <DiscountRoundup post={supplements} />;
}

export function BestEthicalClothingDiscountCodes() {
  return <DiscountRoundup post={clothing} />;
}