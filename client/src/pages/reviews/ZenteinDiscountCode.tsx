import type { ReactNode } from "react";
import PageLayout from "@/components/PageLayout";
import FaqJsonLd from "@/components/FaqJsonLd";
import { ArticleLink, ArticleSection } from "@/components/EditorialPost";
import { Badge } from "@/components/ui/badge";
import { requireEditorialOffer } from "./EditorialOffer";
import hero from "@assets/IMG_1534_1791933613410.jpeg";
import squaresLabel from "@assets/IMG_1533_1791933613410.jpeg";
import barLabel from "@assets/IMG_1532_1791933613410.jpeg";

const offer = requireEditorialOffer("Zentein");
const title = "Zentein Discount Code: Get 30% Off with EDEN30 (2026)";
const seoTitle = "Zentein Discount Code: 30% Off with EDEN30 (2026)";
const description = "Working Zentein discount code EDEN30 for 30% off protein bars, Elite Squares, collagen and electrolytes at zentein.ca. How to redeem, expiry, and FAQs.";
const faqs = [
  { q: "What is the Zentein discount code?", a: "The current Zentein discount code is EDEN30. It gives you 30% off at zentein.ca when you enter it at checkout." },
  { q: "How much does EDEN30 save?", a: "EDEN30 takes 30% off your order — more than Zentein's best automatic bundle tier, which tops out at 15% off for five or more items." },
  { q: "When does the EDEN30 code expire?", a: "EDEN30 is valid for one year, through October 13, 2027." },
  { q: "Where do I enter the code?", a: "At checkout on zentein.ca — type EDEN30 into the discount code field and apply it before paying. On mobile, expand the order summary if the field isn't visible." },
  { q: "Does EDEN30 stack with Zentein's bundle savings?", a: "Zentein doesn't say. Its bundle savings (5% off 2 items, 10% off 3–4, 15% off 5+) apply automatically, and EDEN30 is worth 30% on its own, so use the code either way — just don't rely on the two combining." },
  { q: "What does Zentein sell?", a: "Four product lines: READY, SET… PROTEIN™ protein bars (25g protein), MIND, BODY & SOUL FUEL™ Elite Squares (10g protein plus vitamins), a hydrolyzed collagen drink powder (Types I & III), and a real-fruit electrolyte drink mix." },
  { q: "Is Zentein a Canadian company?", a: "Yes. Zentein Nutrition has made its products in Ontario, Canada since 2020, and states they are made fresh weekly." },
  { q: "Are Zentein products free of artificial sweeteners?", a: "Yes — Zentein states its products are made without artificial sweeteners, colours or preservatives, and its label comparison also lists no sucralose, acesulfame potassium, maltitol, or erythritol." },
];

function ShopLink({ children = "zentein.ca" }: { children?: ReactNode }) {
  return <ArticleLink href={offer.url} sponsored>{children}</ArticleLink>;
}

function LabelImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="card-glass rounded-2xl overflow-hidden">
      <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size image: ${alt}`}>
        <img src={src} alt={alt} loading="lazy" decoding="async" className="w-full h-auto object-contain" />
      </a>
      <figcaption className="px-4 py-3 text-xs text-black/60">{caption} Select the image to view the full-size label.</figcaption>
    </figure>
  );
}

export default function ZenteinDiscountCode() {
  return (
    <PageLayout
      title={title}
      subtitle="By Eden Laraki | ThriveTools.co"
      backHref="/blog"
      backLabel="Blog"
      showShare
      seo={{ title: seoTitle, noSuffix: true, description, canonical: "/blog/zentein-discount-code", ogType: "article", datePublished: "2026-10-13", image: hero, imageAlt: "Zentein protein bars and an Elite Square in their product packaging" }}
    >
      <FaqJsonLd faqs={faqs} />
      <article className="space-y-8">
        <figure className="card-glass rounded-2xl overflow-hidden bg-white">
          <img src={hero} alt="Zentein protein bars and an Elite Square in their product packaging" loading="eager" decoding="async" className="w-full max-w-xl mx-auto h-auto object-contain" />
          <figcaption className="px-4 py-2 text-xs text-black/50">Zentein product photo supplied by the site owner.</figcaption>
        </figure>
        <div className="flex flex-wrap items-center gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">Discount Codes</Badge>
          <time dateTime="2026-10-13" className="text-sm text-black/50">October 13, 2026</time>
        </div>
        <p className="text-lg text-black/80 leading-relaxed">Looking for a working Zentein discount code? You can stop searching — <strong>{offer.code}</strong> takes 30% off at zentein.ca, and it&apos;s the largest single discount available for the Canadian clean-protein brand. Below: exactly how to redeem it, what Zentein sells, and how the code compares to the brand&apos;s own bundle savings.</p>
        <ArticleSection title="Quick answer">
          <p><strong>The Zentein discount code is {offer.code}.</strong> Enter it at checkout on <ShopLink /> to get <strong>30% off</strong> your order. The code is valid for one year, through <strong>October 13, 2027</strong>.</p>
          <p><ShopLink>Shop Zentein with code {offer.code} →</ShopLink></p>
        </ArticleSection>
        <ArticleSection title="Code details">
          <div className="overflow-x-auto card-glass rounded-2xl">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Zentein EDEN30 discount code details</caption>
              <tbody className="divide-y divide-[#c4622d]/15">
                {[
                  ["Discount code", offer.code],
                  ["Discount", "30% off"],
                  ["Where it works", <ShopLink key="store" />],
                  ["Expires", "October 13, 2027"],
                  ["Minimum order", "None stated"],
                ].map(([label, value]) => <tr key={String(label)}><th scope="row" className="px-4 py-3 font-semibold text-black">{label}</th><td className="px-4 py-3">{value}</td></tr>)}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-black/60"><em>Disclosure: ThriveTools is an affiliate partner of Zentein. If you shop through our link or use {offer.code}, we may earn a commission at no extra cost to you.</em></p>
        </ArticleSection>
        <ArticleSection title="What is Zentein?">
          <p>Zentein Nutrition is a Canadian food brand based in Ontario, making high-protein snacks and collagen powders since 2020 under the tagline &ldquo;Eat, Feel, and Perform Better.&rdquo; Its whole positioning rests on short, readable labels: Zentein states its products are made <strong>without artificial sweeteners, colours or preservatives</strong>. Its own label comparison goes further, listing no sucralose, acesulfame potassium, maltitol, erythritol, palm kernel oil, polydextrose, glycerin, or soluble corn fibre.</p>
          <p>Two practical details stand out. First, Zentein says its products are <strong>made fresh weekly</strong> in Ontario rather than sitting in a warehouse for months. Second, the products are shelf-stable, so they&apos;re easy to keep at work or in a gym bag. Zentein displays a <strong>4.95/5 rating across 1,348 customer reviews</strong> (drawn from Google, Shop, and its own website) on zentein.ca — a strong displayed score for a brand built largely on repeat customers and word of mouth.</p>
        </ArticleSection>
        <ArticleSection title="What does Zentein sell?">
          <p>Zentein has four product lines. Here&apos;s what each one is, based on Zentein&apos;s own product pages.</p>
          <h3 className="font-display text-xl font-bold text-black">READY, SET… PROTEIN™ Protein Bars</h3>
          <p>The flagship. Each bar packs <strong>25g of protein</strong> in a soft, chewy format made from just <strong>five or six recognizable ingredients</strong> — unusually short for a protein bar. Flavours include Peanut Butter Cup and Strawberry Blondie. Zentein lists the bars at <strong>$6.25 per bar</strong> on its site.</p>
          <LabelImage src={barLabel} alt="Zentein Strawberry Blondie protein bar nutrition facts and ingredients: 25g protein per 65g package; contains peanuts, milk and soy" caption="Supplied Strawberry Blondie protein bar ingredient and nutrition panel. Check the current package for ingredients, allergens and serving information." />
          <h3 className="font-display text-xl font-bold text-black">MIND, BODY &amp; SOUL FUEL™ Elite Squares</h3>
          <p>A smaller 35g square with <strong>10g of protein plus 30% of the daily value of 12 vitamins</strong> from what Zentein describes as a real superfood blend. Think of it as the lighter, micronutrient-focused option next to the full-size bars. Flavours include Honey Peanut Crispy, Almondy Raspberry, and Salted Double Cacao, listed at <strong>$5.00 each</strong>.</p>
          <LabelImage src={squaresLabel} alt="Ingredient and nutrition panels for Zentein Honey Peanut Crispy, Salted Double Cacao and Almondy Raspberry Elite Squares" caption="Supplied Elite Squares labels for three flavours. Ingredients and allergens vary by flavour; check the current package." />
          <h3 className="font-display text-xl font-bold text-black">Hydrolyzed Collagen Drink Powder</h3>
          <p>Zentein&apos;s collagen is <strong>hydrolyzed bovine collagen, Types I &amp; III</strong>, in a powder that mixes into hot or cold drinks — coffee, tea, smoothies, water. It&apos;s the line most relevant to the skin, joint, and connective-tissue routines collagen is typically used for, in a format with no flavouring decisions to make.</p>
          <h3 className="font-display text-xl font-bold text-black">Real-Fruit Electrolyte Drink Mix</h3>
          <p>An electrolyte powder built on <strong>four electrolytes with real freeze-dried lemon and lime</strong> — consistent with the brand&apos;s no-artificial-anything rule, and an easy add for training days, sauna sessions, or hot weather.</p>
        </ArticleSection>
        <ArticleSection title={`How to redeem the ${offer.code} code`}>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Go to <ShopLink /> and add your bars, squares, collagen, or electrolytes to the cart.</li>
            <li>Head to checkout.</li>
            <li>Enter <strong>{offer.code}</strong> in the discount code field and click apply.</li>
            <li>Confirm the 30% discount appears in your order total before you pay.</li>
          </ol>
          <p>If the code field is easy to miss on mobile, it&apos;s on the order-summary side of the checkout screen — expand the order summary if you don&apos;t see it.</p>
        </ArticleSection>
        <ArticleSection title="EDEN30 vs. Zentein's automatic bundle savings">
          <p>Zentein&apos;s site also runs automatic bundle savings at checkout: buy 2 items to save 5%, 3–4 to save 10%, or 5 or more to save 15%. Those apply on their own, with no code needed.</p>
          <p>How do the two compare? On a single order, <strong>EDEN30&apos;s 30% beats even the top bundle tier (15%)</strong>, so the code is the better discount whenever you&apos;re using one or the other. One honest caveat: Zentein doesn&apos;t state whether the code and the bundle savings stack, so don&apos;t count on combining them — if both happen to apply at checkout, treat it as a bonus.</p>
        </ArticleSection>
        <ArticleSection title="Which Zentein product should you try first?">
          <p>It depends on what you&apos;re replacing. If your current protein bar is the thing you want to upgrade, go straight to the READY, SET… PROTEIN™ bars — 25g of protein and a five-or-six-ingredient label is the brand&apos;s strongest argument, and Peanut Butter Cup is the flagship flavour. If you want something smaller for a desk drawer or a pre-workout bite, the Elite Squares add 30% of the daily value of 12 vitamins to a 10g-protein, 35g square.</p>
          <p>Already set for snacks? The collagen powder is the quiet staple of the range — hydrolyzed Types I &amp; III that disappear into a morning coffee — and the electrolyte mix covers training and sauna days with real freeze-dried lemon and lime instead of artificial flavouring. Whichever line you pick, the same advice applies: use {offer.code}, because 30% off beats every automatic bundle tier Zentein offers.</p>
        </ArticleSection>
        <ArticleSection title="Verdict">
          <p>Zentein earns its place on our <ArticleLink href="/discount-codes">discount codes page</ArticleLink> for one reason: the labels. A 25g-protein bar built from five or six ingredients you can name, with no artificial sweeteners, colours, or preservatives, is genuinely hard to find — and it&apos;s made fresh weekly in Ontario. With <strong>{offer.code}</strong>, that clean label costs 30% less through October 2027. If you&apos;ve been meaning to try a protein bar that reads like food, this is the low-risk way in.</p>
          <p>For more partner offers, browse our <ArticleLink href="/blog/best-supplement-discount-codes">best supplement discount codes</ArticleLink>.</p>
        </ArticleSection>
        <ArticleSection title="FAQ">
          {faqs.map(({ q, a }) => (
            <section key={q} className="card-glass rounded-2xl p-6">
              <h3 className="font-display font-bold text-black">{q}</h3>
              <p className="mt-2">{q === "Where do I enter the code?" ? <>At checkout on <ShopLink /> — type {offer.code} into the discount code field and apply it before paying. On mobile, expand the order summary if the field isn&apos;t visible.</> : a}</p>
            </section>
          ))}
        </ArticleSection>
      </article>
    </PageLayout>
  );
}
