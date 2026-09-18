import MarkdownArticleBody from "@/components/MarkdownArticleBody";
import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet-async";
import articleSource from "@assets/Pasted--What-Is-the-Best-Clean-Protein-Powder-in-2026-Everythi_1789757254704.txt?raw";
import primeProteinImage from "@assets/IMG_1378_1789757187458.jpeg";
import colostrumImage from "@assets/IMG_1379_1789757187458.jpeg";
import { trackEvent } from "@/lib/analytics";

const articleSlug = "/blog/best-clean-protein-powder-2026-equip-prime-protein";
const articleTitle = "What Is the Best Clean Protein Powder in 2026? Everything You Need to Know";
const description =
  "What makes a protein powder clean? Compare grass-fed beef protein with whey and plant protein, review Equip Prime Protein ingredients, gut benefits, glycine, and who it is best for.";
const affiliateUrl = "https://www.equipfoods.com/THRIVETOOLS";
const articleContent = articleSource.replace(/<\/?cite(?:\s[^>]*)?>/g, "");
const faqHeading = "## Frequently Asked Questions";
const faqStart = articleContent.indexOf(faqHeading);
const articleBeforeFaq = faqStart >= 0 ? articleContent.slice(0, faqStart) : articleContent;
const articleFaq = faqStart >= 0 ? articleContent.slice(faqStart) : "";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does beef protein powder taste like meat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Equip's flavored versions use real-food ingredients and stevia, with chocolate, vanilla, strawberry, peanut butter, and salted caramel flavors available.",
      },
    },
    {
      "@type": "Question",
      name: "Is Equip protein third-party tested?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Equip says every batch is independently tested by Light Labs and publishes results covering substances including heavy metals, pesticides, and glyphosate.",
      },
    },
    {
      "@type": "Question",
      name: "Can you take Equip protein every day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Equip Prime Protein is designed for daily use and has a short ingredient list without whey, dairy, soy, gums, sugar alcohols, or artificial sweeteners.",
      },
    },
    {
      "@type": "Question",
      name: "How much protein does Equip Prime Protein have per serving?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Equip Prime Protein provides 21 grams of complete protein per serving from grass-fed beef isolate, with naturally occurring collagen and gelatin.",
      },
    },
    {
      "@type": "Question",
      name: "Is Equip protein good for muscle building?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Its 21 grams of complete protein and all nine essential amino acids support muscle protein synthesis and recovery, while whey retains an advantage in leucine content.",
      },
    },
    {
      "@type": "Question",
      name: "Does Equip protein contain collagen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Naturally occurring collagen and gelatin from grass-fed beef and bones are present in each serving.",
      },
    },
  ],
};

export default function EquipCleanProteinGuide() {
  return (
    <PageLayout
      showShare
      title={articleTitle}
      subtitle="A practical guide to grass-fed beef protein, ingredients, gut comfort, glycine, and choosing the right clean protein powder"
      seo={{
        title: "Best Clean Protein Powder 2026: Equip Prime Protein Guide",
        description,
        canonical: articleSlug,
        ogType: "article",
        datePublished: "2026-09-18",
        image: primeProteinImage,
        imageAlt: "Equip Prime Protein chocolate grass-fed beef isolate protein powder",
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-7">
        <div className="flex flex-wrap gap-2 items-center">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25 text-xs font-semibold px-3 py-1 rounded-full">
            Protein
          </Badge>
          <span className="text-black/40 text-sm">September 18, 2026</span>
        </div>

        <figure className="overflow-hidden rounded-2xl border border-black/10 bg-white">
          <img
            src={primeProteinImage}
            alt="Equip Prime Protein chocolate grass-fed beef isolate protein powder"
            className="w-full max-h-[620px] object-contain"
            loading="eager"
          />
        </figure>

        <MarkdownArticleBody source={articleBeforeFaq} />

        <aside className="rounded-2xl border-2 border-[#c4622d]/35 bg-[#c4622d]/8 p-5 sm:p-6">
          <p className="text-xs font-mono font-semibold tracking-widest uppercase text-[#c4622d] mb-2">
            Thrive Tools reader discount
          </p>
          <p className="font-display text-xl sm:text-2xl font-bold text-[#3d1a28] mb-2">
            Save on Equip Foods
          </p>
          <p className="text-black/65 mb-4">
            Shop through the Thrive Tools link and use discount code{" "}
            <strong className="font-mono text-[#8b3a1a]">THRIVETOOLS</strong>.
          </p>
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            onClick={() =>
              trackEvent("affiliate_click", {
                brand: "Equip Foods",
                placement: "article_top_callout",
                page_path: articleSlug,
              })
            }
            className="inline-flex items-center gap-2 rounded-full bg-[#c4622d] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#8b3a1a]"
          >
            Shop Equip Foods — use discount code THRIVETOOLS
            <ExternalLink className="h-4 w-4" />
          </a>
        </aside>

        {articleFaq && <MarkdownArticleBody source={articleFaq} skipLeadingLines={0} />}

        <figure className="overflow-hidden rounded-2xl border border-black/10 bg-white p-4 sm:p-8">
          <img
            src={colostrumImage}
            alt="Equip Core Colostrum grass-fed bovine colostrum supplement"
            className="mx-auto w-full max-w-xl object-contain"
            loading="lazy"
          />
          <figcaption className="mt-3 text-center text-xs text-black/45">
            Equip Foods also makes Core Colostrum alongside its Prime Protein range.
          </figcaption>
        </figure>
      </article>
    </PageLayout>
  );
}