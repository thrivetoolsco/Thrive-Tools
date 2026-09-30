import { Helmet } from "react-helmet-async";
import DiscountCodeArticle from "./DiscountCodeArticle";
import heroImg from "@assets/the-blessed-seed-discount-code-hero.jpg";

const faqs = [
  { q: "Does The Blessed Seed have a Thrive Tools code?", a: "No typed code is listed. The verified offer is attached to the referral link." },
  { q: "How do I use the referral offer?", a: "Open the official store through the /ref/370/ link and complete your order in that session." },
  { q: "Can the referral link stack with another promotion?", a: "The store controls stacking. If another offer is available, compare the checkout totals." },
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

export default function TheBlessedSeedDiscountCode() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <DiscountCodeArticle brand="The Blessed Seed" slug="the-blessed-seed-discount-code" heroImg={heroImg} imageAlt="The Blessed Seed black seed oil" href="https://theblessedseed.de/ref/370/" description="Shop The Blessed Seed through the verified Thrive Tools affiliate link. No typed discount code is required." shortAnswer="The Blessed Seed offer is link-only. Follow the verified affiliate link to shop black seed oil; there is no separate code to enter at checkout." steps={["Open The Blessed Seed using the verified referral link.", "Choose your preferred black seed oil strength and size.", "Continue to checkout without entering a code.", "Confirm the available offer before paying."]} tips={["Start from the /ref/370/ affiliate link.", "Choose product strength based on the brand's own guidance.", "A second checkout code is not required for this offer."]} faqs={faqs} />
    </>
  );
}