import SeasonalDealsPost, { type SeasonalDeal } from "./SeasonalDealsPost";
import hero from "@assets/generated_images/hero-black-friday-supplements.jpg";

const deals: SeasonalDeal[] = [
  {
    sourceName: "IM8", name: "IM8",
    description: "IM8 is my foundational daily-formula pick for shoppers who want one starting point rather than a shelf full of separate products. I would check the current ingredient list against what I already take before adding it to my routine.",
  },
  {
    sourceName: "Bioptimizers", name: "Bioptimizers",
    description: "Bioptimizers earns a spot for magnesium-focused shopping. If you are browsing its enzyme formulas too, check their eligibility separately: my directory link goes to Magnesium Breakthrough, not a guarantee that every product is included.",
  },
  {
    sourceName: "Timeline Mitopure", name: "Timeline MitoPure",
    description: "MitoPure is my longevity-science pick for readers specifically researching Urolithin A and mitophagy. I would compare the current format and subscription terms before choosing it, rather than treating it as another general multivitamin.",
  },
  {
    sourceName: "Equip Foods", name: "Equip Foods",
    description: "Equip Foods is the protein pick when a simpler beef-protein formula is the priority. It earns a place for readers comparing alternatives to whey, not because a holiday banner makes protein needs different.",
  },
  {
    sourceName: "Justthrivehealth", name: "Just Thrive",
    description: "Just Thrive is the spore-based probiotic option on this list. It is for readers who have already decided to explore that category; I would check the strains and suitability rather than buying on a blanket gut-health promise.",
  },
  {
    sourceName: "EnergyBits Chlorella & Spirulina", name: "EnergyBits",
    description: "EnergyBits brings chlorella and spirulina algae tablets into the selection. I would choose it for someone who wants that specific whole-food format, not as a substitute for every other supplement.",
  },
  {
    sourceName: "Organika", name: "Organika",
    description: "Organika is my functional-supplement stop for the creatine and magnesium options highlighted in my directory. I would start with the product I actually need and check the current formula before adding a bundle.",
  },
  {
    sourceName: "HyperionHerbs", name: "Hyperion Herbs",
    description: "Hyperion Herbs is the tonic-herb pick for readers comparing reishi, cordyceps and lion's mane. I would use the guide to choose the herb and format first, then check the partner code against the cart.",
  },
  {
    sourceName: "AquaOmega", name: "AquaOmega",
    description: "AquaOmega is my omega-3 category pick, with algae-based and fish-oil options listed in the directory. Its standing offer is a referral link for a first subscription, so I would check that subscription terms fit before ordering.",
  },
  {
    sourceName: "Goli", name: "Goli",
    description: "Goli is the gummy-format option for readers who prefer that over capsules or powders. I would compare the specific gummy's ingredients and serving instructions rather than assuming every formula does the same job.",
  },
];

const faqs = [
  { q: "When do Black Friday supplement deals drop in 2026?", a: "Black Friday is November 27, 2026, and Cyber Monday is November 30. Brands set their own launch dates, and some may promote earlier offers. No brand-specific Black Friday launch has been verified on this page." },
  { q: "Which brands have the best Black Friday supplement deals?", a: "My starting shortlist is IM8, Bioptimizers, Timeline MitoPure, Equip Foods, Just Thrive, EnergyBits, Organika, Hyperion Herbs, AquaOmega and Goli. These are standing partner offers, not a ranking of confirmed Black Friday prices. The best choice depends on the product you need and the final checkout total." },
  { q: "Do discount codes work during Black Friday?", a: "They may, but a brand can change eligibility or exclude sitewide sales, subscriptions or bundles. Confirm the code is accepted and review the order total before paying. No code on this page is guaranteed to stack with a seasonal promotion." },
  { q: "Are all ten offers checkout discount codes?", a: "No. Timeline MitoPure and AquaOmega are source-listed link-based offers. AquaOmega's directory offer is $30 off a first subscription through its referral link; Goli's separate code is g-745207ab6b. Do not enter a referral-offer description as a checkout code." },
  { q: "Should I buy now or wait for Cyber Monday?", a: "I would compare the standing offer with any actual seasonal terms available when I am ready to buy. There is no verified promise here that Cyber Monday will be cheaper or that today's partner offer will remain available." },
];

export default function BlackFridaySupplementDeals() {
  return <SeasonalDealsPost
    title="Best Black Friday Supplement Deals 2026"
    seoTitle="Best Black Friday Supplement Deals 2026: 10 Verified Offers"
    description="Black Friday supplement deals 2026: 10 verified partner offers, discount codes and referral links, with checkout tips and clear seasonal-sale caveats."
    canonical="/blog/black-friday-supplement-deals-2026"
    image={hero}
    imageAlt="Unbranded amber supplement bottles, a ceramic dish and a water glass on warm oak in autumn light"
    intro="Black Friday is when I revisit the supplement brands I already partner with, not when I build a new routine around a sale. Every brand below has a standing offer in my directory. Use it as a baseline while checking whether the brand announces a different holiday promotion."
    shoppingNote="I choose the product first and compare the actual cart total second. For me, a useful deal is something that fits an existing routine, with ingredients and subscription terms I understand; no claimed holiday percentage replaces that check."
    groups={[{ title: "My 10 supplement partner picks", deals }]}
    faqs={faqs}
  />;
}
