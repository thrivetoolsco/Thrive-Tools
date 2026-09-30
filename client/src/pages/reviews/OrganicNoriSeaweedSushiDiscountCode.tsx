import { Helmet } from "react-helmet-async";
import DiscountCodeArticle from "./DiscountCodeArticle";
import heroImg from "@assets/organic-nori-seaweed-sushi-discount-code-hero.jpg";

const faqs = [
  { q: "Is there an Organic Nori Seaweed Sushi discount code?", a: "This offer is link-only, so there is no typed coupon code. Use the verified Raw Nori affiliate link." },
  { q: "How do I activate the Raw Nori discount?", a: "Begin your shopping session through the verified link, add your items, and check the order total at checkout." },
  { q: "Can I combine the link with another promotion?", a: "Usually only one promotion applies per order. Compare totals and keep the better offer." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function OrganicNoriSeaweedSushiDiscountCode() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <DiscountCodeArticle brand="Organic Nori Seaweed Sushi" slug="organic-nori-seaweed-sushi-discount-code" heroImg={heroImg} imageAlt="Organic nori seaweed sushi sheets" href="https://rawnori.com?p=jeFAQZWBn" description="Shop Organic Nori Seaweed Sushi through the verified Thrive Tools affiliate link. No typed code is required." shortAnswer="Organic Nori Seaweed Sushi uses a link-only offer. Shop through the verified affiliate link to access the available discount—there is no code to type at checkout." steps={["Open Raw Nori through the verified Thrive Tools link.", "Choose the seaweed products you want and add them to your cart.", "Continue to checkout without entering a coupon code.", "Confirm the offer in your order total before paying."]} tips={["Start from the verified Raw Nori affiliate link.", "Do not search for a separate checkout code.", "Reopen the link if the offer is not reflected in your cart."]} faqs={faqs} />
    </>
  );
}