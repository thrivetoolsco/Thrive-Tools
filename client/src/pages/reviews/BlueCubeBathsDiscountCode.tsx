import DiscountCodeArticle from "./DiscountCodeArticle";
import heroImg from "@assets/bluecubebaths-discount-code-hero.jpg";

export default function BlueCubeBathsDiscountCode() {
  return <DiscountCodeArticle brand="BlueCubeBaths" slug="bluecubebaths-discount-code" heroImg={heroImg} imageAlt="BlueCubeBaths cold plunge tub" href="https://bluecubebaths.com/?ref=CM-ZEsM_ayIJbh" code="thrive35" description="Use BlueCubeBaths discount code thrive35 to get a $250 discount on an eligible cold plunge purchase." shortAnswer="Use code thrive35 at BlueCubeBaths checkout to get a $250 discount on an eligible order. Enter the code in lowercase as listed, then click apply." steps={["Open BlueCubeBaths through the verified affiliate link.", "Choose your cold plunge and add it to your cart.", "Enter thrive35 in the checkout discount field.", "Apply the code and confirm the $250 discount before paying."]} tips={["The verified code is thrive35.", "Confirm the $250 reduction in the final order summary.", "Some sale configurations or products may have separate terms."]} includeFaqSchema faqs={[
    { q: "What is the BlueCubeBaths discount code?", a: "Use thrive35 to get a $250 discount on an eligible order." },
    { q: "Where do I enter thrive35?", a: "Enter it in the discount-code field during BlueCubeBaths checkout." },
    { q: "Can I stack the $250 discount?", a: "BlueCubeBaths generally controls one promotion per order. Compare any sale price with the code total." },
  ]} />;
}