import EditorialPost, { ArticleLink, ArticleSection } from "@/components/EditorialPost";
import { EditorialOffer, requireEditorialOffer } from "./EditorialOffer";
import hero from "@assets/generated_images/hero-lumebox-code-oct2026.jpg";

const offer = requireEditorialOffer("Lumebox");
const faqs = [
  { q: "Is the Lumebox discount code still working?", a: `The current verified directory code is ${offer.code}, with that exact casing. I re-check the site's codes monthly, but offer terms can change. Confirm that the code is accepted and review the order total before paying.` },
  { q: "How much do I save with the Lumebox code?", a: `Lumebox hasn't published a fixed discount amount for this code, so I won't invent a number. Enter ${offer.code} at checkout and review the current offer.` },
  { q: "Where can I find more red light therapy discount codes?", a: "My discount codes page covers 40+ partner brands. The Best Red Light Therapy Discount Codes 2026 roundup covers the light-therapy category; both are linked in this article." },
];

export default function LumeboxCheckoutCode() {
  return (
    <EditorialPost
      title={`Lumebox Discount Code: ${offer.code} (Verified 2026)`}
      seoTitle={`Lumebox Discount Code (${offer.code}): Verified 2026`}
      description={`Lumebox discount code ${offer.code}: verified directory code, exact casing, checkout instructions and related red light guides. No fixed discount amount claimed.`}
      canonical="/blog/lumebox-discount-code"
      category="Discount Codes"
      image={hero}
      imageAlt="A quiet home wellness corner illuminated by soft red light"
      disclosure="ThriveTools is a Lumebox affiliate partner. Affiliate links may earn a commission at no extra cost to you. The directory currently supplies the official store URL, not a Lumebox affiliate URL."
      intro="I own a Lumebox myself, and I'm partnered with them — so here's the verified directory code, with exact casing and checkout instructions."
      faqs={faqs}
    >
      <ArticleSection title="The code">
        <EditorialOffer offer={offer} />
        <p><strong>How to use it:</strong> Enter <strong>{offer.code}</strong> at checkout on thelumebox.com. Exact casing matters — copy it as shown.</p>
      </ArticleSection>
      <ArticleSection title="What Lumebox makes">
        <p>Lumebox makes a portable red light therapy device. That is the format listed in my discount directory; I am not adding unverified panel models, product specifications, or personal results.</p>
        <p>For product details, see my <ArticleLink href="/lumebox-discount-code">Lumebox brand guide</ArticleLink>. For the full category breakdown, see <ArticleLink href="/blog/best-red-light-therapy-devices-2026">Best Red Light Therapy Devices 2026</ArticleLink>.</p>
        <p>The codes-only roundup is <ArticleLink href="/blog/red-light-therapy-discount-codes">Best Red Light Therapy Discount Codes 2026</ArticleLink>, and all current partner offers are on my <ArticleLink href="/discount-codes">discount codes page</ArticleLink>.</p>
      </ArticleSection>
    </EditorialPost>
  );
}