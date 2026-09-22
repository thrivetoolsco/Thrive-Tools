import DiscountCodeArticle from "./DiscountCodeArticle";
import heroImg from "@assets/styriangold-discount-code-hero.jpg";

export default function StyrianGoldDiscountCode() {
  return <DiscountCodeArticle brand="StyrianGold" slug="styriangold-discount-code" heroImg={heroImg} imageAlt="StyrianGold pumpkin seed oil" href="http://www.styriangold.ca/shop/?" code="THRIVETOOLS-10" description="Use StyrianGold discount code THRIVETOOLS-10 when shopping for pumpkin seed oil and related products." shortAnswer="Use code THRIVETOOLS-10 in the discount-code box at StyrianGold checkout. Enter the hyphen exactly as shown before you place your order." steps={["Open the StyrianGold shop through the verified link.", "Add pumpkin seed oil or another product to your cart.", "Enter THRIVETOOLS-10 in the checkout discount box.", "Apply the code and verify the reduced total."]} tips={["Include the hyphen in THRIVETOOLS-10.", "Use the code on the official StyrianGold shop.", "If an item is already discounted, compare the available totals."]} faqs={[
    { q: "What is the StyrianGold discount code?", a: "The verified code is THRIVETOOLS-10." },
    { q: "Where do I enter THRIVETOOLS-10?", a: "Enter it in the discount-code field during checkout and apply it before payment." },
    { q: "What if the StyrianGold code does not work?", a: "Check the spelling and hyphen, confirm you are on the official store, and review any sale exclusions." },
  ]} />;
}