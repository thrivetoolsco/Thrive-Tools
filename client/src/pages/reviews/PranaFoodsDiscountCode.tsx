import { Helmet } from "react-helmet-async";
import DiscountCodeArticle from "./DiscountCodeArticle";
import heroImg from "@assets/prana-foods-discount-code-hero.jpg";

const faqs = [
  { q: "What is the Prana Foods discount code?", a: "Use THRIVETOOLSCO exactly as written." },
  { q: "Where is the Prana Foods code entered?", a: "Use the discount-code field in the cart or checkout before payment." },
  { q: "Can THRIVETOOLSCO be combined with a sale?", a: "Prana Foods determines stacking by promotion; checkout will show whether both apply." },
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

export default function PranaFoodsDiscountCode() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <DiscountCodeArticle brand="Prana Foods" slug="prana-foods-discount-code" heroImg={heroImg} imageAlt="Prana Foods organic snacks" href="https://pranafoods.ca/thrivetoolsco" code="THRIVETOOLSCO" description="Use Prana Foods discount code THRIVETOOLSCO on organic snacks and pantry products at pranafoods.ca." shortAnswer="Use code THRIVETOOLSCO at Prana Foods checkout. Type it as one word in all caps, then apply it before completing your order." steps={["Visit Prana Foods through the verified link.", "Add your snacks or pantry staples to the cart.", "Enter THRIVETOOLSCO in the checkout code field.", "Apply the code and review the discounted total."]} tips={["Type THRIVETOOLSCO with no spaces.", "Shop on the Canadian Prana Foods site linked here.", "Product or sale exclusions can be confirmed at checkout."]} faqs={faqs} />
    </>
  );
}