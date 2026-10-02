import EditorialPost, { ArticleLink, ArticleSection } from "@/components/EditorialPost";
import { EditorialOffer, requireEditorialOffer } from "./EditorialOffer";
import hero from "@assets/generated_images/hero-emr-tek-code-oct2026.jpg";

const offer = requireEditorialOffer("EMR-TEK");
const faqs = [
  { q: `Is the EMR-TEK discount code ${offer.code} still working?`, a: `The current code in my discount directory is ${offer.code}. I check the site's codes monthly; confirm that the merchant accepts it before paying, because offer terms can change.` },
  { q: "How much do I save with the EMR-TEK code?", a: `EMR-TEK hasn't published a fixed percentage for this code, so I won't invent one. Enter ${offer.code} at checkout and review the current offer and order total.` },
  { q: "Does EMR-TEK sell EMF shielding products?", a: "No. EMR-TEK's line is red light devices, UV systems, blue-light glasses, and circadian lighting bulbs. It is a light-environment brand, not an EMF-shielding brand. My Best EMF Protection 2026 comparison covers the separate EMF category." },
  { q: "Where can I find more wellness discount codes?", a: "My discount codes page covers 40+ brands I partner with, with the current source-listed codes and links in one place." },
];

export default function EmrTekCheckoutCode() {
  return (
    <EditorialPost
      title={`EMR-TEK Discount Code: ${offer.code} (Verified 2026)`}
      seoTitle={`EMR-TEK Discount Code (${offer.code}): Verified 2026`}
      description={`EMR-TEK discount code ${offer.code}: the verified directory code, checkout instructions, and answers about EMR-TEK's light products. No fixed savings amount claimed.`}
      canonical="/blog/emr-tek-discount-code"
      category="Discount Codes"
      image={hero}
      imageAlt="Warm amber lighting and tinted glasses on a natural-wood wellness desk"
      disclosure="ThriveTools is an EMR-TEK affiliate partner. We may earn a commission on purchases made through links on this page, at no extra cost to you."
      intro="I only publish codes I can personally verify, and I check every code on this site monthly. Here's the current EMR-TEK code from my discount directory, with the practical checkout questions answered."
      faqs={faqs}
    >
      <ArticleSection title="The code">
        <EditorialOffer offer={offer} />
        <p><strong>How to use it:</strong> Visit the official store through the link above, enter <strong>{offer.code}</strong> at checkout, and check the order total. The affiliate URL contains the code, but that alone does not confirm automatic application or a particular saving.</p>
      </ArticleSection>
      <ArticleSection title="What EMR-TEK sells">
        <p>EMR-TEK covers the light-environment picture: red light therapy devices, UV systems, blue-light glasses, and circadian-friendly lighting bulbs. It does not sell EMF shielding products.</p>
        <p>For product details rather than checkout questions, see my <ArticleLink href="/emr-tek-discount-code">EMR-TEK brand guide</ArticleLink>. For the separate EMF category, see <ArticleLink href="/blog/best-emf-protection-2026">Best EMF Protection 2026</ArticleLink>.</p>
        <p>The current code and more partner offers are on my <ArticleLink href="/discount-codes">discount codes page</ArticleLink>.</p>
      </ArticleSection>
    </EditorialPost>
  );
}