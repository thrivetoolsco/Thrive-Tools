import { Helmet } from "react-helmet-async";

type FaqJsonLdProps = {
  faqs: { q: string; a: string }[];
};

export default function FaqJsonLd({ faqs }: FaqJsonLdProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };

  return <Helmet><script type="application/ld+json">{JSON.stringify(faqSchema)}</script></Helmet>;
}