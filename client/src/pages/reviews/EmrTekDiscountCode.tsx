import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Tag } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import fireflyImage from "@assets/emr-tek-firefly-official.jpg";

const affiliateUrl = "https://www.emr-tek.com/EDEN17306";
const articleTitle = "EMR-TEK Discount Code & Brand Guide (2026)";

const products = [
  { name: "Firefly Portable Red Light Therapy Device", sale: "$399.99", list: "$499.99", rating: "4.9★" },
  { name: "ETERNO LED Face Mask", detail: "4 wavelengths; zero-contact design", sale: "$399.99", list: "$499.99", rating: "4.7★" },
  { name: "Firewave Compact Red Light Therapy Device", sale: "$449.99", list: "$549.99", rating: "4.9★" },
  { name: "Firedragon", detail: "red + near-infrared", sale: "$799.99", list: "$899.99" },
  { name: "Firedragon Pro Red Light Therapy Panel", sale: "$899.99", list: "$999.99", rating: "5.0★" },
  { name: "Firestorm Pro Red Light Therapy Device", sale: "$1,599.99", list: "$1,799.99", rating: "5.0★" },
  { name: "Inferno Pro Red Light Therapy Panel", sale: "$1,899.99", list: "$1,999.99", rating: "5.0★" },
  { name: "Firehawk Full-Body Red Light Therapy System", sale: "$16,999.99", list: "$18,999.99" },
  { name: "Krypton Mini Pro Full-Spectrum Light System", detail: "UV", sale: "$1,399.99", list: "$1,599.99", rating: "5.0★" },
  { name: "Krypton UV 606W Full-Spectrum Light System", sale: "$2,999.99", list: "$3,499.99", rating: "5.0★" },
  { name: "Krypton UV 1612W Full-Spectrum Light System", sale: "$5,599.99", list: "$6,999.99", rating: "5.0★" },
  { name: "Ultron Full-Body Multi-Spectrum Light System", sale: "$25,999.99", list: "$29,999.99" },
  { name: "Sunset Light Bulb", detail: "warm ambient-glow LED", sale: "$49.99", list: "$59.99", rating: "5.0★" },
  { name: "Daylight Yellow Light Bulb", detail: "low blue light", sale: "$49.99", list: "$59.99", rating: "5.0★" },
  { name: "Light bulb 3-packs", sale: "$99.99" },
  { name: "Blue-light blocking glasses: Freya, NYX, Odin Magnesium, Athena 24K Gold Plated", sale: "$149.99", list: "$199.99", rating: "4.0–5.0★" },
];

const faqs = [
  {
    question: "What is EMR-TEK?",
    answer: "EMR-TEK is a light-based wellness brand. According to its site, its lineup includes red light therapy devices, full-spectrum UV systems, blue-light blocking glasses, and circadian-friendly lighting.",
  },
  {
    question: "What products does EMR-TEK sell?",
    answer: "The EMR-TEK lineup includes portable red light devices, face masks, panels, and full-body light systems. It also sells UV systems, blue-light blocking glasses, and lighting such as the Sunset and Daylight Yellow bulbs.",
  },
  {
    question: "How do I use the EMR-TEK discount code EDEN17306?",
    answer: "Follow the EMR-TEK affiliate link on this page to emr-tek.com and add a product to your cart. Use code EDEN17306 at emr-tek.com; the link also tracks the code. No specific customer discount amount has been stated for this code.",
  },
  {
    question: "Does EMR-TEK publish lab testing for its products?",
    answer: "Yes. EMR-TEK says it publishes third-party integrating sphere reports and distance spectral data for its devices, as well as spectral transmission reports for its clear, yellow, orange, and red glasses lenses.",
  },
  {
    question: "Does EMR-TEK sell EMF protection products?",
    answer: "No EMF-protection product line is listed in the brand information used for this guide. EMR-TEK is a light therapy brand with red light and UV systems, blue-light glasses, and circadian-friendly lighting; it should not be confused with an EMF-shielding company.",
  },
  {
    question: "Where is the best place to buy EMR-TEK products?",
    answer: "Visit the official emr-tek.com store through the affiliate link on this page. Review current product prices there before buying; the prices in this guide were listed on September 25, 2026.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

function ShopLink({ children }: { children: React.ReactNode }) {
  return <a href={affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="text-[#8b3a1a] underline">{children}</a>;
}

export default function EmrTekDiscountCode() {
  return (
    <PageLayout
      showShare
      title={articleTitle}
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: articleTitle,
        description: "Use code EDEN17306 at emr-tek.com. A guide to EMR-TEK red light therapy devices, UV systems, blue-light glasses, lighting, third-party testing, and FAQs.",
        canonical: "/emr-tek-discount-code",
        ogType: "article",
        datePublished: "2026-09-25",
        image: fireflyImage,
        imageAlt: "EMR-TEK Firefly portable red light therapy device in use",
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <Helmet><script type="application/ld+json">{JSON.stringify(faqSchema)}</script></Helmet>
      <article className="space-y-8">
        <figure className="card-glass rounded-2xl overflow-hidden">
          <img src={fireflyImage} alt="EMR-TEK Firefly portable red light therapy device in use" loading="eager" decoding="async" className="w-full h-auto max-h-[480px] object-contain bg-white" />
        </figure>
        <div className="flex flex-wrap items-center gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">Discount Codes</Badge>
          <span className="text-sm text-black/50">September 25, 2026</span>
        </div>
        <p className="text-lg leading-relaxed text-black/80">
          EMR-TEK is a light-based wellness brand selling red light therapy devices, full-spectrum UV systems, blue-light blocking glasses, and circadian-friendly lighting. This is a brand guide to its light products, testing reports, and listed prices — not a guide to EMF shielding.
        </p>
        <p className="text-sm text-black/60 leading-relaxed">
          ThriveTools is an EMR-TEK affiliate partner. We may earn a commission on purchases made through links on this page, at no extra cost to you.
        </p>
        <aside className="card-glass rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row gap-5 sm:items-center sm:justify-between">
          <p className="text-lg text-black/80 flex items-center gap-3"><Tag className="w-6 h-6 shrink-0 text-[#8b3a1a]" />Use code <strong>EDEN17306</strong> at emr-tek.com.</p>
          <a href={affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#c4622d] px-5 py-3 text-sm font-semibold text-white hover:bg-[#8b3a1a]">
            Visit EMR-TEK <ExternalLink className="w-4 h-4" />
          </a>
        </aside>
        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">The brand and its testing</h2>
          <p className="text-black/70 leading-relaxed">
            According to EMR-TEK, founder Kris developed vitiligo at age 3 and spent twenty years researching light and health before spending the last eight years building the brand. EMR-TEK says it publishes third-party integrating sphere reports and distance spectral data for devices, as well as spectral transmission reports for its clear, yellow, orange, and red glasses lenses.
          </p>
          <p className="text-black/70 leading-relaxed">
            EMR-TEK claims it is trusted by 65,000+ customers. Product ratings shown on its site range from 4.9 to 5.0 stars for many devices; the brand's listed ratings and prices can change.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">EMR-TEK product lineup</h2>
          <p className="text-black/70 leading-relaxed">
            Prices below are sale prices (with list prices in parentheses) as listed on emr-tek.com on September 25, 2026, not permanent prices or a discount promised by code EDEN17306. Check the official store for current listings.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {products.map(({ name, detail, sale, list, rating }) => (
              <li key={name} className="card-glass rounded-xl p-4 text-black/70 leading-relaxed">
                <ShopLink>{name}</ShopLink>{detail && <> — {detail}</>}. Listed sale price: {sale}{list && <> (list {list})</>}{rating && <>; listed rating {rating}</>}.
              </li>
            ))}
          </ul>
        </section>
        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">Who might consider EMR-TEK?</h2>
          <p className="text-black/70 leading-relaxed">
            The lineup covers people looking for a portable red light device through to a full-body light system, people building a circadian-friendly lighting setup, and shoppers comparing lab-tested blue-light glasses. This is a description of the available formats, not a health outcome claim.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">How to use code EDEN17306</h2>
          <ol className="list-decimal pl-6 space-y-2 text-black/70 leading-relaxed">
            <li>Visit <ShopLink>emr-tek.com through this affiliate link</ShopLink>.</li>
            <li>Select a product and add it to the cart.</li>
            <li>Use code <strong>EDEN17306</strong> at emr-tek.com and review the order total. The affiliate link also tracks the code; no specific customer discount amount has been stated.</li>
          </ol>
          <p className="text-black/70 leading-relaxed">
            For a category roundup rather than a brand guide, see <Link href="/blog/red-light-therapy-discount-codes" className="text-[#8b3a1a] underline">Best Red Light Therapy Discount Codes 2026</Link>.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">EMR-TEK FAQ</h2>
          {faqs.map(({ question, answer }) => (
            <div key={question} className="card-glass rounded-2xl p-6">
              <h3 className="font-display font-bold text-black">{question}</h3>
              <p className="mt-2 text-black/70 leading-relaxed">{answer}</p>
            </div>
          ))}
        </section>
      </article>
    </PageLayout>
  );
}