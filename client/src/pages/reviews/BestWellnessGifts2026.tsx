import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import FaqJsonLd from "@/components/FaqJsonLd";
import { discountOfferItems } from "../Discounts";

const heroImage = "/images/hero-wellness-gifts.jpg";

type OfferItem = (typeof discountOfferItems)[number];

function requireOffer(name: string): OfferItem {
  const item = discountOfferItems.find((offer) => offer.name === name);
  if (!item) {
    throw new Error(`BestWellnessGifts2026: missing discount source card "${name}".`);
  }
  return item;
}

const offers = {
  goli: requireOffer("Goli"),
  davids: requireOffer("Davids-usa"),
  energyBits: requireOffer("EnergyBits Chlorella & Spirulina"),
  koracao: requireOffer("Koracao Ceremonial Cacao"),
  lumebox: requireOffer("Lumebox"),
  hyperion: requireOffer("HyperionHerbs"),
  muse: requireOffer("Muse Headband"),
  earthRunners: requireOffer("Earthrunners"),
  blueCube: requireOffer("BlueCubeBaths"),
  joovv: requireOffer("Joovv"),
  timeline: requireOffer("Timeline Mitopure"),
};

const displayNames: Record<keyof typeof offers, string> = {
  goli: "Goli",
  davids: "Davids",
  energyBits: "EnergyBits Chlorella & Spirulina",
  koracao: "Koracao Ceremonial Cacao",
  lumebox: "Lumebox",
  hyperion: "Hyperion Herbs",
  muse: "Muse Headband",
  earthRunners: "EarthRunners",
  blueCube: "BlueCubeBaths",
  joovv: "Joovv",
  timeline: "Timeline Mitopure",
};

const guidePaths: Record<keyof typeof offers, string> = {
  goli: "/goli-discount-code",
  davids: "/blog/davids-discount-code",
  energyBits: "/blog/energybits-spirulina-chlorella-review",
  koracao: "/blog/ceremonial-cacao-benefits-science-review",
  lumebox: "/lumebox-discount-code",
  hyperion: "/product-reviews/hyperion-herbs",
  muse: "/blog/muse-headband-review-eeg-neurofeedback",
  earthRunners: "/blog/earthrunners-review",
  blueCube: "/blog/bluecubebaths-discount-code",
  joovv: "/product-reviews/joovv-review",
  timeline: "/blog/urolithin-a-mitophagy-longevity-supplement-guide",
};

const faqs = [
  {
    q: "What are the best wellness gifts for 2026?",
    a: "There is no one best gift for everyone. This guide offers eleven ideas across supplements, oral care, cacao, wearable feedback, footwear, and at-home wellness devices. Match the category and format to the person rather than treating this as a ranking.",
  },
  {
    q: "What are some good stocking-stuffer wellness gifts?",
    a: "The stocking-stuffer tier includes Goli gummies, Davids oral care, EnergyBits Chlorella & Spirulina, and Koracao Ceremonial Cacao. Check each product page for its current ingredients, format, and offer details.",
  },
  {
    q: "Does every gift include a discount code?",
    a: "The source offer cards list codes for most gifts. Timeline Mitopure is link-only in the source data, so it has no checkout code listed. Lumebox has a listed code, but its link goes to the official store rather than an affiliate link.",
  },
  {
    q: "Does the Timeline Mitopure link guarantee a discount?",
    a: "No. Timeline's source card provides a tracked link but no checkout code or stated discount amount. Visit the store and check its current terms; a discount is not guaranteed.",
  },
  {
    q: "How should I choose a wellness gift?",
    a: "Start with the recipient's interests and the kind of product they would actually use. Consider whether they prefer a consumable, a daily-use item, a wearable, or a larger at-home device, and review product information and offer terms before ordering.",
  },
];

function guideLink(key: keyof typeof offers, label: string) {
  return (
    <a href={guidePaths[key]} className="text-[#8b3a1a] underline decoration-[#c4622d]/40 underline-offset-2 hover:text-[#c4622d]">
      {label}
    </a>
  );
}

function OfferLink({ item, children }: { item: OfferItem; children: React.ReactNode }) {
  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-[#8b3a1a] underline decoration-[#c4622d]/40 underline-offset-2 hover:text-[#c4622d]">
      {children}
    </a>
  );
}

function offerCode(item: OfferItem) {
  if (item.name === "BlueCubeBaths") {
    const codeToken = item.code?.match(/^[a-z0-9_-]+/i)?.[0];
    if (!codeToken) {
      throw new Error("BestWellnessGifts2026: BlueCubeBaths source card has no code token.");
    }
    return codeToken;
  }
  return item.code;
}

function OfferCard({
  item,
  guideKey,
  fit,
}: {
  item: OfferItem;
  guideKey: keyof typeof offers;
  fit: string;
}) {
  const isLinkOnly = !item.code || /^follow\b/i.test(item.code);
  const code = offerCode(item);

  return (
    <div className="card-glass rounded-2xl p-5 flex flex-col gap-4">
      <div>
        <h3 className="font-display text-xl font-bold text-black">{guideLink(guideKey, displayNames[guideKey])}</h3>
        <p className="mt-2 text-sm leading-relaxed text-black/70">{fit}</p>
      </div>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-[#3d1a28]/10 pt-4 text-sm">
        <span>
          <strong className="text-black">{isLinkOnly ? "Offer:" : "Code:"}</strong>{" "}
          {isLinkOnly ? "Tracked link; no code listed" : <span className="font-mono font-semibold">{code}</span>}
        </span>
        <OfferLink item={item}>{isLinkOnly ? `Visit ${displayNames[guideKey]}` : `Shop ${displayNames[guideKey]}`}</OfferLink>
      </div>
    </div>
  );
}

function GiftTier({
  title,
  intro,
  gifts,
}: {
  title: string;
  intro: string;
  gifts: { key: keyof typeof offers; fit: string }[];
}) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="font-display text-2xl font-bold text-black">{title}</h2>
        <p className="mt-2 text-black/70 leading-relaxed">{intro}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {gifts.map(({ key, fit }) => (
          <OfferCard key={key} item={offers[key]} guideKey={key} fit={fit} />
        ))}
      </div>
    </section>
  );
}

export default function BestWellnessGifts2026() {
  return (
    <PageLayout
      title="Best Wellness Gifts 2026: 11 Gifts for the Health-Obsessed"
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: "Best Wellness Gifts 2026: 11 Biohacking Gift Picks",
        description: "Shop eleven of the best wellness gifts and biohacking gifts for 2026, with source-listed discount codes and tracked offers.",
        canonical: "https://thrivetools.co/blog/best-wellness-gifts-2026",
        ogType: "article",
        datePublished: "2026-09-01",
        image: heroImage,
        imageAlt: "A thoughtful selection of wellness gifts for different routines and interests",
        noSuffix: true,
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-8">
        <FaqJsonLd faqs={faqs} />
        <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">Gift Guides</Badge>
        <p className="text-sm text-black/50">September 2026</p>

        <div className="card-glass rounded-2xl overflow-hidden">
          <img
            loading="lazy"
            decoding="async"
            src={heroImage}
            alt="A thoughtful selection of wellness gifts for different routines and interests"
            className="w-full h-auto max-h-[480px] object-cover"
          />
        </div>

        <p className="text-sm text-black/60 leading-relaxed">
          <strong>Affiliate disclosure:</strong> This post contains affiliate links. If you buy through them, I may earn a commission at no extra cost to you.
        </p>

        <p className="text-lg leading-relaxed text-black/80">
          I run ThriveTools.co, a science-backed wellness and biohacking platform built from 14 years of personal research. Every holiday season, people ask what to buy for the health-obsessed person in their life. Here are eleven ideas from brands with source-listed offers, arranged by the kind of gift they are. The Lumebox link goes to its official store, not an affiliate link; Timeline Mitopure is a tracked link with no stated discount. My full list of current offers is on the{" "}
          <a href="/discount-codes" className="text-[#8b3a1a] underline">discount codes page</a>.
        </p>

        <GiftTier
          title="Stocking stuffers"
          intro="Small, practical picks for someone who enjoys useful everyday rituals."
          gifts={[
            { key: "goli", fit: "Gummy supplements make a familiar, easy-to-carry format. A simple pick for someone who prefers gummies to tablets." },
            { key: "davids", fit: "A natural oral-care upgrade for the person who appreciates thoughtful daily essentials." },
            { key: "energyBits", fit: "Chlorella and spirulina tablets for the friend who likes trying algae-based foods and supplements." },
            { key: "koracao", fit: "Ceremonial cacao for someone who enjoys making a warm drink part of a quiet morning ritual." },
          ]}
        />

        <GiftTier
          title="Mid-range gifts"
          intro="Considered gifts for a curious person who has a clear interest or routine."
          gifts={[
            { key: "lumebox", fit: "A portable red-light device for the person curious about adding a light device to their routine. The listed code is available at the official store; this is not an affiliate link." },
            { key: "hyperion", fit: "A range of tonic herbs, including reishi, cordyceps, and lion's mane, for the tea-and-tincture enthusiast." },
            { key: "muse", fit: "A brain-sensing headband offering real-time neurofeedback, suited to someone interested in meditation feedback." },
            { key: "earthRunners", fit: "Minimalist grounding sandals for an outdoorsy person who likes a more close-to-the-ground footwear style." },
          ]}
        />

        <GiftTier
          title="Splurge gifts"
          intro="Bigger, more distinctive ideas for a group gift or someone deeply interested in wellness gear."
          gifts={[
            { key: "blueCube", fit: "A dedicated cold-therapy tub for the person planning an at-home cold-water setup." },
            { key: "joovv", fit: "A red-light panel for someone who has been researching larger-format light devices." },
            { key: "timeline", fit: "Mitopure is Timeline's Urolithin A product, an option for the recipient interested in longevity research. The source offer is link-only and does not state a discount." },
          ]}
        />

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black">How to pick: match the gift to the person</h2>
          <ul className="space-y-2 text-black/75 leading-relaxed">
            <li><strong>The practical minimalist:</strong> Davids or Goli offers familiar everyday formats.</li>
            <li><strong>The curious beginner:</strong> EnergyBits or Koracao is a straightforward way to explore a new ingredient or ritual.</li>
            <li><strong>The meditation enthusiast:</strong> Muse Headband offers real-time feedback as part of meditation practice.</li>
            <li><strong>The gear researcher:</strong> Compare the format and setup involved with Lumebox, Joovv, or BlueCubeBaths.</li>
            <li><strong>The ritual person:</strong> Consider Koracao cacao or Hyperion Herbs, and check the product details to find a format they will enjoy.</li>
          </ul>
          <p className="text-black/70 leading-relaxed">I start with the recipient's interests, then think about what will fit their existing habits and space. For any device or consumable, review the brand's product information and terms before buying.</p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black">Frequently asked questions</h2>
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