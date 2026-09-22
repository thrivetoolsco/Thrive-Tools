import DiscountCodeArticle from "./DiscountCodeArticle";
import heroImg from "@assets/mytrex-discount-code-hero.jpg";

export default function MytrexDiscountCode() {
  return <DiscountCodeArticle brand="Mytrex" slug="mytrex-discount-code" heroImg={heroImg} imageAlt="Mytrex head and body massager" href="https://mytrex.global/?ref=EDENKAWTHARLARAKI" code="thrivetools" description="Use Mytrex discount code thrivetools on eligible recovery and massage products at mytrex.global." shortAnswer="Use code thrivetools in the discount-code box at Mytrex checkout. Enter it as one lowercase word and apply it before completing your purchase." steps={["Open Mytrex through the verified Eden Laraki referral link.", "Add your preferred recovery device to the cart.", "Enter thrivetools in the checkout discount field.", "Apply the code and verify the savings."]} tips={["Type thrivetools as one lowercase word.", "Use the official mytrex.global store.", "Eligibility may vary for bundles or items already on sale."]} faqs={[
    { q: "What is the Mytrex discount code?", a: "The verified code is thrivetools." },
    { q: "Does capitalization matter for the Mytrex code?", a: "Use the code exactly as listed—thrivetools in lowercase—to avoid a checkout error." },
    { q: "What if the Mytrex code does not apply?", a: "Check the spelling, verify product eligibility, and reopen the official store through the affiliate link." },
  ]} />;
}