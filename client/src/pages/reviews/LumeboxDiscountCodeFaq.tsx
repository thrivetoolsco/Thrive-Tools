import EditorialPost, { ArticleSection } from "@/components/EditorialPost";
import { EditorialOffer, requireEditorialOffer } from "./EditorialOffer";
import hero from "@assets/IMG_1510_1791408438077.jpeg";

const offer = requireEditorialOffer("Lumebox");
const faqs = [
  {
    q: "What is the current Lumebox discount code?",
    a: `The current verified partner code listed in my discount directory is ${offer.code} — exact casing. I'm a Lumebox affiliate, so this is a partner code, not a scraped coupon-site listing. Confirm acceptance at checkout before paying.`,
  },
  {
    q: "How do I apply the Lumebox code at checkout?",
    a: `Add your Lumebox device to the cart on thelumebox.com, enter the code ${offer.code} in the discount-code box at checkout, and confirm the discount appears before paying.`,
  },
  {
    q: "Is the Lumebox discount code still working?",
    a: `I re-check every code on this site monthly, and ${offer.code} is the current verified directory code. Offer terms can change, so check that the merchant accepts it before paying. If it stops working, I update the listing.`,
  },
  {
    q: "How much do I save with the Lumebox code?",
    a: `Lumebox hasn't published a fixed discount amount for this code, so I won't invent a number. Apply ${offer.code} at checkout and review the current offer and order total.`,
  },
  {
    q: "Does the Lumebox code work on all devices?",
    a: "Apply it at checkout on thelumebox.com to see the current promotion and any exclusions. I am not promising all-device eligibility; confirm the terms and discount for the items in your cart before paying.",
  },
  {
    q: "Where can I find more red light therapy discount codes?",
    a: "My discount codes page covers 40+ brands I personally partner with, with current codes and links in one place. For the category breakdown, see my Best Red Light Therapy Devices 2026 comparison and the main Lumebox discount code guide.",
    links: [
      { text: "discount codes page", href: "/discount-codes" },
      { text: "Best Red Light Therapy Devices 2026", href: "/blog/best-red-light-therapy-devices-2026" },
      { text: "Lumebox discount code", href: "/blog/lumebox-discount-code" },
    ],
  },
];

export default function LumeboxDiscountCodeFaq() {
  return (
    <EditorialPost
      title="Lumebox Discount Code FAQ (Verified 2026)"
      seoTitle="Lumebox Discount Code FAQ: Verified Code & Answers 2026"
      description={`Lumebox discount code ${offer.code}: verified partner code and FAQ answers on exact casing, checkout steps, current terms and portable red light devices.`}
      canonical="/blog/lumebox-discount-code-faq"
      category="Discount Codes"
      datePublished="2026-10-07"
      image={hero}
      imageAlt="LUMEBOX portable red light device in the supplied Why LUMEBOX product graphic"
      imageCaption="LUMEBOX product graphic supplied by the site owner. Benefit statements shown are brand claims."
      disclosure="ThriveTools is a Lumebox affiliate partner. We may earn a commission on purchases made through affiliate links, at no extra cost to you. The directory currently supplies the official store URL, not a Lumebox affiliate URL."
      intro="I only publish codes I can personally verify, and I re-check every code on this site monthly. Here are the most-asked questions about the Lumebox discount code."
      faqs={faqs}
    >
      <ArticleSection title="The code, up front">
        <EditorialOffer offer={offer} />
        <p><strong>Code:</strong> {offer.code} (exact casing — copy it as shown).</p>
        <p><strong>How to use it:</strong> Enter the code at checkout on thelumebox.com.</p>
      </ArticleSection>
    </EditorialPost>
  );
}
