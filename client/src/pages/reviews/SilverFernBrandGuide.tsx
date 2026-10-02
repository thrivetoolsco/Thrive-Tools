import EditorialPost, { ArticleLink, ArticleSection } from "@/components/EditorialPost";
import { discountOfferItems } from "../Discounts";
import { EditorialOffer, requireEditorialOffer } from "./EditorialOffer";
import hero from "@assets/generated_images/hero-silver-fern-guide-oct2026.jpg";

const sourceOffer = discountOfferItems.find((item) => /^silver[\s-]*fern(?: brand)?$/i.test(item.name));
const offer = sourceOffer ? requireEditorialOffer(sourceOffer.name) : null;
const referralStatus = offer
  ? `The current source-listed code is ${offer.code}. Use the referral link in this guide and confirm the current terms at checkout.`
  : "My referral link is being set up — check my discount codes page for the current code. No personal Silver Fern code or referral link is listed there yet.";
const faqs = [
  { q: "What does Silver Fern sell?", a: "Gut-health products centered on probiotics and digestive wellness. This overview does not make claims about specific products, strains, or clinical results." },
  { q: "Is Silver Fern a good probiotic brand?", a: "It's a brand I chose to partner with as an ambassador, which means it cleared my bar for authenticity. A partnership is not proof that a particular probiotic will benefit everyone. See my guide on how prebiotics and probiotics work together for the science and its limitations." },
  { q: "How do I get the Silver Fern discount?", a: referralStatus },
  { q: "Does Silver Fern ship to Canada?", a: "Check their site at checkout for current shipping regions — I won't publish shipping claims I can't keep current." },
];

export default function SilverFernBrandGuide() {
  return (
    <EditorialPost
      title="Silver Fern, Explained: A Gut-Health Brand Guide"
      seoTitle="Silver Fern Brand Guide: Probiotics & Gut Health 2026"
      description="Silver Fern probiotic and gut health brand guide: who the brand is for, my ambassador relationship, and the current referral-link setup status."
      canonical="/blog/silver-fern-brand-guide"
      category="Brand Guides"
      image={hero}
      imageAlt="Yogurt, oats, legumes and plant foods arranged on a pale kitchen counter"
      disclosure="Disclosure: I'm a Silver Fern ambassador. This is a referral-points program, not a cash-commission program: I receive 25 points per referral and milestone free products. My audience's stated program discount is 10%; my personal referral link is still being set up unless a current offer is listed below."
      intro="I'm a Silver Fern ambassador, and I only partner with brands I can recommend authentically. Here's the honest guide: what Silver Fern is, who it's for, and how the referral discount works."
      faqs={faqs}
    >
      <ArticleSection title="What Silver Fern is">
        <p>Silver Fern is a gut-health brand focused on probiotics and digestive wellness products. Gut health is one of the categories I cover most — my audience is research-literate people investing in supplements and longevity.</p>
        <p>This is a who-they-are guide, not a clinical product review. I am not inventing product names, probiotic strains, prices, or outcomes.</p>
      </ArticleSection>
      <ArticleSection title="Who it's for">
        <ul className="list-disc pl-6 space-y-2">
          <li>People comparing gut-health products alongside diet and lifestyle.</li>
          <li>Anyone interested in a brand I have chosen to partner with through an ambassador program.</li>
          <li>Readers who want the relationship and referral setup explained before shopping.</li>
        </ul>
        <p>A brand partnership is separate from evidence for a specific product. For definitions and the deeper science, see <ArticleLink href="/blog/how-prebiotics-and-probiotics-work">how prebiotics and probiotics work together</ArticleLink>.</p>
      </ArticleSection>
      <ArticleSection title="The discount">
        <p>As an ambassador, the program gives my audience an exclusive 10% referral discount. I receive referral points and milestone free products, not cash commissions. The program's discount is not a promise that a personal code is already available.</p>
        {offer ? <EditorialOffer offer={offer} /> : (
          <aside className="card-glass rounded-2xl p-6" data-testid="silver-fern-referral-pending">
            <p><strong>My referral link is being set up.</strong> No personal Silver Fern referral code or URL is in the discount directory yet, so I am not publishing a guessed link or code.</p>
          </aside>
        )}
        <p>Check my <ArticleLink href="/discount-codes">discount codes page</ArticleLink> for the current code and referral link once setup is complete.</p>
      </ArticleSection>
    </EditorialPost>
  );
}