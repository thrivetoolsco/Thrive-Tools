import im8Image from "@assets/im8-faq-hero.jpg";
import equipImage from "@assets/equip-foods-faq-hero.png";
import justThriveImage from "@assets/just-thrive-faq-hero.png";
import bioptimizersImage from "@assets/bioptimizers-faq-hero.webp";
import energybitsImage from "@assets/energybits-faq-hero.jpg";

export type SupplementBrandGuide = {
  brand: string;
  slug: string;
  title: string;
  intro: string;
  body: string;
  pricing: string;
  code: string;
  href: string;
  linkText: string;
  image: string;
  imageAlt: string;
  faqs: { question: string; answer: string }[];
};

export const supplementBrandGuides: SupplementBrandGuide[] = [
  {
    brand: "IM8",
    slug: "im8-review",
    title: "IM8 Review (2026): The All-in-One Daily Supplement, Explained",
    intro: "This guide takes an in-depth look at IM8 based on the company's published information — what the brand is, its flagship formulas, and who they're designed for.",
    body: `## What is IM8?
IM8 is a premium all-in-one daily nutrition brand and a subsidiary of Prenetics. It was co-founded by David Beckham as Co-Founding Partner. The company is based in Charlotte, North Carolina.

## Flagship products
- **Daily Ultimate Essentials Pro** — an all-in-one daily powder drink with 90 ingredients. IM8 positions it as replacing 16 separate supplements and says it supports energy, digestion, sleep, and focus.
- **Daily Ultimate Longevity** — a healthy-aging formula of 10 compounds targeting what the brand describes as the 12 hallmarks of aging.
- **The Beckham Stack** — a bundle of both products as one daily ritual.

## Who is it for?
People who want a single consolidated daily supplement routine instead of managing many separate bottles — particularly those focused on energy, digestion, and healthy aging.

## What sets IM8 apart
According to the company, every product is NSF Certified for Sport, with screening for 280+ banned substances plus heavy metals and contaminants and verification of label dosages. IM8 says its formulations are informed by a scientific advisory board that includes experts from Mayo Clinic, Cedars-Sinai, and a former NASA chief scientist. The company also advertises a 90-day money-back guarantee; terms vary by plan.`,
    pricing: "As listed on the official store (September 2026): Daily Ultimate Essentials Pro from $78/month, Daily Ultimate Longevity from $104/month, The Beckham Stack $183/month. Check the brand's site for current pricing.",
    code: "THRIVE10",
    href: "https://www.im8health.com/THRIVE10",
    linkText: "Shop IM8 with code THRIVE10",
    image: im8Image,
    imageAlt: "IM8 Daily Ultimate Essentials supplement pouch",
    faqs: [
      { question: "What is IM8?", answer: "IM8 is an all-in-one daily nutrition brand co-founded by David Beckham, offering consolidated supplement formulas instead of many separate products." },
      { question: "What does Daily Ultimate Essentials Pro do?", answer: "According to the brand, it's a 90-ingredient daily powder supporting energy, digestion, sleep, and focus." },
      { question: "Is IM8 third-party tested?", answer: "The company states every product is NSF Certified for Sport." },
    ],
  },
  {
    brand: "Equip Foods",
    slug: "equip-foods-review",
    title: "Equip Foods Review (2026): Clean Protein and Whole-Food Supplements",
    intro: "This guide takes an in-depth look at Equip Foods based on the company's published information — what the brand is, its flagship products, and who they're designed for.",
    body: `## What is Equip Foods?
Equip Foods is a "real food" supplement brand founded by Dr. Anthony Gustin. It describes its approach as ingredients from the farm, not the lab — no synthetics, fillers, gums, emulsifiers, seed oils, or artificial sweeteners.

## Flagship products
- **Prime Protein** — grass-fed beef protein powder with 21g complete protein per scoop and naturally occurring collagen and gelatin, according to Equip. The brand markets it as dairy-free, gut-friendly, and bloat-free.
- **Prime Bar** — grass-fed beef protein bar with colostrum.
- Also: Grass-Fed Collagen, Core Colostrum, and a kids protein line.

## Who is it for?
People avoiding dairy or whey who want animal-based protein, and shoppers who prioritize minimal, whole-food ingredient lists.

## What sets Equip Foods apart
According to the company, every batch is third-party tested for heavy metals, pesticides, glyphosate, microplastics, mycotoxins, and molds — an approach it calls "radical transparency." Equip says its formulations are doctor-developed and positions its products as best-in-class on taste.`,
    pricing: "As listed on the official store (September 2026): Prime Protein $63.99 one-time / $54.39 subscription. Check the brand's site for current pricing.",
    code: "THRIVETOOLS",
    href: "https://www.equipfoods.com/THRIVETOOLS",
    linkText: "Shop Equip Foods with code THRIVETOOLS",
    image: equipImage,
    imageAlt: "Equip Foods Prime Protein powder",
    faqs: [
      { question: "What is Equip Foods known for?", answer: "Its grass-fed beef protein powder, Prime Protein, made with whole-food ingredients and no dairy." },
      { question: "Is Prime Protein dairy-free?", answer: "Yes — it's beef-based, which the brand markets as gut-friendly and bloat-free for people avoiding whey." },
      { question: "Does Equip Foods third-party test?", answer: "The company states every batch is third-party tested for contaminants including heavy metals and microplastics." },
    ],
  },
  {
    brand: "Just Thrive",
    slug: "just-thrive-review",
    title: "Just Thrive Review (2026): Spore Probiotics and Gut Health",
    intro: "This guide takes an in-depth look at Just Thrive based on the company's published information — what the brand is, its flagship products, and who they're designed for.",
    body: `## What is Just Thrive?
Just Thrive is a gut-health supplement brand founded in 2013 by Tina and Billy Anderson, former pharmaceutical executives, after they discovered spore-probiotic research by microbiologist Kiran Krishnan. The company is based in Park Ridge, Illinois.

## Flagship products
- **Just Thrive Probiotic** — a 100% spore-based probiotic the brand describes as "guaranteed to arrive 100% alive in your gut," for digestive and immune health.
- **Core Health bundle** — Probiotic plus PREbiotic.
- Also: Vitamin K2 and a pet probiotic line.

## Who is it for?
People looking for a probiotic positioned to survive stomach acid better than standard probiotics, and those building a gut-health routine.

## What sets Just Thrive apart
According to the company, it was the first spore-based probiotic guaranteed to reach the gut 100% alive. Just Thrive says its products contain no harmful fillers and are third-party quality tested. The brand's "Bottom of the Bottle" guarantee offers a 100% money-back refund even if the bottle is empty.`,
    pricing: "As listed on the official store (September 2026): Just Thrive Probiotic $49.99 one-time / $44.99 subscription (30-day); Core Health bundle $83.99 one-time / $78.99 subscription. Check the brand's site for current pricing.",
    code: "THRIVETOOLS",
    href: "https://justthrivehealth.com/THRIVETOOLS",
    linkText: "Shop Just Thrive with code THRIVETOOLS",
    image: justThriveImage,
    imageAlt: "Just Thrive probiotic bottle",
    faqs: [
      { question: "What makes Just Thrive different from regular probiotics?", answer: "It's spore-based — the brand says the spores survive stomach acid and arrive 100% alive in the gut." },
      { question: "Who founded Just Thrive?", answer: "Tina and Billy Anderson, who launched the brand in 2013." },
      { question: "What is the Bottom of the Bottle guarantee?", answer: "The company's 100% money-back guarantee — a refund even if the bottle is empty." },
    ],
  },
  {
    brand: "Bioptimizers",
    slug: "bioptimizers-review",
    title: "Bioptimizers Review (2026): Magnesium and Digestive Health Formulas",
    intro: "This guide takes an in-depth look at Bioptimizers based on the company's published information — what the brand is, its flagship products, and who they're designed for.",
    body: `## What is Bioptimizers?
Bioptimizers is a performance- and digestion-focused supplement brand co-founded by Matt Gallant (CEO, health author, kinesiologist) and Wade Lightheart (president, 3-time national natural bodybuilding champion).

## Flagship products
- **MassZymes** — a full-spectrum digestive enzyme blend (protease, lipase, amylase, and others) marketed for digestion and nutrient absorption.
- **Magnesium Breakthrough** — a blend of 7 forms of magnesium (glycinate, citrate, taurate, chelate, orotate, malate, and Sucrosomial), according to the company.
- Also: Probiotic Breakthrough, kApex, and Cognibiotics.

## Who is it for?
People focused on digestion and nutrient absorption, and those seeking a multi-form magnesium supplement.

## What sets Bioptimizers apart
According to the company, it runs an in-house research lab based at the University of Sarajevo conducting formulation experiments on enzymes and probiotics. Bioptimizers also says its founders bring 60+ years of combined experience in fitness and nutrition.`,
    pricing: "As listed on the official store (September 2026): MassZymes (250 caps) $59.99; Magnesium Breakthrough (60 caps) $39.99. Check the brand's site for current pricing.",
    code: "THRIVETOOLS",
    href: "https://bioptimizers.com/shop/products/magnesium-breakthrough",
    linkText: "Shop Bioptimizers with code THRIVETOOLS",
    image: bioptimizersImage,
    imageAlt: "Bioptimizers Magnesium Breakthrough supplement",
    faqs: [
      { question: "What is Bioptimizers best known for?", answer: "Its digestive enzyme blend MassZymes and its 7-form magnesium formula, Magnesium Breakthrough." },
      { question: "Who founded Bioptimizers?", answer: "Matt Gallant and Wade Lightheart." },
      { question: "How many types of magnesium are in Magnesium Breakthrough?", answer: "Seven, according to the company: glycinate, citrate, taurate, chelate, orotate, malate, and Sucrosomial." },
    ],
  },
  {
    brand: "EnergyBits",
    slug: "energybits-review",
    title: "EnergyBits Review (2026): Algae Nutrition, Explained",
    intro: "This guide takes an in-depth look at EnergyBits based on the company's published information — what the brand is, its flagship products, and who they're designed for.",
    body: `## What is EnergyBits?
EnergyBits is an algae-tablet nutrition brand founded by CEO Catharine Arnston, who started the company after researching alkaline foods for her sister following a breast cancer diagnosis. The company is based in Miami, Florida.

## Flagship products
- **ENERGYbits** — 100% spirulina tablets the brand markets for sustainable energy and mental focus.
- **RECOVERYbits** — 100% chlorella tablets the brand markets for detoxification, immune health, and muscle recovery.
- **VITALITYbits** — a 50/50 spirulina-chlorella blend.
- **BEAUTYbits** — spirulina tablets the brand markets for skin, hair, and nails.
According to the company, all are single-ingredient tablets with no caffeine, sugar, soy, or gluten.

## Who is it for?
People seeking plant-based, whole-food nutrition — particularly those interested in algae as a protein and micronutrient source.

## What sets EnergyBits apart
According to the company, its products contain one ingredient — 100% algae. EnergyBits says spirulina is 64% protein, which it compares to 3x the protein of steak, and contains 40+ vitamins and minerals. The brand says its algae is grown in freshwater tanks in Taiwan, is non-GMO, and describes itself as the only algae company conducting third-party lab testing in the USA for purity (heavy metals, pesticides, toxins).`,
    pricing: "As listed on the official store (September 2026): large bag (1,000 tablets) $130 ($104 subscription); sample pack (120 tablets) $25. Check the brand's site for current pricing.",
    code: "THRIVE25",
    href: "https://energybits.com/discount/THRIVE25?rfsn=9026872.b2b124&utm_source=refersion&utm_medium=affiliate&utm_campaign=9026872.b2b124",
    linkText: "Shop EnergyBits with code THRIVE25",
    image: energybitsImage,
    imageAlt: "EnergyBits algae tablets",
    faqs: [
      { question: "What are EnergyBits made of?", answer: "100% algae — spirulina, chlorella, or a blend — with no other ingredients, according to the company." },
      { question: "Do EnergyBits contain caffeine?", answer: "No — the brand positions them as a caffeine-free energy source." },
      { question: "Who founded EnergyBits?", answer: "Catharine Arnston." },
    ],
  },
];