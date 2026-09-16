import MarkdownArticleBody from "@/components/MarkdownArticleBody";
import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import articleSource from "@assets/Pasted--What-Does-a-Science-Backed-Morning-Supplement-Routine-_1789576657681.txt?raw";

const articleSlug = "/blog/science-backed-morning-supplement-routine";
const articleTitle = "What Does a Science-Backed Morning Supplement Routine Actually Look Like?";
const description =
  "A science-backed morning supplement routine covering what to take, when to take it, coffee timing, creatine, tonic herbs, cacao, gut health, energy, and longevity.";
const articleContent = articleSource.replace(/\bUse code\b/gi, "Use discount code");

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you take all supplements at once in the morning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most foundational supplements can be taken together. Iron should be separated from calcium and magnesium, while fat-soluble supplements require a meal containing fat.",
      },
    },
    {
      "@type": "Question",
      name: "Should supplements be taken with food or without?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fat-soluble supplements should be taken with food. Water-soluble vitamins, most minerals, spore-based probiotics, and creatine are generally flexible.",
      },
    },
    {
      "@type": "Question",
      name: "How long before morning supplements produce noticeable effects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timing varies by supplement, from days or weeks for B vitamins to several weeks for tonic herbs and probiotics, and months for longevity compounds.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum morning supplement routine for maximum impact?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The guide recommends magnesium glycinate, vitamin D3 with K2, and omega-3 in triglyceride form as a focused foundational routine.",
      },
    },
    {
      "@type": "Question",
      name: "Should you take supplements on an empty stomach in the morning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many supplements can be taken fasted, but vitamin D, K2, omega-3, urolithin A, and CoQ10 require dietary fat for optimal absorption.",
      },
    },
    {
      "@type": "Question",
      name: "Is it okay to mix supplements into coffee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Avoid mixing heat-sensitive probiotics, enzymes, or vitamin C into hot coffee. Creatine, magnesium, and many adaptogens are heat-stable, though taking supplements in water first is preferred.",
      },
    },
  ],
};

export default function MorningSupplementRoutineGuide() {
  return (
    <PageLayout
      showShare
      title="What Does a Science-Backed Morning Supplement Routine Actually Look Like?"
      subtitle="What to take, when to take it, and how to build a better morning protocol"
      seo={{
        title: "Science-Backed Morning Supplement Routine: What to Take and When",
        description,
        canonical: articleSlug,
        ogType: "article",
        datePublished: "2026-09-16",
      }}
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: articleTitle,
            description,
            datePublished: "2026-09-16",
            dateModified: "2026-09-16",
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
            Morning Routine
          </Badge>
          <span className="text-black/40 text-sm">September 16, 2026</span>
        </div>
        <MarkdownArticleBody source={articleContent} />
      </article>
    </PageLayout>
  );
}