import { Helmet } from "react-helmet-async";
import DiscountCodeArticle from "./DiscountCodeArticle";
import heroImg from "@assets/omnipemf-discount-code-hero.jpg";

const faqs = [
  { q: "What is the Omnipemf discount code?", a: "The verified Thrive Tools code is thrive10." },
  { q: "Where do I enter thrive10?", a: "Use the coupon or discount-code field during Omnipemf checkout." },
  { q: "Can the Omnipemf code stack with another sale?", a: "Most checkouts accept one promotion per order. Use whichever offer produces the best total." },
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

export default function OmnipemfDiscountCode() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <DiscountCodeArticle brand="Omnipemf" slug="omnipemf-discount-code" heroImg={heroImg} imageAlt="Omnipemf portable PEMF device" href="https://omnipemf.com/?ref=uLhVfH2tFr_rsh" code="thrive10" description="Use Omnipemf discount code thrive10 on eligible portable PEMF devices at the official Omnipemf store." shortAnswer="Use code thrive10 in the discount-code box at Omnipemf checkout. Enter it in lowercase as listed and apply it before payment." steps={["Open Omnipemf through the verified affiliate link.", "Choose your PEMF device and add it to the cart.", "Enter thrive10 in the checkout discount field.", "Apply the code and review the reduced order total."]} tips={["Type thrive10 exactly as shown.", "Use the official omnipemf.com checkout.", "Check the final total before completing payment."]} faqs={faqs} />
    </>
  );
}