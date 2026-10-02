import type { ReactNode } from "react";
import PageLayout from "@/components/PageLayout";
import FaqJsonLd from "@/components/FaqJsonLd";
import { Badge } from "@/components/ui/badge";

type EditorialPostProps = {
  title: string;
  seoTitle: string;
  description: string;
  canonical: string;
  category: "Discount Codes" | "Brand Guides" | "Guides";
  image: string;
  imageAlt: string;
  disclosure: string;
  intro: ReactNode;
  faqs: { q: string; a: string }[];
  children: ReactNode;
};

export function ArticleLink({ href, children, sponsored = false }: { href: string; children: ReactNode; sponsored?: boolean }) {
  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? `noopener noreferrer${sponsored ? " sponsored" : ""}` : undefined}
      className="text-[#8b3a1a] underline underline-offset-4 hover:text-[#c4622d]"
    >
      {children}
    </a>
  );
}

export function ArticleSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-4 text-black/70 leading-relaxed">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">{title}</h2>
      {children}
    </section>
  );
}

export default function EditorialPost(props: EditorialPostProps) {
  return (
    <PageLayout
      showShare
      title={props.title}
      subtitle="By Eden Laraki | ThriveTools.co"
      backLabel="Blog"
      backHref="/blog"
      seo={{
        title: props.seoTitle,
        noSuffix: true,
        description: props.description,
        canonical: props.canonical,
        ogType: "article",
        datePublished: "2026-10-01",
        image: props.image,
        imageAlt: props.imageAlt,
      }}
    >
      <FaqJsonLd faqs={props.faqs} />
      <article className="space-y-8">
        <figure className="card-glass rounded-2xl overflow-hidden">
          <img src={props.image} alt={props.imageAlt} loading="eager" decoding="async" className="w-full h-auto object-contain" />
          <figcaption className="px-4 py-2 text-xs text-black/50">Editorial illustration; not a photograph of a specific brand's product.</figcaption>
        </figure>
        <div className="flex flex-wrap items-center gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">{props.category}</Badge>
          <span className="text-sm text-black/50">October 2026</span>
        </div>
        <p className="text-sm text-black/60 leading-relaxed">{props.disclosure}</p>
        <p className="text-lg text-black/80 leading-relaxed">
          I run ThriveTools.co, a science-backed wellness and biohacking platform built from 14 years of personal research.{" "}{props.intro}
        </p>
        {props.children}
        <ArticleSection title="FAQ">
          {props.faqs.map(({ q, a }) => (
            <div key={q} className="card-glass rounded-2xl p-6">
              <h3 className="font-display font-bold text-black">{q}</h3>
              <p className="mt-2 text-black/70 leading-relaxed">{a}</p>
            </div>
          ))}
        </ArticleSection>
      </article>
    </PageLayout>
  );
}