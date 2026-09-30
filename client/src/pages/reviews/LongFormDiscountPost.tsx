import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Tag, User } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export type LongFormPost = {
  brand: string;
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  href: string;
  code?: string;
  lead: string;
  intro: string;
  sells: string;
  products: string[];
  standsOut: string;
  steps: string[];
  faqs: { q: string; a: string }[];
  faqTitle: string;
  howTitle: string;
  moreQuestion: string;
};

export default function LongFormDiscountPost({ post }: { post: LongFormPost }) {
  const { brand, slug, title, image, imageAlt, href, code, lead, intro, sells, products, standsOut, steps, faqs, faqTitle, howTitle, moreQuestion } = post;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      ...faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
      {
        "@type": "Question",
        name: moreQuestion,
        acceptedAnswer: {
          "@type": "Answer",
          text: "See all verified codes on the ThriveTools discount-codes page.",
        },
      },
    ],
  };
  return (
    <PageLayout
      showShare
      title={title}
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: `${title} | Thrive Tools`,
        description: lead,
        canonical: `https://thrivetools.co/blog/${slug}`,
        ogType: "article",
        datePublished: "2026-09-24",
        image,
        imageAlt,
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-10">
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </Helmet>
        <div className="card-glass rounded-2xl overflow-hidden">
          <img loading="lazy" decoding="async" src={image} alt={imageAlt} className="w-full h-auto object-cover" />
        </div>
        <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">Discount Codes</Badge>
        <div className="card-glass rounded-2xl p-6 md:p-8">
          <p className="text-lg leading-relaxed text-black/80">{lead}</p>
          <div className="mt-5 flex flex-col sm:flex-row gap-5 sm:items-center sm:justify-between rounded-xl bg-[#c4622d]/10 p-5">
            <div className="flex items-center gap-3">
              <Tag className="w-5 h-5 text-[#8b3a1a] shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wider text-black/60">{code ? "Discount code" : "Link-only offer — no code needed"}</p>
                <p className="font-display font-bold text-xl break-all">{code ?? "Discount applies via the link"}</p>
              </div>
            </div>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary rounded-full px-6">Shop {brand} <ExternalLink className="w-4 h-4 ml-2" /></Button>
            </a>
          </div>
        </div>
        <p className="text-black/70 leading-relaxed">{intro}</p>
        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black">What {brand} sells</h2>
          <p className="text-black/70 leading-relaxed">{sells}</p>
        </section>
        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black">What to buy</h2>
          <ul className="space-y-3">
            {products.map((product) => {
              const [name, ...detail] = product.split(": ");
              return <li key={product} className="card-glass rounded-2xl p-5 text-black/70 leading-relaxed"><strong className="text-black">{name}</strong>{detail.length > 0 && `: ${detail.join(": ")}`}</li>;
            })}
          </ul>
        </section>
        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black">Why it stands out</h2>
          <p className="text-black/70 leading-relaxed">{standsOut}</p>
        </section>
        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black">{howTitle}</h2>
          <ol className="space-y-3">
            {steps.map((step, i) => <li key={step} className="card-glass rounded-2xl p-5 flex gap-4 text-black/70 leading-relaxed"><span className="font-display font-bold text-[#8b3a1a]">{i + 1}.</span>{step}</li>)}
          </ol>
        </section>
        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black">{faqTitle}</h2>
          {faqs.map(({ q, a }) => <div key={q} className="card-glass rounded-2xl p-6"><p className="font-display font-bold text-black">{q}</p><p className="mt-2 text-black/70 leading-relaxed">{a}</p></div>)}
          <div className="card-glass rounded-2xl p-6">
            <p className="font-display font-bold text-black">{moreQuestion}</p>
            <p className="mt-2 text-black/70">See all verified codes on the <Link href="/discount-codes" className="text-[#8b3a1a] underline">ThriveTools discount-codes page</Link>.</p>
          </div>
        </section>
        <div className="card-glass rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div><p className="font-display text-xl font-bold text-black">Ready to shop {brand}?</p><p className="text-black/60 mt-1">{code ? `Enter ${code} at checkout and confirm the discount before paying.` : "Use the link and confirm the discount before paying — no code to type."}</p></div>
          <a href={href} target="_blank" rel="noopener noreferrer"><Button className="btn-primary rounded-full px-6">Shop {brand} <ExternalLink className="w-4 h-4 ml-2" /></Button></a>
        </div>
        <div className="card-glass rounded-2xl p-6 flex gap-4"><User className="w-7 h-7 text-[#8b3a1a] shrink-0" /><div><p className="font-display font-bold text-black">Eden Laraki</p><p className="text-black/60 mt-1 text-sm">Eden runs ThriveTools.co, sharing wellness product research and discount codes.</p></div></div>
        <p className="text-sm text-black/50 leading-relaxed"><strong>Affiliate disclosure:</strong> This post contains affiliate links. If you buy through them, I may earn a commission at no extra cost to you.</p>
      </article>
    </PageLayout>
  );
}