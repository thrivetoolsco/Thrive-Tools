import MarkdownArticleBody from "@/components/MarkdownArticleBody";
import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Tag } from "lucide-react";
import { Link } from "wouter";
import { supplementBrandGuides, type SupplementBrandGuide } from "./SupplementBrandGuideData";

function SupplementBrandGuidePage({ post }: { post: SupplementBrandGuide }) {
  return (
    <PageLayout
      showShare
      title={post.title}
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: `${post.title} | Thrive Tools`,
        description: post.intro,
        canonical: `https://thrivetools.co/blog/${post.slug}`,
        ogType: "article",
        datePublished: "2026-09-24",
        image: post.image,
        imageAlt: post.imageAlt,
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-8">
        <div className="card-glass rounded-2xl overflow-hidden">
          <img loading="lazy" decoding="async" src={post.image} alt={post.imageAlt} className="w-full h-auto max-h-[480px] object-contain bg-white" />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">Discount Codes</Badge>
          <span className="text-sm text-black/50">September 24, 2026</span>
        </div>
        <p className="text-lg leading-relaxed text-black/80">{post.intro}</p>
        <MarkdownArticleBody source={post.body} skipLeadingLines={0} />
        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">Pricing</h2>
          <p className="text-black/70 leading-relaxed">{post.pricing}</p>
        </section>
        <aside className="card-glass rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row gap-5 sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <Tag className="w-6 h-6 shrink-0 text-[#8b3a1a]" />
            <p className="text-lg text-black/80">
              <strong>ThriveTools discount:</strong> Use code <strong className="text-black font-bold">{post.code}</strong> at checkout on the official {post.brand} store.
            </p>
          </div>
          <a href={post.href} target="_blank" rel="noopener noreferrer sponsored" className="shrink-0 self-start sm:self-auto">
            <Button className="btn-primary rounded-full px-5">{post.linkText} <ExternalLink className="w-4 h-4 ml-2" /></Button>
          </a>
        </aside>
        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">{post.brand} FAQ</h2>
          {post.faqs.map(({ question, answer }) => (
            <div key={question} className="card-glass rounded-2xl p-6">
              <h3 className="font-display font-bold text-black">{question}</h3>
              <p className="mt-2 text-black/70 leading-relaxed">{answer}</p>
            </div>
          ))}
          <div className="card-glass rounded-2xl p-6">
            <h3 className="font-display font-bold text-black">Where can I find verified {post.brand} discount codes?</h3>
            <p className="mt-2 text-black/70 leading-relaxed">
              On the <Link href="/discount-codes" className="text-[#8b3a1a] underline">ThriveTools discount-codes page</Link>.
            </p>
          </div>
        </section>
        <p className="text-sm text-black/50 leading-relaxed"><strong>Affiliate disclosure:</strong> This post contains affiliate links. If you buy through them, I may earn a commission at no extra cost to you.</p>
      </article>
    </PageLayout>
  );
}

export const [
  Im8BrandGuide,
  EquipFoodsBrandGuide,
  JustThriveBrandGuide,
  BioptimizersBrandGuide,
  EnergyBitsBrandGuide,
] = supplementBrandGuides.map((post) => function BrandGuide() { return <SupplementBrandGuidePage post={post} />; });