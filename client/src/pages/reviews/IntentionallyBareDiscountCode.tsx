import DiscountCodeArticle from "./DiscountCodeArticle";
import heroImg from "@assets/intentionally-bare-discount-code-hero.jpg";

export default function IntentionallyBareDiscountCode() {
  return <DiscountCodeArticle brand="Intentionally Bare" slug="intentionally-bare-discount-code" heroImg={heroImg} imageAlt="Intentionally Bare MCT oil products" href="https://bit.ly/4bsgdYC" description="Use the verified Thrive Tools affiliate link to shop Intentionally Bare. The offer is link-only with no typed code." shortAnswer="Intentionally Bare uses a verified link-only offer. Follow the affiliate link to shop; you do not need to enter a discount code manually." steps={["Open Intentionally Bare from the verified link.", "Select your preferred MCT oil, powder, or blend.", "Proceed to checkout without typing a promo code.", "Review the final total before placing your order."]} tips={["Use the Thrive Tools link at the start of your visit.", "The short link redirects to the official Intentionally Bare store.", "If you leave the site, reopen the verified link before checkout."]} includeFaqSchema faqs={[
    { q: "Does Intentionally Bare have a typed discount code?", a: "The Thrive Tools offer is link-only. No separate code is listed in the project's verified discount data." },
    { q: "Is the short affiliate link safe to use?", a: "Yes. The verified link redirects to the official intentionallybare.com store." },
    { q: "Will the offer stack with a sale price?", a: "Stacking depends on the checkout promotion. Most stores allow one discount mechanism per order." },
  ]} />;
}