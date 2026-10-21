import EditorialPost, { ArticleLink, ArticleSection } from "@/components/EditorialPost";
import goliFaqHero from "@assets/generated_images/goli-discount-code-faq-hero.jpg";

const affiliateUrl = "https://go.goli.com/g-745207ab6b";

const faqs = [
  {
    q: "Is there a Goli discount code?",
    a: "Yes — the current verified code is g-745207ab6b. I'm a Goli affiliate partner, so this is a working partner code, not a scraped coupon-site listing.",
  },
  {
    q: "Why does the Goli code look like a link?",
    a: "That's Goli's own format for partner codes — the code and my affiliate link share the same string. Enter g-745207ab6b exactly as shown in the discount-code box at goli.com checkout; don't shorten it or change the casing.",
  },
  {
    q: "How do I use the Goli discount code?",
    a: "Add your items to the cart on goli.com, enter g-745207ab6b in the discount-code box at checkout, and confirm the 10% discount is reflected in your order total before paying.",
  },
  {
    q: "How much do I save with the Goli code?",
    a: "The code takes 10% off at goli.com checkout.",
  },
  {
    q: "Is the Goli discount code still working?",
    a: "Yes. I re-check every code on this site monthly, and g-745207ab6b is the current verified code. If it ever stops working, it comes off this page.",
  },
  {
    q: "When does the Goli discount code expire?",
    a: "Goli hasn't published an expiry date for this partner code, so I won't invent one. It's the current verified code — if that changes, this page changes.",
  },
  {
    q: "What does Goli sell?",
    a: "Vitamin-packed wellness gummies — a gummy format for people who prefer not to swallow pills or capsules.",
  },
  {
    q: "Where can I find more supplement discount codes?",
    a: "My discount codes page covers 40+ brands I personally partner with — every code verified. See also my main Goli discount code guide.",
    links: [
      { text: "discount codes page", href: "/discount-codes" },
      { text: "Goli discount code guide", href: "/goli-discount-code" },
    ],
  },
];

export default function GoliDiscountCodeFaq() {
  return (
    <EditorialPost
      title="Goli Discount Code FAQ (Verified 2026)"
      seoTitle="Goli Discount Code FAQ: Verified Code & Answers 2026"
      description="Find the Goli discount code g-745207ab6b for 10% off. This verified FAQ explains how to use the code, whether it is working, and where to find more offers."
      canonical="https://thrivetools.co/blog/goli-discount-code-faq"
      category="Discount Codes"
      image={goliFaqHero}
      imageAlt="Bright editorial illustration of wellness gummies"
      disclosure="ThriveTools is a Goli affiliate partner. We may earn a commission on purchases made through links on this page, at no extra cost to you."
      intro="(Disclosure: I'm a Goli affiliate partner — that's how I can offer a verified code instead of a random coupon-site guess.) I only publish codes I can personally verify, and I re-check every code on this site monthly. Here are the most-asked questions about the Goli discount code."
      datePublished="2026-10-14"
      faqs={faqs}
    >
      <ArticleSection title="The code, up front">
        <p>
          <strong>Code:</strong> g-745207ab6b — 10% off
        </p>
        <p>
          <strong>How to use it:</strong> Shop through my{" "}
          <ArticleLink href={affiliateUrl} sponsored>affiliate link</ArticleLink>, or enter the code at checkout on goli.com, and confirm it is accepted before paying.
        </p>
      </ArticleSection>
    </EditorialPost>
  );
}
