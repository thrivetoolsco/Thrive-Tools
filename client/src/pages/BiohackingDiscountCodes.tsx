import PageLayout from "@/components/PageLayout";
import { ethicalClothing, healthTech, vitaminsSupplements, type DiscountItem } from "./Discounts";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";

const title = "Biohacking Discount Codes (2026) — Red Light, Longevity Tech & Supplements | ThriveTools";
const description = "Browse biohacking discount codes for red light therapy, neurotech, recovery and longevity supplements. Codes and brand links checked monthly by ThriveTools.";
const allOffers = [...healthTech, ...vitaminsSupplements, ...ethicalClothing];

// Names here must match the main /discount-codes cards exactly. This page only selects
// and groups those cards; it never maintains a second copy of codes or affiliate URLs.
const sections = [
  { title: "Red Light Therapy", names: ["Joovv", "Mito Red Light", "RedTherapy", "VieLight Neuro", "Lumebox"] },
  { title: "Cold & Heat Recovery", names: ["BlueCubeBaths"] },
  { title: "Sleep & Nervous System", names: ["Omnipemf", "Oxygen Advantage"] },
  { title: "Brain & Neurotech", names: ["Neurosity", "Muse Headband", "NeuroVizr", "Self Decode"] },
  { title: "Longevity Supplements", names: ["IM8", "Bioptimizers", "Timeline Mitopure", "EnergyBits Chlorella & Spirulina", "Organika", "HyperionHerbs", "Justthrivehealth", "Equip Foods", "AquaOmega"] },
  { title: "Grounding & EMF", names: ["Earthrunners", "Earthing Harmony"] },
] as const;

// Existing, verified route paths. Prefer the brand guide over a generic category article.
const guidePaths: Record<string, string> = {
  Joovv: "/product-reviews/joovv-review",
  "Mito Red Light": "/blog/mito-red-light-discount-code",
  RedTherapy: "/blog/redtherapy-discount-code",
  "VieLight Neuro": "/product-reviews/vielight-neuro-review",
  Lumebox: "/lumebox-discount-code",
  BlueCubeBaths: "/blog/bluecubebaths-discount-code",
  Omnipemf: "/blog/omnipemf-discount-code",
  "Oxygen Advantage": "/blog/oxygen-advantage-discount-code",
  Neurosity: "/blog/neurosity-discount-code",
  "Muse Headband": "/blog/muse-headband-review",
  NeuroVizr: "/blog/neurovizr-discount-code",
  "Self Decode": "/blog/selfdecode-review",
  IM8: "/blog/im8-review",
  Bioptimizers: "/blog/bioptimizers-review",
  "Timeline Mitopure": "/blog/timeline-mitopure-discount-code",
  "EnergyBits Chlorella & Spirulina": "/blog/energybits-review",
  Organika: "/blog/organika-discount-code",
  HyperionHerbs: "/product-reviews/hyperion-herbs",
  Justthrivehealth: "/blog/just-thrive-review",
  "Equip Foods": "/blog/equip-foods-review",
  AquaOmega: "/blog/aquaomega-discount-code",
  Earthrunners: "/blog/earthrunners-review-guide",
  "Earthing Harmony": "/blog/earthing-harmony-discount-code",
};

const offersByName = new Map(allOffers.map((offer) => [offer.name, offer]));

function faqAnswer(question: string): string {
  switch (question) {
    case "What are the best biohacking discount codes right now?": {
      const names = ["Joovv", "RedTherapy", "Omnipemf", "IM8"];
      return `Start with the curated list on this page. Current examples include ${names.map((name) => `${name} (${offersByName.get(name)?.code})`).join(", ")}; check each brand card for the exact link and code.`;
    }
    case "How do I use a biohacking discount code at checkout?":
      return "Follow the brand's link on this page, add the item you want to the cart, then enter the listed code at checkout. Some offers are link-only, so follow their links instead of entering a code. Review the order total before paying.";
    case "Are these biohacking codes still valid?":
      return "Yes — I check and update the listed codes monthly. This page is marked Active September 2026; check the brand's checkout for the final offer details.";
    case "What counts as biohacking?":
      return "Biohacking here means tools and practices people use to explore their wellness routines, including red light therapy, cold exposure, PEMF, neurotech, and longevity supplements. This list groups brands by format, not by a claim that any product delivers a medical result.";
    default:
      return "Yes. I add new biohacking brands when I partner with them and can recommend them. If you have a brand suggestion, contact me through the contact page.";
  }
}

const questions = [
  "What are the best biohacking discount codes right now?",
  "How do I use a biohacking discount code at checkout?",
  "Are these biohacking codes still valid?",
  "What counts as biohacking?",
  "Do you add new biohacking brands?",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map((question) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: faqAnswer(question) },
  })),
};

function OfferCard({ item }: { item: DiscountItem }) {
  const guide = guidePaths[item.name];
  const linkOnly = item.code?.toLowerCase().startsWith("follow");
  return (
    <div className="card-glass rounded-2xl p-6 flex flex-col gap-4 justify-between">
      <div>
        <h3 className="font-display text-xl font-bold text-[#3d1a28]">{item.name}</h3>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#3d1a28]/10 pt-4">
        {item.code && (
          <span className="text-sm font-semibold text-[#8b3a1a] break-words">
            {linkOnly ? item.code : <>Code: <code className="font-mono">{item.code}</code></>}
          </span>
        )}
        <div className="flex flex-wrap gap-3 items-center">
          {guide && <Link href={guide} className="text-sm text-[#8b3a1a] underline underline-offset-2">Brand guide</Link>}
          <a href={item.url} target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-1.5 rounded-full bg-[#c4622d] px-4 py-2 text-sm font-semibold text-white hover:bg-[#8b3a1a]">
            Visit brand <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function BiohackingDiscountCodes() {
  return (
    <PageLayout
      title="Biohacking Discount Codes (2026)"
      subtitle="Red light therapy, recovery, neurotech, longevity supplements and grounding"
      backLabel="All discount codes"
      backHref="/discount-codes"
      seo={{ title, description, canonical: "/biohacking-discount-codes", noSuffix: true }}
    >
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <main className="space-y-12">
        <div className="space-y-5">
          <span className="inline-flex rounded-full border border-[#c4622d]/25 bg-[#c4622d]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#8b3a1a]">
            Active September 2026
          </span>
          <p className="text-lg leading-relaxed text-[#3d1a28]/80">
            I collect these biohacking discount codes for anyone comparing tools and supplements for a longevity routine. I check and update every code monthly, and I only list brands I partner with or can recommend.
          </p>
          <p className="text-sm leading-relaxed text-[#3d1a28]/60">
            ThriveTools is an affiliate partner of the brands on this page. We may earn a commission on purchases made through links on this page, at no extra cost to you.
          </p>
          <Link href="/discount-codes" className="inline-flex items-center gap-2 rounded-full border border-[#c4622d]/30 px-5 py-3 font-semibold text-[#8b3a1a] hover:bg-[#c4622d]/10">
            See all 40+ discount codes <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {sections.map((section) => (
          <section key={section.title} className="space-y-5">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#3d1a28]">{section.title}</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {section.names.map((name) => {
                const item = offersByName.get(name);
                if (!item) throw new Error(`Missing /discount-codes card: ${name}`);
                return <OfferCard key={name} item={item} />;
              })}
            </div>
          </section>
        ))}

        <section className="space-y-5">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#3d1a28]">Biohacking Discount Codes FAQ</h2>
          {questions.map((question) => (
            <div key={question} className="card-glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-bold text-[#3d1a28]">{question}</h3>
              <p className="mt-2 leading-relaxed text-[#3d1a28]/70">
                {faqAnswer(question)}{question === "Do you add new biohacking brands?" && <> <Link href="/contact" className="text-[#8b3a1a] underline">Contact me</Link>.</>}
              </p>
            </div>
          ))}
        </section>
      </main>
    </PageLayout>
  );
}