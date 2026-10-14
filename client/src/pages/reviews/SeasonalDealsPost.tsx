import PageLayout from "@/components/PageLayout";
import FaqJsonLd from "@/components/FaqJsonLd";
import { ArticleLink, ArticleSection } from "@/components/EditorialPost";
import { Badge } from "@/components/ui/badge";
import { discountOfferItems } from "../Discounts";

export type SeasonalDeal = {
  sourceName: string;
  name: string;
  description: string;
  guideHref?: string;
  note?: string;
};

export type SeasonalDealsProps = {
  title: string;
  seoTitle: string;
  description: string;
  canonical: string;
  image: string;
  imageAlt: string;
  intro: string;
  shoppingNote: string;
  groups: { title: string; deals: SeasonalDeal[] }[];
  faqs: { q: string; a: string }[];
};

function DealCard({ deal }: { deal: SeasonalDeal }) {
  const offer = discountOfferItems.find((item) => item.name === deal.sourceName);
  if (!offer?.url) throw new Error(`Seasonal deal requires a source-listed partner: ${deal.sourceName}`);
  const linkOnly = !offer.code || /^follow\b/i.test(offer.code);
  const mixedOffer = !!offer.code && /\s/.test(offer.code);
  const guideHref = deal.guideHref ?? offer.blogHref ?? offer.comparisonHref;
  return (
    <section className="space-y-4" data-deal-brand={deal.sourceName}>
      <h3 className="font-display text-xl sm:text-2xl font-bold text-black">
        {guideHref ? <ArticleLink href={guideHref}>{deal.name}</ArticleLink> : deal.name}
      </h3>
      <p className="text-black/70 leading-relaxed">{deal.description}</p>
      <aside className="card-glass rounded-2xl p-5 space-y-3 text-black/70 leading-relaxed">
        <p>{linkOnly || mixedOffer ? "Source-listed offer: " : "Current directory code: "}
          {offer.code ? <strong className={linkOnly || mixedOffer ? "text-[#8b3a1a]" : "font-mono text-[#8b3a1a] select-all"}>{offer.code}</strong> : "Partner link only; no checkout code is listed."}
        </p>
        <p><ArticleLink href={offer.url} sponsored>{linkOnly ? `View ${deal.name} partner offer` : `Shop ${deal.name}`}</ArticleLink></p>
        <p className="text-sm text-black/60">{linkOnly
          ? "No checkout code is listed for this offer. Follow the partner link and check the current eligibility and order total."
          : "Enter the directory code at checkout and confirm acceptance, eligibility and your final total before paying."} This is a standing partner offer, not a confirmed Black Friday sale.</p>
        {deal.note && <p className="text-sm text-black/60">{deal.note}</p>}
      </aside>
    </section>
  );
}

export default function SeasonalDealsPost(props: SeasonalDealsProps) {
  const dealCount = props.groups.reduce((count, group) => count + group.deals.length, 0);
  return (
    <PageLayout
      title={props.title}
      subtitle="By Eden Laraki | ThriveTools.co"
      backLabel="Blog"
      backHref="/blog"
      showShare
      seo={{ title: props.seoTitle, noSuffix: true, description: props.description, canonical: props.canonical, ogType: "article", datePublished: "2026-10-13", image: props.image, imageAlt: props.imageAlt }}
    >
      <FaqJsonLd faqs={props.faqs} />
      <article className="space-y-8">
        <figure className="card-glass rounded-2xl overflow-hidden">
          <img src={props.image} alt={props.imageAlt} loading="eager" decoding="async" className="w-full aspect-video object-cover" />
          <figcaption className="px-4 py-2 text-xs text-black/50">AI-generated editorial illustration, not a photograph of a specific partner&apos;s products.</figcaption>
        </figure>
        <div className="flex flex-wrap items-center gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">Deals</Badge>
          <time dateTime="2026-10-13" className="text-sm text-black/50">October 13, 2026</time>
        </div>
        <p className="text-sm text-black/60 leading-relaxed">Disclosure: ThriveTools is an affiliate partner of the brands featured here. We may earn a commission on purchases made through affiliate links, at no extra cost to you.</p>
        <p className="text-lg text-black/80 leading-relaxed">I run ThriveTools.co, a science-backed wellness and biohacking platform built from 14 years of personal research. {props.intro}</p>
        <aside className="card-glass rounded-2xl p-5 space-y-3 text-black/70 leading-relaxed">
          <h2 className="font-display text-xl font-bold text-black">The deal status, up front</h2>
          <p>Black Friday is <strong>November 27, 2026</strong>; Cyber Monday is <strong>November 30, 2026</strong>. The {dealCount} partner offers below are my standing starting points, not announced holiday sale prices.</p>
          <p><strong>Last verified: October 13, 2026</strong> — codes and links checked against my discount directory, not tested in merchant checkouts. Re-verify the offers and each brand&apos;s terms as Black Friday approaches.</p>
          <p>Brands may announce separate holiday promotions. I am not claiming that any brand&apos;s Black Friday sale has started, that a code will stack, or that an offer will remain available through the holiday.</p>
        </aside>
        <ArticleSection title="How I shop these offers">
          <p>{props.shoppingNote}</p>
          <p>The partner codes and links come from my <ArticleLink href="/discount-codes">discount codes page</ArticleLink>. Some entries are link-based offers rather than codes you type at checkout; I keep that distinction explicit below.</p>
        </ArticleSection>
        {props.groups.map((group) => (
          <ArticleSection title={group.title} key={group.title}>
            <div className="space-y-8">{group.deals.map((deal) => <DealCard key={deal.sourceName} deal={deal} />)}</div>
          </ArticleSection>
        ))}
        <ArticleSection title="Before you check out: stacking and seasonal terms">
          <p>Standing codes may or may not combine with sitewide Black Friday or Cyber Monday sales. Check exclusions, subscriptions, bundles, shipping, returns and the final order total on the brand&apos;s site. Never assume two offers stack, and never read a code&apos;s name as a guaranteed discount percentage.</p>
          <p>I would compare the actual checkout total with and without the code when that option is available. A partner link is not a promise that a discount will apply automatically.</p>
        </ArticleSection>
        <ArticleSection title="FAQ">
          {props.faqs.map(({ q, a }) => (
            <section key={q} className="card-glass rounded-2xl p-6">
              <h3 className="font-display font-bold text-black">{q}</h3>
              <p className="mt-2 text-black/70 leading-relaxed">{a}</p>
            </section>
          ))}
        </ArticleSection>
        <p className="text-sm text-black/60 leading-relaxed"><strong>Last verified: October 13, 2026.</strong> This is a directory-source review, not confirmation of live holiday sales. Re-verify each partner offer near November 27 before relying on it.</p>
      </article>
    </PageLayout>
  );
}
