import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { type ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import articleSource from "@assets/Pasted--Spore-Based-vs-Regular-Probiotics-Magnesium-Glycinate-_1789498175328.txt?raw";

const articleSlug = "/blog/supplement-comparison-guide-2026";
const articleTitle =
  "Spore-Based vs Regular Probiotics, Magnesium Glycinate vs Oxide, Creatine Monohydrate vs HCl — The Definitive Supplement Comparison Guide";
const description =
  "Compare the supplement forms that matter most in 2026, including probiotics, magnesium, creatine, collagen, omega-3, mushrooms, NAD+ precursors, CoQ10, cacao, and longevity compounds.";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the most important supplement form distinction to know?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Magnesium oxide vs glycinate is the most consequential form distinction for most people because magnesium oxide is poorly absorbed. The second most important is cyanocobalamin vs methylcobalamin B12.",
      },
    },
    {
      "@type": "Question",
      name: "Are expensive supplements always better?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not always. A price premium is justified when it reflects bioactive ingredient forms, therapeutic doses, third-party testing, and transparent formulas rather than proprietary blends.",
      },
    },
    {
      "@type": "Question",
      name: "What is the most underrated supplement comparison?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fruiting body vs mycelium mushrooms. The difference in active compound concentration between a quality dual-extracted fruiting body product and a mycelium-on-grain product is substantial.",
      },
    },
    {
      "@type": "Question",
      name: "Should I take all-in-one supplements or individual products?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All-in-one supplements make sense when they use clinical doses and bioactive forms. Individual products are useful for specific therapeutic needs requiring doses beyond an all-in-one formula.",
      },
    },
    {
      "@type": "Question",
      name: "What supplement comparisons matter most for women specifically?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The guide highlights creatine monohydrate for brain health, marine vs bovine collagen for bioavailability, and magnesium glycinate for nervous-system support.",
      },
    },
  ],
};

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const tokenPattern = /(\[([^\]]+)\]\((https?:\/\/[^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*)/g;
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenPattern.exec(text)) !== null) {
    if (match.index > cursor) {
      nodes.push(text.slice(cursor, match.index));
    }

    const key = `${keyPrefix}-${match.index}`;
    if (match[2] && match[3]) {
      nodes.push(
        <a
          key={key}
          href={match[3]}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#c4622d] font-semibold hover:underline"
        >
          {renderInline(match[2], `${key}-link`)}
          <ExternalLink className="w-3.5 h-3.5 shrink-0" />
        </a>,
      );
    } else if (match[4]) {
      nodes.push(
        <strong key={key} className="text-black font-semibold">
          {match[4]}
        </strong>,
      );
    } else if (match[5]) {
      nodes.push(<em key={key}>{match[5]}</em>);
    }
    cursor = tokenPattern.lastIndex;
  }

  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }
  return nodes;
}

function ArticleBody() {
  const lines = articleSource.split(/\r?\n/).slice(6);
  const blocks: ReactNode[] = [];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].trim();
    if (!line || line === "---") continue;

    if (line.startsWith("## ")) {
      blocks.push(
        <h2
          key={`heading-${index}`}
          className="font-display text-2xl sm:text-3xl font-bold text-black pt-6"
        >
          {line.slice(3)}
        </h2>,
      );
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(lines[index].trim().slice(2));
        index += 1;
      }
      index -= 1;
      blocks.push(
        <ul key={`list-${index}`} className="list-disc pl-6 space-y-2 text-black/70 leading-relaxed">
          {items.map((item, itemIndex) => (
            <li key={`${index}-${itemIndex}`}>{renderInline(item, `list-${index}-${itemIndex}`)}</li>
          ))}
        </ul>,
      );
      continue;
    }

    const isShopLink = line.startsWith("[→");
    blocks.push(
      <p
        key={`paragraph-${index}`}
        className={
          isShopLink
            ? "rounded-xl border border-[#c4622d]/25 bg-[#c4622d]/5 px-5 py-4 text-black/70 leading-relaxed"
            : "text-black/70 leading-relaxed"
        }
      >
        {renderInline(line, `paragraph-${index}`)}
      </p>,
    );
  }

  return <div className="contents">{blocks}</div>;
}

export default function SupplementComparisonGuide() {
  return (
    <PageLayout
      showShare
      title="The Definitive Supplement Comparison Guide"
      subtitle="Which forms work better — and which ones are worth your money in 2026"
      seo={{
        title: "Supplement Comparison Guide 2026: Probiotics, Magnesium, Creatine & More",
        description,
        canonical: articleSlug,
        ogType: "article",
        datePublished: "2026-09-15",
      }}
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: articleTitle,
            description,
            datePublished: "2026-09-15",
            dateModified: "2026-09-15",
            author: { "@type": "Person", name: "Eden Laraki" },
            publisher: { "@type": "Organization", name: "Thrive Tools", url: "https://thrivetools.co" },
            mainEntityOfPage: `https://thrivetools.co${articleSlug}`,
          })}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-7">
        <div className="flex flex-wrap gap-2 items-center">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25 text-xs font-semibold px-3 py-1 rounded-full">
            Comparison Guide
          </Badge>
          <span className="text-black/40 text-sm">September 15, 2026</span>
        </div>
        <ArticleBody />
      </article>
    </PageLayout>
  );
}