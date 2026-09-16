import PageLayout from "@/components/PageLayout";
import MarkdownArticleBody from "@/components/MarkdownArticleBody";
import { Badge } from "@/components/ui/badge";
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
        <MarkdownArticleBody source={articleSource} />
      </article>
    </PageLayout>
  );
}