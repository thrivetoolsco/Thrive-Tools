import EditorialPost, { ArticleSection } from "@/components/EditorialPost";
import { EditorialOffer, requireEditorialOffer } from "./EditorialOffer";
import hero from "@assets/generated_images/hero-therasage-discount-faq-oct2026.jpg";

const offer = requireEditorialOffer("Therasage");
const faqs = [
  {
    q: "Is there a Therasage discount code?",
    a: `Yes — the current verified partner code listed in my discount directory is ${offer.code}. I'm a Therasage affiliate, so this is a partner code. Confirm that the merchant accepts it at checkout before paying.`,
  },
  {
    q: "How do I use the Therasage discount code?",
    a: `Add products to your cart on therasage.com, enter ${offer.code} in the discount-code box at checkout, and confirm the discount applies before paying. You can shop through my affiliate link, but the link alone is not a promise of automatic application or a specific saving.`,
  },
  {
    q: "What does Therasage sell?",
    a: "Therasage makes portable infrared saunas, PEMF and infrared mats, light-powered oral care, and vegan skin brushes — the portable side of the heat-therapy and recovery world. For the science of sauna types, see my infrared sauna vs traditional sauna comparison.",
    links: [
      { text: "infrared sauna vs traditional sauna", href: "/blog/infrared-sauna-vs-traditional-sauna" },
    ],
  },
  {
    q: "Is the Therasage code still working?",
    a: `I re-check every code on this site monthly, and ${offer.code} is the current verified directory code. Offer terms can change, so check acceptance and the order total before paying. If it stops working, I update the listing.`,
  },
  {
    q: "How much do I save with the Therasage code?",
    a: `Therasage hasn't published a fixed discount amount for this code, so I won't invent a number. Apply ${offer.code} at checkout and review the current offer and order total.`,
  },
  {
    q: "Where can I find more wellness discount codes?",
    a: "My discount codes page covers 40+ brands I personally partner with, with current codes and links in one place. The main Therasage discount code guide has the longer walkthrough.",
    links: [
      { text: "discount codes page", href: "/discount-codes" },
      { text: "Therasage discount code", href: "/blog/therasage-discount-code" },
    ],
  },
];

export default function TherasageDiscountCodeFaq() {
  return (
    <EditorialPost
      title="Therasage Discount Code FAQ (Verified 2026)"
      seoTitle="Therasage Discount Code FAQ: Verified Code & Answers 2026"
      description={`Therasage discount code ${offer.code}: verified partner code and FAQ answers on checkout, offer terms, portable infrared saunas, mats and other products.`}
      canonical="/blog/therasage-discount-code-faq"
      category="Discount Codes"
      datePublished="2026-10-07"
      image={hero}
      imageAlt="Folded ivory towels and a water glass on warm wood in a peaceful home spa"
      disclosure="ThriveTools is a Therasage affiliate partner. We may earn a commission on purchases made through links on this page, at no extra cost to you."
      intro="I only publish codes I can personally verify, and I re-check every code on this site monthly. Here are the most-asked questions about the Therasage discount code."
      faqs={faqs}
    >
      <ArticleSection title="The code, up front">
        <EditorialOffer offer={offer} />
        <p><strong>Code:</strong> {offer.code}.</p>
        <p><strong>How to use it:</strong> Enter the code at checkout on therasage.com and confirm the discount appears before paying. The source-listed affiliate link is above; do not assume it has applied the code until checkout confirms it.</p>
      </ArticleSection>
    </EditorialPost>
  );
}
