import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import FaqJsonLd from "@/components/FaqJsonLd";
import { discountOfferItems } from "../Discounts";
const heroImage = "/images/hero-supplements.jpg";

type OfferItem = (typeof discountOfferItems)[number];

function requireOffer(name: string): OfferItem {
  const item = discountOfferItems.find((offer) => offer.name === name);
  if (!item) {
    throw new Error(`BestLongevitySupplements2026: missing discount source card "${name}".`);
  }
  return item;
}

const offers = {
  im8: requireOffer("IM8"),
  bioptimizers: requireOffer("Bioptimizers"),
  organika: requireOffer("Organika"),
  timeline: requireOffer("Timeline Mitopure"),
  equip: requireOffer("Equip Foods"),
  justThrive: requireOffer("Justthrivehealth"),
  energyBits: requireOffer("EnergyBits Chlorella & Spirulina"),
  hyperion: requireOffer("HyperionHerbs"),
  aquaOmega: requireOffer("AquaOmega"),
  goli: requireOffer("Goli"),
};

const displayNames: Record<keyof typeof offers, string> = {
  im8: "IM8",
  bioptimizers: "Bioptimizers",
  organika: "Organika",
  timeline: "Timeline Mitopure",
  equip: "Equip Foods",
  justThrive: "Just Thrive",
  energyBits: "EnergyBits Chlorella & Spirulina",
  hyperion: "Hyperion Herbs",
  aquaOmega: "AquaOmega",
  goli: "Goli",
};

const guidePaths: Partial<Record<keyof typeof offers, string>> = {
  im8: "/blog/im8-review",
  bioptimizers: "/blog/bioptimizers-review",
  organika: "/blog/creatine-dosage-for-brain",
  timeline: "/blog/urolithin-a-mitophagy-longevity-supplement-guide",
  equip: "/blog/equip-foods-review",
  justThrive: "/blog/just-thrive-review",
  energyBits: "/blog/energybits-review",
  hyperion: "/product-reviews/hyperion-herbs",
  aquaOmega: "/blog/omega-3-complete-guide-epa-dha-fish-oil-vs-algae",
};

const faqs = [
  {
    q: "What is the best longevity supplement overall?",
    a: "There is no single best choice for everyone. Compare the product category and format with what you are looking for: IM8 is an all-in-one powder, Timeline Mitopure is a Urolithin A product, and the other options cover categories such as magnesium, protein, probiotics, algae, herbs, and omega-3.",
  },
  {
    q: "IM8 vs. a multivitamin: what is the difference?",
    a: "IM8 is described in the source offer as a powder combining vitamins, probiotics, adaptogens, and CoQ10. A multivitamin is generally a vitamin-and-mineral format; check the product label to compare ingredients and serving details.",
  },
  {
    q: "Which magnesium option should I compare?",
    a: "Bioptimizers' source description lists seven forms of magnesium. Organika's description lists eight forms and clean creatine. Compare the product labels and choose based on the formula format you want.",
  },
  {
    q: "Are all the offers discount codes?",
    a: "No. Some source cards list a checkout code, while Timeline Mitopure and AquaOmega are link-only. AquaOmega's source card describes $30 off a first subscription; Timeline's source card does not state a discount amount. Check the terms at the brand's site before ordering.",
  },
  {
    q: "Do I need all of these supplements?",
    a: "No. This is a comparison of product categories, not a recommendation to use every item. Start by deciding which category, if any, fits what you are looking for, then review the product label and brand information.",
  },
];

function guideLink(key: keyof typeof offers, label: string) {
  const href = guidePaths[key];
  return href ? (
    <a href={href} className="text-[#8b3a1a] underline decoration-[#c4622d]/40 underline-offset-2 hover:text-[#c4622d]">
      {label}
    </a>
  ) : label;
}

function OfferLink({ item, children }: { item: OfferItem; children: React.ReactNode }) {
  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-[#8b3a1a] underline decoration-[#c4622d]/40 underline-offset-2 hover:text-[#c4622d]">
      {children}
    </a>
  );
}

function OfferValue({ item }: { item: OfferItem }) {
  const isLinkOnly = !item.code || /^follow\b/i.test(item.code);
  if (!isLinkOnly) return <span className="font-mono font-semibold">{item.code}</span>;
  return <span>Link-only: {item.code}</span>;
}

function ComparisonTable() {
  const rows: { key: keyof typeof offers; category: string; fit: string }[] = [
    { key: "im8", category: "All-in-one powder", fit: "A combined vitamins, probiotics, adaptogens, and CoQ10 format" },
    { key: "bioptimizers", category: "Magnesium", fit: "A magnesium formula listing seven forms" },
    { key: "organika", category: "Magnesium + creatine", fit: "A brand offering magnesium and creatine in its lineup" },
    { key: "timeline", category: "Urolithin A", fit: "A focused Urolithin A product" },
    { key: "equip", category: "Protein", fit: "Grass-fed beef protein powder" },
    { key: "justThrive", category: "Probiotic", fit: "A spore-based probiotic product" },
    { key: "energyBits", category: "Algae", fit: "Chlorella and spirulina tablets" },
    { key: "hyperion", category: "Tonic herbs", fit: "A range including reishi, cordyceps, and lion's mane" },
    { key: "aquaOmega", category: "Omega-3", fit: "Algae-sourced omega-3 options" },
    { key: "goli", category: "Gummies", fit: "A gummy supplement format" },
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-[#3d1a28]/10">
      <table className="w-full min-w-[720px] border-collapse text-left text-sm">
        <thead className="bg-[#c4622d]/10">
          <tr>
            <th className="p-4 font-semibold">Brand</th>
            <th className="p-4 font-semibold">Category</th>
            <th className="p-4 font-semibold">Compare by</th>
            <th className="p-4 font-semibold">Code / offer listed</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ key, category, fit }) => {
            const item = offers[key];
            return (
              <tr key={item.name} className="border-t border-[#3d1a28]/10 bg-white/50">
                <td className="p-4 font-semibold">{guideLink(key, displayNames[key])}</td>
                <td className="p-4">{category}</td>
                <td className="p-4">{fit}</td>
                <td className="p-4">
                  <OfferLink item={item}><OfferValue item={item} /></OfferLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function BrandSection({
  item,
  keyName,
  title,
  children,
}: {
  item: OfferItem;
  keyName: keyof typeof offers;
  title: string;
  children: React.ReactNode;
}) {
  const linkOnly = !item.code || /^follow\b/i.test(item.code);
  return (
    <section className="space-y-4">
      <h2 className="font-display text-2xl font-bold text-black">{title}: {guideLink(keyName, displayNames[keyName])}</h2>
      <p className="text-black/70 leading-relaxed">{children}</p>
      <div className="card-glass rounded-xl p-4 flex flex-wrap items-center justify-between gap-3 text-sm">
        <span>
          <strong className="text-black">{linkOnly ? "Offer:" : "Code:"}</strong>{" "}
          <OfferValue item={item} />
        </span>
        <OfferLink item={item}>{linkOnly ? `Visit ${displayNames[keyName]}` : `Shop ${displayNames[keyName]}`}</OfferLink>
      </div>
    </section>
  );
}

export default function BestLongevitySupplements2026() {
  return (
    <PageLayout
      title="Best Longevity Supplements 2026, Compared"
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: "Best Longevity Supplements 2026 (Compared): What Actually Works",
        description: "Compare the best longevity supplements by category, including IM8 and Bioptimizers, with current source-listed discount codes and link-only offers.",
        canonical: "https://thrivetools.co/blog/best-longevity-supplements-2026",
        ogType: "article",
        datePublished: "2026-09-24",
        image: heroImage,
        imageAlt: "Supplement products arranged for a longevity supplement comparison",
        noSuffix: true,
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-8">
        <FaqJsonLd faqs={faqs} />
        <div className="card-glass rounded-2xl overflow-hidden">
          <img loading="lazy" decoding="async" src={heroImage} alt="Supplement products arranged for a longevity supplement comparison" className="w-full h-auto max-h-[480px] object-cover" />
        </div>
        <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">Comparisons</Badge>
        <p className="text-sm text-black/50">September 2026</p>
        <p className="text-sm text-black/60 leading-relaxed"><strong>Affiliate disclosure:</strong> This post contains affiliate links. If you buy through them, I may earn a commission at no extra cost to you.</p>

        <p className="text-lg leading-relaxed text-black/80">
          I run ThriveTools.co, a science-backed wellness and biohacking platform built from 14 years of personal research. I compare these partner brands by product category and format—not by promising that one supplement is right for everyone. Their listed codes and offers are on my{" "}
          <a href="/discount-codes" className="text-[#8b3a1a] underline">discount codes page</a>.
        </p>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black">The short answer</h2>
          <ul className="space-y-2 text-black/75 leading-relaxed">
            <li><strong>All-in-one powder:</strong> {guideLink("im8", displayNames.im8)} — its source description lists vitamins, probiotics, adaptogens, and CoQ10.</li>
            <li><strong>Magnesium:</strong> {guideLink("bioptimizers", displayNames.bioptimizers)} — a formula whose source description lists seven forms.</li>
            <li><strong>Magnesium plus creatine:</strong> {guideLink("organika", displayNames.organika)} — both categories appear in its source card.</li>
            <li><strong>Urolithin A:</strong> {guideLink("timeline", displayNames.timeline)} — a single-ingredient category option.</li>
            <li><strong>Protein:</strong> {guideLink("equip", displayNames.equip)} — grass-fed beef protein.</li>
            <li><strong>Probiotic:</strong> {guideLink("justThrive", displayNames.justThrive)} — a spore-based format.</li>
            <li><strong>Algae:</strong> {guideLink("energyBits", displayNames.energyBits)} — chlorella and spirulina.</li>
            <li><strong>Tonic herbs:</strong> {guideLink("hyperion", displayNames.hyperion)} — a range of traditional tonic herbs and mushrooms.</li>
            <li><strong>Omega-3:</strong> {guideLink("aquaOmega", displayNames.aquaOmega)} — algae-sourced options.</li>
            <li><strong>Gummies:</strong> {displayNames.goli} — a gummy format for people comparing delivery formats.</li>
          </ul>
          <p className="text-black/70 leading-relaxed">No need to buy all ten: start with the product category you are actually considering, then compare ingredients, serving directions, and offer terms.</p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black">Comparison table</h2>
          <p className="text-black/70 leading-relaxed">The code and offer column reflects the source card. A “Follow” entry is link-only, not a checkout code. Confirm any offer terms on the store before placing an order.</p>
          <ComparisonTable />
          <p className="text-sm text-black/55">For current prices and ingredient details, use each brand's product pages; prices and product lineups can change.</p>
        </section>

        <BrandSection item={offers.im8} keyName="im8" title="All-in-one powder">
          IM8's source description lists vitamins, probiotics, adaptogens, and CoQ10 in one scoop. This format may be convenient if you are comparing combined powders with separate products; check its label to see whether the ingredients fit your needs.
        </BrandSection>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black">Magnesium, two ways</h2>
          <p className="text-black/70 leading-relaxed">
            {guideLink("bioptimizers", offers.bioptimizers.name)} lists seven forms of magnesium in its source description. {guideLink("organika", offers.organika.name)} lists eight forms of magnesium and clean creatine. These are formula differences, not evidence that one is more effective for you; compare the labels and choose the combination you want.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[offers.bioptimizers, offers.organika].map((item) => (
              <div key={item.name} className="card-glass rounded-2xl p-5">
                <h3 className="font-display font-bold text-black">{item.name}</h3>
                <p className="mt-2 text-sm text-black/70">{item === offers.bioptimizers ? "Magnesium formula with seven forms listed in its source description." : "Magnesium and creatine are both represented in the brand's source description."}</p>
                <p className="mt-3 text-sm"><strong>{/^follow\b/i.test(item.code ?? "") ? "Offer:" : "Code:"}</strong> <OfferValue item={item} /></p>
                <OfferLink item={item}>Shop {item.name}</OfferLink>
              </div>
            ))}
          </div>
        </section>

        <BrandSection item={offers.timeline} keyName="timeline" title="Urolithin A">
          Timeline's Mitopure is its Urolithin A product. This is a focused single-molecule category rather than a broad formula. The source card says “Follow This Link”; it does not provide a checkout code or state a discount amount, so check the store for current terms.
        </BrandSection>

        <BrandSection item={offers.equip} keyName="equip" title="Protein">
          Equip Foods' source description identifies grass-fed beef protein. Compare its ingredient panel, flavor options, and serving details with other protein powders you are considering.
        </BrandSection>

        <BrandSection item={offers.justThrive} keyName="justThrive" title="Probiotic">
          Just Thrive is listed as a spore-based probiotic. That describes its product format; review the label and product information for strain and serving details.
        </BrandSection>

        <BrandSection item={offers.energyBits} keyName="energyBits" title="Algae">
          EnergyBits Chlorella &amp; Spirulina is an algae product featuring those two ingredients. Compare its tablet format and ingredients with greens blends or other algae products.
        </BrandSection>

        <BrandSection item={offers.hyperion} keyName="hyperion" title="Tonic herbs">
          Hyperion Herbs offers traditional tonic herbs and mushrooms including reishi, cordyceps, and lion's mane. If you are comparing this category, check the individual product labels and preparation details.
        </BrandSection>

        <BrandSection item={offers.aquaOmega} keyName="aquaOmega" title="Omega-3">
          AquaOmega's source description lists algae-sourced omega-3 options. The same source card states that following its link gives $30 off a first subscription; this is a link-based offer, not a code. Check the brand's terms to confirm eligibility.
        </BrandSection>

        <BrandSection item={offers.goli} keyName="goli" title="Gummy format">
          Goli's source card describes vitamin-packed wellness gummies and lists a code. A gummy is a delivery format to compare against powders, capsules, or tablets; check the label for ingredients and serving information.
        </BrandSection>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black">How to choose by category</h2>
          <ul className="space-y-2 text-black/75 leading-relaxed">
            <li><strong>Prefer a combined powder?</strong> Compare the IM8 ingredient label with the separate products you might otherwise choose.</li>
            <li><strong>Considering magnesium?</strong> Compare Bioptimizers' magnesium formula with Organika's magnesium-and-creatine offering.</li>
            <li><strong>Looking for protein?</strong> Review Equip Foods' beef protein ingredients and serving information.</li>
            <li><strong>Comparing specific categories?</strong> Just Thrive is a spore-based probiotic; Timeline offers Urolithin A; EnergyBits focuses on chlorella and spirulina; Hyperion Herbs offers tonic herbs and mushrooms; AquaOmega offers algae-sourced omega-3.</li>
            <li><strong>Format is your main filter?</strong> Compare Goli's gummies with products in powders, capsules, or tablets.</li>
          </ul>
          <p className="text-black/70 leading-relaxed">I use a simple process: choose a category, compare product labels and format, then decide whether the product fits your routine. A link-only offer is not the same as a checkout code, and offer terms can change.</p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black">Current source-listed codes and offers</h2>
          <ul className="space-y-2 text-black/75">
            {Object.entries(offers).map(([key, item]) => {
              const linkOnly = !item.code || /^follow\b/i.test(item.code);
              return (
                <li key={item.name}>
                  <strong>{guideLink(key as keyof typeof offers, displayNames[key as keyof typeof offers])}:</strong>{" "}
                  <OfferLink item={item}><OfferValue item={item} /></OfferLink>
                  {linkOnly && item === offers.aquaOmega ? " ($30 off first subscription, per the source offer)" : null}
                </li>
              );
            })}
          </ul>
          <p className="text-sm text-black/60">Timeline Mitopure and AquaOmega are link-only in the source data. Only AquaOmega's source card states a discount amount. Goli's listed code is distinct from AquaOmega's link-only offer.</p>
          <p className="text-black/70 leading-relaxed">
            For codes-only browsing, see the <a href="/blog/supplement-discount-codes-faq" className="text-[#8b3a1a] underline">Supplement Discount Codes FAQ</a>.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black">FAQ</h2>
          {faqs.map(({ q, a }) => (
            <div key={q} className="card-glass rounded-2xl p-6">
              <h3 className="font-display font-bold text-black">{q}</h3>
              <p className="mt-2 text-black/70 leading-relaxed">{a}</p>
            </div>
          ))}
        </section>
      </article>
    </PageLayout>
  );
}