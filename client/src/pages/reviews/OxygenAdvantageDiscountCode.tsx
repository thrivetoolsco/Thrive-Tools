import { Helmet } from "react-helmet-async";
import DiscountCodeArticle from "./DiscountCodeArticle";
import heroImg from "@assets/oxygen-advantage-discount-code-hero.jpg";

const faqs = [
  { q: "What is the Oxygen Advantage discount code?", a: "The verified Thrive Tools code is THRIVETOOLS." },
  { q: "Does the code work on every Oxygen Advantage product?", a: "Eligibility can vary between courses, certifications, and physical products. Checkout confirms the result." },
  { q: "What should I do if THRIVETOOLS is rejected?", a: "Check the spelling, confirm the selected item is eligible, and make sure you are using the official site." },
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

export default function OxygenAdvantageDiscountCode() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <DiscountCodeArticle brand="Oxygen Advantage" slug="oxygen-advantage-discount-code" heroImg={heroImg} imageAlt="Oxygen Advantage breathing training" href="https://oxygenadvantage.com/?ref=159" code="THRIVETOOLS" description="Use Oxygen Advantage discount code THRIVETOOLS for eligible breathing courses and products on the official website." shortAnswer="Use code THRIVETOOLS in the discount-code box at Oxygen Advantage checkout. Apply it before payment to confirm the available savings." steps={["Open Oxygen Advantage through the verified referral link.", "Choose an eligible course, training, or product.", "Enter THRIVETOOLS in the checkout discount field.", "Apply the code and confirm the new total."]} tips={["Enter THRIVETOOLS in all caps with no spaces.", "Course and product eligibility may differ.", "Use the official oxygenadvantage.com checkout."]} faqs={faqs} />
    </>
  );
}